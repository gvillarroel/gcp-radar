---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:53:34.635Z"
product_name: "Apps Script"
product_slug: "apps-script"
feature_name: "Drive file commenter management"
feature_slug: "drive-file-commenter-management"
latest_feature_date: "2013-06-17"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/apps-script/releases"
  - "https://developers.google.com/apps-script/reference/add-ons-response-service/drive-items-selected-action-response-builder"
  - "https://developers.google.com/apps-script/advanced/drive-labels"
keywords:
  - "drive"
  - "file"
  - "commenter"
  - "management"
  - "can"
  - "now"
  - "add"
  - "remove"
---

# Drive file commenter management

Product: Apps Script
Coverage: MEDIUM

## Step 02 Summary

The Drive Service can now add and remove commenters on files.

## Extended Definition

The Drive Service can now add and remove commenters on files.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- [https://developers.google.com/apps-script/reference/add-ons-response-service/drive-items-selected-action-response-builder](https://developers.google.com/apps-script/reference/add-ons-response-service/drive-items-selected-action-response-builder)
- [https://developers.google.com/apps-script/advanced/drive-labels](https://developers.google.com/apps-script/advanced/drive-labels)

## Supporting Pages

### Google Apps Script release notes \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- Source ID: `site-docs-root`
- Final score: 102
- Re-rank relevance: N/A

Evidence snippets:
- Feature Issue 1034 : The new Drive Service methods addCommenter() and removeCommenter() allow scripts to add and remove commenters on files.
- July 27, 2020 Deprecated The following Folder class methods have been deprecated : addFile(File) addFolder(Folder) removeFile(File) removeFolder(Folder) Announcement To help simplify Google Drive's folder structure and sharing models , new methods have been added to the Drive service and some existing methods have been deprecated.
- August 31, 2021 Feature The Drive Service has added three new methods to the file and folder classes to manage the use of resource keys when sharing files and folders. getSecurityUpdateEligible() : Gets whether a file for folder is eligible to apply the security update that requires a resource key for access when it's shared using a link. getSecurityUpdateEnabled() : Gets whether a file or folder requires a resource key for access when it's shared using a link. setSecurityUpdateEnabled(enabled) : Sets whether the file or folder requires a resource key for access when it's shared using a link.
- October 08, 2013 Feature Added the following FormApp methods, which allow scripts to work with progress bars, custom closed-form messages, and YouTube videos. + Form.hasProgressBar() + Form.setProgressBar(enabled) + Form.getCustomClosedFormMessage() + Form.setCustomClosedFormMessage(message) + Form.addVideoItem() September 23, 2013 Feature Added the following DriveApp methods, which allow scripts to get the owner of a File or Folder.

### "Class DriveItemsSelectedActionResponseBuilder \_|\_ Apps Script \_|\_ Google\

- URL: [https://developers.google.com/apps-script/reference/add-ons-response-service/drive-items-selected-action-response-builder](https://developers.google.com/apps-script/reference/add-ons-response-service/drive-items-selected-action-response-builder)
- Source ID: `site-docs-reference-3`
- Final score: 84
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Methods Method Return type Brief description build() Drive Items Selected Action Response Builds the current Drive action response. request File Scope(itemId) Drive Items Selected Action Response Builder Specifies that the response requests file scope for the contextually-relevant item in Drive.
- Return DriveItemsSelectedActionResponse — A validated DriveItemsSelectedActionResponse . requestFileScope(itemId) Specifies that the response requests file scope for the contextually-relevant item in Drive.
- Parameters Name Type Description item Id String ID of the Drive item to request file scope for.
- Home Google Workspace Apps Script Reference Send feedback Class DriveItemsSelectedActionResponseBuilder Stay organized with collections Save and categorize content based on your preferences.

### Advanced Drive Labels Service \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/advanced/drive-labels](https://developers.google.com/apps-script/advanced/drive-labels)
- Source ID: `site-docs-reference`
- Final score: 84
- Re-rank relevance: N/A

Evidence snippets:
- Labels . get ( labelName , { view : "LABEL VIEW FULL" , }); const title = label . properties . title ; const fieldsLength = label . fields . length ; console . log ( Fetched label with title: ' ${ title } ' and ${ fieldsLength } fields. , ); } catch ( err ) { // TODO (developer) - Handle exception console . log ( "Failed to get label with error %s" , err . message ); } } List labels for a Drive item The following code sample shows how to get a Drive item and list all labels applied to that item. advanced/driveLabels.gs View on GitHub / List Labels on a Drive Item Fetches a Drive Item and prints all applied values along with their to their human-readable names. @param {string} fileId The Drive File ID / function listLabelsOnDriveItem ( fileId ) { try { const appliedLabels = Drive .
- Files . listLabels ( fileId ); console . log ( "%d label(s) are applied to this file" , appliedLabels . labels . length , ); for ( const appliedLabel of appliedLabels . labels ) { // Resource name of the label at the applied revision. const labelName = labels/ ${ appliedLabel . id } @ ${ appliedLabel . revisionId } ; console . log ( "Fetching Label: %s" , labelName ); const label = DriveLabels .
- Page Summary outlined flag The Google Drive Labels advanced service in Apps Script allows you to create and manage labels for Drive files and folders.
- Create and manage labels for your Drive files and folders with the Google Drive Labels advanced service.

