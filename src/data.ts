export type ItemStatus = "backlog" | "active" | "blocked" | "ready" | "done";

export type WorkItem = {
  id: string;
  title: string;
  category: string;
  owner: string;
  status: ItemStatus;
  priority: number;
  effort: number;
  friction: number;
  value: number;
  due: string;
  notes: string;
};

export type QualityCheck = {
  id: string;
  label: string;
  passed: boolean;
  weight: number;
};

export const sample: {
  repoName: string;
  title: string;
  subtitle: string;
  serviceLine: string;
  description: string;
  repositoryUrl: string;
  liveDemoUrl: string;
  theme: { accent: string; accent2: string; ink: string; soft: string; warm: string };
  items: WorkItem[];
  checks: QualityCheck[];
  deliverables: string[];
} = {
  "repoName": "foxhen-mini-crm-rescue",
  "title": "Mini CRM Rescue",
  "subtitle": "pipeline cleanup",
  "serviceLine": "CRM cleanup sprint",
  "description": "Deduplicate sample leads, score follow-up urgency, route owners, and export a cleaner pipeline.",
  "repositoryUrl": "https://github.com/foxandhenllc/foxhen-mini-crm-rescue",
  "liveDemoUrl": "https://foxhen-mini-crm-rescue.vercel.app",
  "theme": {
    "accent": "#315b8c",
    "accent2": "#f08a58",
    "ink": "#071426",
    "soft": "#edf4fc",
    "warm": "#ffe9dc"
  },
  "items": [
    {
      "id": "min-1",
      "title": "Lead merge",
      "category": "Intake",
      "owner": "Chris",
      "status": "active",
      "priority": 5,
      "effort": 2,
      "friction": 1,
      "value": 5,
      "due": "Today",
      "notes": "Sample pipeline cleanup work item for crm cleanup sprint."
    },
    {
      "id": "min-2",
      "title": "Dormant deal",
      "category": "Build",
      "owner": "Fox & Hen",
      "status": "backlog",
      "priority": 4,
      "effort": 4,
      "friction": 2,
      "value": 4,
      "due": "24h",
      "notes": "Sample pipeline cleanup work item for crm cleanup sprint."
    },
    {
      "id": "min-3",
      "title": "Owner gap",
      "category": "Review",
      "owner": "Buyer",
      "status": "blocked",
      "priority": 3,
      "effort": 3,
      "friction": 4,
      "value": 4,
      "due": "48h",
      "notes": "Sample pipeline cleanup work item for crm cleanup sprint."
    },
    {
      "id": "min-4",
      "title": "Follow-up task",
      "category": "Export",
      "owner": "Automation",
      "status": "ready",
      "priority": 4,
      "effort": 2,
      "friction": 2,
      "value": 3,
      "due": "This week",
      "notes": "Sample pipeline cleanup work item for crm cleanup sprint."
    },
    {
      "id": "min-5",
      "title": "Segment fix",
      "category": "Intake",
      "owner": "QA",
      "status": "backlog",
      "priority": 2,
      "effort": 1,
      "friction": 1,
      "value": 3,
      "due": "Waiting",
      "notes": "Sample pipeline cleanup work item for crm cleanup sprint."
    },
    {
      "id": "min-6",
      "title": "Export pack",
      "category": "Build",
      "owner": "Chris",
      "status": "done",
      "priority": 5,
      "effort": 5,
      "friction": 3,
      "value": 5,
      "due": "Next pass",
      "notes": "Sample pipeline cleanup work item for crm cleanup sprint."
    }
  ],
  "checks": [
      {
          "id": "owner",
          "label": "Lead owner and next step are clear",
          "passed": true,
          "weight": 18
      },
      {
          "id": "criteria",
          "label": "Cleanup rule or merge decision is written",
          "passed": true,
          "weight": 18
      },
      {
          "id": "data",
          "label": "Missing contact/data friction is documented",
          "passed": false,
          "weight": 14
      },
      {
          "id": "handoff",
          "label": "Pipeline cleanup export is generated",
          "passed": false,
          "weight": 16
      },
      {
          "id": "reuse",
          "label": "Repeatable CRM hygiene note exists",
          "passed": true,
          "weight": 12
      }
  ],
  "deliverables": [
      "Ranked CRM cleanup queue",
      "Editable lead/deal inspector",
      "Pipeline hygiene checklist",
      "Exportable cleanup packet"
  ]
};
