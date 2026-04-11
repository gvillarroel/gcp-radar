---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.361Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery batch SQL translator"
feature_slug: "bigquery-batch-sql-translator"
latest_feature_date: "2025-11-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/migration-intro"
  - "https://docs.cloud.google.com/bigquery/docs/locations"
keywords:
  - "batch SQL dialect converter"
  - "IBM DB2 conversion"
  - "dialect-to-GoogleSQL conversion"
  - "SQLite SQL translator"
  - "GoogleSQL conversion tool"
  - "Greenplum to GoogleSQL"
  - "batch SQL translator"
  - "SQL translator"
---

# BigQuery batch SQL translator

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery includes a batch SQL translator to convert external SQL dialects into GoogleSQL; The BigQuery batch SQL translator provides dialect-to-GoogleSQL conversion for IBM DB2, Greenplum, and SQLite workloads.

## Extended Definition

The BigQuery batch SQL translator is one of BigQuery Migration Service’s SQL translation offerings and is used to migrate SQL scripts in bulk. It is part of BigQuery’s SQL translation services, which automate conversion of SQL queries into GoogleSQL (and other supported SQL dialects), and is listed alongside the interactive SQL translator and SQL translation API. The service is also described in the context of migration from legacy data warehouses and is available only in BigQuery SQL translator processing locations.

## Evidence Summary

The cited pages confirm that BigQuery includes a batch SQL translation path for bulk script migration, that it converts queries to GoogleSQL (plus other supported dialects), and that SQL translators are region-bound.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/migration-intro](https://docs.cloud.google.com/bigquery/docs/migration-intro)
- [https://docs.cloud.google.com/bigquery/docs/locations](https://docs.cloud.google.com/bigquery/docs/locations)

## Supporting Pages

### Introduction to BigQuery Migration Service \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/migration-intro](https://docs.cloud.google.com/bigquery/docs/migration-intro)
- Source ID: `site-docs-root`
- Final score: 60
- Re-rank relevance: STRONG
- Re-rank rationale: The page explicitly defines the batch SQL translator as a supported feature for bulk SQL migration to GoogleSQL.

Evidence snippets:
- You can use the batch SQL translator to migrate your SQL scripts in bulk, or the interactive SQL translator to translate individual queries.
- For more information on batch SQL translator, see Batch SQL translator .
- For more information on using the interactive SQL translator, see Interactive SQL translator .

### BigQuery locations \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/locations](https://docs.cloud.google.com/bigquery/docs/locations)
- Source ID: `site-docs-root`
- Final score: 28
- Re-rank relevance: N/A

Evidence snippets:
- These include the interactive SQL translator , the SQL translation API , and the batch SQL translator .
- The BigQuery SQL translators are available in the following processing locations: Region description Region name Details Asia Pacific Bangkok asia-southeast3 Delhi asia-south2 Hong Kong asia-east2 Jakarta asia-southeast2 Melbourne australia-southeast2 Mumbai asia-south1 Osaka asia-northeast2 Seoul asia-northeast3 Singapore asia-southeast1 Sydney australia-southeast1 Taiwan asia-east1 Tokyo asia-northeast1 Europe Belgium europe-west1 Low CO 2 Berlin europe-west10 EU multi-region eu Finland europe-north1 Low CO 2 Frankfurt europe-west3 London europe-west2 Low CO 2 Madrid europe-southwest1 Low CO 2 Milan europe-west8 Netherlands europe-west4 Low CO 2 Paris europe-west9 Low CO 2 Stockholm europe-north2 Low CO 2 Turin europe-west12 Warsaw europe-central2 Zürich europe-west6 Low CO 2 Americas Columbus, Ohio us-east5 Dallas us-south1 Low CO 2 Iowa us-central1 Low CO 2 Las Vegas us-west4 Los Angeles us-west2 Mexico northamerica-south1 Northern Virginia us-east4 Oregon us-west1 Low CO 2 Québec northamerica-northeast1 Low CO 2 São Paulo southamerica-east1 Low CO 2 Salt Lake City us-west3 Santiago southamerica-west1 Low CO 2 South Carolina us-east1 Toronto northamerica-northeast2 Low CO 2 US multi-region us Africa Johannesburg africa-south1 MiddleEast Dammam me-central2 Doha me-central1 Israel me-west1 BigQuery continuous query locations The following table lists the regions where continuous queries are supported: Region description Region name Details Americas US multi-region us Columbus us-east5 Dallas us-south1 Low CO 2 Iowa us-central1 Low CO 2 Las Vegas us-west4 Los Angeles us-west2 Mexico northamerica-south1 Montréal northamerica-northeast1 Low CO 2 Northern Virginia us-east4 Oklahoma us-central2 Low CO 2 Oregon us-west1 Low CO 2 Salt Lake City us-west3 Santiago southamerica-west1 Low CO 2 São Paulo southamerica-east1 Low CO 2 South Carolina us-east1 Toronto northamerica-northeast2 Low CO 2 Asia Pacific Delhi asia-south2 Hong Kong asia-east2 Jakarta asia-southeast2 Melbourne australia-southeast2 Mumbai asia-south1 Osaka asia-northeast2 Seoul asia-northeast3 Singapore asia-southeast1 Sydney australia-southeast1 Taiwan asia-east1 Tokyo asia-northeast1 Europe EU multi-region eu Belgium europe-west1 Low CO 2 Berlin europe-west10 Finland europe-north1 Low CO 2 Frankfurt europe-west3 London europe-west2 Low CO 2 Madrid europe-southwest1 Low CO 2 Milan europe-west8 Netherlands europe-west4 Low CO 2 Paris europe-west9 Low CO 2 Stockholm europe-north2 Low CO 2 Turin europe-west12 Warsaw europe-central2 Zurich europe-west6 Low CO 2 Middle East Doha me-central1 Dammam me-central2 Tel Aviv me-west1 Africa Johannesburg africa-south1 BigQuery partition and cluster recommender locations The BigQuery partitioning and clustering recommender generates partition or cluster recommendations to optimize your BigQuery tables.
- BigQuery SQL translator locations When migrating data from your legacy data warehouse into BigQuery, you can use several SQL translators to translate your SQL queries into GoogleSQL or other supported SQL dialects.

