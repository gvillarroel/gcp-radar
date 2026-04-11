---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T20:10:07.369Z"
product_name: "Cloud Billing"
product_slug: "cloud-billing"
feature_name: "System label fields in Cloud Billing export to BigQuery"
feature_slug: "system-label-fields-in-cloud-billing-export-to-bigquery"
latest_feature_date: "2018-09-17"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/detailed-usage"
  - "https://docs.cloud.google.com/billing/docs/how-to/reports"
  - "https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/standard-usage"
keywords:
  - "system"
  - "label"
  - "fields"
  - "in"
  - "billing"
  - "export"
  - "to"
  - "now"
---

# System label fields in Cloud Billing export to BigQuery

Product: Cloud Billing
Coverage: LOW

## Step 02 Summary

Cloud Billing export to BigQuery now includes additional system label fields, including machine specifications, for finer cost segmentation.

## Extended Definition

Cloud Billing export to BigQuery now includes additional system label fields, including machine specifications, for finer cost segmentation.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/detailed-usage](https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/detailed-usage)
- [https://docs.cloud.google.com/billing/docs/how-to/reports](https://docs.cloud.google.com/billing/docs/how-to/reports)
- [https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/standard-usage](https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/standard-usage)

## Supporting Pages

### "Structure of Detailed data export \_|\_ Cloud Billing \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/detailed-usage](https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/detailed-usage)
- Source ID: `site-docs-root-2`
- Final score: 230
- Re-rank relevance: N/A

Evidence snippets:
- SELECT t . project . id AS consumer project id , t . sku . description AS sku description , CASE WHEN t . resource . global name NOT LIKE '%instances/%' THEN 'Unused Capacity' WHEN t . resource . name IS NOT NULL AND t . resource . name != '' THEN 'Instance Usage' ELSE 'Other Reservation Cost' END AS usage category , SUM ( t . usage . amount ) AS total usage amount , t . usage . unit AS usage unit , SUM ( t . cost ) AS total cost usd FROM project - ID . dataset . gcp billing export resource v1 X AS t LEFT JOIN UNNEST ( t . system labels ) AS sl reservation ON sl reservation . key = 'compute.googleapis.com/reservation name' LEFT JOIN UNNEST ( t . system labels ) AS sl project id ON sl project id . key = 'compute.googleapis.com/reservation project id' WHERE t . service . id = '6F81-5844-456A' AND DATE ( TIMESTAMP TRUNC ( t .
- SELECT invoice . month AS invoice month , ROUND (( SUM ( CAST ( cost AS NUMERIC )) + SUM ( IFNULL (( SELECT SUM ( CAST ( c . amount AS NUMERIC )) FROM UNNEST ( credits ) AS c ), 0 ))), 2 ) AS net cost FROM project - ID . dataset . gcp billing export v1 XXXXXX - XXXXXX - XXXXXX WHERE "color" NOT IN ( SELECT key FROM UNNEST ( tags )) GROUP BY invoice month ORDER BY invoice month ; For example, the result of the preceding query might be: Row invoice month net cost 1 202202 0 2 202203 16.81 3 202204 54.09 4 202205 55.82 5 202206 54.09 6 202207 55.83 7 202208 31.49 Query using system labels System labels for Google Cloud reservations provide enhanced visibility into your reservation usage.
- SELECT t . sku . description AS sku description , t . usage start time AS usage start time , t . usage end time AS usage end time , SUM ( t . usage . amount ) AS total usage amount FROM project - ID . dataset . gcp billing export resource v1 X AS t LEFT JOIN UNNEST ( t . system labels ) AS sl reservation ON sl reservation . key = 'compute.googleapis.com/reservation name' LEFT JOIN UNNEST ( t . system labels ) AS sl project id ON sl project id . key = 'compute.googleapis.com/reservation project id' WHERE TRUE AND t . service . id = '6F81-5844-456A' AND t . invoice . month = '202602' AND EXISTS ( SELECT 1 FROM UNNEST ( t .
- SELECT t . project . id AS consumer project id , t . sku . description AS sku description , t . usage . unit AS usage unit , SUM ( t . usage . amount ) AS total usage amount FROM project - ID . dataset . gcp billing export resource v1 X AS t LEFT JOIN UNNEST ( t . system labels ) AS sl reservation ON sl reservation . key = 'compute.googleapis.com/reservation name' LEFT JOIN UNNEST ( t . system labels ) AS sl project id ON sl project id . key = 'compute.googleapis.com/reservation project id' WHERE TRUE AND t . service . id = '6F81-5844-456A' AND EXISTS ( SELECT 1 FROM UNNEST ( t .

### "Analyze billing data and cost trends with Reports \_|\_ Cloud Billing \_\

- URL: [https://docs.cloud.google.com/billing/docs/how-to/reports](https://docs.cloud.google.com/billing/docs/how-to/reports)
- Source ID: `site-docs-root`
- Final score: 226
- Re-rank relevance: N/A

Evidence snippets:
- These system delays also impact budget alerts, anomaly detection, and billing data exported to BigQuery.
- Related topics Export Cloud Billing data to BigQuery Understand your savings with cost breakdown reports View your cost and payment history Create, modify, or close your Cloud Billing account Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- FROM - The full path to the data table that contains the Cloud Billing data exported to BigQuery , specified using three values separated by dots: project-ID.BQ dataset name.BQ table name WHERE - Equivalent to the Report's Time range setting and includes any specific, non-default filter settings you selected on the report.
- Prerequisites to generate and run a query To generate a query from a Cloud Billing Report , ensure you and your Cloud Billing account meet the following requirements: On your Cloud Billing account, Cloud Billing data export to BigQuery must be enabled, for either the standard usage cost data or detailed usage cost data .

### "Structure of Standard data export \_|\_ Cloud Billing \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/standard-usage](https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/standard-usage)
- Source ID: `site-docs-root-2`
- Final score: 226
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Standard SQL SELECT invoice . month , cost type , SUM ( cost ) + SUM ( IFNULL (( SELECT SUM ( c . amount ) FROM UNNEST ( credits ) c ), 0 )) AS total , ( SUM ( CAST ( cost 1000000 AS int64 )) + SUM ( IFNULL (( SELECT SUM ( CAST ( c . amount 1000000 as int64 )) FROM UNNEST ( credits ) c ), 0 ))) / 1000000 AS total exact FROM project . dataset . gcp billing export v1 XXXXXX XXXXXX XXXXXX GROUP BY 1 , 2 ORDER BY 1 ASC , 2 ASC ; For example, the result of the preceding query might be: Row month cost type total total exact 1 201901 regular $1000.501209987994782 $1000.50 2 201901 rounding error –$0.500489920049387 –$0.50 3 201901 tax $10.000329958477891 $10.00 4 201901 adjustment –$5.002572999387045 –$5.00 Query examples with labels Note: Certain fields such as labels and credits are repeated.
- Row name project labels total cost total credits 1 CTG - Dev [{"key":"ctg p env","value":"dev"}] 79.140979 -4.763796 2 CTG - Prod [{"key":"ctg p env","value":"prod"},{"key":"ctg team","value":"eng"}] 32.466272 -3.073356 3 CTG - Sandbox [{"key":"ctg p env","value":"dev"}] 0 0 4 CTG - Storage [{"key":"ctg p env","value":"prod"},{"key":"ctg team","value":"data"}] 7.645793 -0.003761 Related topics Topics related to exported Cloud Billing data Set up Cloud Billing data export to BigQuery Example queries for Cloud Billing data export to BigQuery Visualize spend over time with Looker Studio Cost and pricing reports available in the Google Cloud console View your Cloud Billing reports and cost trends View and download the cost details of your invoice or statement View and download prices for Google's cloud services Understand your savings with cost breakdown reports Analyze the effectiveness of your committed use discounts View your cost and payment history Previous arrow back Understand the billing data tables in BigQuery Next Structure of Detailed data export arrow forward Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Standard SQL SELECT labels . value as environment , SUM ( cost ) as cost FROM project . dataset . gcp billing export v1 XXXXXX XXXXXX XXXXXX LEFT JOIN UNNEST ( labels ) as labels ON labels . key = "environment" GROUP BY environment ; Legacy SQL SELECT labels . value as environment , SUM ( cost ) as cost FROM [ project : dataset . gcp billing export v1 XXXXXX XXXXXX XXXXXX ] WHERE labels . key = "environment" OR labels . key IS NULL GROUP BY environment ; Row environment cost 1 prod $15 2 dev $5 3 null $4 TOTAL $24 Note: The total cost should add up to the same amount as a group by label map query.
- Standard SQL SELECT labels . key as key , labels . value as value , SUM ( cost ) as cost FROM project . dataset . gcp billing export v1 XXXXXX XXXXXX XXXXXX LEFT JOIN UNNEST ( labels ) as labels GROUP BY key , value ; Legacy SQL SELECT labels . key as key , labels . value as value , SUM ( cost ) FROM [ project : dataset . gcp billing export v1 XXXXXX XXXXXX XXXXXX ] GROUP BY key , value ; Row key value cost 1 null null $4 2 app chocolate-masher $9 3 app grapefruit-squeezer $11 4 environment dev $5 5 environment prod $15 TOTAL $44 Note that the total sum is greater than your bill.

