# Awesome Agent Skills

> A curated list of reusable skills, workflows, instructions, and tool-use recipes for AI agents.

This repository is not just a link dump. It is meant to be an agent capability entry point: what is worth using, when to use it, what platform it supports, how mature it is, how to install it, and what to watch out for.

## Contents

- [Featured](#featured)
- [What Is An Agent Skill](#what-is-an-agent-skill)
- [Categories](#categories)
- [AI Coding](#ai-coding)
- [Research & Search](#research-and-search)
- [Writing & Content](#writing-and-content)
- [Data Analysis](#data-analysis)
- [Browser Automation](#browser-automation)
- [Design & Media](#design-and-media)
- [Productivity](#productivity)
- [DevOps](#devops)
- [MCP & Tool Use](#mcp-and-tool-use)
- [Agent Instructions](#agent-instructions)
- [Evaluation & Testing](#evaluation-and-testing)
- [Safety & Security](#safety-and-security)
- [Skills By Platform](#skills-by-platform)
- [Skill Card Format](#skill-card-format)
- [Quality Bar](#quality-bar)
- [Data Files](#data-files)
- [Contributing](#contributing)
- [License](#license)

## Featured

Hand-picked skills and references that are practical, reusable, and well documented.

- [OpenAI Codex Agent Skills](https://developers.openai.com/codex/skills) - Official Codex guide for packaging reusable workflows as SKILL.md folders with optional scripts, references, and assets. Why awesome: The clearest starting point for writing Codex-native skills that are discoverable, scoped, and reusable.
- [Anthropic Agent Skills](https://platform.claude.com/docs/en/agents-and-tools/agent-skills/overview) - Official Claude documentation for pre-built and custom Agent Skills across Claude products and the API. Why awesome: Explains the production model for skills, including document skills, custom uploads, and code-execution containers.
- [Anthropic Skills Repository](https://github.com/anthropics/skills) - Public repository of Agent Skill examples, including document skills and patterns for technical, creative, and enterprise workflows. Why awesome: A real reference library for how complex skills structure SKILL.md, scripts, and supporting assets.
- [Open Agent Skills Standard](https://agentskills.io/home) - Open format for packaging agent capabilities as folders with SKILL.md metadata, instructions, optional scripts, references, and assets. Why awesome: Gives the ecosystem a shared vocabulary for portable agent capabilities instead of one-off prompt files.
- [AGENTS.md](https://agents.md/) - A simple open format for giving coding agents project context, setup commands, conventions, and operational constraints. Why awesome: The most portable project-instruction format for coding agents, easy to version and review.
- [GitHub Awesome Copilot](https://github.com/github/awesome-copilot) - Community collection of Copilot custom agents, instructions, prompts, skills, hooks, workflows, and plugins. Why awesome: A broad reference catalog for how the Copilot ecosystem packages reusable agent behavior.
- [Model Context Protocol Servers](https://github.com/modelcontextprotocol/servers) - Reference MCP server implementations maintained for demonstrating MCP features, SDK usage, tools, prompts, and resources. Why awesome: Best starting point for understanding the shape of MCP servers without relying on vendor-specific wrappers.
- [OWASP Top 10 for LLM Applications](https://owasp.org/www-project-top-10-for-large-language-model-applications/) - Security risks and guidance for LLM applications, including prompt injection, data leakage, and unsafe output handling. Why awesome: Essential security lens for any skill that reads untrusted content or invokes tools.

## What Is An Agent Skill?

An Agent Skill is a reusable package of instructions, examples, scripts, references, or assets that helps an AI agent perform a task reliably. A good skill is narrower than a general prompt and more portable than a one-off chat transcript.

Useful neighboring formats include:

- **Skill:** A packaged capability, often centered on `SKILL.md`, with optional scripts and resources.
- **Tool-use recipe:** A repeatable pattern for connecting agents to tools, APIs, files, databases, browsers, or business systems.
- **Agent instruction:** Repository or workspace guidance such as `AGENTS.md`, `CLAUDE.md`, `GEMINI.md`, `.github/copilot-instructions.md`, or Cursor rules.
- **MCP recipe:** A server, SDK, or configuration pattern that exposes tools, prompts, or resources through the Model Context Protocol.

## Categories

- [AI Coding](#ai-coding) - Skills and workflows for code review, bug fixing, refactoring, tests, docs, migrations, and architecture work.
- [Research & Search](#research-and-search) - Reusable research workflows for web search, literature review, market research, company research, and product comparison.
- [Writing & Content](#writing-and-content) - Skills for technical writing, scripts, release notes, translation, SEO briefs, and content repurposing.
- [Data Analysis](#data-analysis) - CSV, spreadsheet, SQL, BI dashboard, report generation, data cleaning, and analytical storytelling skills.
- [Browser Automation](#browser-automation) - Browser testing, interaction, screenshots, site QA, and web task automation recipes.
- [Design & Media](#design-and-media) - Presentation, image, UI review, brand guide, poster, storyboard, and video workflow skills.
- [Productivity](#productivity) - Calendar, email, task, note, meeting, and knowledge workflow recipes for agents.
- [DevOps](#devops) - CI repair, release, deployment, infrastructure triage, observability, and operations recipes.
- [MCP & Tool Use](#mcp-and-tool-use) - Model Context Protocol servers, SDKs, tool routing, function calling, and multi-step tool-use patterns.
- [Agent Instructions](#agent-instructions) - AGENTS.md, CLAUDE.md, GEMINI.md, Copilot instructions, Cursor rules, Windsurf rules, and project context files.
- [Evaluation & Testing](#evaluation-and-testing) - Skill evaluation, regression checks, benchmark loops, review gates, and quality scoring workflows.
- [Safety & Security](#safety-and-security) - Prompt injection defense, permissions, secret handling, safe file operations, and human approval workflows.

## AI Coding

Skills and workflows for code review, bug fixing, refactoring, tests, docs, migrations, and architecture work.

| Skill | Platform | Type | Maturity | Tags |
|---|---|---|---|---|
| [AGENTS.md](https://agents.md/) | Codex / GitHub Copilot / Cursor / General Agent Skills | Instruction Format | Recommended | `agents-md`, `project-instructions`, `coding-agent`, `repo-context` |
| [Aider Conventions](https://aider.chat/docs/usage/conventions.html) | Aider / General Agent Skills | Instruction Guide | Promising | `aider`, `conventions`, `coding-agent`, `repo-context` |
| [Anthropic Agent Skills](https://platform.claude.com/docs/en/agents-and-tools/agent-skills/overview) | Claude / Claude Code | Skill Format | Recommended | `claude`, `agent-skills`, `skill-format`, `code-execution` |
| [Anthropic Skills Repository](https://github.com/anthropics/skills) | Claude / Claude Code | Skill Collection | Recommended | `examples`, `pdf`, `docx`, `xlsx`, `pptx`, `skill-patterns` |
| [Awesome Cursor Rules](https://github.com/PatrickJS/awesome-cursorrules) | Cursor | Collection | Promising | `cursor`, `rules`, `frameworks`, `templates` |
| [Codex AGENTS.md Guide](https://developers.openai.com/codex/guides/agents-md) | Codex | Instruction Guide | Recommended | `agents-md`, `codex`, `project-context`, `instruction-precedence` |
| [Continue Custom Slash Commands](https://docs.continue.dev/customize/deep-dives/slash-commands) | Continue / VS Code / JetBrains | Workflow Recipe | Promising | `slash-commands`, `continue`, `workflow`, `instructions` |
| [Cursor Rules](https://cursor.com/docs/rules) | Cursor | Instruction Guide | Recommended | `cursor`, `rules`, `mdc`, `project-instructions` |
| [Gemini CLI GEMINI.md](https://geminicli.com/docs/cli/gemini-md/) | Gemini CLI | Instruction Guide | Recommended | `gemini`, `gemini-md`, `context`, `imports` |
| [GitHub Awesome Copilot](https://github.com/github/awesome-copilot) | GitHub Copilot / VS Code | Collection | Recommended | `copilot`, `awesome-list`, `custom-agents`, `instructions` |
| [GitHub Copilot Repository Instructions](https://docs.github.com/en/copilot/how-tos/copilot-on-github/customize-copilot/add-custom-instructions/add-repository-instructions) | GitHub Copilot | Instruction Guide | Recommended | `copilot`, `instructions`, `github`, `repository-standards` |
| [GitHub MCP Server Guide](https://github.blog/ai-and-ml/generative-ai/a-practical-guide-on-how-to-use-the-github-mcp-server/) | MCP / GitHub Copilot / VS Code | MCP Recipe | Recommended | `github`, `mcp`, `repository`, `access-control` |
| [LangGraph](https://github.com/langchain-ai/langgraph) | General Agent Skills | Workflow Framework | Recommended | `agent-workflow`, `graph`, `state-machine`, `tool-routing` |
| [Microsoft AutoGen](https://github.com/microsoft/autogen) | General Agent Skills | Workflow Framework | Promising | `multi-agent`, `workflow`, `tool-use`, `orchestration` |
| [OpenAI Codex Agent Skills](https://developers.openai.com/codex/skills) | Codex | Skill Format | Recommended | `codex`, `skill-format`, `workflow`, `progressive-disclosure` |
| [OpenAI Codex MCP Guide](https://developers.openai.com/codex/mcp) | Codex / MCP | Tool Guide | Recommended | `codex`, `mcp`, `tool-use`, `configuration` |
| [Sweep AI](https://github.com/sweepai/sweep) | GitHub / General Agent Skills | Workflow Recipe | Promising | `issue-to-pr`, `coding-agent`, `github`, `automation` |
| [VS Code Copilot Custom Instructions](https://code.visualstudio.com/docs/agent-customization/custom-instructions) | GitHub Copilot / VS Code | Instruction Guide | Recommended | `vscode`, `copilot`, `instructions`, `prompt-files` |

## Research & Search

Reusable research workflows for web search, literature review, market research, company research, and product comparison.

| Skill | Platform | Type | Maturity | Tags |
|---|---|---|---|---|
| [Anthropic Cookbook](https://github.com/anthropics/claude-cookbooks) | Claude / General Agent Skills | Recipe Collection | Recommended | `cookbook`, `claude`, `examples`, `tool-use` |
| [CrewAI](https://github.com/crewAIInc/crewAI) | General Agent Skills | Workflow Framework | Promising | `multi-agent`, `roles`, `workflow`, `automation` |
| [DSPy](https://github.com/stanfordnlp/dspy) | General Agent Skills | Evaluation Framework | Recommended | `optimization`, `evals`, `prompt-programming`, `pipelines` |
| [LlamaIndex Workflows](https://developers.llamaindex.ai/python/llamaagents/workflows/) | General Agent Skills | Workflow Framework | Promising | `workflow`, `rag`, `tool-use`, `orchestration` |
| [Microsoft AutoGen](https://github.com/microsoft/autogen) | General Agent Skills | Workflow Framework | Promising | `multi-agent`, `workflow`, `tool-use`, `orchestration` |
| [OpenAI Cookbook](https://developers.openai.com/cookbook) | OpenAI / General Agent Skills | Recipe Collection | Recommended | `cookbook`, `examples`, `tool-use`, `structured-outputs` |

## Writing & Content

Skills for technical writing, scripts, release notes, translation, SEO briefs, and content repurposing.

| Skill | Platform | Type | Maturity | Tags |
|---|---|---|---|---|
| [Anthropic Agent Skills](https://platform.claude.com/docs/en/agents-and-tools/agent-skills/overview) | Claude / Claude Code | Skill Format | Recommended | `claude`, `agent-skills`, `skill-format`, `code-execution` |
| [Anthropic Cookbook](https://github.com/anthropics/claude-cookbooks) | Claude / General Agent Skills | Recipe Collection | Recommended | `cookbook`, `claude`, `examples`, `tool-use` |
| [Anthropic Skills Repository](https://github.com/anthropics/skills) | Claude / Claude Code | Skill Collection | Recommended | `examples`, `pdf`, `docx`, `xlsx`, `pptx`, `skill-patterns` |
| [Claude Prompt Engineering](https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/overview) | Claude / Claude Code / General Agent Skills | Prompt Pattern | Recommended | `claude`, `prompt-patterns`, `instructions`, `examples` |

## Data Analysis

CSV, spreadsheet, SQL, BI dashboard, report generation, data cleaning, and analytical storytelling skills.

| Skill | Platform | Type | Maturity | Tags |
|---|---|---|---|---|
| [Anthropic Skills Repository](https://github.com/anthropics/skills) | Claude / Claude Code | Skill Collection | Recommended | `examples`, `pdf`, `docx`, `xlsx`, `pptx`, `skill-patterns` |
| [DSPy](https://github.com/stanfordnlp/dspy) | General Agent Skills | Evaluation Framework | Recommended | `optimization`, `evals`, `prompt-programming`, `pipelines` |
| [LangGraph](https://github.com/langchain-ai/langgraph) | General Agent Skills | Workflow Framework | Recommended | `agent-workflow`, `graph`, `state-machine`, `tool-routing` |
| [LlamaIndex Workflows](https://developers.llamaindex.ai/python/llamaagents/workflows/) | General Agent Skills | Workflow Framework | Promising | `workflow`, `rag`, `tool-use`, `orchestration` |
| [MCP Python SDK](https://github.com/modelcontextprotocol/python-sdk) | MCP / Python | Tool SDK | Recommended | `mcp`, `python`, `sdk`, `server` |
| [Microsoft Presidio](https://github.com/microsoft/presidio) | General Agent Skills | Safety Tool | Recommended | `pii`, `redaction`, `privacy`, `data-protection` |
| [Microsoft Prompt Flow](https://github.com/microsoft/promptflow) | Azure / General Agent Skills | Workflow Tool | Promising | `workflow`, `evaluation`, `prompt-engineering`, `llmops` |
| [Model Context Protocol Servers](https://github.com/modelcontextprotocol/servers) | MCP / General Agent Skills | MCP Recipe | Recommended | `mcp`, `servers`, `reference-implementation`, `tools` |
| [OpenAI Cookbook](https://developers.openai.com/cookbook) | OpenAI / General Agent Skills | Recipe Collection | Recommended | `cookbook`, `examples`, `tool-use`, `structured-outputs` |

## Browser Automation

Browser testing, interaction, screenshots, site QA, and web task automation recipes.

| Skill | Platform | Type | Maturity | Tags |
|---|---|---|---|---|
| [Anthropic Computer Use](https://platform.claude.com/docs/en/agents-and-tools/tool-use/computer-use-tool) | Claude | Tool Use Recipe | Promising | `computer-use`, `automation`, `screenshots`, `human-approval` |
| [Browser Use](https://github.com/browser-use/browser-use) | General Agent Skills | Tool Use Recipe | Promising | `browser`, `automation`, `web-agent`, `tool-use` |
| [Playwright MCP](https://github.com/microsoft/playwright-mcp) | MCP / Playwright | MCP Server | Recommended | `browser`, `playwright`, `mcp`, `screenshots`, `qa` |

## Design & Media

Presentation, image, UI review, brand guide, poster, storyboard, and video workflow skills.

| Skill | Platform | Type | Maturity | Tags |
|---|---|---|---|---|
| [Anthropic Agent Skills](https://platform.claude.com/docs/en/agents-and-tools/agent-skills/overview) | Claude / Claude Code | Skill Format | Recommended | `claude`, `agent-skills`, `skill-format`, `code-execution` |
| [Anthropic Skills Repository](https://github.com/anthropics/skills) | Claude / Claude Code | Skill Collection | Recommended | `examples`, `pdf`, `docx`, `xlsx`, `pptx`, `skill-patterns` |

## Productivity

Calendar, email, task, note, meeting, and knowledge workflow recipes for agents.

| Skill | Platform | Type | Maturity | Tags |
|---|---|---|---|---|
| [CrewAI](https://github.com/crewAIInc/crewAI) | General Agent Skills | Workflow Framework | Promising | `multi-agent`, `roles`, `workflow`, `automation` |
| [Semantic Kernel](https://github.com/microsoft/semantic-kernel) | General Agent Skills / Azure | Workflow Framework | Recommended | `plugins`, `planner`, `enterprise`, `tool-use` |

## DevOps

CI repair, release, deployment, infrastructure triage, observability, and operations recipes.

| Skill | Platform | Type | Maturity | Tags |
|---|---|---|---|---|
| [GitHub MCP Server Guide](https://github.blog/ai-and-ml/generative-ai/a-practical-guide-on-how-to-use-the-github-mcp-server/) | MCP / GitHub Copilot / VS Code | MCP Recipe | Recommended | `github`, `mcp`, `repository`, `access-control` |
| [MCP Python SDK](https://github.com/modelcontextprotocol/python-sdk) | MCP / Python | Tool SDK | Recommended | `mcp`, `python`, `sdk`, `server` |
| [MCP TypeScript SDK](https://github.com/modelcontextprotocol/typescript-sdk) | MCP / Node.js | Tool SDK | Recommended | `mcp`, `typescript`, `sdk`, `server` |
| [Model Context Protocol Servers](https://github.com/modelcontextprotocol/servers) | MCP / General Agent Skills | MCP Recipe | Recommended | `mcp`, `servers`, `reference-implementation`, `tools` |
| [Semantic Kernel](https://github.com/microsoft/semantic-kernel) | General Agent Skills / Azure | Workflow Framework | Recommended | `plugins`, `planner`, `enterprise`, `tool-use` |
| [Sweep AI](https://github.com/sweepai/sweep) | GitHub / General Agent Skills | Workflow Recipe | Promising | `issue-to-pr`, `coding-agent`, `github`, `automation` |

## MCP & Tool Use

Model Context Protocol servers, SDKs, tool routing, function calling, and multi-step tool-use patterns.

| Skill | Platform | Type | Maturity | Tags |
|---|---|---|---|---|
| [Agent Protocol](https://github.com/agi-inc/agent-protocol) | General Agent Skills | Protocol | Experimental | `agent-protocol`, `api`, `interoperability`, `tasks` |
| [Anthropic Computer Use](https://platform.claude.com/docs/en/agents-and-tools/tool-use/computer-use-tool) | Claude | Tool Use Recipe | Promising | `computer-use`, `automation`, `screenshots`, `human-approval` |
| [Anthropic Cookbook](https://github.com/anthropics/claude-cookbooks) | Claude / General Agent Skills | Recipe Collection | Recommended | `cookbook`, `claude`, `examples`, `tool-use` |
| [Awesome MCP Servers](https://github.com/punkpeye/awesome-mcp-servers) | MCP | Collection | Promising | `mcp`, `awesome-list`, `servers`, `integrations` |
| [Browser Use](https://github.com/browser-use/browser-use) | General Agent Skills | Tool Use Recipe | Promising | `browser`, `automation`, `web-agent`, `tool-use` |
| [CrewAI](https://github.com/crewAIInc/crewAI) | General Agent Skills | Workflow Framework | Promising | `multi-agent`, `roles`, `workflow`, `automation` |
| [GitHub Awesome Copilot](https://github.com/github/awesome-copilot) | GitHub Copilot / VS Code | Collection | Recommended | `copilot`, `awesome-list`, `custom-agents`, `instructions` |
| [GitHub MCP Server Guide](https://github.blog/ai-and-ml/generative-ai/a-practical-guide-on-how-to-use-the-github-mcp-server/) | MCP / GitHub Copilot / VS Code | MCP Recipe | Recommended | `github`, `mcp`, `repository`, `access-control` |
| [LangGraph](https://github.com/langchain-ai/langgraph) | General Agent Skills | Workflow Framework | Recommended | `agent-workflow`, `graph`, `state-machine`, `tool-routing` |
| [LlamaIndex Workflows](https://developers.llamaindex.ai/python/llamaagents/workflows/) | General Agent Skills | Workflow Framework | Promising | `workflow`, `rag`, `tool-use`, `orchestration` |
| [MCP For Beginners](https://github.com/microsoft/mcp-for-beginners/) | MCP | Curriculum | Promising | `mcp`, `workshop`, `learning`, `tools` |
| [MCP Python SDK](https://github.com/modelcontextprotocol/python-sdk) | MCP / Python | Tool SDK | Recommended | `mcp`, `python`, `sdk`, `server` |
| [MCP Registry](https://registry.modelcontextprotocol.io/) | MCP | Registry | Recommended | `mcp`, `registry`, `server-discovery` |
| [MCP TypeScript SDK](https://github.com/modelcontextprotocol/typescript-sdk) | MCP / Node.js | Tool SDK | Recommended | `mcp`, `typescript`, `sdk`, `server` |
| [Microsoft AutoGen](https://github.com/microsoft/autogen) | General Agent Skills | Workflow Framework | Promising | `multi-agent`, `workflow`, `tool-use`, `orchestration` |
| [Microsoft Prompt Flow](https://github.com/microsoft/promptflow) | Azure / General Agent Skills | Workflow Tool | Promising | `workflow`, `evaluation`, `prompt-engineering`, `llmops` |
| [Model Context Protocol Servers](https://github.com/modelcontextprotocol/servers) | MCP / General Agent Skills | MCP Recipe | Recommended | `mcp`, `servers`, `reference-implementation`, `tools` |
| [Open Agent Skills Standard](https://agentskills.io/home) | Codex / Claude Code / General Agent Skills | Standard | Recommended | `standard`, `skill-format`, `portable-skills` |
| [OpenAI Codex Agent Skills](https://developers.openai.com/codex/skills) | Codex | Skill Format | Recommended | `codex`, `skill-format`, `workflow`, `progressive-disclosure` |
| [OpenAI Codex MCP Guide](https://developers.openai.com/codex/mcp) | Codex / MCP | Tool Guide | Recommended | `codex`, `mcp`, `tool-use`, `configuration` |
| [OpenAI Cookbook](https://developers.openai.com/cookbook) | OpenAI / General Agent Skills | Recipe Collection | Recommended | `cookbook`, `examples`, `tool-use`, `structured-outputs` |
| [OpenAI Function Calling Guide](https://developers.openai.com/api/docs/guides/function-calling) | OpenAI / General Agent Skills | Tool Use Recipe | Recommended | `function-calling`, `tool-use`, `schemas`, `structured-outputs` |
| [OpenAI Prompt Engineering Guide](https://developers.openai.com/api/docs/guides/prompt-engineering) | OpenAI / General Agent Skills | Prompt Pattern | Recommended | `prompt-patterns`, `instructions`, `decomposition`, `reliability` |
| [OWASP Top 10 for LLM Applications](https://owasp.org/www-project-top-10-for-large-language-model-applications/) | General Agent Skills | Security Guide | Recommended | `owasp`, `prompt-injection`, `llm-security`, `tool-safety` |
| [Playwright MCP](https://github.com/microsoft/playwright-mcp) | MCP / Playwright | MCP Server | Recommended | `browser`, `playwright`, `mcp`, `screenshots`, `qa` |
| [Semantic Kernel](https://github.com/microsoft/semantic-kernel) | General Agent Skills / Azure | Workflow Framework | Recommended | `plugins`, `planner`, `enterprise`, `tool-use` |

## Agent Instructions

AGENTS.md, CLAUDE.md, GEMINI.md, Copilot instructions, Cursor rules, Windsurf rules, and project context files.

| Skill | Platform | Type | Maturity | Tags |
|---|---|---|---|---|
| [Agent Protocol](https://github.com/agi-inc/agent-protocol) | General Agent Skills | Protocol | Experimental | `agent-protocol`, `api`, `interoperability`, `tasks` |
| [AGENTS.md](https://agents.md/) | Codex / GitHub Copilot / Cursor / General Agent Skills | Instruction Format | Recommended | `agents-md`, `project-instructions`, `coding-agent`, `repo-context` |
| [Aider Conventions](https://aider.chat/docs/usage/conventions.html) | Aider / General Agent Skills | Instruction Guide | Promising | `aider`, `conventions`, `coding-agent`, `repo-context` |
| [Awesome Cursor Rules](https://github.com/PatrickJS/awesome-cursorrules) | Cursor | Collection | Promising | `cursor`, `rules`, `frameworks`, `templates` |
| [Claude Prompt Engineering](https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/overview) | Claude / Claude Code / General Agent Skills | Prompt Pattern | Recommended | `claude`, `prompt-patterns`, `instructions`, `examples` |
| [Codex AGENTS.md Guide](https://developers.openai.com/codex/guides/agents-md) | Codex | Instruction Guide | Recommended | `agents-md`, `codex`, `project-context`, `instruction-precedence` |
| [Continue Custom Slash Commands](https://docs.continue.dev/customize/deep-dives/slash-commands) | Continue / VS Code / JetBrains | Workflow Recipe | Promising | `slash-commands`, `continue`, `workflow`, `instructions` |
| [Cursor Rules](https://cursor.com/docs/rules) | Cursor | Instruction Guide | Recommended | `cursor`, `rules`, `mdc`, `project-instructions` |
| [Gemini CLI GEMINI.md](https://geminicli.com/docs/cli/gemini-md/) | Gemini CLI | Instruction Guide | Recommended | `gemini`, `gemini-md`, `context`, `imports` |
| [GitHub Awesome Copilot](https://github.com/github/awesome-copilot) | GitHub Copilot / VS Code | Collection | Recommended | `copilot`, `awesome-list`, `custom-agents`, `instructions` |
| [GitHub Copilot Repository Instructions](https://docs.github.com/en/copilot/how-tos/copilot-on-github/customize-copilot/add-custom-instructions/add-repository-instructions) | GitHub Copilot | Instruction Guide | Recommended | `copilot`, `instructions`, `github`, `repository-standards` |
| [Open Agent Skills Standard](https://agentskills.io/home) | Codex / Claude Code / General Agent Skills | Standard | Recommended | `standard`, `skill-format`, `portable-skills` |
| [OpenAI Prompt Engineering Guide](https://developers.openai.com/api/docs/guides/prompt-engineering) | OpenAI / General Agent Skills | Prompt Pattern | Recommended | `prompt-patterns`, `instructions`, `decomposition`, `reliability` |
| [VS Code Copilot Custom Instructions](https://code.visualstudio.com/docs/agent-customization/custom-instructions) | GitHub Copilot / VS Code | Instruction Guide | Recommended | `vscode`, `copilot`, `instructions`, `prompt-files` |

## Evaluation & Testing

Skill evaluation, regression checks, benchmark loops, review gates, and quality scoring workflows.

| Skill | Platform | Type | Maturity | Tags |
|---|---|---|---|---|
| [Claude Prompt Engineering](https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/overview) | Claude / Claude Code / General Agent Skills | Prompt Pattern | Recommended | `claude`, `prompt-patterns`, `instructions`, `examples` |
| [DSPy](https://github.com/stanfordnlp/dspy) | General Agent Skills | Evaluation Framework | Recommended | `optimization`, `evals`, `prompt-programming`, `pipelines` |
| [Giskard LLM Scan](https://github.com/Giskard-AI/giskard-oss) | General Agent Skills | Safety Tool | Promising | `llm-security`, `testing`, `scan`, `risk` |
| [Guardrails AI](https://github.com/guardrails-ai/guardrails) | General Agent Skills | Safety Tool | Promising | `guardrails`, `validation`, `structured-output`, `safety` |
| [Inspect Evals](https://github.com/UKGovernmentBEIS/inspect_ai) | General Agent Skills | Evaluation Tool | Promising | `evals`, `agent-evaluation`, `tool-use`, `safety` |
| [Microsoft Prompt Flow](https://github.com/microsoft/promptflow) | Azure / General Agent Skills | Workflow Tool | Promising | `workflow`, `evaluation`, `prompt-engineering`, `llmops` |
| [OpenAI Cookbook](https://developers.openai.com/cookbook) | OpenAI / General Agent Skills | Recipe Collection | Recommended | `cookbook`, `examples`, `tool-use`, `structured-outputs` |
| [OpenAI Evals](https://github.com/openai/evals) | OpenAI / General Agent Skills | Evaluation Recipe | Promising | `evals`, `quality`, `regression`, `benchmark` |
| [OpenAI Prompt Engineering Guide](https://developers.openai.com/api/docs/guides/prompt-engineering) | OpenAI / General Agent Skills | Prompt Pattern | Recommended | `prompt-patterns`, `instructions`, `decomposition`, `reliability` |
| [Playwright MCP](https://github.com/microsoft/playwright-mcp) | MCP / Playwright | MCP Server | Recommended | `browser`, `playwright`, `mcp`, `screenshots`, `qa` |
| [Promptfoo](https://github.com/promptfoo/promptfoo) | General Agent Skills | Evaluation Tool | Recommended | `prompt-testing`, `evals`, `regression`, `red-team` |

## Safety & Security

Prompt injection defense, permissions, secret handling, safe file operations, and human approval workflows.

| Skill | Platform | Type | Maturity | Tags |
|---|---|---|---|---|
| [Anthropic Computer Use](https://platform.claude.com/docs/en/agents-and-tools/tool-use/computer-use-tool) | Claude | Tool Use Recipe | Promising | `computer-use`, `automation`, `screenshots`, `human-approval` |
| [Giskard LLM Scan](https://github.com/Giskard-AI/giskard-oss) | General Agent Skills | Safety Tool | Promising | `llm-security`, `testing`, `scan`, `risk` |
| [Guardrails AI](https://github.com/guardrails-ai/guardrails) | General Agent Skills | Safety Tool | Promising | `guardrails`, `validation`, `structured-output`, `safety` |
| [Inspect Evals](https://github.com/UKGovernmentBEIS/inspect_ai) | General Agent Skills | Evaluation Tool | Promising | `evals`, `agent-evaluation`, `tool-use`, `safety` |
| [Microsoft Presidio](https://github.com/microsoft/presidio) | General Agent Skills | Safety Tool | Recommended | `pii`, `redaction`, `privacy`, `data-protection` |
| [OpenAI Evals](https://github.com/openai/evals) | OpenAI / General Agent Skills | Evaluation Recipe | Promising | `evals`, `quality`, `regression`, `benchmark` |
| [OWASP Top 10 for LLM Applications](https://owasp.org/www-project-top-10-for-large-language-model-applications/) | General Agent Skills | Security Guide | Recommended | `owasp`, `prompt-injection`, `llm-security`, `tool-safety` |
| [Promptfoo](https://github.com/promptfoo/promptfoo) | General Agent Skills | Evaluation Tool | Recommended | `prompt-testing`, `evals`, `regression`, `red-team` |


## Skills By Platform

### Aider

- [Aider Conventions](https://aider.chat/docs/usage/conventions.html) - Aider documentation for repository conventions that guide AI coding changes. Why awesome: A concise example of how coding agents benefit from persistent repo-specific rules.

### Azure

- [Microsoft Prompt Flow](https://github.com/microsoft/promptflow) - Tooling for building, evaluating, and deploying LLM workflows. Why awesome: Useful when a skill grows into a multi-node workflow with evaluation and deployment needs.
- [Semantic Kernel](https://github.com/microsoft/semantic-kernel) - SDK for integrating LLMs with plugins, planners, memory, and enterprise application workflows. Why awesome: A mature reference for packaging business capabilities as callable tools and workflows.

### Claude

- [Anthropic Agent Skills](https://platform.claude.com/docs/en/agents-and-tools/agent-skills/overview) - Official Claude documentation for pre-built and custom Agent Skills across Claude products and the API. Why awesome: Explains the production model for skills, including document skills, custom uploads, and code-execution containers.
- [Anthropic Computer Use](https://platform.claude.com/docs/en/agents-and-tools/tool-use/computer-use-tool) - Anthropic documentation for computer-use agents that interact with graphical applications. Why awesome: Important reference for when a skill needs GUI automation rather than API-only tools.
- [Anthropic Cookbook](https://github.com/anthropics/claude-cookbooks) - Anthropic examples and recipes for building with Claude, tools, retrieval, and workflows. Why awesome: Strong source of Claude-oriented tool-use and workflow examples.
- [Anthropic Skills Repository](https://github.com/anthropics/skills) - Public repository of Agent Skill examples, including document skills and patterns for technical, creative, and enterprise workflows. Why awesome: A real reference library for how complex skills structure SKILL.md, scripts, and supporting assets.
- [Claude Prompt Engineering](https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/overview) - Anthropic guidance for writing clear prompts, examples, XML-style structure, chain-of-thought alternatives, and prompt evaluation. Why awesome: Useful for converting broad task requests into durable instruction formats.

### Claude Code

- [Anthropic Agent Skills](https://platform.claude.com/docs/en/agents-and-tools/agent-skills/overview) - Official Claude documentation for pre-built and custom Agent Skills across Claude products and the API. Why awesome: Explains the production model for skills, including document skills, custom uploads, and code-execution containers.
- [Anthropic Skills Repository](https://github.com/anthropics/skills) - Public repository of Agent Skill examples, including document skills and patterns for technical, creative, and enterprise workflows. Why awesome: A real reference library for how complex skills structure SKILL.md, scripts, and supporting assets.
- [Claude Prompt Engineering](https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/overview) - Anthropic guidance for writing clear prompts, examples, XML-style structure, chain-of-thought alternatives, and prompt evaluation. Why awesome: Useful for converting broad task requests into durable instruction formats.
- [Open Agent Skills Standard](https://agentskills.io/home) - Open format for packaging agent capabilities as folders with SKILL.md metadata, instructions, optional scripts, references, and assets. Why awesome: Gives the ecosystem a shared vocabulary for portable agent capabilities instead of one-off prompt files.

### Codex

- [AGENTS.md](https://agents.md/) - A simple open format for giving coding agents project context, setup commands, conventions, and operational constraints. Why awesome: The most portable project-instruction format for coding agents, easy to version and review.
- [Codex AGENTS.md Guide](https://developers.openai.com/codex/guides/agents-md) - Official Codex guidance for instruction discovery, precedence, global AGENTS.md files, project files, and overrides. Why awesome: Useful when teams need predictable instruction layering across global and project scopes.
- [Open Agent Skills Standard](https://agentskills.io/home) - Open format for packaging agent capabilities as folders with SKILL.md metadata, instructions, optional scripts, references, and assets. Why awesome: Gives the ecosystem a shared vocabulary for portable agent capabilities instead of one-off prompt files.
- [OpenAI Codex Agent Skills](https://developers.openai.com/codex/skills) - Official Codex guide for packaging reusable workflows as SKILL.md folders with optional scripts, references, and assets. Why awesome: The clearest starting point for writing Codex-native skills that are discoverable, scoped, and reusable.
- [OpenAI Codex MCP Guide](https://developers.openai.com/codex/mcp) - Codex documentation for configuring MCP servers and tool access. Why awesome: Shows how MCP fits into Codex workflows without inventing a custom integration layer.

### Continue

- [Continue Custom Slash Commands](https://docs.continue.dev/customize/deep-dives/slash-commands) - Continue documentation for defining reusable slash commands that guide coding workflows. Why awesome: A lightweight pattern for repeatable coding workflows when a full skill package is too much.

### Cursor

- [AGENTS.md](https://agents.md/) - A simple open format for giving coding agents project context, setup commands, conventions, and operational constraints. Why awesome: The most portable project-instruction format for coding agents, easy to version and review.
- [Awesome Cursor Rules](https://github.com/PatrickJS/awesome-cursorrules) - Community collection of Cursor rules for frameworks, languages, libraries, and project conventions. Why awesome: Useful as a pattern bank for writing project-aware Cursor rules instead of generic prompts.
- [Cursor Rules](https://cursor.com/docs/rules) - Official Cursor documentation for project, team, user rules, and AGENTS.md support. Why awesome: Useful for making Cursor behave consistently inside large repos and framework-specific codebases.

### Gemini CLI

- [Gemini CLI GEMINI.md](https://geminicli.com/docs/cli/gemini-md/) - Official Gemini CLI documentation for hierarchical GEMINI.md context files and modular imports. Why awesome: Shows how to layer agent context without repeating instructions in every prompt.

### General Agent Skills

- [Agent Protocol](https://github.com/agi-inc/agent-protocol) - Specification and examples for a common API layer around agent task execution. Why awesome: A useful comparison point when thinking about skill portability and agent interoperability.
- [AGENTS.md](https://agents.md/) - A simple open format for giving coding agents project context, setup commands, conventions, and operational constraints. Why awesome: The most portable project-instruction format for coding agents, easy to version and review.
- [Aider Conventions](https://aider.chat/docs/usage/conventions.html) - Aider documentation for repository conventions that guide AI coding changes. Why awesome: A concise example of how coding agents benefit from persistent repo-specific rules.
- [Anthropic Cookbook](https://github.com/anthropics/claude-cookbooks) - Anthropic examples and recipes for building with Claude, tools, retrieval, and workflows. Why awesome: Strong source of Claude-oriented tool-use and workflow examples.
- [Browser Use](https://github.com/browser-use/browser-use) - Library for building AI agents that control browsers and perform web tasks. Why awesome: A useful reference for browser task decomposition, observations, and action loops.
- [Claude Prompt Engineering](https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/overview) - Anthropic guidance for writing clear prompts, examples, XML-style structure, chain-of-thought alternatives, and prompt evaluation. Why awesome: Useful for converting broad task requests into durable instruction formats.
- [CrewAI](https://github.com/crewAIInc/crewAI) - Framework for orchestrating role-based AI agents and task workflows. Why awesome: A useful pattern source for decomposing repeatable workflows into roles and tasks.
- [DSPy](https://github.com/stanfordnlp/dspy) - Framework for programming and optimizing language model pipelines with declarative modules and evaluation-driven improvement. Why awesome: Useful for evolving fragile prompts into measurable, optimized agent components.
- [Giskard LLM Scan](https://github.com/Giskard-AI/giskard-oss) - Open-source testing framework for detecting risks in AI applications, including LLM vulnerabilities. Why awesome: Useful for teams that want automated checks around LLM behavior and safety issues.
- [Guardrails AI](https://github.com/guardrails-ai/guardrails) - Framework for validating, correcting, and constraining LLM outputs with validators and structured checks. Why awesome: Helpful when skill outputs need validation before tools, files, or downstream systems consume them.
- [Inspect Evals](https://github.com/UKGovernmentBEIS/inspect_ai) - Evaluation framework for large language model tasks, including tool-use and agent-style evaluations. Why awesome: Good fit for teams that want deeper evaluation harnesses around agent workflows.
- [LangGraph](https://github.com/langchain-ai/langgraph) - Framework for building stateful, multi-step agent workflows with explicit graph control. Why awesome: Good reference for turning ad hoc multi-step tool use into explicit, inspectable workflow graphs.
- [LlamaIndex Workflows](https://developers.llamaindex.ai/python/llamaagents/workflows/) - Workflow abstractions for orchestrating multi-step LLM applications and tool pipelines. Why awesome: Good reference when research or RAG skills need explicit steps, events, and retry logic.
- [Microsoft AutoGen](https://github.com/microsoft/autogen) - Framework for building AI agents, multi-agent systems, and tool-using workflows. Why awesome: Useful comparison point for skill authors designing coordinated multi-agent behavior.
- [Microsoft Presidio](https://github.com/microsoft/presidio) - Data protection and de-identification toolkit for detecting and anonymizing sensitive information. Why awesome: Practical building block for skills that handle logs, support tickets, documents, or analytics exports.
- [Microsoft Prompt Flow](https://github.com/microsoft/promptflow) - Tooling for building, evaluating, and deploying LLM workflows. Why awesome: Useful when a skill grows into a multi-node workflow with evaluation and deployment needs.
- [Model Context Protocol Servers](https://github.com/modelcontextprotocol/servers) - Reference MCP server implementations maintained for demonstrating MCP features, SDK usage, tools, prompts, and resources. Why awesome: Best starting point for understanding the shape of MCP servers without relying on vendor-specific wrappers.
- [Open Agent Skills Standard](https://agentskills.io/home) - Open format for packaging agent capabilities as folders with SKILL.md metadata, instructions, optional scripts, references, and assets. Why awesome: Gives the ecosystem a shared vocabulary for portable agent capabilities instead of one-off prompt files.
- [OpenAI Cookbook](https://developers.openai.com/cookbook) - Practical examples for OpenAI API use cases, including tool use, structured outputs, retrieval, evaluation, and workflows. Why awesome: High-signal examples that help skill authors move from concept to runnable implementation.
- [OpenAI Evals](https://github.com/openai/evals) - Framework and examples for evaluating model behavior and task performance. Why awesome: Useful foundation for turning skill quality from vibes into repeatable checks.
- [OpenAI Function Calling Guide](https://developers.openai.com/api/docs/guides/function-calling) - Official guide for connecting models to external tools with function schemas and structured arguments. Why awesome: Core reference for tool schemas, routing, and multi-step tool use outside MCP.
- [OpenAI Prompt Engineering Guide](https://developers.openai.com/api/docs/guides/prompt-engineering) - Official guide for prompt patterns, instruction structure, decomposition, and reliability tactics. Why awesome: Helpful for turning vague prompt dumps into explicit, testable agent instructions.
- [OWASP Top 10 for LLM Applications](https://owasp.org/www-project-top-10-for-large-language-model-applications/) - Security risks and guidance for LLM applications, including prompt injection, data leakage, and unsafe output handling. Why awesome: Essential security lens for any skill that reads untrusted content or invokes tools.
- [Promptfoo](https://github.com/promptfoo/promptfoo) - Open-source tool for testing prompts, models, and agent workflows with assertions and regression suites. Why awesome: Practical for evaluating skill prompts, tool-use outputs, and safety behavior before publishing.
- [Semantic Kernel](https://github.com/microsoft/semantic-kernel) - SDK for integrating LLMs with plugins, planners, memory, and enterprise application workflows. Why awesome: A mature reference for packaging business capabilities as callable tools and workflows.
- [Sweep AI](https://github.com/sweepai/sweep) - Open-source AI junior developer workflow for turning issues into code changes and pull requests. Why awesome: Useful pattern reference for issue triage, repo context gathering, and PR automation.

### GitHub

- [Sweep AI](https://github.com/sweepai/sweep) - Open-source AI junior developer workflow for turning issues into code changes and pull requests. Why awesome: Useful pattern reference for issue triage, repo context gathering, and PR automation.

### GitHub Copilot

- [AGENTS.md](https://agents.md/) - A simple open format for giving coding agents project context, setup commands, conventions, and operational constraints. Why awesome: The most portable project-instruction format for coding agents, easy to version and review.
- [GitHub Awesome Copilot](https://github.com/github/awesome-copilot) - Community collection of Copilot custom agents, instructions, prompts, skills, hooks, workflows, and plugins. Why awesome: A broad reference catalog for how the Copilot ecosystem packages reusable agent behavior.
- [GitHub Copilot Repository Instructions](https://docs.github.com/en/copilot/how-tos/copilot-on-github/customize-copilot/add-custom-instructions/add-repository-instructions) - Official GitHub documentation for repository-wide and path-specific Copilot custom instructions. Why awesome: Turns coding standards, build steps, and review expectations into versioned agent context.
- [GitHub MCP Server Guide](https://github.blog/ai-and-ml/generative-ai/a-practical-guide-on-how-to-use-the-github-mcp-server/) - Practical guide for configuring and using GitHub's MCP server with access controls and examples. Why awesome: Concrete example of connecting agents to a high-value developer system with explicit access-control steps.
- [VS Code Copilot Custom Instructions](https://code.visualstudio.com/docs/agent-customization/custom-instructions) - VS Code guide for custom instructions, reusable prompt files, and organizing Copilot guidance by task or language. Why awesome: Good reference for splitting global standards from language-specific and task-specific guidance.

### JetBrains

- [Continue Custom Slash Commands](https://docs.continue.dev/customize/deep-dives/slash-commands) - Continue documentation for defining reusable slash commands that guide coding workflows. Why awesome: A lightweight pattern for repeatable coding workflows when a full skill package is too much.

### MCP

- [Awesome MCP Servers](https://github.com/punkpeye/awesome-mcp-servers) - Large community-curated list of MCP servers across developer tools, data, search, browser automation, and business systems. Why awesome: Useful for market scanning and comparison when choosing MCP integrations.
- [GitHub MCP Server Guide](https://github.blog/ai-and-ml/generative-ai/a-practical-guide-on-how-to-use-the-github-mcp-server/) - Practical guide for configuring and using GitHub's MCP server with access controls and examples. Why awesome: Concrete example of connecting agents to a high-value developer system with explicit access-control steps.
- [MCP For Beginners](https://github.com/microsoft/mcp-for-beginners/) - Open-source curriculum for learning Model Context Protocol with hands-on examples across multiple languages. Why awesome: A stable hands-on path for developers who need to understand MCP by building, not just reading docs.
- [MCP Python SDK](https://github.com/modelcontextprotocol/python-sdk) - Official Python SDK for implementing MCP servers and clients. Why awesome: Good fit for data, automation, and internal API tool servers where Python is already the glue language.
- [MCP Registry](https://registry.modelcontextprotocol.io/) - Official registry for discovering MCP servers. Why awesome: A better discovery layer than relying on scattered README links.
- [MCP TypeScript SDK](https://github.com/modelcontextprotocol/typescript-sdk) - Official TypeScript SDK for building MCP servers and clients. Why awesome: A practical foundation for writing strongly typed tool servers for coding agents.
- [Model Context Protocol Servers](https://github.com/modelcontextprotocol/servers) - Reference MCP server implementations maintained for demonstrating MCP features, SDK usage, tools, prompts, and resources. Why awesome: Best starting point for understanding the shape of MCP servers without relying on vendor-specific wrappers.
- [OpenAI Codex MCP Guide](https://developers.openai.com/codex/mcp) - Codex documentation for configuring MCP servers and tool access. Why awesome: Shows how MCP fits into Codex workflows without inventing a custom integration layer.
- [Playwright MCP](https://github.com/microsoft/playwright-mcp) - MCP server that gives agents browser automation capabilities through Playwright. Why awesome: A practical bridge between agent reasoning and real browser state for QA and workflow automation.

### Node.js

- [MCP TypeScript SDK](https://github.com/modelcontextprotocol/typescript-sdk) - Official TypeScript SDK for building MCP servers and clients. Why awesome: A practical foundation for writing strongly typed tool servers for coding agents.

### OpenAI

- [OpenAI Cookbook](https://developers.openai.com/cookbook) - Practical examples for OpenAI API use cases, including tool use, structured outputs, retrieval, evaluation, and workflows. Why awesome: High-signal examples that help skill authors move from concept to runnable implementation.
- [OpenAI Evals](https://github.com/openai/evals) - Framework and examples for evaluating model behavior and task performance. Why awesome: Useful foundation for turning skill quality from vibes into repeatable checks.
- [OpenAI Function Calling Guide](https://developers.openai.com/api/docs/guides/function-calling) - Official guide for connecting models to external tools with function schemas and structured arguments. Why awesome: Core reference for tool schemas, routing, and multi-step tool use outside MCP.
- [OpenAI Prompt Engineering Guide](https://developers.openai.com/api/docs/guides/prompt-engineering) - Official guide for prompt patterns, instruction structure, decomposition, and reliability tactics. Why awesome: Helpful for turning vague prompt dumps into explicit, testable agent instructions.

### Playwright

- [Playwright MCP](https://github.com/microsoft/playwright-mcp) - MCP server that gives agents browser automation capabilities through Playwright. Why awesome: A practical bridge between agent reasoning and real browser state for QA and workflow automation.

### Python

- [MCP Python SDK](https://github.com/modelcontextprotocol/python-sdk) - Official Python SDK for implementing MCP servers and clients. Why awesome: Good fit for data, automation, and internal API tool servers where Python is already the glue language.

### VS Code

- [Continue Custom Slash Commands](https://docs.continue.dev/customize/deep-dives/slash-commands) - Continue documentation for defining reusable slash commands that guide coding workflows. Why awesome: A lightweight pattern for repeatable coding workflows when a full skill package is too much.
- [GitHub Awesome Copilot](https://github.com/github/awesome-copilot) - Community collection of Copilot custom agents, instructions, prompts, skills, hooks, workflows, and plugins. Why awesome: A broad reference catalog for how the Copilot ecosystem packages reusable agent behavior.
- [GitHub MCP Server Guide](https://github.blog/ai-and-ml/generative-ai/a-practical-guide-on-how-to-use-the-github-mcp-server/) - Practical guide for configuring and using GitHub's MCP server with access controls and examples. Why awesome: Concrete example of connecting agents to a high-value developer system with explicit access-control steps.
- [VS Code Copilot Custom Instructions](https://code.visualstudio.com/docs/agent-customization/custom-instructions) - VS Code guide for custom instructions, reusable prompt files, and organizing Copilot guidance by task or language. Why awesome: Good reference for splitting global standards from language-specific and task-specific guidance.


## Skill Card Format

Use this format when adding or reviewing a skill:

### Code Review Skill

- **Platform:** Claude Code, Codex
- **Type:** Coding Skill
- **Use Case:** Review pull requests, detect bugs, and improve code quality.
- **Input:** Diff, repository context, and review requirements.
- **Output:** Review comments, risk summary, and suggested fixes.
- **Install:** Link to installation instructions.
- **Why Awesome:** Clear review checklist, practical examples, and a safe review workflow.
- **Maturity:** Recommended
- **License:** MIT
- **Tags:** `code-review`, `ai-coding`, `quality`


## Quality Bar

A submitted skill should meet at least three of these criteria:

- Solves a clear and reusable task.
- Has public documentation or source code.
- Provides installation or usage instructions.
- Includes examples, screenshots, or realistic usage notes.
- Works with at least one known agent platform.
- Has a clear license.
- Is actively maintained or widely used.
- Avoids unsafe default behavior.

Not a fit:

- Pure prompt dumps without context.
- Closed tools with no public docs.
- Unmaintained spam projects.
- Duplicate skills with no meaningful difference.
- Skills that require unsafe permissions by default.
- Tools focused on credential theft, scraping abuse, spam, malware, evasion, or bypassing safety controls.

## Data Files

- `data/skills.yml` is the source of truth for listed resources.
- `data/categories.yml` defines categories and maturity labels.
- `data/tools.yml` tracks platforms, protocols, and instruction files.
- Run `npm run validate` to validate data.
- Run `npm run generate` to regenerate this README.

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) and [docs/submit-a-skill.md](docs/submit-a-skill.md).

## License

MIT. See [LICENSE](LICENSE).
