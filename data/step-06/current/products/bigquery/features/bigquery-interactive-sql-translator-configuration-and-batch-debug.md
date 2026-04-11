---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.678Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery Interactive SQL Translator configuration and batch debug"
feature_slug: "bigquery-interactive-sql-translator-configuration-and-batch-debug"
latest_feature_date: "2023-03-13"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/migration-intro"
  - "https://docs.cloud.google.com/bigquery/docs/locations"
  - "https://docs.cloud.google.com/bigquery/docs/release-notes"
keywords:
  - "translator job debug"
  - "SQL translation settings"
  - "Interactive SQL Translator"
  - "interactive translator"
  - "translation configuration"
  - "Batch SQL Translator"
  - "SQL Translator"
---

# BigQuery Interactive SQL Translator configuration and batch debug

Product: BigQuery
Coverage: LOW

## Step 02 Summary

BigQuery now allows translation configurations in the Interactive SQL Translator, including use for debugging Batch SQL Translator jobs.

## Extended Definition

BigQuery exposes two SQL translation modes in Migration Service: an interactive SQL translator for individual query translation and a batch SQL translator for translating SQL scripts in bulk. The release notes indicate the batch and interactive translators can translate supported SQL dialects (including Apache Impala SQL) into GoogleSQL and improve performance by caching metadata. The provided excerpts, however, do not include explicit details on translation configuration settings or a documented batch translator job debug flow.

## Evidence Summary

The cited Google Cloud pages confirm batch versus interactive SQL translator capabilities, target translation behavior, and regional support, but they do not explicitly document translator configuration options or batch SQL translator debugging.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/migration-intro](https://docs.cloud.google.com/bigquery/docs/migration-intro)
- [https://docs.cloud.google.com/bigquery/docs/locations](https://docs.cloud.google.com/bigquery/docs/locations)
- [https://docs.cloud.google.com/bigquery/docs/release-notes](https://docs.cloud.google.com/bigquery/docs/release-notes)

## Supporting Pages

### Introduction to BigQuery Migration Service \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/migration-intro](https://docs.cloud.google.com/bigquery/docs/migration-intro)
- Source ID: `site-docs-root`
- Final score: 48
- Re-rank relevance: WEAK
- Re-rank rationale: It mentions interactive and batch SQL translation, but does not cover configuration options or batch debug behavior.

Evidence snippets:
- You can use the batch SQL translator to migrate your SQL scripts in bulk, or the interactive SQL translator to translate individual queries.
- For more information on using the interactive SQL translator, see Interactive SQL translator .
- For more information on batch SQL translator, see Batch SQL translator .

### BigQuery locations \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/locations](https://docs.cloud.google.com/bigquery/docs/locations)
- Source ID: `site-docs-root`
- Final score: 32
- Re-rank relevance: N/A

Evidence snippets:
- These include the interactive SQL translator , the SQL translation API , and the batch SQL translator .
- The BigQuery SQL translators are available in the following processing locations: Region description Region name Details Asia Pacific Bangkok asia-southeast3 Delhi asia-south2 Hong Kong asia-east2 Jakarta asia-southeast2 Melbourne australia-southeast2 Mumbai asia-south1 Osaka asia-northeast2 Seoul asia-northeast3 Singapore asia-southeast1 Sydney australia-southeast1 Taiwan asia-east1 Tokyo asia-northeast1 Europe Belgium europe-west1 Low CO 2 Berlin europe-west10 EU multi-region eu Finland europe-north1 Low CO 2 Frankfurt europe-west3 London europe-west2 Low CO 2 Madrid europe-southwest1 Low CO 2 Milan europe-west8 Netherlands europe-west4 Low CO 2 Paris europe-west9 Low CO 2 Stockholm europe-north2 Low CO 2 Turin europe-west12 Warsaw europe-central2 Zürich europe-west6 Low CO 2 Americas Columbus, Ohio us-east5 Dallas us-south1 Low CO 2 Iowa us-central1 Low CO 2 Las Vegas us-west4 Los Angeles us-west2 Mexico northamerica-south1 Northern Virginia us-east4 Oregon us-west1 Low CO 2 Québec northamerica-northeast1 Low CO 2 São Paulo southamerica-east1 Low CO 2 Salt Lake City us-west3 Santiago southamerica-west1 Low CO 2 South Carolina us-east1 Toronto northamerica-northeast2 Low CO 2 US multi-region us Africa Johannesburg africa-south1 MiddleEast Dammam me-central2 Doha me-central1 Israel me-west1 BigQuery continuous query locations The following table lists the regions where continuous queries are supported: Region description Region name Details Americas US multi-region us Columbus us-east5 Dallas us-south1 Low CO 2 Iowa us-central1 Low CO 2 Las Vegas us-west4 Los Angeles us-west2 Mexico northamerica-south1 Montréal northamerica-northeast1 Low CO 2 Northern Virginia us-east4 Oklahoma us-central2 Low CO 2 Oregon us-west1 Low CO 2 Salt Lake City us-west3 Santiago southamerica-west1 Low CO 2 São Paulo southamerica-east1 Low CO 2 South Carolina us-east1 Toronto northamerica-northeast2 Low CO 2 Asia Pacific Delhi asia-south2 Hong Kong asia-east2 Jakarta asia-southeast2 Melbourne australia-southeast2 Mumbai asia-south1 Osaka asia-northeast2 Seoul asia-northeast3 Singapore asia-southeast1 Sydney australia-southeast1 Taiwan asia-east1 Tokyo asia-northeast1 Europe EU multi-region eu Belgium europe-west1 Low CO 2 Berlin europe-west10 Finland europe-north1 Low CO 2 Frankfurt europe-west3 London europe-west2 Low CO 2 Madrid europe-southwest1 Low CO 2 Milan europe-west8 Netherlands europe-west4 Low CO 2 Paris europe-west9 Low CO 2 Stockholm europe-north2 Low CO 2 Turin europe-west12 Warsaw europe-central2 Zurich europe-west6 Low CO 2 Middle East Doha me-central1 Dammam me-central2 Tel Aviv me-west1 Africa Johannesburg africa-south1 BigQuery partition and cluster recommender locations The BigQuery partitioning and clustering recommender generates partition or cluster recommendations to optimize your BigQuery tables.
- BigQuery SQL translator locations When migrating data from your legacy data warehouse into BigQuery, you can use several SQL translators to translate your SQL queries into GoogleSQL or other supported SQL dialects.

### BigQuery release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/release-notes](https://docs.cloud.google.com/bigquery/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 24
- Re-rank relevance: N/A

Evidence snippets:
- Feature You can now use the interactive SQL translator , the translation API , and the batch SQL translator to translate the following SQL dialects into GoogleSQL: Apache Impala SQL GoogleSQL (BigQuery) Impala SQL translation can be used to migrate Cloudera and Apache Hadoop SQL workloads that use Impala as a query engine.
- Feature The batch and interactive translators now caches your metadata, which can improve latency when you run a SQL translation.

