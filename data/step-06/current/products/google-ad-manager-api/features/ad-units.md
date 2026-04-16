---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:16:19.672Z"
product_name: "Google Ad Manager API"
product_slug: "google-ad-manager-api"
feature_name: "Ad units"
feature_slug: "ad-units"
latest_feature_date: "2025-12-04"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/ad-manager/api/beta/reference/rest/v1/networks.adUnits"
  - "https://developers.google.com/ad-manager/api/beta/reference/rest/v1/networks.adUnits/list"
  - "https://developers.google.com/ad-manager/api/reference/latest/InventoryService.AdUnit"
  - "https://developers.google.com/ad-manager/api/beta/reference/rest"
keywords:
  - "ad"
  - "units"
  - "the"
  - "api"
  - "supports"
  - "creating"
  - "and"
  - "updating"
---

# Ad units

Product: Google Ad Manager API
Coverage: MEDIUM

## Step 02 Summary

The API supports creating and updating ad units.

## Extended Definition

The API supports creating and updating ad units.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/ad-manager/api/beta/reference/rest/v1/networks.adUnits](https://developers.google.com/ad-manager/api/beta/reference/rest/v1/networks.adUnits)
- [https://developers.google.com/ad-manager/api/beta/reference/rest/v1/networks.adUnits/list](https://developers.google.com/ad-manager/api/beta/reference/rest/v1/networks.adUnits/list)
- [https://developers.google.com/ad-manager/api/reference/latest/InventoryService.AdUnit](https://developers.google.com/ad-manager/api/reference/latest/InventoryService.AdUnit)
- [https://developers.google.com/ad-manager/api/beta/reference/rest](https://developers.google.com/ad-manager/api/beta/reference/rest)

## Supporting Pages

### "REST Resource: networks.adUnits \_|\_ Ad Manager API (Beta) \_|\_ Google\

- URL: [https://developers.google.com/ad-manager/api/beta/reference/rest/v1/networks.adUnits](https://developers.google.com/ad-manager/api/beta/reference/rest/v1/networks.adUnits)
- Source ID: `site-api-reference`
- Final score: 256
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Products Ad Manager API (Beta) Reference Send feedback REST Resource: networks.adUnits Stay organized with collections Save and categorize content based on your preferences.
- Frequency capping for AdUnits can be applied using labels or standard frequency cap settings, specifying the maximum impressions, time amount, and time unit.
- This value is inherited from ancestor AdUnits and defaults to TOP if no AdUnit in the hierarchy specifies it. description string Optional.
- AdUnitSize Represents the size, environment, and companions of an ad in an ad unit.

### "Method: networks.adUnits.list \_|\_ Ad Manager API (Beta) \_|\_ Google for\

- URL: [https://developers.google.com/ad-manager/api/beta/reference/rest/v1/networks.adUnits/list](https://developers.google.com/ad-manager/api/beta/reference/rest/v1/networks.adUnits/list)
- Source ID: `site-api-reference`
- Final score: 240
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-09 UTC."],[],["This API retrieves AdUnit objects via a GET request to https://admanager.googleapis.com/v1/{parent}/adUnits.
- Home Products Ad Manager API (Beta) Reference Send feedback Method: networks.adUnits.list Stay organized with collections Save and categorize content based on your preferences.
- The response body contains an array of adUnits, nextPageToken for pagination, and totalSize.
- If successful, the response body contains data with the following structure: JSON representation { "adUnits" : [ { object ( AdUnit ) } ] , "nextPageToken" : string , "totalSize" : integer } Fields adUnits[] object ( AdUnit ) The AdUnit from the specified network. nextPageToken string A token, which can be sent as pageToken to retrieve the next page.

### type AdUnit (v202602) \_|\_ Ad Manager SOAP API \_|\_ Google for Developers

- URL: [https://developers.google.com/ad-manager/api/reference/latest/InventoryService.AdUnit](https://developers.google.com/ad-manager/api/reference/latest/InventoryService.AdUnit)
- Source ID: `site-docs-root`
- Final score: 232
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This field is readonly and is assigned by Google. appliedLabels AppliedLabel [] The set of labels applied directly to this ad unit. effectiveAppliedLabels AppliedLabel [] Contains the set of labels applied directly to the ad unit as well as those inherited from the parent ad units.
- This field is readonly and is assigned by Google. effectiveTeamIds xsd: long[] The IDs of all teams that this ad unit is on as well as those inherited from parent ad units.
- DYNAMIC SIZE Height and width are ranges. refreshRate xsd: int The interval in seconds which ad units in mobile apps automatically refresh.
- This value is read-only and is set by Google. appliedTeamIds xsd: long[] The IDs of all teams that this ad unit is on directly. lastModifiedDateTime DateTime The date and time this ad unit was last modified. smartSizeMode SmartSizeMode The smart size mode for this ad unit.

### Google Ad Manager API \_|\_ Ad Manager API (Beta) \_|\_ Google for Developers

- URL: [https://developers.google.com/ad-manager/api/beta/reference/rest](https://developers.google.com/ad-manager/api/beta/reference/rest)
- Source ID: `site-api-reference`
- Final score: 228
- Re-rank relevance: N/A

Evidence snippets:
- The API utilizes REST resources like networks, ad units, reports, and more for various functionalities.
- REST Resource: v1.networks REST Resource: v1.networks.adUnitSizes REST Resource: v1.networks.adUnits REST Resource: v1.networks.applications REST Resource: v1.networks.audienceSegments REST Resource: v1.networks.bandwidthGroups REST Resource: v1.networks.browserLanguages REST Resource: v1.networks.browsers REST Resource: v1.networks.cmsMetadataKeys REST Resource: v1.networks.cmsMetadataValues REST Resource: v1.networks.companies REST Resource: v1.networks.contacts REST Resource: v1.networks.content REST Resource: v1.networks.contentBundles REST Resource: v1.networks.contentLabels REST Resource: v1.networks.creativeTemplates REST Resource: v1.networks.customFields REST Resource: v1.networks.customTargetingKeys REST Resource: v1.networks.customTargetingKeys.customTargetingValues REST Resource: v1.networks.customTargetingValues REST Resource: v1.networks.deviceCapabilities REST Resource: v1.networks.deviceCategories REST Resource: v1.networks.deviceManufacturers REST Resource: v1.networks.entitySignalsMappings REST Resource: v1.networks.geoTargets REST Resource: v1.networks.labels REST Resource: v1.networks.lineItems REST Resource: v1.networks.linkedDevices REST Resource: v1.networks.mobileCarriers REST Resource: v1.networks.mobileDeviceSubmodels REST Resource: v1.networks.mobileDevices REST Resource: v1.networks.operatingSystemVersions REST Resource: v1.networks.operatingSystems REST Resource: v1.networks.operations.reports.runs REST Resource: v1.networks.orders REST Resource: v1.networks.placements REST Resource: v1.networks.privateAuctionDeals REST Resource: v1.networks.privateAuctions REST Resource: v1.networks.programmaticBuyers REST Resource: v1.networks.reports REST Resource: v1.networks.reports.results REST Resource: v1.networks.roles REST Resource: v1.networks.sites REST Resource: v1.networks.taxonomyCategories REST Resource: v1.networks.teams REST Resource: v1.networks.users REST Resource: v1.networks.webProperties.adReviewCenterAds REST Resource: v1.operations Service: admanager.googleapis.com Discovery document A Discovery Document is a machine-readable specification for describing and consuming REST APIs.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-01 UTC."],[],["This API allows managing Ad Manager data through various REST resources.
- This service has the following service endpoint and all URIs below are relative to this service endpoint: https://admanager.googleapis.com REST Resource: v1.networks Methods get GET /v1/{name} API to retrieve a Network object. list GET /v1/networks API to retrieve all the networks the current user has access to.

