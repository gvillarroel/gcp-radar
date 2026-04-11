---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.416Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Merchant Center best sellers report multi-client support"
feature_slug: "merchant-center-best-sellers-report-multi-client-support"
latest_feature_date: "2025-06-16"
deprecation_date: ""
coverage_status: "HIGH"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/release-notes"
keywords:
  - "BestSellersEntityProductMapping table"
  - "Merchant Center best sellers report"
  - "consolidated best sellers table"
  - "BestSellersEntityProductMapping"
  - "aggregator_id field"
  - "aggregator_id"
  - "best sellers multi-client"
  - "multi-client accounts"
---

# Merchant Center best sellers report multi-client support

Product: BigQuery
Coverage: HIGH

## Step 02 Summary

The Merchant Center best sellers report in BigQuery now supports multi-client accounts using aggregator_id and a consolidated BestSellersEntityProductMapping table.

## Extended Definition

The Merchant Center best sellers report feature in BigQuery supports multi-client account (MCA) reporting. In this mode, the BestSellersEntityProductMapping table maps best-selling entities to products in sub-accounts’ inventory, and MCA queries can use the aggregator_id field.

## Evidence Summary

The BigQuery release notes confirm MCA support for the Merchant Center best sellers report, explain the role of BestSellersEntityProductMapping, and note that aggregator_id is used for MCA queries.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/release-notes](https://docs.cloud.google.com/bigquery/docs/release-notes)

## Supporting Pages

### BigQuery release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/release-notes](https://docs.cloud.google.com/bigquery/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 24
- Re-rank relevance: N/A

Evidence snippets:
- The BestSellersEntityProductMapping table maps the best-selling entities to the products in the sub-accounts' inventory.
- Feature The Merchant Center best sellers report supports multi-client accounts (MCAs).
- If you have an MCA, you can use the aggregator id to query the tables.

