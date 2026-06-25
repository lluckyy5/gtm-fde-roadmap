import { Background } from "@/components/background";
import { RoadmapBuild } from "@/components/blocks/roadmap-build";
import { RoadmapCerts } from "@/components/blocks/roadmap-certs";
import { RoadmapCTA } from "@/components/blocks/roadmap-cta";
import { RoadmapHero } from "@/components/blocks/roadmap-hero";
import { RoadmapReality } from "@/components/blocks/roadmap-reality";
import { RoadmapRoles } from "@/components/blocks/roadmap-roles";
import { RoadmapTimeline } from "@/components/blocks/roadmap-timeline";
import { RoadmapTracks } from "@/components/blocks/roadmap-tracks";

export default function Home() {
  return (
    <>
      <Background className="via-muted to-muted/80">
        <RoadmapHero />
        <RoadmapTracks />
      </Background>
      <RoadmapReality />
      <RoadmapRoles />
      <RoadmapCerts />
      <RoadmapBuild />
      <RoadmapTimeline />
      <Background variant="bottom">
        <RoadmapCTA />
      </Background>
    </>
  );
}
