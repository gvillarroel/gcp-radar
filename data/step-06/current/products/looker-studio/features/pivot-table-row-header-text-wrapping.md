---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:44:17.173Z"
product_name: "Looker Studio"
product_slug: "looker-studio"
feature_name: "Pivot table row header text wrapping"
feature_slug: "pivot-table-row-header-text-wrapping"
latest_feature_date: "2024-10-31"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/looker-studio/visualization/library-reference"
  - "https://developers.google.com/looker-studio/visualization/library-guide"
  - "https://developers.google.com/looker-studio/integrate/linking-api"
keywords:
  - "pivot"
  - "table"
  - "row"
  - "header"
  - "text"
  - "wrapping"
  - "can"
  - "wrapped"
---

# Pivot table row header text wrapping

Product: Looker Studio
Coverage: MEDIUM

## Step 02 Summary

Pivot table row header text can be wrapped from the Style tab.

## Extended Definition

Pivot table row header text can be wrapped from the Style tab.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/looker-studio/visualization/library-reference](https://developers.google.com/looker-studio/visualization/library-reference)
- [https://developers.google.com/looker-studio/visualization/library-guide](https://developers.google.com/looker-studio/visualization/library-guide)
- [https://developers.google.com/looker-studio/integrate/linking-api](https://developers.google.com/looker-studio/integrate/linking-api)

## Supporting Pages

### "Looker Studio Community Component (dscc) library reference \_|\_ Community\

- URL: [https://developers.google.com/looker-studio/visualization/library-reference](https://developers.google.com/looker-studio/visualization/library-reference)
- Source ID: `site-docs-reference-2`
- Final score: 82
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- These field objects additionally have a configId property that corresponds to the IDs from the config. rows Array<Array> An array of arrays: each array is a row of data Sample tableFormat data This is sample data returned by using dscc.subscribeToData() with the option dscc.tableFormat . { "tables" : { "DEFAULT" : { "headers" : [{ "id" : "qt ky8sltutsb" , "name" : "dimension" , "type" : "TEXT" , "concept" : "DIMENSION" , "configId" : "configId1" }, { "id" : "qt b5bvmtutsb" , "name" : "second dim" , "type" : "TEXT" , "concept" : "DIMENSION" "configId" : "configId1" }, { "id" : "qt m9dtntutsb" , "name" : "metric" , "type" : "NUMBER" , "concept" : "METRIC" , "configId" : "configId2" }], "rows" : [ [ "Week 4" , "lm" , 55 ] ] }, "COMPARISON" : { "headers" : [{ "id" : "qt ky8sltutsb" , "name" : "dimension" , "type" : "TEXT" , "concept" : "DIMENSION" , "configId" : "configId1" }, { "id" : "qt b5bvmtutsb" , "name" : "second dim" , "type" : "TEXT" , "concept" : "DIMENSION" "configId" : "configId1" }, { "id" : "qt m9dtntutsb" , "name" : "metric" , "type" : "NUMBER" , "concept" : "METRIC" , "configId" : "configId2" }], "rows" : [ [ "Week 5" , "no" , 123 ] ] } }, "fields" : { "configId1" : [ { "id" : "qt ky8sltutsb" , "name" : "week" , "type" : "TEXT" , "concept" : "DIMENSION" }, { "id" : "qt b5bvmtutsb" , "name" : "textId" , "type" : "TEXT" , "concept" : "DIMENSION" } ], "configId2" : [ { "id" : "qt m9dtntutsb" , "name" : "orders" , "type" : "NUMBER" , "concept" : "METRIC" } ] }, "style" : { "nodeColor" : { "value" : { "color" : "#000000" } } }, "theme" : {}, "dateRanges" : { "DEFAULT" : { "start" : "20210501" , "end" : "20210531" }, "COMPARISON" : { "start" : "20200501" , "end" : "20200531" } }, "interactions" : { "onClick" : { "value" : { "type" : "FILTER" , "data" : { "concepts" : [ "qt h6oibrb6wb" , "qt i6oibrb6wb" ], "values" : [ [ "Afternoon" , "Sunday" ], [ "Afternoon" , "Thursday" ], [ "Morning" , "Tuesday" ] ] } }, "supportedActions" : [ "FILTER" ] } } } objectFormat reference objectRow { configId1 : array ( string bool number ), configId2 : array ( string bool number ) } Field Type Description configId array array of values associated with a particular config ID Sample objectFormat data This is sample data returned by using dscc.subscribeToData() with the option dscc.objectFormat . { "tables" : { "COMPARISON" : [ { "configId1" : [ "Week 5" , "cd" ], "configId2" : [ 123 ] } ], "DEFAULT" : [ { "configId1" : [ "Week 1" , "ab" ], "configId2" : [ 24 ] } ] }, "fields" : { "configId1" : [ { "id" : "qt h6oibrb6wb" , "name" : "time of day" , "type" : "TEXT" , "concept" : "DIMENSION" }, { "id" : "qt i6oibrb6wb" , "name" : "day" , "type" : "TEXT" , "concept" : "DIMENSION" } ], "configId2" : [ { "id" : "qt m9dtntutsb" , "name" : "metric" , "type" : "NUMBER" , "concept" : "METRIC" } ] }, "style" : { "nodeColor" : { "value" : { "color" : "#000000" } } }, "theme" : {}, "dateRanges" : { "DEFAULT" : { "start" : "20210501" , "end" : "20210531" }, "COMPARISON" : { "start" : "20200501" , "end" : "20200531" } }, "interactions" : { "onClick" : { "value" : { "type" : "FILTER" , "data" : { "concepts" : [ "qt h6oibrb6wb" , "qt i6oibrb6wb" ], "values" : [ [ "Afternoon" , "Sunday" ], [ "Afternoon" , "Thursday" ], [ "Morning" , "Tuesday" ] ] } }, "supportedActions" : [ "FILTER" ] } } } Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Field Type Description start string Start date of date range in YYYYMMDD format. end string End date of date range in YYYYMMDD format. tableFormat reference tableObject { headers : array ( object ), rows : array ( array ) } Field Type Description headers Array An array of fields objects.
- Data received from Looker Studio can be structured in tableFormat (rows and headers) or objectFormat (grouped by configuration IDs), both containing fields, style, theme, and interaction details.
- Field Type Description fillColor object An object of the format {color: string, opacity: number} fontColor object An object of the format {color: string, opacity: number} accentFillColor object An object of the format {color: string, opacity: number} accentFontColor object An object of the format {color: string, opacity: number} fontFamily string A string describing the font family accentFontFamily string A string describing the accent font family increaseColor object An object of the format {color: string, opacity: number} decreaseColor object An object of the format {color: string, opacity: number} gridColor object An object of the format {color: string, opacity: number} seriesColor Array<object> An array of objects of the format {color: string, opacity: number} tablesById { "DEFAULT" : object ( tableObject ), "COMPARISON" : object ( tableObject ) undefined } The tableObject provides heading and data information for each row. "DEFAULT" always will return data, and "COMPARISON" will only be populated if the user configures the data with comparison rows.

### "Using the helper library \_|\_ Community Visualizations \_|\_ Google for\

- URL: [https://developers.google.com/looker-studio/visualization/library-guide](https://developers.google.com/looker-studio/visualization/library-guide)
- Source ID: `site-docs-reference-2`
- Final score: 64
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For example: var data = [ [ 'hello' , 1 ], [ 'world' , 2 ] ]; The following code shows how to access a row of rows from the dscc.tableTransform format. function drawViz ( data ); // what the below object looks like // { // headers: [{ // "id": "qt ky8sltutsb", // "name": "dimension", // "type": "TEXT", // "concept": "DIMENSION", // "configId": "configId1" // }, { // "id": "qt m9dtntutsb", // "name": "metric", // "type": "NUMBER", // "concept": "METRIC", // "configId": "configId2" // }], // rows: [ // ['hello', 1], // ['world', 2] // ]; // } var dsccTableTransformObject = data . tables .
- DEFAULT ; // accessing the row of rows var rowOfRows = dsccTableTransformObject . rows ; // accessing the header row var headers = dsccTableTransformObject . headers ; } dscc . subscribeToData ( drawViz , { transform : tableTransform }); Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- ObjectTransformData . rows . map ( function ( d ){ return { 'configId1' : d . configId1 [ 0 ], 'configId2' : d . configId2 [ 0 ] }; }; } If data sections are defined such that a user can input multiple fields (for example, if there were two dimensions defined for a sankey diagram), then the transform will depend on your use case, as the data format returned by Looker Studio will look more like: var dsccObjectTransformData = [ { 'configId1' : [ 'hello' , 'there' ], 'configId2' : [ 1 ] }, { 'configId1' : [ 'world' , 'globe' ], 'configId2' : [ 2 ] } ] Note: The data transformations needed will depend on your visualization config. dscc.tableTransform Some visualization libraries expect an array of arrays.
- Key Purpose style User-selected and default style information fields User-selected fields information interactions User-selected interactions theme Report theme information tables Rows of data dateRanges Default and comparison date ranges Format of the data: { fields : object ( fieldsByConfigId ), style : object ( styleById ), interactions : object ( interactionsById ), theme : object ( themeStyle ), tables : object ( tablesById ), dateRanges : object ( dateRangesById ), } Different visualizations require different data formats.

### Linking API \_|\_ Integrate and share \_|\_ Google for Developers

- URL: [https://developers.google.com/looker-studio/integrate/linking-api](https://developers.google.com/looker-studio/integrate/linking-api)
- Source ID: `site-api-reference`
- Final score: 58
- Re-rank relevance: N/A

Evidence snippets:
- Examples A TABLE type configuration where the query is defined with a Table ID: https : //lookerstudio.google.com/reporting/create? c . reportId = 123 abc & ds . ds0 . connector = bigQuery & ds . ds0 . type = TABLE & ds . ds0 . projectId = bigquery - public - data & ds . ds0 . datasetId = samples & ds . ds0 . tableId = shakespeare & ds . ds0 . billingProjectId = myProject A TABLE type configuration to query a date sharded table using the wildcard character suffix: https : //lookerstudio.google.com/reporting/create? c . reportId = 123 abc & ds . ds0 . connector = bigQuery & ds . ds0 . type = TABLE & ds . ds0 . projectId = price - data & ds . ds0 . datasetId = samples & ds . ds0 . tableId = stock A TABLE type configuration to query a date sharded table using the YYYYMMDD suffix: https : //lookerstudio.google.com/reporting/create? c . reportId = 123 abc & ds . ds0 . connector = bigQuery & ds . ds0 . type = TABLE & ds . ds0 . projectId = price - data & ds . ds0 . datasetId = samples & ds . ds0 . tableId = stock YYYYMMDD A TABLE type configuration to query a BigQuery Export for Google Analytics table, using the SESSION fields template: https : //lookerstudio.google.com/reporting/create? c . reportId = 123 abc & ds . ds0 . connector = bigQuery & ds . ds0 . type = TABLE & ds . ds0 . projectId = my - gabq - project & ds . ds0 . datasetId = 1234567 & ds . ds0 . tableId = ga sessions YYYYMMDD & ds . ds0 . gaTemplateLevel = SESSION A TABLE type configuration to query an ingestion time partitioned table and use the partitioning column as a date range dimension: https : //lookerstudio.google.com/reporting/create? c . reportId = 123 abc & ds . ds0 . connector = bigQuery & ds . ds0 . type = TABLE & ds . ds0 . projectId = acme - co - logs & ds . ds0 . datasetId = logs & ds . ds0 . tableId = logs table & ds . ds0 . isPartitioned = true A CUSTOM QUERY type configuration where they query is defined with a SQL statement: https : //lookerstudio.google.com/reporting/create? c . reportId = 123 abc & ds . ds0 . connector = bigQuery & ds . ds0 . type = CUSTOM QUERY & ds . ds0 . projectId = bigquery - public - data & ds . ds0 . sql = SELECT % 20 word % 2 C % 20 word count % 20 FROM % 20 % 60 bigquery - public - data . samples . shakespeare % 60 & ds . ds0 . billingProjectId = myProject A CUSTOM QUERY type configuration where only the SQL statement is updated and the template data source is used for the rest of the configuration: https://lookerstudio.google.com/reporting/create? c.reportId=123abc &ds.ds0.sql=SELECT%20corpus%20FROM%20%60bigquery-public-data.samples.shakespeare%60 A CUSTOM QUERY type configuration where the SQL statement of the template data source is updated using sqlReplace : https://lookerstudio.google.com/reporting/create? c.reportId=123abc &ds.ds0.sqlReplace=bigquery-public-data,new-project,samples,new-dataset The following shows a template query before and after sqlReplace is applied.
- Examples A Google Sheets configuration: https://lookerstudio.google.com/reporting/create? c.reportId=101112jkl &ds.ds3.connector=googleSheets &ds.ds3.spreadsheetId=1Qs8BdfxZXALh6vX4zrE7ZyGnR3h5k &ds.ds3.worksheetId=903806437 A Google Sheets configuration with the first row used as headers and hidden and filtered cells included: https://lookerstudio.google.com/reporting/create? c.reportId=101112jkl &ds.ds3.connector=googleSheets &ds.ds3.spreadsheetId=1Qs8BdfxZXALh6vX4zrE7ZyGnR3h5k &ds.ds3.worksheetId=903806437 &ds.ds3.hasHeader=true &ds.ds3.includeHiddenCells=true &ds.ds3.includeFilteredCells=true A Google Sheets configuration with a range (A1:D20): https://lookerstudio.google.com/reporting/create? c.reportId=101112jkl &ds.ds3.connector=googleSheets &ds.ds3.spreadsheetId=1Qs8BdfxZXALh6vX4zrE7ZyGnR3h5k &ds.ds3.worksheetId=903806437 &ds.ds3.range=A1%3AD20 Looker Parameter name Description ds. alias .connector link Optional.
- For example, if you have a template with three BigQuery data sources attached, and you want to replace the projectId and datasetId in each one, but preserve the tableId , you could write it as: https://lookerstudio.google.com/reporting/create? c.reportId=7890 &ds.ds1.projectId=client-project &ds.ds1.datasetId=client-dataset &ds.ds2.projectId=client-project &ds.ds2.datasetId=client-dataset &ds.ds3.projectId=client-project &ds.ds3.datasetId=client-dataset Or, with the ds. wildcard, you can use this equivalent url: https://lookerstudio.google.com/reporting/create? c.reportId=7890 &ds. .projectId=client-project &ds. .datasetId=client-dataset Parameters provided to the Linking API that don't use the ds. wildcard are given precedence over ones that are.
- The BigQuery data source configuration is replaced in its entirety, while the Google Analytics configuration updates a single parameter and relies on the ds1 template data source for any unspecified connector parameters: https : //lookerstudio.google.com/reporting/create? c . reportId = 7890 & r . reportName = MyNewReportWithMultipleDataSources & ds . ds0 . datasourceName = MyNewDataSource & ds . ds0 . connector = bigQuery & ds . ds0 . type = TABLE & ds . ds0 . projectId = bigquery - public - data & ds . ds0 . datasetId = samples & ds . ds0 . tableId = shakespeare & ds . ds1 . viewId = 92320289 Create vs Add It can sometimes be useful to have the same data source in multiple reports so updates to the data source affect all reports together.

