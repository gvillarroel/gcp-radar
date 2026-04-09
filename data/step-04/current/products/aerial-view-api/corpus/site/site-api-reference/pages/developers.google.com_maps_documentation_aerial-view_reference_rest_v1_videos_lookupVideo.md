---
title: "Method: videos.lookupVideo \_|\_ Google Maps Aerial View API \_|\_ Google\
  \ for Developers"
url: https://developers.google.com/maps/documentation/aerial-view/reference/rest/v1/videos/lookupVideo
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://developers.google.com/maps/documentation/aerial-view/reference/rest
source_metadata:
  url: https://developers.google.com/maps/documentation/aerial-view/reference/rest/v1/videos/lookupVideo
  title: "Method: videos.lookupVideo \_|\_ Google Maps Aerial View API \_|\_ Google\
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
Method: videos.lookupVideo
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
Fetches a video using its address or videoId, returning playback URIs for active videos or a processing state for pending ones.
The response includes a set of URIs for different media types if the video is active, along with its current state and metadata.
A 404 error is returned if the video does not exist, and receiving a video is a billable event.
The request utilizes a GET method with the endpoint https://aerialview.googleapis.com/v1/videos:lookupVideo and requires either a videoId or address as a query parameter.
The response body provides the video's URIs (if active), state, and metadata.
HTTP request
Query parameters
Request body
Response body
JSON representation
Uris
JSON representation
Fetches a video given its address or videoId. The response will either be a video with a set of playback URIs for ACTIVE videos, a PROCESSING state for pending videos, or a 404 error if the video does not exist. Receiving a video is a billable event, so callers of this method should be ready to use the returned URIs at the time of request.
HTTP request
GET https://aerialview.googleapis.com/v1/videos:lookupVideo
The URL uses gRPC Transcoding syntax.
Query parameters
Parameters
Union parameter key . Required. A key used to look-up a video. key can be only one of the following:
videoId
string
An ID returned from videos.renderVideo .
address
string
A US postal address.
Request body
The request body must be empty.
Response body
An object that encapsulates all of the data about a video.
If successful, the response body contains data with the following structure:
JSON representation
{
"uris" : {
string : {
object ( Uris )
} ,
...
} ,
"state" : enum ( State ) ,
"metadata" : {
object ( VideoMetadata )
}
}
Fields
uris
map (key: string, value: object ( Uris ))
A mapping of media types to their URIs. This field is only included for ACTIVE videos. The key is an enum value from MediaFormat .
An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" } .
state
enum ( State )
Current state of the render request.
metadata
object ( VideoMetadata )
Contains the video's metadata, only set if the state is ACTIVE .
Uris
Contains all the uris for a given video format.
JSON representation
{
"landscapeUri" : string ,
"portraitUri" : string
}
Fields
landscapeUri
string
A signed short-lived URI for the media in a landscape orientation.
portraitUri
string
A signed short-lived URI for the media in a portrait orientation.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-08-27 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-08-27 UTC."],[],["The core action is fetching a video using a `GET` request to `https://aerialview.googleapis.com/v1/videos:lookupVideo`. The request requires a `key` parameter, either a `videoId` or an `address`. The request body must be empty. A successful response returns a video object with `uris`, `state`, and `metadata`. `uris` map media types to URIs, `state` indicates the video's status, and `metadata` contains video details. The video can also be in `PROCESSING` or result in a 404 error.\n"]]
