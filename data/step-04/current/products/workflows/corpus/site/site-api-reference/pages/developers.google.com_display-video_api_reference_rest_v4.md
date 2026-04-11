---
title: "Display & Video 360 API \_|\_ DV360 API \_|\_ Google for Developers"
url: https://developers.google.com/display-video/api/reference/rest/v4
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://developers.google.com/display-video/api/reference/rest
source_metadata:
  url: https://developers.google.com/display-video/api/reference/rest/v4
  title: "Display & Video 360 API \_|\_ DV360 API \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

To discuss and provide feedback on our products, join the official Display & Video 360 API and Structured Data Files Discord channel in the Google Advertising and Measurement Community server.
Home
Products
DV360 API
Display & Video 360 API
Reference
Send feedback
Display & Video 360 API
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
The Display & Video 360 API automates complex workflows like creating insertion orders and setting line item targeting.
Display & Video 360 API allows users to automate complex Display & Video 360 workflows, such as creating insertion orders and setting targeting options for individual line items.
REST Resource: v4.advertisers
REST Resource: v4.advertisers.adAssets
REST Resource: v4.advertisers.adGroupAds
REST Resource: v4.advertisers.adGroups
REST Resource:
v4.advertisers.adGroups.targetingTypes.assignedTargetingOptions
REST Resource:
v4.advertisers.adGroups.youtubeAssetTypes.youtubeAssetAssociations
REST Resource: v4.advertisers.assets
REST Resource: v4.advertisers.campaigns
REST Resource: v4.advertisers.channels
REST Resource: v4.advertisers.channels.sites
REST Resource: v4.advertisers.creatives
REST Resource: v4.advertisers.insertionOrders
REST Resource: v4.advertisers.invoices
REST Resource: v4.advertisers.lineItems
REST Resource:
v4.advertisers.lineItems.targetingTypes.assignedTargetingOptions
REST Resource:
v4.advertisers.lineItems.youtubeAssetTypes.youtubeAssetAssociations
REST Resource: v4.advertisers.locationLists
REST Resource: v4.advertisers.locationLists.assignedLocations
REST Resource: v4.advertisers.negativeKeywordLists
REST Resource: v4.advertisers.negativeKeywordLists.negativeKeywords
REST Resource: v4.advertisers.targetingTypes.assignedTargetingOptions
REST Resource: v4.combinedAudiences
REST Resource: v4.customBiddingAlgorithms
REST Resource: v4.customBiddingAlgorithms.rules
REST Resource: v4.customBiddingAlgorithms.scripts
REST Resource: v4.customLists
REST Resource: v4.firstPartyAndPartnerAudiences
REST Resource: v4.floodlightGroups
REST Resource: v4.floodlightGroups.floodlightActivities
REST Resource: v4.googleAudiences
REST Resource: v4.guaranteedOrders
REST Resource: v4.inventorySourceGroups
REST Resource: v4.inventorySourceGroups.assignedInventorySources
REST Resource: v4.inventorySources
REST Resource: v4.media
REST Resource: v4.partners
REST Resource: v4.partners.channels
REST Resource: v4.partners.channels.sites
REST Resource: v4.partners.targetingTypes.assignedTargetingOptions
REST Resource: v4.sdfdownloadtasks
REST Resource: v4.sdfdownloadtasks.operations
REST Resource: v4.targetingTypes.targetingOptions
REST Resource: v4.users
Service: displayvideo.googleapis.com
To call this service, we recommend that you use the Google-provided client libraries . If your application needs to use your own libraries to call this service, use the following information when you make the API requests.
Discovery document
A Discovery Document is a machine-readable specification for describing and consuming REST APIs. It is used to build client libraries, IDE plugins, and other tools that interact with Google APIs. One service may provide multiple discovery documents. This service provides the following discovery document:
https://displayvideo.googleapis.com/$discovery/rest?version=v4
Service endpoint
A service endpoint is a base URL that specifies the network address of an API service. One service might have multiple service endpoints. This service has the following service endpoint and all URIs below are relative to this service endpoint:
https://displayvideo.googleapis.com
REST Resource: v4.advertisers
Methods
audit
GET /v4/advertisers/{advertiserId}:audit
Audits an advertiser.
create
POST /v4/advertisers
Creates a new advertiser.
delete
DELETE /v4/advertisers/{advertiserId}
Deletes an advertiser.
editAssignedTargetingOptions
POST /v4/advertisers/{advertiserId}:editAssignedTargetingOptions
Edits targeting options under a single advertiser.
get
GET /v4/advertisers/{advertiserId}
Gets an advertiser.
list
GET /v4/advertisers
Lists advertisers that are accessible to the current user.
listAssignedTargetingOptions
GET /v4/advertisers/{advertiserId}:listAssignedTargetingOptions
Lists assigned targeting options of an advertiser across targeting types.
patch
PATCH /v4/advertisers/{advertiser.advertiserId}
Updates an existing advertiser.
REST Resource: v4.advertisers.adAssets
Methods
bulkCreate
POST /v4/advertisers/{advertiserId}/adAssets:bulkCreate
Creates multiple ad assets in a single request.
create
POST /v4/advertisers/{advertiserId}/adAssets
Creates an ad asset.
get
GET /v4/advertisers/{advertiserId}/adAssets/{adAssetId}
Gets an ad asset.
list
GET /v4/advertisers/{advertiserId}/adAssets
Lists ad assets under an advertiser ID.
upload
POST /v4/advertisers/{advertiserId}/adAssets:uploadAdAsset
POST /upload/v4/advertisers/{advertiserId}/adAssets:uploadAdAsset
Uploads and creates an ad asset.
REST Resource: v4.advertisers.adGroupAds
Methods
get
GET /v4/advertisers/{advertiserId}/adGroupAds/{adGroupAdId}
Gets an ad group ad.
list
GET /v4/advertisers/{advertiserId}/adGroupAds
Lists ad group ads.
REST Resource: v4.advertisers.adGroups
Methods
bulkListAssignedTargetingOptions
GET /v4/advertisers/{advertiserId}/adGroups:bulkListAssignedTargetingOptions
Lists assigned targeting options for multiple ad groups across targeting types.
get
GET /v4/advertisers/{advertiserId}/adGroups/{adGroupId}
Gets an ad group.
list
GET /v4/advertisers/{advertiserId}/adGroups
Lists ad groups.
REST Resource: v4.advertisers.adGroups.targetingTypes.assignedTargetingOptions
Methods
get
GET /v4/advertisers/{advertiserId}/adGroups/{adGroupId}/targetingTypes/{targetingType}/assignedTargetingOptions/{assignedTargetingOptionId}
Gets a single targeting option assigned to an ad group.
list
GET /v4/advertisers/{advertiserId}/adGroups/{adGroupId}/targetingTypes/{targetingType}/assignedTargetingOptions
Lists the targeting options assigned to an ad group.
REST Resource: v4.advertisers.adGroups.youtubeAssetTypes.youtubeAssetAssociations
Methods
create
POST /v4/advertisers/{advertiserId}/adGroups/{linkedEntity.adGroupId}/youtubeAssetTypes/{youtubeAssetAssociation.youtubeAssetType}/youtubeAssetAssociations
Creates a new association between the identified resource and a YouTube asset.
delete
DELETE /v4/advertisers/{advertiserId}/adGroups/{linkedEntity.adGroupId}/youtubeAssetTypes/{youtubeAssetType}/youtubeAssetAssociations/{youtubeAssetAssociationId}
Deletes an existing association between the identified resource and a YouTube asset.
list
GET /v4/advertisers/{advertiserId}/adGroups/{linkedEntity.adGroupId}/youtubeAssetTypes/{youtubeAssetType}/youtubeAssetAssociations
Lists the YouTube asset associations linked to the given resource.
REST Resource: v4.advertisers.assets
Methods
upload
POST /v4/advertisers/{advertiserId}/assets
POST /upload/v4/advertisers/{advertiserId}/assets
Uploads an asset.
REST Resource: v4.advertisers.campaigns
Methods
create
POST /v4/advertisers/{campaign.advertiserId}/campaigns
Creates a new campaign.
delete
DELETE /v4/advertisers/{advertiserId}/campaigns/{campaignId}
Permanently deletes a campaign.
get
GET /v4/advertisers/{advertiserId}/campaigns/{campaignId}
Gets a campaign.
list
GET /v4/advertisers/{advertiserId}/campaigns
Lists campaigns in an advertiser.
patch
PATCH /v4/advertisers/{campaign.advertiserId}/campaigns/{campaign.campaignId}
Updates an existing campaign.
REST Resource: v4.advertisers.channels
Methods
create
POST /v4/advertisers/{advertiserId}/channels
Creates a new channel.
get
GET /v4/advertisers/{advertiserId}/channels/{channelId}
Gets a channel for a partner or advertiser.
list
GET /v4/advertisers/{advertiserId}/channels
Lists channels for a partner or advertiser.
patch
PATCH /v4/advertisers/{advertiserId}/channels/{channel.channelId}
Updates a channel.
REST Resource: v4.advertisers.channels.sites
Methods
bulkEdit
POST /v4/advertisers/{advertiserId}/channels/{channelId}/sites:bulkEdit
Bulk edits sites under a single channel.
create
POST /v4/advertisers/{advertiserId}/channels/{channelId}/sites
Creates a site in a channel.
delete
DELETE /v4/advertisers/{advertiserId}/channels/{channelId}/sites/{urlOrAppId}
Deletes a site from a channel.
list
GET /v4/advertisers/{advertiserId}/channels/{channelId}/sites
Lists sites in a channel.
replace
POST /v4/advertisers/{advertiserId}/channels/{channelId}/sites:replace
Replaces all of the sites under a single channel.
REST Resource: v4.advertisers.creatives
Methods
create
POST /v4/advertisers/{creative.advertiserId}/creatives
Creates a new creative.
delete
DELETE /v4/advertisers/{advertiserId}/creatives/{creativeId}
Deletes a creative.
get
GET /v4/advertisers/{advertiserId}/creatives/{creativeId}
Gets a creative.
list
GET /v4/advertisers/{advertiserId}/creatives
Lists creatives in an advertiser.
patch
PATCH /v4/advertisers/{creative.advertiserId}/creatives/{creative.creativeId}
Updates an existing creative.
REST Resource: v4.advertisers.insertionOrders
Methods
create
POST /v4/advertisers/{insertionOrder.advertiserId}/insertionOrders
Creates a new insertion order.
delete
DELETE /v4/advertisers/{advertiserId}/insertionOrders/{insertionOrderId}
Deletes an insertion order.
get
GET /v4/advertisers/{advertiserId}/insertionOrders/{insertionOrderId}
Gets an insertion order.
list
GET /v4/advertisers/{advertiserId}/insertionOrders
Lists insertion orders in an advertiser.
patch
PATCH /v4/advertisers/{insertionOrder.advertiserId}/insertionOrders/{insertionOrder.insertionOrderId}
Updates an existing insertion order.
REST Resource: v4.advertisers.invoices
Methods
list
GET /v4/advertisers/{advertiserId}/invoices
Lists invoices posted for an advertiser in a given month.
lookupInvoiceCurrency
GET /v4/advertisers/{advertiserId}/invoices:lookupInvoiceCurrency
Retrieves the invoice currency used by an advertiser in a given month.
REST Resource: v4.advertisers.lineItems
Methods
bulkEditAssignedTargetingOptions
POST /v4/advertisers/{advertiserId}/lineItems:bulkEditAssignedTargetingOptions
Bulk edits targeting options under multiple line items.
bulkListAssignedTargetingOptions
GET /v4/advertisers/{advertiserId}/lineItems:bulkListAssignedTargetingOptions
Lists assigned targeting options for multiple line items across targeting types.
bulkUpdate
POST /v4/advertisers/{advertiserId}/lineItems:bulkUpdate
Updates multiple line items.
create
POST /v4/advertisers/{lineItem.advertiserId}/lineItems
Creates a new line item.
delete
DELETE /v4/advertisers/{advertiserId}/lineItems/{lineItemId}
Deletes a line item.
duplicate
POST /v4/advertisers/{advertiserId}/lineItems/{lineItemId}:duplicate
Duplicates a line item.
get
GET /v4/advertisers/{advertiserId}/lineItems/{lineItemId}
Gets a line item.
list
GET /v4/advertisers/{advertiserId}/lineItems
Lists line items in an advertiser.
patch
PATCH /v4/advertisers/{lineItem.advertiserId}/lineItems/{lineItem.lineItemId}
Updates an existing line item.
REST Resource: v4.advertisers.lineItems.targetingTypes.assignedTargetingOptions
Methods
create
POST /v4/advertisers/{advertiserId}/lineItems/{lineItemId}/targetingTypes/{targetingType}/assignedTargetingOptions
Assigns a targeting option to a line item.
delete
DELETE /v4/advertisers/{advertiserId}/lineItems/{lineItemId}/targetingTypes/{targetingType}/assignedTargetingOptions/{assignedTargetingOptionId}
Deletes an assigned targeting option from a line item.
get
GET /v4/advertisers/{advertiserId}/lineItems/{lineItemId}/targetingTypes/{targetingType}/assignedTargetingOptions/{assignedTargetingOptionId}
Gets a single targeting option assigned to a line item.
list
GET /v4/advertisers/{advertiserId}/lineItems/{lineItemId}/targetingTypes/{targetingType}/assignedTargetingOptions
Lists the targeting options assigned to a line item.
REST Resource: v4.advertisers.lineItems.youtubeAssetTypes.youtubeAssetAssociations
Methods
create
POST /v4/advertisers/{advertiserId}/lineItems/{linkedEntity.lineItemId}/youtubeAssetTypes/{youtubeAssetAssociation.youtubeAssetType}/youtubeAssetAssociations
Creates a new association between the identified resource and a YouTube asset.
delete
DELETE /v4/advertisers/{advertiserId}/lineItems/{linkedEntity.lineItemId}/youtubeAssetTypes/{youtubeAssetType}/youtubeAssetAssociations/{youtubeAssetAssociationId}
Deletes an existing association between the identified resource and a YouTube asset.
list
GET /v4/advertisers/{advertiserId}/lineItems/{linkedEntity.lineItemId}/youtubeAssetTypes/{youtubeAssetType}/youtubeAssetAssociations
Lists the YouTube asset associations linked to the given resource.
REST Resource: v4.advertisers.locationLists
Methods
create
POST /v4/advertisers/{advertiserId}/locationLists
Creates a new location list.
get
GET /v4/advertisers/{advertiserId}/locationLists/{locationListId}
Gets a location list.
list
GET /v4/advertisers/{advertiserId}/locationLists
Lists location lists based on a given advertiser id.
patch
PATCH /v4/advertisers/{advertiserId}/locationLists/{locationList.locationListId}
Updates a location list.
REST Resource: v4.advertisers.locationLists.assignedLocations
Methods
bulkEdit
POST /v4/advertisers/{advertiserId}/locationLists/{locationListId}/assignedLocations:bulkEdit
Bulk edits multiple assignments between locations and a single location list.
create
POST /v4/advertisers/{advertiserId}/locationLists/{locationListId}/assignedLocations
Creates an assignment between a location and a location list.
delete
DELETE /v4/advertisers/{advertiserId}/locationLists/{locationListId}/assignedLocations/{assignedLocationId}
Deletes the assignment between a location and a location list.
list
GET /v4/advertisers/{advertiserId}/locationLists/{locationListId}/assignedLocations
Lists locations assigned to a location list.
REST Resource: v4.advertisers.negativeKeywordLists
Methods
create
POST /v4/advertisers/{advertiserId}/negativeKeywordLists
Creates a new negative keyword list.
delete
DELETE /v4/advertisers/{advertiserId}/negativeKeywordLists/{negativeKeywordListId}
Deletes a negative keyword list given an advertiser ID and a negative keyword list ID.
get
GET /v4/advertisers/{advertiserId}/negativeKeywordLists/{negativeKeywordListId}
Gets a negative keyword list given an advertiser ID and a negative keyword list ID.
list
GET /v4/advertisers/{advertiserId}/negativeKeywordLists
Lists negative keyword lists based on a given advertiser id.
patch
PATCH /v4/advertisers/{advertiserId}/negativeKeywordLists/{negativeKeywordList.negativeKeywordListId}
Updates a negative keyword list.
REST Resource: v4.advertisers.negativeKeywordLists.negativeKeywords
Methods
bulkEdit
POST /v4/advertisers/{advertiserId}/negativeKeywordLists/{negativeKeywordListId}/negativeKeywords:bulkEdit
Bulk edits negative keywords in a single negative keyword list.
create
POST /v4/advertisers/{advertiserId}/negativeKeywordLists/{negativeKeywordListId}/negativeKeywords
Creates a negative keyword in a negative keyword list.
delete
DELETE /v4/advertisers/{advertiserId}/negativeKeywordLists/{negativeKeywordListId}/negativeKeywords/{keywordValue}
Deletes a negative keyword from a negative keyword list.
list
GET /v4/advertisers/{advertiserId}/negativeKeywordLists/{negativeKeywordListId}/negativeKeywords
Lists negative keywords in a negative keyword list.
replace
POST /v4/advertisers/{advertiserId}/negativeKeywordLists/{negativeKeywordListId}/negativeKeywords:replace
Replaces all negative keywords in a single negative keyword list.
REST Resource: v4.advertisers.targetingTypes.assignedTargetingOptions
Methods
create
POST /v4/advertisers/{advertiserId}/targetingTypes/{targetingType}/assignedTargetingOptions
Assigns a targeting option to an advertiser.
delete
DELETE /v4/advertisers/{advertiserId}/targetingTypes/{targetingType}/assignedTargetingOptions/{assignedTargetingOptionId}
Deletes an assigned targeting option from an advertiser.
get
GET /v4/advertisers/{advertiserId}/targetingTypes/{targetingType}/assignedTargetingOptions/{assignedTargetingOptionId}
Gets a single targeting option assigned to an advertiser.
list
GET /v4/advertisers/{advertiserId}/targetingTypes/{targetingType}/assignedTargetingOptions
Lists the targeting options assigned to an advertiser.
REST Resource: v4.combinedAudiences
Methods
get
GET /v4/combinedAudiences/{combinedAudienceId}
Gets a combined audience.
list
GET /v4/combinedAudiences
Lists combined audiences.
REST Resource: v4.customBiddingAlgorithms
Methods
create
POST /v4/customBiddingAlgorithms
Creates a new custom bidding algorithm.
get
GET /v4/customBiddingAlgorithms/{customBiddingAlgorithmId}
Gets a custom bidding algorithm.
list
GET /v4/customBiddingAlgorithms
Lists custom bidding algorithms that are accessible to the current user and can be used in bidding stratgies.
patch
PATCH /v4/customBiddingAlgorithms/{customBiddingAlgorithm.customBiddingAlgorithmId}
Updates an existing custom bidding algorithm.
uploadRules
GET /v4/customBiddingAlgorithms/{customBiddingAlgorithmId}:uploadRules
Creates a rules reference object for an AlgorithmRules file.
uploadScript
GET /v4/customBiddingAlgorithms/{customBiddingAlgorithmId}:uploadScript
Creates a custom bidding script reference object for a script file.
REST Resource: v4.customBiddingAlgorithms.rules
Methods
create
POST /v4/customBiddingAlgorithms/{customBiddingAlgorithmId}/rules
Creates a new rules resource.
get
GET /v4/customBiddingAlgorithms/{customBiddingAlgorithmId}/rules/{customBiddingAlgorithmRulesId}
Retrieves a rules resource.
list
GET /v4/customBiddingAlgorithms/{customBiddingAlgorithmId}/rules
Lists rules resources that belong to the given algorithm.
REST Resource: v4.customBiddingAlgorithms.scripts
Methods
create
POST /v4/customBiddingAlgorithms/{customBiddingAlgorithmId}/scripts
Creates a new custom bidding script.
get
GET /v4/customBiddingAlgorithms/{customBiddingAlgorithmId}/scripts/{customBiddingScriptId}
Gets a custom bidding script.
list
GET /v4/customBiddingAlgorithms/{customBiddingAlgorithmId}/scripts
Lists custom bidding scripts that belong to the given algorithm.
REST Resource: v4.customLists
Methods
get
GET /v4/customLists/{customListId}
Gets a custom list.
list
GET /v4/customLists
Lists custom lists.
REST Resource: v4.firstPartyAndPartnerAudiences
Methods
create
POST /v4/firstPartyAndPartnerAudiences
Creates a FirstPartyAndPartnerAudience.
editCustomerMatchMembers
POST /v4/firstPartyAndPartnerAudiences/{firstPartyAndPartnerAudienceId}:editCustomerMatchMembers
Updates the member list of a Customer Match audience.
get
GET /v4/firstPartyAndPartnerAudiences/{firstPartyAndPartnerAudienceId}
Gets a first party or partner audience.
list
GET /v4/firstPartyAndPartnerAudiences
Lists first party and partner audiences.
patch
PATCH /v4/firstPartyAndPartnerAudiences/{firstPartyAndPartnerAudience.firstPartyAndPartnerAudienceId}
Updates an existing FirstPartyAndPartnerAudience.
REST Resource: v4.floodlightGroups
Methods
get
GET /v4/floodlightGroups/{floodlightGroupId}
Gets a Floodlight group.
patch
PATCH /v4/floodlightGroups/{floodlightGroup.floodlightGroupId}
Updates an existing Floodlight group.
REST Resource: v4.floodlightGroups.floodlightActivities
Methods
get
GET /v4/floodlightGroups/{floodlightGroupId}/floodlightActivities/{floodlightActivityId}
Gets a Floodlight activity.
list
GET /v4/floodlightGroups/{floodlightGroupId}/floodlightActivities
Lists Floodlight activities in a Floodlight group.
REST Resource: v4.googleAudiences
Methods
get
GET /v4/googleAudiences/{googleAudienceId}
Gets a Google audience.
list
GET /v4/googleAudiences
Lists Google audiences.
REST Resource: v4.guaranteedOrders
Methods
create
POST /v4/guaranteedOrders
Creates a new guaranteed order.
editGuaranteedOrderReadAccessors
POST /v4/guaranteedOrders/{guaranteedOrderId}:editGuaranteedOrderReadAccessors
Edits read advertisers of a guaranteed order.
get
GET /v4/guaranteedOrders/{guaranteedOrderId}
Gets a guaranteed order.
list
GET /v4/guaranteedOrders
Lists guaranteed orders that are accessible to the current user.
patch
PATCH /v4/guaranteedOrders/{guaranteedOrder.guaranteedOrderId}
Updates an existing guaranteed order.
REST Resource: v4.inventorySourceGroups
Methods
create
POST /v4/inventorySourceGroups
Creates a new inventory source group.
delete
DELETE /v4/inventorySourceGroups/{inventorySourceGroupId}
Deletes an inventory source group.
get
GET /v4/inventorySourceGroups/{inventorySourceGroupId}
Gets an inventory source group.
list
GET /v4/inventorySourceGroups
Lists inventory source groups that are accessible to the current user.
patch
PATCH /v4/inventorySourceGroups/{inventorySourceGroup.inventorySourceGroupId}
Updates an inventory source group.
REST Resource: v4.inventorySourceGroups.assignedInventorySources
Methods
bulkEdit
POST /v4/inventorySourceGroups/{inventorySourceGroupId}/assignedInventorySources:bulkEdit
Bulk edits multiple assignments between inventory sources and a single inventory source group.
create
POST /v4/inventorySourceGroups/{inventorySourceGroupId}/assignedInventorySources
Creates an assignment between an inventory source and an inventory source group.
delete
DELETE /v4/inventorySourceGroups/{inventorySourceGroupId}/assignedInventorySources/{assignedInventorySourceId}
Deletes the assignment between an inventory source and an inventory source group.
list
GET /v4/inventorySourceGroups/{inventorySourceGroupId}/assignedInventorySources
Lists inventory sources assigned to an inventory source group.
REST Resource: v4.inventorySources
Methods
create
POST /v4/inventorySources
Creates a new inventory source.
editInventorySourceReadWriteAccessors
POST /v4/inventorySources/{inventorySourceId}:editInventorySourceReadWriteAccessors
Edits read/write accessors of an inventory source.
get
GET /v4/inventorySources/{inventorySourceId}
Gets an inventory source.
list
GET /v4/inventorySources
Lists inventory sources that are accessible to the current user.
patch
PATCH /v4/inventorySources/{inventorySource.inventorySourceId}
Updates an existing inventory source.
REST Resource: v4.media
Methods
download
GET /download/{resourceName=**}
Downloads media.
upload
POST /media/{resourceName=**}
POST /upload/media/{resourceName=**}
Uploads media.
REST Resource: v4.partners
Methods
editAssignedTargetingOptions
POST /v4/partners/{partnerId}:editAssignedTargetingOptions
Edits targeting options under a single partner.
get
GET /v4/partners/{partnerId}
Gets a partner.
list
GET /v4/partners
Lists partners that are accessible to the current user.
REST Resource: v4.partners.channels
Methods
create
POST /v4/partners/{partnerId}/channels
Creates a new channel.
get
GET /v4/partners/{partnerId}/channels/{channelId}
Gets a channel for a partner or advertiser.
list
GET /v4/partners/{partnerId}/channels
Lists channels for a partner or advertiser.
patch
PATCH /v4/partners/{partnerId}/channels/{channel.channelId}
Updates a channel.
REST Resource: v4.partners.channels.sites
Methods
bulkEdit
POST /v4/partners/{partnerId}/channels/{channelId}/sites:bulkEdit
Bulk edits sites under a single channel.
create
POST /v4/partners/{partnerId}/channels/{channelId}/sites
Creates a site in a channel.
delete
DELETE /v4/partners/{partnerId}/channels/{channelId}/sites/{urlOrAppId}
Deletes a site from a channel.
list
GET /v4/partners/{partnerId}/channels/{channelId}/sites
Lists sites in a channel.
replace
POST /v4/partners/{partnerId}/channels/{channelId}/sites:replace
Replaces all of the sites under a single channel.
REST Resource: v4.partners.targetingTypes.assignedTargetingOptions
Methods
create
POST /v4/partners/{partnerId}/targetingTypes/{targetingType}/assignedTargetingOptions
Assigns a targeting option to a partner.
delete
DELETE /v4/partners/{partnerId}/targetingTypes/{targetingType}/assignedTargetingOptions/{assignedTargetingOptionId}
Deletes an assigned targeting option from a partner.
get
GET /v4/partners/{partnerId}/targetingTypes/{targetingType}/assignedTargetingOptions/{assignedTargetingOptionId}
Gets a single targeting option assigned to a partner.
list
GET /v4/partners/{partnerId}/targetingTypes/{targetingType}/assignedTargetingOptions
Lists the targeting options assigned to a partner.
REST Resource: v4.sdfdownloadtasks
Methods
create
POST /v4/sdfdownloadtasks
Creates an SDF Download Task.
REST Resource: v4.sdfdownloadtasks.operations
Methods
get
GET /v4/{name=sdfdownloadtasks/operations/*}
Gets the latest state of an asynchronous SDF download task operation.
REST Resource: v4.targetingTypes.targetingOptions
Methods
get
GET /v4/targetingTypes/{targetingType}/targetingOptions/{targetingOptionId}
Gets a single targeting option.
list
GET /v4/targetingTypes/{targetingType}/targetingOptions
Lists targeting options of a given type.
search
POST /v4/targetingTypes/{targetingType}/targetingOptions:search
Searches for targeting options of a given type based on the given search terms.
REST Resource: v4.users
Methods
bulkEditAssignedUserRoles
POST /v4/users/{userId}:bulkEditAssignedUserRoles
Bulk edits user roles for a user.
create
POST /v4/users
Creates a new user.
delete
DELETE /v4/users/{userId}
Deletes a user.
get
GET /v4/users/{userId}
Gets a user.
list
GET /v4/users
Lists users that are accessible to the current user.
patch
PATCH /v4/users/{user.userId}
Updates an existing user.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-02-24 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-02-24 UTC."],[],["The Display & Video 360 API v4 automates workflows through the `displayvideo.googleapis.com` service. Key actions include managing advertisers, campaigns, insertion orders, line items, and creatives. The API allows the manipulation of targeting options, channels, and sites. Functionality extends to managing audiences, custom bidding algorithms, and floodlight groups. Additional features include managing inventory sources, guaranteed orders, SDF download tasks, and users, with operations such as creating, getting, listing, updating, and deleting entities.\n"]]
