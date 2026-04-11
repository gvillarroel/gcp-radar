---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.702Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery ASCII control character support for CSV loading"
feature_slug: "bigquery-ascii-control-character-support-for-csv-loading"
latest_feature_date: "2022-11-28"
deprecation_date: ""
coverage_status: "HIGH"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/loading-data-cloud-storage-csv"
keywords:
  - "ASCII chars in CSV"
  - "ASCII control characters"
  - "control chars"
  - "control character handling"
  - "CSV control character support"
  - "CSV load options"
  - "load job CSV"
---

# BigQuery ASCII control character support for CSV loading

Product: BigQuery
Coverage: HIGH

## Step 02 Summary

BigQuery added support for ASCII control characters in CSV file loading.

## Extended Definition

BigQuery supports loading CSV files that include ASCII control characters via CSV load jobs by using the `--preserve ascii control characters` option. Setting this option to `true` enables loading ASCII NUL and other ASCII control characters as part of the CSV load process.

## Evidence Summary

The referenced BigQuery Cloud Storage CSV loading page explicitly defines the `--preserve ascii control characters` load option and states that setting it to `true` allows ASCII 0 and other ASCII control characters.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/loading-data-cloud-storage-csv](https://docs.cloud.google.com/bigquery/docs/loading-data-cloud-storage-csv)

## Supporting Pages

### Loading CSV data from Cloud Storage \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/loading-data-cloud-storage-csv](https://docs.cloud.google.com/bigquery/docs/loading-data-cloud-storage-csv)
- Source ID: `site-docs-root`
- Final score: 30
- Re-rank relevance: N/A

Evidence snippets:
- ASCII control character None --preserve ascii control characters None (Optional) If you want to allow ASCII 0 and other ASCII control characters, then set --preserve ascii control characters to true to your load jobs.
- If you want to allow ASCII 0 and other ASCII control characters, then set --preserve ascii control characters=true to your load jobs.

