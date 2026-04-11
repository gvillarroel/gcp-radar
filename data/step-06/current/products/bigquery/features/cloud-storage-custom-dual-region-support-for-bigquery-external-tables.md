---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.668Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Cloud Storage custom dual-region support for BigQuery external tables"
feature_slug: "cloud-storage-custom-dual-region-support-for-bigquery-external-tables"
latest_feature_date: "2023-04-26"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/locations"
keywords:
  - "custom dual-region external table"
  - "Cloud Storage custom dual-region"
  - "dual-region Cloud Storage table"
  - "custom dual-region"
  - "external table location"
  - "non-BigLake external tables"
  - "BigLake external tables"
---

# Cloud Storage custom dual-region support for BigQuery external tables

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery added support for Cloud Storage custom dual-regions in both BigLake and non-BigLake external tables.

## Extended Definition

BigQuery allows querying Cloud Storage data with either BigLake or non-BigLake external tables when the Cloud Storage bucket location is colocated with the BigQuery dataset location policy, including dual-region buckets. For EU multi-region datasets, the bucket must be in a dual-region containing the Netherlands (europe-west4), and for US multi-region datasets, in a dual-region containing Iowa (us-central1); this can be satisfied by the listed dual-regions (such as EUR4/NAM4) or by equivalent custom dual-regions.

## Evidence Summary

The locations documentation states external table colocation requirements for Cloud Storage and explicitly references BigLake and non-BigLake external tables with support for both standard and custom dual-region buckets matching required regions.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/locations](https://docs.cloud.google.com/bigquery/docs/locations)

## Supporting Pages

### BigQuery locations \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/locations](https://docs.cloud.google.com/bigquery/docs/locations)
- Source ID: `site-docs-root`
- Final score: 20
- Re-rank relevance: N/A

Evidence snippets:
- Location considerations When you choose a location for your data, consider the following: Cloud Storage You can interact with Cloud Storage data using BigQuery in the following ways: Query Cloud Storage data using BigLake or non-BigLake external tables Load Cloud Storage data into BigQuery Query Cloud Storage data When you query data in Cloud Storage by using a BigLake or a non-BigLake external table , the data you query must be colocated with your BigQuery dataset, otherwise the query incurs data transfer charges .
- If your BigQuery dataset is in the EU multi-region, the corresponding Cloud Storage bucket must be in a dual-region that includes Netherlands ( europe-west4 ), like the EUR4 dual-region, or in a custom dual-region that includes Netherlands ( europe-west4 ) .
- If your BigQuery dataset is in the US multi-region, the corresponding Cloud Storage bucket must be in a dual-region that includes Iowa ( us-central1 ), like the NAM4 dual-region, or in a custom dual-region that includes Iowa ( us-central1 ).

