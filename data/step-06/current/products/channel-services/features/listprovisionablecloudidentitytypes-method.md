---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T19:19:31.156Z"
product_name: "Channel Services"
product_slug: "channel-services"
feature_name: "ListProvisionableCloudIdentityTypes method"
feature_slug: "listprovisionablecloudidentitytypes-method"
latest_feature_date: "2021-08-02"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/channel/docs/release-notes"
  - "https://docs.cloud.google.com/channel/docs/reference/rest"
  - "https://docs.cloud.google.com/channel/docs/reference/rpc"
keywords:
  - "listprovisionablecloudidentitytypes"
  - "returns"
  - "which"
  - "introduces"
  - "available"
  - "method"
  - "api"
  - "the"
---

# ListProvisionableCloudIdentityTypes method

Product: Channel Services
Coverage: LOW

## Step 02 Summary

Introduces the ListProvisionableCloudIdentityTypes API method, which returns available Google Workspace customer types for a domain and indicates whether they require a transfer.

## Extended Definition

Introduces the ListProvisionableCloudIdentityTypes API method, which returns available Google Workspace customer types for a domain and indicates whether they require a transfer.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/channel/docs/release-notes](https://docs.cloud.google.com/channel/docs/release-notes)
- [https://docs.cloud.google.com/channel/docs/reference/rest](https://docs.cloud.google.com/channel/docs/reference/rest)
- [https://docs.cloud.google.com/channel/docs/reference/rpc](https://docs.cloud.google.com/channel/docs/reference/rpc)

## Supporting Pages

### Channel Services release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/channel/docs/release-notes](https://docs.cloud.google.com/channel/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 120
- Re-rank relevance: N/A

Evidence snippets:
- ListProvisionableCloudIdentityTypes returns the Google Workspace customer types you can create for a given domain, and shows if they require a transfer. v1alpha1 Change Added extra information to clarify which fields are not required for team customers.
- Get started with using multiple Google Workspace billing accounts Manage your Google Workspace and Google Chrome entitlements May 08, 2023 v1 Change The following fields are now available in the Channel Services API: In the Entitlement resource, the billingAccount field includes the Cloud Billing account that was used to pay for that entitlement.
- For Google Cloud Platform offers, you can use this field to map an offer to the Reseller Billing Account name from Cloud Console. v1 Change In the CheckCloudIdentityAccountsExist method, CloudIdentityAccounts now returns an empty list instead of a 404 error if the domain does not match an existing Cloud Identity.
- June 21, 2021 v1alpha1 Change Added a new feature for the ImportCustomer API to specify which customer will receive imported Cloud Identity information.

### Cloud Channel API \_|\_ Channel Services \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/channel/docs/reference/rest](https://docs.cloud.google.com/channel/docs/reference/rest)
- Source ID: `site-api-reference`
- Final score: 104
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- This service has the following service endpoint and all URIs below are relative to this service endpoint: https://cloudchannel.googleapis.com REST Resource: v1alpha1.accounts Methods checkCloudIdentityAccountsExist POST /v1alpha1/{parent=accounts/ }:checkCloudIdentityAccountsExist Confirms the existence of Cloud Identity accounts based on the domain and if the Cloud Identity accounts are owned by the reseller. listProvisionableCloudIdentityTypes POST /v1alpha1/{parent=accounts/ }:listProvisionableCloudIdentityTypes Returns the Google Workspace customer types you can create for the given domain, and shows if this requires a transfer. listSubscribers GET /v1alpha1/{account=accounts/ }:listSubscribers Lists service accounts with subscriber privileges on the Pub/Sub topic created for this Channel Services account or integrator. listTransferableOffers POST /v1alpha1/{parent=accounts/ }:listTransferableOffers List TransferableOffer s of a customer based on Cloud Identity ID or Customer Name in the request. listTransferableSkus POST /v1alpha1/{parent=accounts/ }:listTransferableSkus List TransferableSku s of a customer based on the Cloud Identity ID or Customer Name in the request. register POST /v1alpha1/{account=accounts/ }:register Registers a service account with subscriber privileges on the Pub/Sub topic for this Channel Services account or integrator. unregister POST /v1alpha1/{account=accounts/ }:unregister Unregisters a service account with subscriber privileges on the Pub/Sub topic created for this Channel Services account or integrator.
- REST Resource: v1alpha1.accounts.customers.entitlements Methods activate POST /v1alpha1/{name=accounts/ /customers/ /entitlements/ }:activate Activates a previously suspended entitlement. assignChannelPartner POST /v1alpha1/{name=accounts/ /customers/ /entitlements/ }:assignChannelPartner Assigns a channel partner to an Entitlement resource. cancel POST /v1alpha1/{name=accounts/ /customers/ /entitlements/ }:cancel Cancels a previously fulfilled entitlement. changeOffer POST /v1alpha1/{name=accounts/ /customers/ /entitlements/ }:changeOffer Updates the Offer for an existing customer entitlement. changeParameters POST /v1alpha1/{name=accounts/ /customers/ /entitlements/ }:changeParameters Change parameters of the entitlement. changePlan (deprecated) POST /v1alpha1/{name=accounts/ /customers/ /entitlements/ }:changePlan Updates the plan for an existing customer entitlement. changeQuantity (deprecated) POST /v1alpha1/{name=accounts/ /customers/ /entitlements/ }:changeQuantity Updates the quantity for existing seat-based entitlements. changeRenewalSettings POST /v1alpha1/{name=accounts/ /customers/ /entitlements/ }:changeRenewalSettings Updates the renewal settings for an existing customer entitlement. changeSku (deprecated) POST /v1alpha1/{name=accounts/ /customers/ /entitlements/ }:changeSku Updates the SKU for an existing customer entitlement. create POST /v1alpha1/{parent=accounts/ /customers/ }/entitlements Creates an entitlement for a customer. get GET /v1alpha1/{name=accounts/ /customers/ /entitlements/ } Returns the requested Entitlement resource. list GET /v1alpha1/{parent=accounts/ /customers/ }/entitlements Lists Entitlement s belonging to a customer. listEntitlementChanges GET /v1alpha1/{parent=accounts/ /customers/ /entitlements/ }:listEntitlementChanges List entitlement history. lookupOffer GET /v1alpha1/{entitlement=accounts/ /customers/ /entitlements/ }:lookupOffer Returns the requested Offer resource. startPaidService POST /v1alpha1/{name=accounts/ /customers/ /entitlements/ }:startPaidService Starts paid service for a trial entitlement. suspend POST /v1alpha1/{name=accounts/ /customers/ /entitlements/ }:suspend Suspends a previously fulfilled entitlement.
- REST Resource: v1alpha1.accounts.customers Methods create POST /v1alpha1/{parent=accounts/ }/customers Creates a new Customer resource under the reseller or distributor account. delete DELETE /v1alpha1/{name=accounts/ /customers/ } Deletes the given Customer permanently. get GET /v1alpha1/{name=accounts/ /customers/ } Returns the requested Customer resource. import POST /v1alpha1/{parent=accounts/ }/customers:import Imports a Customer from the Cloud Identity associated with the provided Cloud Identity ID or domain before a TransferEntitlements call. list GET /v1alpha1/{parent=accounts/ }/customers List Customer s. listPurchasableOffers GET /v1alpha1/{customer=accounts/ /customers/ }:listPurchasableOffers Lists the following: Offers that you can purchase for a customer. listPurchasableSkus GET /v1alpha1/{customer=accounts/ /customers/ }:listPurchasableSkus Lists the following: SKUs that you can purchase for a customer SKUs that you can upgrade or downgrade for an entitlement. patch PATCH /v1alpha1/{customer.name=accounts/ /customers/ } Updates an existing Customer resource for the reseller or distributor. provisionCloudIdentity POST /v1alpha1/{customer=accounts/ /customers/ }:provisionCloudIdentity Creates a Cloud Identity for the given customer using the customer's information, or the information provided here. queryEligibleBillingAccounts GET /v1alpha1/{customer=accounts/ /customers/ }:queryEligibleBillingAccounts Lists the billing accounts that are eligible to purchase particular SKUs for a given customer. transferEntitlements POST /v1alpha1/{parent=accounts/ /customers/ }:transferEntitlements Transfers customer entitlements to new reseller. transferEntitlementsToGoogle POST /v1alpha1/{parent=accounts/ /customers/ }:transferEntitlementsToGoogle Transfers customer entitlements from their current reseller to Google.
- REST Resource: v1.accounts.customers Methods create POST /v1/{parent=accounts/ }/customers Creates a new Customer resource under the reseller or distributor account. delete DELETE /v1/{name=accounts/ /customers/ } Deletes the given Customer permanently. get GET /v1/{name=accounts/ /customers/ } Returns the requested Customer resource. import POST /v1/{parent=accounts/ }/customers:import Imports a Customer from the Cloud Identity associated with the provided Cloud Identity ID or domain before a TransferEntitlements call. list GET /v1/{parent=accounts/ }/customers List Customer s. listPurchasableOffers GET /v1/{customer=accounts/ /customers/ }:listPurchasableOffers Lists the following: Offers that you can purchase for a customer. listPurchasableSkus GET /v1/{customer=accounts/ /customers/ }:listPurchasableSkus Lists the following: SKUs that you can purchase for a customer SKUs that you can upgrade or downgrade for an entitlement. patch PATCH /v1/{customer.name=accounts/ /customers/ } Updates an existing Customer resource for the reseller or distributor. provisionCloudIdentity POST /v1/{customer=accounts/ /customers/ }:provisionCloudIdentity Creates a Cloud Identity for the given customer using the customer's information, or the information provided here. queryEligibleBillingAccounts GET /v1/{customer=accounts/ /customers/ }:queryEligibleBillingAccounts Lists the billing accounts that are eligible to purchase particular SKUs for a given customer. transferEntitlements POST /v1/{parent=accounts/ /customers/ }:transferEntitlements Transfers customer entitlements to new reseller. transferEntitlementsToGoogle POST /v1/{parent=accounts/ /customers/ }:transferEntitlementsToGoogle Transfers customer entitlements from their current reseller to Google.

### Cloud Channel API \_|\_ Channel Services \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/channel/docs/reference/rpc](https://docs.cloud.google.com/channel/docs/reference/rpc)
- Source ID: `site-docs-root`
- Final score: 100
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- ListProvisionableCloudIdentityTypes Returns the Google Workspace customer types you can create for the given domain, and shows if this requires a transfer.
- Service: cloudchannel.googleapis.com The Service name cloudchannel.googleapis.com is needed to create RPC client stubs. google.cloud.channel.v1.CloudChannelReportsService This item is deprecated!
- The Cloud Channel API enables Google Cloud partners to have a single unified resale platform and APIs across all of Google Cloud including GCP, Workspace, Maps and Chrome.
- GetChannelPartnerLink Returns the requested ChannelPartnerLink resource.

