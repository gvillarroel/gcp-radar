---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:16:19.682Z"
product_name: "Google Ad Manager API"
product_slug: "google-ad-manager-api"
feature_name: "MobileCarrier"
feature_slug: "mobilecarrier"
latest_feature_date: "2025-08-12"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/ad-manager/api/beta/reference/rest"
  - "https://developers.google.com/ad-manager/api/reference/latest/LineItemService.Targeting"
  - "https://developers.google.com/ad-manager/api/beta/authentication"
  - "https://developers.google.com/ad-manager/api/forecasting"
keywords:
  - "mobilecarrier"
  - "resource"
  - "for"
  - "mobile"
  - "carrier"
  - "information"
  - "in"
  - "the"
---

# MobileCarrier

Product: Google Ad Manager API
Coverage: MEDIUM

## Step 02 Summary

A resource for mobile carrier information in the Google Ad Manager API.

## Extended Definition

A resource for mobile carrier information in the Google Ad Manager API.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/ad-manager/api/beta/reference/rest](https://developers.google.com/ad-manager/api/beta/reference/rest)
- [https://developers.google.com/ad-manager/api/reference/latest/LineItemService.Targeting](https://developers.google.com/ad-manager/api/reference/latest/LineItemService.Targeting)
- [https://developers.google.com/ad-manager/api/beta/authentication](https://developers.google.com/ad-manager/api/beta/authentication)
- [https://developers.google.com/ad-manager/api/forecasting](https://developers.google.com/ad-manager/api/forecasting)

## Supporting Pages

### Google Ad Manager API \_|\_ Ad Manager API (Beta) \_|\_ Google for Developers

- URL: [https://developers.google.com/ad-manager/api/beta/reference/rest](https://developers.google.com/ad-manager/api/beta/reference/rest)
- Source ID: `site-api-reference`
- Final score: 189
- Re-rank relevance: N/A

Evidence snippets:
- REST Resource: v1.networks REST Resource: v1.networks.adUnitSizes REST Resource: v1.networks.adUnits REST Resource: v1.networks.applications REST Resource: v1.networks.audienceSegments REST Resource: v1.networks.bandwidthGroups REST Resource: v1.networks.browserLanguages REST Resource: v1.networks.browsers REST Resource: v1.networks.cmsMetadataKeys REST Resource: v1.networks.cmsMetadataValues REST Resource: v1.networks.companies REST Resource: v1.networks.contacts REST Resource: v1.networks.content REST Resource: v1.networks.contentBundles REST Resource: v1.networks.contentLabels REST Resource: v1.networks.creativeTemplates REST Resource: v1.networks.customFields REST Resource: v1.networks.customTargetingKeys REST Resource: v1.networks.customTargetingKeys.customTargetingValues REST Resource: v1.networks.customTargetingValues REST Resource: v1.networks.deviceCapabilities REST Resource: v1.networks.deviceCategories REST Resource: v1.networks.deviceManufacturers REST Resource: v1.networks.entitySignalsMappings REST Resource: v1.networks.geoTargets REST Resource: v1.networks.labels REST Resource: v1.networks.lineItems REST Resource: v1.networks.linkedDevices REST Resource: v1.networks.mobileCarriers REST Resource: v1.networks.mobileDeviceSubmodels REST Resource: v1.networks.mobileDevices REST Resource: v1.networks.operatingSystemVersions REST Resource: v1.networks.operatingSystems REST Resource: v1.networks.operations.reports.runs REST Resource: v1.networks.orders REST Resource: v1.networks.placements REST Resource: v1.networks.privateAuctionDeals REST Resource: v1.networks.privateAuctions REST Resource: v1.networks.programmaticBuyers REST Resource: v1.networks.reports REST Resource: v1.networks.reports.results REST Resource: v1.networks.roles REST Resource: v1.networks.sites REST Resource: v1.networks.taxonomyCategories REST Resource: v1.networks.teams REST Resource: v1.networks.users REST Resource: v1.networks.webProperties.adReviewCenterAds REST Resource: v1.operations Service: admanager.googleapis.com Discovery document A Discovery Document is a machine-readable specification for describing and consuming REST APIs.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-01 UTC."],[],["This API allows managing Ad Manager data through various REST resources.
- REST Resource: v1.networks.mobileCarriers Methods get GET /v1/{name} API to retrieve a MobileCarrier object. list GET /v1/{parent}/mobileCarriers API to retrieve a list of MobileCarrier objects.
- REST Resource: v1.networks.reports Methods create POST /v1/{parent}/reports API to create a Report object. get GET /v1/{name} API to retrieve a Report object. list GET /v1/{parent}/reports API to retrieve a list of Report objects. patch PATCH /v1/{report.name} API to update a Report object. run POST /v1/{name}:run Initiates the execution of an existing report asynchronously.

### type Targeting (v202602) \_|\_ Ad Manager SOAP API \_|\_ Google for Developers

- URL: [https://developers.google.com/ad-manager/api/reference/latest/LineItemService.Targeting](https://developers.google.com/ad-manager/api/reference/latest/LineItemService.Targeting)
- Source ID: `site-docs-root`
- Final score: 146
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-02-25 UTC."],[],[]]
- This attribute is optional. contentTargeting ContentTargeting Specifies the video categories and individual videos targeted by the LineItem . videoPositionTargeting VideoPositionTargeting Specifies targeting against video position types. mobileApplicationTargeting MobileApplicationTargeting Specifies targeting against mobile applications. buyerUserListTargeting BuyerUserListTargeting Specifies whether buyer user lists are targeted on a programmatic LineItem or ProposalLineItem .
- The IDs listed here correspond to the IDs in the CONTENT LABEL table. requestPlatformTargeting RequestPlatformTargeting Specifies the request platforms that are targeted by the LineItem .
- The resulting custom targeting tree would be of the form: userDomainTargeting UserDomainTargeting Specifies the domains or subdomains that are targeted or excluded by the LineItem .

### Authentication \_|\_ Ad Manager API (Beta) \_|\_ Google for Developers

- URL: [https://developers.google.com/ad-manager/api/beta/authentication](https://developers.google.com/ad-manager/api/beta/authentication)
- Source ID: `site-docs-root-2`
- Final score: 144
- Re-rank relevance: N/A

Evidence snippets:
- For information about which resources you can attach a service account to, and help with attaching the service account to the resource, see the documentation on attaching a service account .
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-05 UTC."],[],["To access the Ad Manager API, you need an access token, generated using Application Default Credentials (ADC) or custom credentials.
- Create credentials Click the tab for your authentication type and follow the instructions to create your credentials: Service Account On Google Cloud To authenticate a workload running on Google Cloud, you use the credentials of the service account attached to the compute resource where your code is running.
- This approach is the preferred authentication method for code running on a Google Cloud compute resource.

### Forecasting \_|\_ Ad Manager SOAP API \_|\_ Google for Developers

- URL: [https://developers.google.com/ad-manager/api/forecasting](https://developers.google.com/ad-manager/api/forecasting)
- Source ID: `site-docs-root`
- Final score: 144
- Re-rank relevance: N/A

Evidence snippets:
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-02-25 UTC."],[],["Traffic forecasts analyze past traffic and future impressions for inventory segmentation using date ranges and targeting.
- For example, when forecasting for a CPC line item, the alternative unit type forecasts will include information about the number of impressions.
- AddDays ( 4 ), "America/New York" ), lineItem . endDateTime }, targets = new ForecastBreakdownTarget [] { new ForecastBreakdownTarget () { // Optional name field to identify this breakdown // in the response. name = "United States" , targeting = new Targeting () { inventoryTargeting = new InventoryTargeting () { targetedAdUnits = new AdUnitTargeting [] { new AdUnitTargeting () { adUnitId = rootAdUnitId , includeDescendants = true } } }, geoTargeting = new GeoTargeting () { targetedLocations = new Location [] { new Location () { id = 2840L } } } } }, new ForecastBreakdownTarget () { // Optional name field to identify this breakdown // in the response. name = "Geneva" , targeting = new Targeting () { inventoryTargeting = new InventoryTargeting () { targetedAdUnits = new AdUnitTargeting [] { new AdUnitTargeting () { adUnitId = rootAdUnitId , includeDescendants = true } } }, geoTargeting = new GeoTargeting () { targetedLocations = new Location [] { new Location () { id = 20133L } } } } } } } }; ProspectiveLineItem prospectiveLineItem = new ProspectiveLineItem () { advertiserId = advertiserId , lineItem = lineItem }; AvailabilityForecast forecast = forecastService . getAvailabilityForecast ( prospectiveLineItem , options ); View on GitHub Ruby prospective line item = { :advertiser id = > advertiser id , :line item = > line item } Set forecasting options. forecast options = { :include contending line items = > true , The field includeTargetingCriteriaBreakdown can only be set if breakdowns are not mannually specified. :include targeting criteria breakdown => true, :breakdown = > { Break down forecast by day from start time to end time :time windows = > time windows , Break down forecast by any targeting configuration :targets = > [ { Optional, the name field is only used to identify this breakdown in the response. :name = > 'United States' , :targeting = > { :inventory targeting = > targeting [ :inventory targeting ] , :geo targeting = > { :targeted locations = > [ { :id = > '2840' , :display name = > 'US' } ] } } }, { Optional, the name field is only used to identify this breakdown in the response. :name = > 'Geneva' , :targeting = > { :inventory targeting = > targeting [ :inventory targeting ] , :geo targeting = > { :targeted locations = > [ { :id = > '20133' , :display name = > 'Geneva' } ] } } } ] } } Get forecast for the line item. forecast = forecast service . get availability forecast ( prospective line item , forecast options ) View on GitHub Delivery forecasts If you want to simulate the delivery of multiple competing line items, you can do so with a DeliveryForecast .
- ProspectiveLineItem prospectiveLineItem = new ProspectiveLineItem (); prospectiveLineItem . setAdvertiserId ( advertiserId ); prospectiveLineItem . setLineItem ( lineItem ); AvailabilityForecastOptions options = new AvailabilityForecastOptions (); options . setIncludeContendingLineItems ( true ); options . setIncludeTargetingCriteriaBreakdown ( true ); AvailabilityForecast forecast = forecastService . getAvailabilityForecast ( prospectiveLineItem , options ); View on GitHub Python prospective line item = { 'lineItem' : line item , 'advertiserId' : advertiser id } Set forecasting options. forecast options = { 'includeContendingLineItems' : True , The field includeTargetingCriteriaBreakdown can only be set if breakdowns are not manually specified. 'includeTargetingCriteriaBreakdown': True, 'breakdown' : { 'timeWindows' : [ now datetime , now datetime + datetime . timedelta ( days = 1 ), now datetime + datetime . timedelta ( days = 2 ), now datetime + datetime . timedelta ( days = 3 ), now datetime + datetime . timedelta ( days = 4 ), end datetime ], 'targets' : [ { Optional, the name field is only used to identify this breakdown in the response. 'name' : 'United States' , 'targeting' : { 'inventoryTargeting' : { 'targetedAdUnits' : [ { 'includeDescendants' : True , 'adUnitId' : root ad unit id , } ] }, 'geoTargeting' : { 'targetedLocations' : [ { 'id' : '2840' , 'displayName' : 'US' } ] } } }, { Optional, the name field is only used to identify this breakdown in the response. 'name' : 'Geneva' , 'targeting' : { 'inventoryTargeting' : { 'targetedAdUnits' : [ { 'includeDescendants' : True , 'adUnitId' : root ad unit id , } ] }, 'geoTargeting' : { 'targetedLocations' : [ { 'id' : '20133' , 'displayName' : 'Geneva' } ] } } } ] } } Get forecast. forecast = forecast service . getAvailabilityForecast ( prospective line item , forecast options ) View on GitHub PHP // Get forecast for prospective line item. $prospectiveLineItem = new ProspectiveLineItem(); $prospectiveLineItem->setAdvertiserId($advertiserId); $prospectiveLineItem->setLineItem($lineItem); $options = new AvailabilityForecastOptions(); $options->setIncludeContendingLineItems(true); $options->setIncludeTargetingCriteriaBreakdown(true); $forecast = $forecastService->getAvailabilityForecast( $prospectiveLineItem, $options ); View on GitHub C# // Get availability forecast.

