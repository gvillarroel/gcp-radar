---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:53:34.498Z"
product_name: "Apps Script"
product_slug: "apps-script"
feature_name: "Forms Service form publishing"
feature_slug: "forms-service-form-publishing"
latest_feature_date: "2025-04-08"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/apps-script/releases"
  - "https://developers.google.com/apps-script/guides/cloud-platform-projects"
  - "https://developers.google.com/apps-script/guides/bound"
keywords:
  - "forms"
  - "form"
  - "publishing"
  - "lets"
  - "scripts"
  - "publish"
  - "control"
  - "who"
---

# Forms Service form publishing

Product: Apps Script
Coverage: MEDIUM

## Step 02 Summary

Forms Service form publishing lets scripts publish forms and control who can respond to them.

## Extended Definition

Forms Service form publishing lets scripts publish forms and control who can respond to them.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- [https://developers.google.com/apps-script/guides/cloud-platform-projects](https://developers.google.com/apps-script/guides/cloud-platform-projects)
- [https://developers.google.com/apps-script/guides/bound](https://developers.google.com/apps-script/guides/bound)

## Supporting Pages

### Google Apps Script release notes \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- Source ID: `site-docs-root`
- Final score: 158
- Re-rank relevance: N/A

Evidence snippets:
- This lets an admin of a Google Apps domain install and authorize a Docs, Sheets, or Forms add-on for all users in the domain if the add-on is published to the Google Apps Marketplace .
- April 08, 2025 Feature You can now use the Forms Service to publish forms, and to have granular control over who can respond to forms.
- Added the client-side HTML-service method google.script.host.editor.focus() , which allows scripts to switch browser focus from the dialog or sidebar to the Google Docs, Sheets, or Forms editor.
- Feature Launched the Script service in response to this feature request , which allows developers to programmatically set triggers and manage the publishing of scripts as a service.

### Google Cloud projects \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/guides/cloud-platform-projects](https://developers.google.com/apps-script/guides/cloud-platform-projects)
- Source ID: `site-docs-root`
- Final score: 107
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Standard projects are required for tasks like publishing add-ons, verifying OAuth clients, viewing logs in the Google Cloud console, and manual control over project settings.
- You can use either a default project that Apps Script creates or a standard project that you create yourself; default projects are for simple scripts, while standard projects are for complex, commercial, or publishable applications.
- In general, default projects are good for everyday scripts, but you should use a standard project for any application that is complex, commercial quality, or that you intend to publish.
- For information about creating a new app listing, refer to Publish an app .

### Container-bound Scripts \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/guides/bound](https://developers.google.com/apps-script/guides/bound)
- Source ID: `site-docs-root`
- Final score: 98
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Special methods Bound scripts can call a few methods that standalone scripts can't: getActiveSpreadsheet , getActiveDocument , getActivePresentation , and getActiveForm allow bound scripts to refer to their parent file without referring to the file's ID. getUi lets bound scripts access the user interface for their parent file to add custom menus, dialogs, and sidebars .
- Custom menus, dialogs, and sidebars Bound scripts can customize Sheets, Docs, and Forms by adding custom menus and dialog boxes or sidebars .
- Bound scripts can be created from within the Google Docs, Sheets, Slides, or Forms file they will be bound to.
- Scripts bound to Sheets, Docs, Slides, or Forms can also become web apps, although this is uncommon.

