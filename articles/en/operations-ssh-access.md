# Register an SSH key and connect to the site

Open **SSH access** to register public keys, read the site's connection information, and follow connection instructions. Site administrators manage up to three named public keys for the installation.

## Register a key

1. In **Connection guide**, open **Create a key on your computer** and follow the instructions for macOS, Windows 10 or 11, or Linux.
2. Copy one complete line from the public key file ending in `.pub`. Use Ed25519 or RSA with at least 3072 bits.
3. Select **Add public key**, enter a **Key name** from 1 to 80 characters, and paste the line into **Public key (.pub)**.
4. Save and review the key's fingerprint and **Added** date. Keep the private key and its passphrase on your own device.
5. Use **Rename** to change the identifying label. Use **Delete** and confirm to revoke that key when a device is retired or access should end.

## Use the connection details

**Connection details** lists the SSH hostname, port, username, and server fingerprint with the database details where configured.

| Connection guide | Use it to |
| --- | --- |
| **Connect with MongoDB Compass** | Configure the site's database details and SSH tunnel in the Compass interface. The database still requires its own account credentials. |
| **Connect through a terminal SSH tunnel** | Open the restricted local tunnel shown for the installation, then connect your MongoDB client through it. |
| **Read this site's files with SFTP** | Browse and download this site's exposed output and image files. This connection is read-only. |

On first connection, compare the server's fingerprint with the one in the panel. This connection allows the displayed SFTP and database-tunnel workflows. It provides no interactive shell. MongoDB access follows the permissions of the supplied database account.

## Troubleshoot

| Symptom | What to check |
| --- | --- |
| **Connection unavailable** | Ask the server operator to verify that the SSH service is enabled and that its TCP port is published and reachable. Key registration and service readiness are separate. |
| The panel is **Ready to connect**, but a client times out | Verify the panel's SSH hostname and port from your own network. With an HTTP-only CDN proxy, the operator may provide a different hostname for SSH. |
| The client reports a changed fingerprint | Confirm the new fingerprint with the administrator before accepting it. |
| The panel rejects a pasted key | Confirm you pasted the complete public line, used a supported key type, and have a free key slot. |
| SSH authentication works but the database rejects login | Check the database name, authentication settings, and its separate account credentials. |

Use only the installation's displayed connection details and the tool guide that fits your task.

See also [Browse and manage installation files](operations-files.md).
