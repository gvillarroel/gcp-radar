---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:53:34.595Z"
product_name: "Apps Script"
product_slug: "apps-script"
feature_name: "OAuthConfig"
feature_slug: "oauthconfig"
latest_feature_date: "2015-03-04"
deprecation_date: "2015-03-04"
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/apps-script/releases"
  - "https://developers.google.com/apps-script/guides/services/external"
  - "https://developers.google.com/apps-script/guides/sheets/connected-sheets"
keywords:
  - "oauthconfig"
  - "was"
  - "url"
  - "fetch"
  - "class"
  - "connecting"
  - "oauth"
  - "apis"
---

# OAuthConfig

Product: Apps Script
Coverage: MEDIUM

## Step 02 Summary

OAuthConfig was the URL Fetch service class for connecting to OAuth 1.0 APIs; deprecated on 2015-03-04.

## Extended Definition

OAuthConfig was the URL Fetch service class for connecting to OAuth 1.0 APIs; deprecated on 2015-03-04.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- [https://developers.google.com/apps-script/guides/services/external](https://developers.google.com/apps-script/guides/services/external)
- [https://developers.google.com/apps-script/guides/sheets/connected-sheets](https://developers.google.com/apps-script/guides/sheets/connected-sheets)

## Supporting Pages

### Google Apps Script release notes \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- Source ID: `site-docs-root`
- Final score: 115
- Re-rank relevance: N/A

Evidence snippets:
- March 04, 2015 Deprecated Deprecated the URL Fetch service's class OAuthConfig , which provided the ability to connect to OAuth 1.0 APIs.
- May 20, 2015 Deprecated Deprecated the following OAuth class and methods in favor of OAuth libraries : + OAuthConfig + UrlFetchApp.addOAuthService(serviceName) + UrlFetchApp.removeOAuthService(serviceName) Feature Added the following enum and methods to the Script service to allow scripts to identify their installation source and project keys: InstallationSource ScriptApp.getInstallationSource() ScriptApp.getProjectKey() Added several new web-safe base-64 encoding and decoding methods: Utilities.base64DecodeWebSafe(String) Utilities.base64DecodeWebSafe(String, Charset) Utilities.base64EncodeWebSafe(Byte) Utilities.base64EncodeWebSafe(String) Utilities.base64EncodeWebSafe(String, Charset) April 23, 2015 Announcement Add-ons are now out of developer preview.
- Bookmark NamedRange RangeBuilder Document.addBookmark(position) Document.addNamedRange(name, range) Document.getBookmark(id) Document.getBookmarks() Document.getNamedRangeById(id) Document.getNamedRanges() Document.getNamedRanges(name) Document.newPosition(element, offset) Document.newRange() Document.setCursor(position) Document.setSelection(range) Position.insertBookmark() Added the following ScriptApp class and methods, which allow scripts to create state tokens that can be used in callback APIs (like OAuth flows), as well as to retrieve the script's own OAuth 2.0 access token.
- October 10, 2017 Feature The Calendar service has been extended with the following new methods: CalendarApp.createAllDayEvent(title, startDate, endDate) CalendarApp.createAllDayEvent(title, startDate, endDate, options) CalendarApp.getEventById(iCalId) Calendar.createAllDayEvent(title, startDate, endDate) Calendar.createAllDayEvent(title, startDate, endDate, options) Calendar.getEventById(iCalId) CalendarEvent.setAllDayDates(startDate, endDate) The Groups service has been extended with the following new methods: Group.getGroups() Group.hasGroup(group) Group.hasGroup(email) The Spreadsheet service has been extended with the following new methods and classes: AutoFillSeries enumeration Range.autoFill(destination, series) Range.autoFillToNeighbor(series) Sheet.moveColumns(columnSpec, destinationIndex) Sheet.moveRows(rowSpec, destinationIndex) October 06, 2017 Change Add-ons now require OAuth Client Verification prior to beginning the publication process.

### External APIs \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/guides/services/external](https://developers.google.com/apps-script/guides/services/external)
- Source ID: `site-docs-root-2`
- Final score: 86
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This API request does not require authorization or an API key. var query = '"Apps Script" stars:">=100"' ; var url = 'https://api.github.com/search/repositories' + '?sort=stars' + '&q=' + encodeURIComponent ( query ); var response = UrlFetchApp . fetch ( url , { 'muteHttpExceptions' : true }); Logger . log ( response ); Make requests to services with OAuth APIs that act on behalf of a user usually require authorization, often using the OAuth protocol .
- Page Summary outlined flag Google Apps Script can interact with various web APIs using the UrlFetch service.
- For APIs requiring user authorization via OAuth, open source libraries for OAuth1 and OAuth2 are available.
- Connect to public APIs Use the UrlFetch service to make API requests directly.

### Use Connected Sheets \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/guides/sheets/connected-sheets](https://developers.google.com/apps-script/guides/sheets/connected-sheets)
- Source ID: `site-docs-root-2`
- Final score: 80
- Re-rank relevance: N/A

Evidence snippets:
- It adds a Drive OAuth scope in addition to the minimum required spreadsheet and bigquery.readonly OAuth scopes: { ... "oauthScopes" : [ "https://www.googleapis.com/auth/bigquery.readonly" , "https://www.googleapis.com/auth/spreadsheets" , "https://www.googleapis.com/auth/drive" ], ... } Example: Create and refresh a data source object The following examples shows how to add a data source, create a data source object from the data source, refresh the data source object, and get the execution status.
- The following sample shows the SpreadsheetApp.enableLookerExecution() method called within a function: function addDataSource () { SpreadsheetApp . enableLookerExecution (); var spreadsheet = SpreadsheetApp . getActive (); } Add additional OAuth scopes to the manifest file When connecting with BigQuery, most OAuth scopes are automatically added to the manifest file based on the functions used in your code.
- Common actions with Connected Sheets, such as connecting to a data source or adding charts, are performed using specific DataSource classes and methods in Apps Script.
- The following table lists the most common DataSource actions and how to create them in Google Apps Script: Action Apps Script class Method to use Connect a sheet to a supported data source DataSourceSpec SpreadsheetApp.newDataSourceSpec() Choose a data source DataSource Spreadsheet.insertDataSourceSheet().getDataSource() Add a data source sheet DataSourceSheet Spreadsheet.insertDataSourceSheet() Add a pivot table DataSourcePivotTable Range.insertDataSourcePivotTable() Pull data into an extract DataSourceTable Range.insertDataSourceTable() Use a formula DataSourceFormula Range.setFormula() Add a chart DataSourceChart Sheet.insertDataSourceChart() Add required authorization scopes To access BigQuery data, include the enableBigQueryExecution() method in your Apps Script code.

