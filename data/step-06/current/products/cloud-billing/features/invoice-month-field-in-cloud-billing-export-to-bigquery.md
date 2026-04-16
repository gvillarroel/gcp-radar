---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T13:57:37.655Z"
product_name: "Cloud Billing"
product_slug: "cloud-billing"
feature_name: "Invoice month field in Cloud Billing export to BigQuery"
feature_slug: "invoice-month-field-in-cloud-billing-export-to-bigquery"
latest_feature_date: "2018-05-31"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/detailed-usage"
  - "https://docs.cloud.google.com/billing/docs/how-to/bq-examples"
  - "https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/standard-usage"
keywords:
  - "invoice"
  - "month"
  - "field"
  - "billing"
  - "export"
  - "bigquery"
  - "now"
  - "includes"
---

# Invoice month field in Cloud Billing export to BigQuery

Product: Cloud Billing
Coverage: MEDIUM

## Step 02 Summary

Cloud Billing export to BigQuery now includes invoice.month to associate cost line items with the corresponding invoice month.

## Extended Definition

Cloud Billing export to BigQuery now includes invoice.month to associate cost line items with the corresponding invoice month.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/detailed-usage](https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/detailed-usage)
- [https://docs.cloud.google.com/billing/docs/how-to/bq-examples](https://docs.cloud.google.com/billing/docs/how-to/bq-examples)
- [https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/standard-usage](https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/standard-usage)

## Supporting Pages

### "Structure of Detailed data export \_|\_ Cloud Billing \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/detailed-usage](https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/detailed-usage)
- Source ID: `site-docs-root-2`
- Final score: 508
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Standard SQL SELECT invoice . month , cost type , resource . name , SUM ( cost ) + SUM ( IFNULL (( SELECT SUM ( c . amount ) FROM UNNEST ( credits ) c ), 0 )) AS total , ( SUM ( CAST ( cost 1000000 AS int64 )) + SUM ( IFNULL (( SELECT SUM ( CAST ( c . amount 1000000 as int64 )) FROM UNNEST ( credits ) c ), 0 ))) / 1000000 AS total exact FROM project . dataset . gcp billing export resource v1 XXXXXX XXXXXX XXXXXX GROUP BY 1 , 2 , 3 ORDER BY 1 ASC , 2 ASC , 3 ASC ; For example, the result of the preceding query might be: Row month cost type name total total exact 1 201901 regular null $1000.501209987994782 $1000.50 2 201901 rounding error null –$0.500489920049387 –$0.50 3 201901 tax null $10.000329958477891 $10.00 4 201901 adjustment null –$5.002572999387045 –$5.00 5 201901 regular backend1 $410.998795012082947 $411.00 2 201901 rounding error backend1 –$0.2404900489920378 –$0.24 3 201901 tax backend1 $4.105840329977189 $4.11 Get a breakdown of Google Kubernetes Engine (GKE) cluster costs This section provides examples of filtering GKE cluster costs in your BigQuery export reports.
- Timestamp fields include: usage start time usage end time export time To return Cloud Billing data that maps directly to an invoice, query on invoice.month instead of timestamp fields.
- Standard SQL SELECT invoice . month , resource . name , SUM ( cost ) + SUM ( IFNULL (( SELECT SUM ( c . amount ) FROM UNNEST ( credits ) c ), 0 )) AS total , ( SUM ( CAST ( cost 1000000 AS int64 )) + SUM ( IFNULL (( SELECT SUM ( CAST ( c . amount 1000000 as int64 )) FROM UNNEST ( credits ) c ), 0 ))) / 1000000 AS total exact FROM project . dataset . gcp billing export resource v1 XXXXXX XXXXXX XXXXXX GROUP BY 1 , 2 ORDER BY 1 ASC , 2 ASC ; For example, the result of the preceding query might be: Row month name total total exact 1 201901 null $1005.004832999999984 $1005.00 2 201901 backend1 $781.8499760000028 $781.85 3 201902 null $953.0034923645475983 $953.03 4 201902 backend1 $992.3101739999999717 $992.31 5 201902 bitnami-launchpad-wordpress-1-wordpress $1.2817819999999998 $1.28 Return details by cost type for each resource, per invoice month This query shows the totals for each cost type for each resource.name per month.
- The following code sample shows how to create a basic query that returns the total cost of corrections or late-monetized usage: SELECT SUM ( cost ) + SUM ( IFNULL (( SELECT SUM ( c . amount ) FROM UNNEST ( credits ) c ), 0 )) AS total FROM project . dataset . gcp billing export v1 XXXXXX - XXXXXX - XXXXXX WHERE invoice . month = '202311' AND DATE ( TIMESTAMP TRUNC ( usage start time , Day , 'US/Pacific' )) < '2023-11-01' ; For a query example that returns a cost breakdown by service , for invoice charges, where the usage date occurred before the invoice month , see Query cost details to view corrections or late-monetized usage by service for a specified invoice month in "Example queries for Cloud Billing data export." About promotional credits in custom pricing contracts If you have a custom pricing contract, you might receive promotional credits to use on Google Cloud as part of the contract.

### Example queries for Cloud Billing data export \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/billing/docs/how-to/bq-examples](https://docs.cloud.google.com/billing/docs/how-to/bq-examples)
- Source ID: `site-docs-root-2`
- Final score: 350
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- SELECT DATE ( TIMESTAMP TRUNC ( usage start time , Day , 'US/Pacific' )) AS Day , service . description AS Service Description , SUM ( CAST ( cost at list AS NUMERIC )) AS List cost , SUM ( CAST ( cost AS NUMERIC )) - SUM ( CAST ( cost at list AS NUMERIC )) AS Negotiated savings , SUM ( IFNULL (( SELECT SUM ( CAST ( c . amount AS numeric )) FROM UNNEST ( credits ) c WHERE c . type IN ( 'SUSTAINED USAGE DISCOUNT' , 'DISCOUNT' , 'SPENDING BASED DISCOUNT' , 'COMMITTED USAGE DISCOUNT' , 'FREE TIER' , 'COMMITTED USAGE DISCOUNT DOLLAR BASE' , 'SUBSCRIPTION BENEFIT' , 'RESELLER MARGIN' )), 0 )) AS Discounts , SUM ( IFNULL (( SELECT SUM ( CAST ( c . amount AS numeric )) FROM UNNEST ( credits ) c WHERE c . type IN ( 'CREDIT TYPE UNSPECIFIED' , 'PROMOTION' )), 0 )) AS Promotions and others , SUM ( CAST ( cost at list AS NUMERIC )) + SUM ( IFNULL (( SELECT SUM ( CAST ( c . amount AS numeric )) FROM UNNEST ( credits ) c WHERE c . type IN ( 'SUSTAINED USAGE DISCOUNT' , 'DISCOUNT' , 'SPENDING BASED DISCOUNT' , 'COMMITTED USAGE DISCOUNT' , 'FREE TIER' , 'COMMITTED USAGE DISCOUNT DOLLAR BASE' , 'SUBSCRIPTION BENEFIT' , 'RESELLER MARGIN' )), 0 )) + SUM ( CAST ( cost AS NUMERIC )) - SUM ( CAST ( cost at list AS NUMERIC )) + SUM ( IFNULL (( SELECT SUM ( CAST ( c . amount AS numeric )) FROM UNNEST ( credits ) c WHERE c . type IN ( 'CREDIT TYPE UNSPECIFIED' , 'PROMOTION' )), 0 )) AS Subtotal FROM project - ID . dataset . gcp billing export v1 XXXXXX - XXXXXX - XXXXXX WHERE invoice . month = '202403' AND DATE ( TIMESTAMP TRUNC ( usage start time , Day , 'US/Pacific' )) '2024-03-01' GROUP BY Day , service . description ORDER BY Day DESC , Subtotal DESC ; For example, the result of the preceding query might be: Row Day Service Description List cost Negotiated savings Discounts Promotions and others Subtotal 1 2024-02-29 Compute Engine 4.39916 0 -1.00916 0 3.39000 2 2024-02-29 Support 0.131969 0 0 0 0.131969 3 2024-02-29 BigQuery 0.005502 0 0 0 0.005502 4 2024-02-29 Networking 0.010972 0 -0.006691 0 0.004281 Detailed usage cost query examples This section provides examples of how to query the Cloud Billing detailed usage cost data exported to BigQuery.
- Standard SQL SELECT invoice . month , cost type , resource . name , SUM ( cost ) + SUM ( IFNULL (( SELECT SUM ( c . amount ) FROM UNNEST ( credits ) c ), 0 )) AS total , ( SUM ( CAST ( cost AS NUMERIC )) + SUM ( IFNULL (( SELECT SUM ( CAST ( c . amount AS NUMERIC )) FROM UNNEST ( credits ) AS c ), 0 ))) AS total exact FROM project - ID . dataset . gcp billing export resource v1 XXXXXX - XXXXXX - XXXXXX GROUP BY 1 , 2 , 3 ORDER BY 1 ASC , 2 ASC , 3 ASC ; For example, the result of the preceding query might be: Row month cost type name total total exact 1 201901 regular null $1000.501209987994782 $1000.50 2 201901 rounding error null –$0.500489920049387 –$0.50 3 201901 tax null $10.000329958477891 $10.00 4 201901 adjustment null –$5.002572999387045 –$5.00 5 201901 regular backend1 $410.998795012082947 $411.00 2 201901 rounding error backend1 –$0.2404900489920378 –$0.24 3 201901 tax backend1 $4.105840329977189 $4.11 Get breakdown of Google Kubernetes Engine (GKE) cluster costs This section provides examples of filtering GKE cluster costs in your BigQuery export reports.
- Standard SQL SELECT invoice . month , cost type , SUM ( cost ) + SUM ( IFNULL (( SELECT SUM ( c . amount ) FROM UNNEST ( credits ) c ), 0 )) AS total , ( SUM ( CAST ( cost AS NUMERIC )) + SUM ( IFNULL (( SELECT SUM ( CAST ( c . amount AS NUMERIC )) FROM UNNEST ( credits ) AS c ), 0 ))) AS total exact FROM project - ID . dataset . gcp billing export v1 XXXXXX - XXXXXX - XXXXXX GROUP BY 1 , 2 ORDER BY 1 ASC , 2 ASC ; For example, the result of the preceding query might be: Row month cost type total total exact 1 201901 regular $1000.501209987994782 $1000.50 2 201901 rounding error –$0.500489920049387 –$0.50 3 201901 tax $10.000329958477891 $10.00 4 201901 adjustment –$5.002572999387045 –$5.00 Query examples with labels Note: Certain fields such as labels and credits are repeated.
- SELECT invoice . month AS invoice month , ROUND (( SUM ( CAST ( cost AS NUMERIC )) + SUM ( IFNULL (( SELECT SUM ( CAST ( c . amount AS NUMERIC )) FROM UNNEST ( credits ) AS c ), 0 ))), 2 ) AS net cost FROM project - ID . dataset . gcp billing export v1 XXXXXX - XXXXXX - XXXXXX WHERE "color" NOT IN ( SELECT key FROM UNNEST ( tags )) GROUP BY invoice month ORDER BY invoice month ; For example, the result of the preceding query might be: Row invoice month net cost 1 202202 0 2 202203 16.81 3 202204 54.09 4 202205 55.82 5 202206 54.09 6 202207 55.83 7 202208 31.49 Additional query examples Query costs and credits by project for a specified invoice month Note: See Google Cloud usage cost data in BigQuery for a detailed schema.

### "Structure of Standard data export \_|\_ Cloud Billing \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/standard-usage](https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/standard-usage)
- Source ID: `site-docs-root-2`
- Final score: 342
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Standard SQL SELECT invoice . month , cost type , SUM ( cost ) + SUM ( IFNULL (( SELECT SUM ( c . amount ) FROM UNNEST ( credits ) c ), 0 )) AS total , ( SUM ( CAST ( cost 1000000 AS int64 )) + SUM ( IFNULL (( SELECT SUM ( CAST ( c . amount 1000000 as int64 )) FROM UNNEST ( credits ) c ), 0 ))) / 1000000 AS total exact FROM project . dataset . gcp billing export v1 XXXXXX XXXXXX XXXXXX GROUP BY 1 , 2 ORDER BY 1 ASC , 2 ASC ; For example, the result of the preceding query might be: Row month cost type total total exact 1 201901 regular $1000.501209987994782 $1000.50 2 201901 rounding error –$0.500489920049387 –$0.50 3 201901 tax $10.000329958477891 $10.00 4 201901 adjustment –$5.002572999387045 –$5.00 Query examples with labels Note: Certain fields such as labels and credits are repeated.
- SELECT invoice . month AS invoice month , ROUND (( SUM ( CAST ( cost AS NUMERIC )) + SUM ( IFNULL (( SELECT SUM ( CAST ( c . amount AS NUMERIC )) FROM UNNEST ( credits ) AS c ), 0 ))), 2 ) AS net cost FROM project - ID . dataset . gcp billing export v1 XXXXXX - XXXXXX - XXXXXX WHERE "color" NOT IN ( SELECT key FROM UNNEST ( tags )) GROUP BY invoice month ORDER BY invoice month ; For example, the result of the preceding query might be: Row invoice month net cost 1 202202 0 2 202203 16.81 3 202204 54.09 4 202205 55.82 5 202206 54.09 6 202207 55.83 7 202208 31.49 Additional query examples Query costs and credits by project for a specified invoice month Note: See Google Cloud usage cost data in BigQuery for a detailed schema.
- Timestamp fields include: usage start time usage end time export time To return Cloud Billing data that maps directly to an invoice, query on invoice.month instead of timestamp fields.
- String method SELECT invoice . month AS invoice month , TO JSON STRING ( project . ancestors ) as ancestors , SUM ( cost ) + SUM ( IFNULL (( SELECT SUM ( c . amount ) FROM UNNEST ( credits ) c ), 0 )) AS net cost FROM project . dataset . gcp billing export v1 XXXXXX XXXXXX XXXXXX as bq WHERE TO JSON STRING ( project . ancestors ) like "%resource name\" : \ "folders/1234" GROUP BY invoice month , ancestors ORDER BY invoice month , ancestors UNNEST method SELECT invoice . month AS invoice month , TO JSON STRING ( project . ancestors ) as ancestors , SUM ( cost ) + SUM ( IFNULL (( SELECT SUM ( c . amount ) FROM UNNEST ( credits ) c ), 0 )) AS net cost FROM project . dataset . gcp billing export v1 XXXXXX XXXXXX XXXXXX as bq , UNNEST ( project . ancestors ) as ancestor WHERE ancestor . resource name = "folders/1234" GROUP BY invoice month , ancestors ORDER BY invoice month , ancestors Example 2: Filter by display name This example demonstrates queries that group costs by project ancestry and filter for only costs generated under a specified hierarchy element, identified by the user-provided display name.

