---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T13:57:37.595Z"
product_name: "Cloud Billing"
product_slug: "cloud-billing"
feature_name: "Tags integration in Cloud Billing cost exports"
feature_slug: "tags-integration-in-cloud-billing-cost-exports"
latest_feature_date: "2022-09-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/detailed-usage"
  - "https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/standard-usage"
  - "https://docs.cloud.google.com/billing/docs/how-to/bq-examples"
keywords:
  - "tags"
  - "integration"
  - "billing"
  - "cost"
  - "exports"
  - "now"
  - "includes"
  - "resource"
---

# Tags integration in Cloud Billing cost exports

Product: Cloud Billing
Coverage: MEDIUM

## Step 02 Summary

Cloud Billing now includes resource Tags in standard and detailed usage cost exports, enabling cost queries for chargeback, audits, and allocations.

## Extended Definition

Cloud Billing now includes resource Tags in standard and detailed usage cost exports, enabling cost queries for chargeback, audits, and allocations.

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
- Final score: 148
- Re-rank relevance: N/A

Evidence snippets:
- GKE cluster costs before credits SELECT SUM ( cost ) AS cost before credits , labels . value AS cluster name FROM project - ID . dataset . gcp billing export resource v1 XXXXXX - XXXXXX - XXXXXX LEFT JOIN UNNEST ( labels ) as labels ON labels . key = "goog-k8s-cluster-name" GROUP BY labels . value ; GKE costs after credits by namespace SELECT labels . value as namespace , SUM ( cost ) + SUM ( IFNULL (( SELECT SUM ( c . amount ) FROM UNNEST ( credits ) c ), 0 )) AS cost after credits , FROM project - ID . dataset . gcp billing export resource v1 XXXXXX - XXXXXX - XXXXXX LEFT JOIN UNNEST ( labels ) as labels ON labels . key = "k8s-namespace" GROUP BY namespace ; GKE costs by SKU SELECT project . id AS project id , labels . value AS cluster name , sku . id AS sku id , sku . description AS sku description , SUM ( cost ) AS cost FROM project - ID . dataset . gcp billing export resource v1 XXXXXX - XXXXXX - XXXXXX JOIN UNNEST ( labels ) AS labels ON labels . key = "goog-k8s-cluster-name" GROUP BY cluster name , project id , sku description , sku id ; Query examples with tags The following examples illustrate ways to query your data with tags.
- SELECT invoice . month AS invoice month , tag . value AS cost center , ROUND (( SUM ( CAST ( cost AS NUMERIC )) + SUM ( IFNULL (( SELECT SUM ( CAST ( c . amount AS NUMERIC )) FROM UNNEST ( credits ) AS c ), 0 ))), 2 ) AS net cost FROM project - ID . dataset . gcp billing export resource v1 XXXXXX - XXXXXX - XXXXXX , UNNEST ( tags ) AS tag WHERE tag . key = "cost center" AND tag . namespace = "821092389413" GROUP BY invoice . month , tag . value ORDER BY invoice . month , tag . value ; For example, the result of the preceding query might be: Row invoice month cost center net cost 1 202208 android mobile apps 9.93 2 202208 ios mobile apps 9.93 3 202209 android mobile apps 25.42 4 202209 ios mobile apps 25.4 5 202209 personalization 16.08 View costs of untagged resources This query shows the invoice total for untagged resources, grouped by invoice month.
- Resource-level tags in the Cloud Billing data export are available for the following resources: AlloyDB for PostgreSQL clusters, instances, and backups Artifact Registry repositories Bigtable instances Cloud Run services and jobs Cloud Storage buckets Compute Engine instances Memorystore for Redis instances Secret Manager global and regional secrets Spanner instances Firestore databases Tags limitations Tags might take up to an hour to propagate to BigQuery exports.
- Available tags The Standard costs and Detailed costs exports for Resources, Projects, Folders, and Organizations include these fields for tags data: Tags Key, Tags Value, Tags Inherited, and Tags Namespace.

### "Structure of Standard data export \_|\_ Cloud Billing \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/standard-usage](https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/standard-usage)
- Source ID: `site-docs-root-2`
- Final score: 144
- Re-rank relevance: N/A

