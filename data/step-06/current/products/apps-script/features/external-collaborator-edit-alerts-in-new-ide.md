---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:53:34.519Z"
product_name: "Apps Script"
product_slug: "apps-script"
feature_name: "External collaborator edit alerts in new IDE"
feature_slug: "external-collaborator-edit-alerts-in-new-ide"
latest_feature_date: "2022-02-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/apps-script/releases"
  - "https://developers.google.com/apps-script/guides/slides/editing-styling"
  - "https://developers.google.com/apps-script/reference/add-ons-response-service/editor-file-scope-action-response-builder"
keywords:
  - "external"
  - "collaborator"
  - "edit"
  - "alerts"
  - "ide"
  - "apps"
  - "script"
  - "emails"
---

# External collaborator edit alerts in new IDE

Product: Apps Script
Coverage: MEDIUM

## Step 02 Summary

The new Apps Script IDE emails owners when someone outside their organization edits a script project.

## Extended Definition

The new Apps Script IDE emails owners when someone outside their organization edits a script project.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- [https://developers.google.com/apps-script/guides/slides/editing-styling](https://developers.google.com/apps-script/guides/slides/editing-styling)
- [https://developers.google.com/apps-script/reference/add-ons-response-service/editor-file-scope-action-response-builder](https://developers.google.com/apps-script/reference/add-ons-response-service/editor-file-scope-action-response-builder)

## Supporting Pages

### Google Apps Script release notes \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- Source ID: `site-docs-root`
- Final score: 110
- Re-rank relevance: N/A

Evidence snippets:
- November 03, 2022 Feature Apps Script added a new method to the Utilities class . parseDate(date, timeZone, format ) parses a provided string date according to the specification described in the Java Standard Edition SimpleDateFormat class .
- For scripts created prior to June 8, 2012, the Share button will remain if the checkbox to "Allow document collaborators to edit project" or "Allow site collaborators and owners to edit project" was not selected for that script.
- Along with a completely new interface, the following features have been updated: The editor now has a collapsible left sidebar to navigate to the Apps Script project overview, settings, executions, and triggers.
- August 07, 2024 Change Google Workspace administrators can now turn on an allowlist in the admin console to control which external domains users can access through Apps Script's URL Fetch service .

### "Class EditorFileScopeActionResponseBuilder \_|\_ Apps Script \_|\_ Google\

- URL: [https://developers.google.com/apps-script/reference/add-ons-response-service/editor-file-scope-action-response-builder](https://developers.google.com/apps-script/reference/add-ons-response-service/editor-file-scope-action-response-builder)
- Source ID: `site-docs-reference-3`
- Final score: 66
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Google Workspace Apps Script Reference Send feedback Class EditorFileScopeActionResponseBuilder Stay organized with collections Save and categorize content based on your preferences.
- Methods Method Return type Brief description build() Editor File Scope Action Response Builds the current Editor action response. request File Scope For Active Document() Editor File Scope Action Response Builder Requests the drive.file scope for the current active Editor document.
- Return EditorFileScopeActionResponse — A validated EditorFileScopeActionResponse . requestFileScopeForActiveDocument() Requests the drive.file scope for the current active Editor document. // Display a permissions dialog to the user, requesting drive.file scope for // the current document on behalf of this add-on.
- AddOnsResponseService . newEditorFileScopeActionResponseBuilder () . requestFileScopeForActiveDocument () . build (); Note: To call this method, you must add the drive.file scope to the add-on's manifest.

### Edit and style text \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/guides/slides/editing-styling](https://developers.google.com/apps-script/guides/slides/editing-styling)
- Source ID: `site-docs-root-2`
- Final score: 63
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Google Workspace Apps Script Guides Send feedback Edit and style text Stay organized with collections Save and categorize content based on your preferences.
- TEXT BOX , 100 , 200 , 300 , 60 , ); const textRange = shape . getText (); textRange . setText ( "Hello world!" ); textRange . clear ( 6 , 11 ); // Insert text in TEXT BOX textRange . insertText ( 6 , "galaxy" ); console . log ( Start: ${ textRange . getStartIndex () } ; End: ${ textRange . getEndIndex () } ; Content: ${ textRange . asString () } , ); } catch ( err ) { // TODO (developer) - Handle exception console . log ( "Failed with an error %s " , err . message ); } This script creates a text box on the first slide and sets its text content to "Hello world!".
- So the script produces the following log statements: Paragraph 1's nesting level: 0 Paragraph 2's nesting level: 1 Paragraph 3's nesting level: 2 Paragraph 4's nesting level: 0 Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- The following script demonstrates the use of these functions: slides/style/style.gs View on GitHub try { // Get the first slide of active presentation const slide = SlidesApp . getActivePresentation (). getSlides ()[ 0 ]; // Insert shape in the slide with dimensions const shape = slide . insertShape ( SlidesApp .

