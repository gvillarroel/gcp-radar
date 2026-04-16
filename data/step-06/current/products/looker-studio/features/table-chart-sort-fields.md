---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:44:17.145Z"
product_name: "Looker Studio"
product_slug: "looker-studio"
feature_name: "Table chart sort fields"
feature_slug: "table-chart-sort-fields"
latest_feature_date: "2025-09-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/looker-studio/integrate/linking-api"
  - "https://developers.google.com/looker-studio/connector/report-templates"
  - "https://developers.google.com/looker-studio/visualization/library-reference"
keywords:
  - "table"
  - "chart"
  - "sort"
  - "fields"
  - "report"
  - "editors"
  - "can"
  - "configure"
---

# Table chart sort fields

Product: Looker Studio
Coverage: MEDIUM

## Step 02 Summary

Report editors can configure up to 10 sort fields for table charts; Report creators can configure up to 10 sort fields for table charts, including fields not selected in the chart.

## Extended Definition

Report editors can configure up to 10 sort fields for table charts; Report creators can configure up to 10 sort fields for table charts, including fields not selected in the chart.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/looker-studio/integrate/linking-api](https://developers.google.com/looker-studio/integrate/linking-api)
- [https://developers.google.com/looker-studio/connector/report-templates](https://developers.google.com/looker-studio/connector/report-templates)
- [https://developers.google.com/looker-studio/visualization/library-reference](https://developers.google.com/looker-studio/visualization/library-reference)

## Supporting Pages

### Linking API \_|\_ Integrate and share \_|\_ Google for Developers

- URL: [https://developers.google.com/looker-studio/integrate/linking-api](https://developers.google.com/looker-studio/integrate/linking-api)
- Source ID: `site-api-reference`
- Final score: 123
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Examples A TABLE type configuration where the query is defined with a Table ID: https : //lookerstudio.google.com/reporting/create? c . reportId = 123 abc & ds . ds0 . connector = bigQuery & ds . ds0 . type = TABLE & ds . ds0 . projectId = bigquery - public - data & ds . ds0 . datasetId = samples & ds . ds0 . tableId = shakespeare & ds . ds0 . billingProjectId = myProject A TABLE type configuration to query a date sharded table using the wildcard character suffix: https : //lookerstudio.google.com/reporting/create? c . reportId = 123 abc & ds . ds0 . connector = bigQuery & ds . ds0 . type = TABLE & ds . ds0 . projectId = price - data & ds . ds0 . datasetId = samples & ds . ds0 . tableId = stock A TABLE type configuration to query a date sharded table using the YYYYMMDD suffix: https : //lookerstudio.google.com/reporting/create? c . reportId = 123 abc & ds . ds0 . connector = bigQuery & ds . ds0 . type = TABLE & ds . ds0 . projectId = price - data & ds . ds0 . datasetId = samples & ds . ds0 . tableId = stock YYYYMMDD A TABLE type configuration to query a BigQuery Export for Google Analytics table, using the SESSION fields template: https : //lookerstudio.google.com/reporting/create? c . reportId = 123 abc & ds . ds0 . connector = bigQuery & ds . ds0 . type = TABLE & ds . ds0 . projectId = my - gabq - project & ds . ds0 . datasetId = 1234567 & ds . ds0 . tableId = ga sessions YYYYMMDD & ds . ds0 . gaTemplateLevel = SESSION A TABLE type configuration to query an ingestion time partitioned table and use the partitioning column as a date range dimension: https : //lookerstudio.google.com/reporting/create? c . reportId = 123 abc & ds . ds0 . connector = bigQuery & ds . ds0 . type = TABLE & ds . ds0 . projectId = acme - co - logs & ds . ds0 . datasetId = logs & ds . ds0 . tableId = logs table & ds . ds0 . isPartitioned = true A CUSTOM QUERY type configuration where they query is defined with a SQL statement: https : //lookerstudio.google.com/reporting/create? c . reportId = 123 abc & ds . ds0 . connector = bigQuery & ds . ds0 . type = CUSTOM QUERY & ds . ds0 . projectId = bigquery - public - data & ds . ds0 . sql = SELECT % 20 word % 2 C % 20 word count % 20 FROM % 20 % 60 bigquery - public - data . samples . shakespeare % 60 & ds . ds0 . billingProjectId = myProject A CUSTOM QUERY type configuration where only the SQL statement is updated and the template data source is used for the rest of the configuration: https://lookerstudio.google.com/reporting/create? c.reportId=123abc &ds.ds0.sql=SELECT%20corpus%20FROM%20%60bigquery-public-data.samples.shakespeare%60 A CUSTOM QUERY type configuration where the SQL statement of the template data source is updated using sqlReplace : https://lookerstudio.google.com/reporting/create? c.reportId=123abc &ds.ds0.sqlReplace=bigquery-public-data,new-project,samples,new-dataset The following shows a template query before and after sqlReplace is applied.
- The URL above can be simplified to the following: https : //lookerstudio.google.com/reporting/create? c . reportId = 12345 & r . reportName = MyNewReport & ds . datasourceName = MyNewDataSource & ds . connector = bigQuery & ds . type = TABLE & ds . projectId = bigquery - public - data & ds . datasetId = samples & ds . tableId = shakespeare Configures a report with a single BigQuery data source ( ds0 ) and updates only the billing project ID of the data source: https://lookerstudio.google.com/reporting/create? c.reportId=12345 &r.reportName=MyNewReport &ds.ds0.billingProjectId=my-billing-project Configures a report with two data sources, a BigQuery data source ( ds0 ) and a Google Analytics data source ( ds1 ).
- Examples Configures a report with a single BigQuery data source ( ds0 ) and replaces the data source configuration in its entirety: https : //lookerstudio.google.com/reporting/create? c . reportId = 12345 & r . reportName = MyNewReport & ds . ds0 . datasourceName = MyNewDataSource & ds . ds0 . connector = bigQuery & ds . ds0 . type = TABLE & ds . ds0 . projectId = bigquery - public - data & ds . ds0 . datasetId = samples & ds . ds0 . tableId = shakespeare The data source alias can be omitted when the report has a single data source.
- The report name is set and a single BigQuery data source is configured: https : //lookerstudio.google.com/reporting/create? c . reportId = 12345 & r . reportName = MyNewReport & ds . ds0 . connector = bigQuery & ds . ds0 . datasourceName = MyNewDataSource & ds . ds0 . projectId = project - 1234 & ds . ds0 . type = TABLE & ds . ds0 . datasetId = 456 & ds . ds0 . tableId = 789 Note: It is recommended to URL-encode parameters.

### Providing report templates \_|\_ Community Connectors \_|\_ Google for Developers

- URL: [https://developers.google.com/looker-studio/connector/report-templates](https://developers.google.com/looker-studio/connector/report-templates)
- Source ID: `site-docs-reference`
- Final score: 80
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Add charts, tables, elements, etc. to the report and design it to your liking.
- If you add a template to a connector with variable or multiple schema, the report behavior will be unpredictable.
- For example, in the following URL, 0B1a5IAKYIVtTcWxCbWJkc2Q1M1k is the report ID: https://looker-studio.google.com/c/org/UTgoe29uR0C3F1FBAYBSww/reporting/ 0B1a5IAKYIVtTcWxCbWJkc2Q1M1k /page/9QoH You can now add this report as a template in the manifest of your Community Connector: { "dataStudio" : { ... "templates" : { "default" : "0B1a5IAKYIVtTcWxCbWJkc2Q1M1k" } } } Behavior of templates If your connector's manifest has an entry for the template key, during the connector configuration screen, Data Studio will provide a checkbox to allow the user to select whether or not they want to use the default template.
- Home Products Looker Studio Community Connectors Providing report templates Stay organized with collections Save and categorize content based on your preferences.

### "Looker Studio Community Component (dscc) library reference \_|\_ Community\

- URL: [https://developers.google.com/looker-studio/visualization/library-reference](https://developers.google.com/looker-studio/visualization/library-reference)
- Source ID: `site-docs-reference-2`
- Final score: 78
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- These following are the fields that are shared between dscc.objectFormat and dscc.tableFormat . { fields : object ( fieldsByConfigId ), style : object ( styleById ), interactions : object ( interactionsById ), theme : object ( themeStyle ), tables : object ( tablesById ), dateRanges : object ( dateRangesById ) } Field Type Description fields object(fieldsByConfigId) An object that contains fields indexed by their configId style object(styleById) An object that contains style objects indexed by their configId interactions object(interactionsById) An object that contains interaction objects theme themeStyle A themeStyle object that contains theme styling information for the report tables object(tablesById) An object that contains tableObjects dateRanges object(dateRangesById) An object that contains dateRanges fieldsByConfigId { configId : array ( field ) } The fieldsByConfigId object contains arrays of field objects indexed by the "id" defined in the visualization config .
- These field objects additionally have a configId property that corresponds to the IDs from the config. rows Array<Array> An array of arrays: each array is a row of data Sample tableFormat data This is sample data returned by using dscc.subscribeToData() with the option dscc.tableFormat . { "tables" : { "DEFAULT" : { "headers" : [{ "id" : "qt ky8sltutsb" , "name" : "dimension" , "type" : "TEXT" , "concept" : "DIMENSION" , "configId" : "configId1" }, { "id" : "qt b5bvmtutsb" , "name" : "second dim" , "type" : "TEXT" , "concept" : "DIMENSION" "configId" : "configId1" }, { "id" : "qt m9dtntutsb" , "name" : "metric" , "type" : "NUMBER" , "concept" : "METRIC" , "configId" : "configId2" }], "rows" : [ [ "Week 4" , "lm" , 55 ] ] }, "COMPARISON" : { "headers" : [{ "id" : "qt ky8sltutsb" , "name" : "dimension" , "type" : "TEXT" , "concept" : "DIMENSION" , "configId" : "configId1" }, { "id" : "qt b5bvmtutsb" , "name" : "second dim" , "type" : "TEXT" , "concept" : "DIMENSION" "configId" : "configId1" }, { "id" : "qt m9dtntutsb" , "name" : "metric" , "type" : "NUMBER" , "concept" : "METRIC" , "configId" : "configId2" }], "rows" : [ [ "Week 5" , "no" , 123 ] ] } }, "fields" : { "configId1" : [ { "id" : "qt ky8sltutsb" , "name" : "week" , "type" : "TEXT" , "concept" : "DIMENSION" }, { "id" : "qt b5bvmtutsb" , "name" : "textId" , "type" : "TEXT" , "concept" : "DIMENSION" } ], "configId2" : [ { "id" : "qt m9dtntutsb" , "name" : "orders" , "type" : "NUMBER" , "concept" : "METRIC" } ] }, "style" : { "nodeColor" : { "value" : { "color" : "#000000" } } }, "theme" : {}, "dateRanges" : { "DEFAULT" : { "start" : "20210501" , "end" : "20210531" }, "COMPARISON" : { "start" : "20200501" , "end" : "20200531" } }, "interactions" : { "onClick" : { "value" : { "type" : "FILTER" , "data" : { "concepts" : [ "qt h6oibrb6wb" , "qt i6oibrb6wb" ], "values" : [ [ "Afternoon" , "Sunday" ], [ "Afternoon" , "Thursday" ], [ "Morning" , "Tuesday" ] ] } }, "supportedActions" : [ "FILTER" ] } } } objectFormat reference objectRow { configId1 : array ( string bool number ), configId2 : array ( string bool number ) } Field Type Description configId array array of values associated with a particular config ID Sample objectFormat data This is sample data returned by using dscc.subscribeToData() with the option dscc.objectFormat . { "tables" : { "COMPARISON" : [ { "configId1" : [ "Week 5" , "cd" ], "configId2" : [ 123 ] } ], "DEFAULT" : [ { "configId1" : [ "Week 1" , "ab" ], "configId2" : [ 24 ] } ] }, "fields" : { "configId1" : [ { "id" : "qt h6oibrb6wb" , "name" : "time of day" , "type" : "TEXT" , "concept" : "DIMENSION" }, { "id" : "qt i6oibrb6wb" , "name" : "day" , "type" : "TEXT" , "concept" : "DIMENSION" } ], "configId2" : [ { "id" : "qt m9dtntutsb" , "name" : "metric" , "type" : "NUMBER" , "concept" : "METRIC" } ] }, "style" : { "nodeColor" : { "value" : { "color" : "#000000" } } }, "theme" : {}, "dateRanges" : { "DEFAULT" : { "start" : "20210501" , "end" : "20210531" }, "COMPARISON" : { "start" : "20200501" , "end" : "20200531" } }, "interactions" : { "onClick" : { "value" : { "type" : "FILTER" , "data" : { "concepts" : [ "qt h6oibrb6wb" , "qt i6oibrb6wb" ], "values" : [ [ "Afternoon" , "Sunday" ], [ "Afternoon" , "Thursday" ], [ "Morning" , "Tuesday" ] ] } }, "supportedActions" : [ "FILTER" ] } } } Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Field Type Description fillColor object An object of the format {color: string, opacity: number} fontColor object An object of the format {color: string, opacity: number} accentFillColor object An object of the format {color: string, opacity: number} accentFontColor object An object of the format {color: string, opacity: number} fontFamily string A string describing the font family accentFontFamily string A string describing the accent font family increaseColor object An object of the format {color: string, opacity: number} decreaseColor object An object of the format {color: string, opacity: number} gridColor object An object of the format {color: string, opacity: number} seriesColor Array<object> An array of objects of the format {color: string, opacity: number} tablesById { "DEFAULT" : object ( tableObject ), "COMPARISON" : object ( tableObject ) undefined } The tableObject provides heading and data information for each row. "DEFAULT" always will return data, and "COMPARISON" will only be populated if the user configures the data with comparison rows.
- Field Type Description start string Start date of date range in YYYYMMDD format. end string End date of date range in YYYYMMDD format. tableFormat reference tableObject { headers : array ( object ), rows : array ( array ) } Field Type Description headers Array An array of fields objects.

