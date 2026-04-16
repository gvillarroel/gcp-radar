---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T11:56:59.874Z"
product_name: "Channel Services"
product_slug: "channel-services"
feature_name: "ListCustomers Filtering"
feature_slug: "listcustomers-filtering"
latest_feature_date: "2022-02-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/channel/docs/concepts/google-cloud/filter-customers"
  - "https://docs.cloud.google.com/channel/docs/guides/manage-entitlements"
  - "https://docs.cloud.google.com/channel/docs/reference/rpc"
keywords:
  - "listcustomers"
  - "filtering"
  - "customers"
  - "selected"
  - "filters"
  - "method"
  - "adds"
---

# ListCustomers Filtering

Product: Channel Services
Coverage: MEDIUM

## Step 02 Summary

Adds filters to the ListCustomers method so selected customers can be excluded from search results.

## Extended Definition

Adds filters to the ListCustomers method so selected customers can be excluded from search results.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/channel/docs/concepts/google-cloud/filter-customers](https://docs.cloud.google.com/channel/docs/concepts/google-cloud/filter-customers)
- [https://docs.cloud.google.com/channel/docs/guides/manage-entitlements](https://docs.cloud.google.com/channel/docs/guides/manage-entitlements)
- [https://docs.cloud.google.com/channel/docs/reference/rpc](https://docs.cloud.google.com/channel/docs/reference/rpc)

## Supporting Pages

### "Set up a customer filter using the ListCustomers API \_|\_ Channel Services\

- URL: [https://docs.cloud.google.com/channel/docs/concepts/google-cloud/filter-customers](https://docs.cloud.google.com/channel/docs/concepts/google-cloud/filter-customers)
- Source ID: `site-docs-reference`
- Final score: 128
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Home Technology areas Channel Services Guides Send feedback Set up a customer filter using the ListCustomers API Stay organized with collections Save and categorize content based on your preferences.
- If you need to find information about a specific customer, you can use the Cloud Channel API filter parameter through the customers.list method .
- Exact match syntax Exact match filters will only find customers that contain the same fields as those in the submitted string.
- Available filters Strings for the filter parameter support exact match, or exact match plus prefix filtering.

### "Manage Google Workspace and Google Chrome entitlements \_|\_ Channel Services\

- URL: [https://docs.cloud.google.com/channel/docs/guides/manage-entitlements](https://docs.cloud.google.com/channel/docs/guides/manage-entitlements)
- Source ID: `site-docs-reference`
- Final score: 64
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- QueryEligibleBillingAccountsRequest { "customer" : "accounts/123/customers/abc" , "skus" : [ "products/product id/skus/sku id1" ] } QueryEligibleBillingAccountsResponse { "skuPurchaseGroups" : [ { "skus" : [ "products/product id/skus/sku id1" ], "billingAccountPurchaseInfos" : [ { "billingAccount" : { "name" : "accounts/123/billingAccounts/billing account id1" , "displayName" : "Google Workspace USD US 1" , "currencyCode" : "USD" , "regionCode" : "US" } }, { "billingAccount" : { "name" : "accounts/123/billingAccounts/billing account id2" , "displayName" : "Google Workspace CAD CA 1" , "currencyCode" : "CAD" , "regionCode" : "CA" } } ] } ] } With the selected PurchasableSku and BillingAccount, use the listPurchasableOffers method to find the available PurchasableOffer ListPurchasableOffersRequest { "customer": "accounts/123/customers/abc", "createEntitlementPurchase": { "sku": "products/product id/skus/sku id1", "billingAccount": "accounts/123/billingAccounts/billing account id2" } } ListPurchasableOffersResponse { "purchasableOffers": [ { "offer": { "name": "accounts/123/offers/offer id1", }, "sku": { "name": "products/product id/skus/sku id1", }, "plan": { "paymentPlan": "FLEXIBLE", "paymentCycle": { "duration": 1, "periodType": "MONTH" } }, "priceReferenceId": "price reference id 123" } ], } At this point you should have the BillingAccount that will pay for the Entitlement and the PurchasableOffer.
- To create entitlement, follow these steps: With the Customer name, call listPurchasableSkus to retrieve a list of PurchasableSkus ListPurchasableSkusRequest { "customer": "accounts/123/customers/abc", "createEntitlementPurchase": { "product": "products/-" } } ListPurchasableSkusResponse { "purchasableSkus": [ { "sku": { "name": "products/product id/skus/sku id1", "product": { "name": "products/product id", } } }, { "sku": { "name": "products/product id/skus/sku id2", "product": { "name": "products/product id", }, } } ] } With the selected PurchasableSku, use the queryEligibleBillingAccounts method to find a set of Google Workspace BillingAccount that can be used to pay for the entitlement.
- QueryEligibleBillingAccountsRequest { "customer" : "accounts/123/customers/abc" , "skus" : [ "products/product id/skus/voice sku id1" , "products/product id/skus/google workspace sku id2" , "google workspace chrome sku id3" ] } QueryEligibleBillingAccountsResponse { "skuPurchaseGroups" : [ { "skus" : [ "products/product id/skus/voice sku id1" ], "billingAccountPurchaseInfos" : [ { "billingAccount" : { "name" : "accounts/123/billingAccounts/voice billing account id1" , "displayName" : "Google Workspace Voice USD US 1" , "currencyCode" : "USD" , "regionCode" : "US" } } ] }, { "skus" : [ "products/product id/skus/google workspace sku id2" , "google workspace chrome sku id3" ], "billingAccountPurchaseInfos" : [ { "billingAccount" : { "name" : "accounts/123/billingAccounts/gw billing account id1" , "displayName" : "Google Workspace USD US 1" , "currencyCode" : "USD" , "regionCode" : "US" } }, { "billingAccount" : { "name" : "accounts/123/billingAccounts/gw billing account id2" , "displayName" : "Google Workspace CAD CA 1" , "currencyCode" : "CAD" , "regionCode" : "CA" } } ] } ] } ``` For each TransferableSku and BillingAccount pairs, use the listTransferableOffers method to find available TransferableOffers .
- QueryEligibleBillingAccountsRequest { "customer" : "accounts/123/customers/abc" , "skus" : [ "products/product id/skus/sku id1" ] } QueryEligibleBillingAccountsResponse { "skuPurchaseGroups" : [ { "skus" : [ "products/product id/skus/sku id1" ], "billingAccountPurchaseInfos" : [ { "billingAccount" : { "name" : "accounts/123/billingAccounts/billing account id1" , "displayName" : "Google Workspace USD US 1" , "currencyCode" : "USD" , "regionCode" : "US" } }, { "billingAccount" : { "name" : "accounts/123/billingAccounts/billing account id2" , "displayName" : "Google Workspace CAD CA 1" , "currencyCode" : "CAD" , "regionCode" : "CA" } } ] } ] } With the Entitlement and BillingAccount, use the listPurchasableOffers method to find any PurchasableOffer.

### Cloud Channel API \_|\_ Channel Services \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/channel/docs/reference/rpc](https://docs.cloud.google.com/channel/docs/reference/rpc)
- Source ID: `site-docs-root`
- Final score: 53
- Re-rank relevance: N/A

Evidence snippets:
- ListCustomers List Customer s.
- ListCustomers List Customer s.
- RunReportJob (deprecated) Begins generation of data for a given report. google.cloud.channel.v1alpha1.CloudChannelService Methods ActivateEntitlement Activates a previously suspended entitlement.
- RunReportJob (deprecated) Begins generation of data for a given report. google.cloud.channel.v1.CloudChannelService Methods ActivateEntitlement Activates a previously suspended entitlement.

