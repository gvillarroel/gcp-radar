---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:53:34.677Z"
product_name: "Apps Script"
product_slug: "apps-script"
feature_name: "Google Sites integration"
feature_slug: "google-sites-integration"
latest_feature_date: "2010-10-21"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/apps-script/releases"
  - "https://developers.google.com/apps-script/guides/support/best-practices"
  - "https://developers.google.com/apps-script/guides/v8-runtime/bulk-migrate"
keywords:
  - "sites"
  - "integration"
  - "apps"
  - "script"
  - "can"
  - "run"
  - "within"
---

# Google Sites integration

Product: Apps Script
Coverage: MEDIUM

## Step 02 Summary

Apps Script can be run from within Google Sites.

## Extended Definition

Apps Script can be run from within Google Sites.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- [https://developers.google.com/apps-script/guides/support/best-practices](https://developers.google.com/apps-script/guides/support/best-practices)
- [https://developers.google.com/apps-script/guides/v8-runtime/bulk-migrate](https://developers.google.com/apps-script/guides/v8-runtime/bulk-migrate)

## Supporting Pages

### Google Apps Script release notes \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- Source ID: `site-docs-root`
- Final score: 54
- Re-rank relevance: N/A

Evidence snippets:
- October 21, 2010 Feature Added integration with Google Sites, so that Apps Script can now be run from within Google Sites.
- December 16, 2013 Fixed Issue 3461 : A yellow warning bar should no longer appear on Apps Script gadgets that are embedded in Google Sites.
- There isn't a way to connect to new Sites with Apps Script.
- Feature The Spreadsheet service has been extended with the following new classes and methods to support text styles and Rich Text cell formatting: RichTextValue RichTextValueBuilder TextStyle TextStyleBuilder Range.getRichTextValue() Range.getRichTextValues() Range.getTextStyle() Range.getTextStyles() Range.setRichTextValue(value) Range.setRichTextValues(values) Range.setTextStyle(style) Range.setTextStyles(styles) SpreadsheetApp.newRichTextValue() SpreadsheetApp.newTextStyle() The Data Studio service has been extended with the following new classes and methods that define and support authentication types for community connectors: GetAuthTypeResponse AuthType CommunityConnector,newAuthTypeResponse() January 04, 2019 Feature The Slides service has been extended with the following new classes and methods that support slide linking and text box insertion: SlideLinkingMode [ Layout.insertTextBox(text) }(https://developers.google.com/apps-script/reference/slides/layout#inserttextboxtext) Layout.insertTextBox(text, left, top, width, height) Master.insertTextBox(text) Master.insertTextBox(text, left, top, width, height) Page.insertTextBox(text) Page.insertTextBox(text, left, top, width, height) Presentation.appendSlide(slide, linkingMode) Presentation.insertSlide(insertionIndex, slide, linkingMode) Slide.getSlideLinkingMode() Slide.getSourcePresentationId() Slide.getSourceSlideObjectId() Slide.insertTextBox(text) Slide.insertTextBox(text, left, top, width, height) Slide.refreshSlide() Slide.unlink() The Data Studio service has been extended with the following new classes and methods that error displays: DebugError UserError CommunityConnector.newDebugError() CommunityConnector.newUserError() December 13, 2018 Deprecated The Fusion Tables advanced service has been deprecated and will shutdown fully on December 3rd, 2019.

### Best Practices \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/guides/support/best-practices](https://developers.google.com/apps-script/guides/support/best-practices)
- Source ID: `site-docs-root-3`
- Final score: 39
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Anything you accomplish within Google Apps Script itself is faster than fetching data from Google's servers or an external server, such as requests to Sheets, Docs, Sites, Sites, Translate, and UrlFetch.
- Home Google Workspace Apps Script Support Send feedback Best Practices Stay organized with collections Save and categorize content based on your preferences.
- You can use Connected Sheets to analyze large BigQuery datasets directly in Sheets, or use the BigQuery service to interact with data from Apps Script.
- Script timeout handling Apps Script has execution time limits (typically 6 minutes per execution, or 30 minutes for some Google Workspace accounts).

### "Bulk migrate identical scripts from Rhino to V8 \_|\_ Apps Script \_|\_\

- URL: [https://developers.google.com/apps-script/guides/v8-runtime/bulk-migrate](https://developers.google.com/apps-script/guides/v8-runtime/bulk-migrate)
- Source ID: `site-docs-root-3`
- Final score: 38
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Code.gs function updateRhinoScripts () { // An array of script IDs of script projects to migrate. // TODO(developer): Replace with your script IDs. const scriptIds = [ 'abcdef12345678' , 'abcdef12345678' ]; // An array of file objects to replace the existing files in each script project. // Remember to include all files for the script, excluded files are deleted. // TODO(developer): Replace with your script files. const filesToUpdate = { "files" : [ { "name" : "Code" , "type" : "SERVER JS" , "source" : "// New updates\nfunction myFunction() {\n console.log('Hello, world!');\n}" }, { "name" : "appsscript" , "type" : "JSON" , "source" : JSON . stringify ({ "timeZone" : "America/New York" , "dependencies" : {}, "exceptionLogging" : "STACKDRIVER" , "runtimeVersion" : "V8" }) } ] }; updateMultipleAppsScripts ( scriptIds , filesToUpdate ); } function updateMultipleAppsScripts ( scriptIds , filesToUpdate ) { // 'scriptIds' should be an array of script IDs // 'filesToUpdate' should be an array of objects, each with: // name: The filename (For example, "Code", "Utilities") // source: The source code for that file. scriptIds . forEach ( function ( scriptId ) { // Makes the API request. const response = UrlFetchApp . fetch ( https://script.googleapis.com/v1/projects/ ${ scriptId } /content , { method : "PUT" , headers : { Authorization : Bearer ${ ScriptApp . getOAuthToken () } }, contentType : "application/json" , payload : JSON . stringify ( filesToUpdate ), muteHttpExceptions : true } ); if ( response . getResponseCode () !== 200 ) { console . log ( Error updating script ${ scriptId } : ${ response . getContentText () } ); } else { console . log ( Script ${ scriptId } updated successfully! ); } }); } appsscript.json To use the Apps Script API in your Apps Script project, add the following OAuth scopes to your manifest file: "https://www.googleapis.com/auth/script.projects" "https://www.googleapis.com/auth/script.external request" To expose the manifest file in the editor, click Project Settings and check the Show "appsscript.json" manifest file in editor box.
- Migrate scripts The following code sample shows how to use the Apps Script API to migrate identical scripts from Rhino to V8 by replacing the files in each Apps Script project with a set of V8-compatible files.
- Home Google Workspace Apps Script Guides Send feedback Bulk migrate identical scripts from Rhino to V8 Stay organized with collections Save and categorize content based on your preferences.
- To migrate using the API, you need to set up your environment by enabling APIs, configuring a Cloud project, and creating an Apps Script project linked to it.

