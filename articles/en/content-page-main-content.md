# Page Main Content and SEO settings

Open **Pages**, select a page and its website language, then choose **Main Content**. This tab holds the public address, primary metadata, image selection, and publishing options for that language.

| Field | What to enter or check |
| --- | --- |
| Name | Public short name used in the breadcrumb list. |
| URL | Relative public path such as `/admissions`. Use a unique path. The form converts spaces to hyphens when saving. |
| Short link | Read-only compact address assigned to this language version. Select **Copy** to copy the full URL instead of only the displayed path. |
| canonical URL | Optional preferred URL for canonical metadata. Leave blank to use the computed address. A relative path uses the site's base address and language prefix. A full canonical URL can be supplied when intentional. |
| Redirect URL | Optional internal destination path for requests to this page's address. Use the **Redirects** menu for new or changed external destinations. |
| Title | Browser tab title and generated HTML title. Enter a clear localized title. |
| Description | Generated meta description for this language. |
| H1 | Primary visible heading when the theme displays the page H1. |
| index | Generated page robots metadata. Off produces noindex and nofollow. |
| publish | Whether this language version is included in normal public page generation. |
| Select Image | Opens the image album to choose up to three page images. Save **Main Content** to commit the selection. The theme determines how it displays the images. |

## Edit or translate a page

1. Select the page in the tree.
2. On a multilingual site, open the exact website language you want to change.
3. Enter the localized **Name**, **URL**, **Title**, **Description**, and **H1**.
4. Check whether a canonical override or redirect is needed. Review the **index** and **publish** checkboxes.
5. Select images if the page needs them and choose **Save**.
6. Update the separate [Text](content-text-editor.md) tab for rich-text blocks. Save each block individually.
7. Preview and publish.

[Site language settings](site-languages.md) contribute the language root used by generated canonical and alternate links. The core publisher writes the stored **URL** path to the output. Verify the live path, canonical URL, alternate language links, and sitemap agree, especially when the installation also uses a language prefix. Changing **Title** and **H1** can have different effects because the theme renders headings and the CMS generates metadata.

## Troubleshoot a URL or short link

- **Selected URL is not free** means another page detail already uses the path. Enter a distinct path.
- The **Short link** control needs an assigned detail number and a nonempty page URL. **Copy** uses **short link domain** from **Site → General**, with **Site Address** as fallback. A clipboard error may require granting clipboard access in the browser.
- Changing the public **URL** requires reviewing links that use the old path. Create a [redirect](site-redirects.md) if the old address should lead to a replacement.
- If a saved page is missing from the public site, check **publish**, the language's template mapping, and the [Publish Queue](site-publishing.md).

[Indexing and inspection](tools-page-search-engines.md) · [Page schema](content-page-schema.md)
