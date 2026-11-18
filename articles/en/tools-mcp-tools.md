# Manage built-in, panel, API and theme MCP tools

BidoCMS groups MCP tools by the source of their definitions. Use the tab that owns the tool you want to inspect, test or make available.

| Tab | Purpose |
| --- | --- |
| BidoCMS Tools | Configure built-in read-only tools. Review each title and description, pick availability and access, then choose **Save BidoCMS Tools**. |
| Panel Tools | Create and edit tools in the CMS panel, then test and inspect their read-only data queries. |
| API Tools | Review tools created through the authenticated CMS tool-management API. The tab displays the management endpoint and instructions. |
| Theme Tools | Review definitions contributed by a theme. Change the underlying definition in its source theme and configure availability in the panel if permitted. |

## Create a Panel Tool


1. Open **MCP Server → Panel Tools → New Panel Tool**.
2. Enter a unique **Name (slug)**. This is the tool identifier used by the client and by token grants. It cannot be changed after creation.
3. Provide a **Title** and a **Description** describing the result and intended use.
4. Choose an allowed **Base Collection**. Its description appears in the form.
5. Set **Result Limit** from 1–200. Public tools are capped at 100 results.
6. In **Availability and Authentication**, decide whether the tool **Requires access token**. OAuth preferences can be recorded, but the runtime currently supports public or Bearer-protected calls.
7. Use **Add Parameter** to define inputs. Parameter names, type, required state and descriptions guide the client. Reference values in the read-only aggregation pipeline using `{{paramName}}` placeholders.
8. Use **Test Run** with example arguments to inspect duration, count and results. Review which fields would be exposed and remove any fields callers should not receive.
9. Choose **Create Tool** or **Save Tool**. Use the list's enable control and **Save Access Policy** where applicable.

Choose **View Details** to see the tool parameters and pipeline. Editing and deleting definitions depend on the source tab. If a tool is absent from the client's list after enabling, review its policy and token grant, then reconnect or refresh the client's tool list.

[Set up the MCP endpoint](tools-mcp-server.md) · [Look up the built-in tools](tools-mcp-built-in.md) · [Manage MCP tokens](tools-mcp-tokens.md)
