---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T13:57:37.624Z"
product_name: "Cloud Billing"
product_slug: "cloud-billing"
feature_name: "Cloud Billing BigQuery cost detail export credit fields"
feature_slug: "cloud-billing-bigquery-cost-detail-export-credit-fields"
latest_feature_date: "2020-09-10"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/detailed-usage"
  - "https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/standard-usage"
  - "https://docs.cloud.google.com/billing/docs/how-to/bq-examples"
keywords:
  - "billing"
  - "bigquery"
  - "cost"
  - "detail"
  - "export"
  - "credit"
  - "fields"
  - "extended"
---

# Cloud Billing BigQuery cost detail export credit fields

Product: Cloud Billing
Coverage: MEDIUM

## Step 02 Summary

Extended daily cost detail exports to BigQuery with additional credit metadata fields: credits.id, credits.full_name, and credits.type.

## Extended Definition

Extended daily cost detail exports to BigQuery with additional credit metadata fields: credits.id, credits.full_name, and credits.type.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/detailed-usage](https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/detailed-usage)
- [https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/standard-usage](https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/standard-usage)
- [https://docs.cloud.google.com/billing/docs/how-to/bq-examples](https://docs.cloud.google.com/billing/docs/how-to/bq-examples)

## Supporting Pages

### "Structure of Detailed data export \_|\_ Cloud Billing \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/detailed-usage](https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/detailed-usage)
- Source ID: `site-docs-root-2`
- Final score: 305
- Re-rank relevance: N/A

Evidence snippets:
- Note: The first full day of data with this field is September 10, 2020. credits.type String This field describes the purpose or origin of the credits.id .
- Note: The first full day of data with this field is January 22, 2018. credits Struct credits contains fields that describe the structure and value of the credits associated with Google Cloud and Google Maps Platform SKUs. credits.id String If present, indicates that a credit is associated with the product SKU. credits.id values are either an alphanumeric unique identifier (for example, 12-b34-c56-d78 ), or a description of the credit type (such as Committed Usage Discount: CPU ).
- Examples include Free trial credit or Spend-based committed use discount . credits.full name values are only present for SKUs with an alphanumeric credits.id .
- If the value of the credits.id is a description of the credit type (such as Committed Usage Discount: CPU ), then the credits.full name field is empty.

### "Structure of Standard data export \_|\_ Cloud Billing \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/standard-usage](https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/standard-usage)
- Source ID: `site-docs-root-2`
- Final score: 275
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Note: The first full day of data with this field is September 10, 2020. credits.type String This field describes the purpose or origin of the credits.id .
- Note: The first full day of data with this field is January 22, 2018. credits Struct credits contains fields that describe the structure and value of the credits associated with Google Cloud and Google Maps Platform SKUs. credits.id String If present, indicates that a credit is associated with the product SKU. credits.id values are either an alphanumeric unique identifier (for example, 12-b34-c56-d78 ), or a description of the credit type (such as Committed Usage Discount: CPU ).
- Examples include Free trial credit or Spend-based committed use discount . credits.full name values are only present for SKUs with an alphanumeric credits.id .
- If the value of the credits.id is a description of the credit type (such as Committed Usage Discount: CPU ), then the credits.full name field is empty.

### Example queries for Cloud Billing data export \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/billing/docs/how-to/bq-examples](https://docs.cloud.google.com/billing/docs/how-to/bq-examples)
- Source ID: `site-docs-root-2`
- Final score: 173
- Re-rank relevance: N/A

Evidence snippets:
- Standard SQL SELECT invoice . month AS invoice month , SUM ( credits . amount ) as CUD credits FROM project - ID . dataset . gcp billing export v1 XXXXXX - XXXXXX - XXXXXX LEFT JOIN UNNEST ( credits ) AS credits WHERE credits . type = "COMMITTED USAGE DISCOUNT" GROUP BY 1 Use resource hierarchy filters to review ancestry You can use resource hierarchy filters to aggregate costs by hierarchy elements such as projects, folders, and organizations.
- SELECT DATE ( TIMESTAMP TRUNC ( usage start time , Day , 'US/Pacific' )) AS Day , service . description AS Service Description , SUM ( CAST ( cost at list AS NUMERIC )) AS List cost , SUM ( CAST ( cost AS NUMERIC )) - SUM ( CAST ( cost at list AS NUMERIC )) AS Negotiated savings , SUM ( IFNULL (( SELECT SUM ( CAST ( c . amount AS numeric )) FROM UNNEST ( credits ) c WHERE c . type IN ( 'SUSTAINED USAGE DISCOUNT' , 'DISCOUNT' , 'SPENDING BASED DISCOUNT' , 'COMMITTED USAGE DISCOUNT' , 'FREE TIER' , 'COMMITTED USAGE DISCOUNT DOLLAR BASE' , 'SUBSCRIPTION BENEFIT' , 'RESELLER MARGIN' )), 0 )) AS Discounts , SUM ( IFNULL (( SELECT SUM ( CAST ( c . amount AS numeric )) FROM UNNEST ( credits ) c WHERE c . type IN ( 'CREDIT TYPE UNSPECIFIED' , 'PROMOTION' )), 0 )) AS Promotions and others , SUM ( CAST ( cost at list AS NUMERIC )) + SUM ( IFNULL (( SELECT SUM ( CAST ( c . amount AS numeric )) FROM UNNEST ( credits ) c WHERE c . type IN ( 'SUSTAINED USAGE DISCOUNT' , 'DISCOUNT' , 'SPENDING BASED DISCOUNT' , 'COMMITTED USAGE DISCOUNT' , 'FREE TIER' , 'COMMITTED USAGE DISCOUNT DOLLAR BASE' , 'SUBSCRIPTION BENEFIT' , 'RESELLER MARGIN' )), 0 )) + SUM ( CAST ( cost AS NUMERIC )) - SUM ( CAST ( cost at list AS NUMERIC )) + SUM ( IFNULL (( SELECT SUM ( CAST ( c . amount AS numeric )) FROM UNNEST ( credits ) c WHERE c . type IN ( 'CREDIT TYPE UNSPECIFIED' , 'PROMOTION' )), 0 )) AS Subtotal FROM project - ID . dataset . gcp billing export v1 XXXXXX - XXXXXX - XXXXXX WHERE invoice . month = '202403' AND DATE ( TIMESTAMP TRUNC ( usage start time , Day , 'US/Pacific' )) '2024-03-01' GROUP BY Day , service . description ORDER BY Day DESC , Subtotal DESC ; For example, the result of the preceding query might be: Row Day Service Description List cost Negotiated savings Discounts Promotions and others Subtotal 1 2024-02-29 Compute Engine 4.39916 0 -1.00916 0 3.39000 2 2024-02-29 Support 0.131969 0 0 0 0.131969 3 2024-02-29 BigQuery 0.005502 0 0 0 0.005502 4 2024-02-29 Networking 0.010972 0 -0.006691 0 0.004281 Detailed usage cost query examples This section provides examples of how to query the Cloud Billing detailed usage cost data exported to BigQuery.
- Standard usage cost data Detailed usage cost data Pricing data Standard usage cost query examples Return the total costs on an invoice Example 1: Sum of all costs, per invoice Example 2: Return details by cost type, per invoice month Query examples with labels Query every row without grouping Group by label map as a JSON string Group by label value for a specific key Group by key/value pairs Committed use discount queries Viewing commitment fees Viewing commitment credits Use resource hierarchy filters to review ancestry Example 1: Filter by resource name Example 2: Filter by display name Query examples with tags Calculate costs by invoice month with tags View costs of untagged resources Additional query examples Query costs and credits by project for a specified invoice month Query costs to view corrections or late-monetized usage for a specified invoice month Query cost details to view corrections or late-monetized usage by service for a specified invoice month Detailed usage cost query examples Return the resource-level costs on an invoice Sum costs for each resource, per invoice Return details by cost type for each resource, per invoice month Get breakdown of Google Kubernetes Engine (GKE) cluster costs Filter GKE cost breakdown Pricing data query examples Get list prices for a specific SKU Get list prices for a specific SKU, and include service description Example 1: Returns nested data Example 2: Returns unnested data joined with the same table Use product taxonomy and geo taxonomy to query SKUs Get the product taxonomy of a SKU Get all SKUs for a specific product taxonomy Get all SKUs for a specific geo taxonomy and product taxonomy Join pricing data with detailed usage cost data Standard usage cost query examples This section provides examples of how to query the Cloud Billing standard usage cost data exported to BigQuery.
- SELECT invoice . month AS invoice month , ROUND (( SUM ( CAST ( cost AS NUMERIC )) + SUM ( IFNULL (( SELECT SUM ( CAST ( c . amount AS NUMERIC )) FROM UNNEST ( credits ) AS c ), 0 ))), 2 ) AS net cost FROM project - ID . dataset . gcp billing export v1 XXXXXX - XXXXXX - XXXXXX WHERE "color" NOT IN ( SELECT key FROM UNNEST ( tags )) GROUP BY invoice month ORDER BY invoice month ; For example, the result of the preceding query might be: Row invoice month net cost 1 202202 0 2 202203 16.81 3 202204 54.09 4 202205 55.82 5 202206 54.09 6 202207 55.83 7 202208 31.49 Additional query examples Query costs and credits by project for a specified invoice month Note: See Google Cloud usage cost data in BigQuery for a detailed schema.

