---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:29:46.763Z"
product_name: "Apps Script"
product_slug: "apps-script"
feature_name: "ScriptApp.AuthorizationStatus"
feature_slug: "scriptapp-authorizationstatus"
latest_feature_date: "2014-09-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/apps-script/releases"
  - "https://developers.google.com/apps-script/api/reference/rest/v1/processes/listScriptProcesses"
  - "https://developers.google.com/apps-script/guides/triggers/events"
keywords:
  - "authorizationstatus"
  - "represent"
  - "scriptapp"
  - "enum"
  - "script"
  - "added"
  - "the"
  - "to"
---

# ScriptApp.AuthorizationStatus

Product: Apps Script
Coverage: MEDIUM

## Step 02 Summary

Added the AuthorizationStatus enum to represent script authorization state values.

## Extended Definition

Added the AuthorizationStatus enum to represent script authorization state values.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- [https://developers.google.com/apps-script/api/reference/rest/v1/processes/listScriptProcesses](https://developers.google.com/apps-script/api/reference/rest/v1/processes/listScriptProcesses)
- [https://developers.google.com/apps-script/guides/triggers/events](https://developers.google.com/apps-script/guides/triggers/events)

## Supporting Pages

### Google Apps Script release notes \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- Source ID: `site-docs-root`
- Final score: 178
- Re-rank relevance: N/A

Evidence snippets:
- May 20, 2015 Deprecated Deprecated the following OAuth class and methods in favor of OAuth libraries : + OAuthConfig + UrlFetchApp.addOAuthService(serviceName) + UrlFetchApp.removeOAuthService(serviceName) Feature Added the following enum and methods to the Script service to allow scripts to identify their installation source and project keys: InstallationSource ScriptApp.getInstallationSource() ScriptApp.getProjectKey() Added several new web-safe base-64 encoding and decoding methods: Utilities.base64DecodeWebSafe(String) Utilities.base64DecodeWebSafe(String, Charset) Utilities.base64EncodeWebSafe(Byte) Utilities.base64EncodeWebSafe(String) Utilities.base64EncodeWebSafe(String, Charset) April 23, 2015 Announcement Add-ons are now out of developer preview.
- Added several new ScriptApp methods, classes, and enums to support installable triggers in add-ons: AuthorizationInfo : An object used to determine whether the user needs to authorize this script to use one or more services, and to provide the URL for an authorization dialog.
- July 17, 2014 Feature Added the value ON CHANGE to the ScriptApp.EventType enum so that Google Sheets change events can be detected correctly.
- Bookmark NamedRange RangeBuilder Document.addBookmark(position) Document.addNamedRange(name, range) Document.getBookmark(id) Document.getBookmarks() Document.getNamedRangeById(id) Document.getNamedRanges() Document.getNamedRanges(name) Document.newPosition(element, offset) Document.newRange() Document.setCursor(position) Document.setSelection(range) Position.insertBookmark() Added the following ScriptApp class and methods, which allow scripts to create state tokens that can be used in callback APIs (like OAuth flows), as well as to retrieve the script's own OAuth 2.0 access token.

### "Method: processes.listScriptProcesses \_|\_ Apps Script \_|\_ Google for\

- URL: [https://developers.google.com/apps-script/api/reference/rest/v1/processes/listScriptProcesses](https://developers.google.com/apps-script/api/reference/rest/v1/processes/listScriptProcesses)
- Source ID: `site-api-reference`
- Final score: 150
- Re-rank relevance: N/A

Evidence snippets:
- JSON representation { "deploymentId" : string , "functionName" : string , "startTime" : string , "endTime" : string , "types" : [ enum ( ProcessType ) ] , "statuses" : [ enum ( ProcessStatus ) ] , "userAccessLevels" : [ enum ( UserAccessLevel ) ] } Fields deploymentId string Optional field used to limit returned processes to those originating from projects with a specific deployment ID. functionName string Optional field used to limit returned processes to those originating from a script function with the given function name. startTime string ( Timestamp format) Optional field used to limit returned processes to those that were started on or after the given timestamp.
- Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z" . types[] enum ( ProcessType ) Optional field used to limit returned processes to those having one of the specified process types. statuses[] enum ( ProcessStatus ) Optional field used to limit returned processes to those having one of the specified process statuses. userAccessLevels[] enum ( UserAccessLevel ) Optional field used to limit returned processes to those having one of the specified user access levels.
- Query parameters Parameters scriptId string The script ID of the project whose processes are listed. scriptProcessFilter object ( ListScriptProcessesFilter ) A filter used to limit the list results; only processes matching the filter criteria are returned. pageSize integer The maximum number of returned processes per page of results.
- JSON representation { "processes" : [ { object ( Process ) } ] , "nextPageToken" : string } Fields processes[] object ( Process ) List of processes matching request parameters. nextPageToken string Token for the next page of results.

### Event Objects \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/guides/triggers/events](https://developers.google.com/apps-script/guides/triggers/events)
- Source ID: `site-docs-reference`
- Final score: 150
- Re-rank relevance: N/A

Evidence snippets:
- 4034124084959907503 user A User object, representing the active user, if available ( depending on a complex set of security restrictions ). amin@example.com Edit ( simple and installable ) authMode A value from the ScriptApp.AuthMode enum.
- 4034124084959907503 user A User object, representing the active user, if available ( depending on a complex set of security restrictions ). amin@example.com Change ( installable ) authMode A value from the ScriptApp.AuthMode enum.
- 10 Form submit ( installable ) Caution: Make sure you use this form submit trigger with SpreadsheetTriggerBuilder . authMode A value from the ScriptApp.AuthMode enum.
- Form submit ( installable ) Caution: Make sure you use this form submit trigger with FormTriggerBuilder . authMode A value from the ScriptApp.AuthMode enum.

