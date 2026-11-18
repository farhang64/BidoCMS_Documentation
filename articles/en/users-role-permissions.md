# Create roles and assign menu permissions

Open **Users → Roles** to review role names and manage access to the sidebar menus and nested tabs. Users get the menu permissions of their assigned role.

## Create a role



1. Open **Users** and select **Roles**.
2. Check **Search roles** for a role that already fits the job.
3. Select **New role** and enter a clear **Role name**, such as `Website editor`.
4. Select the menu and submenu entries needed for the work. Selecting a parent selects its available descendants. Selecting a child selects its ancestors. Clearing a parent clears its descendants.
5. Review the resulting permissions and select **Save**.
6. Assign the role under **Users → Users** and verify it with an account that uses that role.

A stored parent grant can exist without any child grants. For example, consider **Settings**, **Settings → General**, and **Settings → Maintenance** as separate entries. Open the parent in the permission tree, leave its needed child selected, and clear the child grants the role should not have. Scheduled or destructive actions within a workspace can also require built-in administrator access.

## Edit a role

Select a role from the list, review its name and checkboxes, change the intended fields, and select **Save**. Roles created in this workspace can be renamed. Legacy and website-theme role names stay fixed so that site registration and ownership references keep working. Their editable menu grants remain available where the administrator is allowed to manage them.

The system role **cms admin** always has full menu access. Its grants and name are fixed. A role editor can grant permissions only within their own permitted scope; the panel disables grants the current account cannot give.

## Understand what a grant applies to

- Menu and submenu access are the units of permission for these roles.
- A newly added submenu needs an explicit grant for a restricted role.
- Account states still matter: a user with an appropriate role must also have an active account.
- Website roles packaged with a theme may control public website behavior. Keep those roles separate from CMS administrator access when configuring the theme.
- Some high-impact features apply additional checks. For example, deploying executable theme packages and operating SSH access require the built-in administrator.

## Troubleshoot missing access

Ask the affected user for the exact menu and tab. Open their account record, confirm the assigned role, and then review both the parent and child grants under **Roles**. If the control still appears inaccessible after signing back in, check whether the installation has the feature configured and whether the feature requires **cms admin**.

See also [Manage user accounts](users-account-management.md) and [Find your way around the panel](start-panel-navigation.md).
