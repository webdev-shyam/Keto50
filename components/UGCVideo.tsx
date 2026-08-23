"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

/**
 * Optional UGC video for the hero.
 * Loads /public/ugc/keto-after-50-desserts.mp4 and gracefully falls back
 * to the hero photo when the video file is not present (or fails to load).
 *
 * HOW THE VIDEO FITS:
 * The frame automatically adopts YOUR video's real aspect ratio
 * (read from the file's metadata), so any video — portrait 9:16,
 * square 1:1, 4:5, landscape 16:9 — fills the card edge-to-edge
 * WITHOUT being cropped or letterboxed.
 *
 * Want a fixed frame instead?
 * Set UGC_VIDEO_ASPECT_RATIO below to the ratio you prefer (the video is
 * then center-cropped to that shape). Examples:
 *   9:16 → 0.5625 · 2:3 → 0.667 · 4:5 → 0.8 · 1:1 → 1 · 4:3 → 1.333 · 16:9 → 1.7778
 *
 * AUTOPLAY: the video plays automatically, muted, inline and looped
 * (it never autoplays WITH sound). To disable autoplay, remove the
 * `autoPlay` attribute below.
 */
const UGC_VIDEO_SRC = "/ugc/keto-after-50-desserts.mp4";

/**
 * Optional manual override for the frame's aspect ratio (width ÷ height).
 * Leave as null to auto-detect the ratio from your video file (recommended).
 */
const UGC_VIDEO_ASPECT_RATIO: number | null = null;

/** Frame ratio used for the photo fallback (4:5). */
const FALLBACK_ASPECT_RATIO = 0.8;

/** Auto-detected ratios are clamped to this range to keep the hero stable. */
const MIN_ASPECT_RATIO = 0.5; // 1:2 — very tall vertical video
const MAX_ASPECT_RATIO = 1.8; // ~16:9 — wide landscape video

function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}

interface UGCVideoProps {
  fallbackSrc: string;
  fallbackAlt: string;
  priority?: boolean;
  sizes?: string;
  className?: string;
}

export default function UGCVideo({
  fallbackSrc,
  fallbackAlt,
  priority = false,
  sizes = "90vw",
  className,
}: UGCVideoProps) {
  const [hasVideo, setHasVideo] = useState<boolean | null>(null);
  const [videoAspect, setVideoAspect] = useState<number | null>(null);

  useEffect(() => {
    let cancelled = false;
    fetch(UGC_VIDEO_SRC, { method: "HEAD" })
      .then((res) => {
        if (!cancelled) setHasVideo(res.ok);
      })
      .catch(() => {
        if (!cancelled) setHasVideo(false);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  const aspectRatio =
    UGC_VIDEO_ASPECT_RATIO ??
    clamp(
      videoAspect ?? FALLBACK_ASPECT_RATIO,
      MIN_ASPECT_RATIO,
      MAX_ASPECT_RATIO,
    );

  return (
    <div
      className={cn("relative w-full overflow-hidden", className)}
      style={{ aspectRatio: String(aspectRatio) }}
    >
      {hasVideo === true ? (
        <video
          className="absolute inset-0 h-full w-full object-cover"
          muted
          playsInline
          loop
          autoPlay
          preload="metadata"
          poster={fallbackSrc}
          onLoadedMetadata={(event) => {
            const video = event.currentTarget;
            if (video.videoWidth > 0 && video.videoHeight > 0) {
              setVideoAspect(video.videoWidth / video.videoHeight);
            }
          }}
          onError={() => setHasVideo(false)}
          aria-label="Short video preview of keto-friendly dessert ideas"
        >
          <source src={UGC_VIDEO_SRC} type="video/mp4" />
        </video>
      ) : (
        <Image
          src={fallbackSrc}
          alt={fallbackAlt}
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover"
        />
      )}
    </div>
  );
}
