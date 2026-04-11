---
title: "CompanionAds \_|\_ Video Stitcher API \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/video-stitcher/docs/reference/rest/v1/CompanionAds
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/video-stitcher/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/video-stitcher/docs/reference/rest/v1/CompanionAds
  title: "CompanionAds \_|\_ Video Stitcher API \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

To enable the Video Stitcher API for your project, please reach out to your Account Representative or contact Sales to learn more.
Home
Documentation
AI and ML
Video Stitcher API
Reference
Send feedback
CompanionAds
Stay organized with collections
Save and categorize content based on your preferences.
JSON representation
DisplayRequirement
Companion
JSON representation
IframeAdResource
JSON representation
StaticAdResource
JSON representation
HtmlAdResource
JSON representation
Metadata for companion ads.
JSON representation
{
"displayRequirement" : enum ( DisplayRequirement ) ,
"companions" : [
{
object ( Companion )
}
]
}
Fields
displayRequirement
enum ( DisplayRequirement )
Indicates how many of the companions should be displayed with the ad.
companions[]
object ( Companion )
List of companion ads.
DisplayRequirement
Indicates how many of the companions should be displayed with the ad.
Enums
DISPLAY_REQUIREMENT_UNSPECIFIED
Required companions are not specified. The default is ALL.
ALL
All companions are required to be displayed.
ANY
At least one of companions needs to be displayed.
NONE
All companions are optional for display.
Companion
Metadata for a companion.
JSON representation
{
"apiFramework" : string ,
"heightPx" : integer ,
"widthPx" : integer ,
"assetHeightPx" : integer ,
"expandedHeightPx" : integer ,
"assetWidthPx" : integer ,
"expandedWidthPx" : integer ,
"adSlotId" : string ,
"events" : [
{
object ( Event )
}
] ,
// Union field ad_resource can be only one of the following:
"iframeAdResource" : {
object ( IframeAdResource )
} ,
"staticAdResource" : {
object ( StaticAdResource )
} ,
"htmlAdResource" : {
object ( HtmlAdResource )
}
// End of list of possible types for union field ad_resource .
}
Fields
apiFramework
string
The API necessary to communicate with the creative if available.
heightPx
integer
The pixel height of the placement slot for the intended creative.
widthPx
integer
The pixel width of the placement slot for the intended creative.
assetHeightPx
integer
The pixel height of the creative.
expandedHeightPx
integer
The maximum pixel height of the creative in its expanded state.
assetWidthPx
integer
The pixel width of the creative.
expandedWidthPx
integer
The maximum pixel width of the creative in its expanded state.
adSlotId
string
The ID used to identify the desired placement on a publisher's page. Values to be used should be discussed between publishers and advertisers.
events[]
object ( Event )
The list of tracking events for the companion.
Union field ad_resource . Ad resource associated with the companion ad. ad_resource can be only one of the following:
iframeAdResource
object ( IframeAdResource )
The IFrame ad resource associated with the companion ad.
staticAdResource
object ( StaticAdResource )
The static ad resource associated with the companion ad.
htmlAdResource
object ( HtmlAdResource )
The HTML ad resource associated with the companion ad.
IframeAdResource
Metadata for an IFrame ad resource.
JSON representation
{
"uri" : string
}
Fields
uri
string
URI source for an IFrame to display for the ad resource.
StaticAdResource
Metadata for a static ad resource.
JSON representation
{
"uri" : string ,
"creativeType" : string
}
Fields
uri
string
URI to the static file for the ad resource.
creativeType
string
Describes the MIME type of the ad resource.
HtmlAdResource
Metadata for an HTML ad resource.
JSON representation
{
"htmlSource" : string
}
Fields
htmlSource
string
The HTML to display for the ad resource.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-07-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-07-14 UTC."],[],[]]
