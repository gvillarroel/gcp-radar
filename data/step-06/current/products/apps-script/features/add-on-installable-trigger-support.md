---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:53:34.602Z"
product_name: "Apps Script"
product_slug: "apps-script"
feature_name: "Add-on installable trigger support"
feature_slug: "add-on-installable-trigger-support"
latest_feature_date: "2014-09-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/apps-script/guides/triggers/installable"
  - "https://developers.google.com/apps-script/guides/triggers"
  - "https://developers.google.com/apps-script/guides/triggers/events"
keywords:
  - "add"
  - "installable"
  - "trigger"
  - "sheets"
  - "docs"
  - "ons"
  - "can"
  - "use"
---

# Add-on installable trigger support

Product: Apps Script
Coverage: MEDIUM

## Step 02 Summary

Google Sheets and Docs add-ons can use most installable triggers.

## Extended Definition

Google Sheets and Docs add-ons can use most installable triggers.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/apps-script/guides/triggers/installable](https://developers.google.com/apps-script/guides/triggers/installable)
- [https://developers.google.com/apps-script/guides/triggers](https://developers.google.com/apps-script/guides/triggers)
- [https://developers.google.com/apps-script/guides/triggers/events](https://developers.google.com/apps-script/guides/triggers/events)

## Supporting Pages

### Installable Triggers \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/guides/triggers/installable](https://developers.google.com/apps-script/guides/triggers/installable)
- Source ID: `site-docs-reference`
- Final score: 141
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For example, a standalone script can programmatically create an installable trigger for an arbitrary Google Sheets file by calling TriggerBuilder.forSpreadsheet(key) and passing in the spreadsheet's ID.
- For example, the installable open trigger for Google Sheets activates whenever the spreadsheet is opened by any user who has edit access, just like the simple onOpen() trigger.
- If you have previously stored the ID of a trigger, delete it by passing the ID as an argument to the following function. triggers/triggers.gs View on GitHub / Deletes a trigger. @param {string} triggerId The Trigger ID. @see https://developers.google.com/apps-script/guides/triggers/installable / function deleteTrigger ( triggerId ) { // Loop over all triggers. const allTriggers = ScriptApp . getProjectTriggers (); for ( let index = 0 ; index < allTriggers . length ; index ++ ) { // If the current trigger is the correct one, delete it. if ( allTriggers [ index ]. getUniqueId () === triggerId ) { ScriptApp . deleteTrigger ( allTriggers [ index ]); break ; } } } Before creating a trigger, verify that the associated function has all the necessary OAuth permissions .
- To create this trigger from a standalone script, replace SpreadsheetApp.getActive() with a call to SpreadsheetApp.openById(id) . triggers/triggers.gs View on GitHub / Creates a trigger for when a spreadsheet opens. @see https://developers.google.com/apps-script/guides/triggers/installable / function createSpreadsheetOpenTrigger () { const ss = SpreadsheetApp . getActive (); ScriptApp . newTrigger ( "myFunction" ). forSpreadsheet ( ss ). onOpen (). create (); } To programmatically modify an existing installable trigger, you must delete it and create a new one.

### Simple Triggers \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/guides/triggers](https://developers.google.com/apps-script/guides/triggers)
- Source ID: `site-docs-reference`
- Final score: 133
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Event Simple triggers Installable triggers Open Sheets Slides Forms Docs function onOpen(e) Sheets Forms Docs Edit Sheets function onEdit(e) Sheets Selection change Sheets function onSelectionChange(e) Install Sheets Slides Forms Docs function onInstall(e) Change Sheets Form submit Sheets Forms Time-driven (clock) Sheets Slides Forms Docs Standalone Get Standalone function doGet(e) Post Standalone function doPost(e) The open event for Google Forms does not occur when a user opens a form to respond, but rather when an editor opens the form to modify it.
- For example, Google Sheets, Slides, Forms, and Docs all support simple open triggers, but only Sheets, Docs and Forms support installable open triggers.
- These restrictions don't apply to doGet(e) or doPost(e) . onOpen(e) The onOpen(e) trigger runs automatically when a user opens a spreadsheet, document, presentation, or form that they have permission to edit. (The trigger does not run when responding to a form, only when opening the form to edit it.) onOpen(e) is most commonly used to add custom menu items to Google Sheets, Slides, Docs, or Forms. triggers/triggers.gs View on GitHub / The event handler triggered when opening the spreadsheet. @param {Event} e The onOpen event. @see https://developers.google.com/apps-script/guides/triggers#onopene / function onOpen ( e ) { // Add a custom menu to the spreadsheet.
- Getting started To use a simple trigger, create a function that uses one of these reserved function names: onOpen(e) runs when a user opens a spreadsheet, document, presentation, or form that the user has permission to edit. onInstall(e) runs when a user installs an Editor add-on from within Google Docs, Sheets, Slides, or Forms. onEdit(e) runs when a user changes a value in a spreadsheet. onSelectionChange(e) runs when a user changes the selection in a spreadsheet. doGet(e) runs when a user visits a web app or a program sends an HTTP GET request to a web app. doPost(e) runs when a program sends an HTTP POST request to a web app.

### Event Objects \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/guides/triggers/events](https://developers.google.com/apps-script/guides/triggers/events)
- Source ID: `site-docs-reference`
- Final score: 103
- Re-rank relevance: N/A

Evidence snippets:
- This page details the fields within the event object for various trigger types across different Google services like Sheets, Docs, Slides, Forms, Calendar, and Workspace add-ons.
- For example, the following sample code shows a simple onEdit(e) trigger for a Google Sheets script that uses the event object to determine which cell was edited. function onEdit ( e ){ // Set a comment on the edited cell to indicate when it was changed . var range = e . range ; range . setNote ( 'Last modified: ' + new Date ()); } This page describes the fields in the event object for different types of triggers.
- 4034124084959907503 values Array with values in the same order as they appear in the spreadsheet. [ '2015/05/04 15:00', 'amin@example.com', 'Bob', '27', 'Bill', '28', 'Susan', '25' ] Google Docs events Triggers allow Docs to respond when a user opens a document.
- 10 Form submit ( installable ) Caution: Make sure you use this form submit trigger with SpreadsheetTriggerBuilder . authMode A value from the ScriptApp.AuthMode enum.

