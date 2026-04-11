---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T20:10:07.333Z"
product_name: "Cloud Billing"
product_slug: "cloud-billing"
feature_name: "Cloud Billing Cost Table credit detail columns"
feature_slug: "cloud-billing-cost-table-credit-detail-columns"
latest_feature_date: "2020-08-07"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/billing/docs/how-to/reports"
  - "https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/detailed-usage"
  - "https://docs.cloud.google.com/billing/docs/how-to/cost-table"
keywords:
  - "billing"
  - "cost"
  - "table"
  - "credit"
  - "detail"
  - "columns"
  - "added"
  - "id"
---

# Cloud Billing Cost Table credit detail columns

Product: Cloud Billing
Coverage: LOW

## Step 02 Summary

Added Credit ID and Credit name columns to the Cost Table report to provide more granular visibility into credits by project and credit type.

## Extended Definition

Added Credit ID and Credit name columns to the Cost Table report to provide more granular visibility into credits by project and credit type.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/billing/docs/how-to/reports](https://docs.cloud.google.com/billing/docs/how-to/reports)
- [https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/detailed-usage](https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/detailed-usage)
- [https://docs.cloud.google.com/billing/docs/how-to/cost-table](https://docs.cloud.google.com/billing/docs/how-to/cost-table)

## Supporting Pages

### "Analyze billing data and cost trends with Reports \_|\_ Cloud Billing \_\

- URL: [https://docs.cloud.google.com/billing/docs/how-to/reports](https://docs.cloud.google.com/billing/docs/how-to/reports)
- Source ID: `site-docs-root`
- Final score: 210
- Re-rank relevance: N/A

Evidence snippets:
- This document teaches you how to access Cloud Billing Reports in the Google Cloud console and how to configure reports, providing details on how to use the various report settings, filters, and report features to track and understand your Google Cloud usage costs.
- If you want to view detailed costs per individual invoice , see the cost table report .
- If you want to view detailed costs per individual invoice , see the Cost table report.
- If you want to view detailed costs by individual invoice , see the Cost table report .

### "Structure of Detailed data export \_|\_ Cloud Billing \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/detailed-usage](https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/detailed-usage)
- Source ID: `site-docs-root-2`
- Final score: 210
- Re-rank relevance: N/A

Evidence snippets:
- Common values used in the example detailed cost queries The query examples in this section use the following value for Table name : project.dataset.gcp billing export resource v1 XXXXXX XXXXXX XXXXXX Return the resource-level costs on an invoice The following queries demonstrate two ways of viewing resource-level cost and credit values on an invoice using exported billing data.
- When you use the detailed usage cost data in BigQuery, note the following: The table schema for the detailed Cloud Billing data export can change over time, such as when new fields are added to the detailed export.
- Detailed usage cost data schema In your BigQuery dataset, your detailed Google Cloud usage cost data is loaded into a data table named gcp billing export resource v1 <BILLING ACCOUNT ID> .
- This document provides reference information for the schema of Cloud Billing detailed usage cost data that's exported to each table in BigQuery.

### "View and download the cost details of your invoice or statement \_|\_ Cloud\

- URL: [https://docs.cloud.google.com/billing/docs/how-to/cost-table](https://docs.cloud.google.com/billing/docs/how-to/cost-table)
- Source ID: `site-docs-root`
- Final score: 204
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Starting with the September 2020 invoice or statement, the Cost table report includes header information for the document providing details such as the invoice number, the billing account ID, and the invoice or statement totals.
- Figure 3 - Flat table view : Example of the Cost table report with no grouping option selected, and a few columns deselected for display (such as billing account name and billing account ID).
- How to read the cost table The Cost table shows you a detailed breakdown of all your costs and credits for the selected invoice or statement and provides tools for cost analysis.
- In the Cost table , information about your Savings options is shown in the Credit type , Credit name , and Credit ID columns.

