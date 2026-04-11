---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.436Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Partial ordering mode in BigQuery DataFrames"
feature_slug: "partial-ordering-mode-in-bigquery-dataframes"
latest_feature_date: "2025-04-17"
deprecation_date: ""
coverage_status: "HIGH"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/dataframes-quickstart"
  - "https://docs.cloud.google.com/bigquery/docs/release-notes"
keywords:
  - "DataFrames partial ordering"
  - "PO mode"
  - "partial ordering mode"
  - "partial order mode"
  - "query planning mode"
  - "partial order"
  - "query generation mode"
  - "ordering mode"
---

# Partial ordering mode in BigQuery DataFrames

Product: BigQuery
Coverage: HIGH

## Step 02 Summary

BigQuery DataFrames now supports partial ordering mode to generate more efficient queries.

## Extended Definition

Partial ordering mode in BigQuery DataFrames is a query-generation mode that can be enabled via `bpd.options.bigquery.ordering_mode = "partial"`, as an alternative to the default `"strict"` mode. In this mode, BigQuery DataFrames can generate more efficient queries, but the order of rows may be non-deterministic unless the DataFrame is explicitly sorted.

## Evidence Summary

The quickstart page provides the configuration and behavior details for DataFrames ordering modes, while the release notes confirm the feature’s availability date and intent as an announced BigQuery DataFrames capability.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/dataframes-quickstart](https://docs.cloud.google.com/bigquery/docs/dataframes-quickstart)
- [https://docs.cloud.google.com/bigquery/docs/release-notes](https://docs.cloud.google.com/bigquery/docs/release-notes)

## Supporting Pages

### Try BigQuery DataFrames \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/dataframes-quickstart](https://docs.cloud.google.com/bigquery/docs/dataframes-quickstart)
- Source ID: `site-docs-root`
- Final score: 26
- Re-rank relevance: N/A

Evidence snippets:
- On BigQuery Studio, the project ID is automatically detected. bpd . options . bigquery . project = your gcp project id Use "partial" ordering mode to generate more efficient queries, but the order of the rows in DataFrames may not be deterministic if you have not explictly sorted it.
- Set the ordering mode to "strict" (default) for more pandas compatibility. bpd . options . bigquery . ordering mode = "partial" Create a DataFrame from a BigQuery table query or table = "bigquery-public-data.ml datasets.penguins" df = bpd . read gbq ( query or table ) Efficiently preview the results using the .peek() method. df . peek () Modify the bpd.options.bigquery.project = your gcp project id line to specify your Google Cloud project ID.

### BigQuery release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/release-notes](https://docs.cloud.google.com/bigquery/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 20
- Re-rank relevance: N/A

Evidence snippets:
- April 17, 2025 Feature You can use partial ordering mode in BigQuery DataFrames to generate efficient queries.

