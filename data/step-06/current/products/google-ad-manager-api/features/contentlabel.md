---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:16:19.674Z"
product_name: "Google Ad Manager API"
product_slug: "google-ad-manager-api"
feature_name: "ContentLabel"
feature_slug: "contentlabel"
latest_feature_date: "2025-12-04"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/ad-manager/api/beta/reference/rest"
  - "https://developers.google.com/ad-manager/api/reference/latest/LineItemService.Targeting"
  - "https://developers.google.com/ad-manager/api/reference/latest/LineItemService.LineItem"
  - "https://developers.google.com/ad-manager/api/beta/reference/rest/v1/networks.adUnits"
keywords:
  - "contentlabel"
  - "resource"
  - "for"
  - "content"
  - "labels"
  - "in"
  - "the"
  - "ad"
---

# ContentLabel

Product: Google Ad Manager API
Coverage: MEDIUM

## Step 02 Summary

A resource for content labels in the Google Ad Manager API.

## Extended Definition

A resource for content labels in the Google Ad Manager API.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/ad-manager/api/beta/reference/rest](https://developers.google.com/ad-manager/api/beta/reference/rest)
- [https://developers.google.com/ad-manager/api/reference/latest/LineItemService.Targeting](https://developers.google.com/ad-manager/api/reference/latest/LineItemService.Targeting)
- [https://developers.google.com/ad-manager/api/reference/latest/LineItemService.LineItem](https://developers.google.com/ad-manager/api/reference/latest/LineItemService.LineItem)
- [https://developers.google.com/ad-manager/api/beta/reference/rest/v1/networks.adUnits](https://developers.google.com/ad-manager/api/beta/reference/rest/v1/networks.adUnits)

## Supporting Pages

### Google Ad Manager API \_|\_ Ad Manager API (Beta) \_|\_ Google for Developers

- URL: [https://developers.google.com/ad-manager/api/beta/reference/rest](https://developers.google.com/ad-manager/api/beta/reference/rest)
- Source ID: `site-api-reference`
- Final score: 239
- Re-rank relevance: N/A

Evidence snippets:
- REST Resource: v1.networks REST Resource: v1.networks.adUnitSizes REST Resource: v1.networks.adUnits REST Resource: v1.networks.applications REST Resource: v1.networks.audienceSegments REST Resource: v1.networks.bandwidthGroups REST Resource: v1.networks.browserLanguages REST Resource: v1.networks.browsers REST Resource: v1.networks.cmsMetadataKeys REST Resource: v1.networks.cmsMetadataValues REST Resource: v1.networks.companies REST Resource: v1.networks.contacts REST Resource: v1.networks.content REST Resource: v1.networks.contentBundles REST Resource: v1.networks.contentLabels REST Resource: v1.networks.creativeTemplates REST Resource: v1.networks.customFields REST Resource: v1.networks.customTargetingKeys REST Resource: v1.networks.customTargetingKeys.customTargetingValues REST Resource: v1.networks.customTargetingValues REST Resource: v1.networks.deviceCapabilities REST Resource: v1.networks.deviceCategories REST Resource: v1.networks.deviceManufacturers REST Resource: v1.networks.entitySignalsMappings REST Resource: v1.networks.geoTargets REST Resource: v1.networks.labels REST Resource: v1.networks.lineItems REST Resource: v1.networks.linkedDevices REST Resource: v1.networks.mobileCarriers REST Resource: v1.networks.mobileDeviceSubmodels REST Resource: v1.networks.mobileDevices REST Resource: v1.networks.operatingSystemVersions REST Resource: v1.networks.operatingSystems REST Resource: v1.networks.operations.reports.runs REST Resource: v1.networks.orders REST Resource: v1.networks.placements REST Resource: v1.networks.privateAuctionDeals REST Resource: v1.networks.privateAuctions REST Resource: v1.networks.programmaticBuyers REST Resource: v1.networks.reports REST Resource: v1.networks.reports.results REST Resource: v1.networks.roles REST Resource: v1.networks.sites REST Resource: v1.networks.taxonomyCategories REST Resource: v1.networks.teams REST Resource: v1.networks.users REST Resource: v1.networks.webProperties.adReviewCenterAds REST Resource: v1.operations Service: admanager.googleapis.com Discovery document A Discovery Document is a machine-readable specification for describing and consuming REST APIs.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-01 UTC."],[],["This API allows managing Ad Manager data through various REST resources.
- This service has the following service endpoint and all URIs below are relative to this service endpoint: https://admanager.googleapis.com REST Resource: v1.networks Methods get GET /v1/{name} API to retrieve a Network object. list GET /v1/networks API to retrieve all the networks the current user has access to.
- REST Resource: v1.networks.contentLabels Methods get GET /v1/{name} API to retrieve a ContentLabel object. list GET /v1/{parent}/contentLabels API to retrieve a list of ContentLabel objects.

### type Targeting (v202602) \_|\_ Ad Manager SOAP API \_|\_ Google for Developers

- URL: [https://developers.google.com/ad-manager/api/reference/latest/LineItemService.Targeting](https://developers.google.com/ad-manager/api/reference/latest/LineItemService.Targeting)
- Source ID: `site-docs-root`
- Final score: 219
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The IDs listed here correspond to the IDs in the AD CATEGORY table of type VERTICAL. contentLabelTargeting ContentLabelTargeting Specifies the content labels that are excluded by the entity.
- The IDs listed here correspond to the IDs in the CONTENT LABEL table. requestPlatformTargeting RequestPlatformTargeting Specifies the request platforms that are targeted by the LineItem .
- This value is read-only for video line items generated from proposal line items. inventorySizeTargeting InventorySizeTargeting Specifies the sizes that are targeted by the entity.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-02-25 UTC."],[],[]]

### type LineItem (v202602) \_|\_ Ad Manager SOAP API \_|\_ Google for Developers

- URL: [https://developers.google.com/ad-manager/api/reference/latest/LineItemService.LineItem](https://developers.google.com/ad-manager/api/reference/latest/LineItemService.LineItem)
- Source ID: `site-docs-root`
- Final score: 210
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following table shows the default, minimum, and maximum priority values are for each line item type: LineItemType - default priority (minimum priority, maximum priority) LineItemType.SPONSORSHIP 4 (2, 5) LineItemType.STANDARD 8 (6, 10) LineItemType.NETWORK 12 (11, 14) LineItemType.BULK 12 (11, 14) LineItemType.PRICE PRIORITY 12 (11, 14) LineItemType.HOUSE 16 (15, 16) LineItemType.CLICK TRACKING 16 (1, 16) LineItemType.AD EXCHANGE 12 (1, 16) LineItemType.ADSENSE 12 (1, 16) LineItemType.BUMPER 16 (15, 16) This field can only be edited by certain networks, otherwise a PermissionError will occur. costPerUnit Money The amount of money to spend per impression or click.
- It is required and meaningful only if the LineItem.costType is CostType.CPA or if the LineItem.lineItemType is LineItemType.SPONSORSHIP and LineItem.costType is CostType.CPM . grpSettings GrpSettings Contains the information for a line item which has a target GRP demographic. dealInfo LineItemDealInfoDto The deal information associated with this line item, if it is programmatic. viewabilityProviderCompanyIds xsd: long[] Optional IDs of the Company that provide ad verification for this line item.
- This attribute is read only. creationDateTime DateTime This attribute may be null for line items created before this feature was introduced. customFieldValues BaseCustomFieldValue [] CustomFieldValue DropDownCustomFieldValue The values of the custom fields associated with this line item. isMissingCreatives xsd: boolean Indicates if a LineItem is missing any creatives for the creativePlaceholders specified.
- This web property is only required with line item types LineItemType.AD EXCHANGE and LineItemType.ADSENSE . appliedLabels AppliedLabel [] The set of labels applied directly to this line item. effectiveAppliedLabels AppliedLabel [] Contains the set of labels inherited from the order that contains this line item and the advertiser that owns the order.

### "REST Resource: networks.adUnits \_|\_ Ad Manager API (Beta) \_|\_ Google\

- URL: [https://developers.google.com/ad-manager/api/beta/reference/rest/v1/networks.adUnits](https://developers.google.com/ad-manager/api/beta/reference/rest/v1/networks.adUnits)
- Source ID: `site-api-reference`
- Final score: 208
- Re-rank relevance: N/A

Evidence snippets:
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-02-10 UTC."],[],["The content details the AdUnit resource, its JSON representation, and related components.
- Frequency capping for AdUnits can be applied using labels or standard frequency cap settings, specifying the maximum impressions, time amount, and time unit.
- Page Summary outlined flag The AdUnit resource represents an ad unit and includes various fields such as name, ID, parent path, sizes, labels, and status.
- Specifies whether or not the AdUnit is enabled for serving ads from the AdSense content network.

