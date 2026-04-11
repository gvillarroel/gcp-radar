---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T20:10:07.269Z"
product_name: "Cloud Billing"
product_slug: "cloud-billing"
feature_name: "Granular BigQuery usage cost data in Cloud Billing export"
feature_slug: "granular-bigquery-usage-cost-data-in-cloud-billing-export"
latest_feature_date: "2023-10-19"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/billing/docs/how-to/reports"
  - "https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/detailed-usage"
  - "https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/pricing-data"
keywords:
  - "granular"
  - "usage"
  - "cost"
  - "in"
  - "billing"
  - "export"
  - "adds"
  - "the"
---

# Granular BigQuery usage cost data in Cloud Billing export

Product: Cloud Billing
Coverage: LOW

## Step 02 Summary

Adds support in the Cloud Billing Detailed export for viewing and filtering BigQuery dataset and job cost usage at finer granularity.

## Extended Definition

Adds support in the Cloud Billing Detailed export for viewing and filtering BigQuery dataset and job cost usage at finer granularity.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/billing/docs/how-to/reports](https://docs.cloud.google.com/billing/docs/how-to/reports)
- [https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/detailed-usage](https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/detailed-usage)
- [https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/pricing-data](https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/pricing-data)

## Supporting Pages

### "Analyze billing data and cost trends with Reports \_|\_ Cloud Billing \_\

- URL: [https://docs.cloud.google.com/billing/docs/how-to/reports](https://docs.cloud.google.com/billing/docs/how-to/reports)
- Source ID: `site-docs-root`
- Final score: 240
- Re-rank relevance: N/A

Evidence snippets:
- Prerequisites to generate and run a query To generate a query from a Cloud Billing Report , ensure you and your Cloud Billing account meet the following requirements: On your Cloud Billing account, Cloud Billing data export to BigQuery must be enabled, for either the standard usage cost data or detailed usage cost data .
- Related topics Export Cloud Billing data to BigQuery Understand your savings with cost breakdown reports View your cost and payment history Create, modify, or close your Cloud Billing account Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- When viewing costs by Invoice month , the following data is available in the Cloud Billing reports: Invoices generally include all costs incurred during a given calendar month, but the cost for some services' usage at the very end of a calendar month might roll over to the next month's invoice.
- Due to the complexity of our billing and processing systems, you might see a delay between your use of services, the usage charges being applied to your Google payments accounts, and the usage and costs being available to view in the various cost reports and dashboards.

### "Structure of Detailed data export \_|\_ Cloud Billing \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/detailed-usage](https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/detailed-usage)
- Source ID: `site-docs-root-2`
- Final score: 232
- Re-rank relevance: N/A

Evidence snippets:
- Tags ) AS tag WHERE tag . key = 'gcp-product' AND tag . value = 'vertex ai' AND tag . inherited = TRUE ) AND sl reservation . value = ' RESERVATION NAME ' AND sl project id . value = ' PROJECT ID ' GROUP BY consumer project id , sku description , usage unit ORDER BY consumer project id , sku description , usage unit ; Sample results The following output shows the contribution of each project to total usage costs while consuming the reservation. consumer project id sku description usage unit total usage amount project1 N1 Predefined Instance Core running in Americas seconds 4221572 project1 N1 Predefined Instance Ram running in Americas byte-seconds 16998309356466500 project1 Nvidia Tesla T4 GPU running in Americas seconds 1057391 project2 N1 Predefined Instance Core running in Americas seconds 3996192 project2 N1 Predefined Instance Ram running in Americas byte-seconds 16009292257431300 project2 Nvidia Tesla T4 GPU running in Americas seconds 993985 Related topics For information related to exported Cloud Billing data, see the following: Set up Cloud Billing data export to BigQuery.
- The following code sample shows how to create a basic query that returns the total cost of corrections or late-monetized usage: SELECT SUM ( cost ) + SUM ( IFNULL (( SELECT SUM ( c . amount ) FROM UNNEST ( credits ) c ), 0 )) AS total FROM project . dataset . gcp billing export v1 XXXXXX - XXXXXX - XXXXXX WHERE invoice . month = '202311' AND DATE ( TIMESTAMP TRUNC ( usage start time , Day , 'US/Pacific' )) < '2023-11-01' ; For a query example that returns a cost breakdown by service , for invoice charges, where the usage date occurred before the invoice month , see Query cost details to view corrections or late-monetized usage by service for a specified invoice month in "Example queries for Cloud Billing data export." About promotional credits in custom pricing contracts If you have a custom pricing contract, you might receive promotional credits to use on Google Cloud as part of the contract.
- SELECT t . project . id AS consumer project id , t . sku . description AS sku description , CASE WHEN t . resource . global name NOT LIKE '%instances/%' THEN 'Unused Capacity' WHEN t . resource . name IS NOT NULL AND t . resource . name != '' THEN 'Instance Usage' ELSE 'Other Reservation Cost' END AS usage category , SUM ( t . usage . amount ) AS total usage amount , t . usage . unit AS usage unit , SUM ( t . cost ) AS total cost usd FROM project - ID . dataset . gcp billing export resource v1 X AS t LEFT JOIN UNNEST ( t . system labels ) AS sl reservation ON sl reservation . key = 'compute.googleapis.com/reservation name' LEFT JOIN UNNEST ( t . system labels ) AS sl project id ON sl project id . key = 'compute.googleapis.com/reservation project id' WHERE t . service . id = '6F81-5844-456A' AND DATE ( TIMESTAMP TRUNC ( t .
- SELECT invoice . month AS invoice month , ROUND (( SUM ( CAST ( cost AS NUMERIC )) + SUM ( IFNULL (( SELECT SUM ( CAST ( c . amount AS NUMERIC )) FROM UNNEST ( credits ) AS c ), 0 ))), 2 ) AS net cost FROM project - ID . dataset . gcp billing export v1 XXXXXX - XXXXXX - XXXXXX WHERE "color" NOT IN ( SELECT key FROM UNNEST ( tags )) GROUP BY invoice month ORDER BY invoice month ; For example, the result of the preceding query might be: Row invoice month net cost 1 202202 0 2 202203 16.81 3 202204 54.09 4 202205 55.82 5 202206 54.09 6 202207 55.83 7 202208 31.49 Query using system labels System labels for Google Cloud reservations provide enhanced visibility into your reservation usage.

### "Structure of pricing data export \_|\_ Cloud Billing \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/pricing-data](https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/pricing-data)
- Source ID: `site-docs-root-2`
- Final score: 222
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- FROM my - billing - admin - project . my billing dataset . cloud pricing export as sku pricing , UNNEST ( sku pricing . list price . tiered rates ) as tier WHERE DATE ( PARTITIONTIME ) = "2020-07-20" AND sku . id = "2DA5-55D3-E679" ; Query results: Row sku id sku description service id service description pricing unit quantity start usage amount usd amount account currency amount 1 2DA5-55D3-E679 Requests 152E-C115-5142 Cloud Run 1000000.0 0.0 0.0 0.0 2 2DA5-55D3-E679 Requests 152E-C115-5142 Cloud Run 1000000.0 2000000.0 0.4 0.4 Related topics Topics related to exported Cloud Billing data Set up Cloud Billing data export to BigQuery Example queries for Cloud Billing data export to BigQuery Visualize spend over time with Looker Studio Cost and pricing reports available in the Google Cloud console View your Cloud Billing reports and cost trends View and download the cost details of your invoice or statement View and download prices for Google's cloud services Understand your savings with cost breakdown reports Analyze the effectiveness of your committed use discounts View your cost and payment history Previous arrow back Structure of Detailed data export Next Structure of CUD metadata export arrow forward Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- FROM my - billing - admin - project . my billing dataset . cloud pricing export as sku pricing , UNNEST ( sku pricing . list price . tiered rates ) as tier WHERE DATE ( PARTITIONTIME ) = "2020-07-20" AND sku . id = "2DA5-55D3-E679" ; Query results: Row sku id sku description service id service description pricing unit quantity start usage amount usd amount account currency amount 1 2DA5-55D3-E679 Requests 152E-C115-5142 Cloud Run 1000000.0 0.0 0.0 0.0 2 2DA5-55D3-E679 Requests 152E-C115-5142 Cloud Run 1000000.0 2000000.0 0.4 0.4 Use product taxonomy and geo taxonomy to query SKUs Beta This feature is subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the Service Specific Terms .
- FROM my - billing - admin - project . my billing dataset . cloud pricing export WHERE DATE ( PARTITIONTIME ) = "2020-07-20" AND sku . id = "2DA5-55D3-E679" ; Query results: Row sku id sku description service id service description aggregation info. aggregation level aggregation info. aggregation interval tiered rates. pricing unit quantity tiered rates. start usage amount tiered rates. usd amount tiered rates. account currency amount 1 2DA5-55D3-E679 Requests 152E-C115-5142 Cloud Run ACCOUNT MONTHLY 1000000 0 0 0 1000000 2000000 0.4 0.4 Example 2: Returns unnested data joined with the same table This example queries a single SKU to return the list price .
- FROM my - billing - admin - project . my billing dataset . cloud pricing export WHERE DATE ( PARTITIONTIME ) = "2020-07-20" AND sku . id = "2DA5-55D3-E679" ; Query results: Row sku id sku description service id service description aggregation info. aggregation level aggregation info. aggregation interval tiered rates. pricing unit quantity tiered rates. start usage amount tiered rates. usd amount tiered rates. account currency amount 1 2DA5-55D3-E679 Requests 152E-C115-5142 Cloud Run ACCOUNT MONTHLY 1000000 0 0 0 1000000 2000000 0.4 0.4 Example 2: Returns unnested data joined with the same table This example queries a single SKU to return the list price .

