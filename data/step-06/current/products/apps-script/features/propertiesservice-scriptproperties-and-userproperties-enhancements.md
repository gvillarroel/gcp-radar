---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:29:46.817Z"
product_name: "Apps Script"
product_slug: "apps-script"
feature_name: "PropertiesService ScriptProperties and UserProperties enhancements"
feature_slug: "propertiesservice-scriptproperties-and-userproperties-enhancements"
latest_feature_date: "2012-08-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/apps-script/releases"
  - "https://developers.google.com/apps-script/advanced/admin-sdk-reports"
  - "https://developers.google.com/apps-script/api/concepts"
keywords:
  - "propertiesservice"
  - "enhancements"
  - "scriptproperties"
  - "userproperties"
  - "received"
  - "deletion"
  - "methods"
  - "and"
---

# PropertiesService ScriptProperties and UserProperties enhancements

Product: Apps Script
Coverage: MEDIUM

## Step 02 Summary

ScriptProperties and UserProperties received deletion methods plus additional bulk-property operations, including setting multiple properties and retrieving all properties.

## Extended Definition

ScriptProperties and UserProperties received deletion methods plus additional bulk-property operations, including setting multiple properties and retrieving all properties.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- [https://developers.google.com/apps-script/advanced/admin-sdk-reports](https://developers.google.com/apps-script/advanced/admin-sdk-reports)
- [https://developers.google.com/apps-script/api/concepts](https://developers.google.com/apps-script/api/concepts)

## Supporting Pages

### Google Apps Script release notes \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- Source ID: `site-docs-root`
- Final score: 108
- Re-rank relevance: N/A

Evidence snippets:
- February 25, 2014 Change Replaced ScriptProperties and UserProperties with a unified PropertiesService .
- August 30, 2012 Feature Added methods to delete ScriptProperties and UserProperties .
- August 20, 2018 Feature The Utilities service has been extended with the following methods and classes: Utilities.computeRsaSha1Signature(value, key) Utilities.computeRsaSha1Signature(value, key, charset) Utilities.computeRsaSignature(algorithm, value, key) Utilities.computeRsaSignature(algorithm, value, key, charset) RsaAlgorithm June 19, 2018 Deprecated The quota on total data received by UrlFetch per day per user has been removed.
- The Apps Script IDE has received significant enhancements, such as improved version management, better debugging tools, and a redesigned interface.

### Admin SDK Reports Service \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/advanced/admin-sdk-reports](https://developers.google.com/apps-script/advanced/admin-sdk-reports)
- Source ID: `site-docs-reference`
- Final score: 48
- Re-rank relevance: N/A

Evidence snippets:
- UserUsageReport . get ( "all" , date , { parameters : parameters . join ( "," ), maxResults : 500 , pageToken : pageToken , }); if ( page . warnings ) { for ( const warning of page . warnings ) { console . log ( warning . message ); } } const reports = page . usageReports ; if ( reports ) { for ( const report of reports ) { const parameterValues = getParameterValues ( report . parameters ); const row = [ report . date , report . entity . userEmail , parameterValues [ "accounts:last login time" ], parameterValues [ "gmail:num emails received" ], parameterValues [ "drive:num items created" ], ]; rows . push ( row ); } } pageToken = page . nextPageToken ; } while ( pageToken ); if ( rows . length === 0 ) { console . log ( "No results returned." ); return ; } const spreadsheet = SpreadsheetApp . create ( "Google Workspace User Usage Report" , ); const sheet = spreadsheet . getActiveSheet (); // Append the headers. const headers = [ "Date" , "User" , "Last Login" , "Num Emails Received" , "Num Drive Files Created" , ]; sheet . appendRow ( headers ); // Append the results. sheet . getRange ( 2 , 1 , rows . length , headers . length ). setValues ( rows ); console . log ( "Report spreadsheet created: %s" , spreadsheet . getUrl ()); } / Gets a map of parameter names to values from an array of parameter objects. @param {Array} parameters An array of parameter objects. @return {Object} A map from parameter names to their values. / function getParameterValues ( parameters ) { return parameters . reduce (( result , parameter ) = > { const name = parameter . name ; let value ; if ( parameter . intValue !== undefined ) { value = parameter . intValue ; } else if ( parameter . stringValue !== undefined ) { value = parameter . stringValue ; } else if ( parameter . datetimeValue !== undefined ) { value = new Date ( parameter . datetimeValue ); } else if ( parameter . boolValue !== undefined ) { value = parameter . boolValue ; } result [ name ] = value ; return result ; }, {}); } Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- The report includes the date, user, last login time, number of emails received, and number of drive files created. @see https://developers.google.com/admin-sdk/reports/reference/rest/v1/userUsageReport/get / function generateUserUsageReport () { const today = new Date (); const oneWeekAgo = new Date ( today . getTime () - 7 24 60 60 1000 ); const timezone = Session . getScriptTimeZone (); const date = Utilities . formatDate ( oneWeekAgo , timezone , "yyyy-MM-dd" ); const parameters = [ "accounts:last login time" , "gmail:num emails received" , "drive:num items created" , ]; const rows = []; let pageToken ; let page ; do { page = AdminReports .
- The report includes the date, user, last login time, number of emails received, and number of docs owned. advanced/adminSDK.gs View on GitHub / Generates a user usage report for this day last week as a spreadsheet.
- Like all advanced services in Apps Script, the Admin SDK Reports service uses the same objects, methods, and parameters as the public API.

### Introduction \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/api/concepts](https://developers.google.com/apps-script/api/concepts)
- Source ID: `site-docs-root`
- Final score: 46
- Re-rank relevance: N/A

Evidence snippets:
- The API provides methods to list existing processes and gather information about them, such as type and current status.
- The API provides methods to create, list, update, and delete script project deployments.
- The API provides methods to create, read, monitor, and modify projects.
- The API provides methods to create and read project versions.

