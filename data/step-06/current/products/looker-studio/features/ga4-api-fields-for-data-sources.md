---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:44:17.227Z"
product_name: "Looker Studio"
product_slug: "looker-studio"
feature_name: "GA4 API fields for data sources"
feature_slug: "ga4-api-fields-for-data-sources"
latest_feature_date: "2023-06-16"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/looker-studio/integrate/linking-api"
  - "https://developers.google.com/looker-studio/connector/manifest"
  - "https://developers.google.com/looker-studio/integrate/api/drive-migration"
keywords:
  - "ga4"
  - "fields"
  - "sources"
  - "analytics"
  - "now"
  - "get"
  - "directly"
---

# GA4 API fields for data sources

Product: Looker Studio
Coverage: MEDIUM

## Step 02 Summary

New Google Analytics 4 data sources now get their fields directly from the GA4 API.

## Extended Definition

New Google Analytics 4 data sources now get their fields directly from the GA4 API.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/looker-studio/integrate/linking-api](https://developers.google.com/looker-studio/integrate/linking-api)
- [https://developers.google.com/looker-studio/connector/manifest](https://developers.google.com/looker-studio/connector/manifest)
- [https://developers.google.com/looker-studio/integrate/api/drive-migration](https://developers.google.com/looker-studio/integrate/api/drive-migration)

## Supporting Pages

### Linking API \_|\_ Integrate and share \_|\_ Google for Developers

- URL: [https://developers.google.com/looker-studio/integrate/linking-api](https://developers.google.com/looker-studio/integrate/linking-api)
- Source ID: `site-api-reference`
- Final score: 90
- Re-rank relevance: N/A

Evidence snippets:
- Examples A TABLE type configuration where the query is defined with a Table ID: https : //lookerstudio.google.com/reporting/create? c . reportId = 123 abc & ds . ds0 . connector = bigQuery & ds . ds0 . type = TABLE & ds . ds0 . projectId = bigquery - public - data & ds . ds0 . datasetId = samples & ds . ds0 . tableId = shakespeare & ds . ds0 . billingProjectId = myProject A TABLE type configuration to query a date sharded table using the wildcard character suffix: https : //lookerstudio.google.com/reporting/create? c . reportId = 123 abc & ds . ds0 . connector = bigQuery & ds . ds0 . type = TABLE & ds . ds0 . projectId = price - data & ds . ds0 . datasetId = samples & ds . ds0 . tableId = stock A TABLE type configuration to query a date sharded table using the YYYYMMDD suffix: https : //lookerstudio.google.com/reporting/create? c . reportId = 123 abc & ds . ds0 . connector = bigQuery & ds . ds0 . type = TABLE & ds . ds0 . projectId = price - data & ds . ds0 . datasetId = samples & ds . ds0 . tableId = stock YYYYMMDD A TABLE type configuration to query a BigQuery Export for Google Analytics table, using the SESSION fields template: https : //lookerstudio.google.com/reporting/create? c . reportId = 123 abc & ds . ds0 . connector = bigQuery & ds . ds0 . type = TABLE & ds . ds0 . projectId = my - gabq - project & ds . ds0 . datasetId = 1234567 & ds . ds0 . tableId = ga sessions YYYYMMDD & ds . ds0 . gaTemplateLevel = SESSION A TABLE type configuration to query an ingestion time partitioned table and use the partitioning column as a date range dimension: https : //lookerstudio.google.com/reporting/create? c . reportId = 123 abc & ds . ds0 . connector = bigQuery & ds . ds0 . type = TABLE & ds . ds0 . projectId = acme - co - logs & ds . ds0 . datasetId = logs & ds . ds0 . tableId = logs table & ds . ds0 . isPartitioned = true A CUSTOM QUERY type configuration where they query is defined with a SQL statement: https : //lookerstudio.google.com/reporting/create? c . reportId = 123 abc & ds . ds0 . connector = bigQuery & ds . ds0 . type = CUSTOM QUERY & ds . ds0 . projectId = bigquery - public - data & ds . ds0 . sql = SELECT % 20 word % 2 C % 20 word count % 20 FROM % 20 % 60 bigquery - public - data . samples . shakespeare % 60 & ds . ds0 . billingProjectId = myProject A CUSTOM QUERY type configuration where only the SQL statement is updated and the template data source is used for the rest of the configuration: https://lookerstudio.google.com/reporting/create? c.reportId=123abc &ds.ds0.sql=SELECT%20corpus%20FROM%20%60bigquery-public-data.samples.shakespeare%60 A CUSTOM QUERY type configuration where the SQL statement of the template data source is updated using sqlReplace : https://lookerstudio.google.com/reporting/create? c.reportId=123abc &ds.ds0.sqlReplace=bigquery-public-data,new-project,samples,new-dataset The following shows a template query before and after sqlReplace is applied.
- The BigQuery data source configuration is replaced in its entirety, while the Google Analytics configuration updates a single parameter and relies on the ds1 template data source for any unspecified connector parameters: https : //lookerstudio.google.com/reporting/create? c . reportId = 7890 & r . reportName = MyNewReportWithMultipleDataSources & ds . ds0 . datasourceName = MyNewDataSource & ds . ds0 . connector = bigQuery & ds . ds0 . type = TABLE & ds . ds0 . projectId = bigquery - public - data & ds . ds0 . datasetId = samples & ds . ds0 . tableId = shakespeare & ds . ds1 . viewId = 92320289 Create vs Add It can sometimes be useful to have the same data source in multiple reports so updates to the data source affect all reports together.
- The URL above can be simplified to the following: https : //lookerstudio.google.com/reporting/create? c . reportId = 12345 & r . reportName = MyNewReport & ds . datasourceName = MyNewDataSource & ds . connector = bigQuery & ds . type = TABLE & ds . projectId = bigquery - public - data & ds . datasetId = samples & ds . tableId = shakespeare Configures a report with a single BigQuery data source ( ds0 ) and updates only the billing project ID of the data source: https://lookerstudio.google.com/reporting/create? c.reportId=12345 &r.reportName=MyNewReport &ds.ds0.billingProjectId=my-billing-project Configures a report with two data sources, a BigQuery data source ( ds0 ) and a Google Analytics data source ( ds1 ).
- Set to true to use the data source configuration specified via the Linking API to refresh data source fields and update report components with new field selections. true is typically specified when switching the connector type or for connector types where a configuration change yields different fields (e.g. fields for BigQuery data sources often change with different table configurations).

### "Migrating from the Drive API \_|\_ Integrate and share \_|\_ Google for\

- URL: [https://developers.google.com/looker-studio/integrate/api/drive-migration](https://developers.google.com/looker-studio/integrate/api/drive-migration)
- Source ID: `site-api-reference`
- Final score: 84
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

### Manifest Reference \_|\_ Community Connectors \_|\_ Google for Developers

- URL: [https://developers.google.com/looker-studio/connector/manifest](https://developers.google.com/looker-studio/connector/manifest)
- Source ID: `site-docs-reference-required-3`
- Final score: 73
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Create your account at https://hooli.xyz/signup" , "shortDescription" : "Connect to your data using Nucleus middle out optimization" , "privacyPolicyUrl" : "https://hooli.xyz/privacy" , "termsOfServiceUrl" : "https://hooli.xyz/tos" , "authType" : [ "NONE" ], "feeType" : [ "PAID" ], "sources" : [ "HOOLI CHAT LOG" , "ENDFRAME SERVER STREAM" , "RETINABYTE USER ANALYTICS" ], "templates" : { "default" : "872223s89f5fdkjnd983kjf" } }, "urlFetchWhitelist" : [ "https://api.hooli.xyz/" , "https://hooli.xyz/" ] } Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- See the guide on Providing report templates . forceViewersCredentials boolean Whether or not viewer's credentials should be forced for data sources created from this connector.
- It includes required fields like connector name, company details, URLs, description, and optional fields for enhanced functionality and user experience.
- The manifest supports specifying authentication type, fee type, data sources, and report templates, allowing for customization and integration.

