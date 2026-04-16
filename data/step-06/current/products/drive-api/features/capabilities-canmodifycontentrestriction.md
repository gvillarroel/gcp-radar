---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:14:32.795Z"
product_name: "Drive API"
product_slug: "drive-api"
feature_name: "capabilities.canModifyContentRestriction"
feature_slug: "capabilities-canmodifycontentrestriction"
latest_feature_date: "2023-07-24"
deprecation_date: "2023-07-24"
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/workspace/drive/api/guides/long-running-operations"
  - "https://developers.google.com/workspace/drive/api/guides/content-restrictions"
  - "https://developers.google.com/workspace/drive/api/guides/enable-sdk"
  - "https://developers.google.com/workspace/drive/api/guides/delete"
keywords:
  - "capabilities"
  - "canmodifycontentrestriction"
  - "this"
  - "capability"
  - "parameter"
  - "was"
  - "deprecated"
  - "on"
---

# capabilities.canModifyContentRestriction

Product: Drive API
Coverage: MEDIUM

## Step 02 Summary

This capability parameter was deprecated; deprecated on 2023-07-24.

## Extended Definition

This capability parameter was deprecated; deprecated on 2023-07-24.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/workspace/drive/api/guides/long-running-operations](https://developers.google.com/workspace/drive/api/guides/long-running-operations)
- [https://developers.google.com/workspace/drive/api/guides/content-restrictions](https://developers.google.com/workspace/drive/api/guides/content-restrictions)
- [https://developers.google.com/workspace/drive/api/guides/enable-sdk](https://developers.google.com/workspace/drive/api/guides/enable-sdk)
- [https://developers.google.com/workspace/drive/api/guides/delete](https://developers.google.com/workspace/drive/api/guides/delete)

## Supporting Pages

### Manage long-running operations \_|\_ Google Drive \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/drive/api/guides/long-running-operations](https://developers.google.com/workspace/drive/api/guides/long-running-operations)
- Source ID: `site-docs-root`
- Final score: 147
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If you use a client library for the Drive API, you don't need to explicitly set this parameter.
- This indicates that an unexpected error was encountered in processing on the underlying system.
- Tip: Save the name field value as you'll need that to poll the LRO. { "done" : true , "metadata" : { "@type" : "type.googleapis.com/google.apps.drive.v3.DownloadFileMetadata" , "resourceKey" : " RESOURCE KEY " }, "name" : " NAME " , "response" : { "@type" : "type.googleapis.com/google.apps.drive.v3.DownloadFileResponse" , "downloadUri" : " DOWNLOAD URI " , "partialDownloadAllowed" : false } } This output includes the following values: RESOURCE KEY : A resource key helps protect your file from unintended access.
- Related topics Download and export files Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

### Protect file content \_|\_ Google Drive \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/drive/api/guides/content-restrictions](https://developers.google.com/workspace/drive/api/guides/content-restrictions)
- Source ID: `site-docs-root`
- Final score: 121
- Re-rank relevance: N/A

Evidence snippets:
- Fields that control download, print, and copy features The following table lists files resource fields that affect download, print, and copy functionality: Field Description Version capabilities.canCopy Whether the current user can copy a file. v2 & v3 capabilities.canDownload Whether the current user can download a file. v2 & v3 capabilities.canChangeCopyRequiresWriterPermission Whether the current user can change the copyRequiresWriterPermission restriction of a file. v2 & v3 capabilities.canChangeItemDownloadRestriction Whether the current user can change the download restriction of a file. v3 only copyRequiresWriterPermission Whether the options to copy, print, or download this file, should be disabled for readers and commenters. v2 & v3 downloadRestrictions The download restrictions applied on a file. v3 only Note: Within the files resource several download and copy fields are marked as deprecated.
- Content restrictions contain the following capabilities : capabilities.canModifyEditorContentRestriction : Whether the current user can add or modify a content restriction . capabilities.canModifyOwnerContentRestriction : Whether the current user can add or modify an owner content restriction . capabilities.canRemoveContentRestriction : Whether the current user can remove the applied content restriction (if present).
- Related topics Roles and permissions Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- To determine whether the user can change owner or organizer-applied download restrictions of a file, check the capabilities.canChangeItemDownloadRestriction boolean field.

### Configure a Drive UI integration \_|\_ Google Drive \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/drive/api/guides/enable-sdk](https://developers.google.com/workspace/drive/api/guides/enable-sdk)
- Source ID: `site-docs-root`
- Final score: 110
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This parameter contains a JSON-encoded string with template variables and data about the request to your app.
- This field is no longer used. (Optional) If you want your app to open Google Workspace-supported files, check the Importing box. (Optional) If your app must manage files on shared drives, check the Shared drives support box.
- Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Open URL and New URL The state parameter is URL-encoded, so your app must handle the escape characters and parse it as JSON.

### Trash or delete files and folders \_|\_ Google Drive \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/drive/api/guides/delete](https://developers.google.com/workspace/drive/api/guides/delete)
- Source ID: `site-docs-root`
- Final score: 109
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To check the capabilities, call the get method on the files resource with the fileId path parameter and use one of the following capabilities fields in the fields parameter.
- The following fields are only populated for files located within a shared drive: capabilities.canTrashChildren : Whether the current user can trash children of this folder.
- If you're using the previous Drive API v2 version, this field is called trashedDate . trashingUser : If the file was explicitly trashed, the user who trashed it.
- Capabilities A files resource contains a collection of boolean capabilities fields that indicate the capabilities the user has on this file.

