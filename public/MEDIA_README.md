# Media Files

This folder contains personal photos and videos.

## Adding Media

1. **Photos**: Add to `public/photos/`
   - Recommended format: JPG or WebP
   - Optimize images before adding (compress to reduce file size)
   - Update `src/data/photos.ts` with file names

2. **Videos**: Add to `public/videos/`
   - Recommended format: MP4 (H.264 codec)
   - Keep file sizes reasonable (under 50MB per video)
   - Update `src/data/videos.ts` with file names

## File Naming

Use simple, descriptive names:
- `photo1.jpg`, `photo2.jpg`, etc.
- `moment1.mp4`, `moment2.mp4`, etc.

## Privacy Note

**Do not commit these files to git if they contain sensitive content.**

Add this to your `.gitignore`:
```
public/photos/*
public/videos/*
!public/photos/.gitkeep
!public/videos/.gitkeep
```
