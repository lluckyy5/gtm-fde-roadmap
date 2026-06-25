import { Background } from "@/components/background";
import { RoadmapHero } from "@/components/blocks/roadmap-hero";
import { RoadmapTracks } from "@/components/blocks/roadmap-tracks";
import { RoadmapReality } from "@/components/blocks/roadmap-reality";
import { RoadmapRoles } from "@/components/blocks/roadmap-roles";
import { RoadmapCerts } from "@/components/blocks/roadmap-certs";
import { RoadmapBuild } from "@/components/blocks/roadmap-build";
import { RoadmapTimeline } from "@/components/blocks/roadmap-timeline";
import { RoadmapCTA } from "@/components/blocks/roadmap-cta";

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
