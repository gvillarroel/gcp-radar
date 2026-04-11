---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T11:41:51.890Z"
product_name: "Drive API"
product_slug: "drive-api"
feature_name: "drive.meet.readonly scope"
feature_slug: "drive-meet-readonly-scope"
latest_feature_date: "2024-07-11"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://developers.google.com/workspace/drive/api/guides/api-specific-auth"
  - "https://developers.google.com/workspace/drive/api/guides/content-restrictions"
  - "https://developers.google.com/workspace/drive/api/guides/file-metadata"
keywords:
  - "drive"
  - "meet"
  - "readonly"
  - "scope"
  - "this"
  - "restricted"
  - "lets"
  - "you"
---

# drive.meet.readonly scope

Product: Drive API
Coverage: LOW

## Step 02 Summary

This restricted scope lets you view Drive files created or edited by Google Meet.

## Extended Definition

This restricted scope lets you view Drive files created or edited by Google Meet.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://developers.google.com/workspace/drive/api/guides/api-specific-auth](https://developers.google.com/workspace/drive/api/guides/api-specific-auth)
- [https://developers.google.com/workspace/drive/api/guides/content-restrictions](https://developers.google.com/workspace/drive/api/guides/content-restrictions)
- [https://developers.google.com/workspace/drive/api/guides/file-metadata](https://developers.google.com/workspace/drive/api/guides/file-metadata)

## Supporting Pages

### Choose Google Drive API scopes \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/drive/api/guides/api-specific-auth](https://developers.google.com/workspace/drive/api/guides/api-specific-auth)
- Source ID: `site-docs-root`
- Final score: 176
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Restricted scopes Scope code Description https://www.googleapis.com/auth/drive View and manage all your Drive files. https://www.googleapis.com/auth/drive.readonly View and download all your Drive files. https://www.googleapis.com/auth/drive.activity View and add to the activity record of files in your Drive. https://www.googleapis.com/auth/drive.activity.readonly View the activity record of files in your Drive. https://www.googleapis.com/auth/drive.meet.readonly View Drive files created or edited by Google Meet. https://www.googleapis.com/auth/drive.metadata View and manage metadata of files in your Drive. https://www.googleapis.com/auth/drive.metadata.readonly View metadata for files in your Drive. https://www.googleapis.com/auth/drive.scripts Modify your Google Apps Script scripts' behavior.
- Migrate an existing app from restricted scopes If your Drive app uses restricted scopes, we recommend migrating to a non-sensitive Drive API scope.
- Sensitive scopes Scope code Description https://www.googleapis.com/auth/drive.apps.readonly View apps authorized to access your Drive.
- The drive.file OAuth scope lets users choose which files they want to share with your app.

### Protect file content \_|\_ Google Drive \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/drive/api/guides/content-restrictions](https://developers.google.com/workspace/drive/api/guides/content-restrictions)
- Source ID: `site-docs-root`
- Final score: 148
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The following code sample shows how to add a content restriction for file owners only: Java File updatedFile = new File () . setContentRestrictions ( ImmutableList . of ( new ContentRestriction (). setReadOnly ( true ). setOwnerRestricted ( true ). setReason ( "Finalized contract." )); File response = driveService . files (). update ( " FILE ID " , updatedFile ). setFields ( "contentRestrictions" ). execute (); Python content restriction = { 'readOnly' : True , 'ownerRestricted' : True , 'reason' : 'Finalized contract.' } response = drive service . files () . update ( fileId = " FILE ID " , body = { 'contentRestrictions' : [ content restriction ]}, fields = "contentRestrictions" ) . execute (); Node.js / Set an owner restricted content restriction on a file. @return{obj} updated file / async function addOwnerRestrictedContentRestriction () { // Get credentials and build service // TODO (developer) - Use appropriate auth mechanism for your app const { GoogleAuth } = require ( 'google-auth-library' ); const { google } = require ( 'googleapis' ); const auth = new GoogleAuth ({ scopes : 'https://www.googleapis.com/auth/drive' }); const service = google . drive ({ version : 'v3' , auth }); const contentRestriction = { 'readOnly' : True , 'ownerRestricted' : True , 'reason' : 'Finalized contract.' , }; const updatedFile = { 'contentRestrictions' : [ contentRestriction ], }; try { const response = await service . files . update ({ fileId : ' FILE ID ' , resource : updatedFile , fields : 'contentRestrictions' , }); return response ; } catch ( err ) { // TODO (developer) - Handle error throw err ; } } Replace FILE ID with the fileId of the file that you want to modify.
- Add an optional reason for why you're adding the restriction, such as "Finalized contract." The following code sample shows how to add a content restriction: Java File updatedFile = new File () . setContentRestrictions ( ImmutableList . of ( new ContentRestriction (). setReadOnly ( true ). setReason ( "Finalized contract." )); File response = driveService . files (). update ( " FILE ID " , updatedFile ). setFields ( "contentRestrictions" ). execute (); Python content restriction = { 'readOnly' : True , 'reason' : 'Finalized contract.' } response = drive service . files () . update ( fileId = " FILE ID " , body = { 'contentRestrictions' : [ content restriction ]}, fields = "contentRestrictions" ) . execute (); Node.js / Set a content restriction on a file. @return{obj} updated file / async function addContentRestriction () { // Get credentials and build service // TODO (developer) - Use appropriate auth mechanism for your app const { GoogleAuth } = require ( 'google-auth-library' ); const { google } = require ( 'googleapis' ); const auth = new GoogleAuth ({ scopes : 'https://www.googleapis.com/auth/drive' }); const service = google . drive ({ version : 'v3' , auth }); const contentRestriction = { 'readOnly' : True , 'reason' : 'Finalized contract.' , }; const updatedFile = { 'contentRestrictions' : [ contentRestriction ], }; try { const response = await service . files . update ({ fileId : ' FILE ID ' , resource : updatedFile , fields : 'contentRestrictions' , }); return response ; } catch ( err ) { // TODO (developer) - Handle error throw err ; } } Replace FILE ID with the fileId of the file that you want to modify.
- The following code sample shows how to remove a content restriction: Java File updatedFile = new File () . setContentRestrictions ( ImmutableList . of ( new ContentRestriction (). setReadOnly ( false )); File response = driveService . files (). update ( " FILE ID " , updatedFile ). setFields ( "contentRestrictions" ). execute (); Python content restriction = { 'readOnly' : False } response = drive service . files () . update ( fileId = " FILE ID " , body = { 'contentRestrictions' : [ content restriction ]}, fields = "contentRestrictions" ) . execute (); Node.js / Remove a content restriction on a file. @return{obj} updated file / async function removeContentRestriction () { // Get credentials and build service // TODO (developer) - Use appropriate auth mechanism for your app const { GoogleAuth } = require ( 'google-auth-library' ); const { google } = require ( 'googleapis' ); const auth = new GoogleAuth ({ scopes : 'https://www.googleapis.com/auth/drive' }); const service = google . drive ({ version : 'v3' , auth }); const contentRestriction = { 'readOnly' : False , }; const updatedFile = { 'contentRestrictions' : [ contentRestriction ], }; try { const response = await service . files . update ({ fileId : ' FILE ID ' , resource : updatedFile , fields : 'contentRestrictions' , }); return response ; } catch ( err ) { // TODO (developer) - Handle error throw err ; } } Replace FILE ID with the fileId of the file that you want to modify.
- The following code sample shows how to check the status of a content restriction: Java File response = driveService . files (). get ( " FILE ID " ). setFields ( "contentRestrictions" ). execute (); Python response = drive service . files () . get ( fileId = " FILE ID " , fields = "contentRestrictions" ) . execute (); Node.js / Get content restrictions on a file. @return{obj} updated file / async function fetchContentRestrictions () { // Get credentials and build service // TODO (developer) - Use appropriate auth mechanism for your app const { GoogleAuth } = require ( 'google-auth-library' ); const { google } = require ( 'googleapis' ); const auth = new GoogleAuth ({ scopes : 'https://www.googleapis.com/auth/drive' }); const service = google . drive ({ version : 'v3' , auth }); try { const response = await service . files . get ({ fileId : ' FILE ID ' , fields : 'contentRestrictions' , }); return response ; } catch ( err ) { // TODO (developer) - Handle error throw err ; } } Replace FILE ID with the fileId of the file that you want to check.

### Manage file metadata \_|\_ Google Drive \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/drive/api/guides/file-metadata](https://developers.google.com/workspace/drive/api/guides/file-metadata)
- Source ID: `site-docs-root`
- Final score: 128
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The drive.metadata scope lets you view and manage file metadata, while drive.metadata.readonly is read-only.
- For example, a user might own a file with full permissions, but the Drive API will block attempts to modify or download the file if your app only has the drive.metadata.readonly scope.
- The Drive API offers two restricted metadata scopes: drive.metadata and drive.metadata.readonly .
- GET https://www.googleapis.com/drive/v3/files/q=mimeType='application/vnd.google-apps.spreadsheet'&fields=files(id,name,mimeType,thumbnailLink) Related topics Store application-specific data Add custom file properties Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

