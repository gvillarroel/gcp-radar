---
title: "ee.Algorithms.TemporalSegmentation.Ewmacd \_|\_ Google Earth Engine \_|\_\
  \ Google for Developers"
url: https://developers.google.com/earth-engine/apidocs/ee-algorithms-temporalsegmentation-ewmacd
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://developers.google.com/earth-engine/apidocs/ee-data-computefeatures
source_metadata:
  url: https://developers.google.com/earth-engine/apidocs/ee-algorithms-temporalsegmentation-ewmacd
  title: "ee.Algorithms.TemporalSegmentation.Ewmacd \_|\_ Google Earth Engine \_|\_\
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
ee.Algorithms.TemporalSegmentation.Ewmacd
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
Exponentially Weighted Moving Average Change Detection computes a harmonic model for training data, subtracts it, and analyzes residuals with Shewhart X-bar charts and EWMA to indicate disturbed pixels when exceeding control limits.
The output is a 5-band image containing EWMA score, harmonic coefficients, RMSE, r-squared, and residuals.
Negative EWMA values indicate disturbance, and positive values indicate recovery.
Exponentially Weighted Moving Average Change Detection. This algorithm computes a harmonic model for the 'training' portion of the input data and subtracts that from the original results. The residuals are then subjected to Shewhart X-bar charts and an exponentially weighted moving average. Disturbed pixels are indicated when the charts signal a deviation from the given control limits.
The output is a 5 band image containing the bands:
ewma: a 1D array of the EWMA score for each input image. Negative values represent disturbance and positive values represent recovery.
harmonicCoefficients: A 1-D array of the computed harmonic coefficient pairs. The coefficients are ordered as [constant, sin0, cos0, sin1, cos1...]
rmse: the RMSE from the harmonic regression.
rSquared: r-squared value from the harmonic regression.
residuals: 1D array of residuals from the harmonic regression.
See: Brooks, E.B., Wynne, R.H., Thomas, V.A., Blinn, C.E. and Coulston, J.W., 2014. On-the-fly massively multitemporal change detection using statistical quality control charts and Landsat data. IEEE Transactions on Geoscience and Remote Sensing, 52(6), pp.3316-3332.
Usage Returns ee.Algorithms.TemporalSegmentation.Ewmacd(timeSeries, vegetationThreshold, trainingStartYear, trainingEndYear, harmonicCount , xBarLimit1 , xBarLimit2 , lambda , lambdasigs , rounding , persistence ) Image Argument Type Details timeSeries ImageCollection Collection from which to extract EWMA. This collection is expected to contain 1 image for each year and be sorted temporally. vegetationThreshold Float Threshold for vegetation. Values below this are considered non-vegetation. trainingStartYear Integer Start year of training period, inclusive. trainingEndYear Integer End year of training period, exclusive. harmonicCount Integer, default: 2 Number of harmonic function pairs (sine and cosine) used. xBarLimit1 Float, default: 1.5 Threshold for initial training xBar limit. xBarLimit2 Integer, default: 20 Threshold for running xBar limit. lambda Float, default: 0.3 The 'lambda' tuning parameter weighting new years vs the running average. lambdasigs Float, default: 3 EWMA control bounds, in units of standard deviations. rounding Boolean, default: true Should rounding be performed for EWMA. persistence Integer, default: 3 Minimum number of observations needed to consider a change.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2024-07-13 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2024-07-13 UTC."],[],[]]
