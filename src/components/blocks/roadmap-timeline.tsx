const months = [
  { label: "Month 1", weeks: "Wks 1–4", marker: "Start here", certify: "Book + prep AI Practitioner", build: "Project 1: GTM Enrichment + Eval Pipeline", position: "Draft GTM/FDE resume; start LinkedIn rewrite", outreach: "—" },
  { label: "Month 2", weeks: "Wks 5–8", marker: "Outreach begins", certify: "Pass AI Practitioner (~Wk 6); start Bedrock hands-on", build: "Project 2 begins: Incident/RCA Copilot", position: "Publish LinkedIn rewrite; pin Project 1; first build post", outreach: "Identify first 5 targets; send 2–3 DMs" },
  { label: "Month 3", weeks: "Wks 9–12", marker: "", certify: "Associate prep / Bedrock labs", build: "Finish Project 2; publish repo + Loom", position: "Pin Project 2; second build post", outreach: "3–5 active targets; one follow-up each; start interview prep" },
  { label: "Month 4", weeks: "Wks 13–16", marker: "", certify: "Pass Associate; start AIP-C01 prep", build: "Project 3 begins: Insurance Document Agent", position: "Pin Project 3; third build post", outreach: "Keep outreach cadence; begin live interviews if any" },
  { label: "Month 5", weeks: "Wks 17–20", marker: "", certify: "AIP-C01 deep prep + practice exams (aim 85%+)", build: "Finish/polish Project 3; tidy all repos", position: "Refresh resume with new certs + projects", outreach: "Full outreach + interview loops; decomposition/roleplay drills" },
  { label: "Month 6", weeks: "Wks 21–24", marker: "First offers", certify: "Pass AIP-C01", build: "Iterate on highest-interest project", position: "Add AIP-C01 to LinkedIn/resume; 'builder' narrative complete", outreach: "Convert interviews → offers; negotiate" },
];

const cols = [
  { key: "certify", label: "Certify", dot: "bg-blue-500" },
  { key: "build", label: "Build", dot: "bg-emerald-500" },
  { key: "position", label: "Position", dot: "bg-violet-500" },
  { key: "outreach", label: "Outreach", dot: "bg-amber-500" },
];

export const RoadmapTimeline = () => {
  return (
    <section className="py-20 lg:py-28">
      <div className="container">
        <div className="mb-12 grid gap-4 lg:grid-cols-2 lg:gap-20">
          <h2 className="text-3xl tracking-tight md:text-4xl lg:text-5xl">
            The Spoonfed Sequence
          </h2>
          <p className="text-muted-foreground self-end leading-relaxed">
            Month-by-month across all four tracks. Certify, Build, Position, and Outreach run together — the build leads.
          </p>
        </div>

        <div className="space-y-3">
          {months.map((month) => (
            <div key={month.label} className="border-border bg-card overflow-hidden rounded-2xl border">
              {/* Month header */}
              <div className="border-border bg-muted flex items-center gap-3 border-b px-5 py-3">
                <span className="text-foreground text-sm font-semibold">{month.label}</span>
                <span className="text-muted-foreground text-xs">{month.weeks}</span>
                {month.marker && (
                  <span className="ml-auto text-xs font-medium text-emerald-600 dark:text-emerald-400">
                    {month.marker}
                  </span>
                )}
              </div>

              {/* Columns */}
              <div className="grid divide-y divide-border md:grid-cols-4 md:divide-x md:divide-y-0">
                {cols.map((col) => (
                  <div key={col.key} className="px-4 py-3">
                    <div className="mb-1.5 flex items-center gap-1.5">
                      <div className={`h-1.5 w-1.5 rounded-full ${col.dot}`} />
                      <span className="text-muted-foreground text-[10px] font-medium uppercase tracking-wider">
                        {col.label}
                      </span>
                    </div>
                    <p className={`text-xs leading-relaxed ${(month as Record<string, string>)[col.key] === "—" ? "text-muted-foreground/30" : "text-muted-foreground"}`}>
                      {(month as Record<string, string>)[col.key]}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Outcome callout */}
        <div className="border-border bg-muted mt-5 rounded-2xl border p-6">
          <p className="text-foreground mb-1 text-sm font-semibold">Realistic outcome by Month 6</p>
          <p className="text-muted-foreground text-sm leading-relaxed">
            AI Practitioner + (optional Associate) + AIP-C01 done. Three portfolio projects live. A "builder, not applicant" public profile. Active interview pipeline — most likely landing first in GTM-Eng / applied-AI / GCC territory, with FDE-proper as a Month 9–12 target.
          </p>
        </div>
      </div>
    </section>
  );
};
