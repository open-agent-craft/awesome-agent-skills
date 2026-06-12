import { readFileSync, writeFileSync } from "node:fs";
import { parse } from "yaml";

type Category = {
  name: string;
  slug: string;
  description: string;
};

type CategoryFile = {
  categories: Category[];
  maturity: Array<{ key: string; label: string; description: string }>;
};

type Skill = {
  name: string;
  url: string;
  description: string;
  platform: string[];
  category: string[];
  tags: string[];
  maturity: string;
  license: string;
  maintained: boolean;
  install: string;
  why_awesome: string;
  type: string;
  input: string;
  output: string;
  tools?: string[];
  safety_notes?: string;
  featured?: boolean;
};

type SkillsFile = {
  skills: Skill[];
};

type Locale = "en" | "zh-CN";

type Copy = {
  title: string;
  tagline: string;
  intro: string;
  alternateLanguageLabel: string;
  alternateLanguagePath: string;
  contentsTitle: string;
  featuredTitle: string;
  featuredIntro: string;
  whatIsTitle: string;
  whatIsBody: string;
  neighboringTitle: string;
  neighboringItems: string[];
  categoriesTitle: string;
  skillsByPlatformTitle: string;
  skillCardTitle: string;
  skillCardIntro: string;
  qualityBarTitle: string;
  qualityBarIntro: string;
  qualityBarCriteria: string[];
  qualityBarNotFitTitle: string;
  qualityBarNotFit: string[];
  dataFilesTitle: string;
  dataFiles: string[];
  contributingTitle: string;
  contributingText: string;
  licenseTitle: string;
  licenseText: string;
  noEntries: string;
  sectionNames: {
    featured: string;
    whatIs: string;
    categories: string;
    skillsByPlatform: string;
    skillCardFormat: string;
    qualityBar: string;
    dataFiles: string;
    contributing: string;
    license: string;
  };
  categoryNames: Record<string, string>;
  categoryDescriptions: Record<string, string>;
  maturityLabels: Record<string, string>;
  tableHeaders: {
    skill: string;
    platform: string;
    type: string;
    maturity: string;
    tags: string;
  };
  skillCardLabels: {
    platform: string;
    type: string;
    useCase: string;
    input: string;
    output: string;
    install: string;
    whyAwesome: string;
    maturity: string;
    license: string;
    tags: string;
  };
};

