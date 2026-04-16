---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:44:17.167Z"
product_name: "Looker Studio"
product_slug: "looker-studio"
feature_name: "Hide and remove data source fields"
feature_slug: "hide-and-remove-data-source-fields"
latest_feature_date: "2024-12-17"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/looker-studio/integrate/linking-api"
  - "https://docs.cloud.google.com/looker/docs/studio/nativedimension"
  - "https://developers.google.com/looker-studio/connector/calculated-fields"
keywords:
  - "hide"
  - "remove"
  - "source"
  - "fields"
  - "users"
  - "can"
  - "field"
  - "prevent"
---

# Hide and remove data source fields

Product: Looker Studio
Coverage: MEDIUM

## Step 02 Summary

Users can hide or remove any field from a data source to prevent report viewers from seeing its metadata.

## Extended Definition

Users can hide or remove any field from a data source to prevent report viewers from seeing its metadata.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/looker-studio/integrate/linking-api](https://developers.google.com/looker-studio/integrate/linking-api)
- [https://docs.cloud.google.com/looker/docs/studio/nativedimension](https://docs.cloud.google.com/looker/docs/studio/nativedimension)
- [https://developers.google.com/looker-studio/connector/calculated-fields](https://developers.google.com/looker-studio/connector/calculated-fields)

## Supporting Pages

### Linking API \_|\_ Integrate and share \_|\_ Google for Developers

- URL: [https://developers.google.com/looker-studio/integrate/linking-api](https://developers.google.com/looker-studio/integrate/linking-api)
- Source ID: `site-api-reference`
- Final score: 123
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Examples A TABLE type configuration where the query is defined with a Table ID: https : //lookerstudio.google.com/reporting/create? c . reportId = 123 abc & ds . ds0 . connector = bigQuery & ds . ds0 . type = TABLE & ds . ds0 . projectId = bigquery - public - data & ds . ds0 . datasetId = samples & ds . ds0 . tableId = shakespeare & ds . ds0 . billingProjectId = myProject A TABLE type configuration to query a date sharded table using the wildcard character suffix: https : //lookerstudio.google.com/reporting/create? c . reportId = 123 abc & ds . ds0 . connector = bigQuery & ds . ds0 . type = TABLE & ds . ds0 . projectId = price - data & ds . ds0 . datasetId = samples & ds . ds0 . tableId = stock A TABLE type configuration to query a date sharded table using the YYYYMMDD suffix: https : //lookerstudio.google.com/reporting/create? c . reportId = 123 abc & ds . ds0 . connector = bigQuery & ds . ds0 . type = TABLE & ds . ds0 . projectId = price - data & ds . ds0 . datasetId = samples & ds . ds0 . tableId = stock YYYYMMDD A TABLE type configuration to query a BigQuery Export for Google Analytics table, using the SESSION fields template: https : //lookerstudio.google.com/reporting/create? c . reportId = 123 abc & ds . ds0 . connector = bigQuery & ds . ds0 . type = TABLE & ds . ds0 . projectId = my - gabq - project & ds . ds0 . datasetId = 1234567 & ds . ds0 . tableId = ga sessions YYYYMMDD & ds . ds0 . gaTemplateLevel = SESSION A TABLE type configuration to query an ingestion time partitioned table and use the partitioning column as a date range dimension: https : //lookerstudio.google.com/reporting/create? c . reportId = 123 abc & ds . ds0 . connector = bigQuery & ds . ds0 . type = TABLE & ds . ds0 . projectId = acme - co - logs & ds . ds0 . datasetId = logs & ds . ds0 . tableId = logs table & ds . ds0 . isPartitioned = true A CUSTOM QUERY type configuration where they query is defined with a SQL statement: https : //lookerstudio.google.com/reporting/create? c . reportId = 123 abc & ds . ds0 . connector = bigQuery & ds . ds0 . type = CUSTOM QUERY & ds . ds0 . projectId = bigquery - public - data & ds . ds0 . sql = SELECT % 20 word % 2 C % 20 word count % 20 FROM % 20 % 60 bigquery - public - data . samples . shakespeare % 60 & ds . ds0 . billingProjectId = myProject A CUSTOM QUERY type configuration where only the SQL statement is updated and the template data source is used for the rest of the configuration: https://lookerstudio.google.com/reporting/create? c.reportId=123abc &ds.ds0.sql=SELECT%20corpus%20FROM%20%60bigquery-public-data.samples.shakespeare%60 A CUSTOM QUERY type configuration where the SQL statement of the template data source is updated using sqlReplace : https://lookerstudio.google.com/reporting/create? c.reportId=123abc &ds.ds0.sqlReplace=bigquery-public-data,new-project,samples,new-dataset The following shows a template query before and after sqlReplace is applied.
- If the Linking API is used to provide a new data source configuration that yields the exact same fields, there are two outcomes based on the value of the refreshFields parameter: If set to true , the field configuration from the template data source will not carry-over, and charts may potentially fail to load if they depend on the same field configuration (i.e. a field of type Year is expected).
- Set to true to use the data source configuration specified via the Linking API to refresh data source fields and update report components with new field selections. true is typically specified when switching the connector type or for connector types where a configuration change yields different fields (e.g. fields for BigQuery data sources often change with different table configurations).
- Considerations when using refreshFields : If refreshFields is set to false and the data source configuration specified via the Linking API yields different fields from what's used in the template report, the user will likely see a configuration error for the affected components.

### Data Studio \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/studio/nativedimension](https://docs.cloud.google.com/looker/docs/studio/nativedimension)
- Source ID: `site-docs-reference-required-4`
- Final score: 114
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For example: NATIVE DIMENSION("CAST({expression} AS DATETIME)", "DATETIME") Related resources Dates and times Calculated fields Data Studio function list CAST function Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Limits of NATIVE DIMENSION Who can use native functions If native functions are enabled, owners and editors of the data source can create fields with native functions on the data source.
- If you disable native functions, no users can create fields using native functions.
- Viewers of the data source can use fields with native functions in charts.

### "Using calculated fields in schema \_|\_ Community Connectors \_|\_ Google\

- URL: [https://developers.google.com/looker-studio/connector/calculated-fields](https://developers.google.com/looker-studio/connector/calculated-fields)
- Source ID: `site-docs-reference`
- Final score: 103
- Re-rank relevance: N/A

Evidence snippets:
- AUTO ); fields . newDimension () . setId ( 'feels like' ) . setName ( 'Feels Like' ) . setDescription ( 'What it feels like outside.' ) . setFormula ( 'CASE WHEN $t celsius < 0 THEN "Freezing" WHEN $t celsius > 40 THEN "Too warm" ELSE "Not bad" END' ) . setType ( types .
- Formula aggregation "SUM($cost) / SUM($units)" AUTO "$cost + $units" NONE Examples of calculated fields in schema function getSchema ( request ) { var cc = DataStudioApp . createCommunityConnector (); var fields = cc . getFields (); var types = cc .
- AUTO ); fields . newMetric () . setId ( 'average temperature (Celsius)' ) . setName ( 'Average Temperature (Celsius)' ) . setDescription ( 'Temperature in Fahrenheit' ) . setFormula ( 'AVG($t celsius / 5 9 + 32)' ) . setType ( types .
- NONE ); fields . newMetric () . setId ( 'average temperature (Celsius)' ) . setName ( 'Average Temperature (Celsius)' ) . setDescription ( 'Temperature in Fahrenheit' ) . setFormula ( 'AVG($t celsius)' ) . setType ( types .

