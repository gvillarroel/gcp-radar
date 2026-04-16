---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:53:34.676Z"
product_name: "Apps Script"
product_slug: "apps-script"
feature_name: "FileUpload binary file upload"
feature_slug: "fileupload-binary-file-upload"
latest_feature_date: "2011-03-21"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/apps-script/releases"
  - "https://developers.google.com/apps-script/reference/add-ons-response-service/editor-file-scope-action-response-builder"
  - "https://developers.google.com/apps-script/reference/add-ons-response-service/editor-file-scope-action-response"
keywords:
  - "fileupload"
  - "binary"
  - "file"
  - "upload"
  - "supports"
  - "uploading"
  - "files"
---

# FileUpload binary file upload

Product: Apps Script
Coverage: MEDIUM

## Step 02 Summary

FileUpload supports uploading binary files.

## Extended Definition

FileUpload supports uploading binary files.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- [https://developers.google.com/apps-script/reference/add-ons-response-service/editor-file-scope-action-response-builder](https://developers.google.com/apps-script/reference/add-ons-response-service/editor-file-scope-action-response-builder)
- [https://developers.google.com/apps-script/reference/add-ons-response-service/editor-file-scope-action-response](https://developers.google.com/apps-script/reference/add-ons-response-service/editor-file-scope-action-response)

## Supporting Pages

### Google Apps Script release notes \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- Source ID: `site-docs-root`
- Final score: 102
- Re-rank relevance: N/A

Evidence snippets:
- Feature Binary files can be uploaded using FileUpload .
- Fixed Fixed an issue where PDF documents uploaded and saved to Google Drive were being saved as blank files.
- The editor's Find dialog now supports searching over all files in the project.
- August 31, 2021 Feature The Drive Service has added three new methods to the file and folder classes to manage the use of resource keys when sharing files and folders. getSecurityUpdateEligible() : Gets whether a file for folder is eligible to apply the security update that requires a resource key for access when it's shared using a link. getSecurityUpdateEnabled() : Gets whether a file or folder requires a resource key for access when it's shared using a link. setSecurityUpdateEnabled(enabled) : Sets whether the file or folder requires a resource key for access when it's shared using a link.

### "Class EditorFileScopeActionResponseBuilder \_|\_ Apps Script \_|\_ Google\

- URL: [https://developers.google.com/apps-script/reference/add-ons-response-service/editor-file-scope-action-response-builder](https://developers.google.com/apps-script/reference/add-ons-response-service/editor-file-scope-action-response-builder)
- Source ID: `site-docs-reference-3`
- Final score: 92
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Return EditorFileScopeActionResponse — A validated EditorFileScopeActionResponse . requestFileScopeForActiveDocument() Requests the drive.file scope for the current active Editor document. // Display a permissions dialog to the user, requesting drive.file scope for // the current document on behalf of this add-on.
- AddOnsResponseService . newEditorFileScopeActionResponseBuilder () . requestFileScopeForActiveDocument () . build (); Note: To call this method, you must add the drive.file scope to the add-on's manifest.
- Home Google Workspace Apps Script Reference Send feedback Class EditorFileScopeActionResponseBuilder Stay organized with collections Save and categorize content based on your preferences.
- EditorFileScopeActionResponseBuilder A builder for EditorFileScopeActionResponse objects.

### Class EditorFileScopeActionResponse \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/reference/add-ons-response-service/editor-file-scope-action-response](https://developers.google.com/apps-script/reference/add-ons-response-service/editor-file-scope-action-response)
- Source ID: `site-docs-reference-3`
- Final score: 72
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Google Workspace Apps Script Reference Send feedback Class EditorFileScopeActionResponse Stay organized with collections Save and categorize content based on your preferences.
- EditorFileScopeActionResponse Makes changes to an Editor, such as Google Docs, Sheets, or Slides in reaction to an action taken in the UI.
- For example a request for drive.file scope for the current active document.

