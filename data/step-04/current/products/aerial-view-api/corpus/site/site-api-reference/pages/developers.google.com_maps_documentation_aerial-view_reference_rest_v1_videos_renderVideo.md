---
title: "Method: videos.renderVideo \_|\_ Google Maps Aerial View API \_|\_ Google\
  \ for Developers"
url: https://developers.google.com/maps/documentation/aerial-view/reference/rest/v1/videos/renderVideo
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://developers.google.com/maps/documentation/aerial-view/reference/rest
source_metadata:
  url: https://developers.google.com/maps/documentation/aerial-view/reference/rest/v1/videos/renderVideo
  title: "Method: videos.renderVideo \_|\_ Google Maps Aerial View API \_|\_ Google\
    \ for Developers"
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
Method: videos.renderVideo
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
Sends a POST request to render a video of a US postal address using the Aerial View API.
The request body requires a JSON object with a mandatory "address" field containing the US postal address.
The response indicates the render request status and, if successful, includes video metadata in the response body.
If a video for the given address has already been rendered, the response returns metadata directly without initiating a new render.
HTTP request
Request body
JSON representation
Response body
JSON representation
Adds an address to the renderer's queue if a video hasn't already been rendered. Otherwise, returns metadata about the video.
HTTP request
POST https://aerialview.googleapis.com/v1/videos:renderVideo
The URL uses gRPC Transcoding syntax.
Request body
The request body contains data with the following structure:
JSON representation
{
"address" : string
}
Fields
address
string
Required. A US postal address for the location to be rendered in the video.
Response body
Response message for AerialView.RenderVideo .
If successful, the response body contains data with the following structure:
JSON representation
{
"state" : enum ( State ) ,
"metadata" : {
object ( VideoMetadata )
}
}
Fields
state
enum ( State )
Current state of the render request.
metadata
object ( VideoMetadata )
Contains the video's metadata, only set if the state is ACTIVE .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-08-27 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-08-27 UTC."],[],[]]
