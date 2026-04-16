---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:53:34.660Z"
product_name: "Apps Script"
product_slug: "apps-script"
feature_name: "Web app deployment versioning and execute-as-user"
feature_slug: "web-app-deployment-versioning-and-execute-as-user"
latest_feature_date: "2012-06-27"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/apps-script/api/reference/rest/v1/projects.deployments"
  - "https://developers.google.com/apps-script/releases"
  - "https://developers.google.com/apps-script/api/reference/rest/v1/scripts/run"
keywords:
  - "web"
  - "app"
  - "deployment"
  - "versioning"
  - "execute"
  - "user"
  - "apps"
  - "script"
---

# Web app deployment versioning and execute-as-user

Product: Apps Script
Coverage: MEDIUM

## Step 02 Summary

Apps Script web apps can now be published with versioning and configured to execute as the accessing user.

## Extended Definition

Apps Script web apps can now be published with versioning and configured to execute as the accessing user.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/apps-script/api/reference/rest/v1/projects.deployments](https://developers.google.com/apps-script/api/reference/rest/v1/projects.deployments)
- [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- [https://developers.google.com/apps-script/api/reference/rest/v1/scripts/run](https://developers.google.com/apps-script/api/reference/rest/v1/scripts/run)

## Supporting Pages

### REST Resource: projects.deployments \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/api/reference/rest/v1/projects.deployments](https://developers.google.com/apps-script/api/reference/rest/v1/projects.deployments)
- Source ID: `site-api-reference`
- Final score: 122
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Resource: Deployment JSON representation DeploymentConfig JSON representation EntryPoint JSON representation EntryPointType WebAppEntryPoint JSON representation WebAppConfig JSON representation Access ExecuteAs ExecutionApiEntryPoint JSON representation ExecutionApiConfig JSON representation AddOnEntryPoint JSON representation AddOnType Methods Resource: Deployment Representation of a single script deployment.
- Methods create Creates a deployment of an Apps Script project. delete Deletes a deployment of an Apps Script project. get Gets a deployment of an Apps Script project. list Lists the deployments of an Apps Script project. update Updates a deployment of an Apps Script project.
- Home Google Workspace Apps Script Reference Send feedback REST Resource: projects.deployments Stay organized with collections Save and categorize content based on your preferences.
- JSON representation { "scriptId" : string , "versionNumber" : integer , "manifestFileName" : string , "description" : string } Fields scriptId string The script project's Drive ID. versionNumber integer The version number on which this deployment is based. manifestFileName string The manifest file name for this deployment. description string The description for this deployment.

### Method: scripts.run \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/api/reference/rest/v1/scripts/run](https://developers.google.com/apps-script/api/reference/rest/v1/scripts/run)
- Source ID: `site-api-reference`
- Final score: 96
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Authorization Scopes Requires one of the following OAuth scopes: https://apps-apis.google.com/a/feeds https://apps-apis.google.com/a/feeds/alias/ https://apps-apis.google.com/a/feeds/groups/ https://mail.google.com/ https://sites.google.com/feeds https://www.google.com/calendar/feeds https://www.google.com/m8/feeds https://www.googleapis.com/auth/admin.directory.group https://www.googleapis.com/auth/admin.directory.user https://www.googleapis.com/auth/documents https://www.googleapis.com/auth/documents.currentonly https://www.googleapis.com/auth/drive https://www.googleapis.com/auth/dynamiccreatives https://www.googleapis.com/auth/forms https://www.googleapis.com/auth/forms.currentonly https://www.googleapis.com/auth/groups https://www.googleapis.com/auth/script.cpanel https://www.googleapis.com/auth/script.external request https://www.googleapis.com/auth/script.scriptapp https://www.googleapis.com/auth/script.send mail https://www.googleapis.com/auth/script.storage https://www.googleapis.com/auth/script.webapp.deploy https://www.googleapis.com/auth/spreadsheets https://www.googleapis.com/auth/spreadsheets.currentonly https://www.googleapis.com/auth/sqlservice https://www.googleapis.com/auth/userinfo.email For more information, see the OAuth 2.0 Overview .
- Optional. devMode boolean If true and the user is an owner of the script, the script runs at the most recently saved version rather than the version deployed for use with the Apps Script API.
- Page Summary outlined flag The scripts.run method in the Apps Script API allows you to execute a function within a deployed Apps Script project.
- Request body The request body contains data with the following structure: JSON representation { "function" : string , "parameters" : [ value ] , "sessionState" : string , "devMode" : boolean } Fields function string The name of the function to execute in the given script.

### Google Apps Script release notes \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- Source ID: `site-docs-root`
- Final score: 93
- Re-rank relevance: N/A

Evidence snippets:
- Added the ability to publish web apps with versioning and with the option to have them execute as the user accessing the app.
- Feature The Spreadsheet service has been extended with the following new classes and methods to support text styles and Rich Text cell formatting: RichTextValue RichTextValueBuilder TextStyle TextStyleBuilder Range.getRichTextValue() Range.getRichTextValues() Range.getTextStyle() Range.getTextStyles() Range.setRichTextValue(value) Range.setRichTextValues(values) Range.setTextStyle(style) Range.setTextStyles(styles) SpreadsheetApp.newRichTextValue() SpreadsheetApp.newTextStyle() The Data Studio service has been extended with the following new classes and methods that define and support authentication types for community connectors: GetAuthTypeResponse AuthType CommunityConnector,newAuthTypeResponse() January 04, 2019 Feature The Slides service has been extended with the following new classes and methods that support slide linking and text box insertion: SlideLinkingMode [ Layout.insertTextBox(text) }(https://developers.google.com/apps-script/reference/slides/layout#inserttextboxtext) Layout.insertTextBox(text, left, top, width, height) Master.insertTextBox(text) Master.insertTextBox(text, left, top, width, height) Page.insertTextBox(text) Page.insertTextBox(text, left, top, width, height) Presentation.appendSlide(slide, linkingMode) Presentation.insertSlide(insertionIndex, slide, linkingMode) Slide.getSlideLinkingMode() Slide.getSourcePresentationId() Slide.getSourceSlideObjectId() Slide.insertTextBox(text) Slide.insertTextBox(text, left, top, width, height) Slide.refreshSlide() Slide.unlink() The Data Studio service has been extended with the following new classes and methods that error displays: DebugError UserError CommunityConnector.newDebugError() CommunityConnector.newUserError() December 13, 2018 Deprecated The Fusion Tables advanced service has been deprecated and will shutdown fully on December 3rd, 2019.
- We've also updated the Apps Script code samples to use the Advanced Chat Service in the following Chat API developer guides: Authenticate as an app Authenticate as a user Try it - Respond to Incidents September 26, 2023 Change The email address that sends notifications about errors in triggers has been updated from apps-scripts-notifications@google.com to noreply-apps-scripts-notifications@google.com .
- July 08, 2022 Deprecated Apps Script has deprecated the following methods: getChatThreads() getChatThreads(start, max) These methods will become unavailable later this year once Google switches all users from Classic Hangouts to Google Chat.

