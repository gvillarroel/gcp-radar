---
title: "ee.Algorithms.TemporalSegmentation.LandTrendr \_|\_ Google Earth Engine \_\
  |\_ Google for Developers"
url: https://developers.google.com/earth-engine/apidocs/ee-algorithms-temporalsegmentation-landtrendr
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://developers.google.com/earth-engine/apidocs/ee-data-computefeatures
source_metadata:
  url: https://developers.google.com/earth-engine/apidocs/ee-algorithms-temporalsegmentation-landtrendr
  title: "ee.Algorithms.TemporalSegmentation.LandTrendr \_|\_ Google Earth Engine\
    \ \_|\_ Google for Developers"
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
ee.Algorithms.TemporalSegmentation.LandTrendr
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
LandTrendr detects disturbance and recovery trends in a time-series of Landsat images by spectrally segmenting them over time.
Breakpoints are found using the first band of each image and then used to fit all subsequent bands.
The output includes a 2-D matrix of breakpoints with original and fitted values, along with an indicator of whether a point was used as a segment vertex.
The fitting process assumes that increasing values signify disturbance and decreasing values signify recovery.
Landsat-based detection of Trends in Disturbance and Recovery: temporally segments a time-series of images by extracting the spectral trajectories of change over time. The first band of each image is used to find breakpoints, and those breakpoints are used to perform fitting on all subsequent bands. The breakpoints are returned as a 2-D matrix of 4 rows and as many columns as images. The first two rows are the original X and Y values. The third row contains the Y values fitted to the estimated segments, and the 4th row contains a 1 if the corresponding point was used as a segment vertex or 0 if not. Any additional fitted bands are appended as rows in the output. Breakpoint fitting assumes that increasing values represent disturbance and decreasing values represent recovery.
See: Kennedy, R.E., Yang, Z. and Cohen, W.B., 2010. Detecting trends in forest disturbance and recovery using yearly Landsat time series: 1. LandTrendr - Temporal segmentation algorithms. Remote Sensing of Environment, 114(12), pp.2897-2910.
Usage Returns ee.Algorithms.TemporalSegmentation.LandTrendr(timeSeries, maxSegments, spikeThreshold , vertexCountOvershoot , preventOneYearRecovery , recoveryThreshold , pvalThreshold , bestModelProportion , minObservationsNeeded ) Image Argument Type Details timeSeries ImageCollection Yearly time-series from which to extract breakpoints. The first band is usedto find breakpoints, and all subsequent bands are fitted using those breakpoints. maxSegments Integer Maximum number of segments to be fitted on the time series. spikeThreshold Float, default: 0.9 Threshold for dampening the spikes (1.0 means no dampening). vertexCountOvershoot Integer, default: 3 The initial model can overshoot the maxSegments + 1 vertices by this amount. Later, it will be pruned down to maxSegments + 1. preventOneYearRecovery Boolean, default: false Prevent segments that represent one year recoveries. recoveryThreshold Float, default: 0.25 If a segment has a recovery rate faster than 1/recoveryThreshold (in years), then the segment is disallowed. pvalThreshold Float, default: 0.1 If the p-value of the fitted model exceeds this threshold, then the current model is discarded and another one is fitted using the Levenberg-Marquardt optimizer. bestModelProportion Float, default: 0.75 Allows models with more vertices to be chosen if their p-value is no more than (2 - bestModelProportion) times the p-value of the best model. minObservationsNeeded Integer, default: 6 Min observations needed to perform output fitting.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2023-10-06 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2023-10-06 UTC."],[],["The LandTrendr algorithm segments a time-series of images, using the first band to find breakpoints that identify spectral changes. These breakpoints are then applied to fit all other bands. Breakpoints are returned as a matrix, with the original data, fitted values, and segment vertex indicators. Increasing values suggest disturbance, while decreasing values suggest recovery. Users define parameters like maximum segments, spike dampening, and recovery rates to guide the fitting process. The algorithm outputs an image containing the results.\n"]]
