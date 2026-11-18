# Check backups, server load, and logs in Notifications

The operational cards in the **Notification** workspace provide an at-a-glance view of backup history, six-hour resource use, and recent server logs. Availability depends on the installation and your account's permissions.

## Latest backup

Check for **Completed**, the date and time, and whether **Database**, **Files**, or both were included. The card uses the latest recorded completed backup with an archive. An uploaded or newly discovered file does not substitute for a completed run in this card. Select **Backups** to open the dedicated workspace and review its records.

If the card says **No completed backup yet**, check whether a backup configuration exists and has run. When a scheduled backup was expected, check its automatic status and storage destination.

## CPU & RAM usage


The chart summarizes CPU and RAM percentages from the application's runtime scope over the last six hours. Inspect chart points with your pointer or keyboard. Missing measurements appear as gaps. Where recorded, the chart can mark process restarts, server restarts, and factory resets. Open **Monitor** for longer ranges, additional metrics, and alert rules.

## Server console


The server console card shows the last 50 lines from the captured application log. Scroll within the card or select **Open console** to view more lines, refresh, or download the captured buffer. Look for the timestamp of the backup, publication, or configuration action you are investigating. Share only the relevant log lines after reviewing them for credentials or identifying data.

See also [Configure backups](operations-backup-settings.md), [Monitor server resources](operations-monitor.md), and [Read the server console](operations-console.md).
