import { PageLayout } from "~/components/client/page-layout";
import { SoundEffectsGenerator } from "~/components/client/sound-effects/sound-effects-generator";
export default function Page() {
  return <PageLayout title="Sound Effects" service="make-an-audio" showSidebar={false} tabs={[
    { name: "Generate", path: "/app/sound-effects/generate" },
    { name: "History", path: "/app/sound-effects/history" },
  ]}><SoundEffectsGenerator credits={10000} /></PageLayout>;
}
