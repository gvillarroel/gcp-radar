---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:29:46.643Z"
product_name: "Apps Script"
product_slug: "apps-script"
feature_name: "CellImageBuilder.getUrl method"
feature_slug: "cellimagebuilder-geturl-method"
latest_feature_date: "2024-12-09"
deprecation_date: "2024-12-09"
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/apps-script/releases"
  - "https://developers.google.com/apps-script/advanced/admin-sdk-groups-settings"
  - "https://developers.google.com/apps-script/advanced/admin-sdk-reports"
keywords:
  - "cellimagebuilder"
  - "geturl"
  - "spreadsheet"
  - "deprecated"
  - "method"
  - "is"
  - "the"
  - "in"
---

# CellImageBuilder.getUrl method

Product: Apps Script
Coverage: MEDIUM

## Step 02 Summary

CellImageBuilder.getUrl() in the Spreadsheet service is deprecated; deprecated on 2024-12-09.

## Extended Definition

CellImageBuilder.getUrl() in the Spreadsheet service is deprecated; deprecated on 2024-12-09.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- [https://developers.google.com/apps-script/advanced/admin-sdk-groups-settings](https://developers.google.com/apps-script/advanced/admin-sdk-groups-settings)
- [https://developers.google.com/apps-script/advanced/admin-sdk-reports](https://developers.google.com/apps-script/advanced/admin-sdk-reports)

## Supporting Pages

### Google Apps Script release notes \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- Source ID: `site-docs-root`
- Final score: 144
- Re-rank relevance: N/A

Evidence snippets:
- Feature The Spreadsheet service has been extended with the following new classes and methods to support text styles and Rich Text cell formatting: RichTextValue RichTextValueBuilder TextStyle TextStyleBuilder Range.getRichTextValue() Range.getRichTextValues() Range.getTextStyle() Range.getTextStyles() Range.setRichTextValue(value) Range.setRichTextValues(values) Range.setTextStyle(style) Range.setTextStyles(styles) SpreadsheetApp.newRichTextValue() SpreadsheetApp.newTextStyle() The Data Studio service has been extended with the following new classes and methods that define and support authentication types for community connectors: GetAuthTypeResponse AuthType CommunityConnector,newAuthTypeResponse() January 04, 2019 Feature The Slides service has been extended with the following new classes and methods that support slide linking and text box insertion: SlideLinkingMode [ Layout.insertTextBox(text) }(https://developers.google.com/apps-script/reference/slides/layout#inserttextboxtext) Layout.insertTextBox(text, left, top, width, height) Master.insertTextBox(text) Master.insertTextBox(text, left, top, width, height) Page.insertTextBox(text) Page.insertTextBox(text, left, top, width, height) Presentation.appendSlide(slide, linkingMode) Presentation.insertSlide(insertionIndex, slide, linkingMode) Slide.getSlideLinkingMode() Slide.getSourcePresentationId() Slide.getSourceSlideObjectId() Slide.insertTextBox(text) Slide.insertTextBox(text, left, top, width, height) Slide.refreshSlide() Slide.unlink() The Data Studio service has been extended with the following new classes and methods that error displays: DebugError UserError CommunityConnector.newDebugError() CommunityConnector.newUserError() December 13, 2018 Deprecated The Fusion Tables advanced service has been deprecated and will shutdown fully on December 3rd, 2019.
- February 26, 2019 Feature The Spreadsheet service has been extended with the following new classes and methods to support BigQuery data connectors in Sheets : BigQueryDataSourceSpec BigQueryDataSourceSpecBuilder DataExecutionErrorCode DataExecutionState DataExecutionStatus DataSourceParameterType DataSourceParameter DataSourceSpecBuilder DataSourceSpec DataSourceTable DataSourceType DataSource Range.getDataSourceTables() Sheet.getDataSourceTables() SpreadsheetApp.enableAllDataSourcesExecution() SpreadsheetApp.enableBigQueryExecution() SpreadsheetApp.newDataSourceSpec() Spreadsheet.getDataSourceTables() Spreadsheet.insertSheetWithDataSourceTable(spec) The Data Studio service has been extended with the following new methods involving reaggregation settings: Field.getIsReaggregatable() Field.setIsReaggregatable(isReaggregatable) January 22, 2019 Deprecated The deprecated UiApp service will be officially shutdown on July 15th, 2019.
- PageProtection Spreadsheet.getSheetProtection() Spreadsheet.setSheetProtection(permissions) Sheet.getSheetProtection() Sheet.setSheetProtection(permissions) Replaced the method SpreadsheetApp.open(file) , which takes a File object from the deprecated DocsList service as a parameter, with a version that takes a File object from the Drive service instead.
- December 09, 2024 Deprecated The getUrl() method for the CellImage , CellImageBuilder , and OverGridImage classes of the Spreadsheet service has been deprecated.

### Admin SDK Groups Settings Service \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/advanced/admin-sdk-groups-settings](https://developers.google.com/apps-script/advanced/admin-sdk-groups-settings)
- Source ID: `site-docs-reference`
- Final score: 128
- Re-rank relevance: N/A

Evidence snippets:
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-01 UTC."],[],[]]
- Here, the description is modified, but various other settings can be changed in the same way. @see https://developers.google.com/admin-sdk/groups-settings/v1/reference/groups/patch / function updateGroupSettings () { const groupId = "exampleGroup@example.com" ; try { const group = AdminGroupsSettings . newGroups (); group . description = "Newly changed group description" ; AdminGroupsSettings .
- Get a group's settings This sample gets a group's settings and logs them to the console. advanced/adminSDK.gs View on GitHub / Gets a group's settings and logs them to the console. / function getGroupSettings () { // TODO (developer) - Replace groupId value with yours const groupId = "exampleGroup@example.com" ; try { const group = AdminGroupsSettings .
- Groups . get ( groupId ); console . log ( JSON . stringify ( group , null , 2 )); } catch ( err ) { // TODO (developer)- Handle exception from the API console . log ( "Failed with error %s" , err . message ); } } Update a group's settings This sample shows how a group's settings can be changed.

### Admin SDK Reports Service \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/advanced/admin-sdk-reports](https://developers.google.com/apps-script/advanced/admin-sdk-reports)
- Source ID: `site-docs-reference`
- Final score: 128
- Re-rank relevance: N/A

Evidence snippets:
- UserUsageReport . get ( "all" , date , { parameters : parameters . join ( "," ), maxResults : 500 , pageToken : pageToken , }); if ( page . warnings ) { for ( const warning of page . warnings ) { console . log ( warning . message ); } } const reports = page . usageReports ; if ( reports ) { for ( const report of reports ) { const parameterValues = getParameterValues ( report . parameters ); const row = [ report . date , report . entity . userEmail , parameterValues [ "accounts:last login time" ], parameterValues [ "gmail:num emails received" ], parameterValues [ "drive:num items created" ], ]; rows . push ( row ); } } pageToken = page . nextPageToken ; } while ( pageToken ); if ( rows . length === 0 ) { console . log ( "No results returned." ); return ; } const spreadsheet = SpreadsheetApp . create ( "Google Workspace User Usage Report" , ); const sheet = spreadsheet . getActiveSheet (); // Append the headers. const headers = [ "Date" , "User" , "Last Login" , "Num Emails Received" , "Num Drive Files Created" , ]; sheet . appendRow ( headers ); // Append the results. sheet . getRange ( 2 , 1 , rows . length , headers . length ). setValues ( rows ); console . log ( "Report spreadsheet created: %s" , spreadsheet . getUrl ()); } / Gets a map of parameter names to values from an array of parameter objects. @param {Array} parameters An array of parameter objects. @return {Object} A map from parameter names to their values. / function getParameterValues ( parameters ) { return parameters . reduce (( result , parameter ) = > { const name = parameter . name ; let value ; if ( parameter . intValue !== undefined ) { value = parameter . intValue ; } else if ( parameter . stringValue !== undefined ) { value = parameter . stringValue ; } else if ( parameter . datetimeValue !== undefined ) { value = new Date ( parameter . datetimeValue ); } else if ( parameter . boolValue !== undefined ) { value = parameter . boolValue ; } result [ name ] = value ; return result ; }, {}); } Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Activities . list ( "all" , "login" , { startTime : startTime , endTime : endTime , maxResults : 500 , pageToken : pageToken , }); const items = page . items ; if ( items ) { for ( const item of items ) { const row = [ new Date ( item . id . time ), item . actor . email , item . events [ 0 ]. name , ]; rows . push ( row ); } } pageToken = page . nextPageToken ; } while ( pageToken ); if ( rows . length === 0 ) { console . log ( "No results returned." ); return ; } const spreadsheet = SpreadsheetApp . create ( "Google Workspace Login Report" ); const sheet = spreadsheet . getActiveSheet (); // Append the headers. const headers = [ "Time" , "User" , "Login Result" ]; sheet . appendRow ( headers ); // Append the results. sheet . getRange ( 2 , 1 , rows . length , headers . length ). setValues ( rows ); console . log ( "Report spreadsheet created: %s" , spreadsheet . getUrl ()); } Generate user usage report This sample generates a user usage report for this day last week as a spreadsheet.
- The report includes the date, user, last login time, number of emails received, and number of docs owned. advanced/adminSDK.gs View on GitHub / Generates a user usage report for this day last week as a spreadsheet.
- Generate login activity report This sample generates a login activity report for the last week as a spreadsheet.

