---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T05:04:10.353Z"
product_name: "Apigee Monetization"
product_slug: "apigee-monetization"
feature_name: "Apigee Monetization Recurring Fees"
feature_slug: "apigee-monetization-recurring-fees"
latest_feature_date: "2022-11-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/api-platform/monetization/manage-rate-plans"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/monetization/overview"
  - "https://docs.cloud.google.com/apigee/docs/hybrid/v1.10/dns-quickstart"
keywords:
  - "recurring"
  - "optional"
  - "fees"
  - "supports"
---

# Apigee Monetization Recurring Fees

Product: Apigee Monetization
Coverage: MEDIUM

## Step 02 Summary

Monetization now supports optional recurring fees that can be charged to API developers.

## Extended Definition

Monetization now supports optional recurring fees that can be charged to API developers.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/api-platform/monetization/manage-rate-plans](https://docs.cloud.google.com/apigee/docs/api-platform/monetization/manage-rate-plans)
- [https://docs.cloud.google.com/apigee/docs/api-platform/monetization/overview](https://docs.cloud.google.com/apigee/docs/api-platform/monetization/overview)
- [https://docs.cloud.google.com/apigee/docs/hybrid/v1.10/dns-quickstart](https://docs.cloud.google.com/apigee/docs/hybrid/v1.10/dns-quickstart)

## Supporting Pages

### Managing rate plans for API products \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/monetization/manage-rate-plans](https://docs.cloud.google.com/apigee/docs/api-platform/monetization/manage-rate-plans)
- Source ID: `site-docs-reference`
- Final score: 114
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Using rate plans, API product owners can monetize their API products by configuring the following: Billing account model Currency used for billing Frequency at which customers are billed (monthly only) Initial setup fees for using an API product Consumption-based charges for using an API product Any recurring fees not based on consumption, such as monthly fees for access to your API product Time interval during which the rate plan is in effect for an API product (rate plan activation and expiration times) Revenue sharing with developer partners Note: You can associate multiple rate plans with the same API product but only one rate plan can be active at any point of time.
- The following provides an example of the response output, including the two rate plans, myrateplan1 and myrateplan2 associated with HelloworldProduct API product: { "ratePlans": [ { "name": "6b51b501-ac15-41b7-bb3e-621edb849e13", "apiproduct": "HelloworldProduct", "displayName": "myrateplan2", "billingPeriod": "MONTHLY", "currencyCode": "USD", "setupFee": { "currencyCode": "USD", "units": "20" }, "fixedRecurringFee": { "currencyCode": "USD", "units": "25" }, "fixedFeeFrequency": 1, "consumptionPricingType": "FIXED PER UNIT", "consumptionPricingRates": [ { "fee": { "currencyCode": "USD", "nanos": 500000000 } } ], "revenueShareType": "FIXED", "revenueShareRates": [ { "sharePercentage": 2 } ], "state": "DRAFT" }, { "name": "8c0b527c-ba2f-45f1-ac1c-b9e891546fc2", "apiproduct": "HelloworldProduct", "displayName": "myrateplan1", "billingPeriod": "MONTHLY", "currencyCode": "USD", "consumptionPricingType": "FIXED PER UNIT", "consumptionPricingRates": [ { "fee": { "currencyCode": "USD", "units": "3" } } ], "state": "PUBLISHED", "startTime": "1617302588000" } ] } For more information about the API and its response payload, see the List rate plans API Viewing details for a rate plan using the API To view details for a rate plan, issue a GET request to the following API: https://apigee.googleapis.com/v1/organizations/ $ORG /apiproducts/ $APIPRODUCT /rateplans/ $RATEPLAN NAME To determine the name of the rate plan to pass in the resource path, see Listing the rate plans in an organization .
- Apigee API The following sections describe how to view rate plans for an organization using the API: Listing the rate plans for an API product Viewing details for a rate plan Listing the rate plans for an API product using the API To list the rate plans for the organization, issue a GET request to the following API: https://apigee.googleapis.com/v1/organizations/ $ORG /apiproducts/ $APIPRODUCT /rateplans For example using curl: curl "https://apigee.googleapis.com/v1/organizations/ $ORG /apiproducts/ $APIPRODUCT /rateplans?expand=true" \ -X GET \ -H "Authorization: Bearer $TOKEN" Where $TOKEN is set to your OAuth 2.0 access token, as described in Obtaining an OAuth 2.0 access token .
- The following provides an example of the response output: { "name": "cb9f420e-313d-4900-aa4f-e07b2b76918d", "apiproduct": "HelloworldProduct", "displayName": "myrateplan3", "billingPeriod": "MONTHLY", "currencyCode": "USD", "consumptionPricingType": "FIXED PER UNIT", "consumptionPricingRates": [ { "fee": { "currencyCode": "USD", "units": "3" } } ], "revenueShareType": "FIXED", "revenueShareRates": [ { "sharePercentage": 5 } ], "state": "PUBLISHED", "startTime": "1617302588000" } For more information, see the Update rate plan API Moving published rate plans to draft status Move published rate plans to draft status as described in the following sections.

### Overview of Apigee monetization | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/monetization/overview](https://docs.cloud.google.com/apigee/docs/api-platform/monetization/overview)
- Source ID: `feature-recovery-direct-http`
- Final score: 84
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- When creating a rate plan , you configure the billing currency and frequency, any setup and recurring fees, and the consumption-based fees.
- The setup fee (if any), per-transaction cost, and any recurring fees are deducted from the wallet.
- Managing API products Managing client applications Organizing client app ownership Controlling developer access to your apps App access overview Registering app developers Importing existing consumer keys and secrets Developer portal solutions API design overview Building your integrated portal Introduction How portal users interact with your portal Getting started Tutorial: Building your first portal Overview Step 1: Create a portal Step 2: Customize the color palette Step 3: Customize the logo Step 4: Edit page content Step 5: Set up navigation Step 6: Publish an API Quick tips for customizing the sample portal Best practices for building your portal Building and publishing your portal Steps to build your portal Managing your portals Managing the pages in your portal Developing portal content Customizing your theme Setting up navigation Publishing your APIs Managing access to your APIs using API keys Managing the default visibility Managing your assets Customizing your domain Configuring email Configure a content security policy Configuring analytics tracking Adding custom scripts Publishing your portal content Viewing your live portal Creating a custom search page Managing user account creation and sign-in experience Configuring the user account creation and sign-in experience Configuring identity providers Managing user accounts Managing developer teams Managing audiences Reference Cookies Markdown syntax Building your portal using Drupal Introduction Drupal-based developer portal in Cloud Marketplace Overview Get started Customize your portal Support resources Choosing a hosting provider Support process for Apigee Drupal modules MONETIZE Overview of Apigee monetization Steps to use Apigee monetization Enabling Apigee monetization Enforcing monetization limits in API proxies Enforcing monetization quotas in API products Managing prepaid account balances Managing rate plans for API products Integrating monetization in Drupal portal Purchasing API product subscriptions using API Debugging monetization using the Debug tool Capturing monetization data Generating monetization reports ADMINISTER Users, roles, and access Users and roles Apigee roles Managing users, roles, and permissions using APIs Managing users in the UI Managing access in Google Cloud Access Apigee using Workforce Identity Federation Adding IAM Conditions to policies Apigee Spaces Apigee Spaces overview Apigee Spaces roles and permissions Create and manage Apigee Spaces Manage API resources with Apigee Spaces Move API resources in Apigee Spaces IAM permission hierarchy in Apigee Spaces Network Configuration Peering ranges Using multiple regions Managing instances Changing instance IPs Recreating an Apigee instance with zero downtime Using shared VPC networks Southbound networking patterns Northbound networking with Private Service Connect Migrate northbound routing to Private Service Connect Configure active health check for regional failover with Private Service Connect Client IP resolution Security administration TLS Options for configuring TLS Accessing TLS connection information in an API proxy Working with references SAML Using VPC Service Controls About the encryption keys Provisioning NAT IPs Performance considerations for Apigee Cloud NAT Calculating static NAT IP requirements Preventing DoS attacks Integrate Apigee with your SIEM solution Integrate Apigee with Google SecOps Managing data collectors Backups Switching between organizations Manage maintenance updates Overview Manage instance maintenance windows View maintenance logs ANALYZE Analytics overview Using the analytics dashboards API metrics API proxy performance Error code analysis Latency analysis Cache performance Target performance Developer analysis Developer engagement Traffic composition End user analysis Devices Geomap Custom reports Creating and managing custom reports Analytics metrics, dimensions, and filters reference Operations anomalies Operations anomalies overview View and investigate anomalies Create anomaly alerts Collecting custom data with the DataCapture policy Exporting data from analytics Obfuscate user data for analytics Data Studio integration Using the API Using the asynchronous custom reports API Using the metrics API Metrics API examples Troubleshooting Troubleshooting with analytics What does an analytics entity named 'not set' mean?
- An API product can have multiple rate plans associated with it but only one rate plan can be active at any point of time.

### DNS setup quickstart \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/hybrid/v1.10/dns-quickstart](https://docs.cloud.google.com/apigee/docs/hybrid/v1.10/dns-quickstart)
- Source ID: `site-docs-root`
- Final score: 42
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

