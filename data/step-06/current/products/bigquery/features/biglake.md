---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.744Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigLake"
feature_slug: "biglake"
latest_feature_date: "2022-04-07"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-bigquery/latest/com.google.cloud.bigquery.BigLakeConfiguration"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-bigquery/latest/com.google.cloud.bigquery.BigLakeConfiguration.Builder"
  - "https://docs.cloud.google.com/python/docs/reference/bigquery/latest/google.cloud.bigquery.enums.BigLakeFileFormat"
keywords:
  - "fine-grained column access"
  - "cross-cloud data lake"
  - "column-level access control"
  - "row-level access control"
  - "BigLake storage engine"
  - "federated data source"
  - "BigLake catalog"
  - "BigQuery BigLake"
---

# BigLake

Product: BigQuery
Coverage: LOW

## Step 02 Summary

BigLake introduces a storage engine for querying and unifying cross-cloud data lakes and warehouses from BigQuery, with fine-grained column and row access control.

## Extended Definition

BigLake in BigQuery is represented in Google’s client libraries by a `BigLakeConfiguration` type, with a `BigLakeConfiguration.Builder` that exposes setters for `connectionId`, `fileFormat`, `storageUri`, and `tableFormat`, and a `build()` method to produce a `BigLakeConfiguration` instance. The Java API also exposes `BigLakeConfiguration.newBuilder()` and `toBuilder()` for creating and reusing configuration objects. The provided Python reference confirms a `BigLakeFileFormat` enum type exists, but does not provide its enum values or broader BigLake behavior details in these excerpts.

## Evidence Summary

These pages offer limited client-library API surface evidence (class/method/enum names) for BigLake configuration in BigQuery but do not substantiate broader BigLake product capabilities.

## Source Links

- [https://docs.cloud.google.com/java/docs/reference/google-cloud-bigquery/latest/com.google.cloud.bigquery.BigLakeConfiguration](https://docs.cloud.google.com/java/docs/reference/google-cloud-bigquery/latest/com.google.cloud.bigquery.BigLakeConfiguration)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-bigquery/latest/com.google.cloud.bigquery.BigLakeConfiguration.Builder](https://docs.cloud.google.com/java/docs/reference/google-cloud-bigquery/latest/com.google.cloud.bigquery.BigLakeConfiguration.Builder)
- [https://docs.cloud.google.com/python/docs/reference/bigquery/latest/google.cloud.bigquery.enums.BigLakeFileFormat](https://docs.cloud.google.com/python/docs/reference/bigquery/latest/google.cloud.bigquery.enums.BigLakeFileFormat)

## Supporting Pages

### "Class BigLakeConfiguration (2.62.0) \_|\_ Java client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-bigquery/latest/com.google.cloud.bigquery.BigLakeConfiguration](https://docs.cloud.google.com/java/docs/reference/google-cloud-bigquery/latest/com.google.cloud.bigquery.BigLakeConfiguration)
- Source ID: `site-java-reference`
- Final score: 50
- Re-rank relevance: N/A

### "Class BigLakeConfiguration.Builder (2.62.0) \_|\_ Java client libraries\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-bigquery/latest/com.google.cloud.bigquery.BigLakeConfiguration.Builder](https://docs.cloud.google.com/java/docs/reference/google-cloud-bigquery/latest/com.google.cloud.bigquery.BigLakeConfiguration.Builder)
- Source ID: `site-java-reference`
- Final score: 50
- Re-rank relevance: N/A

### "Class BigLakeFileFormat (3.40.1) \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/bigquery/latest/google.cloud.bigquery.enums.BigLakeFileFormat](https://docs.cloud.google.com/python/docs/reference/bigquery/latest/google.cloud.bigquery.enums.BigLakeFileFormat)
- Source ID: `site-python-reference`
- Final score: 44
- Re-rank relevance: N/A

