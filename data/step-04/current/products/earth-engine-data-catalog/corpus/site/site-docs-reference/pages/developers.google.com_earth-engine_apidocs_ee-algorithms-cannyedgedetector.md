---
title: "ee.Algorithms.CannyEdgeDetector \_|\_ Google Earth Engine \_|\_ Google for\
  \ Developers"
url: https://developers.google.com/earth-engine/apidocs/ee-algorithms-cannyedgedetector
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://developers.google.com/earth-engine/apidocs
source_metadata:
  url: https://developers.google.com/earth-engine/apidocs/ee-algorithms-cannyedgedetector
  title: "ee.Algorithms.CannyEdgeDetector \_|\_ Google Earth Engine \_|\_ Google for\
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
ee.Algorithms.CannyEdgeDetector
Stay organized with collections
Save and categorize content based on your preferences.
Applies the Canny edge detection algorithm to an image. The output is an image whose bands have the same names as the input bands, and in which non-zero values indicate edges, and the magnitude of the value is the gradient magnitude.
Usage Returns ee.Algorithms.CannyEdgeDetector(image, threshold, sigma ) Image Argument Type Details image Image The image on which to apply edge detection. threshold Float Threshold value. The pixel is only considered for edge detection if the gradient magnitude is higher than this threshold. sigma Float, default: 1 Sigma value for a gaussian filter applied before edge detection. 0 means apply no filtering.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2023-10-06 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2023-10-06 UTC."],[],[]]
