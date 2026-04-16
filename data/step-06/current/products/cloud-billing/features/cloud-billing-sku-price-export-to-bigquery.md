---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T13:57:37.627Z"
product_name: "Cloud Billing"
product_slug: "cloud-billing"
feature_name: "Cloud Billing SKU price export to BigQuery"
feature_slug: "cloud-billing-sku-price-export-to-bigquery"
latest_feature_date: "2020-07-23"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/standard-usage"
  - "https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-setup"
  - "https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/detailed-usage"
keywords:
  - "billing"
  - "sku"
  - "price"
  - "export"
  - "bigquery"
  - "now"
  - "supports"
  - "exporting"
---

# Cloud Billing SKU price export to BigQuery

Product: Cloud Billing
Coverage: MEDIUM

## Step 02 Summary

Cloud Billing now supports exporting Google Cloud and Google Maps Platform SKU pricing information to BigQuery for analysis and joins.

## Extended Definition

Cloud Billing now supports exporting Google Cloud and Google Maps Platform SKU pricing information to BigQuery for analysis and joins.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/standard-usage](https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/standard-usage)
- [https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-setup](https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-setup)
- [https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/detailed-usage](https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/detailed-usage)

## Supporting Pages

### "Structure of Standard data export \_|\_ Cloud Billing \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/standard-usage](https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/standard-usage)
- Source ID: `site-docs-root-2`
- Final score: 125
- Re-rank relevance: N/A

Evidence snippets:
- Row name project labels total cost total credits 1 CTG - Dev [{"key":"ctg p env","value":"dev"}] 79.140979 -4.763796 2 CTG - Prod [{"key":"ctg p env","value":"prod"},{"key":"ctg team","value":"eng"}] 32.466272 -3.073356 3 CTG - Sandbox [{"key":"ctg p env","value":"dev"}] 0 0 4 CTG - Storage [{"key":"ctg p env","value":"prod"},{"key":"ctg team","value":"data"}] 7.645793 -0.003761 Related topics Topics related to exported Cloud Billing data Set up Cloud Billing data export to BigQuery Example queries for Cloud Billing data export to BigQuery Visualize spend over time with Looker Studio Cost and pricing reports available in the Google Cloud console View your Cloud Billing reports and cost trends View and download the cost details of your invoice or statement View and download prices for Google's cloud services Understand your savings with cost breakdown reports Analyze the effectiveness of your committed use discounts View your cost and payment history Previous arrow back Understand the billing data tables in BigQuery Next Structure of Detailed data export arrow forward Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- See other limitations that might impact exporting your billing data to BigQuery, such as datasets with customer-managed encryption keys (CMEK) enabled.
- SELECT invoice . month AS invoice month , ROUND (( SUM ( CAST ( cost AS NUMERIC )) + SUM ( IFNULL (( SELECT SUM ( CAST ( c . amount AS NUMERIC )) FROM UNNEST ( credits ) AS c ), 0 ))), 2 ) AS net cost FROM project - ID . dataset . gcp billing export v1 XXXXXX - XXXXXX - XXXXXX WHERE "color" NOT IN ( SELECT key FROM UNNEST ( tags )) GROUP BY invoice month ORDER BY invoice month ; For example, the result of the preceding query might be: Row invoice month net cost 1 202202 0 2 202203 16.81 3 202204 54.09 4 202205 55.82 5 202206 54.09 6 202207 55.83 7 202208 31.49 Additional query examples Query costs and credits by project for a specified invoice month Note: See Google Cloud usage cost data in BigQuery for a detailed schema.
- Resource-level tags in the Cloud Billing data export are available for the following resources: AlloyDB for PostgreSQL clusters, instances, and backups Artifact Registry repositories Bigtable instances Cloud Run services and jobs Cloud Storage buckets Compute Engine instances Memorystore for Redis instances Secret Manager global and regional secrets Spanner instances Firestore databases Tags limitations Tags might take up to an hour to propagate to BigQuery exports.

