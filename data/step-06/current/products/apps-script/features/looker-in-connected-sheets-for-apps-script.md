---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:53:34.501Z"
product_name: "Apps Script"
product_slug: "apps-script"
feature_name: "Looker in Connected Sheets for Apps Script"
feature_slug: "looker-in-connected-sheets-for-apps-script"
latest_feature_date: "2024-09-03"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/apps-script/guides/sheets/connected-sheets"
  - "https://developers.google.com/apps-script/releases"
  - "https://developers.google.com/apps-script/reference/spreadsheet/data-source-spec"
keywords:
  - "looker"
  - "connected"
  - "sheets"
  - "apps"
  - "script"
  - "lets"
  - "create"
  - "use"
---

# Looker in Connected Sheets for Apps Script

Product: Apps Script
Coverage: MEDIUM

## Step 02 Summary

Looker in Connected Sheets support lets Apps Script create and use Looker data source connections in spreadsheets.

## Extended Definition

Looker in Connected Sheets support lets Apps Script create and use Looker data source connections in spreadsheets.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/apps-script/guides/sheets/connected-sheets](https://developers.google.com/apps-script/guides/sheets/connected-sheets)
- [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- [https://developers.google.com/apps-script/reference/spreadsheet/data-source-spec](https://developers.google.com/apps-script/reference/spreadsheet/data-source-spec)

## Supporting Pages

### Use Connected Sheets \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/guides/sheets/connected-sheets](https://developers.google.com/apps-script/guides/sheets/connected-sheets)
- Source ID: `site-docs-root-2`
- Final score: 180
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- SpreadsheetApp . enableBigQueryExecution (); var spreadsheet = SpreadsheetApp . create ( 'Test connected sheets' ); Logger . log ( 'New test spreadsheet: %s' , spreadsheet . getUrl ()); // Build data source spec by selecting a table. var dataSourceSpec = SpreadsheetApp . newDataSourceSpec () . asBigQuery () . setProjectId ( '<YOUR PROJECT ID>' ) . setTableProjectId ( 'bigquery-public-data' ) . setDatasetId ( 'ncaa basketball' ) . setTableId ( 'mbb historical tournament games' ) . build (); // Add data source and its associated data source sheet. var dataSourceSheet = spreadsheet . insertDataSourceSheet ( dataSourceSpec ); var dataSource = dataSourceSheet . getDataSource (); Looker To add a Looker data source to a spreadsheet, insert a data source sheet with a data source spec.
- SpreadsheetApp . enableLookerExecution (); var spreadsheet = SpreadsheetApp . create ( 'Test connected sheets' ); Logger . log ( 'New test spreadsheet: %s' , spreadsheet . getUrl ()); // Build data source spec by selecting a table. var dataSourceSpec = SpreadsheetApp . newDataSourceSpec () . asLooker () . setInstanceUrl ( '<INSTANCE URL>' ) . setModelName ( '<MODEL NAME>' ) . setExploreName ( '<EXPLORE NAME>' ) . build (); // Add data source and its associated data source sheet. var dataSourceSheet = spreadsheet . insertDataSourceSheet ( dataSourceSpec ); var dataSource = dataSourceSheet . getDataSource (); Add a data source object Once the data source is added to the spreadsheet, data source objects can be created from the data source.
- Common actions with Connected Sheets, such as connecting to a data source or adding charts, are performed using specific DataSource classes and methods in Apps Script.
- Home Google Workspace Apps Script Guides Send feedback Use Connected Sheets Stay organized with collections Save and categorize content based on your preferences.

### Google Apps Script release notes \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- Source ID: `site-docs-root`
- Final score: 120
- Re-rank relevance: N/A

Evidence snippets:
- The following updates have been made to the Spreadsheet service to support Looker in Connected Sheets from Apps Script.
- September 03, 2024 Feature Generally available : You can now use Looker in Connected Sheets from Apps Script.
- This feature lets you record macros in the Google Sheets UI and use Apps Script to create or edit them.
- The following new data source type has been added: LOOKER The following new classes have been added: LookerDataSourceSpec LookerDataSourceSpecBuilder The following new methods have been added to existing classes: DataSourceSpec.asLooker() DataSourceSpecBuilder.asLooker() August 15, 2024 Feature Generally Available : You can now create and organize tabs in Google Docs documents using Apps Script's Document service.

### Class DataSourceSpec \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/reference/spreadsheet/data-source-spec](https://developers.google.com/apps-script/reference/spreadsheet/data-source-spec)
- Source ID: `site-docs-reference-required-4`
- Final score: 102
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Return BigQueryDataSourceSpec — The BigQuery data source spec. asLooker() Gets the spec for Looker data source. // TODO(developer): Replace the URL with your own. const ss = SpreadsheetApp . openByUrl ( 'https://docs.google.com/spreadsheets/d/abc123456/edit' , ); const spec = ss . getDataSources ()[ 0 ]. getSpec (). asLooker (); Return LookerDataSourceSpec — The Looker data source spec. copy() Creates a DataSourceSpecBuilder based on this data source's settings. // TODO(developer): Replace the URL with your own. const ss = SpreadsheetApp . openByUrl ( 'https://docs.google.com/spreadsheets/d/abc123456/edit' , ); const spec = ss . getDataSources ()[ 0 ]. getSpec (); const newSpec = spec . copy (); Return DataSourceSpecBuilder — The builder. getParameters() Gets the parameters of the data source. // TODO(developer): Replace the URL with your own. const ss = SpreadsheetApp . openByUrl ( 'https://docs.google.com/spreadsheets/d/abc123456/edit' , ); const spec = ss . getDataSources ()[ 0 ]. getSpec (); const parameters = spec . getParameters (); This method is only available for BigQuery data sources.
- LOOKER ) { const lookerSpec = spec . asLooker (); Logger . log ( 'Looker instance URL: %s\n' , lookerSpec . getInstanceUrl ()); } Methods Method Return type Brief description as Big Query() Big Query Data Source Spec Gets the spec for BigQuery data source. as Looker() Looker Data Source Spec Gets the spec for Looker data source. copy() Data Source Spec Builder Creates a Data Source Spec Builder based on this data source's settings. get Parameters() Data Source Parameter[] Gets the parameters of the data source. get Type() Data Source Type Gets the type of the data source.
- Using asLooker() returns a LookerDataSourceSpec object. // TODO(developer): Replace the URL with your own. const ss = SpreadsheetApp . openByUrl ( 'https://docs.google.com/spreadsheets/d/abc123456/edit' , ); const spec = ss . getDataSources ()[ 0 ]. getSpec (). asLooker (); if ( spec . getType () === SpreadsheetApp .
- Home Google Workspace Apps Script Reference Send feedback Class DataSourceSpec Stay organized with collections Save and categorize content based on your preferences.

