---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:29:46.656Z"
product_name: "Apps Script"
product_slug: "apps-script"
feature_name: "Alphabetical file sorting in Apps Script editor"
feature_slug: "alphabetical-file-sorting-in-apps-script-editor"
latest_feature_date: "2022-04-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/apps-script/releases"
  - "https://developers.google.com/apps-script/guides/triggers/installable"
  - "https://developers.google.com/apps-script/advanced/admin-sdk-groups-settings"
keywords:
  - "alphabetical"
  - "sorting"
  - "editor"
  - "file"
  - "script"
  - "adds"
  - "apps"
  - "in"
---

# Alphabetical file sorting in Apps Script editor

Product: Apps Script
Coverage: MEDIUM

## Step 02 Summary

Adds support for sorting files alphabetically in the new Apps Script editor.

## Extended Definition

Adds support for sorting files alphabetically in the new Apps Script editor.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- [https://developers.google.com/apps-script/guides/triggers/installable](https://developers.google.com/apps-script/guides/triggers/installable)
- [https://developers.google.com/apps-script/advanced/admin-sdk-groups-settings](https://developers.google.com/apps-script/advanced/admin-sdk-groups-settings)

## Supporting Pages

### Google Apps Script release notes \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- Source ID: `site-docs-root`
- Final score: 186
- Re-rank relevance: N/A

Evidence snippets:
- Now, the order of files in the Apps Script editor doesn't matter.
- FileIterator.getContinuationToken() FolderIterator.getContinuationToken() DriveApp.continueFileIterator(continuationToken) DriveApp.continueFolderIterator(continuationToken) Deprecated The UiApp widgets Hyperlink , InlineHyperlink , LayoutPanel , and RichTextArea have now been disabled, as announced on March 13, 2013 and documented in the Apps Script sunset schedule .
- Along with a completely new interface, the following features have been updated: The editor now has a collapsible left sidebar to navigate to the Apps Script project overview, settings, executions, and triggers.
- April 13, 2022 Feature You can now perform the following actions in the new Apps Script integrated development environment (IDE): Create test deployments for Editor Add-ons .

### Installable Triggers \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/guides/triggers/installable](https://developers.google.com/apps-script/guides/triggers/installable)
- Source ID: `site-docs-reference`
- Final score: 170
- Re-rank relevance: N/A

Evidence snippets:
- Manage triggers manually To manually create an installable trigger in the script editor, follow these steps: Open your Apps Script project.
- If you have previously stored the ID of a trigger, delete it by passing the ID as an argument to the following function. triggers/triggers.gs View on GitHub / Deletes a trigger. @param {string} triggerId The Trigger ID. @see https://developers.google.com/apps-script/guides/triggers/installable / function deleteTrigger ( triggerId ) { // Loop over all triggers. const allTriggers = ScriptApp . getProjectTriggers (); for ( let index = 0 ; index < allTriggers . length ; index ++ ) { // If the current trigger is the correct one, delete it. if ( allTriggers [ index ]. getUniqueId () === triggerId ) { ScriptApp . deleteTrigger ( allTriggers [ index ]); break ; } } } Before creating a trigger, verify that the associated function has all the necessary OAuth permissions .
- To create this trigger from a standalone script, replace SpreadsheetApp.getActive() with a call to SpreadsheetApp.openById(id) . triggers/triggers.gs View on GitHub / Creates a trigger for when a spreadsheet opens. @see https://developers.google.com/apps-script/guides/triggers/installable / function createSpreadsheetOpenTrigger () { const ss = SpreadsheetApp . getActive (); ScriptApp . newTrigger ( "myFunction" ). forSpreadsheet ( ss ). onOpen (). create (); } To programmatically modify an existing installable trigger, you must delete it and create a new one.
- Time-driven triggers let scripts execute at a particular time or on a recurring interval, as frequently as every minute or as infrequently as once per month. (An add-on can use a time-driven trigger once per hour at most.) The time might be slightly randomized—for example, if you create a recurring 9 AM trigger, Apps Script chooses a time between 9 AM and 10 AM, then keeps that timing consistent from day to day so that 24 hours elapse before the trigger fires again.

### Admin SDK Groups Settings Service \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/advanced/admin-sdk-groups-settings](https://developers.google.com/apps-script/advanced/admin-sdk-groups-settings)
- Source ID: `site-docs-reference`
- Final score: 166
- Re-rank relevance: N/A

Evidence snippets:
- Page Summary outlined flag The Admin SDK Groups Settings service in Apps Script allows Google Workspace administrators to manage group settings using the Admin SDK Groups Settings API.
- Home Google Workspace Apps Script Reference Send feedback Admin SDK Groups Settings Service Stay organized with collections Save and categorize content based on your preferences.
- Like all advanced services in Apps Script, the Admin SDK Groups Settings service uses the same objects, methods, and parameters as the public API.
- The Admin SDK Groups Settings service lets you use the Admin SDK's Groups Settings API in Google Apps Script.

