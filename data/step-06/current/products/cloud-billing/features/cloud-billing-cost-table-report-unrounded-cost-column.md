---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T20:10:07.322Z"
product_name: "Cloud Billing"
product_slug: "cloud-billing"
feature_name: "Cloud Billing Cost Table report Unrounded cost column"
feature_slug: "cloud-billing-cost-table-report-unrounded-cost-column"
latest_feature_date: "2021-03-11"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/billing/docs/how-to/reports"
  - "https://docs.cloud.google.com/billing/docs/how-to/cost-table"
  - "https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables"
keywords:
  - "billing"
  - "cost"
  - "table"
  - "report"
  - "unrounded"
  - "column"
  - "added"
  - "the"
---

# Cloud Billing Cost Table report Unrounded cost column

Product: Cloud Billing
Coverage: LOW

## Step 02 Summary

Added the Unrounded cost column to the Cost Table report to show usage cost with precision up to six decimal places.

## Extended Definition

Added the Unrounded cost column to the Cost Table report to show usage cost with precision up to six decimal places.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/billing/docs/how-to/reports](https://docs.cloud.google.com/billing/docs/how-to/reports)
- [https://docs.cloud.google.com/billing/docs/how-to/cost-table](https://docs.cloud.google.com/billing/docs/how-to/cost-table)
- [https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables](https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables)

## Supporting Pages

### "Analyze billing data and cost trends with Reports \_|\_ Cloud Billing \_\

- URL: [https://docs.cloud.google.com/billing/docs/how-to/reports](https://docs.cloud.google.com/billing/docs/how-to/reports)
- Source ID: `site-docs-root`
- Final score: 218
- Re-rank relevance: N/A

Evidence snippets:
- Analyze the report when grouped by Project hierarchy You can sort the table data on different columns to view the project hierarchy costs in different ways: To visualize all of the projects that have the same project hierarchy, sort the table by the Project hierarchy column.
- Negotiated savings: When you set the report time range by Invoice month , starting with the May 2021 invoice, Cloud Billing accounts associated with a custom pricing contract display Negotiated savings as a savings column, separate from the List cost column.
- If your Cloud Billing account is associated with a custom pricing contract and your report settings result in the display of the Negotiated savings column, you will see a List cost column in your CSV download .
- Negotiated savings: When you set the report time range by Usage date , the Cost column displays your costs calculated using the prices that are applicable to your Cloud Billing account.

### "View and download the cost details of your invoice or statement \_|\_ Cloud\

- URL: [https://docs.cloud.google.com/billing/docs/how-to/cost-table](https://docs.cloud.google.com/billing/docs/how-to/cost-table)
- Source ID: `site-docs-root`
- Final score: 204
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Figure 3 - Flat table view : Example of the Cost table report with no grouping option selected, and a few columns deselected for display (such as billing account name and billing account ID).
- Columns in the Cost table The following data is available in the Cost table report (if applicable to your Cloud Billing account).
- To gain this permission, ask your administrator to grant you one of the following Cloud Billing IAM roles on your Cloud Billing account: Billing Account Viewer Billing Account Costs Manager Billing Account Administrator For more information about billing permissions, see: Overview of Cloud Billing access control Create custom roles for Cloud Billing Understanding predefined IAM roles for Cloud Billing Access the report To view the Cost table report for your Cloud Billing account: In the Google Cloud console, go to your Cloud Billing account.
- CSV file name For the Cost table report, the file name follows this pattern: [Billing Account name] Cost table, [YYYY-MM-DD] — [YYYY-MM-DD].csv For example, a CSV file of the cost table data downloaded for a Cloud Billing account named My Billing Account , for an invoice month of March 2023 , is named: My Billing Account Cost table, 2023-03-01 — 2023-03-31.csv Note: If you download a report with the same invoice month multiple times, then the default report name will be the same.

### "Understand the Cloud Billing data tables in BigQuery \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables](https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables)
- Source ID: `site-docs-root-2`
- Final score: 196
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Resource-level tags are available for the following resources: Compute Engine instances Spanner instances Cloud Run services Artifact Registry repositories Related topics Topics related to exported Cloud Billing data Set up Cloud Billing data export to BigQuery Standard usage cost table Detailed usage cost table Pricing data table Visualize spend over time with Looker Studio Cost and pricing reports available in the Google Cloud console View your Cloud Billing reports and cost trends View and download the cost details of your invoice or statement View and download prices for Google's cloud services Understand your savings with cost breakdown reports Analyze the effectiveness of your committed use discounts View your cost and payment history Previous arrow back Set up billing data export to BigQuery Next Structure of Standard data export arrow forward Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- The table schema for any of the Cloud Billing data exports can change When the table schema changes, such as when new fields are added to a BigQuery table schema for a Cloud Billing data export, any queries that directly reference the exported columns might fail.
- Home Documentation Costs and usage management Cloud Billing Guides Send feedback Understand the Cloud Billing data tables in BigQuery Stay organized with collections Save and categorize content based on your preferences.
- Because the usage reporting frequency varies by Google Cloud service, you might not see Cloud Billing usage and cost data right away for all recently used Google Cloud services.

