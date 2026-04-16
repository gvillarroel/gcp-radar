---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T11:56:59.866Z"
product_name: "Channel Services"
product_slug: "channel-services"
feature_name: "ListSkuGroups API"
feature_slug: "listskugroups-api"
latest_feature_date: "2023-06-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/channel/docs/rebilling/manage-repricing-configurations"
  - "https://docs.cloud.google.com/channel/docs/rebilling/rebilling-overview"
  - "https://docs.cloud.google.com/channel/docs/reference/rpc"
keywords:
  - "listskugroups"
  - "groups"
  - "public"
  - "list"
  - "introduces"
  - "rebilling"
---

# ListSkuGroups API

Product: Channel Services
Coverage: MEDIUM

## Step 02 Summary

Introduces the ListSkuGroups public API to list rebilling-supported SKU groups that can be configured in customer or channel partner repricing.

## Extended Definition

Introduces the ListSkuGroups public API to list rebilling-supported SKU groups that can be configured in customer or channel partner repricing.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/channel/docs/rebilling/manage-repricing-configurations](https://docs.cloud.google.com/channel/docs/rebilling/manage-repricing-configurations)
- [https://docs.cloud.google.com/channel/docs/rebilling/rebilling-overview](https://docs.cloud.google.com/channel/docs/rebilling/rebilling-overview)
- [https://docs.cloud.google.com/channel/docs/reference/rpc](https://docs.cloud.google.com/channel/docs/reference/rpc)

## Supporting Pages

### "Create and manage repricing configurations \_|\_ Channel Services \_|\_\

- URL: [https://docs.cloud.google.com/channel/docs/rebilling/manage-repricing-configurations](https://docs.cloud.google.com/channel/docs/rebilling/manage-repricing-configurations)
- Source ID: `site-docs-reference`
- Final score: 97
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The resulting data in Rebilling BQ Export looks like the following: sku list price cost customer cost credit.type credit.amount credit.customer amount Partner Cost (cost + SUM(credit.amount)) End Customer Cost (customer cost + SUM(credit.customer amount)) Compute 120 100 99.6 (120 .83) RESELLER MARGIN COMMITTED USAGE DISCOUNT -10 -10 0 (margin hidden) 0 (hidden due to list price) 80 99.6 BigQuery 120 100 120 (100 1.2) RESELLER MARGIN COMMITTED USAGE DISCOUNT -10 -10 0 (margin hidden) -12 (DCC+20%) 80 108 Note: If an entitlement does not have any repricing configuration specified, then it defaults to Direct Customer Cost + 0% , which implies no modifications to the cost (except removal of RESELLER MARGIN).
- You can use custom repricing configurations to markup or discount direct customer costs, list prices, and specific SKU groups by a set percentage.
- You can also export SKU groups using the API, with the List SKU groups and List billable SKUs in a SKU group endpoints.
- Export SKU groups If you want a general overview of the SKU groups available per platform across all of your customers, you can export CSV file from the Repricing section of the Customers page.

### Rebilling overview \_|\_ Channel Services \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/channel/docs/rebilling/rebilling-overview](https://docs.cloud.google.com/channel/docs/rebilling/rebilling-overview)
- Source ID: `site-docs-reference`
- Final score: 79
- Re-rank relevance: N/A

Evidence snippets:
- Rebilling consists of two main features: Repricing configurations BigQuery exports BigQuery exports You can export a comprehensive report of your customers' billing usage and cost data to a BigQuery dataset that you own.
- Home Technology areas Channel Services Guides Send feedback Rebilling overview Stay organized with collections Save and categorize content based on your preferences.
- While viewing the list of repricing configurations for a customer, you can click Manage repricing to view and modify the configurations for a specific entitlement.
- The rebilling system assigns Google Cloud product costs to a customer or channel partner and applies a repricing configuration to adjust the final cost.

### Cloud Channel API \_|\_ Channel Services \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/channel/docs/reference/rpc](https://docs.cloud.google.com/channel/docs/reference/rpc)
- Source ID: `site-docs-root`
- Final score: 76
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- ListSkuGroups Lists the Rebilling supported SKU groups the account is authorized to sell.
- ListSkuGroups Lists the Rebilling supported SKU groups the account is authorized to sell.
- ListProvisionableCloudIdentityTypes Returns the Google Workspace customer types you can create for the given domain, and shows if this requires a transfer.
- ListSubscribers Lists service accounts with subscriber privileges on the Pub/Sub topic created for this Channel Services account or integrator.

