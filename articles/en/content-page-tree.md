# Find, create, and move pages

Open **Pages** in the CMS sidebar. The page tree shows the shared structure of the website. Each entry is called a page or node. Its tree name, type, and parent are shared across languages. A page's website content is edited separately for each language.

## Open an existing page

1. Open **Pages**.
2. Use the arrow beside a page in the tree to expand its children.
3. Select the page name to load its tabs.
4. On a multilingual installation, select an existing language tab to view that language's content. Use the outer **General** tab for fields shared by all languages.
5. On a small screen, use **Browse pages** to reopen the tree and **Hide page list** to give the editor more room.

The selected page, language, and supported tab are reflected in the panel URL. You can bookmark or share the panel link with a teammate on the same installation who has the necessary access. The sidebar label, tree language, and website language can differ.

The tree displays a **search node name** field in this release. If typing does not return results, expand the applicable tree branches or reopen a saved page link. The current panel does not connect that field to the search handler.

## Create a page under an existing page

1. Expand the tree to the intended parent.
2. Select the plus icon on that parent.
3. Confirm **Add New Node**.
4. In [General](content-page-general.md), change **Shenase** from its generated value and choose **Node type**.
5. In [Main Content](content-page-main-content.md), give the page a real public **URL** and complete its public metadata. Check **publish** and **index** explicitly for each language.
6. Fill in each theme-defined [Text](content-text-editor.md) section and the relevant structured tabs.
7. Preview the page and publish it using the header actions.

The new page is created immediately when you confirm. The new-page action creates language details with placeholder names and URLs and with **publish** and **index** enabled. Check these values before anyone queues a site-wide publish. The separate **Site → +** language workflow creates new language details for existing pages with both options off. An empty tree can display **Add First Node**. If that action does not select the new root automatically, reopen **Pages** and select the entry from the refreshed tree.

## Move a page in the tree

On desktop, drag the page row to a different page's row to place it at the end of that parent's children. A drop marker between rows can place the page after a closed item or first inside an open item. Expand both branches afterward to verify the resulting parent and order. Open **General** to check the read-only **Parent**.

Moving the tree entry changes the hierarchy. To change its public path, update **URL** in each affected language and review existing links and [redirects](site-redirects.md). The tree workspace has creation and move controls, with no page deletion action. Use the page's **publish** setting to stop future normal generation. If a page was already public, ask the administrator to verify and remove obsolete generated output where necessary.

[Page settings](content-page-general.md) · [Page language and SEO fields](content-page-main-content.md) · [Preview and publish](site-publishing.md)
