---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T19:19:31.154Z"
product_name: "Channel Services"
product_slug: "channel-services"
feature_name: "ImportCustomer Method General Availability"
feature_slug: "importcustomer-method-general-availability"
latest_feature_date: "2021-08-19"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/channel/docs/release-notes"
  - "https://docs.cloud.google.com/channel/docs/guides/manage-entitlements"
  - "https://docs.cloud.google.com/channel/docs/concepts/google-cloud/filter-customers"
keywords:
  - "importcustomer"
  - "generally"
  - "general"
  - "availability"
  - "makes"
  - "available"
  - "method"
  - "the"
---

# ImportCustomer Method General Availability

Product: Channel Services
Coverage: LOW

## Step 02 Summary

Makes the ImportCustomer method generally available in Channel Services.

## Extended Definition

Makes the ImportCustomer method generally available in Channel Services.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/channel/docs/release-notes](https://docs.cloud.google.com/channel/docs/release-notes)
- [https://docs.cloud.google.com/channel/docs/guides/manage-entitlements](https://docs.cloud.google.com/channel/docs/guides/manage-entitlements)
- [https://docs.cloud.google.com/channel/docs/concepts/google-cloud/filter-customers](https://docs.cloud.google.com/channel/docs/concepts/google-cloud/filter-customers)

## Supporting Pages

### Channel Services release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/channel/docs/release-notes](https://docs.cloud.google.com/channel/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 108
- Re-rank relevance: N/A

Evidence snippets:
- August 19, 2021 v1 Feature The ImportCustomer method is now generally available.
- January 05, 2021 v1 Feature The Google Cloud Channel Services API is now Generally available .
- June 13, 2023 v1 Feature Two new Public APIs related to SKU groups now generally available: ListSkuGroups - List of all rebilling supported SKU groups that can be configured in customer or channel partner repricing configs.
- March 08, 2021 v1alpha1 Feature ( v1alpha1 only ) This release includes the new ImportCustomer method.

### "Manage Google Workspace and Google Chrome entitlements \_|\_ Channel Services\

- URL: [https://docs.cloud.google.com/channel/docs/guides/manage-entitlements](https://docs.cloud.google.com/channel/docs/guides/manage-entitlements)
- Source ID: `site-docs-reference`
- Final score: 56
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- QueryEligibleBillingAccountsRequest { "customer" : "accounts/123/customers/abc" , "skus" : [ "products/product id/skus/sku id1" ] } QueryEligibleBillingAccountsResponse { "skuPurchaseGroups" : [ { "skus" : [ "products/product id/skus/sku id1" ], "billingAccountPurchaseInfos" : [ { "billingAccount" : { "name" : "accounts/123/billingAccounts/billing account id1" , "displayName" : "Google Workspace USD US 1" , "currencyCode" : "USD" , "regionCode" : "US" } }, { "billingAccount" : { "name" : "accounts/123/billingAccounts/billing account id2" , "displayName" : "Google Workspace CAD CA 1" , "currencyCode" : "CAD" , "regionCode" : "CA" } } ] } ] } With the selected PurchasableSku and BillingAccount, use the listPurchasableOffers method to find the available PurchasableOffer ListPurchasableOffersRequest { "customer": "accounts/123/customers/abc", "createEntitlementPurchase": { "sku": "products/product id/skus/sku id1", "billingAccount": "accounts/123/billingAccounts/billing account id2" } } ListPurchasableOffersResponse { "purchasableOffers": [ { "offer": { "name": "accounts/123/offers/offer id1", }, "sku": { "name": "products/product id/skus/sku id1", }, "plan": { "paymentPlan": "FLEXIBLE", "paymentCycle": { "duration": 1, "periodType": "MONTH" } }, "priceReferenceId": "price reference id 123" } ], } At this point you should have the BillingAccount that will pay for the Entitlement and the PurchasableOffer.
- QueryEligibleBillingAccountsRequest { "customer" : "accounts/123/customers/abc" , "skus" : [ "products/product id/skus/voice sku id1" , "products/product id/skus/google workspace sku id2" , "google workspace chrome sku id3" ] } QueryEligibleBillingAccountsResponse { "skuPurchaseGroups" : [ { "skus" : [ "products/product id/skus/voice sku id1" ], "billingAccountPurchaseInfos" : [ { "billingAccount" : { "name" : "accounts/123/billingAccounts/voice billing account id1" , "displayName" : "Google Workspace Voice USD US 1" , "currencyCode" : "USD" , "regionCode" : "US" } } ] }, { "skus" : [ "products/product id/skus/google workspace sku id2" , "google workspace chrome sku id3" ], "billingAccountPurchaseInfos" : [ { "billingAccount" : { "name" : "accounts/123/billingAccounts/gw billing account id1" , "displayName" : "Google Workspace USD US 1" , "currencyCode" : "USD" , "regionCode" : "US" } }, { "billingAccount" : { "name" : "accounts/123/billingAccounts/gw billing account id2" , "displayName" : "Google Workspace CAD CA 1" , "currencyCode" : "CAD" , "regionCode" : "CA" } } ] } ] } ``` For each TransferableSku and BillingAccount pairs, use the listTransferableOffers method to find available TransferableOffers .
- QueryEligibleBillingAccountsRequest { "customer" : "accounts/123/customers/abc" , "skus" : [ "products/product id/skus/sku id1" ] } QueryEligibleBillingAccountsResponse { "skuPurchaseGroups" : [ { "skus" : [ "products/product id/skus/sku id1" ], "billingAccountPurchaseInfos" : [ { "billingAccount" : { "name" : "accounts/123/billingAccounts/billing account id1" , "displayName" : "Google Workspace USD US 1" , "currencyCode" : "USD" , "regionCode" : "US" } }, { "billingAccount" : { "name" : "accounts/123/billingAccounts/billing account id2" , "displayName" : "Google Workspace CAD CA 1" , "currencyCode" : "CAD" , "regionCode" : "CA" } } ] } ] } With the Entitlement and BillingAccount, use the listPurchasableOffers method to find any PurchasableOffer.
- To create entitlement, follow these steps: With the Customer name, call listPurchasableSkus to retrieve a list of PurchasableSkus ListPurchasableSkusRequest { "customer": "accounts/123/customers/abc", "createEntitlementPurchase": { "product": "products/-" } } ListPurchasableSkusResponse { "purchasableSkus": [ { "sku": { "name": "products/product id/skus/sku id1", "product": { "name": "products/product id", } } }, { "sku": { "name": "products/product id/skus/sku id2", "product": { "name": "products/product id", }, } } ] } With the selected PurchasableSku, use the queryEligibleBillingAccounts method to find a set of Google Workspace BillingAccount that can be used to pay for the entitlement.

### "Set up a customer filter using the ListCustomers API \_|\_ Channel Services\

- URL: [https://docs.cloud.google.com/channel/docs/concepts/google-cloud/filter-customers](https://docs.cloud.google.com/channel/docs/concepts/google-cloud/filter-customers)
- Source ID: `site-docs-reference`
- Final score: 56
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The following table describes the available fields you can search for, and the methods they support.
- If you need to find information about a specific customer, you can use the Cloud Channel API filter parameter through the customers.list method .
- Available filters Strings for the filter parameter support exact match, or exact match plus prefix filtering.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]

