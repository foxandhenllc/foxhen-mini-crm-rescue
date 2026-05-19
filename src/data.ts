export const sample = {
  "repoName": "foxhen-mini-crm-rescue",
  "title": "Mini CRM Rescue",
  "subtitle": "Lead cleanup and pipeline clarity",
  "serviceLine": "CRM cleanup sprint",
  "heroTitle": "Rescue a messy lead list before revenue leaks out.",
  "heroCopy": "A fictional CRM cleanup console that deduplicates leads, scores next actions, highlights stale deals, and prepares a clean follow-up pipeline.",
  "primaryAction": "Clean pipeline",
  "secondaryAction": "Review duplicates",
  "repositoryUrl": "https://github.com/foxandhenllc/foxhen-mini-crm-rescue",
  "liveDemoUrl": "https://foxhen-mini-crm-rescue.vercel.app",
  "theme": {
    "accent": "#315b8c",
    "accent2": "#f08a58",
    "ink": "#071426",
    "soft": "#edf4fc",
    "warm": "#ffe9dc",
    "surface": "#fffaf4",
    "muted": "#5c667a",
    "border": "rgba(7, 18, 31, 0.12)"
  },
  "metrics": [
    {
      "label": "Duplicate clusters",
      "value": "9",
      "note": "merged preview"
    },
    {
      "label": "Follow-up priority",
      "value": "31",
      "note": "ranked leads"
    },
    {
      "label": "Stale deals",
      "value": "6",
      "note": "needs owner"
    }
  ],
  "stages": [
    {
      "label": "Import",
      "detail": "Normalize source, segment, value, owner, and last-touch fields.",
      "status": "ready",
      "owner": "Ops",
      "index": 1
    },
    {
      "label": "Clean",
      "detail": "Flag duplicate people, conflicting companies, and missing next actions.",
      "status": "active",
      "owner": "Studio",
      "index": 2
    },
    {
      "label": "Prioritize",
      "detail": "Rank the pipeline by urgency, fit, and probability of a fast next step.",
      "status": "waiting",
      "owner": "Sales",
      "index": 3
    },
    {
      "label": "Handoff",
      "detail": "Prepare clean CSV, owner checklist, and follow-up notes.",
      "status": "queued",
      "owner": "F&H",
      "index": 4
    }
  ],
  "workItems": [
    {
      "title": "Lead merge",
      "detail": "Resolve duplicate rows across sources",
      "status": "ready"
    },
    {
      "title": "Owner field",
      "detail": "Assign unclaimed opportunities",
      "status": "active"
    },
    {
      "title": "Dormant deals",
      "detail": "Waiting on status call",
      "status": "waiting"
    },
    {
      "title": "Export pack",
      "detail": "Queued after merge approval",
      "status": "queued"
    }
  ],
  "deliverables": [
    {
      "title": "Cleanup report",
      "detail": "Before-after field health, duplicate count, and unresolved decisions."
    },
    {
      "title": "Priority board",
      "detail": "Lead ranking that makes next outreach obvious."
    },
    {
      "title": "Export package",
      "detail": "Clean sample CSV plus notes on rules used."
    }
  ],
  "timeline": [
    {
      "time": "0-2 hrs",
      "detail": "Audit lead fields and duplicates"
    },
    {
      "time": "2-10 hrs",
      "detail": "Normalize data and score follow-ups"
    },
    {
      "time": "10-18 hrs",
      "detail": "Package exports and owner notes"
    }
  ],
  "proof": [
    "Strong fit for short CRM/data cleanup contracts.",
    "Shows measurable improvement without needing live CRM access.",
    "Keeps every row fictional and safe to publish."
  ]
} as const;

export type StageStatus = "ready" | "active" | "waiting" | "queued";
export type DemoStage = (typeof sample.stages)[number];
export type WorkItem = (typeof sample.workItems)[number];
