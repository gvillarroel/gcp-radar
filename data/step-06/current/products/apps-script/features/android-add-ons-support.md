---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:53:34.584Z"
product_name: "Apps Script"
product_slug: "apps-script"
feature_name: "Android add-ons support"
feature_slug: "android-add-ons-support"
latest_feature_date: "2016-07-28"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/apps-script/api/reference/rest/v1/scripts/run"
  - "https://developers.google.com/apps-script/guides/sheets/macros"
  - "https://developers.google.com/apps-script/add-ons/overview"
keywords:
  - "android"
  - "add"
  - "ons"
  - "apps"
  - "script"
  - "docs"
  - "sheets"
  - "can"
---

# Android add-ons support

Product: Apps Script
Coverage: MEDIUM

## Step 02 Summary

Apps Script add-ons for Google Docs and Sheets can run on Android.

## Extended Definition

Apps Script add-ons for Google Docs and Sheets can run on Android.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/apps-script/api/reference/rest/v1/scripts/run](https://developers.google.com/apps-script/api/reference/rest/v1/scripts/run)
- [https://developers.google.com/apps-script/guides/sheets/macros](https://developers.google.com/apps-script/guides/sheets/macros)
- [https://developers.google.com/apps-script/add-ons/overview](https://developers.google.com/apps-script/add-ons/overview)

## Supporting Pages

### Method: scripts.run \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/api/reference/rest/v1/scripts/run](https://developers.google.com/apps-script/api/reference/rest/v1/scripts/run)
- Source ID: `site-api-reference`
- Final score: 75
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- When an Android add-on is run with a session state, it gains the privileges of a bound script—that is, it can access information like the user's current cursor position (in Docs) or selected cell (in Sheets).
- Authorization Scopes Requires one of the following OAuth scopes: https://apps-apis.google.com/a/feeds https://apps-apis.google.com/a/feeds/alias/ https://apps-apis.google.com/a/feeds/groups/ https://mail.google.com/ https://sites.google.com/feeds https://www.google.com/calendar/feeds https://www.google.com/m8/feeds https://www.googleapis.com/auth/admin.directory.group https://www.googleapis.com/auth/admin.directory.user https://www.googleapis.com/auth/documents https://www.googleapis.com/auth/documents.currentonly https://www.googleapis.com/auth/drive https://www.googleapis.com/auth/dynamiccreatives https://www.googleapis.com/auth/forms https://www.googleapis.com/auth/forms.currentonly https://www.googleapis.com/auth/groups https://www.googleapis.com/auth/script.cpanel https://www.googleapis.com/auth/script.external request https://www.googleapis.com/auth/script.scriptapp https://www.googleapis.com/auth/script.send mail https://www.googleapis.com/auth/script.storage https://www.googleapis.com/auth/script.webapp.deploy https://www.googleapis.com/auth/spreadsheets https://www.googleapis.com/auth/spreadsheets.currentonly https://www.googleapis.com/auth/sqlservice https://www.googleapis.com/auth/userinfo.email For more information, see the OAuth 2.0 Overview .
- An ID that represents the user's current session in the Android app for Google Docs or Sheets, included as extra data in the Intent that launches the add-on.
- To retrieve the state, call Intent.getStringExtra("com.google.android.apps.docs.addons.SessionState") .

### Add-ons overview \_|\_ Google Workspace add-ons \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/add-ons/overview](https://developers.google.com/apps-script/add-ons/overview)
- Source ID: `site-docs-root`
- Final score: 74
- Re-rank relevance: N/A

Evidence snippets:
- Try a quickstart To see how building an add-on works, try a quickstart: Node.js Google Workspace add-on quickstart Apps Script Google Workspace add-on quickstart Apps Script Editor add-on quickstart Want to see Google Workspace add-ons in action?
- Quickstart guides are available for developers to learn how to build Google Workspace add-ons using Node.js or Apps Script.
- Quickstarts are available for Node.js and Apps Script to build these add-ons.\n"]]

### Google Sheets Macros \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/guides/sheets/macros](https://developers.google.com/apps-script/guides/sheets/macros)
- Source ID: `site-docs-root-2`
- Final score: 74
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Alternatively, you can create macros within the Apps Script editor by following these steps: In the Sheets UI, select Extensions > Apps Script to open the script bound to the sheet in the Apps Script editor.
- Macros are limited to bound scripts in Google Sheets and cannot be used in standalone scripts, web apps, add-ons, libraries, or other Google Workspace applications.
- Home Google Workspace Apps Script Guides Send feedback Google Sheets Macros Stay organized with collections Save and categorize content based on your preferences.
- When you record a macro, Sheets automatically creates an Apps Script function (the macro function ) that replicates the macro steps.

