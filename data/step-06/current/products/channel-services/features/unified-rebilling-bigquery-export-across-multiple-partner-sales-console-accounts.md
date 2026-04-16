---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T11:56:59.867Z"
product_name: "Channel Services"
product_slug: "channel-services"
feature_name: "Unified Rebilling BigQuery Export Across Multiple Partner Sales Console Accounts"
feature_slug: "unified-rebilling-bigquery-export-across-multiple-partner-sales-console-accounts"
latest_feature_date: "2023-04-24"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/channel/docs/rebilling/export-data-to-bigquery"
  - "https://docs.cloud.google.com/channel/docs/rebilling/rebilling-overview"
  - "https://docs.cloud.google.com/channel/docs/rebilling/manage-repricing-configurations"
keywords:
  - "multiple"
  - "unified"
  - "across"
  - "partner"
  - "rebilling"
  - "sales"
  - "export"
---

# Unified Rebilling BigQuery Export Across Multiple Partner Sales Console Accounts

Product: Channel Services
Coverage: MEDIUM

## Step 02 Summary

Enables unified Channel Services rebilling exports from multiple Partner Sales Console accounts into a single BigQuery dataset while partitioning by Cloud Billing account.

## Extended Definition

Enables unified Channel Services rebilling exports from multiple Partner Sales Console accounts into a single BigQuery dataset while partitioning by Cloud Billing account.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/channel/docs/rebilling/export-data-to-bigquery](https://docs.cloud.google.com/channel/docs/rebilling/export-data-to-bigquery)
- [https://docs.cloud.google.com/channel/docs/rebilling/rebilling-overview](https://docs.cloud.google.com/channel/docs/rebilling/rebilling-overview)
- [https://docs.cloud.google.com/channel/docs/rebilling/manage-repricing-configurations](https://docs.cloud.google.com/channel/docs/rebilling/manage-repricing-configurations)

## Supporting Pages

### Export Channel Services data to BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/channel/docs/rebilling/export-data-to-bigquery](https://docs.cloud.google.com/channel/docs/rebilling/export-data-to-bigquery)
- Source ID: `site-docs-reference`
- Final score: 194
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- To export billing data for multiple Partner Sales Console accounts, follow these steps: On the BigQuery dataset that you want to export your data to, make sure the Billing Administrators for each Partner Sales Console account have permissions to view the dataset.
- When you set up the billing data export in each Partner Sales Console account, select the unified dataset.
- DATASET NAME . reseller billing detailed export v1 WHERE export time BETWEEN TIMESTAMP ( START DATE ) AND TIMESTAMP ( END DATE ) AND payer billing account id IN ( PAYER BILLING ACCOUNT IDS ) GROUP BY billing account id , currency , invoice . month ORDER BY billing account id , currency , invoice . month ; For more information on partitioning, clustering, and best practices, see the following links: Query Partitioned tables Query Clustered tables Optimize query computation Best Practices to control costs in BigQuery Finding payer's billing account ID To find the payer's billing account ID, open the billing accounts page of the Partner Sales Console and click the Partner billing tab.
- Learn about assigning Google Cloud roles in the Partner Sales Console To enable Google Workspace exports, you must be a Reseller Admin or have the Google Workspace Billing privileges.

### Rebilling overview \_|\_ Channel Services \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/channel/docs/rebilling/rebilling-overview](https://docs.cloud.google.com/channel/docs/rebilling/rebilling-overview)
- Source ID: `site-docs-reference`
- Final score: 149
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Channel Services-specific columns : Channel Services data exports contain additional columns that map to Partner Sales Console entities, such as resource names of customers and entitlements, or CRM IDs.
- Rebilling also lets partners export their customer data to a BigQuery dataset that they own.
- Since this report includes customer and channel partner costs, along with customer metadata and cost configured using Repricing configurations , you can use the exported data to improve your internal billing processes and financial analytics.
- Rebilling consists of two main features: Repricing configurations BigQuery exports BigQuery exports You can export a comprehensive report of your customers' billing usage and cost data to a BigQuery dataset that you own.

### "Create and manage repricing configurations \_|\_ Channel Services \_|\_\

- URL: [https://docs.cloud.google.com/channel/docs/rebilling/manage-repricing-configurations](https://docs.cloud.google.com/channel/docs/rebilling/manage-repricing-configurations)
- Source ID: `site-docs-reference`
- Final score: 140
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The resulting data in Rebilling BQ Export looks like the following: sku list price cost customer cost credit.type credit.amount credit.customer amount Partner Cost (cost + SUM(credit.amount)) End Customer Cost (customer cost + SUM(credit.customer amount)) Compute 120 100 99.6 (120 .83) RESELLER MARGIN COMMITTED USAGE DISCOUNT -10 -10 0 (margin hidden) 0 (hidden due to list price) 80 99.6 BigQuery 120 100 120 (100 1.2) RESELLER MARGIN COMMITTED USAGE DISCOUNT -10 -10 0 (margin hidden) -12 (DCC+20%) 80 108 Note: If an entitlement does not have any repricing configuration specified, then it defaults to Direct Customer Cost + 0% , which implies no modifications to the cost (except removal of RESELLER MARGIN).
- View repricing configurations To view more details about the current repricing configurations for a customer, navigate to the Customers page of the Partner Sales Console and select the customer's Name to view their details.
- Export SKU groups If you want a general overview of the SKU groups available per platform across all of your customers, you can export CSV file from the Repricing section of the Customers page.
- Create repricing configurations To create a new repricing configuration, follow these steps: In the Partner Sales Console, open the Customers page Select Repricing .

