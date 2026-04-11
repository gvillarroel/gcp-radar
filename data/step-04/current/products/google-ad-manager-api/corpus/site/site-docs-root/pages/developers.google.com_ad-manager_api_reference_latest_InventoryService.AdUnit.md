---
title: "type AdUnit (v202602) \_|\_ Ad Manager SOAP API \_|\_ Google for Developers"
url: https://developers.google.com/ad-manager/api/reference/latest/InventoryService.AdUnit
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://developers.google.com/ad-manager/api/intro
source_metadata:
  url: https://developers.google.com/ad-manager/api/reference/latest/InventoryService.AdUnit
  title: "type AdUnit (v202602) \_|\_ Ad Manager SOAP API \_|\_ Google for Developers"
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
type AdUnit (v202602)
Stay organized with collections
Save and categorize content based on your preferences.
Service
InventoryService
Dependencies
AdUnitPage
createAdUnits()
updateAdUnits()
▼
AdUnit
An AdUnit represents a chunk of identified inventory for the publisher. It contains all
the settings that need to be associated with inventory in order to serve ads to it. An AdUnit can also be the parent of other ad units in the inventory hierarchy.
Namespace
https://www.google.com/apis/ads/publisher/v202602
Field
id
xsd: string
Uniquely identifies the AdUnit . This value is read-only and is assigned by Google when
an ad unit is created. This attribute is required for updates.
parentId
xsd: string
The ID of the ad unit's parent. Every ad unit has a parent except for the root ad unit, which
is created by Google. This attribute is required when creating the ad unit. Once the ad unit is
created this value will be read-only.
hasChildren
xsd: boolean
This field is set to true if the ad unit has any children. This attribute is read-only
and is populated by Google.
parentPath
AdUnitParent []
The path to this ad unit in the ad unit hierarchy represented as a list from the root to this
ad unit's parent. For root ad units, this list is empty. This attribute is read-only and is
populated by Google.
name
xsd: string
The name of the ad unit. This attribute is required and its maximum length is 255 characters.
This attribute must also be case-insensitive unique.
description
xsd: string
A description of the ad unit. This value is optional and its maximum length is 65,535
characters.
targetWindow
AdUnit.TargetWindow
The value to use for the HTML link's target attribute. This value is optional and will
be interpreted as TargetWindow.TOP if left blank.
Enumerations
TOP
Specifies that the link should open in the full body of the page.
BLANK
Specifies that the link should open in a new window.
status
InventoryStatus
The status of this ad unit. It defaults to InventoryStatus.ACTIVE . This value cannot be
updated directly using InventoryService.updateAdUnit . It can only be modified by
performing actions via InventoryService.performAdUnitAction .
Enumerations
ACTIVE
The object is active.
INACTIVE
The object is no longer active.
ARCHIVED
The object has been archived.
adUnitCode
xsd: string
A string used to uniquely identify the ad unit for the purposes of serving the ad. This
attribute is optional and can be set during ad unit creation. If it is not provided, it will be
assigned by Google based off of the inventory unit ID. Once an ad unit is created, its adUnitCode cannot be changed.
adUnitSizes
AdUnitSize []
The permissible creative sizes that can be served inside this ad unit. This attribute is
optional. This attribute replaces the sizes attribute.
isInterstitial
xsd: boolean
Whether this is an interstitial ad unit.
isNative
xsd: boolean
Whether this is a native ad unit.
isFluid
xsd: boolean
Whether this is a fluid ad unit.
explicitlyTargeted
xsd: boolean
If this field is set to true , then the AdUnit will not be implicitly targeted
when its parent is. Traffickers must explicitly target such an ad unit or else no line items
will serve to it. This feature is only available for Ad Manager 360 accounts.
adSenseSettings
AdSenseSettings
AdSense specific settings. To overwrite this, set the adSenseSettingsSource to PropertySourceType.DIRECTLY_SPECIFIED when setting the value of this field.
adSenseSettingsSource
ValueSourceType
Specifies the source of adSenseSettings value. To revert an overridden value to its
default, set this field to PropertySourceType.PARENT .
Enumerations
PARENT
The field's value is inherited from the parent object.
DIRECTLY_SPECIFIED
The field's value is user specified and not inherited.
UNKNOWN
The value returned if the actual value is not exposed by the requested API version.
appliedLabelFrequencyCaps
LabelFrequencyCap []
The set of label frequency caps applied directly to this ad unit. There is a limit of 10 label
frequency caps per ad unit.
effectiveLabelFrequencyCaps
LabelFrequencyCap []
Contains the set of labels applied directly to the ad unit as well as those inherited from
parent ad units. This field is readonly and is assigned by Google.
appliedLabels
AppliedLabel []
The set of labels applied directly to this ad unit.
effectiveAppliedLabels
AppliedLabel []
Contains the set of labels applied directly to the ad unit as well as those inherited from the
parent ad units. If a label has been negated, only the negated label is returned. This field is
readonly and is assigned by Google.
effectiveTeamIds
xsd: long[]
The IDs of all teams that this ad unit is on as well as those inherited from parent ad units.
This value is read-only and is set by Google.
appliedTeamIds
xsd: long[]
The IDs of all teams that this ad unit is on directly.
lastModifiedDateTime
DateTime
The date and time this ad unit was last modified.
smartSizeMode
SmartSizeMode
The smart size mode for this ad unit. This attribute is optional and defaults to SmartSizeMode.NONE for fixed sizes.
Enumerations
UNKNOWN
The value returned if the actual value is not exposed by the requested
API version.
NONE
Fixed size mode (default).
SMART_BANNER
The height is fixed for the request, the width is a range.
DYNAMIC_SIZE
Height and width are ranges.
refreshRate
xsd: int
The interval in seconds which ad units in mobile apps automatically refresh. Valid values are
between 30 and 120 seconds. This attribute is optional and only applies to ad units in mobile
apps. If this value is not set, then the mobile app ad will not refresh.
externalSetTopBoxChannelId
xsd: string
Specifies an ID for a channel in an external set-top box campaign management system. This
attribute is only meaningful if isSetTopBoxEnabled is true . This attribute is
read-only.
isSetTopBoxEnabled
xsd: boolean
Flag that specifies whether this ad unit represents an external set-top box channel. This
attribute is read-only.
applicationId
xsd: long
The MobileApplication.applicationId for the CTV application that this ad unit is
within. This attribute is optional.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-02-25 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-02-25 UTC."],[],[]]
