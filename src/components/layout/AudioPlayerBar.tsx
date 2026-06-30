import { Play } from "lucide-react";

/**
 * AudioPlayerBar — static placeholder for the Sonaar sticky audio player
 * (`#sonaar-player.srt_sticky-player` in the capture).
 *
 * Matches the real player's shell only: fixed to the bottom, full width,
 * 90px tall, black background with a brand-purple top border, Abel metadata
 * text. The actual playback engine is intentionally NOT implemented yet.
 */
export function AudioPlayerBar() {
  return (
    <div
      role="region"
      aria-label="Audio player (placeholder)"
      className="fixed inset-x-0 bottom-0 z-[8010] h-[90px] border-t-2 border-brand-purple bg-black text-white"
    >
      <div className="mx-auto flex h-full max-w-[var(--container-boxed)] items-center gap-4 px-4">
        <button
          type="button"
          aria-label="Play"
          className="flex size-12 shrink-0 items-center justify-center rounded-full bg-brand-purple transition-colors hover:bg-brand-purple-hover"
        >
          <Play className="size-5" fill="currentColor" aria-hidden="true" />
        </button>

        <div className="min-w-0 flex-1">
          <p className="truncate font-abel text-[18px] leading-tight text-white">
            Soul 2 Souls Jazz
          </p>
          {/* Inert progress track — visual stand-in for the wavesurfer timeline. */}
          <div className="mt-2 flex items-center gap-3">
            <span className="font-abel text-xs text-white/70">00:00</span>
            <div className="h-1 flex-1 overflow-hidden rounded-full bg-white/20">
              <div className="h-full w-0 bg-brand-purple" />
            </div>
            <span className="font-abel text-xs text-white/70">-00:00</span>
          </div>
        </div>
      </div>
    </div>
  );
}
