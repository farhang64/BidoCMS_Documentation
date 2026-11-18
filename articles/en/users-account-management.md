# Add, edit, activate, and deactivate user accounts

Open **Users → Users** to manage accounts for the current installation. Use **Search name or email** to locate a record. The account table shows the role and whether the account is active or still needs a password change.

## Add a user

1. Make sure the intended role is available under **Users → Roles**.
2. In the **Users** tab, select **Add user**.
3. Enter **First name**, **Last name**, **Display name**, **Email**, and **Phone number** as applicable. Confirm the login email with the person.
4. Select a **Role** and keep **Active account** selected if access should begin immediately.
5. If the panel asks for a temporary password, set one with at least eight characters including a letter and a number and at most 72 UTF-8 bytes. Otherwise BidoCMS generates a temporary password and emails it to the new user.
6. Select **Save**. If a temporary password was set manually, share it privately with the user. They must create a different password on the first sign-in.

With no configured email delivery, only a built-in administrator can create an account, using the manual temporary-password field. If **Add user** is unavailable and you manage user records, check this installation's mail configuration with your site administrator.

## Edit account details and role

Select the user, review the fields in **Edit user**, make the change, and save. Editing an account record changes the user details, role, or active state. Password changes use the separate **Reset password** action for administrators or **Profile → Security** for the signed-in user.

## Activate or deactivate an account

Use **Activate** or **Deactivate** and confirm the prompt. The account record is retained. Deactivation ends access, including from sessions that were already signed in. You cannot deactivate your own account, and the installation keeps at least one active built-in administrator.

To grant access again, reactivate the existing account and verify its role. Reset its password separately if needed.

## Reset a user's password

1. Sign in as **cms admin**.
2. Open the user record and select **Reset password**.
3. Check the email or name shown in the **Reset temporary password** dialog.
4. If email is configured, select **Email temporary password**. To supply your own, choose **Set a temporary password manually instead** and select **Set temporary password** after filling the field. Installations without mail delivery show the manual option directly.
5. Confirm the success message and send the temporary password securely if you set it manually. Existing sessions end and the user must choose a fresh password at their next sign-in.

See also [Create roles and assign menu permissions](users-role-permissions.md), [Sign in and recover access](account-sign-in.md), and [Configure email delivery](settings-email-notifications.md).
