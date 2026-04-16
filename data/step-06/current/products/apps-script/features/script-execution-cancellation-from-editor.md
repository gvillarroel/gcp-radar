---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:53:34.666Z"
product_name: "Apps Script"
product_slug: "apps-script"
feature_name: "Script execution cancellation from editor"
feature_slug: "script-execution-cancellation-from-editor"
latest_feature_date: "2012-02-06"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/apps-script/releases"
  - "https://developers.google.com/apps-script/guides/dashboard"
  - "https://developers.google.com/apps-script/guides/v8-runtime"
keywords:
  - "script"
  - "execution"
  - "cancellation"
  - "editor"
  - "running"
  - "scripts"
  - "can"
  - "now"
---

# Script execution cancellation from editor

Product: Apps Script
Coverage: MEDIUM

## Step 02 Summary

Running scripts can now be canceled directly from the script editor.

## Extended Definition

Running scripts can now be canceled directly from the script editor.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- [https://developers.google.com/apps-script/guides/dashboard](https://developers.google.com/apps-script/guides/dashboard)
- [https://developers.google.com/apps-script/guides/v8-runtime](https://developers.google.com/apps-script/guides/v8-runtime)

## Supporting Pages

### Google Apps Script release notes \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- Source ID: `site-docs-root`
- Final score: 95
- Re-rank relevance: N/A

Evidence snippets:
- Made some modifications to the calculation of CPU time for scripts running on triggers, so that time spent waiting on certain processes is not counted toward that limi April 16, 2012 Fixed Fixed an issue in the Script Editor where the debugger would not terminate after executing the last statement of a script.
- Script editors (in addition to script owners) can now publish add-ons and deploy scripts as web apps or executables for the Execution API .
- February 06, 2012 Feature Added a feature to cancel running scripts, when the script is run from the script editor.
- Along with a completely new interface, the following features have been updated: The editor now has a collapsible left sidebar to navigate to the Apps Script project overview, settings, executions, and triggers.

### The Google Apps Script Dashboard \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/guides/dashboard](https://developers.google.com/apps-script/guides/dashboard)
- Source ID: `site-docs-root`
- Final score: 89
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Selecting ALL shows aggregate data for all of the project's deployments and from executions resulting from developers running the project from within the Apps Script code editor.
- The My Executions panel shows a log of all previous and running executions for projects for which you are an owner, editor or viewer.
- The execution originated from the Apps Script editor.
- Use the dashboard to: View and search for your existing Apps Script projects, including bound scripts attached to Google Workspace documents.

### V8 runtime overview \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/guides/v8-runtime](https://developers.google.com/apps-script/guides/v8-runtime)
- Source ID: `site-docs-root-3`
- Final score: 89
- Re-rank relevance: N/A

Evidence snippets:
- Scripts using the V8 runtime benefit from modern ECMAScript syntax, improved function detection, the ability to call object methods from triggers and callbacks, and standard logging and execution viewing capabilities.
- To show Logger and console logs, at the top of the script editor, click Execution log .
- The new runtime recognizes these function definition formats: function normalFunction () {} async function asyncFunction () {} function generatorFunction () {} var varFunction = function () {} let letFunction = function () {} const constFunction = function () {} var namedVarFunction = function alternateNameVarFunction () {} let namedLetFunction = function alternateNameLetFunction () {} const namedConstFunction = function alternateNameConstFunction () {} var varAsyncFunction = async function () {} let letAsyncFunction = async function () {} const constAsyncFunction = async function () {} var namedVarAsyncFunction = async function alternateNameVarAsyncFunction () {} let namedLetAsyncFunction = async function alternateNameLetAsyncFunction () {} const namedConstAsyncFunction = async function alternateNameConstAsyncFunction () {} var varGeneratorFunction = function () {} let letGeneratorFunction = function () {} const constGeneratorFunction = function () {} var namedVarGeneratorFunction = function alternateNameVarGeneratorFunction () {} let namedLetGeneratorFunction = function alternateNameLetGeneratorFunction () {} const namedConstGeneratorFunction = function alternateNameConstGeneratorFunction () {} var varLambda = () => {} let letLambda = () => {} const constLambda = () => {} var varAsyncLambda = async () => {} let letAsyncLambda = async () => {} const constAsyncLambda = async () => {} Call object methods from triggers and callbacks Scripts using V8 can call object methods and class static methods from places where you could already call library methods.
- V8 syntax examples The following is a short list of popular syntactical features available to scripts using the V8 runtime. let and const The let and const keywords allow you to define block scope local variables and block scope constants, respectively. // V8 runtime let s = "hello" ; if ( s === "hello" ) { s = "world" ; console . log ( s ); // Prints "world" } console . log ( s ); // Prints "hello" const N = 100 ; N = 5 ; // Results in TypeError Arrow functions Arrow functions provide a compact way of defining functions within expressions. // Rhino runtime function square ( x ) { return x x ; } console . log ( square ( 5 )); // Outputs 25 // V8 runtime const square = x => x x ; console . log ( square ( 5 )); // Outputs 25 // Outputs [ 1 , 4 , 9 ] console . log ([ 1 , 2 , 3 ] . map ( x => x x )); Classes Classes provide a means to conceptually organize code with inheritance.

