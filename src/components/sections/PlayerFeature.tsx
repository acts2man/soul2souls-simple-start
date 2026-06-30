import { SkipBack, Play, SkipForward } from "lucide-react";

/**
 * PlayerFeature — inline album music player (capture: Elementor section 574c860,
 * widget e6b8df3 "music-player" = Sonaar iron_music_player, album 6336). Light
 * band (transparent → page background #f9f9f9).
 *
 * This widget is JS-driven (it streams a playlist and renders a live waveform).
 * Per task scope it is rendered as a STATIC placeholder — controls + an inert
 * waveform stand-in — matching the capture's no-JS fallback (faint
 * previous/play/next controls).
 *
 * TODO: wire the real Sonaar/album player (playlist albums=6336) when the audio
 * player work is done.
 */
export function PlayerFeature() {
  return (
    <section className="px-4 py-[40px]">
      <div className="mx-auto flex max-w-[900px] items-center gap-5">
        {/* Album art placeholder */}
        <div className="size-16 shrink-0 rounded-md bg-e-light" aria-hidden="true" />

        <div className="min-w-0 flex-1">
          <p className="truncate font-abel text-[18px] text-black">
            Soul2SoulsJazz — Featured Album
          </p>
          {/* Inert waveform stand-in */}
          <div className="mt-2 flex items-center gap-3">
            <span className="text-xs text-e-gray">00:00</span>
            <div className="h-6 flex-1 overflow-hidden rounded bg-e-light">
              <div className="h-full w-0 bg-brand-purple/30" />
            </div>
            <span className="text-xs text-e-gray">00:00</span>
          </div>
        </div>

        {/* Transport controls */}
        <div className="flex shrink-0 items-center gap-4 text-brand-purple">
          <button type="button" aria-label="Previous track">
            <SkipBack className="size-5" fill="currentColor" aria-hidden="true" />
          </button>
          <button
            type="button"
            aria-label="Play"
            className="flex size-12 items-center justify-center rounded-full bg-brand-purple text-white"
          >
            <Play className="size-5" fill="currentColor" aria-hidden="true" />
          </button>
          <button type="button" aria-label="Next track">
            <SkipForward className="size-5" fill="currentColor" aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  );
}
