# Sign in, sign out, and recover access

Use your installation's login page with the email associated with your BidoCMS account. Each installation has its own access and administrator.

## Sign in

1. Open the login address given to you by your administrator. The common entry point is `/login` on the installation's site.
2. Enter your **Email** and **Password**.
3. Optionally choose **Remember me for 30 days** on a trusted device. Without it, the site uses a browser-session cookie and an eight-hour authentication token.
4. Select **Log In**.
5. If two-step authentication is enabled, enter the current six-digit **Authenticator code** and select **Confirm**.
6. If prompted to change a temporary password, complete that step before opening the panel.

When finished, open the sidebar and choose **Log out**. On a phone, open the navigation drawer first.

## Replace a temporary password

An administrator may send or privately share a temporary password when creating or resetting an account. Use that password to sign in, including the current authenticator code if prompted. Enter **New Password** and **Repeat New Password**, then select **Save and Continue**. The new password must differ from the temporary one, contain at least eight characters including an ASCII letter and digit, and use at most 72 UTF-8 bytes.

The first-password challenge expires after ten minutes. If it expires, return to sign-in and repeat the process with the temporary password. The panel opens once the new password has been accepted.

## Recover a forgotten password

1. Select **Forgot Password** on the login form when the link is available.
2. Enter your account email and select **Send Reset Link**.
3. Check the inbox and spam folder. Open the current reset link from the email.
4. Enter and repeat a strong new password, select **Reset Password**, and sign in with the new password.

Recovery requires a configured, enabled mail transport. Reset links expire and are single-use. A successful reset ends existing sessions. If a reset link is invalid, expired, or already used, request a new link. If **Forgot Password** is absent, ask the site's administrator to reset your password.

## Troubleshoot login

| Symptom | What to check |
| --- | --- |
| Correct-looking credentials fail | Confirm the site address and email first. An administrator can verify whether the account is active and belongs to this installation. |
| A verification code is rejected | Use the current code for this installation in your authenticator app. Try again after the next code appears if the current code was near expiration. |
| You no longer have access to your authenticator | Contact the site administrator to confirm identity and review account recovery. Keep recovery and authenticator codes private. |
| You can sign in but a menu is missing | Ask your administrator to check the specific menu and submenu grants. |
| The login screen mentions reviewing website access | Complete sign-in to review the website's access request. Approve it only if the site and request match your intended action. |

See also [Profile and security](account-profile-and-security.md) and [Manage user accounts](users-account-management.md).
