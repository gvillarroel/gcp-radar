---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T13:57:37.583Z"
product_name: "Cloud Billing"
product_slug: "cloud-billing"
feature_name: "Granular Firestore and Datastore cost data in Cloud Billing export"
feature_slug: "granular-firestore-and-datastore-cost-data-in-cloud-billing-export"
latest_feature_date: "2023-07-27"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/detailed-usage"
  - "https://docs.cloud.google.com/billing/docs/how-to/bq-examples"
  - "https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/cud-export"
keywords:
  - "granular"
  - "firestore"
  - "datastore"
  - "cost"
  - "billing"
  - "export"
  - "adds"
  - "detailed"
---

# Granular Firestore and Datastore cost data in Cloud Billing export

Product: Cloud Billing
Coverage: MEDIUM

## Step 02 Summary

Adds detailed-cost export support for Firestore and Datastore usage with filtering via resource-level fields as part of App Engine usage.

## Extended Definition

Adds detailed-cost export support for Firestore and Datastore usage with filtering via resource-level fields as part of App Engine usage.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/detailed-usage](https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/detailed-usage)
- [https://docs.cloud.google.com/billing/docs/how-to/bq-examples](https://docs.cloud.google.com/billing/docs/how-to/bq-examples)
- [https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/cud-export](https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/cud-export)

## Supporting Pages

### "Structure of Detailed data export \_|\_ Cloud Billing \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/detailed-usage](https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/detailed-usage)
- Source ID: `site-docs-root-2`
- Final score: 395
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The detailed export includes granular cost information about the following services: AlloyDB for PostgreSQL App Engine BigQuery Bigtable Cloud Data Fusion Cloud Deploy Cloud Run functions Cloud Logging Cloud Run Cloud SQL Cloud Storage Compute Engine Dataflow Managed Service for Apache Spark Metastore Firestore and Datastore Google Kubernetes Engine (GKE) To view a breakdown of GKE cluster costs in a detailed data export, you must also enable cost allocation for GKE .
- Additional fields available to detailed usage cost data export resource Struct The fields that describe the structure and value of information relevant to service resources (like a virtual machine or a SSD) that generate usage. resource.global name String A globally unique service identifier for the resource that generated relevant usage. resource.name String A service-specific identifier for the resource that generated relevant usage.
- Managed Microsoft AD Memorystore for Redis Secret Manager Spanner Identify granular cost data by service To analyze granular cost information in a detailed export, use the following table to identify the column that contains information about specific resources.
- When you enable the detailed usage cost data export for the first time in Cloud Billing, if you select a dataset configured to use a multi-region location (EU or US), Cloud Billing data will be available retroactively from the start of the previous month.

### Example queries for Cloud Billing data export \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/billing/docs/how-to/bq-examples](https://docs.cloud.google.com/billing/docs/how-to/bq-examples)
- Source ID: `site-docs-root-2`
- Final score: 173
- Re-rank relevance: N/A

Evidence snippets:
- SELECT DATE ( TIMESTAMP TRUNC ( usage start time , Day , 'US/Pacific' )) AS Day , service . description AS Service Description , SUM ( CAST ( cost at list AS NUMERIC )) AS List cost , SUM ( CAST ( cost AS NUMERIC )) - SUM ( CAST ( cost at list AS NUMERIC )) AS Negotiated savings , SUM ( IFNULL (( SELECT SUM ( CAST ( c . amount AS numeric )) FROM UNNEST ( credits ) c WHERE c . type IN ( 'SUSTAINED USAGE DISCOUNT' , 'DISCOUNT' , 'SPENDING BASED DISCOUNT' , 'COMMITTED USAGE DISCOUNT' , 'FREE TIER' , 'COMMITTED USAGE DISCOUNT DOLLAR BASE' , 'SUBSCRIPTION BENEFIT' , 'RESELLER MARGIN' )), 0 )) AS Discounts , SUM ( IFNULL (( SELECT SUM ( CAST ( c . amount AS numeric )) FROM UNNEST ( credits ) c WHERE c . type IN ( 'CREDIT TYPE UNSPECIFIED' , 'PROMOTION' )), 0 )) AS Promotions and others , SUM ( CAST ( cost at list AS NUMERIC )) + SUM ( IFNULL (( SELECT SUM ( CAST ( c . amount AS numeric )) FROM UNNEST ( credits ) c WHERE c . type IN ( 'SUSTAINED USAGE DISCOUNT' , 'DISCOUNT' , 'SPENDING BASED DISCOUNT' , 'COMMITTED USAGE DISCOUNT' , 'FREE TIER' , 'COMMITTED USAGE DISCOUNT DOLLAR BASE' , 'SUBSCRIPTION BENEFIT' , 'RESELLER MARGIN' )), 0 )) + SUM ( CAST ( cost AS NUMERIC )) - SUM ( CAST ( cost at list AS NUMERIC )) + SUM ( IFNULL (( SELECT SUM ( CAST ( c . amount AS numeric )) FROM UNNEST ( credits ) c WHERE c . type IN ( 'CREDIT TYPE UNSPECIFIED' , 'PROMOTION' )), 0 )) AS Subtotal FROM project - ID . dataset . gcp billing export v1 XXXXXX - XXXXXX - XXXXXX WHERE invoice . month = '202403' AND DATE ( TIMESTAMP TRUNC ( usage start time , Day , 'US/Pacific' )) '2024-03-01' GROUP BY Day , service . description ORDER BY Day DESC , Subtotal DESC ; For example, the result of the preceding query might be: Row Day Service Description List cost Negotiated savings Discounts Promotions and others Subtotal 1 2024-02-29 Compute Engine 4.39916 0 -1.00916 0 3.39000 2 2024-02-29 Support 0.131969 0 0 0 0.131969 3 2024-02-29 BigQuery 0.005502 0 0 0 0.005502 4 2024-02-29 Networking 0.010972 0 -0.006691 0 0.004281 Detailed usage cost query examples This section provides examples of how to query the Cloud Billing detailed usage cost data exported to BigQuery.
- Before you begin To query using system labels, you must have Cloud Billing export to BigQuery enabled, specifically the Detailed usage cost data export.
- These query examples also work with the detailed usage cost data exported to BigQuery, although they aren't written to retrieve any of the resource-level information that's provided with the detailed usage cost export option.
- Your total bill is $24 with the following breakdown: Instance Labels Total Cost Small instance with 1 VCPU running in Americas None $4 Small instance with 1 VCPU running in Americas app: chocolate-masher environment: dev $2 Small instance with 1 VCPU running in Americas app: grapefruit-squeezer environment: dev $3 Small instance with 1 VCPU running in Americas app: chocolate-masher environment: prod $3.25 Small instance with 1 VCPU running in Asia app: chocolate-masher environment: prod $3.75 Small instance with 1 VCPU running in Americas app: grapefruit-squeezer environment: prod $3.50 Small instance with 1 VCPU running in Asia app: grapefruit-squeezer environment: prod $4.50 Query every row without grouping The most granular view of these costs would be to query every row without grouping.

### "Structure of CUD metadata export \_|\_ Cloud Billing \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/cud-export](https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/cud-export)
- Source ID: `site-docs-root-2`
- Final score: 118
- Re-rank relevance: N/A

Evidence snippets:
- Field Type Description billing account id String The 18-character, alphanumeric billing account ID associated with the CUD data, for example, 010101-F0FFF0-10XX01 . cud product.id String The subscription definition ID, for example 344fffc1-17f9-4e34-abf2-cfffff409fa2 . cud product.display name String The friendly name of the product associated with the commitment, for example Flexible CUD . cud product.type String The type of product commitment, for example Spend-Based . consumption model.id String The ID of the consumption model used by the CUD, for example 5515-81A8-03A2 . consumption model.description String The description of the consumption model for the CUD, for example Cloud Spanner CUD - 1 Year . subscription.entitlement scope String The scope of the entitlement for the CUD, for example, an account-scoped entitlement might be billingAccounts/010101-F0FFF0-10XX01 . subscription.instance id String The subscription instance ID which is a GUID, for example 769c55ea-c50f-4258-bcf5-04b6688fa5fa . subscription.display name String The display name for the CUD, defined by the customer at time of purchase, for example Recommended Cloud Run CUD commitment in us-central1 on Sep 3, 2023 . region String The region associated with the CUD, for example us-central1 . commitent amount.unit String The measurement unit of resource consumption for the commitment, for example, $/hr . commitent amount.value Numeric The commitment amount purchased, for example 100 or 0.05 . term String The term of the commitment in ISO 8601 duration format, where P1Y represents one year, and P3Y represents three years. start time Timestamp The start timestamp for the commitment, for example 2024-09-27 18:08:20 UTC . end time Timestamp The end timestamp for the commitment, for example 2025-02-18 12:11:20 UTC . state String The state of the commitment, for example Active or Expired .
- Related topics Topics related to exported Cloud Billing data Set up Cloud Billing data export to BigQuery Example queries for Cloud Billing data export to BigQuery Visualize spend over time with Looker Studio Cost and pricing reports available in the Google Cloud console View your Cloud Billing reports and cost trends View and download the cost details of your invoice or statement View and download prices for Google's cloud services Understand your savings with cost breakdown reports Analyze the effectiveness of your committed use discounts View your cost and payment history Previous arrow back Structure of Pricing data export Next Example queries for Cloud Billing arrow forward Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Home Documentation Costs and usage management Cloud Billing Guides Send feedback Structure of CUD metadata export Stay organized with collections Save and categorize content based on your preferences.
- This export provides a daily snapshot of your spend-based CUDs commitment metadata to a BigQuery table, which you can join with other billing data exports for better CUD management and reporting.

