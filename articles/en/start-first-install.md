# Set up a new BidoCMS installation

The first-time setup wizard creates a limited database identity and the first administrator for an installation. Use the secure address provided by the server operator. An existing installation shows an already-configured state and links to sign-in.

## Before starting

- Confirm the site address with the server operator. The wizard records the public site origin from the setup request.
- Ask the operator to prepare the deployment's private MongoDB connection and application secrets. The wizard uses the MongoDB configuration supplied by the deployment.
- Have an administrator email address and a place to store the administrator and database passwords securely. These accounts serve different purposes.

## Database

1. Open the installation's **Set up BidoCMS** screen, usually at the site address followed by `/setup`.
2. Enter the **Database name** for this site and a **Database user** dedicated to the installation. The database name is normalized to lowercase. The database account gets access to its own database.
3. Enter a **Database password** of at least 16 characters, or use **Generate**. Preserve it in the appropriate password manager or deployment records.
4. Choose **Test database**. Wait for the status to confirm the database test.
5. Test again after any change to the database fields. A successful test of the current configuration is required before installation.

## First administrator

1. Enter the **Administrator login email**. This account receives full BidoCMS access.
2. Enter an **Administrator password** of 12 to 72 UTF-8 bytes with a letter and a number, or use **Generate**.
3. Choose **Install BidoCMS**. Keep the page open while deployment and installation progress are displayed. The application may restart once.
4. When the page says **Your BidoCMS site is ready**, choose **Open BidoCMS** and sign in using the administrator email and password.
5. Configure your site details, review installed pages and theme, set up mail delivery, then add roles and team accounts as needed.

## Resolve setup problems

| What you see | What to check |
| --- | --- |
| The setup screen says BidoCMS is already configured | Use the sign-in link. Ask the operator to confirm the host if this was supposed to be a new deployment. |
| The form highlights Database fields or has no successful test | Correct those fields and test again. Ask the operator to verify the deployment MongoDB connection if valid values continue to fail. |
| The form highlights the login email or password | Correct the highlighted fields first. Use the generated password option if needed. |
| Setup could not be loaded | Use the retry action. If the condition persists, ask the operator to check the HTTPS site address and deployment readiness. |
| Installation appears paused during a restart | Keep the setup page open during the reconnect step and wait for the completion or error message. Record the displayed error before contacting the operator. |

Provide the operator with the site address, the affected setup step, and the error text. Keep passwords and database connection strings out of support messages.

See also [Sign in and recover access](account-sign-in.md), [Settings General](settings-general.md), and [Site General settings](site-general-settings.md).
