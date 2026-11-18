# Read Google Search and site-page cards

Open **Notification** in the sidebar for three related views of search activity and published content. Index coverage and clicks come from Search Console. BidoCMS provides its own page totals and publication counts.

## Google Search performance


The chart reports **Clicks** and **Impressions** for the whole connected site over the last 30 days. Each metric has its own chart scale. Hover a day to see its values, or focus the chart and use the arrow keys. Dashed lines mark preliminary data. If coverage is still being collected, the card shows how many days are included in the displayed totals. A blank or unavailable value means there was no usable measurement.

## Pages Google hasn’t indexed


The list shows published pages marked for indexing whose available inspection results report that they are not indexed. Each reported entry can include the URL, coverage state, and date checked.

1. Find the page and read the recorded coverage state.
2. Choose **Inspect** to open Search Console. If a page-specific inspection link is unavailable, copy the displayed URL into the Search Console inspection tool.
3. Review the coverage details in Google. Correct the underlying issue in BidoCMS, publish the change, and use Google's **Request indexing** option when appropriate.

The dashboard shows a separate count of pages without a confirmed status. **All checked pages are indexed** refers to pages with results. If the card reports no eligible pages, check whether the intended URL is published and marked for indexing.

## Site pages


Read **Total**, **Published**, and **Indexed** by page type or in the totals row. Each language version counts separately. The indexed column can show an unknown value when Search Console is disconnected or indexing coverage is unavailable. If only some pages have confirmed results, the card can show how many published pages were checked.

Use the page's own **Search Engines** tab for page-specific inspection history. If the dashboard asks you to connect Google, open **Settings → Search Console** and confirm the correct property.

See also [Connect Search Console](integrations-search-console.md) and [Use Notifications](dashboard-notifications.md).
