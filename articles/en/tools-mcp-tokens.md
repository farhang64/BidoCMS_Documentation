# Create and manage MCP access tokens

Open **MCP Server → Access Tokens** to grant an external MCP client access to specific enabled Bearer-protected tools.

## Create and copy a token

1. Ensure that the target tool is enabled and marked **Requires access token**.
2. Open **Access Tokens → New Token**.
3. Enter a **Name** that identifies the consuming client or automation.
4. Set **Expiry Date (optional)**. Leaving it blank gives the token no automatic expiration.
5. Under **Tool Access**, check the individual tools the client needs. Only enabled Bearer-protected tools appear in this list. Public tools need no selection.
6. Choose **Create Token**, then **Copy Token** from the one-time reveal.
7. Store the token in the intended client's credential settings, supplied as `Authorization: Bearer <token>`. Choose **Done — Hide Token** in the panel when finished.

## Review, edit or remove access

The token list shows the token name, masked value, expiry, tool access and last used information. **Edit** changes the name, expiry or explicit tool grants. New tools need to be granted separately. Use the enabled control to suspend a token where available or **Delete** to remove it. If you lose the secret value, create a replacement token for the client, then remove the old token.

If an otherwise valid token cannot call a tool, verify the token is enabled and unexpired, check the specific grant, and confirm the tool's current access mode. If no selectable tools appear while creating a token, configure an enabled tool with Bearer protection first.

[Connect an AI client](tools-mcp-server.md) · [Set a tool access policy](tools-mcp-tools.md)
