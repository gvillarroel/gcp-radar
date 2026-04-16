---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T05:27:18.180Z"
product_name: "Apigee X"
product_slug: "apigee-x"
feature_name: "Subscription pricing with updated attributes"
feature_slug: "subscription-pricing-with-updated-attributes"
latest_feature_date: "2023-09-29"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/api-platform/monetization/manage-rate-plans"
  - "https://docs.cloud.google.com/apigee/docs/apihub/manage-attributes"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/reference/variables-reference"
keywords:
  - "aligned"
  - "plans"
  - "updated"
  - "pricing"
  - "subscription"
  - "attributes"
  - "available"
---

# Subscription pricing with updated attributes

Product: Apigee X
Coverage: MEDIUM

## Step 02 Summary

Apigee subscription plans are available with pricing attributes aligned to the updated Pay-as-you-go pricing model.

## Extended Definition

Apigee subscription plans are available with pricing attributes aligned to the updated Pay-as-you-go pricing model.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/api-platform/monetization/manage-rate-plans](https://docs.cloud.google.com/apigee/docs/api-platform/monetization/manage-rate-plans)
- [https://docs.cloud.google.com/apigee/docs/apihub/manage-attributes](https://docs.cloud.google.com/apigee/docs/apihub/manage-attributes)
- [https://docs.cloud.google.com/apigee/docs/api-platform/reference/variables-reference](https://docs.cloud.google.com/apigee/docs/api-platform/reference/variables-reference)

## Supporting Pages

### Managing rate plans for API products \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/monetization/manage-rate-plans](https://docs.cloud.google.com/apigee/docs/api-platform/monetization/manage-rate-plans)
- Source ID: `site-docs-reference-required-3`
- Final score: 127
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The following provides an example of the response output, including the two rate plans, myrateplan1 and myrateplan2 associated with HelloworldProduct API product: { "ratePlans": [ { "name": "6b51b501-ac15-41b7-bb3e-621edb849e13", "apiproduct": "HelloworldProduct", "displayName": "myrateplan2", "billingPeriod": "MONTHLY", "currencyCode": "USD", "setupFee": { "currencyCode": "USD", "units": "20" }, "fixedRecurringFee": { "currencyCode": "USD", "units": "25" }, "fixedFeeFrequency": 1, "consumptionPricingType": "FIXED PER UNIT", "consumptionPricingRates": [ { "fee": { "currencyCode": "USD", "nanos": 500000000 } } ], "revenueShareType": "FIXED", "revenueShareRates": [ { "sharePercentage": 2 } ], "state": "DRAFT" }, { "name": "8c0b527c-ba2f-45f1-ac1c-b9e891546fc2", "apiproduct": "HelloworldProduct", "displayName": "myrateplan1", "billingPeriod": "MONTHLY", "currencyCode": "USD", "consumptionPricingType": "FIXED PER UNIT", "consumptionPricingRates": [ { "fee": { "currencyCode": "USD", "units": "3" } } ], "state": "PUBLISHED", "startTime": "1617302588000" } ] } For more information about the API and its response payload, see the List rate plans API Viewing details for a rate plan using the API To view details for a rate plan, issue a GET request to the following API: https://apigee.googleapis.com/v1/organizations/ $ORG /apiproducts/ $APIPRODUCT /rateplans/ $RATEPLAN NAME To determine the name of the rate plan to pass in the resource path, see Listing the rate plans in an organization .
- To update a rate plan, issue a PUT request to the following API, passing the modified request body in your request: https://apigee.googleapis.com/v1/organizations/ $ORG /apiproducts/ $APIPRODUCT /rateplans/ $RATEPLAN NAME For example, the following changes the consumption-based fee to 5 ; and the revenue share percentage to 6.5% all other configuration settings are included to ensure that they are maintained: curl "https://apigee.googleapis.com/v1/organizations/ $ORG /apiproducts/ $APIPRODUCT /rateplans/ $RATEPLAN NAME " \ -X PUT \ -H "Authorization: Bearer $TOKEN" \ -H "Content-type: application/json" \ -d '{ "apiproduct": "HelloworldProduct", "displayName": "myrateplan3", "currencyCode":"USD", "billingPeriod":"MONTHLY", "consumptionPricingType":"FIXED PER UNIT", "consumptionPricingRates":[{ "fee":{ "units":"5" , "nanos":0 } }], "revenueShareType":"FIXED", "revenueShareRates":[{ "sharePercentage":"6.5" }], "state":"DRAFT", "startTime": 1617302588000 }' For more information about the fields you can specify in the request body, see Resource: RatePlans .
- To publish the rate plan, issue a PUT request to the following API, passing the modified request body in your request: https://apigee.googleapis.com/v1/organizations/ $ORG /apiproducts/ $APIPRODUCT /rateplans/ $RATEPLAN NAME For example, the following changes the status of the rateplan1 rate plan to PUBLISHED and sets the activation time to April 1, 2021, specified as milliseconds since epoch: curl "https://apigee.googleapis.com/v1/organizations/ $ORG /apiproducts/ $APIPRODUCT /rateplans/ $RATEPLAN NAME " \ -X PUT \ -H "Authorization: Bearer $TOKEN" \ -H "Content-type: application/json" \ -d '{ "apiproduct": "HelloworldProduct", "displayName": "myrateplan3", "currencyCode":"USD", "billingPeriod":"MONTHLY", "consumptionPricingType":"FIXED PER UNIT", "consumptionPricingRates":[{ "fee":{ "units":"3", "nanos":0 } }], "revenueShareType":"FIXED", "revenueShareRates":[{ "sharePercentage":"5" }], "state":"PUBLISHED", "startTime": 1617302588000 }' For more information about the fields you can specify in the request body, see Resource: RatePlans .
- Required fields for draft rate plan Required fields for published rate plan apiproduct displayName state apiproduct billingPeriod currencyCode displayName startTime state Note: To publish a rate plan, see Publishing a rate plan For example, the following API call creates a draft rate plan named myrateplan5 associated with the HelloworldProduct API product: curl "https://apigee.googleapis.com/v1/organizations/ $ORG /apiproducts/HelloworldProduct/rateplans" \ -X POST \ -H "Authorization: Bearer $TOKEN" \ -H "Content-type: application/json" \ -d '{ "apiproduct":"HelloworldProduct", "billingPeriod":"MONTHLY", "consumptionPricingType":"FIXED PER UNIT", "consumptionPricingRates":[{ "fee":{ "units":"3", "nanos":0 } }], "currencyCode":"USD", "displayName":"myrateplan5", "revenueShareType":"FIXED", "revenueShareRates":[{ "sharePercentage":"1" }], "setupFee":{ "units":"10", "nanos":0 }, "state":"DRAFT" }' Where $TOKEN is set to your OAuth 2.0 access token, as described in Obtaining an OAuth 2.0 access token .

### Flow variables reference \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/reference/variables-reference](https://docs.cloud.google.com/apigee/docs/api-platform/reference/variables-reference)
- Source ID: `site-docs-reference-required-3`
- Final score: 115
- Re-rank relevance: N/A

Evidence snippets:
- PostClientFlow ratelimit. policy name .identifier String Read-Only Returns the (client) identifier reference attached to the policy PostClientFlow ratelimit. policy name .class String Read-Only Returns the class associated with the client identifier PostClientFlow ratelimit. policy name .class.allowed.count Long Read-Only Returns the allowed quota count defined in the class PostClientFlow ratelimit. policy name .class.used.count Long Read-Only Returns the used quota within a class PostClientFlow ratelimit. policy name .class.available.count Long Read-Only Returns the available quota count in the class PostClientFlow ratelimit. policy name .class.exceed.count Long Read-Only Returns the count of requests that exceeds the limit in the class in the current quota interval PostClientFlow ratelimit. policy name .class.total.exceed.count Long Read-Only Returns the total count of requests that exceeds the limit in the class across all quota intervals, so it is the sum of class.exceed.count for all quota intervals.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
- Proxy request mint.limitscheck.prepaid developer currency String Read only Currency of the balance available in the mint.limitscheck.prepaid developer balance variable.
- Note: For SpikeArrest policy, refer to variables ratelimit. policy name .available.count , ratelimit. policy name .exceed.count , and ratelimit. policy name .failed .

### Manage attributes \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/apihub/manage-attributes](https://docs.cloud.google.com/apigee/docs/apihub/manage-attributes)
- Source ID: `site-docs-reference-2`
- Final score: 113
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The following example shows the API call update the API Visibility user defined attribute. curl -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json" \ -d '{"name": "projects/test-15/locations/us-central1/attributes/API Visibility", display name" : "API Visibility Updated", "allowedValues": [ { "id": "internal", "displayName": "Internal", "description": "The API is visible internally in an organization" }, { "id": "external", "displayName": "External", "description": "The API is visible externally in an organization" }, { "id": "public", "displayName": "Public", "description": "The API is visible public in an organization" } ]}' \ -X PATCH https://autopush-apihub.sandbox.googleapis.com/v1/projects/common-dev-15/locations/us-central1/attributes/API Visibility?update mask=display name,allowed values It's important to understand how API hub interprets the request payload for the UpdateAttribute API.
- There are many other such attributes available.
- The following example shows the API call to create the attribute-01 user defined attribute. curl -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json" \ -d '{ "display name" : "custom attribute", "description" : "custom attribute details", "definition type" : "USER DEFINED", "scope" : "API", "data type" : "ENUM", "allowed values" : [ { "id" : "value-1", "display name" : "Value 1", "description" : "Value 1 test description", "immutable" : false, }, { "id" : "value-2", "display name" : "Value 2", "description" : "Value 2 test description", "immutable" : false, }, ], "cardinality" : 4, "mandatory" : false }' \ -X POST https://apihub.googleapis.com/v1/projects/test-15/locations/us-central1/attributes?attribute id=attribute-01 Edit a user defined attribute Caution: Avoid adding sensitive data to user defined attributes.
- The following example shows the API call to update the values of the Business unit attribute. curl -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json" \ -d '{"allowed values": [ { "id": "bu1", "display name": "Business unit 1", "description": "The API can be used by business unit 1" }, { "id": "bu2", "display name": "Business unit 2", "description": "The API can be used by business unit 2" }, { "id": "bu3", "display name": "Business unit 3", "description": "The API can be used by business unit 3" }]}' \ -X PATCH https://apihub.googleapis.com/v1/projects/test-15/locations/us-central1/attributes/system-business-unit?update mask=allowed values It's important to understand how API hub interprets the request payload for the UpdateAttribute API.

