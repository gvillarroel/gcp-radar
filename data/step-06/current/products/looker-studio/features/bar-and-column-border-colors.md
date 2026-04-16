---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:44:17.223Z"
product_name: "Looker Studio"
product_slug: "looker-studio"
feature_name: "Bar and column border colors"
feature_slug: "bar-and-column-border-colors"
latest_feature_date: "2023-06-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/looker-studio/integrate/linking-api"
  - "https://developers.google.com/looker-studio/integrate/api/reference/assets/search"
  - "https://docs.cloud.google.com/iam/docs/federated-identity-supported-services"
keywords:
  - "bar"
  - "column"
  - "border"
  - "colors"
  - "combo"
  - "charts"
  - "let"
  - "users"
---

# Bar and column border colors

Product: Looker Studio
Coverage: MEDIUM

## Step 02 Summary

Bar and combo charts let users set a custom border color for bars and columns.

## Extended Definition

Bar and combo charts let users set a custom border color for bars and columns.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/looker-studio/integrate/linking-api](https://developers.google.com/looker-studio/integrate/linking-api)
- [https://developers.google.com/looker-studio/integrate/api/reference/assets/search](https://developers.google.com/looker-studio/integrate/api/reference/assets/search)
- [https://docs.cloud.google.com/iam/docs/federated-identity-supported-services](https://docs.cloud.google.com/iam/docs/federated-identity-supported-services)

## Supporting Pages

### Linking API \_|\_ Integrate and share \_|\_ Google for Developers

- URL: [https://developers.google.com/looker-studio/integrate/linking-api](https://developers.google.com/looker-studio/integrate/linking-api)
- Source ID: `site-api-reference`
- Final score: 69
- Re-rank relevance: N/A

Evidence snippets:
- Examples A TABLE type configuration where the query is defined with a Table ID: https : //lookerstudio.google.com/reporting/create? c . reportId = 123 abc & ds . ds0 . connector = bigQuery & ds . ds0 . type = TABLE & ds . ds0 . projectId = bigquery - public - data & ds . ds0 . datasetId = samples & ds . ds0 . tableId = shakespeare & ds . ds0 . billingProjectId = myProject A TABLE type configuration to query a date sharded table using the wildcard character suffix: https : //lookerstudio.google.com/reporting/create? c . reportId = 123 abc & ds . ds0 . connector = bigQuery & ds . ds0 . type = TABLE & ds . ds0 . projectId = price - data & ds . ds0 . datasetId = samples & ds . ds0 . tableId = stock A TABLE type configuration to query a date sharded table using the YYYYMMDD suffix: https : //lookerstudio.google.com/reporting/create? c . reportId = 123 abc & ds . ds0 . connector = bigQuery & ds . ds0 . type = TABLE & ds . ds0 . projectId = price - data & ds . ds0 . datasetId = samples & ds . ds0 . tableId = stock YYYYMMDD A TABLE type configuration to query a BigQuery Export for Google Analytics table, using the SESSION fields template: https : //lookerstudio.google.com/reporting/create? c . reportId = 123 abc & ds . ds0 . connector = bigQuery & ds . ds0 . type = TABLE & ds . ds0 . projectId = my - gabq - project & ds . ds0 . datasetId = 1234567 & ds . ds0 . tableId = ga sessions YYYYMMDD & ds . ds0 . gaTemplateLevel = SESSION A TABLE type configuration to query an ingestion time partitioned table and use the partitioning column as a date range dimension: https : //lookerstudio.google.com/reporting/create? c . reportId = 123 abc & ds . ds0 . connector = bigQuery & ds . ds0 . type = TABLE & ds . ds0 . projectId = acme - co - logs & ds . ds0 . datasetId = logs & ds . ds0 . tableId = logs table & ds . ds0 . isPartitioned = true A CUSTOM QUERY type configuration where they query is defined with a SQL statement: https : //lookerstudio.google.com/reporting/create? c . reportId = 123 abc & ds . ds0 . connector = bigQuery & ds . ds0 . type = CUSTOM QUERY & ds . ds0 . projectId = bigquery - public - data & ds . ds0 . sql = SELECT % 20 word % 2 C % 20 word count % 20 FROM % 20 % 60 bigquery - public - data . samples . shakespeare % 60 & ds . ds0 . billingProjectId = myProject A CUSTOM QUERY type configuration where only the SQL statement is updated and the template data source is used for the rest of the configuration: https://lookerstudio.google.com/reporting/create? c.reportId=123abc &ds.ds0.sql=SELECT%20corpus%20FROM%20%60bigquery-public-data.samples.shakespeare%60 A CUSTOM QUERY type configuration where the SQL statement of the template data source is updated using sqlReplace : https://lookerstudio.google.com/reporting/create? c.reportId=123abc &ds.ds0.sqlReplace=bigquery-public-data,new-project,samples,new-dataset The following shows a template query before and after sqlReplace is applied.
- Example A Search Console configuration for a URL-prefix property : https://lookerstudio.google.com/reporting/create? c.reportId=161718pqr &ds.ds5.connector=searchConsole &ds.ds5.siteUrl=https%3A%2F%2Fwww.example.com%2Fwelcome &ds.ds5.tableType=SITE IMPRESSION &ds.ds5.searchType=WEB A Search Console configuration for a Domain property : https://lookerstudio.google.com/reporting/create? c.reportId=161718pqr ds.ds5.connector=searchConsole &ds.ds5.siteUrl=sc-domain%3Aexample.com &ds.ds5.tableType=SITE IMPRESSION &ds.ds5.searchType=WEB Template permissions To ensure the best user experience for users, it's important to correctly set report access permissions for your template report and associated data sources.
- If the Linking API is used to provide a new data source configuration that yields the exact same fields, there are two outcomes based on the value of the refreshFields parameter: If set to true , the field configuration from the template data source will not carry-over, and charts may potentially fail to load if they depend on the same field configuration (i.e. a field of type Year is expected).
- If set to false , the field configuration from the template data source will carry-over to the new data source and report charts will receive the same fields with the same configuration and load successfully.

### Assets: search \_|\_ Integrate and share \_|\_ Google for Developers

- URL: [https://developers.google.com/looker-studio/integrate/api/reference/assets/search](https://developers.google.com/looker-studio/integrate/api/reference/assets/search)
- Source ID: `site-api-reference`
- Final score: 58
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

### "Identity federation: products and limitations \_|\_ Identity and Access\

- URL: [https://docs.cloud.google.com/iam/docs/federated-identity-supported-services](https://docs.cloud.google.com/iam/docs/federated-identity-supported-services)
- Source ID: `site-iam-reference`
- Final score: 51
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Google Cloud API: No known limitations Other: No known limitations Identity-Aware Proxy GA Console (federated): In the Applications tab, the Method column is disabled, and users cannot use external identities for authorization.
- Google Cloud API: No known limitations Other: The following features don't support Workforce Identity Federation with BigQuery: Connected Sheets Google Drive Recommendations Slot estimator The following operations don't support Workforce Identity Federation: Loading data from Amazon S3 , Apache Spark , or Azure Blob Storage through the Connection API Loading data from Google Drive Bigtable GA Console (federated): No known limitations Google Cloud API: No known limitations Other: No known limitations Binary Authorization GA Console (federated): No known limitations Google Cloud API: No known limitations Other: No known limitations Blockchain Analytics GA Console (federated): No known limitations Google Cloud API: No known limitations Other: No known limitations Blockchain Node Engine GA Console (federated): No known limitations Google Cloud API: No known limitations Other: No known limitations Carbon Footprint GA Console (federated): No known limitations Google Cloud API: No known limitations Other: No known limitations Certificate Authority Service GA Console (federated): No known limitations Google Cloud API: No known limitations Other: No known limitations Certificate Manager GA Console (federated): No known limitations Google Cloud API: No known limitations Other: No known limitations Channel Services GA Console (federated): No known limitations Google Cloud API: No known limitations Other: No known limitations Cloud Asset Inventory GA Console (federated): In the IAM policy tab, the Analyze Full Access button is unavailable for Workforce Identity Federation users.
- Google Cloud API: No known limitations Other: No known limitations Network Service Tiers GA Console (federated): No known limitations Google Cloud API: No known limitations Other: No known limitations Organization Policy Service GA Console (federated): No known limitations Google Cloud API: No known limitations Other: No known limitations Parallelstore GA Console (federated): No known limitations Google Cloud API: No known limitations Other: No known limitations Personalized Service Health GA Console (federated): No known limitations Google Cloud API: No known limitations Other: No known limitations Policy Intelligence GA Console (federated): The following Policy Intelligence features have limitations for Workforce Identity Federation users who use the Google Cloud Workforce Identity Federation console: Policy Troubleshooter : Workforce Identity Federation users can't troubleshoot access in the console (federated).
- Google Cloud API: The following methods don't support identity federtation: UpdateCatalog ImportCompletionData TuneModel ImportProducts PurgeProducts ImportUserEvents ImportUserEvents PurgeUserEvents RejoinUserEvents Other: No known limitations Secret Manager GA Console (federated): No known limitations Google Cloud API: No known limitations Other: No known limitations Secure Source Manager GA Console (federated): No known limitations Google Cloud API: Identity federation users must sign in through the Secure Source Manager instance web interface before running any of the following commands: Git CLI commands API calls to data plane endpoints Identity federation users must sign in through the Secure Source Manager instance web interface after every session expiry to continue using Git SSH CLI commands with user SSH keys.

