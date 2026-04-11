---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T19:19:31.151Z"
product_name: "Channel Services"
product_slug: "channel-services"
feature_name: "Rebilling in Partner Sales Console and Cloud Channel API"
feature_slug: "rebilling-in-partner-sales-console-and-cloud-channel-api"
latest_feature_date: "2022-05-04"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/channel/docs/rebilling/rebilling-overview"
  - "https://docs.cloud.google.com/channel/docs/rebilling/manage-repricing-configurations"
  - "https://docs.cloud.google.com/channel/docs/access-api"
keywords:
  - "partner"
  - "console"
  - "rebilling"
  - "sales"
  - "channel"
  - "and"
  - "api"
  - "in"
---

# Rebilling in Partner Sales Console and Cloud Channel API

Product: Channel Services
Coverage: LOW

## Step 02 Summary

Introduces rebilling availability in Partner Sales Console and Cloud Channel API for configuring discounts and exporting billing data to BigQuery.

## Extended Definition

Introduces rebilling availability in Partner Sales Console and Cloud Channel API for configuring discounts and exporting billing data to BigQuery.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/channel/docs/rebilling/rebilling-overview](https://docs.cloud.google.com/channel/docs/rebilling/rebilling-overview)
- [https://docs.cloud.google.com/channel/docs/rebilling/manage-repricing-configurations](https://docs.cloud.google.com/channel/docs/rebilling/manage-repricing-configurations)
- [https://docs.cloud.google.com/channel/docs/access-api](https://docs.cloud.google.com/channel/docs/access-api)

## Supporting Pages

### Rebilling overview \_|\_ Channel Services \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/channel/docs/rebilling/rebilling-overview](https://docs.cloud.google.com/channel/docs/rebilling/rebilling-overview)
- Source ID: `site-docs-reference`
- Final score: 228
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Channel Services-specific columns : Channel Services data exports contain additional columns that map to Partner Sales Console entities, such as resource names of customers and entitlements, or CRM IDs.
- The rebilling system assigns Google Cloud product costs to a customer or channel partner and applies a repricing configuration to adjust the final cost.
- You can create and schedule repricing configurations through the Partner Sales Console .
- Since this report includes customer and channel partner costs, along with customer metadata and cost configured using Repricing configurations , you can use the exported data to improve your internal billing processes and financial analytics.

### "Create and manage repricing configurations \_|\_ Channel Services \_|\_\

- URL: [https://docs.cloud.google.com/channel/docs/rebilling/manage-repricing-configurations](https://docs.cloud.google.com/channel/docs/rebilling/manage-repricing-configurations)
- Source ID: `site-docs-reference`
- Final score: 216
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- View repricing configurations To view more details about the current repricing configurations for a customer, navigate to the Customers page of the Partner Sales Console and select the customer's Name to view their details.
- The Repricing section of the Partner Sales Console Customers page shows active and upcoming repricing configurations for your customers' Google Cloud subscriptions.
- Create repricing configurations To create a new repricing configuration, follow these steps: In the Partner Sales Console, open the Customers page Select Repricing .
- Modify and update configurations You can update active configurations for a customer or channel partner up to 10 times for any given invoice month.

### "Getting access to the Cloud Channel API \_|\_ Channel Services \_|\_ Google\

- URL: [https://docs.cloud.google.com/channel/docs/access-api](https://docs.cloud.google.com/channel/docs/access-api)
- Source ID: `site-docs-reference`
- Final score: 214
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Get a Partner Sales Console As part of the onboarding process, you will be set up with a Partner Sales Console on your own reseller domain . (Google Workspace and Google Chrome) Get a Test Partner Sales Console This step is optional, but we recommend it if you want to use the API for provisioning.
- The Test Partner Sales Console lets you to discover the API and test your API integration in a Google production environment that is separate from your production setup.
- The Cloud Channel API is intended for developers and service integrators who want to write applications that manage resold customers, and place or manage orders for Google products on their behalf.
- Home Technology areas Channel Services Guides Send feedback Getting access to the Cloud Channel API Stay organized with collections Save and categorize content based on your preferences.

