import { useEffect, useRef, useState } from "react";
import { SkipBack, SkipForward, Play, Pause, Shuffle, Volume2, VolumeX } from "lucide-react";

/**
 * AudioPlayerBar — sticky, full-width bottom audio player, modeled on the live
 * Sonaar sticky player (`#sonaar-player.srt_sticky-player` in the capture):
 * black bar, brand-purple top border, circular artwork, metadata, transport
 * controls, time readouts, a wavesurfer waveform, and a volume control.
 *
 * Phase 1: a single track played through wavesurfer.js (waveform + playback
 * engine). Prev / Next / Shuffle are rendered as real controls but inert until
 * Phase 2 adds the playlist.
 *
 * Persistence: this component is mounted ONCE at the router root (sibling of
 * <Outlet/> in __root.tsx), so the single wavesurfer instance survives
 * client-side navigation and keeps playing across pages.
 *
 * CORS fallback: wavesurfer fetches the audio to draw the waveform. If that
 * fetch is blocked by CORS, we fall back to plain HTML5 playback (controls
 * still work, no waveform) and surface a small notice so we know to proxy /
 * self-host the file.
 */

const TRACK = {
  src: "https://soul2soulsjazz.com/wp-content/uploads/2025/08/website-script-soul2souls.mp3",
  title: "DJ Perry AKA JazzAmp",
  subtitle: "Welcome to Soul2Souls",
  artwork: "/images/player-artwork.webp",
};

function formatTime(seconds: number): string {
  if (!Number.isFinite(seconds) || seconds < 0) seconds = 0;
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
}

