---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:53:34.681Z"
product_name: "Apps Script"
product_slug: "apps-script"
feature_name: "Script timezone configuration"
feature_slug: "script-timezone-configuration"
latest_feature_date: "2010-08-16"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/apps-script/releases"
  - "https://developers.google.com/apps-script/guides/v8-runtime"
  - "https://developers.google.com/apps-script/guides/triggers/installable"
keywords:
  - "script"
  - "timezone"
  - "configuration"
  - "scripts"
  - "configuring"
  - "viewing"
  - "editor"
  - "triggers"
---

# Script timezone configuration

Product: Apps Script
Coverage: MEDIUM

## Step 02 Summary

Scripts support configuring and viewing their timezone in the script editor and triggers dialog.

## Extended Definition

Scripts support configuring and viewing their timezone in the script editor and triggers dialog.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- [https://developers.google.com/apps-script/guides/v8-runtime](https://developers.google.com/apps-script/guides/v8-runtime)
- [https://developers.google.com/apps-script/guides/triggers/installable](https://developers.google.com/apps-script/guides/triggers/installable)

## Supporting Pages

### Google Apps Script release notes \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- Source ID: `site-docs-root`
- Final score: 96
- Re-rank relevance: N/A

Evidence snippets:
- Made some modifications to the calculation of CPU time for scripts running on triggers, so that time spent waiting on certain processes is not counted toward that limi April 16, 2012 Fixed Fixed an issue in the Script Editor where the debugger would not terminate after executing the last statement of a script.
- We've also updated the Apps Script code samples to use the Advanced Chat Service in the following Chat API developer guides: Authenticate as an app Authenticate as a user Try it - Respond to Incidents September 26, 2023 Change The email address that sends notifications about errors in triggers has been updated from apps-scripts-notifications@google.com to noreply-apps-scripts-notifications@google.com .
- Feature Added the following Session methods, which allow scripts to determine the user's locale and time zone: getActiveUserLocale() getActiveUserTimeZone() January 21, 2014 Feature The new SpreadsheetApp method Spreadsheet.getUi() allows scripts to access the spreadsheet's user-interface environment in order to add features like menus, dialogs, and sidebars.
- Along with a completely new interface, the following features have been updated: The editor now has a collapsible left sidebar to navigate to the Apps Script project overview, settings, executions, and triggers.

### V8 runtime overview \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/guides/v8-runtime](https://developers.google.com/apps-script/guides/v8-runtime)
- Source ID: `site-docs-root-3`
- Final score: 84
- Re-rank relevance: N/A

Evidence snippets:
- Scripts using the V8 runtime benefit from modern ECMAScript syntax, improved function detection, the ability to call object methods from triggers and callbacks, and standard logging and execution viewing capabilities.
- The new runtime recognizes these function definition formats: function normalFunction () {} async function asyncFunction () {} function generatorFunction () {} var varFunction = function () {} let letFunction = function () {} const constFunction = function () {} var namedVarFunction = function alternateNameVarFunction () {} let namedLetFunction = function alternateNameLetFunction () {} const namedConstFunction = function alternateNameConstFunction () {} var varAsyncFunction = async function () {} let letAsyncFunction = async function () {} const constAsyncFunction = async function () {} var namedVarAsyncFunction = async function alternateNameVarAsyncFunction () {} let namedLetAsyncFunction = async function alternateNameLetAsyncFunction () {} const namedConstAsyncFunction = async function alternateNameConstAsyncFunction () {} var varGeneratorFunction = function () {} let letGeneratorFunction = function () {} const constGeneratorFunction = function () {} var namedVarGeneratorFunction = function alternateNameVarGeneratorFunction () {} let namedLetGeneratorFunction = function alternateNameLetGeneratorFunction () {} const namedConstGeneratorFunction = function alternateNameConstGeneratorFunction () {} var varLambda = () => {} let letLambda = () => {} const constLambda = () => {} var varAsyncLambda = async () => {} let letAsyncLambda = async () => {} const constAsyncLambda = async () => {} Call object methods from triggers and callbacks Scripts using V8 can call object methods and class static methods from places where you could already call library methods.
- These places include the following: Google Workspace add-ons manifest triggers Installable triggers Menu items in Google Workspace editors User callback functions, such the one described in the ScriptApp.newStateToken() code sample .
- V8 syntax examples The following is a short list of popular syntactical features available to scripts using the V8 runtime. let and const The let and const keywords allow you to define block scope local variables and block scope constants, respectively. // V8 runtime let s = "hello" ; if ( s === "hello" ) { s = "world" ; console . log ( s ); // Prints "world" } console . log ( s ); // Prints "hello" const N = 100 ; N = 5 ; // Results in TypeError Arrow functions Arrow functions provide a compact way of defining functions within expressions. // Rhino runtime function square ( x ) { return x x ; } console . log ( square ( 5 )); // Outputs 25 // V8 runtime const square = x => x x ; console . log ( square ( 5 )); // Outputs 25 // Outputs [ 1 , 4 , 9 ] console . log ([ 1 , 2 , 3 ] . map ( x => x x )); Classes Classes provide a means to conceptually organize code with inheritance.

### Installable Triggers \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/guides/triggers/installable](https://developers.google.com/apps-script/guides/triggers/installable)
- Source ID: `site-docs-reference`
- Final score: 82
- Re-rank relevance: N/A

Evidence snippets:
- Time-driven triggers let scripts execute at a particular time or on a recurring interval, as frequently as every minute or as infrequently as once per month. (An add-on can use a time-driven trigger once per hour at most.) The time might be slightly randomized—for example, if you create a recurring 9 AM trigger, Apps Script chooses a time between 9 AM and 10 AM, then keeps that timing consistent from day to day so that 24 hours elapse before the trigger fires again.
- Manage triggers manually To manually create an installable trigger in the script editor, follow these steps: Open your Apps Script project.
- Installable triggers can be managed manually through the script editor or programmatically using the Script service.
- For standalone scripts, users need at least view access to the script file for triggers to run properly.

