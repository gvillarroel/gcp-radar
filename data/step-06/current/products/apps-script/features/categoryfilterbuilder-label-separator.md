---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:53:34.652Z"
product_name: "Apps Script"
product_slug: "apps-script"
feature_name: "CategoryFilterBuilder label separator"
feature_slug: "categoryfilterbuilder-label-separator"
latest_feature_date: "2012-09-21"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/apps-script/releases"
  - "https://developers.google.com/apps-script/advanced/drive-labels"
  - "https://developers.google.com/apps-script/guides/v8-runtime"
keywords:
  - "categoryfilterbuilder"
  - "label"
  - "separator"
  - "can"
  - "now"
  - "specify"
  - "strings"
  - "setlabelseparator"
---

# CategoryFilterBuilder label separator

Product: Apps Script
Coverage: MEDIUM

## Step 02 Summary

CategoryFilterBuilder can now specify label separator strings with setLabelSeparator().

## Extended Definition

CategoryFilterBuilder can now specify label separator strings with setLabelSeparator().

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- [https://developers.google.com/apps-script/advanced/drive-labels](https://developers.google.com/apps-script/advanced/drive-labels)
- [https://developers.google.com/apps-script/guides/v8-runtime](https://developers.google.com/apps-script/guides/v8-runtime)

## Supporting Pages

### Google Apps Script release notes \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- Source ID: `site-docs-root`
- Final score: 117
- Re-rank relevance: N/A

Evidence snippets:
- Feature Added a setLabelSeparator() method to CategoryFilterBuilder , to allow for label separator strings to be used.
- The following is a full list of the removed classes and methods: Charts service CategoryFilterBuilder Control DashboardPanel DashboardPanelBuilder Chart.getId() Chart.getType() Charts.newCategoryFilter() Charts.newDashboardPanel() Charts.newNumberRangeFilter() Charts.newStringFilter() NumberRangeFilterBuilder.build() NumberRangeFilterBuilder.setDataTable(tableBuilder) NumberRangeFilterBuilder.setDataTable(table) NumberRangeFilterBuilder.setFilterColumnIndex(columnIndex) NumberRangeFilterBuilder.setFilterColumnLabel(columnLabel) NumberRangeFilterBuilder.setLabel(label) NumberRangeFilterBuilder.setLabelSeparator(labelSeparator) NumberRangeFilterBuilder.setLabelStacking(orientation) StringFilterBuilder.build() StringFilterBuilder.setDataTable(tableBuilder) StringFilterBuilder.setDataTable(table) StringFilterBuilder.setFilterColumnIndex(columnIndex) StringFilterBuilder.setFilterColumnLabel(columnLabel) StringFilterBuilder.setLabel(label) StringFilterBuilder.setLabelSeparator(labelSeparator) StringFilterBuilder.setLabelStacking(orientation) Spreadsheet service EmbeddedChart.getId() EmbeddedChart.getType() EmbeddedChart.setId(id) Change The Slides service class RgbColor and the enumeration ColorType have been moved from the Slides service to the Base script service.
- The following methods have been added to the Group , Image , Line , PageElement , Shape , SheetsChart , Table , Video , and WordArt classes: bringForward() bringToFront() sendBackward() sendToBack() setDescription(description) setTitle(title) The Spreadsheet service has been extended with the following new classes and methods that let you add and search for metadata strings attached to rows, columns, sheets, or spreadsheets: DeveloperMetadata DeveloperMetadataFinder DeveloperMetadataLocation DeveloperMetadataLocationType DeveloperMetadataVisibility Range.addDeveloperMetadata(key) Range.addDeveloperMetadata(key, visibility) Range.addDeveloperMetadata(key, value) Range.addDeveloperMetadata(key, value, visibility) Range.createDeveloperMetadataFinder() Range.getDeveloperMetadata() Sheet.addDeveloperMetadata(key) Sheet.addDeveloperMetadata(key, visibility) Sheet.addDeveloperMetadata(key, value) Sheet.addDeveloperMetadata(key, value, visibility) Sheet.createDeveloperMetadataFinder() Sheet.getDeveloperMetadata() Spreadsheet.addDeveloperMetadata(key) Spreadsheet.addDeveloperMetadata(key, visibility) Spreadsheet.addDeveloperMetadata(key, value) Spreadsheet.addDeveloperMetadata(key, value, visibility) Spreadsheet.createDeveloperMetadataFinder() Spreadsheet.getDeveloperMetadata() October 30, 2018 Feature The Spreadsheet service has been extended with the following new classes and methods: OverGridImage Sheet.getImages() Sheet.isColumnHiddenByUser(columnPosition) Sheet.isRowHiddenByFilter(rowPosition) Sheet.isRowHiddenByUser(rowPosition) Spreadsheet.getImages() Spreadsheet.isColumnHiddenByUser(columnPosition) Spreadsheet.isRowHiddenByFilter(rowPosition) Spreadsheet.isRowHiddenByUser(rowPosition) The following methods have been added to existing services: console service console.error() console.info() console.warn() DataStudio service Field.isHidden() Field.setIsHidden() Gmail service GmailAttachment.getHash() GmailMessage.getAttachments(options) Change The following methods in the Spreadsheet service now return an OverGridImage object instead of void: Sheet.insertImage(blobSource, column, row) Sheet.insertImage(blobSource, column, row, offsetX, offsetY) Sheet.insertImage(url, column, row) Sheet.insertImage(url, column, row, offsetX, offsetY) October 18, 2018 Feature The Card service has been extended with the following classes and methods to support Gmail add-on compose actions : CardService.UpdateDraftActionResponse CardService.UpdateDraftActionResponseBuilder CardService.UpdateDraftBodyAction CardService.ContentType CardService.UpdateDraftBodyType CardService.newUpdateDraftActionResponseBuilder() CardService.newUpdateDraftBodyAction() September 27, 2018 Announcement The Data Studio service is now available.
- The gallery also features the following new samples: Build a Google Chat app with an ADK AI agent Build a Chat app with an Agent2Agent agent Analyze and label Gmail messages with Gemini and Vertex AI June 04, 2025 Deprecated Google Analytics 4 has replaced Universal Analytics , which means the Apps Script Advanced Service for Google Analytics Management API and Reporting API is deprecated.

### Advanced Drive Labels Service \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/advanced/drive-labels](https://developers.google.com/apps-script/advanced/drive-labels)
- Source ID: `site-docs-reference`
- Final score: 53
- Re-rank relevance: N/A

Evidence snippets:
- Labels . get ( labelName , { view : "LABEL VIEW FULL" , }); console . log ( "Label Title: %s" , label . properties . title ); for ( const fieldId of Object . keys ( appliedLabel . fields )) { const fieldValue = appliedLabel . fields [ fieldId ]; const field = label . fields . find (( f ) = > f . id === fieldId ); console . log ( Field ID: ${ field . id } , Display Name: ${ field . properties . displayName } , ); switch ( fieldValue . valueType ) { case "text" : console . log ( "Text: %s" , fieldValue . text [ 0 ]); break ; case "integer" : console . log ( "Integer: %d" , fieldValue . integer [ 0 ]); break ; case "dateString" : console . log ( "Date: %s" , fieldValue . dateString [ 0 ]); break ; case "user" : { const user = fieldValue . user . map (( user ) = > { return ${ user . emailAddress } : ${ user . displayName } ; }) . join ( ", " ); console . log ( User: ${ user } ); break ; } case "selection" : { const choices = fieldValue . selection . map (( choiceId ) = > { return field . selectionOptions . choices . find ( ( choice ) = > choice . id === choiceId , ); }); const selection = choices . map (( choice ) = > { return ${ choice . id } : ${ choice . properties . displayName } ; }) . join ( ", " ); console . log ( Selection: ${ selection } ); break ; } default : console . log ( "Unknown: %s" , fieldValue . valueType ); console . log ( fieldValue . value ); } } } } catch ( err ) { // TODO (developer) - Handle exception console . log ( "Failed with error %s" , err . message ); } } Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Labels . get ( labelName , { view : "LABEL VIEW FULL" , }); const title = label . properties . title ; const fieldsLength = label . fields . length ; console . log ( Fetched label with title: ' ${ title } ' and ${ fieldsLength } fields. , ); } catch ( err ) { // TODO (developer) - Handle exception console . log ( "Failed to get label with error %s" , err . message ); } } List labels for a Drive item The following code sample shows how to get a Drive item and list all labels applied to that item. advanced/driveLabels.gs View on GitHub / List Labels on a Drive Item Fetches a Drive Item and prints all applied values along with their to their human-readable names. @param {string} fileId The Drive File ID / function listLabelsOnDriveItem ( fileId ) { try { const appliedLabels = Drive .
- Labels . list ({ publishedOnly : true , pageToken : pageToken , }); pageToken = response . nextPageToken ; labels = labels . concat ( response . labels ); } catch ( err ) { // TODO (developer) - Handle exception console . log ( "Failed to list labels with error %s" , err . message ); } } while ( pageToken != null ); console . log ( "Found %d labels" , labels . length ); } Get a label The following code sample shows how to get a single label by its resource name (which is the string value of the label).
- Files . listLabels ( fileId ); console . log ( "%d label(s) are applied to this file" , appliedLabels . labels . length , ); for ( const appliedLabel of appliedLabels . labels ) { // Resource name of the label at the applied revision. const labelName = labels/ ${ appliedLabel . id } @ ${ appliedLabel . revisionId } ; console . log ( "Fetching Label: %s" , labelName ); const label = DriveLabels .

### V8 runtime overview \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/guides/v8-runtime](https://developers.google.com/apps-script/guides/v8-runtime)
- Source ID: `site-docs-root-3`
- Final score: 47
- Re-rank relevance: N/A

Evidence snippets:
- The following V8 example shows the use of object methods when constructing menu items in Google Sheets: function onOpen () { const ui = SpreadsheetApp . getUi (); // Or DocumentApp , SlidesApp , or FormApp . ui . createMenu ( 'Custom Menu' ) . addItem ( 'First item' , 'menu.item1' ) . addSeparator () . addSubMenu ( ui . createMenu ( 'Sub-menu' ) . addItem ( 'Second item' , 'menu.item2' )) . addToUi (); } const menu = { item1 : function () { SpreadsheetApp . getUi () . alert ( 'You clicked: First item' ); }, item2 : function () { SpreadsheetApp . getUi () . alert ( 'You clicked: Second item' ); } } View logs Apps Script provides two logging services: the Logger service and the console class.
- This can simplify the code in the function body as it removes the need to explicitly assign default values to missing parameters. // Rhino runtime function hello ( greeting, name ) { greeting = greeting "hello" ; name = name "world" ; console . log ( greeting + " " + name + "!" ); } hello (); // Outputs "hello world!" // V8 runtime const hello = function ( greeting = "hello" , name = "world" ) { console . log ( greeting + " " + name + "!" ); } hello (); // Outputs "hello world!" Multi-line strings Define multi-line strings using the same syntax as template literals .
- They let you avoid more complex string concatenation statements. // Rhino runtime var name = 'Hi ' + first + ' ' + last + '.' ; var url = 'http://localhost:3000/api/messages/' + id ; // V8 runtime const name = Hi $ { first } $ { last } . ; const url = http : // localhost : 3000 / api / messages /$ { id } ; Default parameters Default parameters let you specify default values for function parameters in the function declaration.
- Fetch : Use UrlFetchApp.fetch(url, params) to make HTTP(S) requests. atob : Use Utilities.base64Decode to decode Base64-encoded strings. btoa : Use Utilities.base64Encode to encode strings in Base64.

