---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:16:19.678Z"
product_name: "Google Ad Manager API"
product_slug: "google-ad-manager-api"
feature_name: "Browser"
feature_slug: "browser"
latest_feature_date: "2025-08-12"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/ad-manager/api/beta/reference/rest"
  - "https://developers.google.com/ad-manager/api/reference/latest/LineItemService.LineItem"
  - "https://developers.google.com/ad-manager/api/beta/reference/rest/v1/networks.adUnits"
  - "https://developers.google.com/ad-manager/api/third-parties"
keywords:
  - "browser"
  - "resource"
  - "for"
  - "information"
  - "in"
  - "the"
  - "ad"
  - "manager"
---

# Browser

Product: Google Ad Manager API
Coverage: MEDIUM

## Step 02 Summary

A resource for browser information in the Google Ad Manager API.

## Extended Definition

A resource for browser information in the Google Ad Manager API.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/ad-manager/api/beta/reference/rest](https://developers.google.com/ad-manager/api/beta/reference/rest)
- [https://developers.google.com/ad-manager/api/reference/latest/LineItemService.LineItem](https://developers.google.com/ad-manager/api/reference/latest/LineItemService.LineItem)
- [https://developers.google.com/ad-manager/api/beta/reference/rest/v1/networks.adUnits](https://developers.google.com/ad-manager/api/beta/reference/rest/v1/networks.adUnits)
- [https://developers.google.com/ad-manager/api/third-parties](https://developers.google.com/ad-manager/api/third-parties)

## Supporting Pages

### Google Ad Manager API \_|\_ Ad Manager API (Beta) \_|\_ Google for Developers

- URL: [https://developers.google.com/ad-manager/api/beta/reference/rest](https://developers.google.com/ad-manager/api/beta/reference/rest)
- Source ID: `site-api-reference`
- Final score: 273
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-01 UTC."],[],["This API allows managing Ad Manager data through various REST resources.
- REST Resource: v1.networks REST Resource: v1.networks.adUnitSizes REST Resource: v1.networks.adUnits REST Resource: v1.networks.applications REST Resource: v1.networks.audienceSegments REST Resource: v1.networks.bandwidthGroups REST Resource: v1.networks.browserLanguages REST Resource: v1.networks.browsers REST Resource: v1.networks.cmsMetadataKeys REST Resource: v1.networks.cmsMetadataValues REST Resource: v1.networks.companies REST Resource: v1.networks.contacts REST Resource: v1.networks.content REST Resource: v1.networks.contentBundles REST Resource: v1.networks.contentLabels REST Resource: v1.networks.creativeTemplates REST Resource: v1.networks.customFields REST Resource: v1.networks.customTargetingKeys REST Resource: v1.networks.customTargetingKeys.customTargetingValues REST Resource: v1.networks.customTargetingValues REST Resource: v1.networks.deviceCapabilities REST Resource: v1.networks.deviceCategories REST Resource: v1.networks.deviceManufacturers REST Resource: v1.networks.entitySignalsMappings REST Resource: v1.networks.geoTargets REST Resource: v1.networks.labels REST Resource: v1.networks.lineItems REST Resource: v1.networks.linkedDevices REST Resource: v1.networks.mobileCarriers REST Resource: v1.networks.mobileDeviceSubmodels REST Resource: v1.networks.mobileDevices REST Resource: v1.networks.operatingSystemVersions REST Resource: v1.networks.operatingSystems REST Resource: v1.networks.operations.reports.runs REST Resource: v1.networks.orders REST Resource: v1.networks.placements REST Resource: v1.networks.privateAuctionDeals REST Resource: v1.networks.privateAuctions REST Resource: v1.networks.programmaticBuyers REST Resource: v1.networks.reports REST Resource: v1.networks.reports.results REST Resource: v1.networks.roles REST Resource: v1.networks.sites REST Resource: v1.networks.taxonomyCategories REST Resource: v1.networks.teams REST Resource: v1.networks.users REST Resource: v1.networks.webProperties.adReviewCenterAds REST Resource: v1.operations Service: admanager.googleapis.com Discovery document A Discovery Document is a machine-readable specification for describing and consuming REST APIs.
- This service has the following service endpoint and all URIs below are relative to this service endpoint: https://admanager.googleapis.com REST Resource: v1.networks Methods get GET /v1/{name} API to retrieve a Network object. list GET /v1/networks API to retrieve all the networks the current user has access to.
- This service provides the following discovery document: https://admanager.googleapis.com/$discovery/rest?version=v1 Service endpoint A service endpoint is a base URL that specifies the network address of an API service.

### type LineItem (v202602) \_|\_ Ad Manager SOAP API \_|\_ Google for Developers

- URL: [https://developers.google.com/ad-manager/api/reference/latest/LineItemService.LineItem](https://developers.google.com/ad-manager/api/reference/latest/LineItemService.LineItem)
- Source ID: `site-docs-root`
- Final score: 263
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- See the Ad Manager Help Center for more information. videoMaxDuration xsd: long The max duration of a video creative associated with this LineItem in milliseconds.
- More information can be found on the Ad Manager Help Center .
- It is required and meaningful only if the LineItem.costType is CostType.CPA or if the LineItem.lineItemType is LineItemType.SPONSORSHIP and LineItem.costType is CostType.CPM . grpSettings GrpSettings Contains the information for a line item which has a target GRP demographic. dealInfo LineItemDealInfoDto The deal information associated with this line item, if it is programmatic. viewabilityProviderCompanyIds xsd: long[] Optional IDs of the Company that provide ad verification for this line item.
- This is feature is only available for Ad Manager 360 accounts. unlimitedEndDateTime xsd: boolean Specifies whether or not the LineItem has an end time.

### "REST Resource: networks.adUnits \_|\_ Ad Manager API (Beta) \_|\_ Google\

- URL: [https://developers.google.com/ad-manager/api/beta/reference/rest/v1/networks.adUnits](https://developers.google.com/ad-manager/api/beta/reference/rest/v1/networks.adUnits)
- Source ID: `site-api-reference`
- Final score: 257
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-02-10 UTC."],[],["The content details the AdUnit resource, its JSON representation, and related components.
- AdUnit objects can have associated parent information, sizes with environment types and companions, status indicating their availability, and target window settings.
- Key information includes: AdUnit identification (name, ID, code), hierarchical structure (parent, path), display settings (name, target window), serving properties (status, sizes, environment), team associations, description, refresh options, label and frequency cap management, Smart Size mode, and adsense settings.
- Resource: AdUnit JSON representation AdUnitParent JSON representation AdUnitStatus TargetWindow AdUnitSize JSON representation EnvironmentType LabelFrequencyCap JSON representation FrequencyCap JSON representation TimeUnit SmartSizeMode Methods Resource: AdUnit The AdUnit resource.

### "Integrating with Google Ad Manager as a third party \_|\_ Ad Manager SOAP\

- URL: [https://developers.google.com/ad-manager/api/third-parties](https://developers.google.com/ad-manager/api/third-parties)
- Source ID: `site-docs-root`
- Final score: 251
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Authentication: How to properly access a client's Ad Manager network In order for your application to access your client's Ad Manager network, you need to set up your authentication workflow in a secure manner.
- Page Summary outlined flag Third parties integrate with Ad Manager for their clients, who are Ad Manager customers, and this guide covers best practices for these integrations.
- No matter what you do for step 1, in step 2 you'll need to ask each new client to add the appropriate Google Account you created for them as a user to their Ad Manager network.
- Instead, they create services or integrations with Ad Manager for their clients, who are Ad Manager customers.

