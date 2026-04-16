---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:16:19.674Z"
product_name: "Google Ad Manager API"
product_slug: "google-ad-manager-api"
feature_name: "Custom fields"
feature_slug: "custom-fields"
latest_feature_date: "2025-12-04"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/ad-manager/api/how_to"
  - "https://developers.google.com/ad-manager/api/beta/reference/rest"
  - "https://developers.google.com/ad-manager/api/reference/latest/LineItemService.LineItem"
  - "https://developers.google.com/ad-manager/api/beta/reference/rest/v1/ListCustomTargetingValuesResponse"
keywords:
  - "custom"
  - "fields"
  - "the"
  - "api"
  - "supports"
  - "creating"
  - "and"
  - "updating"
---

# Custom fields

Product: Google Ad Manager API
Coverage: MEDIUM

## Step 02 Summary

The API supports creating and updating custom fields.

## Extended Definition

The API supports creating and updating custom fields.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/ad-manager/api/how_to](https://developers.google.com/ad-manager/api/how_to)
- [https://developers.google.com/ad-manager/api/beta/reference/rest](https://developers.google.com/ad-manager/api/beta/reference/rest)
- [https://developers.google.com/ad-manager/api/reference/latest/LineItemService.LineItem](https://developers.google.com/ad-manager/api/reference/latest/LineItemService.LineItem)
- [https://developers.google.com/ad-manager/api/beta/reference/rest/v1/ListCustomTargetingValuesResponse](https://developers.google.com/ad-manager/api/beta/reference/rest/v1/ListCustomTargetingValuesResponse)

## Supporting Pages

### How To Guide \_|\_ Ad Manager SOAP API \_|\_ Google for Developers

- URL: [https://developers.google.com/ad-manager/api/how_to](https://developers.google.com/ad-manager/api/how_to)
- Source ID: `site-docs-root`
- Final score: 175
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-02-25 UTC."],[],["The API facilitates several core actions: creating users via createUsers with specified roles, and retrieving the effective root AdUnit using NetworkService.getCurrentNetwork().
- Creating a Creative Different types of creatives support different components: for example, an image creative supports a single source file for the image; a flash creative supports two underlying asset files: a flash file and a backup image file, in case the flash file cannot be served.
- This method takes a PQL query, which is similar to a SQL query in that it lets you specify fields to search on (where field names map to properties on the object), sort, limit, and offset your search results.
- Creating an Order To create an order, simply create an Order object and set the advertiser, salesperson, and trafficker IDs to the appropriate users, assign a unique name, and call createOrders() .

### Google Ad Manager API \_|\_ Ad Manager API (Beta) \_|\_ Google for Developers

- URL: [https://developers.google.com/ad-manager/api/beta/reference/rest](https://developers.google.com/ad-manager/api/beta/reference/rest)
- Source ID: `site-api-reference`
- Final score: 166
- Re-rank relevance: N/A

Evidence snippets:
- REST Resource: v1.networks REST Resource: v1.networks.adUnitSizes REST Resource: v1.networks.adUnits REST Resource: v1.networks.applications REST Resource: v1.networks.audienceSegments REST Resource: v1.networks.bandwidthGroups REST Resource: v1.networks.browserLanguages REST Resource: v1.networks.browsers REST Resource: v1.networks.cmsMetadataKeys REST Resource: v1.networks.cmsMetadataValues REST Resource: v1.networks.companies REST Resource: v1.networks.contacts REST Resource: v1.networks.content REST Resource: v1.networks.contentBundles REST Resource: v1.networks.contentLabels REST Resource: v1.networks.creativeTemplates REST Resource: v1.networks.customFields REST Resource: v1.networks.customTargetingKeys REST Resource: v1.networks.customTargetingKeys.customTargetingValues REST Resource: v1.networks.customTargetingValues REST Resource: v1.networks.deviceCapabilities REST Resource: v1.networks.deviceCategories REST Resource: v1.networks.deviceManufacturers REST Resource: v1.networks.entitySignalsMappings REST Resource: v1.networks.geoTargets REST Resource: v1.networks.labels REST Resource: v1.networks.lineItems REST Resource: v1.networks.linkedDevices REST Resource: v1.networks.mobileCarriers REST Resource: v1.networks.mobileDeviceSubmodels REST Resource: v1.networks.mobileDevices REST Resource: v1.networks.operatingSystemVersions REST Resource: v1.networks.operatingSystems REST Resource: v1.networks.operations.reports.runs REST Resource: v1.networks.orders REST Resource: v1.networks.placements REST Resource: v1.networks.privateAuctionDeals REST Resource: v1.networks.privateAuctions REST Resource: v1.networks.programmaticBuyers REST Resource: v1.networks.reports REST Resource: v1.networks.reports.results REST Resource: v1.networks.roles REST Resource: v1.networks.sites REST Resource: v1.networks.taxonomyCategories REST Resource: v1.networks.teams REST Resource: v1.networks.users REST Resource: v1.networks.webProperties.adReviewCenterAds REST Resource: v1.operations Service: admanager.googleapis.com Discovery document A Discovery Document is a machine-readable specification for describing and consuming REST APIs.
- It also supports creating, updating, and batch processing entity signal mappings.
- REST Resource: v1.networks.customFields Methods batchActivate POST /v1/{parent}/customFields:batchActivate Activates a list of CustomField objects. batchCreate POST /v1/{parent}/customFields:batchCreate API to batch create CustomField objects. batchDeactivate POST /v1/{parent}/customFields:batchDeactivate Deactivates a list of CustomField objects. batchUpdate POST /v1/{parent}/customFields:batchUpdate API to batch update CustomField objects. create POST /v1/{parent}/customFields API to create a CustomField object. get GET /v1/{name} API to retrieve a CustomField object. list GET /v1/{parent}/customFields API to retrieve a list of CustomField objects. patch PATCH /v1/{customField.name} API to update a CustomField object.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-01 UTC."],[],["This API allows managing Ad Manager data through various REST resources.

### type LineItem (v202602) \_|\_ Ad Manager SOAP API \_|\_ Google for Developers

- URL: [https://developers.google.com/ad-manager/api/reference/latest/LineItemService.LineItem](https://developers.google.com/ad-manager/api/reference/latest/LineItemService.LineItem)
- Source ID: `site-docs-root`
- Final score: 164
- Re-rank relevance: N/A

Evidence snippets:
- Note: this field will not persist on the line item itself, and the value will only affect the current request. skipInventoryCheck xsd: boolean The flag indicates whether the inventory check should be skipped when creating or updating a line item.
- UNKNOWN The delivery type is unknown. allowOverbook xsd: boolean The flag indicates whether overbooking should be allowed when creating or updating reservations of line item types LineItemType.SPONSORSHIP and LineItemType.STANDARD .
- This attribute is read only. creationDateTime DateTime This attribute may be null for line items created before this feature was introduced. customFieldValues BaseCustomFieldValue [] CustomFieldValue DropDownCustomFieldValue The values of the custom fields associated with this line item. isMissingCreatives xsd: boolean Indicates if a LineItem is missing any creatives for the creativePlaceholders specified.
- This field is required if and only if the delivery forecast source is DeliveryForecastSource.CUSTOM PACING CURVE . roadblockingType RoadblockingType The strategy for serving roadblocked creatives, i.e. instances where multiple creatives must be served together on a single web page.

### "ListCustomTargetingValuesResponse \_|\_ Ad Manager API (Beta) \_|\_ Google\

- URL: [https://developers.google.com/ad-manager/api/beta/reference/rest/v1/ListCustomTargetingValuesResponse](https://developers.google.com/ad-manager/api/beta/reference/rest/v1/ListCustomTargetingValuesResponse)
- Source ID: `site-api-reference`
- Final score: 148
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- JSON representation { "customTargetingValues" : [ { object ( CustomTargetingValue ) } ] , "nextPageToken" : string , "totalSize" : integer } Fields customTargetingValues[] object ( CustomTargetingValue ) The CustomTargetingValue objects from the specified network. nextPageToken string A token, which can be sent as pageToken to retrieve the next page.
- For more information, see https://developers.google.com/ad-manager/api/beta/field-masks Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Home Products Ad Manager API (Beta) Reference Send feedback ListCustomTargetingValuesResponse Stay organized with collections Save and categorize content based on your preferences.
- Page Summary outlined flag The ListCustomTargetingValuesResponse object is the response for ListCustomTargetingValuesRequest and contains matching CustomTargetingValue objects.

