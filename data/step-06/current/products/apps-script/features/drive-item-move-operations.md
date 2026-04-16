---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:53:34.525Z"
product_name: "Apps Script"
product_slug: "apps-script"
feature_name: "Drive item move operations"
feature_slug: "drive-item-move-operations"
latest_feature_date: "2020-07-27"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/apps-script/reference/add-ons-response-service/drive-items-selected-action-response-builder"
  - "https://developers.google.com/apps-script/releases"
  - "https://developers.google.com/apps-script/advanced/drive-labels"
keywords:
  - "drive"
  - "item"
  - "move"
  - "operations"
  - "apps"
  - "script"
  - "file"
  - "folder"
---

# Drive item move operations

Product: Apps Script
Coverage: MEDIUM

## Step 02 Summary

Apps Script Drive File and Folder classes add moveTo() methods for moving items to destination folders.

## Extended Definition

Apps Script Drive File and Folder classes add moveTo() methods for moving items to destination folders.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/apps-script/reference/add-ons-response-service/drive-items-selected-action-response-builder](https://developers.google.com/apps-script/reference/add-ons-response-service/drive-items-selected-action-response-builder)
- [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- [https://developers.google.com/apps-script/advanced/drive-labels](https://developers.google.com/apps-script/advanced/drive-labels)

## Supporting Pages

### "Class DriveItemsSelectedActionResponseBuilder \_|\_ Apps Script \_|\_ Google\

- URL: [https://developers.google.com/apps-script/reference/add-ons-response-service/drive-items-selected-action-response-builder](https://developers.google.com/apps-script/reference/add-ons-response-service/drive-items-selected-action-response-builder)
- Source ID: `site-docs-reference-3`
- Final score: 132
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Methods Method Return type Brief description build() Drive Items Selected Action Response Builds the current Drive action response. request File Scope(itemId) Drive Items Selected Action Response Builder Specifies that the response requests file scope for the contextually-relevant item in Drive.
- Home Google Workspace Apps Script Reference Send feedback Class DriveItemsSelectedActionResponseBuilder Stay organized with collections Save and categorize content based on your preferences.
- Parameters Name Type Description item Id String ID of the Drive item to request file scope for.
- Return DriveItemsSelectedActionResponse — A validated DriveItemsSelectedActionResponse . requestFileScope(itemId) Specifies that the response requests file scope for the contextually-relevant item in Drive.

### Advanced Drive Labels Service \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/advanced/drive-labels](https://developers.google.com/apps-script/advanced/drive-labels)
- Source ID: `site-docs-reference`
- Final score: 129
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Page Summary outlined flag The Google Drive Labels advanced service in Apps Script allows you to create and manage labels for Drive files and folders.
- Sample code is provided to demonstrate listing labels, getting a specific label, and listing labels applied to a Drive item. using the Drive Labels advanced service in Google Apps Script.
- Labels . get ( labelName , { view : "LABEL VIEW FULL" , }); const title = label . properties . title ; const fieldsLength = label . fields . length ; console . log ( Fetched label with title: ' ${ title } ' and ${ fieldsLength } fields. , ); } catch ( err ) { // TODO (developer) - Handle exception console . log ( "Failed to get label with error %s" , err . message ); } } List labels for a Drive item The following code sample shows how to get a Drive item and list all labels applied to that item. advanced/driveLabels.gs View on GitHub / List Labels on a Drive Item Fetches a Drive Item and prints all applied values along with their to their human-readable names. @param {string} fileId The Drive File ID / function listLabelsOnDriveItem ( fileId ) { try { const appliedLabels = Drive .
- Home Google Workspace Apps Script Reference Send feedback Advanced Drive Labels Service Stay organized with collections Save and categorize content based on your preferences.

### Google Apps Script release notes \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- Source ID: `site-docs-root`
- Final score: 128
- Re-rank relevance: N/A

Evidence snippets:
- October 08, 2013 Feature Added the following FormApp methods, which allow scripts to work with progress bars, custom closed-form messages, and YouTube videos. + Form.hasProgressBar() + Form.setProgressBar(enabled) + Form.getCustomClosedFormMessage() + Form.setCustomClosedFormMessage(message) + Form.addVideoItem() September 23, 2013 Feature Added the following DriveApp methods, which allow scripts to get the owner of a File or Folder.
- FileIterator.getContinuationToken() FolderIterator.getContinuationToken() DriveApp.continueFileIterator(continuationToken) DriveApp.continueFolderIterator(continuationToken) Deprecated The UiApp widgets Hyperlink , InlineHyperlink , LayoutPanel , and RichTextArea have now been disabled, as announced on March 13, 2013 and documented in the Apps Script sunset schedule .
- The Card service has been extended with the following classes and methods that provide new widgets and event responses: CalendarEventActionResponse CalendarEventActionResponseBuilder DatePicker DateTimePicker DisplayStyle DriveItemsSelectedActionResponse DriveItemsSelectedActionResponseBuilder FixedFooter SwitchControlType TimePicker CardBuilder.setDisplayStyle(displayStyle) CardBuilder.setFixedFooter(fixedFooter) CardBuilder.setPeekCardHeader(peekCardHeader) CardService.newCalendarEventActionResponseBuilder() CardService.newDatePicker() CardService.newDateTimePicker() CardService.newDriveItemsSelectedActionResponseBuilder() CardService.newFixedFooter() CardService.newTimePicker() Switch.setControlType(controlType) The Conference Data service has been added to Apps Script.
- July 27, 2020 Deprecated The following Folder class methods have been deprecated : addFile(File) addFolder(Folder) removeFile(File) removeFolder(Folder) Announcement To help simplify Google Drive's folder structure and sharing models , new methods have been added to the Drive service and some existing methods have been deprecated.

