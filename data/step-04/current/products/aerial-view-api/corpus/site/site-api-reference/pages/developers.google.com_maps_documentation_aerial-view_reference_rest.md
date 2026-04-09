---
title: "Google Maps Aerial View API \_|\_ Google for Developers"
url: https://developers.google.com/maps/documentation/aerial-view/reference/rest
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://developers.google.com/maps/documentation/aerial-view/reference/rest
source_metadata:
  url: https://developers.google.com/maps/documentation/aerial-view/reference/rest
  title: "Google Maps Aerial View API \_|\_ Google for Developers"
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
Aerial View API
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
The Maps Aerial View API provides access to aerial videos using a RESTful interface.
Developers can access the API through Google-provided client libraries or by directly making API requests.
The API offers functionalities to fetch video data, metadata, and render videos based on addresses or video IDs.
The service endpoint for the API is https://aerialview.googleapis.com .
The Maps Aerial View API.
REST Resource: v1.videos
Service: aerialview.googleapis.com
To call this service, we recommend that you use the Google-provided client libraries . If your application needs to use your own libraries to call this service, use the following information when you make the API requests.
Discovery document
A Discovery Document is a machine-readable specification for describing and consuming REST APIs. It is used to build client libraries, IDE plugins, and other tools that interact with Google APIs. One service may provide multiple discovery documents. This service provides the following discovery document:
https://aerialview.googleapis.com/$discovery/rest?version=v1
Service endpoint
A service endpoint is a base URL that specifies the network address of an API service. One service might have multiple service endpoints. This service has the following service endpoint and all URIs below are relative to this service endpoint:
https://aerialview.googleapis.com
REST Resource: v1.videos
Methods
lookupVideo
GET /v1/videos:lookupVideo
Fetches a video given its address or videoId.
lookupVideoMetadata
GET /v1/videos:lookupVideoMetadata
Fetches metadata for a video given its address or videoId.
renderVideo
POST /v1/videos:renderVideo
Adds an address to the renderer's queue if a video hasn't already been rendered.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-08-27 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-08-27 UTC."],[],[]]
