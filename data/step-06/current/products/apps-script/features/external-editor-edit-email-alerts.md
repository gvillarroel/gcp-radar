---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:29:46.659Z"
product_name: "Apps Script"
product_slug: "apps-script"
feature_name: "External editor edit email alerts"
feature_slug: "external-editor-edit-email-alerts"
latest_feature_date: "2022-02-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/apps-script/releases"
  - "https://developers.google.com/apps-script/api/reference/rest/v1/projects"
  - "https://developers.google.com/apps-script/guides/triggers/installable"
keywords:
  - "notifies"
  - "alerts"
  - "external"
  - "email"
  - "edit"
  - "project"
  - "editor"
  - "script"
---

# External editor edit email alerts

Product: Apps Script
Coverage: MEDIUM

## Step 02 Summary

Notifies script project owners by email when users outside the owner's organization edit container-bound or standalone scripts in the new IDE.

## Extended Definition

Notifies script project owners by email when users outside the owner's organization edit container-bound or standalone scripts in the new IDE.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- [https://developers.google.com/apps-script/api/reference/rest/v1/projects](https://developers.google.com/apps-script/api/reference/rest/v1/projects)
- [https://developers.google.com/apps-script/guides/triggers/installable](https://developers.google.com/apps-script/guides/triggers/installable)

## Supporting Pages

### Google Apps Script release notes \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- Source ID: `site-docs-root`
- Final score: 156
- Re-rank relevance: N/A

Evidence snippets:
- February 14, 2022 Feature Owners receive email alerts when someone outside the owner's organization edits a script project in the new integrated development environment (IDE).
- Along with a completely new interface, the following features have been updated: The editor now has a collapsible left sidebar to navigate to the Apps Script project overview, settings, executions, and triggers.
- We've updated the Publish script editor menu item to more accurately represent the various kinds of deployments a project can have, such as add-on, web app, or API executable deployments.
- For container-bound scripts : If someone outside the container owner's organization creates or edits a container-bound script project, the container owner receives an email notification.

### REST Resource: projects \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/api/reference/rest/v1/projects](https://developers.google.com/apps-script/api/reference/rest/v1/projects)
- Source ID: `site-api-reference`
- Final score: 122
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Methods create Creates a new, empty script project with no script files and a base manifest file. get Gets a script project's metadata. getContent Gets the content of the script project, including the code source and metadata for each script file. getMetrics Get metrics data for scripts, such as number of executions and active users. updateContent Updates the content of the specified script project.
- JSON representation { "scriptId" : string , "title" : string , "parentId" : string , "createTime" : string , "updateTime" : string , "creator" : { object ( User ) } , "lastModifyUser" : { object ( User ) } } Fields scriptId string The script project's Drive ID. title string The title for the project. parentId string The parent's Drive ID that the script will be attached to.
- Page Summary outlined flag The Project resource represents a script project and includes fields like scriptId , title , parentId , createTime , updateTime , creator , and lastModifyUser .
- Home Google Workspace Apps Script Reference Send feedback REST Resource: projects Stay organized with collections Save and categorize content based on your preferences.

### Installable Triggers \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/guides/triggers/installable](https://developers.google.com/apps-script/guides/triggers/installable)
- Source ID: `site-docs-reference`
- Final score: 118
- Re-rank relevance: N/A

Evidence snippets:
- Manage triggers manually To manually create an installable trigger in the script editor, follow these steps: Open your Apps Script project.
- Installable triggers can be managed manually through the script editor or programmatically using the Script service.
- To troubleshoot errors in your script, click the link in the notification email to open your script project.
- If you have previously stored the ID of a trigger, delete it by passing the ID as an argument to the following function. triggers/triggers.gs View on GitHub / Deletes a trigger. @param {string} triggerId The Trigger ID. @see https://developers.google.com/apps-script/guides/triggers/installable / function deleteTrigger ( triggerId ) { // Loop over all triggers. const allTriggers = ScriptApp . getProjectTriggers (); for ( let index = 0 ; index < allTriggers . length ; index ++ ) { // If the current trigger is the correct one, delete it. if ( allTriggers [ index ]. getUniqueId () === triggerId ) { ScriptApp . deleteTrigger ( allTriggers [ index ]); break ; } } } Before creating a trigger, verify that the associated function has all the necessary OAuth permissions .

