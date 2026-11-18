# Assign schema defaults to theme page types

Open **Schema → Page types** to configure the default structured-data references associated with a theme template. This page works with the theme's page types. **Site → Site NodeType** maps the site's own page types to these theme templates for each language.

## Assign a default

1. Open **Schema → Page types** and choose the **Theme**.
2. Locate the page type you intend to configure.
3. Choose the schema reference and select **Add**.
4. Review the selected chips. Use **×** to remove a reference from the default set.
5. Select **Save** for that page type.
6. Open a page using the same template and check its **Schema** tab. Use **Refresh** in the preview to inspect the generated output.

A theme can supply several default references. BidoCMS stores references without spaces, consistent with the theme package's `_schema` setting. The page-level schema settings can use a customized list after they are saved, so review existing overrides when changing a shared default.

## If a theme, type, or definition is missing

Check that the theme is available and that its package declares the intended page type. If a reference is missing, open **Schema → Definitions** and confirm that it is registered. When a multilingual page uses different templates for its languages, check each mapped theme and type.

[Schema definitions](design-schema-definitions.md) · [Site page type mapping](site-page-types.md) · [Page-level schema](content-page-schema.md)
