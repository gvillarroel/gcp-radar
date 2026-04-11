---
title: "ActiveViewSignal \_|\_ DV360 API \_|\_ Google for Developers"
url: https://developers.google.com/display-video/api/reference/rest/v4/ActiveViewSignal
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://developers.google.com/display-video/api/reference/rest
source_metadata:
  url: https://developers.google.com/display-video/api/reference/rest/v4/ActiveViewSignal
  title: "ActiveViewSignal \_|\_ DV360 API \_|\_ Google for Developers"
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
ActiveViewSignal
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
Active View signals like ACTIVE_VIEW_VIEWED , AUDIBLE , VIDEO_COMPLETED , TIME_ON_SCREEN , VIDEO_PLAYER_SIZE , and COMPLETED_IN_VIEW_AUDIBLE are supported for Algorithm Rules.
Each supported signal, except ACTIVE_VIEW_SIGNAL_UNSPECIFIED , corresponds to a specific metric related to ad viewing and interaction.
The values for these signals are stored in different fields within the comparison value, depending on the data type (boolean, integer, or video player size).
The ACTIVE_VIEW_SIGNAL_UNSPECIFIED signal represents an unknown state and does not correspond to a specific metric value.
Supported active view signals for Algorithm Rules.
Enums
ACTIVE_VIEW_SIGNAL_UNSPECIFIED
Unknown signal.
ACTIVE_VIEW_VIEWED
Whether Active View detects that your ad has been viewed. Value is stored in the boolValue field of the comparison value.
AUDIBLE
Whether Active View detects that your ad was audible. Value is stored in the boolValue field of the comparison value.
VIDEO_COMPLETED
Whether the video was completed. Value is stored in the boolValue field of the comparison value.
TIME_ON_SCREEN
The time the ad was on screen in seconds. Value is stored in the int64Value field of the comparison value.
VIDEO_PLAYER_SIZE
The size of the video player displaying the ad. Value is stored in the videoPlayerSizeValue field of the comparison value.
COMPLETED_IN_VIEW_AUDIBLE
Whether the ad was completed in view and audible. Value is stored in the boolValue field of the comparison value.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-04-28 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-04-28 UTC."],[],[]]
