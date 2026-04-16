---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:44:17.188Z"
product_name: "Looker Studio"
product_slug: "looker-studio"
feature_name: "Show field descriptions in table chart headers"
feature_slug: "show-field-descriptions-in-table-chart-headers"
latest_feature_date: "2024-02-22"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/looker-studio/integrate/linking-api"
  - "https://developers.google.com/looker-studio/visualization/library-guide"
  - "https://developers.google.com/looker-studio/connector/reference"
keywords:
  - "show"
  - "field"
  - "descriptions"
  - "table"
  - "chart"
  - "headers"
  - "charts"
  - "can"
---

# Show field descriptions in table chart headers

Product: Looker Studio
Coverage: MEDIUM

## Step 02 Summary

Table charts can display field descriptions in tooltips for report viewers when the option is enabled.

## Extended Definition

Table charts can display field descriptions in tooltips for report viewers when the option is enabled.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/looker-studio/integrate/linking-api](https://developers.google.com/looker-studio/integrate/linking-api)
- [https://developers.google.com/looker-studio/visualization/library-guide](https://developers.google.com/looker-studio/visualization/library-guide)
- [https://developers.google.com/looker-studio/connector/reference](https://developers.google.com/looker-studio/connector/reference)

## Supporting Pages

### Linking API \_|\_ Integrate and share \_|\_ Google for Developers

- URL: [https://developers.google.com/looker-studio/integrate/linking-api](https://developers.google.com/looker-studio/integrate/linking-api)
- Source ID: `site-api-reference`
- Final score: 127
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Examples A TABLE type configuration where the query is defined with a Table ID: https : //lookerstudio.google.com/reporting/create? c . reportId = 123 abc & ds . ds0 . connector = bigQuery & ds . ds0 . type = TABLE & ds . ds0 . projectId = bigquery - public - data & ds . ds0 . datasetId = samples & ds . ds0 . tableId = shakespeare & ds . ds0 . billingProjectId = myProject A TABLE type configuration to query a date sharded table using the wildcard character suffix: https : //lookerstudio.google.com/reporting/create? c . reportId = 123 abc & ds . ds0 . connector = bigQuery & ds . ds0 . type = TABLE & ds . ds0 . projectId = price - data & ds . ds0 . datasetId = samples & ds . ds0 . tableId = stock A TABLE type configuration to query a date sharded table using the YYYYMMDD suffix: https : //lookerstudio.google.com/reporting/create? c . reportId = 123 abc & ds . ds0 . connector = bigQuery & ds . ds0 . type = TABLE & ds . ds0 . projectId = price - data & ds . ds0 . datasetId = samples & ds . ds0 . tableId = stock YYYYMMDD A TABLE type configuration to query a BigQuery Export for Google Analytics table, using the SESSION fields template: https : //lookerstudio.google.com/reporting/create? c . reportId = 123 abc & ds . ds0 . connector = bigQuery & ds . ds0 . type = TABLE & ds . ds0 . projectId = my - gabq - project & ds . ds0 . datasetId = 1234567 & ds . ds0 . tableId = ga sessions YYYYMMDD & ds . ds0 . gaTemplateLevel = SESSION A TABLE type configuration to query an ingestion time partitioned table and use the partitioning column as a date range dimension: https : //lookerstudio.google.com/reporting/create? c . reportId = 123 abc & ds . ds0 . connector = bigQuery & ds . ds0 . type = TABLE & ds . ds0 . projectId = acme - co - logs & ds . ds0 . datasetId = logs & ds . ds0 . tableId = logs table & ds . ds0 . isPartitioned = true A CUSTOM QUERY type configuration where they query is defined with a SQL statement: https : //lookerstudio.google.com/reporting/create? c . reportId = 123 abc & ds . ds0 . connector = bigQuery & ds . ds0 . type = CUSTOM QUERY & ds . ds0 . projectId = bigquery - public - data & ds . ds0 . sql = SELECT % 20 word % 2 C % 20 word count % 20 FROM % 20 % 60 bigquery - public - data . samples . shakespeare % 60 & ds . ds0 . billingProjectId = myProject A CUSTOM QUERY type configuration where only the SQL statement is updated and the template data source is used for the rest of the configuration: https://lookerstudio.google.com/reporting/create? c.reportId=123abc &ds.ds0.sql=SELECT%20corpus%20FROM%20%60bigquery-public-data.samples.shakespeare%60 A CUSTOM QUERY type configuration where the SQL statement of the template data source is updated using sqlReplace : https://lookerstudio.google.com/reporting/create? c.reportId=123abc &ds.ds0.sqlReplace=bigquery-public-data,new-project,samples,new-dataset The following shows a template query before and after sqlReplace is applied.
- If the Linking API is used to provide a new data source configuration that yields the exact same fields, there are two outcomes based on the value of the refreshFields parameter: If set to true , the field configuration from the template data source will not carry-over, and charts may potentially fail to load if they depend on the same field configuration (i.e. a field of type Year is expected).
- If set to false , the field configuration from the template data source will carry-over to the new data source and report charts will receive the same fields with the same configuration and load successfully.
- Set to true to use the data source configuration specified via the Linking API to refresh data source fields and update report components with new field selections. true is typically specified when switching the connector type or for connector types where a configuration change yields different fields (e.g. fields for BigQuery data sources often change with different table configurations).

### "Using the helper library \_|\_ Community Visualizations \_|\_ Google for\

- URL: [https://developers.google.com/looker-studio/visualization/library-guide](https://developers.google.com/looker-studio/visualization/library-guide)
- Source ID: `site-docs-reference-2`
- Final score: 88
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For example: var data = [ [ 'hello' , 1 ], [ 'world' , 2 ] ]; The following code shows how to access a row of rows from the dscc.tableTransform format. function drawViz ( data ); // what the below object looks like // { // headers: [{ // "id": "qt ky8sltutsb", // "name": "dimension", // "type": "TEXT", // "concept": "DIMENSION", // "configId": "configId1" // }, { // "id": "qt m9dtntutsb", // "name": "metric", // "type": "NUMBER", // "concept": "METRIC", // "configId": "configId2" // }], // rows: [ // ['hello', 1], // ['world', 2] // ]; // } var dsccTableTransformObject = data . tables .
- ObjectTransformData . rows . map ( function ( d ){ return { 'configId1' : d . configId1 [ 0 ], 'configId2' : d . configId2 [ 0 ] }; }; } If data sections are defined such that a user can input multiple fields (for example, if there were two dimensions defined for a sankey diagram), then the transform will depend on your use case, as the data format returned by Looker Studio will look more like: var dsccObjectTransformData = [ { 'configId1' : [ 'hello' , 'there' ], 'configId2' : [ 1 ] }, { 'configId1' : [ 'world' , 'globe' ], 'configId2' : [ 2 ] } ] Note: The data transformations needed will depend on your visualization config. dscc.tableTransform Some visualization libraries expect an array of arrays.
- Key Purpose style User-selected and default style information fields User-selected fields information interactions User-selected interactions theme Report theme information tables Rows of data dateRanges Default and comparison date ranges Format of the data: { fields : object ( fieldsByConfigId ), style : object ( styleById ), interactions : object ( interactionsById ), theme : object ( themeStyle ), tables : object ( tablesById ), dateRanges : object ( dateRangesById ), } Different visualizations require different data formats.
- For example: var data = [ { 'colA' : 'hello' , 'colB' , 'world' }, { 'colA' : 'hello' , 'colB' , 'world' } ]; The following code shows how to access an array of objects from the dscc.objectTransform format. function drawViz ( data ){ // what the object transform could look like // [ // {'configId1': ['hello'], 'configId2': [1] }, // {'configId1': ['world'], 'configId2': [2] } // ] var dsccObjectTransformData = data . tables .

### "Community Connector API Reference \_|\_ Community Connectors \_|\_ Google\

- URL: [https://developers.google.com/looker-studio/connector/reference](https://developers.google.com/looker-studio/connector/reference)
- Source ID: `site-docs-reference-required-3`
- Final score: 87
- Re-rank relevance: N/A

Evidence snippets:
- Hidden fields don't show up on the fields screen, or as a selectable field for charts, but can be used in calculated field formulas.
- Each field has the following structure: { "name" : string , "label" : string , "description" : string , "dataType" : string ( DataType ), "group" : string , "formula" : string , "isDefault" : boolean , "defaultAggregationType" : string ( DefaultAggregationType ), "semantics" : { "conceptType" : string ( ConceptType ), "semanticType" : string ( SemanticType ), "semanticGroup" : string ( SemanticGroup ), "isReaggregatable" : boolean } } Field name Type Description name string The name of the field.
- Looker Studio doesn't currently use this field, but may in the future. semantics.isReaggregatable boolean true indicates that Aggregation can be applied to this field; In Looker Studio Aggregation is set to SUM by default and the user can change the Aggregation . false indicates Aggregation should not be applied to this field; In Looker Studio Aggregation is set to Auto by default and the user can't change the Aggregation .
- The response has the following structure: { "type" : string ( AuthType ), "helpUrl" : string } Field name Type Description type string( AuthType ) The value for the type of authentication. helpUrl string An optional URL to be shown to the user if type is one of USER TOKEN , USER PASS , KEY , PATH USER PASS , or PATH KEY .

