"use client";

import { useState } from "react";

import { ChevronDown } from "lucide-react";
import { motion } from "motion/react";

import { DashedLine } from "@/components/dashed-line";
import { Card, CardContent } from "@/components/ui/card";

const projects = [
  {
    num: "P1",
    lean: "GTM-leaning",
    tag: "Fast Win",
    timeline: "Weeks 2–4",
    title: "GTM Enrichment + Eval Pipeline",
    what: "A Clay table + n8n workflow: company list → enrich decision-makers → Claygent recent-news signals → AI personalization column → eval column that scores each generated opener for relevance and accuracy.",
    why: "Demonstrates the full GTM-Eng stack AND your SRE 'is this actually working?' instinct.",
    eval: "Score each AI-generated opener for relevance (does it reference real company news?) and accuracy (no hallucinated facts?). A simple rubric + Claude API call is enough.",
    tools: ["Clay", "Claygent", "n8n", "Claude API"],
    deliverables: [
      "3-min Loom walkthrough of the full pipeline",
      "Short writeup: 'Why I added an eval layer to outbound'",
    ],
  },
  {
    num: "P2",
    lean: "FDE-leaning",
    tag: "Your Moat",
    timeline: "Weeks 5–9",
    title: "Incident Triage / RCA Copilot",
    what: "Agentic system: ingest logs/traces/alerts (Datadog-style data you know cold) → retrieve similar past incidents via RAG → propose ranked root-cause hypotheses with cited evidence → eval suite measuring hypothesis accuracy + guardrail against hallucinated causes.",
    why: "This is THE FDE-shaped project for you. Only an observability engineer can frame it credibly. Also a near-perfect AIP-C01 practice artifact.",
    eval: "Eval suite: given a known-root-cause incident, does the system rank the correct hypothesis first? Measure precision@1 across 20 synthetic incidents. Guardrail flags low-confidence answers instead of hallucinating certainty.",
    tools: ["Bedrock / Claude API", "Vector DB", "LangGraph", "LangSmith / Braintrust"],
    deliverables: [
      "GitHub repo with README + architecture diagram",
      "Loom demo: walk through a real incident triage",
      "Writeup on the eval methodology and what it caught",
    ],
  },
  {
    num: "P3",
    lean: "FDE-leaning",
    tag: "Domain-anchored",
    timeline: "Weeks 10–14",
    title: "Insurance Document Q&A Agent with Guardrails",
    what: "Document-extraction + Q&A agent over insurance-style docs (policies, claims forms — synthetic/public samples only, never real client data). RAG + structured extraction + Bedrock Guardrails for PII/safety + evals for answer grounding.",
    why: "Mirrors real FDE work, maps directly to AIP-C01 domains, and sits in your actual industry. Makes the 'I can already do this job' story concrete.",
    eval: "Grounding eval: for each answer, verify every cited clause exists verbatim in the source document. Hallucination rate < 5% is the target. PII guardrail refuses to surface detected personal identifiers.",
    tools: ["AWS Bedrock", "Bedrock Guardrails", "Vector DB", "RAG pipeline"],
    deliverables: [
      "GitHub repo + demo recording",
      "One-pager: 'How I'd ship this into an insurer's environment in 90 days'",
      "Eval report showing grounding rate + guardrail effectiveness",
    ],
  },
];

