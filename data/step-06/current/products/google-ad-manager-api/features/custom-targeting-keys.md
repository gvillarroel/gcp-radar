---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:16:19.675Z"
product_name: "Google Ad Manager API"
product_slug: "google-ad-manager-api"
feature_name: "Custom targeting keys"
feature_slug: "custom-targeting-keys"
latest_feature_date: "2025-12-04"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/ad-manager/api/beta/reference/rest/v1/ListCustomTargetingValuesResponse"
  - "https://developers.google.com/ad-manager/api/beta/reference/rest"
  - "https://developers.google.com/ad-manager/api/how_to"
  - "https://developers.google.com/ad-manager/api/reference/latest/LineItemService.Targeting"
keywords:
  - "custom"
  - "targeting"
  - "keys"
  - "the"
  - "api"
  - "supports"
  - "creating"
  - "and"
---

# Custom targeting keys

Product: Google Ad Manager API
Coverage: MEDIUM

## Step 02 Summary

The API supports creating and updating custom targeting keys.

## Extended Definition

The API supports creating and updating custom targeting keys.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/ad-manager/api/beta/reference/rest/v1/ListCustomTargetingValuesResponse](https://developers.google.com/ad-manager/api/beta/reference/rest/v1/ListCustomTargetingValuesResponse)
- [https://developers.google.com/ad-manager/api/beta/reference/rest](https://developers.google.com/ad-manager/api/beta/reference/rest)
- [https://developers.google.com/ad-manager/api/how_to](https://developers.google.com/ad-manager/api/how_to)
- [https://developers.google.com/ad-manager/api/reference/latest/LineItemService.Targeting](https://developers.google.com/ad-manager/api/reference/latest/LineItemService.Targeting)

## Supporting Pages

### "ListCustomTargetingValuesResponse \_|\_ Ad Manager API (Beta) \_|\_ Google\

- URL: [https://developers.google.com/ad-manager/api/beta/reference/rest/v1/ListCustomTargetingValuesResponse](https://developers.google.com/ad-manager/api/beta/reference/rest/v1/ListCustomTargetingValuesResponse)
- Source ID: `site-api-reference`
- Final score: 190
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Products Ad Manager API (Beta) Reference Send feedback ListCustomTargetingValuesResponse Stay organized with collections Save and categorize content based on your preferences.
- Page Summary outlined flag The ListCustomTargetingValuesResponse object is the response for ListCustomTargetingValuesRequest and contains matching CustomTargetingValue objects.
- The totalSize field indicates the total number of CustomTargetingValue objects after filtering, if applicable, and is included based on a response field mask.
- JSON representation { "customTargetingValues" : [ { object ( CustomTargetingValue ) } ] , "nextPageToken" : string , "totalSize" : integer } Fields customTargetingValues[] object ( CustomTargetingValue ) The CustomTargetingValue objects from the specified network. nextPageToken string A token, which can be sent as pageToken to retrieve the next page.

### Google Ad Manager API \_|\_ Ad Manager API (Beta) \_|\_ Google for Developers

- URL: [https://developers.google.com/ad-manager/api/beta/reference/rest](https://developers.google.com/ad-manager/api/beta/reference/rest)
- Source ID: `site-api-reference`
- Final score: 189
- Re-rank relevance: N/A

Evidence snippets:
- REST Resource: v1.networks REST Resource: v1.networks.adUnitSizes REST Resource: v1.networks.adUnits REST Resource: v1.networks.applications REST Resource: v1.networks.audienceSegments REST Resource: v1.networks.bandwidthGroups REST Resource: v1.networks.browserLanguages REST Resource: v1.networks.browsers REST Resource: v1.networks.cmsMetadataKeys REST Resource: v1.networks.cmsMetadataValues REST Resource: v1.networks.companies REST Resource: v1.networks.contacts REST Resource: v1.networks.content REST Resource: v1.networks.contentBundles REST Resource: v1.networks.contentLabels REST Resource: v1.networks.creativeTemplates REST Resource: v1.networks.customFields REST Resource: v1.networks.customTargetingKeys REST Resource: v1.networks.customTargetingKeys.customTargetingValues REST Resource: v1.networks.customTargetingValues REST Resource: v1.networks.deviceCapabilities REST Resource: v1.networks.deviceCategories REST Resource: v1.networks.deviceManufacturers REST Resource: v1.networks.entitySignalsMappings REST Resource: v1.networks.geoTargets REST Resource: v1.networks.labels REST Resource: v1.networks.lineItems REST Resource: v1.networks.linkedDevices REST Resource: v1.networks.mobileCarriers REST Resource: v1.networks.mobileDeviceSubmodels REST Resource: v1.networks.mobileDevices REST Resource: v1.networks.operatingSystemVersions REST Resource: v1.networks.operatingSystems REST Resource: v1.networks.operations.reports.runs REST Resource: v1.networks.orders REST Resource: v1.networks.placements REST Resource: v1.networks.privateAuctionDeals REST Resource: v1.networks.privateAuctions REST Resource: v1.networks.programmaticBuyers REST Resource: v1.networks.reports REST Resource: v1.networks.reports.results REST Resource: v1.networks.roles REST Resource: v1.networks.sites REST Resource: v1.networks.taxonomyCategories REST Resource: v1.networks.teams REST Resource: v1.networks.users REST Resource: v1.networks.webProperties.adReviewCenterAds REST Resource: v1.operations Service: admanager.googleapis.com Discovery document A Discovery Document is a machine-readable specification for describing and consuming REST APIs.
- REST Resource: v1.networks.customTargetingKeys Methods batchActivate POST /v1/{parent}/customTargetingKeys:batchActivate API to batch activate CustomTargetingKey objects. batchCreate POST /v1/{parent}/customTargetingKeys:batchCreate API to batch create CustomTargetingKey objects. batchDeactivate POST /v1/{parent}/customTargetingKeys:batchDeactivate Deactivates a list of CustomTargetingKey objects. batchUpdate POST /v1/{parent}/customTargetingKeys:batchUpdate API to batch update CustomTargetingKey objects. create POST /v1/{parent}/customTargetingKeys API to create a CustomTargetingKey object. get GET /v1/{name} API to retrieve a CustomTargetingKey object. list GET /v1/{parent}/customTargetingKeys API to retrieve a list of CustomTargetingKey objects. patch PATCH /v1/{customTargetingKey.name} API to update a CustomTargetingKey object.
- REST Resource: v1.networks.customTargetingKeys.customTargetingValues Methods get GET /v1/{name} API to retrieve a CustomTargetingValue object. list GET /v1/{parent}/customTargetingValues API to retrieve a list of CustomTargetingValue objects.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-01 UTC."],[],["This API allows managing Ad Manager data through various REST resources.

### How To Guide \_|\_ Ad Manager SOAP API \_|\_ Google for Developers

- URL: [https://developers.google.com/ad-manager/api/how_to](https://developers.google.com/ad-manager/api/how_to)
- Source ID: `site-docs-root`
- Final score: 179
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-02-25 UTC."],[],["The API facilitates several core actions: creating users via createUsers with specified roles, and retrieving the effective root AdUnit using NetworkService.getCurrentNetwork().
- Creating a Creative Different types of creatives support different components: for example, an image creative supports a single source file for the image; a flash creative supports two underlying asset files: a flash file and a backup image file, in case the flash file cannot be served.
- Creating an Order To create an order, simply create an Order object and set the advertiser, salesperson, and trafficker IDs to the appropriate users, assign a unique name, and call createOrders() .
- Line items require order creation, then crafting LineItem, InventoryTargeting, and Targeting objects before utilizing createLineItems().

### type Targeting (v202602) \_|\_ Ad Manager SOAP API \_|\_ Google for Developers

- URL: [https://developers.google.com/ad-manager/api/reference/latest/LineItemService.Targeting](https://developers.google.com/ad-manager/api/reference/latest/LineItemService.Targeting)
- Source ID: `site-docs-root`
- Final score: 170
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This attribute is optional. contentTargeting ContentTargeting Specifies the video categories and individual videos targeted by the LineItem . videoPositionTargeting VideoPositionTargeting Specifies targeting against video position types. mobileApplicationTargeting MobileApplicationTargeting Specifies targeting against mobile applications. buyerUserListTargeting BuyerUserListTargeting Specifies whether buyer user lists are targeted on a programmatic LineItem or ProposalLineItem .
- Once the LineItem is updated or modified with custom targeting, the server may return a normalized, but equivalent representation of the custom targeting expression. customTargeting will have up to three levels of expressions including itself.
- The resulting custom targeting tree would be of the form: userDomainTargeting UserDomainTargeting Specifies the domains or subdomains that are targeted or excluded by the LineItem .
- The line item must target at least one ad unit or placement. dayPartTargeting DayPartTargeting Specifies the days of the week and times that are targeted by the LineItem .

