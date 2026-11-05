import { PageLayout } from "~/components/client/page-layout";
import { VoiceChanger } from "~/components/client/speech-synthesis/voice-changer";
import { getHistoryItems } from "~/lib/history";
export default function Page() {
  return <PageLayout title="Voice Changer" service="seedvc" showSidebar historyItems={getHistoryItems("seedvc")}>
    <VoiceChanger service="seedvc" credits={10000} />
  </PageLayout>;
}
