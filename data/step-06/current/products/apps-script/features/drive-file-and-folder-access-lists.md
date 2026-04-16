---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:53:34.625Z"
product_name: "Apps Script"
product_slug: "apps-script"
feature_name: "Drive file and folder access lists"
feature_slug: "drive-file-and-folder-access-lists"
latest_feature_date: "2013-09-03"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/apps-script/advanced/drive"
  - "https://developers.google.com/apps-script/releases"
  - "https://developers.google.com/apps-script/guides/collaborating"
keywords:
  - "drive"
  - "file"
  - "folder"
  - "access"
  - "lists"
  - "files"
  - "folders"
  - "can"
---

# Drive file and folder access lists

Product: Apps Script
Coverage: MEDIUM

## Step 02 Summary

Drive files and folders can now return their viewers and editors as User arrays.

## Extended Definition

Drive files and folders can now return their viewers and editors as User arrays.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/apps-script/advanced/drive](https://developers.google.com/apps-script/advanced/drive)
- [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- [https://developers.google.com/apps-script/guides/collaborating](https://developers.google.com/apps-script/guides/collaborating)

## Supporting Pages

### Advanced Drive Service \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/advanced/drive](https://developers.google.com/apps-script/advanced/drive)
- Source ID: `site-docs-reference`
- Final score: 184
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Files . list ({ 'q' : query , 'fields' : 'files(id, name, mimeType)' }); if ( files . files && files . files . length > 0 ) { for ( var i = 0 ; i < files . files . length ; i ++ ) { var file = files . files [ i ]; Logger . log ( '%s (ID: %s)' , file . name , file . id ); } } else { Logger . log ( 'No files found.' ); } } List folders The following code sample shows how to list the top-level folders in the user's Drive.
- Note that some files can have several revisions and you should use page tokens to access the full list of results. advanced/drive.gs View on GitHub / Lists the revisions of a given file. @param {string} fileId The ID of the file to list revisions for. / function listRevisions ( fileId ) { let revisions ; let pageToken = null ; do { try { revisions = Drive .
- Note the use of page tokens to access the full list of results. advanced/drive.gs View on GitHub / Lists the top-level folders in the user's Drive. / function listRootFolders () { const query = '"root" in parents and trashed = false and ' + 'mimeType = "application/vnd.google-apps.folder"' ; let folders ; let pageToken = null ; do { try { folders = Drive .
- In most cases, the built-in service is easier to use, but this advanced service provides a few extra features, including access to custom file properties as well as revisions for files and folders.

### Google Apps Script release notes \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- Source ID: `site-docs-root`
- Final score: 146
- Re-rank relevance: N/A

Evidence snippets:
- August 31, 2021 Feature The Drive Service has added three new methods to the file and folder classes to manage the use of resource keys when sharing files and folders. getSecurityUpdateEligible() : Gets whether a file for folder is eligible to apply the security update that requires a resource key for access when it's shared using a link. getSecurityUpdateEnabled() : Gets whether a file or folder requires a resource key for access when it's shared using a link. setSecurityUpdateEnabled(enabled) : Sets whether the file or folder requires a resource key for access when it's shared using a link.
- Added Drive Service , which allows scripts to create and modify files and folders in Google Drive.
- Deprecated Deprecated the DocsList methods find(query, start, max) , getAllFiles(start, max) , getAllFolders(start, max) , getFiles(start, max) , getFilesByType(fileType, start, max) , and getFolders(start, max) .
- Added the DriveApp methods File.getViewers() , File.getEditors() , Folder.getViewers() , and Folder.getEditors() , which return an array of Users with view or edit access.

### Collaborate with other developers \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/guides/collaborating](https://developers.google.com/apps-script/guides/collaborating)
- Source ID: `site-docs-root`
- Final score: 140
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- When you use shared drives to collaborate on Apps Script projects: Collaborators with editor access to a shared drive can create or move new files into the shared drive.
- Collaborators with full access to a shared drive can also delete files and Apps Script projects, and move files out of the shared drive.
- However, if a user is part of the team the shared drive belongs to, you can't reduce their access for specific files.
- For more information, see Sharing files and folders .

