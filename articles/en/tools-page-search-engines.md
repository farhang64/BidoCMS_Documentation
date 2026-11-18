# Inspect a page's Google indexing status

Open **Pages → selected page → selected language → Search Engines** to read Google's stored URL Inspection result for that language's public URL. You need access to the page and **Pages → Search Engines**, along with an active Search Console connection.

## Check the URL and Google observation

1. Verify the displayed public URL and language.
2. Check the headline status and any coverage detail. The panel can display **URL is indexed**, **URL is not indexed** or **Index status is unknown**, as reported by Google.
3. Read **Last checked** for the time the CMS retrieved the observation and **Last Google crawl** for the time Google's crawler last fetched that URL. The timestamps can differ.
4. Choose **Check now** if the first scheduled inspection is pending, or **Check again** to request a fresh observation. Checks for the same URL have a five-minute minimum interval and use Google quota. If refreshing is temporarily unavailable, check the availability time on the refresh control.
5. Choose **Open in Search Console** when you need the Google interface itself. The CMS retrieves Google's recorded state and does not submit a live URL test or indexing request.

## Interpret the sections

| Section | What you can learn |
| --- | --- |
| Crawling and indexing | When Google crawled, crawler type, robots.txt result, page fetch result and indexing directives. |
| Canonical URLs | The canonical the page declared and the canonical Google selected. Compare both with the intended public URL. |
| Known sitemaps | Sitemaps Google supplied for the inspected URL. |
| Referring pages | Example URLs Google reported as referring pages for this URL. This list is not a complete backlink inventory. |
| Rich results | Structured data types and issues returned by Google, when available. Expand or read individual issue information before changing the page schema. |
| AMP version | Optional AMP observations when Google reports them. |
| Mobile usability · legacy report | Optional legacy field returned by Google. |
| Report information | Property and observation timing. |
| Inspection history | Previous observations retained for the URL, with coverage and crawl details for comparison. |

**Not reported** indicates a missing field in the inspection response. Newly published content and translations can await their first scheduled check. Opening a pending URL displays the available observation state while the collector continues in the background.

## Diagnose an unexpected result

If Google reports a robots.txt block, a noindex directive, a fetch failure or an unexpected canonical, compare the observation with the actual public page and its current publishing settings. A recent publishing change can be newer than the last crawl. An empty Performance report describes traffic availability and is a separate signal from indexing status.

[Connect Search Console](integrations-search-console.md) · [Read page search performance](analytics-page-search-console.md)
