---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.369Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery catalog federation for Apache Iceberg REST"
feature_slug: "bigquery-catalog-federation-for-apache-iceberg-rest"
latest_feature_date: "2025-10-30"
deprecation_date: ""
coverage_status: "HIGH"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/release-notes"
keywords:
  - "federated Iceberg catalogs"
  - "BigLake metastore federation"
  - "REST catalog federation"
  - "BigQuery catalog federation"
  - "cross-catalog federation"
  - "Apache Iceberg REST"
  - "metastore federation"
  - "catalog federation"
---

# BigQuery catalog federation for Apache Iceberg REST

Product: BigQuery
Coverage: HIGH

## Step 02 Summary

BigLake metastore Apache Iceberg REST now supports catalog federation for BigQuery.

## Extended Definition

BigQuery catalog federation is a capability introduced as part of the Apache Iceberg REST catalog in BigLake metastore, where the catalog federation feature was made generally available on Oct. 30, 2025. It enables a shared/catalog-access model for Iceberg metadata that supports interoperability between query engines (including BigQuery and open-source engines) for accessing Iceberg data in Cloud Storage, although the release notes do not fully document the internal federation workflow.

## Evidence Summary

The release notes confirm GA (Oct 30, 2025) of Apache Iceberg REST catalog features in BigLake metastore, explicitly including BigQuery catalog federation, and describe cross-query-engine interoperability for Iceberg data access.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/release-notes](https://docs.cloud.google.com/bigquery/docs/release-notes)

## Supporting Pages

### BigQuery release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/release-notes](https://docs.cloud.google.com/bigquery/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 24
- Re-rank relevance: N/A

Evidence snippets:
- October 30, 2025 Feature The Apache Iceberg REST catalog in BigLake metastore is now generally available (GA) with several new features, including BigQuery catalog federation, credential vending, and catalog management in the Google Cloud console.
- June 23, 2025 Feature You can now use the Apache Iceberg REST catalog in BigLake metastore to create interoperability between your query engines by allowing your open source engines to access Iceberg data in Cloud Storage.
- September 29, 2025 Feature To simplify access management for your Iceberg tables, you can use credential vending mode with the Apache Iceberg REST catalog in BigLake metastore.

