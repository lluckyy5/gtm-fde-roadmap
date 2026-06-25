import { DashedLine } from "@/components/dashed-line";
import { Card, CardContent } from "@/components/ui/card";

const gtmRows = [
  { skill: "Workflow orchestration / webhooks / API glue", state: "Strong" },
  { skill: "Data enrichment pipelines", state: "Adjacent" },
  { skill: "RevOps / sales context", state: "Weak" },
  { skill: "AI personalization", state: "Building" },
];

const fdeRows = [
  { skill: "Production engineering", state: "Partial" },
  { skill: "AI fluency (RAG/agents/evals)", state: "Building" },
  { skill: "Customer-facing judgment", state: "Partial" },
  { skill: "Cloud + systems", state: "Strong" },
  { skill: "TypeScript / full-stack", state: "Weak" },
];

const stateDot = (state: string) => {
  if (state === "Strong") return "bg-emerald-500";
  if (state === "Building" || state === "Adjacent" || state === "Partial") return "bg-amber-500";
  return "bg-red-400";
};

export const RoadmapRoles = () => {
  return (
    <section className="py-20 lg:py-28">
      <div className="container">
        <div className="mb-12 grid gap-4 lg:grid-cols-2 lg:gap-20">
          <h2 className="text-3xl tracking-tight md:text-4xl lg:text-5xl">
            Two Roles. Two Timelines.
          </h2>
          <p className="text-muted-foreground self-end leading-relaxed">
            GTM Eng and FDE require the same underlying skills but sit on different time horizons. Here's where you stand.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {/* GTM Engineer */}
          <Card className="rounded-2xl">
            <CardContent className="p-6">
              <div className="mb-4 flex items-center justify-between">
                <h3 className="text-foreground text-lg font-semibold">GTM Engineer</h3>
                <span className="border-border bg-muted text-muted-foreground rounded-full border px-2.5 py-1 text-xs font-medium">
                  2–3 months
                </span>
              </div>
              <p className="text-muted-foreground mb-5 text-xs">
                Clay · n8n/Make · HubSpot/Salesforce · Python · RAG-lite enrichment
              </p>
              <div className="space-y-3">
                {gtmRows.map((row) => (
                  <div key={row.skill} className="flex items-start gap-2.5 text-xs">
                    <div className={`mt-1 h-1.5 w-1.5 shrink-0 rounded-full ${stateDot(row.state)}`} />
                    <span className="text-muted-foreground">
                      {row.skill}
                      <span className="text-muted-foreground/50"> · {row.state}</span>
                    </span>
                  </div>
                ))}
              </div>
              <div className="border-border mt-5 border-t pt-4 text-xs font-medium text-emerald-600 dark:text-emerald-400">
                Reachable in 2–3 months. Your automation background is a genuine head start.
              </div>
            </CardContent>
          </Card>

          {/* FDE */}
          <Card className="rounded-2xl">
            <CardContent className="p-6">
              <div className="mb-2 flex items-center justify-between">
                <h3 className="text-foreground text-lg font-semibold">Forward Deployed Engineer</h3>
              </div>
              <p className="text-muted-foreground mb-3 text-xs">The "rare triangle"</p>
              <div className="mb-4 flex flex-wrap gap-1.5">
                {["Production Eng", "AI Fluency", "Customer Judgment"].map((t) => (
                  <span key={t} className="border-border bg-muted text-muted-foreground rounded-full border px-2 py-0.5 text-[11px]">
                    {t}
                  </span>
                ))}
              </div>
              <div className="space-y-3">
                {fdeRows.map((row) => (
                  <div key={row.skill} className="flex items-start gap-2.5 text-xs">
                    <div className={`mt-1 h-1.5 w-1.5 shrink-0 rounded-full ${stateDot(row.state)}`} />
                    <span className="text-muted-foreground">
                      {row.skill}
                      <span className="text-muted-foreground/50"> · {row.state}</span>
                    </span>
                  </div>
                ))}
              </div>
              <div className="border-border mt-5 flex items-center justify-between border-t pt-4">
                <span className="text-xs font-medium text-violet-600 dark:text-violet-400">
                  Stretch target — same skills, more accessible doors sooner.
                </span>
                <span className="border-border bg-muted text-muted-foreground rounded-full border px-2.5 py-1 text-xs">
                  6–9 months
                </span>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-16">
          <DashedLine />
        </div>
      </div>
    </section>
  );
};
