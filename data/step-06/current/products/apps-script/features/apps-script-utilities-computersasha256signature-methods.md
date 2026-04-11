---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:29:46.715Z"
product_name: "Apps Script"
product_slug: "apps-script"
feature_name: "Apps Script Utilities computeRsaSha256Signature methods"
feature_slug: "apps-script-utilities-computersasha256signature-methods"
latest_feature_date: "2015-06-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/apps-script/releases"
  - "https://developers.google.com/apps-script/api/concepts"
  - "https://developers.google.com/apps-script/api/reference/rest"
keywords:
  - "computersasha256signature"
  - "variants"
  - "utilities"
  - "methods"
  - "script"
  - "added"
  - "apps"
  - "the"
---

# Apps Script Utilities computeRsaSha256Signature methods

Product: Apps Script
Coverage: MEDIUM

## Step 02 Summary

The Utilities service added computeRsaSha256Signature variants to sign strings with the RSA SHA-256 algorithm.

## Extended Definition

The Utilities service added computeRsaSha256Signature variants to sign strings with the RSA SHA-256 algorithm.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- [https://developers.google.com/apps-script/api/concepts](https://developers.google.com/apps-script/api/concepts)
- [https://developers.google.com/apps-script/api/reference/rest](https://developers.google.com/apps-script/api/reference/rest)

## Supporting Pages

### Google Apps Script release notes \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- Source ID: `site-docs-root`
- Final score: 176
- Re-rank relevance: N/A

Evidence snippets:
- August 04, 2015 Feature Added the following methods to the Spreadsheet service to let scripts control "warning-based" protection for spreadsheet ranges (which means that every user can edit data in the area, except editing prompts the user to confirm the edit): Protection.isWarningOnly() Protection.setWarningOnly(warningOnly) June 30, 2015 Feature Added two variations of the method computeRsaSha256Signature to the Utilities global object to let scripts sign a string using the RSA SHA-256 algorithm.
- The Card service has been extended with the following classes and methods that provide new widgets and event responses: CalendarEventActionResponse CalendarEventActionResponseBuilder DatePicker DateTimePicker DisplayStyle DriveItemsSelectedActionResponse DriveItemsSelectedActionResponseBuilder FixedFooter SwitchControlType TimePicker CardBuilder.setDisplayStyle(displayStyle) CardBuilder.setFixedFooter(fixedFooter) CardBuilder.setPeekCardHeader(peekCardHeader) CardService.newCalendarEventActionResponseBuilder() CardService.newDatePicker() CardService.newDateTimePicker() CardService.newDriveItemsSelectedActionResponseBuilder() CardService.newFixedFooter() CardService.newTimePicker() Switch.setControlType(controlType) The Conference Data service has been added to Apps Script.
- May 20, 2015 Deprecated Deprecated the following OAuth class and methods in favor of OAuth libraries : + OAuthConfig + UrlFetchApp.addOAuthService(serviceName) + UrlFetchApp.removeOAuthService(serviceName) Feature Added the following enum and methods to the Script service to allow scripts to identify their installation source and project keys: InstallationSource ScriptApp.getInstallationSource() ScriptApp.getProjectKey() Added several new web-safe base-64 encoding and decoding methods: Utilities.base64DecodeWebSafe(String) Utilities.base64DecodeWebSafe(String, Charset) Utilities.base64EncodeWebSafe(Byte) Utilities.base64EncodeWebSafe(String) Utilities.base64EncodeWebSafe(String, Charset) April 23, 2015 Announcement Add-ons are now out of developer preview.
- The following new data source type has been added: LOOKER The following new classes have been added: LookerDataSourceSpec LookerDataSourceSpecBuilder The following new methods have been added to existing classes: DataSourceSpec.asLooker() DataSourceSpecBuilder.asLooker() August 15, 2024 Feature Generally Available : You can now create and organize tabs in Google Docs documents using Apps Script's Document service.

### Introduction \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/api/concepts](https://developers.google.com/apps-script/api/concepts)
- Source ID: `site-docs-root`
- Final score: 134
- Re-rank relevance: N/A

Evidence snippets:
- Use this resource to monitor script executions initiated using the scripts.run method. scripts — The endpoint that provides methods to remotely execute Apps Script functions.
- You can programmatically create, modify, and deploy Google Apps Script projects, and execute Apps Script functions remotely—actions that otherwise require using the Apps Script editor or its UI.
- Overview of the API The Apps Script API is divided into several resources, each with a specific purpose and set of requests you can make.
- Page Summary outlined flag The Google Apps Script API allows programmatically creating, modifying, and deploying Apps Script projects.

### Apps Script API \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/api/reference/rest](https://developers.google.com/apps-script/api/reference/rest)
- Source ID: `site-api-reference`
- Final score: 132
- Re-rank relevance: N/A

Evidence snippets:
- REST Resource: v1.projects.deployments Methods create POST /v1/projects/{scriptId}/deployments Creates a deployment of an Apps Script project. delete DELETE /v1/projects/{scriptId}/deployments/{deploymentId} Deletes a deployment of an Apps Script project. get GET /v1/projects/{scriptId}/deployments/{deploymentId} Gets a deployment of an Apps Script project. list GET /v1/projects/{scriptId}/deployments Lists the deployments of an Apps Script project. update PUT /v1/projects/{deploymentConfig.scriptId}/deployments/{deploymentId} Updates a deployment of an Apps Script project.
- REST Resource: v1.projects Methods create POST /v1/projects Creates a new, empty script project with no script files and a base manifest file. get GET /v1/projects/{scriptId} Gets a script project's metadata. getContent GET /v1/projects/{scriptId}/content Gets the content of the script project, including the code source and metadata for each script file. getMetrics GET /v1/projects/{scriptId}/metrics Get metrics data for scripts, such as number of executions and active users. updateContent PUT /v1/projects/{scriptId}/content Updates the content of the specified script project.
- This service has the following service endpoint and all URIs below are relative to this service endpoint: https://script.googleapis.com REST Resource: v1.processes Methods list GET /v1/processes List information about processes made by or on behalf of a user, such as process type and current status. listScriptProcesses GET /v1/processes:listScriptProcesses List information about a script's executed processes, such as process type and current status.
- REST Resource: v1.projects.versions Methods create POST /v1/projects/{scriptId}/versions Creates a new immutable version using the current code, with a unique version number. get GET /v1/projects/{scriptId}/versions/{versionNumber} Gets a version of a script project. list GET /v1/projects/{scriptId}/versions List the versions of a script project.

