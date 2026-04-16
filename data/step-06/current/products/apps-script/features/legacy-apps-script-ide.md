---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:53:34.516Z"
product_name: "Apps Script"
product_slug: "apps-script"
feature_name: "Legacy Apps Script IDE"
feature_slug: "legacy-apps-script-ide"
latest_feature_date: "2022-09-27"
deprecation_date: "2022-09-27"
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/apps-script/releases"
  - "https://developers.google.com/apps-script/reference/add-ons-response-service/editor-file-scope-action-response"
  - "https://developers.google.com/apps-script/reference/add-ons-response-service/editor-file-scope-action-response-builder"
keywords:
  - "legacy"
  - "apps"
  - "script"
  - "ide"
  - "older"
  - "editor"
  - "experience"
  - "replaced"
---

# Legacy Apps Script IDE

Product: Apps Script
Coverage: MEDIUM

## Step 02 Summary

The legacy Apps Script IDE is the older script editor experience replaced by the redesigned IDE; deprecated on 2022-09-27.

## Extended Definition

The legacy Apps Script IDE is the older script editor experience replaced by the redesigned IDE; deprecated on 2022-09-27.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- [https://developers.google.com/apps-script/reference/add-ons-response-service/editor-file-scope-action-response](https://developers.google.com/apps-script/reference/add-ons-response-service/editor-file-scope-action-response)
- [https://developers.google.com/apps-script/reference/add-ons-response-service/editor-file-scope-action-response-builder](https://developers.google.com/apps-script/reference/add-ons-response-service/editor-file-scope-action-response-builder)

## Supporting Pages

### Google Apps Script release notes \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- Source ID: `site-docs-root`
- Final score: 108
- Re-rank relevance: N/A

Evidence snippets:
- Learn more about the IDE updates from the following blog posts: Updated Apps Script integrated development environment will replace the legacy experience by Q4 2022 .
- The gallery also features the following new samples: Build a Google Chat app with an ADK AI agent Build a Chat app with an Agent2Agent agent Analyze and label Gmail messages with Gemini and Vertex AI June 04, 2025 Deprecated Google Analytics 4 has replaced Universal Analytics , which means the Apps Script Advanced Service for Google Analytics Management API and Reporting API is deprecated.
- FileIterator.getContinuationToken() FolderIterator.getContinuationToken() DriveApp.continueFileIterator(continuationToken) DriveApp.continueFolderIterator(continuationToken) Deprecated The UiApp widgets Hyperlink , InlineHyperlink , LayoutPanel , and RichTextArea have now been disabled, as announced on March 13, 2013 and documented in the Apps Script sunset schedule .
- Along with a completely new interface, the following features have been updated: The editor now has a collapsible left sidebar to navigate to the Apps Script project overview, settings, executions, and triggers.

### Class EditorFileScopeActionResponse \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/reference/add-ons-response-service/editor-file-scope-action-response](https://developers.google.com/apps-script/reference/add-ons-response-service/editor-file-scope-action-response)
- Source ID: `site-docs-reference-3`
- Final score: 55
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Google Workspace Apps Script Reference Send feedback Class EditorFileScopeActionResponse Stay organized with collections Save and categorize content based on your preferences.
- EditorFileScopeActionResponse Makes changes to an Editor, such as Google Docs, Sheets, or Slides in reaction to an action taken in the UI.
- Methods Method Return type Brief description print Json() String Prints the JSON representation of this object.

### "Class EditorFileScopeActionResponseBuilder \_|\_ Apps Script \_|\_ Google\

- URL: [https://developers.google.com/apps-script/reference/add-ons-response-service/editor-file-scope-action-response-builder](https://developers.google.com/apps-script/reference/add-ons-response-service/editor-file-scope-action-response-builder)
- Source ID: `site-docs-reference-3`
- Final score: 54
- Re-rank relevance: N/A

Evidence snippets:
- Home Google Workspace Apps Script Reference Send feedback Class EditorFileScopeActionResponseBuilder Stay organized with collections Save and categorize content based on your preferences.
- Methods Method Return type Brief description build() Editor File Scope Action Response Builds the current Editor action response. request File Scope For Active Document() Editor File Scope Action Response Builder Requests the drive.file scope for the current active Editor document.
- Return EditorFileScopeActionResponse — A validated EditorFileScopeActionResponse . requestFileScopeForActiveDocument() Requests the drive.file scope for the current active Editor document. // Display a permissions dialog to the user, requesting drive.file scope for // the current document on behalf of this add-on.
- AddOnsResponseService . newEditorFileScopeActionResponseBuilder () . requestFileScopeForActiveDocument () . build (); Note: To call this method, you must add the drive.file scope to the add-on's manifest.

