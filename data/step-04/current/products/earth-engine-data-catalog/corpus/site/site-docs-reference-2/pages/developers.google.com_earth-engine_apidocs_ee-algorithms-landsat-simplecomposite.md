---
title: "ee.Algorithms.Landsat.simpleComposite \_|\_ Google Earth Engine \_|\_ Google\
  \ for Developers"
url: https://developers.google.com/earth-engine/apidocs/ee-algorithms-landsat-simplecomposite
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://developers.google.com/earth-engine/apidocs/ee-data-computefeatures
source_metadata:
  url: https://developers.google.com/earth-engine/apidocs/ee-algorithms-landsat-simplecomposite
  title: "ee.Algorithms.Landsat.simpleComposite \_|\_ Google Earth Engine \_|\_ Google\
    \ for Developers"
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
ee.Algorithms.Landsat.simpleComposite
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
The algorithm computes a Landsat TOA composite by applying TOA calibration and a cloud score to each pixel.
It selects pixels based on the lowest cloud scores and computes per-band percentile values from the accepted pixels.
The algorithm limits the number of scenes used in regions with many available scenes by selecting the least-cloudy ones.
The simpleComposite function takes arguments such as collection , percentile , cloudScoreRange , maxDepth , and asFloat to customize the composite creation.
Computes a Landsat TOA composite from a collection of raw Landsat scenes. It applies standard TOA calibration and then assigns a cloud score to each pixel using the SimpleLandsatCloudScore algorithm. It selects the lowest possible range of cloud scores at each point and then computes per-band percentile values from the accepted pixels. This algorithm also uses the LandsatPathRowLimit algorithm to select only the least-cloudy scenes in regions where more than maxDepth input scenes are available.
Usage Returns ee.Algorithms.Landsat.simpleComposite(collection, percentile , cloudScoreRange , maxDepth , asFloat ) Image Argument Type Details collection ImageCollection The raw Landsat ImageCollection to composite. percentile Integer, default: 50 The percentile value to use when compositing each band. cloudScoreRange Integer, default: 10 The size of the range of cloud scores to accept per pixel. maxDepth Integer, default: 40 An approximate limit on the maximum number of scenes used to compute each pixel. asFloat Boolean, default: false If true, output bands are in the same units as the Landsat.TOA algorithm; if false, TOA values are converted to uint8 by multiplying by 255 (reflective bands) or subtracting 100 (thermal bands) and rounding to the nearest integer.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2024-07-13 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2024-07-13 UTC."],[],["The algorithm creates a Landsat TOA composite from raw scenes. It calibrates TOA, assigns cloud scores per pixel using SimpleLandsatCloudScore, and selects the lowest cloud score range at each point. It then calculates per-band percentile values from these pixels. The LandsatPathRowLimit algorithm ensures only the least-cloudy scenes are selected when more than `maxDepth` scenes are present. Users specify the raw collection, percentile, cloud score range, scene depth, and whether to output as floats.\n"]]
