---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:44:17.182Z"
product_name: "Looker Studio"
product_slug: "looker-studio"
feature_name: "Chart titles"
feature_slug: "chart-titles"
latest_feature_date: "2024-05-02"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/looker-studio/integrate/linking-api"
  - "https://docs.cloud.google.com/iam/docs/resource-types-with-policies"
  - "https://docs.cloud.google.com/iam/docs/roles-permissions/androidmanagement"
keywords:
  - "chart"
  - "titles"
  - "charts"
  - "looker"
  - "studio"
  - "can"
  - "now"
  - "have"
---

# Chart titles

Product: Looker Studio
Coverage: MEDIUM

## Step 02 Summary

Charts in Looker Studio can now have configurable titles with styling and positioning controls.

## Extended Definition

Charts in Looker Studio can now have configurable titles with styling and positioning controls.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/looker-studio/integrate/linking-api](https://developers.google.com/looker-studio/integrate/linking-api)
- [https://docs.cloud.google.com/iam/docs/resource-types-with-policies](https://docs.cloud.google.com/iam/docs/resource-types-with-policies)
- [https://docs.cloud.google.com/iam/docs/roles-permissions/androidmanagement](https://docs.cloud.google.com/iam/docs/roles-permissions/androidmanagement)

## Supporting Pages

### Linking API \_|\_ Integrate and share \_|\_ Google for Developers

- URL: [https://developers.google.com/looker-studio/integrate/linking-api](https://developers.google.com/looker-studio/integrate/linking-api)
- Source ID: `site-api-reference`
- Final score: 53
- Re-rank relevance: N/A

Evidence snippets:
- For example, if you have a template with three BigQuery data sources attached, and you want to replace the projectId and datasetId in each one, but preserve the tableId , you could write it as: https://lookerstudio.google.com/reporting/create? c.reportId=7890 &ds.ds1.projectId=client-project &ds.ds1.datasetId=client-dataset &ds.ds2.projectId=client-project &ds.ds2.datasetId=client-dataset &ds.ds3.projectId=client-project &ds.ds3.datasetId=client-dataset Or, with the ds. wildcard, you can use this equivalent url: https://lookerstudio.google.com/reporting/create? c.reportId=7890 &ds. .projectId=client-project &ds. .datasetId=client-dataset Parameters provided to the Linking API that don't use the ds. wildcard are given precedence over ones that are.
- The BigQuery data source configuration is replaced in its entirety, while the Google Analytics configuration updates a single parameter and relies on the ds1 template data source for any unspecified connector parameters: https : //lookerstudio.google.com/reporting/create? c . reportId = 7890 & r . reportName = MyNewReportWithMultipleDataSources & ds . ds0 . datasourceName = MyNewDataSource & ds . ds0 . connector = bigQuery & ds . ds0 . type = TABLE & ds . ds0 . projectId = bigquery - public - data & ds . ds0 . datasetId = samples & ds . ds0 . tableId = shakespeare & ds . ds1 . viewId = 92320289 Create vs Add It can sometimes be useful to have the same data source in multiple reports so updates to the data source affect all reports together.
- Linking API user experience The user follows a Linking API URL, that if configured correctly by the developer, will direct them to a Looker Studio report that allows them to view and interact with data they have access to.
- Examples A TABLE type configuration where the query is defined with a Table ID: https : //lookerstudio.google.com/reporting/create? c . reportId = 123 abc & ds . ds0 . connector = bigQuery & ds . ds0 . type = TABLE & ds . ds0 . projectId = bigquery - public - data & ds . ds0 . datasetId = samples & ds . ds0 . tableId = shakespeare & ds . ds0 . billingProjectId = myProject A TABLE type configuration to query a date sharded table using the wildcard character suffix: https : //lookerstudio.google.com/reporting/create? c . reportId = 123 abc & ds . ds0 . connector = bigQuery & ds . ds0 . type = TABLE & ds . ds0 . projectId = price - data & ds . ds0 . datasetId = samples & ds . ds0 . tableId = stock A TABLE type configuration to query a date sharded table using the YYYYMMDD suffix: https : //lookerstudio.google.com/reporting/create? c . reportId = 123 abc & ds . ds0 . connector = bigQuery & ds . ds0 . type = TABLE & ds . ds0 . projectId = price - data & ds . ds0 . datasetId = samples & ds . ds0 . tableId = stock YYYYMMDD A TABLE type configuration to query a BigQuery Export for Google Analytics table, using the SESSION fields template: https : //lookerstudio.google.com/reporting/create? c . reportId = 123 abc & ds . ds0 . connector = bigQuery & ds . ds0 . type = TABLE & ds . ds0 . projectId = my - gabq - project & ds . ds0 . datasetId = 1234567 & ds . ds0 . tableId = ga sessions YYYYMMDD & ds . ds0 . gaTemplateLevel = SESSION A TABLE type configuration to query an ingestion time partitioned table and use the partitioning column as a date range dimension: https : //lookerstudio.google.com/reporting/create? c . reportId = 123 abc & ds . ds0 . connector = bigQuery & ds . ds0 . type = TABLE & ds . ds0 . projectId = acme - co - logs & ds . ds0 . datasetId = logs & ds . ds0 . tableId = logs table & ds . ds0 . isPartitioned = true A CUSTOM QUERY type configuration where they query is defined with a SQL statement: https : //lookerstudio.google.com/reporting/create? c . reportId = 123 abc & ds . ds0 . connector = bigQuery & ds . ds0 . type = CUSTOM QUERY & ds . ds0 . projectId = bigquery - public - data & ds . ds0 . sql = SELECT % 20 word % 2 C % 20 word count % 20 FROM % 20 % 60 bigquery - public - data . samples . shakespeare % 60 & ds . ds0 . billingProjectId = myProject A CUSTOM QUERY type configuration where only the SQL statement is updated and the template data source is used for the rest of the configuration: https://lookerstudio.google.com/reporting/create? c.reportId=123abc &ds.ds0.sql=SELECT%20corpus%20FROM%20%60bigquery-public-data.samples.shakespeare%60 A CUSTOM QUERY type configuration where the SQL statement of the template data source is updated using sqlReplace : https://lookerstudio.google.com/reporting/create? c.reportId=123abc &ds.ds0.sqlReplace=bigquery-public-data,new-project,samples,new-dataset The following shows a template query before and after sqlReplace is applied.

### "Android Management roles and permissions \_|\_ Identity and Access Management\

- URL: [https://docs.cloud.google.com/iam/docs/roles-permissions/androidmanagement](https://docs.cloud.google.com/iam/docs/roles-permissions/androidmanagement)
- Source ID: `site-iam-reference`
- Final score: 42
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

### "Resource types that accept allow policies \_|\_ Identity and Access Management\

- URL: [https://docs.cloud.google.com/iam/docs/resource-types-with-policies](https://docs.cloud.google.com/iam/docs/resource-types-with-policies)
- Source ID: `site-iam-reference`
- Final score: 42
- Re-rank relevance: N/A

