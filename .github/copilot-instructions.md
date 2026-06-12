# Repository Instructions

This repository is a curated, structured index of Agent Skills, AI coding skills, MCP recipes, tool-use recipes, prompt patterns, and agent instructions.

## Editing Rules

- Treat `data/skills.yml` as the source of truth for listed resources.
- Do not manually edit generated README sections when a data change is needed; update data and run `npm run generate`.
- Use categories from `data/categories.yml`.
- Use maturity values: `recommended`, `promising`, `experimental`, `archived`.
- Keep descriptions concrete and searchable.
- Every entry needs a meaningful `why_awesome` sentence.
- Add `safety_notes` for any resource that uses shell commands, files, browsers, credentials, databases, APIs, production systems, or external communication.

## Verification

- Run `npm run validate` after data changes.
- Run `npm run generate` after data changes.
- Do not add unit tests unless explicitly requested.
- Do not start browser tests unless explicitly requested.
- Do not add mobile compatibility work unless explicitly requested.
