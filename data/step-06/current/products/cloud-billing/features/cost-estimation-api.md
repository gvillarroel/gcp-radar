---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T20:10:07.298Z"
product_name: "Cloud Billing"
product_slug: "cloud-billing"
feature_name: "Cost Estimation API"
feature_slug: "cost-estimation-api"
latest_feature_date: "2022-09-12"
deprecation_date: "2024-05-17"
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/billing/docs/how-to/get-pricing-information-api"
  - "https://docs.cloud.google.com/billing/docs/how-to/cost-table"
  - "https://docs.cloud.google.com/billing/docs/how-to/billing-cycle"
keywords:
  - "cost"
  - "estimation"
  - "api"
  - "the"
  - "has"
  - "been"
  - "deprecated"
  - "in"
---

# Cost Estimation API

Product: Cloud Billing
Coverage: LOW

## Step 02 Summary

The Cost Estimation API has been deprecated in favor of using the Google Cloud Pricing Calculator for workload cost estimates; A preview Cost Estimation API was introduced to return customer-specific workload cost estimates including negotiated discounts and committed-use pricing effects; deprecated on 2024-05-17.

## Extended Definition

The Cost Estimation API has been deprecated in favor of using the Google Cloud Pricing Calculator for workload cost estimates; A preview Cost Estimation API was introduced to return customer-specific workload cost estimates including negotiated discounts and committed-use pricing effects; deprecated on 2024-05-17.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/billing/docs/how-to/get-pricing-information-api](https://docs.cloud.google.com/billing/docs/how-to/get-pricing-information-api)
- [https://docs.cloud.google.com/billing/docs/how-to/cost-table](https://docs.cloud.google.com/billing/docs/how-to/cost-table)
- [https://docs.cloud.google.com/billing/docs/how-to/billing-cycle](https://docs.cloud.google.com/billing/docs/how-to/billing-cycle)

## Supporting Pages

### "Get Google Cloud pricing information \_|\_ Cloud Billing \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/billing/docs/how-to/get-pricing-information-api](https://docs.cloud.google.com/billing/docs/how-to/get-pricing-information-api)
- Source ID: `site-api-reference`
- Final score: 184
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- When all items have been listed, no token is returned. { "billingAccountSkuGroupSkus": [ { "name": "billingAccounts/12345-ABCDE-EXAMPLE/skuGroups/28934b47-792e-4afa-a025-7720d410482f/skus/0009-6F35-3126", "skuId": "0009-6F35-3126", "displayName": "Network Internet Data Transfer from EMEA to Seoul", "service": "9662-B51E-5089", "productTaxonomy": { "taxonomyCategories": [ { "category": "GCP" }, { "category": "Network" }, { "category": "Data Transfer" }, { "category": "Cloud SQL" }, { "category": "Premium" } ] }, "geoTaxonomy": { "type": "REGIONAL", "regionalMetadata": { "region": { "region": "europe-west1" } } } }, { "name": "billingAccounts/12345-ABCDE-EXAMPLE/skuGroups/28934b47-792e-4afa-a025-7720d410482f/skus/000B-47CC-2924", "skuId": "000B-47CC-2924", "displayName": "API Gateway Network Internet Data Transfer Intercontinental from/to Oceania", "service": "36A9-155B-23F0", "productTaxonomy": { "taxonomyCategories": [ { "category": "GCP" }, { "category": "Network" }, { "category": "Data Transfer" }, { "category": "API Gateway" }, { "category": "Premium" } ] }, "geoTaxonomy": {} } ], "nextPageToken": "alphanumeric-nextPageToken" } Get the prices for all Google Cloud SKUs for your Cloud Billing account Before using any of the request data, make the following replacements: SKU ID : A specific SKU ID to get the price for.
- In this example, the Cloud Billing account has a pricing contract, but is paying the list price for this SKU. { "name": "billingAccounts/015978-D9414D-B80267/skus/0012-B7F2-DD14/price", "currencyCode": "USD", "valueType": "rate", "rate": { "tiers": [ { "startAmount": { "value": "0" }, "listPrice": { "currencyCode": "USD", "nanos": 1270000 }, "contractPrice": { "currencyCode": "USD", "nanos": 1270000 } } ], "unitInfo": { "unit": "GiBy.h", "unitDescription": "gibibyte hour", "unitQuantity": { "value": "1" } }, "aggregationInfo": { "level": "ACCOUNT", "interval": "MONTHLY" } }, "priceReason": { "type": "default-price", "defaultPrice": {} } } Related topics Read the API reference .
- If you make the API call with a SKU that has a different pricing model, you get a 404 error.
- When all items have been listed, no token is returned. { "billingAccountPrices": [ { "name": "billingAccounts/01ABCD-EFGH23-UVWXYZ/skus/0000-9B70-F099/price", "currencyCode": "USD", "valueType": "rate", "rate": { "tiers": [ { "startAmount": { "value": "0" }, "listPrice": { "currencyCode": "USD", "nanos": 690000000 }, "contractPrice": { "currencyCode": "USD", "nanos": 690000000 }, "effectiveDiscountPercent": { "value": "0" } } ], "unitInfo": { "unit": "h", "unitDescription": "hour", "unitQuantity": { "value": "1" } }, "aggregationInfo": { "level": "LEVEL ACCOUNT", "interval": "INTERVAL MONTHLY" } }, "priceReason": { "type": "default-price", "defaultPrice": {} } }, { "name": "billingAccounts/01ABCD-EFGH23-UVWXYZ/skus/0002-17F9-0731/price", "currencyCode": "USD", "valueType": "rate", "rate": { "tiers": [ { "startAmount": { "value": "0" }, "listPrice": { "currencyCode": "USD" }, "contractPrice": { "currencyCode": "USD" }, "effectiveDiscountPercent": { "value": "0" } }, { "startAmount": { "value": "1" }, "listPrice": { "currencyCode": "USD", "nanos": 390000000 }, "contractPrice": { "currencyCode": "USD", "nanos": 390000000 }, "effectiveDiscountPercent": { "value": "0" } }, { "startAmount": { "value": "1024" }, "listPrice": { "currencyCode": "USD", "nanos": 340000000 }, "contractPrice": { "currencyCode": "USD", "nanos": 340000000 }, "effectiveDiscountPercent": { "value": "0" } } ], "unitInfo": { "unit": "GiBy.mo", "unitDescription": "gibibyte month", "unitQuantity": { "value": "1" } }, "aggregationInfo": { "level": "LEVEL ACCOUNT", "interval": "INTERVAL MONTHLY" } }, "priceReason": { "type": "default-price", "defaultPrice": {} } } ], "nextPageToken": "1234alphanumericCode" } Get the prices for SKUs for your Cloud Billing account The following example gets the price that you're paying for a SKU.

### "View and download the cost details of your invoice or statement \_|\_ Cloud\

- URL: [https://docs.cloud.google.com/billing/docs/how-to/cost-table](https://docs.cloud.google.com/billing/docs/how-to/cost-table)
- Source ID: `site-docs-root`
- Final score: 168
- Re-rank relevance: N/A

Evidence snippets:
- Prior to January 2022 , if any of your projects have been deleted or moved to a different Cloud Billing account , the project associated with the costs is identified only by the Project number .
- Prior to January 2022 , if any of your projects have been deleted or moved to a different Cloud Billing account , the project associated with the costs is identified only by the Project number .
- The Cost table also provides additional columns you can view to see purchase information about your transactions: Seller name : The legal name of the seller.
- Billing account ID Project ID SKU description Cost type Cost 123456-ABCDEF-123456 example-project N1 Predefined Instance Core Usage $60 123456-ABCDEF-123456 test-project N1 Predefined Instance Core Usage $40 123456-ABCDEF-123456 0 State sales tax (10.0%) Tax $10 For costs recorded after September 1, 2020, the $10 tax total is broken out to attribute $6 for example-project , and $4 for test-project : Billing account ID Project ID SKU description Cost type Cost 123456-ABCDEF-123456 example-project N1 Predefined Instance Core Usage $60 123456-ABCDEF-123456 example-project State sales tax (10.0%) Tax $6 123456-ABCDEF-123456 test-project N1 Predefined Instance Core Usage $40 123456-ABCDEF-123456 test-project State sales tax (10.0%) Tax $4 Viewing project-level taxes in the nested table view To view your tax costs by project in the nested table view , you must use or configure a Group by option with Project as the first grouping dimension.

### "Find out your Cloud Billing account type and charging cycle \_|\_ Google\

- URL: [https://docs.cloud.google.com/billing/docs/how-to/billing-cycle](https://docs.cloud.google.com/billing/docs/how-to/billing-cycle)
- Source ID: `site-docs-root-2`
- Final score: 166
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- As you use Google Cloud products and other eligible services, such as Gemini API in AI Studio, Google Maps Platform, and Firebase, your Cloud Billing account tracks all of the costs (charges and savings) incurred in all the projects that are linked to the Cloud Billing account, then routes those costs to the appropriate Google payments account to be paid (for example, Invoiced, Postpay, or Prepay).
- Self-serve (online) billing If you have a self-serve Cloud Billing account , and the billable status of the account is Paid account , your costs are charged in the following ways, depending on the charging cycle assigned to the linked Google payments account : Postpay costs automatically charged when your account has accrued a certain amount of charges (threshold billing).
- Postpay Automatic payments triggered by threshold billing This Cloud Billing account has a threshold billing cycle and the linked payment instrument (such as a credit card or bank account) is charged automatically when your accrued Google Cloud costs meet an automatically assigned threshold amount.
- Your Cloud Billing account can be one of two types, which determines what type of Google payments account is used to pay for your usage and differentiates how and when you pay for your Google Cloud usage and other eligible services: Invoiced billing If you have invoiced billing , you accrue costs first, then receive a monthly invoice, or multiple invoices when split invoicing applies.

