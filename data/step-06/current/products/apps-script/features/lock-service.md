---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:53:34.671Z"
product_name: "Apps Script"
product_slug: "apps-script"
feature_name: "Lock service"
feature_slug: "lock-service"
latest_feature_date: "2011-11-07"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/apps-script/guides/v8-runtime"
  - "https://developers.google.com/apps-script/releases"
  - "https://developers.google.com/apps-script/api/reference/rest/v1/ExecutionError"
keywords:
  - "lock"
  - "apps"
  - "script"
  - "includes"
  - "locking"
  - "coordinating"
  - "execution"
---

# Lock service

Product: Apps Script
Coverage: MEDIUM

## Step 02 Summary

Apps Script includes a locking service for coordinating script execution.

## Extended Definition

Apps Script includes a locking service for coordinating script execution.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/apps-script/guides/v8-runtime](https://developers.google.com/apps-script/guides/v8-runtime)
- [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- [https://developers.google.com/apps-script/api/reference/rest/v1/ExecutionError](https://developers.google.com/apps-script/api/reference/rest/v1/ExecutionError)

## Supporting Pages

### V8 runtime overview \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/guides/v8-runtime](https://developers.google.com/apps-script/guides/v8-runtime)
- Source ID: `site-docs-root-3`
- Final score: 82
- Re-rank relevance: N/A

Evidence snippets:
- To use libraries, you must either use the Apps Script library mechanism or bundle your code and its dependencies into a single script file. ( Issue Tracker ) File Execution Order : All script files in your project are executed in a global scope.
- Page Summary outlined flag The Apps Script and JavaScript runtime environment includes the JavaScript engine that parses and executes script code, and historically Apps Script was powered by Mozilla's Rhino JavaScript interpreter.
- View executions To view your script's execution history, open the Apps Script project and at the left, click Executions playlist play .
- The Executions panel doesn't provide timestamped logs of the individual Apps Script service calls.

### Google Apps Script release notes \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- Source ID: `site-docs-root`
- Final score: 72
- Re-rank relevance: N/A

Evidence snippets:
- Feature Generally Available : To complement the release of the granular consent flow in Apps Script IDE executions, the following methods have been added to the ScriptApp and AuthorizationInfo classes to let Apps Script developers programmatically interact with the scopes granted for a script.
- Along with a completely new interface, the following features have been updated: The editor now has a collapsible left sidebar to navigate to the Apps Script project overview, settings, executions, and triggers.
- The granular consent screen will gradually launch to the remaining Apps Script surfaces, such as add-ons and trigger executions, in the future.
- Script editors (in addition to script owners) can now publish add-ons and deploy scripts as web apps or executables for the Execution API .

### ExecutionError \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/api/reference/rest/v1/ExecutionError](https://developers.google.com/apps-script/api/reference/rest/v1/ExecutionError)
- Source ID: `site-api-reference`
- Final score: 66
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- JSON representation { "scriptStackTraceElements" : [ { object ( ScriptStackTraceElement ) } ] , "errorMessage" : string , "errorType" : string } Fields scriptStackTraceElements[] object ( ScriptStackTraceElement ) An array of objects that provide a stack trace through the script to show where the execution failed, with the deepest call first. errorMessage string The error message thrown by Apps Script, usually localized into the user's language. errorType string The error type, for example TypeError or ReferenceError .
- JSON representation ScriptStackTraceElement JSON representation An object that provides information about the nature of an error resulting from an attempted execution of a script function using the Apps Script API.
- Home Google Workspace Apps Script Reference Send feedback ExecutionError Stay organized with collections Save and categorize content based on your preferences.
- If a run call succeeds but the script function (or Apps Script itself) throws an exception, the response body's error field contains a Status object.

