---
title: "REST Resource: networks.adUnits \_|\_ Ad Manager API (Beta) \_|\_ Google for\
  \ Developers"
url: https://developers.google.com/ad-manager/api/beta/reference/rest/v1/networks.adUnits
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://developers.google.com/ad-manager/api/beta/reference/rest
source_metadata:
  url: https://developers.google.com/ad-manager/api/beta/reference/rest/v1/networks.adUnits
  title: "REST Resource: networks.adUnits \_|\_ Ad Manager API (Beta) \_|\_ Google\
    \ for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

To discuss and provide feedback on our products, join the official Ad Manager Discord channel in the Google Advertising and Measurement Community server.
Home
Products
Ad Manager
API (Beta)
Reference
Send feedback
REST Resource: networks.adUnits
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
The AdUnit resource represents an ad unit and includes various fields such as name, ID, parent path, sizes, labels, and status.
AdUnit objects can have associated parent information, sizes with environment types and companions, status indicating their availability, and target window settings.
Frequency capping for AdUnits can be applied using labels or standard frequency cap settings, specifying the maximum impressions, time amount, and time unit.
AdUnits support different smart size modes, including fixed size, smart banner, and dynamic size.
The API provides methods to retrieve single or multiple AdUnit objects.
Resource: AdUnit
JSON representation
AdUnitParent
JSON representation
AdUnitStatus
TargetWindow
AdUnitSize
JSON representation
EnvironmentType
LabelFrequencyCap
JSON representation
FrequencyCap
JSON representation
TimeUnit
SmartSizeMode
Methods
Resource: AdUnit
The AdUnit resource.
JSON representation
{
"name" : string ,
"adUnitId" : string ,
"parentPath" : [
{
object ( AdUnitParent )
}
] ,
"appliedTeams" : [
string
] ,
"teams" : [
string
] ,
"adUnitSizes" : [
{
object ( AdUnitSize )
}
] ,
"appliedLabels" : [
{
object ( AppliedLabel )
}
] ,
"effectiveAppliedLabels" : [
{
object ( AppliedLabel )
}
] ,
"appliedLabelFrequencyCaps" : [
{
object ( LabelFrequencyCap )
}
] ,
"effectiveLabelFrequencyCaps" : [
{
object ( LabelFrequencyCap )
}
] ,
"parentAdUnit" : string ,
"displayName" : string ,
"adUnitCode" : string ,
"status" : enum ( AdUnitStatus ) ,
"appliedTargetWindow" : enum ( TargetWindow ) ,
"effectiveTargetWindow" : enum ( TargetWindow ) ,
"description" : string ,
"explicitlyTargeted" : boolean ,
"hasChildren" : boolean ,
"updateTime" : string ,
"externalSetTopBoxChannelId" : string ,
"refreshDelay" : string ,
"smartSizeMode" : enum ( SmartSizeMode ) ,
"appliedAdsenseEnabled" : boolean ,
"effectiveAdsenseEnabled" : boolean
}
Fields
name
string
Identifier. The resource name of the AdUnit. Format: networks/{networkCode}/adUnits/{adUnitId}
adUnitId (deprecated)
string ( int64 format)
Output only. Parse the ID from the name field instead.
Output only. Deprecated: AdUnit ID.
parentPath[]
object ( AdUnitParent )
Output only. The path to this AdUnit in the ad unit hierarchy represented as a list from the root to this ad unit's parent. For root ad units, this list is empty.
appliedTeams[]
string
Optional. The resource names of Teams directly applied to this AdUnit. Format: "networks/{networkCode}/teams/{team_id}"
teams[]
string
Output only. The resource names of all Teams that this AdUnit is on as well as those inherited from parent AdUnits. Format: "networks/{networkCode}/teams/{team_id}"
adUnitSizes[]
object ( AdUnitSize )
Optional. The sizes that can be served inside this ad unit.
appliedLabels[]
object ( AppliedLabel )
Optional. The set of labels applied directly to this ad unit.
effectiveAppliedLabels[]
object ( AppliedLabel )
Output only. Contains the set of labels applied directly to the ad unit as well as those inherited from the parent ad units. If a label has been negated, only the negated label is returned. This attribute is assigned by Google.
appliedLabelFrequencyCaps[]
object ( LabelFrequencyCap )
Optional. The set of label frequency caps applied directly to this ad unit. There is a limit of 10 label frequency caps per ad unit.
effectiveLabelFrequencyCaps[]
object ( LabelFrequencyCap )
Output only. The label frequency caps applied directly to the ad unit as well as those inherited from parent ad units.
parentAdUnit
string
Required. Immutable. The AdUnit's parent. Every ad unit has a parent except for the root ad unit, which is created by Google. Format: "networks/{networkCode}/adUnits/{adUnitId}"
displayName
string
Required. The display name of the ad unit. Its maximum length is 255 characters.
adUnitCode
string
Optional. Immutable. A string used to uniquely identify the ad unit for the purposes of serving the ad. This attribute can be set during ad unit creation. If it is not provided, it will be assigned by Google based on the ad unit ID.
status
enum ( AdUnitStatus )
Output only. The status of this ad unit. It defaults to ACTIVE.
appliedTargetWindow
enum ( TargetWindow )
Optional. The target window directly applied to this AdUnit. If this field is not set, this AdUnit uses the target window specified in effectiveTargetWindow.
effectiveTargetWindow
enum ( TargetWindow )
Output only. Non-empty default. The target window of this AdUnit. This value is inherited from ancestor AdUnits and defaults to TOP if no AdUnit in the hierarchy specifies it.
description
string
Optional. A description of the ad unit. The maximum length is 65,535 characters.
explicitlyTargeted
boolean
Optional. If this field is set to true, then the AdUnit will not be implicitly targeted when its parent is. Traffickers must explicitly target such an AdUnit or else no line items will serve to it. This feature is only available for Ad Manager 360 accounts.
hasChildren
boolean
Output only. This field is set to true if the ad unit has any children.
updateTime
string ( Timestamp format)
Output only. The time this AdUnit was last modified.
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
externalSetTopBoxChannelId (deprecated)
string
This item is deprecated!
Optional. Determines what set top box video on demand channel this ad unit corresponds to in an external set top box ad campaign system.
refreshDelay
string ( Duration format)
Optional. The duration after which an Ad Unit will automatically refresh. This is only valid for ad units in mobile apps. If not set, the ad unit will not refresh.
A duration in seconds with up to nine fractional digits, ending with ' s '. Example: "3.5s" .
smartSizeMode
enum ( SmartSizeMode )
Optional. Non-empty default. The smart size mode for this ad unit. This attribute defaults to SmartSizeMode.NONE for fixed sizes.
appliedAdsenseEnabled
boolean
Optional. The value of AdSense enabled directly applied to this ad unit. If not specified this ad unit will inherit the value of effectiveAdsenseEnabled from its ancestors.
effectiveAdsenseEnabled
boolean
Output only. Specifies whether or not the AdUnit is enabled for serving ads from the AdSense content network. This attribute defaults to the ad unit's parent or ancestor's setting if one has been set. If no ancestor of the ad unit has set appliedAdsenseEnabled, the attribute is defaulted to true.
AdUnitParent
The summary of a parent AdUnit.
JSON representation
{
"parentAdUnit" : string ,
"displayName" : string ,
"adUnitCode" : string
}
Fields
parentAdUnit
string
Output only. The parent of the current AdUnit Format: networks/{networkCode}/adUnits/{adUnitId}
displayName
string
Output only. The display name of the parent AdUnit.
adUnitCode
string
Output only. A string used to uniquely identify the ad unit for the purposes of serving the ad.
AdUnitStatus
The status of an AdUnit.
Enums
AD_UNIT_STATUS_UNSPECIFIED
Default value. This value is unused.
ACTIVE
The ad unit is active, available for targeting, and serving.
INACTIVE
The ad unit will be visible in the UI, but ignored by serving.
ARCHIVED
The ad unit will be hidden in the UI and ignored by serving.
TargetWindow
Corresponds to an HTML link's target attribute. See http://www.w3.org/TR/html401/present/frames.html#adef-target
Enums
TARGET_WINDOW_UNSPECIFIED
Default value. This value is unused.
TOP
Specifies that the link should open in the full body of the page.
BLANK
Specifies that the link should open in a new window.
AdUnitSize
Represents the size, environment, and companions of an ad in an ad unit.
JSON representation
{
"companions" : [
{
object ( Size )
}
] ,
"size" : {
object ( Size )
} ,
"environmentType" : enum ( EnvironmentType )
}
Fields
companions[]
object ( Size )
The companions for this ad unit size. Companions are only valid if the environment is VIDEO_PLAYER .
size
object ( Size )
Required. The Size of the AdUnit.
environmentType
enum ( EnvironmentType )
Required. The EnvironmentType of the AdUnit
EnvironmentType
The different environments in which an ad can be shown.
Enums
ENVIRONMENT_TYPE_UNSPECIFIED
No value specified
BROWSER
A regular web browser.
VIDEO_PLAYER
Video players.
LabelFrequencyCap
Frequency cap using a label.
JSON representation
{
"label" : string ,
"frequencyCap" : {
object ( FrequencyCap )
}
}
Fields
label
string
Required. The label to used for frequency capping. Format: "networks/{networkCode}/labels/{labelId}"
frequencyCap
object ( FrequencyCap )
The frequency cap.
FrequencyCap
Represents a Frequency Cap that can be applied to an entity.
JSON representation
{
"maxImpressions" : string ,
"timeAmount" : string ,
"timeUnit" : enum ( TimeUnit )
}
Fields
maxImpressions
string ( int64 format)
The maximum number of impressions for this frequency cap.
timeAmount
string ( int64 format)
The number of time units over which the frequency cap is effective.
timeUnit
enum ( TimeUnit )
The units of time of this frequency cap.
TimeUnit
Unit of time for the frequency cap.
Enums
TIME_UNIT_UNSPECIFIED
Default value. This value is unused.
MINUTE
Minute
HOUR
Hour
DAY
Day
WEEK
Week
MONTH
Month
LIFETIME
Lifetime
POD
Per pod of ads in a video stream. Only valid for entities in a VIDEO_PLAYER environment.
STREAM
Per video stream. Only valid for entities in a VIDEO_PLAYER environment.
SmartSizeMode
The smart size mode for this ad unit. This attribute is optional and defaults to SmartSizeMode.NONE for fixed sizes.
Enums
SMART_SIZE_MODE_UNSPECIFIED
Default value. This value is unused.
NONE
Fixed size mode (default).
SMART_BANNER
The height is fixed for the request, the width is a range.
DYNAMIC_SIZE
Height and width are ranges.
Methods
batchActivate
API to batch activate AdUnit objects.
batchArchive
Archives a list of AdUnit objects.
batchCreate
API to batch create AdUnit objects.
batchDeactivate
Deactivates a list of AdUnit objects.
batchUpdate
API to batch update AdUnit objects.
create
API to create an AdUnit object.
get
API to retrieve an AdUnit object.
list
API to retrieve a list of AdUnit objects.
patch
API to update an AdUnit object.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-02-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-02-10 UTC."],[],["The content details the AdUnit resource, its JSON representation, and related components. Key information includes: AdUnit identification (name, ID, code), hierarchical structure (parent, path), display settings (name, target window), serving properties (status, sizes, environment), team associations, description, refresh options, label and frequency cap management, Smart Size mode, and adsense settings. It outlines methods to manage ad units including get and list. Related components such as AdUnitParent, Size, and FrequencyCap are also defined.\n"]]
