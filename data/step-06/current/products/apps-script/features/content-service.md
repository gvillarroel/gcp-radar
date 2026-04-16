---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:53:34.659Z"
product_name: "Apps Script"
product_slug: "apps-script"
feature_name: "Content Service"
feature_slug: "content-service"
latest_feature_date: "2012-06-27"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/apps-script/guides/content"
  - "https://developers.google.com/apps-script/reference/content"
  - "https://developers.google.com/apps-script/releases"
keywords:
  - "content"
  - "was"
  - "launched"
  - "serving"
  - "text"
  - "responses"
  - "such"
  - "xml"
---

# Content Service

Product: Apps Script
Coverage: MEDIUM

## Step 02 Summary

Content Service was launched for serving text responses such as XML, RSS, JSON, and plain text.

## Extended Definition

Content Service was launched for serving text responses such as XML, RSS, JSON, and plain text.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/apps-script/guides/content](https://developers.google.com/apps-script/guides/content)
- [https://developers.google.com/apps-script/reference/content](https://developers.google.com/apps-script/reference/content)
- [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)

## Supporting Pages

### Content Service \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/guides/content](https://developers.google.com/apps-script/guides/content)
- Source ID: `site-docs-root`
- Final score: 150
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The start and end parameters specify a time range in the standard Unix epoch. curl -L URL OF YOUR SCRIPT?start=1325437200&end=1325439000 The service returns JSON that reports if the calendar is open in that range. { "available" : true } Serve JSONP in web pages With a slight change, your JSON service can become JSONP to be called from JavaScript in a browser. function doGet ( request ) { var events = CalendarApp . getEvents ( new Date ( Number ( request . parameters . start ) 1000 ), new Date ( Number ( request . parameters . end ) 1000 )); var result = { available : events . length == 0 }; return ContentService . createTextOutput ( request . parameters . prefix + '(' + JSON . stringify ( result ) + ')' ) . setMimeType ( ContentService .
- The following script implements a service that checks if a calendar slot is open at a specific time. function doGet ( request ) { var events = CalendarApp . getEvents ( new Date ( Number ( request . parameters . start ) 1000 ), new Date ( Number ( request . parameters . end ) 1000 )); var result = { available : events . length == 0 }; return ContentService . createTextOutput ( JSON . stringify ( result )) . setMimeType ( ContentService .
- For example, edit an XKCD feed to include alt text directly in the feed for better mobile viewing. function doGet () { var feed = UrlFetchApp . fetch ( 'http://xkcd.com/rss.xml' ). getContentText (); feed = feed . replace ( /(&lt;img. ?alt="(. ?)". ?&gt;)/g , '$1' + new Array ( 10 ). join ( '&lt;br /&gt;' ) + '$2' ); return ContentService . createTextOutput ( feed ) . setMimeType ( ContentService .
- By adding a prefix parameter and setting the MIME type to JAVASCRIPT, JSON services can be transformed into JSONP to be called from JavaScript in a browser, though caution is advised due to security risks. that return raw textual content of various MIME types.

### Content Service \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/reference/content](https://developers.google.com/apps-script/reference/content)
- Source ID: `site-docs-reference-3`
- Final score: 138
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Content This service allows scripts to serve text in various forms, such as text, XML, or JSON.
- MimeType Properties Property Type Description CSV Enum CSV Mime Type ICAL Enum ICAL Mime Type JAVASCRIPT Enum JAVASCRIPT Mime Type JSON Enum JSON Mime Type TEXT Enum TEXT Mime Type VCARD Enum VCARD Mime Type TextOutput Methods Method Return type Brief description append(addedContent) Text Output Appends new content to the content that will be served. clear() Text Output Clears the current content. download As File(filename) Text Output Tells browsers to download rather than display this content. get Content() String Gets the content that will be served. get File Name() String Returns the file name to download this file as, or null if it should be displayed rather than downloaded. get Mime Type() Mime Type Get the mime type this content will be served with. set Content(content) Text Output Sets the content that will be served. set Mime Type(mimeType) Text Output Sets the mime type for content that will be served.
- ContentService Properties Property Type Description Mime Type Mime Type Methods Method Return type Brief description create Text Output() Text Output Create a new Text Output object. create Text Output(content) Text Output Create a new Text Output object that can serve the given content.
- If you deploy the following script as a web app , you will see "Hello, world!" in the browser: function doGet() { return ContentService.createTextOutput('Hello, world!'); } Classes Name Brief description Content Service Service for returning text content from a script.

### Google Apps Script release notes \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- Source ID: `site-docs-root`
- Final score: 130
- Re-rank relevance: N/A

Evidence snippets:
- Launched the Content Service , which you can use to serve text in various forms, such as text, XML, RSS, or JSON.
- April 05, 2019 Feature The Spreadsheet service has been extended with the following new classes and methods to support text finding, checkboxes, and other features: TextFinder RecalculationInterval SheetType DataValidationBuilder.requireCheckbox() DataValidationBuilder.requireCheckbox(checkedValue) DataValidationBuilder.requireCheckbox(checkedValue, uncheckedValue) A clearRanges() method has been added to the all the embedded chart type builder classes, such as EmbeddedAreaChartBuilder.clearRanges() EmbeddedChart.getChartId() RangeList.check() RangeList.insertCheckboxes() RangeList.insertCheckboxes(checkedValue) RangeList.insertCheckboxes(checkedValue, uncheckedValue) RangeList.removeCheckboxes() RangeList.uncheck() Range.check() Range.createTextFinder(findText) Range.getDataRegion() Range.getDataRegion(dimension) Range.insertCheckboxes() Range.insertCheckboxes(checkedValue) Range.insertCheckboxes(checkedValue, uncheckedValue) Range.removeCheckboxes() Range.uncheck() Sheet.createTextFinder(findText) Sheet.getType() Spreadsheet.createTextFinder(findText) Spreadsheet.getIterativeCalculationConvergenceThreshold() Spreadsheet.getMaxIterativeCalculationCycles() Spreadsheet.getRecalculationInterval() Spreadsheet.isIterativeCalculationEnabled() Spreadsheet.moveChartToObjectSheet(chart) Spreadsheet.setIterativeCalculationConvergenceThreshold(minThreshold) Spreadsheet.setIterativeCalculationEnabled(isEnabled) Spreadsheet.setMaxIterativeCalculationCycles(maxIterations) Spreadsheet.setRecalculationInterval(recalculationInterval) The Data Studio service has been extended with the following new classes and methods that support configuring BigQuery connectors: BigQueryConfig BigQueryParameterType CommunityConnector.newBigQueryConfig() The Notification objects in the Card service no longer have a type that you must set.
- September 01, 2021 Feature In the HTML Service iframe sandbox, allow-top-navigation , which allows the content to navigate its top-level browsing context, is restricted and not set as an attribute in the sandbox.
- Removed text-related methods such as isBold() and isUnderline() from container elements such as Table while retaining them on the Text class.

