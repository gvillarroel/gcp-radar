---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.609Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery CDC via Storage Write API"
feature_slug: "bigquery-cdc-via-storage-write-api"
latest_feature_date: "2023-10-31"
deprecation_date: ""
coverage_status: "HIGH"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/release-notes"
  - "https://docs.cloud.google.com/bigquery/docs/loading-data"
  - "https://docs.cloud.google.com/bigquery/docs/troubleshoot-quotas"
keywords:
  - "real-time change ingestion"
  - "change data capture"
  - "streamed changes"
  - "write API CDC"
  - "apply changes"
  - "BigQuery CDC"
  - "Storage Write API"
  - "CDC"
---

# BigQuery CDC via Storage Write API

Product: BigQuery
Coverage: HIGH

## Step 02 Summary

BigQuery supports change data capture by processing and applying streamed changes in real time to existing data through the Storage Write API.

## Extended Definition

BigQuery Change Data Capture (CDC) is a data loading method that replicates database row-level changes into BigQuery in near real time, including use through the BigQuery Storage Write API. It also supports managing ordering for streamed UPSERT updates via a Change Sequence Number in CDC streams, and the feature is referenced as BigQuery change data capture ingestion.

## Evidence Summary

The cited pages confirm CDC is a near-real-time change replication path, that CDC can be used directly with BigQuery Storage Write API, and that CDC streaming UPSERT ordering is supported via change sequence numbers.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/release-notes](https://docs.cloud.google.com/bigquery/docs/release-notes)
- [https://docs.cloud.google.com/bigquery/docs/loading-data](https://docs.cloud.google.com/bigquery/docs/loading-data)
- [https://docs.cloud.google.com/bigquery/docs/troubleshoot-quotas](https://docs.cloud.google.com/bigquery/docs/troubleshoot-quotas)

## Supporting Pages

### BigQuery release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/release-notes](https://docs.cloud.google.com/bigquery/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 40
- Re-rank relevance: N/A

Evidence snippets:
- Feature You can now define a CHANGE SEQUENCE NUMBER for BigQuery change data capture (CDC) to manage streaming UPSERT ordering for BigQuery.
- November 03, 2025 Libraries Go 1.72.0 (2025-10-28) Features bigquery/reservation: Add new BACKGROUND CHANGE DATA CAPTURE , BACKGROUND COLUMN METADATA INDEX , and BACKGROUND SEARCH INDEX REFRESH reservation assignment types ( 182df61 ) bigquery/reservation: Add new reservation IAM policy get/set/test methods ( 182df61 ) bigquery/reservation: Add support for creation and modification of new reservation groups ( 182df61 ) bigquery: Expose continuous query in config ( #13130 ) ( 2f0942b ) Bug Fixes bigquery/v2: Upgrade gRPC service registration func ( 8fffca2 ) bigquery: Upgrade gRPC service registration func ( 8fffca2 ) October 31, 2025 Feature We have increased the row capacity for pivot tables backed by BigQuery in Connected Sheets from 100,000 to 200,000 rows.
- January 27, 2025 Libraries Python 3.29.0 (2025-01-21) Features Add ExternalCatalogTableOptions class and tests ( #2116 ) ( cdc1a6e ) Bug Fixes Add default value in SchemaField.from api repr() ( #2115 ) ( 7de6822 ) Libraries Go 1.66.0 (2025-01-20) Features bigquery/storage/managedwriter: Graceful connection drains ( #11463 ) ( b29912f ) Bug Fixes bigquery: Update golang.org/x/net to v0.33.0 ( e9b0b69 ) Feature You can now set conditional IAM access on BigQuery datasets with access control lists (ACLs).
- January 28, 2026 Change The BigQuery change data capture feature has been renamed to BigQuery change data capture ingestion .

### Introduction to loading data \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/loading-data](https://docs.cloud.google.com/bigquery/docs/loading-data)
- Source ID: `site-docs-root`
- Final score: 28
- Re-rank relevance: N/A

Evidence snippets:
- Change Data Capture (CDC) This method enables replicating data from databases to BigQuery in near real time.
- Datastream leverages CDC capabilities to track and replicate row-level changes from your data sources.
- You can also directly use the BigQuery Storage Write API .

### Troubleshoot quota and limit errors \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/troubleshoot-quotas](https://docs.cloud.google.com/bigquery/docs/troubleshoot-quotas)
- Source ID: `site-docs-root`
- Final score: 26
- Re-rank relevance: N/A

Evidence snippets:
- You might also want to consider replacing streaming inserts with the newer Storage Write API , which has higher throughput, lower price, and many useful features.
- To learn about limits and quotas, see Storage Write API and to see costs of using this API, see BigQuery data ingestion pricing .
- To learn about limits and quotas, see Storage Write API and to see costs of using this API, see BigQuery data ingestion pricing .
- To learn about limits and quotas, see Storage Write API and to see costs of using this API, see BigQuery data ingestion pricing .

