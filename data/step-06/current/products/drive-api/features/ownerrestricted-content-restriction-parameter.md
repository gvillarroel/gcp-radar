---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T11:41:51.892Z"
product_name: "Drive API"
product_slug: "drive-api"
feature_name: "ownerRestricted content restriction parameter"
feature_slug: "ownerrestricted-content-restriction-parameter"
latest_feature_date: "2023-07-24"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://developers.google.com/workspace/drive/api/guides/content-restrictions"
  - "https://developers.google.com/workspace/drive/api/guides/create-file"
  - "https://developers.google.com/workspace/drive/api/guides/manage-comments"
keywords:
  - "ownerrestricted"
  - "content"
  - "restriction"
  - "parameter"
  - "this"
  - "lets"
  - "only"
  - "the"
---

# ownerRestricted content restriction parameter

Product: Drive API
Coverage: LOW

## Step 02 Summary

This content restriction parameter lets only the file owner modify the restriction.

## Extended Definition

This content restriction parameter lets only the file owner modify the restriction.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://developers.google.com/workspace/drive/api/guides/content-restrictions](https://developers.google.com/workspace/drive/api/guides/content-restrictions)
- [https://developers.google.com/workspace/drive/api/guides/create-file](https://developers.google.com/workspace/drive/api/guides/create-file)
- [https://developers.google.com/workspace/drive/api/guides/manage-comments](https://developers.google.com/workspace/drive/api/guides/manage-comments)

## Supporting Pages

### Protect file content \_|\_ Google Drive \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/drive/api/guides/content-restrictions](https://developers.google.com/workspace/drive/api/guides/content-restrictions)
- Source ID: `site-docs-root`
- Final score: 158
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The following code sample shows how to add a content restriction for file owners only: Java File updatedFile = new File () . setContentRestrictions ( ImmutableList . of ( new ContentRestriction (). setReadOnly ( true ). setOwnerRestricted ( true ). setReason ( "Finalized contract." )); File response = driveService . files (). update ( " FILE ID " , updatedFile ). setFields ( "contentRestrictions" ). execute (); Python content restriction = { 'readOnly' : True , 'ownerRestricted' : True , 'reason' : 'Finalized contract.' } response = drive service . files () . update ( fileId = " FILE ID " , body = { 'contentRestrictions' : [ content restriction ]}, fields = "contentRestrictions" ) . execute (); Node.js / Set an owner restricted content restriction on a file. @return{obj} updated file / async function addOwnerRestrictedContentRestriction () { // Get credentials and build service // TODO (developer) - Use appropriate auth mechanism for your app const { GoogleAuth } = require ( 'google-auth-library' ); const { google } = require ( 'googleapis' ); const auth = new GoogleAuth ({ scopes : 'https://www.googleapis.com/auth/drive' }); const service = google . drive ({ version : 'v3' , auth }); const contentRestriction = { 'readOnly' : True , 'ownerRestricted' : True , 'reason' : 'Finalized contract.' , }; const updatedFile = { 'contentRestrictions' : [ contentRestriction ], }; try { const response = await service . files . update ({ fileId : ' FILE ID ' , resource : updatedFile , fields : 'contentRestrictions' , }); return response ; } catch ( err ) { // TODO (developer) - Handle error throw err ; } } Replace FILE ID with the fileId of the file that you want to modify.
- Add a content restriction only the file owner can modify To add a file content restriction so only file owners can toggle the mechanism, use the files.update method with the contentRestrictions.ownerRestricted boolean field set to true .
- Add an optional reason for why you're adding the restriction, such as "Finalized contract." The following code sample shows how to add a content restriction: Java File updatedFile = new File () . setContentRestrictions ( ImmutableList . of ( new ContentRestriction (). setReadOnly ( true ). setReason ( "Finalized contract." )); File response = driveService . files (). update ( " FILE ID " , updatedFile ). setFields ( "contentRestrictions" ). execute (); Python content restriction = { 'readOnly' : True , 'reason' : 'Finalized contract.' } response = drive service . files () . update ( fileId = " FILE ID " , body = { 'contentRestrictions' : [ content restriction ]}, fields = "contentRestrictions" ) . execute (); Node.js / Set a content restriction on a file. @return{obj} updated file / async function addContentRestriction () { // Get credentials and build service // TODO (developer) - Use appropriate auth mechanism for your app const { GoogleAuth } = require ( 'google-auth-library' ); const { google } = require ( 'googleapis' ); const auth = new GoogleAuth ({ scopes : 'https://www.googleapis.com/auth/drive' }); const service = google . drive ({ version : 'v3' , auth }); const contentRestriction = { 'readOnly' : True , 'reason' : 'Finalized contract.' , }; const updatedFile = { 'contentRestrictions' : [ contentRestriction ], }; try { const response = await service . files . update ({ fileId : ' FILE ID ' , resource : updatedFile , fields : 'contentRestrictions' , }); return response ; } catch ( err ) { // TODO (developer) - Handle error throw err ; } } Replace FILE ID with the fileId of the file that you want to modify.
- The following code sample shows how to remove a content restriction: Java File updatedFile = new File () . setContentRestrictions ( ImmutableList . of ( new ContentRestriction (). setReadOnly ( false )); File response = driveService . files (). update ( " FILE ID " , updatedFile ). setFields ( "contentRestrictions" ). execute (); Python content restriction = { 'readOnly' : False } response = drive service . files () . update ( fileId = " FILE ID " , body = { 'contentRestrictions' : [ content restriction ]}, fields = "contentRestrictions" ) . execute (); Node.js / Remove a content restriction on a file. @return{obj} updated file / async function removeContentRestriction () { // Get credentials and build service // TODO (developer) - Use appropriate auth mechanism for your app const { GoogleAuth } = require ( 'google-auth-library' ); const { google } = require ( 'googleapis' ); const auth = new GoogleAuth ({ scopes : 'https://www.googleapis.com/auth/drive' }); const service = google . drive ({ version : 'v3' , auth }); const contentRestriction = { 'readOnly' : False , }; const updatedFile = { 'contentRestrictions' : [ contentRestriction ], }; try { const response = await service . files . update ({ fileId : ' FILE ID ' , resource : updatedFile , fields : 'contentRestrictions' , }); return response ; } catch ( err ) { // TODO (developer) - Handle error throw err ; } } Replace FILE ID with the fileId of the file that you want to modify.

### Create and manage files \_|\_ Google Drive \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/drive/api/guides/create-file](https://developers.google.com/workspace/drive/api/guides/create-file)
- Source ID: `site-docs-root`
- Final score: 106
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Create file To create a file in Drive that contains no metadata or content, use the create method on the files resource with no parameters.
- Limits and considerations As you prepare to copy files, take note of these limits and considerations: Permissions : The DownloadRestrictionsMetadata object of the files resource determines who can copy the file.
- Generate IDs to use with your files The generateIds method on the files resource lets you pre-generate unique file IDs that can be used when creating or copying files and folders in Drive.

### Manage comments and replies \_|\_ Google Drive \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/drive/api/guides/manage-comments](https://developers.google.com/workspace/drive/api/guides/manage-comments)
- Source ID: `site-docs-root`
- Final score: 104
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- POST https://www.googleapis.com/drive/v3/files/ FILE ID /comments/ COMMENT ID /replies?fields=id,comment Request body { "action": "resolve", "content": "This comment has been resolved." } Get a comment To get a comment on a file, use the get method on the comments resource with the fileId and commentId parameters.
- PATCH https://www.googleapis.com/drive/v3/files/ FILE ID /comments/ COMMENT ID ?fields=id,comment Request body { "content": "This comment is now updated." } Delete a comment To delete a comment on a file, use the delete method on the comments resource with the fileId and commentId parameters.
- DELETE https://www.googleapis.com/drive/v3/files/ FILE ID /comments/ COMMENT ID Related topics Files and folders overview Manage file revisions Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- POST https://www.googleapis.com/drive/v3/files/ FILE ID /comments/ COMMENT ID /replies?fields=id,comment Request body { "content": "This is a reply to a comment." } Resolve a comment A comment can only be resolved by posting a reply to a comment.

