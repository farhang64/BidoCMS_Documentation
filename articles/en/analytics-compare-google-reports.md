# Compare Search Console, Google Analytics and URL Inspection

BidoCMS has several Google reporting views. Choose one by the question you want to answer. The reports use different event definitions, dates and scopes, so matching totals should not be expected.

| Question | Workspace | Scope |
| --- | --- | --- |
| What queries, countries or devices produced Google Search clicks for this page? | **Pages → Analytics → Performance** | Selected localized page scope and Google search type. |
| Did a page receive traffic from Discover? | **Pages → Analytics → Discover** | The page's Google Discover activity where Google returns sufficient data. |
| Which sessions, events and engagement did GA4 record for this page? | **Pages → Analytics → Analytics** | The localized page path and matching GA4 website streams in the selected property. |
| How many users were active on the website recently? | **Notifications → Google Analytics live** | Realtime active users for matching website streams in the selected GA4 property. |
| Has Google indexed the localized URL, and which canonical does it use? | **Pages → Search Engines** | Google's stored inspection for the exact localized public URL. |

## Compare dates and filters

Search Console archive dates use Pacific time. The GA4 page report uses the selected property's reporting time zone and excludes today. The realtime card uses rolling windows in minutes. Before comparing reports, record the selected date range, time zone, page language and filters.

Search Console measures activity in Google surfaces. GA4 measures activity it recorded on the website. Traffic sources beyond Google Search can appear in GA4. Search Console can attribute traffic to a canonical URL, and GA4 data can vary with tag setup, measurement settings and visitors' consent choices.

## Investigate a missing report

1. Check whether the expected provider connection is active under **Settings → Search Console** or **Settings → Analytics**.
2. In Pages, select the intended language and check the displayed public URL, including the locale prefix or trailing slash.
3. Check the available report source, range, filters and provider notes.
4. For recent publication or canonical changes, use **Search Engines** and compare Google's last crawl with the publication timing.
5. For historical search traffic, check the archive coverage. For GA4 traffic, verify the selected property and compare the public tracking stream in GA4.

[Read Search Console data](analytics-page-search-console.md) · [Read historical GA4](analytics-page-google-analytics.md) · [Read realtime GA4](dashboard-live-analytics.md) · [Inspect indexing status](tools-page-search-engines.md)
