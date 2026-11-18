# Agent package format and runtime requirements

An agent package is a ZIP for **AI & Agent → Upload agent**. Its root contains `agent.json` and the JavaScript ES modules named by the manifest. An agent executes a bounded function with validated input and host-granted tools.

## ZIP and manifest

- Root manifest fields are `schemaVersion`, `id`, `name`, `version`, `description`, `permissions`, `inputs` and `functions`. Optional fields are `logo` and `requirements`. Schema version is `1`.
- Give the package a stable lowercase ID, semantic version and readable description. Uploading the same ID updates the existing agent.
- Each function declares its stable ID, display name, optional description, package-relative JavaScript file and exported function name. The runtime calls the export with `(inputs, context)`. Return a JSON-compatible result.
- Relative JavaScript imports must resolve inside the package. An optional PNG, JPEG or WebP logo can be bundled with the ZIP.
- The importer rejects hidden paths, links, path traversal, duplicate or case-conflicting members and unsupported types. Include only intended package assets. There is no dependency installation step.

## Inputs, capabilities and prerequisites

| Input type | Purpose |
| --- | --- |
| text, textarea | Short or longer string input. |
| password | Masked external credential or other secret supplied by the administrator. |
| number | Finite number with optional minimum and maximum. |
| boolean | A checkbox value. False is a valid required selection. |
| select | One declared option. |
| ai | Selection of an existing enabled provider key and model. The package receives an identifier and model, and uses the declared input name for AI calls. |

The host checks `permissions` separately from `requirements`. A requirement describes prerequisites and does not add tool access. Supported capability groups are site read, nodes read, Search Console read, Google Business read, generic public HTTP and AI generation. Corresponding requirement types are site, nodes, Search Console, Google Business, network, named input and AI. Required checks run before manual and scheduled execution.

| Capability group | Host calls |
| --- | --- |
| Site | `site.get` |
| Nodes | `nodes.list`, `nodes.get`, `nodes.search` |
| Search Console | `searchConsole.analytics`, `searchConsole.inspection` |
| Google Business | `googleBusiness.locations`, `googleBusiness.profile` |
| Network | `http.request` |
| AI | `ai.generate` |

Use `context.call(toolName, argumentsObject)` for a declared tool and `context.log(message)` for non-sensitive progress. The isolated JavaScript runtime supplies standard language features, promises and package-relative imports. Built-in Node modules, direct filesystem access, direct fetch and arbitrary CMS writes are outside the provided interface.

## Limits

The upload limit is 10 MiB and the total extracted package limit is 20 MiB. There can be at most 100 ZIP entries. The manifest supports up to 40 inputs and up to 20 functions. Individual runtime input and tool argument snapshots are limited to 64 KiB. A run can make up to 100 tool calls, with up to 10 concurrently and up to 10 AI calls. The normal CMS execution limit is two minutes.

[Install an agent package](ai-agent-install.md) · [Run and schedule an agent](ai-agent-run.md)
