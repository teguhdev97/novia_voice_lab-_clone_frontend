# Novia Voice Lab — Frontend Preview

Standalone Next.js frontend extracted and adapted from [BernieTv/ElevenLabs-Clone](https://github.com/BernieTv/ElevenLabs-Clone), source commit `5c3aff322c172ae714c57e930057065982f9f8a8`.
The original MIT license is retained in LICENSE.

## Run locally

Use Node.js 22 or newer.

```sh
npm ci
npm run dev
```

Open http://localhost:3000. No environment variables or external services are required.

```sh
npm run typecheck
npm run build
npm start
```

## Preview routes

- `/` and `/app/speech-synthesis/text-to-speech`: text editor and prompt examples.
- `/app/speech-synthesis/speech-to-speech`: local MP3/WAV selection (no upload).
- `/app/sound-effects/generate`: sound prompt editor and examples.
- `/app/sound-effects/history`: sample history.

The original sidebar, voice selector, mobile settings, history panels and audio player remain available. All generate buttons play the same bundled four-second sample chime. The selected voice does not change that sample. No AI inference or voice conversion occurs. Files never leave the browser. Credits and history are static examples; previews are not saved.

Auth.js, Prisma, AWS/S3, Inngest, server actions, AI model folders and external backend integrations are excluded. Root directory for Vercel is the repository root; framework is Next.js. No secrets are needed.
