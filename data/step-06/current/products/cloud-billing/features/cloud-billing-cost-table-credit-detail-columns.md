---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T13:57:37.626Z"
product_name: "Cloud Billing"
product_slug: "cloud-billing"
feature_name: "Cloud Billing Cost Table credit detail columns"
feature_slug: "cloud-billing-cost-table-credit-detail-columns"
latest_feature_date: "2020-08-07"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/billing/docs/how-to/cost-table"
  - "https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/detailed-usage"
  - "https://docs.cloud.google.com/billing/docs/how-to/reports"
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
Coverage: MEDIUM

## Step 02 Summary

Added Credit ID and Credit name columns to the Cost Table report to provide more granular visibility into credits by project and credit type.

## Extended Definition

Added Credit ID and Credit name columns to the Cost Table report to provide more granular visibility into credits by project and credit type.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/billing/docs/how-to/cost-table](https://docs.cloud.google.com/billing/docs/how-to/cost-table)
- [https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/detailed-usage](https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/detailed-usage)
- [https://docs.cloud.google.com/billing/docs/how-to/reports](https://docs.cloud.google.com/billing/docs/how-to/reports)

## Supporting Pages

### "View and download the cost details of your invoice or statement \_|\_ Cloud\

- URL: [https://docs.cloud.google.com/billing/docs/how-to/cost-table](https://docs.cloud.google.com/billing/docs/how-to/cost-table)
- Source ID: `site-docs-root`
- Final score: 193
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Starting with the September 2020 invoice or statement, the Cost table report includes header information for the document providing details such as the invoice number, the billing account ID, and the invoice or statement totals.
- Figure 3 - Flat table view : Example of the Cost table report with no grouping option selected, and a few columns deselected for display (such as billing account name and billing account ID).
- If your promotional credits apply to costs that are calculated at the list price , in the Cost table report, there's a service called Invoice , with a SKU called Contract billing adjustment .
- How to read the cost table The Cost table shows you a detailed breakdown of all your costs and credits for the selected invoice or statement and provides tools for cost analysis.

### "Structure of Detailed data export \_|\_ Cloud Billing \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/detailed-usage](https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/detailed-usage)
- Source ID: `site-docs-root-2`
- Final score: 187
- Re-rank relevance: N/A

Evidence snippets:
- Common values used in the example detailed cost queries The query examples in this section use the following value for Table name : project.dataset.gcp billing export resource v1 XXXXXX XXXXXX XXXXXX Return the resource-level costs on an invoice The following queries demonstrate two ways of viewing resource-level cost and credit values on an invoice using exported billing data.
- When you use the detailed usage cost data in BigQuery, note the following: The table schema for the detailed Cloud Billing data export can change over time, such as when new fields are added to the detailed export.
- Standard SQL SELECT invoice . month , resource . name , SUM ( cost ) + SUM ( IFNULL (( SELECT SUM ( c . amount ) FROM UNNEST ( credits ) c ), 0 )) AS total , ( SUM ( CAST ( cost 1000000 AS int64 )) + SUM ( IFNULL (( SELECT SUM ( CAST ( c . amount 1000000 as int64 )) FROM UNNEST ( credits ) c ), 0 ))) / 1000000 AS total exact FROM project . dataset . gcp billing export resource v1 XXXXXX XXXXXX XXXXXX GROUP BY 1 , 2 ORDER BY 1 ASC , 2 ASC ; For example, the result of the preceding query might be: Row month name total total exact 1 201901 null $1005.004832999999984 $1005.00 2 201901 backend1 $781.8499760000028 $781.85 3 201902 null $953.0034923645475983 $953.03 4 201902 backend1 $992.3101739999999717 $992.31 5 201902 bitnami-launchpad-wordpress-1-wordpress $1.2817819999999998 $1.28 Return details by cost type for each resource, per invoice month This query shows the totals for each cost type for each resource.name per month.
- The following code sample shows how to create a basic query that returns the total cost of corrections or late-monetized usage: SELECT SUM ( cost ) + SUM ( IFNULL (( SELECT SUM ( c . amount ) FROM UNNEST ( credits ) c ), 0 )) AS total FROM project . dataset . gcp billing export v1 XXXXXX - XXXXXX - XXXXXX WHERE invoice . month = '202311' AND DATE ( TIMESTAMP TRUNC ( usage start time , Day , 'US/Pacific' )) < '2023-11-01' ; For a query example that returns a cost breakdown by service , for invoice charges, where the usage date occurred before the invoice month , see Query cost details to view corrections or late-monetized usage by service for a specified invoice month in "Example queries for Cloud Billing data export." About promotional credits in custom pricing contracts If you have a custom pricing contract, you might receive promotional credits to use on Google Cloud as part of the contract.

### "Analyze billing data and cost trends with Reports \_|\_ Cloud Billing \_\

- URL: [https://docs.cloud.google.com/billing/docs/how-to/reports](https://docs.cloud.google.com/billing/docs/how-to/reports)
- Source ID: `site-docs-root`
- Final score: 173
- Re-rank relevance: N/A

Evidence snippets:
- Prerequisites to generate and run a query To generate a query from a Cloud Billing Report , ensure you and your Cloud Billing account meet the following requirements: On your Cloud Billing account, Cloud Billing data export to BigQuery must be enabled, for either the standard usage cost data or detailed usage cost data .
- Analyze the report when grouped by Project hierarchy You can sort the table data on different columns to view the project hierarchy costs in different ways: To visualize all of the projects that have the same project hierarchy, sort the table by the Project hierarchy column.
- Promotional credits for custom pricing contracts : If you have a custom pricing contract with Google Cloud, and received promotional credits that apply to costs at list prices , your report includes a service called Invoice , with a SKU called Contract billing adjustment .
- This document teaches you how to access Cloud Billing Reports in the Google Cloud console and how to configure reports, providing details on how to use the various report settings, filters, and report features to track and understand your Google Cloud usage costs.

