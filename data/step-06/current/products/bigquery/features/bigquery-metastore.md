---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.458Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery metastore"
feature_slug: "bigquery-metastore"
latest_feature_date: "2025-01-22"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/release-notes"
keywords:
  - "metadata across processing engines"
  - "catalog metadata management"
  - "BigQuery tables metadata"
  - "open format metadata"
  - "BigQuery metastore"
  - "Iceberg metadata"
  - "Apache Iceberg"
  - "metastore"
---

# BigQuery metastore

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery metastore enables access and management of metadata across processing engines, including BigQuery tables and open formats such as Apache Iceberg.

## Extended Definition

BigQuery metastore is a metadata capability that supports BigQuery tables and open formats, with Apache Iceberg explicitly called out. In 2025 release notes, Google Cloud documents that users can create, view, modify, and delete Apache Iceberg resources in BigQuery metastore, and that Apache Iceberg REST catalog support enables interoperability for open-source query engines to access Iceberg data in object storage.

## Evidence Summary

The BigQuery release notes snippets provide direct dated evidence of BigQuery metastore’s Iceberg support and related cross-engine metadata/data interoperability behavior.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/release-notes](https://docs.cloud.google.com/bigquery/docs/release-notes)

## Supporting Pages

### BigQuery release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/release-notes](https://docs.cloud.google.com/bigquery/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 70
- Re-rank relevance: N/A

Evidence snippets:
- April 08, 2025 Feature You can now create, view, modify, and delete Apache Iceberg resources in BigQuery metastore .
- BigQuery metastore supports BigQuery tables and open formats such as Apache Iceberg.
- October 30, 2025 Feature The Apache Iceberg REST catalog in BigLake metastore is now generally available (GA) with several new features, including BigQuery catalog federation, credential vending, and catalog management in the Google Cloud console.
- June 23, 2025 Feature You can now use the Apache Iceberg REST catalog in BigLake metastore to create interoperability between your query engines by allowing your open source engines to access Iceberg data in Cloud Storage.

