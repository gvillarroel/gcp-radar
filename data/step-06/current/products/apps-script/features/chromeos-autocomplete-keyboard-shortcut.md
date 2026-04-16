---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:53:34.632Z"
product_name: "Apps Script"
product_slug: "apps-script"
feature_name: "ChromeOS autocomplete keyboard shortcut"
feature_slug: "chromeos-autocomplete-keyboard-shortcut"
latest_feature_date: "2013-07-29"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/apps-script/releases"
  - "https://developers.google.com/apps-script/guides/sheets/macros"
  - "https://developers.google.com/apps-script/reference/add-ons-response-service/editor-file-scope-action-response-builder"
keywords:
  - "chromeos"
  - "autocomplete"
  - "keyboard"
  - "shortcut"
  - "devices"
  - "script"
  - "editor"
  - "can"
---

# ChromeOS autocomplete keyboard shortcut

Product: Apps Script
Coverage: MEDIUM

## Step 02 Summary

On ChromeOS devices, autocomplete in the script editor can now be activated with Ctrl+Space.

## Extended Definition

On ChromeOS devices, autocomplete in the script editor can now be activated with Ctrl+Space.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- [https://developers.google.com/apps-script/guides/sheets/macros](https://developers.google.com/apps-script/guides/sheets/macros)
- [https://developers.google.com/apps-script/reference/add-ons-response-service/editor-file-scope-action-response-builder](https://developers.google.com/apps-script/reference/add-ons-response-service/editor-file-scope-action-response-builder)

## Supporting Pages

### Google Apps Script release notes \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- Source ID: `site-docs-root`
- Final score: 116
- Re-rank relevance: N/A

Evidence snippets:
- Feature On ChromeOS devices, it is now possible to activate autocomplete (sometimes called "content assist") with the keyboard shortcut Ctrl + Space .
- Autocomplete in the editor has been enhanced to be faster, more consistent, and extends its support to user-defined functions and JavaScript language features.
- Fixed Fixed some issues where autocomplete stopped working after certain statements were typed in the script editor.
- Fixed an issue where users could not type ( in the script editor when the autocomplete popup was visible.

### Google Sheets Macros \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/guides/sheets/macros](https://developers.google.com/apps-script/guides/sheets/macros)
- Source ID: `site-docs-root-2`
- Final score: 76
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Import functions as macros If there is already a script bound to a sheet, you can import a function in the script as a new macro and then assign it a keyboard shortcut.
- Sheets also automatically updates the script project manifest , recording the name and keyboard shortcut assigned to the macro.
- Alternatively, you can create macros within the Apps Script editor by following these steps: In the Sheets UI, select Extensions > Apps Script to open the script bound to the sheet in the Apps Script editor.
- Page Summary outlined flag Google Sheets macros automate UI interactions and can be linked to keyboard shortcuts or accessed via the Extensions menu.

### "Class EditorFileScopeActionResponseBuilder \_|\_ Apps Script \_|\_ Google\

- URL: [https://developers.google.com/apps-script/reference/add-ons-response-service/editor-file-scope-action-response-builder](https://developers.google.com/apps-script/reference/add-ons-response-service/editor-file-scope-action-response-builder)
- Source ID: `site-docs-reference-3`
- Final score: 54
- Re-rank relevance: N/A

Evidence snippets:
- Methods Method Return type Brief description build() Editor File Scope Action Response Builds the current Editor action response. request File Scope For Active Document() Editor File Scope Action Response Builder Requests the drive.file scope for the current active Editor document.
- Home Google Workspace Apps Script Reference Send feedback Class EditorFileScopeActionResponseBuilder Stay organized with collections Save and categorize content based on your preferences.
- Return EditorFileScopeActionResponse — A validated EditorFileScopeActionResponse . requestFileScopeForActiveDocument() Requests the drive.file scope for the current active Editor document. // Display a permissions dialog to the user, requesting drive.file scope for // the current document on behalf of this add-on.
- AddOnsResponseService . newEditorFileScopeActionResponseBuilder () . requestFileScopeForActiveDocument () . build (); Note: To call this method, you must add the drive.file scope to the add-on's manifest.

