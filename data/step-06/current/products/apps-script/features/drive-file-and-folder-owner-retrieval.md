---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:53:34.621Z"
product_name: "Apps Script"
product_slug: "apps-script"
feature_name: "Drive file and folder owner retrieval"
feature_slug: "drive-file-and-folder-owner-retrieval"
latest_feature_date: "2013-09-23"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/apps-script/releases"
  - "https://developers.google.com/apps-script/guides/collaborating"
  - "https://developers.google.com/apps-script/advanced/drive"
keywords:
  - "drive"
  - "file"
  - "folder"
  - "owner"
  - "retrieval"
  - "driveapp"
  - "can"
  - "retrieve"
---

# Drive file and folder owner retrieval

Product: Apps Script
Coverage: MEDIUM

## Step 02 Summary

DriveApp can retrieve the owner of a file or folder.

## Extended Definition

DriveApp can retrieve the owner of a file or folder.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- [https://developers.google.com/apps-script/guides/collaborating](https://developers.google.com/apps-script/guides/collaborating)
- [https://developers.google.com/apps-script/advanced/drive](https://developers.google.com/apps-script/advanced/drive)

## Supporting Pages

### Google Apps Script release notes \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- Source ID: `site-docs-root`
- Final score: 150
- Re-rank relevance: N/A

Evidence snippets:
- October 08, 2013 Feature Added the following FormApp methods, which allow scripts to work with progress bars, custom closed-form messages, and YouTube videos. + Form.hasProgressBar() + Form.setProgressBar(enabled) + Form.getCustomClosedFormMessage() + Form.setCustomClosedFormMessage(message) + Form.addVideoItem() September 23, 2013 Feature Added the following DriveApp methods, which allow scripts to get the owner of a File or Folder.
- FileIterator.getContinuationToken() FolderIterator.getContinuationToken() DriveApp.continueFileIterator(continuationToken) DriveApp.continueFolderIterator(continuationToken) Deprecated The UiApp widgets Hyperlink , InlineHyperlink , LayoutPanel , and RichTextArea have now been disabled, as announced on March 13, 2013 and documented in the Apps Script sunset schedule .
- August 19, 2013 Feature Added the DriveApp methods File.makeCopy(destination) and File.makeCopy(name, destination) , which allow scripts to specify a folder to which a file should be copied.
- Added the DriveApp methods File.getViewers() , File.getEditors() , Folder.getViewers() , and Folder.getEditors() , which return an array of Users with view or edit access.

### Collaborate with other developers \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/guides/collaborating](https://developers.google.com/apps-script/guides/collaborating)
- Source ID: `site-docs-root`
- Final score: 111
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Placing your script project in a shared drive prevents this problem, since files in a shared drive don't have specific owners.
- Shared drives also let you move files across domains — a shared drive in one domain can have collaborators from another domain who can move files from that domain into the shared drive.
- When you create or move an Apps Script project to a Drive folder that other people can access, they inherit the same access to the Apps Script project that they have for the folder.
- Shared drives let you share specific files within the shared drive to others outside the group, and update their edit and view permissions on those files like any other Drive file.

### Advanced Drive Service \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/advanced/drive](https://developers.google.com/apps-script/advanced/drive)
- Source ID: `site-docs-reference`
- Final score: 110
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Files . create ( file , image , { fields : "id,size" }); console . log ( "ID: %s, File size (bytes): %s" , file . id , file . size ); } catch ( err ) { // TODO (developer) - Handle exception console . log ( "Failed to upload file with error %s" , err . message ); } } Create a folder The following code sample shows how to create a folder in Drive. / Creates a new folder. / function createFolder () { var folderMetadata = { 'name' : 'New Folder' , 'mimeType' : 'application/vnd.google-apps.folder' }; var folder = Drive .
- Files . list ({ 'q' : query , 'fields' : 'files(id, name, mimeType)' }); if ( files . files && files . files . length > 0 ) { for ( var i = 0 ; i < files . files . length ; i ++ ) { var file = files . files [ i ]; Logger . log ( '%s (ID: %s)' , file . name , file . id ); } } else { Logger . log ( 'No files found.' ); } } List folders The following code sample shows how to list the top-level folders in the user's Drive.
- Files . create ( folderMetadata ); Logger . log ( 'Folder ID: ' + folder . id ); } Search for files The following code sample shows how to search for files using a query string. / Searches for files with a specific name. / function searchFiles () { var query = 'name contains "Project Plan" and trashed = false' ; var files = Drive .
- Page Summary outlined flag The advanced Drive service in Apps Script allows interaction with the Google Drive API for file and folder manipulation.

