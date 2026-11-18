# Page General tab

Open **Pages**, select a page, and open **General**. These settings apply to the page entry shared across all its language versions.

| Field | How it is used |
| --- | --- |
| Shenase | Internal name displayed in the page tree. Choose a name that makes the page easy to find. |
| Node type | The site page type, which selects the available theme page template for each language. The type can also affect the available text fields and structured content. |
| Parent | Read-only view of the page's actual parent in the tree. Use the tree's move operation to change it. |
| Virtual Parent | Additional references to other pages selected in a multi-select field. Themes can include virtual children in listings or related-page groups. |

## Rename a page or change its type

1. Open the page's **General** tab.
2. Edit **Shenase**, select **Node type**, or update **Virtual Parent**.
3. Select **Save**.
4. For a type change, review the **Text**, **Specification**, and **Schema** tabs before publishing. The new template can use a different collection of fields.
5. Preview the page in each affected language.

Use **Main Content → Name** to change the public breadcrumb label for one language. Use **Main Content → URL** for the public path. **Shenase** only changes the panel's internal tree label.

## Troubleshoot a missing template or field

Open **Site → Site NodeType** and confirm that the selected page type maps to a template for the current language. If a text block is missing, confirm that the selected template defines the corresponding section. A recent theme or type change may require reopening the page to refresh the available fields.

[Tree and hierarchy](content-page-tree.md) · [Site page types](site-page-types.md) · [Page public content](content-page-main-content.md)
