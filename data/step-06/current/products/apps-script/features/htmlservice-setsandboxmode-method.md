---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:29:46.797Z"
product_name: "Apps Script"
product_slug: "apps-script"
feature_name: "HtmlService.setSandboxMode method"
feature_slug: "htmlservice-setsandboxmode-method"
latest_feature_date: "2013-05-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/apps-script/releases"
  - "https://developers.google.com/apps-script/advanced/admin-sdk-directory"
  - "https://developers.google.com/apps-script/guides/services/advanced"
keywords:
  - "setsandboxmode"
  - "faster"
  - "htmlservice"
  - "enable"
  - "sandbox"
  - "method"
  - "adds"
  - "to"
---

# HtmlService.setSandboxMode method

Product: Apps Script
Coverage: MEDIUM

## Step 02 Summary

Adds setSandboxMode() to HtmlService to enable a faster sandbox mode.

## Extended Definition

Adds setSandboxMode() to HtmlService to enable a faster sandbox mode.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- [https://developers.google.com/apps-script/advanced/admin-sdk-directory](https://developers.google.com/apps-script/advanced/admin-sdk-directory)
- [https://developers.google.com/apps-script/guides/services/advanced](https://developers.google.com/apps-script/guides/services/advanced)

## Supporting Pages

### Google Apps Script release notes \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- Source ID: `site-docs-root`
- Final score: 144
- Re-rank relevance: N/A

Evidence snippets:
- Added a setSandboxMode method to enable a faster version of the HtmlService sandbox.
- In a few edge cases, this may affect how existing web apps operate; if so, append .setSandboxMode(HtmlService.SandboxMode.EMULATED) to your HtmlOutput object to restore the old behavior.
- April 05, 2019 Feature The Spreadsheet service has been extended with the following new classes and methods to support text finding, checkboxes, and other features: TextFinder RecalculationInterval SheetType DataValidationBuilder.requireCheckbox() DataValidationBuilder.requireCheckbox(checkedValue) DataValidationBuilder.requireCheckbox(checkedValue, uncheckedValue) A clearRanges() method has been added to the all the embedded chart type builder classes, such as EmbeddedAreaChartBuilder.clearRanges() EmbeddedChart.getChartId() RangeList.check() RangeList.insertCheckboxes() RangeList.insertCheckboxes(checkedValue) RangeList.insertCheckboxes(checkedValue, uncheckedValue) RangeList.removeCheckboxes() RangeList.uncheck() Range.check() Range.createTextFinder(findText) Range.getDataRegion() Range.getDataRegion(dimension) Range.insertCheckboxes() Range.insertCheckboxes(checkedValue) Range.insertCheckboxes(checkedValue, uncheckedValue) Range.removeCheckboxes() Range.uncheck() Sheet.createTextFinder(findText) Sheet.getType() Spreadsheet.createTextFinder(findText) Spreadsheet.getIterativeCalculationConvergenceThreshold() Spreadsheet.getMaxIterativeCalculationCycles() Spreadsheet.getRecalculationInterval() Spreadsheet.isIterativeCalculationEnabled() Spreadsheet.moveChartToObjectSheet(chart) Spreadsheet.setIterativeCalculationConvergenceThreshold(minThreshold) Spreadsheet.setIterativeCalculationEnabled(isEnabled) Spreadsheet.setMaxIterativeCalculationCycles(maxIterations) Spreadsheet.setRecalculationInterval(recalculationInterval) The Data Studio service has been extended with the following new classes and methods that support configuring BigQuery connectors: BigQueryConfig BigQueryParameterType CommunityConnector.newBigQueryConfig() The Notification objects in the Card service no longer have a type that you must set.
- February 26, 2019 Feature The Spreadsheet service has been extended with the following new classes and methods to support BigQuery data connectors in Sheets : BigQueryDataSourceSpec BigQueryDataSourceSpecBuilder DataExecutionErrorCode DataExecutionState DataExecutionStatus DataSourceParameterType DataSourceParameter DataSourceSpecBuilder DataSourceSpec DataSourceTable DataSourceType DataSource Range.getDataSourceTables() Sheet.getDataSourceTables() SpreadsheetApp.enableAllDataSourcesExecution() SpreadsheetApp.enableBigQueryExecution() SpreadsheetApp.newDataSourceSpec() Spreadsheet.getDataSourceTables() Spreadsheet.insertSheetWithDataSourceTable(spec) The Data Studio service has been extended with the following new methods involving reaggregation settings: Field.getIsReaggregatable() Field.setIsReaggregatable(isReaggregatable) January 22, 2019 Deprecated The deprecated UiApp service will be officially shutdown on July 15th, 2019.

### Admin SDK Directory Service \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/advanced/admin-sdk-directory](https://developers.google.com/apps-script/advanced/admin-sdk-directory)
- Source ID: `site-docs-reference`
- Final score: 84
- Re-rank relevance: N/A

Evidence snippets:
- Groups . list ({ domain : "example.com" , maxResults : 100 , pageToken : pageToken , }); const groups = page . groups ; if ( ! groups ) { console . log ( "No groups found." ); return ; } // Print group name and email. for ( const group of groups ) { console . log ( "%s (%s)" , group . name , group . email ); } pageToken = page . nextPageToken ; } while ( pageToken ); } Add group member This sample adds a user to an existing group in the domain. advanced/adminSDK.gs View on GitHub / Adds a user to an existing group in the domain. @see https://developers.google.com/admin-sdk/directory/reference/rest/v1/members/insert / function addGroupMember () { // TODO (developer) - Replace userEmail value with yours const userEmail = "liz@example.com" ; // TODO (developer) - Replace groupEmail value with yours const groupEmail = "bookclub@example.com" ; const member = { email : userEmail , role : "MEMBER" , }; try { AdminDirectory .
- Users . get ( userEmail ); console . log ( "User data:\n %s" , JSON . stringify ( user , null , 2 )); } catch ( err ) { // TODO (developer)- Handle exception from the API console . log ( "Failed with error %s" , err . message ); } } Add user This sample adds a new user to the domain, including only the required information.
- For the full list of user fields, see the API's reference documentation . advanced/adminSDK.gs View on GitHub / Adds a new user to the domain, including only the required information.
- Like all advanced services in Apps Script, the Admin SDK Directory service uses the same objects, methods, and parameters as the public API.

### Advanced Google services \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/guides/services/advanced](https://developers.google.com/apps-script/guides/services/advanced)
- Source ID: `site-docs-reference`
- Final score: 63
- Re-rank relevance: N/A

Evidence snippets:
- Events . insert ( event , 'primary' , optionalArgs ); UrlFetch (HTTP): const event = { summary : 'Lunch' , location : 'Deli' , start : { dateTime : '2026-01-01T12:00:00-05:00' }, end : { dateTime : '2026-01-01T13:00:00-05:00' } }; const url = 'https://www.googleapis.com/calendar/v3/calendars/primary/events?sendUpdates=all' ; const options = { method : 'post' , contentType : 'application/json' , headers : { Authorization : Bearer ${ ScriptApp . getOAuthToken () } }, payload : JSON . stringify ( event ) }; UrlFetchApp . fetch ( url , options ); For the UrlFetchApp method, manually specify the required OAuth scopes in the script's manifest file .
- The following table compares the two methods: Feature Advanced Service UrlFetch (HTTP) Authorization Handled automatically Manual handling required Autocomplete Available Not available Functionality Scope May be a subset of the API Full access to all API features Complexity Easier More complex (requires constructing headers and parsing responses) Code comparison The code samples show the difference in complexity between creating a Calendar event using the advanced service versus using UrlFetchApp .
- For example, to enable the Google Drive advanced service, add the enabledAdvancedServices field to the dependencies object: { "timeZone" : "America/Denver" , "dependencies" : { "enabledAdvancedServices" : [ { "userSymbol" : "Drive" , "version" : "v3" , "serviceId" : "drive" } ] }, "exceptionLogging" : "STACKDRIVER" , "runtimeVersion" : "V8" } After you enable an advanced service, it's available in autocomplete.
- To enable the API manually: Open the Cloud project associated with your script in the Google Cloud console At the top of the console, click into the search bar and type part of the name of the API (for example, "Calendar"), then click the name once you see it.

