# Read and download server console logs

Open **Console** to see the application's captured server console. The built-in administrator can read, download, and clear the buffer. The workspace shows up to 500 recent lines with line numbers, refreshes every 15 seconds, and scrolls to the newest output after refresh.

## Read the logs

1. Note the time of the action you want to diagnose, such as a publication, backup, or connector operation.
2. Open **Console** and choose **Refresh** if you want the latest capture immediately.
3. Use **Top** and **Bottom** to move within the displayed lines. The status shows how many lines are displayed out of the total captured and when the view refreshed.
4. Select **Download** to export the full current in-memory log buffer as a text file.
5. Review and redact any sensitive values before sharing a log excerpt. Include the relevant time and preceding lines that establish which operation failed.

## Clear the captured buffer

**Clear** asks for confirmation and clears the log buffer shared by the application. Download any evidence you need first. The buffer can start filling again as the server writes new messages.

## If the console is empty

An empty view can appear when the buffer was cleared or the process has no captured logs. Refresh after reproducing the issue or check whether the server has been restarted to load the current capture support. Ask the hosting operator for deployment logs if you need process startup or historical data outside this buffer.

See also [Notifications dashboard](dashboard-notifications.md) and [Monitor server resources and alerts](operations-monitor.md).
