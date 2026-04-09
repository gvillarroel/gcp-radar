---
title: "Migrate from the Preview release \_|\_ Google Maps Aerial View API \_|\_ Google\
  \ for Developers"
url: https://developers.google.com/maps/documentation/aerial-view/migrate
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://developers.google.com/maps/documentation/aerial-view
source_metadata:
  url: https://developers.google.com/maps/documentation/aerial-view/migrate
  title: "Migrate from the Preview release \_|\_ Google Maps Aerial View API \_|\_\
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
Send feedback
Migrate from the Preview release
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
Aerial View API's GA release updated the endpoint URL to /v1 from /v1beta .
The getVideo endpoint has been replaced with lookupVideo in the GA release.
Both lookupVideo and renderVideo endpoints now reside under the /v1 path.
The GA release of Aerial View API changed the endpoint URL for API calls to use
/v1 instead of /v1beta , and renamed the getVideo endpoint.
The previous endpoints were in the form:
getVideo :
https://aerialview.googleapis.com/ v1beta/videos
renderVideo :
https://aerialview.googleapis.com/ v1beta /videos:renderVideo
The new endpoints are in the form:
lookupVideo :
https://aerialview.googleapis.com/ v1/videos:lookupVideo
renderVideo :
https://aerialview.googleapis.com/ v1 /videos:renderVideo
For more information, see the v1 API reference .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
