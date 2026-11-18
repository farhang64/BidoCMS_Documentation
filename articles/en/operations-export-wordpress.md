# Export a BidoCMS website to WordPress

Open **Export** to create a WordPress migration package for the current site. This feature is available to the built-in administrator and currently requires a single-site BidoCMS installation. It checks the installed theme and capabilities before building the package.

## Create and download a package

1. Open **Export** and verify the site address shown in the workspace.
2. Select **WordPress** under **Destination CMS**.
3. Choose **Export website**. Only one export can run for the site at a time.
4. Watch **Export history** for the new record. The panel updates pending exports while you are in the workspace. You can use **Refresh** or reopen the workspace to reload the persisted history.
5. Select **Download ZIP** when the export shows **Ready**. Use **Details** to review errors or compatibility notes when they are available.

| Status | Meaning |
| --- | --- |
| **Queued** | The request is recorded and waiting to run. |
| **Preparing** | The export is checking compatibility or building the package. |
| **Ready** | The package is available for download. |
| **Failed** | Open compatibility notes or details and review the unsupported behavior or reported failure. |

Use **Delete** and confirm **Delete export** to remove a ready or failed record and its saved package. Keep any ZIP you still need.

## Read the package contents

The ZIP includes a generated WordPress theme and the **BidoCMS Importer** plugin, the migrated content payload, local public assets, a content-only WXR file, the export manifest, and restoration instructions. Use the bundled `RESTORE.md` for the package-specific workflow. Keep extracted source content and other migration material outside the web root unless the instructions identify a supported destination.

Compatible layouts continue to use editable content bindings on WordPress. Server-side routes, application models, custom scripts, and provider integrations can require dedicated WordPress implementations. Detected unsupported capabilities can block export. Review compatibility details before treating the package as a replacement for the site.

## Restore and verify on WordPress

1. Prepare a single-site WordPress installation using the version and PHP requirements in `RESTORE.md`. Start on staging so you can verify the result before moving public traffic.
2. Extract the downloaded ZIP outside the destination web root. Copy the supplied `wp-content` contents to the WordPress installation as directed by the included instructions.
3. Activate **BidoCMS Importer** and open **Tools → BidoCMS Restore**. Start the restore using a WordPress administrator account.
4. Under **Settings → Website theme**, review each **Language website address**. Save **Settings → Permalinks** to refresh rewrite rules.
5. Verify important page routes, language versions, images, published content, redirects, metadata, forms, and integrations. Keep the importer active because it provides the imported routing and redirects.

The ZIP contains `content.xml` for a separate content-only workflow. Use either WXR import or the bundled full restoration on the destination, according to the outcome you want.

See also [Configure backups](operations-backup-settings.md) and [Site languages](site-languages.md).
