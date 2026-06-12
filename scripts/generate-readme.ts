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

const readYaml = <T>(path: string): T => parse(readFileSync(path, "utf8")) as T;

const categories = readYaml<CategoryFile>("data/categories.yml");
const skills = readYaml<SkillsFile>("data/skills.yml").skills;

const maturityLabel = new Map(categories.maturity.map((item) => [item.key, item.label]));

const slugify = (value: string) =>
  value
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

const listItem = (skill: Skill) =>
  `- [${skill.name}](${skill.url}) - ${skill.description} Why awesome: ${skill.why_awesome}`;

const tableRow = (skill: Skill) =>
  `| [${skill.name}](${skill.url}) | ${skill.platform.join(" / ")} | ${skill.type} | ${maturityLabel.get(skill.maturity) ?? skill.maturity} | ${skill.tags.map((tag) => `\`${tag}\``).join(", ")} |`;

const skillCard = (skill: Skill) => `### ${skill.name}

- **Platform:** ${skill.platform.join(", ")}
- **Type:** ${skill.type}
- **Use Case:** ${skill.description}
- **Input:** ${skill.input}
- **Output:** ${skill.output}
- **Install:** ${skill.install}
- **Why Awesome:** ${skill.why_awesome}
- **Maturity:** ${maturityLabel.get(skill.maturity) ?? skill.maturity}
- **License:** ${skill.license}
- **Tags:** ${skill.tags.map((tag) => `\`${tag}\``).join(", ")}
`;

const contents = [
  "Featured",
  "What Is An Agent Skill",
  "Categories",
  ...categories.categories.map((category) => category.name),
  "Skills By Platform",
  "Skill Card Format",
  "Quality Bar",
  "Data Files",
  "Contributing",
  "License"
];

const featured = skills.filter((skill) => skill.featured);

const categorySections = categories.categories
  .map((category) => {
    const categorySkills = skills.filter((skill) => skill.category.includes(category.name));
    if (categorySkills.length === 0) {
      return `## ${category.name}

${category.description}

No entries yet. Contributions welcome.
`;
    }

    const rows = categorySkills
      .sort((a, b) => a.name.localeCompare(b.name))
      .map(tableRow)
      .join("\n");

    return `## ${category.name}

${category.description}

| Skill | Platform | Type | Maturity | Tags |
|---|---|---|---|---|
${rows}
`;
  })
  .join("\n");

const platforms = Array.from(new Set(skills.flatMap((skill) => skill.platform))).sort((a, b) => a.localeCompare(b));
const platformSection = platforms
  .map((platform) => {
    const platformSkills = skills
      .filter((skill) => skill.platform.includes(platform))
      .sort((a, b) => a.name.localeCompare(b.name));
    return `### ${platform}

${platformSkills.map(listItem).join("\n")}
`;
  })
  .join("\n");

const readme = `# Awesome Agent Skills

> A curated list of reusable skills, workflows, instructions, and tool-use recipes for AI agents.

This repository is not just a link dump. It is meant to be an agent capability entry point: what is worth using, when to use it, what platform it supports, how mature it is, how to install it, and what to watch out for.

## Contents

${contents.map((item) => `- [${item}](#${slugify(item)})`).join("\n")}

## Featured

Hand-picked skills and references that are practical, reusable, and well documented.

${featured.map(listItem).join("\n")}

## What Is An Agent Skill?

An Agent Skill is a reusable package of instructions, examples, scripts, references, or assets that helps an AI agent perform a task reliably. A good skill is narrower than a general prompt and more portable than a one-off chat transcript.

Useful neighboring formats include:

- **Skill:** A packaged capability, often centered on \`SKILL.md\`, with optional scripts and resources.
- **Tool-use recipe:** A repeatable pattern for connecting agents to tools, APIs, files, databases, browsers, or business systems.
- **Agent instruction:** Repository or workspace guidance such as \`AGENTS.md\`, \`CLAUDE.md\`, \`GEMINI.md\`, \`.github/copilot-instructions.md\`, or Cursor rules.
- **MCP recipe:** A server, SDK, or configuration pattern that exposes tools, prompts, or resources through the Model Context Protocol.

## Categories

${categories.categories.map((category) => `- [${category.name}](#${slugify(category.name)}) - ${category.description}`).join("\n")}

${categorySections}

## Skills By Platform

${platformSection}

## Skill Card Format

Use this format when adding or reviewing a skill:

${skillCard({
  name: "Code Review Skill",
  url: "https://example.com/code-review-skill",
  description: "Review pull requests, detect bugs, and improve code quality.",
  platform: ["Claude Code", "Codex"],
  category: ["AI Coding"],
  tags: ["code-review", "ai-coding", "quality"],
  maturity: "recommended",
  license: "MIT",
  maintained: true,
  install: "Link to installation instructions.",
  why_awesome: "Clear review checklist, practical examples, and a safe review workflow.",
  type: "Coding Skill",
  input: "Diff, repository context, and review requirements.",
  output: "Review comments, risk summary, and suggested fixes."
})}

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

- \`data/skills.yml\` is the source of truth for listed resources.
- \`data/categories.yml\` defines categories and maturity labels.
- \`data/tools.yml\` tracks platforms, protocols, and instruction files.
- Run \`npm run validate\` to validate data.
- Run \`npm run generate\` to regenerate this README.

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) and [docs/submit-a-skill.md](docs/submit-a-skill.md).

## License

MIT. See [LICENSE](LICENSE).
`;

if (process.argv.includes("--check")) {
  const existing = readFileSync("README.md", "utf8");
  if (existing !== readme) {
    console.error("README.md is out of date. Run npm run generate.");
    process.exit(1);
  }
  console.log("README.md is up to date.");
} else {
  writeFileSync("README.md", readme);
  console.log("Generated README.md.");
}
