---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T13:57:37.572Z"
product_name: "Cloud Billing"
product_slug: "cloud-billing"
feature_name: "Google Cloud Storage tags in Cloud Billing exports"
feature_slug: "google-cloud-storage-tags-in-cloud-billing-exports"
latest_feature_date: "2024-03-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/detailed-usage"
  - "https://docs.cloud.google.com/billing/docs/how-to/bq-examples"
  - "https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/standard-usage"
keywords:
  - "storage"
  - "tags"
  - "billing"
  - "exports"
  - "now"
  - "include"
  - "bucket"
  - "tag"
---

# Google Cloud Storage tags in Cloud Billing exports

Product: Cloud Billing
Coverage: MEDIUM

## Step 02 Summary

Cloud Billing exports now include Google Cloud Storage bucket tag data in both Standard and Detailed usage cost exports.

## Extended Definition

Cloud Billing exports now include Google Cloud Storage bucket tag data in both Standard and Detailed usage cost exports.

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
- Final score: 343
- Re-rank relevance: N/A

Evidence snippets:
- Additional fields available to detailed usage cost data export resource Struct The fields that describe the structure and value of information relevant to service resources (like a virtual machine or a SSD) that generate usage. resource.global name String A globally unique service identifier for the resource that generated relevant usage. resource.name String A service-specific identifier for the resource that generated relevant usage.
- Note: Some network data transfer, Cloud SQL backups in specific locations, and Storage Snapshot costs aren't included in the granular Cloud SQL instance costs in Cloud Billing export to BigQuery.
- The detailed export includes granular cost information about the following services: AlloyDB for PostgreSQL App Engine BigQuery Bigtable Cloud Data Fusion Cloud Deploy Cloud Run functions Cloud Logging Cloud Run Cloud SQL Cloud Storage Compute Engine Dataflow Managed Service for Apache Spark Metastore Firestore and Datastore Google Kubernetes Engine (GKE) To view a breakdown of GKE cluster costs in a detailed data export, you must also enable cost allocation for GKE .
- Resource-level tags in the Cloud Billing data export are available for the following resources: AlloyDB for PostgreSQL clusters, instances, and backups Artifact Registry repositories Bigtable instances Cloud Run services and jobs Cloud Storage buckets Compute Engine instances Memorystore for Redis instances Secret Manager global and regional secrets Spanner instances Firestore databases Tags limitations Tags might take up to an hour to propagate to BigQuery exports.

### Example queries for Cloud Billing data export \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/billing/docs/how-to/bq-examples](https://docs.cloud.google.com/billing/docs/how-to/bq-examples)
- Source ID: `site-docs-root-2`
- Final score: 171
- Re-rank relevance: N/A

