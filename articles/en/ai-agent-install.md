# Upload and manage agent packages

Open **AI & Agent → Upload agent** to install an agent package and control its workspace. In this release, agent management and execution require an eligible CMS administrator with the Agents grant.

## Upload an agent

1. Open the **Upload agent** tab.
2. Choose the ZIP package. A valid package contains `agent.json` at its root and its declared JavaScript files.
3. Select **Upload package**. Uploading installs the program and does not start it.
4. In **Installed agents**, review the package name, version, description and **Access** line. These are declared by the package.
5. Switch the agent to **Enabled** to open its own workspace tab. Configure the inputs and verify the requirements in that workspace.

A newly uploaded package starts disabled. If validation fails, check that the manifest is at the ZIP root, declared files exist, and all members use supported file types and paths.

## Change an existing installation

| Task | What to do |
| --- | --- |
| Open the workspace | Select the enabled agent's named tab. |
| See current installations | Use **Refresh** beside **Installed agents**. |
| Pause an agent | Switch it to **Disabled**. This closes its workspace, prevents scheduled runs and cancels active execution. |
| Update an agent | Upload a valid package with the same manifest ID. The updated agent is disabled. Compatible saved values with the same name and type are retained. Review and save the schedule again because the previous schedule is cleared. |
| Review outputs after an update | Open the workspace and select an execution. Existing history is retained subject to the ten-run limit. |

Package permissions allow the program to read the selected CMS capabilities and call configured tools. Review the source before installing packages, especially if they accept external credential inputs or make outbound provider requests.

[Run and schedule an agent](ai-agent-run.md) · [Package format reference](ai-agent-package.md)
