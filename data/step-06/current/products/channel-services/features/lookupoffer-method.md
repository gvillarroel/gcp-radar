---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T19:19:31.157Z"
product_name: "Channel Services"
product_slug: "channel-services"
feature_name: "LookupOffer method"
feature_slug: "lookupoffer-method"
latest_feature_date: "2021-03-09"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/channel/docs/concepts/google-cloud/filter-customers"
  - "https://docs.cloud.google.com/channel/docs/reference/rest"
  - "https://docs.cloud.google.com/channel/docs/release-notes"
keywords:
  - "lookupoffer"
  - "v1alpha1"
  - "method"
  - "adds"
  - "api"
  - "for"
  - "the"
  - "to"
---

# LookupOffer method

Product: Channel Services
Coverage: LOW

## Step 02 Summary

Adds the LookupOffer API method for v1alpha1 to retrieve the Offer associated with an entitlement, including pricing details for expired offers and special sales proposals.

## Extended Definition

Adds the LookupOffer API method for v1alpha1 to retrieve the Offer associated with an entitlement, including pricing details for expired offers and special sales proposals.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/channel/docs/concepts/google-cloud/filter-customers](https://docs.cloud.google.com/channel/docs/concepts/google-cloud/filter-customers)
- [https://docs.cloud.google.com/channel/docs/reference/rest](https://docs.cloud.google.com/channel/docs/reference/rest)
- [https://docs.cloud.google.com/channel/docs/release-notes](https://docs.cloud.google.com/channel/docs/release-notes)

## Supporting Pages

### "Set up a customer filter using the ListCustomers API \_|\_ Channel Services\

- URL: [https://docs.cloud.google.com/channel/docs/concepts/google-cloud/filter-customers](https://docs.cloud.google.com/channel/docs/concepts/google-cloud/filter-customers)
- Source ID: `site-docs-reference`
- Final score: 156
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- If you need to find information about a specific customer, you can use the Cloud Channel API filter parameter through the customers.list method .
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
- Syntax: <domain org display name> : <value> Example: domain : "uw.com " AND org display name : "prefix " Examples of filters with logical operators Cloud Channel API filters support the use of AND and OR logical operators.
- Home Technology areas Channel Services Guides Send feedback Set up a customer filter using the ListCustomers API Stay organized with collections Save and categorize content based on your preferences.

### Cloud Channel API \_|\_ Channel Services \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/channel/docs/reference/rest](https://docs.cloud.google.com/channel/docs/reference/rest)
- Source ID: `site-api-reference`
- Final score: 154
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- REST Resource: v1alpha1.accounts.customers.entitlements Methods activate POST /v1alpha1/{name=accounts/ /customers/ /entitlements/ }:activate Activates a previously suspended entitlement. assignChannelPartner POST /v1alpha1/{name=accounts/ /customers/ /entitlements/ }:assignChannelPartner Assigns a channel partner to an Entitlement resource. cancel POST /v1alpha1/{name=accounts/ /customers/ /entitlements/ }:cancel Cancels a previously fulfilled entitlement. changeOffer POST /v1alpha1/{name=accounts/ /customers/ /entitlements/ }:changeOffer Updates the Offer for an existing customer entitlement. changeParameters POST /v1alpha1/{name=accounts/ /customers/ /entitlements/ }:changeParameters Change parameters of the entitlement. changePlan (deprecated) POST /v1alpha1/{name=accounts/ /customers/ /entitlements/ }:changePlan Updates the plan for an existing customer entitlement. changeQuantity (deprecated) POST /v1alpha1/{name=accounts/ /customers/ /entitlements/ }:changeQuantity Updates the quantity for existing seat-based entitlements. changeRenewalSettings POST /v1alpha1/{name=accounts/ /customers/ /entitlements/ }:changeRenewalSettings Updates the renewal settings for an existing customer entitlement. changeSku (deprecated) POST /v1alpha1/{name=accounts/ /customers/ /entitlements/ }:changeSku Updates the SKU for an existing customer entitlement. create POST /v1alpha1/{parent=accounts/ /customers/ }/entitlements Creates an entitlement for a customer. get GET /v1alpha1/{name=accounts/ /customers/ /entitlements/ } Returns the requested Entitlement resource. list GET /v1alpha1/{parent=accounts/ /customers/ }/entitlements Lists Entitlement s belonging to a customer. listEntitlementChanges GET /v1alpha1/{parent=accounts/ /customers/ /entitlements/ }:listEntitlementChanges List entitlement history. lookupOffer GET /v1alpha1/{entitlement=accounts/ /customers/ /entitlements/ }:lookupOffer Returns the requested Offer resource. startPaidService POST /v1alpha1/{name=accounts/ /customers/ /entitlements/ }:startPaidService Starts paid service for a trial entitlement. suspend POST /v1alpha1/{name=accounts/ /customers/ /entitlements/ }:suspend Suspends a previously fulfilled entitlement.
- This service has the following service endpoint and all URIs below are relative to this service endpoint: https://cloudchannel.googleapis.com REST Resource: v1alpha1.accounts Methods checkCloudIdentityAccountsExist POST /v1alpha1/{parent=accounts/ }:checkCloudIdentityAccountsExist Confirms the existence of Cloud Identity accounts based on the domain and if the Cloud Identity accounts are owned by the reseller. listProvisionableCloudIdentityTypes POST /v1alpha1/{parent=accounts/ }:listProvisionableCloudIdentityTypes Returns the Google Workspace customer types you can create for the given domain, and shows if this requires a transfer. listSubscribers GET /v1alpha1/{account=accounts/ }:listSubscribers Lists service accounts with subscriber privileges on the Pub/Sub topic created for this Channel Services account or integrator. listTransferableOffers POST /v1alpha1/{parent=accounts/ }:listTransferableOffers List TransferableOffer s of a customer based on Cloud Identity ID or Customer Name in the request. listTransferableSkus POST /v1alpha1/{parent=accounts/ }:listTransferableSkus List TransferableSku s of a customer based on the Cloud Identity ID or Customer Name in the request. register POST /v1alpha1/{account=accounts/ }:register Registers a service account with subscriber privileges on the Pub/Sub topic for this Channel Services account or integrator. unregister POST /v1alpha1/{account=accounts/ }:unregister Unregisters a service account with subscriber privileges on the Pub/Sub topic created for this Channel Services account or integrator.
- REST Resource: v1alpha1.accounts.customers Methods create POST /v1alpha1/{parent=accounts/ }/customers Creates a new Customer resource under the reseller or distributor account. delete DELETE /v1alpha1/{name=accounts/ /customers/ } Deletes the given Customer permanently. get GET /v1alpha1/{name=accounts/ /customers/ } Returns the requested Customer resource. import POST /v1alpha1/{parent=accounts/ }/customers:import Imports a Customer from the Cloud Identity associated with the provided Cloud Identity ID or domain before a TransferEntitlements call. list GET /v1alpha1/{parent=accounts/ }/customers List Customer s. listPurchasableOffers GET /v1alpha1/{customer=accounts/ /customers/ }:listPurchasableOffers Lists the following: Offers that you can purchase for a customer. listPurchasableSkus GET /v1alpha1/{customer=accounts/ /customers/ }:listPurchasableSkus Lists the following: SKUs that you can purchase for a customer SKUs that you can upgrade or downgrade for an entitlement. patch PATCH /v1alpha1/{customer.name=accounts/ /customers/ } Updates an existing Customer resource for the reseller or distributor. provisionCloudIdentity POST /v1alpha1/{customer=accounts/ /customers/ }:provisionCloudIdentity Creates a Cloud Identity for the given customer using the customer's information, or the information provided here. queryEligibleBillingAccounts GET /v1alpha1/{customer=accounts/ /customers/ }:queryEligibleBillingAccounts Lists the billing accounts that are eligible to purchase particular SKUs for a given customer. transferEntitlements POST /v1alpha1/{parent=accounts/ /customers/ }:transferEntitlements Transfers customer entitlements to new reseller. transferEntitlementsToGoogle POST /v1alpha1/{parent=accounts/ /customers/ }:transferEntitlementsToGoogle Transfers customer entitlements from their current reseller to Google.
- REST Resource: v1.accounts.customers.entitlements Methods activate POST /v1/{name=accounts/ /customers/ /entitlements/ }:activate Activates a previously suspended entitlement. cancel POST /v1/{name=accounts/ /customers/ /entitlements/ }:cancel Cancels a previously fulfilled entitlement. changeOffer POST /v1/{name=accounts/ /customers/ /entitlements/ }:changeOffer Updates the Offer for an existing customer entitlement. changeParameters POST /v1/{name=accounts/ /customers/ /entitlements/ }:changeParameters Change parameters of the entitlement. changeRenewalSettings POST /v1/{name=accounts/ /customers/ /entitlements/ }:changeRenewalSettings Updates the renewal settings for an existing customer entitlement. create POST /v1/{parent=accounts/ /customers/ }/entitlements Creates an entitlement for a customer. get GET /v1/{name=accounts/ /customers/ /entitlements/ } Returns the requested Entitlement resource. list GET /v1/{parent=accounts/ /customers/ }/entitlements Lists Entitlement s belonging to a customer. listEntitlementChanges GET /v1/{parent=accounts/ /customers/ /entitlements/ }:listEntitlementChanges List entitlement history. lookupOffer GET /v1/{entitlement=accounts/ /customers/ /entitlements/ }:lookupOffer Returns the requested Offer resource. startPaidService POST /v1/{name=accounts/ /customers/ /entitlements/ }:startPaidService Starts paid service for a trial entitlement. suspend POST /v1/{name=accounts/ /customers/ /entitlements/ }:suspend Suspends a previously fulfilled entitlement.

### Channel Services release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/channel/docs/release-notes](https://docs.cloud.google.com/channel/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 142
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- September 30, 2022 v1 Feature This release adds the ability to generate reports for Google Cloud billing and Google Voice expense data to the Channel Services API.
- June 21, 2021 v1alpha1 Change Added a new feature for the ImportCustomer API to specify which customer will receive imported Cloud Identity information.
- Get started with using multiple Google Workspace billing accounts Manage your Google Workspace and Google Chrome entitlements May 08, 2023 v1 Change The following fields are now available in the Channel Services API: In the Entitlement resource, the billingAccount field includes the Cloud Billing account that was used to pay for that entitlement.
- For Google Cloud Platform offers, you can use this field to map an offer to the Reseller Billing Account name from Cloud Console. v1 Change In the CheckCloudIdentityAccountsExist method, CloudIdentityAccounts now returns an empty list instead of a 404 error if the domain does not match an existing Cloud Identity.

