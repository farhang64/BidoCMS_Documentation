# Manage application environment variables

Open **Environment** to inspect and change the installation's application variables as a built-in administrator. Changes apply to the application process and can affect service connectors, theme behavior, or runtime settings.

## Add or change a variable

1. Open **Environment** and allow the current rows to load.
2. For an existing variable, check its **Name** and update its **Value**. For a new variable, choose **Add variable** and complete both fields.
3. For multiple changes, verify each row is still present before saving. To remove a variable, choose the row's delete button and confirm **Remove variable**.
4. Choose **Save variables**. Use each name only once and fill the **Name** field in every row. Names must start with a letter or underscore and can contain letters, digits, and underscores.
5. Wait for the panel to reload. Verify the feature that uses the variable. Use **Settings → Maintenance → Restart application** if the feature reads its variables only at startup.

Changes are encrypted in the installation database. The panel displays values to authorized operators, so keep them out of screenshots and support messages. Deployment-owned values remain in the hosting configuration. In Coolify deployments, persistent site data uses the dedicated `/data` volume.

## If a variable or restart is missing

- If a deployment variable is absent from the list, check the hosting configuration with the server operator.
- If an optional feature remains unavailable after saving, check its own requirements, then verify spelling and the selected installation. Restart the application if a startup-only value still needs to be loaded.
- If the panel cannot load after saving, contact the server operator to review the service supervisor, runtime logs, and the changed value.

See also [Restart the application](settings-maintenance.md) and [Read the server console](operations-console.md).
