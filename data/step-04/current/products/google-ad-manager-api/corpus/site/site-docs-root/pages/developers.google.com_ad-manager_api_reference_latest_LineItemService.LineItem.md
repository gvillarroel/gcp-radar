---
title: "type LineItem (v202602) \_|\_ Ad Manager SOAP API \_|\_ Google for Developers"
url: https://developers.google.com/ad-manager/api/reference/latest/LineItemService.LineItem
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://developers.google.com/ad-manager/api/intro
source_metadata:
  url: https://developers.google.com/ad-manager/api/reference/latest/LineItemService.LineItem
  title: "type LineItem (v202602) \_|\_ Ad Manager SOAP API \_|\_ Google for Developers"
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
type LineItem (v202602)
Stay organized with collections
Save and categorize content based on your preferences.
Service
ForecastService
LineItemService
Dependencies
LineItemPage
createLineItems()
updateLineItems()
▼
LineItem
Inheritance
LineItemSummary
▼
LineItem
LineItem is an advertiser's commitment to purchase a specific number of ad impressions,
clicks, or time.
Namespace
https://www.google.com/apis/ads/publisher/v202602
Field
LineItemSummary (inherited)
orderId
xsd: long
The ID of the Order to which the LineItem belongs. This attribute is required
on create and ignored on update.
id
xsd: long
Uniquely identifies the LineItem . This attribute is read-only and is assigned by Google
when a line item is created.
name
xsd: string
The name of the line item. This attribute is required and has a maximum length of 255
characters.
externalId
xsd: string
An identifier for the LineItem that is meaningful to the publisher. This attribute is
optional and has a maximum length of 255 characters.
orderName
xsd: string
The name of the Order . This value is read-only.
startDateTime
DateTime
The date and time on which the LineItem is enabled to begin serving. This attribute is
required and must be in the future.
startDateTimeType
StartDateTimeType
Specifies whether to start serving to the LineItem right away, in an hour, etc. This
attribute is optional and defaults to StartDateTimeType.USE_START_DATE_TIME .
Enumerations
USE_START_DATE_TIME
Use the value in startDateTime .
IMMEDIATELY
The entity will start serving immediately. startDateTime in the
request is ignored and will be set to the current time. Additionally,
startDateTimeType will be set to
StartDateTimeType.USE_START_DATE_TIME .
ONE_HOUR_FROM_NOW
The entity will start serving one hour from now. startDateTime
in the request is ignored and will be set to one hour from the current
time. Additionally, startDateTimeType will be set to
StartDateTimeType.USE_START_DATE_TIME .
UNKNOWN
The value returned if the actual value is not exposed by the requested API version.
endDateTime
DateTime
The date and time on which the LineItem will stop serving. This attribute is required
unless LineItem.unlimitedEndDateTime is set to true . If specified, it must be
after the LineItem.startDateTime . This end date and time does not include auto
extension days.
autoExtensionDays
xsd: int
The number of days to allow a line item to deliver past its endDateTime . A maximum of
7 days is allowed. This is feature is only available for Ad Manager 360 accounts.
unlimitedEndDateTime
xsd: boolean
Specifies whether or not the LineItem has an end time. This attribute is optional and
defaults to false. It can be be set to true for only line items of type LineItemType.SPONSORSHIP , LineItemType.NETWORK , LineItemType.PRICE_PRIORITY
and LineItemType.HOUSE .
creativeRotationType
CreativeRotationType
The strategy used for displaying multiple Creative objects that are associated with the
LineItem . This attribute is required.
Enumerations
EVEN
Creatives are displayed roughly the same number of times over
the duration of the line item.
OPTIMIZED
Creatives are served roughly proportionally to their performance.
MANUAL
Creatives are served roughly proportionally to their weights, set on the
LineItemCreativeAssociation .
SEQUENTIAL
Creatives are served exactly in sequential order, aka Storyboarding.
Set on the LineItemCreativeAssociation .
deliveryRateType
DeliveryRateType
The strategy for delivering ads over the course of the line item's duration. This attribute is
optional and defaults to DeliveryRateType.EVENLY or DeliveryRateType.FRONTLOADED depending on the network's configuration.
Enumerations
EVENLY
Line items are served as evenly as possible across the number of
days specified in a line item's LineItem.duration .
FRONTLOADED
Line items are served more aggressively in the beginning of the flight
date.
AS_FAST_AS_POSSIBLE
The booked impressions for a line item may be delivered well before the
LineItem.endDateTime . Other lower-priority or lower-value line
items will be stopped from delivering until this line item meets the number
of impressions or clicks it is booked for.
deliveryForecastSource
DeliveryForecastSource
Strategy for choosing forecasted traffic shapes to pace line items. This field is optional and
defaults to DeliveryForecastSource.HISTORICAL .
Enumerations
HISTORICAL
The line item's historical traffic shape will be used to pace line item delivery.
FORECASTING
The line item's projected future traffic will be used to pace line item delivery.
CUSTOM_PACING_CURVE
A user specified custom pacing curve will be used to pace line item delivery.
UNKNOWN
The value returned if the actual value is not exposed by the requested API version.
customPacingCurve
CustomPacingCurve
The curve that is used to pace the line item's delivery. This field is required if and only if
the delivery forecast source is DeliveryForecastSource.CUSTOM_PACING_CURVE .
roadblockingType
RoadblockingType
The strategy for serving roadblocked creatives, i.e. instances where multiple creatives must be
served together on a single web page. This attribute is optional and defaults to RoadblockingType.ONE_OR_MORE .
Enumerations
ONLY_ONE
Only one creative from a line item can serve at a time.
ONE_OR_MORE
Any number of creatives from a line item can serve together at a time.
AS_MANY_AS_POSSIBLE
As many creatives from a line item as can fit on a page will serve. This
could mean anywhere from one to all of a line item's creatives given the
size constraints of ad slots on a page.
ALL_ROADBLOCK
All or none of the creatives from a line item will serve. This option will only work if
served to a GPT tag using SRA (single request architecture mode).
CREATIVE_SET
A master/companion CreativeSet roadblocking type.
A LineItem.creativePlaceholders must be set accordingly.
skippableAdType
SkippableAdType
The nature of the line item's creatives' skippability. This attribute is optional, only
applicable for video line items, and defaults to SkippableAdType.NOT_SKIPPABLE .
Enumerations
UNKNOWN
The value returned if the actual value is not exposed by the requested API version.
DISABLED
Skippable ad type is disabled.
ENABLED
Skippable ad type is enabled.
INSTREAM_SELECT
Skippable in-stream ad type.
ANY
Any skippable or not skippable. This is only for programmatic case when the creative
skippability is decided by the buyside.
frequencyCaps
FrequencyCap []
The set of frequency capping units for this LineItem . This attribute is optional.
lineItemType
LineItemType
Indicates the line item type of a LineItem . This attribute is required.
The line item type determines the default priority of the line
item. More information can be found on the Ad Manager
Help Center .
Enumerations
SPONSORSHIP
The type of LineItem for which a percentage of all the impressions that are being sold
are reserved.
STANDARD
The type of LineItem for which a fixed quantity of impressions or clicks are reserved.
NETWORK
The type of LineItem most commonly used to fill a site's unsold
inventory if not contractually obligated to deliver a requested number of
impressions. Users specify the daily percentage of unsold impressions or
clicks when creating this line item.
BULK
The type of LineItem for which a fixed quantity of impressions or
clicks will be delivered at a priority lower than the
LineItemType.STANDARD type.
PRICE_PRIORITY
The type of LineItem most commonly used to fill a site's unsold
inventory if not contractually obligated to deliver a requested number of
impressions. Users specify the fixed quantity of unsold impressions or
clicks when creating this line item.
HOUSE
The type of LineItem typically used for ads that promote products
and services chosen by the publisher. These usually do not generate revenue
and have the lowest delivery priority.
LEGACY_DFP
Represents a legacy LineItem that has been migrated from the DFP
system. Such line items cannot be created any more. Also, these line items
cannot be activated or resumed.
CLICK_TRACKING
The type of LineItem used for ads that track ads being served
externally of Ad Manager, for example an email newsletter. The click through would
reference this ad, and the click would be tracked via this ad.
ADSENSE
A LineItem using dynamic allocation backed by AdSense.
AD_EXCHANGE
A LineItem using dynamic allocation backed by the Google Ad Exchange.
BUMPER
Represents a non-monetizable video LineItem that targets one or
more bumper positions, which are short house video messages used by
publishers to separate content from ad breaks.
ADMOB
A LineItem using dynamic allocation backed by AdMob.
PREFERRED_DEAL
The type of LineItem for which there are no impressions reserved, and will serve for a
second price bid. All LineItem s of type LineItemType.PREFERRED_DEAL should
be created via a ProposalLineItem with a matching type. When creating a
LineItem of type LineItemType.PREFERRED_DEAL , the
ProposalLineItem.estimatedMinimumImpressions field is required.
UNKNOWN
The value returned if the actual value is not exposed by the requested API
version.
priority
xsd: int
The priority for the line item. Valid values range from 1 to 16.
This field is optional and defaults to the default priority of the
LineItemType .
The following table shows the default, minimum, and maximum
priority values are for each line item type:
LineItemType - default priority
(minimum priority, maximum priority)
LineItemType.SPONSORSHIP
4 (2, 5)
LineItemType.STANDARD
8 (6, 10)
LineItemType.NETWORK
12 (11, 14)
LineItemType.BULK
12 (11, 14)
LineItemType.PRICE_PRIORITY
12 (11, 14)
LineItemType.HOUSE
16 (15, 16)
LineItemType.CLICK_TRACKING
16 (1, 16)
LineItemType.AD_EXCHANGE
12 (1, 16)
LineItemType.ADSENSE
12 (1, 16)
LineItemType.BUMPER
16 (15, 16)
This field can only be edited by certain networks, otherwise a
PermissionError will occur.
costPerUnit
Money
The amount of money to spend per impression or click. This attribute is required for creating a
LineItem .
valueCostPerUnit
Money
An amount to help the adserver rank inventory. LineItem.valueCostPerUnit artificially
raises the value of inventory over the LineItem.costPerUnit but avoids raising the
actual LineItem.costPerUnit . This attribute is optional and defaults to a Money
object in the local currency with Money.microAmount 0.
costType
CostType
The method used for billing this LineItem . This attribute is required.
Enumerations
CPA
Starting February 22, 2024 the CPA CostType will be read only as part of
Spotlight deprecation, learn
more .
Cost per action. The LineItem.lineItemType must be one of:
LineItemType.SPONSORSHIP
LineItemType.STANDARD
LineItemType.BULK
LineItemType.NETWORK
CPC
Cost per click. The LineItem.lineItemType must be one of:
LineItemType.SPONSORSHIP
LineItemType.STANDARD
LineItemType.BULK
LineItemType.NETWORK
LineItemType.PRICE_PRIORITY
LineItemType.HOUSE
CPD
Cost per day. The LineItem.lineItemType must be one of:
LineItemType.SPONSORSHIP
LineItemType.NETWORK
CPM
Cost per mille (cost per thousand impressions). The
LineItem.lineItemType must be one of:
LineItemType.SPONSORSHIP
LineItemType.STANDARD
LineItemType.BULK
LineItemType.NETWORK
LineItemType.PRICE_PRIORITY
LineItemType.HOUSE
VCPM
Cost per thousand Active View viewable impressions. The LineItem.lineItemType
must be LineItemType.STANDARD .
CPM_IN_TARGET
Cost per thousand in-target impressions. The LineItem.lineItemType
must be LineItemType.STANDARD .
CPCV
Cost per completed view. This cost type is only supported for standard reservation video line
items. The LineItem.lineItemType must be LineItemType.STANDARD
UNKNOWN
The value returned if the actual value is not exposed by the requested API version.
discountType
LineItemDiscountType
The type of discount being applied to a LineItem , either percentage based or absolute.
This attribute is optional and defaults to LineItemDiscountType.PERCENTAGE .
Enumerations
ABSOLUTE_VALUE
An absolute value will be discounted from the line item's cost.
PERCENTAGE
A percentage of the cost will be applied as discount for booking the line
item.
discount
xsd: double
The number here is either a percentage or an absolute value depending on the LineItemDiscountType . If the LineItemDiscountType is LineItemDiscountType.PERCENTAGE , then only non-fractional values are supported.
contractedUnitsBought
xsd: long
This attribute is only applicable for certain line item types and
acts as an "FYI" or note, which does not impact adserving or other
backend systems.
For LineItemType.SPONSORSHIP line items, this represents the minimum
quantity, which is a lifetime impression volume goal for reporting
purposes only.
For LineItemType.STANDARD line items, this represent the contracted
quantity, which is the number of units specified in the contract
the advertiser has bought for this LineItem . This field is just a "FYI" for
traffickers to manually intervene with the LineItem when needed. This attribute is only
available for LineItemType.STANDARD line items if you have this feature
enabled on your network.
creativePlaceholders
CreativePlaceholder []
Details about the creatives that are expected to serve through this LineItem . This
attribute is required and replaces the creativeSizes attribute.
activityAssociations
LineItemActivityAssociation []
This attribute is required and meaningful only if the LineItem.costType is CostType.CPA .
environmentType
EnvironmentType
The environment that the LineItem is targeting. The default value is EnvironmentType.BROWSER . If this value is EnvironmentType.VIDEO_PLAYER , then this line
item can only target AdUnits that have AdUnitSizes whose environmentType is also VIDEO_PLAYER .
Enumerations
BROWSER
A regular web browser.
VIDEO_PLAYER
Video players.
allowedFormats
AllowedFormats []
The set of allowedFormats that this programmatic line item can have. If the set is
empty, this line item allows all formats.
Enumerations
AUDIO
Audio format.
This is only relevant for programmatic video line items.
UNKNOWN
The value returned if the actual value is not exposed by the requested API version.
companionDeliveryOption
CompanionDeliveryOption
The delivery option for companions. Setting this field is only
meaningful if the following conditions are met:
The Guaranteed roadblocks feature is enabled on your
network.
One of the following is true (both cannot be true, these are
mutually exclusive).
The environmentType is EnvironmentType.VIDEO_PLAYER .
The roadblockingType is RoadblockingType.CREATIVE_SET .
This field is optional and defaults to CompanionDeliveryOption.OPTIONAL
if the above conditions are met. In all other cases it defaults to
CompanionDeliveryOption.UNKNOWN and is not meaningful.
Enumerations
OPTIONAL
Companions are not required to serve a creative set. The creative set can
serve to inventory that has zero or more matching companions.
AT_LEAST_ONE
At least one companion must be served in order for the creative set to be used.
ALL
All companions in the set must be served in order for the creative set to
be used. This can still serve to inventory that has more companions
than can be filled.
UNKNOWN
The delivery type is unknown.
allowOverbook
xsd: boolean
The flag indicates whether overbooking should be allowed when
creating or updating reservations of line item types
LineItemType.SPONSORSHIP and LineItemType.STANDARD . When true, operations on
this line item will never trigger a ForecastError , which corresponds to an
overbook warning in the UI. The default value is false.
Note: this field will not persist on the line item itself, and
the value will only affect the current request.
skipInventoryCheck
xsd: boolean
The flag indicates whether the inventory check should be skipped
when creating or updating a line item. The default value is false.
Note: this field will not persist on the line item itself, and
the value will only affect the current request.
skipCrossSellingRuleWarningChecks
xsd: boolean
True to skip checks for warnings from rules applied to line items targeting inventory shared by
a distributor partner for cross selling when performing an action on this line item. The
default is false.
reserveAtCreation
xsd: boolean
The flag indicates whether inventory should be reserved when creating a line item of types
LineItemType.SPONSORSHIP and LineItemType.STANDARD in an unapproved Order . The default value is false.
stats
Stats
Contains trafficking statistics for the line item. This attribute is readonly and is populated
by Google. This will be null in case there are no statistics for a line item yet.
deliveryIndicator
DeliveryIndicator
Indicates how well the line item has been performing. This
attribute is readonly and is populated by Google. This will be
null if the delivery indicator
information is not available due to one of the following reasons:
The line item is not delivering.
The line item has an unlimited goal or cap.
The line item has a percentage based goal or cap.
deliveryData
DeliveryData
Delivery data provides the number of clicks or impressions
delivered for a LineItem in the last 7 days. This attribute is readonly
and is populated by Google. This will be null if the delivery data cannot be computed due
to one of the following reasons:
The line item is not deliverable.
The line item has completed delivering more than 7 days
ago.
The line item has an absolute-based goal. LineItem.deliveryIndicator
should be used to track its progress in this case.
budget
Money
The amount of money allocated to the LineItem . This attribute is readonly and is
populated by Google. The currency code is readonly.
status
ComputedStatus
The status of the LineItem . This attribute is readonly.
Enumerations
DELIVERY_EXTENDED
The LineItem has past its LineItem.endDateTime with an auto extension, but
hasn't met its goal.
DELIVERING
The LineItem has begun serving.
READY
The LineItem has been activated and is ready to serve.
PAUSED
The LineItem has been paused from serving.
INACTIVE
The LineItem is inactive. It is either caused by missing creatives or
the network disabling auto-activation.
PAUSED_INVENTORY_RELEASED
The LineItem has been paused and its reserved inventory has been
released. The LineItem will not serve.
PENDING_APPROVAL
The LineItem has been submitted for approval.
COMPLETED
The LineItem has completed its run.
DISAPPROVED
The LineItem has been disapproved and is not eligible to serve.
DRAFT
The LineItem is still being drafted.
CANCELED
The LineItem has been canceled and is no longer eligible to serve.
This is a legacy status imported from Google Ad Manager orders.
reservationStatus
LineItemSummary.Reservation...
Describes whether or not inventory has been reserved for the LineItem . This attribute
is readonly and is assigned by Google.
Enumerations
RESERVED
Indicates that inventory has been reserved for the line item.
UNRESERVED
Indicates that inventory has not been reserved for the line item.
isArchived
xsd: boolean
The archival status of the LineItem . This attribute is readonly.
webPropertyCode
xsd: string
The web property code used for dynamic allocation line items. This web property is only
required with line item types LineItemType.AD_EXCHANGE and LineItemType.ADSENSE .
appliedLabels
AppliedLabel []
The set of labels applied directly to this line item.
effectiveAppliedLabels
AppliedLabel []
Contains the set of labels inherited from the order that contains this line item and the
advertiser that owns the order. If a label has been negated, only the negated label is
returned. This field is readonly and is assigned by Google.
disableSameAdvertiserCompetitiveExclusion
xsd: boolean
If a line item has a series of competitive exclusions on it, it could be blocked from serving
with line items from the same advertiser. Setting this to true will allow line items
from the same advertiser to serve regardless of the other competitive exclusion labels being
applied.
lastModifiedByApp
xsd: string
The application that last modified this line item. This attribute is read only and is assigned
by Google.
notes
xsd: string
Provides any additional notes that may annotate the LineItem . This attribute is
optional and has a maximum length of 65,535 characters.
competitiveConstraintScope
CompetitiveConstraintScope
The CompetitiveConstraintScope for the competitive exclusion labels assigned to this
line item. This field is optional, defaults to CompetitiveConstraintScope.POD , and only
applies to video line items.
Enumerations
POD
The competitive exclusion label applies to all line items within a single pod (or group).
STREAM
The competitive exclusion label applies to all line items within the entire stream of content.
UNKNOWN
The value returned if the actual value is not exposed by the requested API version.
lastModifiedDateTime
DateTime
The date and time this line item was last modified. This attribute is read only.
creationDateTime
DateTime
This attribute may be null for line items created before this feature was introduced.
customFieldValues
BaseCustomFieldValue []
CustomFieldValue
DropDownCustomFieldValue
The values of the custom fields associated with this line item.
isMissingCreatives
xsd: boolean
Indicates if a LineItem is
missing any creatives for the creativePlaceholders specified.
Creatives can be considered missing for several
reasons including:
Not enough creatives of a certain size have been uploaded,
as determined by CreativePlaceholder.expectedCreativeCount . For example a
LineItem specifies 750x350,
400x200 but only a 750x350 was uploaded. Or LineItem specifies 750x350 with an expected
count of 2, but only one was uploaded.
The Creative.appliedLabels of an associated Creative do not match the CreativePlaceholder.effectiveAppliedLabels of the LineItem . For example LineItem specifies 750x350 with a Foo
AppliedLabel but a 750x350
creative without a AppliedLabel
was uploaded.
programmaticCreativeSource
ProgrammaticCreativeSource
Indicates the ProgrammaticCreativeSource of the programmatic line item. This is a
read-only field. Any changes must be made on the ProposalLineItem .
Enumerations
PUBLISHER
Indicates that the programmatic line item is associated with creatives provided by
the publisher.
ADVERTISER
Indicates that the programmatic line item is associated with creatives provided by
the advertiser.
UNKNOWN
The value returned if the actual value is not exposed by the requested API version.
thirdPartyMeasurementSettings
ThirdPartyMeasurementSettings
youtubeKidsRestricted
xsd: boolean
Designates this line item as intended for YT Kids app. If true, all creatives associated with
this line item must be reviewed and approved. See the Ad Manager Help Center
for more information.
videoMaxDuration
xsd: long
The max duration of a video creative associated with this
LineItem in milliseconds.
This attribute is only meaningful for video line items. For
version v202011 and earlier, this attribute is optional and
defaults to 0. For version v202102 and later, this attribute is
required for video line items and must be greater than 0.
primaryGoal
Goal
The primary goal that this LineItem is associated with, which is used in its pacing and
budgeting.
secondaryGoals
Goal []
The secondary goals that this LineItem is associated with. It is required and
meaningful only if the LineItem.costType is CostType.CPA or if the LineItem.lineItemType is LineItemType.SPONSORSHIP and LineItem.costType is
CostType.CPM .
grpSettings
GrpSettings
Contains the information for a line item which has a target GRP demographic.
dealInfo
LineItemDealInfoDto
The deal information associated with this line item, if it is programmatic.
viewabilityProviderCompanyIds
xsd: long[]
Optional IDs of the Company that provide ad verification for this line item. Company.Type.VIEWABILITY_PROVIDER .
childContentEligibility
ChildContentEligibility
Child content eligibility designation for this line item.
This field is optional and defaults to ChildContentEligibility.DISALLOWED .
Enumerations
UNKNOWN
DISALLOWED
This line item is not eligible to serve on any requests that are child-directed.
ALLOWED
This line item is eligible to serve on requests that are child-directed.
customVastExtension
xsd: string
Custom XML to be rendered in a custom VAST response at serving time.
repeatedCreativeServingEnabled
xsd: boolean
Indicates whether repeated creative serving is enabled for this line item.
deliveryAllocationProfileId
xsd: long
The AllocationDeliveryProfile ID for this line item.
LineItem
targeting
Targeting
Contains the targeting criteria for the ad campaign. This attribute is required.
creativeTargetings
CreativeTargeting []
A list of CreativeTargeting objects that can be used to specify creative level
targeting for this line item. Creative level targeting is specified in a creative placeholder's
CreativePlaceholder.targetingName field by referencing the creative targeting's name . It also needs to be re-specified in the LineItemCreativeAssociation.targetingName field when associating a line item with a creative
that fits into that placeholder.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-02-25 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-02-25 UTC."],[],[]]
