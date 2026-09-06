# Replaceable assets

The site currently uses original, code-based placeholder visuals so there are no unlicensed image dependencies.

- Add your profile image as `profile-placeholder.png` (or update its eventual path in the component that uses it).
- Put TOR System screenshots and diagrams in `tor-system/`.
- Put BAYANI screenshots, approved artwork, video thumbnails, and logos in `bayani/`.

Once an image is added, update `src/components/ProjectVisual.tsx` or replace that placeholder component on the relevant project card/detail page with an `<img>` element. Project details themselves live in `src/data/projects.ts`.
