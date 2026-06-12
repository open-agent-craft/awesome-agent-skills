# Security Policy

Agent skills and tool-use recipes can change how an AI system reads files, calls APIs, controls browsers, edits code, or communicates with external systems. Treat every third-party skill as untrusted code until reviewed.

## Report A Security Issue

Please open a private security advisory or contact the maintainers if you find:

- A listed skill that steals credentials, tokens, cookies, or private data.
- A listed skill that hides destructive behavior.
- A broken link that now points to malware, phishing, or impersonation.
- A recipe that encourages unsafe default permissions.
- A prompt injection pattern that is presented as safe without caveats.

Do not open public issues with live credentials, exploit payloads against real targets, or private user data.

## Review Checklist

Before using a skill:

- Inspect scripts and install commands.
- Check requested file, shell, browser, network, and API permissions.
- Prefer least-privilege credentials.
- Run unknown tools in a sandbox or disposable environment.
- Require human approval for purchases, external messages, credential entry, deployments, deletes, and production data changes.
- Avoid sending secrets or regulated data to models or hosted tools without an approved data policy.

## Scope

This repository curates third-party resources. Inclusion is not a security audit or endorsement. Each downstream project is responsible for its own threat model, compliance needs, and operational safeguards.