### Set up Cloud Billing data export to BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-setup](https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-setup)
- Source ID: `site-docs-root-2`
- Final score: 119
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Resource-level tags are available for the following resources: Compute Engine instances Spanner instances Cloud Run services Artifact Registry repositories Related topics Topics related to exported Cloud Billing data Understanding the Cloud Billing data tables in BigQuery Example queries for Cloud Billing data export to BigQuery Visualize spend over time with Looker Studio Cost and pricing reports available in the Google Cloud console View your Cloud Billing reports and cost trends View and download the cost details of your invoice or statement View and download prices for Google's cloud services Understand your savings with cost breakdown reports Analyze the effectiveness of your committed use discounts View your cost and payment history Previous arrow back Overview of billing data export to BigQuery Next Understand the billing data tables in BigQuery arrow forward Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- If you use an existing dataset, review the limitations that might impact exporting your billing data to BigQuery, such as being unable to export data to datasets configured to use customer-managed key encryption, or being unable to use a dataset configured with an unsupported region location.
- If you use an existing dataset, review the limitations that might impact exporting your billing data to BigQuery, such as being unable to export data to datasets configured to use a CMEK , or being unable to use a dataset configured with an unsupported region location.
- Dataset encryption: Customer-managed encryption keys (CMEK) aren't supported when exporting billing data to BigQuery.

### "Structure of Detailed data export \_|\_ Cloud Billing \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/detailed-usage](https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/detailed-usage)
- Source ID: `site-docs-root-2`
- Final score: 113
- Re-rank relevance: N/A

Evidence snippets:
- See other limitations that might impact exporting your billing data to BigQuery, such as datasets with customer-managed encryption keys (CMEK) enabled.
- Tags ) AS tag WHERE tag . key = 'gcp-product' AND tag . value = 'vertex ai' AND tag . inherited = TRUE ) AND sl reservation . value = ' RESERVATION NAME ' AND sl project id . value = ' PROJECT ID ' GROUP BY consumer project id , sku description , usage unit ORDER BY consumer project id , sku description , usage unit ; Sample results The following output shows the contribution of each project to total usage costs while consuming the reservation. consumer project id sku description usage unit total usage amount project1 N1 Predefined Instance Core running in Americas seconds 4221572 project1 N1 Predefined Instance Ram running in Americas byte-seconds 16998309356466500 project1 Nvidia Tesla T4 GPU running in Americas seconds 1057391 project2 N1 Predefined Instance Core running in Americas seconds 3996192 project2 N1 Predefined Instance Ram running in Americas byte-seconds 16009292257431300 project2 Nvidia Tesla T4 GPU running in Americas seconds 993985 Related topics For information related to exported Cloud Billing data, see the following: Set up Cloud Billing data export to BigQuery.
- Standard SQL SELECT invoice . month , cost type , resource . name , SUM ( cost ) + SUM ( IFNULL (( SELECT SUM ( c . amount ) FROM UNNEST ( credits ) c ), 0 )) AS total , ( SUM ( CAST ( cost 1000000 AS int64 )) + SUM ( IFNULL (( SELECT SUM ( CAST ( c . amount 1000000 as int64 )) FROM UNNEST ( credits ) c ), 0 ))) / 1000000 AS total exact FROM project . dataset . gcp billing export resource v1 XXXXXX XXXXXX XXXXXX GROUP BY 1 , 2 , 3 ORDER BY 1 ASC , 2 ASC , 3 ASC ; For example, the result of the preceding query might be: Row month cost type name total total exact 1 201901 regular null $1000.501209987994782 $1000.50 2 201901 rounding error null –$0.500489920049387 –$0.50 3 201901 tax null $10.000329958477891 $10.00 4 201901 adjustment null –$5.002572999387045 –$5.00 5 201901 regular backend1 $410.998795012082947 $411.00 2 201901 rounding error backend1 –$0.2404900489920378 –$0.24 3 201901 tax backend1 $4.105840329977189 $4.11 Get a breakdown of Google Kubernetes Engine (GKE) cluster costs This section provides examples of filtering GKE cluster costs in your BigQuery export reports.
- Resource-level tags in the Cloud Billing data export are available for the following resources: AlloyDB for PostgreSQL clusters, instances, and backups Artifact Registry repositories Bigtable instances Cloud Run services and jobs Cloud Storage buckets Compute Engine instances Memorystore for Redis instances Secret Manager global and regional secrets Spanner instances Firestore databases Tags limitations Tags might take up to an hour to propagate to BigQuery exports.

