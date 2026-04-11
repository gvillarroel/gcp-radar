---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:29:46.660Z"
product_name: "Apps Script"
product_slug: "apps-script"
feature_name: "Drive resource-key sharing methods"
feature_slug: "drive-resource-key-sharing-methods"
latest_feature_date: "2021-08-31"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/apps-script/releases"
  - "https://developers.google.com/apps-script/api/reference/rest/v1/projects"
  - "https://developers.google.com/apps-script/api/reference/rest/v1/projects.versions"
keywords:
  - "getsecurityupdateeligible"
  - "getsecurityupdateenabled"
  - "sharing"
  - "resource"
  - "key"
  - "drive"
  - "methods"
  - "adds"
---

# Drive resource-key sharing methods

Product: Apps Script
Coverage: MEDIUM

## Step 02 Summary

Adds getSecurityUpdateEligible, getSecurityUpdateEnabled, and setSecurityUpdateEnabled methods to Drive file and folder resources to manage resource-key based sharing security.

## Extended Definition

Adds getSecurityUpdateEligible, getSecurityUpdateEnabled, and setSecurityUpdateEnabled methods to Drive file and folder resources to manage resource-key based sharing security.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- [https://developers.google.com/apps-script/api/reference/rest/v1/projects](https://developers.google.com/apps-script/api/reference/rest/v1/projects)
- [https://developers.google.com/apps-script/api/reference/rest/v1/projects.versions](https://developers.google.com/apps-script/api/reference/rest/v1/projects.versions)

## Supporting Pages

### Google Apps Script release notes \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- Source ID: `site-docs-root`
- Final score: 128
- Re-rank relevance: N/A

Evidence snippets:
- August 31, 2021 Feature The Drive Service has added three new methods to the file and folder classes to manage the use of resource keys when sharing files and folders. getSecurityUpdateEligible() : Gets whether a file for folder is eligible to apply the security update that requires a resource key for access when it's shared using a link. getSecurityUpdateEnabled() : Gets whether a file or folder requires a resource key for access when it's shared using a link. setSecurityUpdateEnabled(enabled) : Sets whether the file or folder requires a resource key for access when it's shared using a link.
- July 27, 2020 Deprecated The following Folder class methods have been deprecated : addFile(File) addFolder(Folder) removeFile(File) removeFolder(Folder) Announcement To help simplify Google Drive's folder structure and sharing models , new methods have been added to the Drive service and some existing methods have been deprecated.
- Learn more about the resource key security update for Drive .
- The following methods have been added to the Group , Image , Line , PageElement , Shape , SheetsChart , Table , Video , and WordArt classes: bringForward() bringToFront() sendBackward() sendToBack() setDescription(description) setTitle(title) The Spreadsheet service has been extended with the following new classes and methods that let you add and search for metadata strings attached to rows, columns, sheets, or spreadsheets: DeveloperMetadata DeveloperMetadataFinder DeveloperMetadataLocation DeveloperMetadataLocationType DeveloperMetadataVisibility Range.addDeveloperMetadata(key) Range.addDeveloperMetadata(key, visibility) Range.addDeveloperMetadata(key, value) Range.addDeveloperMetadata(key, value, visibility) Range.createDeveloperMetadataFinder() Range.getDeveloperMetadata() Sheet.addDeveloperMetadata(key) Sheet.addDeveloperMetadata(key, visibility) Sheet.addDeveloperMetadata(key, value) Sheet.addDeveloperMetadata(key, value, visibility) Sheet.createDeveloperMetadataFinder() Sheet.getDeveloperMetadata() Spreadsheet.addDeveloperMetadata(key) Spreadsheet.addDeveloperMetadata(key, visibility) Spreadsheet.addDeveloperMetadata(key, value) Spreadsheet.addDeveloperMetadata(key, value, visibility) Spreadsheet.createDeveloperMetadataFinder() Spreadsheet.getDeveloperMetadata() October 30, 2018 Feature The Spreadsheet service has been extended with the following new classes and methods: OverGridImage Sheet.getImages() Sheet.isColumnHiddenByUser(columnPosition) Sheet.isRowHiddenByFilter(rowPosition) Sheet.isRowHiddenByUser(rowPosition) Spreadsheet.getImages() Spreadsheet.isColumnHiddenByUser(columnPosition) Spreadsheet.isRowHiddenByFilter(rowPosition) Spreadsheet.isRowHiddenByUser(rowPosition) The following methods have been added to existing services: console service console.error() console.info() console.warn() DataStudio service Field.isHidden() Field.setIsHidden() Gmail service GmailAttachment.getHash() GmailMessage.getAttachments(options) Change The following methods in the Spreadsheet service now return an OverGridImage object instead of void: Sheet.insertImage(blobSource, column, row) Sheet.insertImage(blobSource, column, row, offsetX, offsetY) Sheet.insertImage(url, column, row) Sheet.insertImage(url, column, row, offsetX, offsetY) October 18, 2018 Feature The Card service has been extended with the following classes and methods to support Gmail add-on compose actions : CardService.UpdateDraftActionResponse CardService.UpdateDraftActionResponseBuilder CardService.UpdateDraftBodyAction CardService.ContentType CardService.UpdateDraftBodyType CardService.newUpdateDraftActionResponseBuilder() CardService.newUpdateDraftBodyAction() September 27, 2018 Announcement The Data Studio service is now available.

### REST Resource: projects \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/api/reference/rest/v1/projects](https://developers.google.com/apps-script/api/reference/rest/v1/projects)
- Source ID: `site-api-reference`
- Final score: 68
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Resource: Project JSON representation User JSON representation Methods Resource: Project The script project resource.
- Methods create Creates a new, empty script project with no script files and a base manifest file. get Gets a script project's metadata. getContent Gets the content of the script project, including the code source and metadata for each script file. getMetrics Get metrics data for scripts, such as number of executions and active users. updateContent Updates the content of the specified script project.
- JSON representation { "scriptId" : string , "title" : string , "parentId" : string , "createTime" : string , "updateTime" : string , "creator" : { object ( User ) } , "lastModifyUser" : { object ( User ) } } Fields scriptId string The script project's Drive ID. title string The title for the project. parentId string The parent's Drive ID that the script will be attached to.
- Page Summary outlined flag The Project resource represents a script project and includes fields like scriptId , title , parentId , createTime , updateTime , creator , and lastModifyUser .

### REST Resource: projects.versions \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/api/reference/rest/v1/projects.versions](https://developers.google.com/apps-script/api/reference/rest/v1/projects.versions)
- Source ID: `site-api-reference`
- Final score: 60
- Re-rank relevance: N/A

Evidence snippets:
- Key fields include scriptId (the project's Drive ID), versionNumber (a system-assigned incremental ID), description , and createTime (when the version was created).
- Resource: Version JSON representation Methods Resource: Version A resource representing a script project version.
- JSON representation { "scriptId" : string , "versionNumber" : integer , "description" : string , "createTime" : string } Fields scriptId string The script project's Drive ID. versionNumber integer The incremental ID that is created by Apps Script when a version is created.
- Methods create Creates a new immutable version using the current code, with a unique version number. get Gets a version of a script project. list List the versions of a script project.

