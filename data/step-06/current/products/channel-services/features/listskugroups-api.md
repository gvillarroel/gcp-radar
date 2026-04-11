---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T19:19:31.142Z"
product_name: "Channel Services"
product_slug: "channel-services"
feature_name: "ListSkuGroups API"
feature_slug: "listskugroups-api"
latest_feature_date: "2023-06-13"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/channel/docs/concepts/google-cloud/filter-customers"
  - "https://docs.cloud.google.com/channel/docs/rebilling/export-data-to-bigquery"
  - "https://docs.cloud.google.com/channel/docs/reference/rest/Shared.Types/ListOperationsResponse"
keywords:
  - "listskugroups"
  - "public"
  - "list"
  - "introduces"
  - "rebilling"
  - "api"
  - "the"
  - "to"
---

# ListSkuGroups API

Product: Channel Services
Coverage: LOW

## Step 02 Summary

Introduces the ListSkuGroups public API to list rebilling-supported SKU groups that can be configured in customer or channel partner repricing.

## Extended Definition

Introduces the ListSkuGroups public API to list rebilling-supported SKU groups that can be configured in customer or channel partner repricing.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/channel/docs/concepts/google-cloud/filter-customers](https://docs.cloud.google.com/channel/docs/concepts/google-cloud/filter-customers)
- [https://docs.cloud.google.com/channel/docs/rebilling/export-data-to-bigquery](https://docs.cloud.google.com/channel/docs/rebilling/export-data-to-bigquery)
- [https://docs.cloud.google.com/channel/docs/reference/rest/Shared.Types/ListOperationsResponse](https://docs.cloud.google.com/channel/docs/reference/rest/Shared.Types/ListOperationsResponse)

## Supporting Pages

### "Set up a customer filter using the ListCustomers API \_|\_ Channel Services\

- URL: [https://docs.cloud.google.com/channel/docs/concepts/google-cloud/filter-customers](https://docs.cloud.google.com/channel/docs/concepts/google-cloud/filter-customers)
- Source ID: `site-docs-reference`
- Final score: 154
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Home Technology areas Channel Services Guides Send feedback Set up a customer filter using the ListCustomers API Stay organized with collections Save and categorize content based on your preferences.
- If you need to find information about a specific customer, you can use the Cloud Channel API filter parameter through the customers.list method .
- Syntax: <domain org display name> : <value> Example: domain : "uw.com " AND org display name : "prefix " Examples of filters with logical operators Cloud Channel API filters support the use of AND and OR logical operators.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]

### Export Channel Services data to BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/channel/docs/rebilling/export-data-to-bigquery](https://docs.cloud.google.com/channel/docs/rebilling/export-data-to-bigquery)
- Source ID: `site-docs-reference`
- Final score: 140
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Uses the format: accounts/{account}/channelPartnerLinks/{channelPartner} . channel partner cost Numeric (Distributors only) The cost to the channel partner, identified by channel partner name , after applying an existing ChannelPartnerRepricingConfig . customer name String The resource name of the reseller's customer who consumed this usage in the format accounts/{account}/customers/{customer} customer cost Numeric The cost to the reseller's customer identified by the customer name column, after applying the CustomerRepricingConfig , if one exists. cost at list Numeric Cost at list price per the default consumption model . customer repricing config name String The resource name of the Cloud Channel API CustomerRepricingConfig .
- For example, the base unit for standard storage is byte-seconds . usage.amount in pricing unit Numeric The quantity of usage.pricing unit usage. usage.pricing unit String The units for measuring resource usage. credits Struct, Repeated Contains fields that describe the structure and value of credits. credits.id String If populated, indicates that a credit is associated with the product SKU. credits.full name String The name of the credit associated with the product SKU. credits.type String This field describes the purpose or origin of the credits.id . credits.name String A description of the credit applied to the usage. credits.amount Numeric The amount of the credit applied to the usage. credits.channel partner amount Numeric The amount of the credit applied to the usage, after rebilling markups and discounts.
- Note: For Google Cloud, the first full month of data with price fields is February 2024. cost at effective price default Numeric Cost per the default consumption model inclusive of any negotiated discounts reflected in the custom pricing in the contract linked to your Cloud Billing account (if applicable). cost at list consumption model Numeric Cost per the applicable consumption model before any negotiated discounts reflected in the custom pricing in the contract linked to your Cloud Billing account (if applicable). consumption model Struct Fields that describe the applicable consumption model . consumption model.id String The ID of the consumption model . consumption model.description String The description of the consumption model .
- The following columns or fields don't apply to offline order billing exports: project labels system labels location resource credits entitlement name channel partner name channel partner cost customer name customer cost cost at list customer repricing config name channel partner repricing config name tags price.effective price price.tier start amount price.list price price.effective price default price.list price consumption model transaction type seller name consumption model Other notes about Google Workspace export There are several special behaviors with Google Workspace exports: Google Workspace data doesn't contain the reseller's own usage.

### ListOperationsResponse \_|\_ Channel Services \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/channel/docs/reference/rest/Shared.Types/ListOperationsResponse](https://docs.cloud.google.com/channel/docs/reference/rest/Shared.Types/ListOperationsResponse)
- Source ID: `site-api-reference`
- Final score: 134
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- JSON representation { "operations" : [ { object ( Operation ) } ] , "nextPageToken" : string , "unreachable" : [ string ] } Fields operations[] object ( Operation ) A list of operations that matches the specified filter in the request. nextPageToken string The standard List next-page token. unreachable[] string Unordered list of unreachable resources.
- Home Technology areas Channel Services APIs & Reference Send feedback ListOperationsResponse Stay organized with collections Save and categorize content based on your preferences.
- JSON representation Operation JSON representation Status JSON representation The response message for Operations.ListOperations .
- Populated when the request sets ListOperationsRequest.return partial success and reads across collections.

