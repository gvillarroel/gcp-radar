---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:53:34.560Z"
product_name: "Apps Script"
product_slug: "apps-script"
feature_name: "Utilities byte-array digest and HMAC methods"
feature_slug: "utilities-byte-array-digest-and-hmac-methods"
latest_feature_date: "2018-06-19"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/apps-script/releases"
  - "https://developers.google.com/apps-script/guides/v8-runtime"
  - "https://developers.google.com/apps-script/reference/spreadsheet/data-source"
keywords:
  - "utilities"
  - "byte"
  - "array"
  - "digest"
  - "hmac"
  - "methods"
  - "apps"
  - "script"
---

# Utilities byte-array digest and HMAC methods

Product: Apps Script
Coverage: MEDIUM

## Step 02 Summary

Apps Script Utilities service adds digest and HMAC signature methods that accept byte arrays.

## Extended Definition

Apps Script Utilities service adds digest and HMAC signature methods that accept byte arrays.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- [https://developers.google.com/apps-script/guides/v8-runtime](https://developers.google.com/apps-script/guides/v8-runtime)
- [https://developers.google.com/apps-script/reference/spreadsheet/data-source](https://developers.google.com/apps-script/reference/spreadsheet/data-source)

## Supporting Pages

### Google Apps Script release notes \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- Source ID: `site-docs-root`
- Final score: 113
- Re-rank relevance: N/A

Evidence snippets:
- Feature The Forms service now has the following method: Form.deleteResponse(responseId) The Utilities service now has the following methods: Utilities.computeDigest(algorithm, value) , where value is a Byte array Utilities.computeHmacSha256Signature(value, key) , where value and key are Byte arrays Utilities.computeHmacSignature(algorithm, value, key) , where value and key are Byte arrays Change The quota limits for UrlFetch GET response size and POST size have been increased to 50MB / call.
- May 20, 2015 Deprecated Deprecated the following OAuth class and methods in favor of OAuth libraries : + OAuthConfig + UrlFetchApp.addOAuthService(serviceName) + UrlFetchApp.removeOAuthService(serviceName) Feature Added the following enum and methods to the Script service to allow scripts to identify their installation source and project keys: InstallationSource ScriptApp.getInstallationSource() ScriptApp.getProjectKey() Added several new web-safe base-64 encoding and decoding methods: Utilities.base64DecodeWebSafe(String) Utilities.base64DecodeWebSafe(String, Charset) Utilities.base64EncodeWebSafe(Byte) Utilities.base64EncodeWebSafe(String) Utilities.base64EncodeWebSafe(String, Charset) April 23, 2015 Announcement Add-ons are now out of developer preview.
- November 18, 2013 Deprecated The Apps Script methods Utilities.jsonParse() and Utilities.jsonStringify() have been deprecated in favor of the now-standard JavaScript methods JSON.parse() and JSON.stringify() , which now appear in autocomplete.
- Feature The Spreadsheet service has been extended with the following new classes and methods to support text styles and Rich Text cell formatting: RichTextValue RichTextValueBuilder TextStyle TextStyleBuilder Range.getRichTextValue() Range.getRichTextValues() Range.getTextStyle() Range.getTextStyles() Range.setRichTextValue(value) Range.setRichTextValues(values) Range.setTextStyle(style) Range.setTextStyles(styles) SpreadsheetApp.newRichTextValue() SpreadsheetApp.newTextStyle() The Data Studio service has been extended with the following new classes and methods that define and support authentication types for community connectors: GetAuthTypeResponse AuthType CommunityConnector,newAuthTypeResponse() January 04, 2019 Feature The Slides service has been extended with the following new classes and methods that support slide linking and text box insertion: SlideLinkingMode [ Layout.insertTextBox(text) }(https://developers.google.com/apps-script/reference/slides/layout#inserttextboxtext) Layout.insertTextBox(text, left, top, width, height) Master.insertTextBox(text) Master.insertTextBox(text, left, top, width, height) Page.insertTextBox(text) Page.insertTextBox(text, left, top, width, height) Presentation.appendSlide(slide, linkingMode) Presentation.insertSlide(insertionIndex, slide, linkingMode) Slide.getSlideLinkingMode() Slide.getSourcePresentationId() Slide.getSourceSlideObjectId() Slide.insertTextBox(text) Slide.insertTextBox(text, left, top, width, height) Slide.refreshSlide() Slide.unlink() The Data Studio service has been extended with the following new classes and methods that error displays: DebugError UserError CommunityConnector.newDebugError() CommunityConnector.newUserError() December 13, 2018 Deprecated The Fusion Tables advanced service has been deprecated and will shutdown fully on December 3rd, 2019.

### V8 runtime overview \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/guides/v8-runtime](https://developers.google.com/apps-script/guides/v8-runtime)
- Source ID: `site-docs-root-3`
- Final score: 102
- Re-rank relevance: N/A

Evidence snippets:
- The following V8 example shows the use of object methods when constructing menu items in Google Sheets: function onOpen () { const ui = SpreadsheetApp . getUi (); // Or DocumentApp , SlidesApp , or FormApp . ui . createMenu ( 'Custom Menu' ) . addItem ( 'First item' , 'menu.item1' ) . addSeparator () . addSubMenu ( ui . createMenu ( 'Sub-menu' ) . addItem ( 'Second item' , 'menu.item2' )) . addToUi (); } const menu = { item1 : function () { SpreadsheetApp . getUi () . alert ( 'You clicked: First item' ); }, item2 : function () { SpreadsheetApp . getUi () . alert ( 'You clicked: Second item' ); } } View logs Apps Script provides two logging services: the Logger service and the console class.
- Unavailable APIs The following standard JavaScript APIs are NOT available in the Apps Script V8 runtime: Timers : setTimeout , setInterval , clearTimeout , clearInterval Streams : ReadableStream , WritableStream , TextEncoder , TextDecoder Web APIs : fetch , FormData , File , Blob , URL , URLSearchParams , DOMException , atob , btoa Crypto : crypto , SubtleCrypto Global Objects : window , navigator , performance , process (Node.js) Use the following Apps Script APIs as alternatives: Timers : Use Utilities.sleep for synchronous pauses.
- Crypto : Use Utilities for cryptographic functions like computeDigest , computeHmacSha256Signature , and computeRsaSha256Signature .
- The new runtime recognizes these function definition formats: function normalFunction () {} async function asyncFunction () {} function generatorFunction () {} var varFunction = function () {} let letFunction = function () {} const constFunction = function () {} var namedVarFunction = function alternateNameVarFunction () {} let namedLetFunction = function alternateNameLetFunction () {} const namedConstFunction = function alternateNameConstFunction () {} var varAsyncFunction = async function () {} let letAsyncFunction = async function () {} const constAsyncFunction = async function () {} var namedVarAsyncFunction = async function alternateNameVarAsyncFunction () {} let namedLetAsyncFunction = async function alternateNameLetAsyncFunction () {} const namedConstAsyncFunction = async function alternateNameConstAsyncFunction () {} var varGeneratorFunction = function () {} let letGeneratorFunction = function () {} const constGeneratorFunction = function () {} var namedVarGeneratorFunction = function alternateNameVarGeneratorFunction () {} let namedLetGeneratorFunction = function alternateNameLetGeneratorFunction () {} const namedConstGeneratorFunction = function alternateNameConstGeneratorFunction () {} var varLambda = () => {} let letLambda = () => {} const constLambda = () => {} var varAsyncLambda = async () => {} let letAsyncLambda = async () => {} const constAsyncLambda = async () => {} Call object methods from triggers and callbacks Scripts using V8 can call object methods and class static methods from places where you could already call library methods.

### Class DataSource \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/reference/spreadsheet/data-source](https://developers.google.com/apps-script/reference/spreadsheet/data-source)
- Source ID: `site-docs-reference-required-4`
- Final score: 55
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Methods Method Return type Brief description cancel All Linked Data Source Object Refreshes() void Cancels all currently running refreshes of data source objects linked to this data source. create Calculated Column(name, formula) Data Source Column Creates a calculated column. create Data Source Pivot Table On New Sheet() Data Source Pivot Table Creates a data source pivot table from this data source in the first cell of a new sheet. create Data Source Table On New Sheet() Data Source Table Creates a data source table from this data source in the first cell of a new sheet. get Calculated Column By Name(columnName) Data Source Column null Returns the calculated column in the data source that matches the column name. get Calculated Columns() Data Source Column[] Returns all the calculated columns in the data source. get Columns() Data Source Column[] Returns all the columns in the data source. get Data Source Sheets() Data Source Sheet[] Returns the data source sheets associated with this data source. get Spec() Data Source Spec Gets the data source specification. refresh All Linked Data Source Objects() void Refreshes all data source objects linked to the data source. update Spec(spec) Data Source Updates the data source specification and refreshes the data source objects linked with this data source with the new specification. update Spec(spec, refreshAllLinkedObjects) Data Source Updates the data source specification and refreshes the linked data source sheets with the new specification. wait For All Data Executions Completion(timeoutInSeconds) void Waits until all the current executions of the linked data source objects complete, timing out after the provided number of seconds.
- Home Google Workspace Apps Script Reference Send feedback Class DataSource Stay organized with collections Save and categorize content based on your preferences.
- Authorization Scripts that use this method require authorization with one or more of the following scopes : https://www.googleapis.com/auth/spreadsheets.currentonly https://www.googleapis.com/auth/spreadsheets Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Authorization Scripts that use this method require authorization with one or more of the following scopes : https://www.googleapis.com/auth/spreadsheets.currentonly https://www.googleapis.com/auth/spreadsheets waitForAllDataExecutionsCompletion(timeoutInSeconds) Waits until all the current executions of the linked data source objects complete, timing out after the provided number of seconds.

