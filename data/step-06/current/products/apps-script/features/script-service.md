---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:53:34.663Z"
product_name: "Apps Script"
product_slug: "apps-script"
feature_name: "Script Service"
feature_slug: "script-service"
latest_feature_date: "2012-04-04"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/apps-script/releases"
  - "https://developers.google.com/apps-script/guides/triggers/installable"
  - "https://developers.google.com/apps-script/guides/collaborating"
keywords:
  - "script"
  - "was"
  - "launched"
  - "programmatically"
  - "setting"
  - "triggers"
  - "managing"
  - "publishing"
---

# Script Service

Product: Apps Script
Coverage: MEDIUM

## Step 02 Summary

The Script service was launched for programmatically setting triggers and managing script publishing as a service.

## Extended Definition

The Script service was launched for programmatically setting triggers and managing script publishing as a service.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- [https://developers.google.com/apps-script/guides/triggers/installable](https://developers.google.com/apps-script/guides/triggers/installable)
- [https://developers.google.com/apps-script/guides/collaborating](https://developers.google.com/apps-script/guides/collaborating)

## Supporting Pages

### Google Apps Script release notes \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- Source ID: `site-docs-root`
- Final score: 107
- Re-rank relevance: N/A

Evidence snippets:
- Feature Launched the Script service in response to this feature request , which allows developers to programmatically set triggers and manage the publishing of scripts as a service.
- Along with a completely new interface, the following features have been updated: The editor now has a collapsible left sidebar to navigate to the Apps Script project overview, settings, executions, and triggers.
- We've also updated the Apps Script code samples to use the Advanced Chat Service in the following Chat API developer guides: Authenticate as an app Authenticate as a user Try it - Respond to Incidents September 26, 2023 Change The email address that sends notifications about errors in triggers has been updated from apps-scripts-notifications@google.com to noreply-apps-scripts-notifications@google.com .
- Made some modifications to the calculation of CPU time for scripts running on triggers, so that time spent waiting on certain processes is not counted toward that limi April 16, 2012 Fixed Fixed an issue in the Script Editor where the debugger would not terminate after executing the last statement of a script.

### Installable Triggers \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/guides/triggers/installable](https://developers.google.com/apps-script/guides/triggers/installable)
- Source ID: `site-docs-reference`
- Final score: 75
- Re-rank relevance: N/A

Evidence snippets:
- To create this trigger from a standalone script, replace SpreadsheetApp.getActive() with a call to SpreadsheetApp.openById(id) . triggers/triggers.gs View on GitHub / Creates a trigger for when a spreadsheet opens. @see https://developers.google.com/apps-script/guides/triggers/installable / function createSpreadsheetOpenTrigger () { const ss = SpreadsheetApp . getActive (); ScriptApp . newTrigger ( "myFunction" ). forSpreadsheet ( ss ). onOpen (). create (); } To programmatically modify an existing installable trigger, you must delete it and create a new one.
- Installable triggers can be managed manually through the script editor or programmatically using the Script service.
- Manage triggers programmatically Create and delete triggers programmatically with the Script service .
- If you have previously stored the ID of a trigger, delete it by passing the ID as an argument to the following function. triggers/triggers.gs View on GitHub / Deletes a trigger. @param {string} triggerId The Trigger ID. @see https://developers.google.com/apps-script/guides/triggers/installable / function deleteTrigger ( triggerId ) { // Loop over all triggers. const allTriggers = ScriptApp . getProjectTriggers (); for ( let index = 0 ; index < allTriggers . length ; index ++ ) { // If the current trigger is the correct one, delete it. if ( allTriggers [ index ]. getUniqueId () === triggerId ) { ScriptApp . deleteTrigger ( allTriggers [ index ]); break ; } } } Before creating a trigger, verify that the associated function has all the necessary OAuth permissions .

### Collaborate with other developers \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/guides/collaborating](https://developers.google.com/apps-script/guides/collaborating)
- Source ID: `site-docs-root`
- Final score: 59
- Re-rank relevance: N/A

Evidence snippets:
- If you need to have a consistent trigger setup for all collaborators, use the Script service to create triggers programmatically, at run time.
- For more information, see Managing Triggers Programmatically .
- Collaboration basics In order to collaborate on a project, you and your collaborators must all have editor access to the Apps Script project file (and its container, if it is a bound script ).
- To deploy scripts as web apps or executables for the Apps Script API , the account that creates the deployment must belong to the same domain as the shared drive that the script resides in.

