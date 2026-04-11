---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.388Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery credential vending mode for Apache Iceberg REST catalog"
feature_slug: "bigquery-credential-vending-mode-for-apache-iceberg-rest-catalog"
latest_feature_date: "2025-09-29"
deprecation_date: ""
coverage_status: "HIGH"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/release-notes"
keywords:
  - "Cloud Storage permissionless access"
  - "credential vending mode"
  - "credential vending"
  - "Iceberg catalog authentication"
  - "REST catalog credentials"
  - "Apache Iceberg REST catalog"
  - "REST catalog mode"
  - "BigLake metastore"
---

# BigQuery credential vending mode for Apache Iceberg REST catalog

Product: BigQuery
Coverage: HIGH

## Step 02 Summary

BigQuery now supports credential vending mode for the Apache Iceberg REST catalog in BigLake metastore to simplify access without direct Cloud Storage bucket permissions.

## Extended Definition

Credential vending mode is a BigQuery capability in BigLake metastore’s Apache Iceberg REST catalog that allows users to simplify access management for Iceberg tables. The feature was announced as part of BigQuery release updates and is included in the Apache Iceberg REST catalog feature set that reached generally available status on October 30, 2025.

## Evidence Summary

The BigQuery release notes entries explicitly state that credential vending was introduced for the Apache Iceberg REST catalog in BigLake metastore and later included in the catalog’s GA release.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/release-notes](https://docs.cloud.google.com/bigquery/docs/release-notes)

## Supporting Pages

### BigQuery release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/release-notes](https://docs.cloud.google.com/bigquery/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 52
- Re-rank relevance: N/A

Evidence snippets:
- September 29, 2025 Feature To simplify access management for your Iceberg tables, you can use credential vending mode with the Apache Iceberg REST catalog in BigLake metastore.
- October 30, 2025 Feature The Apache Iceberg REST catalog in BigLake metastore is now generally available (GA) with several new features, including BigQuery catalog federation, credential vending, and catalog management in the Google Cloud console.
- June 23, 2025 Feature You can now use the Apache Iceberg REST catalog in BigLake metastore to create interoperability between your query engines by allowing your open source engines to access Iceberg data in Cloud Storage.
- June 03, 2025 Feature BigQuery metastore has been renamed BigLake metastore and is now generally available (GA).

