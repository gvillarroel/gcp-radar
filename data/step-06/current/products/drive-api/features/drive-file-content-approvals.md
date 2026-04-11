---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T11:41:51.887Z"
product_name: "Drive API"
product_slug: "drive-api"
feature_name: "Drive file content approvals"
feature_slug: "drive-file-content-approvals"
latest_feature_date: "2025-12-17"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://developers.google.com/workspace/drive/api/guides/content-restrictions"
  - "https://developers.google.com/workspace/drive/api/guides/enable-shareddrives"
  - "https://developers.google.com/workspace/drive/api/guides/approvals"
keywords:
  - "drive"
  - "file"
  - "content"
  - "approvals"
  - "the"
  - "api"
  - "supports"
  - "reading"
---

# Drive file content approvals

Product: Drive API
Coverage: LOW

## Step 02 Summary

The Drive API supports reading content approvals on Drive files through the approvals resource using get and list.

## Extended Definition

The Drive API supports reading content approvals on Drive files through the approvals resource using get and list.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://developers.google.com/workspace/drive/api/guides/content-restrictions](https://developers.google.com/workspace/drive/api/guides/content-restrictions)
- [https://developers.google.com/workspace/drive/api/guides/enable-shareddrives](https://developers.google.com/workspace/drive/api/guides/enable-shareddrives)
- [https://developers.google.com/workspace/drive/api/guides/approvals](https://developers.google.com/workspace/drive/api/guides/approvals)

## Supporting Pages

### Protect file content \_|\_ Google Drive \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/drive/api/guides/content-restrictions](https://developers.google.com/workspace/drive/api/guides/content-restrictions)
- Source ID: `site-docs-root`
- Final score: 186
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The Google Drive API supports several ways to prevent file modification, including file content restriction and prohibiting the option to download, print, or copy files.
- The following code sample shows how to add a content restriction for file owners only: Java File updatedFile = new File () . setContentRestrictions ( ImmutableList . of ( new ContentRestriction (). setReadOnly ( true ). setOwnerRestricted ( true ). setReason ( "Finalized contract." )); File response = driveService . files (). update ( " FILE ID " , updatedFile ). setFields ( "contentRestrictions" ). execute (); Python content restriction = { 'readOnly' : True , 'ownerRestricted' : True , 'reason' : 'Finalized contract.' } response = drive service . files () . update ( fileId = " FILE ID " , body = { 'contentRestrictions' : [ content restriction ]}, fields = "contentRestrictions" ) . execute (); Node.js / Set an owner restricted content restriction on a file. @return{obj} updated file / async function addOwnerRestrictedContentRestriction () { // Get credentials and build service // TODO (developer) - Use appropriate auth mechanism for your app const { GoogleAuth } = require ( 'google-auth-library' ); const { google } = require ( 'googleapis' ); const auth = new GoogleAuth ({ scopes : 'https://www.googleapis.com/auth/drive' }); const service = google . drive ({ version : 'v3' , auth }); const contentRestriction = { 'readOnly' : True , 'ownerRestricted' : True , 'reason' : 'Finalized contract.' , }; const updatedFile = { 'contentRestrictions' : [ contentRestriction ], }; try { const response = await service . files . update ({ fileId : ' FILE ID ' , resource : updatedFile , fields : 'contentRestrictions' , }); return response ; } catch ( err ) { // TODO (developer) - Handle error throw err ; } } Replace FILE ID with the fileId of the file that you want to modify.
- Add an optional reason for why you're adding the restriction, such as "Finalized contract." The following code sample shows how to add a content restriction: Java File updatedFile = new File () . setContentRestrictions ( ImmutableList . of ( new ContentRestriction (). setReadOnly ( true ). setReason ( "Finalized contract." )); File response = driveService . files (). update ( " FILE ID " , updatedFile ). setFields ( "contentRestrictions" ). execute (); Python content restriction = { 'readOnly' : True , 'reason' : 'Finalized contract.' } response = drive service . files () . update ( fileId = " FILE ID " , body = { 'contentRestrictions' : [ content restriction ]}, fields = "contentRestrictions" ) . execute (); Node.js / Set a content restriction on a file. @return{obj} updated file / async function addContentRestriction () { // Get credentials and build service // TODO (developer) - Use appropriate auth mechanism for your app const { GoogleAuth } = require ( 'google-auth-library' ); const { google } = require ( 'googleapis' ); const auth = new GoogleAuth ({ scopes : 'https://www.googleapis.com/auth/drive' }); const service = google . drive ({ version : 'v3' , auth }); const contentRestriction = { 'readOnly' : True , 'reason' : 'Finalized contract.' , }; const updatedFile = { 'contentRestrictions' : [ contentRestriction ], }; try { const response = await service . files . update ({ fileId : ' FILE ID ' , resource : updatedFile , fields : 'contentRestrictions' , }); return response ; } catch ( err ) { // TODO (developer) - Handle error throw err ; } } Replace FILE ID with the fileId of the file that you want to modify.
- The following code sample shows how to remove a content restriction: Java File updatedFile = new File () . setContentRestrictions ( ImmutableList . of ( new ContentRestriction (). setReadOnly ( false )); File response = driveService . files (). update ( " FILE ID " , updatedFile ). setFields ( "contentRestrictions" ). execute (); Python content restriction = { 'readOnly' : False } response = drive service . files () . update ( fileId = " FILE ID " , body = { 'contentRestrictions' : [ content restriction ]}, fields = "contentRestrictions" ) . execute (); Node.js / Remove a content restriction on a file. @return{obj} updated file / async function removeContentRestriction () { // Get credentials and build service // TODO (developer) - Use appropriate auth mechanism for your app const { GoogleAuth } = require ( 'google-auth-library' ); const { google } = require ( 'googleapis' ); const auth = new GoogleAuth ({ scopes : 'https://www.googleapis.com/auth/drive' }); const service = google . drive ({ version : 'v3' , auth }); const contentRestriction = { 'readOnly' : False , }; const updatedFile = { 'contentRestrictions' : [ contentRestriction ], }; try { const response = await service . files . update ({ fileId : ' FILE ID ' , resource : updatedFile , fields : 'contentRestrictions' , }); return response ; } catch ( err ) { // TODO (developer) - Handle error throw err ; } } Replace FILE ID with the fileId of the file that you want to modify.

### Implement shared drive support \_|\_ Google Drive \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/drive/api/guides/enable-shareddrives](https://developers.google.com/workspace/drive/api/guides/enable-shareddrives)
- Source ID: `site-docs-root`
- Final score: 178
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- To begin, you must include the supportsAllDrives=true query parameter in your requests when your app performs the following operations: Drive API v3 files.get files.list files.create files.update files.copy files.delete changes.list changes.getStartPageToken permissions.list permissions.get permissions.create permissions.update permissions.delete Drive API v2 files.get files.list files.insert files.update files.patch files.copy files.trash files.untrash files.delete files.touch children.insert parents.insert changes.list changes.getStartPageToken changes.get permissions.list permissions.get permissions.insert permissions.update permissions.patch permissions.delete The supportsAllDrives=true parameter informs Google Drive that your application is designed to handle files on shared drives.
- To refer to a specific shared drive change, both the shared drive ID and change ID must be used as an identifier. includeItemsFromAllDrives : Whether shared drive files or changes should be included in the list of changes. supportsAllDrives : Whether the requesting application supports shared drives.
- Enable shared drive support in the Drive UI To access shared drive content using the Drive UI, make sure you have checked the Shared drives support box on the Drive UI integration tab of the Google Drive API in the Google Cloud console .
- Search for content on a shared drive Use the list method on the files resource to find user files in shared drives.

### Manage approvals \_|\_ Google Drive \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/drive/api/guides/approvals](https://developers.google.com/workspace/drive/api/guides/approvals)
- Source ID: `site-docs-root`
- Final score: 172
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Related topics Manage Approvals Get approvals on files in Google Drive Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- The Google Drive API provides the approvals resource so you can get and list the status of your approvals.
- This document explains how to manage approvals in the Google Drive API.
- Important: Approvals can't be created using the Drive API.

