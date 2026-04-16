---
title: "ee.Algorithms.TemporalSegmentation.Ccdc \_|\_ Google Earth Engine \_|\_ Google\
  \ for Developers"
url: https://developers.google.com/earth-engine/apidocs/ee-algorithms-temporalsegmentation-ccdc
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://developers.google.com/earth-engine/apidocs/ee-data-computefeatures
source_metadata:
  url: https://developers.google.com/earth-engine/apidocs/ee-algorithms-temporalsegmentation-ccdc
  title: "ee.Algorithms.TemporalSegmentation.Ccdc \_|\_ Google Earth Engine \_|\_\
    \ Google for Developers"
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
ee.Algorithms.TemporalSegmentation.Ccdc
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
The CCDC algorithm detects temporal breakpoints in image collections using harmonic functions.
Fit coefficients are produced for all bands, but breakpoint detection can be band-specific.
The algorithm is based on the Continuous Change Detection and Classification method by Zhu and Woodcock (2014).
Implements the Continuous Change Detection and Classification temporal breakpoint algorithm. This algorithm finds temporal breakpoints in an image collection by iteratively fitting harmonic functions to the data. Fit coefficients are produced for all input bands, but the bands used for breakpoint detection can be specified with the 'breakpointBands' argument.
For more details, see Zhu, Z. and Woodcock, C.E., 2014. Continuous change detection and classification of land cover using all available Landsat data. Remote sensing of Environment, 144, pp.152-171.
Usage Returns ee.Algorithms.TemporalSegmentation.Ccdc(collection, breakpointBands , tmaskBands , minObservations , chiSquareProbability , minNumOfYearsScaler , dateFormat , lambda , maxIterations ) Image Argument Type Details collection ImageCollection Collection of images on which to run CCDC. breakpointBands List, default: null The name or index of the bands to use for change detection. If unspecified, all bands are used. tmaskBands List, default: null The name or index of the bands to use for iterative TMask cloud detection. These are typically the green band and the SWIR1 band. If unspecified, TMask is not used. If specified, 'tmaskBands' must be included in 'breakpointBands'. minObservations Integer, default: 6 The number of observations required to flag a change. chiSquareProbability Float, default: 0.99 The chi-square probability threshold for change detection in the range of [0, 1]. minNumOfYearsScaler Float, default: 1.33 Factors of minimum number of years to apply new fitting. dateFormat Integer, default: 0 The time representation to use during fitting: 0 = jDays, 1 = fractional years, 2 = unix time in milliseconds. The start, end and break times for each temporal segment will be encoded this way. lambda Float, default: 20 Lambda for LASSO regression fitting. If set to 0, regular OLS is used instead of LASSO. maxIterations Integer, default: 25000 Maximum number of runs for LASSO regression convergence. If set to 0, regular OLS is used instead of LASSO.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2024-07-13 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2024-07-13 UTC."],[],[]]
