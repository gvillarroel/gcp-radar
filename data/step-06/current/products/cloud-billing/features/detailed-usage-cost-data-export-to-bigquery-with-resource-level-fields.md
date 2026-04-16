---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T13:57:37.606Z"
product_name: "Cloud Billing"
product_slug: "cloud-billing"
feature_name: "Detailed usage cost data export to BigQuery with resource-level fields"
feature_slug: "detailed-usage-cost-data-export-to-bigquery-with-resource-level-fields"
latest_feature_date: "2021-08-27"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/detailed-usage"
  - "https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/standard-usage"
  - "https://docs.cloud.google.com/billing/docs/how-to/bq-examples"
keywords:
  - "detailed"
  - "usage"
  - "cost"
  - "export"
  - "bigquery"
  - "resource"
  - "level"
  - "fields"
---

# Detailed usage cost data export to BigQuery with resource-level fields

Product: Cloud Billing
Coverage: MEDIUM

## Step 02 Summary

Introduces GA detailed usage cost exports to BigQuery, including resource-level fields for compute-related usage in the resource export table.

## Extended Definition

Introduces GA detailed usage cost exports to BigQuery, including resource-level fields for compute-related usage in the resource export table.

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
- Final score: 260
- Re-rank relevance: N/A

Evidence snippets:
- Return the resource-level costs on an invoice Sum costs for each resource, per invoice Return details by cost type for each resource, per invoice month Get breakdown of Google Kubernetes Engine (GKE) cluster costs Filter GKE cost breakdown Because the detailed usage cost schema includes all of the fields from the standard usage cost schema, the query examples provided for the standard data exported to BigQuery also work with the detailed data that's exported.
- Additional fields available to detailed usage cost data export resource Struct The fields that describe the structure and value of information relevant to service resources (like a virtual machine or a SSD) that generate usage. resource.global name String A globally unique service identifier for the resource that generated relevant usage. resource.name String A service-specific identifier for the resource that generated relevant usage.
- The detailed usage cost data provides all of the information included in the standard usage cost data , along with additional fields that provide granular, resource-level cost data, like a virtual machine or SSD that generates usage.
- When you use the detailed usage cost data in BigQuery, note the following: The table schema for the detailed Cloud Billing data export can change over time, such as when new fields are added to the detailed export.

### "Structure of Standard data export \_|\_ Cloud Billing \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/standard-usage](https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/standard-usage)
- Source ID: `site-docs-root-2`
- Final score: 228
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Common values used in the example standard cost queries The query examples in this section use the following value for Table name : project.dataset.gcp billing export v1 XXXXXX XXXXXX XXXXXX These query examples also work with the detailed usage cost data exported to BigQuery, although they aren't written to retrieve any of the resource-level information that's provided with the detailed usage cost export option.
- If you're interested in exporting resource-level cost data to BigQuery for analysis, consider enabling the export of detailed usage cost data .
- Detailed usage cost table : In your BigQuery dataset, this table is named gcp billing export resource v1 <BILLING ACCOUNT ID> .
- SELECT invoice . month AS invoice month , ROUND (( SUM ( CAST ( cost AS NUMERIC )) + SUM ( IFNULL (( SELECT SUM ( CAST ( c . amount AS NUMERIC )) FROM UNNEST ( credits ) AS c ), 0 ))), 2 ) AS net cost FROM project - ID . dataset . gcp billing export v1 XXXXXX - XXXXXX - XXXXXX WHERE "color" NOT IN ( SELECT key FROM UNNEST ( tags )) GROUP BY invoice month ORDER BY invoice month ; For example, the result of the preceding query might be: Row invoice month net cost 1 202202 0 2 202203 16.81 3 202204 54.09 4 202205 55.82 5 202206 54.09 6 202207 55.83 7 202208 31.49 Additional query examples Query costs and credits by project for a specified invoice month Note: See Google Cloud usage cost data in BigQuery for a detailed schema.

### Example queries for Cloud Billing data export \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/billing/docs/how-to/bq-examples](https://docs.cloud.google.com/billing/docs/how-to/bq-examples)
- Source ID: `site-docs-root-2`
- Final score: 210
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Standard usage cost data Detailed usage cost data Pricing data Standard usage cost query examples Return the total costs on an invoice Example 1: Sum of all costs, per invoice Example 2: Return details by cost type, per invoice month Query examples with labels Query every row without grouping Group by label map as a JSON string Group by label value for a specific key Group by key/value pairs Committed use discount queries Viewing commitment fees Viewing commitment credits Use resource hierarchy filters to review ancestry Example 1: Filter by resource name Example 2: Filter by display name Query examples with tags Calculate costs by invoice month with tags View costs of untagged resources Additional query examples Query costs and credits by project for a specified invoice month Query costs to view corrections or late-monetized usage for a specified invoice month Query cost details to view corrections or late-monetized usage by service for a specified invoice month Detailed usage cost query examples Return the resource-level costs on an invoice Sum costs for each resource, per invoice Return details by cost type for each resource, per invoice month Get breakdown of Google Kubernetes Engine (GKE) cluster costs Filter GKE cost breakdown Pricing data query examples Get list prices for a specific SKU Get list prices for a specific SKU, and include service description Example 1: Returns nested data Example 2: Returns unnested data joined with the same table Use product taxonomy and geo taxonomy to query SKUs Get the product taxonomy of a SKU Get all SKUs for a specific product taxonomy Get all SKUs for a specific geo taxonomy and product taxonomy Join pricing data with detailed usage cost data Standard usage cost query examples This section provides examples of how to query the Cloud Billing standard usage cost data exported to BigQuery.
- These query examples also work with the detailed usage cost data exported to BigQuery, although they aren't written to retrieve any of the resource-level information that's provided with the detailed usage cost export option.
- Because the detailed usage cost schema includes all of the fields from the standard usage cost schema, the query examples provided for the standard data exported to BigQuery also work with the detailed data that's exported.
- The standard query examples aren't written to retrieve any of the resource-level information that's provided with the detailed usage cost export option.

