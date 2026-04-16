---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:53:34.637Z"
product_name: "Apps Script"
product_slug: "apps-script"
feature_name: "Drive Service"
feature_slug: "drive-service"
latest_feature_date: "2013-05-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/apps-script/advanced/drive"
  - "https://developers.google.com/apps-script/releases"
  - "https://developers.google.com/apps-script/advanced/drive-labels"
keywords:
  - "drive"
  - "was"
  - "added"
  - "create"
  - "modify"
  - "files"
  - "folders"
---

# Drive Service

Product: Apps Script
Coverage: MEDIUM

## Step 02 Summary

Drive Service was added to create and modify files and folders in Google Drive.

## Extended Definition

Drive Service was added to create and modify files and folders in Google Drive.

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
- Final score: 186
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Much like Apps Script's built-in Drive service , this API allows scripts to create, find, and modify files and folders in Google Drive.
- Files . update ( file , fileId , null , { fields : "id,appProperties" , }); console . log ( "ID: %s, appProperties: %s" , file . id , JSON . stringify ( file . appProperties , null , 2 ), ); } catch ( err ) { // TODO (developer) - Handle exception console . log ( "Failed with error %s" , err . message ); } } Add a user to a file The following code sample shows how to add a user as an editor to a file and suppress the email notification. / Adds a user to a file as an editor without sending an email notification. / function addEditor () { var fileId = '1234567890abcdefghijklmnopqrstuvwxyz' ; var userEmail = 'bob@example.com' ; var request = { 'role' : 'writer' , 'type' : 'user' , 'emailAddress' : userEmail }; Drive .
- Files . create ( file , image , { fields : "id,size" }); console . log ( "ID: %s, File size (bytes): %s" , file . id , file . size ); } catch ( err ) { // TODO (developer) - Handle exception console . log ( "Failed to upload file with error %s" , err . message ); } } Create a folder The following code sample shows how to create a folder in Drive. / Creates a new folder. / function createFolder () { var folderMetadata = { 'name' : 'New Folder' , 'mimeType' : 'application/vnd.google-apps.folder' }; var folder = Drive .
- Files . list ({ 'q' : query , 'fields' : 'files(id, name, mimeType)' }); if ( files . files && files . files . length > 0 ) { for ( var i = 0 ; i < files . files . length ; i ++ ) { var file = files . files [ i ]; Logger . log ( '%s (ID: %s)' , file . name , file . id ); } } else { Logger . log ( 'No files found.' ); } } List folders The following code sample shows how to list the top-level folders in the user's Drive.

### Google Apps Script release notes \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- Source ID: `site-docs-root`
- Final score: 162
- Re-rank relevance: N/A

Evidence snippets:
- Added Drive Service , which allows scripts to create and modify files and folders in Google Drive.
- August 31, 2021 Feature The Drive Service has added three new methods to the file and folder classes to manage the use of resource keys when sharing files and folders. getSecurityUpdateEligible() : Gets whether a file for folder is eligible to apply the security update that requires a resource key for access when it's shared using a link. getSecurityUpdateEnabled() : Gets whether a file or folder requires a resource key for access when it's shared using a link. setSecurityUpdateEnabled(enabled) : Sets whether the file or folder requires a resource key for access when it's shared using a link.
- September 03, 2013 Feature Added the DriveApp methods DriveApp.getFoldersByName(name) and DriveApp.searchFolders(params) , which return a FolderIterator with the requested results.
- Fixed Issue 2916 : HTML files inserted into a new Apps Script project using the Google Drive SDK are no longer created with the server js filetype.

### Advanced Drive Labels Service \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/advanced/drive-labels](https://developers.google.com/apps-script/advanced/drive-labels)
- Source ID: `site-docs-reference`
- Final score: 120
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Page Summary outlined flag The Google Drive Labels advanced service in Apps Script allows you to create and manage labels for Drive files and folders.
- Create and manage labels for your Drive files and folders with the Google Drive Labels advanced service.
- Files . listLabels ( fileId ); console . log ( "%d label(s) are applied to this file" , appliedLabels . labels . length , ); for ( const appliedLabel of appliedLabels . labels ) { // Resource name of the label at the applied revision. const labelName = labels/ ${ appliedLabel . id } @ ${ appliedLabel . revisionId } ; console . log ( "Fetching Label: %s" , labelName ); const label = DriveLabels .
- Labels . get ( labelName , { view : "LABEL VIEW FULL" , }); const title = label . properties . title ; const fieldsLength = label . fields . length ; console . log ( Fetched label with title: ' ${ title } ' and ${ fieldsLength } fields. , ); } catch ( err ) { // TODO (developer) - Handle exception console . log ( "Failed to get label with error %s" , err . message ); } } List labels for a Drive item The following code sample shows how to get a Drive item and list all labels applied to that item. advanced/driveLabels.gs View on GitHub / List Labels on a Drive Item Fetches a Drive Item and prints all applied values along with their to their human-readable names. @param {string} fileId The Drive File ID / function listLabelsOnDriveItem ( fileId ) { try { const appliedLabels = Drive .

