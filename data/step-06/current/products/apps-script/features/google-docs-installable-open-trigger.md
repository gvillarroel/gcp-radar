---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:53:34.602Z"
product_name: "Apps Script"
product_slug: "apps-script"
feature_name: "Google Docs installable open trigger"
feature_slug: "google-docs-installable-open-trigger"
latest_feature_date: "2014-09-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/apps-script/guides/triggers/installable"
  - "https://developers.google.com/apps-script/guides/triggers"
  - "https://developers.google.com/apps-script/releases"
keywords:
  - "docs"
  - "installable"
  - "open"
  - "trigger"
  - "supports"
  - "can"
  - "run"
  - "authorized"
---

# Google Docs installable open trigger

Product: Apps Script
Coverage: MEDIUM

## Step 02 Summary

Google Docs supports an installable open trigger that can run authorized services.

## Extended Definition

Google Docs supports an installable open trigger that can run authorized services.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/apps-script/guides/triggers/installable](https://developers.google.com/apps-script/guides/triggers/installable)
- [https://developers.google.com/apps-script/guides/triggers](https://developers.google.com/apps-script/guides/triggers)
- [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)

## Supporting Pages

### Installable Triggers \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/guides/triggers/installable](https://developers.google.com/apps-script/guides/triggers/installable)
- Source ID: `site-docs-reference`
- Final score: 146
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To create this trigger from a standalone script, replace SpreadsheetApp.getActive() with a call to SpreadsheetApp.openById(id) . triggers/triggers.gs View on GitHub / Creates a trigger for when a spreadsheet opens. @see https://developers.google.com/apps-script/guides/triggers/installable / function createSpreadsheetOpenTrigger () { const ss = SpreadsheetApp . getActive (); ScriptApp . newTrigger ( "myFunction" ). forSpreadsheet ( ss ). onOpen (). create (); } To programmatically modify an existing installable trigger, you must delete it and create a new one.
- Restrictions Even though installable triggers offer more flexibility than simple triggers, they are still subject to several restrictions: They don't run if a file is opened in read-only (view or comment) mode.
- There are several installable triggers for Google Workspace applications: An installable open trigger runs when a user opens a spreadsheet, document, or form that they have permission to edit.
- Event-driven triggers Installable event-driven triggers are conceptually similar to simple triggers like onOpen() , but they can respond to additional events, and they behave differently.

### Simple Triggers \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/guides/triggers](https://developers.google.com/apps-script/guides/triggers)
- Source ID: `site-docs-reference`
- Final score: 134
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Event Simple triggers Installable triggers Open Sheets Slides Forms Docs function onOpen(e) Sheets Forms Docs Edit Sheets function onEdit(e) Sheets Selection change Sheets function onSelectionChange(e) Install Sheets Slides Forms Docs function onInstall(e) Change Sheets Form submit Sheets Forms Time-driven (clock) Sheets Slides Forms Docs Standalone Get Standalone function doGet(e) Post Standalone function doPost(e) The open event for Google Forms does not occur when a user opens a form to respond, but rather when an editor opens the form to modify it.
- For example, Google Sheets, Slides, Forms, and Docs all support simple open triggers, but only Sheets, Docs and Forms support installable open triggers.
- These restrictions don't apply to doGet(e) or doPost(e) . onOpen(e) The onOpen(e) trigger runs automatically when a user opens a spreadsheet, document, presentation, or form that they have permission to edit. (The trigger does not run when responding to a form, only when opening the form to edit it.) onOpen(e) is most commonly used to add custom menu items to Google Sheets, Slides, Docs, or Forms. triggers/triggers.gs View on GitHub / The event handler triggered when opening the spreadsheet. @param {Event} e The onOpen event. @see https://developers.google.com/apps-script/guides/triggers#onopene / function onOpen ( e ) { // Add a custom menu to the spreadsheet.
- Getting started To use a simple trigger, create a function that uses one of these reserved function names: onOpen(e) runs when a user opens a spreadsheet, document, presentation, or form that the user has permission to edit. onInstall(e) runs when a user installs an Editor add-on from within Google Docs, Sheets, Slides, or Forms. onEdit(e) runs when a user changes a value in a spreadsheet. onSelectionChange(e) runs when a user changes the selection in a spreadsheet. doGet(e) runs when a user visits a web app or a program sends an HTTP GET request to a web app. doPost(e) runs when a program sends an HTTP POST request to a web app.

### Google Apps Script release notes \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- Source ID: `site-docs-root`
- Final score: 130
- Re-rank relevance: N/A

Evidence snippets:
- Like the installable open triggers for Sheets and Forms, this trigger is similar to the simple onOpen() trigger, but allows the triggered function to call services that require authorization, if the user has authorized the script ahead of time.
- Added an installable open trigger for Google Docs.
- Add-ons for Google Sheets and Docs can now use most installable triggers , although they still cannot use time-driven triggers (sometimes called clock triggers).
- October 14, 2014 Feature Add-ons for Google Sheets and Docs can now use time-driven installable triggers .

