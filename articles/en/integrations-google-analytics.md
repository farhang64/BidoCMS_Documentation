# Connect Google Analytics 4

Open **Settings → Analytics** to connect BidoCMS to an existing Google Analytics 4 property. The integration reads GA4 data for page reports and the **Google Analytics live** card in **Notifications**. Installing the website's tracking tag and collecting new GA4 events are separate steps.

## Before you connect

- The Google account needs at least **Viewer** access to the target GA4 property.
- The property needs a web data stream whose default URL matches the installation's public HTTPS hostname or its www equivalent at the root.
- Your CMS role needs **Settings → Google Analytics**. The tab in the Settings workspace is labeled **Analytics**.
- The central GA4 integration must be available so BidoCMS can discover properties and read reports.

## Connect, change property or check access

1. Open **Settings → Analytics** and verify the site address.
2. Select **Connect Google Analytics**.
3. Sign in to the account that can access the site's property and allow read access on Google's consent screen.
4. Back in the panel, confirm **Connected** and check **Property**, **Time zone** and **Measurement ID**. When there are multiple matching properties, BidoCMS initially picks the matching property with the lowest numeric ID.
5. Use **Change property**, select the matching **GA4 property for this website**, then select **Use property**. BidoCMS rechecks access when saving the selection.
6. Use **Check access** to reverify the selected property, or **Reconnect with Google** to renew consent.

A rejected or cancelled reconnection preserves a previously saved grant. **Disconnect** removes the Analytics connection and its report cache. Search Console and Google Business have separate connections.

## Realtime and historical data

The Notifications card uses the selected property's realtime report for matching web streams. It reflects recent activity reported by GA4. An unavailable connection or a provider error is reported separately from a successful response with zero active users. The analytical reports under **Pages → Analytics → Analytics** use historical page data through yesterday in the property's reporting time zone and can show different values from the realtime card.

## Troubleshoot the connection

| Panel message or symptom | What to check |
| --- | --- |
| Google account does not have Analytics access to this website | Check Google Analytics access in the browser and confirm Viewer or higher access to the correct property and the matching stream URL. |
| Expected property is missing | Compare the website's root domain and stream default URL, and make sure the same Google account has the intended property listed. |
| Enable the Analytics Admin and Data APIs | Ask the central service operator to verify that both Google APIs are enabled. |
| Allow Google Analytics access | Repeat consent and approve Analytics read access. |
| Service unavailable or site verification fails | Verify the installation's public HTTPS address and ask the administrator to check the central service if the issue persists. |
| The live card is connected and shows zero | Check realtime traffic in the selected GA4 property and confirm that the website's tracking tag is configured and receiving traffic. |

[Read the individual page report](analytics-page-google-analytics.md)
