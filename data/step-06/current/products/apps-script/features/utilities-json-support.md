---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:53:34.683Z"
product_name: "Apps Script"
product_slug: "apps-script"
feature_name: "Utilities JSON support"
feature_slug: "utilities-json-support"
latest_feature_date: "2010-08-16"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/apps-script/guides/v8-runtime"
  - "https://developers.google.com/apps-script/releases"
  - "https://developers.google.com/apps-script/api/concepts"
keywords:
  - "utilities"
  - "json"
  - "provides"
  - "methods"
  - "parsing"
  - "stringifying"
---

# Utilities JSON support

Product: Apps Script
Coverage: MEDIUM

## Step 02 Summary

Utilities provides methods for parsing and stringifying JSON.

## Extended Definition

Utilities provides methods for parsing and stringifying JSON.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/apps-script/guides/v8-runtime](https://developers.google.com/apps-script/guides/v8-runtime)
- [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- [https://developers.google.com/apps-script/api/concepts](https://developers.google.com/apps-script/api/concepts)

## Supporting Pages

### V8 runtime overview \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/guides/v8-runtime](https://developers.google.com/apps-script/guides/v8-runtime)
- Source ID: `site-docs-root-3`
- Final score: 98
- Re-rank relevance: N/A

Evidence snippets:
- The following V8 example shows the use of object methods when constructing menu items in Google Sheets: function onOpen () { const ui = SpreadsheetApp . getUi (); // Or DocumentApp , SlidesApp , or FormApp . ui . createMenu ( 'Custom Menu' ) . addItem ( 'First item' , 'menu.item1' ) . addSeparator () . addSubMenu ( ui . createMenu ( 'Sub-menu' ) . addItem ( 'Second item' , 'menu.item2' )) . addToUi (); } const menu = { item1 : function () { SpreadsheetApp . getUi () . alert ( 'You clicked: First item' ); }, item2 : function () { SpreadsheetApp . getUi () . alert ( 'You clicked: Second item' ); } } View logs Apps Script provides two logging services: the Logger service and the console class.
- The new runtime recognizes these function definition formats: function normalFunction () {} async function asyncFunction () {} function generatorFunction () {} var varFunction = function () {} let letFunction = function () {} const constFunction = function () {} var namedVarFunction = function alternateNameVarFunction () {} let namedLetFunction = function alternateNameLetFunction () {} const namedConstFunction = function alternateNameConstFunction () {} var varAsyncFunction = async function () {} let letAsyncFunction = async function () {} const constAsyncFunction = async function () {} var namedVarAsyncFunction = async function alternateNameVarAsyncFunction () {} let namedLetAsyncFunction = async function alternateNameLetAsyncFunction () {} const namedConstAsyncFunction = async function alternateNameConstAsyncFunction () {} var varGeneratorFunction = function () {} let letGeneratorFunction = function () {} const constGeneratorFunction = function () {} var namedVarGeneratorFunction = function alternateNameVarGeneratorFunction () {} let namedLetGeneratorFunction = function alternateNameLetGeneratorFunction () {} const namedConstGeneratorFunction = function alternateNameConstGeneratorFunction () {} var varLambda = () => {} let letLambda = () => {} const constLambda = () => {} var varAsyncLambda = async () => {} let letAsyncLambda = async () => {} const constAsyncLambda = async () => {} Call object methods from triggers and callbacks Scripts using V8 can call object methods and class static methods from places where you could already call library methods.
- Unavailable APIs The following standard JavaScript APIs are NOT available in the Apps Script V8 runtime: Timers : setTimeout , setInterval , clearTimeout , clearInterval Streams : ReadableStream , WritableStream , TextEncoder , TextDecoder Web APIs : fetch , FormData , File , Blob , URL , URLSearchParams , DOMException , atob , btoa Crypto : crypto , SubtleCrypto Global Objects : window , navigator , performance , process (Node.js) Use the following Apps Script APIs as alternatives: Timers : Use Utilities.sleep for synchronous pauses.
- Scripts using the V8 runtime benefit from modern ECMAScript syntax, improved function detection, the ability to call object methods from triggers and callbacks, and standard logging and execution viewing capabilities.

### Google Apps Script release notes \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- Source ID: `site-docs-root`
- Final score: 76
- Re-rank relevance: N/A

Evidence snippets:
- November 18, 2013 Deprecated The Apps Script methods Utilities.jsonParse() and Utilities.jsonStringify() have been deprecated in favor of the now-standard JavaScript methods JSON.parse() and JSON.stringify() , which now appear in autocomplete.
- Added two new methods to the Utilities class provide JSON support: Utilities.jsonParse() and Utilities.jsonStringify() .
- May 20, 2015 Deprecated Deprecated the following OAuth class and methods in favor of OAuth libraries : + OAuthConfig + UrlFetchApp.addOAuthService(serviceName) + UrlFetchApp.removeOAuthService(serviceName) Feature Added the following enum and methods to the Script service to allow scripts to identify their installation source and project keys: InstallationSource ScriptApp.getInstallationSource() ScriptApp.getProjectKey() Added several new web-safe base-64 encoding and decoding methods: Utilities.base64DecodeWebSafe(String) Utilities.base64DecodeWebSafe(String, Charset) Utilities.base64EncodeWebSafe(Byte) Utilities.base64EncodeWebSafe(String) Utilities.base64EncodeWebSafe(String, Charset) April 23, 2015 Announcement Add-ons are now out of developer preview.
- The Spreadsheet API adds a new NamedRange type and the following related methods: NamedRange.getName() gets the name of the named range NamedRange.setName(name) sets the name of the named range NamedRange.getRange() gets the underlying range associated with the named range NamedRange.setRange(range) sets the underlying range associated with the named range NamedRange.remove() deletes the named range Spreadsheet.getNamedRanges() gets an array of all the named ranges in the spreadsheet Sheet.getNamedRanges() gets an array of all the named ranges in the sheet Protection.setNamedRange(range) associates an existing protected range with an existing named range The Utilities API includes a new getUuid() method that generates a unique identifier.

### Introduction \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/api/concepts](https://developers.google.com/apps-script/api/concepts)
- Source ID: `site-docs-root`
- Final score: 56
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Use this resource to monitor script executions initiated using the scripts.run method. scripts — The endpoint that provides methods to remotely execute Apps Script functions.
- The API provides methods to list existing processes and gather information about them, such as type and current status.
- The API provides methods to create, list, update, and delete script project deployments.
- The API provides methods to create, read, monitor, and modify projects.

