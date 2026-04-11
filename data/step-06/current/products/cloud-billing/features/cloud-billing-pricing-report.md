---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T20:10:07.344Z"
product_name: "Cloud Billing"
product_slug: "cloud-billing"
feature_name: "Cloud Billing pricing report"
feature_slug: "cloud-billing-pricing-report"
latest_feature_date: "2020-04-16"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/billing/docs/how-to/reports"
  - "https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/pricing-data"
  - "https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-setup"
keywords:
  - "billing"
  - "pricing"
  - "report"
  - "was"
  - "added"
  - "to"
  - "provide"
  - "tabular"
---

# Cloud Billing pricing report

Product: Cloud Billing
Coverage: LOW

## Step 02 Summary

A Cloud Billing Pricing report was added to provide a tabular SKU price view with history and contract discount information.

## Extended Definition

A Cloud Billing Pricing report was added to provide a tabular SKU price view with history and contract discount information.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/billing/docs/how-to/reports](https://docs.cloud.google.com/billing/docs/how-to/reports)
- [https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/pricing-data](https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/pricing-data)
- [https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-setup](https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-setup)

## Supporting Pages

### "Analyze billing data and cost trends with Reports \_|\_ Cloud Billing \_\

- URL: [https://docs.cloud.google.com/billing/docs/how-to/reports](https://docs.cloud.google.com/billing/docs/how-to/reports)
- Source ID: `site-docs-root`
- Final score: 206
- Re-rank relevance: N/A

Evidence snippets:
- The Cloud Billing report shows you the cost data for a specific label only after the label was added to a resource.
- If you're viewing your Cloud Billing report using a date range that ends in a future date, your Cloud Billing report chart displays both actual costs and forecasted costs: The report header above the chart provides a split view of cost: actual cost-to-date calculated from the starting date, and the total forecasted cost for the entire date range.
- As of May 2021, the following data is available in the Cloud Billing reports: Negotiated savings : Viewable for Cloud Billing accounts that are associated with a custom pricing contract, Negotiated savings shows the difference in cost between your contract price compared to the current list price.
- Promotional credits for custom pricing contracts : If you have a custom pricing contract with Google Cloud, and received promotional credits that apply to costs at list prices , your report includes a service called Invoice , with a SKU called Contract billing adjustment .

### "Structure of pricing data export \_|\_ Cloud Billing \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/pricing-data](https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/pricing-data)
- Source ID: `site-docs-root-2`
- Final score: 182
- Re-rank relevance: N/A

Evidence snippets:
- FROM my - billing - admin - project . my billing dataset . cloud pricing export as sku pricing , UNNEST ( sku pricing . list price . tiered rates ) as tier WHERE DATE ( PARTITIONTIME ) = "2020-07-20" AND sku . id = "2DA5-55D3-E679" ; Query results: Row sku id sku description service id service description pricing unit quantity start usage amount usd amount account currency amount 1 2DA5-55D3-E679 Requests 152E-C115-5142 Cloud Run 1000000.0 0.0 0.0 0.0 2 2DA5-55D3-E679 Requests 152E-C115-5142 Cloud Run 1000000.0 2000000.0 0.4 0.4 Related topics Topics related to exported Cloud Billing data Set up Cloud Billing data export to BigQuery Example queries for Cloud Billing data export to BigQuery Visualize spend over time with Looker Studio Cost and pricing reports available in the Google Cloud console View your Cloud Billing reports and cost trends View and download the cost details of your invoice or statement View and download prices for Google's cloud services Understand your savings with cost breakdown reports Analyze the effectiveness of your committed use discounts View your cost and payment history Previous arrow back Structure of Detailed data export Next Structure of CUD metadata export arrow forward Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Get list prices for a specific SKU Get list prices for a specific SKU, and include service description Example 1: Returns nested data Example 2: Returns unnested data joined with the same table Use product taxonomy and geo taxonomy to query SKUs Get the product taxonomy of a SKU Get all SKUs for a specific product taxonomy Get all SKUs for a specific geo taxonomy and product taxonomy This section provides different examples of how to query the Cloud Billing pricing data exported to BigQuery.
- Note: You can use the sku.id column to map each of your line items to the list prices published on the Google Cloud pricing pages , in the Pricing Table report , and through the Cloud Billing Catalog API . sku.description String A human-readable description of the resource SKU used by the service.
- Note : Use the export time column to understand when the exported billing data was last updated. pricing as of time Timestamp The pricing data applicable to your Cloud Billing account is generated once each day to prepare it for export to BigQuery.

### Set up Cloud Billing data export to BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-setup](https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-setup)
- Source ID: `site-docs-root-2`
- Final score: 172
- Re-rank relevance: N/A

Evidence snippets:
- Resource-level tags are available for the following resources: Compute Engine instances Spanner instances Cloud Run services Artifact Registry repositories Related topics Topics related to exported Cloud Billing data Understanding the Cloud Billing data tables in BigQuery Example queries for Cloud Billing data export to BigQuery Visualize spend over time with Looker Studio Cost and pricing reports available in the Google Cloud console View your Cloud Billing reports and cost trends View and download the cost details of your invoice or statement View and download prices for Google's cloud services Understand your savings with cost breakdown reports Analyze the effectiveness of your committed use discounts View your cost and payment history Previous arrow back Overview of billing data export to BigQuery Next Understand the billing data tables in BigQuery arrow forward Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- The service accounts look like this: For the Standard and Detailed usage cost datasets: billing-export-bigquery@system.gserviceaccount.com For the Pricing dataset: cloud-account-pricing@cloud-account-pricing.iam.gserviceaccount.com The service accounts are owned and managed by Google and provide the permissions that are necessary for our offline process to create a table and write Cloud Billing records to it.
- The table schema for any of the Cloud Billing data exports can change When the table schema changes, such as when new fields are added to a BigQuery table schema for a Cloud Billing data export, any queries that directly reference the exported columns might fail.
- To enable and configure the export of Cloud Billing pricing data and CUD metadata , you need the following permissions: For Cloud Billing, you need the Billing Account Administrator role on the target Cloud Billing account.

