---
title: "Google Ad Manager API \_|\_ Ad Manager API (Beta) \_|\_ Google for Developers"
url: https://developers.google.com/ad-manager/api/beta/reference/rest
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://developers.google.com/ad-manager/api/beta/reference/rest
source_metadata:
  url: https://developers.google.com/ad-manager/api/beta/reference/rest
  title: "Google Ad Manager API \_|\_ Ad Manager API (Beta) \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

To discuss and provide feedback on our products, join the official Ad Manager Discord channel in the Google Advertising and Measurement Community server.
Home
Products
Ad Manager
API (Beta)
Reference
Send feedback
Google Ad Manager API
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
The Ad Manager API allows management of inventory and reporting.
The API utilizes REST resources like networks, ad units, reports, and more for various functionalities.
Multiple resources offer methods to retrieve lists of objects using a GET request to a parent endpoint.
Several resources also provide methods for creating, updating, activating, deactivating, archiving, and submitting objects for approval.
Reports can be created, retrieved, updated, and run asynchronously, with results available for fetching.
Manage your Ad Manager inventory, run reports and more.
REST Resource: v1.networks
REST Resource: v1.networks.adUnitSizes
REST Resource: v1.networks.adUnits
REST Resource: v1.networks.applications
REST Resource: v1.networks.audienceSegments
REST Resource: v1.networks.bandwidthGroups
REST Resource: v1.networks.browserLanguages
REST Resource: v1.networks.browsers
REST Resource: v1.networks.cmsMetadataKeys
REST Resource: v1.networks.cmsMetadataValues
REST Resource: v1.networks.companies
REST Resource: v1.networks.contacts
REST Resource: v1.networks.content
REST Resource: v1.networks.contentBundles
REST Resource: v1.networks.contentLabels
REST Resource: v1.networks.creativeTemplates
REST Resource: v1.networks.customFields
REST Resource: v1.networks.customTargetingKeys
REST Resource: v1.networks.customTargetingKeys.customTargetingValues
REST Resource: v1.networks.customTargetingValues
REST Resource: v1.networks.deviceCapabilities
REST Resource: v1.networks.deviceCategories
REST Resource: v1.networks.deviceManufacturers
REST Resource: v1.networks.entitySignalsMappings
REST Resource: v1.networks.geoTargets
REST Resource: v1.networks.labels
REST Resource: v1.networks.lineItems
REST Resource: v1.networks.linkedDevices
REST Resource: v1.networks.mobileCarriers
REST Resource: v1.networks.mobileDeviceSubmodels
REST Resource: v1.networks.mobileDevices
REST Resource: v1.networks.operatingSystemVersions
REST Resource: v1.networks.operatingSystems
REST Resource: v1.networks.operations.reports.runs
REST Resource: v1.networks.orders
REST Resource: v1.networks.placements
REST Resource: v1.networks.privateAuctionDeals
REST Resource: v1.networks.privateAuctions
REST Resource: v1.networks.programmaticBuyers
REST Resource: v1.networks.reports
REST Resource: v1.networks.reports.results
REST Resource: v1.networks.roles
REST Resource: v1.networks.sites
REST Resource: v1.networks.taxonomyCategories
REST Resource: v1.networks.teams
REST Resource: v1.networks.users
REST Resource: v1.networks.webProperties.adReviewCenterAds
REST Resource: v1.operations
Service: admanager.googleapis.com
Discovery document
A Discovery Document is a machine-readable specification for describing and consuming REST APIs. It is used to build client libraries, IDE plugins, and other tools that interact with Google APIs. One service may provide multiple discovery documents. This service provides the following discovery document:
https://admanager.googleapis.com/$discovery/rest?version=v1
Service endpoint
A service endpoint is a base URL that specifies the network address of an API service. One service might have multiple service endpoints. This service has the following service endpoint and all URIs below are relative to this service endpoint:
https://admanager.googleapis.com
REST Resource: v1.networks
Methods
get
GET /v1/{name}
API to retrieve a Network object.
list
GET /v1/networks
API to retrieve all the networks the current user has access to.
REST Resource: v1.networks.adUnitSizes
Methods
list
GET /v1/{parent}/adUnitSizes
API to retrieve a list of AdUnitSize objects.
REST Resource: v1.networks.adUnits
Methods
batchActivate
POST /v1/{parent}/adUnits:batchActivate
API to batch activate AdUnit objects.
batchArchive
POST /v1/{parent}/adUnits:batchArchive
Archives a list of AdUnit objects.
batchCreate
POST /v1/{parent}/adUnits:batchCreate
API to batch create AdUnit objects.
batchDeactivate
POST /v1/{parent}/adUnits:batchDeactivate
Deactivates a list of AdUnit objects.
batchUpdate
POST /v1/{parent}/adUnits:batchUpdate
API to batch update AdUnit objects.
create
POST /v1/{parent}/adUnits
API to create an AdUnit object.
get
GET /v1/{name}
API to retrieve an AdUnit object.
list
GET /v1/{parent}/adUnits
API to retrieve a list of AdUnit objects.
patch
PATCH /v1/{adUnit.name}
API to update an AdUnit object.
REST Resource: v1.networks.applications
Methods
get
GET /v1/{name}
API to retrieve a Application object.
list
GET /v1/{parent}/applications
API to retrieve a list of Application objects.
REST Resource: v1.networks.audienceSegments
Methods
get
GET /v1/{name}
API to retrieve an AudienceSegment object.
list
GET /v1/{parent}/audienceSegments
API to retrieve a list of AudienceSegment objects.
REST Resource: v1.networks.bandwidthGroups
Methods
get
GET /v1/{name}
API to retrieve a BandwidthGroup object.
list
GET /v1/{parent}/bandwidthGroups
API to retrieve a list of BandwidthGroup objects.
REST Resource: v1.networks.browserLanguages
Methods
get
GET /v1/{name}
API to retrieve a BrowserLanguage object.
list
GET /v1/{parent}/browserLanguages
API to retrieve a list of BrowserLanguage objects.
REST Resource: v1.networks.browsers
Methods
get
GET /v1/{name}
API to retrieve a Browser object.
list
GET /v1/{parent}/browsers
API to retrieve a list of Browser objects.
REST Resource: v1.networks.cmsMetadataKeys
Methods
batchActivate
POST /v1/{parent}/cmsMetadataKeys:batchActivate
API to activate a list of CmsMetadataKey objects.
batchDeactivate
POST /v1/{parent}/cmsMetadataKeys:batchDeactivate
API to deactivate a list of CmsMetadataKey objects.
get
GET /v1/{name}
API to retrieve a CmsMetadataKey object.
list
GET /v1/{parent}/cmsMetadataKeys
API to retrieve a list of CmsMetadataKey objects.
REST Resource: v1.networks.cmsMetadataValues
Methods
batchActivate
POST /v1/{parent}/cmsMetadataValues:batchActivate
API to activate a list of CmsMetadataValue objects.
batchDeactivate
POST /v1/{parent}/cmsMetadataValues:batchDeactivate
API to deactivate a list of CmsMetadataValue objects.
get
GET /v1/{name}
API to retrieve a CmsMetadataValue object.
list
GET /v1/{parent}/cmsMetadataValues
API to retrieve a list of CmsMetadataValue objects.
REST Resource: v1.networks.companies
Methods
get
GET /v1/{name}
API to retrieve a Company object.
list
GET /v1/{parent}/companies
API to retrieve a list of Company objects.
REST Resource: v1.networks.contacts
Methods
batchCreate
POST /v1/{parent}/contacts:batchCreate
API to batch create Contact objects.
batchUpdate
POST /v1/{parent}/contacts:batchUpdate
API to batch update Contact objects.
create
POST /v1/{parent}/contacts
API to create a Contact object.
get
GET /v1/{name}
API to retrieve a Contact object.
list
GET /v1/{parent}/contacts
API to retrieve a list of Contact objects.
patch
PATCH /v1/{contact.name}
API to update a Contact object.
REST Resource: v1.networks.content
Methods
get
GET /v1/{name}
API to retrieve a Content object.
list
GET /v1/{parent}/content
API to retrieve a list of Content objects.
REST Resource: v1.networks.contentBundles
Methods
get
GET /v1/{name}
API to retrieve a ContentBundle object.
list
GET /v1/{parent}/contentBundles
API to retrieve a list of ContentBundle objects.
REST Resource: v1.networks.contentLabels
Methods
get
GET /v1/{name}
API to retrieve a ContentLabel object.
list
GET /v1/{parent}/contentLabels
API to retrieve a list of ContentLabel objects.
REST Resource: v1.networks.creativeTemplates
Methods
get
GET /v1/{name}
API to retrieve a CreativeTemplate object.
list
GET /v1/{parent}/creativeTemplates
API to retrieve a list of CreativeTemplate objects.
REST Resource: v1.networks.customFields
Methods
batchActivate
POST /v1/{parent}/customFields:batchActivate
Activates a list of CustomField objects.
batchCreate
POST /v1/{parent}/customFields:batchCreate
API to batch create CustomField objects.
batchDeactivate
POST /v1/{parent}/customFields:batchDeactivate
Deactivates a list of CustomField objects.
batchUpdate
POST /v1/{parent}/customFields:batchUpdate
API to batch update CustomField objects.
create
POST /v1/{parent}/customFields
API to create a CustomField object.
get
GET /v1/{name}
API to retrieve a CustomField object.
list
GET /v1/{parent}/customFields
API to retrieve a list of CustomField objects.
patch
PATCH /v1/{customField.name}
API to update a CustomField object.
REST Resource: v1.networks.customTargetingKeys
Methods
batchActivate
POST /v1/{parent}/customTargetingKeys:batchActivate
API to batch activate CustomTargetingKey objects.
batchCreate
POST /v1/{parent}/customTargetingKeys:batchCreate
API to batch create CustomTargetingKey objects.
batchDeactivate
POST /v1/{parent}/customTargetingKeys:batchDeactivate
Deactivates a list of CustomTargetingKey objects.
batchUpdate
POST /v1/{parent}/customTargetingKeys:batchUpdate
API to batch update CustomTargetingKey objects.
create
POST /v1/{parent}/customTargetingKeys
API to create a CustomTargetingKey object.
get
GET /v1/{name}
API to retrieve a CustomTargetingKey object.
list
GET /v1/{parent}/customTargetingKeys
API to retrieve a list of CustomTargetingKey objects.
patch
PATCH /v1/{customTargetingKey.name}
API to update a CustomTargetingKey object.
REST Resource: v1.networks.customTargetingKeys.customTargetingValues
Methods
get
GET /v1/{name}
API to retrieve a CustomTargetingValue object.
list
GET /v1/{parent}/customTargetingValues
API to retrieve a list of CustomTargetingValue objects.
REST Resource: v1.networks.customTargetingValues
Methods
get
GET /v1/{name}
API to retrieve a CustomTargetingValue object.
list
GET /v1/{parent}/customTargetingValues
API to retrieve a list of CustomTargetingValue objects.
REST Resource: v1.networks.deviceCapabilities
Methods
get
GET /v1/{name}
API to retrieve a DeviceCapability object.
list
GET /v1/{parent}/deviceCapabilities
API to retrieve a list of DeviceCapability objects.
REST Resource: v1.networks.deviceCategories
Methods
get
GET /v1/{name}
API to retrieve a DeviceCategory object.
list
GET /v1/{parent}/deviceCategories
API to retrieve a list of DeviceCategory objects.
REST Resource: v1.networks.deviceManufacturers
Methods
get
GET /v1/{name}
API to retrieve a DeviceManufacturer object.
list
GET /v1/{parent}/deviceManufacturers
API to retrieve a list of DeviceManufacturer objects.
REST Resource: v1.networks.entitySignalsMappings
Methods
batchCreate
POST /v1/{parent}/entitySignalsMappings:batchCreate
API to batch create EntitySignalsMapping objects.
batchUpdate
POST /v1/{parent}/entitySignalsMappings:batchUpdate
API to batch update EntitySignalsMapping objects.
create
POST /v1/{parent}/entitySignalsMappings
API to create an EntitySignalsMapping object.
get
GET /v1/{name}
API to retrieve a EntitySignalsMapping object.
list
GET /v1/{parent}/entitySignalsMappings
API to retrieve a list of EntitySignalsMapping objects.
patch
PATCH /v1/{entitySignalsMapping.name}
API to update an EntitySignalsMapping object.
REST Resource: v1.networks.geoTargets
Methods
get
GET /v1/{name}
API to retrieve a GeoTarget object.
list
GET /v1/{parent}/geoTargets
API to retrieve a list of GeoTarget objects.
REST Resource: v1.networks.labels
Methods
batchActivate
POST /v1/{parent}/labels:batchActivate
API to activate Label objects.
batchCreate
POST /v1/{parent}/labels:batchCreate
API to batch create Label objects.
batchDeactivate
POST /v1/{parent}/labels:batchDeactivate
API to deactivate Label objects.
batchUpdate
POST /v1/{parent}/labels:batchUpdate
API to batch update Label objects.
create
POST /v1/{parent}/labels
API to create a Label object.
get
GET /v1/{name}
API to retrieve a Label object.
list
GET /v1/{parent}/labels
API to retrieve a list of Label objects.
patch
PATCH /v1/{label.name}
API to update a Label object.
REST Resource: v1.networks.lineItems
Methods
get
GET /v1/{name}
API to retrieve a LineItem object.
list
GET /v1/{parent}/lineItems
API to retrieve a list of LineItem objects.
REST Resource: v1.networks.linkedDevices
Methods
get
GET /v1/{name}
Gets a LinkedDevice .
list
GET /v1/{parent}/linkedDevices
Lists LinkedDevice objects.
REST Resource: v1.networks.mobileCarriers
Methods
get
GET /v1/{name}
API to retrieve a MobileCarrier object.
list
GET /v1/{parent}/mobileCarriers
API to retrieve a list of MobileCarrier objects.
REST Resource: v1.networks.mobileDeviceSubmodels
Methods
get
GET /v1/{name}
API to retrieve a MobileDeviceSubmodel object.
list
GET /v1/{parent}/mobileDeviceSubmodels
API to retrieve a list of MobileDeviceSubmodel objects.
REST Resource: v1.networks.mobileDevices
Methods
get
GET /v1/{name}
API to retrieve a MobileDevice object.
list
GET /v1/{parent}/mobileDevices
API to retrieve a list of MobileDevice objects.
REST Resource: v1.networks.operatingSystemVersions
Methods
get
GET /v1/{name}
API to retrieve a OperatingSystemVersion object.
list
GET /v1/{parent}/operatingSystemVersions
API to retrieve a list of OperatingSystemVersion objects.
REST Resource: v1.networks.operatingSystems
Methods
get
GET /v1/{name}
API to retrieve a OperatingSystem object.
list
GET /v1/{parent}/operatingSystems
API to retrieve a list of OperatingSystem objects.
REST Resource: v1.networks.operations.reports.runs
Methods
get
GET /v1/{name}
Gets the latest state of a long-running operation.
REST Resource: v1.networks.orders
Methods
get
GET /v1/{name}
API to retrieve an Order object.
list
GET /v1/{parent}/orders
API to retrieve a list of Order objects.
REST Resource: v1.networks.placements
Methods
batchActivate
POST /v1/{parent}/placements:batchActivate
Activates a list of Placement objects.
batchArchive
POST /v1/{parent}/placements:batchArchive
Archives a list of Placement objects.
batchCreate
POST /v1/{parent}/placements:batchCreate
API to batch create Placement objects.
batchDeactivate
POST /v1/{parent}/placements:batchDeactivate
Deactivates a list of Placement objects.
batchUpdate
POST /v1/{parent}/placements:batchUpdate
API to batch update Placement objects.
create
POST /v1/{parent}/placements
API to create an Placement object.
get
GET /v1/{name}
API to retrieve a Placement object.
list
GET /v1/{parent}/placements
API to retrieve a list of Placement objects.
patch
PATCH /v1/{placement.name}
API to update an Placement object.
REST Resource: v1.networks.privateAuctionDeals
Methods
create
POST /v1/{parent}/privateAuctionDeals
API to create a PrivateAuctionDeal object.
get
GET /v1/{name}
API to retrieve a PrivateAuctionDeal object.
list
GET /v1/{parent}/privateAuctionDeals
API to retrieve a list of PrivateAuctionDeal objects.
patch
PATCH /v1/{privateAuctionDeal.name}
API to update a PrivateAuctionDeal object.
REST Resource: v1.networks.privateAuctions
Methods
create
POST /v1/{parent}/privateAuctions
API to create a PrivateAuction object.
get
GET /v1/{name}
API to retrieve a PrivateAuction object.
list
GET /v1/{parent}/privateAuctions
API to retrieve a list of PrivateAuction objects.
patch
PATCH /v1/{privateAuction.name}
API to update a PrivateAuction object.
REST Resource: v1.networks.programmaticBuyers
Methods
get
GET /v1/{name}
API to retrieve a ProgrammaticBuyer object.
list
GET /v1/{parent}/programmaticBuyers
API to retrieve a list of ProgrammaticBuyer objects.
REST Resource: v1.networks.reports
Methods
create
POST /v1/{parent}/reports
API to create a Report object.
get
GET /v1/{name}
API to retrieve a Report object.
list
GET /v1/{parent}/reports
API to retrieve a list of Report objects.
patch
PATCH /v1/{report.name}
API to update a Report object.
run
POST /v1/{name}:run
Initiates the execution of an existing report asynchronously.
REST Resource: v1.networks.reports.results
Methods
fetchRows
GET /v1/{name}:fetchRows
Returns the result rows from a completed report.
REST Resource: v1.networks.roles
Methods
get
GET /v1/{name}
API to retrieve a Role object.
list
GET /v1/{parent}/roles
API to retrieve a list of Role objects.
REST Resource: v1.networks.sites
Methods
batchCreate
POST /v1/{parent}/sites:batchCreate
API to batch create Site objects.
batchDeactivate
POST /v1/{parent}/sites:batchDeactivate
Deactivates a list of Site objects.
batchSubmitForApproval
POST /v1/{parent}/sites:batchSubmitForApproval
Submits a list of Site objects for approval.
batchUpdate
POST /v1/{parent}/sites:batchUpdate
API to batch update Site objects.
create
POST /v1/{parent}/sites
API to create a Site object.
get
GET /v1/{name}
API to retrieve a Site object.
list
GET /v1/{parent}/sites
API to retrieve a list of Site objects.
patch
PATCH /v1/{site.name}
API to update a Site object.
REST Resource: v1.networks.taxonomyCategories
Methods
get
GET /v1/{name}
API to retrieve a TaxonomyCategory object.
list
GET /v1/{parent}/taxonomyCategories
API to retrieve a list of TaxonomyCategory objects.
REST Resource: v1.networks.teams
Methods
batchActivate
POST /v1/{parent}/teams:batchActivate
API to batch activate Team objects.
batchCreate
POST /v1/{parent}/teams:batchCreate
API to batch create Team objects.
batchDeactivate
POST /v1/{parent}/teams:batchDeactivate
API to batch deactivate Team objects.
batchUpdate
POST /v1/{parent}/teams:batchUpdate
API to batch update Team objects.
create
POST /v1/{parent}/teams
API to create a Team object.
get
GET /v1/{name}
API to retrieve a Team object.
list
GET /v1/{parent}/teams
API to retrieve a list of Team objects.
patch
PATCH /v1/{team.name}
API to update a Team object.
REST Resource: v1.networks.users
Methods
get
GET /v1/{name}
API to retrieve a User object.
REST Resource: v1.networks.webProperties.adReviewCenterAds
Methods
batchAllow
POST /v1/{parent}/adReviewCenterAds:batchAllow
API to batch allow AdReviewCenterAds.
batchBlock
POST /v1/{parent}/adReviewCenterAds:batchBlock
API to batch block AdReviewCenterAds.
search
GET /v1/{parent}/adReviewCenterAds:search
API to search for AdReviewCenterAds.
REST Resource: v1.operations
Methods
cancel
POST /v1/{name}:cancel
Starts asynchronous cancellation on a long-running operation.
delete
DELETE /v1/{name}
Deletes a long-running operation.
list
GET /v1/{name}
Lists operations that match the specified filter in the request.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-01 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-01 UTC."],[],["This API allows managing Ad Manager data through various REST resources. Key actions include retrieving and listing network, ad unit, company, custom field, targeting, order, placement, role, taxonomy, and user objects. It also supports creating, updating, and batch processing entity signal mappings. The API enables generating reports, running them asynchronously, and fetching the result rows. Additionally, it allows managing long-running operations through cancel, delete, and list methods.\n"]]