export function AudioPlayerBar() {
  const waveContainerRef = useRef<HTMLDivElement | null>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const wsRef = useRef<any>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const [isReady, setIsReady] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(1);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  // null = still loading; true = waveform OK; false = CORS fallback (HTML5 only)
  const [hasWaveform, setHasWaveform] = useState<boolean | null>(null);
  // Load-entrance: parked below the viewport, then slides up ~1s after load.
  const [entered, setEntered] = useState(false);

  // Entrance animation (mirrors the capture's `.srt_sticky-player.enable`,
  // toggled ~1s after load). This component is mounted once at the router root
  // and never unmounts on client-side navigation, so this effect runs exactly
  // once on initial load and does NOT replay on route changes.
  useEffect(() => {
    const t = setTimeout(() => setEntered(true), 1000);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (!waveContainerRef.current) return;
    let destroyed = false;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let ws: any = null;

    // Own the media element so we can set crossOrigin for CORS playback/decoding.
    const audio = new Audio();
    audio.crossOrigin = "anonymous";
    audio.preload = "metadata";
    audio.src = TRACK.src;
    audioRef.current = audio;

    (async () => {
      const WaveSurfer = (await import("wavesurfer.js")).default;
      if (destroyed || !waveContainerRef.current) return;

      ws = WaveSurfer.create({
        container: waveContainerRef.current,
        media: audio,
        height: 40,
        waveColor: "#6a7973", // capture: wave-base fill rgb(106,121,115)
        progressColor: "#ffffff", // capture: wave-progress fill rgb(255,255,255)
        cursorColor: "transparent",
        barWidth: 2,
        barGap: 1,
        barRadius: 0,
        normalize: true,
      });
      wsRef.current = ws;

      ws.on("ready", () => {
        setIsReady(true);
        setHasWaveform(true);
        setDuration(ws.getDuration());
      });
      ws.on("play", () => setIsPlaying(true));
      ws.on("pause", () => setIsPlaying(false));
      ws.on("finish", () => setIsPlaying(false));
      ws.on("timeupdate", (t: number) => setCurrentTime(t));
      // If wavesurfer can't fetch/decode the audio (e.g. CORS), keep HTML5
      // playback working without the waveform.
      ws.on("error", () => {
        if (destroyed) return;
        setHasWaveform(false);
        wireFallback(audio);
      });
    })();

    function wireFallback(el: HTMLAudioElement) {
      el.addEventListener("loadedmetadata", () => setDuration(el.duration));
      el.addEventListener("timeupdate", () => setCurrentTime(el.currentTime));
      el.addEventListener("play", () => setIsPlaying(true));
      el.addEventListener("pause", () => setIsPlaying(false));
      el.addEventListener("ended", () => setIsPlaying(false));
      setIsReady(true);
    }

    return () => {
      destroyed = true;
      try {
        ws?.destroy();
      } catch {
        /* no-op */
      }
      audio.pause();
      audio.src = "";
      wsRef.current = null;
      audioRef.current = null;
    };
  }, []);

  function togglePlay() {
    const ws = wsRef.current;
    if (hasWaveform && ws) {
      ws.playPause();
    } else if (audioRef.current) {
      if (audioRef.current.paused) void audioRef.current.play();
      else audioRef.current.pause();
    }
  }

  function toggleMute() {
    const next = !isMuted;
    setIsMuted(next);
    const ws = wsRef.current;
    if (hasWaveform && ws) ws.setMuted(next);
    else if (audioRef.current) audioRef.current.muted = next;
  }

  function onVolume(v: number) {
    setVolume(v);
    setIsMuted(v === 0);
    const ws = wsRef.current;
    if (hasWaveform && ws) ws.setVolume(v);
    else if (audioRef.current) audioRef.current.volume = v;
  }

  const remaining = duration ? duration - currentTime : 0;

  return (
    <div
      role="region"
      aria-label="Audio player"
      // Entrance: starts parked below the viewport (translateY(100%)) and slides
      // up to translateY(0) over 500ms ease-out once `entered` flips ~1s after
      // load — matching the capture's `.srt_sticky-player.enable` transition.
      className={`fixed inset-x-0 bottom-0 z-[8010] h-[90px] border-t-2 border-brand-purple bg-black text-white transition-transform duration-500 ease-out will-change-transform ${
        entered ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="mx-auto flex h-full max-w-[1600px] items-center gap-3 px-3 sm:gap-4 sm:px-4">
        {/* Circular album artwork. NOTE: the live Sonaar player is configured
            "sonaar-no-artwork" (artwork loads from the playlist via JS); using
            the Soul2Souls album badge (capture image 58.webp) as a stand-in. */}
        <img
          src={TRACK.artwork}
          alt=""
          aria-hidden="true"
          className="size-[56px] shrink-0 rounded-full object-cover"
        />

        {/* Metadata: title over subtitle */}
        <div className="hidden min-w-0 w-[180px] shrink-0 sm:block">
          <p className="truncate font-abel text-[18px] font-bold leading-tight">{TRACK.title}</p>
          <p className="truncate font-abel text-[13px] leading-tight text-white/70">
            {TRACK.subtitle}
          </p>
        </div>

        {/* Transport controls */}
        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          {/* TODO(Phase 2): enable prev/next/shuffle once the playlist exists. */}
          <button type="button" aria-label="Previous track" disabled className="text-white/40">
            <SkipBack className="size-5" fill="currentColor" aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={togglePlay}
            aria-label={isPlaying ? "Pause" : "Play"}
            className="flex size-12 items-center justify-center rounded-full bg-brand-purple text-white transition-colors hover:bg-brand-purple-hover"
          >
            {isPlaying ? (
              <Pause className="size-5" fill="currentColor" aria-hidden="true" />
            ) : (
              <Play className="size-5 translate-x-px" fill="currentColor" aria-hidden="true" />
            )}
          </button>
          <button type="button" aria-label="Next track" disabled className="text-white/40">
            <SkipForward className="size-5" fill="currentColor" aria-hidden="true" />
          </button>
          <button
            type="button"
            aria-label="Shuffle"
            disabled
            className="hidden text-white/40 sm:block"
          >
            <Shuffle className="size-[18px]" aria-hidden="true" />
          </button>
        </div>

        {/* Current time */}
        <span className="shrink-0 font-abel text-xs tabular-nums text-white/80">
          {formatTime(currentTime)}
        </span>

        {/* Waveform (wide middle/right). Falls back to a thin progress bar if
            wavesurfer can't draw the waveform (CORS). */}
        <div className="relative min-w-0 flex-1">
          <div ref={waveContainerRef} className="w-full" aria-hidden="true" />
          {hasWaveform === false && (
            <>
              <div className="h-1 w-full overflow-hidden rounded-full bg-white/20">
                <div
                  className="h-full bg-brand-purple"
                  style={{ width: duration ? `${(currentTime / duration) * 100}%` : "0%" }}
                />
              </div>
              <p className="mt-1 text-[10px] leading-none text-amber-400">
                Waveform unavailable (audio CORS blocked) — playback still works. TODO: proxy or
                self-host the MP3.
              </p>
            </>
          )}
        </div>

        {/* Remaining time (counts down) */}
        <span className="shrink-0 font-abel text-xs tabular-nums text-white/80">
          -{formatTime(remaining)}
        </span>

        {/* Volume: click to mute/unmute, slider on hover */}
        <div className="group relative shrink-0">
          <button
            type="button"
            onClick={toggleMute}
            aria-label={isMuted ? "Unmute" : "Mute"}
            className="text-white transition-colors hover:text-white/70"
          >
            {isMuted || volume === 0 ? (
              <VolumeX className="size-5" aria-hidden="true" />
            ) : (
              <Volume2 className="size-5" aria-hidden="true" />
            )}
          </button>
          <div className="absolute bottom-full left-1/2 mb-2 hidden -translate-x-1/2 rounded bg-neutral-900 p-2 shadow-lg group-hover:block">
            <input
              type="range"
              min={0}
              max={1}
              step={0.05}
              value={isMuted ? 0 : volume}
              onChange={(e) => onVolume(Number(e.target.value))}
              aria-label="Volume"
              className="h-1 w-24 accent-brand-purple"
            />
          </div>
        </div>

        {!isReady && (
          <span className="sr-only" role="status">
            Loading audio…
          </span>
        )}
      </div>
    </div>
  );
}
