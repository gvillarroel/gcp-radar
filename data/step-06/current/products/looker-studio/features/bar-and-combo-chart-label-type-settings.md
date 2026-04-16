---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:44:17.224Z"
product_name: "Looker Studio"
product_slug: "looker-studio"
feature_name: "Bar and combo chart label type settings"
feature_slug: "bar-and-combo-chart-label-type-settings"
latest_feature_date: "2023-06-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/looker-studio/connector/semantics"
  - "https://developers.google.com/looker-studio/integrate/linking-api"
  - "https://developers.google.com/looker-studio/integrate/api/reference/types"
keywords:
  - "bar"
  - "combo"
  - "chart"
  - "label"
  - "type"
  - "settings"
  - "charts"
  - "configurable"
---

# Bar and combo chart label type settings

Product: Looker Studio
Coverage: MEDIUM

## Step 02 Summary

Bar and combo charts support configurable label types for stacked and 100% stacked visualizations.

## Extended Definition

Bar and combo charts support configurable label types for stacked and 100% stacked visualizations.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/looker-studio/connector/semantics](https://developers.google.com/looker-studio/connector/semantics)
- [https://developers.google.com/looker-studio/integrate/linking-api](https://developers.google.com/looker-studio/integrate/linking-api)
- [https://developers.google.com/looker-studio/integrate/api/reference/types](https://developers.google.com/looker-studio/integrate/api/reference/types)

## Supporting Pages

### "Data types and semantic types \_|\_ Community Connectors \_|\_ Google for\

- URL: [https://developers.google.com/looker-studio/connector/semantics](https://developers.google.com/looker-studio/connector/semantics)
- Source ID: `site-docs-reference`
- Final score: 82
- Re-rank relevance: N/A

Evidence snippets:
- Income is set as a Currency, and Filing Year is set as a date. data-studio/semantics.gs View on GitHub const schema = [ { name : "Income" , label : "Income (in USD)" , dataType : "NUMBER" , semantics : { conceptType : "METRIC" , semanticGroup : "CURRENCY" , semanticType : "CURRENCY USD" , }, }, { name : "Filing Year" , label : "Year in which you filed the taxes." , dataType : "STRING" , semantics : { conceptType : "METRIC" , semanticGroup : "DATE OR TIME" , semanticType : "YEAR" , }, }, ]; Troubleshooting Manual Semantic Types If you set your semantic types incorrectly for the underlying data, they will not work properly.
- Connector schema properties like conceptType , semantic type , and aggregation type influence field representation and usage in Looker Studio, serving as default settings users can adjust.
- To see which semantic types are available, please consult the semantic types documentation Community Connector schema and Looker Studio fields When you define the schema for your community connector, there are various properties for each field that will determine how the field is represented and used in Looker Studio.
- Recognized formats for automatic semantic type detection Date & Time YYYY/MM/DD-HH:MM:SS YYYY-MM-DD [HH:MM:SS[.uuuuuu]] YYYY/MM/DD [HH:MM:SS[.uuuuuu]] YYYYMMDD [HH:MM:SS[.uuuuuu]] Sat, 24 May 2008 20:09:47 GMT 2008-05-24T20:09:47Z Time: epoch for second, micro, milli, and nano.

### Linking API \_|\_ Integrate and share \_|\_ Google for Developers

- URL: [https://developers.google.com/looker-studio/integrate/linking-api](https://developers.google.com/looker-studio/integrate/linking-api)
- Source ID: `site-api-reference`
- Final score: 75
- Re-rank relevance: N/A

Evidence snippets:
- If the Linking API is used to provide a new data source configuration that yields the exact same fields, there are two outcomes based on the value of the refreshFields parameter: If set to true , the field configuration from the template data source will not carry-over, and charts may potentially fail to load if they depend on the same field configuration (i.e. a field of type Year is expected).
- If set to false , the field configuration from the template data source will carry-over to the new data source and report charts will receive the same fields with the same configuration and load successfully.
- Examples A TABLE type configuration where the query is defined with a Table ID: https : //lookerstudio.google.com/reporting/create? c . reportId = 123 abc & ds . ds0 . connector = bigQuery & ds . ds0 . type = TABLE & ds . ds0 . projectId = bigquery - public - data & ds . ds0 . datasetId = samples & ds . ds0 . tableId = shakespeare & ds . ds0 . billingProjectId = myProject A TABLE type configuration to query a date sharded table using the wildcard character suffix: https : //lookerstudio.google.com/reporting/create? c . reportId = 123 abc & ds . ds0 . connector = bigQuery & ds . ds0 . type = TABLE & ds . ds0 . projectId = price - data & ds . ds0 . datasetId = samples & ds . ds0 . tableId = stock A TABLE type configuration to query a date sharded table using the YYYYMMDD suffix: https : //lookerstudio.google.com/reporting/create? c . reportId = 123 abc & ds . ds0 . connector = bigQuery & ds . ds0 . type = TABLE & ds . ds0 . projectId = price - data & ds . ds0 . datasetId = samples & ds . ds0 . tableId = stock YYYYMMDD A TABLE type configuration to query a BigQuery Export for Google Analytics table, using the SESSION fields template: https : //lookerstudio.google.com/reporting/create? c . reportId = 123 abc & ds . ds0 . connector = bigQuery & ds . ds0 . type = TABLE & ds . ds0 . projectId = my - gabq - project & ds . ds0 . datasetId = 1234567 & ds . ds0 . tableId = ga sessions YYYYMMDD & ds . ds0 . gaTemplateLevel = SESSION A TABLE type configuration to query an ingestion time partitioned table and use the partitioning column as a date range dimension: https : //lookerstudio.google.com/reporting/create? c . reportId = 123 abc & ds . ds0 . connector = bigQuery & ds . ds0 . type = TABLE & ds . ds0 . projectId = acme - co - logs & ds . ds0 . datasetId = logs & ds . ds0 . tableId = logs table & ds . ds0 . isPartitioned = true A CUSTOM QUERY type configuration where they query is defined with a SQL statement: https : //lookerstudio.google.com/reporting/create? c . reportId = 123 abc & ds . ds0 . connector = bigQuery & ds . ds0 . type = CUSTOM QUERY & ds . ds0 . projectId = bigquery - public - data & ds . ds0 . sql = SELECT % 20 word % 2 C % 20 word count % 20 FROM % 20 % 60 bigquery - public - data . samples . shakespeare % 60 & ds . ds0 . billingProjectId = myProject A CUSTOM QUERY type configuration where only the SQL statement is updated and the template data source is used for the rest of the configuration: https://lookerstudio.google.com/reporting/create? c.reportId=123abc &ds.ds0.sql=SELECT%20corpus%20FROM%20%60bigquery-public-data.samples.shakespeare%60 A CUSTOM QUERY type configuration where the SQL statement of the template data source is updated using sqlReplace : https://lookerstudio.google.com/reporting/create? c.reportId=123abc &ds.ds0.sqlReplace=bigquery-public-data,new-project,samples,new-dataset The following shows a template query before and after sqlReplace is applied.
- The BigQuery data source configuration is replaced in its entirety, while the Google Analytics configuration updates a single parameter and relies on the ds1 template data source for any unspecified connector parameters: https : //lookerstudio.google.com/reporting/create? c . reportId = 7890 & r . reportName = MyNewReportWithMultipleDataSources & ds . ds0 . datasourceName = MyNewDataSource & ds . ds0 . connector = bigQuery & ds . ds0 . type = TABLE & ds . ds0 . projectId = bigquery - public - data & ds . ds0 . datasetId = samples & ds . ds0 . tableId = shakespeare & ds . ds1 . viewId = 92320289 Create vs Add It can sometimes be useful to have the same data source in multiple reports so updates to the data source affect all reports together.

### Types \_|\_ Integrate and share \_|\_ Google for Developers

- URL: [https://developers.google.com/looker-studio/integrate/api/reference/types](https://developers.google.com/looker-studio/integrate/api/reference/types)
- Source ID: `site-api-reference`
- Final score: 68
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Assets A Looker Studio asset. { "assetType" : AssetType , "updateTime" : Timestamp , "name" : string , "title" : string , "trashed" : boolean , "updateByMeTime" : Timestamp , "owner" : string , "createTime" : Timestamp , "lastViewByMeTime" : Timestamp , "description" : string , "creator" : string } Property name Type Description assetType AssetType The type of asset. updateTime Timestamp Date the asset was last modified. name string The name (ID) of the asset. title string The title of the asset. trashed boolean Indicates if the asset is in the trash. updateByMeTime Timestamp Date the asset was last modified by the user making this API call. owner string The owner of the asset. createTime Timestamp Date the asset was created. lastViewByMeTime Timestamp Date the asset was last viewed by the user making this API call. description string Description of the report (only supported for the REPORT AssetType). creator string The creator of the asset.
- Permissions Looker Studio permissions for an asset. { "permissions" : { [ Role ] : { "members" : Member [] } }, "etag" : string } Property name Type Description permissions { Role : Member[] } A map of role to members. etag string etag to detect and fail concurrent modifications.
- Home Products Looker Studio Integrate Reference Types Stay organized with collections Save and categorize content based on your preferences.
- AssetType The types of Looker Studio assets.

