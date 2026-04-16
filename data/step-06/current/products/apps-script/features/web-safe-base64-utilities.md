---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:53:34.592Z"
product_name: "Apps Script"
product_slug: "apps-script"
feature_name: "Web-safe Base64 utilities"
feature_slug: "web-safe-base64-utilities"
latest_feature_date: "2015-05-20"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/apps-script/releases"
  - "https://developers.google.com/apps-script/guides/v8-runtime"
  - "https://developers.google.com/apps-script/guides/services/cloud-run"
keywords:
  - "web"
  - "safe"
  - "base64"
  - "utilities"
  - "can"
  - "encode"
  - "decode"
  - "values"
---

# Web-safe Base64 utilities

Product: Apps Script
Coverage: MEDIUM

## Step 02 Summary

Utilities can encode and decode web-safe Base64 values.

## Extended Definition

Utilities can encode and decode web-safe Base64 values.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- [https://developers.google.com/apps-script/guides/v8-runtime](https://developers.google.com/apps-script/guides/v8-runtime)
- [https://developers.google.com/apps-script/guides/services/cloud-run](https://developers.google.com/apps-script/guides/services/cloud-run)

## Supporting Pages

### Google Apps Script release notes \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- Source ID: `site-docs-root`
- Final score: 126
- Re-rank relevance: N/A

Evidence snippets:
- May 20, 2015 Deprecated Deprecated the following OAuth class and methods in favor of OAuth libraries : + OAuthConfig + UrlFetchApp.addOAuthService(serviceName) + UrlFetchApp.removeOAuthService(serviceName) Feature Added the following enum and methods to the Script service to allow scripts to identify their installation source and project keys: InstallationSource ScriptApp.getInstallationSource() ScriptApp.getProjectKey() Added several new web-safe base-64 encoding and decoding methods: Utilities.base64DecodeWebSafe(String) Utilities.base64DecodeWebSafe(String, Charset) Utilities.base64EncodeWebSafe(Byte) Utilities.base64EncodeWebSafe(String) Utilities.base64EncodeWebSafe(String, Charset) April 23, 2015 Announcement Add-ons are now out of developer preview.
- Feature The Spreadsheet service has been extended with the following new classes and methods to support text styles and Rich Text cell formatting: RichTextValue RichTextValueBuilder TextStyle TextStyleBuilder Range.getRichTextValue() Range.getRichTextValues() Range.getTextStyle() Range.getTextStyles() Range.setRichTextValue(value) Range.setRichTextValues(values) Range.setTextStyle(style) Range.setTextStyles(styles) SpreadsheetApp.newRichTextValue() SpreadsheetApp.newTextStyle() The Data Studio service has been extended with the following new classes and methods that define and support authentication types for community connectors: GetAuthTypeResponse AuthType CommunityConnector,newAuthTypeResponse() January 04, 2019 Feature The Slides service has been extended with the following new classes and methods that support slide linking and text box insertion: SlideLinkingMode [ Layout.insertTextBox(text) }(https://developers.google.com/apps-script/reference/slides/layout#inserttextboxtext) Layout.insertTextBox(text, left, top, width, height) Master.insertTextBox(text) Master.insertTextBox(text, left, top, width, height) Page.insertTextBox(text) Page.insertTextBox(text, left, top, width, height) Presentation.appendSlide(slide, linkingMode) Presentation.insertSlide(insertionIndex, slide, linkingMode) Slide.getSlideLinkingMode() Slide.getSourcePresentationId() Slide.getSourceSlideObjectId() Slide.insertTextBox(text) Slide.insertTextBox(text, left, top, width, height) Slide.refreshSlide() Slide.unlink() The Data Studio service has been extended with the following new classes and methods that error displays: DebugError UserError CommunityConnector.newDebugError() CommunityConnector.newUserError() December 13, 2018 Deprecated The Fusion Tables advanced service has been deprecated and will shutdown fully on December 3rd, 2019.
- The Spreadsheet API adds a new NamedRange type and the following related methods: NamedRange.getName() gets the name of the named range NamedRange.setName(name) sets the name of the named range NamedRange.getRange() gets the underlying range associated with the named range NamedRange.setRange(range) sets the underlying range associated with the named range NamedRange.remove() deletes the named range Spreadsheet.getNamedRanges() gets an array of all the named ranges in the spreadsheet Sheet.getNamedRanges() gets an array of all the named ranges in the sheet Protection.setNamedRange(range) associates an existing protected range with an existing named range The Utilities API includes a new getUuid() method that generates a unique identifier.
- The Optimization service has been updated with the following batch methods: LinearOptimizationEngine.addContraints(lowerBounds, upperBounds, variableNames, coefficients) LinearOptimizationEngine.addVariables(names, lowerBounds, upperBounds, types, objectiveCoeffients) May 03, 2019 Feature The Document service has been updated to add methods to get and set the language of a document: Document.getLanguage() Document.getSupportedLanguageCodes() Document.setLanguage(languageCode) April 19, 2019 Feature The Data Studio service has been updated to add a few values to FieldType enum : HYPERLINK IMAGE IMAGE LINK April 08, 2019 Change The behavior of the Google Cloud (GCP) projects used by scripts has been altered.

### V8 runtime overview \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/guides/v8-runtime](https://developers.google.com/apps-script/guides/v8-runtime)
- Source ID: `site-docs-root-3`
- Final score: 111
- Re-rank relevance: N/A

Evidence snippets:
- Fetch : Use UrlFetchApp.fetch(url, params) to make HTTP(S) requests. atob : Use Utilities.base64Decode to decode Base64-encoded strings. btoa : Use Utilities.base64Encode to encode strings in Base64.
- Unavailable APIs The following standard JavaScript APIs are NOT available in the Apps Script V8 runtime: Timers : setTimeout , setInterval , clearTimeout , clearInterval Streams : ReadableStream , WritableStream , TextEncoder , TextDecoder Web APIs : fetch , FormData , File , Blob , URL , URLSearchParams , DOMException , atob , btoa Crypto : crypto , SubtleCrypto Global Objects : window , navigator , performance , process (Node.js) Use the following Apps Script APIs as alternatives: Timers : Use Utilities.sleep for synchronous pauses.
- Classes in V8 are primarily syntactical sugar over the JavaScript prototype-based inheritance. // V8 runtime class Rectangle { constructor ( width , height ) { // class constructor this . width = width ; this . height = height ; } logToConsole () { // class method console . log ( Rectangle ( width =$ { this . width }, height =$ { this . height }) ); } } const r = new Rectangle ( 10 , 20 ); r . logToConsole (); // Outputs Rectangle ( width = 10 , height = 20 ) Destructuring assignments Destructuring assignment expressions are a quick way to unpack values from arrays and objects into distinct variables. // Rhino runtime var data = { a : 12 , b : false , c : 'blue' }; var a = data . a ; var c = data . c ; console . log ( a , c ); // Outputs 12 "blue" var a = [ 1 , 2 , 3 ]; var x = a [ 0 ]; var y = a [ 1 ]; var z = a [ 2 ]; console . log ( x , y , z ); // Outputs 1 2 3 // V8 runtime const data = { a : 12 , b : false , c : 'blue' }; const { a , c } = data ; console . log ( a , c ); // Outputs 12 "blue" const array = [ 1 , 2 , 3 ]; const [ x , y , z ] = array ; console . log ( x , y , z ); // Outputs 1 2 3 Template literals Template literals are string literals that allow embedded expressions.
- This can simplify the code in the function body as it removes the need to explicitly assign default values to missing parameters. // Rhino runtime function hello ( greeting, name ) { greeting = greeting "hello" ; name = name "world" ; console . log ( greeting + " " + name + "!" ); } hello (); // Outputs "hello world!" // V8 runtime const hello = function ( greeting = "hello" , name = "world" ) { console . log ( greeting + " " + name + "!" ); } hello (); // Outputs "hello world!" Multi-line strings Define multi-line strings using the same syntax as template literals .

### Connect to Google Cloud services \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/guides/services/cloud-run](https://developers.google.com/apps-script/guides/services/cloud-run)
- Source ID: `site-docs-root-2`
- Final score: 49
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To find your script's client ID, you can decode an identity token: function logClientId () { const idToken = ScriptApp . getIdentityToken (); const body = idToken . split ( '.' )[ 1 ]; const decoded = Utilities . newBlob ( Utilities . base64Decode ( body )). getDataAsString (); const payload = JSON . parse ( decoded ); Logger . log ( 'Client ID: ' + payload . aud ); } For Cloud Run, you can configure custom audiences to allow this client ID.

