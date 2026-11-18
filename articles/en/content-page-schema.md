# Page Schema and JSON-LD preview

Open **Pages**, select a page and language, then select **Schema**. This tab shows the structured data references and optional manual JSON-LD for that page version.

## Review or override page type defaults

The hint above **Schemas for this node** shows the page type and whether the page is using its defaults or a custom list. Use the selector and **Add** to assign a schema. Select **×** on an assignable chip to remove it. After saving a custom list, manage these references on the page rather than relying on later type-level assignment changes.

A chip marked **Auto** is managed by the publisher. The page selector excludes the automatic FAQ reference. For FAQ structured data, complete questions and answers in the selected language can create an automatic reference. Edit the [FAQ entries](content-page-faq.md) to change its source content.

## Add manual JSON-LD

Use **Manual schema (appended to generated output)** for an additional JSON object or an array of objects. Enter JSON-LD body data directly in the field. Use valid JSON with double-quoted property names and no trailing commas. This field is separate from the schema format templates in **Schema → Definitions**.

## Preview, save, and publish

1. Select **Refresh** in **Generated schema preview** to ask BidoCMS to build a preview using the displayed choices and manual value.
2. Read the generated JSON-LD or the manual-schema parse error. Review the values and URLs against your public content.
3. Select **Save** to keep the page's references and manual schema.
4. Preview and publish the page. Verify the generated output for the same language.

If the preview is empty, check the page type mapping, assigned definitions, and source data for that language. A saved preview is useful for comparing the panel's generated data with the public result after the publishing queue drains.

[Schema definitions](design-schema-definitions.md) · [Default schema by page type](design-schema-page-types.md) · [Preview and publish](site-publishing.md)
