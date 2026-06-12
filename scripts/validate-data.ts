import { readFileSync } from "node:fs";
import { parse } from "yaml";

type CategoryFile = {
  categories: Array<{ name: string; slug: string }>;
  maturity: Array<{ key: string; label: string }>;
};

type ToolsFile = {
  tools: Array<{ name: string }>;
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
};

type SkillsFile = {
  skills: Skill[];
};

const readYaml = <T>(path: string): T => parse(readFileSync(path, "utf8")) as T;

const categories = readYaml<CategoryFile>("data/categories.yml");
const tools = readYaml<ToolsFile>("data/tools.yml");
const skillsFile = readYaml<SkillsFile>("data/skills.yml");

const categoryNames = new Set(categories.categories.map((category) => category.name));
const maturityKeys = new Set(categories.maturity.map((item) => item.key));
const toolNames = new Set(tools.tools.map((tool) => tool.name));

const errors: string[] = [];
const names = new Set<string>();
const urls = new Set<string>();

const requiredStringFields: Array<keyof Skill> = [
  "name",
  "url",
  "description",
  "maturity",
  "license",
  "install",
  "why_awesome",
  "type",
  "input",
  "output"
];

const isHttpUrl = (value: string) => {
  try {
    const url = new URL(value);
    return url.protocol === "http:" || url.protocol === "https:";
  } catch {
    return false;
  }
};

for (const [index, skill] of skillsFile.skills.entries()) {
  const label = skill.name || `skill at index ${index}`;

  for (const field of requiredStringFields) {
    if (typeof skill[field] !== "string" || String(skill[field]).trim().length === 0) {
      errors.push(`${label}: missing required string field "${field}"`);
    }
  }

  if (!Array.isArray(skill.platform) || skill.platform.length === 0) {
    errors.push(`${label}: platform must be a non-empty list`);
  }

  if (!Array.isArray(skill.category) || skill.category.length === 0) {
    errors.push(`${label}: category must be a non-empty list`);
  }

  if (!Array.isArray(skill.tags) || skill.tags.length === 0) {
    errors.push(`${label}: tags must be a non-empty list`);
  }

  if (typeof skill.maintained !== "boolean") {
    errors.push(`${label}: maintained must be true or false`);
  }

  if (skill.url && !isHttpUrl(skill.url)) {
    errors.push(`${label}: url must be an http(s) URL`);
  }

  if (names.has(skill.name)) {
    errors.push(`${label}: duplicate skill name`);
  }
  names.add(skill.name);

  if (urls.has(skill.url)) {
    errors.push(`${label}: duplicate URL ${skill.url}`);
  }
  urls.add(skill.url);

  if (!maturityKeys.has(skill.maturity)) {
    errors.push(`${label}: unknown maturity "${skill.maturity}"`);
  }

  for (const category of skill.category ?? []) {
    if (!categoryNames.has(category)) {
      errors.push(`${label}: unknown category "${category}"`);
    }
  }

  for (const tool of skill.tools ?? []) {
    if (!toolNames.has(tool)) {
      errors.push(`${label}: unknown tool "${tool}" in tools list`);
    }
  }
}

if (errors.length > 0) {
  console.error("Data validation failed:");
  for (const error of errors) {
    console.error(`- ${error}`);
  }
  process.exit(1);
}

console.log(`Validated ${skillsFile.skills.length} skills, ${categoryNames.size} categories, and ${toolNames.size} tools.`);