const copyByLocale: Record<Locale, Copy> = {
  en: {
    title: "Awesome Agent Skills",
    tagline: "A curated list of reusable skills, workflows, instructions, and tool-use recipes for AI agents.",
    intro:
      "This repository is not just a link dump. It is meant to be an agent capability entry point: what is worth using, when to use it, what platform it supports, how mature it is, how to install it, and what to watch out for.",
    alternateLanguageLabel: "中文版本",
    alternateLanguagePath: "./README.zh-CN.md",
    contentsTitle: "Contents",
    featuredTitle: "Featured",
    featuredIntro: "Hand-picked skills and references that are practical, reusable, and well documented.",
    whatIsTitle: "What Is An Agent Skill",
    whatIsBody:
      "An Agent Skill is a reusable package of instructions, examples, scripts, references, or assets that helps an AI agent perform a task reliably. A good skill is narrower than a general prompt and more portable than a one-off chat transcript.",
    neighboringTitle: "Useful neighboring formats include:",
    neighboringItems: [
      "**Skill:** A packaged capability, often centered on `SKILL.md`, with optional scripts and resources.",
      "**Tool-use recipe:** A repeatable pattern for connecting agents to tools, APIs, files, databases, browsers, or business systems.",
      "**Agent instruction:** Repository or workspace guidance such as `AGENTS.md`, `CLAUDE.md`, `GEMINI.md`, `.github/copilot-instructions.md`, or Cursor rules.",
      "**MCP recipe:** A server, SDK, or configuration pattern that exposes tools, prompts, or resources through the Model Context Protocol."
    ],
    categoriesTitle: "Categories",
    skillsByPlatformTitle: "Skills By Platform",
    skillCardTitle: "Skill Card Format",
    skillCardIntro: "Use this format when adding or reviewing a skill:",
    qualityBarTitle: "Quality Bar",
    qualityBarIntro: "A submitted skill should meet at least three of these criteria:",
    qualityBarCriteria: [
      "Solves a clear and reusable task.",
      "Has public documentation or source code.",
      "Provides installation or usage instructions.",
      "Includes examples, screenshots, or realistic usage notes.",
      "Works with at least one known agent platform.",
      "Has a clear license.",
      "Is actively maintained or widely used.",
      "Avoids unsafe default behavior."
    ],
    qualityBarNotFitTitle: "Not a fit:",
    qualityBarNotFit: [
      "Pure prompt dumps without context.",
      "Closed tools with no public docs.",
      "Unmaintained spam projects.",
      "Duplicate skills with no meaningful difference.",
      "Skills that require unsafe permissions by default.",
      "Tools focused on credential theft, scraping abuse, spam, malware, evasion, or bypassing safety controls."
    ],
    dataFilesTitle: "Data Files",
    dataFiles: [
      "`data/skills.yml` is the source of truth for listed resources.",
      "`data/categories.yml` defines categories and maturity labels.",
      "`data/tools.yml` tracks platforms, protocols, and instruction files.",
      "Run `npm run validate` to validate data.",
      "Run `npm run generate` to regenerate the English and Chinese READMEs."
    ],
    contributingTitle: "Contributing",
    contributingText: "See [CONTRIBUTING.md](CONTRIBUTING.md) and [docs/submit-a-skill.md](docs/submit-a-skill.md).",
    licenseTitle: "License",
    licenseText: "MIT. See [LICENSE](LICENSE).",
    noEntries: "No entries yet. Contributions welcome.",
    sectionNames: {
      featured: "Featured",
      whatIs: "What Is An Agent Skill",
      categories: "Categories",
      skillsByPlatform: "Skills By Platform",
      skillCardFormat: "Skill Card Format",
      qualityBar: "Quality Bar",
      dataFiles: "Data Files",
      contributing: "Contributing",
      license: "License"
    },
    categoryNames: {
      "AI Coding": "AI Coding",
      "Research & Search": "Research & Search",
      "Writing & Content": "Writing & Content",
      "Data Analysis": "Data Analysis",
      "Browser Automation": "Browser Automation",
      "Design & Media": "Design & Media",
      Productivity: "Productivity",
      DevOps: "DevOps",
      "MCP & Tool Use": "MCP & Tool Use",
      "Agent Instructions": "Agent Instructions",
      "Evaluation & Testing": "Evaluation & Testing",
      "Safety & Security": "Safety & Security"
    },
    categoryDescriptions: {},
    maturityLabels: {
      recommended: "Recommended",
      promising: "Promising",
      experimental: "Experimental",
      archived: "Archived"
    },
    tableHeaders: {
      skill: "Skill",
      platform: "Platform",
      type: "Type",
      maturity: "Maturity",
      tags: "Tags"
    },
    skillCardLabels: {
      platform: "Platform",
      type: "Type",
      useCase: "Use Case",
      input: "Input",
      output: "Output",
      install: "Install",
      whyAwesome: "Why Awesome",
      maturity: "Maturity",
      license: "License",
      tags: "Tags"
    }
  },
  "zh-CN": {
    title: "Awesome Agent Skills",
    tagline: "一个面向 AI Agent 的可复用 Skills、工作流、说明文件与工具使用方案精选库。",
    intro:
      "这个仓库不只是一个链接合集，而是一个 Agent 能力入口：告诉你哪些资源值得看、适合什么场景、支持哪些平台、成熟度如何、怎么安装，以及有哪些需要注意的坑。",
    alternateLanguageLabel: "English Version",
    alternateLanguagePath: "./README.md",
    contentsTitle: "目录",
    featuredTitle: "精选推荐",
    featuredIntro: "优先挑出那些实用、可复用、文档完善的技能与参考资源。",
    whatIsTitle: "什么是 Agent Skill",
    whatIsBody:
      "Agent Skill 是一类可复用的能力包，通常由指令、示例、脚本、参考资料或资源文件组成，用来帮助 AI Agent 更稳定地完成某一类任务。好的 Skill 比通用 Prompt 更聚焦，也比一次性的聊天记录更便于迁移和复用。",
    neighboringTitle: "几个相邻但不完全相同的概念：",
    neighboringItems: [
      "**Skill：** 一种能力打包形式，常见中心文件是 `SKILL.md`，也可以附带脚本和资源。",
      "**Tool-use recipe：** 一套把 Agent 连接到工具、API、文件、数据库、浏览器或业务系统的可重复模式。",
      "**Agent instruction：** 仓库或工作区级别的 Agent 指南，例如 `AGENTS.md`、`CLAUDE.md`、`GEMINI.md`、`.github/copilot-instructions.md` 或 Cursor rules。",
      "**MCP recipe：** 通过 Model Context Protocol 暴露工具、prompts 或 resources 的服务器、SDK 或配置模式。"
    ],
    categoriesTitle: "分类",
    skillsByPlatformTitle: "按平台查看",
    skillCardTitle: "Skill 卡片格式",
    skillCardIntro: "新增或评审一个 Skill 时，建议统一使用下面这类信息结构：",
    qualityBarTitle: "收录标准",
    qualityBarIntro: "一个提交的资源至少应满足以下条件中的三项：",
    qualityBarCriteria: [
      "解决了一个明确且可复用的任务。",
      "有公开文档或源码。",
      "提供了安装或使用说明。",
      "包含示例、截图或贴近真实使用的说明。",
      "能运行在至少一个已知 Agent 平台上。",
      "许可证清晰。",
      "仍在维护，或已经被广泛使用。",
      "默认行为不过度危险。"
    ],
    qualityBarNotFitTitle: "不建议收录：",
    qualityBarNotFit: [
      "只有 Prompt 文本、没有上下文的资源。",
      "没有公开文档的封闭工具。",
      "明显无人维护的垃圾项目。",
      "与现有资源没有实质差异的重复项。",
      "默认就要求危险权限的 Skill。",
      "以盗号、滥用抓取、垃圾信息、恶意软件、规避机制或绕过安全控制为目标的工具。"
    ],
    dataFilesTitle: "数据文件",
    dataFiles: [
      "`data/skills.yml` 是资源列表的事实来源。",
      "`data/categories.yml` 定义分类与成熟度标签。",
      "`data/tools.yml` 维护平台、协议与说明文件格式。",
      "运行 `npm run validate` 做数据校验。",
      "运行 `npm run generate` 重新生成英文和中文 README。"
    ],
    contributingTitle: "贡献方式",
    contributingText: "参见 [CONTRIBUTING.md](CONTRIBUTING.md) 和 [docs/submit-a-skill.md](docs/submit-a-skill.md)。",
    licenseTitle: "许可证",
    licenseText: "MIT，见 [LICENSE](LICENSE)。",
    noEntries: "暂时还没有条目，欢迎贡献。",
    sectionNames: {
      featured: "精选推荐",
      whatIs: "什么是 Agent Skill",
      categories: "分类",
      skillsByPlatform: "按平台查看",
      skillCardFormat: "Skill 卡片格式",
      qualityBar: "收录标准",
      dataFiles: "数据文件",
      contributing: "贡献方式",
      license: "许可证"
    },
    categoryNames: {
      "AI Coding": "AI Coding Skills",
      "Research & Search": "Research & Search Skills",
      "Writing & Content": "Writing & Content Skills",
      "Data Analysis": "Data Analysis Skills",
      "Browser Automation": "Browser Automation",
      "Design & Media": "Design & Media",
      Productivity: "Productivity",
      DevOps: "DevOps",
      "MCP & Tool Use": "MCP 与 Tool Use",
      "Agent Instructions": "Agent Instructions",
      "Evaluation & Testing": "Evaluation & Testing",
      "Safety & Security": "Safety & Security"
    },
    categoryDescriptions: {
      "AI Coding":
        "面向代码审查、Bug 修复、重构、测试、文档、迁移和架构工作的 Skills 与工作流。",
      "Research & Search":
        "适用于网页搜索、文献综述、市场研究、公司研究和产品对比的研究型工作流。",
      "Writing & Content":
        "适用于技术写作、脚本、发布说明、翻译、SEO brief 和内容改写的技能。",
      "Data Analysis":
        "覆盖 CSV、表格、SQL、BI、报表生成、数据清洗和分析表达的技能。",
      "Browser Automation":
        "浏览器测试、交互、截图、站点 QA 与网页任务自动化方案。",
      "Design & Media":
        "演示文稿、图像、UI 评审、品牌规范、海报文案与视频工作流相关资源。",
      Productivity: "日历、邮件、任务、笔记、会议与知识流转相关的 Agent 工作流。",
      DevOps: "CI 修复、发布、部署、基础设施排障、可观测性和运维相关方案。",
      "MCP & Tool Use":
        "Model Context Protocol、SDK、工具路由、函数调用与多步工具使用模式。",
      "Agent Instructions":
        "AGENTS.md、CLAUDE.md、GEMINI.md、Copilot instructions、Cursor rules 等项目级说明文件。",
      "Evaluation & Testing":
        "Skill 评估、回归检查、基准测试、质量闸门和评测工作流。",
      "Safety & Security":
        "Prompt Injection 防护、权限控制、密钥处理、安全文件操作和人工审批工作流。"
    },
    maturityLabels: {
      recommended: "推荐",
      promising: "值得关注",
      experimental: "实验性",
      archived: "已归档"
    },
    tableHeaders: {
      skill: "Skill",
      platform: "平台",
      type: "类型",
      maturity: "成熟度",
      tags: "标签"
    },
    skillCardLabels: {
      platform: "平台",
      type: "类型",
      useCase: "适用场景",
      input: "输入",
      output: "输出",
      install: "安装方式",
      whyAwesome: "为什么值得看",
      maturity: "成熟度",
      license: "许可证",
      tags: "标签"
    }
  }
};

