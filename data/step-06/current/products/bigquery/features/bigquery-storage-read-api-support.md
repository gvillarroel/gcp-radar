---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.447Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery Storage Read API support"
feature_slug: "bigquery-storage-read-api-support"
latest_feature_date: "2025-03-31"
deprecation_date: ""
coverage_status: "HIGH"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/storage"
  - "https://docs.cloud.google.com/bigquery/docs/reference/storage/rpc"
  - "https://docs.cloud.google.com/bigquery/docs/reference/odbc-jdbc-drivers"
keywords:
  - "Read API endpoint"
  - "BigQuery Storage Read API"
  - "BigQuery Storage API read"
  - "read session"
  - "Storage Read API"
  - "read rows"
  - "Storage Read"
---

# BigQuery Storage Read API support

Product: BigQuery
Coverage: HIGH

## Step 02 Summary

BigQuery now supports the BigQuery Storage Read API.

## Extended Definition

The BigQuery Storage Read API is an API-based read path for BigQuery table data that uses an RPC protocol to access BigQuery-managed storage with improved performance. It is used by creating a read session (and associated streams) and then reading table rows via API calls such as ReadRows, with client libraries recommended for API access. The Simba ODBC/JDBC drivers can use this API as an alternative high-throughput read option to the standard BigQuery API, and that mode requires the BigQuery Read Session User (roles/bigquery.readSessionUser) permission.

## Evidence Summary

These pages collectively confirm the feature’s read-session workflow, core RPC methods (for example, CreateReadSession and ReadRows), and driver-level use as a high-throughput read option with required IAM role.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/storage](https://docs.cloud.google.com/bigquery/docs/reference/storage)
- [https://docs.cloud.google.com/bigquery/docs/reference/storage/rpc](https://docs.cloud.google.com/bigquery/docs/reference/storage/rpc)
- [https://docs.cloud.google.com/bigquery/docs/reference/odbc-jdbc-drivers](https://docs.cloud.google.com/bigquery/docs/reference/odbc-jdbc-drivers)

## Supporting Pages

### "Use the BigQuery Storage Read API to read table data \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/storage](https://docs.cloud.google.com/bigquery/docs/reference/storage)
- Source ID: `site-docs-reference`
- Final score: 142
- Re-rank relevance: STRONG
- Re-rank rationale: The page is explicitly about the BigQuery Storage Read API and describes how it works, its key capabilities, and its role in reading table data.

Evidence snippets:
- Use the BigQuery Storage Read API to read table data The BigQuery Storage Read API provides fast access to BigQuery-managed storage by using an rpc-based protocol.
- The BigQuery Storage Read API provides a third option that represents an improvement over prior options.
- Create a session Storage Read API usage begins with the creation of a read session.
- If you're working in an older version of the Storage Read API, then use the appropriate version of Arrow as follows: v1beta1: Arrow 0.14 and earlier v1: Arrow 0.15 and later Regardless of API version, to access API functions, we recommend that you use the BigQuery Storage API client libraries .

### BigQuery Storage API \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/storage/rpc](https://docs.cloud.google.com/bigquery/docs/reference/storage/rpc)
- Source ID: `site-docs-reference`
- Final score: 42
- Re-rank relevance: STRONG
- Re-rank rationale: The page directly documents BigQueryRead RPCs, confirming BigQuery Storage Read API availability and capabilities.

Evidence snippets:
- Service: bigquerystorage.googleapis.com The Service name bigquerystorage.googleapis.com is needed to create RPC client stubs. google.cloud.bigquery.storage.v1.BigQueryRead Methods CreateReadSession Creates a new read session.
- SplitReadStream Splits a given read stream into two Streams. google.cloud.bigquery.storage.v1beta2.BigQueryRead Methods CreateReadSession Creates a new read session.
- ReadRows Reads rows from the table in the format prescribed by the read session.
- CreateReadSession Creates a new read session.

### Use the Simba ODBC and JDBC drivers for BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/odbc-jdbc-drivers](https://docs.cloud.google.com/bigquery/docs/reference/odbc-jdbc-drivers)
- Source ID: `site-docs-reference`
- Final score: 42
- Re-rank relevance: MODERATE
- Re-rank rationale: The page notes that Simba drivers can use the High-Throughput API (BigQuery Storage Read API) and details required IAM roles and permissions.

Evidence snippets:
- Before you begin When you use the Simba ODBC and JDBC drivers for BigQuery, you have the option to read data with the BigQuery Storage Read API, instead of with the standard BigQuery API.
- BigQuery Storage Read API pricing for data reads of large result sets, if your driver uses the High-Throughput API feature.
- Required roles for the High-Throughput API To get the permissions that you need to use the High-Throughput API, ask your administrator to grant you the BigQuery Read Session User ( roles/bigquery.readSessionUser ) IAM role on your BigQuery project.

