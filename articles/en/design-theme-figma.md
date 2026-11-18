# Build theme components from Figma

Open **Themes → Code editor → Connect Figma** if your role includes **Themes → Code editor → Figma**. This tool uses a selected Figma layer and AI model to generate workspace component files.

## Check the connection

The installation needs a server-configured Figma access token with access to the file, and an enabled AI credential and model. Browsing team projects also needs a Figma team ID and applicable team access. A direct file link can be used when the team browser is unavailable.

## Choose a file and a layer

1. Open the theme workspace you intend to edit.
2. Select **Connect Figma**.
3. Paste a Figma file URL or key in **Open by file link** and choose **Open file**, or browse **Team projects** if configured.
4. Open the intended page. Drill into frames and nested layers as needed.
5. Choose **Select** on the intended frame or layer. Verify the selected name and type under **Selection**.

Use the breadcrumb or **Back** to change levels. If the project list is empty but the file is accessible, use the direct file link. If the connection is forbidden, ask the administrator to check the configured token and file sharing.

## Build and review the output

1. Choose the AI credential and model in the dialog.
2. Select **Build component** for a reusable component, or **Build page section** for a larger page section.
3. Wait for generation and the **Generated and saved** message. BidoCMS writes the returned components into the open theme workspace.
4. Open each generated file in the code editor. Check layout, accessibility, styles, interactions, and theme placeholders with component and page previews before publishing.

[Theme code editor](design-theme-code-editor.md) · [AI provider settings](ai-provider-keys.md)
