---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T20:10:07.239Z"
product_name: "Cloud Billing"
product_slug: "cloud-billing"
feature_name: "AlloyDB for PostgreSQL tags data in Cloud Billing usage exports"
feature_slug: "alloydb-for-postgresql-tags-data-in-cloud-billing-usage-exports"
latest_feature_date: "2024-07-10"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/detailed-usage"
  - "https://docs.cloud.google.com/billing/docs/how-to/get-pricing-information-api"
  - "https://docs.cloud.google.com/python/docs/reference/cloudbilling/latest/google.cloud.billing_v1.types.ListProjectBillingInfoRequest"
keywords:
  - "alloydb"
  - "for"
  - "postgresql"
  - "tags"
  - "in"
  - "billing"
  - "usage"
  - "exports"
---

# AlloyDB for PostgreSQL tags data in Cloud Billing usage exports

Product: Cloud Billing
Coverage: LOW

## Step 02 Summary

Cloud Billing now includes AlloyDB for PostgreSQL cluster, instance, and backup usage tags in both Standard and Detailed usage cost exports.

## Extended Definition

Cloud Billing now includes AlloyDB for PostgreSQL cluster, instance, and backup usage tags in both Standard and Detailed usage cost exports.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/detailed-usage](https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/detailed-usage)
- [https://docs.cloud.google.com/billing/docs/how-to/get-pricing-information-api](https://docs.cloud.google.com/billing/docs/how-to/get-pricing-information-api)
- [https://docs.cloud.google.com/python/docs/reference/cloudbilling/latest/google.cloud.billing_v1.types.ListProjectBillingInfoRequest](https://docs.cloud.google.com/python/docs/reference/cloudbilling/latest/google.cloud.billing_v1.types.ListProjectBillingInfoRequest)

## Supporting Pages

### "Structure of Detailed data export \_|\_ Cloud Billing \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/detailed-usage](https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery-tables/detailed-usage)
- Source ID: `site-docs-root-2`
- Final score: 208
- Re-rank relevance: N/A

Evidence snippets:
- Resource-level tags in the Cloud Billing data export are available for the following resources: AlloyDB for PostgreSQL clusters, instances, and backups Artifact Registry repositories Bigtable instances Cloud Run services and jobs Cloud Storage buckets Compute Engine instances Memorystore for Redis instances Secret Manager global and regional secrets Spanner instances Firestore databases Tags limitations Tags might take up to an hour to propagate to BigQuery exports.
- Tags ) AS tag WHERE tag . key = 'gcp-product' AND tag . value = 'vertex ai' AND tag . inherited = TRUE ) AND sl reservation . value = ' RESERVATION NAME ' AND sl project id . value = ' PROJECT ID ' GROUP BY consumer project id , sku description , usage unit ORDER BY consumer project id , sku description , usage unit ; Sample results The following output shows the contribution of each project to total usage costs while consuming the reservation. consumer project id sku description usage unit total usage amount project1 N1 Predefined Instance Core running in Americas seconds 4221572 project1 N1 Predefined Instance Ram running in Americas byte-seconds 16998309356466500 project1 Nvidia Tesla T4 GPU running in Americas seconds 1057391 project2 N1 Predefined Instance Core running in Americas seconds 3996192 project2 N1 Predefined Instance Ram running in Americas byte-seconds 16009292257431300 project2 Nvidia Tesla T4 GPU running in Americas seconds 993985 Related topics For information related to exported Cloud Billing data, see the following: Set up Cloud Billing data export to BigQuery.
- SELECT invoice . month AS invoice month , ROUND (( SUM ( CAST ( cost AS NUMERIC )) + SUM ( IFNULL (( SELECT SUM ( CAST ( c . amount AS NUMERIC )) FROM UNNEST ( credits ) AS c ), 0 ))), 2 ) AS net cost FROM project - ID . dataset . gcp billing export v1 XXXXXX - XXXXXX - XXXXXX WHERE "color" NOT IN ( SELECT key FROM UNNEST ( tags )) GROUP BY invoice month ORDER BY invoice month ; For example, the result of the preceding query might be: Row invoice month net cost 1 202202 0 2 202203 16.81 3 202204 54.09 4 202205 55.82 5 202206 54.09 6 202207 55.83 7 202208 31.49 Query using system labels System labels for Google Cloud reservations provide enhanced visibility into your reservation usage.
- PARTITIONTIME , DAY )) = '2025-09-16' AND t . sku . description LIKE '%Core%' AND sl reservation . value LIKE '%tc-billing-case2-res-1757983801%' AND t . resource . global name NOT LIKE '%allocation/%' AND t . resource . name IS NOT NULL AND t . resource . name != '' ORDER BY t . usage start time , t . project . id , t . resource . name ; Sample results: usage start time usage end time consumer project id instance name usage amount 2025-09-16 00:00:00.000000 UTC 2025-09-16 01:00:00.000000 UTC disco-sector-292704 projects/204187533293/instances/tc-billing-case2-ins0-1757983801 552 2025-09-16 00:00:00.000000 UTC 2025-09-16 01:00:00.000000 UTC disco-sector-292704 projects/204187533293/instances/tc-billing-case2-ins1-1757983801 533 2025-09-16 00:00:00.000000 UTC 2025-09-16 01:00:00.000000 UTC flash-freehold-292704 projects/978655420110/instances/tc-billing-case2-ins2-1757983801 517 2025-09-16 01:00:00.000000 UTC 2025-09-16 02:00:00.000000 UTC disco-sector-292704 projects/204187533293/instances/tc-billing-case2-ins0-1757983801 3600 2025-09-16 01:00:00.000000 UTC 2025-09-16 02:00:00.000000 UTC disco-sector-292704 projects/204187533293/instances/tc-billing-case2-ins1-1757983801 3600 2025-09-16 01:00:00.000000 UTC 2025-09-16 02:00:00.000000 UTC flash-freehold-292704 projects/978655420110/instances/tc-billing-case2-ins2-1757983801 3600 2025-09-16 02:00:00.000000 UTC 2025-09-16 03:00:00.000000 UTC disco-sector-292704 projects/204187533293/instances/tc-billing-case2-ins0-1757983801 3022 2025-09-16 02:00:00.000000 UTC 2025-09-16 03:00:00.000000 UTC disco-sector-292704 projects/204187533293/instances/tc-billing-case2-ins0-1757983801 79 2025-09-16 02:00:00.000000 UTC 2025-09-16 03:00:00.000000 UTC disco-sector-292704 projects/204187533293/instances/tc-billing-case2-ins1-1757983801 79 2025-09-16 02:00:00.000000 UTC 2025-09-16 03:00:00.000000 UTC disco-sector-292704 projects/204187533293/instances/tc-billing-case2-ins1-1757983801 3086 2025-09-16 02:00:00.000000 UTC 2025-09-16 03:00:00.000000 UTC flash-freehold-292704 projects/978655420110/instances/tc-billing-case2-ins2-1757983801 3151 2025-09-16 02:00:00.000000 UTC 2025-09-16 03:00:00.000000 UTC flash-freehold-292704 projects/978655420110/instances/tc-billing-case2-ins2-1757983801 79 Analyze Vertex AI reservation usage using BigQuery To analyze how first-party (1P) products, such as Vertex AI, consume your shared reservations across projects where Vertex AI jobs are active, use the following system labels in BigQuery: compute.googleapis.com/reservation name compute.googleapis.com/reservation project id For more information about how to share reservations with first-party (1P) products in Vertex AI, see the following: Use reservations with training Use reservations with online inference Use reservations with Vertex AI Workbench instances The following example queries show how to use these labels to get detailed visibility into your reservation usage, monitor how instances consume these reservations, and perform in-depth cost analysis.

