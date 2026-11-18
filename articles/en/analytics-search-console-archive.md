# Read Search Console archive coverage and daily collection status

The **Performance** and **Discover** reports under **Pages → Analytics** use an archive collected by the central Search Console service. Opening either report reads available records. Collection continues in the background for published language URLs.

## Recognize coverage states

| Status or pattern | Meaning |
| --- | --- |
| Figures for X of Y days | The chart has available figures for X days in the requested range. |
| Blank segment in the chart | No available observation for that segment. This is different from a confirmed zero. |
| Dotted chart segment | Preliminary figures can still change. |
| Site data finalized through | Google's finalization point for site data when provided. |
| Site totals checked | The last available site totals check shown by the service. |
| Fewer covered days under a table | This breakdown is still collecting or has less available detail than the chart. |
| Top rows available from Search Console | Google can omit certain queries or return a limited breakdown. |

The initial background import covers the available Google history and prioritizes recent reports. **More → Full archive** includes retained data that has already been collected, which can extend beyond the provider's moving history window. Data can appear in batches, so the chart and its breakdown tables can fill at different times.

## Check a newly connected or newly published page

1. In **Settings → Search Console**, check the active property and verification status.
2. In **Pages**, open the intended language variant and verify its saved public URL and publication state.
3. Reopen **Analytics → Performance**, use a recent date range and review the archive coverage. If the chart has data, check the detail coverage for the relevant breakdown separately.
4. Open **Search Engines** for Google's stored index state, canonical decision and last crawl. If the first examination is pending, use the available manual inspection action when needed.
5. If opening the same search report later still shows incomplete coverage, record the property, public URL, language, report source, date range and the visible coverage messages when asking the administrator to check collection.

Connection and reconnection start collection for the active property. Scheduled data collection checks recent and unresolved dates in Pacific time. The service keeps observations already collected when reports are temporarily unavailable. Disconnecting hides the archive until the corresponding property and access scope are verified again.

[Read a page's search report](analytics-page-search-console.md) · [Connect Search Console](integrations-search-console.md)
