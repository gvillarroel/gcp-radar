---
title: "Retrieve a video's metadata \_|\_ Google Maps Aerial View API \_|\_ Google\
  \ for Developers"
url: https://developers.google.com/maps/documentation/aerial-view/lookup-video-metadata
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://developers.google.com/maps/documentation/aerial-view
source_metadata:
  url: https://developers.google.com/maps/documentation/aerial-view/lookup-video-metadata
  title: "Retrieve a video's metadata \_|\_ Google Maps Aerial View API \_|\_ Google\
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
Send feedback
Retrieve a video's metadata
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
The lookupVideoMetadata method retrieves metadata for an aerial view video using a valid address or videoID.
This method helps determine video freshness, length, and confirms video existence.
The API returns video metadata if the video exists, or a 404 error if it doesn't.
You can use a URL-encoded US postal address or a videoId to call this endpoint.
If a video isn't found in a supported area, you can initiate a render request using the renderVideo method.
Given a valid address or videoID, the
lookupVideoMetadata
method returns metadata associated with a given video. The metadata in the
response body lets you determine the freshness of the imagery, length of the
video, and also provides a free workflow for confirming the existence of videos.
How to use the API
Call this endpoint by passing it a URL-encoded US postal
address or a
videoId .
curl - X GET "https://aerialview.googleapis.com/v1/videos:lookupVideoMetadata?key= YOUR_API_KEY &address= POSTAL_ADDRESS "
The API then returns one of the following two responses:
If the video exists, lookupVideoMetadata returns the video's metadata.
If the video doesn't exist, the API returns a 404 error code.
Example request
The following code sample requests an aerial view video for the Transamerica
Pyramid, located at 600 Montgomery St, San Francisco, CA 94111.
curl - X GET "https://aerialview.googleapis.com/v1/videos:lookupVideoMetadata?key= YOUR_API_KEY &address=600%20Montgomery%20St%2C%20San%20Francisco%2C%20CA%2094111"
Example response
The following JSON examples demonstrate all possible responses to the
lookupVideoMetadata request.
Video found
The video has already been rendered.
{
"videoId" : "Ul1naoFmqo69U1zUVrQRkc" ,
"captureDate" : {
"year" : 2022 ,
"month" : 4 ,
"day" : 1
},
"duration" : "40s" ,
"state" : "ACTIVE"
}
Video is rendering
The video is rendering.
{
"videoId" : "Ul1naoFmqo69U1zUVrQRkc" ,
"state" : "PROCESSING"
}
Video not found
The video isn't in Google's database. This could be because it either hasn't yet
been rendered, or because the location is in an area that isn't supported.
If the location is in a supported
area , you can use
renderVideo
to initiate a render request.
{
"error" : {
"code" : 404 ,
"message" : "Video not found." ,
"status" : "NOT_FOUND"
}
}
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],["The `lookupVideoMetadata` method retrieves metadata for a given video using a URL-encoded address or videoID. A GET request is sent to the API endpoint with an API key and address. The API returns either video metadata, including ID, capture date, duration, and state, or a 404 error if the video is not found. If the video is not found and in a supported area a `renderVideo` request can be initiated. Possible states for the video include \"ACTIVE\" or \"PROCESSING\".\n"]]
