# Download, restore, or delete a backup

**Backup → Backup Files** lists the archives the installation has recorded, newest first. Restoring replaces installation data and typically restarts the application.

## Review and download a saved backup

1. Open **Backup → Backup Files**.
2. Match the record by **Config**, **Description**, and **Time**.
3. Review **DB File** and **Data File**. Each available archive shows its filename and size.
4. Select **Download DB** for the database archive or **Download Files** for the installation files archive. Keep both if a complete recovery requires both.
5. Verify the archive you intended to save before removing any older copy.

A record can include just one archive, depending on its configuration. If the record exists but download fails, verify the configured destination and whether the archive is still present there.

## Restore from a saved record

1. Confirm the installation domain and record timestamp. Preserve a current copy of the affected data before replacing it.
2. In **Backup Files**, select **Restore** on the intended row.
3. Read the confirmation that current data will be overwritten, then confirm if the record is correct.
4. Wait for restore and restart. Reopen the panel, then verify the data and the public site. Check the recovery state if a restore that contained both parts fails midway.

## Restore from a local ZIP

1. Open **Backup → Settings**.
2. Set the restore selector to **database** for a database ZIP or **file** for a file backup ZIP.
3. Click **Restore from File** and select the matching BidoCMS archive.
4. Confirm **Restore Backup**.
5. Keep the page open until restoration or an error is reported. Archives larger than 32 MiB use chunked upload. Its progress can show an interrupted connection and retry. **Cancel upload** is available while the upload is running, before the server starts restoring.
6. Reconnect after the restart and test the restored installation.

A database archive and a files archive are separate. When using the upload workflow, choose the matching type for each archive you need. Avoid launching another restore while one is still in progress.

## Delete a backup record and its archives

Use the row's delete control and confirm **Delete Backup**. Verify the configuration, timestamp, and retained copies before confirming. The panel removes the record and requests removal of its archives from the configured destination.

See also [Configure backups](operations-backup-settings.md) and [Restart the application or reset an installation](settings-maintenance.md).
