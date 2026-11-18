# Theme code editor

Open **Themes → Code editor**, or open a thumbnail in **Themes → Themes** to load a specific theme into the workspace. The editor contains a file tree and tabs for open source files.

## Open, edit, and save a file

1. Expand the relevant directories in the file tree.
2. Select the file to open it in the editor.
3. Make the intended change. An asterisk on a tab signals unsaved edits.
4. Use **Ctrl+S** or **Command+S** while focused in the editor, or **Save file** where displayed.
5. Wait for the result and reopen the file if you need to confirm the stored content.

A tab's **×** closes it. Save relevant tabs before opening another theme or creating a theme, because those actions can replace the workspace. The editor supports language-aware editing for formats including HTML, CSS, JavaScript, JSON, and Markdown.

## File tree actions

Open a file or folder's **⋯** menu or its context menu. Available actions depend on the selected item and your access.

| Item | Actions |
| --- | --- |
| File | Open, **Edit file name**, **Delete file**. |
| Folder | Expand, **Edit folder name**, **Delete folder**, **Add folder**, **Add file**, **Add component**. |
| Recognized component | **Preview** from its tree row or **Show** from its context menu, where offered. |

When adding a component, choose its intended name. BidoCMS recognizes a component directory when it contains a same-name HTML file, such as `ExampleCard/ExampleCard.html`. Styles and JavaScript can use matching peer files. When the component uses translated language keys, keep its `language.json` aligned with the languages it supports. Check dependencies and references before renaming or deleting files.

## Preview and apply

Open **Component preview** to inspect the component using the **Mobile**, **Tablet**, and **Desktop** controls. Select **Refresh** to reload it after saving. Check the component again in context by generating a test page through **Pages**.

Saving stores source in the theme workspace. Applying the theme to public output is a separate operation. If the current workflow exposes the **Publish Theme** header action, confirm and watch the result using **Themes → History**. ZIP imports and Git deployments have their own progress indicators.

[Theme gallery](design-theme-gallery.md) · [Figma workflows](design-theme-figma.md) · [Publishing](site-publishing.md)
