# Connect and deploy a theme from Git

Open **Themes → Git repository** with the built-in CMS administrator account to connect a theme's repository and branch. The integration reads a branch archive through its provider API and deploys it through BidoCMS theme import.

## Connect the repository

1. Select the **Provider**. Options include GitHub, GitLab, and self-hosted Gitea or Forgejo. Enter **Server URL** for a self-hosted provider when requested.
2. Sign in with GitHub when supported and configured, or use a provider access token. Use an account that can read the repository and manage its webhook when automatic registration is needed.
3. Select **Show my repositories**. Search or filter the list and select the repository.
4. Select the branch that holds the theme package files.
5. Review **Deploy automatically on every push**. Turn it off to record pushes for deployment on demand.
6. Select **Connect this branch** and confirm the repository and branch.
7. Select **Deploy now** when you want to import the current commit immediately. Connecting alone records the branch and attempts to register the push webhook.

If GitHub sign-in asks for a client ID, complete the in-panel GitHub sign-in setup or use the access-token option. During device approval, use **Open GitHub** and **Copy code** to approve the request, then return to BidoCMS.

## Use the connected repository controls

| Action | What it does |
| --- | --- |
| Deploy now | Confirms and starts an import for the connected branch. Watch **Theme import progress** and inspect **History** afterward. |
| Check for new commits | Refreshes the latest branch information displayed in the status area. |
| Deploy automatically on every push | Changes whether matching incoming pushes start deployment automatically. |
| Change repository or branch | Reopens the connection wizard for a different target. |
| Disconnect | Disconnects the repository and removes the managed webhook where possible. The saved sign-in can remain available for connecting another repository. |

## Diagnose a deployment or webhook

Compare **Latest commit seen** with **Last deployed commit**. Review **Last deployment**, **Last webhook received**, and **Last error** before retrying. If BidoCMS could not register the webhook, follow the **Add the push webhook by hand** instructions for your provider, using the values shown for this connection. Keep the displayed webhook secret private. A branch package still needs to pass the import checks regardless of how deployment starts.

[Theme package import](design-theme-gallery.md) · [Theme activity history](design-theme-history.md)
