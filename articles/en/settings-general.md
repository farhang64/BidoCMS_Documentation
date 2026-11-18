# Change the general panel settings

Open **Settings → General** to set the administration interface language and direction, editor defaults, CMS path, and email delivery. These settings apply at the installation level.

## Language and direction

| Setting | What it controls |
| --- | --- |
| **Panel language** | The language used by panel controls that have translations. Use a short code such as `en` for English or `fa` for Persian. |
| **Data language** | Default language context used by the panel when presenting data and editing controls. |
| **Panel direction** | Layout direction for the panel. Enter `ltr` for left-to-right or `rtl` for right-to-left. |
| **Data direction** | Reading and editing direction for data. Enter `ltr` or `rtl` as appropriate. |

Enter the values and select **Save**. Reopen the relevant workspace to check the result. Manage the public website's language variants through [Site languages](site-languages.md).

## CMS Address

**CMS Address** holds the segment between the site domain and `/cms`. For example, a value of `panel` produces an address such as `https://example.com/panel/cms/`. Enter a single URL-safe segment of up to 64 characters starting with a letter or number. The segment can also contain underscores and hyphens. Keep the site hostname, slashes, and protocol outside the field.

Before modifying it, confirm the new address with anyone who links directly to the panel, save open work, and record both addresses for the transition. The new path can require an application restart to take effect. Use the site's login entry point to locate the panel again if an old bookmark fails, and check integration callback addresses that explicitly include the old path.

## editor CSS

**editor CSS** is an optional CSS field used by the rich-text editor. Use it to make body text, headings, links, and other editor elements resemble their public rendering. Save, reopen a page with the rich-text editor, and verify a representative heading, paragraph, and list. Public layout and styling come from the active site theme.

## View the other Settings tabs

Depending on your role, the workspace also includes **Maintenance**, **OAuth**, **Search Console**, and **Analytics**. The **Analytics** tab is the Google Analytics connection workspace. Integrations and operational actions have separate configuration.

See also [Email delivery](settings-email-notifications.md), [Maintenance](settings-maintenance.md), and [Site General settings](site-general-settings.md).