Evidence snippets:
- SELECT DATE ( TIMESTAMP TRUNC ( usage start time , Day , 'US/Pacific' )) AS Day , service . description AS Service Description , SUM ( CAST ( cost at list AS NUMERIC )) AS List cost , SUM ( CAST ( cost AS NUMERIC )) - SUM ( CAST ( cost at list AS NUMERIC )) AS Negotiated savings , SUM ( IFNULL (( SELECT SUM ( CAST ( c . amount AS numeric )) FROM UNNEST ( credits ) c WHERE c . type IN ( 'SUSTAINED USAGE DISCOUNT' , 'DISCOUNT' , 'SPENDING BASED DISCOUNT' , 'COMMITTED USAGE DISCOUNT' , 'FREE TIER' , 'COMMITTED USAGE DISCOUNT DOLLAR BASE' , 'SUBSCRIPTION BENEFIT' , 'RESELLER MARGIN' )), 0 )) AS Discounts , SUM ( IFNULL (( SELECT SUM ( CAST ( c . amount AS numeric )) FROM UNNEST ( credits ) c WHERE c . type IN ( 'CREDIT TYPE UNSPECIFIED' , 'PROMOTION' )), 0 )) AS Promotions and others , SUM ( CAST ( cost at list AS NUMERIC )) + SUM ( IFNULL (( SELECT SUM ( CAST ( c . amount AS numeric )) FROM UNNEST ( credits ) c WHERE c . type IN ( 'SUSTAINED USAGE DISCOUNT' , 'DISCOUNT' , 'SPENDING BASED DISCOUNT' , 'COMMITTED USAGE DISCOUNT' , 'FREE TIER' , 'COMMITTED USAGE DISCOUNT DOLLAR BASE' , 'SUBSCRIPTION BENEFIT' , 'RESELLER MARGIN' )), 0 )) + SUM ( CAST ( cost AS NUMERIC )) - SUM ( CAST ( cost at list AS NUMERIC )) + SUM ( IFNULL (( SELECT SUM ( CAST ( c . amount AS numeric )) FROM UNNEST ( credits ) c WHERE c . type IN ( 'CREDIT TYPE UNSPECIFIED' , 'PROMOTION' )), 0 )) AS Subtotal FROM project - ID . dataset . gcp billing export v1 XXXXXX - XXXXXX - XXXXXX WHERE invoice . month = '202403' AND DATE ( TIMESTAMP TRUNC ( usage start time , Day , 'US/Pacific' )) '2024-03-01' GROUP BY Day , service . description ORDER BY Day DESC , Subtotal DESC ; For example, the result of the preceding query might be: Row Day Service Description List cost Negotiated savings Discounts Promotions and others Subtotal 1 2024-02-29 Compute Engine 4.39916 0 -1.00916 0 3.39000 2 2024-02-29 Support 0.131969 0 0 0 0.131969 3 2024-02-29 BigQuery 0.005502 0 0 0 0.005502 4 2024-02-29 Networking 0.010972 0 -0.006691 0 0.004281 Detailed usage cost query examples This section provides examples of how to query the Cloud Billing detailed usage cost data exported to BigQuery.
- Before you begin To query using system labels, you must have Cloud Billing export to BigQuery enabled, specifically the Detailed usage cost data export.
- Standard usage cost data Detailed usage cost data Pricing data Standard usage cost query examples Return the total costs on an invoice Example 1: Sum of all costs, per invoice Example 2: Return details by cost type, per invoice month Query examples with labels Query every row without grouping Group by label map as a JSON string Group by label value for a specific key Group by key/value pairs Committed use discount queries Viewing commitment fees Viewing commitment credits Use resource hierarchy filters to review ancestry Example 1: Filter by resource name Example 2: Filter by display name Query examples with tags Calculate costs by invoice month with tags View costs of untagged resources Additional query examples Query costs and credits by project for a specified invoice month Query costs to view corrections or late-monetized usage for a specified invoice month Query cost details to view corrections or late-monetized usage by service for a specified invoice month Detailed usage cost query examples Return the resource-level costs on an invoice Sum costs for each resource, per invoice Return details by cost type for each resource, per invoice month Get breakdown of Google Kubernetes Engine (GKE) cluster costs Filter GKE cost breakdown Pricing data query examples Get list prices for a specific SKU Get list prices for a specific SKU, and include service description Example 1: Returns nested data Example 2: Returns unnested data joined with the same table Use product taxonomy and geo taxonomy to query SKUs Get the product taxonomy of a SKU Get all SKUs for a specific product taxonomy Get all SKUs for a specific geo taxonomy and product taxonomy Join pricing data with detailed usage cost data Standard usage cost query examples This section provides examples of how to query the Cloud Billing standard usage cost data exported to BigQuery.
- Your total bill is $24 with the following breakdown: Instance Labels Total Cost Small instance with 1 VCPU running in Americas None $4 Small instance with 1 VCPU running in Americas app: chocolate-masher environment: dev $2 Small instance with 1 VCPU running in Americas app: grapefruit-squeezer environment: dev $3 Small instance with 1 VCPU running in Americas app: chocolate-masher environment: prod $3.25 Small instance with 1 VCPU running in Asia app: chocolate-masher environment: prod $3.75 Small instance with 1 VCPU running in Americas app: grapefruit-squeezer environment: prod $3.50 Small instance with 1 VCPU running in Asia app: grapefruit-squeezer environment: prod $4.50 Query every row without grouping The most granular view of these costs would be to query every row without grouping.

### "Structure of Standard data export \_|\_ Cloud Billing \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/standard-usage](https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/standard-usage)
- Source ID: `site-docs-root-2`
- Final score: 83
- Re-rank relevance: N/A

Evidence snippets:
- Resource-level tags in the Cloud Billing data export are available for the following resources: AlloyDB for PostgreSQL clusters, instances, and backups Artifact Registry repositories Bigtable instances Cloud Run services and jobs Cloud Storage buckets Compute Engine instances Memorystore for Redis instances Secret Manager global and regional secrets Spanner instances Firestore databases Tags limitations Tags might take up to an hour to propagate to BigQuery exports.
- Common values used in the example standard cost queries The query examples in this section use the following value for Table name : project.dataset.gcp billing export v1 XXXXXX XXXXXX XXXXXX These query examples also work with the detailed usage cost data exported to BigQuery, although they aren't written to retrieve any of the resource-level information that's provided with the detailed usage cost export option.
- Your total bill is $24 with the following breakdown: Instance Labels Total Cost Small instance with 1 VCPU running in Americas None $4 Small instance with 1 VCPU running in Americas app: chocolate-masher environment: dev $2 Small instance with 1 VCPU running in Americas app: grapefruit-squeezer environment: dev $3 Small instance with 1 VCPU running in Americas app: chocolate-masher environment: prod $3.25 Small instance with 1 VCPU running in Asia app: chocolate-masher environment: prod $3.75 Small instance with 1 VCPU running in Americas app: grapefruit-squeezer environment: prod $3.50 Small instance with 1 VCPU running in Asia app: grapefruit-squeezer environment: prod $4.50 Query every row without grouping The most granular view of these costs would be to query every row without grouping.
- Available tags The Standard costs and Detailed costs exports for Resources, Projects, Folders, and Organizations include these fields for tags data: Tags Key, Tags Value, Tags Inherited, and Tags Namespace.

