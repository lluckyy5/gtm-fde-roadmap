import { DashedLine } from "@/components/dashed-line";

export const RoadmapHero = () => {
  return (
    <section className="pt-28 pb-0 lg:pt-36">
      <div className="container">
        <div className="flex flex-col items-start gap-6 md:gap-8">
          {/* Badge */}
          <div className="border-border bg-muted text-muted-foreground inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-medium">
            <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />
            Built June 2026 · illumifin → GTM / FDE · 6-Month Horizon
          </div>

          {/* Headline */}
          <div className="max-w-4xl">
            <h1 className="text-foreground text-4xl tracking-tight md:text-5xl lg:text-6xl xl:text-7xl">
              GTM Engineer +{" "}
              <span className="text-muted-foreground">Forward Deployed</span>
            </h1>
            <p className="text-muted-foreground mt-4 text-xl md:text-2xl lg:text-3xl">
              Your Spoonfed Roadmap
            </p>
          </div>

          {/* Attribution */}
          <p className="text-muted-foreground font-mono text-xs uppercase tracking-widest">
            Ankit Vishwakarma · Senior Software Engineer (APM/Observability), illumifin
          </p>

          {/* Stats */}
          <div className="grid w-full max-w-xl grid-cols-3 gap-3 pt-2">
            {[
              { value: "6 months", label: "to first offers" },
              { value: "3 tracks", label: "run in parallel" },
              { value: "1 skill", label: "non-negotiable" },
            ].map((stat) => (
              <div key={stat.label} className="border-border bg-muted rounded-xl border p-4">
                <div className="text-foreground text-xl font-semibold md:text-2xl">{stat.value}</div>
                <div className="text-muted-foreground mt-1 text-xs">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Tagline */}
          <p className="text-muted-foreground max-w-lg text-sm leading-relaxed">
            The certificate is a credibility amplifier, not the hiring trigger.{" "}
            <span className="text-foreground font-medium">Proof-of-work is the hiring trigger.</span>
          </p>
        </div>
      </div>

      {/* Bottom dashed separator */}
      <div className="container mt-16">
        <DashedLine />
      </div>
    </section>
  );
};
