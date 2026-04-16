---
title: "Class DataSourceSpecBuilder \_|\_ Apps Script \_|\_ Google for Developers"
url: https://developers.google.com/apps-script/reference/spreadsheet/data-source-spec-builder
knowledge_key: corpus
source_id: site-docs-reference-required-4
source_type: site
entrypoint: https://developers.google.com/apps-script/reference/spreadsheet/data-validation-criteria
source_metadata:
  url: https://developers.google.com/apps-script/reference/spreadsheet/data-source-spec-builder
  title: "Class DataSourceSpecBuilder \_|\_ Apps Script \_|\_ Google for Developers"
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
Class DataSourceSpecBuilder
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
DataSourceSpecBuilder is used to create a specification for data sources connected to a database.
To start building a specification, use SpreadsheetApp.newDataSourceSpec().
Specific database types like BigQuery and Looker have dedicated builder methods like asBigQuery() and asLooker().
The build() method is used to finalize the specification from the builder's settings.
DataSourceSpecBuilder
The builder for DataSourceSpec . To create a specification for certain type, use as...() method. To create a new builder, use SpreadsheetApp.newDataSourceSpec() . To use the specification, see DataSourceTable .
Only use this class with data that's connected to a database.
This example shows how to build a BigQuery data source specification.
const spec = SpreadsheetApp . newDataSourceSpec ()
. asBigQuery ()
. setProjectId ( 'big_query_project' )
. setRawQuery ( 'select @FIELD from table limit @LIMIT' )
. setParameterFromCell ( 'FIELD' , 'Sheet1!A1' )
. setParameterFromCell ( 'LIMIT' , 'namedRangeCell' )
. build ();
This example shows how to build a Looker data source specification. It returns a LookerDataSourceSpec object after using build() .
const spec = SpreadsheetApp . newDataSourceSpec ()
. asLooker ()
. setInstanceUrl ( 'https://looker_instance_url.com' )
. setModelName ( 'model_name' )
. setExploreName ( 'explore_name' )
. build ();
Methods
Method Return type Brief description
as Big Query() Big Query Data Source Spec Builder Gets the builder for BigQuery data source.
as Looker() Looker Data Source Spec Builder Gets the builder for Looker data source.
build() Data Source Spec Builds a data source specification from the settings in this builder.
copy() Data Source Spec Builder Creates a Data Source Spec Builder based on this data source's settings.
get Parameters() Data Source Parameter[] Gets the parameters of the data source.
get Type() Data Source Type Gets the type of the data source.
remove All Parameters() Data Source Spec Builder Removes all the parameters.
remove Parameter(parameterName) Data Source Spec Builder Removes the specified parameter.
set Parameter From Cell(parameterName, sourceCell) Data Source Spec Builder Adds a parameter, or if the parameter with the name exists, updates its source cell for data
source spec builders of type Data Source Type.BIGQUERY .
Detailed documentation
asBigQuery()
Gets the builder for BigQuery data source.
Return
BigQueryDataSourceSpecBuilder — The BigQuery data source specification builder.
asLooker()
Gets the builder for Looker data source.
const spec = SpreadsheetApp . newDataSourceSpec ()
. asLooker ()
. setInstanceUrl ( 'https://looker_instance_url.com' )
. setModelName ( 'model_name' )
. setExploreName ( 'explore_name' )
. build ();
Return
LookerDataSourceSpecBuilder — The Looker data source specification builder.
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
removeAllParameters()
Removes all the parameters.
const specBuilder = SpreadsheetApp . newDataSourceSpec ();
specBuilder . removeAllParameters ();
Return
DataSourceSpecBuilder — The builder, for chaining.
removeParameter(parameterName)
Removes the specified parameter.
const specBuilder = SpreadsheetApp . newDataSourceSpec ();
specBuilder . removeParameter ( 'x' );
Parameters
Name Type Description
parameter Name String The name of the parameter to remove.
Return
DataSourceSpecBuilder — The builder, for chaining.
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
DataSourceSpecBuilder — The builder, for chaining.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-13 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-13 UTC."],[],[]]
