---
title: "Class DataSourceSpec \_|\_ Apps Script \_|\_ Google for Developers"
url: https://developers.google.com/apps-script/reference/spreadsheet/data-source-spec
knowledge_key: corpus
source_id: site-docs-reference-required-4
source_type: site
entrypoint: https://developers.google.com/apps-script/reference/spreadsheet/data-validation-criteria
source_metadata:
  url: https://developers.google.com/apps-script/reference/spreadsheet/data-source-spec
  title: "Class DataSourceSpec \_|\_ Apps Script \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Google Workspace
Apps Script
Reference
Send feedback
Class DataSourceSpec
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
DataSourceSpec allows access to the general settings of an existing data source spec.
Use as...() methods to access data source specs for specific types like BigQuery or Looker.
This class should only be used with data connected to a database.
You can create a DataSourceSpecBuilder based on an existing spec's settings using the copy() method.
You can retrieve the parameters and the type of the data source spec using getParameters() and getType() .
DataSourceSpec
Access the general settings of an existing data source spec. To access data source spec for
certain type, use as...() method. To create a new data source spec, use SpreadsheetApp.newDataSourceSpec() .
Only use this class with data that's connected to a database.
This example shows how to get information from a BigQuery data source spec.
const dataSourceTable = SpreadsheetApp . getActive ()
. getSheetByName ( 'Data Sheet 1' )
. getDataSourceTables ()[ 0 ];
const spec = dataSourceTable . getDataSource (). getSpec ();
if ( spec . getType () === SpreadsheetApp . DataSourceType . BIGQUERY ) {
const bqSpec = spec . asBigQuery ();
Logger . log ( 'Project ID: %s\n' , bqSpec . getProjectId ());
Logger . log ( 'Raw query string: %s\n' , bqSpec . getRawQuery ());
}
This example shows how to get information from a Looker data source spec. Using asLooker() returns a LookerDataSourceSpec object.
// TODO(developer): Replace the URL with your own.
const ss = SpreadsheetApp . openByUrl (
'https://docs.google.com/spreadsheets/d/abc123456/edit' ,
);
const spec = ss . getDataSources ()[ 0 ]. getSpec (). asLooker ();
if ( spec . getType () === SpreadsheetApp . DataSourceType . LOOKER ) {
const lookerSpec = spec . asLooker ();
Logger . log ( 'Looker instance URL: %s\n' , lookerSpec . getInstanceUrl ());
}
Methods
Method Return type Brief description
as Big Query() Big Query Data Source Spec Gets the spec for BigQuery data source.
as Looker() Looker Data Source Spec Gets the spec for Looker data source.
copy() Data Source Spec Builder Creates a Data Source Spec Builder based on this data source's settings.
get Parameters() Data Source Parameter[] Gets the parameters of the data source.
get Type() Data Source Type Gets the type of the data source.
Detailed documentation
asBigQuery()
Gets the spec for BigQuery data source.
Return
BigQueryDataSourceSpec — The BigQuery data source spec.
asLooker()
Gets the spec for Looker data source.
// TODO(developer): Replace the URL with your own.
const ss = SpreadsheetApp . openByUrl (
'https://docs.google.com/spreadsheets/d/abc123456/edit' ,
);
const spec = ss . getDataSources ()[ 0 ]. getSpec (). asLooker ();
Return
LookerDataSourceSpec — The Looker data source spec.
copy()
Creates a DataSourceSpecBuilder based on this data source's settings.
// TODO(developer): Replace the URL with your own.
const ss = SpreadsheetApp . openByUrl (
'https://docs.google.com/spreadsheets/d/abc123456/edit' ,
);
const spec = ss . getDataSources ()[ 0 ]. getSpec ();
const newSpec = spec . copy ();
Return
DataSourceSpecBuilder — The builder.
getParameters()
Gets the parameters of the data source.
// TODO(developer): Replace the URL with your own.
const ss = SpreadsheetApp . openByUrl (
'https://docs.google.com/spreadsheets/d/abc123456/edit' ,
);
const spec = ss . getDataSources ()[ 0 ]. getSpec ();
const parameters = spec . getParameters ();
This method is only available for BigQuery data sources.
Return
DataSourceParameter[] — The parameter list.
getType()
Gets the type of the data source.
// TODO(developer): Replace the URL with your own.
const ss = SpreadsheetApp . openByUrl (
'https://docs.google.com/spreadsheets/d/abc123456/edit' ,
);
const spec = ss . getDataSources ()[ 0 ]. getSpec ();
const type = spec . getType ();
Return
DataSourceType — The data source type.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-13 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-13 UTC."],[],["`DataSourceSpec` accesses settings of existing data sources connected to databases. Use `as...()` to access specific types, like `asBigQuery()` or `asLooker()`. Key actions include: retrieving data source type with `getType()`, fetching parameters via `getParameters()`, and creating a modifiable copy using `copy()`. For example, retrieve BigQuery project ID and raw query string, or get a Looker instance URL. This class can not be used with new data source, use `SpreadsheetApp.newDataSourceSpec()` instead.\n"]]