function ProjectCard({ project }: { project: (typeof projects)[0] }) {
  const [open, setOpen] = useState(false);

  return (
    <Card className="overflow-hidden rounded-2xl">
      <CardContent className="p-0">
        {/* Header */}
        <div className="p-6 pb-4">
          <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <span className="border-border bg-muted text-muted-foreground rounded-md border px-2 py-0.5 font-mono text-xs font-bold">
                {project.num}
              </span>
              <span className="border-border bg-muted text-muted-foreground rounded-full border px-2.5 py-0.5 text-[11px]">
                {project.lean}
              </span>
              <span className="border-border bg-muted text-muted-foreground rounded-full border px-2.5 py-0.5 text-[11px]">
                {project.tag}
              </span>
            </div>
            <span className="text-muted-foreground text-xs">{project.timeline}</span>
          </div>

          <h3 className="text-foreground mb-3 text-lg font-semibold">{project.title}</h3>
          <p className="text-muted-foreground mb-4 text-sm leading-relaxed">{project.what}</p>

          {/* Eval layer — always visible */}
          <div className="border-border bg-muted mb-4 rounded-xl border p-4">
            <p className="text-foreground mb-1 text-xs font-semibold uppercase tracking-wider">
              The Eval Layer
            </p>
            <p className="text-muted-foreground text-sm leading-relaxed">{project.eval}</p>
          </div>

          {/* Tools */}
          <div className="flex flex-wrap gap-2">
            {project.tools.map((tool) => (
              <span key={tool} className="border-border bg-background text-muted-foreground rounded-md border px-2.5 py-1 text-xs">
                {tool}
              </span>
            ))}
          </div>
        </div>

        {/* Deliverables toggle */}
        <div className="border-border border-t">
          <button
            onClick={() => setOpen(!open)}
            className="text-muted-foreground hover:bg-muted flex w-full items-center justify-between px-6 py-3 text-xs font-medium transition-colors"
          >
            <span>Deliverables ({project.deliverables.length})</span>
            <motion.div animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.2 }}>
              <ChevronDown className="h-4 w-4" />
            </motion.div>
          </button>
          <motion.div
            initial={false}
            animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="overflow-hidden"
          >
            <ul className="space-y-2 px-6 pb-5 pt-1">
              {project.deliverables.map((d, i) => (
                <li key={i} className="text-muted-foreground flex items-start gap-2 text-sm">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-emerald-500" />
                  {d}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </CardContent>
    </Card>
  );
}

export const RoadmapBuild = () => {
  return (
    <section className="py-20 lg:py-28">
      <div className="container">
        <div className="mb-5 grid gap-4 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="text-muted-foreground mb-2 font-mono text-xs uppercase tracking-widest">
              Track B
            </p>
            <h2 className="text-3xl tracking-tight md:text-4xl lg:text-5xl">
              The Build Track
            </h2>
          </div>
          <p className="text-muted-foreground self-end leading-relaxed">
            This is what gets you hired. The cert proves breadth; the builds prove you. Each project sits at the intersection of your domain and FDE/GTM skills.
          </p>
        </div>

        {/* 14-week bar */}
        <div className="border-border bg-muted mb-10 overflow-hidden rounded-2xl border p-5">
          <p className="text-muted-foreground mb-3 text-xs font-medium uppercase tracking-widest">
            14-Week Sprint (Weeks 2–14)
          </p>
          <div className="flex gap-1">
            {Array.from({ length: 13 }, (_, i) => i + 2).map((week) => {
              const color =
                week <= 4 ? "bg-blue-400" :
                week <= 9 ? "bg-emerald-400" :
                "bg-violet-400";
              const label = week <= 4 ? "P1" : week <= 9 ? "P2" : "P3";
              return (
                <div key={week} className="flex flex-1 flex-col items-center gap-1">
                  <div className={`flex h-8 w-full items-center justify-center rounded-md ${color}`}>
                    <span className="text-[9px] font-bold text-white/80">{label}</span>
                  </div>
                  <span className="text-[9px] text-muted-foreground">{week}</span>
                </div>
              );
            })}
          </div>
          <div className="mt-3 flex flex-wrap gap-4">
            {[
              { label: "P1 GTM Enrichment + Eval", color: "bg-blue-400", weeks: "Wks 2–4" },
              { label: "P2 Incident Triage / RCA Copilot", color: "bg-emerald-400", weeks: "Wks 5–9" },
              { label: "P3 Insurance Doc Agent", color: "bg-violet-400", weeks: "Wks 10–14" },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-2 text-xs text-muted-foreground">
                <div className={`h-2 w-2 rounded-sm ${item.color}`} />
                {item.label} <span className="text-muted-foreground/50">{item.weeks}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          {projects.map((project) => (
            <ProjectCard key={project.num} project={project} />
          ))}
        </div>

        <div className="mt-16">
          <DashedLine />
        </div>
      </div>
    </section>
  );
};
