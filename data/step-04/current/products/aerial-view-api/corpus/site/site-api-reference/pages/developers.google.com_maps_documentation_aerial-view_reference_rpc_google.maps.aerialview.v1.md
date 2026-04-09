---
title: "Package google.maps.aerialview.v1 \_|\_ Google Maps Aerial View API \_|\_\
  \ Google for Developers"
url: https://developers.google.com/maps/documentation/aerial-view/reference/rpc/google.maps.aerialview.v1
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://developers.google.com/maps/documentation/aerial-view/reference/rest
source_metadata:
  url: https://developers.google.com/maps/documentation/aerial-view/reference/rpc/google.maps.aerialview.v1
  title: "Package google.maps.aerialview.v1 \_|\_ Google Maps Aerial View API \_|\_\
    \ Google for Developers"
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
Package google.maps.aerialview.v1
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
The Aerial View API provides methods to render, lookup, and retrieve metadata for aerial videos of US postal addresses.
RenderVideo initiates video rendering, while LookupVideo fetches playable videos and LookupVideoMetadata retrieves video metadata without playback URIs.
Videos can be in PROCESSING, ACTIVE, or FAILED states, and metadata includes video ID, capture date, duration, and current state.
The API supports various media formats like MP4 (high, medium, low quality), DASH, and HLS for adaptive bitrate streaming.
Accessing the Aerial View API requires the https://www.googleapis.com/auth/cloud-platform OAuth scope.
Index
AerialView (interface)
LookupVideoMetadataRequest (message)
LookupVideoRequest (message)
MediaFormat (enum)
RenderVideoRequest (message)
RenderVideoResponse (message)
Uris (message)
Video (message)
Video.State (enum)
VideoMetadata (message)
AerialView
Service definition for the Aerial View API.
LookupVideo
rpc LookupVideo( LookupVideoRequest ) returns ( Video )
Fetches a video given its address or videoId. The response will either be a video with a set of playback URIs for ACTIVE videos, a PROCESSING state for pending videos, or a 404 error if the video does not exist. Receiving a video is a billable event, so callers of this method should be ready to use the returned URIs at the time of request.
Authorization scopes
Requires the following OAuth scope:
https://www.googleapis.com/auth/cloud-platform
LookupVideoMetadata
rpc LookupVideoMetadata( LookupVideoMetadataRequest ) returns ( VideoMetadata )
Fetches metadata for a video given its address or videoId. This method is a free-to-call alternative to LookupVideo , and returns all available video data excluding playback URIs.
Authorization scopes
Requires the following OAuth scope:
https://www.googleapis.com/auth/cloud-platform
RenderVideo
rpc RenderVideo( RenderVideoRequest ) returns ( RenderVideoResponse )
Adds an address to the renderer's queue if a video hasn't already been rendered. Otherwise, returns metadata about the video.
Authorization scopes
Requires the following OAuth scope:
https://www.googleapis.com/auth/cloud-platform
LookupVideoMetadataRequest
Request message for AerialView.LookupVideoMetadata .
Fields
Union field key . Required. key can be only one of the following:
video_id
string
An ID returned from RenderVideo .
address
string
A US postal address.
LookupVideoRequest
Request message for AerialView.LookupVideo .
Fields
Union field key . Required. A key used to look-up a video. key can be only one of the following:
video_id
string
An ID returned from RenderVideo .
address
string
A US postal address.
MediaFormat
Enumerates the various media formats supported by the API.
Enums
MEDIA_FORMAT_UNSPECIFIED
Default value.
IMAGE
A thumbnail image.
MP4_HIGH
High quality MP4 video.
MP4_MEDIUM
Medium quality MP4 video.
MP4_LOW
Low quality MP4 video.
DASH
MPEG-DASH for adaptive bitrate streaming on most devices.
HLS
HLS for adaptive bitrate streaming on Apple devices.
RenderVideoRequest
Request message for AerialView.RenderVideo .
Fields
address
string
Required. A US postal address for the location to be rendered in the video.
RenderVideoResponse
Response message for AerialView.RenderVideo .
Fields
state
State
Current state of the render request.
metadata
VideoMetadata
Contains the video's metadata, only set if the state is ACTIVE .
Uris
Contains all the uris for a given video format.
Fields
landscape_uri
string
A signed short-lived URI for the media in a landscape orientation.
portrait_uri
string
A signed short-lived URI for the media in a portrait orientation.
Video
An object that encapsulates all of the data about a video.
Fields
uris
map<string, Uris >
A mapping of media types to their URIs. This field is only included for ACTIVE videos. The key is an enum value from MediaFormat .
state
State
Current state of the render request.
metadata
VideoMetadata
Contains the video's metadata, only set if the state is ACTIVE .
State
The different states a video can be in.
Enums
STATE_UNSPECIFIED
Default value. This value is unused.
PROCESSING
The video is currently processing.
ACTIVE
The video has finished rendering, and can be viewed through LookupVideo .
FAILED
The video has failed to render.
VideoMetadata
Contains metadata about a video, such as its videoId and duration.
Fields
video_id
string
Output only. An ID for the video, and the recommended way to retrieve a video.
capture_date
Date
Output only. The date at which the imagery used in the video was captured. This will be at a month-level granularity.
duration
Duration
Output only. The length of the video.
state
State
Output only. Current state of the render request.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-08-27 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-08-27 UTC."],[],[]]
