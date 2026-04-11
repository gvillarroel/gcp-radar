---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T20:10:07.335Z"
product_name: "Cloud Billing"
product_slug: "cloud-billing"
feature_name: "Cloud Billing SKU price export to BigQuery"
feature_slug: "cloud-billing-sku-price-export-to-bigquery"
latest_feature_date: "2020-07-23"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/standard-usage"
  - "https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-setup"
  - "https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/detailed-usage"
keywords:
  - "billing"
  - "sku"
  - "price"
  - "export"
  - "to"
  - "now"
  - "supports"
  - "exporting"
---

# Cloud Billing SKU price export to BigQuery

Product: Cloud Billing
Coverage: LOW

## Step 02 Summary

Cloud Billing now supports exporting Google Cloud and Google Maps Platform SKU pricing information to BigQuery for analysis and joins.

## Extended Definition

Cloud Billing now supports exporting Google Cloud and Google Maps Platform SKU pricing information to BigQuery for analysis and joins.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/standard-usage](https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/standard-usage)
- [https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-setup](https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-setup)
- [https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/detailed-usage](https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/detailed-usage)

## Supporting Pages

### "Structure of Standard data export \_|\_ Cloud Billing \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/standard-usage](https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/standard-usage)
- Source ID: `site-docs-root-2`
- Final score: 188
- Re-rank relevance: N/A

Evidence snippets:
- Row name project labels total cost total credits 1 CTG - Dev [{"key":"ctg p env","value":"dev"}] 79.140979 -4.763796 2 CTG - Prod [{"key":"ctg p env","value":"prod"},{"key":"ctg team","value":"eng"}] 32.466272 -3.073356 3 CTG - Sandbox [{"key":"ctg p env","value":"dev"}] 0 0 4 CTG - Storage [{"key":"ctg p env","value":"prod"},{"key":"ctg team","value":"data"}] 7.645793 -0.003761 Related topics Topics related to exported Cloud Billing data Set up Cloud Billing data export to BigQuery Example queries for Cloud Billing data export to BigQuery Visualize spend over time with Looker Studio Cost and pricing reports available in the Google Cloud console View your Cloud Billing reports and cost trends View and download the cost details of your invoice or statement View and download prices for Google's cloud services Understand your savings with cost breakdown reports Analyze the effectiveness of your committed use discounts View your cost and payment history Previous arrow back Understand the billing data tables in BigQuery Next Structure of Detailed data export arrow forward Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Standard SQL SELECT invoice . month AS invoice month , SUM ( cost ) as commitment fees FROM project . dataset . gcp billing export v1 XXXXXX XXXXXX XXXXXX WHERE LOWER ( sku . description ) LIKE "commitment%" GROUP BY 1 Viewing commitment credits To view your committed use discount credits in your billing data export, use the following sample query.
- For the standard data export , the first full day of data in this field is July 15, 2025. cost at effective price default Numeric Cost per the default consumption model inclusive of any negotiated discounts reflected in the custom pricing in the contract linked to your Cloud Billing account (if applicable).
- Note: The first full day of data in this field is July 15, 2025. price.list price consumption model Numeric SKU list price per the applicable consumption model before any negotiated discounts reflected in the custom pricing in the contract linked to your Cloud Billing account (if applicable).

### Set up Cloud Billing data export to BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-setup](https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-setup)
- Source ID: `site-docs-root-2`
- Final score: 184
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Resource-level tags are available for the following resources: Compute Engine instances Spanner instances Cloud Run services Artifact Registry repositories Related topics Topics related to exported Cloud Billing data Understanding the Cloud Billing data tables in BigQuery Example queries for Cloud Billing data export to BigQuery Visualize spend over time with Looker Studio Cost and pricing reports available in the Google Cloud console View your Cloud Billing reports and cost trends View and download the cost details of your invoice or statement View and download prices for Google's cloud services Understand your savings with cost breakdown reports Analyze the effectiveness of your committed use discounts View your cost and payment history Previous arrow back Overview of billing data export to BigQuery Next Understand the billing data tables in BigQuery arrow forward Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- If you use an existing dataset, review the limitations that might impact exporting your billing data to BigQuery, such as being unable to export data to datasets configured to use customer-managed key encryption, or being unable to use a dataset configured with an unsupported region location.
- These are the types of data you can enable to export: Standard usage cost data - Contains standard Cloud Billing account cost usage information, such as account ID, invoice date, services, SKUs, projects, labels, locations, cost, usage, credits, adjustments, and currency.
- If you use an existing dataset, review the limitations that might impact exporting your billing data to BigQuery, such as being unable to export data to datasets configured to use a CMEK , or being unable to use a dataset configured with an unsupported region location.

