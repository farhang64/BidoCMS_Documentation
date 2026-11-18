# Site logo, favicon, and web app manifest

Open **Site → General** to change the CMS site branding and configure the installable web app. The BidoCMS product badge and the site's own branding both appear in the CMS header when site branding is available.

## Set the site logo or favicon


1. Import the image into **Images**, if it is not already in the album.
2. Open **Site → General**.
3. Under **Site logo** or **Favicon**, select **Choose from album**.
4. Select one image and confirm the picker selection. The field shows a preview.
5. Select **Save** at the bottom of the page.

**Use default** clears the selected image for that field after you save. The logo and favicon are separate selections. Choosing an image requires access to the Images album. If the file disappeared or BidoCMS cannot prepare it, select another image from the album.

## Configure the web app manifest

The **Web app manifest (JSON)** field accepts a JSON object. Leave the field blank to use the built-in manifest with the domain name and site logo. To change the app's presentation, enter only the fields you want to override, then save.

```json
{
  "name": "Example Studio",
  "short_name": "Example",
  "theme_color": "#17324d",
  "background_color": "#ffffff"
}
```

Select **View active manifest** to open `/manifest.json` in a new browser tab. Check the active values there after saving. The form rejects invalid JSON and top-level arrays. Property names and string values need double quotes, and object properties cannot end with a trailing comma.

## Verify a branding change

Reopen the CMS and check the site name and logo in the header. Open the public site to check the favicon displayed by the browser. Check the active manifest after a logo, domain, or manifest change. A browser may keep the previous favicon visible until its cache updates.

[Site settings](site-general-settings.md) · [Upload images](media-image-album.md)
