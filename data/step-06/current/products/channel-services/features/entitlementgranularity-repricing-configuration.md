---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T11:56:59.864Z"
product_name: "Channel Services"
product_slug: "channel-services"
feature_name: "EntitlementGranularity Repricing Configuration"
feature_slug: "entitlementgranularity-repricing-configuration"
latest_feature_date: "2023-07-17"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/channel/docs/rebilling/manage-repricing-configurations"
  - "https://docs.cloud.google.com/channel/docs/rebilling/rebilling-overview"
  - "https://docs.cloud.google.com/channel/docs/rebilling/create-customer-cost-dashboards"
keywords:
  - "entitlementgranularity"
  - "configuration"
  - "creating"
  - "instead"
  - "configurations"
  - "repricing"
  - "adds"
---

# EntitlementGranularity Repricing Configuration

Product: Channel Services
Coverage: MEDIUM

## Step 02 Summary

Adds support for creating Channel Services repricing configurations using EntitlementGranularity in the Channel Services API instead of ChannelPartnerGranularity.

## Extended Definition

Adds support for creating Channel Services repricing configurations using EntitlementGranularity in the Channel Services API instead of ChannelPartnerGranularity.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/channel/docs/rebilling/manage-repricing-configurations](https://docs.cloud.google.com/channel/docs/rebilling/manage-repricing-configurations)
- [https://docs.cloud.google.com/channel/docs/rebilling/rebilling-overview](https://docs.cloud.google.com/channel/docs/rebilling/rebilling-overview)
- [https://docs.cloud.google.com/channel/docs/rebilling/create-customer-cost-dashboards](https://docs.cloud.google.com/channel/docs/rebilling/create-customer-cost-dashboards)

## Supporting Pages

### "Create and manage repricing configurations \_|\_ Channel Services \_|\_\

- URL: [https://docs.cloud.google.com/channel/docs/rebilling/manage-repricing-configurations](https://docs.cloud.google.com/channel/docs/rebilling/manage-repricing-configurations)
- Source ID: `site-docs-reference`
- Final score: 178
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The repricing management pane has a table with the following columns: Active on : The date an upcoming configuration becomes active, the date the current configuration became active, and the date when past configurations were active.
- View repricing configurations To view more details about the current repricing configurations for a customer, navigate to the Customers page of the Partner Sales Console and select the customer's Name to view their details.
- Creating too many mid-month updates might cause unpredictable billing results for the ongoing month for customers, so we recommend updating configurations mid-month only when absolutely necessary.
- Home Technology areas Channel Services Guides Send feedback Create and manage repricing configurations Stay organized with collections Save and categorize content based on your preferences.

### Rebilling overview \_|\_ Channel Services \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/channel/docs/rebilling/rebilling-overview](https://docs.cloud.google.com/channel/docs/rebilling/rebilling-overview)
- Source ID: `site-docs-reference`
- Final score: 96
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Since this report includes customer and channel partner costs, along with customer metadata and cost configured using Repricing configurations , you can use the exported data to improve your internal billing processes and financial analytics.
- Rebilling consists of two main features: Repricing configurations BigQuery exports BigQuery exports You can export a comprehensive report of your customers' billing usage and cost data to a BigQuery dataset that you own.
- While viewing the list of repricing configurations for a customer, you can click Manage repricing to view and modify the configurations for a specific entitlement.
- Repricing configurations let you adjust the final product costs for your customers and channel partners.

### "Create customer cost dashboards using Looker Studio \_|\_ Channel Services\

- URL: [https://docs.cloud.google.com/channel/docs/rebilling/create-customer-cost-dashboards](https://docs.cloud.google.com/channel/docs/rebilling/create-customer-cost-dashboards)
- Source ID: `site-docs-reference`
- Final score: 66
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- You can combine Channel Services data export with Looker Studio to create cost dashboards to share with your customer or channel partner (distributor-only), populated with costs configured using repricing configurations .
- Create repricing configurations to configure cost for your customer .
- VIEW NAME AS ( SELECT EXCEPT ( cost , credits , customer name , customer cost , customer repricing config name , channel partner name , channel partner cost , channel partner repricing config name , customer correlation id ), COALESCE (( SELECT SUM ( c . customer amount ) FROM UNNEST ( credits ) AS c ), 0 ) AS credits sum amount , COALESCE (( SELECT SUM ( c . customer amount ) FROM UNNEST ( credits ) AS c ), 0 ) + customer cost AS net cost , PARSE DATE ( "%Y%m" , invoice . month ) AS Invoice Month , DATE ( export time ) AS date , FROM PROJECT ID .
- This page does not include instructions on creating BI Engine reservations.

