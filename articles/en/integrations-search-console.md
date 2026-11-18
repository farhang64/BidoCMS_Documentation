# Connect Google Search Console

Open **Settings → Search Console** to connect the public website to a Google Search Console property. This connection enables Search Console performance and Discover reports, along with Google URL Inspection in page workspaces.

## Before you connect

- Use a Google account that already has access to the website's property in Search Console.
- Check that the public site address displayed in Settings uses HTTPS and belongs to this installation. The CMS must be able to verify its public website.
- Your CMS role must include **Settings → Search Console**. Viewing reports uses separate page permissions.
- A Domain property can cover both the base and www hostname. A URL-prefix property is limited to the prefix Google granted. BidoCMS selects a verified property and displays which one it uses.

## Connect and verify access

1. Open **Settings → Search Console**.
2. Check the website address in the connection card.
3. Select **Connect Search Console**. Google opens its sign-in and consent screen.
4. Select the Google account with access to this website and approve the requested Search Console read access.
5. Back in BidoCMS, confirm the **Connected** badge. Check **Property**, **Access** and **Last verified**. Access can be Owner, Full user or Restricted user according to Google's grant.
6. Select **Check access** if you need to confirm that the account can still read the property.

BidoCMS saves the connection after Google verifies access to the displayed website. The connection reads existing data.

## Reconnect or disconnect

Use **Reconnect with Google** if access expired, the Google account changed, or the panel displays **Reconnect needed**. Complete consent before checking reports. A cancelled or failed reconnect preserves the previously saved connection.

Use **Disconnect** and confirm to hide Search Console reports. The installation keeps the archive and can make it available again after matching property and access scope are verified on reconnection. Google Analytics is managed separately under **Settings → Analytics**.

## If you cannot connect

| Panel message or symptom | What to check |
| --- | --- |
| Account has no Search Console access to this website | Sign in to Search Console directly, confirm the property is visible under the intended account, and restart consent with that account. |
| Allow Search Console access | Approve the permission on Google's consent screen. |
| Set the public HTTPS website address | Ask the site administrator to check the configured public site address. |
| The service could not verify this website | Verify that the configured HTTPS website is publicly reachable and points to the correct installation. |
| The central Google service is awaiting setup | Ask the BidoCMS administrator about service configuration, then choose **Refresh status**. |
| The connection changed in another session | Refresh the connection state and start the action again. |

[Understand page search performance](analytics-page-search-console.md) · [Inspect a page's index status](tools-page-search-engines.md)
