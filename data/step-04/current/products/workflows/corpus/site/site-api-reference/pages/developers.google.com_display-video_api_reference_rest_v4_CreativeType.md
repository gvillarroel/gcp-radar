---
title: "CreativeType \_|\_ DV360 API \_|\_ Google for Developers"
url: https://developers.google.com/display-video/api/reference/rest/v4/CreativeType
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://developers.google.com/display-video/api/reference/rest
source_metadata:
  url: https://developers.google.com/display-video/api/reference/rest/v4/CreativeType
  title: "CreativeType \_|\_ DV360 API \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

To discuss and provide feedback on our products, join the official Display & Video 360 API and Structured Data Files Discord channel in the Google Advertising and Measurement Community server.
Home
Products
DV360 API
Display & Video 360 API
Reference
Send feedback
CreativeType
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
Various creative types exist, each with specific supported hosting sources and methods for creation and updating.
Creative types include standard display, expandable, video, native, templated app install, lightbox, audio, publisher hosted, and asset-based creatives.
Some creative types, like templated app install and lightbox, do not support create and update methods.
The supported hosting source, such as HOSTING_SOURCE_HOSTED or HOSTING_SOURCE_THIRD_PARTY, determines which creative types can be created or updated.
Possible types of a creative.
Enums
CREATIVE_TYPE_UNSPECIFIED
Type value is not specified or is unknown in this version.
CREATIVE_TYPE_STANDARD
Standard display creative.
Create and update methods are supported for this creative type if the hostingSource is one of the following:
HOSTING_SOURCE_HOSTED
HOSTING_SOURCE_THIRD_PARTY
CREATIVE_TYPE_EXPANDABLE
Expandable creative.
Create and update methods are supported for this creative type if the hostingSource is HOSTING_SOURCE_THIRD_PARTY
CREATIVE_TYPE_VIDEO
Video creative.
Create and update methods are supported for this creative type if the hostingSource is one of the following:
HOSTING_SOURCE_HOSTED
HOSTING_SOURCE_THIRD_PARTY
CREATIVE_TYPE_NATIVE
Native creative rendered by publishers with assets from advertiser.
Create and update methods are supported for this creative type if the hostingSource is HOSTING_SOURCE_HOSTED
CREATIVE_TYPE_TEMPLATED_APP_INSTALL
Templated app install mobile creative (banner).
Create and update methods are not supported for this creative type.
CREATIVE_TYPE_NATIVE_SITE_SQUARE
Square native creative.
Create and update methods are supported for this creative type if the hostingSource is HOSTING_SOURCE_HOSTED
CREATIVE_TYPE_TEMPLATED_APP_INSTALL_INTERSTITIAL
Interstitial creative including both display and video.
Create and update methods are not supported for this creative type.
CREATIVE_TYPE_LIGHTBOX
Responsive and expandable Lightbox creative.
Create and update methods are not supported for this creative type.
CREATIVE_TYPE_NATIVE_APP_INSTALL
Native app install creative.
Create and update methods are not supported for this creative type.
CREATIVE_TYPE_NATIVE_APP_INSTALL_SQUARE
Square native app install creative.
Create and update methods are not supported for this creative type.
CREATIVE_TYPE_AUDIO
Audio creative.
Create and update methods are supported for this creative type if the hostingSource is HOSTING_SOURCE_HOSTED
CREATIVE_TYPE_PUBLISHER_HOSTED
Publisher hosted creative.
Create and update methods are not supported for this creative type.
CREATIVE_TYPE_NATIVE_VIDEO
Native video creative.
Create and update methods are supported for this creative type if the hostingSource is HOSTING_SOURCE_HOSTED
CREATIVE_TYPE_TEMPLATED_APP_INSTALL_VIDEO
Templated app install mobile video creative.
Create and update methods are not supported for this creative type.
CREATIVE_TYPE_ASSET_BASED_CREATIVE
Asset-based creative.
Create and update methods are supported for this creative type if the hostingSource is HOSTING_SOURCE_HOSTED .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-03-27 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-03-27 UTC."],[],["Display & Video 360 API v4, currently in beta, defines various creative types. These include `STANDARD`, `EXPANDABLE`, `VIDEO`, `NATIVE`, `AUDIO`, `NATIVE_VIDEO`, and `ASSET_BASED_CREATIVE`. Create and update methods are supported for some types based on `hostingSource`. `HOSTING_SOURCE_HOSTED` and `HOSTING_SOURCE_THIRD_PARTY` enable these actions. Other types, such as `TEMPLATED_APP_INSTALL`, `LIGHTBOX`, `NATIVE_APP_INSTALL`, and `PUBLISHER_HOSTED`, do not support create or update methods.\n"]]