const readYaml = <T>(path: string): T => parse(readFileSync(path, "utf8")) as T;

const categories = readYaml<CategoryFile>("data/categories.yml");
const skills = readYaml<SkillsFile>("data/skills.yml").skills;

const slugify = (value: string) =>
  value
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9\u4e00-\u9fa5]+/g, "-")
    .replace(/^-|-$/g, "");

const getCategoryName = (copy: Copy, categoryName: string) => copy.categoryNames[categoryName] ?? categoryName;

const getCategoryDescription = (copy: Copy, category: Category) =>
  copy.categoryDescriptions[category.name] ?? category.description;

const getMaturityLabel = (copy: Copy, maturity: string) => copy.maturityLabels[maturity] ?? maturity;

const getSectionItems = (copy: Copy) =>
  [
    copy.sectionNames.featured,
    copy.sectionNames.whatIs,
    copy.sectionNames.categories,
    ...categories.categories.map((category) => getCategoryName(copy, category.name)),
    copy.sectionNames.skillsByPlatform,
    copy.sectionNames.skillCardFormat,
    copy.sectionNames.qualityBar,
    copy.sectionNames.dataFiles,
    copy.sectionNames.contributing,
    copy.sectionNames.license
  ].map((item) => `- [${item}](#${slugify(item)})`);

