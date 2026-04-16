---
title: "Class BigQueryDataSourceSpec \_|\_ Apps Script \_|\_ Google for Developers"
url: https://developers.google.com/apps-script/reference/spreadsheet/big-query-data-source-spec
knowledge_key: corpus
source_id: site-docs-reference-required-4
source_type: site
entrypoint: https://developers.google.com/apps-script/reference/spreadsheet/data-validation-criteria
source_metadata:
  url: https://developers.google.com/apps-script/reference/spreadsheet/big-query-data-source-spec
  title: "Class BigQueryDataSourceSpec \_|\_ Apps Script \_|\_ Google for Developers"
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
Class BigQueryDataSourceSpec
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
BigQueryDataSourceSpec allows access to existing BigQuery data source specifications within SpreadsheetApp.
You can create a new data source specification using SpreadsheetApp.newDataSourceSpec().
The methods available include retrieving dataset ID, parameters, project ID, raw query, table ID, table project ID, and data source type.
The copy() method creates a DataSourceSpecBuilder based on the existing data source's settings.
BigQueryDataSourceSpec
Access the existing BigQuery data source specification. To create a new data source
specification, use SpreadsheetApp.newDataSourceSpec() .
Methods
Method Return type Brief description
copy() Data Source Spec Builder Creates a Data Source Spec Builder based on this data source's settings.
get Dataset Id() String Gets the BigQuery dataset ID.
get Parameters() Data Source Parameter[] Gets the parameters of the data source.
get Project Id() String Gets the billing project ID.
get Raw Query() String Gets the raw query string.
get Table Id() String Gets the BigQuery table ID.
get Table Project Id() String Gets the BigQuery project ID for the table.
get Type() Data Source Type Gets the type of the data source.
Detailed documentation
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
getDatasetId()
Gets the BigQuery dataset ID.
Return
String — The dataset ID, or an empty string if the data source spec is defined by a raw query.
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
getProjectId()
Gets the billing project ID.
Return
String — The project ID.
getRawQuery()
Gets the raw query string.
Return
String — The raw query string.
getTableId()
Gets the BigQuery table ID.
Return
String — The table ID, or an empty string if the data source spec is defined by a raw query.
getTableProjectId()
Gets the BigQuery project ID for the table.
Return
String — The table project ID, or an empty string if the data source spec is defined by a raw
query.
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
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-13 UTC."],[],[]]
