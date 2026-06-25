import { DashedLine } from "@/components/dashed-line";

const steps = [
  {
    num: "01",
    code: "AIF-C01",
    title: "AWS Certified AI Practitioner",
    timeline: "Weeks 1–6",
    cost: "~$100 USD",
    pass: "700 / 1000",
    why: "Foundation in AWS AI/ML + GenAI. Covers Bedrock Agents, Model Evaluation, Guardrails, Prompt Management — doubles as AIP-C01 prep.",
    action: "Book the exam NOW. The booked deadline is the whole point.",
  },
  {
    num: "02",
    code: "Optional",
    title: "ML Engineer Associate or SA Associate",
    timeline: "Weeks 7–14",
    cost: "~$75 USD (50% voucher from Step 1)",
    pass: "720 / 1000",
    why: "AIP-C01 assumes solid AWS architecture knowledge. One Associate closes that gap. Pick ML Engineer Assoc for AI lean; SA Assoc for broader cloud credibility.",
    action: "Use your 50% discount voucher from passing Step 1.",
  },
  {
    num: "03",
    code: "AIP-C01",
    title: "AWS Certified GenAI Developer – Professional",
    timeline: "Months 4–6",
    cost: "~$150 USD (50% voucher from Step 2)",
    pass: "750 / 1000",
    why: "The career target. Tests when to use a non-deterministic LLM vs. a deterministic Lambda/Step Function — exactly what FDE interviews test. Your Track B projects are your best prep.",
    action: "This exam rewards real building over memorization.",
  },
];

export const RoadmapCerts = () => {
  return (
    <section className="py-20 lg:py-28">
      <div className="container">
        <div className="mb-12 grid gap-4 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="text-muted-foreground mb-2 font-mono text-xs uppercase tracking-widest">
              Track A
            </p>
            <h2 className="text-3xl tracking-tight md:text-4xl lg:text-5xl">
              The Certification Path
            </h2>
          </div>
          <p className="text-muted-foreground self-end leading-relaxed">
            Sequenced deliberately. Do not go straight to AIP-C01 — build the ladder first.
          </p>
        </div>

        <div className="space-y-3">
          {steps.map((step, i) => (
            <div key={step.num} className="border-border bg-card rounded-2xl border p-6">
              <div className="flex flex-wrap items-start gap-4 md:flex-nowrap">
                {/* Number */}
                <div className="border-border text-muted-foreground flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border font-mono text-sm font-bold">
                  {step.num}
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                    <h3 className="text-foreground font-semibold">{step.title}</h3>
                    <span className="border-border bg-muted text-muted-foreground rounded-md border px-2 py-0.5 font-mono text-xs">
                      {step.code}
                    </span>
                  </div>
                  <div className="text-muted-foreground mb-3 flex flex-wrap gap-3 text-xs">
                    <span>{step.timeline}</span>
                    <span>·</span>
                    <span>Pass: {step.pass}</span>
                    <span>·</span>
                    <span>{step.cost}</span>
                  </div>
                  <p className="text-muted-foreground mb-2 text-sm leading-relaxed">{step.why}</p>
                  <p className="text-foreground text-xs font-medium">→ {step.action}</p>
                </div>
              </div>

              {/* Connector */}
              {i < steps.length - 1 && (
                <div className="ml-5 mt-4 flex items-center gap-2">
                  <div className="border-border h-6 w-px border-l border-dashed" />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16">
          <DashedLine />
        </div>
      </div>
    </section>
  );
};
