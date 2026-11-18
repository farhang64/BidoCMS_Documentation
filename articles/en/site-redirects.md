# Redirects

Open **Redirects** to tell the public site where to send requests for an old path. Published redirect rules send an HTTP 301 response. Use this when moving a public page or sending an obsolete path to a replacement.

## Add an internal redirect

1. Select **Add Redirect Rule**.
2. In **Old URL**, enter the original public path, such as `/old-services`.
3. In **New URL**, enter the replacement path, such as `/services`.
4. Select **Save** and wait for **Redirect rule saved**.
5. Open the old URL and verify it reaches the intended destination.

Use the exact old path. A path on the same website can be entered with its leading slash. A page's **Pages → Main Content → Redirect URL** also lets you set an internal destination for that page's current address.

## Point an old path to another domain

1. Add or edit a rule in **Redirects**.
2. Enter the full destination, including `https://` or `http://`.
3. Select **Save**. Review the displayed address in **Confirm external redirect**.
4. Enter your **Current password** and select **Confirm and save**.

External destinations require access to the Redirects menu and password confirmation when saving. Use the Redirects workspace for this operation. If a change to a page's URL keeps an existing external redirect, update the associated rule through Redirects.

## Edit, remove, or troubleshoot a rule

Edit the two fields on the applicable row and save. To remove a rule, choose its trash icon and confirm. Check for duplicate source paths, the correct public language prefix, and the intended destination. Use a fresh browser session to verify a recently changed rule because browsers can cache 301 responses. On the CMS origin, an existing public HTML file can be served before a stored redirect is checked. If the old page still loads, check for generated output at that path as well as CDN caching.

[Page URLs and canonical URLs](content-page-main-content.md) · [Website languages](site-languages.md)
