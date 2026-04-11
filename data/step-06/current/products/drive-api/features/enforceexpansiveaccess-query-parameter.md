---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T11:41:51.887Z"
product_name: "Drive API"
product_slug: "drive-api"
feature_name: "enforceExpansiveAccess query parameter"
feature_slug: "enforceexpansiveaccess-query-parameter"
latest_feature_date: "2026-02-25"
deprecation_date: "2026-02-25"
coverage_status: "LOW"
source_links:
  - "https://developers.google.com/workspace/drive/api/guides/fields-parameter"
  - "https://developers.google.com/workspace/drive/api/guides/manage-comments"
  - "https://developers.google.com/workspace/drive/api/guides/enable-shareddrives"
keywords:
  - "enforceexpansiveaccess"
  - "query"
  - "parameter"
  - "this"
  - "request"
  - "for"
  - "permissions"
  - "methods"
---

# enforceExpansiveAccess query parameter

Product: Drive API
Coverage: LOW

## Step 02 Summary

This request parameter for permissions methods is deprecated and should be replaced by folders with limited access settings; deprecated on 2026-02-25.

## Extended Definition

This request parameter for permissions methods is deprecated and should be replaced by folders with limited access settings; deprecated on 2026-02-25.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://developers.google.com/workspace/drive/api/guides/fields-parameter](https://developers.google.com/workspace/drive/api/guides/fields-parameter)
- [https://developers.google.com/workspace/drive/api/guides/manage-comments](https://developers.google.com/workspace/drive/api/guides/manage-comments)
- [https://developers.google.com/workspace/drive/api/guides/enable-shareddrives](https://developers.google.com/workspace/drive/api/guides/enable-shareddrives)

## Supporting Pages

### Return specific fields \_|\_ Google Drive \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/drive/api/guides/fields-parameter](https://developers.google.com/workspace/drive/api/guides/fields-parameter)
- Source ID: `site-docs-root`
- Final score: 154
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Request In this example, we provide the file ID path parameter and multiple fields, including certain fields of the nested permissions resource, as a query parameter in the request.
- Request In this example, we provide the file ID path parameter and multiple fields as a query parameter in the request.
- GET https : //www.googleapis.com/drive/v3/files/ FILE ID ?fields=name,starred,shared,permissions(kind,type,role) Response { "name" : "File1" , "starred" : false , "shared" : true , "permissions" : [ { "kind" : "drive#permission" , "type" : "user" , "role" : "owner" } ] } Alternative system parameters Query parameters that apply to all Google Drive API operations are documented at System Parameters .
- For example, files.list(fields='files(id,capabilities,canAddChildren)') yields an error of "Invalid field selection canAddChildren." The correct fields parameter for this example is files.list(fields='files(id,capabilities/canAddChildren)') .

### Manage comments and replies \_|\_ Google Drive \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/drive/api/guides/manage-comments](https://developers.google.com/workspace/drive/api/guides/manage-comments)
- Source ID: `site-docs-root`
- Final score: 134
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Request In this example, we provide the fileId path parameter, the includeDeleted query parameter, and multiple fields.
- For an unanchored comment, omit the 'anchor' property. comment body = { 'content' : COMMENT TEXT } Create the comment request. comment = ( service . comments () . create ( fileId = FILE ID , fields = " " , body = comment body ) . execute () ) print ( f "Comment ID: { comment . get ( 'id' ) } " ) return comment except HttpError as error : print ( f "An error occurred: { error } " ) return None create unanchored comment () Important: We recommend you check that a user has the correct permissions to add comments.
- POST https://www.googleapis.com/drive/v3/files/ FILE ID /comments/ COMMENT ID /replies?fields=id,comment Request body { "action": "resolve", "content": "This comment has been resolved." } Get a comment To get a comment on a file, use the get method on the comments resource with the fileId and commentId parameters.
- PATCH https://www.googleapis.com/drive/v3/files/ FILE ID /comments/ COMMENT ID ?fields=id,comment Request body { "content": "This comment is now updated." } Delete a comment To delete a comment on a file, use the delete method on the comments resource with the fileId and commentId parameters.

### Implement shared drive support \_|\_ Google Drive \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/drive/api/guides/enable-shareddrives](https://developers.google.com/workspace/drive/api/guides/enable-shareddrives)
- Source ID: `site-docs-root`
- Final score: 132
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- To begin, you must include the supportsAllDrives=true query parameter in your requests when your app performs the following operations: Drive API v3 files.get files.list files.create files.update files.copy files.delete changes.list changes.getStartPageToken permissions.list permissions.get permissions.create permissions.update permissions.delete Drive API v2 files.get files.list files.insert files.update files.patch files.copy files.trash files.untrash files.delete files.touch children.insert parents.insert changes.list changes.getStartPageToken changes.get permissions.list permissions.get permissions.insert permissions.update permissions.patch permissions.delete The supportsAllDrives=true parameter informs Google Drive that your application is designed to handle files on shared drives.
- Note that the response might include incompleteSearch:true , indicating that some corpora were not searched for this request.
- The list method contains the following shared drive-specific query parameters: driveId : ID of the shared drive to search. corpora : Bodies of items (files or documents) to which the query applies.
- The list method contains the following shared drive-specific query parameters: driveId : The shared drive from which changes are returned.

