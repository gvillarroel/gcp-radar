---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.700Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery table lineage tab in table properties"
feature_slug: "bigquery-table-lineage-tab-in-table-properties"
latest_feature_date: "2022-12-22"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/admin-intro"
keywords:
  - "table properties page"
  - "lineage information"
  - "data lineage view"
  - "table properties"
  - "Lineage tab"
  - "Table lineage"
  - "Lineage"
---

# BigQuery table lineage tab in table properties

Product: BigQuery
Coverage: LOW

## Step 02 Summary

BigQuery added a Lineage tab in the table properties page so users can track how data moves and transforms.

## Extended Definition

The provided official documentation excerpt confirms that BigQuery table management includes updating table properties and that data lineage is a feature of Dataplex Universal Catalog used to track where data comes from, where it goes, and what transformations are applied. However, it does not explicitly describe a BigQuery "Lineage" tab in the table properties page itself, so any claim about that specific UI element is not directly evidenced in the cited text.

## Evidence Summary

The cited BigQuery administration page links table property updates and separately describes Dataplex Universal Catalog as the feature for data-lineage tracking, but it does not explicitly document a specific Lineage tab in BigQuery table properties.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/admin-intro](https://docs.cloud.google.com/bigquery/docs/admin-intro)

## Supporting Pages

### Introduction to BigQuery administration \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/admin-intro](https://docs.cloud.google.com/bigquery/docs/admin-intro)
- Source ID: `site-docs-root-2`
- Final score: 28
- Re-rank relevance: N/A

Evidence snippets:
- You can create tables, load data into tables from various types of sources and in various formats, partition tables based on a specific column or by ingestion time, cluster tables, update table properties, and export table data.
- Track data lineage Data lineage is a Dataplex Universal Catalog feature that lets you track how data moves through your systems: where it comes from, where it is passed to, and what transformations are applied to it.
- For more information about how data lineage can help you track data movement in your project, see About data lineage in Dataplex Universal Catalog.