const listItem = (skill: Skill, locale: Locale) => {
  if (locale === "zh-CN") {
    return `- [${skill.name}](${skill.url}) - ${skill.description} 为什么值得看：${skill.why_awesome}`;
  }
  return `- [${skill.name}](${skill.url}) - ${skill.description} Why awesome: ${skill.why_awesome}`;
};

const tableRow = (skill: Skill, copy: Copy) =>
  `| [${skill.name}](${skill.url}) | ${skill.platform.join(" / ")} | ${skill.type} | ${getMaturityLabel(copy, skill.maturity)} | ${skill.tags.map((tag) => `\`${tag}\``).join(", ")} |`;

const skillCard = (skill: Skill, copy: Copy) => `### ${skill.name}

- **${copy.skillCardLabels.platform}:** ${skill.platform.join(", ")}
- **${copy.skillCardLabels.type}:** ${skill.type}
- **${copy.skillCardLabels.useCase}:** ${skill.description}
- **${copy.skillCardLabels.input}:** ${skill.input}
- **${copy.skillCardLabels.output}:** ${skill.output}
- **${copy.skillCardLabels.install}:** ${skill.install}
- **${copy.skillCardLabels.whyAwesome}:** ${skill.why_awesome}
- **${copy.skillCardLabels.maturity}:** ${getMaturityLabel(copy, skill.maturity)}
- **${copy.skillCardLabels.license}:** ${skill.license}
- **${copy.skillCardLabels.tags}:** ${skill.tags.map((tag) => `\`${tag}\``).join(", ")}
`;

const featured = skills.filter((skill) => skill.featured);

const getPlatformSection = (copy: Copy, locale: Locale) => {
  const platforms = Array.from(new Set(skills.flatMap((skill) => skill.platform))).sort((a, b) => a.localeCompare(b));

  return platforms
    .map((platform) => {
      const platformSkills = skills
        .filter((skill) => skill.platform.includes(platform))
        .sort((a, b) => a.name.localeCompare(b.name));
      return `### ${platform}

${platformSkills.map((skill) => listItem(skill, locale)).join("\n")}
`;
    })
    .join("\n");
};

const getCategorySections = (copy: Copy) =>
  categories.categories
    .map((category) => {
      const categorySkills = skills.filter((skill) => skill.category.includes(category.name));
      if (categorySkills.length === 0) {
        return `## ${getCategoryName(copy, category.name)}

