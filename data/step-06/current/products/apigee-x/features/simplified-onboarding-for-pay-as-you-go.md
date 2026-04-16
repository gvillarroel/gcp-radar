---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T05:27:18.184Z"
product_name: "Apigee X"
product_slug: "apigee-x"
feature_name: "Simplified onboarding for Pay-as-you-go"
feature_slug: "simplified-onboarding-for-pay-as-you-go"
latest_feature_date: "2022-12-08"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/api-platform/monetization/manage-rate-plans"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/flow-callout-policy"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/understanding-handling-request-response-data"
keywords:
  - "simplified"
  - "onboarding"
  - "provides"
  - "console"
---

# Simplified onboarding for Pay-as-you-go

Product: Apigee X
Coverage: MEDIUM

## Step 02 Summary

Apigee X provides a simplified Google Cloud console onboarding flow for Pay-as-you-go provisioning with defaults and optional customization.

## Extended Definition

Apigee X provides a simplified Google Cloud console onboarding flow for Pay-as-you-go provisioning with defaults and optional customization.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/api-platform/monetization/manage-rate-plans](https://docs.cloud.google.com/apigee/docs/api-platform/monetization/manage-rate-plans)
- [https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/flow-callout-policy](https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/flow-callout-policy)
- [https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/understanding-handling-request-response-data](https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/understanding-handling-request-response-data)

## Supporting Pages

### Request and response variables \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/understanding-handling-request-response-data](https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/understanding-handling-request-response-data)
- Source ID: `site-docs-reference-required-3`
- Final score: 58
- Re-rank relevance: N/A

### Managing rate plans for API products \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/monetization/manage-rate-plans](https://docs.cloud.google.com/apigee/docs/api-platform/monetization/manage-rate-plans)
- Source ID: `site-docs-reference-required-3`
- Final score: 57
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The following provides an example of the response output: { "name": "4403a3a5-b366-44f0-aa4d-bd54dcfd3239", "apiproduct": "HelloworldProduct", "displayName": "myrateplan5", "billingPeriod": "MONTHLY", "currencyCode": "USD", "setupFee": { "currencyCode": "USD", "units": "10" }, "consumptionPricingType": "FIXED PER UNIT", "consumptionPricingRates": [ { "fee": { "currencyCode": "USD", "units": "3" } } ], "revenueShareType": "FIXED", "revenueShareRates": [ { "sharePercentage": 1 } ], "state": "DRAFT" } For more information, see the Create rate plan API Previewing your rate plan in the UI In the Google Cloud console, go to the Distribution > Monetization page.
- The following provides an example of the response output, including the two rate plans, myrateplan1 and myrateplan2 associated with HelloworldProduct API product: { "ratePlans": [ { "name": "6b51b501-ac15-41b7-bb3e-621edb849e13", "apiproduct": "HelloworldProduct", "displayName": "myrateplan2", "billingPeriod": "MONTHLY", "currencyCode": "USD", "setupFee": { "currencyCode": "USD", "units": "20" }, "fixedRecurringFee": { "currencyCode": "USD", "units": "25" }, "fixedFeeFrequency": 1, "consumptionPricingType": "FIXED PER UNIT", "consumptionPricingRates": [ { "fee": { "currencyCode": "USD", "nanos": 500000000 } } ], "revenueShareType": "FIXED", "revenueShareRates": [ { "sharePercentage": 2 } ], "state": "DRAFT" }, { "name": "8c0b527c-ba2f-45f1-ac1c-b9e891546fc2", "apiproduct": "HelloworldProduct", "displayName": "myrateplan1", "billingPeriod": "MONTHLY", "currencyCode": "USD", "consumptionPricingType": "FIXED PER UNIT", "consumptionPricingRates": [ { "fee": { "currencyCode": "USD", "units": "3" } } ], "state": "PUBLISHED", "startTime": "1617302588000" } ] } For more information about the API and its response payload, see the List rate plans API Viewing details for a rate plan using the API To view details for a rate plan, issue a GET request to the following API: https://apigee.googleapis.com/v1/organizations/ $ORG /apiproducts/ $APIPRODUCT /rateplans/ $RATEPLAN NAME To determine the name of the rate plan to pass in the resource path, see Listing the rate plans in an organization .
- The following provides an example of the response output for the rate plan with the name 6b51b501-ac15-41b7-bb3e-621edb849e13 and display name myrateplan2 : { "name": "6b51b501-ac15-41b7-bb3e-621edb849e13", "apiproduct": "HelloworldProduct", "displayName": "myrateplan2", "billingPeriod": "MONTHLY", "currencyCode": "USD", "setupFee": { "currencyCode": "USD", "units": "20" }, "fixedRecurringFee": { "currencyCode": "USD", "units": "25" }, "fixedFeeFrequency": 1, "consumptionPricingType": "FIXED PER UNIT", "consumptionPricingRates": [ { "fee": { "currencyCode": "USD", "nanos": 500000000 } } ], "revenueShareType": "FIXED", "revenueShareRates": [ { "sharePercentage": 2 } ], "state": "DRAFT" } For more information about the API and its response payload, see the Get rate plan API .
- The following provides an example of the response output: { "name": "cb9f420e-313d-4900-aa4f-e07b2b76918d", "apiproduct": "HelloworldProduct", "displayName": "myrateplan3", "billingPeriod": "MONTHLY", "currencyCode": "USD", "consumptionPricingType": "FIXED PER UNIT", "consumptionPricingRates": [ { "fee": { "currencyCode": "USD", "units": "5" } } ], "revenueShareType": "FIXED", "revenueShareRates": [ { "sharePercentage": 6.5 } ], "state": "DRAFT", "startTime": "1617302588000" } For more information, see the Update rate plan API When updating the active published rate plan , choose one of the following methods: Method Considerations Update the rate plan Changes take effect immediately for the active published rate plan.

### FlowCallout policy \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/flow-callout-policy](https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/flow-callout-policy)
- Source ID: `site-api-reference`
- Final score: 54
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

