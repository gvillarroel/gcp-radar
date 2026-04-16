---
title: "ee.Algorithms.HoughTransform \_|\_ Google Earth Engine \_|\_ Google for Developers"
url: https://developers.google.com/earth-engine/apidocs/ee-algorithms-houghtransform
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://developers.google.com/earth-engine/apidocs
source_metadata:
  url: https://developers.google.com/earth-engine/apidocs/ee-algorithms-houghtransform
  title: "ee.Algorithms.HoughTransform \_|\_ Google Earth Engine \_|\_ Google for\
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
ee.Algorithms.HoughTransform
Stay organized with collections
Save and categorize content based on your preferences.
Applies the Hough transform to an image. For every input band, outputs a band where lines are detected by thresholding the Hough transform with a value of lineThreshold. The output band is named [input]_lines, where [input] is the name of the original band. The defaults provided for the parameters are intended as a starting point for use with UINT8 images.
Usage Returns ee.Algorithms.HoughTransform(image, gridSize , inputThreshold , lineThreshold , smooth ) Image Argument Type Details image Image The image to which to apply the transform. gridSize Integer, default: 256 The size of the grid over which to perform the computation. inputThreshold Float, default: 64 Value threshold for input image. Pixels equal to or above this value are considered active. lineThreshold Float, default: 72 Threshold for line detection. Values equal to or above this threshold on the Hough transform are considered to be detected lines. smooth Boolean, default: true Whether to smooth the Hough transform before line detection.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2023-10-06 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2023-10-06 UTC."],[],["The Hough transform detects lines in an image. It takes an image as input and outputs a new image with detected lines for each band, named `[input]_lines`. Key actions include thresholding the input image based on `inputThreshold` to identify active pixels and then thresholding the Hough transform output with `lineThreshold` to detect lines. `gridSize` controls the computation grid, and `smooth` enables smoothing before line detection. Defaults are provided for UINT8 images.\n"]]
