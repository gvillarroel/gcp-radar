---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:16:19.689Z"
product_name: "Google Ad Manager API"
product_slug: "google-ad-manager-api"
feature_name: "adUnitSizes resource"
feature_slug: "adunitsizes-resource"
latest_feature_date: "2024-06-18"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/ad-manager/api/beta/reference/rest/v1/networks.adUnitSizes"
  - "https://developers.google.com/ad-manager/api/beta/reference/rest/v1/networks.adUnitSizes/list"
  - "https://developers.google.com/ad-manager/api/beta/reference/rest/v1/networks.adUnits"
  - "https://developers.google.com/ad-manager/api/reference/latest/InventoryService.AdUnit"
keywords:
  - "adunitsizes"
  - "resource"
  - "the"
  - "lists"
  - "ad"
  - "unit"
  - "sizes"
  - "available"
---

# adUnitSizes resource

Product: Google Ad Manager API
Coverage: MEDIUM

## Step 02 Summary

The adUnitSizes resource lists the ad unit sizes available in a network.

## Extended Definition

The adUnitSizes resource lists the ad unit sizes available in a network.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/ad-manager/api/beta/reference/rest/v1/networks.adUnitSizes](https://developers.google.com/ad-manager/api/beta/reference/rest/v1/networks.adUnitSizes)
- [https://developers.google.com/ad-manager/api/beta/reference/rest/v1/networks.adUnitSizes/list](https://developers.google.com/ad-manager/api/beta/reference/rest/v1/networks.adUnitSizes/list)
- [https://developers.google.com/ad-manager/api/beta/reference/rest/v1/networks.adUnits](https://developers.google.com/ad-manager/api/beta/reference/rest/v1/networks.adUnits)
- [https://developers.google.com/ad-manager/api/reference/latest/InventoryService.AdUnit](https://developers.google.com/ad-manager/api/reference/latest/InventoryService.AdUnit)

## Supporting Pages

### "REST Resource: networks.adUnitSizes \_|\_ Ad Manager API (Beta) \_|\_ Google\

- URL: [https://developers.google.com/ad-manager/api/beta/reference/rest/v1/networks.adUnitSizes](https://developers.google.com/ad-manager/api/beta/reference/rest/v1/networks.adUnitSizes)
- Source ID: `site-api-reference`
- Final score: 258
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Products Ad Manager API (Beta) Reference Send feedback REST Resource: networks.adUnitSizes Stay organized with collections Save and categorize content based on your preferences.
- This method, accessible via the /ad-manager/api/beta/reference/rest/v1/networks.adUnitSizes/list endpoint, allows users to retrieve a list of AdUnitSize objects.
- To discuss and provide feedback on our products, join the official Ad Manager Discord channel in the Google Advertising and Measurement Community server.
- Essentially, this API resource provides a read-only function for accessing AdUnitSize information.\n"]]

### "Method: networks.adUnitSizes.list \_|\_ Ad Manager API (Beta) \_|\_ Google\

- URL: [https://developers.google.com/ad-manager/api/beta/reference/rest/v1/networks.adUnitSizes/list](https://developers.google.com/ad-manager/api/beta/reference/rest/v1/networks.adUnitSizes/list)
- Source ID: `site-api-reference`
- Final score: 246
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If successful, the response body contains data with the following structure: JSON representation { "adUnitSizes" : [ { object ( AdUnitSize ) } ] , "nextPageToken" : string , "totalSize" : integer } Fields adUnitSizes[] object ( AdUnitSize ) The AdUnitSizes from the specified network. nextPageToken string A token, which can be sent as pageToken to retrieve the next page.
- When paginating, all other parameters provided to adUnitSizes.list must match the call that provided the page token. filter string Optional.
- The response body contains a list of adUnitSizes , a nextPageToken for pagination, and the totalSize of results.
- The response body contains an array of adUnitSizes, a nextPageToken for subsequent pages, and the totalSize.

### "REST Resource: networks.adUnits \_|\_ Ad Manager API (Beta) \_|\_ Google\

- URL: [https://developers.google.com/ad-manager/api/beta/reference/rest/v1/networks.adUnits](https://developers.google.com/ad-manager/api/beta/reference/rest/v1/networks.adUnits)
- Source ID: `site-api-reference`
- Final score: 224
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Page Summary outlined flag The AdUnit resource represents an ad unit and includes various fields such as name, ID, parent path, sizes, labels, and status.
- JSON representation { "name" : string , "adUnitId" : string , "parentPath" : [ { object ( AdUnitParent ) } ] , "appliedTeams" : [ string ] , "teams" : [ string ] , "adUnitSizes" : [ { object ( AdUnitSize ) } ] , "appliedLabels" : [ { object ( AppliedLabel ) } ] , "effectiveAppliedLabels" : [ { object ( AppliedLabel ) } ] , "appliedLabelFrequencyCaps" : [ { object ( LabelFrequencyCap ) } ] , "effectiveLabelFrequencyCaps" : [ { object ( LabelFrequencyCap ) } ] , "parentAdUnit" : string , "displayName" : string , "adUnitCode" : string , "status" : enum ( AdUnitStatus ) , "appliedTargetWindow" : enum ( TargetWindow ) , "effectiveTargetWindow" : enum ( TargetWindow ) , "description" : string , "explicitlyTargeted" : boolean , "hasChildren" : boolean , "updateTime" : string , "externalSetTopBoxChannelId" : string , "refreshDelay" : string , "smartSizeMode" : enum ( SmartSizeMode ) , "appliedAdsenseEnabled" : boolean , "effectiveAdsenseEnabled" : boolean } Fields name string Identifier.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-02-10 UTC."],[],["The content details the AdUnit resource, its JSON representation, and related components.
- Resource: AdUnit JSON representation AdUnitParent JSON representation AdUnitStatus TargetWindow AdUnitSize JSON representation EnvironmentType LabelFrequencyCap JSON representation FrequencyCap JSON representation TimeUnit SmartSizeMode Methods Resource: AdUnit The AdUnit resource.

### type AdUnit (v202602) \_|\_ Ad Manager SOAP API \_|\_ Google for Developers

- URL: [https://developers.google.com/ad-manager/api/reference/latest/InventoryService.AdUnit](https://developers.google.com/ad-manager/api/reference/latest/InventoryService.AdUnit)
- Source ID: `site-docs-root`
- Final score: 177
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Once an ad unit is created, its adUnitCode cannot be changed. adUnitSizes AdUnitSize [] The permissible creative sizes that can be served inside this ad unit.
- This attribute replaces the sizes attribute. isInterstitial xsd: boolean Whether this is an interstitial ad unit. isNative xsd: boolean Whether this is a native ad unit. isFluid xsd: boolean Whether this is a fluid ad unit. explicitlyTargeted xsd: boolean If this field is set to true , then the AdUnit will not be implicitly targeted when its parent is.
- This field is readonly and is assigned by Google. appliedLabels AppliedLabel [] The set of labels applied directly to this ad unit. effectiveAppliedLabels AppliedLabel [] Contains the set of labels applied directly to the ad unit as well as those inherited from the parent ad units.
- This value is read-only and is set by Google. appliedTeamIds xsd: long[] The IDs of all teams that this ad unit is on directly. lastModifiedDateTime DateTime The date and time this ad unit was last modified. smartSizeMode SmartSizeMode The smart size mode for this ad unit.

