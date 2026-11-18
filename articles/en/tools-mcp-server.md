# Configure MCP Server and connect an AI client

Open **MCP Server → Settings** to enable the installation's Model Context Protocol endpoint. MCP provides configured tools to external AI clients using Streamable HTTP.

## Enable and find the endpoint

1. Open **MCP Server → Settings**.
2. Turn on **Enable MCP Server**. The setting saves when the checkbox changes.
3. Select **Copy Endpoint URL**. The installation's endpoint usually ends in `/mcp`.
4. Select **Open MCP Documentation** to open the installation's MCP reference in a new tab.
5. Add the endpoint to a compatible client as a Streamable HTTP server. For a protected tool, configure the Bearer token provided by a CMS administrator.
6. Check the client's available tools. The tool must be enabled and, for protected calls, granted to the token.

## Understand access by tool

| Policy | What the client needs |
| --- | --- |
| Public | The endpoint URL. No token or grant is required for callers. |
| Requires access token | The client sends `Authorization: Bearer <token>`, and that token needs an explicit grant for the tool. |
| OAuth only | The policy can be stored, but MCP OAuth is pending. The tool is unavailable. |
| Disabled | The tool is unavailable to the client. |

Use **BidoCMS Tools** for built-in read-only tools, **Panel Tools** for panel-authored tools, **API Tools** for API-authored tools and **Theme Tools** for definitions supplied by a theme. **Access Tokens** manages grants.

A discovery warning after enabling indicates that the MCP setting saved but public discovery output did not sync. Check publish storage and use **Rebuild Sitemap** if instructed by the panel. If a single tool is missing, check its enabled state and token policy before changing endpoint configuration.

[Manage tool definitions](tools-mcp-tools.md) · [Create an access token](tools-mcp-tokens.md) · [CMS OAuth for content connectors](integrations-cms-oauth.md)
