import { DashedLine } from "@/components/dashed-line";

const tracks = [
  { name: "Certify", desc: "Credibility amplifier", dot: "bg-blue-500" },
  { name: "Build", desc: "The real hiring engine", dot: "bg-emerald-500" },
  { name: "Position", desc: "Get past keyword filters", dot: "bg-violet-500" },
  { name: "Outreach", desc: "Starts Month 2", dot: "bg-amber-500" },
];

export const RoadmapTracks = () => {
  return (
    <section className="py-16">
      <div className="container">
        <div className="relative flex items-center justify-center">
          <DashedLine className="text-muted-foreground" />
          <span className="bg-muted text-muted-foreground absolute px-3 font-mono text-sm font-medium tracking-wide max-md:hidden">
            THE BOTTOM LINE
          </span>
        </div>

        <p className="text-muted-foreground mt-10 text-center text-sm">
          Run three tracks in parallel. A fourth kicks in from Month 2.
        </p>

        <div className="border-border mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border md:grid-cols-4">
          {tracks.map((track, i) => (
            <div key={track.name} className="bg-muted p-6">
              <div className="flex items-center gap-2 mb-2">
                <div className={`h-2 w-2 rounded-full ${track.dot}`} />
                <span className="font-mono text-xs text-muted-foreground uppercase tracking-wider">
                  {i === 3 ? "Month 2+" : `Track ${String.fromCharCode(65 + i)}`}
                </span>
              </div>
              <div className="text-foreground text-lg font-semibold">{track.name}</div>
              <div className="text-muted-foreground mt-1 text-sm">{track.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
