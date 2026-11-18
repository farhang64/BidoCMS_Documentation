# Use LinkedIn service settings, publishing, media and activity

Some installations expose the standalone LinkedIn service workspace under **Social → LinkedIn**. The visible tabs depend on CMS access and the service integration.

| Section | What it provides |
| --- | --- |
| Overview | Service status, connection details, account and recent publication counts, and **Panel connection settings**. |
| Accounts | Member authorizations, member and organization identities, account sync and disconnect. |
| Publish | Composer and stored publication jobs. |
| Content | Posts and engagement tools for identities with the corresponding provider permissions. |
| Media | Uploaded or remote reusable publication assets. |
| Activity | Jobs, Events and Audit records for the service. |

## Check the service settings

In **Overview**, use **Refresh** to reread the connection and recent provider results. In **Panel connection settings**, review **Connection name** and **Service URL**. When the URL is pinned by configuration the field is disabled. **Save settings** verifies the configuration. **Remove integration** detaches the website from the service and can suspend the tenant while retaining service data.

## Queue a publication

1. Open **Publish**. Choose **Publish as** from active publishing identities.
2. Select a **Publication type**, such as Text, Article, Image, Multiple images, Video, Document or Reshare. Enter **Commentary** and complete the media or article fields shown for that type.
3. Optionally enter **Schedule (optional)** for future publication and choose **Disable resharing** if appropriate.
4. Select **Queue publication**. In the publication list, choose **Details** to see the state and any provider message.
5. Use **Cancel** for a scheduled item that has not started, or **Verify on LinkedIn** on a supported submitted item. If the service requires reconciliation, verify the provider state before choosing the corresponding **Mark published** or **Mark failed** action.
6. For a failed, cancelled or deleted entry, **Use as template** copies its content into a new publication; review the resulting identity and fields before queueing it.

## Work with media, content and activity

Use **Media → Upload a file** to upload an eligible image, video or document through the CMS. To keep an external source for a later publication, open **Register a remote URL**, enter **Remote media URL** and optionally **MIME type**, then choose **Save remote media**. The service stores the asset reference for the composer.

In **Content**, use the account and post controls you have available to read posts and manage engagement. A Page's approved LinkedIn app permissions determine which comment and reaction actions are available.

In **Activity**, choose **Jobs** for execution status, **Events** for outbound delivery records or **Audit** for operation details. This is service activity. To investigate a publication, begin with its publication history and inspect the corresponding job or event if needed.

[Connect a LinkedIn account](integrations-linkedin.md)
