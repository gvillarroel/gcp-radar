---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T13:57:37.596Z"
product_name: "Cloud Billing"
product_slug: "cloud-billing"
feature_name: "Cost Estimation API"
feature_slug: "cost-estimation-api"
latest_feature_date: "2022-09-12"
deprecation_date: "2024-05-17"
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/billing/docs/how-to/estimate-costs"
  - "https://docs.cloud.google.com/billing/docs/how-to/cost-table"
  - "https://docs.cloud.google.com/billing/docs/how-to/get-pricing-information-api"
keywords:
  - "cost"
  - "estimation"
  - "has"
  - "been"
  - "deprecated"
  - "favor"
  - "pricing"
  - "calculator"
---

# Cost Estimation API

Product: Cloud Billing
Coverage: MEDIUM

## Step 02 Summary

The Cost Estimation API has been deprecated in favor of using the Google Cloud Pricing Calculator for workload cost estimates; A preview Cost Estimation API was introduced to return customer-specific workload cost estimates including negotiated discounts and committed-use pricing effects; deprecated on 2024-05-17.

## Extended Definition

The Cost Estimation API has been deprecated in favor of using the Google Cloud Pricing Calculator for workload cost estimates; A preview Cost Estimation API was introduced to return customer-specific workload cost estimates including negotiated discounts and committed-use pricing effects; deprecated on 2024-05-17.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/billing/docs/how-to/estimate-costs](https://docs.cloud.google.com/billing/docs/how-to/estimate-costs)
- [https://docs.cloud.google.com/billing/docs/how-to/cost-table](https://docs.cloud.google.com/billing/docs/how-to/cost-table)
- [https://docs.cloud.google.com/billing/docs/how-to/get-pricing-information-api](https://docs.cloud.google.com/billing/docs/how-to/get-pricing-information-api)

## Supporting Pages

### Estimate your monthly costs \_|\_ Cloud Billing \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/billing/docs/how-to/estimate-costs](https://docs.cloud.google.com/billing/docs/how-to/estimate-costs)
- Source ID: `site-docs-root-2`
- Final score: 109
- Re-rank relevance: N/A

Evidence snippets:
- Custom role Predefined roles If you're using a custom role to access contract prices, you need a role granted on your Cloud Billing account that includes the following permissions : billing.accounts.get billing.accounts.list billing.billingAccountPrice.get billing.billingAccountPrices.list billing.billingAccountServices.get billing.billingAccountServices.list billing.billingAccountSkuGroupSkus.get billing.billingAccountSkuGroupSkus.list billing.billingAccountSkuGroups.get billing.billingAccountSkuGroups.list billing.billingAccountSkus.get billing.billingAccountSkus.list To gain the required permissions using a predefined role , ask your administrator to grant you one of the following Cloud Billing IAM roles on your Cloud Billing account: Billing Account Viewer Billing Account Administrator For more information about Cloud Billing permissions, see: Overview of Cloud Billing access control Create custom roles for Cloud Billing Understanding predefined Identity and Access Management roles for Cloud Billing Access the pricing calculator With the pricing calculator, you can estimate costs for a wide range of Google Cloud services and products.
- Optional: Link your Cloud Billing account to the pricing calculator If your Cloud Billing account is associated with a custom pricing contract, you can link the billing account to the pricing calculator to get cost estimates that factor in your contract prices.
- To get estimates for your planned Google Cloud workloads, use the Google Cloud pricing calculator to get an idea of the costs for hypothetical workloads.
- With the pricing calculator, you can estimate costs for a wide range of Google Cloud services and products.

### "View and download the cost details of your invoice or statement \_|\_ Cloud\

- URL: [https://docs.cloud.google.com/billing/docs/how-to/cost-table](https://docs.cloud.google.com/billing/docs/how-to/cost-table)
- Source ID: `site-docs-root`
- Final score: 104
- Re-rank relevance: N/A

Evidence snippets:
- List cost N/A The List cost column is available for Cloud Billing accounts associated with a custom pricing contract , and represents the monthly cost of your usage calculated using list prices .
- Prior to January 2022 , if any of your projects have been deleted or moved to a different Cloud Billing account , the project associated with the costs is identified only by the Project number .
- Prior to January 2022 , if any of your projects have been deleted or moved to a different Cloud Billing account , the project associated with the costs is identified only by the Project number .
- Note : If you have custom contract pricing, the Unrounded cost amounts are calculated using your contract prices; otherwise Unrounded cost amounts are calculated using list prices.

### "Get Google Cloud pricing information \_|\_ Cloud Billing \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/billing/docs/how-to/get-pricing-information-api](https://docs.cloud.google.com/billing/docs/how-to/get-pricing-information-api)
- Source ID: `site-api-reference`
- Final score: 94
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- When all items have been listed, no token is returned. { "billingAccountSkuGroups": [ { "name": "billingAccounts/012345-567890-ABCDEF/skuGroups/001234-group-id-1", "displayName": "SKU group name 1" }, { "name": "billingAccounts/012345-567890-ABCDEF/skuGroups/0045657-group-id-2", "displayName": "SKU group name 2" }, ... "nextPageToken": "A1234-alphanumeric-page-token" } Get a list of SKUs in a SKU group for your Cloud Billing account The following example lists the SKUs in a SKU group that might be part of your custom pricing contract.
- Home Documentation Costs and usage management Cloud Billing APIs & Reference Send feedback Get Google Cloud pricing information Stay organized with collections Save and categorize content based on your preferences.
- When all items have been listed, no token is returned. { "billingAccountPrices": [ { "name": "billingAccounts/01ABCD-EFGH23-UVWXYZ/skus/0000-9B70-F099/price", "currencyCode": "USD", "valueType": "rate", "rate": { "tiers": [ { "startAmount": { "value": "0" }, "listPrice": { "currencyCode": "USD", "nanos": 690000000 }, "contractPrice": { "currencyCode": "USD", "nanos": 690000000 }, "effectiveDiscountPercent": { "value": "0" } } ], "unitInfo": { "unit": "h", "unitDescription": "hour", "unitQuantity": { "value": "1" } }, "aggregationInfo": { "level": "LEVEL ACCOUNT", "interval": "INTERVAL MONTHLY" } }, "priceReason": { "type": "default-price", "defaultPrice": {} } }, { "name": "billingAccounts/01ABCD-EFGH23-UVWXYZ/skus/0002-17F9-0731/price", "currencyCode": "USD", "valueType": "rate", "rate": { "tiers": [ { "startAmount": { "value": "0" }, "listPrice": { "currencyCode": "USD" }, "contractPrice": { "currencyCode": "USD" }, "effectiveDiscountPercent": { "value": "0" } }, { "startAmount": { "value": "1" }, "listPrice": { "currencyCode": "USD", "nanos": 390000000 }, "contractPrice": { "currencyCode": "USD", "nanos": 390000000 }, "effectiveDiscountPercent": { "value": "0" } }, { "startAmount": { "value": "1024" }, "listPrice": { "currencyCode": "USD", "nanos": 340000000 }, "contractPrice": { "currencyCode": "USD", "nanos": 340000000 }, "effectiveDiscountPercent": { "value": "0" } } ], "unitInfo": { "unit": "GiBy.mo", "unitDescription": "gibibyte month", "unitQuantity": { "value": "1" } }, "aggregationInfo": { "level": "LEVEL ACCOUNT", "interval": "INTERVAL MONTHLY" } }, "priceReason": { "type": "default-price", "defaultPrice": {} } } ], "nextPageToken": "1234alphanumericCode" } Get the prices for SKUs for your Cloud Billing account The following example gets the price that you're paying for a SKU.
- When all items have been listed, no token is returned. { "billingAccountSkuGroupSkus": [ { "name": "billingAccounts/12345-ABCDE-EXAMPLE/skuGroups/28934b47-792e-4afa-a025-7720d410482f/skus/0009-6F35-3126", "skuId": "0009-6F35-3126", "displayName": "Network Internet Data Transfer from EMEA to Seoul", "service": "9662-B51E-5089", "productTaxonomy": { "taxonomyCategories": [ { "category": "GCP" }, { "category": "Network" }, { "category": "Data Transfer" }, { "category": "Cloud SQL" }, { "category": "Premium" } ] }, "geoTaxonomy": { "type": "REGIONAL", "regionalMetadata": { "region": { "region": "europe-west1" } } } }, { "name": "billingAccounts/12345-ABCDE-EXAMPLE/skuGroups/28934b47-792e-4afa-a025-7720d410482f/skus/000B-47CC-2924", "skuId": "000B-47CC-2924", "displayName": "API Gateway Network Internet Data Transfer Intercontinental from/to Oceania", "service": "36A9-155B-23F0", "productTaxonomy": { "taxonomyCategories": [ { "category": "GCP" }, { "category": "Network" }, { "category": "Data Transfer" }, { "category": "API Gateway" }, { "category": "Premium" } ] }, "geoTaxonomy": {} } ], "nextPageToken": "alphanumeric-nextPageToken" } Get the prices for all Google Cloud SKUs for your Cloud Billing account Before using any of the request data, make the following replacements: SKU ID : A specific SKU ID to get the price for.

