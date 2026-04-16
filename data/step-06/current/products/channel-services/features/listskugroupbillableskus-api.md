---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T11:56:59.865Z"
product_name: "Channel Services"
product_slug: "channel-services"
feature_name: "ListSkuGroupBillableSkus API"
feature_slug: "listskugroupbillableskus-api"
latest_feature_date: "2023-06-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/channel/docs/reference/rpc"
  - "https://docs.cloud.google.com/channel/docs/reference/rest"
  - "https://docs.cloud.google.com/channel/docs/rebilling/export-data-to-bigquery"
keywords:
  - "listskugroupbillableskus"
  - "specified"
  - "belong"
  - "public"
  - "list"
  - "skus"
  - "introduces"
---

# ListSkuGroupBillableSkus API

Product: Channel Services
Coverage: MEDIUM

## Step 02 Summary

Introduces the ListSkuGroupBillableSkus public API to list all Google Cloud SKUs that belong to a specified SKU group.

## Extended Definition

Introduces the ListSkuGroupBillableSkus public API to list all Google Cloud SKUs that belong to a specified SKU group.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/channel/docs/reference/rpc](https://docs.cloud.google.com/channel/docs/reference/rpc)
- [https://docs.cloud.google.com/channel/docs/reference/rest](https://docs.cloud.google.com/channel/docs/reference/rest)
- [https://docs.cloud.google.com/channel/docs/rebilling/export-data-to-bigquery](https://docs.cloud.google.com/channel/docs/rebilling/export-data-to-bigquery)

## Supporting Pages

### Cloud Channel API \_|\_ Channel Services \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/channel/docs/reference/rpc](https://docs.cloud.google.com/channel/docs/reference/rpc)
- Source ID: `site-docs-root`
- Final score: 102
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- ListSkuGroupBillableSkus Lists the Billable SKUs in a given SKU group.
- ListSkuGroupBillableSkus Lists the Billable SKUs in a given SKU group.
- ListPurchasableSkus Lists the following: SKUs that you can purchase for a customer SKUs that you can upgrade or downgrade for an entitlement.
- ListPurchasableSkus Lists the following: SKUs that you can purchase for a customer SKUs that you can upgrade or downgrade for an entitlement.

### Cloud Channel API \_|\_ Channel Services \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/channel/docs/reference/rest](https://docs.cloud.google.com/channel/docs/reference/rest)
- Source ID: `site-api-reference`
- Final score: 85
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- REST Resource: v1alpha1.accounts.customers.entitlements Methods activate POST /v1alpha1/{name=accounts/ /customers/ /entitlements/ }:activate Activates a previously suspended entitlement. assignChannelPartner POST /v1alpha1/{name=accounts/ /customers/ /entitlements/ }:assignChannelPartner Assigns a channel partner to an Entitlement resource. cancel POST /v1alpha1/{name=accounts/ /customers/ /entitlements/ }:cancel Cancels a previously fulfilled entitlement. changeOffer POST /v1alpha1/{name=accounts/ /customers/ /entitlements/ }:changeOffer Updates the Offer for an existing customer entitlement. changeParameters POST /v1alpha1/{name=accounts/ /customers/ /entitlements/ }:changeParameters Change parameters of the entitlement. changePlan (deprecated) POST /v1alpha1/{name=accounts/ /customers/ /entitlements/ }:changePlan Updates the plan for an existing customer entitlement. changeQuantity (deprecated) POST /v1alpha1/{name=accounts/ /customers/ /entitlements/ }:changeQuantity Updates the quantity for existing seat-based entitlements. changeRenewalSettings POST /v1alpha1/{name=accounts/ /customers/ /entitlements/ }:changeRenewalSettings Updates the renewal settings for an existing customer entitlement. changeSku (deprecated) POST /v1alpha1/{name=accounts/ /customers/ /entitlements/ }:changeSku Updates the SKU for an existing customer entitlement. create POST /v1alpha1/{parent=accounts/ /customers/ }/entitlements Creates an entitlement for a customer. get GET /v1alpha1/{name=accounts/ /customers/ /entitlements/ } Returns the requested Entitlement resource. list GET /v1alpha1/{parent=accounts/ /customers/ }/entitlements Lists Entitlement s belonging to a customer. listEntitlementChanges GET /v1alpha1/{parent=accounts/ /customers/ /entitlements/ }:listEntitlementChanges List entitlement history. lookupOffer GET /v1alpha1/{entitlement=accounts/ /customers/ /entitlements/ }:lookupOffer Returns the requested Offer resource. startPaidService POST /v1alpha1/{name=accounts/ /customers/ /entitlements/ }:startPaidService Starts paid service for a trial entitlement. suspend POST /v1alpha1/{name=accounts/ /customers/ /entitlements/ }:suspend Suspends a previously fulfilled entitlement.
- REST Resource: v1alpha1.accounts.customers Methods create POST /v1alpha1/{parent=accounts/ }/customers Creates a new Customer resource under the reseller or distributor account. delete DELETE /v1alpha1/{name=accounts/ /customers/ } Deletes the given Customer permanently. get GET /v1alpha1/{name=accounts/ /customers/ } Returns the requested Customer resource. import POST /v1alpha1/{parent=accounts/ }/customers:import Imports a Customer from the Cloud Identity associated with the provided Cloud Identity ID or domain before a TransferEntitlements call. list GET /v1alpha1/{parent=accounts/ }/customers List Customer s. listPurchasableOffers GET /v1alpha1/{customer=accounts/ /customers/ }:listPurchasableOffers Lists the following: Offers that you can purchase for a customer. listPurchasableSkus GET /v1alpha1/{customer=accounts/ /customers/ }:listPurchasableSkus Lists the following: SKUs that you can purchase for a customer SKUs that you can upgrade or downgrade for an entitlement. patch PATCH /v1alpha1/{customer.name=accounts/ /customers/ } Updates an existing Customer resource for the reseller or distributor. provisionCloudIdentity POST /v1alpha1/{customer=accounts/ /customers/ }:provisionCloudIdentity Creates a Cloud Identity for the given customer using the customer's information, or the information provided here. queryEligibleBillingAccounts GET /v1alpha1/{customer=accounts/ /customers/ }:queryEligibleBillingAccounts Lists the billing accounts that are eligible to purchase particular SKUs for a given customer. transferEntitlements POST /v1alpha1/{parent=accounts/ /customers/ }:transferEntitlements Transfers customer entitlements to new reseller. transferEntitlementsToGoogle POST /v1alpha1/{parent=accounts/ /customers/ }:transferEntitlementsToGoogle Transfers customer entitlements from their current reseller to Google.
- REST Resource: v1.accounts.customers Methods create POST /v1/{parent=accounts/ }/customers Creates a new Customer resource under the reseller or distributor account. delete DELETE /v1/{name=accounts/ /customers/ } Deletes the given Customer permanently. get GET /v1/{name=accounts/ /customers/ } Returns the requested Customer resource. import POST /v1/{parent=accounts/ }/customers:import Imports a Customer from the Cloud Identity associated with the provided Cloud Identity ID or domain before a TransferEntitlements call. list GET /v1/{parent=accounts/ }/customers List Customer s. listPurchasableOffers GET /v1/{customer=accounts/ /customers/ }:listPurchasableOffers Lists the following: Offers that you can purchase for a customer. listPurchasableSkus GET /v1/{customer=accounts/ /customers/ }:listPurchasableSkus Lists the following: SKUs that you can purchase for a customer SKUs that you can upgrade or downgrade for an entitlement. patch PATCH /v1/{customer.name=accounts/ /customers/ } Updates an existing Customer resource for the reseller or distributor. provisionCloudIdentity POST /v1/{customer=accounts/ /customers/ }:provisionCloudIdentity Creates a Cloud Identity for the given customer using the customer's information, or the information provided here. queryEligibleBillingAccounts GET /v1/{customer=accounts/ /customers/ }:queryEligibleBillingAccounts Lists the billing accounts that are eligible to purchase particular SKUs for a given customer. transferEntitlements POST /v1/{parent=accounts/ /customers/ }:transferEntitlements Transfers customer entitlements to new reseller. transferEntitlementsToGoogle POST /v1/{parent=accounts/ /customers/ }:transferEntitlementsToGoogle Transfers customer entitlements from their current reseller to Google.
- This service has the following service endpoint and all URIs below are relative to this service endpoint: https://cloudchannel.googleapis.com REST Resource: v1alpha1.accounts Methods checkCloudIdentityAccountsExist POST /v1alpha1/{parent=accounts/ }:checkCloudIdentityAccountsExist Confirms the existence of Cloud Identity accounts based on the domain and if the Cloud Identity accounts are owned by the reseller. listProvisionableCloudIdentityTypes POST /v1alpha1/{parent=accounts/ }:listProvisionableCloudIdentityTypes Returns the Google Workspace customer types you can create for the given domain, and shows if this requires a transfer. listSubscribers GET /v1alpha1/{account=accounts/ }:listSubscribers Lists service accounts with subscriber privileges on the Pub/Sub topic created for this Channel Services account or integrator. listTransferableOffers POST /v1alpha1/{parent=accounts/ }:listTransferableOffers List TransferableOffer s of a customer based on Cloud Identity ID or Customer Name in the request. listTransferableSkus POST /v1alpha1/{parent=accounts/ }:listTransferableSkus List TransferableSku s of a customer based on the Cloud Identity ID or Customer Name in the request. register POST /v1alpha1/{account=accounts/ }:register Registers a service account with subscriber privileges on the Pub/Sub topic for this Channel Services account or integrator. unregister POST /v1alpha1/{account=accounts/ }:unregister Unregisters a service account with subscriber privileges on the Pub/Sub topic created for this Channel Services account or integrator.

### Export Channel Services data to BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/channel/docs/rebilling/export-data-to-bigquery](https://docs.cloud.google.com/channel/docs/rebilling/export-data-to-bigquery)
- Source ID: `site-docs-reference`
- Final score: 73
- Re-rank relevance: N/A

Evidence snippets:
- The following fields don't apply to Google Workspace exports: project labels resource credits adjustmentsInfo customer repricing config name channel partner repricing config name tags price.effective price price.tier start amount price.list price price.effective price default price.list price consumption model transaction type seller name consumption model Columns not applicable to Google Workspace Consumptive SKUs When a column or field doesn't apply to a Product Family, the exported data for this product family contains null in this field.
- Note: For Google Cloud, the first full month of data with price fields is February 2024. cost at effective price default Numeric Cost per the default consumption model inclusive of any negotiated discounts reflected in the custom pricing in the contract linked to your Cloud Billing account (if applicable). cost at list consumption model Numeric Cost per the applicable consumption model before any negotiated discounts reflected in the custom pricing in the contract linked to your Cloud Billing account (if applicable). consumption model Struct Fields that describe the applicable consumption model . consumption model.id String The ID of the consumption model . consumption model.description String The description of the consumption model .
- Uses the format: accounts/{account}/channelPartnerLinks/{channelPartner} . channel partner cost Numeric (Distributors only) The cost to the channel partner, identified by channel partner name , after applying an existing ChannelPartnerRepricingConfig . customer name String The resource name of the reseller's customer who consumed this usage in the format accounts/{account}/customers/{customer} customer cost Numeric The cost to the reseller's customer identified by the customer name column, after applying the CustomerRepricingConfig , if one exists. cost at list Numeric Cost at list price per the default consumption model . customer repricing config name String The resource name of the Cloud Channel API CustomerRepricingConfig .
- The following columns or fields don't apply to offline order billing exports: project labels system labels location resource credits entitlement name channel partner name channel partner cost customer name customer cost cost at list customer repricing config name channel partner repricing config name tags price.effective price price.tier start amount price.list price price.effective price default price.list price consumption model transaction type seller name consumption model Other notes about Google Workspace export There are several special behaviors with Google Workspace exports: Google Workspace data doesn't contain the reseller's own usage.

