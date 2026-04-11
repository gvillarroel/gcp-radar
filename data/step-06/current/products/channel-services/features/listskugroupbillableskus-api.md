---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T19:19:31.140Z"
product_name: "Channel Services"
product_slug: "channel-services"
feature_name: "ListSkuGroupBillableSkus API"
feature_slug: "listskugroupbillableskus-api"
latest_feature_date: "2023-06-13"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/channel/docs/concepts/google-cloud/filter-customers"
  - "https://docs.cloud.google.com/channel/docs/reference/rest/Shared.Types/ListOperationsResponse"
  - "https://docs.cloud.google.com/channel/docs/rebilling/export-data-to-bigquery"
keywords:
  - "listskugroupbillableskus"
  - "public"
  - "list"
  - "all"
  - "introduces"
  - "api"
  - "the"
  - "to"
---

# ListSkuGroupBillableSkus API

Product: Channel Services
Coverage: LOW

## Step 02 Summary

Introduces the ListSkuGroupBillableSkus public API to list all Google Cloud SKUs that belong to a specified SKU group.

## Extended Definition

Introduces the ListSkuGroupBillableSkus public API to list all Google Cloud SKUs that belong to a specified SKU group.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/channel/docs/concepts/google-cloud/filter-customers](https://docs.cloud.google.com/channel/docs/concepts/google-cloud/filter-customers)
- [https://docs.cloud.google.com/channel/docs/reference/rest/Shared.Types/ListOperationsResponse](https://docs.cloud.google.com/channel/docs/reference/rest/Shared.Types/ListOperationsResponse)
- [https://docs.cloud.google.com/channel/docs/rebilling/export-data-to-bigquery](https://docs.cloud.google.com/channel/docs/rebilling/export-data-to-bigquery)

## Supporting Pages

### "Set up a customer filter using the ListCustomers API \_|\_ Channel Services\

- URL: [https://docs.cloud.google.com/channel/docs/concepts/google-cloud/filter-customers](https://docs.cloud.google.com/channel/docs/concepts/google-cloud/filter-customers)
- Source ID: `site-docs-reference`
- Final score: 162
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Home Technology areas Channel Services Guides Send feedback Set up a customer filter using the ListCustomers API Stay organized with collections Save and categorize content based on your preferences.
- If you need to find information about a specific customer, you can use the Cloud Channel API filter parameter through the customers.list method .
- Syntax: <domain org display name> : <value> Example: domain : "uw.com " AND org display name : "prefix " Examples of filters with logical operators Cloud Channel API filters support the use of AND and OR logical operators.
- If you use a filter, there is a short delay (usually a few seconds) during the creation of a customer.

### ListOperationsResponse \_|\_ Channel Services \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/channel/docs/reference/rest/Shared.Types/ListOperationsResponse](https://docs.cloud.google.com/channel/docs/reference/rest/Shared.Types/ListOperationsResponse)
- Source ID: `site-api-reference`
- Final score: 154
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- JSON representation { "name" : string , "metadata" : { "@type" : string , field1 : ... , ... } , "done" : boolean , // Union field result can be only one of the following: "error" : { object ( Status ) } , "response" : { "@type" : string , field1 : ... , ... } // End of list of possible types for union field result . } Fields name string The server-assigned name, which is only unique within the same service that originally returns it.
- JSON representation { "operations" : [ { object ( Operation ) } ] , "nextPageToken" : string , "unreachable" : [ string ] } Fields operations[] object ( Operation ) A list of operations that matches the specified filter in the request. nextPageToken string The standard List next-page token. unreachable[] string Unordered list of unreachable resources.
- Home Technology areas Channel Services APIs & Reference Send feedback ListOperationsResponse Stay organized with collections Save and categorize content based on your preferences.
- JSON representation Operation JSON representation Status JSON representation The response message for Operations.ListOperations .

### Export Channel Services data to BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/channel/docs/rebilling/export-data-to-bigquery](https://docs.cloud.google.com/channel/docs/rebilling/export-data-to-bigquery)
- Source ID: `site-docs-reference`
- Final score: 132
- Re-rank relevance: N/A

Evidence snippets:
- Uses the format: accounts/{account}/channelPartnerLinks/{channelPartner} . channel partner cost Numeric (Distributors only) The cost to the channel partner, identified by channel partner name , after applying an existing ChannelPartnerRepricingConfig . customer name String The resource name of the reseller's customer who consumed this usage in the format accounts/{account}/customers/{customer} customer cost Numeric The cost to the reseller's customer identified by the customer name column, after applying the CustomerRepricingConfig , if one exists. cost at list Numeric Cost at list price per the default consumption model . customer repricing config name String The resource name of the Cloud Channel API CustomerRepricingConfig .
- For subscription products, this is the end of the billing month. project Struct Information about the Google Cloud project that generated the Cloud Billing data. project.number String An internally-generated, anonymized, and unique identifier for the Google Cloud project that generated the Cloud Billing data. project.id String The ID of the Google Cloud project that generated the Cloud Billing data. project.name String The name of the Google Cloud project that generated the Cloud Billing data. project.labels Struct, Repeated project.labels.key String If labels are present, the key portion of the key:value pair. project.labels.value String If labels are present, the value portion of the key:value pair. project.ancestry numbers String The resource hierarchy ancestors for the project identified by the project.id . labels Struct, Repeated labels.key String If labels are present, the key portion of the key:value pair. labels.value String If labels are present, the value portion of the key:value pair. system labels Struct, Repeated system labels.key String If system labels are present, the key portion of the key:value pair. system labels.value String If system labels are present, the value portion of the key:value pair. location.location String Location of usage at the level of a country, region, or zone.
- Note: For Google Cloud, the first full month of data with price fields is February 2024. cost at effective price default Numeric Cost per the default consumption model inclusive of any negotiated discounts reflected in the custom pricing in the contract linked to your Cloud Billing account (if applicable). cost at list consumption model Numeric Cost per the applicable consumption model before any negotiated discounts reflected in the custom pricing in the contract linked to your Cloud Billing account (if applicable). consumption model Struct Fields that describe the applicable consumption model . consumption model.id String The ID of the consumption model . consumption model.description String The description of the consumption model .
- If credits.type is RESELLER MARGIN, this amount will be zero. adjustmentsInfo Struct, Repeated Contains fields that describe the structure and value of an adjustment to cost line items. adjustmentsInfo.adjustment id String If populated, an adjustment is associated with a cost line item. adjustmentsInfo.adjustments id is the unique ID for all the adjustments caused by an issue. adjustmentsInfo.adjustment description String A description of the adjustment and its cause. adjustmentsInfo.adjustment type String The type of the adjustment. adjustmentsInfo.adjustment mode String How the adjustment was issued. export time Timestamp A processing time associated with an append of billing data.

