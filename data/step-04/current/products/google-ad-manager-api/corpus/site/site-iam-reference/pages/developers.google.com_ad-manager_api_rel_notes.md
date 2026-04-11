---
title: "Release Notes \_|\_ Ad Manager SOAP API \_|\_ Google for Developers"
url: https://developers.google.com/ad-manager/api/rel_notes
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://developers.google.com/ad-manager/api/authentication
source_metadata:
  url: https://developers.google.com/ad-manager/api/rel_notes
  title: "Release Notes \_|\_ Ad Manager SOAP API \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Looking for a REST API? The Ad Manager API (Beta) is now available.
Home
Products
Ad Manager
SOAP API
Reference
Send feedback
Release Notes
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
This page details the release notes for currently active Google Ad Manager API versions, including some previous versions for completeness.
The latest version, v202508, introduces additions to Video and Line Items features.
Version v202505 includes updates related to Multiple Customer Management and Line Items/Proposal Line Items.
Version v202502 highlights the addition of a new error code for active targeting preset limits.
Version v202411 includes changes to Line Items and Reporting, and a renaming in the Publisher Query Language.
This page contains the release notes for the active versions of Google Ad Manager API. Release notes from some previous versions that are no longer available are exposed only for completeness.
Latest version: v202602
Previous versions: v202511 , v202508 , v202505
v202602
What's New
PublisherQueryLanguageService
Removed legacy DoubleClick Sales Manager entities from
Change_History
table.
API Changes
= AdRuleService (no changes)
= AdjustmentService (no changes)
= AdsTxtService (no changes)
= AudienceSegmentService (no changes)
= CdnConfigurationService (no changes)
= CmsMetadataService (no changes)
= CompanyService (no changes)
= ContactService (no changes)
= ContentBundleService (no changes)
= ContentService (no changes)
= CreativeService (no changes)
= CreativeSetService (no changes)
= CreativeTemplateService (no changes)
= CreativeWrapperService (no changes)
= CustomFieldService (no changes)
= CustomTargetingService (no changes)
= DaiAuthenticationKeyService (no changes)
= DaiEncodingProfileService (no changes)
≠ ForecastService (0 new, 3 changed, 0 removed)
≠ enum LineItemError.Reason
+ value INVALID_LINE_ITEM_TYPE_FOR_ALLOCATION_DELIVERY_PROFILE
≠ type LineItemSummary
+ field deliveryAllocationProfileId
≠ type ProposalLineItem
+ field deliveryAllocationProfileId
= InventoryService (no changes)
= LabelService (no changes)
≠ LineItemCreativeAssociationService (0 new, 1 changed, 0 removed)
≠ enum LineItemError.Reason
+ value INVALID_LINE_ITEM_TYPE_FOR_ALLOCATION_DELIVERY_PROFILE
≠ LineItemService (0 new, 2 changed, 0 removed)
≠ enum LineItemError.Reason
+ value INVALID_LINE_ITEM_TYPE_FOR_ALLOCATION_DELIVERY_PROFILE
≠ type LineItemSummary
+ field deliveryAllocationProfileId
≠ LineItemTemplateService (0 new, 1 changed, 0 removed)
≠ enum LineItemError.Reason
+ value INVALID_LINE_ITEM_TYPE_FOR_ALLOCATION_DELIVERY_PROFILE
= LiveStreamEventService (no changes)
= MobileApplicationService (no changes)
= NativeStyleService (no changes)
= NetworkService (no changes)
≠ OrderService (0 new, 1 changed, 0 removed)
≠ enum LineItemError.Reason
+ value INVALID_LINE_ITEM_TYPE_FOR_ALLOCATION_DELIVERY_PROFILE
= PlacementService (no changes)
≠ ProposalLineItemService (0 new, 3 changed, 0 removed)
≠ enum LineItemError.Reason
+ value INVALID_LINE_ITEM_TYPE_FOR_ALLOCATION_DELIVERY_PROFILE
≠ type ProposalLineItem
+ field deliveryAllocationProfileId
≠ enum ProposalLineItemError.Reason
+ value INVALID_LINE_ITEM_TYPE_FOR_ALLOCATION_DELIVERY_PROFILE
≠ ProposalService (0 new, 1 changed, 0 removed)
≠ enum ProposalLineItemError.Reason
+ value INVALID_LINE_ITEM_TYPE_FOR_ALLOCATION_DELIVERY_PROFILE
≠ PublisherQueryLanguageService (0 new, 1 changed, 0 removed)
≠ enum ChangeHistoryEntityType
− value PREMIUM_RATE
− value PRODUCT
− value PRODUCT_PACKAGE
− value PRODUCT_PACKAGE_ITEM
− value PRODUCT_TEMPLATE
− value RATE_CARD
− value WORKFLOW
= ReportService (no changes)
= SegmentPopulationService (no changes)
= SiteService (no changes)
= StreamActivityMonitorService (no changes)
= SuggestedAdUnitService (no changes)
= TargetingPresetService (no changes)
= TeamService (no changes)
= UserService (no changes)
= UserTeamAssociationService (no changes)
= YieldGroupService (no changes)
v202511
What's New
Creatives
Added
ThirdPartyDataDeclarationStatus .
Line Items
Added
PublisherProvidedSignalsTargeting
.
Companies
Added
verifiedExchangeAdvertiserdId
.
API Changes
≠ AdRuleService (1 new, 1 changed, 0 removed)
+ type PublisherProvidedSignalsTargeting
≠ type Targeting
+ field publisherProvidedSignalsTargeting
≠ AdjustmentService (1 new, 1 changed, 0 removed)
+ type PublisherProvidedSignalsTargeting
≠ type Targeting
+ field publisherProvidedSignalsTargeting
= AdsTxtService (no changes)
= AudienceSegmentService (no changes)
= CdnConfigurationService (no changes)
= CmsMetadataService (no changes)
≠ CompanyService (0 new, 1 changed, 0 removed)
≠ type Company
+ field verifiedExchangeAdvertiserId
+ field verifiedExchangeBrandId
= ContactService (no changes)
= ContentBundleService (no changes)
= ContentService (no changes)
≠ CreativeService (1 new, 3 changed, 0 removed)
+ enum ThirdPartyDataDeclarationStatus
≠ type Creative
+ field thirdPartyDataDeclarationStatus
≠ enum CreativeError.Reason
+ value CANNOT_REMOVE_PLACEMENT_IDS
≠ enum LineItemCreativeAssociationError.Reason
+ value CREATIVE_BUYER_PLACEMENT_ID_REQUIRED
≠ CreativeSetService (0 new, 1 changed, 0 removed)
≠ enum CreativeError.Reason
+ value CANNOT_REMOVE_PLACEMENT_IDS
= CreativeTemplateService (no changes)
= CreativeWrapperService (no changes)
= CustomFieldService (no changes)
= CustomTargetingService (no changes)
= DaiAuthenticationKeyService (no changes)
= DaiEncodingProfileService (no changes)
≠ ForecastService (2 new, 5 changed, 0 removed)
+ type PublisherProvidedSignalsTargeting
+ type PublisherProvidedSignalsTargetingError
≠ enum CreativeError.Reason
+ value CANNOT_REMOVE_PLACEMENT_IDS
≠ enum LineItemCreativeAssociationError.Reason
+ value CREATIVE_BUYER_PLACEMENT_ID_REQUIRED
≠ type ProposalLineItem
+ field supplyPath
≠ type Targeting
+ field publisherProvidedSignalsTargeting
≠ enum TargetingDimension
+ value PUBLISHER_PROVIDED_SIGNALS
= InventoryService (no changes)
= LabelService (no changes)
≠ LineItemCreativeAssociationService (0 new, 2 changed, 0 removed)
≠ enum CreativeError.Reason
+ value CANNOT_REMOVE_PLACEMENT_IDS
≠ enum LineItemCreativeAssociationError.Reason
+ value CREATIVE_BUYER_PLACEMENT_ID_REQUIRED
≠ LineItemService (2 new, 3 changed, 0 removed)
+ type PublisherProvidedSignalsTargeting
+ type PublisherProvidedSignalsTargetingError
≠ enum CreativeError.Reason
+ value CANNOT_REMOVE_PLACEMENT_IDS
≠ enum LineItemCreativeAssociationError.Reason
+ value CREATIVE_BUYER_PLACEMENT_ID_REQUIRED
≠ type Targeting
+ field publisherProvidedSignalsTargeting
≠ LineItemTemplateService (1 new, 2 changed, 0 removed)
+ type PublisherProvidedSignalsTargetingError
≠ enum CreativeError.Reason
+ value CANNOT_REMOVE_PLACEMENT_IDS
≠ enum LineItemCreativeAssociationError.Reason
+ value CREATIVE_BUYER_PLACEMENT_ID_REQUIRED
= LiveStreamEventService (no changes)
= MobileApplicationService (no changes)
≠ NativeStyleService (1 new, 1 changed, 0 removed)
+ type PublisherProvidedSignalsTargeting
≠ type Targeting
+ field publisherProvidedSignalsTargeting
= NetworkService (no changes)
≠ OrderService (1 new, 2 changed, 0 removed)
+ type PublisherProvidedSignalsTargetingError
≠ enum CreativeError.Reason
+ value CANNOT_REMOVE_PLACEMENT_IDS
≠ enum LineItemCreativeAssociationError.Reason
+ value CREATIVE_BUYER_PLACEMENT_ID_REQUIRED
= PlacementService (no changes)
≠ ProposalLineItemService (2 new, 3 changed, 0 removed)
+ type PublisherProvidedSignalsTargeting
+ type PublisherProvidedSignalsTargetingError
≠ enum ProposalError.Reason
+ value UPDATE_SUPPLY_PATH_NOT_ALLOWED
+ value BUYER_DISABLED_FOR_AGENCY_DIRECT
≠ type ProposalLineItem
+ field supplyPath
≠ type Targeting
+ field publisherProvidedSignalsTargeting
≠ ProposalService (1 new, 3 changed, 0 removed)
+ type PublisherProvidedSignalsTargeting
≠ type Proposal
+ field supplyPath
≠ enum ProposalError.Reason
+ value UPDATE_SUPPLY_PATH_NOT_ALLOWED
+ value BUYER_DISABLED_FOR_AGENCY_DIRECT
≠ type Targeting
+ field publisherProvidedSignalsTargeting
≠ PublisherQueryLanguageService (1 new, 2 changed, 0 removed)
+ type PublisherProvidedSignalsTargeting
≠ enum CreativeError.Reason
+ value CANNOT_REMOVE_PLACEMENT_IDS
≠ type Targeting
+ field publisherProvidedSignalsTargeting
= ReportService (no changes)
= SegmentPopulationService (no changes)
= SiteService (no changes)
= StreamActivityMonitorService (no changes)
= SuggestedAdUnitService (no changes)
≠ TargetingPresetService (2 new, 1 changed, 0 removed)
+ type PublisherProvidedSignalsTargeting
+ type PublisherProvidedSignalsTargetingError
≠ type Targeting
+ field publisherProvidedSignalsTargeting
= TeamService (no changes)
= UserService (no changes)
= UserTeamAssociationService (no changes)
≠ YieldGroupService (2 new, 1 changed, 0 removed)
+ type PublisherProvidedSignalsTargeting
+ type PublisherProvidedSignalsTargetingError
≠ type Targeting
+ field publisherProvidedSignalsTargeting
v202508
What's New
Video
Added
MimeType.VIDEO_MP2T .
Line Items
Added
CostType.CPCV
.
Added
UnitType.COMPLETED_VIEWS
.
API Changes
= AdRuleService (no changes)
≠ AdjustmentService (0 new, 2 changed, 0 removed)
≠ enum DateTimeRangeTargetingError.Reason
+ value BLACKOUT_DURATION_TOO_SHORT
≠ enum ForecastAdjustmentError.Reason
− value PARENT_SEGMENT_TARGETING_INCOMPATIBLE_WITH_HISTORICAL_BASIS_AD_REQUEST_SOURCE_SETTINGS
= AdsTxtService (no changes)
= AudienceSegmentService (no changes)
= CdnConfigurationService (no changes)
= CmsMetadataService (no changes)
= CompanyService (no changes)
= ContactService (no changes)
= ContentBundleService (no changes)
≠ ContentService (0 new, 2 changed, 0 removed)
≠ enum MimeType
+ value VIDEO_MP2T
≠ enum VodIngestError
+ value CHAPTER_PTS_MISMATCH
+ value CHAPTER_RENDITION_ERROR
≠ CreativeService (0 new, 2 changed, 0 removed)
≠ type Creative
+ field selfDeclaredEuropeanUnionPoliticalContent
≠ enum MimeType
+ value VIDEO_MP2T
= CreativeSetService (no changes)
= CreativeTemplateService (no changes)
= CreativeWrapperService (no changes)
= CustomFieldService (no changes)
= CustomTargetingService (no changes)
= DaiAuthenticationKeyService (no changes)
= DaiEncodingProfileService (no changes)
≠ ForecastService (0 new, 4 changed, 0 removed)
≠ enum CostType
+ value CPCV
≠ enum DateTimeRangeTargetingError.Reason
+ value BLACKOUT_DURATION_TOO_SHORT
≠ enum LineItemError.Reason
+ value PLACEHOLDER_COUNT_NOT_SUPPORTED
≠ enum UnitType
+ value COMPLETED_VIEWS
= InventoryService (no changes)
= LabelService (no changes)
≠ LineItemCreativeAssociationService (0 new, 1 changed, 0 removed)
≠ enum LineItemError.Reason
+ value PLACEHOLDER_COUNT_NOT_SUPPORTED
≠ LineItemService (0 new, 4 changed, 0 removed)
≠ enum CostType
+ value CPCV
≠ enum DateTimeRangeTargetingError.Reason
+ value BLACKOUT_DURATION_TOO_SHORT
≠ enum LineItemError.Reason
+ value PLACEHOLDER_COUNT_NOT_SUPPORTED
≠ enum UnitType
+ value COMPLETED_VIEWS
≠ LineItemTemplateService (0 new, 2 changed, 0 removed)
≠ enum DateTimeRangeTargetingError.Reason
+ value BLACKOUT_DURATION_TOO_SHORT
≠ enum LineItemError.Reason
+ value PLACEHOLDER_COUNT_NOT_SUPPORTED
≠ LiveStreamEventService (0 new, 1 changed, 0 removed)
≠ enum VideoAdTagError.Reason
+ value DUPLICATE_AD_TAG_PARAMETER
= MobileApplicationService (no changes)
≠ NativeStyleService (0 new, 1 changed, 0 removed)
≠ enum NativeStyleError.Reason
+ value INVALID_FLUID_SIZE_FOR_NEWSLETTER_FORMAT
= NetworkService (no changes)
≠ OrderService (0 new, 2 changed, 0 removed)
≠ enum DateTimeRangeTargetingError.Reason
+ value BLACKOUT_DURATION_TOO_SHORT
≠ enum LineItemError.Reason
+ value PLACEHOLDER_COUNT_NOT_SUPPORTED
= PlacementService (no changes)
≠ ProposalLineItemService (0 new, 3 changed, 0 removed)
≠ enum DateTimeRangeTargetingError.Reason
+ value BLACKOUT_DURATION_TOO_SHORT
≠ enum LineItemError.Reason
+ value PLACEHOLDER_COUNT_NOT_SUPPORTED
≠ enum UnitType
+ value COMPLETED_VIEWS
= ProposalService (no changes)
= PublisherQueryLanguageService (no changes)
= ReportService (no changes)
= SegmentPopulationService (no changes)
= SiteService (no changes)
≠ StreamActivityMonitorService (0 new, 1 changed, 0 removed)
≠ type VodStreamCreateRequest
+ field podServingSessionTitle
= SuggestedAdUnitService (no changes)
≠ TargetingPresetService (0 new, 1 changed, 0 removed)
≠ enum DateTimeRangeTargetingError.Reason
+ value BLACKOUT_DURATION_TOO_SHORT
= TeamService (no changes)
= UserService (no changes)
= UserTeamAssociationService (no changes)
≠ YieldGroupService (0 new, 1 changed, 0 removed)
≠ enum DateTimeRangeTargetingError.Reason
+ value BLACKOUT_DURATION_TOO_SHORT
v202505
What's New
Multiple Customer Management
Added
InvitationStatus
for
ChildPublisher
companies.
Line Items
Added
repeatedCreativeServingEnabled
field to LineItems .
Proposal Line Items
Added
BuyerPermissionType
to
ProposalLineItems
for controlling how buyers can transact on deals.
API Changes
= AdRuleService (no changes)
≠ AdjustmentService (0 new, 1 changed, 0 removed)
≠ enum ForecastAdjustmentError.Reason
+ value AD_REQUEST_ADJUSTMENT_MUST_USE_PARENT_SEGMENT_TARGETING
= AdsTxtService (no changes)
= AudienceSegmentService (no changes)
= CdnConfigurationService (no changes)
= CmsMetadataService (no changes)
≠ CompanyService (1 new, 2 changed, 0 removed)
+ enum InvitationStatus
≠ type ChildPublisher
+ field invitationStatus
− field status
≠ enum McmError.Reason
+ value OPERATION_UNSUPPORTED_INITIAL_STATUS
= ContactService (no changes)
= ContentBundleService (no changes)
≠ ContentService (0 new, 1 changed, 0 removed)
≠ enum VodIngestError
+ value DISCONTINUITY_COUNT_DOES_NOT_MATCH_PTS_COUNT
≠ CreativeService (0 new, 1 changed, 0 removed)
≠ enum CreativeError.Reason
− value INVALID_ADSENSE_CREATIVE_SIZE
− value INVALID_AD_EXCHANGE_CREATIVE_SIZE
≠ CreativeSetService (0 new, 1 changed, 0 removed)
≠ enum CreativeError.Reason
− value INVALID_ADSENSE_CREATIVE_SIZE
− value INVALID_AD_EXCHANGE_CREATIVE_SIZE
= CreativeTemplateService (no changes)
= CreativeWrapperService (no changes)
= CustomFieldService (no changes)
= CustomTargetingService (no changes)
= DaiAuthenticationKeyService (no changes)
= DaiEncodingProfileService (no changes)
≠ ForecastService (0 new, 6 changed, 0 removed)
≠ enum CreativeError.Reason
− value INVALID_ADSENSE_CREATIVE_SIZE
− value INVALID_AD_EXCHANGE_CREATIVE_SIZE
≠ enum LineItemError.Reason
+ value REPEATED_CREATIVE_SERVING_NOT_ALLOWED
≠ type LineItemSummary
+ field repeatedCreativeServingEnabled
≠ enum ProgrammaticError.Reason
+ value INVALID_BUYER
≠ type ProposalLineItem
+ field buyerPermissionType
≠ enum TargetingDimension
− value VIDEO_POSITION
= InventoryService (no changes)
= LabelService (no changes)
≠ LineItemCreativeAssociationService (0 new, 2 changed, 0 removed)
≠ enum CreativeError.Reason
− value INVALID_ADSENSE_CREATIVE_SIZE
− value INVALID_AD_EXCHANGE_CREATIVE_SIZE
≠ enum LineItemError.Reason
+ value REPEATED_CREATIVE_SERVING_NOT_ALLOWED
≠ LineItemService (0 new, 4 changed, 0 removed)
≠ enum CreativeError.Reason
− value INVALID_ADSENSE_CREATIVE_SIZE
− value INVALID_AD_EXCHANGE_CREATIVE_SIZE
≠ enum LineItemError.Reason
+ value REPEATED_CREATIVE_SERVING_NOT_ALLOWED
≠ type LineItemSummary
+ field repeatedCreativeServingEnabled
≠ enum ProgrammaticError.Reason
+ value INVALID_BUYER
≠ LineItemTemplateService (0 new, 3 changed, 0 removed)
≠ enum CreativeError.Reason
− value INVALID_ADSENSE_CREATIVE_SIZE
− value INVALID_AD_EXCHANGE_CREATIVE_SIZE
≠ enum LineItemError.Reason
+ value REPEATED_CREATIVE_SERVING_NOT_ALLOWED
≠ enum ProgrammaticError.Reason
+ value INVALID_BUYER
= LiveStreamEventService (no changes)
= MobileApplicationService (no changes)
= NativeStyleService (no changes)
≠ NetworkService (0 new, 1 changed, 0 removed)
≠ enum McmError.Reason
+ value OPERATION_UNSUPPORTED_INITIAL_STATUS
≠ OrderService (0 new, 3 changed, 0 removed)
≠ enum CreativeError.Reason
− value INVALID_ADSENSE_CREATIVE_SIZE
− value INVALID_AD_EXCHANGE_CREATIVE_SIZE
≠ enum LineItemError.Reason
+ value REPEATED_CREATIVE_SERVING_NOT_ALLOWED
≠ enum ProgrammaticError.Reason
+ value INVALID_BUYER
= PlacementService (no changes)
≠ ProposalLineItemService (0 new, 3 changed, 0 removed)
≠ enum LineItemError.Reason
+ value REPEATED_CREATIVE_SERVING_NOT_ALLOWED
≠ enum ProgrammaticError.Reason
+ value INVALID_BUYER
≠ type ProposalLineItem
+ field buyerPermissionType
≠ ProposalService (0 new, 1 changed, 0 removed)
≠ enum ProgrammaticError.Reason
+ value INVALID_BUYER
≠ PublisherQueryLanguageService (0 new, 1 changed, 0 removed)
≠ enum CreativeError.Reason
− value INVALID_ADSENSE_CREATIVE_SIZE
− value INVALID_AD_EXCHANGE_CREATIVE_SIZE
= ReportService (no changes)
= SegmentPopulationService (no changes)
= SiteService (no changes)
= StreamActivityMonitorService (no changes)
= SuggestedAdUnitService (no changes)
= TargetingPresetService (no changes)
= TeamService (no changes)
= UserService (no changes)
= UserTeamAssociationService (no changes)
= YieldGroupService (no changes)
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-02-25 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-02-25 UTC."],[],[]]
