---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:29:46.775Z"
product_name: "Apps Script"
product_slug: "apps-script"
feature_name: "google.script.host.editor.focus"
feature_slug: "google-script-host-editor-focus"
latest_feature_date: "2014-02-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/apps-script/releases"
  - "https://developers.google.com/apps-script/guides/sheets/functions"
  - "https://developers.google.com/apps-script/advanced/admin-sdk-directory"
keywords:
  - "focus"
  - "host"
  - "editor"
  - "html"
  - "script"
  - "added"
  - "in"
  - "to"
---

# google.script.host.editor.focus

Product: Apps Script
Coverage: MEDIUM

## Step 02 Summary

Added google.script.host.editor.focus() in HTML Service to shift focus from a dialog or sidebar back to the editor.

## Extended Definition

Added google.script.host.editor.focus() in HTML Service to shift focus from a dialog or sidebar back to the editor.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- [https://developers.google.com/apps-script/guides/sheets/functions](https://developers.google.com/apps-script/guides/sheets/functions)
- [https://developers.google.com/apps-script/advanced/admin-sdk-directory](https://developers.google.com/apps-script/advanced/admin-sdk-directory)

## Supporting Pages

### Google Apps Script release notes \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- Source ID: `site-docs-root`
- Final score: 188
- Re-rank relevance: N/A

Evidence snippets:
- Added the client-side HTML-service method google.script.host.editor.focus() , which allows scripts to switch browser focus from the dialog or sidebar to the Google Docs, Sheets, or Forms editor.
- Custom dialogs created with the HTML service can now be resized by calling google.script.host.setWidth(width) and google.script.host.setHeight(height) in client-side code.
- June 19, 2012 Change Added a scrollbar to the file panel in the Script Editor, June 18, 2012 Change The Script Editor's user interface has been updated.
- May 27, 2015 Change Added the method getUserAgent() to the HtmlService global object to let scripts get the user-agent string for the current browser.

### Custom Functions in Google Sheets \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/guides/sheets/functions](https://developers.google.com/apps-script/guides/sheets/functions)
- Source ID: `site-docs-root`
- Final score: 150
- Re-rank relevance: N/A

Evidence snippets:
- Note: While Apps Script supports standard JSDoc for autocomplete in the editor, the Google Sheets UI has specific limitations regarding which tags and syntax are displayed in the spreadsheet's formula helper. / Multiplies the input value by 2. @param {number} input The value to multiply. @return {number} The input multiplied by 2. @customfunction / function DOUBLE ( input ) { return input 2 ; } Advanced This section covers advanced custom function topics.
- This means that a custom function written in one spreadsheet can't be used in other spreadsheets unless you use one of the following methods: Click Extensions > Apps Script to open the script editor, then copy the script text from the original spreadsheet and paste it into the script editor of another spreadsheet.
- Anyone who has access to the spreadsheet can copy the script. (Collaborators who have only view access can't open the script editor in the original spreadsheet.
- To create a custom function, write JavaScript code in the script editor accessed through the Extensions menu in Google Sheets.

### Admin SDK Directory Service \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/advanced/admin-sdk-directory](https://developers.google.com/apps-script/advanced/admin-sdk-directory)
- Source ID: `site-docs-reference`
- Final score: 146
- Re-rank relevance: N/A

Evidence snippets:
- Members . insert ( member , groupEmail ); console . log ( "User %s added as a member of group %s." , userEmail , groupEmail , ); } catch ( err ) { // TODO (developer)- Handle exception from the API console . log ( "Failed with error %s" , err . message ); } } Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Page Summary outlined flag The Admin SDK Directory service in Apps Script allows administrators of Google Workspace domains to manage devices, groups, users, and other entities.
- Home Google Workspace Apps Script Reference Send feedback Admin SDK Directory Service Stay organized with collections Save and categorize content based on your preferences.
- Like all advanced services in Apps Script, the Admin SDK Directory service uses the same objects, methods, and parameters as the public API.

