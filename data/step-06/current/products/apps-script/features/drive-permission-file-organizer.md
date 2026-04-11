---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:29:46.678Z"
product_name: "Apps Script"
product_slug: "apps-script"
feature_name: "Drive Permission.FILE_ORGANIZER"
feature_slug: "drive-permission-file-organizer"
latest_feature_date: "2020-04-02"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/apps-script/releases"
  - "https://developers.google.com/apps-script/api/reference/rest/v1/File"
  - "https://developers.google.com/apps-script/guides/triggers/events"
keywords:
  - "permission"
  - "organizer"
  - "drive"
  - "value"
  - "enum"
  - "file"
  - "adds"
  - "the"
---

# Drive Permission.FILE_ORGANIZER

Product: Apps Script
Coverage: MEDIUM

## Step 02 Summary

Adds the FILE_ORGANIZER enum value in Drive Permission to grant shared drive organization capabilities.

## Extended Definition

Adds the FILE_ORGANIZER enum value in Drive Permission to grant shared drive organization capabilities.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- [https://developers.google.com/apps-script/api/reference/rest/v1/File](https://developers.google.com/apps-script/api/reference/rest/v1/File)
- [https://developers.google.com/apps-script/guides/triggers/events](https://developers.google.com/apps-script/guides/triggers/events)

## Supporting Pages

### Google Apps Script release notes \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- Source ID: `site-docs-root`
- Final score: 152
- Re-rank relevance: N/A

Evidence snippets:
- The following has been added to the Drive service : There's a new FILE ORGANIZER value in the Permission enum .
- PageProtection Spreadsheet.getSheetProtection() Spreadsheet.setSheetProtection(permissions) Sheet.getSheetProtection() Sheet.setSheetProtection(permissions) Replaced the method SpreadsheetApp.open(file) , which takes a File object from the deprecated DocsList service as a parameter, with a version that takes a File object from the Drive service instead.
- If you have FILE ORGANIZER permission on a shared drive, you can edit, trash, and move content within that drive.
- Deprecated Updated DocsList.getFilesByType() to accept values from the DocsList.FileType enumeration.

### File \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/api/reference/rest/v1/File](https://developers.google.com/apps-script/api/reference/rest/v1/File)
- Source ID: `site-api-reference`
- Final score: 106
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- JSON representation { "name" : string , "type" : enum ( FileType ) , "source" : string , "lastModifyUser" : { object ( User ) } , "createTime" : string , "updateTime" : string , "functionSet" : { object ( FunctionSet ) } } Fields name string The name of the file.
- The file extension is not part of the file name, which can be identified from the type field. type enum ( FileType ) The type of the file. source string The file content. lastModifyUser object ( User ) The user who modified the file most recently.
- The details visible in this object are controlled by the profile visibility settings of the last modifying user. createTime string ( Timestamp format) Creation date timestamp.
- Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z" . functionSet object ( FunctionSet ) The defined set of functions in the script file, if any.

### Event Objects \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/guides/triggers/events](https://developers.google.com/apps-script/guides/triggers/events)
- Source ID: `site-docs-reference`
- Final score: 96
- Re-rank relevance: N/A

Evidence snippets:
- Time-driven ( installable ) authMode A value from the ScriptApp.AuthMode enum.
- 4034124084959907503 user A User object, representing the active user, if available ( depending on a complex set of security restrictions ). amin@example.com Edit ( simple and installable ) authMode A value from the ScriptApp.AuthMode enum.
- 4034124084959907503 user A User object, representing the active user, if available ( depending on a complex set of security restrictions ). amin@example.com Change ( installable ) authMode A value from the ScriptApp.AuthMode enum.
- 10 Form submit ( installable ) Caution: Make sure you use this form submit trigger with SpreadsheetTriggerBuilder . authMode A value from the ScriptApp.AuthMode enum.

