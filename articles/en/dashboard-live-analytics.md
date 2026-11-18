# Check recent website activity in Google Analytics live

The **Google Analytics live** card in the **Notification** workspace reads realtime traffic for the Google Analytics 4 property connected to this BidoCMS installation. This dashboard card is available to the built-in administrator with the appropriate workspace access.

## Read the card

| Value | Meaning |
| --- | --- |
| **Active users · 30 min** | Google Analytics active users in its most recent thirty-minute window. |
| **Active users · 5 min** | Active users in its latest five-minute window. |
| **Top pages by views** | Recent pages ordered by views when the property returns those rows. |
| **Active users by country** | Available geography rows for recent active users. |
| **Active users by device** | Available device category rows for recent active users. |
| **Updated** | The time the displayed data was retrieved. |

The panel refreshes this card about every minute while Notifications is open and the browser tab is visible. Use **Refresh notifications** for an immediate dashboard refresh. A counter can show zero when the property records no activity in that window. An em dash indicates an unavailable value.

## If the card does not show the expected data

1. Open **Settings → Analytics** and verify the connected Google property.
2. Check that the public website sends GA4 data to that property. Open the live site from an eligible test browser and allow time for the realtime view to refresh.
3. If the card shows a connection prompt, review the Google account's property permissions and reconnect where required.
4. If supported breakdowns remain blank, verify what the property exposes in GA4 Realtime. For historical traffic, open the page-level **Analytics** workspaces.

See also [Connect Google Analytics](integrations-google-analytics.md), [Page-level Google Analytics](analytics-page-google-analytics.md), and [Use Notifications](dashboard-notifications.md).
