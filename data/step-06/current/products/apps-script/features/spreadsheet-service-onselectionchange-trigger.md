---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:29:46.678Z"
product_name: "Apps Script"
product_slug: "apps-script"
feature_name: "Spreadsheet service onSelectionChange trigger"
feature_slug: "spreadsheet-service-onselectionchange-trigger"
latest_feature_date: "2020-04-22"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/apps-script/guides/triggers"
  - "https://developers.google.com/apps-script/guides/triggers/installable"
  - "https://developers.google.com/apps-script/releases"
keywords:
  - "onselectionchange"
  - "simple"
  - "fires"
  - "which"
  - "trigger"
  - "spreadsheet"
  - "adds"
  - "the"
---

# Spreadsheet service onSelectionChange trigger

Product: Apps Script
Coverage: MEDIUM

## Step 02 Summary

Adds the simple trigger onSelectionChange(e), which fires when a spreadsheet selection changes.

## Extended Definition

Adds the simple trigger onSelectionChange(e), which fires when a spreadsheet selection changes.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/apps-script/guides/triggers](https://developers.google.com/apps-script/guides/triggers)
- [https://developers.google.com/apps-script/guides/triggers/installable](https://developers.google.com/apps-script/guides/triggers/installable)
- [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)

## Supporting Pages

### Simple Triggers \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/guides/triggers](https://developers.google.com/apps-script/guides/triggers)
- Source ID: `site-docs-reference`
- Final score: 162
- Re-rank relevance: N/A

Evidence snippets:
- Getting started To use a simple trigger, create a function that uses one of these reserved function names: onOpen(e) runs when a user opens a spreadsheet, document, presentation, or form that the user has permission to edit. onInstall(e) runs when a user installs an Editor add-on from within Google Docs, Sheets, Slides, or Forms. onEdit(e) runs when a user changes a value in a spreadsheet. onSelectionChange(e) runs when a user changes the selection in a spreadsheet. doGet(e) runs when a user visits a web app or a program sends an HTTP GET request to a web app. doPost(e) runs when a program sends an HTTP POST request to a web app.
- In the following example, if an empty cell is selected, the onSelectionChange(e) function sets the cell's background to red. triggers/triggers.gs View on GitHub / The event handler triggered when the selection changes in the spreadsheet. @param {Event} e The onSelectionChange event. @see https://developers.google.com/apps-script/guides/triggers#onselectionchangee / function onSelectionChange ( e ) { // Set background to red if a single empty cell is selected. const range = e . range ; if ( range . getNumRows () === 1 && range . getNumColumns () === 1 && range . getCell ( 1 , 1 ). getValue () === "" ) { range . setBackground ( "red" ); } } doGet(e) and doPost(e) The doGet(e) trigger runs automatically when a user visits a web app or a program sends an HTTP GET request to a web app. doPost(e) runs when a program sends an HTTP POST request to a web app.
- For example, the onEdit(e) function below sets a comment on the cell that records the last time it was edited. triggers/triggers.gs View on GitHub / The event handler triggered when editing the spreadsheet. @param {Event} e The onEdit event. @see https://developers.google.com/apps-script/guides/triggers#onedite / function onEdit ( e ) { // Set a comment on the edited cell to indicate when it was changed. const range = e . range ; range . setNote ( Last modified: ${ new Date () } ); } The onEdit() trigger only queues up to 2 trigger events. onSelectionChange(e) The onSelectionChange(e) trigger runs automatically when a user changes the selection in a spreadsheet.
- Event Simple triggers Installable triggers Open Sheets Slides Forms Docs function onOpen(e) Sheets Forms Docs Edit Sheets function onEdit(e) Sheets Selection change Sheets function onSelectionChange(e) Install Sheets Slides Forms Docs function onInstall(e) Change Sheets Form submit Sheets Forms Time-driven (clock) Sheets Slides Forms Docs Standalone Get Standalone function doGet(e) Post Standalone function doPost(e) The open event for Google Forms does not occur when a user opens a form to respond, but rather when an editor opens the form to modify it.

### Installable Triggers \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/guides/triggers/installable](https://developers.google.com/apps-script/guides/triggers/installable)
- Source ID: `site-docs-reference`
- Final score: 142
- Re-rank relevance: N/A

Evidence snippets:
- For example, the installable open trigger for Google Sheets activates whenever the spreadsheet is opened by any user who has edit access, just like the simple onOpen() trigger.
- For both simple and installable triggers, Apps Script passes the triggered function an event object that contains information about the context in which the event occurred.
- Unlike for a simple onOpen() trigger, the script for the installable trigger doesn't need to be bound to the spreadsheet.
- Time-driven triggers let scripts execute at a particular time or on a recurring interval, as frequently as every minute or as infrequently as once per month. (An add-on can use a time-driven trigger once per hour at most.) The time might be slightly randomized—for example, if you create a recurring 9 AM trigger, Apps Script chooses a time between 9 AM and 10 AM, then keeps that timing consistent from day to day so that 24 hours elapse before the trigger fires again.

### Google Apps Script release notes \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- Source ID: `site-docs-root`
- Final score: 140
- Re-rank relevance: N/A

Evidence snippets:
- February 18, 2014 Fixed Issue 3522 : In the new version of Sheets, the SpreadsheetApp method getActiveSheet() now returns the correct sheet if called from a simple onEdit() trigger.
- Change When an add-on is installed from the store, the onInstall() simple trigger is now passed an event parameter , e , which includes an authMode property.
- Issue 3496 : In the new version of Sheets, the SpreadsheetApp method getActiveRange() now returns the correct sheet if called from a simple onEdit() trigger.
- The onSelectionChange(e) trigger runs automatically when a user changes the selection in a spreadsheet.

