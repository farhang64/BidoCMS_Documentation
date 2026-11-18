# Site page types and theme template mappings

Open **Site → Site NodeType** to manage site page types. A site page type is the option selected under **Pages → General → Node type**. It connects the same page to a theme template for each configured website language.

## Add and map a page type

1. Open **Site → Site NodeType** and select **Add Site Type**. A new editable row appears.
2. In **Type name**, enter a descriptive name such as `Article` or `Service`.
3. In **color**, enter a color value such as `#475569`. This color marks pages of the type in the page tree.
4. For each selector named with a theme and language, choose the matching template for that language.
5. If this page type needs extra code, enter it in the four scope-specific fields.
6. Select **Save** on the row.
7. Open a page's **General** tab, choose the type in **Node type**, and save. Preview the result in each active language.

The available templates come from the theme assigned to that language. When a language's theme changes, review its mappings under **Site NodeType**. If a template needs changes, use the [theme editor](design-theme-code-editor.md) or import an updated theme.

## Type-level header and body fields

| Field | Output |
| --- | --- |
| Header Start | Markup inserted toward the beginning of the HTML head. |
| Header End (CSS) | CSS added to the head. |
| Body Start (JS) | Script or supported noscript content near the start of the body. |
| Body End (JS) | Script or supported noscript content near the end of the body. |

BidoCMS combines site-wide, type-level, then page-language content in each slot. Changes to a shared type can affect multiple pages on publishing.

## Delete an unused type

Use the row's delete icon and confirm. If the CMS reports that pages still use the type, open those pages under **Pages → General**, assign another suitable type, and save before trying again. Keep a language-to-template mapping for every type you intend to publish.

[Website languages](site-languages.md) · [Page General tab](content-page-general.md) · [Theme schema assignments](design-schema-page-types.md)
