---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.643Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery Storage Write API v1beta2 package"
feature_slug: "bigquery-storage-write-api-v1beta2-package"
latest_feature_date: "2023-07-17"
deprecation_date: "2024-07-17"
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/storage/rpc"
keywords:
  - "BigQueryWrite v1beta2"
  - "deprecate v1beta2"
  - "v1beta2 to v1 migration"
  - "google.cloud.bigquery.storage.v1beta2"
  - "deprecated storage write package"
  - "google.cloud.bigquery.storage.v1"
  - "migrate to v1"
  - "Storage Write API package"
---

# BigQuery Storage Write API v1beta2 package

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

The google.cloud.bigquery.storage.v1beta2 API package for BigQueryWrite is deprecated, with migration recommended to google.cloud.bigquery.storage.v1; deprecated on 2024-07-17.

## Extended Definition

The BigQuery Storage Write API v1beta2 feature is the `google.cloud.bigquery.storage.v1beta2.BigQueryWrite` API surface in the BigQuery Storage RPC reference, which includes write-stream operations (for example, append and stream-creation/commit methods). In the referenced documentation, this v1beta2 `BigQueryWrite` item is explicitly marked as deprecated, and its listed methods are shown as deprecated. A `google.cloud.bigquery.storage.v1.BigQueryWrite` package is also documented in the same reference, but the excerpt does not provide an explicit deprecation date or a stated migration deadline.

## Evidence Summary

The official RPC reference confirms the existence of both v1beta2 and v1 BigQueryStorage Write API surfaces and explicitly marks the v1beta2 `BigQueryWrite` API and its methods as deprecated.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/storage/rpc](https://docs.cloud.google.com/bigquery/docs/reference/storage/rpc)

## Supporting Pages

### BigQuery Storage API \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/storage/rpc](https://docs.cloud.google.com/bigquery/docs/reference/storage/rpc)
- Source ID: `site-docs-reference`
- Final score: 56
- Re-rank relevance: STRONG
- Re-rank rationale: The page explicitly marks the v1beta2 BigQueryWrite entry as deprecated and shows its method set, which is key evidence for that package’s deprecation.

Evidence snippets:
- SplitReadStream Splits a given read stream into two Streams. google.cloud.bigquery.storage.v1beta2.BigQueryRead Methods CreateReadSession Creates a new read session.
- SplitReadStream Splits a given ReadStream into two ReadStream objects. google.cloud.bigquery.storage.v1beta2.BigQueryWrite This item is deprecated!
- Service: bigquerystorage.googleapis.com The Service name bigquerystorage.googleapis.com is needed to create RPC client stubs. google.cloud.bigquery.storage.v1.BigQueryRead Methods CreateReadSession Creates a new read session.
- GetWriteStream Gets information about a write stream. google.cloud.bigquery.storage.v1beta1.BigQueryStorage Methods BatchCreateReadSessionStreams Creates additional streams for a ReadSession.

