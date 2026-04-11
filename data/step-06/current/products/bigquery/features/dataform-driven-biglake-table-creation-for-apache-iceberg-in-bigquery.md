---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.359Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Dataform-driven BigLake table creation for Apache Iceberg in BigQuery"
feature_slug: "dataform-driven-biglake-table-creation-for-apache-iceberg-in-bigquery"
latest_feature_date: "2025-11-18"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/release-notes"
keywords:
  - "automatic BigLake table provisioning"
  - "Dataform-driven creation"
  - "Iceberg table creation via Dataform"
  - "BigQuery Apache Iceberg integration"
  - "Dataform + BigLake Iceberg"
  - "Dataform BigLake tables"
  - "BigLake table creation"
  - "Apache Iceberg"
---

# Dataform-driven BigLake table creation for Apache Iceberg in BigQuery

Product: BigQuery
Coverage: LOW

## Step 02 Summary

Dataform can automatically create BigLake tables for Apache Iceberg datasets in BigQuery.

## Extended Definition

The provided BigQuery release notes confirm that BigQuery supports Apache Iceberg via the BigLake metastore REST catalog, including GA support with BigQuery catalog federation, credential vending, and catalog management, plus features for interoperability and snapshot access. The notes do not provide explicit evidence that Dataform automatically creates BigLake tables for Apache Iceberg.

## Evidence Summary

These release notes document Apache Iceberg REST catalog capabilities in BigLake metastore but do not mention Dataform-driven BigLake table provisioning.

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
- September 16, 2025 Feature You can now access snapshots of Apache Iceberg external tables that are retained in your Iceberg metadata by using the FOR SYSTEM TIME AS OF clause.

