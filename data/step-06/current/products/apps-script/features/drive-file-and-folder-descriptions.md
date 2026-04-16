---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:53:34.661Z"
product_name: "Apps Script"
product_slug: "apps-script"
feature_name: "Drive file and folder descriptions"
feature_slug: "drive-file-and-folder-descriptions"
latest_feature_date: "2012-05-21"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/apps-script/advanced/drive"
  - "https://developers.google.com/apps-script/releases"
  - "https://developers.google.com/apps-script/advanced/drive-labels"
keywords:
  - "drive"
  - "file"
  - "folder"
  - "descriptions"
  - "objects"
  - "can"
  - "now"
  - "get"
---

# Drive file and folder descriptions

Product: Apps Script
Coverage: MEDIUM

## Step 02 Summary

File and Folder objects can now get and set description metadata.

## Extended Definition

File and Folder objects can now get and set description metadata.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/apps-script/advanced/drive](https://developers.google.com/apps-script/advanced/drive)
- [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- [https://developers.google.com/apps-script/advanced/drive-labels](https://developers.google.com/apps-script/advanced/drive-labels)

## Supporting Pages

### Advanced Drive Service \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/advanced/drive](https://developers.google.com/apps-script/advanced/drive)
- Source ID: `site-docs-reference`
- Final score: 120
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Files . create ( file , image , { fields : "id,size" }); console . log ( "ID: %s, File size (bytes): %s" , file . id , file . size ); } catch ( err ) { // TODO (developer) - Handle exception console . log ( "Failed to upload file with error %s" , err . message ); } } Create a folder The following code sample shows how to create a folder in Drive. / Creates a new folder. / function createFolder () { var folderMetadata = { 'name' : 'New Folder' , 'mimeType' : 'application/vnd.google-apps.folder' }; var folder = Drive .
- Files . list ({ 'q' : query , 'fields' : 'files(id, name, mimeType)' }); if ( files . files && files . files . length > 0 ) { for ( var i = 0 ; i < files . files . length ; i ++ ) { var file = files . files [ i ]; Logger . log ( '%s (ID: %s)' , file . name , file . id ); } } else { Logger . log ( 'No files found.' ); } } List folders The following code sample shows how to list the top-level folders in the user's Drive.
- Files . create ( folderMetadata ); Logger . log ( 'Folder ID: ' + folder . id ); } Search for files The following code sample shows how to search for files using a query string. / Searches for files with a specific name. / function searchFiles () { var query = 'name contains "Project Plan" and trashed = false' ; var files = Drive .
- Page Summary outlined flag The advanced Drive service in Apps Script allows interaction with the Google Drive API for file and folder manipulation.

### Advanced Drive Labels Service \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/advanced/drive-labels](https://developers.google.com/apps-script/advanced/drive-labels)
- Source ID: `site-docs-reference`
- Final score: 104
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Page Summary outlined flag The Google Drive Labels advanced service in Apps Script allows you to create and manage labels for Drive files and folders.
- Create and manage labels for your Drive files and folders with the Google Drive Labels advanced service.
- Labels . get ( labelName , { view : "LABEL VIEW FULL" , }); const title = label . properties . title ; const fieldsLength = label . fields . length ; console . log ( Fetched label with title: ' ${ title } ' and ${ fieldsLength } fields. , ); } catch ( err ) { // TODO (developer) - Handle exception console . log ( "Failed to get label with error %s" , err . message ); } } List labels for a Drive item The following code sample shows how to get a Drive item and list all labels applied to that item. advanced/driveLabels.gs View on GitHub / List Labels on a Drive Item Fetches a Drive Item and prints all applied values along with their to their human-readable names. @param {string} fileId The Drive File ID / function listLabelsOnDriveItem ( fileId ) { try { const appliedLabels = Drive .
- Files . listLabels ( fileId ); console . log ( "%d label(s) are applied to this file" , appliedLabels . labels . length , ); for ( const appliedLabel of appliedLabels . labels ) { // Resource name of the label at the applied revision. const labelName = labels/ ${ appliedLabel . id } @ ${ appliedLabel . revisionId } ; console . log ( "Fetching Label: %s" , labelName ); const label = DriveLabels .

### Google Apps Script release notes \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- Source ID: `site-docs-root`
- Final score: 103
- Re-rank relevance: N/A

Evidence snippets:
- August 31, 2021 Feature The Drive Service has added three new methods to the file and folder classes to manage the use of resource keys when sharing files and folders. getSecurityUpdateEligible() : Gets whether a file for folder is eligible to apply the security update that requires a resource key for access when it's shared using a link. getSecurityUpdateEnabled() : Gets whether a file or folder requires a resource key for access when it's shared using a link. setSecurityUpdateEnabled(enabled) : Sets whether the file or folder requires a resource key for access when it's shared using a link.
- October 08, 2013 Feature Added the following FormApp methods, which allow scripts to work with progress bars, custom closed-form messages, and YouTube videos. + Form.hasProgressBar() + Form.setProgressBar(enabled) + Form.getCustomClosedFormMessage() + Form.setCustomClosedFormMessage(message) + Form.addVideoItem() September 23, 2013 Feature Added the following DriveApp methods, which allow scripts to get the owner of a File or Folder.
- FileIterator.getContinuationToken() FolderIterator.getContinuationToken() DriveApp.continueFileIterator(continuationToken) DriveApp.continueFolderIterator(continuationToken) Deprecated The UiApp widgets Hyperlink , InlineHyperlink , LayoutPanel , and RichTextArea have now been disabled, as announced on March 13, 2013 and documented in the Apps Script sunset schedule .
- July 27, 2020 Deprecated The following Folder class methods have been deprecated : addFile(File) addFolder(Folder) removeFile(File) removeFolder(Folder) Announcement To help simplify Google Drive's folder structure and sharing models , new methods have been added to the Drive service and some existing methods have been deprecated.

