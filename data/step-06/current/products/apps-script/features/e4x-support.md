---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:53:34.633Z"
product_name: "Apps Script"
product_slug: "apps-script"
feature_name: "E4X support"
feature_slug: "e4x-support"
latest_feature_date: "2013-07-09"
deprecation_date: "2013-07-09"
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/apps-script/releases"
  - "https://developers.google.com/apps-script/guides/v8-runtime"
  - "https://developers.google.com/apps-script/advanced/tables"
keywords:
  - "e4x"
  - "javascript"
  - "feature"
  - "was"
  - "deprecated"
  - "2013"
  - "07"
  - "09"
---

# E4X support

Product: Apps Script
Coverage: MEDIUM

## Step 02 Summary

Support for the JavaScript E4X feature was deprecated; deprecated on 2013-07-09.

## Extended Definition

Support for the JavaScript E4X feature was deprecated; deprecated on 2013-07-09.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- [https://developers.google.com/apps-script/guides/v8-runtime](https://developers.google.com/apps-script/guides/v8-runtime)
- [https://developers.google.com/apps-script/advanced/tables](https://developers.google.com/apps-script/advanced/tables)

## Supporting Pages

### Google Apps Script release notes \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- Source ID: `site-docs-root`
- Final score: 87
- Re-rank relevance: N/A

Evidence snippets:
- July 09, 2013 Deprecated Deprecated the old Xml service, SoapService , and support for the JavaScript feature E4X.
- November 18, 2013 Deprecated The Apps Script methods Utilities.jsonParse() and Utilities.jsonStringify() have been deprecated in favor of the now-standard JavaScript methods JSON.parse() and JSON.stringify() , which now appear in autocomplete.
- Feature The Spreadsheet service has been extended with the following new classes and methods to support text styles and Rich Text cell formatting: RichTextValue RichTextValueBuilder TextStyle TextStyleBuilder Range.getRichTextValue() Range.getRichTextValues() Range.getTextStyle() Range.getTextStyles() Range.setRichTextValue(value) Range.setRichTextValues(values) Range.setTextStyle(style) Range.setTextStyles(styles) SpreadsheetApp.newRichTextValue() SpreadsheetApp.newTextStyle() The Data Studio service has been extended with the following new classes and methods that define and support authentication types for community connectors: GetAuthTypeResponse AuthType CommunityConnector,newAuthTypeResponse() January 04, 2019 Feature The Slides service has been extended with the following new classes and methods that support slide linking and text box insertion: SlideLinkingMode [ Layout.insertTextBox(text) }(https://developers.google.com/apps-script/reference/slides/layout#inserttextboxtext) Layout.insertTextBox(text, left, top, width, height) Master.insertTextBox(text) Master.insertTextBox(text, left, top, width, height) Page.insertTextBox(text) Page.insertTextBox(text, left, top, width, height) Presentation.appendSlide(slide, linkingMode) Presentation.insertSlide(insertionIndex, slide, linkingMode) Slide.getSlideLinkingMode() Slide.getSourcePresentationId() Slide.getSourceSlideObjectId() Slide.insertTextBox(text) Slide.insertTextBox(text, left, top, width, height) Slide.refreshSlide() Slide.unlink() The Data Studio service has been extended with the following new classes and methods that error displays: DebugError UserError CommunityConnector.newDebugError() CommunityConnector.newUserError() December 13, 2018 Deprecated The Fusion Tables advanced service has been deprecated and will shutdown fully on December 3rd, 2019.
- February 26, 2019 Feature The Spreadsheet service has been extended with the following new classes and methods to support BigQuery data connectors in Sheets : BigQueryDataSourceSpec BigQueryDataSourceSpecBuilder DataExecutionErrorCode DataExecutionState DataExecutionStatus DataSourceParameterType DataSourceParameter DataSourceSpecBuilder DataSourceSpec DataSourceTable DataSourceType DataSource Range.getDataSourceTables() Sheet.getDataSourceTables() SpreadsheetApp.enableAllDataSourcesExecution() SpreadsheetApp.enableBigQueryExecution() SpreadsheetApp.newDataSourceSpec() Spreadsheet.getDataSourceTables() Spreadsheet.insertSheetWithDataSourceTable(spec) The Data Studio service has been extended with the following new methods involving reaggregation settings: Field.getIsReaggregatable() Field.setIsReaggregatable(isReaggregatable) January 22, 2019 Deprecated The deprecated UiApp service will be officially shutdown on July 15th, 2019.

### V8 runtime overview \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/guides/v8-runtime](https://developers.google.com/apps-script/guides/v8-runtime)
- Source ID: `site-docs-root-3`
- Final score: 68
- Re-rank relevance: N/A

Evidence snippets:
- Apps Script now supports the V8 runtime, which powers Chrome and Node.js, enabling developers to use modern JavaScript syntax and features not available with the older Rhino runtime.
- Apps Script developers can't use more modern JavaScript syntax and features in scripts using the Rhino runtime.
- Migrate existing scripts to V8 in order to take advantage of the modern JavaScript syntax and features.
- Classes in V8 are primarily syntactical sugar over the JavaScript prototype-based inheritance. // V8 runtime class Rectangle { constructor ( width , height ) { // class constructor this . width = width ; this . height = height ; } logToConsole () { // class method console . log ( Rectangle ( width =$ { this . width }, height =$ { this . height }) ); } } const r = new Rectangle ( 10 , 20 ); r . logToConsole (); // Outputs Rectangle ( width = 10 , height = 20 ) Destructuring assignments Destructuring assignment expressions are a quick way to unpack values from arrays and objects into distinct variables. // Rhino runtime var data = { a : 12 , b : false , c : 'blue' }; var a = data . a ; var c = data . c ; console . log ( a , c ); // Outputs 12 "blue" var a = [ 1 , 2 , 3 ]; var x = a [ 0 ]; var y = a [ 1 ]; var z = a [ 2 ]; console . log ( x , y , z ); // Outputs 1 2 3 // V8 runtime const data = { a : 12 , b : false , c : 'blue' }; const { a , c } = data ; console . log ( a , c ); // Outputs 12 "blue" const array = [ 1 , 2 , 3 ]; const [ x , y , z ] = array ; console . log ( x , y , z ); // Outputs 1 2 3 Template literals Template literals are string literals that allow embedded expressions.

### Apps Script Sunset Schedule \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/advanced/tables](https://developers.google.com/apps-script/advanced/tables)
- Source ID: `site-docs-reference`
- Final score: 67
- Re-rank relevance: N/A

Evidence snippets:
- Feature Deprecated Sunset Behavior after sunset date setAuthentication(clientId, signingKey) March 03, 2026 June 01, 2026 This method is unavailable and existing scripts fail when using this method.
- Page Summary outlined flag Apps Script features are marked as deprecated before they are shut down, allowing time for migration to supported alternatives.
- Once a sunset date for an Apps Script feature is announced, the feature is considered deprecated, but is available for use until the sunset date.
- The table above lists deprecated Apps Script features, their deprecation and sunset dates, and the expected behavior after sunset.

