# Linn Let Htat — Magical 8th Birthday World

Birthday: **23 November 2026** · Born **23 November 2018**.

Interactive React / Vite / React Three Fiber 3D birthday garden: 8 wish balloons, cake with 8 candles, three gifts, twilight wish lanterns and a 30-second three-lane ring dash with a clearly visible 3D runner.

## Development

```sh
npm install
npm run dev
npm run build
npm run preview
```

## Deployment

Vercel: Vite framework, `npm run build`, `dist` output, Node.js 22. Connected GitHub `main` branch triggers production. All 3D models are procedural and render without external model requests.

## Controls

Desktop: drag/scroll in garden, arrows or A/D in dash; P / Space to pause. Mobile: swipe, tap navigation, LEFT / RIGHT controls. Audio only starts on direct interactions. Lantern wishes remain on the device in memory. The best ring score uses localStorage.

## Performance

WebGL is required; lower-quality mode reduces shadows, antialiasing and device pixel ratio. Respect reduced-motion settings. No microphone permission or account registration.
