import { PageLayout } from "~/components/client/page-layout";
import { TextToSpeechEditor } from "~/components/client/speech-synthesis/text-to-speech-editor";
import { getHistoryItems } from "~/lib/history";
export default function Page() {
  return <PageLayout title="Text to Speech" service="styletts2" showSidebar historyItems={getHistoryItems("styletts2")}>
    <TextToSpeechEditor service="styletts2" credits={10000} />
  </PageLayout>;
}
