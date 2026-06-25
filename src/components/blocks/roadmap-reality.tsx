import { DashedLine } from "@/components/dashed-line";
import { Card, CardContent } from "@/components/ui/card";

const corrections = [
  {
    num: "01",
    title: "AIP-C01 is real but brutal.",
    body: "Professional-level, Bedrock/RAG/agents/evals-heavy. Assumes ~1 year hands-on GenAI plus solid AWS foundations. Do not start here. Foundation first (AWS AI Practitioner), then this.",
    tag: "Don't start here",
  },
  {
    num: "02",
    title: "GTM Eng ≠ FDE — not equally reachable.",
    body: "GTM Eng leverages your existing automation background and is the near-term play. FDE is the stretch — mostly US-based, hybrid, up to 50% travel. From India, frontier-lab FDE is aspirational; target the realistic FDE-adjacent market.",
    tag: "Near-term vs stretch",
  },
  {
    num: "03",
    title: "Your edge: a hidden FDE feeder profile.",
    body: "Cloud/ops engineers who self-taught the LLM stack and shipped internal AI tooling are a recognized-but-under-recruited FDE pool. They get filtered at the keyword stage. You already build agentic tooling. Your problem is positioning, not capability.",
    tag: "Positioning problem",
  },
  {
    num: "04",
    title: "The PDFs: sound method, inflated numbers.",
    body: '"Build something real and send it" works. "8x salary / 100% close" are survivorship claims from a sample of three. Use the tactic; calibrate the expectations.',
    tag: "Keep the method",
  },
];

export const RoadmapReality = () => {
  return (
    <section className="py-20 lg:py-28">
      <div className="container">
        {/* Header */}
        <div className="mb-12 grid gap-4 lg:grid-cols-2 lg:gap-20">
          <h2 className="text-3xl tracking-tight md:text-4xl lg:text-5xl">
            The Strategic Reality
          </h2>
          <p className="text-muted-foreground self-end leading-relaxed">
            Four corrections to the plan you came in with. Read these before anything else.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-4 md:grid-cols-2">
          {corrections.map((item) => (
            <Card key={item.num} className="rounded-2xl">
              <CardContent className="p-6">
                <div className="mb-4 flex items-start justify-between">
                  <span className="text-muted-foreground/40 font-display text-5xl font-bold">
                    {item.num}
                  </span>
                  <span className="border-border bg-muted text-muted-foreground rounded-full border px-2.5 py-1 text-[11px] font-medium">
                    {item.tag}
                  </span>
                </div>
                <h3 className="text-foreground mb-2 text-base font-semibold">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.body}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Non-negotiable callout */}
        <div className="border-border bg-muted mt-5 rounded-2xl border p-6">
          <p className="text-sm leading-relaxed">
            <span className="text-foreground font-semibold">
              The single non-negotiable technical skill for 2026:{" "}
            </span>
            <span className="text-muted-foreground">
              evaluation engineering — building eval suites that catch hallucinations, regressions, and grounding gaps before production. Your SRE instinct ("how do I know this works in prod?") is a real, rare advantage here.
            </span>
          </p>
        </div>

        <div className="mt-16">
          <DashedLine />
        </div>
      </div>
    </section>
  );
};
