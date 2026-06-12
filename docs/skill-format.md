# Skill Format

An Agent Skill is a reusable capability package for an AI agent. It usually contains instructions, examples, resources, and optional scripts that help an agent perform a task reliably.

## Skill vs Prompt

| Format | Best For | Weakness |
|---|---|---|
| Prompt | One-off request or short reusable instruction. | Often lacks installation, examples, versioning, and safety notes. |
| Skill | Repeatable task with clear trigger, inputs, outputs, and workflow. | Needs maintenance and platform fit. |
| Tool-use recipe | A pattern for calling tools, APIs, files, databases, or business systems. | Needs strict permission and validation design. |
| Agent instruction | Repository or workspace context such as AGENTS.md or copilot-instructions.md. | Can become stale or too broad. |
| MCP recipe | Tool, prompt, or resource exposure through the Model Context Protocol. | Requires host setup and trust-boundary review. |

## Minimal Skill Card

```markdown
### Code Review Skill

- **Platform:** Claude Code, Codex
- **Type:** Coding Skill
- **Use Case:** Review pull requests, detect bugs, improve code quality
- **Input:** Diff, repository context, review requirements
- **Output:** Review comments, risk summary, suggested fixes
- **Install:** Link
- **Why Awesome:** Clear review checklist, supports multi-language projects
- **Maturity:** Recommended
- **License:** MIT
- **Tags:** `code-review`, `ai-coding`, `quality`
```

## Good Skill Traits

- Narrow trigger and scope.
- Clear input and output contract.
- Concrete workflow steps.
- Examples or fixtures.
- Explicit install instructions.
- Safety notes for tools, shell, files, credentials, browsers, APIs, and external communication.
- Maintenance signal such as recent commits, docs, releases, or active usage.

## Weak Skill Traits

- Vague "be a better assistant" instructions.
- Hidden or unclear install steps.
- Broad permissions without justification.
- No examples.
- Duplicate of an existing resource.
- Optimized for a single private workflow with no reusable pattern.
