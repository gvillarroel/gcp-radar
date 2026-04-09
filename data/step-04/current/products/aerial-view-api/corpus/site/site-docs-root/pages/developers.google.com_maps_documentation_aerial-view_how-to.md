---
title: "How to use the Aerial View API \_|\_ Google Maps Aerial View API \_|\_ Google\
  \ for Developers"
url: https://developers.google.com/maps/documentation/aerial-view/how-to
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://developers.google.com/maps/documentation/aerial-view
source_metadata:
  url: https://developers.google.com/maps/documentation/aerial-view/how-to
  title: "How to use the Aerial View API \_|\_ Google Maps Aerial View API \_|\_ Google\
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
How to use the Aerial View API
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
The Aerial View API offers two workflows: one for retrieving existing videos and another for generating new ones.
To determine if a video exists for a location, utilize the lookupVideoMetadata function.
If a video doesn't exist, initiate video generation using the renderVideo function and monitor its status with lookupVideoMetadata until it becomes active.
Once the video is active, retrieve its URLs via the lookupVideo function for access and use.
Aerial View API video IDs can be stored for future use, unlike other Google Maps Platform content.
The Aerial View API supports two general workflows. Your approach depends on
whether the video you're requesting exists or not. If you're unsure whether the
video exists, you should use
lookupVideoMetadata
to determine the video's state.
Workflow to generate or retrieve videos
Use the following workflow to generate or retrieve an aerial view video:
Check if Google has already generated a video for the location using
lookupVideoMetadata .
If no video exists ( lookupVideoMetadata returned a 404), call
renderVideo to generate
a new video.
Call lookupVideoMetadata using the videoId or address to poll the
endpoint until the video's state is ACTIVE . Rendering can take several
hours, so use exponential
backoff to space out your
calls.
If the video is active ( lookupVideoMetadata returned a state of ACTIVE ),
call lookupVideo to fetch
the video's URIs.
Note: After Google generates the video for a specific address, that video is
available to anyone. That is, a video is not associated with a specific user
or account.
This workflow is represented in the diagram below:
Save video IDs for later use
Subject to the Service Specific Terms for Aerial View API, Aerial View API
video IDs are exempt from the caching restrictions stated in Section
3.2.3(b)(No
Caching) of the
Google Maps Platform Terms of Service. You can therefore store video ID values
for later use.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
