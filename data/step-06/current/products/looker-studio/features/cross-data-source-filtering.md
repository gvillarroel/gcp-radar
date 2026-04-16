---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:44:17.125Z"
product_name: "Looker Studio"
product_slug: "looker-studio"
feature_name: "Cross-data-source filtering"
feature_slug: "cross-data-source-filtering"
latest_feature_date: "2026-01-15"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/looker-studio/connector/filters"
  - "https://developers.google.com/looker-studio/integrate/linking-api"
  - "https://developers.google.com/looker-studio/visualization/interactions-guide"
keywords:
  - "cross"
  - "source"
  - "filtering"
  - "report"
  - "controls"
  - "can"
  - "filter"
  - "charts"
---

# Cross-data-source filtering

Product: Looker Studio
Coverage: MEDIUM

## Step 02 Summary

Report controls can filter charts built from different data sources by overriding default field IDs.

## Extended Definition

Report controls can filter charts built from different data sources by overriding default field IDs.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/looker-studio/connector/filters](https://developers.google.com/looker-studio/connector/filters)
- [https://developers.google.com/looker-studio/integrate/linking-api](https://developers.google.com/looker-studio/integrate/linking-api)
- [https://developers.google.com/looker-studio/visualization/interactions-guide](https://developers.google.com/looker-studio/visualization/interactions-guide)

## Supporting Pages

### Filters \_|\_ Community Connectors \_|\_ Google for Developers

- URL: [https://developers.google.com/looker-studio/connector/filters](https://developers.google.com/looker-studio/connector/filters)
- Source ID: `site-docs-reference`
- Final score: 99
- Re-rank relevance: N/A

Evidence snippets:
- The report user has configured two filters: country is IN LIST of Canada, USA source is IN LIST of Social, Organic The report user has configured a chart component with the source dimension and sessions metric getData() is executed by Looker Studio with the following request object: { "fields" : [ { "name" : "source" }, { "name" : "sessions" }, { "name" : "country" , "forFilterOnly" : true } ], "dimensionsFilters" : [ [{ "fieldName" : "country" , "values" : [ "Canada" , "USA" ], "type" : "INCLUDE" , "operator" : "IN LIST" }], [{ "fieldName" : "source" , "values" : [ "Social" , "Organic" ], "type" : "INCLUDE" , "operator" : "IN LIST" }] ] } Connector responds with filtered data.
- Example: { "schema" : [ { "name" : "source" , "dataType" : "STRING" }, { "name" : "sessions" , "dataType" : "NUMBER" }, { "name" : "country" , "dataType" : "STRING" } ], "rows" : [ { "values" : [ "Social" , 60 , "USA" ]}, { "values" : [ "Social" , 50 , "Canada" ]}, { "values" : [ "Social" , 40 , "UK" ]}, { "values" : [ "Organic" , 90 , "USA" ]}, { "values" : [ "Organic" , 80 , "Canada" ]}, { "values" : [ "Organic" , 70 , "UK" ]}, { "values" : [ "Newspaper" , 30 , "USA" ]}, { "values" : [ "Newspaper" , 20 , "Canada" ]}, { "values" : [ "Newspaper" , 10 , "UK" ]}, ], "filtersApplied" : false } Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Original data source sessions country Social 60 USA Social 50 Canada Social 40 UK Organic 90 USA Organic 80 Canada Organic 70 UK Newspaper 30 USA Newspaper 20 Canada Newspaper 10 UK Filtered data source sessions Social 60 Social 50 Organic 90 Organic 80 getData() response { "schema" : [ { "name" : "source" , "dataType" : "STRING" }, { "name" : "sessions" , "dataType" : "NUMBER" }, ], "rows" : [ { "values" : [ "Social" , 60 ]}, { "values" : [ "Social" , 50 ]}, { "values" : [ "Organic" , 90 ]}, { "values" : [ "Organic" , 80 ]} ], "filtersApplied" : true } Key Point: response.rows[].values does not have an entry for country and filtersApplied is set to true .
- For example, for the following filter, the connector should only include values that have a country of USA AND a source of Social . { "dimensionsFilters" : [ [{ "fieldName" : "country" , "values" : [ "USA" ], "type" : "INCLUDE" , "operator" : "EQUALS" }], [{ "fieldName" : "source" , "values" : [ "Social" ], "type" : "INCLUDE" , "operator" : "EQUALS" }] ] } OR together each sub-array in the request.dimensionsFilters array.

### Linking API \_|\_ Integrate and share \_|\_ Google for Developers

- URL: [https://developers.google.com/looker-studio/integrate/linking-api](https://developers.google.com/looker-studio/integrate/linking-api)
- Source ID: `site-api-reference`
- Final score: 85
- Re-rank relevance: N/A

Evidence snippets:
- If set to false , the field configuration from the template data source will carry-over to the new data source and report charts will receive the same fields with the same configuration and load successfully.
- Examples A TABLE type configuration where the query is defined with a Table ID: https : //lookerstudio.google.com/reporting/create? c . reportId = 123 abc & ds . ds0 . connector = bigQuery & ds . ds0 . type = TABLE & ds . ds0 . projectId = bigquery - public - data & ds . ds0 . datasetId = samples & ds . ds0 . tableId = shakespeare & ds . ds0 . billingProjectId = myProject A TABLE type configuration to query a date sharded table using the wildcard character suffix: https : //lookerstudio.google.com/reporting/create? c . reportId = 123 abc & ds . ds0 . connector = bigQuery & ds . ds0 . type = TABLE & ds . ds0 . projectId = price - data & ds . ds0 . datasetId = samples & ds . ds0 . tableId = stock A TABLE type configuration to query a date sharded table using the YYYYMMDD suffix: https : //lookerstudio.google.com/reporting/create? c . reportId = 123 abc & ds . ds0 . connector = bigQuery & ds . ds0 . type = TABLE & ds . ds0 . projectId = price - data & ds . ds0 . datasetId = samples & ds . ds0 . tableId = stock YYYYMMDD A TABLE type configuration to query a BigQuery Export for Google Analytics table, using the SESSION fields template: https : //lookerstudio.google.com/reporting/create? c . reportId = 123 abc & ds . ds0 . connector = bigQuery & ds . ds0 . type = TABLE & ds . ds0 . projectId = my - gabq - project & ds . ds0 . datasetId = 1234567 & ds . ds0 . tableId = ga sessions YYYYMMDD & ds . ds0 . gaTemplateLevel = SESSION A TABLE type configuration to query an ingestion time partitioned table and use the partitioning column as a date range dimension: https : //lookerstudio.google.com/reporting/create? c . reportId = 123 abc & ds . ds0 . connector = bigQuery & ds . ds0 . type = TABLE & ds . ds0 . projectId = acme - co - logs & ds . ds0 . datasetId = logs & ds . ds0 . tableId = logs table & ds . ds0 . isPartitioned = true A CUSTOM QUERY type configuration where they query is defined with a SQL statement: https : //lookerstudio.google.com/reporting/create? c . reportId = 123 abc & ds . ds0 . connector = bigQuery & ds . ds0 . type = CUSTOM QUERY & ds . ds0 . projectId = bigquery - public - data & ds . ds0 . sql = SELECT % 20 word % 2 C % 20 word count % 20 FROM % 20 % 60 bigquery - public - data . samples . shakespeare % 60 & ds . ds0 . billingProjectId = myProject A CUSTOM QUERY type configuration where only the SQL statement is updated and the template data source is used for the rest of the configuration: https://lookerstudio.google.com/reporting/create? c.reportId=123abc &ds.ds0.sql=SELECT%20corpus%20FROM%20%60bigquery-public-data.samples.shakespeare%60 A CUSTOM QUERY type configuration where the SQL statement of the template data source is updated using sqlReplace : https://lookerstudio.google.com/reporting/create? c.reportId=123abc &ds.ds0.sqlReplace=bigquery-public-data,new-project,samples,new-dataset The following shows a template query before and after sqlReplace is applied.
- Examples A Google Sheets configuration: https://lookerstudio.google.com/reporting/create? c.reportId=101112jkl &ds.ds3.connector=googleSheets &ds.ds3.spreadsheetId=1Qs8BdfxZXALh6vX4zrE7ZyGnR3h5k &ds.ds3.worksheetId=903806437 A Google Sheets configuration with the first row used as headers and hidden and filtered cells included: https://lookerstudio.google.com/reporting/create? c.reportId=101112jkl &ds.ds3.connector=googleSheets &ds.ds3.spreadsheetId=1Qs8BdfxZXALh6vX4zrE7ZyGnR3h5k &ds.ds3.worksheetId=903806437 &ds.ds3.hasHeader=true &ds.ds3.includeHiddenCells=true &ds.ds3.includeFilteredCells=true A Google Sheets configuration with a range (A1:D20): https://lookerstudio.google.com/reporting/create? c.reportId=101112jkl &ds.ds3.connector=googleSheets &ds.ds3.spreadsheetId=1Qs8BdfxZXALh6vX4zrE7ZyGnR3h5k &ds.ds3.worksheetId=903806437 &ds.ds3.range=A1%3AD20 Looker Parameter name Description ds. alias .connector link Optional.
- For example, if you have a template with three BigQuery data sources attached, and you want to replace the projectId and datasetId in each one, but preserve the tableId , you could write it as: https://lookerstudio.google.com/reporting/create? c.reportId=7890 &ds.ds1.projectId=client-project &ds.ds1.datasetId=client-dataset &ds.ds2.projectId=client-project &ds.ds2.datasetId=client-dataset &ds.ds3.projectId=client-project &ds.ds3.datasetId=client-dataset Or, with the ds. wildcard, you can use this equivalent url: https://lookerstudio.google.com/reporting/create? c.reportId=7890 &ds. .projectId=client-project &ds. .datasetId=client-dataset Parameters provided to the Linking API that don't use the ds. wildcard are given precedence over ones that are.

### "Using community visualizations as filters \_|\_ Community Visualizations\

- URL: [https://developers.google.com/looker-studio/visualization/interactions-guide](https://developers.google.com/looker-studio/visualization/interactions-guide)
- Source ID: `site-docs-reference-2`
- Final score: 82
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Page Summary outlined flag Community visualizations can act as chart filters, allowing users to interact with them and filter other charts in the report.
- You can use your community visualization as a chart filter , filtering the report through interactions with your community visualization.
- Example data.interactions : "onClick" : { "value" : { "type" : "FILTER" , "data" : { "concepts" : [ "qt h6oibrb6wb" , "qt i6oibrb6wb" ], "values" : [ [ "Afternoon" , "Sunday" ], [ "Afternoon" , "Thursday" ], [ "Morning" , "Tuesday" ] ] } }, "supportedActions" : [ "FILTER" ] } If value.data is not undefined, the visualization is currently filtering other components of the dashboard.
- FILTER ; let interactionData = { concepts : [ dimensionId ], values : [[ value ]] }; // send Looker Studio an instruction to filter other charts in the dashboard dscc . sendInteraction ( interactionId , FILTER , interactionData ); }; Note: Make sure the interactionId matches a config.interactions[].id in your config.

