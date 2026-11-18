# Browse, create, and import themes

Open **Themes → Themes** to browse registered themes, import a packaged theme, or create a new workspace. A theme provides page templates, components, assets, languages, and optional variables used to generate public pages.

## Browse the gallery

**Your themes** lists the available theme entries and their preview images. Select a theme thumbnail to open that theme in the code editor if your role has access. The theme selected for each public language is configured in [Site languages](site-languages.md).

## Create an empty theme

1. Select **Create theme** and confirm that a new workspace can be opened. Save unsaved work in the existing workspace first.
2. Enter **Theme name** and **Author / producer**. **Short description** is optional.
3. Select at least one of the available **Languages**.
4. Optionally choose a preview image such as a PNG or JPEG.
5. Select **Create theme**.
6. When prompted, choose **Open** to open the code editor, if available.

Creating a theme prepares workspace files and registers the new theme. Add components and page templates in the code editor before applying it to production.

## Import a packaged theme

1. In **Import theme**, choose **Choose .zip file**.
2. Select the approved BidoCMS theme archive. Selecting the archive starts the upload.
3. Review **Theme import progress** for validation, metadata and default-page updates, output generation, and activation.
4. After a successful import, allow the service to reconnect after its restart and check **Publish → Publish Queue** for the rebuild.
5. Review the language and page type mappings. Use [History](design-theme-history.md) for the recorded source, outcome, and error details.

Package import and theme publishing require the built-in CMS administrator. A delegated operator may be able to browse, create, and edit safe frontend files depending on role. If import fails, confirm the package uses the expected BidoCMS theme layout and review the specific validation error.

## What a packaged theme contains

At the archive root, BidoCMS expects a `setting.json` file and a `components/` directory. Include a `scripts` array in `setting.json`, even if the theme has no scripts. A component directory needs an HTML file with the same base name. The package can also include styles, images, fonts, scripts, and other theme assets. An optional `image/theme.png` supplies the gallery preview.

Example component paths are `components/StoryCard/StoryCard.html` and `components/StoryCard/StoryCard.css`. Use a supported theme package structure when creating files in the editor. Keep deployment credentials in the server's environment configuration.

[Theme code editor](design-theme-code-editor.md) · [Deploy from Git](design-theme-git.md) · [Map site page types](site-page-types.md)