### "Structure of Detailed data export \_|\_ Cloud Billing \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/detailed-usage](https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/detailed-usage)
- Source ID: `site-docs-root-2`
- Final score: 176
- Re-rank relevance: N/A

Evidence snippets:
- GKE cluster costs before credits SELECT SUM ( cost ) AS cost before credits , labels . value AS cluster name FROM project - ID . dataset . gcp billing export resource v1 XXXXXX - XXXXXX - XXXXXX LEFT JOIN UNNEST ( labels ) as labels ON labels . key = "goog-k8s-cluster-name" GROUP BY labels . value ; GKE costs after credits by namespace SELECT labels . value as namespace , SUM ( cost ) + SUM ( IFNULL (( SELECT SUM ( c . amount ) FROM UNNEST ( credits ) c ), 0 )) AS cost after credits , FROM project - ID . dataset . gcp billing export resource v1 XXXXXX - XXXXXX - XXXXXX LEFT JOIN UNNEST ( labels ) as labels ON labels . key = "k8s-namespace" GROUP BY namespace ; GKE costs by SKU SELECT project . id AS project id , labels . value AS cluster name , sku . id AS sku id , sku . description AS sku description , SUM ( cost ) AS cost FROM project - ID . dataset . gcp billing export resource v1 XXXXXX - XXXXXX - XXXXXX JOIN UNNEST ( labels ) AS labels ON labels . key = "goog-k8s-cluster-name" GROUP BY cluster name , project id , sku description , sku id ; Query examples with tags The following examples illustrate ways to query your data with tags.
- Tags ) AS tag WHERE tag . key = 'gcp-product' AND tag . value = 'vertex ai' AND tag . inherited = TRUE ) AND sl reservation . value = ' RESERVATION NAME ' AND sl project id . value = ' PROJECT ID ' GROUP BY consumer project id , sku description , usage unit ORDER BY consumer project id , sku description , usage unit ; Sample results The following output shows the contribution of each project to total usage costs while consuming the reservation. consumer project id sku description usage unit total usage amount project1 N1 Predefined Instance Core running in Americas seconds 4221572 project1 N1 Predefined Instance Ram running in Americas byte-seconds 16998309356466500 project1 Nvidia Tesla T4 GPU running in Americas seconds 1057391 project2 N1 Predefined Instance Core running in Americas seconds 3996192 project2 N1 Predefined Instance Ram running in Americas byte-seconds 16009292257431300 project2 Nvidia Tesla T4 GPU running in Americas seconds 993985 Related topics For information related to exported Cloud Billing data, see the following: Set up Cloud Billing data export to BigQuery.
- SELECT t . project . id AS consumer project id , t . sku . description AS sku description , CASE WHEN t . resource . global name NOT LIKE '%instances/%' THEN 'Unused Capacity' WHEN t . resource . name IS NOT NULL AND t . resource . name != '' THEN 'Instance Usage' ELSE 'Other Reservation Cost' END AS usage category , SUM ( t . usage . amount ) AS total usage amount , t . usage . unit AS usage unit , SUM ( t . cost ) AS total cost usd FROM project - ID . dataset . gcp billing export resource v1 X AS t LEFT JOIN UNNEST ( t . system labels ) AS sl reservation ON sl reservation . key = 'compute.googleapis.com/reservation name' LEFT JOIN UNNEST ( t . system labels ) AS sl project id ON sl project id . key = 'compute.googleapis.com/reservation project id' WHERE t . service . id = '6F81-5844-456A' AND DATE ( TIMESTAMP TRUNC ( t .
- SELECT t . sku . description AS sku description , t . usage start time AS usage start time , t . usage end time AS usage end time , SUM ( t . usage . amount ) AS total usage amount FROM project - ID . dataset . gcp billing export resource v1 X AS t LEFT JOIN UNNEST ( t . system labels ) AS sl reservation ON sl reservation . key = 'compute.googleapis.com/reservation name' LEFT JOIN UNNEST ( t . system labels ) AS sl project id ON sl project id . key = 'compute.googleapis.com/reservation project id' WHERE TRUE AND t . service . id = '6F81-5844-456A' AND t . invoice . month = '202602' AND EXISTS ( SELECT 1 FROM UNNEST ( t .

