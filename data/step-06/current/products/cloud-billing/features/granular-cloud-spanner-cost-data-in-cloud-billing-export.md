---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T20:10:07.287Z"
product_name: "Cloud Billing"
product_slug: "cloud-billing"
feature_name: "Granular Cloud Spanner cost data in Cloud Billing export"
feature_slug: "granular-cloud-spanner-cost-data-in-cloud-billing-export"
latest_feature_date: "2023-04-11"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/billing/docs/how-to/reports"
  - "https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/detailed-usage"
  - "https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/standard-usage"
keywords:
  - "granular"
  - "spanner"
  - "cost"
  - "in"
  - "billing"
  - "export"
  - "enables"
  - "viewing"
---

# Granular Cloud Spanner cost data in Cloud Billing export

Product: Cloud Billing
Coverage: LOW

## Step 02 Summary

Enables viewing and filtering Cloud Spanner usage costs in the Detailed cost export via `resource.global_name`.

## Extended Definition

Enables viewing and filtering Cloud Spanner usage costs in the Detailed cost export via `resource.global_name`.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/billing/docs/how-to/reports](https://docs.cloud.google.com/billing/docs/how-to/reports)
- [https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/detailed-usage](https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/detailed-usage)
- [https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/standard-usage](https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/standard-usage)

## Supporting Pages

### "Analyze billing data and cost trends with Reports \_|\_ Cloud Billing \_\

- URL: [https://docs.cloud.google.com/billing/docs/how-to/reports](https://docs.cloud.google.com/billing/docs/how-to/reports)
- Source ID: `site-docs-root`
- Final score: 220
- Re-rank relevance: N/A

Evidence snippets:
- To view the cost reports for your Cloud Billing account, including viewing the cost information for all of the Google Cloud projects that are linked to the billing account, you need a role on your Cloud Billing account that includes the following permissions : billing.accounts.get billing.accounts.getSpendingInformation To gain these permissions using a predefined role , ask your administrator to grant you one of the following Cloud Billing IAM roles on your Cloud Billing account: Billing Account Viewer Billing Account Costs Manager Billing Account Administrator For more information about Cloud Billing permissions, see: Overview of Cloud Billing access control Create custom roles for Cloud Billing Understanding predefined Identity and Access Management roles for Cloud Billing To view all costs for an individual Google Cloud project, you need billing-specific permissions on the Google Cloud project .
- To view the Cloud Billing reports for a project, you need a role on the Google Cloud project that includes the following permissions : billing.resourceCosts.get resourcemanager.projects.get To gain these permissions using a predefined role , ask your administrator to grant you one of the following basic IAM roles on your Google Cloud projects: Project Viewer Project Editor Project Owner Note : If you are viewing Cloud Billing reports using project-level permissions only, some of the billing-account-level report features aren't available.
- Related topics Export Cloud Billing data to BigQuery Understand your savings with cost breakdown reports View your cost and payment history Create, modify, or close your Cloud Billing account Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- If you're viewing your Cloud Billing report using a date range that ends in a future date, your Cloud Billing report chart displays both actual costs and forecasted costs: The report header above the chart provides a split view of cost: actual cost-to-date calculated from the starting date, and the total forecasted cost for the entire date range.

### "Structure of Detailed data export \_|\_ Cloud Billing \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/detailed-usage](https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/detailed-usage)
- Source ID: `site-docs-root-2`
- Final score: 202
- Re-rank relevance: N/A

Evidence snippets:
- Common values used in the example detailed cost queries The query examples in this section use the following value for Table name : project.dataset.gcp billing export resource v1 XXXXXX XXXXXX XXXXXX Return the resource-level costs on an invoice The following queries demonstrate two ways of viewing resource-level cost and credit values on an invoice using exported billing data.
- Managed Microsoft AD Memorystore for Redis Secret Manager Spanner Identify granular cost data by service To analyze granular cost information in a detailed export, use the following table to identify the column that contains information about specific resources.
- Note: Some network data transfer, Cloud SQL backups in specific locations, and Storage Snapshot costs aren't included in the granular Cloud SQL instance costs in Cloud Billing export to BigQuery.
- As of July 25th, 2023, SKUs for Cloud Run functions (2nd Gen) are included in the granular Cloud Run functions costs in Cloud Billing export to BigQuery.

### "Structure of Standard data export \_|\_ Cloud Billing \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/standard-usage](https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/standard-usage)
- Source ID: `site-docs-root-2`
- Final score: 198
- Re-rank relevance: N/A

Evidence snippets:
- Standard SQL SELECT invoice . month AS invoice month , SUM ( cost ) as commitment fees FROM project . dataset . gcp billing export v1 XXXXXX XXXXXX XXXXXX WHERE LOWER ( sku . description ) LIKE "commitment%" GROUP BY 1 Viewing commitment credits To view your committed use discount credits in your billing data export, use the following sample query.
- Return the total costs on an invoice The following queries demonstrate two ways of viewing cost and credit values using exported billing data.
- You can verify your charges in your billing data export by viewing your costs by usage start time and grouping by Day .
- Row name project labels total cost total credits 1 CTG - Dev [{"key":"ctg p env","value":"dev"}] 79.140979 -4.763796 2 CTG - Prod [{"key":"ctg p env","value":"prod"},{"key":"ctg team","value":"eng"}] 32.466272 -3.073356 3 CTG - Sandbox [{"key":"ctg p env","value":"dev"}] 0 0 4 CTG - Storage [{"key":"ctg p env","value":"prod"},{"key":"ctg team","value":"data"}] 7.645793 -0.003761 Related topics Topics related to exported Cloud Billing data Set up Cloud Billing data export to BigQuery Example queries for Cloud Billing data export to BigQuery Visualize spend over time with Looker Studio Cost and pricing reports available in the Google Cloud console View your Cloud Billing reports and cost trends View and download the cost details of your invoice or statement View and download prices for Google's cloud services Understand your savings with cost breakdown reports Analyze the effectiveness of your committed use discounts View your cost and payment history Previous arrow back Understand the billing data tables in BigQuery Next Structure of Detailed data export arrow forward Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

