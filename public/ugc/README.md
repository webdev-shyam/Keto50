# UGC video slot

Drop your UGC video here as:

```
keto-after-50-desserts.mp4
```

The hero section detects it automatically at runtime and plays it:

- muted
- `playsInline`
- looped
- poster = the hero dessert photo
- controls shown

If the file is missing (or fails to load), the hero gracefully falls back to
the dessert photo — no layout shift, no broken element.

### Video specs (recommended)

- Format: MP4 (H.264)
- Portrait, roughly 4:5 (e.g. 1080×1350) — it is shown in a 4:5 frame
- Length: 10–30 seconds, loop-friendly
- Size: keep it under ~5–8 MB for fast loading on mobile
- The site never autoplays it with sound (browser rules + muted attribute)
