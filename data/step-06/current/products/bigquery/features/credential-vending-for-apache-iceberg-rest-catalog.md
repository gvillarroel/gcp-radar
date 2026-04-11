---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.370Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Credential vending for Apache Iceberg REST catalog"
feature_slug: "credential-vending-for-apache-iceberg-rest-catalog"
latest_feature_date: "2025-10-30"
deprecation_date: ""
coverage_status: "HIGH"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/release-notes"
keywords:
  - "vended credentials"
  - "metastore credential vending"
  - "REST credential endpoint"
  - "credential vending API"
  - "credential vending"
  - "temporary credentials"
  - "Apache Iceberg REST catalog"
  - "managed credentials"
---

# Credential vending for Apache Iceberg REST catalog

Product: BigQuery
Coverage: HIGH

## Step 02 Summary

The Apache Iceberg REST catalog in BigLake metastore now supports credential vending.

## Extended Definition

Credential vending for the Apache Iceberg REST catalog in BigLake metastore is a catalog mode that lets users access Iceberg data in Cloud Storage via managed credentials instead of requiring users to have direct Cloud Storage bucket access. BigQuery’s release notes state that this feature for the Apache Iceberg REST catalog was added as a way to simplify access management, and that by October 30, 2025 it is generally available as part of BigQuery’s metastore offering.

## Evidence Summary

The release notes identify both the introduction and GA timeline of credential vending for the Apache Iceberg REST catalog in BigLake metastore, and explain that it simplifies access management by removing the need for direct Cloud Storage access for catalog users.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/release-notes](https://docs.cloud.google.com/bigquery/docs/release-notes)

## Supporting Pages

### BigQuery release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/release-notes](https://docs.cloud.google.com/bigquery/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 28
- Re-rank relevance: N/A

Evidence snippets:
- October 30, 2025 Feature The Apache Iceberg REST catalog in BigLake metastore is now generally available (GA) with several new features, including BigQuery catalog federation, credential vending, and catalog management in the Google Cloud console.
- September 29, 2025 Feature To simplify access management for your Iceberg tables, you can use credential vending mode with the Apache Iceberg REST catalog in BigLake metastore.
- June 23, 2025 Feature You can now use the Apache Iceberg REST catalog in BigLake metastore to create interoperability between your query engines by allowing your open source engines to access Iceberg data in Cloud Storage.
- Credential vending removes the need for catalog users to have direct access to Cloud Storage buckets.