${getCategoryDescription(copy, category)}

${copy.noEntries}
`;
      }

      const rows = categorySkills
        .sort((a, b) => a.name.localeCompare(b.name))
        .map((skill) => tableRow(skill, copy))
        .join("\n");

      return `## ${getCategoryName(copy, category.name)}

${getCategoryDescription(copy, category)}

| ${copy.tableHeaders.skill} | ${copy.tableHeaders.platform} | ${copy.tableHeaders.type} | ${copy.tableHeaders.maturity} | ${copy.tableHeaders.tags} |
|---|---|---|---|---|
${rows}
`;
    })
    .join("\n");

const renderReadme = (locale: Locale) => {
  const copy = copyByLocale[locale];

  return `# ${copy.title}

> ${copy.tagline}

${copy.intro}

[${copy.alternateLanguageLabel}](${copy.alternateLanguagePath})

## ${copy.contentsTitle}

${getSectionItems(copy).join("\n")}

## ${copy.featuredTitle}

${copy.featuredIntro}

${featured.map((skill) => listItem(skill, locale)).join("\n")}

## ${copy.whatIsTitle}

${copy.whatIsBody}

${copy.neighboringTitle}

${copy.neighboringItems.map((item) => `- ${item}`).join("\n")}

## ${copy.categoriesTitle}

${categories.categories.map((category) => `- [${getCategoryName(copy, category.name)}](#${slugify(getCategoryName(copy, category.name))}) - ${getCategoryDescription(copy, category)}`).join("\n")}

${locale === "zh-CN" ? "\n注：资源名称、官方术语和部分摘要默认保留原始语言，以减少误译并方便检索。\n" : ""}

${getCategorySections(copy)}

## ${copy.skillsByPlatformTitle}

${getPlatformSection(copy, locale)}

## ${copy.skillCardTitle}

${copy.skillCardIntro}

${skillCard(
    {
      name: "Code Review Skill",
      url: "https://example.com/code-review-skill",
      description: locale === "zh-CN" ? "用于审查 Pull Request、识别缺陷并提升代码质量。" : "Review pull requests, detect bugs, and improve code quality.",
      platform: ["Claude Code", "Codex"],
      category: ["AI Coding"],
      tags: ["code-review", "ai-coding", "quality"],
      maturity: "recommended",
      license: "MIT",
      maintained: true,
      install: locale === "zh-CN" ? "安装说明链接。" : "Link to installation instructions.",
      why_awesome:
        locale === "zh-CN"
          ? "有清晰的审查清单、实战示例和更安全的 review 工作流。"
          : "Clear review checklist, practical examples, and a safe review workflow.",
      type: locale === "zh-CN" ? "Coding Skill" : "Coding Skill",
      input: locale === "zh-CN" ? "Diff、仓库上下文和审查要求。" : "Diff, repository context, and review requirements.",
      output: locale === "zh-CN" ? "审查评论、风险摘要和修改建议。" : "Review comments, risk summary, and suggested fixes."
    },
    copy
  )}

## ${copy.qualityBarTitle}

${copy.qualityBarIntro}

${copy.qualityBarCriteria.map((item) => `- ${item}`).join("\n")}

${copy.qualityBarNotFitTitle}

${copy.qualityBarNotFit.map((item) => `- ${item}`).join("\n")}

## ${copy.dataFilesTitle}

${copy.dataFiles.map((item) => `- ${item}`).join("\n")}

## ${copy.contributingTitle}

${copy.contributingText}

## ${copy.licenseTitle}

${copy.licenseText}
`;
};

const outputs: Array<{ path: string; content: string }> = [
  { path: "README.md", content: renderReadme("en") },
  { path: "README.zh-CN.md", content: renderReadme("zh-CN") }
];

if (process.argv.includes("--check")) {
  let hasDiff = false;
  for (const output of outputs) {
    const existing = readFileSync(output.path, "utf8");
    if (existing !== output.content) {
      console.error(`${output.path} is out of date. Run npm run generate.`);
      hasDiff = true;
    }
  }

  if (hasDiff) {
    process.exit(1);
  }

  console.log("README files are up to date.");
} else {
  for (const output of outputs) {
    writeFileSync(output.path, output.content);
  }
  console.log("Generated README.md and README.zh-CN.md.");
}
