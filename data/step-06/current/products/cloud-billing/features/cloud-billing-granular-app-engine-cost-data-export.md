---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T20:10:07.287Z"
product_name: "Cloud Billing"
product_slug: "cloud-billing"
feature_name: "Cloud Billing granular App Engine cost data export"
feature_slug: "cloud-billing-granular-app-engine-cost-data-export"
latest_feature_date: "2023-04-11"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/detailed-usage"
  - "https://docs.cloud.google.com/billing/docs/how-to/reports"
  - "https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/standard-usage"
keywords:
  - "billing"
  - "granular"
  - "app"
  - "engine"
  - "cost"
  - "export"
  - "added"
  - "instance"
---

# Cloud Billing granular App Engine cost data export

Product: Cloud Billing
Coverage: LOW

## Step 02 Summary

Cloud Billing added granular App Engine instance cost visibility in the Detailed cost export via BigQuery using the resource.global_name field.

## Extended Definition

Cloud Billing added granular App Engine instance cost visibility in the Detailed cost export via BigQuery using the resource.global_name field.

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
- Final score: 206
- Re-rank relevance: N/A

Evidence snippets:
- Note: App Engine Flex costs are not included in the granular App Engine instance costs in Cloud Billing export to BigQuery.
- The detailed export includes granular cost information about the following services: AlloyDB for PostgreSQL App Engine BigQuery Bigtable Cloud Data Fusion Cloud Deploy Cloud Run functions Cloud Logging Cloud Run Cloud SQL Cloud Storage Compute Engine Dataflow Managed Service for Apache Spark Metastore Firestore and Datastore Google Kubernetes Engine (GKE) To view a breakdown of GKE cluster costs in a detailed data export, you must also enable cost allocation for GKE .
- Note: Some network data transfer, Cloud SQL backups in specific locations, and Storage Snapshot costs aren't included in the granular Cloud SQL instance costs in Cloud Billing export to BigQuery.
- Note: Hybrid data fusion costs aren't included in the granular Data Fusion instance costs in Cloud Billing export to BigQuery.

### "Analyze billing data and cost trends with Reports \_|\_ Cloud Billing \_\

- URL: [https://docs.cloud.google.com/billing/docs/how-to/reports](https://docs.cloud.google.com/billing/docs/how-to/reports)
- Source ID: `site-docs-root`
- Final score: 202
- Re-rank relevance: N/A

Evidence snippets:
- Related topics Export Cloud Billing data to BigQuery Understand your savings with cost breakdown reports View your cost and payment history Create, modify, or close your Cloud Billing account Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Prerequisites to generate and run a query To generate a query from a Cloud Billing Report , ensure you and your Cloud Billing account meet the following requirements: On your Cloud Billing account, Cloud Billing data export to BigQuery must be enabled, for either the standard usage cost data or detailed usage cost data .
- When you open the cost report from the budget's cost trend chart , if your budget scope is set for all projects, and your Cloud Billing account is incurring charges not specific to a project , you might notice that your costs appear higher in the cost report than in the budget's cost trend chart.
- Description : The current calendar month's daily cost for all services and SKUs, grouped by Service (for example, Compute Engine or Cloud Storage), including any usage-specific savings applied, but not including invoice-level charges or credits such as taxes and adjustments.

### "Structure of Standard data export \_|\_ Cloud Billing \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/standard-usage](https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/standard-usage)
- Source ID: `site-docs-root-2`
- Final score: 198
- Re-rank relevance: N/A

Evidence snippets:
- SELECT invoice . month AS invoice month , tag . value AS cost center , ROUND (( SUM ( CAST ( cost AS NUMERIC )) + SUM ( IFNULL (( SELECT SUM ( CAST ( c . amount AS NUMERIC )) FROM UNNEST ( credits ) AS c ), 0 ))), 2 ) AS net cost FROM project - ID . dataset . gcp billing export resource v1 XXXXXX - XXXXXX - XXXXXX , UNNEST ( tags ) AS tag WHERE tag . key = "cost center" AND tag . namespace = "821092389413" GROUP BY invoice . month , tag . value ORDER BY invoice . month , tag . value ; For example, the result of the preceding query might be: Row invoice month cost center net cost 1 202208 android mobile apps 9.93 2 202208 ios mobile apps 9.93 3 202209 android mobile apps 25.42 4 202209 ios mobile apps 25.4 5 202209 personalization 16.08 View costs of untagged resources This query shows the invoice total for untagged resources, grouped by invoice month.
- Your total bill is $24 with the following breakdown: Instance Labels Total Cost Small instance with 1 VCPU running in Americas None $4 Small instance with 1 VCPU running in Americas app: chocolate-masher environment: dev $2 Small instance with 1 VCPU running in Americas app: grapefruit-squeezer environment: dev $3 Small instance with 1 VCPU running in Americas app: chocolate-masher environment: prod $3.25 Small instance with 1 VCPU running in Asia app: chocolate-masher environment: prod $3.75 Small instance with 1 VCPU running in Americas app: grapefruit-squeezer environment: prod $3.50 Small instance with 1 VCPU running in Asia app: grapefruit-squeezer environment: prod $4.50 Query every row without grouping The most granular view of these costs would be to query every row without grouping.
- Standard SQL SELECT labels . key as key , labels . value as value , SUM ( cost ) as cost FROM project . dataset . gcp billing export v1 XXXXXX XXXXXX XXXXXX LEFT JOIN UNNEST ( labels ) as labels GROUP BY key , value ; Legacy SQL SELECT labels . key as key , labels . value as value , SUM ( cost ) FROM [ project : dataset . gcp billing export v1 XXXXXX XXXXXX XXXXXX ] GROUP BY key , value ; Row key value cost 1 null null $4 2 app chocolate-masher $9 3 app grapefruit-squeezer $11 4 environment dev $5 5 environment prod $15 TOTAL $44 Note that the total sum is greater than your bill.
- Resource-level tags in the Cloud Billing data export are available for the following resources: AlloyDB for PostgreSQL clusters, instances, and backups Artifact Registry repositories Bigtable instances Cloud Run services and jobs Cloud Storage buckets Compute Engine instances Memorystore for Redis instances Secret Manager global and regional secrets Spanner instances Firestore databases Tags limitations Tags might take up to an hour to propagate to BigQuery exports.

