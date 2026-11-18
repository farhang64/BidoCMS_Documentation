# Page-specific code in Extra

Open **Pages**, select a page and language, then choose **Extra**. Changes apply to the selected language version of this page. Use the following fields when a page needs markup, CSS, or script beyond what its theme already provides.

| Field | Generated page location |
| --- | --- |
| Header Start | Markup near the beginning of the HTML head. |
| Header End (CSS) | CSS wrapped in a style element near the end of the head. |
| Body Start (JS) | Script or supported noscript content near the beginning of the body. |
| Body End (JS) | Script or supported noscript content near the end of the body. |

## Save, preview, and remove code

1. Insert only the markup or code needed for the page. The CSS field takes CSS, with the style wrapper applied by BidoCMS.
2. Select **Save**.
3. Use **Test Publish** for the selected page and check every affected language.
4. Verify the expected behavior before publishing the page.
5. To remove the customization, clear the field, save, and publish again.

Code from **Site → General**, **Site → Site NodeType**, and **Pages → Extra** is combined in that order for each slot. If the same behavior appears twice, inspect all three scopes and the template. Use **Site → General** to intentionally apply code across the whole site and **Site → Site NodeType** to apply it for a single type.

[Site settings](site-general-settings.md) · [Site page types](site-page-types.md) · [Preview and publish](site-publishing.md)
