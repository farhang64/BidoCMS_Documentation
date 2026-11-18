# Website languages and theme variables

Website languages control which language versions you can edit for public pages. Open **Site** and select the language tab to edit one version, or select **+** to add a language. The panel language and direction are configured separately in [Settings](settings-general.md).

## Add a website language

1. Open **Site → +**.
2. Choose **Language**. The form proposes a **Website sub address** based on the language code.
3. Check **Website sub address**. Use the public path prefix for that language, such as `/fr`.
4. Enter the language-level **Title** and **Description**.
5. Select the **Theme** for this language.
6. Review and fill in any theme variables that appear.
7. Select **Save**.
8. Open [Site page types](site-page-types.md) and review the template mapping for the new language.
9. Open **Pages**, select an existing page, and check its new language tab.

A site can have one configuration entry per language. Saving a new language adds a draft detail to existing pages tied to the site's page types. These details start with a generated placeholder URL and with **index** and **publish** off. Edit the localized content and URL before enabling either option.

## Edit the existing language

Open the site's language tab and update **Website sub address**, **Title**, **Description**, **Theme**, or the variables supplied by that theme. **Language** is fixed on each existing entry.

Theme variables are fields defined by the selected theme. Their names and use differ across themes. If you switch themes, check the visible variable fields and recheck the page type mappings. The CMS attempts to match the site page type to a template with the same name in the selected theme. A missing match needs manual attention.

## Delete a language

Open the specific language tab, select **Delete**, then confirm. Removing a language deletes its page details and related content for pages associated with the site's types, including text, FAQs, videos, specifications, and comments. It also removes that language's template mappings and language-specific theme variable values. The CMS prevents deletion of the final language.

[Page types and template mappings](site-page-types.md) · [Page main content](content-page-main-content.md) · [Publishing](site-publishing.md)
