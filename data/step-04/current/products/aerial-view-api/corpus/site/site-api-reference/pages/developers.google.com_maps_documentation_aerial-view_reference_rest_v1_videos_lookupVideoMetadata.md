---
title: "Method: videos.lookupVideoMetadata \_|\_ Google Maps Aerial View API \_|\_\
  \ Google for Developers"
url: https://developers.google.com/maps/documentation/aerial-view/reference/rest/v1/videos/lookupVideoMetadata
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://developers.google.com/maps/documentation/aerial-view/reference/rest
source_metadata:
  url: https://developers.google.com/maps/documentation/aerial-view/reference/rest/v1/videos/lookupVideoMetadata
  title: "Method: videos.lookupVideoMetadata \_|\_ Google Maps Aerial View API \_\
    |\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Products
Google Maps Platform
Documentation
Aerial View API
Reference
Send feedback
Method: videos.lookupVideoMetadata
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
Retrieves video metadata using either a video ID or a US postal address.
This method is a free alternative to videos.lookupVideo , but it does not provide playback URIs.
The request body should be empty, and the response will contain video metadata if successful.
Uses gRPC Transcoding syntax for the URL.
HTTP request
Query parameters
Request body
Response body
Fetches metadata for a video given its address or videoId. This method is a free-to-call alternative to videos.lookupVideo , and returns all available video data excluding playback URIs.
HTTP request
GET https://aerialview.googleapis.com/v1/videos:lookupVideoMetadata
The URL uses gRPC Transcoding syntax.
Query parameters
Parameters
Union parameter key . Required. key can be only one of the following:
videoId
string
An ID returned from videos.renderVideo .
address
string
A US postal address.
Request body
The request body must be empty.
Response body
If successful, the response body contains an instance of VideoMetadata .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-08-27 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-08-27 UTC."],[],[]]
