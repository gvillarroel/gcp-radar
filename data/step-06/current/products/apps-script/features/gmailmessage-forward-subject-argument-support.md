---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:29:46.827Z"
product_name: "Apps Script"
product_slug: "apps-script"
feature_name: "GmailMessage.forward subject argument support"
feature_slug: "gmailmessage-forward-subject-argument-support"
latest_feature_date: "2012-03-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/apps-script/releases"
  - "https://developers.google.com/apps-script/guides/sheets/functions"
  - "https://developers.google.com/apps-script/api/reference/rest/v1/projects.deployments"
keywords:
  - "forward"
  - "subject"
  - "gmailmessage"
  - "accepts"
  - "field"
  - "argument"
  - "through"
  - "now"
---

# GmailMessage.forward subject argument support

Product: Apps Script
Coverage: MEDIUM

## Step 02 Summary

GmailMessage.forward now accepts a subject field through its advanced arguments.

## Extended Definition

GmailMessage.forward now accepts a subject field through its advanced arguments.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- [https://developers.google.com/apps-script/guides/sheets/functions](https://developers.google.com/apps-script/guides/sheets/functions)
- [https://developers.google.com/apps-script/api/reference/rest/v1/projects.deployments](https://developers.google.com/apps-script/api/reference/rest/v1/projects.deployments)

## Supporting Pages

### Google Apps Script release notes \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- Source ID: `site-docs-root`
- Final score: 144
- Re-rank relevance: N/A

Evidence snippets:
- Feature Added the ability to set the subject line via the subject field in the advanced arguments for GmailMessage.forward() .
- The following methods have been added to the Group , Image , Line , PageElement , Shape , SheetsChart , Table , Video , and WordArt classes: bringForward() bringToFront() sendBackward() sendToBack() setDescription(description) setTitle(title) The Spreadsheet service has been extended with the following new classes and methods that let you add and search for metadata strings attached to rows, columns, sheets, or spreadsheets: DeveloperMetadata DeveloperMetadataFinder DeveloperMetadataLocation DeveloperMetadataLocationType DeveloperMetadataVisibility Range.addDeveloperMetadata(key) Range.addDeveloperMetadata(key, visibility) Range.addDeveloperMetadata(key, value) Range.addDeveloperMetadata(key, value, visibility) Range.createDeveloperMetadataFinder() Range.getDeveloperMetadata() Sheet.addDeveloperMetadata(key) Sheet.addDeveloperMetadata(key, visibility) Sheet.addDeveloperMetadata(key, value) Sheet.addDeveloperMetadata(key, value, visibility) Sheet.createDeveloperMetadataFinder() Sheet.getDeveloperMetadata() Spreadsheet.addDeveloperMetadata(key) Spreadsheet.addDeveloperMetadata(key, visibility) Spreadsheet.addDeveloperMetadata(key, value) Spreadsheet.addDeveloperMetadata(key, value, visibility) Spreadsheet.createDeveloperMetadataFinder() Spreadsheet.getDeveloperMetadata() October 30, 2018 Feature The Spreadsheet service has been extended with the following new classes and methods: OverGridImage Sheet.getImages() Sheet.isColumnHiddenByUser(columnPosition) Sheet.isRowHiddenByFilter(rowPosition) Sheet.isRowHiddenByUser(rowPosition) Spreadsheet.getImages() Spreadsheet.isColumnHiddenByUser(columnPosition) Spreadsheet.isRowHiddenByFilter(rowPosition) Spreadsheet.isRowHiddenByUser(rowPosition) The following methods have been added to existing services: console service console.error() console.info() console.warn() DataStudio service Field.isHidden() Field.setIsHidden() Gmail service GmailAttachment.getHash() GmailMessage.getAttachments(options) Change The following methods in the Spreadsheet service now return an OverGridImage object instead of void: Sheet.insertImage(blobSource, column, row) Sheet.insertImage(blobSource, column, row, offsetX, offsetY) Sheet.insertImage(url, column, row) Sheet.insertImage(url, column, row, offsetX, offsetY) October 18, 2018 Feature The Card service has been extended with the following classes and methods to support Gmail add-on compose actions : CardService.UpdateDraftActionResponse CardService.UpdateDraftActionResponseBuilder CardService.UpdateDraftBodyAction CardService.ContentType CardService.UpdateDraftBodyType CardService.newUpdateDraftActionResponseBuilder() CardService.newUpdateDraftBodyAction() September 27, 2018 Announcement The Data Studio service is now available.
- Issue 286 : UrlFetchApp 's fetch method now accepts followRedirects as an advanced argument.
- Issue 1965 : Emails forwarded using GmailMessage.forward() now preserve inline images.

### Custom Functions in Google Sheets \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/guides/sheets/functions](https://developers.google.com/apps-script/guides/sheets/functions)
- Source ID: `site-docs-root`
- Final score: 52
- Re-rank relevance: N/A

Evidence snippets:
- That is, built-in spreadsheet functions that return a different result each time they calculate — such as NOW() or RAND() — are not allowed as arguments to a custom function.
- If each cell required its own function call, the operation would take considerably more time, since the Apps Script server would have to download and parse the XML feed each time. / Show the title and date for the first page of posts on the Developer blog. @return Two columns of data representing posts on the Developer blog. @customfunction / function getBlogPosts () { var array = []; var url = 'https://gsuite-developers.googleblog.com/atom.xml' ; var xml = UrlFetchApp . fetch ( url ). getContentText (); var document = XmlService . parse ( xml ); var root = document . getRootElement (); var atom = XmlService . getNamespace ( 'http://www.w3.org/2005/Atom' ); var entries = document . getRootElement (). getChildren ( 'entry' , atom ); for ( var i = 0 ; i < entries . length ; i ++ ) { var title = entries [ i ]. getChild ( 'title' , atom ). getText (); var date = entries [ i ]. getChild ( 'published' , atom ). getValue (); array . push ([ title , date ]); } return array ; } These techniques can be applied to nearly any custom function that is used repeatedly throughout a spreadsheet, although the implementation details vary depending on the function's behavior.
- Here's a custom function, named DOUBLE , which multiplies an input value by 2: / Multiplies an input value by 2. @param {number} input The number to double. @return The input multiplied by 2. @customfunction / function DOUBLE ( input ) { return input 2 ; } If you don't know how to write JavaScript and don't have time to learn, check the Google Workspace add-on store to see whether someone else has already built the custom function you need.
- Consequently, if you plan to use a custom function multiple times on a large range of data, consider modifying the function so that it accepts a range as input in the form of a two-dimensional array, then returns a two-dimensional array that can overflow into the appropriate cells.

### REST Resource: projects.deployments \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/api/reference/rest/v1/projects.deployments](https://developers.google.com/apps-script/api/reference/rest/v1/projects.deployments)
- Source ID: `site-api-reference`
- Final score: 39
- Re-rank relevance: N/A

Evidence snippets:
- JSON representation { "addOnType" : enum ( AddOnType ) , "title" : string , "description" : string , "helpUrl" : string , "reportIssueUrl" : string , "postInstallTipUrl" : string } Fields addOnType enum ( AddOnType ) The add-on's required list of supported container types. title string The add-on's required title. description string The add-on's optional description. helpUrl string The add-on's optional help URL. reportIssueUrl string The add-on's optional report issue URL. postInstallTipUrl string The add-on's required post install tip URL.
- JSON representation { "entryPointType" : enum ( EntryPointType ) , // Union field properties can be only one of the following: "webApp" : { object ( WebAppEntryPoint ) } , "executionApi" : { object ( ExecutionApiEntryPoint ) } , "addOn" : { object ( AddOnEntryPoint ) } // End of list of possible types for union field properties . } Fields entryPointType enum ( EntryPointType ) The type of the entry point.
- JSON representation { "deploymentId" : string , "deploymentConfig" : { object ( DeploymentConfig ) } , "updateTime" : string , "entryPoints" : [ { object ( EntryPoint ) } ] } Fields deploymentId string The deployment ID for this deployment. deploymentConfig object ( DeploymentConfig ) The deployment configuration. updateTime string ( Timestamp format) Last modified date time stamp.
- JSON representation { "scriptId" : string , "versionNumber" : integer , "manifestFileName" : string , "description" : string } Fields scriptId string The script project's Drive ID. versionNumber integer The version number on which this deployment is based. manifestFileName string The manifest file name for this deployment. description string The description for this deployment.

