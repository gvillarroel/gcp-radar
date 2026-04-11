---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T20:10:07.237Z"
product_name: "Cloud Billing"
product_slug: "cloud-billing"
feature_name: "AlloyDB for PostgreSQL granular usage in Cloud Billing detailed export"
feature_slug: "alloydb-for-postgresql-granular-usage-in-cloud-billing-detailed-export"
latest_feature_date: "2024-07-10"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/detailed-usage"
  - "https://docs.cloud.google.com/billing/docs/how-to/get-pricing-information-api"
  - "https://docs.cloud.google.com/billing/docs/how-to/reports"
keywords:
  - "alloydb"
  - "for"
  - "postgresql"
  - "granular"
  - "usage"
  - "in"
  - "billing"
  - "detailed"
---

# AlloyDB for PostgreSQL granular usage in Cloud Billing detailed export

Product: Cloud Billing
Coverage: LOW

## Step 02 Summary

Cloud Billing detailed export to BigQuery now exposes granular AlloyDB for PostgreSQL cluster, instance, and backup usage data with resource name fields for filtering.

## Extended Definition

Cloud Billing detailed export to BigQuery now exposes granular AlloyDB for PostgreSQL cluster, instance, and backup usage data with resource name fields for filtering.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/detailed-usage](https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/detailed-usage)
- [https://docs.cloud.google.com/billing/docs/how-to/get-pricing-information-api](https://docs.cloud.google.com/billing/docs/how-to/get-pricing-information-api)
- [https://docs.cloud.google.com/billing/docs/how-to/reports](https://docs.cloud.google.com/billing/docs/how-to/reports)

## Supporting Pages

### "Structure of Detailed data export \_|\_ Cloud Billing \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/detailed-usage](https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/detailed-usage)
- Source ID: `site-docs-root-2`
- Final score: 232
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The detailed export includes granular cost information about the following services: AlloyDB for PostgreSQL App Engine BigQuery Bigtable Cloud Data Fusion Cloud Deploy Cloud Run functions Cloud Logging Cloud Run Cloud SQL Cloud Storage Compute Engine Dataflow Managed Service for Apache Spark Metastore Firestore and Datastore Google Kubernetes Engine (GKE) To view a breakdown of GKE cluster costs in a detailed data export, you must also enable cost allocation for GKE .
- PARTITIONTIME , DAY )) = '2025-09-16' AND t . sku . description LIKE '%Core%' AND sl reservation . value LIKE '%tc-billing-case2-res-1757983801%' AND t . resource . global name NOT LIKE '%allocation/%' AND t . resource . name IS NOT NULL AND t . resource . name != '' ORDER BY t . usage start time , t . project . id , t . resource . name ; Sample results: usage start time usage end time consumer project id instance name usage amount 2025-09-16 00:00:00.000000 UTC 2025-09-16 01:00:00.000000 UTC disco-sector-292704 projects/204187533293/instances/tc-billing-case2-ins0-1757983801 552 2025-09-16 00:00:00.000000 UTC 2025-09-16 01:00:00.000000 UTC disco-sector-292704 projects/204187533293/instances/tc-billing-case2-ins1-1757983801 533 2025-09-16 00:00:00.000000 UTC 2025-09-16 01:00:00.000000 UTC flash-freehold-292704 projects/978655420110/instances/tc-billing-case2-ins2-1757983801 517 2025-09-16 01:00:00.000000 UTC 2025-09-16 02:00:00.000000 UTC disco-sector-292704 projects/204187533293/instances/tc-billing-case2-ins0-1757983801 3600 2025-09-16 01:00:00.000000 UTC 2025-09-16 02:00:00.000000 UTC disco-sector-292704 projects/204187533293/instances/tc-billing-case2-ins1-1757983801 3600 2025-09-16 01:00:00.000000 UTC 2025-09-16 02:00:00.000000 UTC flash-freehold-292704 projects/978655420110/instances/tc-billing-case2-ins2-1757983801 3600 2025-09-16 02:00:00.000000 UTC 2025-09-16 03:00:00.000000 UTC disco-sector-292704 projects/204187533293/instances/tc-billing-case2-ins0-1757983801 3022 2025-09-16 02:00:00.000000 UTC 2025-09-16 03:00:00.000000 UTC disco-sector-292704 projects/204187533293/instances/tc-billing-case2-ins0-1757983801 79 2025-09-16 02:00:00.000000 UTC 2025-09-16 03:00:00.000000 UTC disco-sector-292704 projects/204187533293/instances/tc-billing-case2-ins1-1757983801 79 2025-09-16 02:00:00.000000 UTC 2025-09-16 03:00:00.000000 UTC disco-sector-292704 projects/204187533293/instances/tc-billing-case2-ins1-1757983801 3086 2025-09-16 02:00:00.000000 UTC 2025-09-16 03:00:00.000000 UTC flash-freehold-292704 projects/978655420110/instances/tc-billing-case2-ins2-1757983801 3151 2025-09-16 02:00:00.000000 UTC 2025-09-16 03:00:00.000000 UTC flash-freehold-292704 projects/978655420110/instances/tc-billing-case2-ins2-1757983801 79 Analyze Vertex AI reservation usage using BigQuery To analyze how first-party (1P) products, such as Vertex AI, consume your shared reservations across projects where Vertex AI jobs are active, use the following system labels in BigQuery: compute.googleapis.com/reservation name compute.googleapis.com/reservation project id For more information about how to share reservations with first-party (1P) products in Vertex AI, see the following: Use reservations with training Use reservations with online inference Use reservations with Vertex AI Workbench instances The following example queries show how to use these labels to get detailed visibility into your reservation usage, monitor how instances consume these reservations, and perform in-depth cost analysis.
- Resource-level tags in the Cloud Billing data export are available for the following resources: AlloyDB for PostgreSQL clusters, instances, and backups Artifact Registry repositories Bigtable instances Cloud Run services and jobs Cloud Storage buckets Compute Engine instances Memorystore for Redis instances Secret Manager global and regional secrets Spanner instances Firestore databases Tags limitations Tags might take up to an hour to propagate to BigQuery exports.
- When you enable the detailed usage cost data export for the first time in Cloud Billing, if you select a dataset configured to use a multi-region location (EU or US), Cloud Billing data will be available retroactively from the start of the previous month.

