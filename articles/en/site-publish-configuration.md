# Publish settings, S3, and CDN

Open **Publish → Settings** to choose where generated files are published and configure the CDN. Generated files are always written to the server. Enabling **Publish on S3** also uploads them to object storage and requires the Cloudflare CDN option.

## Configure S3 publishing

| Field | What it sets |
| --- | --- |
| Publish on S3 | Enables object storage in addition to local output. The panel enables CDN automatically in this mode. |
| Region | Storage provider's region. |
| Bucket | Destination bucket name. |
| Endpoint URL (optional) | Custom endpoint for an S3-compatible provider when needed. |
| Destination Path (optional) | Key prefix inside the bucket. |
| Access Key (set only) | Storage access key. The panel displays whether one is configured. |
| Secret Key (set only) | Storage secret key. The panel displays whether one is configured. |
| Storage Sync Cron (optional) | Schedule for copying local storage to S3. For example, `0 3 * * *` requests a daily run at 03:00 in the deployment's scheduling timezone. |

Leave a set-only credential field blank to retain its current stored value. Enter a new value only when configuring or replacing that credential.

## Configure Cloudflare and save

1. Confirm the live hostname under **Site → General → Site Address**.
2. Enable **CDN** if using Cloudflare with local publishing. S3 publishing requires it.
3. Check **CDN Provider**. The current panel supports Cloudflare.
4. Supply the Cloudflare **API Token** if it is not configured.
5. Select **Save Settings**. BidoCMS looks up the Cloudflare zone from the saved site's hostname and can update the CDN and DNS configuration.
6. Review the detected zone name and ID.

If saving fails, check that the site address has the intended hostname, the zone is available to the token, and the bucket and both storage credentials are configured when S3 is enabled. Resolve any cron validation error before saving.

## Test or sync the saved configuration

Select **Test Configuration** after saving. The result shows pass, fail, or skipped checks with explanatory details. Depending on enabled settings, it tests the S3 connection, Cloudflare token and zone, domain-to-zone match, and whether the domain serves content from S3. Correct failed settings and test again.

Use **Sync Now** to start a storage-to-S3 sync against saved settings. The last sync result shows the trigger, time, counts of checked and uploaded files, and errors. Sync copies applicable locally generated files. Use a publish action when the site needs to regenerate content.

[Site Address](site-general-settings.md) · [Publish Queue](site-publishing.md)