Evidence snippets:
- SELECT invoice . month AS invoice month , tag . value AS cost center , ROUND (( SUM ( CAST ( cost AS NUMERIC )) + SUM ( IFNULL (( SELECT SUM ( CAST ( c . amount AS NUMERIC )) FROM UNNEST ( credits ) AS c ), 0 ))), 2 ) AS net cost FROM project - ID . dataset . gcp billing export resource v1 XXXXXX - XXXXXX - XXXXXX , UNNEST ( tags ) AS tag WHERE tag . key = "cost center" AND tag . namespace = "821092389413" GROUP BY invoice . month , tag . value ORDER BY invoice . month , tag . value ; For example, the result of the preceding query might be: Row invoice month cost center net cost 1 202208 android mobile apps 9.93 2 202208 ios mobile apps 9.93 3 202209 android mobile apps 25.42 4 202209 ios mobile apps 25.4 5 202209 personalization 16.08 View costs of untagged resources This query shows the invoice total for untagged resources, grouped by invoice month.
- Resource-level tags in the Cloud Billing data export are available for the following resources: AlloyDB for PostgreSQL clusters, instances, and backups Artifact Registry repositories Bigtable instances Cloud Run services and jobs Cloud Storage buckets Compute Engine instances Memorystore for Redis instances Secret Manager global and regional secrets Spanner instances Firestore databases Tags limitations Tags might take up to an hour to propagate to BigQuery exports.
- Available tags The Standard costs and Detailed costs exports for Resources, Projects, Folders, and Organizations include these fields for tags data: Tags Key, Tags Value, Tags Inherited, and Tags Namespace.
- String method SELECT invoice . month AS invoice month , TO JSON STRING ( project . ancestors ) as ancestors , SUM ( cost ) + SUM ( IFNULL (( SELECT SUM ( c . amount ) FROM UNNEST ( credits ) c ), 0 )) AS net cost FROM project . dataset . gcp billing export v1 XXXXXX XXXXXX XXXXXX as bq WHERE TO JSON STRING ( project . ancestors ) like "%resource name\" : \ "folders/1234" GROUP BY invoice month , ancestors ORDER BY invoice month , ancestors UNNEST method SELECT invoice . month AS invoice month , TO JSON STRING ( project . ancestors ) as ancestors , SUM ( cost ) + SUM ( IFNULL (( SELECT SUM ( c . amount ) FROM UNNEST ( credits ) c ), 0 )) AS net cost FROM project . dataset . gcp billing export v1 XXXXXX XXXXXX XXXXXX as bq , UNNEST ( project . ancestors ) as ancestor WHERE ancestor . resource name = "folders/1234" GROUP BY invoice month , ancestors ORDER BY invoice month , ancestors Example 2: Filter by display name This example demonstrates queries that group costs by project ancestry and filter for only costs generated under a specified hierarchy element, identified by the user-provided display name.

### Example queries for Cloud Billing data export \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/billing/docs/how-to/bq-examples](https://docs.cloud.google.com/billing/docs/how-to/bq-examples)
- Source ID: `site-docs-root-2`
- Final score: 127
- Re-rank relevance: N/A

