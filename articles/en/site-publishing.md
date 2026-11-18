# Preview and publish pages

BidoCMS saves content in the panel and generates website output through publishing. After saving a page, use the preview and publish controls in the header, or open **Publish → Publish Queue** to watch the background queue.

## Preview one page

1. Open **Pages** and select the page in the tree.
2. Save each edited tab or text block.
3. Select **preview of page** on a single-language site or **preview selected node** on a multilingual site.
4. Confirm **Publish Test** and wait for the generated preview to open in a new tab.
5. Check the affected languages, links, images, mobile layout, and any page-specific changes.

These actions require publish queue access. A preview is temporary. If no browser tab opens after confirmation, check whether the browser blocked pop-ups or the page lacks a valid template or URL.

## Publish one page or the whole site

- To publish one page, select it in **Pages**, choose **publish page** or **publish selected node**, and confirm **Publish Node**. The action queues the page and may also queue directly dependent pages, such as pages that display its content.
- To queue every page, select **Publish All Pages** in the CMS header and confirm **Publish Site**.
- To open the public website, select **Open Website**. The target comes from **Site → General → Site Address**.
- On small screens, open the header actions menu to access website and publication actions.

Normal generation uses each language version's **publish** setting and the configured template mappings. Test generation can show a language version with **publish** off. Always check the public language and address afterward.

Changing **publish** to off or saving a new URL stops future generation at the previous path. Existing generated files can continue to be served. If a previously public path must disappear or redirect, ask the administrator to verify local output, remote storage, and the CDN for that specific path.

## Read the Publish Queue


Open **Publish → Publish Queue**. The progress area shows the number of remaining pages and progress for the currently observed batch. Select **Details** to see individual entries and whether they started. Select **Hide Details** to return to the progress summary. The panel updates the queue while the tab stays open.

**Idle — queue is empty** means the currently visible queue has drained. Verify the public page afterward. If a page stays outdated, check its language's **publish** flag and template mapping. When serving from a CDN, also check the [publish configuration](site-publish-configuration.md) and the public result after cache updates.

[Page main content](content-page-main-content.md) · [Publish configuration](site-publish-configuration.md) · [Theme activity](design-theme-history.md)
