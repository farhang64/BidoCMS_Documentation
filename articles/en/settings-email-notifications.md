# Configure email notifications and account email

Open **Settings → General** and locate **Notification Enable** and **Method**. This configuration supplies the installation's outgoing mail transport. Account recovery and email delivery of temporary passwords depend on a configured mail transport. Monitor alert rules use their own recipient lists.

## Choose a method

| Method | Values to prepare |
| --- | --- |
| **Normal** | SMTP **Host**, **Port**, sender email in **username**, and the authorized SMTP password in **password**. |
| **Sendgrid** | SendGrid SMTP **Host** and **Port**, authorized sender email in **username**, and API key in **password**. BidoCMS uses `apikey` as the SMTP authentication username. |
| **Gmail** | The Gmail sender email and the credential authorized for SMTP access. The Gmail transport provides its own service settings. |
| **Gmail Relay** | A sender email and a Google Workspace SMTP relay configured for the server. BidoCMS uses the Gmail relay host on port 587. |
| **Postmark** | The authorized **Sender email address** and **Postmark server API token**. The form hides Host and Port for this mode and saves Postmark's SMTP address on port 587. |

## Save and check delivery

1. Turn on **Notification Enable**.
2. Select the **Method** and enter the sender, connection details, and credential required by that method. Use a valid email address for the sender.
3. Fill **Riciever Email Address** as shown in the UI for the notification recipient and **Email Header** for the sender display header used in outgoing email.
4. Select **Save**. Leave the password or token field blank when you intend to retain the already saved value. Enter the replacement when rotating a credential.
5. Verify mail on an account and destination you control. For example, open the login screen and request **Forgot Password** for a test account, then check its inbox and spam folder.

The **Forgot Password** action appears when the installation's configuration satisfies its mail readiness checks. Real delivery also depends on provider authorization, successful connection, and delivery to the recipient. If the link appears and no email arrives, verify the sender and credentials with the mail provider and check Console for the relevant timestamp. Keep credentials out of screenshots and support transcripts.

See also [Sign in and recover access](account-sign-in.md), [Manage user accounts](users-account-management.md), and [Monitor server resources and alerts](operations-monitor.md).
