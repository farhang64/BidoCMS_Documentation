# Read a page's Google Analytics report

Open **Pages → selected page → selected language → Analytics**, then choose **Analytics** in the report selector. The Google Analytics report shows historical GA4 activity for this page's public URL and matching streams. Use it to compare traffic, engagement and events over time.

## Read the page overview

1. Verify the displayed **Page** URL and selected language.
2. Choose **7 days**, **28 days**, **90 days**, **180 days**, **365 days**, or **Custom dates** and **Apply**. The end date is yesterday or earlier in the property's reporting time zone. A custom period can contain up to 365 days.
3. The **Page overview** compares totals with the immediately preceding period of the same length. Select a metric card to explore the daily chart.
4. Focus the chart and use Left or Right arrow keys to examine each day, or choose **View chart data** for the daily values in a table.
5. Choose **Open in Analytics** to work with the Google property directly when needed.

| Metric | Meaning |
| --- | --- |
| Active users | Active users in the selected URL scope. |
| Views | Page views, including repeat views. |
| Sessions | Sessions attributed to the selected URL scope by the GA4 report. |
| New users | Users reported as new by GA4. |
| Average engagement time per active user | Engagement duration divided by active users. |
| Engagement rate | Reported share of engaged sessions. |
| Event count | Tracked event occurrences. |
| Key events | Events configured as key events in GA4. |
| Total revenue | Revenue reported by GA4 for this scope. Google account restrictions may make it unavailable. |

Period totals are queried separately. In particular, adding daily or group-by user counts, sessions or rates can give a different result.

## Break down and export results

Switch between **Session channel group**, **Session source / medium**, **Country**, **City**, **Device category**, **Browser**, **Page path + query string** and **Event name**. Depending on the chosen breakdown, select headings to sort, use **Search table** to filter the returned rows, and change **Rows per page** to navigate the results. At most the top 1,000 provider rows are returned. If Google reports truncation, the panel identifies the limit.

**Export CSV** includes the selected URL and dates, current and previous totals, daily data, and the current table with its search filter applied. The displayed page of the table is used for navigation. Export includes the available filtered rows.

## Interpret missing data

- Confirm the site stream and page URL if all metrics are missing. A shared GA4 property is filtered by both the matched streams and the localized public URL.
- Recent GA4 historical data can take 24–48 hours to complete processing.
- Check the quality notes when Google reports privacy thresholds, sampling or the **(other)** grouping.
- Distinguish restricted revenue from a reported zero. Check Google Analytics property permissions if the report says revenue is unavailable.
- For current active users across the installation's matched streams, use the **Google Analytics live** card in **Notifications**.

[Set up the GA4 connection](integrations-google-analytics.md) · [Read Search Console data for the same page](analytics-page-search-console.md)
