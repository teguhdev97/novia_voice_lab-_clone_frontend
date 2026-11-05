import { PageLayout } from "~/components/client/page-layout";
import { HistoryList } from "~/components/client/sound-effects/history-list";
import { getHistoryItems } from "~/lib/history";
export default function Page() {
  return <PageLayout title="Sound Effects" service="make-an-audio" showSidebar={false} tabs={[
    { name: "Generate", path: "/app/sound-effects/generate" },
    { name: "History", path: "/app/sound-effects/history" },
  ]}><HistoryList historyItems={getHistoryItems("make-an-audio")} /></PageLayout>;
}
