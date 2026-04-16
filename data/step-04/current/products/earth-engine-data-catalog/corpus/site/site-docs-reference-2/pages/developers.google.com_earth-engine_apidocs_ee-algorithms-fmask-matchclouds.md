---
title: "ee.Algorithms.FMask.matchClouds \_|\_ Google Earth Engine \_|\_ Google for\
  \ Developers"
url: https://developers.google.com/earth-engine/apidocs/ee-algorithms-fmask-matchclouds
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://developers.google.com/earth-engine/apidocs/ee-data-computefeatures
source_metadata:
  url: https://developers.google.com/earth-engine/apidocs/ee-algorithms-fmask-matchclouds
  title: "ee.Algorithms.FMask.matchClouds \_|\_ Google Earth Engine \_|\_ Google for\
    \ Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Earth Engine is introducing noncommercial quota tiers to safeguard shared compute resources and ensure reliable performance for everyone. All noncommercial projects will need to select a quota tier by April 27, 2026 or will use the Community Tier by default. Tier quotas will take effect for all projects (regardless of tier selection date) on April 27, 2026 . Learn more.
Home
Products
Google Earth Engine
Reference
Send feedback
ee.Algorithms.FMask.matchClouds
Stay organized with collections
Save and categorize content based on your preferences.
Runs the FMask cloud and shadow matching. Outputs a single band ('csm'), containing the computed cloud and shadow masks.
Usage Returns ee.Algorithms.FMask.matchClouds(input, cloud, shadow, btemp, sceneLow, sceneHigh, neighborhood ) Image Argument Type Details input Image The scene for which to compute cloud and shadow masks. cloud Image Potential cloud mask image. Expected to contain 1s for cloudy pixels and masked pixels everywhere else. shadow Image Potential shadow mask image. Expected to contain 1s for shadow pixels and masked pixels everywhere else. btemp Image Brightness temperature image, in Celsius. sceneLow Float The 0.175 percentile brightness temperature of the scene. sceneHigh Float The 0.825 percentile brightness temperature of the scene. neighborhood Integer, default: 50 The neighborhood to pad around each tile.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2024-07-13 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2024-07-13 UTC."],[],[]]
