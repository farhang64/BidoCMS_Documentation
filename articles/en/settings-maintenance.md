# Restart the application or reset an installation

Open **Settings → Maintenance** to find **Server controls** and **Factory reset (day-1 state)**. These server actions require the built-in administrator. A restart briefly interrupts the application. A factory reset clears installation data and generated files.

## Restart application

1. Save open work and choose a suitable moment for the interruption.
2. Select **Restart application** under **Server controls**.
3. Read and confirm the **Restart server** prompt.
4. Wait for the hosting supervisor to start the application again. The panel attempts to reload after a short delay. If it reloads before the server is ready, refresh once it is back.
5. Sign in if needed and verify the panel, public site, and the action that led to the restart.

Ask the hosting operator to check the service supervisor if the panel stays unavailable. The action exits the application process and relies on the supervisor to bring it back.

## Factory reset (day-1 state)

**Delete extras and reset to first install** clears the MongoDB database and generated files, including themes or theme runtime files, uploads, public output, temporary files, and local backups. This is a full installation operation.

1. Confirm the intended site domain with the owner. Export or download the recovery files needed from the installation and keep them off the affected server.
2. In **Factory reset (day-1 state)**, choose **Delete extras and reset to first install**.
3. Review the destructive-action confirmation. The panel asks you to type `RESET` exactly.
4. Wait for the result and the application reload. If the server returns a failure, record the message and have the operator inspect the actual data and runtime before making another attempt.
5. Follow the operator's recovery or first-install procedure, then verify site access and configuration.

See also [Configure backups](operations-backup-settings.md), [Download or restore a backup](operations-backup-restore.md), and [Set up a new BidoCMS installation](start-first-install.md).
