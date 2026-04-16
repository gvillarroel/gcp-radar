---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:16:19.689Z"
product_name: "Google Ad Manager API"
product_slug: "google-ad-manager-api"
feature_name: "Publisher Provided Signals resources"
feature_slug: "publisher-provided-signals-resources"
latest_feature_date: "2024-06-18"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/ad-manager/api/rel_notes"
  - "https://developers.google.com/ad-manager/api/pqlreference"
  - "https://developers.google.com/ad-manager/api/beta/reference/rest"
  - "https://developers.google.com/ad-manager/api/beta/reference/rest/v1/networks.audienceSegments/list"
keywords:
  - "publisher"
  - "provided"
  - "signals"
  - "resources"
  - "include"
  - "entitysignalsmappings"
  - "and"
  - "taxonomycategories"
---

# Publisher Provided Signals resources

Product: Google Ad Manager API
Coverage: MEDIUM

## Step 02 Summary

Publisher Provided Signals resources include entitySignalsMappings and taxonomyCategories.

## Extended Definition

Publisher Provided Signals resources include entitySignalsMappings and taxonomyCategories.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/ad-manager/api/rel_notes](https://developers.google.com/ad-manager/api/rel_notes)
- [https://developers.google.com/ad-manager/api/pqlreference](https://developers.google.com/ad-manager/api/pqlreference)
- [https://developers.google.com/ad-manager/api/beta/reference/rest](https://developers.google.com/ad-manager/api/beta/reference/rest)
- [https://developers.google.com/ad-manager/api/beta/reference/rest/v1/networks.audienceSegments/list](https://developers.google.com/ad-manager/api/beta/reference/rest/v1/networks.audienceSegments/list)

## Supporting Pages

### Release Notes \_|\_ Ad Manager SOAP API \_|\_ Google for Developers

- URL: [https://developers.google.com/ad-manager/api/rel_notes](https://developers.google.com/ad-manager/api/rel_notes)
- Source ID: `site-docs-root`
- Final score: 109
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- API Changes ≠ AdRuleService (1 new, 1 changed, 0 removed) + type PublisherProvidedSignalsTargeting ≠ type Targeting + field publisherProvidedSignalsTargeting ≠ AdjustmentService (1 new, 1 changed, 0 removed) + type PublisherProvidedSignalsTargeting ≠ type Targeting + field publisherProvidedSignalsTargeting = AdsTxtService (no changes) = AudienceSegmentService (no changes) = CdnConfigurationService (no changes) = CmsMetadataService (no changes) ≠ CompanyService (0 new, 1 changed, 0 removed) ≠ type Company + field verifiedExchangeAdvertiserId + field verifiedExchangeBrandId = ContactService (no changes) = ContentBundleService (no changes) = ContentService (no changes) ≠ CreativeService (1 new, 3 changed, 0 removed) + enum ThirdPartyDataDeclarationStatus ≠ type Creative + field thirdPartyDataDeclarationStatus ≠ enum CreativeError.Reason + value CANNOT REMOVE PLACEMENT IDS ≠ enum LineItemCreativeAssociationError.Reason + value CREATIVE BUYER PLACEMENT ID REQUIRED ≠ CreativeSetService (0 new, 1 changed, 0 removed) ≠ enum CreativeError.Reason + value CANNOT REMOVE PLACEMENT IDS = CreativeTemplateService (no changes) = CreativeWrapperService (no changes) = CustomFieldService (no changes) = CustomTargetingService (no changes) = DaiAuthenticationKeyService (no changes) = DaiEncodingProfileService (no changes) ≠ ForecastService (2 new, 5 changed, 0 removed) + type PublisherProvidedSignalsTargeting + type PublisherProvidedSignalsTargetingError ≠ enum CreativeError.Reason + value CANNOT REMOVE PLACEMENT IDS ≠ enum LineItemCreativeAssociationError.Reason + value CREATIVE BUYER PLACEMENT ID REQUIRED ≠ type ProposalLineItem + field supplyPath ≠ type Targeting + field publisherProvidedSignalsTargeting ≠ enum TargetingDimension + value PUBLISHER PROVIDED SIGNALS = InventoryService (no changes) = LabelService (no changes) ≠ LineItemCreativeAssociationService (0 new, 2 changed, 0 removed) ≠ enum CreativeError.Reason + value CANNOT REMOVE PLACEMENT IDS ≠ enum LineItemCreativeAssociationError.Reason + value CREATIVE BUYER PLACEMENT ID REQUIRED ≠ LineItemService (2 new, 3 changed, 0 removed) + type PublisherProvidedSignalsTargeting + type PublisherProvidedSignalsTargetingError ≠ enum CreativeError.Reason + value CANNOT REMOVE PLACEMENT IDS ≠ enum LineItemCreativeAssociationError.Reason + value CREATIVE BUYER PLACEMENT ID REQUIRED ≠ type Targeting + field publisherProvidedSignalsTargeting ≠ LineItemTemplateService (1 new, 2 changed, 0 removed) + type PublisherProvidedSignalsTargetingError ≠ enum CreativeError.Reason + value CANNOT REMOVE PLACEMENT IDS ≠ enum LineItemCreativeAssociationError.Reason + value CREATIVE BUYER PLACEMENT ID REQUIRED = LiveStreamEventService (no changes) = MobileApplicationService (no changes) ≠ NativeStyleService (1 new, 1 changed, 0 removed) + type PublisherProvidedSignalsTargeting ≠ type Targeting + field publisherProvidedSignalsTargeting = NetworkService (no changes) ≠ OrderService (1 new, 2 changed, 0 removed) + type PublisherProvidedSignalsTargetingError ≠ enum CreativeError.Reason + value CANNOT REMOVE PLACEMENT IDS ≠ enum LineItemCreativeAssociationError.Reason + value CREATIVE BUYER PLACEMENT ID REQUIRED = PlacementService (no changes) ≠ ProposalLineItemService (2 new, 3 changed, 0 removed) + type PublisherProvidedSignalsTargeting + type PublisherProvidedSignalsTargetingError ≠ enum ProposalError.Reason + value UPDATE SUPPLY PATH NOT ALLOWED + value BUYER DISABLED FOR AGENCY DIRECT ≠ type ProposalLineItem + field supplyPath ≠ type Targeting + field publisherProvidedSignalsTargeting ≠ ProposalService (1 new, 3 changed, 0 removed) + type PublisherProvidedSignalsTargeting ≠ type Proposal + field supplyPath ≠ enum ProposalError.Reason + value UPDATE SUPPLY PATH NOT ALLOWED + value BUYER DISABLED FOR AGENCY DIRECT ≠ type Targeting + field publisherProvidedSignalsTargeting ≠ PublisherQueryLanguageService (1 new, 2 changed, 0 removed) + type PublisherProvidedSignalsTargeting ≠ enum CreativeError.Reason + value CANNOT REMOVE PLACEMENT IDS ≠ type Targeting + field publisherProvidedSignalsTargeting = ReportService (no changes) = SegmentPopulationService (no changes) = SiteService (no changes) = StreamActivityMonitorService (no changes) = SuggestedAdUnitService (no changes) ≠ TargetingPresetService (2 new, 1 changed, 0 removed) + type PublisherProvidedSignalsTargeting + type PublisherProvidedSignalsTargetingError ≠ type Targeting + field publisherProvidedSignalsTargeting = TeamService (no changes) = UserService (no changes) = UserTeamAssociationService (no changes) ≠ YieldGroupService (2 new, 1 changed, 0 removed) + type PublisherProvidedSignalsTargeting + type PublisherProvidedSignalsTargetingError ≠ type Targeting + field publisherProvidedSignalsTargeting v202508 What's New Video Added MimeType.VIDEO MP2T .
- Version v202411 includes changes to Line Items and Reporting, and a renaming in the Publisher Query Language.
- Line Items Added PublisherProvidedSignalsTargeting .
- API Changes = AdRuleService (no changes) ≠ AdjustmentService (0 new, 1 changed, 0 removed) ≠ enum ForecastAdjustmentError.Reason + value AD REQUEST ADJUSTMENT MUST USE PARENT SEGMENT TARGETING = AdsTxtService (no changes) = AudienceSegmentService (no changes) = CdnConfigurationService (no changes) = CmsMetadataService (no changes) ≠ CompanyService (1 new, 2 changed, 0 removed) + enum InvitationStatus ≠ type ChildPublisher + field invitationStatus − field status ≠ enum McmError.Reason + value OPERATION UNSUPPORTED INITIAL STATUS = ContactService (no changes) = ContentBundleService (no changes) ≠ ContentService (0 new, 1 changed, 0 removed) ≠ enum VodIngestError + value DISCONTINUITY COUNT DOES NOT MATCH PTS COUNT ≠ CreativeService (0 new, 1 changed, 0 removed) ≠ enum CreativeError.Reason − value INVALID ADSENSE CREATIVE SIZE − value INVALID AD EXCHANGE CREATIVE SIZE ≠ CreativeSetService (0 new, 1 changed, 0 removed) ≠ enum CreativeError.Reason − value INVALID ADSENSE CREATIVE SIZE − value INVALID AD EXCHANGE CREATIVE SIZE = CreativeTemplateService (no changes) = CreativeWrapperService (no changes) = CustomFieldService (no changes) = CustomTargetingService (no changes) = DaiAuthenticationKeyService (no changes) = DaiEncodingProfileService (no changes) ≠ ForecastService (0 new, 6 changed, 0 removed) ≠ enum CreativeError.Reason − value INVALID ADSENSE CREATIVE SIZE − value INVALID AD EXCHANGE CREATIVE SIZE ≠ enum LineItemError.Reason + value REPEATED CREATIVE SERVING NOT ALLOWED ≠ type LineItemSummary + field repeatedCreativeServingEnabled ≠ enum ProgrammaticError.Reason + value INVALID BUYER ≠ type ProposalLineItem + field buyerPermissionType ≠ enum TargetingDimension − value VIDEO POSITION = InventoryService (no changes) = LabelService (no changes) ≠ LineItemCreativeAssociationService (0 new, 2 changed, 0 removed) ≠ enum CreativeError.Reason − value INVALID ADSENSE CREATIVE SIZE − value INVALID AD EXCHANGE CREATIVE SIZE ≠ enum LineItemError.Reason + value REPEATED CREATIVE SERVING NOT ALLOWED ≠ LineItemService (0 new, 4 changed, 0 removed) ≠ enum CreativeError.Reason − value INVALID ADSENSE CREATIVE SIZE − value INVALID AD EXCHANGE CREATIVE SIZE ≠ enum LineItemError.Reason + value REPEATED CREATIVE SERVING NOT ALLOWED ≠ type LineItemSummary + field repeatedCreativeServingEnabled ≠ enum ProgrammaticError.Reason + value INVALID BUYER ≠ LineItemTemplateService (0 new, 3 changed, 0 removed) ≠ enum CreativeError.Reason − value INVALID ADSENSE CREATIVE SIZE − value INVALID AD EXCHANGE CREATIVE SIZE ≠ enum LineItemError.Reason + value REPEATED CREATIVE SERVING NOT ALLOWED ≠ enum ProgrammaticError.Reason + value INVALID BUYER = LiveStreamEventService (no changes) = MobileApplicationService (no changes) = NativeStyleService (no changes) ≠ NetworkService (0 new, 1 changed, 0 removed) ≠ enum McmError.Reason + value OPERATION UNSUPPORTED INITIAL STATUS ≠ OrderService (0 new, 3 changed, 0 removed) ≠ enum CreativeError.Reason − value INVALID ADSENSE CREATIVE SIZE − value INVALID AD EXCHANGE CREATIVE SIZE ≠ enum LineItemError.Reason + value REPEATED CREATIVE SERVING NOT ALLOWED ≠ enum ProgrammaticError.Reason + value INVALID BUYER = PlacementService (no changes) ≠ ProposalLineItemService (0 new, 3 changed, 0 removed) ≠ enum LineItemError.Reason + value REPEATED CREATIVE SERVING NOT ALLOWED ≠ enum ProgrammaticError.Reason + value INVALID BUYER ≠ type ProposalLineItem + field buyerPermissionType ≠ ProposalService (0 new, 1 changed, 0 removed) ≠ enum ProgrammaticError.Reason + value INVALID BUYER ≠ PublisherQueryLanguageService (0 new, 1 changed, 0 removed) ≠ enum CreativeError.Reason − value INVALID ADSENSE CREATIVE SIZE − value INVALID AD EXCHANGE CREATIVE SIZE = ReportService (no changes) = SegmentPopulationService (no changes) = SiteService (no changes) = StreamActivityMonitorService (no changes) = SuggestedAdUnitService (no changes) = TargetingPresetService (no changes) = TeamService (no changes) = UserService (no changes) = UserTeamAssociationService (no changes) = YieldGroupService (no changes) Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

### "The Publisher Query Language (PQL) Developer's Guide \_|\_ Ad Manager SOAP\

- URL: [https://developers.google.com/ad-manager/api/pqlreference](https://developers.google.com/ad-manager/api/pqlreference)
- Source ID: `site-docs-root`
- Final score: 100
- Re-rank relevance: N/A

Evidence snippets:
- For example, with a report that has the dimension LINE ITEM ID or with a data transfer event that has the field LineItemId , you can create a match table that includes each line item's start date, end date, type, status, and other useful attributes.
- Home Products Ad Manager SOAP API Send feedback The Publisher Query Language (PQL) Developer's Guide Stay organized with collections Save and categorize content based on your preferences.
- For example, the creative properties you can filter by include id , name , width , and height . <value> - String values should be quoted with a single (') quotation mark.
- The basic PQL syntax includes clauses for filtering with WHERE , ordering results with ORDER BY , and limiting results with LIMIT .

### Google Ad Manager API \_|\_ Ad Manager API (Beta) \_|\_ Google for Developers

- URL: [https://developers.google.com/ad-manager/api/beta/reference/rest](https://developers.google.com/ad-manager/api/beta/reference/rest)
- Source ID: `site-api-reference`
- Final score: 98
- Re-rank relevance: N/A

Evidence snippets:
- REST Resource: v1.networks REST Resource: v1.networks.adUnitSizes REST Resource: v1.networks.adUnits REST Resource: v1.networks.applications REST Resource: v1.networks.audienceSegments REST Resource: v1.networks.bandwidthGroups REST Resource: v1.networks.browserLanguages REST Resource: v1.networks.browsers REST Resource: v1.networks.cmsMetadataKeys REST Resource: v1.networks.cmsMetadataValues REST Resource: v1.networks.companies REST Resource: v1.networks.contacts REST Resource: v1.networks.content REST Resource: v1.networks.contentBundles REST Resource: v1.networks.contentLabels REST Resource: v1.networks.creativeTemplates REST Resource: v1.networks.customFields REST Resource: v1.networks.customTargetingKeys REST Resource: v1.networks.customTargetingKeys.customTargetingValues REST Resource: v1.networks.customTargetingValues REST Resource: v1.networks.deviceCapabilities REST Resource: v1.networks.deviceCategories REST Resource: v1.networks.deviceManufacturers REST Resource: v1.networks.entitySignalsMappings REST Resource: v1.networks.geoTargets REST Resource: v1.networks.labels REST Resource: v1.networks.lineItems REST Resource: v1.networks.linkedDevices REST Resource: v1.networks.mobileCarriers REST Resource: v1.networks.mobileDeviceSubmodels REST Resource: v1.networks.mobileDevices REST Resource: v1.networks.operatingSystemVersions REST Resource: v1.networks.operatingSystems REST Resource: v1.networks.operations.reports.runs REST Resource: v1.networks.orders REST Resource: v1.networks.placements REST Resource: v1.networks.privateAuctionDeals REST Resource: v1.networks.privateAuctions REST Resource: v1.networks.programmaticBuyers REST Resource: v1.networks.reports REST Resource: v1.networks.reports.results REST Resource: v1.networks.roles REST Resource: v1.networks.sites REST Resource: v1.networks.taxonomyCategories REST Resource: v1.networks.teams REST Resource: v1.networks.users REST Resource: v1.networks.webProperties.adReviewCenterAds REST Resource: v1.operations Service: admanager.googleapis.com Discovery document A Discovery Document is a machine-readable specification for describing and consuming REST APIs.
- REST Resource: v1.networks.entitySignalsMappings Methods batchCreate POST /v1/{parent}/entitySignalsMappings:batchCreate API to batch create EntitySignalsMapping objects. batchUpdate POST /v1/{parent}/entitySignalsMappings:batchUpdate API to batch update EntitySignalsMapping objects. create POST /v1/{parent}/entitySignalsMappings API to create an EntitySignalsMapping object. get GET /v1/{name} API to retrieve a EntitySignalsMapping object. list GET /v1/{parent}/entitySignalsMappings API to retrieve a list of EntitySignalsMapping objects. patch PATCH /v1/{entitySignalsMapping.name} API to update an EntitySignalsMapping object.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-01 UTC."],[],["This API allows managing Ad Manager data through various REST resources.
- Key actions include retrieving and listing network, ad unit, company, custom field, targeting, order, placement, role, taxonomy, and user objects.

### "Method: networks.audienceSegments.list \_|\_ Ad Manager API (Beta) \_|\_\

- URL: [https://developers.google.com/ad-manager/api/beta/reference/rest/v1/networks.audienceSegments/list](https://developers.google.com/ad-manager/api/beta/reference/rest/v1/networks.audienceSegments/list)
- Source ID: `site-api-reference`
- Final score: 69
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-09 UTC."],[],[]]
- If a filter was included in the request, this reflects the total number after the filtering is applied. totalSize won't be calculated in the response unless it has been included in a response field mask.
- Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Home Products Ad Manager API (Beta) Reference Send feedback Method: networks.audienceSegments.list Stay organized with collections Save and categorize content based on your preferences.

