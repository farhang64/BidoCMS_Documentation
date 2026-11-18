# BidoCMS Documentation

This repository contains the English BidoCMS panel help and the source used by the documentation website and assistant. The [BidoCMS help center](https://bidocms.com/docs/) is the public reading experience. Use the editable articles to review a menu, explain how a feature works, or update the steps when the panel changes.

The first public revision contains the written guide. Demonstration screenshots are pending public release.

## Repository contents

| Path | Purpose |
| --- | --- |
| `articles/en/` | Editable Markdown articles with field descriptions, procedures, and troubleshooting. |
| `images/en/` | Screenshots of the panel populated with demonstration data. |
| `image-captions.json` | Screenshot catalog with descriptive alt text, article IDs, capture provenance, and dimensions. |
| `menu-map.cjs` | Maps CMS menu IDs to relevant articles for contextual help. |
| `build-index.cjs` | Builds and checks the documentation indexes. |
| `manifest.json` | Generated locale, section, article, menu, and heading catalog. |
| `search-index.json` | Generated full-text index for the help center. |
| `assistant-index.json` | Generated section excerpts, context, and public citation links. |
| `ASSISTANT.md` | Retrieval and assistant integration guide. |

## Edit and publish an article

1. Find the topic in `articles/en/` and edit its Markdown. Start the file with one H1 and a short description, then use descriptive H2 and H3 headings.
2. Use the exact labels that users see in the panel. Include the menu path, access requirements, the effect of **Save**, and how to verify the result. Describe unavailable or installation-specific features where relevant.
3. Link related help articles with a relative path such as `site-publishing.md`. Keep a published filename and its headings stable when possible so website citations continue to work.
4. Add new screenshots to `images/en/`. Use demonstration data and meaningful alt text. Link the screenshot from the article using a path such as `../../images/en/site-publish-queue.webp` and update `image-captions.json`. Remove account details, customer data, and secrets from every public image and example.
5. For a new menu-related article, assign the matching CMS menu ID in `menu-map.cjs`. Keep article IDs and menu labels consistent with existing articles.
6. From the repository root, run the build command below. Review the article and the generated files together before committing. Update the branch read by the help center after the change is reviewed.

```sh
node build-index.cjs
```

## Add another language

The published locale is currently English. Keep the English article ID for a translation, place it in the locale's article folder, and update the locale configuration used by the index builder. Translate navigation labels, body text, and screenshots as applicable. Run the index build and verify localized article links before publishing the new locale.

## Use the content in an assistant

Read the catalog and section index from the same repository revision. Pass the relevant menu or route context to retrieval, then link each answer to the corresponding public help section. See [assistant integration](ASSISTANT.md) for the schema, retrieval behavior, and citation rules.
