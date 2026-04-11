---
title: "Size \_|\_ Ad Manager API (Beta) \_|\_ Google for Developers"
url: https://developers.google.com/ad-manager/api/beta/reference/rest/v1/Size
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://developers.google.com/ad-manager/api/beta/reference/rest
source_metadata:
  url: https://developers.google.com/ad-manager/api/beta/reference/rest/v1/Size
  title: "Size \_|\_ Ad Manager API (Beta) \_|\_ Google for Developers"
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
Size
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
A Size object represents the dimensions of an AdUnit, LineItem, or Creative.
A Size is defined by its width, height, and sizeType, all of which are required fields.
The SizeType enum indicates how the ad dimensions are interpreted, with options such as PIXEL, ASPECT_RATIO, INTERSTITIAL, NATIVE, FLUID, and AUDIO.
Certain SizeTypes, like INTERSTITIAL, IGNORED, NATIVE, FLUID, and AUDIO, must be used with a 1x1 size.
JSON representation
SizeType
Represents the dimensions of an AdUnit, LineItem, or Creative.
JSON representation
{
"width" : integer ,
"height" : integer ,
"sizeType" : enum ( SizeType )
}
Fields
width
integer
Required. The width of the Creative, AdUnit , or LineItem.
height
integer
Required. The height of the Creative, AdUnit , or LineItem.
sizeType
enum ( SizeType )
Required. The SizeType of the Creative, AdUnit , or LineItem.
SizeType
The different Size types for an ad.
Enums
SIZE_TYPE_UNSPECIFIED
Default value. This value is unused.
PIXEL
Dimension based size, an actual height and width in pixels.
ASPECT_RATIO
Size is expressed as a ratio. For example, 4:1 could be met by a 100 x 25 sized image.
INTERSTITIAL
Out-of-page (Interstitial) size that is not related to the slot it is served. This must be used with 1x1 size.
IGNORED
Size is ignored. This must be used with 1x1 size.
NATIVE
Native size, which is a function of the how the client renders the creative. This must be used with 1x1 size.
FLUID
Fluid size. Automatically sizes the ad by filling the width of the enclosing column and adjusting the height as appropriate. This must be used with 1x1 size.
AUDIO
Audio size. Used with audio ads. This must be used with 1x1 size.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-08-20 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-08-20 UTC."],[],[]]
