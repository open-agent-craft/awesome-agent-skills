# Awesome Agent Skills

> 一个面向 AI Agent 的可复用 Skills、工作流、说明文件与工具使用方案精选库。

这个仓库不只是一个链接合集，而是一个 Agent 能力入口：告诉你哪些资源值得看、适合什么场景、支持哪些平台、成熟度如何、怎么安装，以及有哪些需要注意的坑。

[English Version](./README.md)

## 目录

- [精选推荐](#精选推荐)
- [什么是 Agent Skill](#什么是-agent-skill)
- [分类](#分类)
- [AI Coding Skills](#ai-coding-skills)
- [Research & Search Skills](#research-and-search-skills)
- [Writing & Content Skills](#writing-and-content-skills)
- [Data Analysis Skills](#data-analysis-skills)
- [Browser Automation](#browser-automation)
- [Design & Media](#design-and-media)
- [Productivity](#productivity)
- [DevOps](#devops)
- [MCP 与 Tool Use](#mcp-与-tool-use)
- [Agent Instructions](#agent-instructions)
- [Evaluation & Testing](#evaluation-and-testing)
- [Safety & Security](#safety-and-security)
- [按平台查看](#按平台查看)
- [Skill 卡片格式](#skill-卡片格式)
- [收录标准](#收录标准)
- [数据文件](#数据文件)
- [贡献方式](#贡献方式)
- [许可证](#许可证)

## 精选推荐

优先挑出那些实用、可复用、文档完善的技能与参考资源。

- [OpenAI Codex Agent Skills](https://developers.openai.com/codex/skills) - Official Codex guide for packaging reusable workflows as SKILL.md folders with optional scripts, references, and assets. 为什么值得看：The clearest starting point for writing Codex-native skills that are discoverable, scoped, and reusable.
- [Anthropic Agent Skills](https://platform.claude.com/docs/en/agents-and-tools/agent-skills/overview) - Official Claude documentation for pre-built and custom Agent Skills across Claude products and the API. 为什么值得看：Explains the production model for skills, including document skills, custom uploads, and code-execution containers.
- [Anthropic Skills Repository](https://github.com/anthropics/skills) - Public repository of Agent Skill examples, including document skills and patterns for technical, creative, and enterprise workflows. 为什么值得看：A real reference library for how complex skills structure SKILL.md, scripts, and supporting assets.
- [Open Agent Skills Standard](https://agentskills.io/home) - Open format for packaging agent capabilities as folders with SKILL.md metadata, instructions, optional scripts, references, and assets. 为什么值得看：Gives the ecosystem a shared vocabulary for portable agent capabilities instead of one-off prompt files.
- [AGENTS.md](https://agents.md/) - A simple open format for giving coding agents project context, setup commands, conventions, and operational constraints. 为什么值得看：The most portable project-instruction format for coding agents, easy to version and review.
- [GitHub Awesome Copilot](https://github.com/github/awesome-copilot) - Community collection of Copilot custom agents, instructions, prompts, skills, hooks, workflows, and plugins. 为什么值得看：A broad reference catalog for how the Copilot ecosystem packages reusable agent behavior.
- [Model Context Protocol Servers](https://github.com/modelcontextprotocol/servers) - Reference MCP server implementations maintained for demonstrating MCP features, SDK usage, tools, prompts, and resources. 为什么值得看：Best starting point for understanding the shape of MCP servers without relying on vendor-specific wrappers.
- [OWASP Top 10 for LLM Applications](https://owasp.org/www-project-top-10-for-large-language-model-applications/) - Security risks and guidance for LLM applications, including prompt injection, data leakage, and unsafe output handling. 为什么值得看：Essential security lens for any skill that reads untrusted content or invokes tools.

## 什么是 Agent Skill

Agent Skill 是一类可复用的能力包，通常由指令、示例、脚本、参考资料或资源文件组成，用来帮助 AI Agent 更稳定地完成某一类任务。好的 Skill 比通用 Prompt 更聚焦，也比一次性的聊天记录更便于迁移和复用。

几个相邻但不完全相同的概念：

- **Skill：** 一种能力打包形式，常见中心文件是 `SKILL.md`，也可以附带脚本和资源。
- **Tool-use recipe：** 一套把 Agent 连接到工具、API、文件、数据库、浏览器或业务系统的可重复模式。
- **Agent instruction：** 仓库或工作区级别的 Agent 指南，例如 `AGENTS.md`、`CLAUDE.md`、`GEMINI.md`、`.github/copilot-instructions.md` 或 Cursor rules。
- **MCP recipe：** 通过 Model Context Protocol 暴露工具、prompts 或 resources 的服务器、SDK 或配置模式。

## 分类

- [AI Coding Skills](#ai-coding-skills) - 面向代码审查、Bug 修复、重构、测试、文档、迁移和架构工作的 Skills 与工作流。
- [Research & Search Skills](#research-and-search-skills) - 适用于网页搜索、文献综述、市场研究、公司研究和产品对比的研究型工作流。
- [Writing & Content Skills](#writing-and-content-skills) - 适用于技术写作、脚本、发布说明、翻译、SEO brief 和内容改写的技能。
- [Data Analysis Skills](#data-analysis-skills) - 覆盖 CSV、表格、SQL、BI、报表生成、数据清洗和分析表达的技能。
- [Browser Automation](#browser-automation) - 浏览器测试、交互、截图、站点 QA 与网页任务自动化方案。
- [Design & Media](#design-and-media) - 演示文稿、图像、UI 评审、品牌规范、海报文案与视频工作流相关资源。
- [Productivity](#productivity) - 日历、邮件、任务、笔记、会议与知识流转相关的 Agent 工作流。
- [DevOps](#devops) - CI 修复、发布、部署、基础设施排障、可观测性和运维相关方案。
- [MCP 与 Tool Use](#mcp-与-tool-use) - Model Context Protocol、SDK、工具路由、函数调用与多步工具使用模式。
- [Agent Instructions](#agent-instructions) - AGENTS.md、CLAUDE.md、GEMINI.md、Copilot instructions、Cursor rules 等项目级说明文件。
- [Evaluation & Testing](#evaluation-and-testing) - Skill 评估、回归检查、基准测试、质量闸门和评测工作流。
- [Safety & Security](#safety-and-security) - Prompt Injection 防护、权限控制、密钥处理、安全文件操作和人工审批工作流。


注：资源名称、官方术语和部分摘要默认保留原始语言，以减少误译并方便检索。


## AI Coding Skills

面向代码审查、Bug 修复、重构、测试、文档、迁移和架构工作的 Skills 与工作流。

| Skill | 平台 | 类型 | 成熟度 | 标签 |
|---|---|---|---|---|
| [AGENTS.md](https://agents.md/) | Codex / GitHub Copilot / Cursor / General Agent Skills | Instruction Format | 推荐 | `agents-md`, `project-instructions`, `coding-agent`, `repo-context` |
| [Aider Conventions](https://aider.chat/docs/usage/conventions.html) | Aider / General Agent Skills | Instruction Guide | 值得关注 | `aider`, `conventions`, `coding-agent`, `repo-context` |
| [Anthropic Agent Skills](https://platform.claude.com/docs/en/agents-and-tools/agent-skills/overview) | Claude / Claude Code | Skill Format | 推荐 | `claude`, `agent-skills`, `skill-format`, `code-execution` |
| [Anthropic Skills Repository](https://github.com/anthropics/skills) | Claude / Claude Code | Skill Collection | 推荐 | `examples`, `pdf`, `docx`, `xlsx`, `pptx`, `skill-patterns` |
| [Awesome Cursor Rules](https://github.com/PatrickJS/awesome-cursorrules) | Cursor | Collection | 值得关注 | `cursor`, `rules`, `frameworks`, `templates` |
| [Codex AGENTS.md Guide](https://developers.openai.com/codex/guides/agents-md) | Codex | Instruction Guide | 推荐 | `agents-md`, `codex`, `project-context`, `instruction-precedence` |
| [Continue Custom Slash Commands](https://docs.continue.dev/customize/deep-dives/slash-commands) | Continue / VS Code / JetBrains | Workflow Recipe | 值得关注 | `slash-commands`, `continue`, `workflow`, `instructions` |
| [Cursor Rules](https://cursor.com/docs/rules) | Cursor | Instruction Guide | 推荐 | `cursor`, `rules`, `mdc`, `project-instructions` |
| [Gemini CLI GEMINI.md](https://geminicli.com/docs/cli/gemini-md/) | Gemini CLI | Instruction Guide | 推荐 | `gemini`, `gemini-md`, `context`, `imports` |
| [GitHub Awesome Copilot](https://github.com/github/awesome-copilot) | GitHub Copilot / VS Code | Collection | 推荐 | `copilot`, `awesome-list`, `custom-agents`, `instructions` |
| [GitHub Copilot Repository Instructions](https://docs.github.com/en/copilot/how-tos/copilot-on-github/customize-copilot/add-custom-instructions/add-repository-instructions) | GitHub Copilot | Instruction Guide | 推荐 | `copilot`, `instructions`, `github`, `repository-standards` |
| [GitHub MCP Server Guide](https://github.blog/ai-and-ml/generative-ai/a-practical-guide-on-how-to-use-the-github-mcp-server/) | MCP / GitHub Copilot / VS Code | MCP Recipe | 推荐 | `github`, `mcp`, `repository`, `access-control` |
| [LangGraph](https://github.com/langchain-ai/langgraph) | General Agent Skills | Workflow Framework | 推荐 | `agent-workflow`, `graph`, `state-machine`, `tool-routing` |
| [Microsoft AutoGen](https://github.com/microsoft/autogen) | General Agent Skills | Workflow Framework | 值得关注 | `multi-agent`, `workflow`, `tool-use`, `orchestration` |
| [OpenAI Codex Agent Skills](https://developers.openai.com/codex/skills) | Codex | Skill Format | 推荐 | `codex`, `skill-format`, `workflow`, `progressive-disclosure` |
| [OpenAI Codex MCP Guide](https://developers.openai.com/codex/mcp) | Codex / MCP | Tool Guide | 推荐 | `codex`, `mcp`, `tool-use`, `configuration` |
| [Sweep AI](https://github.com/sweepai/sweep) | GitHub / General Agent Skills | Workflow Recipe | 值得关注 | `issue-to-pr`, `coding-agent`, `github`, `automation` |
| [VS Code Copilot Custom Instructions](https://code.visualstudio.com/docs/agent-customization/custom-instructions) | GitHub Copilot / VS Code | Instruction Guide | 推荐 | `vscode`, `copilot`, `instructions`, `prompt-files` |

## Research & Search Skills

适用于网页搜索、文献综述、市场研究、公司研究和产品对比的研究型工作流。

| Skill | 平台 | 类型 | 成熟度 | 标签 |
|---|---|---|---|---|
| [Anthropic Cookbook](https://github.com/anthropics/claude-cookbooks) | Claude / General Agent Skills | Recipe Collection | 推荐 | `cookbook`, `claude`, `examples`, `tool-use` |
| [CrewAI](https://github.com/crewAIInc/crewAI) | General Agent Skills | Workflow Framework | 值得关注 | `multi-agent`, `roles`, `workflow`, `automation` |
| [DSPy](https://github.com/stanfordnlp/dspy) | General Agent Skills | Evaluation Framework | 推荐 | `optimization`, `evals`, `prompt-programming`, `pipelines` |
| [LlamaIndex Workflows](https://developers.llamaindex.ai/python/llamaagents/workflows/) | General Agent Skills | Workflow Framework | 值得关注 | `workflow`, `rag`, `tool-use`, `orchestration` |
| [Microsoft AutoGen](https://github.com/microsoft/autogen) | General Agent Skills | Workflow Framework | 值得关注 | `multi-agent`, `workflow`, `tool-use`, `orchestration` |
| [OpenAI Cookbook](https://developers.openai.com/cookbook) | OpenAI / General Agent Skills | Recipe Collection | 推荐 | `cookbook`, `examples`, `tool-use`, `structured-outputs` |
| [Xquik x-twitter-scraper](https://github.com/Xquik-dev/x-twitter-scraper) | Codex / Claude Code / General Agent Skills | Agent Skill | 值得关注 | `x`, `twitter`, `social-data`, `mcp`, `api` |

## Writing & Content Skills

适用于技术写作、脚本、发布说明、翻译、SEO brief 和内容改写的技能。

| Skill | 平台 | 类型 | 成熟度 | 标签 |
|---|---|---|---|---|
| [Anthropic Agent Skills](https://platform.claude.com/docs/en/agents-and-tools/agent-skills/overview) | Claude / Claude Code | Skill Format | 推荐 | `claude`, `agent-skills`, `skill-format`, `code-execution` |
| [Anthropic Cookbook](https://github.com/anthropics/claude-cookbooks) | Claude / General Agent Skills | Recipe Collection | 推荐 | `cookbook`, `claude`, `examples`, `tool-use` |
| [Anthropic Skills Repository](https://github.com/anthropics/skills) | Claude / Claude Code | Skill Collection | 推荐 | `examples`, `pdf`, `docx`, `xlsx`, `pptx`, `skill-patterns` |
| [Claude Prompt Engineering](https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/overview) | Claude / Claude Code / General Agent Skills | Prompt Pattern | 推荐 | `claude`, `prompt-patterns`, `instructions`, `examples` |

## Data Analysis Skills

覆盖 CSV、表格、SQL、BI、报表生成、数据清洗和分析表达的技能。

| Skill | 平台 | 类型 | 成熟度 | 标签 |
|---|---|---|---|---|
| [Anthropic Skills Repository](https://github.com/anthropics/skills) | Claude / Claude Code | Skill Collection | 推荐 | `examples`, `pdf`, `docx`, `xlsx`, `pptx`, `skill-patterns` |
| [DSPy](https://github.com/stanfordnlp/dspy) | General Agent Skills | Evaluation Framework | 推荐 | `optimization`, `evals`, `prompt-programming`, `pipelines` |
| [LangGraph](https://github.com/langchain-ai/langgraph) | General Agent Skills | Workflow Framework | 推荐 | `agent-workflow`, `graph`, `state-machine`, `tool-routing` |
| [LlamaIndex Workflows](https://developers.llamaindex.ai/python/llamaagents/workflows/) | General Agent Skills | Workflow Framework | 值得关注 | `workflow`, `rag`, `tool-use`, `orchestration` |
| [MCP Python SDK](https://github.com/modelcontextprotocol/python-sdk) | MCP / Python | Tool SDK | 推荐 | `mcp`, `python`, `sdk`, `server` |
| [Microsoft Presidio](https://github.com/microsoft/presidio) | General Agent Skills | Safety Tool | 推荐 | `pii`, `redaction`, `privacy`, `data-protection` |
| [Microsoft Prompt Flow](https://github.com/microsoft/promptflow) | Azure / General Agent Skills | Workflow Tool | 值得关注 | `workflow`, `evaluation`, `prompt-engineering`, `llmops` |
| [Model Context Protocol Servers](https://github.com/modelcontextprotocol/servers) | MCP / General Agent Skills | MCP Recipe | 推荐 | `mcp`, `servers`, `reference-implementation`, `tools` |
| [OpenAI Cookbook](https://developers.openai.com/cookbook) | OpenAI / General Agent Skills | Recipe Collection | 推荐 | `cookbook`, `examples`, `tool-use`, `structured-outputs` |
| [Xquik x-twitter-scraper](https://github.com/Xquik-dev/x-twitter-scraper) | Codex / Claude Code / General Agent Skills | Agent Skill | 值得关注 | `x`, `twitter`, `social-data`, `mcp`, `api` |

## Browser Automation

浏览器测试、交互、截图、站点 QA 与网页任务自动化方案。

| Skill | 平台 | 类型 | 成熟度 | 标签 |
|---|---|---|---|---|
| [Anthropic Computer Use](https://platform.claude.com/docs/en/agents-and-tools/tool-use/computer-use-tool) | Claude | Tool Use Recipe | 值得关注 | `computer-use`, `automation`, `screenshots`, `human-approval` |
| [Browser Use](https://github.com/browser-use/browser-use) | General Agent Skills | Tool Use Recipe | 值得关注 | `browser`, `automation`, `web-agent`, `tool-use` |
| [Playwright MCP](https://github.com/microsoft/playwright-mcp) | MCP / Playwright | MCP Server | 推荐 | `browser`, `playwright`, `mcp`, `screenshots`, `qa` |

## Design & Media

演示文稿、图像、UI 评审、品牌规范、海报文案与视频工作流相关资源。

| Skill | 平台 | 类型 | 成熟度 | 标签 |
|---|---|---|---|---|
| [Anthropic Agent Skills](https://platform.claude.com/docs/en/agents-and-tools/agent-skills/overview) | Claude / Claude Code | Skill Format | 推荐 | `claude`, `agent-skills`, `skill-format`, `code-execution` |
| [Anthropic Skills Repository](https://github.com/anthropics/skills) | Claude / Claude Code | Skill Collection | 推荐 | `examples`, `pdf`, `docx`, `xlsx`, `pptx`, `skill-patterns` |

## Productivity

日历、邮件、任务、笔记、会议与知识流转相关的 Agent 工作流。

| Skill | 平台 | 类型 | 成熟度 | 标签 |
|---|---|---|---|---|
| [CrewAI](https://github.com/crewAIInc/crewAI) | General Agent Skills | Workflow Framework | 值得关注 | `multi-agent`, `roles`, `workflow`, `automation` |
| [Semantic Kernel](https://github.com/microsoft/semantic-kernel) | General Agent Skills / Azure | Workflow Framework | 推荐 | `plugins`, `planner`, `enterprise`, `tool-use` |

## DevOps

CI 修复、发布、部署、基础设施排障、可观测性和运维相关方案。

| Skill | 平台 | 类型 | 成熟度 | 标签 |
|---|---|---|---|---|
| [GitHub MCP Server Guide](https://github.blog/ai-and-ml/generative-ai/a-practical-guide-on-how-to-use-the-github-mcp-server/) | MCP / GitHub Copilot / VS Code | MCP Recipe | 推荐 | `github`, `mcp`, `repository`, `access-control` |
| [MCP Python SDK](https://github.com/modelcontextprotocol/python-sdk) | MCP / Python | Tool SDK | 推荐 | `mcp`, `python`, `sdk`, `server` |
| [MCP TypeScript SDK](https://github.com/modelcontextprotocol/typescript-sdk) | MCP / Node.js | Tool SDK | 推荐 | `mcp`, `typescript`, `sdk`, `server` |
| [Model Context Protocol Servers](https://github.com/modelcontextprotocol/servers) | MCP / General Agent Skills | MCP Recipe | 推荐 | `mcp`, `servers`, `reference-implementation`, `tools` |
| [Semantic Kernel](https://github.com/microsoft/semantic-kernel) | General Agent Skills / Azure | Workflow Framework | 推荐 | `plugins`, `planner`, `enterprise`, `tool-use` |
| [Sweep AI](https://github.com/sweepai/sweep) | GitHub / General Agent Skills | Workflow Recipe | 值得关注 | `issue-to-pr`, `coding-agent`, `github`, `automation` |

## MCP 与 Tool Use

Model Context Protocol、SDK、工具路由、函数调用与多步工具使用模式。

| Skill | 平台 | 类型 | 成熟度 | 标签 |
|---|---|---|---|---|
| [Agent Protocol](https://github.com/agi-inc/agent-protocol) | General Agent Skills | Protocol | 实验性 | `agent-protocol`, `api`, `interoperability`, `tasks` |
| [Anthropic Computer Use](https://platform.claude.com/docs/en/agents-and-tools/tool-use/computer-use-tool) | Claude | Tool Use Recipe | 值得关注 | `computer-use`, `automation`, `screenshots`, `human-approval` |
| [Anthropic Cookbook](https://github.com/anthropics/claude-cookbooks) | Claude / General Agent Skills | Recipe Collection | 推荐 | `cookbook`, `claude`, `examples`, `tool-use` |
| [Awesome MCP Servers](https://github.com/punkpeye/awesome-mcp-servers) | MCP | Collection | 值得关注 | `mcp`, `awesome-list`, `servers`, `integrations` |
| [Browser Use](https://github.com/browser-use/browser-use) | General Agent Skills | Tool Use Recipe | 值得关注 | `browser`, `automation`, `web-agent`, `tool-use` |
| [CrewAI](https://github.com/crewAIInc/crewAI) | General Agent Skills | Workflow Framework | 值得关注 | `multi-agent`, `roles`, `workflow`, `automation` |
| [GitHub Awesome Copilot](https://github.com/github/awesome-copilot) | GitHub Copilot / VS Code | Collection | 推荐 | `copilot`, `awesome-list`, `custom-agents`, `instructions` |
| [GitHub MCP Server Guide](https://github.blog/ai-and-ml/generative-ai/a-practical-guide-on-how-to-use-the-github-mcp-server/) | MCP / GitHub Copilot / VS Code | MCP Recipe | 推荐 | `github`, `mcp`, `repository`, `access-control` |
| [LangGraph](https://github.com/langchain-ai/langgraph) | General Agent Skills | Workflow Framework | 推荐 | `agent-workflow`, `graph`, `state-machine`, `tool-routing` |
| [LlamaIndex Workflows](https://developers.llamaindex.ai/python/llamaagents/workflows/) | General Agent Skills | Workflow Framework | 值得关注 | `workflow`, `rag`, `tool-use`, `orchestration` |
| [MCP For Beginners](https://github.com/microsoft/mcp-for-beginners/) | MCP | Curriculum | 值得关注 | `mcp`, `workshop`, `learning`, `tools` |
| [MCP Python SDK](https://github.com/modelcontextprotocol/python-sdk) | MCP / Python | Tool SDK | 推荐 | `mcp`, `python`, `sdk`, `server` |
| [MCP Registry](https://registry.modelcontextprotocol.io/) | MCP | Registry | 推荐 | `mcp`, `registry`, `server-discovery` |
| [MCP TypeScript SDK](https://github.com/modelcontextprotocol/typescript-sdk) | MCP / Node.js | Tool SDK | 推荐 | `mcp`, `typescript`, `sdk`, `server` |
| [Microsoft AutoGen](https://github.com/microsoft/autogen) | General Agent Skills | Workflow Framework | 值得关注 | `multi-agent`, `workflow`, `tool-use`, `orchestration` |
| [Microsoft Prompt Flow](https://github.com/microsoft/promptflow) | Azure / General Agent Skills | Workflow Tool | 值得关注 | `workflow`, `evaluation`, `prompt-engineering`, `llmops` |
| [Model Context Protocol Servers](https://github.com/modelcontextprotocol/servers) | MCP / General Agent Skills | MCP Recipe | 推荐 | `mcp`, `servers`, `reference-implementation`, `tools` |
| [Open Agent Skills Standard](https://agentskills.io/home) | Codex / Claude Code / General Agent Skills | Standard | 推荐 | `standard`, `skill-format`, `portable-skills` |
| [OpenAI Codex Agent Skills](https://developers.openai.com/codex/skills) | Codex | Skill Format | 推荐 | `codex`, `skill-format`, `workflow`, `progressive-disclosure` |
| [OpenAI Codex MCP Guide](https://developers.openai.com/codex/mcp) | Codex / MCP | Tool Guide | 推荐 | `codex`, `mcp`, `tool-use`, `configuration` |
| [OpenAI Cookbook](https://developers.openai.com/cookbook) | OpenAI / General Agent Skills | Recipe Collection | 推荐 | `cookbook`, `examples`, `tool-use`, `structured-outputs` |
| [OpenAI Function Calling Guide](https://developers.openai.com/api/docs/guides/function-calling) | OpenAI / General Agent Skills | Tool Use Recipe | 推荐 | `function-calling`, `tool-use`, `schemas`, `structured-outputs` |
| [OpenAI Prompt Engineering Guide](https://developers.openai.com/api/docs/guides/prompt-engineering) | OpenAI / General Agent Skills | Prompt Pattern | 推荐 | `prompt-patterns`, `instructions`, `decomposition`, `reliability` |
| [OWASP Top 10 for LLM Applications](https://owasp.org/www-project-top-10-for-large-language-model-applications/) | General Agent Skills | Security Guide | 推荐 | `owasp`, `prompt-injection`, `llm-security`, `tool-safety` |
| [Playwright MCP](https://github.com/microsoft/playwright-mcp) | MCP / Playwright | MCP Server | 推荐 | `browser`, `playwright`, `mcp`, `screenshots`, `qa` |
| [Semantic Kernel](https://github.com/microsoft/semantic-kernel) | General Agent Skills / Azure | Workflow Framework | 推荐 | `plugins`, `planner`, `enterprise`, `tool-use` |
| [Xquik x-twitter-scraper](https://github.com/Xquik-dev/x-twitter-scraper) | Codex / Claude Code / General Agent Skills | Agent Skill | 值得关注 | `x`, `twitter`, `social-data`, `mcp`, `api` |

## Agent Instructions

AGENTS.md、CLAUDE.md、GEMINI.md、Copilot instructions、Cursor rules 等项目级说明文件。

| Skill | 平台 | 类型 | 成熟度 | 标签 |
|---|---|---|---|---|
| [Agent Protocol](https://github.com/agi-inc/agent-protocol) | General Agent Skills | Protocol | 实验性 | `agent-protocol`, `api`, `interoperability`, `tasks` |
| [AGENTS.md](https://agents.md/) | Codex / GitHub Copilot / Cursor / General Agent Skills | Instruction Format | 推荐 | `agents-md`, `project-instructions`, `coding-agent`, `repo-context` |
| [Aider Conventions](https://aider.chat/docs/usage/conventions.html) | Aider / General Agent Skills | Instruction Guide | 值得关注 | `aider`, `conventions`, `coding-agent`, `repo-context` |
| [Awesome Cursor Rules](https://github.com/PatrickJS/awesome-cursorrules) | Cursor | Collection | 值得关注 | `cursor`, `rules`, `frameworks`, `templates` |
| [Claude Prompt Engineering](https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/overview) | Claude / Claude Code / General Agent Skills | Prompt Pattern | 推荐 | `claude`, `prompt-patterns`, `instructions`, `examples` |
| [Codex AGENTS.md Guide](https://developers.openai.com/codex/guides/agents-md) | Codex | Instruction Guide | 推荐 | `agents-md`, `codex`, `project-context`, `instruction-precedence` |
| [Continue Custom Slash Commands](https://docs.continue.dev/customize/deep-dives/slash-commands) | Continue / VS Code / JetBrains | Workflow Recipe | 值得关注 | `slash-commands`, `continue`, `workflow`, `instructions` |
| [Cursor Rules](https://cursor.com/docs/rules) | Cursor | Instruction Guide | 推荐 | `cursor`, `rules`, `mdc`, `project-instructions` |
| [Gemini CLI GEMINI.md](https://geminicli.com/docs/cli/gemini-md/) | Gemini CLI | Instruction Guide | 推荐 | `gemini`, `gemini-md`, `context`, `imports` |
| [GitHub Awesome Copilot](https://github.com/github/awesome-copilot) | GitHub Copilot / VS Code | Collection | 推荐 | `copilot`, `awesome-list`, `custom-agents`, `instructions` |
| [GitHub Copilot Repository Instructions](https://docs.github.com/en/copilot/how-tos/copilot-on-github/customize-copilot/add-custom-instructions/add-repository-instructions) | GitHub Copilot | Instruction Guide | 推荐 | `copilot`, `instructions`, `github`, `repository-standards` |
| [Open Agent Skills Standard](https://agentskills.io/home) | Codex / Claude Code / General Agent Skills | Standard | 推荐 | `standard`, `skill-format`, `portable-skills` |
| [OpenAI Prompt Engineering Guide](https://developers.openai.com/api/docs/guides/prompt-engineering) | OpenAI / General Agent Skills | Prompt Pattern | 推荐 | `prompt-patterns`, `instructions`, `decomposition`, `reliability` |
| [VS Code Copilot Custom Instructions](https://code.visualstudio.com/docs/agent-customization/custom-instructions) | GitHub Copilot / VS Code | Instruction Guide | 推荐 | `vscode`, `copilot`, `instructions`, `prompt-files` |

## Evaluation & Testing

Skill 评估、回归检查、基准测试、质量闸门和评测工作流。

| Skill | 平台 | 类型 | 成熟度 | 标签 |
|---|---|---|---|---|
| [Claude Prompt Engineering](https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/overview) | Claude / Claude Code / General Agent Skills | Prompt Pattern | 推荐 | `claude`, `prompt-patterns`, `instructions`, `examples` |
| [DSPy](https://github.com/stanfordnlp/dspy) | General Agent Skills | Evaluation Framework | 推荐 | `optimization`, `evals`, `prompt-programming`, `pipelines` |
| [Giskard LLM Scan](https://github.com/Giskard-AI/giskard-oss) | General Agent Skills | Safety Tool | 值得关注 | `llm-security`, `testing`, `scan`, `risk` |
| [Guardrails AI](https://github.com/guardrails-ai/guardrails) | General Agent Skills | Safety Tool | 值得关注 | `guardrails`, `validation`, `structured-output`, `safety` |
| [Inspect Evals](https://github.com/UKGovernmentBEIS/inspect_ai) | General Agent Skills | Evaluation Tool | 值得关注 | `evals`, `agent-evaluation`, `tool-use`, `safety` |
| [Microsoft Prompt Flow](https://github.com/microsoft/promptflow) | Azure / General Agent Skills | Workflow Tool | 值得关注 | `workflow`, `evaluation`, `prompt-engineering`, `llmops` |
| [OpenAI Cookbook](https://developers.openai.com/cookbook) | OpenAI / General Agent Skills | Recipe Collection | 推荐 | `cookbook`, `examples`, `tool-use`, `structured-outputs` |
| [OpenAI Evals](https://github.com/openai/evals) | OpenAI / General Agent Skills | Evaluation Recipe | 值得关注 | `evals`, `quality`, `regression`, `benchmark` |
| [OpenAI Prompt Engineering Guide](https://developers.openai.com/api/docs/guides/prompt-engineering) | OpenAI / General Agent Skills | Prompt Pattern | 推荐 | `prompt-patterns`, `instructions`, `decomposition`, `reliability` |
| [Playwright MCP](https://github.com/microsoft/playwright-mcp) | MCP / Playwright | MCP Server | 推荐 | `browser`, `playwright`, `mcp`, `screenshots`, `qa` |
| [Promptfoo](https://github.com/promptfoo/promptfoo) | General Agent Skills | Evaluation Tool | 推荐 | `prompt-testing`, `evals`, `regression`, `red-team` |

## Safety & Security

Prompt Injection 防护、权限控制、密钥处理、安全文件操作和人工审批工作流。

| Skill | 平台 | 类型 | 成熟度 | 标签 |
|---|---|---|---|---|
| [Anthropic Computer Use](https://platform.claude.com/docs/en/agents-and-tools/tool-use/computer-use-tool) | Claude | Tool Use Recipe | 值得关注 | `computer-use`, `automation`, `screenshots`, `human-approval` |
| [Giskard LLM Scan](https://github.com/Giskard-AI/giskard-oss) | General Agent Skills | Safety Tool | 值得关注 | `llm-security`, `testing`, `scan`, `risk` |
| [Guardrails AI](https://github.com/guardrails-ai/guardrails) | General Agent Skills | Safety Tool | 值得关注 | `guardrails`, `validation`, `structured-output`, `safety` |
| [Inspect Evals](https://github.com/UKGovernmentBEIS/inspect_ai) | General Agent Skills | Evaluation Tool | 值得关注 | `evals`, `agent-evaluation`, `tool-use`, `safety` |
| [Microsoft Presidio](https://github.com/microsoft/presidio) | General Agent Skills | Safety Tool | 推荐 | `pii`, `redaction`, `privacy`, `data-protection` |
| [OpenAI Evals](https://github.com/openai/evals) | OpenAI / General Agent Skills | Evaluation Recipe | 值得关注 | `evals`, `quality`, `regression`, `benchmark` |
| [OWASP Top 10 for LLM Applications](https://owasp.org/www-project-top-10-for-large-language-model-applications/) | General Agent Skills | Security Guide | 推荐 | `owasp`, `prompt-injection`, `llm-security`, `tool-safety` |
| [Promptfoo](https://github.com/promptfoo/promptfoo) | General Agent Skills | Evaluation Tool | 推荐 | `prompt-testing`, `evals`, `regression`, `red-team` |


## 按平台查看

### Aider

- [Aider Conventions](https://aider.chat/docs/usage/conventions.html) - Aider documentation for repository conventions that guide AI coding changes. 为什么值得看：A concise example of how coding agents benefit from persistent repo-specific rules.

### Azure

- [Microsoft Prompt Flow](https://github.com/microsoft/promptflow) - Tooling for building, evaluating, and deploying LLM workflows. 为什么值得看：Useful when a skill grows into a multi-node workflow with evaluation and deployment needs.
- [Semantic Kernel](https://github.com/microsoft/semantic-kernel) - SDK for integrating LLMs with plugins, planners, memory, and enterprise application workflows. 为什么值得看：A mature reference for packaging business capabilities as callable tools and workflows.

### Claude

- [Anthropic Agent Skills](https://platform.claude.com/docs/en/agents-and-tools/agent-skills/overview) - Official Claude documentation for pre-built and custom Agent Skills across Claude products and the API. 为什么值得看：Explains the production model for skills, including document skills, custom uploads, and code-execution containers.
- [Anthropic Computer Use](https://platform.claude.com/docs/en/agents-and-tools/tool-use/computer-use-tool) - Anthropic documentation for computer-use agents that interact with graphical applications. 为什么值得看：Important reference for when a skill needs GUI automation rather than API-only tools.
- [Anthropic Cookbook](https://github.com/anthropics/claude-cookbooks) - Anthropic examples and recipes for building with Claude, tools, retrieval, and workflows. 为什么值得看：Strong source of Claude-oriented tool-use and workflow examples.
- [Anthropic Skills Repository](https://github.com/anthropics/skills) - Public repository of Agent Skill examples, including document skills and patterns for technical, creative, and enterprise workflows. 为什么值得看：A real reference library for how complex skills structure SKILL.md, scripts, and supporting assets.
- [Claude Prompt Engineering](https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/overview) - Anthropic guidance for writing clear prompts, examples, XML-style structure, chain-of-thought alternatives, and prompt evaluation. 为什么值得看：Useful for converting broad task requests into durable instruction formats.

### Claude Code

- [Anthropic Agent Skills](https://platform.claude.com/docs/en/agents-and-tools/agent-skills/overview) - Official Claude documentation for pre-built and custom Agent Skills across Claude products and the API. 为什么值得看：Explains the production model for skills, including document skills, custom uploads, and code-execution containers.
- [Anthropic Skills Repository](https://github.com/anthropics/skills) - Public repository of Agent Skill examples, including document skills and patterns for technical, creative, and enterprise workflows. 为什么值得看：A real reference library for how complex skills structure SKILL.md, scripts, and supporting assets.
- [Claude Prompt Engineering](https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/overview) - Anthropic guidance for writing clear prompts, examples, XML-style structure, chain-of-thought alternatives, and prompt evaluation. 为什么值得看：Useful for converting broad task requests into durable instruction formats.
- [Open Agent Skills Standard](https://agentskills.io/home) - Open format for packaging agent capabilities as folders with SKILL.md metadata, instructions, optional scripts, references, and assets. 为什么值得看：Gives the ecosystem a shared vocabulary for portable agent capabilities instead of one-off prompt files.
- [Xquik x-twitter-scraper](https://github.com/Xquik-dev/x-twitter-scraper) - Installable agent skill and SDK package for X/Twitter data workflows, including search, profile, follower, media, webhook, and MCP tasks. 为什么值得看：Gives agents a reusable, documented path for structured X/Twitter research data instead of ad hoc browser steps.

### Codex

- [AGENTS.md](https://agents.md/) - A simple open format for giving coding agents project context, setup commands, conventions, and operational constraints. 为什么值得看：The most portable project-instruction format for coding agents, easy to version and review.
- [Codex AGENTS.md Guide](https://developers.openai.com/codex/guides/agents-md) - Official Codex guidance for instruction discovery, precedence, global AGENTS.md files, project files, and overrides. 为什么值得看：Useful when teams need predictable instruction layering across global and project scopes.
- [Open Agent Skills Standard](https://agentskills.io/home) - Open format for packaging agent capabilities as folders with SKILL.md metadata, instructions, optional scripts, references, and assets. 为什么值得看：Gives the ecosystem a shared vocabulary for portable agent capabilities instead of one-off prompt files.
- [OpenAI Codex Agent Skills](https://developers.openai.com/codex/skills) - Official Codex guide for packaging reusable workflows as SKILL.md folders with optional scripts, references, and assets. 为什么值得看：The clearest starting point for writing Codex-native skills that are discoverable, scoped, and reusable.
- [OpenAI Codex MCP Guide](https://developers.openai.com/codex/mcp) - Codex documentation for configuring MCP servers and tool access. 为什么值得看：Shows how MCP fits into Codex workflows without inventing a custom integration layer.
- [Xquik x-twitter-scraper](https://github.com/Xquik-dev/x-twitter-scraper) - Installable agent skill and SDK package for X/Twitter data workflows, including search, profile, follower, media, webhook, and MCP tasks. 为什么值得看：Gives agents a reusable, documented path for structured X/Twitter research data instead of ad hoc browser steps.

### Continue

- [Continue Custom Slash Commands](https://docs.continue.dev/customize/deep-dives/slash-commands) - Continue documentation for defining reusable slash commands that guide coding workflows. 为什么值得看：A lightweight pattern for repeatable coding workflows when a full skill package is too much.

### Cursor

- [AGENTS.md](https://agents.md/) - A simple open format for giving coding agents project context, setup commands, conventions, and operational constraints. 为什么值得看：The most portable project-instruction format for coding agents, easy to version and review.
- [Awesome Cursor Rules](https://github.com/PatrickJS/awesome-cursorrules) - Community collection of Cursor rules for frameworks, languages, libraries, and project conventions. 为什么值得看：Useful as a pattern bank for writing project-aware Cursor rules instead of generic prompts.
- [Cursor Rules](https://cursor.com/docs/rules) - Official Cursor documentation for project, team, user rules, and AGENTS.md support. 为什么值得看：Useful for making Cursor behave consistently inside large repos and framework-specific codebases.

### Gemini CLI

- [Gemini CLI GEMINI.md](https://geminicli.com/docs/cli/gemini-md/) - Official Gemini CLI documentation for hierarchical GEMINI.md context files and modular imports. 为什么值得看：Shows how to layer agent context without repeating instructions in every prompt.

### General Agent Skills

- [Agent Protocol](https://github.com/agi-inc/agent-protocol) - Specification and examples for a common API layer around agent task execution. 为什么值得看：A useful comparison point when thinking about skill portability and agent interoperability.
- [AGENTS.md](https://agents.md/) - A simple open format for giving coding agents project context, setup commands, conventions, and operational constraints. 为什么值得看：The most portable project-instruction format for coding agents, easy to version and review.
- [Aider Conventions](https://aider.chat/docs/usage/conventions.html) - Aider documentation for repository conventions that guide AI coding changes. 为什么值得看：A concise example of how coding agents benefit from persistent repo-specific rules.
- [Anthropic Cookbook](https://github.com/anthropics/claude-cookbooks) - Anthropic examples and recipes for building with Claude, tools, retrieval, and workflows. 为什么值得看：Strong source of Claude-oriented tool-use and workflow examples.
- [Browser Use](https://github.com/browser-use/browser-use) - Library for building AI agents that control browsers and perform web tasks. 为什么值得看：A useful reference for browser task decomposition, observations, and action loops.
- [Claude Prompt Engineering](https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/overview) - Anthropic guidance for writing clear prompts, examples, XML-style structure, chain-of-thought alternatives, and prompt evaluation. 为什么值得看：Useful for converting broad task requests into durable instruction formats.
- [CrewAI](https://github.com/crewAIInc/crewAI) - Framework for orchestrating role-based AI agents and task workflows. 为什么值得看：A useful pattern source for decomposing repeatable workflows into roles and tasks.
- [DSPy](https://github.com/stanfordnlp/dspy) - Framework for programming and optimizing language model pipelines with declarative modules and evaluation-driven improvement. 为什么值得看：Useful for evolving fragile prompts into measurable, optimized agent components.
- [Giskard LLM Scan](https://github.com/Giskard-AI/giskard-oss) - Open-source testing framework for detecting risks in AI applications, including LLM vulnerabilities. 为什么值得看：Useful for teams that want automated checks around LLM behavior and safety issues.
- [Guardrails AI](https://github.com/guardrails-ai/guardrails) - Framework for validating, correcting, and constraining LLM outputs with validators and structured checks. 为什么值得看：Helpful when skill outputs need validation before tools, files, or downstream systems consume them.
- [Inspect Evals](https://github.com/UKGovernmentBEIS/inspect_ai) - Evaluation framework for large language model tasks, including tool-use and agent-style evaluations. 为什么值得看：Good fit for teams that want deeper evaluation harnesses around agent workflows.
- [LangGraph](https://github.com/langchain-ai/langgraph) - Framework for building stateful, multi-step agent workflows with explicit graph control. 为什么值得看：Good reference for turning ad hoc multi-step tool use into explicit, inspectable workflow graphs.
- [LlamaIndex Workflows](https://developers.llamaindex.ai/python/llamaagents/workflows/) - Workflow abstractions for orchestrating multi-step LLM applications and tool pipelines. 为什么值得看：Good reference when research or RAG skills need explicit steps, events, and retry logic.
- [Microsoft AutoGen](https://github.com/microsoft/autogen) - Framework for building AI agents, multi-agent systems, and tool-using workflows. 为什么值得看：Useful comparison point for skill authors designing coordinated multi-agent behavior.
- [Microsoft Presidio](https://github.com/microsoft/presidio) - Data protection and de-identification toolkit for detecting and anonymizing sensitive information. 为什么值得看：Practical building block for skills that handle logs, support tickets, documents, or analytics exports.
- [Microsoft Prompt Flow](https://github.com/microsoft/promptflow) - Tooling for building, evaluating, and deploying LLM workflows. 为什么值得看：Useful when a skill grows into a multi-node workflow with evaluation and deployment needs.
- [Model Context Protocol Servers](https://github.com/modelcontextprotocol/servers) - Reference MCP server implementations maintained for demonstrating MCP features, SDK usage, tools, prompts, and resources. 为什么值得看：Best starting point for understanding the shape of MCP servers without relying on vendor-specific wrappers.
- [Open Agent Skills Standard](https://agentskills.io/home) - Open format for packaging agent capabilities as folders with SKILL.md metadata, instructions, optional scripts, references, and assets. 为什么值得看：Gives the ecosystem a shared vocabulary for portable agent capabilities instead of one-off prompt files.
- [OpenAI Cookbook](https://developers.openai.com/cookbook) - Practical examples for OpenAI API use cases, including tool use, structured outputs, retrieval, evaluation, and workflows. 为什么值得看：High-signal examples that help skill authors move from concept to runnable implementation.
- [OpenAI Evals](https://github.com/openai/evals) - Framework and examples for evaluating model behavior and task performance. 为什么值得看：Useful foundation for turning skill quality from vibes into repeatable checks.
- [OpenAI Function Calling Guide](https://developers.openai.com/api/docs/guides/function-calling) - Official guide for connecting models to external tools with function schemas and structured arguments. 为什么值得看：Core reference for tool schemas, routing, and multi-step tool use outside MCP.
- [OpenAI Prompt Engineering Guide](https://developers.openai.com/api/docs/guides/prompt-engineering) - Official guide for prompt patterns, instruction structure, decomposition, and reliability tactics. 为什么值得看：Helpful for turning vague prompt dumps into explicit, testable agent instructions.
- [OWASP Top 10 for LLM Applications](https://owasp.org/www-project-top-10-for-large-language-model-applications/) - Security risks and guidance for LLM applications, including prompt injection, data leakage, and unsafe output handling. 为什么值得看：Essential security lens for any skill that reads untrusted content or invokes tools.
- [Promptfoo](https://github.com/promptfoo/promptfoo) - Open-source tool for testing prompts, models, and agent workflows with assertions and regression suites. 为什么值得看：Practical for evaluating skill prompts, tool-use outputs, and safety behavior before publishing.
- [Semantic Kernel](https://github.com/microsoft/semantic-kernel) - SDK for integrating LLMs with plugins, planners, memory, and enterprise application workflows. 为什么值得看：A mature reference for packaging business capabilities as callable tools and workflows.
- [Sweep AI](https://github.com/sweepai/sweep) - Open-source AI junior developer workflow for turning issues into code changes and pull requests. 为什么值得看：Useful pattern reference for issue triage, repo context gathering, and PR automation.
- [Xquik x-twitter-scraper](https://github.com/Xquik-dev/x-twitter-scraper) - Installable agent skill and SDK package for X/Twitter data workflows, including search, profile, follower, media, webhook, and MCP tasks. 为什么值得看：Gives agents a reusable, documented path for structured X/Twitter research data instead of ad hoc browser steps.

### GitHub

- [Sweep AI](https://github.com/sweepai/sweep) - Open-source AI junior developer workflow for turning issues into code changes and pull requests. 为什么值得看：Useful pattern reference for issue triage, repo context gathering, and PR automation.

### GitHub Copilot

- [AGENTS.md](https://agents.md/) - A simple open format for giving coding agents project context, setup commands, conventions, and operational constraints. 为什么值得看：The most portable project-instruction format for coding agents, easy to version and review.
- [GitHub Awesome Copilot](https://github.com/github/awesome-copilot) - Community collection of Copilot custom agents, instructions, prompts, skills, hooks, workflows, and plugins. 为什么值得看：A broad reference catalog for how the Copilot ecosystem packages reusable agent behavior.
- [GitHub Copilot Repository Instructions](https://docs.github.com/en/copilot/how-tos/copilot-on-github/customize-copilot/add-custom-instructions/add-repository-instructions) - Official GitHub documentation for repository-wide and path-specific Copilot custom instructions. 为什么值得看：Turns coding standards, build steps, and review expectations into versioned agent context.
- [GitHub MCP Server Guide](https://github.blog/ai-and-ml/generative-ai/a-practical-guide-on-how-to-use-the-github-mcp-server/) - Practical guide for configuring and using GitHub's MCP server with access controls and examples. 为什么值得看：Concrete example of connecting agents to a high-value developer system with explicit access-control steps.
- [VS Code Copilot Custom Instructions](https://code.visualstudio.com/docs/agent-customization/custom-instructions) - VS Code guide for custom instructions, reusable prompt files, and organizing Copilot guidance by task or language. 为什么值得看：Good reference for splitting global standards from language-specific and task-specific guidance.

### JetBrains

- [Continue Custom Slash Commands](https://docs.continue.dev/customize/deep-dives/slash-commands) - Continue documentation for defining reusable slash commands that guide coding workflows. 为什么值得看：A lightweight pattern for repeatable coding workflows when a full skill package is too much.

### MCP

- [Awesome MCP Servers](https://github.com/punkpeye/awesome-mcp-servers) - Large community-curated list of MCP servers across developer tools, data, search, browser automation, and business systems. 为什么值得看：Useful for market scanning and comparison when choosing MCP integrations.
- [GitHub MCP Server Guide](https://github.blog/ai-and-ml/generative-ai/a-practical-guide-on-how-to-use-the-github-mcp-server/) - Practical guide for configuring and using GitHub's MCP server with access controls and examples. 为什么值得看：Concrete example of connecting agents to a high-value developer system with explicit access-control steps.
- [MCP For Beginners](https://github.com/microsoft/mcp-for-beginners/) - Open-source curriculum for learning Model Context Protocol with hands-on examples across multiple languages. 为什么值得看：A stable hands-on path for developers who need to understand MCP by building, not just reading docs.
- [MCP Python SDK](https://github.com/modelcontextprotocol/python-sdk) - Official Python SDK for implementing MCP servers and clients. 为什么值得看：Good fit for data, automation, and internal API tool servers where Python is already the glue language.
- [MCP Registry](https://registry.modelcontextprotocol.io/) - Official registry for discovering MCP servers. 为什么值得看：A better discovery layer than relying on scattered README links.
- [MCP TypeScript SDK](https://github.com/modelcontextprotocol/typescript-sdk) - Official TypeScript SDK for building MCP servers and clients. 为什么值得看：A practical foundation for writing strongly typed tool servers for coding agents.
- [Model Context Protocol Servers](https://github.com/modelcontextprotocol/servers) - Reference MCP server implementations maintained for demonstrating MCP features, SDK usage, tools, prompts, and resources. 为什么值得看：Best starting point for understanding the shape of MCP servers without relying on vendor-specific wrappers.
- [OpenAI Codex MCP Guide](https://developers.openai.com/codex/mcp) - Codex documentation for configuring MCP servers and tool access. 为什么值得看：Shows how MCP fits into Codex workflows without inventing a custom integration layer.
- [Playwright MCP](https://github.com/microsoft/playwright-mcp) - MCP server that gives agents browser automation capabilities through Playwright. 为什么值得看：A practical bridge between agent reasoning and real browser state for QA and workflow automation.

### Node.js

- [MCP TypeScript SDK](https://github.com/modelcontextprotocol/typescript-sdk) - Official TypeScript SDK for building MCP servers and clients. 为什么值得看：A practical foundation for writing strongly typed tool servers for coding agents.

### OpenAI

- [OpenAI Cookbook](https://developers.openai.com/cookbook) - Practical examples for OpenAI API use cases, including tool use, structured outputs, retrieval, evaluation, and workflows. 为什么值得看：High-signal examples that help skill authors move from concept to runnable implementation.
- [OpenAI Evals](https://github.com/openai/evals) - Framework and examples for evaluating model behavior and task performance. 为什么值得看：Useful foundation for turning skill quality from vibes into repeatable checks.
- [OpenAI Function Calling Guide](https://developers.openai.com/api/docs/guides/function-calling) - Official guide for connecting models to external tools with function schemas and structured arguments. 为什么值得看：Core reference for tool schemas, routing, and multi-step tool use outside MCP.
- [OpenAI Prompt Engineering Guide](https://developers.openai.com/api/docs/guides/prompt-engineering) - Official guide for prompt patterns, instruction structure, decomposition, and reliability tactics. 为什么值得看：Helpful for turning vague prompt dumps into explicit, testable agent instructions.

### Playwright

- [Playwright MCP](https://github.com/microsoft/playwright-mcp) - MCP server that gives agents browser automation capabilities through Playwright. 为什么值得看：A practical bridge between agent reasoning and real browser state for QA and workflow automation.

### Python

- [MCP Python SDK](https://github.com/modelcontextprotocol/python-sdk) - Official Python SDK for implementing MCP servers and clients. 为什么值得看：Good fit for data, automation, and internal API tool servers where Python is already the glue language.

### VS Code

- [Continue Custom Slash Commands](https://docs.continue.dev/customize/deep-dives/slash-commands) - Continue documentation for defining reusable slash commands that guide coding workflows. 为什么值得看：A lightweight pattern for repeatable coding workflows when a full skill package is too much.
- [GitHub Awesome Copilot](https://github.com/github/awesome-copilot) - Community collection of Copilot custom agents, instructions, prompts, skills, hooks, workflows, and plugins. 为什么值得看：A broad reference catalog for how the Copilot ecosystem packages reusable agent behavior.
- [GitHub MCP Server Guide](https://github.blog/ai-and-ml/generative-ai/a-practical-guide-on-how-to-use-the-github-mcp-server/) - Practical guide for configuring and using GitHub's MCP server with access controls and examples. 为什么值得看：Concrete example of connecting agents to a high-value developer system with explicit access-control steps.
- [VS Code Copilot Custom Instructions](https://code.visualstudio.com/docs/agent-customization/custom-instructions) - VS Code guide for custom instructions, reusable prompt files, and organizing Copilot guidance by task or language. 为什么值得看：Good reference for splitting global standards from language-specific and task-specific guidance.


## Skill 卡片格式

新增或评审一个 Skill 时，建议统一使用下面这类信息结构：

### Code Review Skill

- **平台:** Claude Code, Codex
- **类型:** Coding Skill
- **适用场景:** 用于审查 Pull Request、识别缺陷并提升代码质量。
- **输入:** Diff、仓库上下文和审查要求。
- **输出:** 审查评论、风险摘要和修改建议。
- **安装方式:** 安装说明链接。
- **为什么值得看:** 有清晰的审查清单、实战示例和更安全的 review 工作流。
- **成熟度:** 推荐
- **许可证:** MIT
- **标签:** `code-review`, `ai-coding`, `quality`


## 收录标准

一个提交的资源至少应满足以下条件中的三项：

- 解决了一个明确且可复用的任务。
- 有公开文档或源码。
- 提供了安装或使用说明。
- 包含示例、截图或贴近真实使用的说明。
- 能运行在至少一个已知 Agent 平台上。
- 许可证清晰。
- 仍在维护，或已经被广泛使用。
- 默认行为不过度危险。

不建议收录：

- 只有 Prompt 文本、没有上下文的资源。
- 没有公开文档的封闭工具。
- 明显无人维护的垃圾项目。
- 与现有资源没有实质差异的重复项。
- 默认就要求危险权限的 Skill。
- 以盗号、滥用抓取、垃圾信息、恶意软件、规避机制或绕过安全控制为目标的工具。

## 数据文件

- `data/skills.yml` 是资源列表的事实来源。
- `data/categories.yml` 定义分类与成熟度标签。
- `data/tools.yml` 维护平台、协议与说明文件格式。
- 运行 `npm run validate` 做数据校验。
- 运行 `npm run generate` 重新生成英文和中文 README。

## 贡献方式

参见 [CONTRIBUTING.md](CONTRIBUTING.md) 和 [docs/submit-a-skill.md](docs/submit-a-skill.md)。

## 许可证

MIT，见 [LICENSE](LICENSE)。
