---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T11:56:59.878Z"
product_name: "Channel Services"
product_slug: "channel-services"
feature_name: "LookupOffer method"
feature_slug: "lookupoffer-method"
latest_feature_date: "2021-03-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/channel/docs/guides/manage-entitlements"
  - "https://docs.cloud.google.com/channel/docs/reference/rest"
  - "https://docs.cloud.google.com/channel/docs/reference/rpc"
keywords:
  - "lookupoffer"
  - "entitlement"
  - "associated"
  - "retrieve"
  - "v1alpha1"
  - "offer"
  - "method"
  - "adds"
---

# LookupOffer method

Product: Channel Services
Coverage: MEDIUM

## Step 02 Summary

Adds the LookupOffer API method for v1alpha1 to retrieve the Offer associated with an entitlement, including pricing details for expired offers and special sales proposals.

## Extended Definition

Adds the LookupOffer API method for v1alpha1 to retrieve the Offer associated with an entitlement, including pricing details for expired offers and special sales proposals.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/channel/docs/guides/manage-entitlements](https://docs.cloud.google.com/channel/docs/guides/manage-entitlements)
- [https://docs.cloud.google.com/channel/docs/reference/rest](https://docs.cloud.google.com/channel/docs/reference/rest)
- [https://docs.cloud.google.com/channel/docs/reference/rpc](https://docs.cloud.google.com/channel/docs/reference/rpc)

## Supporting Pages

### "Manage Google Workspace and Google Chrome entitlements \_|\_ Channel Services\

- URL: [https://docs.cloud.google.com/channel/docs/guides/manage-entitlements](https://docs.cloud.google.com/channel/docs/guides/manage-entitlements)
- Source ID: `site-docs-reference`
- Final score: 164
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- LookupOfferRequest { "entitlement": "accounts/123/customers/abc/entitlements/entitlement id1" } LookupOffer respones { "name": "accounts/123/offers/offer id1", "sku": { "name": "products/product id/skus/sku id1", } } With the Customer and Sku, use the queryEligibleBillingAccounts method to find a set of BillingAccount that can be used to pay for this Entitlement.
- QueryEligibleBillingAccountsRequest { "customer" : "accounts/123/customers/abc" , "skus" : [ "products/product id/skus/sku id1" ] } QueryEligibleBillingAccountsResponse { "skuPurchaseGroups" : [ { "skus" : [ "products/product id/skus/sku id1" ], "billingAccountPurchaseInfos" : [ { "billingAccount" : { "name" : "accounts/123/billingAccounts/billing account id1" , "displayName" : "Google Workspace USD US 1" , "currencyCode" : "USD" , "regionCode" : "US" } }, { "billingAccount" : { "name" : "accounts/123/billingAccounts/billing account id2" , "displayName" : "Google Workspace CAD CA 1" , "currencyCode" : "CAD" , "regionCode" : "CA" } } ] } ] } With the selected PurchasableSku and BillingAccount, use the listPurchasableOffers method to find the available PurchasableOffer ListPurchasableOffersRequest { "customer": "accounts/123/customers/abc", "createEntitlementPurchase": { "sku": "products/product id/skus/sku id1", "billingAccount": "accounts/123/billingAccounts/billing account id2" } } ListPurchasableOffersResponse { "purchasableOffers": [ { "offer": { "name": "accounts/123/offers/offer id1", }, "sku": { "name": "products/product id/skus/sku id1", }, "plan": { "paymentPlan": "FLEXIBLE", "paymentCycle": { "duration": 1, "periodType": "MONTH" } }, "priceReferenceId": "price reference id 123" } ], } At this point you should have the BillingAccount that will pay for the Entitlement and the PurchasableOffer.
- QueryEligibleBillingAccountsRequest { "customer" : "accounts/123/customers/abc" , "skus" : [ "products/product id/skus/sku id1" ] } QueryEligibleBillingAccountsResponse { "skuPurchaseGroups" : [ { "skus" : [ "products/product id/skus/sku id1" ], "billingAccountPurchaseInfos" : [ { "billingAccount" : { "name" : "accounts/123/billingAccounts/billing account id1" , "displayName" : "Google Workspace USD US 1" , "currencyCode" : "USD" , "regionCode" : "US" } }, { "billingAccount" : { "name" : "accounts/123/billingAccounts/billing account id2" , "displayName" : "Google Workspace CAD CA 1" , "currencyCode" : "CAD" , "regionCode" : "CA" } } ] } ] } With the Entitlement and BillingAccount, use the listPurchasableOffers method to find any PurchasableOffer.
- To create entitlement, follow these steps: With the Customer name, call listPurchasableSkus to retrieve a list of PurchasableSkus ListPurchasableSkusRequest { "customer": "accounts/123/customers/abc", "createEntitlementPurchase": { "product": "products/-" } } ListPurchasableSkusResponse { "purchasableSkus": [ { "sku": { "name": "products/product id/skus/sku id1", "product": { "name": "products/product id", } } }, { "sku": { "name": "products/product id/skus/sku id2", "product": { "name": "products/product id", }, } } ] } With the selected PurchasableSku, use the queryEligibleBillingAccounts method to find a set of Google Workspace BillingAccount that can be used to pay for the entitlement.

### Cloud Channel API \_|\_ Channel Services \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/channel/docs/reference/rest](https://docs.cloud.google.com/channel/docs/reference/rest)
- Source ID: `site-api-reference`
- Final score: 158
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- REST Resource: v1alpha1.accounts.customers.entitlements Methods activate POST /v1alpha1/{name=accounts/ /customers/ /entitlements/ }:activate Activates a previously suspended entitlement. assignChannelPartner POST /v1alpha1/{name=accounts/ /customers/ /entitlements/ }:assignChannelPartner Assigns a channel partner to an Entitlement resource. cancel POST /v1alpha1/{name=accounts/ /customers/ /entitlements/ }:cancel Cancels a previously fulfilled entitlement. changeOffer POST /v1alpha1/{name=accounts/ /customers/ /entitlements/ }:changeOffer Updates the Offer for an existing customer entitlement. changeParameters POST /v1alpha1/{name=accounts/ /customers/ /entitlements/ }:changeParameters Change parameters of the entitlement. changePlan (deprecated) POST /v1alpha1/{name=accounts/ /customers/ /entitlements/ }:changePlan Updates the plan for an existing customer entitlement. changeQuantity (deprecated) POST /v1alpha1/{name=accounts/ /customers/ /entitlements/ }:changeQuantity Updates the quantity for existing seat-based entitlements. changeRenewalSettings POST /v1alpha1/{name=accounts/ /customers/ /entitlements/ }:changeRenewalSettings Updates the renewal settings for an existing customer entitlement. changeSku (deprecated) POST /v1alpha1/{name=accounts/ /customers/ /entitlements/ }:changeSku Updates the SKU for an existing customer entitlement. create POST /v1alpha1/{parent=accounts/ /customers/ }/entitlements Creates an entitlement for a customer. get GET /v1alpha1/{name=accounts/ /customers/ /entitlements/ } Returns the requested Entitlement resource. list GET /v1alpha1/{parent=accounts/ /customers/ }/entitlements Lists Entitlement s belonging to a customer. listEntitlementChanges GET /v1alpha1/{parent=accounts/ /customers/ /entitlements/ }:listEntitlementChanges List entitlement history. lookupOffer GET /v1alpha1/{entitlement=accounts/ /customers/ /entitlements/ }:lookupOffer Returns the requested Offer resource. startPaidService POST /v1alpha1/{name=accounts/ /customers/ /entitlements/ }:startPaidService Starts paid service for a trial entitlement. suspend POST /v1alpha1/{name=accounts/ /customers/ /entitlements/ }:suspend Suspends a previously fulfilled entitlement.
- REST Resource: v1alpha1.accounts.customers Methods create POST /v1alpha1/{parent=accounts/ }/customers Creates a new Customer resource under the reseller or distributor account. delete DELETE /v1alpha1/{name=accounts/ /customers/ } Deletes the given Customer permanently. get GET /v1alpha1/{name=accounts/ /customers/ } Returns the requested Customer resource. import POST /v1alpha1/{parent=accounts/ }/customers:import Imports a Customer from the Cloud Identity associated with the provided Cloud Identity ID or domain before a TransferEntitlements call. list GET /v1alpha1/{parent=accounts/ }/customers List Customer s. listPurchasableOffers GET /v1alpha1/{customer=accounts/ /customers/ }:listPurchasableOffers Lists the following: Offers that you can purchase for a customer. listPurchasableSkus GET /v1alpha1/{customer=accounts/ /customers/ }:listPurchasableSkus Lists the following: SKUs that you can purchase for a customer SKUs that you can upgrade or downgrade for an entitlement. patch PATCH /v1alpha1/{customer.name=accounts/ /customers/ } Updates an existing Customer resource for the reseller or distributor. provisionCloudIdentity POST /v1alpha1/{customer=accounts/ /customers/ }:provisionCloudIdentity Creates a Cloud Identity for the given customer using the customer's information, or the information provided here. queryEligibleBillingAccounts GET /v1alpha1/{customer=accounts/ /customers/ }:queryEligibleBillingAccounts Lists the billing accounts that are eligible to purchase particular SKUs for a given customer. transferEntitlements POST /v1alpha1/{parent=accounts/ /customers/ }:transferEntitlements Transfers customer entitlements to new reseller. transferEntitlementsToGoogle POST /v1alpha1/{parent=accounts/ /customers/ }:transferEntitlementsToGoogle Transfers customer entitlements from their current reseller to Google.
- REST Resource: v1.accounts.customers Methods create POST /v1/{parent=accounts/ }/customers Creates a new Customer resource under the reseller or distributor account. delete DELETE /v1/{name=accounts/ /customers/ } Deletes the given Customer permanently. get GET /v1/{name=accounts/ /customers/ } Returns the requested Customer resource. import POST /v1/{parent=accounts/ }/customers:import Imports a Customer from the Cloud Identity associated with the provided Cloud Identity ID or domain before a TransferEntitlements call. list GET /v1/{parent=accounts/ }/customers List Customer s. listPurchasableOffers GET /v1/{customer=accounts/ /customers/ }:listPurchasableOffers Lists the following: Offers that you can purchase for a customer. listPurchasableSkus GET /v1/{customer=accounts/ /customers/ }:listPurchasableSkus Lists the following: SKUs that you can purchase for a customer SKUs that you can upgrade or downgrade for an entitlement. patch PATCH /v1/{customer.name=accounts/ /customers/ } Updates an existing Customer resource for the reseller or distributor. provisionCloudIdentity POST /v1/{customer=accounts/ /customers/ }:provisionCloudIdentity Creates a Cloud Identity for the given customer using the customer's information, or the information provided here. queryEligibleBillingAccounts GET /v1/{customer=accounts/ /customers/ }:queryEligibleBillingAccounts Lists the billing accounts that are eligible to purchase particular SKUs for a given customer. transferEntitlements POST /v1/{parent=accounts/ /customers/ }:transferEntitlements Transfers customer entitlements to new reseller. transferEntitlementsToGoogle POST /v1/{parent=accounts/ /customers/ }:transferEntitlementsToGoogle Transfers customer entitlements from their current reseller to Google.
- REST Resource: v1.accounts.customers.entitlements Methods activate POST /v1/{name=accounts/ /customers/ /entitlements/ }:activate Activates a previously suspended entitlement. cancel POST /v1/{name=accounts/ /customers/ /entitlements/ }:cancel Cancels a previously fulfilled entitlement. changeOffer POST /v1/{name=accounts/ /customers/ /entitlements/ }:changeOffer Updates the Offer for an existing customer entitlement. changeParameters POST /v1/{name=accounts/ /customers/ /entitlements/ }:changeParameters Change parameters of the entitlement. changeRenewalSettings POST /v1/{name=accounts/ /customers/ /entitlements/ }:changeRenewalSettings Updates the renewal settings for an existing customer entitlement. create POST /v1/{parent=accounts/ /customers/ }/entitlements Creates an entitlement for a customer. get GET /v1/{name=accounts/ /customers/ /entitlements/ } Returns the requested Entitlement resource. list GET /v1/{parent=accounts/ /customers/ }/entitlements Lists Entitlement s belonging to a customer. listEntitlementChanges GET /v1/{parent=accounts/ /customers/ /entitlements/ }:listEntitlementChanges List entitlement history. lookupOffer GET /v1/{entitlement=accounts/ /customers/ /entitlements/ }:lookupOffer Returns the requested Offer resource. startPaidService POST /v1/{name=accounts/ /customers/ /entitlements/ }:startPaidService Starts paid service for a trial entitlement. suspend POST /v1/{name=accounts/ /customers/ /entitlements/ }:suspend Suspends a previously fulfilled entitlement.

### Cloud Channel API \_|\_ Channel Services \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/channel/docs/reference/rpc](https://docs.cloud.google.com/channel/docs/reference/rpc)
- Source ID: `site-docs-root`
- Final score: 130
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- RunReportJob (deprecated) Begins generation of data for a given report. google.cloud.channel.v1alpha1.CloudChannelService Methods ActivateEntitlement Activates a previously suspended entitlement.
- RunReportJob (deprecated) Begins generation of data for a given report. google.cloud.channel.v1.CloudChannelService Methods ActivateEntitlement Activates a previously suspended entitlement.
- ImportCustomer Imports a Customer from the Cloud Identity associated with the provided Cloud Identity ID or domain before a TransferEntitlements call.
- ImportCustomer Imports a Customer from the Cloud Identity associated with the provided Cloud Identity ID or domain before a TransferEntitlements call.

