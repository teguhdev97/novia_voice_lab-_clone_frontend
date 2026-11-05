import type { ServiceType } from "~/types/services";
export interface HistoryItem {
  id: string;
  title: string;
  voice: string | null;
  audioUrl: string;
  service: ServiceType;
  date: string;
  time: string;
}
export function getHistoryItems(service: ServiceType): HistoryItem[] {
  const titles = service === "make-an-audio"
    ? ["Demo · Forest ambience", "Demo · Heavy rainstorm", "Demo · Ocean waves"]
    : service === "seedvc"
    ? ["Demo · Voice conversion preview", "Demo · Podcast introduction"]
    : ["Demo · Guide a meditation class", "Demo · Narrate a story", "Demo · Introduce your podcast"];
  return titles.map((title, i) => ({
    id: `${service}-${i}`, title, voice: service === "make-an-audio" ? null : i % 2 ? "woman" : "andreas",
    audioUrl: "/audio/demo-chime.wav", service, date: "Sample history", time: "0:04",
  }));
}
