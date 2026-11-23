# Linn Let Htat | Magical 8th Birthday World

React 18 + Vite + React Three Fiber + Drei + Three.js birthday garden. Built for 23 November 2026.

## Run

```sh
npm install
npm run dev
npm run build
npm run preview
```

Vercel: Framework **Vite**, build command `npm run build`, output directory `dist`. The GitHub-connected Vercel project deploys `main` automatically.

## Mobile behavior

- WebGL capability gate and festive non-WebGL fallback; React error boundary and Suspense fallback.
- WebGL context-loss fallback and manual retry, context restoration listeners with cleanup.
- Canvas frame loop disabled while the document is hidden; dash timer pauses on visibility change.
- Dynamic pixel ratio: mobile 1–1.5, desktop up to 2 in high quality. Eco mode lowers DPR and disables shadows.
- 44px touch targets, safe-area insets, 100dvh, accessible wishes and mute-by-default Web Audio.
- Procedural scene geometry; no remote HDRI or texture dependency. Google Fonts are optional and system fonts provide fallback.

## Known limitations / testing

- No guarantee of 60fps on every GPU. Use Eco mode on older iPhones.
- iOS Chrome and Safari both use WebKit; test real devices, thermal throttling, tab background/restore and app switching.
- Full npm build, ESLint and physical-device testing require dependencies and devices; a TypeScript JSX syntax transpile check alone is not a full build.
- In-game score uses state; the full game should be browser-tested for collisions and camera framing.
- The birthday card is generated artwork. The included Sonic image is supplied by the user.
