# Sitemap, robots.txt, and AI discovery files

Use **Site → General** to manage publicly served discovery files. Make sure **Site Address** reflects the live site before rebuilding or checking any of these files.

## Sitemap Address

Enter a relative path such as `hidden-sitemap/sitemap.xml` in **Sitemap Address**. Select **Save**, then select **Update sitemap** to request a rebuild without publishing every page. **Open in new tab** beside the field opens the address configured in the form.

The generated index links to sitemap content grouped by page type. Review **Pages → Main Content** for each page that should appear. A page must meet the publisher's **publish** and **index** conditions and have a valid URL and eligible page type. Recheck the sitemap after updating the page, rebuilding as needed.

## Robots File

Edit **Robots File** and save to update `/robots.txt`. Keep the final contents public and check for unexpectedly broad disallow rules. The field's **Open in new tab** action opens the public file for inspection.

Page-level **index** controls the generated page's robots metadata. **Robots File** provides site-wide crawling directives. Inspect both when diagnosing whether a URL can be crawled or is marked for indexing.

## LLMs File and LLMs Full File

Use **LLMs File** for a short Markdown overview of the site and important public URLs. Use **LLMs Full File** when you want a longer public guide. Save, then open `/llms.txt` and `/llms-full.txt` using the buttons beside the fields to verify the output.

Keep confidential and administrative material out of these files. **Website context for AI** is a separate field for BidoCMS image-description generation.

## If the output does not match the form

Check that the form was saved and the public domain opens correctly. Use **Update sitemap** for an outdated sitemap. When the site uses S3 and a CDN, review [Publish settings](site-publish-configuration.md) and verify from the public domain after deployment completes.

[Site settings](site-general-settings.md) · [Page main content](content-page-main-content.md) · [Page indexing and inspection](tools-page-search-engines.md)
