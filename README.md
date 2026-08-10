# Mini CRM Rescue

[![Build](https://github.com/foxandhenllc/foxhen-mini-crm-rescue/actions/workflows/build.yml/badge.svg)](https://github.com/foxandhenllc/foxhen-mini-crm-rescue/actions/workflows/build.yml)

Public Fox & Hen working sample for a **CRM cleanup sprint**.

![Demo screenshot](docs/demo-screenshot.png)

## Live Demo

- Demo: [https://freetoolsforpeople.com/mini-crm-rescue](https://freetoolsforpeople.com/mini-crm-rescue)
- Repository: [https://github.com/foxandhenllc/foxhen-mini-crm-rescue](https://github.com/foxandhenllc/foxhen-mini-crm-rescue)

## Purpose

Mini CRM cleanup app for deduping leads, flagging missing fields, prioritizing follow-up, and exporting clean records.

## What This Demo Is

Mini CRM Rescue is a forkable React/Vite operating tool for teams that want to deduplicate leads, expose owner gaps, prioritize follow-up, and package a cleaner pipeline for handoff. It is intentionally small, static, and public-safe so you can copy the pattern without inheriting a backend or vendor lock-in.

## Fully Working Behaviors

- Search fictional leads by name, company, or email.
- Detect case-insensitive exact-email duplicates and merge redundant rows.
- Rank follow-up urgency using contact age, ownership, and pipeline stage.
- Edit owner, stage, last-contact date, and estimated value in the lead inspector.
- Export the cleaned pipeline as a normalized CSV.

## Workflow Template

See [docs/workflow-template.md](docs/workflow-template.md) for the sample pipeline rescue sprint, adaptation checklist, and public-safe data rules.

## Suggested Forks

- Replace sample deals with your fictionalized CRM rows first.
- Score priority by revenue/urgency and friction by missing data.
- Use the inspector to document next step and owner.
- Export a normalized CSV for the next sales-ops pass.

## SEO / AIO Discoverability

**Plain-language answer:** Use this repo to model CRM cleanup: deduping leads, flagging missing fields, prioritizing follow-up, and exporting cleaner records.

**Who it helps:** small businesses and sales teams with messy lead lists or lightweight CRMs.

**Search intents covered:**

- CRM cleanup tool
- lead dedupe dashboard
- small business CRM rescue
- sales follow up priority board

**Why this repo is useful:** It demonstrates a practical path from messy contact rows to an actionable sales-ops handoff.

## Open Source Readiness

- MIT licensed for reuse, remixing, and client-safe adaptation.
- GitHub Actions build workflow runs install, typecheck, tests when present, and production build.
- Contribution guide, roadmap, and issue templates are included for public collaboration.
- Public-safe data policy keeps examples fictional and reviewable.

## Local Run

```bash
npm install
npm run dev
npm run build
```

## Validation

```bash
npm run typecheck --if-present
npm run test --if-present
npm run build --if-present
```

## Public-Safe Scope

This is a static React/Vite demo with fictional sample data. It includes no production data, credentials, real contacts, copied customer work, backend, auth, or external service calls.

## Contributing

See `CONTRIBUTING.md` for public-safe contribution rules, local validation commands, and good first contribution ideas. Roadmap items live in `ROADMAP.md`.

## License

MIT - see `LICENSE`.
