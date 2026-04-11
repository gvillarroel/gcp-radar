---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:29:46.834Z"
product_name: "Apps Script"
product_slug: "apps-script"
feature_name: "UiApp client handlers"
feature_slug: "uiapp-client-handlers"
latest_feature_date: "2011-11-07"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/apps-script/releases"
  - "https://developers.google.com/apps-script/api/reference/rest/v1/File"
  - "https://developers.google.com/apps-script/advanced/adsense"
keywords:
  - "side"
  - "handlers"
  - "client"
  - "gained"
  - "uiapp"
  - "for"
---

# UiApp client handlers

Product: Apps Script
Coverage: MEDIUM

## Step 02 Summary

UiApp gained support for client-side handlers.

## Extended Definition

UiApp gained support for client-side handlers.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- [https://developers.google.com/apps-script/api/reference/rest/v1/File](https://developers.google.com/apps-script/api/reference/rest/v1/File)
- [https://developers.google.com/apps-script/advanced/adsense](https://developers.google.com/apps-script/advanced/adsense)

## Supporting Pages

### Google Apps Script release notes \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- Source ID: `site-docs-root`
- Final score: 120
- Re-rank relevance: N/A

Evidence snippets:
- Issue 1226 : Client handlers for ListBox now fire properly in UiApp .
- Added the client-side HTML-service method google.script.host.editor.focus() , which allows scripts to switch browser focus from the dialog or sidebar to the Google Docs, Sheets, or Forms editor.
- Fixed an issue with UiApp.ClientHandler.setValue() so that it doesn't return errors and also works for checkboxes.
- Added support for client handlers and validators .

### File \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/api/reference/rest/v1/File](https://developers.google.com/apps-script/api/reference/rest/v1/File)
- Source ID: `site-api-reference`
- Final score: 63
- Re-rank relevance: N/A

Evidence snippets:
- Files can be of different types, such as server-side Javascript, HTML, or JSON for the project's manifest.
- HTML A file containing client-side HTML.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-08-14 UTC."],[],[]]
- The details visible in this object are controlled by the profile visibility settings of the last modifying user. createTime string ( Timestamp format) Creation date timestamp.

### AdSense Service \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/advanced/adsense](https://developers.google.com/apps-script/advanced/adsense)
- Source ID: `site-docs-reference`
- Final score: 59
- Re-rank relevance: N/A

Evidence snippets:
- Reports . generate ( accountName , { // Specify the desired ad client using a filter. filters : [ AD CLIENT ID== ${ escapeFilterParameter ( adClientReportingDimensionId ) } , ], metrics : [ "PAGE VIEWS" , "AD REQUESTS" , "AD REQUESTS COVERAGE" , "CLICKS" , "AD REQUESTS CTR" , "COST PER CLICK" , "AD REQUESTS RPM" , "ESTIMATED EARNINGS" , ], dimensions : [ "DATE" ], ... dateToJson ( "startDate" , oneWeekAgo ), ... dateToJson ( "endDate" , today ), // Sort by ascending date. orderBy : [ "+DATE" ], }); if ( ! report . rows ) { console . log ( "No rows returned." ); return ; } const spreadsheet = SpreadsheetApp . create ( "AdSense Report" ); const sheet = spreadsheet . getActiveSheet (); // Append the headers. sheet . appendRow ( report . headers . map (( header ) = > header . name )); // Append the results. sheet . getRange ( 2 , 1 , report . rows . length , report . headers . length ) . setValues ( report . rows . map (( row ) = > row . cells . map (( cell ) = > cell . value ))); console . log ( "Report spreadsheet created: %s" , spreadsheet . getUrl ()); } / Escape special characters for a parameter being used in a filter. @param {string} parameter The parameter to be escaped. @return {string} The escaped parameter. / function escapeFilterParameter ( parameter ) { return parameter . replace ( "\\" , "\\\\" ). replace ( "," , "\\," ); } / Returns the JSON representation of a Date object (as a google.type.Date). @param {string} paramName the name of the date parameter @param {Date} value the date @return {object} formatted date / function dateToJson ( paramName , value ) { return { [ ${ paramName } .year ] : value . getFullYear (), [ ${ paramName } .month ] : value . getMonth () + 1 , [ ${ paramName } .day ] : value . getDate (), }; } Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Adunits . list ( adClientName , { pageSize : 50 , pageToken : pageToken , }); if ( ! response . adUnits ) { console . log ( "No ad units found for this ad client." ); return ; } for ( const adUnit of response . adUnits ) { console . log ( 'Found ad unit with resource name "%s" and display name "%s".' , adUnit . name , adUnit . displayName , ); } pageToken = response . nextPageToken ; } while ( pageToken ); } Generate a report This sample generates a report over your AdSense account and outputs the results to a spreadsheet. advanced/adsense.gs View on GitHub / Generates a spreadsheet report for a specific ad client in an account. @param {string} accountName The resource name of the account. @param {string} adClientReportingDimensionId The reporting dimension ID of the ad client. / function generateReport ( accountName , adClientReportingDimensionId ) { // Prepare report. const today = new Date (); const oneWeekAgo = new Date ( today . getTime () - 7 24 60 60 1000 ); const report = AdSense .
- Adclients . list ( accountName , { pageToken : pageToken , }); if ( ! response . adClients ) { console . log ( "No ad clients found for this account." ); return ; } for ( const adClient of response . adClients ) { console . log ( 'Found ad client for product "%s" with resource name "%s".' , adClient . productCode , adClient . name , ); console . log ( "Reporting dimension ID: %s" , adClient . reportingDimensionId ?? "None" , ); } pageToken = response . nextPageToken ; } while ( pageToken ); } List ad units This sample lists all of the ad units for a given ad client.
- Accounts . list ({ pageToken : pageToken }); if ( ! response . accounts ) { console . log ( "No accounts found." ); return ; } for ( const account of response . accounts ) { console . log ( 'Found account with resource name "%s" and display name "%s".' , account . name , account . displayName , ); } pageToken = response . nextPageToken ; } while ( pageToken ); } List ad clients This sample lists all of the ad clients for a given account.

