---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:14:32.792Z"
product_name: "Drive API"
product_slug: "drive-api"
feature_name: "Drive file content approvals"
feature_slug: "drive-file-content-approvals"
latest_feature_date: "2025-12-17"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/workspace/drive/api/guides/content-restrictions"
  - "https://developers.google.com/workspace/drive/api/reference/rest/v3"
  - "https://developers.google.com/workspace/drive/api/guides/approvals"
  - "https://developers.google.com/workspace/drive/api/guides/enable-shareddrives"
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
Coverage: MEDIUM

## Step 02 Summary

The Drive API supports reading content approvals on Drive files through the approvals resource using get and list.

## Extended Definition

The Drive API supports reading content approvals on Drive files through the approvals resource using get and list.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/workspace/drive/api/guides/content-restrictions](https://developers.google.com/workspace/drive/api/guides/content-restrictions)
- [https://developers.google.com/workspace/drive/api/reference/rest/v3](https://developers.google.com/workspace/drive/api/reference/rest/v3)
- [https://developers.google.com/workspace/drive/api/guides/approvals](https://developers.google.com/workspace/drive/api/guides/approvals)
- [https://developers.google.com/workspace/drive/api/guides/enable-shareddrives](https://developers.google.com/workspace/drive/api/guides/enable-shareddrives)

## Supporting Pages

### Protect file content \_|\_ Google Drive \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/drive/api/guides/content-restrictions](https://developers.google.com/workspace/drive/api/guides/content-restrictions)
- Source ID: `site-docs-root`
- Final score: 213
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The Google Drive API supports several ways to prevent file modification, including file content restriction and prohibiting the option to download, print, or copy files.
- The following code sample shows how to add a content restriction for file owners only: Java File updatedFile = new File () . setContentRestrictions ( ImmutableList . of ( new ContentRestriction (). setReadOnly ( true ). setOwnerRestricted ( true ). setReason ( "Finalized contract." )); File response = driveService . files (). update ( " FILE ID " , updatedFile ). setFields ( "contentRestrictions" ). execute (); Python content restriction = { 'readOnly' : True , 'ownerRestricted' : True , 'reason' : 'Finalized contract.' } response = drive service . files () . update ( fileId = " FILE ID " , body = { 'contentRestrictions' : [ content restriction ]}, fields = "contentRestrictions" ) . execute (); Node.js / Set an owner restricted content restriction on a file. @return{obj} updated file / async function addOwnerRestrictedContentRestriction () { // Get credentials and build service // TODO (developer) - Use appropriate auth mechanism for your app const { GoogleAuth } = require ( 'google-auth-library' ); const { google } = require ( 'googleapis' ); const auth = new GoogleAuth ({ scopes : 'https://www.googleapis.com/auth/drive' }); const service = google . drive ({ version : 'v3' , auth }); const contentRestriction = { 'readOnly' : True , 'ownerRestricted' : True , 'reason' : 'Finalized contract.' , }; const updatedFile = { 'contentRestrictions' : [ contentRestriction ], }; try { const response = await service . files . update ({ fileId : ' FILE ID ' , resource : updatedFile , fields : 'contentRestrictions' , }); return response ; } catch ( err ) { // TODO (developer) - Handle error throw err ; } } Replace FILE ID with the fileId of the file that you want to modify.
- Add an optional reason for why you're adding the restriction, such as "Finalized contract." The following code sample shows how to add a content restriction: Java File updatedFile = new File () . setContentRestrictions ( ImmutableList . of ( new ContentRestriction (). setReadOnly ( true ). setReason ( "Finalized contract." )); File response = driveService . files (). update ( " FILE ID " , updatedFile ). setFields ( "contentRestrictions" ). execute (); Python content restriction = { 'readOnly' : True , 'reason' : 'Finalized contract.' } response = drive service . files () . update ( fileId = " FILE ID " , body = { 'contentRestrictions' : [ content restriction ]}, fields = "contentRestrictions" ) . execute (); Node.js / Set a content restriction on a file. @return{obj} updated file / async function addContentRestriction () { // Get credentials and build service // TODO (developer) - Use appropriate auth mechanism for your app const { GoogleAuth } = require ( 'google-auth-library' ); const { google } = require ( 'googleapis' ); const auth = new GoogleAuth ({ scopes : 'https://www.googleapis.com/auth/drive' }); const service = google . drive ({ version : 'v3' , auth }); const contentRestriction = { 'readOnly' : True , 'reason' : 'Finalized contract.' , }; const updatedFile = { 'contentRestrictions' : [ contentRestriction ], }; try { const response = await service . files . update ({ fileId : ' FILE ID ' , resource : updatedFile , fields : 'contentRestrictions' , }); return response ; } catch ( err ) { // TODO (developer) - Handle error throw err ; } } Replace FILE ID with the fileId of the file that you want to modify.
- The following code sample shows how to remove a content restriction: Java File updatedFile = new File () . setContentRestrictions ( ImmutableList . of ( new ContentRestriction (). setReadOnly ( false )); File response = driveService . files (). update ( " FILE ID " , updatedFile ). setFields ( "contentRestrictions" ). execute (); Python content restriction = { 'readOnly' : False } response = drive service . files () . update ( fileId = " FILE ID " , body = { 'contentRestrictions' : [ content restriction ]}, fields = "contentRestrictions" ) . execute (); Node.js / Remove a content restriction on a file. @return{obj} updated file / async function removeContentRestriction () { // Get credentials and build service // TODO (developer) - Use appropriate auth mechanism for your app const { GoogleAuth } = require ( 'google-auth-library' ); const { google } = require ( 'googleapis' ); const auth = new GoogleAuth ({ scopes : 'https://www.googleapis.com/auth/drive' }); const service = google . drive ({ version : 'v3' , auth }); const contentRestriction = { 'readOnly' : False , }; const updatedFile = { 'contentRestrictions' : [ contentRestriction ], }; try { const response = await service . files . update ({ fileId : ' FILE ID ' , resource : updatedFile , fields : 'contentRestrictions' , }); return response ; } catch ( err ) { // TODO (developer) - Handle error throw err ; } } Replace FILE ID with the fileId of the file that you want to modify.

### Google Drive API \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/drive/api/reference/rest/v3](https://developers.google.com/workspace/drive/api/reference/rest/v3)
- Source ID: `site-docs-reference`
- Final score: 202
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- REST Resource: v3.about REST Resource: v3.accessproposals REST Resource: v3.approvals REST Resource: v3.apps REST Resource: v3.changes REST Resource: v3.channels REST Resource: v3.comments REST Resource: v3.drives REST Resource: v3.files REST Resource: v3.operations REST Resource: v3.permissions REST Resource: v3.replies REST Resource: v3.revisions Service: googleapis.com/drive/v3 To call this service, we recommend that you use the Google-provided client libraries .
- REST Resource: v3.files Methods copy POST /drive/v3/files/{fileId}/copy Creates a copy of a file and applies any requested updates with patch semantics. create POST /drive/v3/files POST /upload/drive/v3/files Creates a file. delete DELETE /drive/v3/files/{fileId} Permanently deletes a file owned by the user without moving it to the trash. download POST /drive/v3/files/{fileId}/download Downloads the content of a file. emptyTrash DELETE /drive/v3/files/trash Permanently deletes all of the user's trashed files. export GET /drive/v3/files/{fileId}/export Exports a Google Workspace document to the requested MIME type and returns exported byte content. generateIds GET /drive/v3/files/generateIds Generates a set of file IDs which can be provided in create or copy requests. get GET /drive/v3/files/{fileId} Gets a file's metadata or content by ID. list GET /drive/v3/files Lists the user's files. listLabels GET /drive/v3/files/{fileId}/listLabels Lists the labels on a file. modifyLabels POST /drive/v3/files/{fileId}/modifyLabels Modifies the set of labels applied to a file. update PATCH /drive/v3/files/{fileId} PATCH /upload/drive/v3/files/{fileId} Updates a file's metadata, content, or both. watch POST /drive/v3/files/{fileId}/watch Subscribes to changes to a file.
- REST Resource: v3.approvals Methods get GET /drive/v3/files/{fileId}/approvals/{approvalId} Gets an Approval by ID. list GET /drive/v3/files/{fileId}/approvals Lists the Approvals on a file.
- REST Resource: v3.revisions Methods delete DELETE /drive/v3/files/{fileId}/revisions/{revisionId} Permanently deletes a file version. get GET /drive/v3/files/{fileId}/revisions/{revisionId} Gets a revision's metadata or content by ID. list GET /drive/v3/files/{fileId}/revisions Lists a file's revisions. update PATCH /drive/v3/files/{fileId}/revisions/{revisionId} Updates a revision with patch semantics.

### Manage approvals \_|\_ Google Drive \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/drive/api/guides/approvals](https://developers.google.com/workspace/drive/api/guides/approvals)
- Source ID: `site-docs-root`
- Final score: 202
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Related topics Manage Approvals Get approvals on files in Google Drive Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- The Google Drive API provides the approvals resource so you can get and list the status of your approvals.
- This document explains how to manage approvals in the Google Drive API.
- Important: Approvals can't be created using the Drive API.

### Implement shared drive support \_|\_ Google Drive \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/drive/api/guides/enable-shareddrives](https://developers.google.com/workspace/drive/api/guides/enable-shareddrives)
- Source ID: `site-docs-root`
- Final score: 201
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To begin, you must include the supportsAllDrives=true query parameter in your requests when your app performs the following operations: Drive API v3 files.get files.list files.create files.update files.copy files.delete changes.list changes.getStartPageToken permissions.list permissions.get permissions.create permissions.update permissions.delete Drive API v2 files.get files.list files.insert files.update files.patch files.copy files.trash files.untrash files.delete files.touch children.insert parents.insert changes.list changes.getStartPageToken changes.get permissions.list permissions.get permissions.insert permissions.update permissions.patch permissions.delete The supportsAllDrives=true parameter informs Google Drive that your application is designed to handle files on shared drives.
- To refer to a specific shared drive change, both the shared drive ID and change ID must be used as an identifier. includeItemsFromAllDrives : Whether shared drive files or changes should be included in the list of changes. supportsAllDrives : Whether the requesting application supports shared drives.
- Enable shared drive support in the Drive UI To access shared drive content using the Drive UI, make sure you have checked the Shared drives support box on the Drive UI integration tab of the Google Drive API in the Google Cloud console .
- Search for content on a shared drive Use the list method on the files resource to find user files in shared drives.