### "Get Google Cloud pricing information \_|\_ Cloud Billing \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/billing/docs/how-to/get-pricing-information-api](https://docs.cloud.google.com/billing/docs/how-to/get-pricing-information-api)
- Source ID: `site-api-reference`
- Final score: 206
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Home Documentation Costs and usage management Cloud Billing APIs & Reference Send feedback Get Google Cloud pricing information Stay organized with collections Save and categorize content based on your preferences.
- When all items have been listed, no token is returned. { "billingAccountPrices": [ { "name": "billingAccounts/01ABCD-EFGH23-UVWXYZ/skus/0000-9B70-F099/price", "currencyCode": "USD", "valueType": "rate", "rate": { "tiers": [ { "startAmount": { "value": "0" }, "listPrice": { "currencyCode": "USD", "nanos": 690000000 }, "contractPrice": { "currencyCode": "USD", "nanos": 690000000 }, "effectiveDiscountPercent": { "value": "0" } } ], "unitInfo": { "unit": "h", "unitDescription": "hour", "unitQuantity": { "value": "1" } }, "aggregationInfo": { "level": "LEVEL ACCOUNT", "interval": "INTERVAL MONTHLY" } }, "priceReason": { "type": "default-price", "defaultPrice": {} } }, { "name": "billingAccounts/01ABCD-EFGH23-UVWXYZ/skus/0002-17F9-0731/price", "currencyCode": "USD", "valueType": "rate", "rate": { "tiers": [ { "startAmount": { "value": "0" }, "listPrice": { "currencyCode": "USD" }, "contractPrice": { "currencyCode": "USD" }, "effectiveDiscountPercent": { "value": "0" } }, { "startAmount": { "value": "1" }, "listPrice": { "currencyCode": "USD", "nanos": 390000000 }, "contractPrice": { "currencyCode": "USD", "nanos": 390000000 }, "effectiveDiscountPercent": { "value": "0" } }, { "startAmount": { "value": "1024" }, "listPrice": { "currencyCode": "USD", "nanos": 340000000 }, "contractPrice": { "currencyCode": "USD", "nanos": 340000000 }, "effectiveDiscountPercent": { "value": "0" } } ], "unitInfo": { "unit": "GiBy.mo", "unitDescription": "gibibyte month", "unitQuantity": { "value": "1" } }, "aggregationInfo": { "level": "LEVEL ACCOUNT", "interval": "INTERVAL MONTHLY" } }, "priceReason": { "type": "default-price", "defaultPrice": {} } } ], "nextPageToken": "1234alphanumericCode" } Get the prices for SKUs for your Cloud Billing account The following example gets the price that you're paying for a SKU.
- When all items have been listed, no token is returned. { "billingAccountSkuGroupSkus": [ { "name": "billingAccounts/12345-ABCDE-EXAMPLE/skuGroups/28934b47-792e-4afa-a025-7720d410482f/skus/0009-6F35-3126", "skuId": "0009-6F35-3126", "displayName": "Network Internet Data Transfer from EMEA to Seoul", "service": "9662-B51E-5089", "productTaxonomy": { "taxonomyCategories": [ { "category": "GCP" }, { "category": "Network" }, { "category": "Data Transfer" }, { "category": "Cloud SQL" }, { "category": "Premium" } ] }, "geoTaxonomy": { "type": "REGIONAL", "regionalMetadata": { "region": { "region": "europe-west1" } } } }, { "name": "billingAccounts/12345-ABCDE-EXAMPLE/skuGroups/28934b47-792e-4afa-a025-7720d410482f/skus/000B-47CC-2924", "skuId": "000B-47CC-2924", "displayName": "API Gateway Network Internet Data Transfer Intercontinental from/to Oceania", "service": "36A9-155B-23F0", "productTaxonomy": { "taxonomyCategories": [ { "category": "GCP" }, { "category": "Network" }, { "category": "Data Transfer" }, { "category": "API Gateway" }, { "category": "Premium" } ] }, "geoTaxonomy": {} } ], "nextPageToken": "alphanumeric-nextPageToken" } Get the prices for all Google Cloud SKUs for your Cloud Billing account Before using any of the request data, make the following replacements: SKU ID : A specific SKU ID to get the price for.
- HTTP method and URL: GET https://cloudbilling.googleapis.com/v1beta/skus/ SKU ID /price?key= API KEY ¤cyCode= CURRENCY To send your request, choose one of these options: curl Execute the following command: curl -X GET \ "https://cloudbilling.googleapis.com/v1beta/skus/ SKU ID /price?key= API KEY ¤cyCode= CURRENCY " PowerShell Execute the following command: $headers = @{ } Invoke-WebRequest -Method GET -Headers $headers -Uri "https://cloudbilling.googleapis.com/v1beta/skus/ SKU ID /price?key= API KEY ¤cyCode= CURRENCY " Select-Object -Expand Content The following example shows the pricing details for the SKU ID 0012-B7F2-DD14 . { "name": "skus/0012-B7F2-DD14/price", "currencyCode": "USD", "valueType": "rate", "rate": { "tiers": [ { "startAmount": { "value": "0" }, "listPrice": { "currencyCode": "USD", "nanos": 1397000 } } ], "unitInfo": { "unit": "GiBy.h", "unitDescription": "gibibyte hour", "unitQuantity": { "value": "1" } }, "aggregationInfo": { "level": "ACCOUNT", "interval": "MONTHLY" } } } Get information specific to your Cloud Billing account The following examples show API calls that get information that is specific to your Cloud Billing account, such as specific SKUs, or pricing information that might be part of your custom pricing contract.

### "Class ListProjectBillingInfoRequest (1.18.0) \_|\_ Python client libraries\

- URL: [https://docs.cloud.google.com/python/docs/reference/cloudbilling/latest/google.cloud.billing_v1.types.ListProjectBillingInfoRequest](https://docs.cloud.google.com/python/docs/reference/cloudbilling/latest/google.cloud.billing_v1.types.ListProjectBillingInfoRequest)
- Source ID: `site-python-reference`
- Final score: 202
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Version latest keyboard arrow down 1.18.0 (latest) 1.17.0 1.16.3 1.15.0 1.14.1 1.13.6 1.12.1 1.11.5 1.10.1 1.9.1 1.8.0 1.7.3 1.6.1 1.5.1 1.4.1 1.3.4 1.2.1 1.1.1 1.0.0 0.1.0 ListProjectBillingInfoRequest ( mapping = None , , ignore unknown fields = False , kwargs ) Request message for ListProjectBillingInfo .
- Home Documentation Developer tools Python Client libraries Send feedback Class ListProjectBillingInfoRequest (1.18.0) Stay organized with collections Save and categorize content based on your preferences.
- For example, billingAccounts/012345-567890-ABCDEF . page size int Requested page size.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-09 UTC."],[],[]]

