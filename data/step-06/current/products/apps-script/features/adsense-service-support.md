---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:29:46.832Z"
product_name: "Apps Script"
product_slug: "apps-script"
feature_name: "AdSense Service support"
feature_slug: "adsense-service-support"
latest_feature_date: "2011-12-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/apps-script/advanced/adsense"
  - "https://developers.google.com/apps-script/releases"
  - "https://developers.google.com/apps-script/overview"
keywords:
  - "adsense"
  - "script"
  - "added"
  - "apps"
  - "for"
  - "the"
---

# AdSense Service support

Product: Apps Script
Coverage: MEDIUM

## Step 02 Summary

Apps Script added support for the AdSense service.

## Extended Definition

Apps Script added support for the AdSense service.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/apps-script/advanced/adsense](https://developers.google.com/apps-script/advanced/adsense)
- [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- [https://developers.google.com/apps-script/overview](https://developers.google.com/apps-script/overview)

## Supporting Pages

### AdSense Service \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/advanced/adsense](https://developers.google.com/apps-script/advanced/adsense)
- Source ID: `site-docs-reference`
- Final score: 196
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Page Summary outlined flag The AdSense service in Apps Script uses the AdSense Management API to allow users to access account structure information and run performance reports.
- Like all advanced services in Apps Script, the AdSense service uses the same objects, methods, and parameters as the public API.
- The AdSense service lets you use the AdSense Management API in Google Apps Script.
- Reports . generate ( accountName , { // Specify the desired ad client using a filter. filters : [ AD CLIENT ID== ${ escapeFilterParameter ( adClientReportingDimensionId ) } , ], metrics : [ "PAGE VIEWS" , "AD REQUESTS" , "AD REQUESTS COVERAGE" , "CLICKS" , "AD REQUESTS CTR" , "COST PER CLICK" , "AD REQUESTS RPM" , "ESTIMATED EARNINGS" , ], dimensions : [ "DATE" ], ... dateToJson ( "startDate" , oneWeekAgo ), ... dateToJson ( "endDate" , today ), // Sort by ascending date. orderBy : [ "+DATE" ], }); if ( ! report . rows ) { console . log ( "No rows returned." ); return ; } const spreadsheet = SpreadsheetApp . create ( "AdSense Report" ); const sheet = spreadsheet . getActiveSheet (); // Append the headers. sheet . appendRow ( report . headers . map (( header ) = > header . name )); // Append the results. sheet . getRange ( 2 , 1 , report . rows . length , report . headers . length ) . setValues ( report . rows . map (( row ) = > row . cells . map (( cell ) = > cell . value ))); console . log ( "Report spreadsheet created: %s" , spreadsheet . getUrl ()); } / Escape special characters for a parameter being used in a filter. @param {string} parameter The parameter to be escaped. @return {string} The escaped parameter. / function escapeFilterParameter ( parameter ) { return parameter . replace ( "\\" , "\\\\" ). replace ( "," , "\\," ); } / Returns the JSON representation of a Date object (as a google.type.Date). @param {string} paramName the name of the date parameter @param {Date} value the date @return {object} formatted date / function dateToJson ( paramName , value ) { return { [ ${ paramName } .year ] : value . getFullYear (), [ ${ paramName } .month ] : value . getMonth () + 1 , [ ${ paramName } .day ] : value . getDate (), }; } Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

### Google Apps Script release notes \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- Source ID: `site-docs-root`
- Final score: 176
- Re-rank relevance: N/A

Evidence snippets:
- Feature Generally Available : To complement the release of the granular consent flow in Apps Script IDE executions, the following methods have been added to the ScriptApp and AuthorizationInfo classes to let Apps Script developers programmatically interact with the scopes granted for a script.
- November 03, 2022 Feature Apps Script added a new method to the Utilities class . parseDate(date, timeZone, format ) parses a provided string date according to the specification described in the Java Standard Edition SimpleDateFormat class .
- Added support for registering Apps Script web apps in the Chrome Web Store , making it quick and simple to publish and distribute your web apps.
- July 22, 2013 Feature Added DriveApp and FormApp to the services tracked on the Apps Script Dashboard .

### Google Apps Script overview \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/overview](https://developers.google.com/apps-script/overview)
- Source ID: `site-docs-root`
- Final score: 166
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Apps Script is versatile and can be used to add custom features to Google Docs, Sheets, and Forms, build web apps, interact with other Google services, and create add-ons.
- Page Summary outlined flag Google Apps Script is a rapid application development platform for creating business applications that integrate with Google Workspace, using modern JavaScript and built-in libraries for popular Google applications.
- If you're new to JavaScript, Codecademy offers a number of JavaScript courses . (These courses weren't developed by and aren't associated with Google.) What can Apps Script do?
- Apps Script is a rapid application development platform that makes it fast to create business applications that integrate with Google Workspace.

