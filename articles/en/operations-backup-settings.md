# Configure automatic and manual backups

**Backup → Settings** lets you create separate configurations for database backups, file backups, or both. A configuration also controls the storage destination and automatic schedule. Backup actions require the built-in administrator.

## Create a configuration

1. Open **Backup → Settings** and select **Add New Config**.
2. Enter a **Config Name** you can recognize in backup history.
3. Choose **Storage Format**, then provide the destination details for that format.
4. Set **Max Copies** for retention and fill **Destination Path** where the chosen storage format uses it.
5. Enable **Database Backup**, **Files Backup**, or both. Review exclusions before continuing.
6. For automatic backups, enter a **Cron Expression**, such as `0 2 * * *` for a run at 2 a.m. every day in the scheduler's time zone. Check the server time zone before scheduling for a specific local hour.
7. Select **Create Config** or **Save Config**. For scheduled backups, confirm **Auto-backup: Active**.

## Choose storage

| Storage Format | Connection details |
| --- | --- |
| **local** | Uses the installation's backup storage. The configuration name determines its local backup grouping. |
| **s3** | Fill **Region**, **Bucket**, and **Endpoint URL (optional)** for the object store, plus the access and secret keys. A destination prefix can be used to group the files. |
| **ftp** | Fill **FTP Host / URL**, the FTP username, and password. Verify endpoint reachability from the application server. |
| **sftp** | Fill **SFTP Host / URL (:port)** and the username, then choose the **SFTP Auth Method**. Supply the password for password mode, or finish key authorization when using key mode. |

Credential fields marked **set only** retain their existing stored values when left blank. In SFTP key mode, save first to generate the public-key installation command. Use **Copy Command** and ask the operator of the destination SFTP account to authorize that key on the target server. **Generate new SSH key on save** rotates the key. Authorize the replacement before relying on the next scheduled backup.

## Choose what to include

**Enable Database Backup** creates a ZIP containing the MongoDB dump. **Exclude Collections** accepts comma-separated collection names. Leave it empty unless you deliberately intend to omit those collections.

**Enable Files Backup** creates a separate ZIP of eligible installation file data. **Exclude Routes** accepts comma-separated path prefixes. Verify that excluding a path will leave the intended content restorable. Deployment secrets and protected runtime files are handled outside ordinary file backups.

This screen has **DB Archive Password (set only)** and **Files Archive Password (set only)** fields. The current backup generation code writes ordinary ZIP archives. Protect the destination and downloads accordingly.

## Test and maintain the configuration

1. Save, then find **Manual Backup** in that configuration and select **Run Backup Now**.
2. Confirm the action and check **Backup → Backup Files** for the new record.
3. Verify the record includes the expected database and file archives. Download them or check their destination before relying on the automatic schedule.
4. Test restoring to an appropriate test installation.

An invalid cron expression can leave automatic backup inactive. If a backup fails, check the destination configuration, provider permissions, and server Console. Retain needed archives independently before deleting a configuration. Its records and automatic schedule are removed from the panel.

See also [Download or restore a backup](operations-backup-restore.md) and [Read the server console](operations-console.md).
