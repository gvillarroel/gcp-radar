---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:53:34.637Z"
product_name: "Apps Script"
product_slug: "apps-script"
feature_name: "Container-bound scripts for Docs and Forms"
feature_slug: "container-bound-scripts-for-docs-and-forms"
latest_feature_date: "2013-05-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/apps-script/guides/bound"
  - "https://developers.google.com/apps-script/releases"
  - "https://developers.google.com/apps-script/guides/docs"
keywords:
  - "container"
  - "bound"
  - "scripts"
  - "docs"
  - "forms"
  - "can"
  - "now"
  - "host"
---

# Container-bound scripts for Docs and Forms

Product: Apps Script
Coverage: MEDIUM

## Step 02 Summary

Google Docs and Google Forms can now host bound scripts directly from their editors.

## Extended Definition

Google Docs and Google Forms can now host bound scripts directly from their editors.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/apps-script/guides/bound](https://developers.google.com/apps-script/guides/bound)
- [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- [https://developers.google.com/apps-script/guides/docs](https://developers.google.com/apps-script/guides/docs)

## Supporting Pages

### Container-bound Scripts \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/guides/bound](https://developers.google.com/apps-script/guides/bound)
- Source ID: `site-docs-root`
- Final score: 193
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Custom menus, dialogs, and sidebars Bound scripts can customize Sheets, Docs, and Forms by adding custom menus and dialog boxes or sidebars .
- Page Summary outlined flag A bound script is attached to a specific Google Sheets, Docs, Slides, or Forms file, called its container.
- Bound scripts can be created from within the Google Docs, Sheets, Slides, or Forms file they will be bound to.
- Scripts bound to Sheets, Docs, Slides, or Forms can also become web apps, although this is uncommon.

### Google Apps Script release notes \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- Source ID: `site-docs-root`
- Final score: 143
- Re-rank relevance: N/A

Evidence snippets:
- Added the client-side HTML-service method google.script.host.editor.focus() , which allows scripts to switch browser focus from the dialog or sidebar to the Google Docs, Sheets, or Forms editor.
- May 13, 2013 Feature The script editor is now available within Google Docs and the Google Forms editor, and both Docs and Forms can now be containers for scripts.
- For container-bound scripts : If someone outside the container owner's organization creates or edits a container-bound script project, the container owner receives an email notification.
- This allows scripts to specify whether a dialog in Google Docs, Forms, or the new version of Sheets should prevent the user from interacting with anything other than the dialog.

### Extend Google Docs \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/guides/docs](https://developers.google.com/apps-script/guides/docs)
- Source ID: `site-docs-root`
- Final score: 126
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Triggers Scripts that are bound to a Google Doc can use a simple trigger to respond to the document's onOpen event , which occurs whenever a user who has edit access to the document opens it in Docs.
- For scripts created inside a document (container-bound), use DocumentApp.getActiveDocument and Document.getActiveTab .
- To create a container-bound script from within Docs, click Extensions Apps Script .
- The basics Apps Script can interact with Docs in two broad ways: any script can create or modify a document if the script's user has appropriate permissions for the document, and a script can also be bound to a document, which gives the script special abilities to alter the user interface or respond when the document is opened.

