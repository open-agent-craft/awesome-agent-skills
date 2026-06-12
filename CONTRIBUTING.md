# Contributing

Thanks for helping keep this list useful. The goal is a high-quality, searchable, comparable index of Agent Skills, AI coding skills, tool-use recipes, MCP recipes, prompt patterns, and agent instructions.

## What We Accept

A submitted skill should meet at least three of the following:

- Solves a clear and reusable task.
- Has public documentation or source code.
- Provides installation or usage instructions.
- Includes examples, screenshots, or realistic usage notes.
- Works with at least one known agent platform.
- Has a clear license.
- Is actively maintained or widely used.
- Avoids unsafe default behavior.

## What We Avoid

- Pure prompt dumps without context.
- Closed tools with no public docs.
- Unmaintained spam projects.
- Duplicate skills with no meaningful difference.
- Skills that require unsafe permissions by default.
- Tools focused on credential theft, scraping abuse, spam, malware, evasion, or bypassing safety controls.

## Add A Skill

1. Add the entry to `data/skills.yml`.
2. Use existing categories from `data/categories.yml`.
3. Use maturity values: `recommended`, `promising`, `experimental`, or `archived`.
4. Include a practical `why_awesome` sentence. Do not write generic filler.
5. Add safety notes when the skill uses tools, browsers, files, shell commands, credentials, APIs, or external communication.
6. Run:

```bash
npm run validate
npm run generate
```

## Entry Style

Prefer:

```text
A Claude Code skill for generating regression tests from bug reports. Useful for legacy codebases with weak test coverage.
```

Avoid:

```text
A coding assistant.
```

## Pull Requests

PRs should explain:

- What resource is being added or changed.
- Why it is useful.
- Which platform and category it belongs to.
- Any known limitations or safety concerns.

Keep one conceptual change per PR when possible.
