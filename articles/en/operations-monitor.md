# Monitor server resources and configure alerts

Open **Monitor** to check resource use for the BidoCMS process and its runtime, view history, and create email alerts for sustained resource conditions. The monitor API requires the built-in administrator.

## Read the live cards

Live values refresh about every 10 seconds. The **Runtime** line identifies the environment and the time of the last update.

| Card | App consumption | Available to app |
| --- | --- | --- |
| **CPU** | CPU usage reported for the CMS process. | CPU capacity in the application runtime's scope. |
| **RAM** | Process resident memory, shown as RSS. | Available memory in the runtime pool. |
| **Disk** | Size of the CMS project on disk. | Free space on the disk or volume used by the application. |

Open **How to verify these numbers** to compare the raw readings with the operating system. A container can have a different resource limit from the full host. If **Available to app** stays blank after an update, follow the monitor's restart message or ask the server operator to check that the current monitor service is running.

## Use the history chart

Choose a **Time range** from one hour, six hours, one day, seven days, 30 days, or one year. The one-hour through one-day ranges use one-minute buckets, seven days uses hourly buckets, and the longer windows use daily buckets. The chart refreshes about once a minute.

- Toggle **cpu average**, **ram average**, **disk**, **database size**, and the inbound or outbound network series as needed.
- **cpu candle** and **ram candle** show the minimum and maximum in each time bucket with a tick for the average. Average lines show one average per bucket.
- Move over the chart to inspect a measurement with its timestamp. Check the unit and the selected series. Database size and network totals are byte measurements, while resource percentage series use percentages.
- Gaps represent missing readings. The chart can mark recorded process restarts, server restarts, and factory resets.

## Add and maintain alert rules

1. Under **Alert rules**, select **Add rule**.
2. Enter a descriptive **Rule name** of at most 50 characters.
3. Choose a **Metric**. CPU and RAM each have process and host/container options. Disk metrics cover the project and its volume. Database size and inbound/outbound network totals are also available.
4. Set a positive **Threshold (numeric)** and a positive **Duration in minutes (numeric)**. Use a threshold meaningful for the chosen metric's unit. The alert condition depends on the metric staying at or above the threshold for the specified duration.
5. Enter one recipient per line in **Emails (one address per line)** and save. Both the row **Save** and **Save alert settings** submit the current rule list, so complete any other draft rows before saving.
6. To remove a rule, choose the row's **Delete**. Check the resulting list for the remaining rules.

Check **Settings → General** for email readiness if alerts do not arrive. Verify the metric, threshold, duration, and recipients before assuming an alert missed an event.

See also [Dashboard system health](dashboard-system-health.md), [Read the server console](operations-console.md), and [Configure email delivery](settings-email-notifications.md).
