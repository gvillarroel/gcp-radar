---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:53:34.621Z"
product_name: "Apps Script"
product_slug: "apps-script"
feature_name: "Drive iterator continuation tokens"
feature_slug: "drive-iterator-continuation-tokens"
latest_feature_date: "2013-09-16"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/apps-script/releases"
  - "https://developers.google.com/apps-script/advanced/drive"
  - "https://developers.google.com/apps-script/reference/add-ons-response-service/drive-items-selected-action-response-builder"
keywords:
  - "drive"
  - "iterator"
  - "continuation"
  - "tokens"
  - "driveapp"
  - "supports"
  - "saving"
  - "resuming"
---

# Drive iterator continuation tokens

Product: Apps Script
Coverage: MEDIUM

## Step 02 Summary

DriveApp supports saving and resuming file and folder iterators with continuation tokens.

## Extended Definition

DriveApp supports saving and resuming file and folder iterators with continuation tokens.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- [https://developers.google.com/apps-script/advanced/drive](https://developers.google.com/apps-script/advanced/drive)
- [https://developers.google.com/apps-script/reference/add-ons-response-service/drive-items-selected-action-response-builder](https://developers.google.com/apps-script/reference/add-ons-response-service/drive-items-selected-action-response-builder)

## Supporting Pages

### Google Apps Script release notes \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- Source ID: `site-docs-root`
- Final score: 142
- Re-rank relevance: N/A

Evidence snippets:
- FileIterator.getContinuationToken() FolderIterator.getContinuationToken() DriveApp.continueFileIterator(continuationToken) DriveApp.continueFolderIterator(continuationToken) Deprecated The UiApp widgets Hyperlink , InlineHyperlink , LayoutPanel , and RichTextArea have now been disabled, as announced on March 13, 2013 and documented in the Apps Script sunset schedule .
- September 03, 2013 Feature Added the DriveApp methods DriveApp.getFoldersByName(name) and DriveApp.searchFolders(params) , which return a FolderIterator with the requested results.
- Added the following DriveApp methods, which allow scripts to save the state of a file or folder iterator and resume at a later time.
- October 08, 2013 Feature Added the following FormApp methods, which allow scripts to work with progress bars, custom closed-form messages, and YouTube videos. + Form.hasProgressBar() + Form.setProgressBar(enabled) + Form.getCustomClosedFormMessage() + Form.setCustomClosedFormMessage(message) + Form.addVideoItem() September 23, 2013 Feature Added the following DriveApp methods, which allow scripts to get the owner of a File or Folder.

### Advanced Drive Service \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/advanced/drive](https://developers.google.com/apps-script/advanced/drive)
- Source ID: `site-docs-reference`
- Final score: 60
- Re-rank relevance: N/A

Evidence snippets:
- Note that some files can have several revisions and you should use page tokens to access the full list of results. advanced/drive.gs View on GitHub / Lists the revisions of a given file. @param {string} fileId The ID of the file to list revisions for. / function listRevisions ( fileId ) { let revisions ; let pageToken = null ; do { try { revisions = Drive .
- Note the use of page tokens to access the full list of results. advanced/drive.gs View on GitHub / Lists the top-level folders in the user's Drive. / function listRootFolders () { const query = '"root" in parents and trashed = false and ' + 'mimeType = "application/vnd.google-apps.folder"' ; let folders ; let pageToken = null ; do { try { folders = Drive .
- Files . update ( file , fileId , null , { fields : "id,appProperties" , }); console . log ( "ID: %s, appProperties: %s" , file . id , JSON . stringify ( file . appProperties , null , 2 ), ); } catch ( err ) { // TODO (developer) - Handle exception console . log ( "Failed with error %s" , err . message ); } } Add a user to a file The following code sample shows how to add a user as an editor to a file and suppress the email notification. / Adds a user to a file as an editor without sending an email notification. / function addEditor () { var fileId = '1234567890abcdefghijklmnopqrstuvwxyz' ; var userEmail = 'bob@example.com' ; var request = { 'role' : 'writer' , 'type' : 'user' , 'emailAddress' : userEmail }; Drive .
- Files . create ( file , image , { fields : "id,size" }); console . log ( "ID: %s, File size (bytes): %s" , file . id , file . size ); } catch ( err ) { // TODO (developer) - Handle exception console . log ( "Failed to upload file with error %s" , err . message ); } } Create a folder The following code sample shows how to create a folder in Drive. / Creates a new folder. / function createFolder () { var folderMetadata = { 'name' : 'New Folder' , 'mimeType' : 'application/vnd.google-apps.folder' }; var folder = Drive .

### "Class DriveItemsSelectedActionResponseBuilder \_|\_ Apps Script \_|\_ Google\

- URL: [https://developers.google.com/apps-script/reference/add-ons-response-service/drive-items-selected-action-response-builder](https://developers.google.com/apps-script/reference/add-ons-response-service/drive-items-selected-action-response-builder)
- Source ID: `site-docs-reference-3`
- Final score: 59
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Methods Method Return type Brief description build() Drive Items Selected Action Response Builds the current Drive action response. request File Scope(itemId) Drive Items Selected Action Response Builder Specifies that the response requests file scope for the contextually-relevant item in Drive.
- Return DriveItemsSelectedActionResponse — A validated DriveItemsSelectedActionResponse . requestFileScope(itemId) Specifies that the response requests file scope for the contextually-relevant item in Drive.
- Home Google Workspace Apps Script Reference Send feedback Class DriveItemsSelectedActionResponseBuilder Stay organized with collections Save and categorize content based on your preferences.
- DriveItemsSelectedActionResponseBuilder A builder for DriveItemsSelectedActionResponse objects.

