---
title: "ManifestOptions \_|\_ Video Stitcher API \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/video-stitcher/docs/reference/rest/v1/ManifestOptions
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/video-stitcher/docs/apis
source_metadata:
  url: https://docs.cloud.google.com/video-stitcher/docs/reference/rest/v1/ManifestOptions
  title: "ManifestOptions \_|\_ Video Stitcher API \_|\_ Google Cloud Documentation"
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
ManifestOptions
Stay organized with collections
Save and categorize content based on your preferences.
JSON representation
RenditionFilter
JSON representation
OrderPolicy
Options for manifest generation.
JSON representation
{
"includeRenditions" : [
{
object ( RenditionFilter )
}
] ,
"bitrateOrder" : enum ( OrderPolicy )
}
Fields
includeRenditions[]
object ( RenditionFilter )
If specified, the output manifest will only return renditions matching the specified filters.
bitrateOrder
enum ( OrderPolicy )
If specified, the output manifest will orders the video and muxed renditions by bitrate according to the ordering policy.
RenditionFilter
Filters for a video or muxed redition.
JSON representation
{
"bitrateBps" : integer ,
"codecs" : string
}
Fields
bitrateBps
integer
Bitrate in bits per second for the rendition. If set, only renditions with the exact bitrate will match.
codecs
string
Codecs for the rendition. If set, only renditions with the exact value will match.
OrderPolicy
Defines the ordering policy during manifest generation.
Enums
ORDER_POLICY_UNSPECIFIED
Ordering policy is not specified.
ASCENDING
Order by ascending.
DESCENDING
Order by descending.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-07-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-07-14 UTC."],[],[]]
