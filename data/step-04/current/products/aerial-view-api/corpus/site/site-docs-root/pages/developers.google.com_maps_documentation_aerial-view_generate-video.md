---
title: "Generate a new video \_|\_ Google Maps Aerial View API \_|\_ Google for Developers"
url: https://developers.google.com/maps/documentation/aerial-view/generate-video
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://developers.google.com/maps/documentation/aerial-view
source_metadata:
  url: https://developers.google.com/maps/documentation/aerial-view/generate-video
  title: "Generate a new video \_|\_ Google Maps Aerial View API \_|\_ Google for\
    \ Developers"
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
Generate a new video
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
The renderVideo method generates aerial view videos for US postal addresses, returning metadata if the video already exists.
To generate a new video, make an HTTPS POST request to the renderVideo endpoint with your API key and the US postal address.
The rendering process can take up to a few hours, and the response provides a videoId for retrieving the video using lookupVideo .
When the video is ready, renderVideo or lookupVideo will return a state of ACTIVE , indicating it's available for retrieval.
An invalid address or one outside the US will result in an error response.
The
renderVideo
method requests the generation of an aerial view video for the specified US
postal address. If the video already exists for the specified address, then this
method returns metadata about the video.
Note: This usage of renderVideo assumes that Google hasn't already generated
the aerial view video that you need. That is, you need to generate a new aerial
view video.
How to use the API
Generate a new aerial video by making an HTTPS POST request to the
renderVideo
endpoint, passing your API Key and a US postal address, as shown
in the following example. The rendering process can take anywhere from an hour
to a few hours.
Note: There is no charge for using this endpoint.
curl - X POST - d ' {
"address" : " POSTAL_ADDRESS "
} ' \
- H 'Co ntent - Type : applica t io n /jso n ' \
"https://aerialview.googleapis.com/v1/videos:renderVideo?key= YOUR_API_KEY "
Example request
The following code example requests the generation of an aerial view video for
500 W 2nd St, Austin, TX, 78701.
curl - X POST - d ' {
"address" : "500 W 2nd St, Austin, TX 78701"
} ' \
- H 'Co ntent - Type : applica t io n /jso n ' \
"https://aerialview.googleapis.com/v1/videos:renderVideo?key= YOUR_API_KEY "
Example response
The following JSON code samples show the possible responses to the example video
request.
Invalid address response
The address is either incorrect, or it isn't within the United States.
{
"error" : {
"code" : 400 ,
"message" : "Address not supported." ,
"status" : "INVALID_ARGUMENT"
}
}
Processing response
The Aerial View API is now rendering your video. The response contains the
videoId , which you can use to retrieve the video.
{
"state" : "PROCESSING" ,
"metadata" : {
"videoId" : "x89iJAJi1wzs7DIAFQF7Va"
}
}
The rendering process can take anywhere from an hour to a few hours. If the
video is still processing, you can use lookupVideo to poll the video status
until it returns a state of ACTIVE .
To poll, make a request to lookupVideo , passing the videoId . Rendering can
take several hours, so use exponential
backoff to space out your calls.
Active response
When renderVideo returns a state value of ACTIVE , it means the video has
finished rendering, and you can retrieve it by calling lookupVideo with the
videoId .
{
"state" : "ACTIVE" ,
"metadata" : {
"videoId" : "x89iJAJi1wzs7DIAFQF7Va"
}
}
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
