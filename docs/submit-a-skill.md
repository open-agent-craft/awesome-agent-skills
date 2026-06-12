# Submit A Skill

You can recommend a skill by opening an issue or pull request.

## Fast Path

1. Open a recommendation issue.
2. Include the resource URL.
3. Explain what task it solves.
4. Identify platform support.
5. Mention any safety or maintenance concerns.

## Pull Request Path

1. Edit `data/skills.yml`.
2. Reuse existing categories from `data/categories.yml`.
3. Add tags that make search useful.
4. Run:

```bash
npm run validate
npm run generate
```

5. Open a PR with a short explanation.

## Required Fields

Each entry needs:

- `name`
- `url`
- `description`
- `platform`
- `category`
- `tags`
- `maturity`
- `license`
- `maintained`
- `install`
- `why_awesome`
- `type`
- `input`
- `output`

## Writing `why_awesome`

Good:

```text
Clear review checklist, practical examples, and safe review workflow.
```

Weak:

```text
It is awesome.
```

## Safety Notes

Add `safety_notes` when a skill:

- Executes shell commands.
- Reads or writes files.
- Uses browser automation.
- Sends email, messages, or calendar invites.
- Calls APIs.
- Accesses databases.
- Uses credentials or tokens.
- Touches production systems.
