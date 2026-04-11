---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T19:19:31.145Z"
product_name: "Channel Services"
product_slug: "channel-services"
feature_name: "Unified Rebilling BigQuery Export Across Multiple Partner Sales Console Accounts"
feature_slug: "unified-rebilling-bigquery-export-across-multiple-partner-sales-console-accounts"
latest_feature_date: "2023-04-24"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/channel/docs/rebilling/export-data-to-bigquery"
  - "https://docs.cloud.google.com/channel/docs/release-notes"
  - "https://docs.cloud.google.com/channel/docs/rebilling/example-export-queries"
keywords:
  - "multiple"
  - "unified"
  - "across"
  - "partner"
  - "console"
  - "rebilling"
  - "sales"
  - "export"
---

# Unified Rebilling BigQuery Export Across Multiple Partner Sales Console Accounts

Product: Channel Services
Coverage: LOW

## Step 02 Summary

Enables unified Channel Services rebilling exports from multiple Partner Sales Console accounts into a single BigQuery dataset while partitioning by Cloud Billing account.

## Extended Definition

Enables unified Channel Services rebilling exports from multiple Partner Sales Console accounts into a single BigQuery dataset while partitioning by Cloud Billing account.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/channel/docs/rebilling/export-data-to-bigquery](https://docs.cloud.google.com/channel/docs/rebilling/export-data-to-bigquery)
- [https://docs.cloud.google.com/channel/docs/release-notes](https://docs.cloud.google.com/channel/docs/release-notes)
- [https://docs.cloud.google.com/channel/docs/rebilling/example-export-queries](https://docs.cloud.google.com/channel/docs/rebilling/example-export-queries)

## Supporting Pages

### Export Channel Services data to BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/channel/docs/rebilling/export-data-to-bigquery](https://docs.cloud.google.com/channel/docs/rebilling/export-data-to-bigquery)
- Source ID: `site-docs-reference`
- Final score: 166
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- To export billing data for multiple Partner Sales Console accounts, follow these steps: On the BigQuery dataset that you want to export your data to, make sure the Billing Administrators for each Partner Sales Console account have permissions to view the dataset.
- When you set up the billing data export in each Partner Sales Console account, select the unified dataset.
- DATASET NAME . reseller billing detailed export v1 WHERE export time BETWEEN TIMESTAMP ( START DATE ) AND TIMESTAMP ( END DATE ) AND payer billing account id IN ( PAYER BILLING ACCOUNT IDS ) GROUP BY billing account id , currency , invoice . month ORDER BY billing account id , currency , invoice . month ; For more information on partitioning, clustering, and best practices, see the following links: Query Partitioned tables Query Clustered tables Optimize query computation Best Practices to control costs in BigQuery Finding payer's billing account ID To find the payer's billing account ID, open the billing accounts page of the Partner Sales Console and click the Partner billing tab.
- Learn about assigning Google Cloud roles in the Partner Sales Console To enable Google Workspace exports, you must be a Reseller Admin or have the Google Workspace Billing privileges.

### Channel Services release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/channel/docs/release-notes](https://docs.cloud.google.com/channel/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 128
- Re-rank relevance: N/A

Evidence snippets:
- April 24, 2023 v1 Feature You can now set up a unified Google Cloud Billing exports for multiple Partner Sales Console accounts.
- May 04, 2022 v1 Feature Rebilling is now available in the Partner Sales Console and Cloud Channel API.
- Visit the rebilling overview to learn more about this feature. v1 Feature Rebilling data exported to BigQuery now includes the columns: CustomerRepricingConfigName, ChannelPartnerRepricingName, and Tags.
- March 14, 2023 v1 Change All public SKU groups, including 8 Google Cloud Marketplace SKU groups are now available for repricing in the Partner Sales Console (PSC).

### "BigQuery export query examples \_|\_ Channel Services \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/channel/docs/rebilling/example-export-queries](https://docs.cloud.google.com/channel/docs/rebilling/example-export-queries)
- Source ID: `site-docs-reference`
- Final score: 126
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Identifying and accessing the BigQuery table Channel Services exports are set up using the Partner Sales Console .
- DATASET NAME . reseller billing detailed export v1 WHERE export time BETWEEN TIMESTAMP ( START DATE ) AND TIMESTAMP ( END DATE ) GROUP BY customer name , billing account id , payer billing account id , currency , invoice . month ORDER BY customer name , billing account id , payer billing account id , currency , invoice . month ; Sum of customer costs by Cloud Billing subaccount, as shown to the subaccount owner This query shows you how the data cost numbers map with what a resold customer (or you as the partner) sees when they open the Google Cloud console for their subaccount.
- Offline order billing data view similar to invoice PDF (preview) If you're a reseller who also places offline orders (orders that you don't use the Partner Sales Console to place), you can get a view of billing data with similar columns as the invoice CSV files.
- The results contain Google Cloud usage costs for every configured Customer or channel partner in the Partner Sales Console.

