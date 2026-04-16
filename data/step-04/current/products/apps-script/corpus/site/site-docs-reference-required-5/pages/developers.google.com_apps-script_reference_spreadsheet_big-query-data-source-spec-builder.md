---
title: "Class BigQueryDataSourceSpecBuilder \_|\_ Apps Script \_|\_ Google for Developers"
url: https://developers.google.com/apps-script/reference/spreadsheet/big-query-data-source-spec-builder
knowledge_key: corpus
source_id: site-docs-reference-required-5
source_type: site
entrypoint: https://developers.google.com/apps-script/reference/spreadsheet/data-validation-builder
source_metadata:
  url: https://developers.google.com/apps-script/reference/spreadsheet/big-query-data-source-spec-builder
  title: "Class BigQueryDataSourceSpecBuilder \_|\_ Apps Script \_|\_ Google for Developers"
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
Class BigQueryDataSourceSpecBuilder
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
BigQueryDataSourceSpecBuilder is used to build a data source specification for BigQuery.
It provides methods to get and set the dataset ID, project ID, table ID, and raw query.
You can manage parameters for the data source, including adding, removing, and setting them from a cell reference.
The build() method finalizes the configuration and returns a DataSourceSpec object.
BigQueryDataSourceSpecBuilder
The builder for BigQueryDataSourceSpecBuilder .
Methods
Method Return type Brief description
build() Data Source Spec Builds a data source specification from the settings in this builder.
copy() Data Source Spec Builder Creates a Data Source Spec Builder based on this data source's settings.
get Dataset Id() String Gets the BigQuery dataset ID.
get Parameters() Data Source Parameter[] Gets the parameters of the data source.
get Project Id() String Gets the billing project ID.
get Raw Query() String Gets the raw query string.
get Table Id() String Gets the BigQuery table ID.
get Table Project Id() String Gets the BigQuery project ID for the table.
get Type() Data Source Type Gets the type of the data source.
remove All Parameters() Big Query Data Source Spec Builder Removes all the parameters.
remove Parameter(parameterName) Big Query Data Source Spec Builder Removes the specified parameter.
set Dataset Id(datasetId) Big Query Data Source Spec Builder Sets the BigQuery dataset ID.
set Parameter From Cell(parameterName, sourceCell) Big Query Data Source Spec Builder Adds a parameter, or if the parameter with the name exists, updates its source cell for data
source spec builders of type Data Source Type.BIGQUERY .
set Project Id(projectId) Big Query Data Source Spec Builder Sets the billing BigQuery project ID.
set Raw Query(rawQuery) Big Query Data Source Spec Builder Sets the raw query string.
set Table Id(tableId) Big Query Data Source Spec Builder Sets the BigQuery table ID.
set Table Project Id(projectId) Big Query Data Source Spec Builder Sets the BigQuery project ID for the table.
Detailed documentation
build()
Builds a data source specification from the settings in this builder. Must use as...()
to specify a data source type before building.
The following code sample builds a BigQuery DataSource Spec.
const bigQueryDataSourceSpec = SpreadsheetApp . newDataSourceSpec (). asBigQuery ();
// TODO(developer): Replace with the required dataset, project and table IDs.
bigQueryDataSourceSpec . setDatasetId ( 'my data set id' );
bigQueryDataSourceSpec . setProjectId ( 'my project id' );
bigQueryDataSourceSpec . setTableId ( 'my table id' );
bigQueryDataSourceSpec . build ();
The following code sample builds a Looker DataSource Spec.
const lookerDataSourceSpecBuilder =
SpreadsheetApp . newDataSourceSpec (). asLooker ();
const lookerSpec = lookerDataSourceSpecBuilder . setExploreName ( 'my explore name' )
. setInstanceUrl ( 'my instance url' )
. setModelName ( 'my model name' )
. build ();
Return
DataSourceSpec — The data source specification.
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
removeAllParameters()
Removes all the parameters.
const specBuilder = SpreadsheetApp . newDataSourceSpec ();
specBuilder . removeAllParameters ();
Return
BigQueryDataSourceSpecBuilder — The builder, for chaining.
removeParameter(parameterName)
Removes the specified parameter.
const specBuilder = SpreadsheetApp . newDataSourceSpec ();
specBuilder . removeParameter ( 'x' );
Parameters
Name Type Description
parameter Name String The name of the parameter to remove.
Return
BigQueryDataSourceSpecBuilder — The builder, for chaining.
setDatasetId(datasetId)
Sets the BigQuery dataset ID.
Parameters
Name Type Description
dataset Id String The ID of the dataset.
Return
BigQueryDataSourceSpecBuilder — This builder, for chaining.
setParameterFromCell(parameterName, sourceCell)
Adds a parameter, or if the parameter with the name exists, updates its source cell for data
source spec builders of type DataSourceType.BIGQUERY .
This method is only available for BigQuery data sources.
const specBuilder = SpreadsheetApp . newDataSourceSpec (). asBigQuery ();
specBuilder . setParameterFromCell ( 'x' , 'A1' );
const bigQuerySpec = specBuilder . build ();
Parameters
Name Type Description
parameter Name String The parameter name.
source Cell String The source cell, as specified in A1 notation.
Return
BigQueryDataSourceSpecBuilder — The builder, for chaining.
setProjectId(projectId)
Sets the billing BigQuery project ID.
Parameters
Name Type Description
project Id String The ID of the billing project.
Return
BigQueryDataSourceSpecBuilder — The builder, for chaining.
setRawQuery(rawQuery)
Sets the raw query string.
Parameters
Name Type Description
raw Query String The raw query string.
Return
BigQueryDataSourceSpecBuilder — The builder, for chaining.
setTableId(tableId)
Sets the BigQuery table ID.
Parameters
Name Type Description
table Id String The ID of the table.
Return
BigQueryDataSourceSpecBuilder — This builder, for chaining.
setTableProjectId(projectId)
Sets the BigQuery project ID for the table.
Parameters
Name Type Description
project Id String The project ID of the BigQuery table.
Return
BigQueryDataSourceSpecBuilder — The builder, for chaining.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-13 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-13 UTC."],[],["The `BigQueryDataSourceSpecBuilder` constructs data source specifications. Key actions include: building a data source spec using `build()`, copying settings via `copy()`, and managing data source parameters through `getParameters()`, `removeAllParameters()`, `removeParameter()`, and `setParameterFromCell()`. Information setting/getting methods are available such as: `set/getDatasetId()`, `set/getProjectId()`, `set/getRawQuery()`, `set/getTableId()`, `set/getTableProjectId()`, and `getType()`. These allow you to configure the BigQuery dataset, project, table, and raw query details.\n"]]
