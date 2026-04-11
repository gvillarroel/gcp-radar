---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:29:46.767Z"
product_name: "Apps Script"
product_slug: "apps-script"
feature_name: "Legacy Google Sheets Script Gallery"
feature_slug: "legacy-google-sheets-script-gallery"
latest_feature_date: "2014-06-20"
deprecation_date: "2014-06-20"
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/apps-script/releases"
  - "https://developers.google.com/apps-script/guides/sheets/functions"
  - "https://developers.google.com/apps-script/advanced/admin-sdk-groups-settings"
keywords:
  - "gallery"
  - "legacy"
  - "version"
  - "old"
  - "sheets"
  - "script"
  - "the"
  - "in"
---

# Legacy Google Sheets Script Gallery

Product: Apps Script
Coverage: MEDIUM

## Step 02 Summary

The script gallery in the old version of Google Sheets was deprecated in favor of the newer add-on store; deprecated on 2014-06-20.

## Extended Definition

The script gallery in the old version of Google Sheets was deprecated in favor of the newer add-on store; deprecated on 2014-06-20.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- [https://developers.google.com/apps-script/guides/sheets/functions](https://developers.google.com/apps-script/guides/sheets/functions)
- [https://developers.google.com/apps-script/advanced/admin-sdk-groups-settings](https://developers.google.com/apps-script/advanced/admin-sdk-groups-settings)

## Supporting Pages

### Google Apps Script release notes \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- Source ID: `site-docs-root`
- Final score: 190
- Re-rank relevance: N/A

Evidence snippets:
- June 20, 2014 Deprecated Deprecated the script gallery in the old version of Google Sheets.
- As explained in the blog post , the add-on store in the new version of Sheets gives developers wider distribution, automatic updates, and several other features not available in the script gallery.
- Fixed Issue 3622 : The title bar of a sidebar shown by a script in Google Docs, Forms, or the new version of Sheets is now the same height as in a sidebar shown by a built-in feature.
- This allows scripts to specify whether a dialog in Google Docs, Forms, or the new version of Sheets should prevent the user from interacting with anything other than the dialog.

### Custom Functions in Google Sheets \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/guides/sheets/functions](https://developers.google.com/apps-script/guides/sheets/functions)
- Source ID: `site-docs-root`
- Final score: 152
- Re-rank relevance: N/A

Evidence snippets:
- Note: While Apps Script supports standard JSDoc for autocomplete in the editor, the Google Sheets UI has specific limitations regarding which tags and syntax are displayed in the spreadsheet's formula helper. / Multiplies the input value by 2. @param {number} input The value to multiply. @return {number} The input multiplied by 2. @customfunction / function DOUBLE ( input ) { return input 2 ; } Advanced This section covers advanced custom function topics.
- For examples of custom functions, see the following tutorials: Calculate sale price of discounted items (quickstart) Calculate a tiered pricing discount Calculate driving distance & convert meters to miles Summarize data from multiple sheets Fact-check statements with an ADK AI agent and Gemini model Getting started Custom functions are created using standard JavaScript.
- This means that a custom function written in one spreadsheet can't be used in other spreadsheets unless you use one of the following methods: Click Extensions > Apps Script to open the script editor, then copy the script text from the original spreadsheet and paste it into the script editor of another spreadsheet.
- When these aren't enough for your needs, you can use Apps Script to write custom functions then use them in Sheets just like a built-in function.

### Admin SDK Groups Settings Service \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/advanced/admin-sdk-groups-settings](https://developers.google.com/apps-script/advanced/admin-sdk-groups-settings)
- Source ID: `site-docs-reference`
- Final score: 146
- Re-rank relevance: N/A

Evidence snippets:
- Here, the description is modified, but various other settings can be changed in the same way. @see https://developers.google.com/admin-sdk/groups-settings/v1/reference/groups/patch / function updateGroupSettings () { const groupId = "exampleGroup@example.com" ; try { const group = AdminGroupsSettings . newGroups (); group . description = "Newly changed group description" ; AdminGroupsSettings .
- Page Summary outlined flag The Admin SDK Groups Settings service in Apps Script allows Google Workspace administrators to manage group settings using the Admin SDK Groups Settings API.
- Here, the description is modified, but various other settings can be changed in the same way. advanced/adminSDK.gs View on GitHub / Updates group's settings.
- Like all advanced services in Apps Script, the Admin SDK Groups Settings service uses the same objects, methods, and parameters as the public API.

