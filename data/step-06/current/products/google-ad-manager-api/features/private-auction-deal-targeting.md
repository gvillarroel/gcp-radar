---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:16:19.685Z"
product_name: "Google Ad Manager API"
product_slug: "google-ad-manager-api"
feature_name: "Private auction deal targeting"
feature_slug: "private-auction-deal-targeting"
latest_feature_date: "2025-06-26"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/ad-manager/api/beta/reference/rest"
  - "https://developers.google.com/ad-manager/api/reference/latest/LineItemService.LineItem"
  - "https://developers.google.com/ad-manager/api/how_to"
  - "https://developers.google.com/ad-manager/api/reference/latest/LineItemService.Targeting"
keywords:
  - "private"
  - "auction"
  - "deal"
  - "targeting"
  - "the"
  - "api"
  - "now"
  - "supports"
---

# Private auction deal targeting

Product: Google Ad Manager API
Coverage: MEDIUM

## Step 02 Summary

The API now supports targeting on private auction deals.

## Extended Definition

The API now supports targeting on private auction deals.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/ad-manager/api/beta/reference/rest](https://developers.google.com/ad-manager/api/beta/reference/rest)
- [https://developers.google.com/ad-manager/api/reference/latest/LineItemService.LineItem](https://developers.google.com/ad-manager/api/reference/latest/LineItemService.LineItem)
- [https://developers.google.com/ad-manager/api/how_to](https://developers.google.com/ad-manager/api/how_to)
- [https://developers.google.com/ad-manager/api/reference/latest/LineItemService.Targeting](https://developers.google.com/ad-manager/api/reference/latest/LineItemService.Targeting)

## Supporting Pages

### Google Ad Manager API \_|\_ Ad Manager API (Beta) \_|\_ Google for Developers

- URL: [https://developers.google.com/ad-manager/api/beta/reference/rest](https://developers.google.com/ad-manager/api/beta/reference/rest)
- Source ID: `site-api-reference`
- Final score: 182
- Re-rank relevance: N/A

Evidence snippets:
- REST Resource: v1.networks REST Resource: v1.networks.adUnitSizes REST Resource: v1.networks.adUnits REST Resource: v1.networks.applications REST Resource: v1.networks.audienceSegments REST Resource: v1.networks.bandwidthGroups REST Resource: v1.networks.browserLanguages REST Resource: v1.networks.browsers REST Resource: v1.networks.cmsMetadataKeys REST Resource: v1.networks.cmsMetadataValues REST Resource: v1.networks.companies REST Resource: v1.networks.contacts REST Resource: v1.networks.content REST Resource: v1.networks.contentBundles REST Resource: v1.networks.contentLabels REST Resource: v1.networks.creativeTemplates REST Resource: v1.networks.customFields REST Resource: v1.networks.customTargetingKeys REST Resource: v1.networks.customTargetingKeys.customTargetingValues REST Resource: v1.networks.customTargetingValues REST Resource: v1.networks.deviceCapabilities REST Resource: v1.networks.deviceCategories REST Resource: v1.networks.deviceManufacturers REST Resource: v1.networks.entitySignalsMappings REST Resource: v1.networks.geoTargets REST Resource: v1.networks.labels REST Resource: v1.networks.lineItems REST Resource: v1.networks.linkedDevices REST Resource: v1.networks.mobileCarriers REST Resource: v1.networks.mobileDeviceSubmodels REST Resource: v1.networks.mobileDevices REST Resource: v1.networks.operatingSystemVersions REST Resource: v1.networks.operatingSystems REST Resource: v1.networks.operations.reports.runs REST Resource: v1.networks.orders REST Resource: v1.networks.placements REST Resource: v1.networks.privateAuctionDeals REST Resource: v1.networks.privateAuctions REST Resource: v1.networks.programmaticBuyers REST Resource: v1.networks.reports REST Resource: v1.networks.reports.results REST Resource: v1.networks.roles REST Resource: v1.networks.sites REST Resource: v1.networks.taxonomyCategories REST Resource: v1.networks.teams REST Resource: v1.networks.users REST Resource: v1.networks.webProperties.adReviewCenterAds REST Resource: v1.operations Service: admanager.googleapis.com Discovery document A Discovery Document is a machine-readable specification for describing and consuming REST APIs.
- REST Resource: v1.networks.privateAuctionDeals Methods create POST /v1/{parent}/privateAuctionDeals API to create a PrivateAuctionDeal object. get GET /v1/{name} API to retrieve a PrivateAuctionDeal object. list GET /v1/{parent}/privateAuctionDeals API to retrieve a list of PrivateAuctionDeal objects. patch PATCH /v1/{privateAuctionDeal.name} API to update a PrivateAuctionDeal object.
- REST Resource: v1.networks.privateAuctions Methods create POST /v1/{parent}/privateAuctions API to create a PrivateAuction object. get GET /v1/{name} API to retrieve a PrivateAuction object. list GET /v1/{parent}/privateAuctions API to retrieve a list of PrivateAuction objects. patch PATCH /v1/{privateAuction.name} API to update a PrivateAuction object.
- REST Resource: v1.networks.customTargetingKeys Methods batchActivate POST /v1/{parent}/customTargetingKeys:batchActivate API to batch activate CustomTargetingKey objects. batchCreate POST /v1/{parent}/customTargetingKeys:batchCreate API to batch create CustomTargetingKey objects. batchDeactivate POST /v1/{parent}/customTargetingKeys:batchDeactivate Deactivates a list of CustomTargetingKey objects. batchUpdate POST /v1/{parent}/customTargetingKeys:batchUpdate API to batch update CustomTargetingKey objects. create POST /v1/{parent}/customTargetingKeys API to create a CustomTargetingKey object. get GET /v1/{name} API to retrieve a CustomTargetingKey object. list GET /v1/{parent}/customTargetingKeys API to retrieve a list of CustomTargetingKey objects. patch PATCH /v1/{customTargetingKey.name} API to update a CustomTargetingKey object.

### type LineItem (v202602) \_|\_ Ad Manager SOAP API \_|\_ Google for Developers

- URL: [https://developers.google.com/ad-manager/api/reference/latest/LineItemService.LineItem](https://developers.google.com/ad-manager/api/reference/latest/LineItemService.LineItem)
- Source ID: `site-docs-root`
- Final score: 132
- Re-rank relevance: N/A

Evidence snippets:
- The LineItem.lineItemType must be LineItemType.STANDARD UNKNOWN The value returned if the actual value is not exposed by the requested API version. discountType LineItemDiscountType The type of discount being applied to a LineItem , either percentage based or absolute.
- UNKNOWN The value returned if the actual value is not exposed by the requested API version. thirdPartyMeasurementSettings ThirdPartyMeasurementSettings youtubeKidsRestricted xsd: boolean Designates this line item as intended for YT Kids app.
- UNKNOWN The value returned if the actual value is not exposed by the requested API version. customPacingCurve CustomPacingCurve The curve that is used to pace the line item's delivery.
- UNKNOWN The value returned if the actual value is not exposed by the requested API version. companionDeliveryOption CompanionDeliveryOption The delivery option for companions.

### How To Guide \_|\_ Ad Manager SOAP API \_|\_ Google for Developers

- URL: [https://developers.google.com/ad-manager/api/how_to](https://developers.google.com/ad-manager/api/how_to)
- Source ID: `site-docs-root`
- Final score: 131
- Re-rank relevance: N/A

Evidence snippets:
- The Ad Manager API (Beta) is now available.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-02-25 UTC."],[],["The API facilitates several core actions: creating users via createUsers with specified roles, and retrieving the effective root AdUnit using NetworkService.getCurrentNetwork().
- Creating a Creative Different types of creatives support different components: for example, an image creative supports a single source file for the image; a flash creative supports two underlying asset files: a flash file and a backup image file, in case the flash file cannot be served.
- For example, if you are trying out the API for the first time, instead of performing every API call as an Administrator (the default for your email address), you may want to create a few users with roles such as Salesperson, Trafficker, or Advertiser to test real-world workflows.

### type Targeting (v202602) \_|\_ Ad Manager SOAP API \_|\_ Google for Developers

- URL: [https://developers.google.com/ad-manager/api/reference/latest/LineItemService.Targeting](https://developers.google.com/ad-manager/api/reference/latest/LineItemService.Targeting)
- Source ID: `site-docs-root`
- Final score: 127
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Namespace https://www.google.com/apis/ads/publisher/v202602 Field geoTargeting GeoTargeting Specifies what geographical locations are targeted by the LineItem .
- The Ad Manager API (Beta) is now available.
- This attribute is optional. contentTargeting ContentTargeting Specifies the video categories and individual videos targeted by the LineItem . videoPositionTargeting VideoPositionTargeting Specifies targeting against video position types. mobileApplicationTargeting MobileApplicationTargeting Specifies targeting against mobile applications. buyerUserListTargeting BuyerUserListTargeting Specifies whether buyer user lists are targeted on a programmatic LineItem or ProposalLineItem .
- Once the LineItem is updated or modified with custom targeting, the server may return a normalized, but equivalent representation of the custom targeting expression. customTargeting will have up to three levels of expressions including itself.

