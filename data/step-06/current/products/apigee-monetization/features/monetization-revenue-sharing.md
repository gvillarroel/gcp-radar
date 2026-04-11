---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T01:24:40.927Z"
product_name: "Apigee Monetization"
product_slug: "apigee-monetization"
feature_name: "Monetization Revenue Sharing"
feature_slug: "monetization-revenue-sharing"
latest_feature_date: "2021-11-03"
deprecation_date: ""
coverage_status: "HIGH"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/api-platform/monetization/manage-rate-plans"
keywords:
  - "rate plan revenue sharing"
  - "revenue share percentage"
  - "developer revenue share"
  - "revenue share config"
  - "revenue sharing"
  - "revenue split"
---

# Monetization Revenue Sharing

Product: Apigee Monetization
Coverage: HIGH

## Step 02 Summary

Revenue sharing can be configured in rate plans so developers receive a configured percentage of total generated revenue.

## Extended Definition

In Apigee Monetization, Revenue Sharing is a rate-plan configuration option where a rate plan can be set up with a `revenueShareType` and `revenueShareRates.sharePercentage` value to specify how revenue is shared with developer partners. This value is editable through the rate-plan update API and can be used with rate-plan preview to see how the chosen percentage affects itemized and total billed charges.

## Evidence Summary

The cited Apigee Monetization rate-plans page explicitly lists revenue sharing as a rate-plan capability, shows the API fields used to configure it (including percentage), and notes preview behavior reflecting the configured percentage.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/api-platform/monetization/manage-rate-plans](https://docs.cloud.google.com/apigee/docs/api-platform/monetization/manage-rate-plans)

## Supporting Pages

### Managing rate plans for API products \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/monetization/manage-rate-plans](https://docs.cloud.google.com/apigee/docs/api-platform/monetization/manage-rate-plans)
- Source ID: `site-docs-reference`
- Final score: 56
- Re-rank relevance: STRONG
- Re-rank rationale: The page lists revenue sharing as a configurable rate-plan element for API products, directly supporting this capability.

Evidence snippets:
- To update a rate plan, issue a PUT request to the following API, passing the modified request body in your request: https://apigee.googleapis.com/v1/organizations/ $ORG /apiproducts/ $APIPRODUCT /rateplans/ $RATEPLAN NAME For example, the following changes the consumption-based fee to 5 ; and the revenue share percentage to 6.5% all other configuration settings are included to ensure that they are maintained: curl "https://apigee.googleapis.com/v1/organizations/ $ORG /apiproducts/ $APIPRODUCT /rateplans/ $RATEPLAN NAME " \ -X PUT \ -H "Authorization: Bearer $TOKEN" \ -H "Content-type: application/json" \ -d '{ "apiproduct": "HelloworldProduct", "displayName": "myrateplan3", "currencyCode":"USD", "billingPeriod":"MONTHLY", "consumptionPricingType":"FIXED PER UNIT", "consumptionPricingRates":[{ "fee":{ "units":"5" , "nanos":0 } }], "revenueShareType":"FIXED", "revenueShareRates":[{ "sharePercentage":"6.5" }], "state":"DRAFT", "startTime": 1617302588000 }' For more information about the fields you can specify in the request body, see Resource: RatePlans .
- Using rate plans, API product owners can monetize their API products by configuring the following: Billing account model Currency used for billing Frequency at which customers are billed (monthly only) Initial setup fees for using an API product Consumption-based charges for using an API product Any recurring fees not based on consumption, such as monthly fees for access to your API product Time interval during which the rate plan is in effect for an API product (rate plan activation and expiration times) Revenue sharing with developer partners Note: You can associate multiple rate plans with the same API product but only one rate plan can be active at any point of time.
- Based on your pricing and revenue share configuration, you can preview the itemized charges and billed totals in the Rate plan preview section of the Rate plan page, as shown in the following figure.
- If you enable revenue sharing, you can preview the effects of the entered Percentage (%) value on the itemized and total charges, as described in Previewing your rate plan .

