# Security And Safety

Agent skills are operational instructions. Some skills can read files, invoke shell commands, call APIs, control browsers, or write to external systems. Treat skills as part of your software supply chain.

## Do Not Include

This repository does not accept resources focused on:

- Credential theft.
- Scraping abuse.
- Spam or unsolicited outreach.
- Malware.
- Evasion.
- Bypassing safety controls.
- Hidden destructive behavior.
- Unsafe default permissions.

## Trust Boundaries

Every skill should make its trust boundary clear:

- What files can it read or write?
- What tools can it call?
- What network destinations can it contact?
- What credentials does it need?
- What actions require human approval?
- What logs or audit trail does it produce?

## Human Approval

Require explicit human approval for:

- Deletes and destructive migrations.
- Deployments.
- Production data changes.
- Purchases or payments.
- Sending email or external messages.
- Credential entry.
- Permission changes.
- Publishing content.

## Prompt Injection

Skills that read untrusted content should assume that content may contain adversarial instructions. Recommended mitigations:

- Treat retrieved content as data, not instructions.
- Keep system and developer instructions separate from external content.
- Validate tool arguments server-side.
- Use allowlists for file paths, domains, commands, and database operations.
- Summarize untrusted content before using it to make decisions.
- Log tool calls and decisions when possible.

## Secret Handling

- Never put secrets in examples, prompts, skill files, or screenshots.
- Prefer environment variables or managed secret stores.
- Redact logs before sharing.
- Scope tokens to the minimum permissions needed.
- Rotate credentials if a skill or tool leaks them.
