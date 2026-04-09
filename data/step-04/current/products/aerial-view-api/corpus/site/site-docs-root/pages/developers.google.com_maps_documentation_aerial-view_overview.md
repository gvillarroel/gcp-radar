---
title: "Aerial View API overview \_|\_ Google Maps Aerial View API \_|\_ Google for\
  \ Developers"
url: https://developers.google.com/maps/documentation/aerial-view/overview
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://developers.google.com/maps/documentation/aerial-view
source_metadata:
  url: https://developers.google.com/maps/documentation/aerial-view/overview
  title: "Aerial View API overview \_|\_ Google Maps Aerial View API \_|\_ Google\
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
Aerial View API overview
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
The Aerial View API lets you create and display photorealistic 3D aerial videos of US addresses, simulating drone footage.
Google provides a pre-rendered video dataset for many locations, or you can request new videos to be generated.
Use the API to enhance user experiences with interactive 3D aerial views for various applications, such as real estate, travel planning, and business listings.
Access and display videos through the API, but note that downloading or storing them locally is not permitted.
The API is limited to US addresses where 3D video rendering is supported by Google.
The Aerial View API is a service that lets you create and display
photorealistic 3D aerial videos of any physical address within the United
States. The videos simulate footage taken by a drone circling overhead.
Google has already created a dataset of pre-rendered aerial view videos for you
to use. They cover large buildings and landmarks throughout the United States.
And we're adding more aerial view videos all the time. You can simply use these
existing videos or, if a video does not yet exist for an address, you can
request that Google generate a new one for you.
Note: Google automatically pre-renders videos for addresses periodically, so
some addresses will have no wait time.
Why use Aerial View API
Here are some reasons why you might want to use Aerial View API.
You want to explore 3D data, but you're not comfortable using 3D Tiles, or with working with a renderer
You like the context of satellite imagery, and the ability to recognize a building facade from Street View
You've considered hiring a drone operator to film your property
You want to use cutting-edge, innovative technology
You're comfortable embedding video in your web site
What you can do with Aerial View API
Here's a list of some of the things you can do with Aerial View API.
Provide birds-eye awareness of a building by highlighting nearby roads, parks, or bodies of water
Give a prospective renter or home buyer a sense of what a property is like
Set the scene for a short-form video showing the viewer where you are
Highlight attractions or points-of-interest when helping users plan a vacation
Help delivery drivers or shoppers find your place of business
How the Aerial View API works
There are two approaches that you can take to use the Aerial View API.
Tip: Both of these approaches should begin with you checking whether the video
exists using the
lookupVideoMetadata
endpoint.
Approach
Rationale
Lookup a generated video
All of the aerial imagery that you need has already been rendered by Google (Google's pre-rendered dataset).
Generate a new video
You need aerial view imagery that hasn't already been pre-rendered by Google.
Coverage areas
Aerial View API only supports postal addresses in the United States where
Google is able to render 3D videos.
How to use the Aerial View API
1
Review the Google Maps Platform Terms of Service
Note that you cannot download, store, or cache the aerial view videos.
For more information, see the
Google Maps Platform Terms of Service .
2
Get set up
Start with Set up your
Google Cloud project and complete the instructions that follow.
3
Retrieve an aerial view video's metadata
Send a US postal address or videoId to the
lookupVideoMetadata() endpoint to return an aerial view
video's metadata.
See Retrieve a video's metadata.
4
Fetch an existing aerial view video
Send a US postal address or videoId to the
lookupVideo() endpoint to return a pre-rendered
aerial view video.
See Fetch a generated video.
5
Generate a new aerial view video
Send a US postal address to the renderVideo() endpoint to
request the generation of a new aerial view video for the specified address.
See Generate a new video.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