Evidence snippets:
- Use your detailed usage cost table name to pull the Exports data: gcp billing export resource v1 <BILLING ACCOUNT ID> Use your pricing table name for the Prices data: project-ID.dataset.cloud pricing export WITH Exports AS ( SELECT FROM project - ID . dataset . gcp billing export resource v1 XXXXXX - XXXXXX - XXXXXX ), Prices AS ( SELECT FROM project - ID . dataset . cloud pricing export ) SELECT Exports . sku . description AS sku description , Exports . cost , Exports . usage , FlattenedPrices . pricing unit description , FlattenedPrices . account currency amount , FlattenedPrices . account currency code , FROM Exports JOIN ( SELECT FROM Prices CROSS JOIN UNNEST ( Prices . list price . tiered rates )) AS FlattenedPrices ON Exports . sku . id = FlattenedPrices . sku . id AND Exports . price . tier start amount = FlattenedPrices . start usage amount WHERE DATE ( Exports . export time ) = '2023-06-30' AND DATE ( FlattenedPrices . export time ) = '2023-06-30' AND cost > 0 LIMIT 1000 For example, the result of the preceding query might be: sku description cost usage pricing unit description account currency amount account currency code Balanced PD Capacity 0.001345 { "usage": { "amount": "38654705664000.0", "unit": "byte-seconds", "amount in pricing units": "0.01345895", "pricing unit": "gibibyte month" } } gibibyte month 0.1 USD Balanced PD Capacity 0.001344 { "usage": { "amount": "38654705664000.0", "unit": "byte-seconds", "amount in pricing units": "0.01345895", "pricing unit": "gibibyte month" } } gibibyte month 0.1 USD Balanced PD Capacity 0.001346 { "usage": { "amount": "38654705664000.0", "unit": "byte-seconds", "amount in pricing units": "0.01345895", "pricing unit": "gibibyte month" } } gibibyte month 0.1 USD Query using system labels System labels for Google Cloud reservations provide enhanced visibility into your reservation usage.
- Standard usage cost data Detailed usage cost data Pricing data Standard usage cost query examples Return the total costs on an invoice Example 1: Sum of all costs, per invoice Example 2: Return details by cost type, per invoice month Query examples with labels Query every row without grouping Group by label map as a JSON string Group by label value for a specific key Group by key/value pairs Committed use discount queries Viewing commitment fees Viewing commitment credits Use resource hierarchy filters to review ancestry Example 1: Filter by resource name Example 2: Filter by display name Query examples with tags Calculate costs by invoice month with tags View costs of untagged resources Additional query examples Query costs and credits by project for a specified invoice month Query costs to view corrections or late-monetized usage for a specified invoice month Query cost details to view corrections or late-monetized usage by service for a specified invoice month Detailed usage cost query examples Return the resource-level costs on an invoice Sum costs for each resource, per invoice Return details by cost type for each resource, per invoice month Get breakdown of Google Kubernetes Engine (GKE) cluster costs Filter GKE cost breakdown Pricing data query examples Get list prices for a specific SKU Get list prices for a specific SKU, and include service description Example 1: Returns nested data Example 2: Returns unnested data joined with the same table Use product taxonomy and geo taxonomy to query SKUs Get the product taxonomy of a SKU Get all SKUs for a specific product taxonomy Get all SKUs for a specific geo taxonomy and product taxonomy Join pricing data with detailed usage cost data Standard usage cost query examples This section provides examples of how to query the Cloud Billing standard usage cost data exported to BigQuery.
- SELECT invoice . month AS invoice month , tag . value AS cost center , ROUND (( SUM ( CAST ( cost AS NUMERIC )) + SUM ( IFNULL (( SELECT SUM ( CAST ( c . amount AS NUMERIC )) FROM UNNEST ( credits ) AS c ), 0 ))), 2 ) AS net cost FROM project - ID . dataset . gcp billing export resource v1 XXXXXX - XXXXXX - XXXXXX , UNNEST ( tags ) AS tag WHERE tag . key = "cost center" AND tag . namespace = "821092389413" GROUP BY invoice . month , tag . value ORDER BY invoice . month , tag . value ; For example, the result of the preceding query might be: Row invoice month cost center net cost 1 202208 android mobile apps 9.93 2 202208 ios mobile apps 9.93 3 202209 android mobile apps 25.42 4 202209 ios mobile apps 25.4 5 202209 personalization 16.08 View costs of untagged resources This query shows the invoice total for untagged resources, grouped by invoice month.
- PARTITIONTIME , DAY )) = '2025-09-16' AND t . sku . description LIKE '%Core%' AND sl reservation . value LIKE '%tc-billing-case2-res-1757983801%' AND t . resource . global name NOT LIKE '%allocation/%' AND t . resource . name IS NOT NULL AND t . resource . name != '' ORDER BY t . usage start time , t . project . id , t . resource . name ; Sample results: usage start time usage end time consumer project id instance name usage amount 2025-09-16 00:00:00.000000 UTC 2025-09-16 01:00:00.000000 UTC disco-sector-292704 projects/204187533293/instances/tc-billing-case2-ins0-1757983801 552 2025-09-16 00:00:00.000000 UTC 2025-09-16 01:00:00.000000 UTC disco-sector-292704 projects/204187533293/instances/tc-billing-case2-ins1-1757983801 533 2025-09-16 00:00:00.000000 UTC 2025-09-16 01:00:00.000000 UTC flash-freehold-292704 projects/978655420110/instances/tc-billing-case2-ins2-1757983801 517 2025-09-16 01:00:00.000000 UTC 2025-09-16 02:00:00.000000 UTC disco-sector-292704 projects/204187533293/instances/tc-billing-case2-ins0-1757983801 3600 2025-09-16 01:00:00.000000 UTC 2025-09-16 02:00:00.000000 UTC disco-sector-292704 projects/204187533293/instances/tc-billing-case2-ins1-1757983801 3600 2025-09-16 01:00:00.000000 UTC 2025-09-16 02:00:00.000000 UTC flash-freehold-292704 projects/978655420110/instances/tc-billing-case2-ins2-1757983801 3600 2025-09-16 02:00:00.000000 UTC 2025-09-16 03:00:00.000000 UTC disco-sector-292704 projects/204187533293/instances/tc-billing-case2-ins0-1757983801 3022 2025-09-16 02:00:00.000000 UTC 2025-09-16 03:00:00.000000 UTC disco-sector-292704 projects/204187533293/instances/tc-billing-case2-ins0-1757983801 79 2025-09-16 02:00:00.000000 UTC 2025-09-16 03:00:00.000000 UTC disco-sector-292704 projects/204187533293/instances/tc-billing-case2-ins1-1757983801 79 2025-09-16 02:00:00.000000 UTC 2025-09-16 03:00:00.000000 UTC disco-sector-292704 projects/204187533293/instances/tc-billing-case2-ins1-1757983801 3086 2025-09-16 02:00:00.000000 UTC 2025-09-16 03:00:00.000000 UTC flash-freehold-292704 projects/978655420110/instances/tc-billing-case2-ins2-1757983801 3151 2025-09-16 02:00:00.000000 UTC 2025-09-16 03:00:00.000000 UTC flash-freehold-292704 projects/978655420110/instances/tc-billing-case2-ins2-1757983801 79 Analyze Vertex AI reservation usage using BigQuery To analyze how first-party (1P) products, such as Vertex AI, consume your shared reservations across projects where Vertex AI jobs are active, use the following system labels in BigQuery: compute.googleapis.com/reservation name compute.googleapis.com/reservation project id For more information about how to share reservations with first-party (1P) products in Vertex AI, see the following: Use reservations with training Use reservations with online inference Use reservations with Vertex AI Workbench instances The following example queries show how to use these labels to get detailed visibility into your reservation usage, monitor how instances consume these reservations, and perform in-depth cost analysis.

