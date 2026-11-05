import toast from "react-hot-toast";
import { useAudioStore } from "~/stores/audio-store";
import type { ServiceType } from "~/types/services";
// Demo only: every preview plays the same bundled chime, without AI requests.
export function playDemoAudio(title: string, voice: string | null, service: ServiceType) {
  toast("Demo preview only. This sample chime is not AI-generated audio.");
  useAudioStore.getState().playAudio({
    id: "demo-preview", title: `Demo · ${title.slice(0, 50)}`, voice,
    audioUrl: "/audio/demo-chime.wav", service, createdAt: "Demo preview",
  });
}
