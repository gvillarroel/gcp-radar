---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T19:19:31.138Z"
product_name: "Channel Services"
product_slug: "channel-services"
feature_name: "EntitlementGranularity Repricing Configuration"
feature_slug: "entitlementgranularity-repricing-configuration"
latest_feature_date: "2023-07-17"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/channel/docs/rebilling/manage-repricing-configurations"
  - "https://docs.cloud.google.com/channel/docs/release-notes"
  - "https://docs.cloud.google.com/channel/docs/rebilling/rebilling-overview"
keywords:
  - "entitlementgranularity"
  - "configuration"
  - "creating"
  - "repricing"
  - "services"
  - "channel"
  - "adds"
  - "for"
---

# EntitlementGranularity Repricing Configuration

Product: Channel Services
Coverage: LOW

## Step 02 Summary

Adds support for creating Channel Services repricing configurations using EntitlementGranularity in the Channel Services API instead of ChannelPartnerGranularity.

## Extended Definition

Adds support for creating Channel Services repricing configurations using EntitlementGranularity in the Channel Services API instead of ChannelPartnerGranularity.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/channel/docs/rebilling/manage-repricing-configurations](https://docs.cloud.google.com/channel/docs/rebilling/manage-repricing-configurations)
- [https://docs.cloud.google.com/channel/docs/release-notes](https://docs.cloud.google.com/channel/docs/release-notes)
- [https://docs.cloud.google.com/channel/docs/rebilling/rebilling-overview](https://docs.cloud.google.com/channel/docs/rebilling/rebilling-overview)

## Supporting Pages

### "Create and manage repricing configurations \_|\_ Channel Services \_|\_\

- URL: [https://docs.cloud.google.com/channel/docs/rebilling/manage-repricing-configurations](https://docs.cloud.google.com/channel/docs/rebilling/manage-repricing-configurations)
- Source ID: `site-docs-reference`
- Final score: 184
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Home Technology areas Channel Services Guides Send feedback Create and manage repricing configurations Stay organized with collections Save and categorize content based on your preferences.
- View repricing configurations To view more details about the current repricing configurations for a customer, navigate to the Customers page of the Partner Sales Console and select the customer's Name to view their details.
- Creating too many mid-month updates might cause unpredictable billing results for the ongoing month for customers, so we recommend updating configurations mid-month only when absolutely necessary.
- The Repricing section of the Partner Sales Console Customers page shows active and upcoming repricing configurations for your customers' Google Cloud subscriptions.

### Channel Services release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/channel/docs/release-notes](https://docs.cloud.google.com/channel/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 172
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- July 17, 2023 v1 Feature Distributors can now create repricing configurations for Channel Partners using EntitlementGranularity instead of ChannelPartnerGranularity in the Channel Services API.
- When you're using EntitlementGranularity , be aware of the following: If at least one ChannelPartnerRepricingConfig with EntitlementGranularity becomes effective for an entitlement, no existing or future ChannelPartnerGranularity configurations apply to this Entitlement.
- September 30, 2022 v1 Feature This release adds the ability to generate reports for Google Cloud billing and Google Voice expense data to the Channel Services API.
- We recommend using EntitlementGranularity for your repricing configurations, because it allows more customization depending on your customers' situations.

### Rebilling overview \_|\_ Channel Services \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/channel/docs/rebilling/rebilling-overview](https://docs.cloud.google.com/channel/docs/rebilling/rebilling-overview)
- Source ID: `site-docs-reference`
- Final score: 150
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Repricing configurations let you adjust the final product costs for your customers and channel partners.
- Since this report includes customer and channel partner costs, along with customer metadata and cost configured using Repricing configurations , you can use the exported data to improve your internal billing processes and financial analytics.
- Optimized queries : Channel Services data exports use the payer billing account id as the clustering column, so queries for one parent billing account are optimized to reduce the cost of querying data data.
- While viewing the list of repricing configurations for a customer, you can click Manage repricing to view and modify the configurations for a specific entitlement.

