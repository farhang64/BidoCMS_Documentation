# Connect Bido SEO and trusted applications through CMS OAuth

Open **Settings → OAuth** as a CMS administrator to control which trusted applications can use delegated read access. This workflow lets an eligible CMS user grant an application, such as Bido SEO, access to the approved site and page read scopes.

## Register and authorize Bido SEO

1. In the Bido SEO project, open **Connections → Add connection**, choose **CMS connection**, and enter the site's final HTTPS URL.
2. Copy the exact redirect URL Bido SEO displays, including its connection query parameter.
3. In BidoCMS, open **Settings → OAuth → Registered applications → Add application**.
4. Set **Application name**, optionally add a **Description**, and paste the full redirect into **Exact callback URLs**.
5. Keep the application enabled and select both site and page read permissions, shown as `site:read` and `nodes:read`.
6. Choose **Eligible CMS administrators only** or **Only selected CMS people**. For the second option, use **Find a CMS person** to locate and select eligible accounts. Their site and page permissions are still checked.
7. Save the application. Copy the displayed client ID and one-time client secret into Bido SEO. The client secret is shown once and can be cleared from the panel. If it is lost, rotate it to get a new value.
8. In **Connection details**, copy the CMS authorization URL, token URL and connector API base URL into the Bido SEO connection. Depending on the client, the revocation endpoint may also be needed.
9. If OAuth is disabled, select **Enable OAuth access**, choose the lifetimes, and use **Save access policy**.
10. In Bido SEO, choose **Authorize CMS**. Sign in with an eligible CMS account and approve after reviewing the application, callback and requested scopes. Return to Bido SEO and sync.

## Review access policy and applications

| Setting or action | Behavior |
| --- | --- |
| Enable OAuth access | Enables authorization for registered, enabled apps when a trusted public HTTPS issuer is configured. |
| Access token lifetime (seconds) | Accepts 300–3,600 seconds. The initial policy value is 900 seconds. |
| Refresh token lifetime (days) | Accepts 1–90 days. The initial policy value is 30 days. |
| Exact callback URLs | Supply one HTTPS URL per line, up to 10, with any query string included. Wildcards and fragments are rejected. |
| Application enabled | Controls whether that registered application may authorize and retain access. |
| Edit application | Changes the application's settings. Security-relevant changes can revoke current authorizations. |
| Rotate client secret | Generates a replacement credential and invalidates existing authorizations for the application. Update the application and authorize again. |
| Revoke application access | Disables this application and revokes its connections. |
| Revoke connection | Stops the selected connection in **Authorized connections**. |

Saving a changed access policy can require all existing applications to authorize again. Check **Authorized connections** for the authorizing CMS person, scopes, authorization date, last use and expiration.

## Resolve authorization errors

If **Enable OAuth access** is unavailable, the server needs a trusted issuer for the site. If a redirect is rejected, copy the full current URL from the relevant Bido SEO connection and compare the path and query string exactly. If the consent page blocks an account, check the authorized people setting and the account's current read permissions. Sign-in alone does not approve the grant.

For reporting integrations managed through Google's consent screen, use [Search Console](integrations-search-console.md) or [Google Analytics](integrations-google-analytics.md).
