---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T13:57:37.586Z"
product_name: "Cloud Billing"
product_slug: "cloud-billing"
feature_name: "CSV download for Cloud Billing reports"
feature_slug: "csv-download-for-cloud-billing-reports"
latest_feature_date: "2023-04-18"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/billing/docs/how-to/reports"
  - "https://docs.cloud.google.com/billing/docs/how-to/cost-table"
  - "https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/detailed-usage"
keywords:
  - "csv"
  - "download"
  - "billing"
  - "reports"
  - "adds"
  - "export"
  - "major"
  - "including"
---

# CSV download for Cloud Billing reports

Product: Cloud Billing
Coverage: MEDIUM

## Step 02 Summary

Adds CSV export support for major Cloud Billing reports, including Cost Table, Pricing Table, Reports, Cost Breakdown, and CUD dashboards.

## Extended Definition

Adds CSV export support for major Cloud Billing reports, including Cost Table, Pricing Table, Reports, Cost Breakdown, and CUD dashboards.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/billing/docs/how-to/reports](https://docs.cloud.google.com/billing/docs/how-to/reports)
- [https://docs.cloud.google.com/billing/docs/how-to/cost-table](https://docs.cloud.google.com/billing/docs/how-to/cost-table)
- [https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/detailed-usage](https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/detailed-usage)

## Supporting Pages

### "Analyze billing data and cost trends with Reports \_|\_ Cloud Billing \_\

- URL: [https://docs.cloud.google.com/billing/docs/how-to/reports](https://docs.cloud.google.com/billing/docs/how-to/reports)
- Source ID: `site-docs-root`
- Final score: 154
- Re-rank relevance: N/A

Evidence snippets:
- To view the cost reports for your Cloud Billing account, including viewing the cost information for all of the Google Cloud projects that are linked to the billing account, you need a role on your Cloud Billing account that includes the following permissions : billing.accounts.get billing.accounts.getSpendingInformation To gain these permissions using a predefined role , ask your administrator to grant you one of the following Cloud Billing IAM roles on your Cloud Billing account: Billing Account Viewer Billing Account Costs Manager Billing Account Administrator For more information about Cloud Billing permissions, see: Overview of Cloud Billing access control Create custom roles for Cloud Billing Understanding predefined Identity and Access Management roles for Cloud Billing To view all costs for an individual Google Cloud project, you need billing-specific permissions on the Google Cloud project .
- CSV file name For the Reports data, the file name follows this pattern: [Billing Account name] Reports, [YYYY-MM-DD] — [YYYY-MM-DD].csv For example, a CSV file of the Reports data downloaded for a Cloud Billing account named My Billing Account , for a date range of October 1 to December 31, 2022 , is named: My Billing Account Reports, 2022-10-01 - 2022-12-31.csv Duplicate report names If you download a report with the same date range multiple times, then the default report name will be the same.
- Related topics Export Cloud Billing data to BigQuery Understand your savings with cost breakdown reports View your cost and payment history Create, modify, or close your Cloud Billing account Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Permissions required to access reports Depending on your level of Cloud Billing access, you can view cost reports for a Cloud Billing account (including viewing the costs for more than one project linked to the billing account), or you can view cost reports for individual projects.

### "View and download the cost details of your invoice or statement \_|\_ Cloud\

- URL: [https://docs.cloud.google.com/billing/docs/how-to/cost-table](https://docs.cloud.google.com/billing/docs/how-to/cost-table)
- Source ID: `site-docs-root`
- Final score: 136
- Re-rank relevance: N/A

Evidence snippets:
- Related topics Get an invoice, statement, or receipt Understand your monthly invoice View your Cloud Billing reports and cost trends Export Cloud Billing data to BigQuery View your cost and payment history Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- To view your usage costs by actual usage date (calendar date or date range), see the online reports or analyze your exported billing data .
- Online Cloud Billing reports and Cloud Billing Export to BigQuery don't separate credits and discounts into separate line items.
- CSV file name For the Cost table report, the file name follows this pattern: [Billing Account name] Cost table, [YYYY-MM-DD] — [YYYY-MM-DD].csv For example, a CSV file of the cost table data downloaded for a Cloud Billing account named My Billing Account , for an invoice month of March 2023 , is named: My Billing Account Cost table, 2023-03-01 — 2023-03-31.csv Note: If you download a report with the same invoice month multiple times, then the default report name will be the same.

### "Structure of Detailed data export \_|\_ Cloud Billing \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/detailed-usage](https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/detailed-usage)
- Source ID: `site-docs-root-2`
- Final score: 121
- Re-rank relevance: N/A

Evidence snippets:
- Standard SQL SELECT invoice . month , cost type , resource . name , SUM ( cost ) + SUM ( IFNULL (( SELECT SUM ( c . amount ) FROM UNNEST ( credits ) c ), 0 )) AS total , ( SUM ( CAST ( cost 1000000 AS int64 )) + SUM ( IFNULL (( SELECT SUM ( CAST ( c . amount 1000000 as int64 )) FROM UNNEST ( credits ) c ), 0 ))) / 1000000 AS total exact FROM project . dataset . gcp billing export resource v1 XXXXXX XXXXXX XXXXXX GROUP BY 1 , 2 , 3 ORDER BY 1 ASC , 2 ASC , 3 ASC ; For example, the result of the preceding query might be: Row month cost type name total total exact 1 201901 regular null $1000.501209987994782 $1000.50 2 201901 rounding error null –$0.500489920049387 –$0.50 3 201901 tax null $10.000329958477891 $10.00 4 201901 adjustment null –$5.002572999387045 –$5.00 5 201901 regular backend1 $410.998795012082947 $411.00 2 201901 rounding error backend1 –$0.2404900489920378 –$0.24 3 201901 tax backend1 $4.105840329977189 $4.11 Get a breakdown of Google Kubernetes Engine (GKE) cluster costs This section provides examples of filtering GKE cluster costs in your BigQuery export reports.
- After you enable GKE cost allocation, your detailed billing export starts including additional line items for your GKE resources from that date.
- GKE cluster costs before credits SELECT SUM ( cost ) AS cost before credits , labels . value AS cluster name FROM project - ID . dataset . gcp billing export resource v1 XXXXXX - XXXXXX - XXXXXX LEFT JOIN UNNEST ( labels ) as labels ON labels . key = "goog-k8s-cluster-name" GROUP BY labels . value ; GKE costs after credits by namespace SELECT labels . value as namespace , SUM ( cost ) + SUM ( IFNULL (( SELECT SUM ( c . amount ) FROM UNNEST ( credits ) c ), 0 )) AS cost after credits , FROM project - ID . dataset . gcp billing export resource v1 XXXXXX - XXXXXX - XXXXXX LEFT JOIN UNNEST ( labels ) as labels ON labels . key = "k8s-namespace" GROUP BY namespace ; GKE costs by SKU SELECT project . id AS project id , labels . value AS cluster name , sku . id AS sku id , sku . description AS sku description , SUM ( cost ) AS cost FROM project - ID . dataset . gcp billing export resource v1 XXXXXX - XXXXXX - XXXXXX JOIN UNNEST ( labels ) AS labels ON labels . key = "goog-k8s-cluster-name" GROUP BY cluster name , project id , sku description , sku id ; Query examples with tags The following examples illustrate ways to query your data with tags.
- Tags ) AS tag WHERE tag . key = 'gcp-product' AND tag . value = 'vertex ai' AND tag . inherited = TRUE ) AND sl reservation . value = ' RESERVATION NAME ' AND sl project id . value = ' PROJECT ID ' GROUP BY consumer project id , sku description , usage unit ORDER BY consumer project id , sku description , usage unit ; Sample results The following output shows the contribution of each project to total usage costs while consuming the reservation. consumer project id sku description usage unit total usage amount project1 N1 Predefined Instance Core running in Americas seconds 4221572 project1 N1 Predefined Instance Ram running in Americas byte-seconds 16998309356466500 project1 Nvidia Tesla T4 GPU running in Americas seconds 1057391 project2 N1 Predefined Instance Core running in Americas seconds 3996192 project2 N1 Predefined Instance Ram running in Americas byte-seconds 16009292257431300 project2 Nvidia Tesla T4 GPU running in Americas seconds 993985 Related topics For information related to exported Cloud Billing data, see the following: Set up Cloud Billing data export to BigQuery.

