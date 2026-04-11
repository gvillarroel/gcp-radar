---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T01:24:40.923Z"
product_name: "Apigee Monetization"
product_slug: "apigee-monetization"
feature_name: "Monetization Rate Plan Management in Apigee Cloud Console"
feature_slug: "monetization-rate-plan-management-in-apigee-cloud-console"
latest_feature_date: "2024-07-26"
deprecation_date: ""
coverage_status: "HIGH"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/api-platform/monetization/manage-rate-plans"
keywords:
  - "rate plan management UI"
  - "Apigee Cloud Console UI"
  - "API product rate plan"
  - "create rate plan"
  - "edit rate plan"
  - "Cloud Console"
  - "monetization console"
  - "rate plans"
---

# Monetization Rate Plan Management in Apigee Cloud Console

Product: Apigee Monetization
Coverage: HIGH

## Step 02 Summary

Monetization operations such as creating and managing rate plans for API Products are now available in the Apigee Cloud Console UI.

## Extended Definition

Monetization rate plan management in Apigee Cloud Console is the UI-based process for working with API product rate plans via the Apigee > Distribution > Monetization page, including opening the Rate plans page and creating rate plans. In this workflow, a rate plan can configure billing-related behavior for an API product (such as billing frequency, currency, setup fees, consumption pricing, recurring fees, active dates, and revenue sharing), and Apigee allows multiple rate plans per API product but only one active plan at a time.

## Evidence Summary

The referenced Monetization documentation page explicitly links rate plan management to the Apigee Cloud Console Monetization UI and lists the configurable elements and constraints of API product rate plans.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/api-platform/monetization/manage-rate-plans](https://docs.cloud.google.com/apigee/docs/api-platform/monetization/manage-rate-plans)

## Supporting Pages

### Managing rate plans for API products \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/monetization/manage-rate-plans](https://docs.cloud.google.com/apigee/docs/api-platform/monetization/manage-rate-plans)
- Source ID: `site-docs-reference`
- Final score: 86
- Re-rank relevance: STRONG
- Re-rank rationale: The page explicitly details creating, updating, publishing, cloning, deleting, and viewing rate plans in the Apigee Cloud Console Monetization UI.

Evidence snippets:
- Using rate plans, API product owners can monetize their API products by configuring the following: Billing account model Currency used for billing Frequency at which customers are billed (monthly only) Initial setup fees for using an API product Consumption-based charges for using an API product Any recurring fees not based on consumption, such as monthly fees for access to your API product Time interval during which the rate plan is in effect for an API product (rate plan activation and expiration times) Revenue sharing with developer partners Note: You can associate multiple rate plans with the same API product but only one rate plan can be active at any point of time.
- The following provides an example of the response output: { "name": "4403a3a5-b366-44f0-aa4d-bd54dcfd3239", "apiproduct": "HelloworldProduct", "displayName": "myrateplan5", "billingPeriod": "MONTHLY", "currencyCode": "USD", "setupFee": { "currencyCode": "USD", "units": "10" }, "consumptionPricingType": "FIXED PER UNIT", "consumptionPricingRates": [ { "fee": { "currencyCode": "USD", "units": "3" } } ], "revenueShareType": "FIXED", "revenueShareRates": [ { "sharePercentage": 1 } ], "state": "DRAFT" } For more information, see the Create rate plan API Previewing your rate plan in the UI In the Google Cloud console, go to the Distribution > Monetization page.
- To access the Rate plans page: In the Google Cloud console, go to the Apigee > Distribution > Monetization page.
- Creating rate plans Create rate plans as described in the following sections.

### "Enrich API data with custom curation in API hub \_|\_ Apigee \_|\_ Google\

- URL: [https://docs.cloud.google.com/apigee/docs/apihub/tutorials/enrich-api-data](https://docs.cloud.google.com/apigee/docs/apihub/tutorials/enrich-api-data)
- Source ID: `site-docs-root`
- Final score: 30
- Re-rank relevance: N/A

Evidence snippets:
- Download the following prebuilt integration JSON file and use it for the purpose of this tutorial: Integration file Download link enrich-with-spec-yaml.json Click to download Create and upload an integration To begin, you'll create a new integration in Application Integration and then upload the downloaded JSON file to define the curation logic: In the Google Cloud console, go to the Application Integration page.
- Click to download To upload the API specification files into your Cloud Storage bucket, do the following: In the Google Cloud console, go to the Cloud Storage Buckets page.
- To edit the curation settings of the existing Apigee and hybrid plugin instance, do the following: In the Google Cloud console, go to the API hub page.
- To configure a Cloud Storage connection, do the following: In the Google Cloud console, go to the Integration Connectors page.

### "Ingest Microsoft Azure API data into API hub \_|\_ Apigee \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/apigee/docs/apihub/tutorials/ingest-azure-api-hub](https://docs.cloud.google.com/apigee/docs/apihub/tutorials/ingest-azure-api-hub)
- Source ID: `site-docs-root`
- Final score: 30
- Re-rank relevance: N/A

Evidence snippets:
- Make sure that you have the following role or roles on the project: API hub Admin ( roles/apihub.admin ) Application Integration Admin ( roles/integrations.admin ) Service Account Admin ( roles/iam.serviceAccountAdmin ) Service Usage Admin ( roles/serviceusage.serviceUsageAdmin ) Project IAM Admin ( roles/resourcemanager.projectIamAdmin ) Check for the roles In the Google Cloud console, go to the IAM page.
- Ensure that you do the following in your Google Cloud console: In the Google Cloud console, on the project selector page, select or create a Google Cloud project.
- Go to the Application Integration page in the Google Cloud console and click the azure-apim-plugin integration to view its components and structure.
- To verify that the ingestion was successful, go to the APIs page in API hub in the Google Cloud console.

