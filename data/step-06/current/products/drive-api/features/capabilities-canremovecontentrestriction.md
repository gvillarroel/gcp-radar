---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:14:32.796Z"
product_name: "Drive API"
product_slug: "drive-api"
feature_name: "capabilities.canRemoveContentRestriction"
feature_slug: "capabilities-canremovecontentrestriction"
latest_feature_date: "2023-07-24"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/workspace/drive/api/guides/content-restrictions"
  - "https://developers.google.com/workspace/drive/api/guides/delete"
  - "https://developers.google.com/workspace/drive/api/guides/limited-expansive-access"
  - "https://developers.google.com/workspace/drive/api/guides/about-files"
keywords:
  - "capabilities"
  - "canremovecontentrestriction"
  - "this"
  - "capability"
  - "indicates"
  - "whether"
  - "content"
  - "restriction"
---

# capabilities.canRemoveContentRestriction

Product: Drive API
Coverage: MEDIUM

## Step 02 Summary

This capability indicates whether a content restriction can be removed.

## Extended Definition

This capability indicates whether a content restriction can be removed.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/workspace/drive/api/guides/content-restrictions](https://developers.google.com/workspace/drive/api/guides/content-restrictions)
- [https://developers.google.com/workspace/drive/api/guides/delete](https://developers.google.com/workspace/drive/api/guides/delete)
- [https://developers.google.com/workspace/drive/api/guides/limited-expansive-access](https://developers.google.com/workspace/drive/api/guides/limited-expansive-access)
- [https://developers.google.com/workspace/drive/api/guides/about-files](https://developers.google.com/workspace/drive/api/guides/about-files)

## Supporting Pages

### Protect file content \_|\_ Google Drive \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/drive/api/guides/content-restrictions](https://developers.google.com/workspace/drive/api/guides/content-restrictions)
- Source ID: `site-docs-root`
- Final score: 174
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Content restrictions contain the following capabilities : capabilities.canModifyEditorContentRestriction : Whether the current user can add or modify a content restriction . capabilities.canModifyOwnerContentRestriction : Whether the current user can add or modify an owner content restriction . capabilities.canRemoveContentRestriction : Whether the current user can remove the applied content restriction (if present).
- Fields that control download, print, and copy features The following table lists files resource fields that affect download, print, and copy functionality: Field Description Version capabilities.canCopy Whether the current user can copy a file. v2 & v3 capabilities.canDownload Whether the current user can download a file. v2 & v3 capabilities.canChangeCopyRequiresWriterPermission Whether the current user can change the copyRequiresWriterPermission restriction of a file. v2 & v3 capabilities.canChangeItemDownloadRestriction Whether the current user can change the download restriction of a file. v3 only copyRequiresWriterPermission Whether the options to copy, print, or download this file, should be disabled for readers and commenters. v2 & v3 downloadRestrictions The download restrictions applied on a file. v3 only Note: Within the files resource several download and copy fields are marked as deprecated.
- Content restriction capabilities A files resource contains a collection of boolean capabilities fields used to indicate whether an action can be performed on a file.
- To determine whether the user can change owner or organizer-applied download restrictions of a file, check the capabilities.canChangeItemDownloadRestriction boolean field.

### Trash or delete files and folders \_|\_ Google Drive \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/drive/api/guides/delete](https://developers.google.com/workspace/drive/api/guides/delete)
- Source ID: `site-docs-root`
- Final score: 81
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following fields are populated for all files: capabilities.canTrash : Whether the current user can move this file to trash. capabilities.canUntrash : Whether the current user can restore this file from trash. capabilities.canDelete : Whether the current user can delete this file. capabilities.canRemoveChildren : Whether the current user can remove children from this folder.
- The following fields are only populated for files located within a shared drive: capabilities.canTrashChildren : Whether the current user can trash children of this folder.
- This is false when the item isn't a folder. capabilities.canDeleteChildren : Whether the current user can delete children of this folder.
- For more information on file and folder limits, see the following: File and folder limits in files Folder limits in shared drives Related topics Delete files in Google Drive Shared drive versus My Drive API differences Roles and permissions Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

### "Manage folders with limited and expansive access \_|\_ Google Drive \_|\_\

- URL: [https://developers.google.com/workspace/drive/api/guides/limited-expansive-access](https://developers.google.com/workspace/drive/api/guides/limited-expansive-access)
- Source ID: `site-docs-root`
- Final score: 77
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Related topics Share files, folders, and drives How file access works in shared drives Learn about folders with limited access Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- This feature better aligns the sharing behavior of items in both My Drive and shared drives, letting you organize folders with sensitive content alongside more broadly shared content.
- This permission grants access to both folder contents and metadata like any other permission.
- Verify permission to limit access on a folder To check if you can limit access to a folder or not, inspect the boolean values of the capabilities.canDisableInheritedPermissions and capabilities.canEnableInheritedPermissions fields on the files resource.

### Files and folders overview \_|\_ Google Drive \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/drive/api/guides/about-files](https://developers.google.com/workspace/drive/api/guides/about-files)
- Source ID: `site-docs-root`
- Final score: 71
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- This list shows all available file types: Blob A file that contains text or binary content such as images, videos, and PDFs.
- File characteristics This list shows some characteristics of a Drive file: Access proposal A proposal from a requester to an approver to grant a recipient access to a Drive item.
- Home Google Workspace Google Drive Guides Send feedback Files and folders overview Stay organized with collections Save and categorize content based on your preferences.

