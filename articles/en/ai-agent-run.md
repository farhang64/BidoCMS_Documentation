# Run an agent, schedule executions and export results

Open the named workspace tab for the enabled agent in **AI & Agent**. Each installed package defines which functions, input fields and execution requirements appear in that workspace.

## Run the selected function

1. Choose a **Function** and read its description.
2. Fill in the input fields. For an AI input, select a saved key and compatible model. Password fields are masked. A blank optional password clears its value when the inputs are saved.
3. Check **Execution requirements**. Ready requirements allow the run. Required missing or unavailable dependencies block start. Optional requirements can appear as unmet while the run remains available. Use a setup link if shown, then recheck.
4. Choose **Save inputs** if the current inputs should be retained for a later run.
5. Choose **Run now**. The server checks current permission and required prerequisites again, then records the started execution in **Recent executions**.
6. Select **View result** to monitor a running execution or open a finished one. Closing the browser leaves server-side execution running.

## Run on a schedule

1. Select the function and fill in the inputs intended for scheduled use.
2. Expand **Scheduled execution** and check **Enable schedule**.
3. Enter a five-field **Cron expression** with minute, hour, day, month and weekday. For example, `0 9 * * 1` requests Monday at 09:00.
4. Enter an IANA **Time zone**, for example `America/Vancouver`.
5. Choose **Save schedule** and review **Next run** if shown. The schedule captures the function and inputs at the time you save it. Save the schedule again if those values need to change.
6. To remove a schedule, clear **Enable schedule** and choose **Save schedule**.

Runs require the server to be running at the scheduled time. Downtime does not backfill missed executions. Only one run of an individual agent can execute at once. A started run can end as Completed, Failed or Stopped. A required preflight failure produces no execution record, and scheduled launch failures can be reflected on the schedule.

## Read and retain results

**Recent executions** distinguishes Manual and Scheduled runs and reports timing and status. Use **Execution log** to check progress messages and **Complete result** to read the complete structured result. A tabular preview can show up to 100 rows and 30 columns.

- **Export Excel** creates a workbook with execution details, logs and complete JSON. Tabular results also include a Results worksheet with bounded rows and columns.
- **Export JSON** preserves the structured result.
- The CMS retains the latest ten started executions per agent. Export a report you need beyond that retention window. Saved input snapshots are excluded from execution history and exports.

[Manage installed agents](ai-agent-install.md) · [Understand package inputs and requirements](ai-agent-package.md)
