---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T13:57:37.582Z"
product_name: "Cloud Billing"
product_slug: "cloud-billing"
feature_name: "Cloud Billing Pricing API"
feature_slug: "cloud-billing-pricing-api"
latest_feature_date: "2023-07-31"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/billing/docs/reference/pricing-api/rest"
  - "https://docs.cloud.google.com/billing/docs/how-to/get-pricing-information-api"
  - "https://docs.cloud.google.com/billing/docs/how-to/pricing-table"
keywords:
  - "billing"
  - "pricing"
  - "introduces"
  - "preview"
  - "retrieving"
  - "sku"
  - "list"
  - "prices"
---

# Cloud Billing Pricing API

Product: Cloud Billing
Coverage: MEDIUM

## Step 02 Summary

Introduces a preview Pricing API for retrieving SKU list prices, account-specific custom prices, discounts, and related taxonomy and mapping metadata.

## Extended Definition

Introduces a preview Pricing API for retrieving SKU list prices, account-specific custom prices, discounts, and related taxonomy and mapping metadata.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/billing/docs/reference/pricing-api/rest](https://docs.cloud.google.com/billing/docs/reference/pricing-api/rest)
- [https://docs.cloud.google.com/billing/docs/how-to/get-pricing-information-api](https://docs.cloud.google.com/billing/docs/how-to/get-pricing-information-api)
- [https://docs.cloud.google.com/billing/docs/how-to/pricing-table](https://docs.cloud.google.com/billing/docs/how-to/pricing-table)

## Supporting Pages

### Pricing API \_|\_ Cloud Billing \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/billing/docs/reference/pricing-api/rest](https://docs.cloud.google.com/billing/docs/reference/pricing-api/rest)
- Source ID: `site-api-reference`
- Final score: 160
- Re-rank relevance: N/A

Evidence snippets:
- REST Resource: v2beta.billingAccounts.skus.prices Methods list GET /v2beta/{parent=billingAccounts/ /skus/ }/prices Lists the latest prices for SKUs available to your Cloud Billing account .
- REST Resource: v1beta.billingAccounts.skus.prices Methods list GET /v1beta/{parent=billingAccounts/ /skus/ }/prices Lists the latest prices for SKUs available to your Cloud Billing account .
- REST Resource: v2beta.billingAccounts.skus.price REST Resource: v2beta.billingAccounts.skus.prices REST Resource: v2beta.services REST Resource: v2beta.skus REST Resource: v2beta.skus.price REST Resource: v2beta.skus.prices REST Resource: v1beta.billingAccounts.services REST Resource: v1beta.billingAccounts.skuGroups REST Resource: v1beta.billingAccounts.skuGroups.skus REST Resource: v1beta.billingAccounts.skus REST Resource: v1beta.billingAccounts.skus.price REST Resource: v1beta.billingAccounts.skus.prices REST Resource: v1beta.skuGroups REST Resource: v1beta.skuGroups.skus REST Resource: v1beta.skus.price REST Resource: v1beta.skus.prices Service: cloudbilling.googleapis.com To call this service, we recommend that you use the Google-provided client libraries .
- REST Resource: v1beta.billingAccounts.skuGroups.skus Methods get GET /v1beta/{name=billingAccounts/ /skuGroups/ /skus/ } Gets a SKU that is part of a billing account SKU group . list GET /v1beta/{parent=billingAccounts/ /skuGroups/ }/skus Lists SKUs that is part of billing account SKU groups .

### "Get Google Cloud pricing information \_|\_ Cloud Billing \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/billing/docs/how-to/get-pricing-information-api](https://docs.cloud.google.com/billing/docs/how-to/get-pricing-information-api)
- Source ID: `site-api-reference`
- Final score: 136
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- HTTP method and URL: GET https://cloudbilling.googleapis.com/v1beta/billingAccounts/ BILLING ACCOUNT ID /skus/ SKU ID /prices?pageSize= PAGE SIZE &pageToken= PAGE TOKEN To send your request, choose one of these options: curl Execute the following command: curl -X GET \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ "https://cloudbilling.googleapis.com/v1beta/billingAccounts/ BILLING ACCOUNT ID /skus/ SKU ID /prices?pageSize= PAGE SIZE &pageToken= PAGE TOKEN " PowerShell Execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method GET -Headers $headers -Uri "https://cloudbilling.googleapis.com/v1beta/billingAccounts/ BILLING ACCOUNT ID /skus/ SKU ID /prices?pageSize= PAGE SIZE &pageToken= PAGE TOKEN " Select-Object -Expand Content The response contains a list of SKU IDs and their prices, including SKUs that are only available to your Cloud Billing account, and pricing information for each SKU.
- When all items have been listed, no token is returned. { "billingAccountPrices": [ { "name": "billingAccounts/01ABCD-EFGH23-UVWXYZ/skus/0000-9B70-F099/price", "currencyCode": "USD", "valueType": "rate", "rate": { "tiers": [ { "startAmount": { "value": "0" }, "listPrice": { "currencyCode": "USD", "nanos": 690000000 }, "contractPrice": { "currencyCode": "USD", "nanos": 690000000 }, "effectiveDiscountPercent": { "value": "0" } } ], "unitInfo": { "unit": "h", "unitDescription": "hour", "unitQuantity": { "value": "1" } }, "aggregationInfo": { "level": "LEVEL ACCOUNT", "interval": "INTERVAL MONTHLY" } }, "priceReason": { "type": "default-price", "defaultPrice": {} } }, { "name": "billingAccounts/01ABCD-EFGH23-UVWXYZ/skus/0002-17F9-0731/price", "currencyCode": "USD", "valueType": "rate", "rate": { "tiers": [ { "startAmount": { "value": "0" }, "listPrice": { "currencyCode": "USD" }, "contractPrice": { "currencyCode": "USD" }, "effectiveDiscountPercent": { "value": "0" } }, { "startAmount": { "value": "1" }, "listPrice": { "currencyCode": "USD", "nanos": 390000000 }, "contractPrice": { "currencyCode": "USD", "nanos": 390000000 }, "effectiveDiscountPercent": { "value": "0" } }, { "startAmount": { "value": "1024" }, "listPrice": { "currencyCode": "USD", "nanos": 340000000 }, "contractPrice": { "currencyCode": "USD", "nanos": 340000000 }, "effectiveDiscountPercent": { "value": "0" } } ], "unitInfo": { "unit": "GiBy.mo", "unitDescription": "gibibyte month", "unitQuantity": { "value": "1" } }, "aggregationInfo": { "level": "LEVEL ACCOUNT", "interval": "INTERVAL MONTHLY" } }, "priceReason": { "type": "default-price", "defaultPrice": {} } } ], "nextPageToken": "1234alphanumericCode" } Get the prices for SKUs for your Cloud Billing account The following example gets the price that you're paying for a SKU.
- When all items have been listed, no token is returned. { "billingAccountSkuGroupSkus": [ { "name": "billingAccounts/12345-ABCDE-EXAMPLE/skuGroups/28934b47-792e-4afa-a025-7720d410482f/skus/0009-6F35-3126", "skuId": "0009-6F35-3126", "displayName": "Network Internet Data Transfer from EMEA to Seoul", "service": "9662-B51E-5089", "productTaxonomy": { "taxonomyCategories": [ { "category": "GCP" }, { "category": "Network" }, { "category": "Data Transfer" }, { "category": "Cloud SQL" }, { "category": "Premium" } ] }, "geoTaxonomy": { "type": "REGIONAL", "regionalMetadata": { "region": { "region": "europe-west1" } } } }, { "name": "billingAccounts/12345-ABCDE-EXAMPLE/skuGroups/28934b47-792e-4afa-a025-7720d410482f/skus/000B-47CC-2924", "skuId": "000B-47CC-2924", "displayName": "API Gateway Network Internet Data Transfer Intercontinental from/to Oceania", "service": "36A9-155B-23F0", "productTaxonomy": { "taxonomyCategories": [ { "category": "GCP" }, { "category": "Network" }, { "category": "Data Transfer" }, { "category": "API Gateway" }, { "category": "Premium" } ] }, "geoTaxonomy": {} } ], "nextPageToken": "alphanumeric-nextPageToken" } Get the prices for all Google Cloud SKUs for your Cloud Billing account Before using any of the request data, make the following replacements: SKU ID : A specific SKU ID to get the price for.
- HTTP method and URL: GET https://cloudbilling.googleapis.com/v1beta/skus/ SKU ID /price?key= API KEY ¤cyCode= CURRENCY To send your request, choose one of these options: curl Execute the following command: curl -X GET \ "https://cloudbilling.googleapis.com/v1beta/skus/ SKU ID /price?key= API KEY ¤cyCode= CURRENCY " PowerShell Execute the following command: $headers = @{ } Invoke-WebRequest -Method GET -Headers $headers -Uri "https://cloudbilling.googleapis.com/v1beta/skus/ SKU ID /price?key= API KEY ¤cyCode= CURRENCY " Select-Object -Expand Content The following example shows the pricing details for the SKU ID 0012-B7F2-DD14 . { "name": "skus/0012-B7F2-DD14/price", "currencyCode": "USD", "valueType": "rate", "rate": { "tiers": [ { "startAmount": { "value": "0" }, "listPrice": { "currencyCode": "USD", "nanos": 1397000 } } ], "unitInfo": { "unit": "GiBy.h", "unitDescription": "gibibyte hour", "unitQuantity": { "value": "1" } }, "aggregationInfo": { "level": "ACCOUNT", "interval": "MONTHLY" } } } Get information specific to your Cloud Billing account The following examples show API calls that get information that is specific to your Cloud Billing account, such as specific SKUs, or pricing information that might be part of your custom pricing contract.

### "View and download prices for Google's cloud services \_|\_ Cloud Billing\

- URL: [https://docs.cloud.google.com/billing/docs/how-to/pricing-table](https://docs.cloud.google.com/billing/docs/how-to/pricing-table)
- Source ID: `site-docs-root`
- Final score: 112
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For Cloud Billing accounts with a custom pricing contract, the effective discount percentage is computed using this equation: Effective discount = (List price - Contract price) / List price × 100 Figure 2 : Example of the pricing table showing prices for SKUs with historical usage, for a Cloud Billing account with a custom pricing contract.
- Here's how the SKU's pricing tiers are listed in the pricing table: SKU ID SKU description Unit description Tiered usage start List price 6F81-5844-456A Network Internet Data Transfer from Americas to Australia gibibyte 0 0.19 6F81-5844-456A Network Internet Data Transfer from Americas to Australia gibibyte 1,024 0.18 6F81-5844-456A Network Internet Data Transfer from Americas to Australia gibibyte 10,240 0.15 Related topics Export Cloud Billing cost and pricing data to BigQuery View and download the cost details of your invoice or statement Get an invoice, statement, or receipt View your Cloud Billing reports and cost trends View your cost and payment history Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Learn more about permissions needed to access Cloud Billing accounts Unlimited access to the Pricing data and report features To view the full-featured Pricing report for your Cloud Billing account, you need a role that includes the following permission on your Cloud Billing account: billing.accounts.getPricing to view custom contract prices for a billing account.
- To gain this permission, ask your administrator to grant you one of the following Cloud Billing IAM roles on your Cloud Billing account: Billing Account Costs Manager Billing Account User The limited report view includes the following: The report displays only the publicly-available list prices and SKUs.

