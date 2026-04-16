---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:44:17.207Z"
product_name: "Looker Studio"
product_slug: "looker-studio"
feature_name: "Dimension control"
feature_slug: "dimension-control"
latest_feature_date: "2023-10-05"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/looker-studio/integrate/linking-api"
  - "https://developers.google.com/looker-studio/connector/data-source-parameters"
  - "https://developers.google.com/looker-studio/connector/reference"
keywords:
  - "dimension"
  - "control"
  - "lets"
  - "report"
  - "viewers"
  - "change"
  - "dimensions"
  - "one"
---

# Dimension control

Product: Looker Studio
Coverage: MEDIUM

## Step 02 Summary

A control that lets report viewers change the dimensions on one or more charts without editing the report.

## Extended Definition

A control that lets report viewers change the dimensions on one or more charts without editing the report.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/looker-studio/integrate/linking-api](https://developers.google.com/looker-studio/integrate/linking-api)
- [https://developers.google.com/looker-studio/connector/data-source-parameters](https://developers.google.com/looker-studio/connector/data-source-parameters)
- [https://developers.google.com/looker-studio/connector/reference](https://developers.google.com/looker-studio/connector/reference)

## Supporting Pages

### Linking API \_|\_ Integrate and share \_|\_ Google for Developers

- URL: [https://developers.google.com/looker-studio/integrate/linking-api](https://developers.google.com/looker-studio/integrate/linking-api)
- Source ID: `site-api-reference`
- Final score: 92
- Re-rank relevance: N/A

Evidence snippets:
- Examples A TABLE type configuration where the query is defined with a Table ID: https : //lookerstudio.google.com/reporting/create? c . reportId = 123 abc & ds . ds0 . connector = bigQuery & ds . ds0 . type = TABLE & ds . ds0 . projectId = bigquery - public - data & ds . ds0 . datasetId = samples & ds . ds0 . tableId = shakespeare & ds . ds0 . billingProjectId = myProject A TABLE type configuration to query a date sharded table using the wildcard character suffix: https : //lookerstudio.google.com/reporting/create? c . reportId = 123 abc & ds . ds0 . connector = bigQuery & ds . ds0 . type = TABLE & ds . ds0 . projectId = price - data & ds . ds0 . datasetId = samples & ds . ds0 . tableId = stock A TABLE type configuration to query a date sharded table using the YYYYMMDD suffix: https : //lookerstudio.google.com/reporting/create? c . reportId = 123 abc & ds . ds0 . connector = bigQuery & ds . ds0 . type = TABLE & ds . ds0 . projectId = price - data & ds . ds0 . datasetId = samples & ds . ds0 . tableId = stock YYYYMMDD A TABLE type configuration to query a BigQuery Export for Google Analytics table, using the SESSION fields template: https : //lookerstudio.google.com/reporting/create? c . reportId = 123 abc & ds . ds0 . connector = bigQuery & ds . ds0 . type = TABLE & ds . ds0 . projectId = my - gabq - project & ds . ds0 . datasetId = 1234567 & ds . ds0 . tableId = ga sessions YYYYMMDD & ds . ds0 . gaTemplateLevel = SESSION A TABLE type configuration to query an ingestion time partitioned table and use the partitioning column as a date range dimension: https : //lookerstudio.google.com/reporting/create? c . reportId = 123 abc & ds . ds0 . connector = bigQuery & ds . ds0 . type = TABLE & ds . ds0 . projectId = acme - co - logs & ds . ds0 . datasetId = logs & ds . ds0 . tableId = logs table & ds . ds0 . isPartitioned = true A CUSTOM QUERY type configuration where they query is defined with a SQL statement: https : //lookerstudio.google.com/reporting/create? c . reportId = 123 abc & ds . ds0 . connector = bigQuery & ds . ds0 . type = CUSTOM QUERY & ds . ds0 . projectId = bigquery - public - data & ds . ds0 . sql = SELECT % 20 word % 2 C % 20 word count % 20 FROM % 20 % 60 bigquery - public - data . samples . shakespeare % 60 & ds . ds0 . billingProjectId = myProject A CUSTOM QUERY type configuration where only the SQL statement is updated and the template data source is used for the rest of the configuration: https://lookerstudio.google.com/reporting/create? c.reportId=123abc &ds.ds0.sql=SELECT%20corpus%20FROM%20%60bigquery-public-data.samples.shakespeare%60 A CUSTOM QUERY type configuration where the SQL statement of the template data source is updated using sqlReplace : https://lookerstudio.google.com/reporting/create? c.reportId=123abc &ds.ds0.sqlReplace=bigquery-public-data,new-project,samples,new-dataset The following shows a template query before and after sqlReplace is applied.
- Set to true to use the data source configuration specified via the Linking API to refresh data source fields and update report components with new field selections. true is typically specified when switching the connector type or for connector types where a configuration change yields different fields (e.g. fields for BigQuery data sources often change with different table configurations).
- Set to false to leave the data source fields unchanged from the template report. false is typically specified when the new data configuration yields the exact same fields and you would prefer to maintain any field changes you've made to the template data source.
- For example, if during the creation of a report template, Looker Studio identifies a particular data source field as type Number and you change it to type Year , this field configuration change is now part of the template data source.

### "Overridable config parameters \_|\_ Community Connectors \_|\_ Google for\

- URL: [https://developers.google.com/looker-studio/connector/data-source-parameters](https://developers.google.com/looker-studio/connector/data-source-parameters)
- Source ID: `site-docs-reference`
- Final score: 89
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For example, a connector providing weather data could include a location parameter that lets report viewers request a weather report from a locale different than the default.
- Report editors can further control which parameters report viewers can modify through the report URL, enabling dynamic adjustments by viewers.
- Allow report viewers to modify parameters values Report editors control which parameters can be modified by report viewers .
- Warning: Report viewers will be able to access any data that is controlled by parameters.

### "Community Connector API Reference \_|\_ Community Connectors \_|\_ Google\

- URL: [https://developers.google.com/looker-studio/connector/reference](https://developers.google.com/looker-studio/connector/reference)
- Source ID: `site-docs-reference-required-3`
- Final score: 86
- Re-rank relevance: N/A

Evidence snippets:
- The single-select value can be overridden in reports. { configParams : [ { type : "TEXTINPUT" , name : "exampleTextInput" , displayName : "Single line text" , helpText : "Helper text for single line text" , placeholder : "Lorem Ipsum" }, { type : "TEXTAREA" , name : "exampleTextArea" , displayName : "Text area" , helpText : "Helper text for text area" , placeholder : "Lorem Ipsum" }, { type : "SELECT SINGLE" , name : "exampleSELECT SINGLE" , displayName : "Select single" , helpText : "Helper text for select-single" , parameterControl : { allowOverride : true }, options : [ { label : "Lorem foo" , value : "lorem" }, { label : "Ipsum bar" , value : "ipsum" }, { label : "Sit" , value : "amet" } ] }, { type : "SELECT MULTIPLE" , name : "exampleSELECT MULTIPLE" , displayName : "Select multiple" , helpText : "Helper text for select-multiple" , options : [ { label : "Lipsum" , value : "lipsum" }, { label : "Foo Bar" , value : "foobar" }, { label : "Dolor Sit" , value : "amet" } ] }, { type : "CHECKBOX" , name : "exampleCheckbox" , displayName : "This is a checkbox" , helpText : "Helper text for checkbox" , }, { type : "INFO" , name : "exampleInfo" , text : "Example instructions text used in Info" } ], dateRangeRequired : false } getSchema() Returns the schema for the given request.
- It has the following structure: { "configParams" : object , "scriptParams" : { "sampleExtraction" : boolean , "lastRefresh" : string }, "dateRange" : { "startDate" : string , "endDate" : string }, "fields" : [ { "name" : string } ], "dimensionsFilters" : [ [{ "fieldName" : string , "values" : string [], "type" : DimensionsFilterType , "operator" : Operator }] ] } Name Type Description configParams object An object containing the user provided values for the config parameters defined by the connector. scriptParams ScriptParams An object containing information relevant to connector execution dateRange DateRange By default, the date range provided will be the last 28 days excluding today.
- It will be in YYYY-MM-DD format. scriptParams Name Type Description sampleExtraction boolean If true , the getData() request is for automatic semantic type detection . lastRefresh string A timestamp that marks the most recent request for a refresh of data. dimensionsFilters name type description fieldName string The name of the field to be filtered values string[] An array of values to use for the operator. type "INCLUDE" "EXCLUDE" Whether data matching this filter should be included or excluded from the getData() response. operator FilterOperator The operator to apply Note: If more than 20 fields are in the request, then multiple getData requests will be sent.
- Don't return the field if your connector applies filters . dimensionsFilters DimensionsFilters A nested array of the user selected filters.

