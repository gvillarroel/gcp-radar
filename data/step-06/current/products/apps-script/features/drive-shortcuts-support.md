---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:53:34.526Z"
product_name: "Apps Script"
product_slug: "apps-script"
feature_name: "Drive shortcuts support"
feature_slug: "drive-shortcuts-support"
latest_feature_date: "2020-07-27"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/apps-script/releases"
  - "https://developers.google.com/apps-script/advanced/drive"
  - "https://developers.google.com/apps-script/advanced/drive-labels"
keywords:
  - "drive"
  - "shortcuts"
  - "apps"
  - "script"
  - "file"
  - "folder"
  - "classes"
  - "add"
---

# Drive shortcuts support

Product: Apps Script
Coverage: MEDIUM

## Step 02 Summary

Apps Script Drive File and Folder classes add methods for creating shortcuts and retrieving shortcut target information.

## Extended Definition

Apps Script Drive File and Folder classes add methods for creating shortcuts and retrieving shortcut target information.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- [https://developers.google.com/apps-script/advanced/drive](https://developers.google.com/apps-script/advanced/drive)
- [https://developers.google.com/apps-script/advanced/drive-labels](https://developers.google.com/apps-script/advanced/drive-labels)

## Supporting Pages

### Google Apps Script release notes \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- Source ID: `site-docs-root`
- Final score: 100
- Re-rank relevance: N/A

Evidence snippets:
- FileIterator.getContinuationToken() FolderIterator.getContinuationToken() DriveApp.continueFileIterator(continuationToken) DriveApp.continueFolderIterator(continuationToken) Deprecated The UiApp widgets Hyperlink , InlineHyperlink , LayoutPanel , and RichTextArea have now been disabled, as announced on March 13, 2013 and documented in the Apps Script sunset schedule .
- The Card service has been extended with the following classes and methods that provide new widgets and event responses: CalendarEventActionResponse CalendarEventActionResponseBuilder DatePicker DateTimePicker DisplayStyle DriveItemsSelectedActionResponse DriveItemsSelectedActionResponseBuilder FixedFooter SwitchControlType TimePicker CardBuilder.setDisplayStyle(displayStyle) CardBuilder.setFixedFooter(fixedFooter) CardBuilder.setPeekCardHeader(peekCardHeader) CardService.newCalendarEventActionResponseBuilder() CardService.newDatePicker() CardService.newDateTimePicker() CardService.newDriveItemsSelectedActionResponseBuilder() CardService.newFixedFooter() CardService.newTimePicker() Switch.setControlType(controlType) The Conference Data service has been added to Apps Script.
- August 31, 2021 Feature The Drive Service has added three new methods to the file and folder classes to manage the use of resource keys when sharing files and folders. getSecurityUpdateEligible() : Gets whether a file for folder is eligible to apply the security update that requires a resource key for access when it's shared using a link. getSecurityUpdateEnabled() : Gets whether a file or folder requires a resource key for access when it's shared using a link. setSecurityUpdateEnabled(enabled) : Sets whether the file or folder requires a resource key for access when it's shared using a link.
- October 08, 2013 Feature Added the following FormApp methods, which allow scripts to work with progress bars, custom closed-form messages, and YouTube videos. + Form.hasProgressBar() + Form.setProgressBar(enabled) + Form.getCustomClosedFormMessage() + Form.setCustomClosedFormMessage(message) + Form.addVideoItem() September 23, 2013 Feature Added the following DriveApp methods, which allow scripts to get the owner of a File or Folder.

### Advanced Drive Service \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/advanced/drive](https://developers.google.com/apps-script/advanced/drive)
- Source ID: `site-docs-reference`
- Final score: 97
- Re-rank relevance: N/A

Evidence snippets:
- Page Summary outlined flag The advanced Drive service in Apps Script allows interaction with the Google Drive API for file and folder manipulation.
- Much like Apps Script's built-in Drive service , this API allows scripts to create, find, and modify files and folders in Google Drive.
- Files . create ( file , image , { fields : "id,size" }); console . log ( "ID: %s, File size (bytes): %s" , file . id , file . size ); } catch ( err ) { // TODO (developer) - Handle exception console . log ( "Failed to upload file with error %s" , err . message ); } } Create a folder The following code sample shows how to create a folder in Drive. / Creates a new folder. / function createFolder () { var folderMetadata = { 'name' : 'New Folder' , 'mimeType' : 'application/vnd.google-apps.folder' }; var folder = Drive .
- Unlike Apps Script's DocumentProperties, Drive's custom file properties can be accessed outside of Apps Script and by other applications; however, appProperties are only visible to the script. @param {string} fileId The ID of the file to add the app property to. / function addAppProperty ( fileId ) { try { let file = { appProperties : { department : "Sales" , }, }; // Updates a file to add an app property. file = Drive .

### Advanced Drive Labels Service \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/advanced/drive-labels](https://developers.google.com/apps-script/advanced/drive-labels)
- Source ID: `site-docs-reference`
- Final score: 93
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Page Summary outlined flag The Google Drive Labels advanced service in Apps Script allows you to create and manage labels for Drive files and folders.
- Sample code is provided to demonstrate listing labels, getting a specific label, and listing labels applied to a Drive item. using the Drive Labels advanced service in Google Apps Script.
- Home Google Workspace Apps Script Reference Send feedback Advanced Drive Labels Service Stay organized with collections Save and categorize content based on your preferences.
- Like all advanced services in Apps Script, the Drive Labels API service uses the same objects, methods, and parameters as the public API.

