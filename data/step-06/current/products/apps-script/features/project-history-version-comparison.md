---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:53:34.514Z"
product_name: "Apps Script"
product_slug: "apps-script"
feature_name: "Project history version comparison"
feature_slug: "project-history-version-comparison"
latest_feature_date: "2023-08-23"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/apps-script/releases"
  - "https://developers.google.com/apps-script/guides/v8-runtime"
  - "https://developers.google.com/apps-script/api/reference/rest/v1/projects.versions/create"
keywords:
  - "project"
  - "history"
  - "version"
  - "comparison"
  - "lets"
  - "editors"
  - "view"
  - "deployed"
---

# Project history version comparison

Product: Apps Script
Coverage: MEDIUM

## Step 02 Summary

Project history version comparison lets editors view deployed script versions and compare them with the current version in the IDE.

## Extended Definition

Project history version comparison lets editors view deployed script versions and compare them with the current version in the IDE.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- [https://developers.google.com/apps-script/guides/v8-runtime](https://developers.google.com/apps-script/guides/v8-runtime)
- [https://developers.google.com/apps-script/api/reference/rest/v1/projects.versions/create](https://developers.google.com/apps-script/api/reference/rest/v1/projects.versions/create)

## Supporting Pages

### Google Apps Script release notes \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- Source ID: `site-docs-root`
- Final score: 155
- Re-rank relevance: N/A

Evidence snippets:
- To learn more, refer to the following: Google Workspace Updates blog : View & compare script versions with Apps Script project history Developer documentation : Versions June 12, 2023 Feature Third-party smart chips and link previews are now generally available.
- December 06, 2023 Feature ( Generally available ): You can now delete versions in your Apps Script project from the project history page in the Apps Script IDE.
- August 23, 2023 Feature You can now view previously deployed script versions and compare them to the current script version in the Apps Script IDE.
- If your script reaches the versions limit, or you want to clean up your script project, delete undeployed versions that you no longer need.

### V8 runtime overview \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/guides/v8-runtime](https://developers.google.com/apps-script/guides/v8-runtime)
- Source ID: `site-docs-root-3`
- Final score: 133
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- View executions To view your script's execution history, open the Apps Script project and at the left, click Executions playlist play .
- The following V8 example shows the use of object methods when constructing menu items in Google Sheets: function onOpen () { const ui = SpreadsheetApp . getUi (); // Or DocumentApp , SlidesApp , or FormApp . ui . createMenu ( 'Custom Menu' ) . addItem ( 'First item' , 'menu.item1' ) . addSeparator () . addSubMenu ( ui . createMenu ( 'Sub-menu' ) . addItem ( 'Second item' , 'menu.item2' )) . addToUi (); } const menu = { item1 : function () { SpreadsheetApp . getUi () . alert ( 'You clicked: First item' ); }, item2 : function () { SpreadsheetApp . getUi () . alert ( 'You clicked: Second item' ); } } View logs Apps Script provides two logging services: the Logger service and the console class.
- As with template literals, this syntax lets you avoid string concatenations and simplify string definitions. // Rhino runtime var multiline = "This string is sort of \n " + "like a multi-line string, \n " + "but it's not really one." ; // V8 runtime const multiline = This on the other hand , actually is a multi - line string , thanks to JavaScript ES6 ; V8 runtime limitations The Apps Script V8 runtime isn't a standard Node.js or browser environment.
- To use libraries, you must either use the Apps Script library mechanism or bundle your code and its dependencies into a single script file. ( Issue Tracker ) File Execution Order : All script files in your project are executed in a global scope.

### Method: projects.versions.create \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/api/reference/rest/v1/projects.versions/create](https://developers.google.com/apps-script/api/reference/rest/v1/projects.versions/create)
- Source ID: `site-api-reference`
- Final score: 116
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Google Workspace Apps Script Reference Send feedback Method: projects.versions.create Stay organized with collections Save and categorize content based on your preferences.
- Authorization Scopes Requires the following OAuth scope: https://www.googleapis.com/auth/script.projects For more information, see the OAuth 2.0 Overview .
- Page Summary outlined flag A new immutable version of a script project is created using a POST request to a specific URL.
- HTTP request POST https://script.googleapis.com/v1/projects/{scriptId}/versions The URL uses gRPC Transcoding syntax.

