---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:29:46.788Z"
product_name: "Apps Script"
product_slug: "apps-script"
feature_name: "Simple onEdit trigger user email access"
feature_slug: "simple-onedit-trigger-user-email-access"
latest_feature_date: "2013-09-03"
deprecation_date: "2013-09-03"
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/apps-script/releases"
  - "https://developers.google.com/apps-script/guides/triggers"
  - "https://developers.google.com/apps-script/guides/triggers/installable"
keywords:
  - "onedit"
  - "simple"
  - "email"
  - "trigger"
  - "removed"
  - "access"
  - "user"
  - "the"
---

# Simple onEdit trigger user email access

Product: Apps Script
Coverage: MEDIUM

## Step 02 Summary

Removed the ability for simple onEdit() triggers to obtain the script user's email address; deprecated on 2013-09-03.

## Extended Definition

Removed the ability for simple onEdit() triggers to obtain the script user's email address; deprecated on 2013-09-03.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- [https://developers.google.com/apps-script/guides/triggers](https://developers.google.com/apps-script/guides/triggers)
- [https://developers.google.com/apps-script/guides/triggers/installable](https://developers.google.com/apps-script/guides/triggers/installable)

## Supporting Pages

### Google Apps Script release notes \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- Source ID: `site-docs-root`
- Final score: 168
- Re-rank relevance: N/A

Evidence snippets:
- Deprecated Removed the ability to get the user's email address in simple onEdit() triggers .
- Because simple triggers don't request user authentication, this change was important to protect the identity of collaborators who hadn't explicitly granted permission for the script to collect their email address.
- October 21, 2013 Fixed Issue 74 : Simple onEdit() triggers now fire correctly when the user is not signed in to a Google account.
- We've also updated the Apps Script code samples to use the Advanced Chat Service in the following Chat API developer guides: Authenticate as an app Authenticate as a user Try it - Respond to Incidents September 26, 2023 Change The email address that sends notifications about errors in triggers has been updated from apps-scripts-notifications@google.com to noreply-apps-scripts-notifications@google.com .

### Simple Triggers \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/guides/triggers](https://developers.google.com/apps-script/guides/triggers)
- Source ID: `site-docs-reference`
- Final score: 160
- Re-rank relevance: N/A

Evidence snippets:
- Getting started To use a simple trigger, create a function that uses one of these reserved function names: onOpen(e) runs when a user opens a spreadsheet, document, presentation, or form that the user has permission to edit. onInstall(e) runs when a user installs an Editor add-on from within Google Docs, Sheets, Slides, or Forms. onEdit(e) runs when a user changes a value in a spreadsheet. onSelectionChange(e) runs when a user changes the selection in a spreadsheet. doGet(e) runs when a user visits a web app or a program sends an HTTP GET request to a web app. doPost(e) runs when a program sends an HTTP POST request to a web app.
- Event Simple triggers Installable triggers Open Sheets Slides Forms Docs function onOpen(e) Sheets Forms Docs Edit Sheets function onEdit(e) Sheets Selection change Sheets function onSelectionChange(e) Install Sheets Slides Forms Docs function onInstall(e) Change Sheets Form submit Sheets Forms Time-driven (clock) Sheets Slides Forms Docs Standalone Get Standalone function doGet(e) Post Standalone function doPost(e) The open event for Google Forms does not occur when a user opens a form to respond, but rather when an editor opens the form to modify it.
- For example, the onEdit(e) function below sets a comment on the cell that records the last time it was edited. triggers/triggers.gs View on GitHub / The event handler triggered when editing the spreadsheet. @param {Event} e The onEdit event. @see https://developers.google.com/apps-script/guides/triggers#onedite / function onEdit ( e ) { // Set a comment on the edited cell to indicate when it was changed. const range = e . range ; range . setNote ( Last modified: ${ new Date () } ); } The onEdit() trigger only queues up to 2 trigger events. onSelectionChange(e) The onSelectionChange(e) trigger runs automatically when a user changes the selection in a spreadsheet.
- Learn more about authorization . triggers/triggers.gs View on GitHub / The event handler triggered when installing the add-on. @param {Event} e The onInstall event. @see https://developers.google.com/apps-script/guides/triggers#oninstalle / function onInstall ( e ) { onOpen ( e ); } onEdit(e) The onEdit(e) trigger runs automatically when a user changes the value of any cell in a spreadsheet.

### Installable Triggers \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/guides/triggers/installable](https://developers.google.com/apps-script/guides/triggers/installable)
- Source ID: `site-docs-reference`
- Final score: 150
- Re-rank relevance: N/A

Evidence snippets:
- For example, the installable open trigger for Google Sheets activates whenever the spreadsheet is opened by any user who has edit access, just like the simple onOpen() trigger.
- The installable version runs with the authorization of the user who created the trigger, even if another user with edit access opens the spreadsheet.
- For standalone scripts, users need at least view access to the script file for triggers to run properly.
- Installable triggers created by add-ons don't send users these email notices.

