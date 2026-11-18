# Site settings

Open **Site → General** for installation-wide settings such as the public address, branding, discovery files, and code inserted into generated pages. Use a language tab in **Site** for the title, description, and theme of one language.

## General fields

| Field | What it controls |
| --- | --- |
| X Account | The site's X account value used by publishing metadata. |
| Site Address | The public website address. Use an absolute HTTP or HTTPS URL such as `https://example.com`. The panel uses it for **Open Website** and preview links. Sitemap and public-page URLs also depend on this value. |
| Site logo | Image next to the site name in the CMS and the source for installed app icons. |
| Favicon | Image shown in the browser tab. |
| Website context for AI | Website description, audience, brand voice, and relevant services for AI-generated image descriptions. The limit is 8,000 characters. |
| Sitemap Address | Relative path to the sitemap index. The default generated path is `hidden-sitemap/sitemap.xml`. |
| Web app manifest (JSON) | Optional settings for the installable web app. **View active manifest** opens the resolved manifest. |
| Robots File | Contents of the public `robots.txt` file. |
| LLMs File | Contents of the public `llms.txt` file, typically a short Markdown guide to the website. |
| LLMs Full File | Contents of the public `llms-full.txt` file, typically an extended Markdown guide. |
| short link domain | Public base address for copied page short links. The panel uses **Site Address** when this field is blank. |
| Header Start | Markup inserted at the start of the generated HTML head. |
| Header End (CSS) | CSS added near the end of the head inside a style element. |
| Body Start (JS) | Script and supported noscript content inserted near the start of the page body. |
| Body End (JS) | Script and supported noscript content inserted near the end of the page body. |

## Change and verify a setting

1. Open **Site → General** and edit the relevant field.
2. Select **Save** at the bottom. Wait for the confirmation.
3. Use **Open Website** or the file's **Open in new tab** action to check the public result. Check the publish queue for changes that affect generated pages.

The address fields accept HTTP or HTTPS URLs without credentials, query parameters, or a fragment. Enter the site address without a trailing slash. Keep access keys, private URLs, and internal notes out of the discovery files and generated code fields because their contents can reach the public site.

## Choose the smallest scope for code changes

Use **Site → General** for site-wide code, **Site → Site NodeType** for pages of one type, and **Pages → Extra** for one page language. During generation, BidoCMS combines these three scopes in that order.

[Branding and the web app manifest](site-branding-and-pwa.md) · [Sitemap and discovery files](site-discovery-files.md) · [Page-level code](content-page-extra.md) · [Publishing](site-publishing.md)
