# Reference for built-in BidoCMS MCP tools

Open **MCP Server → BidoCMS Tools** to choose which built-in read tools an MCP client can use. The installed MCP documentation shows the current installation's exposed tools. Tool names are the identifiers clients call.

| Tool | Purpose | Inputs |
| --- | --- | --- |
| `site-info` | Read general site information, supported languages and page types. | None. |
| `list-node-types` | List the site's page types and page counts. | None. |
| `list-nodes` | List pages by optional type, language, publication state or text. | `typeName`, `language`, `publishedOnly`, `search`, `limit`, `skip`. |
| `get-node` | Get a page's localized metadata, specifications and text. | Supply a `url`, `nodeId` or internal `shenase` to identify the page. |
| `list-specifications` | Read specification definitions, optionally limited to a page type. | Optional `typeName`. |
| `search-content` | Search text and page metadata and return matching pages and URLs. | Required `query`, optional `limit`. |

## Choose scope and verify access

1. Enable the tools needed for the client, decide which require a token and choose **Save BidoCMS Tools**.
2. For a protected tool, open **Access Tokens** and grant that tool explicitly.
3. From the client, call **site-info** or **list-node-types** first when the relevant language or page type is uncertain.
4. To browse a larger result set with **list-nodes**, use `limit` and `skip`. The default limit is 50 and the maximum is 500. Set `publishedOnly` when the query should be limited to published pages. The tool's default for this filter is false.
5. **search-content** defaults to 20 results and accepts up to 100. If the results include several language versions, use the returned URL to identify the intended page before retrieving more detail.

A read-only operation can still expose content. Review the result scope before marking a built-in tool public. An enabled tool requiring a token remains unavailable without a valid grant.

[Configure tool definitions](tools-mcp-tools.md) · [Grant an access token](tools-mcp-tokens.md)
