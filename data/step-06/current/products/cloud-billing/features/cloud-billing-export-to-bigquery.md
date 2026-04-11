---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T20:10:07.377Z"
product_name: "Cloud Billing"
product_slug: "cloud-billing"
feature_name: "Cloud Billing export to BigQuery"
feature_slug: "cloud-billing-export-to-bigquery"
latest_feature_date: "2017-11-15"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/standard-usage"
  - "https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/detailed-usage"
  - "https://docs.cloud.google.com/billing/docs/how-to/reports"
keywords:
  - "billing"
  - "export"
  - "to"
  - "publishes"
  - "sku"
  - "usage"
  - "and"
  - "cost"
---

# Cloud Billing export to BigQuery

Product: Cloud Billing
Coverage: LOW

## Step 02 Summary

Cloud Billing export to BigQuery publishes SKU usage and cost data on a recurring basis into a BigQuery dataset for analysis and reporting.

## Extended Definition

Cloud Billing export to BigQuery publishes SKU usage and cost data on a recurring basis into a BigQuery dataset for analysis and reporting.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/standard-usage](https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/standard-usage)
- [https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/detailed-usage](https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/detailed-usage)
- [https://docs.cloud.google.com/billing/docs/how-to/reports](https://docs.cloud.google.com/billing/docs/how-to/reports)

## Supporting Pages

### "Structure of Standard data export \_|\_ Cloud Billing \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/standard-usage](https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/standard-usage)
- Source ID: `site-docs-root-2`
- Final score: 246
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The following code sample shows how to create a basic query that returns the total cost of corrections or late-monetized usage: SELECT SUM ( cost ) + SUM ( IFNULL (( SELECT SUM ( c . amount ) FROM UNNEST ( credits ) c ), 0 )) AS total FROM project . dataset . gcp billing export v1 XXXXXX - XXXXXX - XXXXXX WHERE invoice . month = '202311' AND DATE ( TIMESTAMP TRUNC ( usage start time , Day , 'US/Pacific' )) < '2023-11-01' ; For a query example that returns a cost breakdown by service , for invoice charges, where the usage date occurred before the invoice month , see Query cost details to view corrections or late-monetized usage by service for a specified invoice month in "Example queries for Cloud Billing data export." About promotional credits in custom pricing contracts If you have a custom pricing contract, you might receive promotional credits to use on Google Cloud as part of the contract.
- Common values used in the example standard cost queries The query examples in this section use the following value for Table name : project.dataset.gcp billing export v1 XXXXXX XXXXXX XXXXXX These query examples also work with the detailed usage cost data exported to BigQuery, although they aren't written to retrieve any of the resource-level information that's provided with the detailed usage cost export option.
- Standard SQL SELECT invoice . month AS invoice month , SUM ( cost ) as commitment fees FROM project . dataset . gcp billing export v1 XXXXXX XXXXXX XXXXXX WHERE LOWER ( sku . description ) LIKE "commitment%" GROUP BY 1 Viewing commitment credits To view your committed use discount credits in your billing data export, use the following sample query.
- When you enable the standard usage cost data export for the first time in Cloud Billing, if you select a dataset configured to use a multi-region location (EU or US), Cloud Billing data will be available retroactively from the start of the previous month.

### "Structure of Detailed data export \_|\_ Cloud Billing \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/detailed-usage](https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/detailed-usage)
- Source ID: `site-docs-root-2`
- Final score: 234
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Tags ) AS tag WHERE tag . key = 'gcp-product' AND tag . value = 'vertex ai' AND tag . inherited = TRUE ) AND sl reservation . value = ' RESERVATION NAME ' AND sl project id . value = ' PROJECT ID ' GROUP BY consumer project id , sku description , usage unit ORDER BY consumer project id , sku description , usage unit ; Sample results The following output shows the contribution of each project to total usage costs while consuming the reservation. consumer project id sku description usage unit total usage amount project1 N1 Predefined Instance Core running in Americas seconds 4221572 project1 N1 Predefined Instance Ram running in Americas byte-seconds 16998309356466500 project1 Nvidia Tesla T4 GPU running in Americas seconds 1057391 project2 N1 Predefined Instance Core running in Americas seconds 3996192 project2 N1 Predefined Instance Ram running in Americas byte-seconds 16009292257431300 project2 Nvidia Tesla T4 GPU running in Americas seconds 993985 Related topics For information related to exported Cloud Billing data, see the following: Set up Cloud Billing data export to BigQuery.
- SELECT t . project . id AS consumer project id , t . sku . description AS sku description , CASE WHEN t . resource . global name NOT LIKE '%instances/%' THEN 'Unused Capacity' WHEN t . resource . name IS NOT NULL AND t . resource . name != '' THEN 'Instance Usage' ELSE 'Other Reservation Cost' END AS usage category , SUM ( t . usage . amount ) AS total usage amount , t . usage . unit AS usage unit , SUM ( t . cost ) AS total cost usd FROM project - ID . dataset . gcp billing export resource v1 X AS t LEFT JOIN UNNEST ( t . system labels ) AS sl reservation ON sl reservation . key = 'compute.googleapis.com/reservation name' LEFT JOIN UNNEST ( t . system labels ) AS sl project id ON sl project id . key = 'compute.googleapis.com/reservation project id' WHERE t . service . id = '6F81-5844-456A' AND DATE ( TIMESTAMP TRUNC ( t .
- PARTITIONTIME , DAY )) = '2025-09-16' AND t . sku . description LIKE '%Core%' AND sl reservation . value LIKE '%tc-billing-case2-res-1757983801%' AND t . resource . global name NOT LIKE '%allocation/%' AND t . resource . name IS NOT NULL AND t . resource . name != '' ORDER BY t . usage start time , t . project . id , t . resource . name ; Sample results: usage start time usage end time consumer project id instance name usage amount 2025-09-16 00:00:00.000000 UTC 2025-09-16 01:00:00.000000 UTC disco-sector-292704 projects/204187533293/instances/tc-billing-case2-ins0-1757983801 552 2025-09-16 00:00:00.000000 UTC 2025-09-16 01:00:00.000000 UTC disco-sector-292704 projects/204187533293/instances/tc-billing-case2-ins1-1757983801 533 2025-09-16 00:00:00.000000 UTC 2025-09-16 01:00:00.000000 UTC flash-freehold-292704 projects/978655420110/instances/tc-billing-case2-ins2-1757983801 517 2025-09-16 01:00:00.000000 UTC 2025-09-16 02:00:00.000000 UTC disco-sector-292704 projects/204187533293/instances/tc-billing-case2-ins0-1757983801 3600 2025-09-16 01:00:00.000000 UTC 2025-09-16 02:00:00.000000 UTC disco-sector-292704 projects/204187533293/instances/tc-billing-case2-ins1-1757983801 3600 2025-09-16 01:00:00.000000 UTC 2025-09-16 02:00:00.000000 UTC flash-freehold-292704 projects/978655420110/instances/tc-billing-case2-ins2-1757983801 3600 2025-09-16 02:00:00.000000 UTC 2025-09-16 03:00:00.000000 UTC disco-sector-292704 projects/204187533293/instances/tc-billing-case2-ins0-1757983801 3022 2025-09-16 02:00:00.000000 UTC 2025-09-16 03:00:00.000000 UTC disco-sector-292704 projects/204187533293/instances/tc-billing-case2-ins0-1757983801 79 2025-09-16 02:00:00.000000 UTC 2025-09-16 03:00:00.000000 UTC disco-sector-292704 projects/204187533293/instances/tc-billing-case2-ins1-1757983801 79 2025-09-16 02:00:00.000000 UTC 2025-09-16 03:00:00.000000 UTC disco-sector-292704 projects/204187533293/instances/tc-billing-case2-ins1-1757983801 3086 2025-09-16 02:00:00.000000 UTC 2025-09-16 03:00:00.000000 UTC flash-freehold-292704 projects/978655420110/instances/tc-billing-case2-ins2-1757983801 3151 2025-09-16 02:00:00.000000 UTC 2025-09-16 03:00:00.000000 UTC flash-freehold-292704 projects/978655420110/instances/tc-billing-case2-ins2-1757983801 79 Analyze Vertex AI reservation usage using BigQuery To analyze how first-party (1P) products, such as Vertex AI, consume your shared reservations across projects where Vertex AI jobs are active, use the following system labels in BigQuery: compute.googleapis.com/reservation name compute.googleapis.com/reservation project id For more information about how to share reservations with first-party (1P) products in Vertex AI, see the following: Use reservations with training Use reservations with online inference Use reservations with Vertex AI Workbench instances The following example queries show how to use these labels to get detailed visibility into your reservation usage, monitor how instances consume these reservations, and perform in-depth cost analysis.
- The following code sample shows how to create a basic query that returns the total cost of corrections or late-monetized usage: SELECT SUM ( cost ) + SUM ( IFNULL (( SELECT SUM ( c . amount ) FROM UNNEST ( credits ) c ), 0 )) AS total FROM project . dataset . gcp billing export v1 XXXXXX - XXXXXX - XXXXXX WHERE invoice . month = '202311' AND DATE ( TIMESTAMP TRUNC ( usage start time , Day , 'US/Pacific' )) < '2023-11-01' ; For a query example that returns a cost breakdown by service , for invoice charges, where the usage date occurred before the invoice month , see Query cost details to view corrections or late-monetized usage by service for a specified invoice month in "Example queries for Cloud Billing data export." About promotional credits in custom pricing contracts If you have a custom pricing contract, you might receive promotional credits to use on Google Cloud as part of the contract.

### "Analyze billing data and cost trends with Reports \_|\_ Cloud Billing \_\

- URL: [https://docs.cloud.google.com/billing/docs/how-to/reports](https://docs.cloud.google.com/billing/docs/how-to/reports)
- Source ID: `site-docs-root`
- Final score: 226
- Re-rank relevance: N/A

Evidence snippets:
- Prerequisites to generate and run a query To generate a query from a Cloud Billing Report , ensure you and your Cloud Billing account meet the following requirements: On your Cloud Billing account, Cloud Billing data export to BigQuery must be enabled, for either the standard usage cost data or detailed usage cost data .
- Related topics Export Cloud Billing data to BigQuery Understand your savings with cost breakdown reports View your cost and payment history Create, modify, or close your Cloud Billing account Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Description : The current calendar month's daily cost for all services and SKUs, grouped by Service (for example, Compute Engine or Cloud Storage), including any usage-specific savings applied, but not including invoice-level charges or credits such as taxes and adjustments.
- Promotional credits for custom pricing contracts : If you have a custom pricing contract with Google Cloud, and received promotional credits that apply to costs at list prices , your report includes a service called Invoice , with a SKU called Contract billing adjustment .

