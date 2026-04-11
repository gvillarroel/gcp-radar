---
title: "type Targeting (v202602) \_|\_ Ad Manager SOAP API \_|\_ Google for Developers"
url: https://developers.google.com/ad-manager/api/reference/latest/LineItemService.Targeting
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://developers.google.com/ad-manager/api/intro
source_metadata:
  url: https://developers.google.com/ad-manager/api/reference/latest/LineItemService.Targeting
  title: "type Targeting (v202602) \_|\_ Ad Manager SOAP API \_|\_ Google for Developers"
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
type Targeting (v202602)
Stay organized with collections
Save and categorize content based on your preferences.
Service
AdRuleService
AdjustmentService
ForecastService
LineItemService
NativeStyleService
ProposalLineItemService
ProposalService
PublisherQueryLanguageService
TargetingPresetService
YieldGroupService
Dependencies
CreativeTargeting
LineItem
▼
Targeting
Contains targeting criteria for LineItem objects. See LineItem.targeting .
Namespace
https://www.google.com/apis/ads/publisher/v202602
Field
geoTargeting
GeoTargeting
Specifies what geographical locations are targeted by the LineItem . This attribute is
optional.
inventoryTargeting
InventoryTargeting
Specifies what inventory is targeted by the LineItem . This attribute is required. The
line item must target at least one ad unit or placement.
dayPartTargeting
DayPartTargeting
Specifies the days of the week and times that are targeted by the LineItem . This
attribute is optional.
dateTimeRangeTargeting
DateTimeRangeTargeting
Specifies the dates and time ranges that are targeted by the LineItem . This attribute
is optional.
technologyTargeting
TechnologyTargeting
Specifies the browsing technologies that are targeted by the LineItem . This attribute
is optional.
customTargeting
CustomCriteriaSet
Specifies the collection of custom criteria that is targeted by the
LineItem .
Once the LineItem is updated or modified with custom targeting,
the server may return a normalized, but equivalent representation
of the custom targeting expression.
customTargeting will have up
to three levels of expressions including itself.
The top level CustomCriteriaSet i.e. the customTargeting object can only contain a
CustomCriteriaSet.LogicalOperator.OR of all its children.
The second level of CustomCriteriaSet objects can only contain
CustomCriteriaSet.LogicalOperator.AND of all their children. If a
CustomCriteria
is placed on this level, the server will wrap it in a
CustomCriteriaSet .
The third level can only comprise of CustomCriteria objects.
The resulting custom targeting tree would be of the form:
userDomainTargeting
UserDomainTargeting
Specifies the domains or subdomains that are targeted or excluded by the LineItem .
Users visiting from an IP address associated with those domains will be targeted or excluded.
This attribute is optional.
contentTargeting
ContentTargeting
Specifies the video categories and individual videos targeted by the LineItem .
videoPositionTargeting
VideoPositionTargeting
Specifies targeting against video position types.
mobileApplicationTargeting
MobileApplicationTargeting
Specifies targeting against mobile applications.
buyerUserListTargeting
BuyerUserListTargeting
Specifies whether buyer user lists are targeted on a programmatic LineItem or ProposalLineItem . This attribute is readonly and is populated by Google.
inventoryUrlTargeting
InventoryUrlTargeting
Specifies the URLs that are targeted by the entity. This is currently only supported by YieldGroup .
verticalTargeting
VerticalTargeting
Specifies the verticals that are targeted by the entity. The IDs listed here correspond to the
IDs in the AD_CATEGORY table of type VERTICAL.
contentLabelTargeting
ContentLabelTargeting
Specifies the content labels that are excluded by the entity. The IDs listed here correspond to
the IDs in the CONTENT_LABEL table.
requestPlatformTargeting
RequestPlatformTargeting
Specifies the request platforms that are targeted by the
LineItem . This
attribute is required for video line items and for
ProposalLineItem .
This value is modifiable for video line items, but read-only for
non-video line items.
This value is read-only for video line items generated from
proposal line items.
inventorySizeTargeting
InventorySizeTargeting
Specifies the sizes that are targeted by the entity. This is currently only supported on YieldGroup and TrafficDataRequest .
publisherProvidedSignalsTargeting
PublisherProvidedSignalsTar...
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-02-25 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-02-25 UTC."],[],[]]
