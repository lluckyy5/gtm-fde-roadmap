# GTM Engineer + Forward Deployed Engineer — Spoonfed Roadmap

**Live site → [gtm-fde-roadmap.vercel.app](https://gtm-fde-roadmap.vercel.app)**

A personal career roadmap landing page for **Ankit Vishwakarma** — Senior Software Engineer (APM/Observability) at illumifin — charting a 6-month path to GTM Engineer and Forward Deployed Engineer roles in the AI-native product space.

Built with **Next.js 15 + shadcn/ui + Tailwind CSS v4 + Framer Motion**.

---

## The Roadmap

### Starting Point

| | |
|---|---|
| **Current role** | Senior Software Engineer — APM & Observability, illumifin |
| **Core strengths** | Distributed systems, Datadog/observability, automation, API integrations |
| **Target roles** | GTM Engineer (2–3 months) → Forward Deployed Engineer (6–9 months) |
| **Horizon** | Month 12 |

---

### Section 1 — The Bottom Line

Four tracks that run in parallel from Day 1:

| Track | Reality |
|---|---|
| **Certify** | AIF-C01 → Associate → AIP-C01. Sequenced. Don't skip steps. |
| **Build** | Three projects, each with an eval layer. The cert proves breadth; the builds prove you. |
| **Position** | LinkedIn rewrite + build posts. "Builder, not applicant" is the whole narrative. |
| **Outreach** | 5–10 quality targets, not mass applications. Start Month 2, not Month 6. |

---

### Section 2 — Strategic Reality

**Why these roles, now:**
- AI-native GTM tools (Clay, n8n, Bedrock) are hitting inflection
- Observability engineers who add AI fluency become rare
- FDE is the "rare triangle": production engineering + AI fluency + customer judgment

**Your gaps, honestly:**
- RevOps / sales process context (GTM)
- TypeScript / full-stack depth (FDE)
- Customer-facing communication at senior level (FDE)

**Your head starts:**
- Automation / API integration background (GTM moat)
- SRE instinct — you think about "is this actually working?" (the eval layer nobody else adds)
- Insurance domain knowledge (directly maps to P3 project)

---

### Section 3 — Two Roles, Two Timelines

#### GTM Engineer — 2–3 months
**Stack:** Clay · n8n/Make · HubSpot/Salesforce · Python · RAG-lite enrichment

| Skill | Status |
|---|---|
| Workflow orchestration / webhooks / API glue | Strong |
| Data enrichment pipelines | Adjacent |
| RevOps / sales context | Weak |
| AI personalization | Building |

> Reachable in 2–3 months. Your automation background is a genuine head start.

#### Forward Deployed Engineer — 6–9 months
**The "rare triangle":** Production Eng + AI Fluency + Customer Judgment

| Skill | Status |
|---|---|
| Production engineering | Partial |
| AI fluency (RAG / agents / evals) | Building |
| Customer-facing judgment | Partial |
| Cloud + systems | Strong |
| TypeScript / full-stack | Weak |

> Stretch target — same skills as GTM Eng, more accessible doors sooner.

---

### Section 4 — Track A: Certification Path

**Rule:** Do not go straight to AIP-C01. Build the ladder first.

#### Step 01 — AWS Certified AI Practitioner (AIF-C01)
- **Timeline:** Weeks 1–6 · **Pass score:** 700 / 1000 · **Cost:** ~$100 USD
- **Why:** Foundation in AWS AI/ML + GenAI. Covers Bedrock Agents, Model Evaluation, Guardrails, Prompt Management — doubles as AIP-C01 prep.
- **Action:** Book the exam NOW. The booked deadline is the whole point.

#### Step 02 — ML Engineer Associate or SA Associate *(optional bridge)*
- **Timeline:** Weeks 7–14 · **Pass score:** 720 / 1000 · **Cost:** ~$75 USD *(50% voucher from Step 1)*
- **Why:** AIP-C01 assumes solid AWS architecture knowledge. One Associate closes that gap.
- **Action:** Use your 50% discount voucher from passing Step 1.

#### Step 03 — AWS Certified AI Developer – Professional (AIP-C01)
- **Timeline:** Months 4–6 · **Pass score:** 750 / 1000 · **Cost:** ~$150 USD *(50% voucher from Step 2)*
- **Why:** The career target. Tests when to use a non-deterministic LLM vs. a deterministic Lambda/Step Function — exactly what FDE interviews test.
- **Action:** This exam rewards real building over memorization. Your Track B projects are the prep.

---

### Section 5 — Track B: The Build Track

> The cert proves breadth; the builds prove you. Each project sits at the intersection of your domain and FDE/GTM skills.

#### P1 — GTM Enrichment + Eval Pipeline *(Weeks 2–4)*
**GTM-leaning · Fast Win**

Clay table + n8n workflow: company list → enrich decision-makers → Claygent recent-news signals → AI personalization column → eval column that scores each generated opener.

**The eval layer:** Score each AI-generated opener for relevance and accuracy. A simple rubric + Claude API call is enough.

**Tools:** Clay · Claygent · n8n · Claude API

**Deliverables:**
- 3-min Loom walkthrough of the full pipeline
- Short writeup: "Why I added an eval layer to outbound"

---

#### P2 — Incident Triage / RCA Copilot *(Weeks 5–9)*
**FDE-leaning · Your Moat**

Agentic system: ingest logs/traces/alerts → retrieve similar past incidents via RAG → propose ranked root-cause hypotheses with cited evidence → eval suite measuring hypothesis accuracy.

**The eval layer:** Measure precision@1 across 20 synthetic incidents. Guardrail flags low-confidence answers instead of hallucinating certainty.

**Tools:** Bedrock / Claude API · Vector DB · LangGraph · LangSmith / Braintrust

**Deliverables:**
- GitHub repo with README + architecture diagram
- Loom demo: walk through a real incident triage
- Writeup on the eval methodology and what it caught

---

#### P3 — Insurance Document Q&A Agent with Guardrails *(Weeks 10–14)*
**FDE-leaning · Domain-anchored**

Document-extraction + Q&A agent over insurance-style docs (policies, claims forms — **synthetic/public samples only, never real client data**). RAG + Bedrock Guardrails for PII/safety + evals for answer grounding.

**The eval layer:** Grounding eval — hallucination rate < 5% target. PII guardrail refuses to surface detected personal identifiers.

**Tools:** AWS Bedrock · Bedrock Guardrails · Vector DB · RAG pipeline

**Deliverables:**
- GitHub repo + demo recording
- One-pager: "How I'd ship this into an insurer's environment in 90 days"
- Eval report showing grounding rate + guardrail effectiveness

---

### Section 6 — The Spoonfed Sequence (6 Months)

| Month | Certify | Build | Position | Outreach |
|---|---|---|---|---|
| **Month 1** | Book + prep AI Practitioner | P1: GTM Enrichment + Eval Pipeline | Draft resume; start LinkedIn rewrite | — |
| **Month 2** | Pass AI Practitioner; start Bedrock hands-on | P2 begins: Incident/RCA Copilot | Publish LinkedIn rewrite; pin P1; first build post | 5 targets; send 2–3 DMs |
| **Month 3** | Associate prep / Bedrock labs | Finish P2; publish repo + Loom | Pin P2; second build post | 3–5 active targets; start interview prep |
| **Month 4** | Pass Associate; start AIP-C01 prep | P3 begins: Insurance Document Agent | Pin P3; third build post | Keep cadence; begin live interviews |
| **Month 5** | AIP-C01 deep prep (aim 85%+ on practice) | Finish/polish P3; tidy all repos | Refresh resume with certs + projects | Full outreach + interview loops |
| **Month 6** | Pass AIP-C01 | Iterate on highest-interest project | "Builder" narrative complete | Convert interviews → offers; negotiate |

**Realistic outcome by Month 6:** AI Practitioner + Associate + AIP-C01 done. Three portfolio projects live. Active interview pipeline — most likely landing first in GTM-Eng / applied-AI / GCC territory, with FDE-proper as a Month 9–12 target.

---

### The One Rule

> Don't start with the cert. Start Project 1 and book the exam. The booked exam creates a deadline; P1 creates your first piece of proof and your first build post. Certify, Build, Position run together — but the **build leads**.

---

## Tech Stack

| | |
|---|---|
| **Framework** | Next.js 15 (App Router, Turbopack) |
| **UI** | shadcn/ui + Radix UI primitives |
| **Styling** | Tailwind CSS v4 (oklch color space, CSS variables) |
| **Animation** | Framer Motion (motion/react v12) |
| **Fonts** | DM Sans (local, headings) + Inter (Google, body) |
| **Theme** | next-themes (light/dark toggle) |
| **Template** | [shadcnblocks Mainline](https://github.com/shadcnblocks/mainline-nextjs-template) |

## Run Locally

```bash
git clone https://github.com/lluckyy5/gtm-fde-roadmap.git
cd gtm-fde-roadmap
npm install
npm run dev
# open http://localhost:3000
```

## Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/lluckyy5/gtm-fde-roadmap)

---

*Built June 2026 · Ankit Vishwakarma · Bangalore, India*
