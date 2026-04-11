---
title: "Cloud Channel API \_|\_ Channel Services \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/channel/docs/reference/rest
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/channel/docs
source_metadata:
  url: https://docs.cloud.google.com/channel/docs/reference/rest
  title: "Cloud Channel API \_|\_ Channel Services \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Technology areas
Channel Services
APIs & Reference
Send feedback
Cloud Channel API
Stay organized with collections
Save and categorize content based on your preferences.
The Cloud Channel API enables Google Cloud partners to have a single unified resale platform and APIs across all of Google Cloud including GCP, Workspace, Maps and Chrome.
REST Resource: v1alpha1.accounts
REST Resource: v1alpha1.accounts.channelPartnerLinks
REST Resource:
v1alpha1.accounts.channelPartnerLinks.channelPartnerRepricingConfigs
REST Resource: v1alpha1.accounts.channelPartnerLinks.customers
REST Resource: v1alpha1.accounts.customers
REST Resource: v1alpha1.accounts.customers.customerRepricingConfigs
REST Resource: v1alpha1.accounts.customers.entitlements
REST Resource: v1alpha1.accounts.offers
REST Resource: v1alpha1.accounts.reportJobs
REST Resource: v1alpha1.accounts.reports
REST Resource: v1alpha1.accounts.skuGroups
REST Resource: v1alpha1.accounts.skuGroups.billableSkus
REST Resource: v1alpha1.integrators
REST Resource: v1alpha1.operations
REST Resource: v1alpha1.opportunities
REST Resource: v1alpha1.products
REST Resource: v1alpha1.products.skus
REST Resource: v1.accounts
REST Resource: v1.accounts.channelPartnerLinks
REST Resource:
v1.accounts.channelPartnerLinks.channelPartnerRepricingConfigs
REST Resource: v1.accounts.channelPartnerLinks.customers
REST Resource: v1.accounts.customers
REST Resource: v1.accounts.customers.customerRepricingConfigs
REST Resource: v1.accounts.customers.entitlements
REST Resource: v1.accounts.offers
REST Resource: v1.accounts.reportJobs
REST Resource: v1.accounts.reports
REST Resource: v1.accounts.skuGroups
REST Resource: v1.accounts.skuGroups.billableSkus
REST Resource: v1.integrators
REST Resource: v1.operations
REST Resource: v1.products
REST Resource: v1.products.skus
Service: cloudchannel.googleapis.com
To call this service, we recommend that you use the Google-provided client libraries . If your application needs to use your own libraries to call this service, use the following information when you make the API requests.
Discovery document
A Discovery Document is a machine-readable specification for describing and consuming REST APIs. It is used to build client libraries, IDE plugins, and other tools that interact with Google APIs. One service may provide multiple discovery documents. This service provides the following discovery documents:
https://cloudchannel.googleapis.com/$discovery/rest?version=v1
https://cloudchannel.googleapis.com/$discovery/rest?version=v1alpha1
Service endpoint
A service endpoint is a base URL that specifies the network address of an API service. One service might have multiple service endpoints. This service has the following service endpoint and all URIs below are relative to this service endpoint:
https://cloudchannel.googleapis.com
REST Resource: v1alpha1.accounts
Methods
checkCloudIdentityAccountsExist
POST /v1alpha1/{parent=accounts/*}:checkCloudIdentityAccountsExist
Confirms the existence of Cloud Identity accounts based on the domain and if the Cloud Identity accounts are owned by the reseller.
listProvisionableCloudIdentityTypes
POST /v1alpha1/{parent=accounts/*}:listProvisionableCloudIdentityTypes
Returns the Google Workspace customer types you can create for the given domain, and shows if this requires a transfer.
listSubscribers
GET /v1alpha1/{account=accounts/*}:listSubscribers
Lists service accounts with subscriber privileges on the Pub/Sub topic created for this Channel Services account or integrator.
listTransferableOffers
POST /v1alpha1/{parent=accounts/*}:listTransferableOffers
List TransferableOffer s of a customer based on Cloud Identity ID or Customer Name in the request.
listTransferableSkus
POST /v1alpha1/{parent=accounts/*}:listTransferableSkus
List TransferableSku s of a customer based on the Cloud Identity ID or Customer Name in the request.
register
POST /v1alpha1/{account=accounts/*}:register
Registers a service account with subscriber privileges on the Pub/Sub topic for this Channel Services account or integrator.
unregister
POST /v1alpha1/{account=accounts/*}:unregister
Unregisters a service account with subscriber privileges on the Pub/Sub topic created for this Channel Services account or integrator.
REST Resource: v1alpha1.accounts.channelPartnerLinks
Methods
create
POST /v1alpha1/{parent=accounts/*}/channelPartnerLinks
Initiates a channel partner link between a distributor and a reseller, or between resellers in an n-tier reseller channel.
get
GET /v1alpha1/{name=accounts/*/channelPartnerLinks/*}
Returns the requested ChannelPartnerLink resource.
list
GET /v1alpha1/{parent=accounts/*}/channelPartnerLinks
List ChannelPartnerLink s belonging to a distributor.
patch
PATCH /v1alpha1/{name=accounts/*/channelPartnerLinks/*}
Updates a channel partner link.
REST Resource: v1alpha1.accounts.channelPartnerLinks.channelPartnerRepricingConfigs
Methods
create
POST /v1alpha1/{parent=accounts/*/channelPartnerLinks/*}/channelPartnerRepricingConfigs
Creates a ChannelPartnerRepricingConfig.
delete
DELETE /v1alpha1/{name=accounts/*/channelPartnerLinks/*/channelPartnerRepricingConfigs/*}
Deletes the given ChannelPartnerRepricingConfig permanently.
get
GET /v1alpha1/{name=accounts/*/channelPartnerLinks/*/channelPartnerRepricingConfigs/*}
Gets information about how a Distributor modifies their bill before sending it to a ChannelPartner.
list
GET /v1alpha1/{parent=accounts/*/channelPartnerLinks/*}/channelPartnerRepricingConfigs
Lists information about how a Reseller modifies their bill before sending it to a ChannelPartner.
patch
PATCH /v1alpha1/{channelPartnerRepricingConfig.name=accounts/*/channelPartnerLinks/*/channelPartnerRepricingConfigs/*}
Updates a ChannelPartnerRepricingConfig.
REST Resource: v1alpha1.accounts.channelPartnerLinks.customers
Methods
create
POST /v1alpha1/{parent=accounts/*/channelPartnerLinks/*}/customers
Creates a new Customer resource under the reseller or distributor account.
delete
DELETE /v1alpha1/{name=accounts/*/channelPartnerLinks/*/customers/*}
Deletes the given Customer permanently.
get
GET /v1alpha1/{name=accounts/*/channelPartnerLinks/*/customers/*}
Returns the requested Customer resource.
import
POST /v1alpha1/{parent=accounts/*/channelPartnerLinks/*}/customers:import
Imports a Customer from the Cloud Identity associated with the provided Cloud Identity ID or domain before a TransferEntitlements call.
list
GET /v1alpha1/{parent=accounts/*/channelPartnerLinks/*}/customers
List Customer s.
patch
PATCH /v1alpha1/{customer.name=accounts/*/channelPartnerLinks/*/customers/*}
Updates an existing Customer resource for the reseller or distributor.
REST Resource: v1alpha1.accounts.customers
Methods
create
POST /v1alpha1/{parent=accounts/*}/customers
Creates a new Customer resource under the reseller or distributor account.
delete
DELETE /v1alpha1/{name=accounts/*/customers/*}
Deletes the given Customer permanently.
get
GET /v1alpha1/{name=accounts/*/customers/*}
Returns the requested Customer resource.
import
POST /v1alpha1/{parent=accounts/*}/customers:import
Imports a Customer from the Cloud Identity associated with the provided Cloud Identity ID or domain before a TransferEntitlements call.
list
GET /v1alpha1/{parent=accounts/*}/customers
List Customer s.
listPurchasableOffers
GET /v1alpha1/{customer=accounts/*/customers/*}:listPurchasableOffers
Lists the following:
Offers that you can purchase for a customer.
listPurchasableSkus
GET /v1alpha1/{customer=accounts/*/customers/*}:listPurchasableSkus
Lists the following:
SKUs that you can purchase for a customer
SKUs that you can upgrade or downgrade for an entitlement.
patch
PATCH /v1alpha1/{customer.name=accounts/*/customers/*}
Updates an existing Customer resource for the reseller or distributor.
provisionCloudIdentity
POST /v1alpha1/{customer=accounts/*/customers/*}:provisionCloudIdentity
Creates a Cloud Identity for the given customer using the customer's information, or the information provided here.
queryEligibleBillingAccounts
GET /v1alpha1/{customer=accounts/*/customers/*}:queryEligibleBillingAccounts
Lists the billing accounts that are eligible to purchase particular SKUs for a given customer.
transferEntitlements
POST /v1alpha1/{parent=accounts/*/customers/*}:transferEntitlements
Transfers customer entitlements to new reseller.
transferEntitlementsToGoogle
POST /v1alpha1/{parent=accounts/*/customers/*}:transferEntitlementsToGoogle
Transfers customer entitlements from their current reseller to Google.
REST Resource: v1alpha1.accounts.customers.customerRepricingConfigs
Methods
create
POST /v1alpha1/{parent=accounts/*/customers/*}/customerRepricingConfigs
Creates a CustomerRepricingConfig.
delete
DELETE /v1alpha1/{name=accounts/*/customers/*/customerRepricingConfigs/*}
Deletes the given CustomerRepricingConfig permanently.
get
GET /v1alpha1/{name=accounts/*/customers/*/customerRepricingConfigs/*}
Gets information about how a Reseller modifies their bill before sending it to a Customer.
list
GET /v1alpha1/{parent=accounts/*/customers/*}/customerRepricingConfigs
Lists information about how a Reseller modifies their bill before sending it to a Customer.
patch
PATCH /v1alpha1/{customerRepricingConfig.name=accounts/*/customers/*/customerRepricingConfigs/*}
Updates a CustomerRepricingConfig.
REST Resource: v1alpha1.accounts.customers.entitlements
Methods
activate
POST /v1alpha1/{name=accounts/*/customers/*/entitlements/*}:activate
Activates a previously suspended entitlement.
assignChannelPartner
POST /v1alpha1/{name=accounts/*/customers/*/entitlements/*}:assignChannelPartner
Assigns a channel partner to an Entitlement resource.
cancel
POST /v1alpha1/{name=accounts/*/customers/*/entitlements/*}:cancel
Cancels a previously fulfilled entitlement.
changeOffer
POST /v1alpha1/{name=accounts/*/customers/*/entitlements/*}:changeOffer
Updates the Offer for an existing customer entitlement.
changeParameters
POST /v1alpha1/{name=accounts/*/customers/*/entitlements/*}:changeParameters
Change parameters of the entitlement.
changePlan (deprecated)
POST /v1alpha1/{name=accounts/*/customers/*/entitlements/*}:changePlan
Updates the plan for an existing customer entitlement.
changeQuantity (deprecated)
POST /v1alpha1/{name=accounts/*/customers/*/entitlements/*}:changeQuantity
Updates the quantity for existing seat-based entitlements.
changeRenewalSettings
POST /v1alpha1/{name=accounts/*/customers/*/entitlements/*}:changeRenewalSettings
Updates the renewal settings for an existing customer entitlement.
changeSku (deprecated)
POST /v1alpha1/{name=accounts/*/customers/*/entitlements/*}:changeSku
Updates the SKU for an existing customer entitlement.
create
POST /v1alpha1/{parent=accounts/*/customers/*}/entitlements
Creates an entitlement for a customer.
get
GET /v1alpha1/{name=accounts/*/customers/*/entitlements/*}
Returns the requested Entitlement resource.
list
GET /v1alpha1/{parent=accounts/*/customers/*}/entitlements
Lists Entitlement s belonging to a customer.
listEntitlementChanges
GET /v1alpha1/{parent=accounts/*/customers/*/entitlements/*}:listEntitlementChanges
List entitlement history.
lookupOffer
GET /v1alpha1/{entitlement=accounts/*/customers/*/entitlements/*}:lookupOffer
Returns the requested Offer resource.
startPaidService
POST /v1alpha1/{name=accounts/*/customers/*/entitlements/*}:startPaidService
Starts paid service for a trial entitlement.
suspend
POST /v1alpha1/{name=accounts/*/customers/*/entitlements/*}:suspend
Suspends a previously fulfilled entitlement.
REST Resource: v1alpha1.accounts.offers
Methods
list
GET /v1alpha1/{parent=accounts/*}/offers
Lists the Offers the reseller can sell.
REST Resource: v1alpha1.accounts.reportJobs
Methods
fetchReportResults (deprecated)
POST /v1alpha1/{reportJob=accounts/*/reportJobs/*}:fetchReportResults
Retrieves data generated by CloudChannelReportsService.RunReportJob .
REST Resource: v1alpha1.accounts.reports
Methods
list (deprecated)
GET /v1alpha1/{parent=accounts/*}/reports
Lists the reports that RunReportJob can run.
run (deprecated)
POST /v1alpha1/{name=accounts/*/reports/*}:run
Begins generation of data for a given report.
REST Resource: v1alpha1.accounts.skuGroups
Methods
list
GET /v1alpha1/{parent=accounts/*}/skuGroups
Lists the Rebilling supported SKU groups the account is authorized to sell.
REST Resource: v1alpha1.accounts.skuGroups.billableSkus
Methods
list
GET /v1alpha1/{parent=accounts/*/skuGroups/*}/billableSkus
Lists the Billable SKUs in a given SKU group.
REST Resource: v1alpha1.integrators
Methods
listSubscribers
GET /v1alpha1/{integrator=integrators/*}:listSubscribers
Lists service accounts with subscriber privileges on the Pub/Sub topic created for this Channel Services account or integrator.
registerSubscriber
POST /v1alpha1/{integrator=integrators/*}:registerSubscriber
Registers a service account with subscriber privileges on the Pub/Sub topic for this Channel Services account or integrator.
unregisterSubscriber
POST /v1alpha1/{integrator=integrators/*}:unregisterSubscriber
Unregisters a service account with subscriber privileges on the Pub/Sub topic created for this Channel Services account or integrator.
REST Resource: v1alpha1.operations
Methods
cancel
POST /v1alpha1/{name=operations/**}:cancel
Starts asynchronous cancellation on a long-running operation.
delete
DELETE /v1alpha1/{name=operations/**}
Deletes a long-running operation.
get
GET /v1alpha1/{name=operations/*}
Gets the latest state of a long-running operation.
list
GET /v1alpha1/{name=operations}
Lists operations that match the specified filter in the request.
REST Resource: v1alpha1.opportunities
Methods
create
POST /v1alpha1/opportunities
Creates a new Opportunity resource for a deal submission process.
get
GET /v1alpha1/{name=opportunities/*}
Returns the requested Opportunity resource.
patch
PATCH /v1alpha1/{opportunity.name=opportunities/*}
Updates an existing Opportunity resource.
query
GET /v1alpha1/opportunities:query
Query Opportunity s associated with a specific Partner.
REST Resource: v1alpha1.products
Methods
list
GET /v1alpha1/products
Lists the Products the reseller is authorized to sell.
REST Resource: v1alpha1.products.skus
Methods
list
GET /v1alpha1/{parent=products/*}/skus
Lists the SKUs for a product the reseller is authorized to sell.
REST Resource: v1.accounts
Methods
checkCloudIdentityAccountsExist
POST /v1/{parent=accounts/*}:checkCloudIdentityAccountsExist
Confirms the existence of Cloud Identity accounts based on the domain and if the Cloud Identity accounts are owned by the reseller.
listSubscribers
GET /v1/{account=accounts/*}:listSubscribers
Lists service accounts with subscriber privileges on the Pub/Sub topic created for this Channel Services account or integrator.
listTransferableOffers
POST /v1/{parent=accounts/*}:listTransferableOffers
List TransferableOffer s of a customer based on Cloud Identity ID or Customer Name in the request.
listTransferableSkus
POST /v1/{parent=accounts/*}:listTransferableSkus
List TransferableSku s of a customer based on the Cloud Identity ID or Customer Name in the request.
register
POST /v1/{account=accounts/*}:register
Registers a service account with subscriber privileges on the Pub/Sub topic for this Channel Services account or integrator.
unregister
POST /v1/{account=accounts/*}:unregister
Unregisters a service account with subscriber privileges on the Pub/Sub topic created for this Channel Services account or integrator.
REST Resource: v1.accounts.channelPartnerLinks
Methods
create
POST /v1/{parent=accounts/*}/channelPartnerLinks
Initiates a channel partner link between a distributor and a reseller, or between resellers in an n-tier reseller channel.
get
GET /v1/{name=accounts/*/channelPartnerLinks/*}
Returns the requested ChannelPartnerLink resource.
list
GET /v1/{parent=accounts/*}/channelPartnerLinks
List ChannelPartnerLink s belonging to a distributor.
patch
PATCH /v1/{name=accounts/*/channelPartnerLinks/*}
Updates a channel partner link.
REST Resource: v1.accounts.channelPartnerLinks.channelPartnerRepricingConfigs
Methods
create
POST /v1/{parent=accounts/*/channelPartnerLinks/*}/channelPartnerRepricingConfigs
Creates a ChannelPartnerRepricingConfig.
delete
DELETE /v1/{name=accounts/*/channelPartnerLinks/*/channelPartnerRepricingConfigs/*}
Deletes the given ChannelPartnerRepricingConfig permanently.
get
GET /v1/{name=accounts/*/channelPartnerLinks/*/channelPartnerRepricingConfigs/*}
Gets information about how a Distributor modifies their bill before sending it to a ChannelPartner.
list
GET /v1/{parent=accounts/*/channelPartnerLinks/*}/channelPartnerRepricingConfigs
Lists information about how a Reseller modifies their bill before sending it to a ChannelPartner.
patch
PATCH /v1/{channelPartnerRepricingConfig.name=accounts/*/channelPartnerLinks/*/channelPartnerRepricingConfigs/*}
Updates a ChannelPartnerRepricingConfig.
REST Resource: v1.accounts.channelPartnerLinks.customers
Methods
create
POST /v1/{parent=accounts/*/channelPartnerLinks/*}/customers
Creates a new Customer resource under the reseller or distributor account.
delete
DELETE /v1/{name=accounts/*/channelPartnerLinks/*/customers/*}
Deletes the given Customer permanently.
get
GET /v1/{name=accounts/*/channelPartnerLinks/*/customers/*}
Returns the requested Customer resource.
import
POST /v1/{parent=accounts/*/channelPartnerLinks/*}/customers:import
Imports a Customer from the Cloud Identity associated with the provided Cloud Identity ID or domain before a TransferEntitlements call.
list
GET /v1/{parent=accounts/*/channelPartnerLinks/*}/customers
List Customer s.
patch
PATCH /v1/{customer.name=accounts/*/channelPartnerLinks/*/customers/*}
Updates an existing Customer resource for the reseller or distributor.
REST Resource: v1.accounts.customers
Methods
create
POST /v1/{parent=accounts/*}/customers
Creates a new Customer resource under the reseller or distributor account.
delete
DELETE /v1/{name=accounts/*/customers/*}
Deletes the given Customer permanently.
get
GET /v1/{name=accounts/*/customers/*}
Returns the requested Customer resource.
import
POST /v1/{parent=accounts/*}/customers:import
Imports a Customer from the Cloud Identity associated with the provided Cloud Identity ID or domain before a TransferEntitlements call.
list
GET /v1/{parent=accounts/*}/customers
List Customer s.
listPurchasableOffers
GET /v1/{customer=accounts/*/customers/*}:listPurchasableOffers
Lists the following:
Offers that you can purchase for a customer.
listPurchasableSkus
GET /v1/{customer=accounts/*/customers/*}:listPurchasableSkus
Lists the following:
SKUs that you can purchase for a customer
SKUs that you can upgrade or downgrade for an entitlement.
patch
PATCH /v1/{customer.name=accounts/*/customers/*}
Updates an existing Customer resource for the reseller or distributor.
provisionCloudIdentity
POST /v1/{customer=accounts/*/customers/*}:provisionCloudIdentity
Creates a Cloud Identity for the given customer using the customer's information, or the information provided here.
queryEligibleBillingAccounts
GET /v1/{customer=accounts/*/customers/*}:queryEligibleBillingAccounts
Lists the billing accounts that are eligible to purchase particular SKUs for a given customer.
transferEntitlements
POST /v1/{parent=accounts/*/customers/*}:transferEntitlements
Transfers customer entitlements to new reseller.
transferEntitlementsToGoogle
POST /v1/{parent=accounts/*/customers/*}:transferEntitlementsToGoogle
Transfers customer entitlements from their current reseller to Google.
REST Resource: v1.accounts.customers.customerRepricingConfigs
Methods
create
POST /v1/{parent=accounts/*/customers/*}/customerRepricingConfigs
Creates a CustomerRepricingConfig.
delete
DELETE /v1/{name=accounts/*/customers/*/customerRepricingConfigs/*}
Deletes the given CustomerRepricingConfig permanently.
get
GET /v1/{name=accounts/*/customers/*/customerRepricingConfigs/*}
Gets information about how a Reseller modifies their bill before sending it to a Customer.
list
GET /v1/{parent=accounts/*/customers/*}/customerRepricingConfigs
Lists information about how a Reseller modifies their bill before sending it to a Customer.
patch
PATCH /v1/{customerRepricingConfig.name=accounts/*/customers/*/customerRepricingConfigs/*}
Updates a CustomerRepricingConfig.
REST Resource: v1.accounts.customers.entitlements
Methods
activate
POST /v1/{name=accounts/*/customers/*/entitlements/*}:activate
Activates a previously suspended entitlement.
cancel
POST /v1/{name=accounts/*/customers/*/entitlements/*}:cancel
Cancels a previously fulfilled entitlement.
changeOffer
POST /v1/{name=accounts/*/customers/*/entitlements/*}:changeOffer
Updates the Offer for an existing customer entitlement.
changeParameters
POST /v1/{name=accounts/*/customers/*/entitlements/*}:changeParameters
Change parameters of the entitlement.
changeRenewalSettings
POST /v1/{name=accounts/*/customers/*/entitlements/*}:changeRenewalSettings
Updates the renewal settings for an existing customer entitlement.
create
POST /v1/{parent=accounts/*/customers/*}/entitlements
Creates an entitlement for a customer.
get
GET /v1/{name=accounts/*/customers/*/entitlements/*}
Returns the requested Entitlement resource.
list
GET /v1/{parent=accounts/*/customers/*}/entitlements
Lists Entitlement s belonging to a customer.
listEntitlementChanges
GET /v1/{parent=accounts/*/customers/*/entitlements/*}:listEntitlementChanges
List entitlement history.
lookupOffer
GET /v1/{entitlement=accounts/*/customers/*/entitlements/*}:lookupOffer
Returns the requested Offer resource.
startPaidService
POST /v1/{name=accounts/*/customers/*/entitlements/*}:startPaidService
Starts paid service for a trial entitlement.
suspend
POST /v1/{name=accounts/*/customers/*/entitlements/*}:suspend
Suspends a previously fulfilled entitlement.
REST Resource: v1.accounts.offers
Methods
list
GET /v1/{parent=accounts/*}/offers
Lists the Offers the reseller can sell.
REST Resource: v1.accounts.reportJobs
Methods
fetchReportResults (deprecated)
POST /v1/{reportJob=accounts/*/reportJobs/*}:fetchReportResults
Retrieves data generated by CloudChannelReportsService.RunReportJob .
REST Resource: v1.accounts.reports
Methods
list (deprecated)
GET /v1/{parent=accounts/*}/reports
Lists the reports that RunReportJob can run.
run (deprecated)
POST /v1/{name=accounts/*/reports/*}:run
Begins generation of data for a given report.
REST Resource: v1.accounts.skuGroups
Methods
list
GET /v1/{parent=accounts/*}/skuGroups
Lists the Rebilling supported SKU groups the account is authorized to sell.
REST Resource: v1.accounts.skuGroups.billableSkus
Methods
list
GET /v1/{parent=accounts/*/skuGroups/*}/billableSkus
Lists the Billable SKUs in a given SKU group.
REST Resource: v1.integrators
Methods
listSubscribers
GET /v1/{integrator=integrators/*}:listSubscribers
Lists service accounts with subscriber privileges on the Pub/Sub topic created for this Channel Services account or integrator.
registerSubscriber
POST /v1/{integrator=integrators/*}:registerSubscriber
Registers a service account with subscriber privileges on the Pub/Sub topic for this Channel Services account or integrator.
unregisterSubscriber
POST /v1/{integrator=integrators/*}:unregisterSubscriber
Unregisters a service account with subscriber privileges on the Pub/Sub topic created for this Channel Services account or integrator.
REST Resource: v1.operations
Methods
cancel
POST /v1/{name=operations/**}:cancel
Starts asynchronous cancellation on a long-running operation.
delete
DELETE /v1/{name=operations/**}
Deletes a long-running operation.
get
GET /v1/{name=operations/**}
Gets the latest state of a long-running operation.
list
GET /v1/{name=operations}
Lists operations that match the specified filter in the request.
REST Resource: v1.products
Methods
list
GET /v1/products
Lists the Products the reseller is authorized to sell.
REST Resource: v1.products.skus
Methods
list
GET /v1/{parent=products/*}/skus
Lists the SKUs for a product the reseller is authorized to sell.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-05-19 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-05-19 UTC."],[],[]]