### "Get Google Cloud pricing information \_|\_ Cloud Billing \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/billing/docs/how-to/get-pricing-information-api](https://docs.cloud.google.com/billing/docs/how-to/get-pricing-information-api)
- Source ID: `site-api-reference`
- Final score: 218
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Home Documentation Costs and usage management Cloud Billing APIs & Reference Send feedback Get Google Cloud pricing information Stay organized with collections Save and categorize content based on your preferences.
- Export your Cloud Billing pricing data to BigQuery View and download your price lists in the pricing table report Get detailed information about public Google Cloud SKUs .
- When all items have been listed, no token is returned. { "billingAccountPrices": [ { "name": "billingAccounts/01ABCD-EFGH23-UVWXYZ/skus/0000-9B70-F099/price", "currencyCode": "USD", "valueType": "rate", "rate": { "tiers": [ { "startAmount": { "value": "0" }, "listPrice": { "currencyCode": "USD", "nanos": 690000000 }, "contractPrice": { "currencyCode": "USD", "nanos": 690000000 }, "effectiveDiscountPercent": { "value": "0" } } ], "unitInfo": { "unit": "h", "unitDescription": "hour", "unitQuantity": { "value": "1" } }, "aggregationInfo": { "level": "LEVEL ACCOUNT", "interval": "INTERVAL MONTHLY" } }, "priceReason": { "type": "default-price", "defaultPrice": {} } }, { "name": "billingAccounts/01ABCD-EFGH23-UVWXYZ/skus/0002-17F9-0731/price", "currencyCode": "USD", "valueType": "rate", "rate": { "tiers": [ { "startAmount": { "value": "0" }, "listPrice": { "currencyCode": "USD" }, "contractPrice": { "currencyCode": "USD" }, "effectiveDiscountPercent": { "value": "0" } }, { "startAmount": { "value": "1" }, "listPrice": { "currencyCode": "USD", "nanos": 390000000 }, "contractPrice": { "currencyCode": "USD", "nanos": 390000000 }, "effectiveDiscountPercent": { "value": "0" } }, { "startAmount": { "value": "1024" }, "listPrice": { "currencyCode": "USD", "nanos": 340000000 }, "contractPrice": { "currencyCode": "USD", "nanos": 340000000 }, "effectiveDiscountPercent": { "value": "0" } } ], "unitInfo": { "unit": "GiBy.mo", "unitDescription": "gibibyte month", "unitQuantity": { "value": "1" } }, "aggregationInfo": { "level": "LEVEL ACCOUNT", "interval": "INTERVAL MONTHLY" } }, "priceReason": { "type": "default-price", "defaultPrice": {} } } ], "nextPageToken": "1234alphanumericCode" } Get the prices for SKUs for your Cloud Billing account The following example gets the price that you're paying for a SKU.
- When all items have been listed, no token is returned. { "billingAccountSkuGroupSkus": [ { "name": "billingAccounts/12345-ABCDE-EXAMPLE/skuGroups/28934b47-792e-4afa-a025-7720d410482f/skus/0009-6F35-3126", "skuId": "0009-6F35-3126", "displayName": "Network Internet Data Transfer from EMEA to Seoul", "service": "9662-B51E-5089", "productTaxonomy": { "taxonomyCategories": [ { "category": "GCP" }, { "category": "Network" }, { "category": "Data Transfer" }, { "category": "Cloud SQL" }, { "category": "Premium" } ] }, "geoTaxonomy": { "type": "REGIONAL", "regionalMetadata": { "region": { "region": "europe-west1" } } } }, { "name": "billingAccounts/12345-ABCDE-EXAMPLE/skuGroups/28934b47-792e-4afa-a025-7720d410482f/skus/000B-47CC-2924", "skuId": "000B-47CC-2924", "displayName": "API Gateway Network Internet Data Transfer Intercontinental from/to Oceania", "service": "36A9-155B-23F0", "productTaxonomy": { "taxonomyCategories": [ { "category": "GCP" }, { "category": "Network" }, { "category": "Data Transfer" }, { "category": "API Gateway" }, { "category": "Premium" } ] }, "geoTaxonomy": {} } ], "nextPageToken": "alphanumeric-nextPageToken" } Get the prices for all Google Cloud SKUs for your Cloud Billing account Before using any of the request data, make the following replacements: SKU ID : A specific SKU ID to get the price for.

### "Analyze billing data and cost trends with Reports \_|\_ Cloud Billing \_\

- URL: [https://docs.cloud.google.com/billing/docs/how-to/reports](https://docs.cloud.google.com/billing/docs/how-to/reports)
- Source ID: `site-docs-root`
- Final score: 206
- Re-rank relevance: N/A

Evidence snippets:
- Prerequisites to generate and run a query To generate a query from a Cloud Billing Report , ensure you and your Cloud Billing account meet the following requirements: On your Cloud Billing account, Cloud Billing data export to BigQuery must be enabled, for either the standard usage cost data or detailed usage cost data .
- When viewing costs by Invoice month , the following data is available in the Cloud Billing reports: Invoices generally include all costs incurred during a given calendar month, but the cost for some services' usage at the very end of a calendar month might roll over to the next month's invoice.
- Billing account name, Billing account ID Location: Region or multiregion One row with costs summed per each unique region where usage occurred, including a row for charges not specific to a location.
- As of January 2017, the following data is included in Cloud Billing reports: SKU usage : This is reported in the pricing units shown on the pricing table report , for example, gibibyte month .

