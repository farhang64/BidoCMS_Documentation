# Theme activity history

Open **Themes → History** to see recorded theme operations. The table can show ZIP uploads, Git imports, themes created in the panel, workspace operations, and republishes.

| Column | What it shows |
| --- | --- |
| Status | **Running**, **Success**, **Failed**, or **Interrupted**. |
| Source | Where the theme came from. |
| Trigger | **Manual**, **Git push**, or **Automatic**. |
| Details | Theme or archive name, or Git repository, branch, commit, and message. Errors appear here when supplied. |
| By | The acting CMS user or Git commit author when available. |
| Started | Start timestamp shown in the browser's local format. |
| Duration | Recorded duration, or in progress for a running job. |

Select **Refresh** to check the latest state. Use **Older** and **Newer** to navigate the records. The history table helps identify what changed. Use **Publish → Publish Queue** to monitor ordinary page generation.

## Follow up on a failed or interrupted import

Find the relevant row and read the error shown under **Details**. For Git, compare the commit in History with the connected branch's latest and last-deployed commit. For ZIP, verify that the archive is the intended BidoCMS package before trying again. Verify the site after a successful import.

[Git deployment](design-theme-git.md) · [Theme gallery](design-theme-gallery.md) · [Publish Queue](site-publishing.md)
