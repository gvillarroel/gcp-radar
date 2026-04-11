---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T01:24:40.924Z"
product_name: "Apigee Monetization"
product_slug: "apigee-monetization"
feature_name: "Apigee Monetization Recurring Fees"
feature_slug: "apigee-monetization-recurring-fees"
latest_feature_date: "2022-11-14"
deprecation_date: ""
coverage_status: "HIGH"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/api-platform/monetization/manage-rate-plans"
keywords:
  - "rate plan recurring fee"
  - "subscription cycle fee"
  - "recurring charges"
  - "recurring charge"
  - "recurring fee"
  - "recurrent fee"
  - "recurring fees"
---

# Apigee Monetization Recurring Fees

Product: Apigee Monetization
Coverage: HIGH

## Step 02 Summary

Monetization now supports optional recurring fees that can be charged to API developers.

## Extended Definition

Apigee Monetization recurring fees are a configurable rate-plan setting that lets API product owners add fixed, non-consumption-based charges (recurring fees) to API monetization, including setting the fixed recurring fee amount and associated recurrence options. The documentation indicates recurring charges are billed monthly, can be enabled in a rate plan, and their effect can be previewed against itemized and total charges.

## Evidence Summary

The cited Apigee Monetization page explicitly lists recurring fees as a rate-plan billing option and describes how to configure fixed recurring fees, including amount, frequency (monthly), and charge preview behavior.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/api-platform/monetization/manage-rate-plans](https://docs.cloud.google.com/apigee/docs/api-platform/monetization/manage-rate-plans)

## Supporting Pages

### Managing rate plans for API products \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/monetization/manage-rate-plans](https://docs.cloud.google.com/apigee/docs/api-platform/monetization/manage-rate-plans)
- Source ID: `site-docs-reference`
- Final score: 48
- Re-rank relevance: STRONG
- Re-rank rationale: The page explicitly describes recurring, non-consumption charges (for example monthly fees) as part of rate-plan configuration.

Evidence snippets:
- Using rate plans, API product owners can monetize their API products by configuring the following: Billing account model Currency used for billing Frequency at which customers are billed (monthly only) Initial setup fees for using an API product Consumption-based charges for using an API product Any recurring fees not based on consumption, such as monthly fees for access to your API product Time interval during which the rate plan is in effect for an API product (rate plan activation and expiration times) Revenue sharing with developer partners Note: You can associate multiple rate plans with the same API product but only one rate plan can be active at any point of time.
- If enabled, you can preview the effects that the fixed recurring fee will have on the itemized and total charges, as described in Previewing your rate plan .
- Field Description Default Fixed recurring fee Enable a fixed recurring fee per unit: Select Charge fixed recurring fee .
- Configure the Fixed fee frequency and Fixed recurring fee amount.

