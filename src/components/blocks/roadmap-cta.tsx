import { LocationMap } from "@/components/blocks/location-map";
import { DashedLine } from "@/components/dashed-line";

export const RoadmapCTA = () => {
  return (
    <section className="py-20 lg:py-32">
      <div className="container">
        <div className="relative flex items-center justify-center mb-16">
          <DashedLine className="text-muted-foreground" />
          <span className="bg-background text-muted-foreground absolute px-3 font-mono text-sm font-medium tracking-wide max-md:hidden">
            YOUR MOVE THIS WEEK
          </span>
        </div>

        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Text */}
          <div>
            <h2 className="text-foreground mb-4 text-3xl tracking-tight md:text-4xl lg:text-5xl">
              Don't start with the cert.
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Start Project 1 and book the AI Practitioner exam. The booked exam creates a deadline; Project 1 creates your first piece of proof and your first LinkedIn build post. Certify, Build, Position run together — but the build is what makes you hireable, so it leads.
            </p>
            <div className="border-border bg-muted rounded-2xl border p-6">
              <p className="text-muted-foreground text-sm leading-relaxed">
                The difference between you and thousands reading the same PDFs: they'll tweak their resume.{" "}
                <span className="text-foreground font-medium">
                  You'll ship something, add an eval layer nobody else thinks of, and send it. That's the whole game.
                </span>
              </p>
            </div>
          </div>

          {/* Map + attribution */}
          <div className="flex flex-col items-start gap-8">
            <LocationMap
              location="Bangalore, India"
              coordinates="12.9716° N, 77.5946° E"
            />
            <div className="space-y-1">
              <p className="text-foreground text-sm font-medium">Ankit Vishwakarma</p>
              <p className="text-muted-foreground text-xs">Senior Software Engineer (APM/Observability) · illumifin</p>
              <p className="text-muted-foreground text-xs">Built June 2026 · Horizon: Month 12</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
