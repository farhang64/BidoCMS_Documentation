# Read page performance and Discover data

Open **Pages**, select a page and its content language, then choose **Analytics**. In the report selector choose **Performance** for Google Search traffic or **Discover** for Google Discover. The corresponding views require an active Search Console connection and access to the selected page.

## Select a period and search type

1. Verify the displayed page URL and selected content language.
2. Choose a date preset, such as **7 days**, **28 days** or **3 months**, or open **More** to choose other ranges including **Full archive**. Choose **More → Custom** to enter your own dates. Search Console dates use Pacific time for Search Console data.
3. In **Performance**, choose the search type that applies to the question: **Web (text)**, **Image**, **Video**, **News** or **Google News**.
4. Use the metric cards to show or hide **Total clicks**, **Total impressions**, **Average CTR** and **Average position** on the chart. Clicks and impressions are selected initially. Choose daily, weekly or monthly chart aggregation.
5. If available, inspect data availability and finalization information below the controls. The report can include finalized data, dotted preliminary data and gaps for unavailable dates.

| Metric | How to interpret it |
| --- | --- |
| Clicks | Clicks from the chosen Google source to the selected page scope. |
| Impressions | Appearances for that scope as counted by Google. |
| CTR | Clicks divided by impressions. |
| Average position | Position weighted by impressions when days are rolled up. It is available in Performance. |

Discover uses its own data and only shows clicks, impressions and CTR. Switch between views when investigating a change specific to Google Search or Discover.

## Read details and drill down

**Performance** offers **Queries**, **Pages**, **Countries**, **Devices**, **Search appearance** and **Days**. **Discover** offers **Pages**, **Countries**, **Discover appearance** and **Days**.

- Select a column header to sort available rows and use the table controls to review more rows.
- Select a row to filter the report by that row's value. A query selection opens a **Pages** view for that query. A CMS administrator can see matching paths on the verified installation hosts. A delegated user remains within pages their role can access.
- A Pages row is an actual URL Google returned, including its query string or www hostname where applicable. Selecting the row applies that exact URL. Choosing a Day applies the corresponding date or date range.
- Remove a filter individually or choose **Reset filters** to return to the selected page's normal report.
- Use **Export** to download the current breakdown and selected metric columns as CSV. Record the active source, date range and filters when sharing results.

## Match the data to the right URL

The report follows the selected page's saved URL and language. It groups eligible base and www hostname variants and optional query strings on the verified site. Paths remain case sensitive, and different language paths and trailing-slash paths can represent separate scopes. With a URL-prefix property, Google's coverage is limited to that property. If Google attributes the clicks to another canonical URL, available metrics may appear on that canonical page. Use **Search Engines** to check what Google selected.

## Understand gaps and empty reports

The background collector imports and refreshes site data independently of opening the report. Connecting a new site starts collection for available history, and more ranges and breakdowns may appear later. Collection can mark confirmed zeroes separately from dates that are still missing. Private or high-cardinality query rows can be withheld by Google, so adding query rows may produce a lower figure than the chart. A low-volume page can also have insufficient data for a Discover report even when it has Search traffic.

[Connect Search Console](integrations-search-console.md) · [Understand the Search Console archive](analytics-search-console-archive.md) · [Inspect the indexed URL](tools-page-search-engines.md)
