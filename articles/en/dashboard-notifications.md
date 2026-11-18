# Use and rearrange the Notifications dashboard

**Notification** is the sidebar entry for the Notifications dashboard for site status, integrations, and operations. It loads each available card independently so you can use results as soon as they arrive.

## Open and refresh the dashboard

1. Choose **Notification** in the sidebar. If your role can access it, your installation can open here by default.
2. Allow the placeholders in the visible cards to resolve. One card can finish while another is still loading.
3. For a new snapshot, use **Refresh notifications** in the header area. On mobile, open **Website and publishing actions** if the control is tucked away.
4. Open the relevant workspace when a card offers a shortcut such as **Backups**, **Open console**, or **Open Settings**.

| Card | What it shows |
| --- | --- |
| **Google Search performance** | Whole-site clicks and impressions over the last 30 days. |
| **Pages Google hasn’t indexed** | Eligible published pages with a confirmed inspection issue, plus coverage of pages without a confirmed status. |
| **Site pages** | Page-type counts for total, published, and Google-indexed versions. |
| **Google Analytics live** | Active users and recent traffic breakdowns for the connected GA4 property. |
| **Latest backup** | The latest completed backup recorded by the installation, along with the parts included. |
| **CPU & RAM usage** | Six-hour history for CPU and RAM, with missing spans and operational markers when available. |
| **Server console** | The latest 50 captured log lines. |

## Rearrange cards

Drag the move handle in a card header and drop it at the intended position. With a keyboard, focus the move handle and use the arrow keys to move the card, or **Home** and **End** to move to the beginning or end. Your browser stores the order for your account on that installation. Other browsers, profiles, or devices may start with the default order.

## Why a card may be missing or empty

Most cards are shown only for **cms admin**. **CPU & RAM usage** can appear if the role has **Monitor** access, but the underlying system API still requires the built-in administrator. If that card cannot load for a delegated role, ask the site administrator to check resource usage. A disconnected integration can show a connection prompt. A connected source can still lack recent measurements or inspection results. If one card says it could not load its data, use **Refresh notifications** and check that card's connection or source workspace if it persists.

See also [Search and site pages cards](dashboard-search-and-pages.md), [Google Analytics live card](dashboard-live-analytics.md), and [System health cards](dashboard-system-health.md).
