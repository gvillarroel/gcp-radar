---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:53:34.680Z"
product_name: "Apps Script"
product_slug: "apps-script"
feature_name: "Revision history"
feature_slug: "revision-history"
latest_feature_date: "2010-08-16"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/apps-script/releases"
  - "https://developers.google.com/apps-script/guides/v8-runtime"
  - "https://developers.google.com/apps-script/api/reference/rest/v1/scripts/run"
keywords:
  - "revision"
  - "history"
  - "script"
  - "editor"
  - "provides"
  - "scripts"
---

# Revision history

Product: Apps Script
Coverage: MEDIUM

## Step 02 Summary

The script editor provides revision history for scripts.

## Extended Definition

The script editor provides revision history for scripts.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- [https://developers.google.com/apps-script/guides/v8-runtime](https://developers.google.com/apps-script/guides/v8-runtime)
- [https://developers.google.com/apps-script/api/reference/rest/v1/scripts/run](https://developers.google.com/apps-script/api/reference/rest/v1/scripts/run)

## Supporting Pages

### Google Apps Script release notes \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- Source ID: `site-docs-root`
- Final score: 118
- Re-rank relevance: N/A

Evidence snippets:
- Revision history for scripts is now available from File > See revision history in the script editor.
- Made some modifications to the calculation of CPU time for scripts running on triggers, so that time spent waiting on certain processes is not counted toward that limi April 16, 2012 Fixed Fixed an issue in the Script Editor where the debugger would not terminate after executing the last statement of a script.
- Added the client-side HTML-service method google.script.host.editor.focus() , which allows scripts to switch browser focus from the dialog or sidebar to the Google Docs, Sheets, or Forms editor.
- May 13, 2013 Feature The script editor is now available within Google Docs and the Google Forms editor, and both Docs and Forms can now be containers for scripts.

### V8 runtime overview \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/guides/v8-runtime](https://developers.google.com/apps-script/guides/v8-runtime)
- Source ID: `site-docs-root-3`
- Final score: 79
- Re-rank relevance: N/A

Evidence snippets:
- The new runtime recognizes these function definition formats: function normalFunction () {} async function asyncFunction () {} function generatorFunction () {} var varFunction = function () {} let letFunction = function () {} const constFunction = function () {} var namedVarFunction = function alternateNameVarFunction () {} let namedLetFunction = function alternateNameLetFunction () {} const namedConstFunction = function alternateNameConstFunction () {} var varAsyncFunction = async function () {} let letAsyncFunction = async function () {} const constAsyncFunction = async function () {} var namedVarAsyncFunction = async function alternateNameVarAsyncFunction () {} let namedLetAsyncFunction = async function alternateNameLetAsyncFunction () {} const namedConstAsyncFunction = async function alternateNameConstAsyncFunction () {} var varGeneratorFunction = function () {} let letGeneratorFunction = function () {} const constGeneratorFunction = function () {} var namedVarGeneratorFunction = function alternateNameVarGeneratorFunction () {} let namedLetGeneratorFunction = function alternateNameLetGeneratorFunction () {} const namedConstGeneratorFunction = function alternateNameConstGeneratorFunction () {} var varLambda = () => {} let letLambda = () => {} const constLambda = () => {} var varAsyncLambda = async () => {} let letAsyncLambda = async () => {} const constAsyncLambda = async () => {} Call object methods from triggers and callbacks Scripts using V8 can call object methods and class static methods from places where you could already call library methods.
- V8 syntax examples The following is a short list of popular syntactical features available to scripts using the V8 runtime. let and const The let and const keywords allow you to define block scope local variables and block scope constants, respectively. // V8 runtime let s = "hello" ; if ( s === "hello" ) { s = "world" ; console . log ( s ); // Prints "world" } console . log ( s ); // Prints "hello" const N = 100 ; N = 5 ; // Results in TypeError Arrow functions Arrow functions provide a compact way of defining functions within expressions. // Rhino runtime function square ( x ) { return x x ; } console . log ( square ( 5 )); // Outputs 25 // V8 runtime const square = x => x x ; console . log ( square ( 5 )); // Outputs 25 // Outputs [ 1 , 4 , 9 ] console . log ([ 1 , 2 , 3 ] . map ( x => x x )); Classes Classes provide a means to conceptually organize code with inheritance.
- The following V8 example shows the use of object methods when constructing menu items in Google Sheets: function onOpen () { const ui = SpreadsheetApp . getUi (); // Or DocumentApp , SlidesApp , or FormApp . ui . createMenu ( 'Custom Menu' ) . addItem ( 'First item' , 'menu.item1' ) . addSeparator () . addSubMenu ( ui . createMenu ( 'Sub-menu' ) . addItem ( 'Second item' , 'menu.item2' )) . addToUi (); } const menu = { item1 : function () { SpreadsheetApp . getUi () . alert ( 'You clicked: First item' ); }, item2 : function () { SpreadsheetApp . getUi () . alert ( 'You clicked: Second item' ); } } View logs Apps Script provides two logging services: the Logger service and the console class.
- These places include the following: Google Workspace add-ons manifest triggers Installable triggers Menu items in Google Workspace editors User callback functions, such the one described in the ScriptApp.newStateToken() code sample .

### Method: scripts.run \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/api/reference/rest/v1/scripts/run](https://developers.google.com/apps-script/api/reference/rest/v1/scripts/run)
- Source ID: `site-api-reference`
- Final score: 70
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The Status object's details field contains an array with a single ExecutionError object that provides information about the nature of the error. response object If the script function returns successfully, this field contains an ExecutionResponse object with the function's return value.
- Home Google Workspace Apps Script Reference Send feedback Method: scripts.run Stay organized with collections Save and categorize content based on your preferences.
- Page Summary outlined flag The scripts.run method in the Apps Script API allows you to execute a function within a deployed Apps Script project.
- HTTP request POST https://script.googleapis.com/v1/scripts/{deploymentId}:run The URL uses gRPC Transcoding syntax.

