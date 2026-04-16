---
title: "ee.Algorithms.TemporalSegmentation.C2c \_|\_ Google Earth Engine \_|\_ Google\
  \ for Developers"
url: https://developers.google.com/earth-engine/apidocs/ee-algorithms-temporalsegmentation-c2c
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://developers.google.com/earth-engine/apidocs/ee-data-computefeatures
source_metadata:
  url: https://developers.google.com/earth-engine/apidocs/ee-algorithms-temporalsegmentation-c2c
  title: "ee.Algorithms.TemporalSegmentation.C2c \_|\_ Google Earth Engine \_|\_ Google\
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
ee.Algorithms.TemporalSegmentation.C2c
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
The Composite 2 Change (C2C) algorithm segments a time series using a piecewise linear fit to minimize the number of segments while staying within a maximum root mean squared error (RMSE).
For each band processed, the algorithm returns several output bands including change date, value, magnitude, duration, and rate, describing the characteristics of each fitted segment.
The algorithm is in preview and its implementation details are subject to change.
An implementation of the Composite 2 Change (C2C) algorithm. This algorithm segments a time series using a piecewise linear fit with the minimum of segments required to fit the data within the given maximum root mean squared error (RMSE). For every band given the algorithm will return the following bands:
changeDate:A 1D array of doubles representing pairs of start and end dates for each fitted segment. The date format is determined by the dateFormat argument.
value: A 1D array of doubles of the value of the band at the changeDate.
magnitude: A 1D array of doubles providing the absolute difference between the values before and after a change date. The first magnitude is always NaN.
duration: A 1D array of doubles of the duration of the segment preceding the change date. The first duration is always NaN.
rate: A 1D array of doubles of the rate of change of the data preceding the. change date. The first rate is always NaN.
postMagnitude: A 1D array of doubles of the absolute difference between the values after the change date and the value at the change date. The last postMagnitude is always NaN.
postDuration: The duration of the segment following the change date. The last postDuration is always NaN.
postRate: The rate of change of the data following the change date. The last postRate is always NaN.
indexRegrwoth: The difference between the value in change date and the value five data points after.
recoveryIndicator: The indexRegrowth/magnitude ratio.
regrowth60: Time difference between breakpoint and the data point where the series value is 60% of the pre-distrubance value.
regrowth60: Time difference between breakpoint and the data point where the series value is 80% of the pre-distrubance value.
regrowth60: Time difference between breakpoint and the data point where the series value is 100% of the pre-distrubance value.
See: Hermosilla et al. (2015) dx.doi.org/10.1016/j.rse.2014.11.005 for further details on the original algorithm.
Algorithm implementation can be found on GitHub: https://github.com/saveriofrancini/C2C-GEE
Acknowlegements: FORWARDS and NextGenCarbon.
Citation: Txomin Hermosilla, Michael A. Wulder, Joanne C. White, Nicholas C. Coops, Daniel Coelho, Giovanni Ciatto, Noel Gorelick, and Saverio Francini. In preparation. Image compositing, time-series change detection and temporal metrics: Implementation of the Composite2Change (C2C) algorithm on Google Earth Engine. This algorithm is in preview and is subject to change.
Usage Returns ee.Algorithms.TemporalSegmentation.C2c(collection, dateFormat , maxError , maxSegments , startYear , endYear , infill , spikesTolerance , includePostMetrics , includeRegrowth , useRelativeRegrowth , negativeMagnitudeOnly ) Image Argument Type Details collection ImageCollection Collection of images on which to run C2C. dateFormat Integer, default: 0 The time representation to use during fitting: 0 = jDays, 1 = fractional years, 2 = unix time in milliseconds. The start, end and break times for each temporal segment will be encoded this way. maxError Float, default: 75 maxSegments Integer, default: 6 startYear Integer, default: 1984 endYear Integer, default: 2019 infill Boolean, default: true spikesTolerance Float, default: 0.85 includePostMetrics Boolean, default: true includeRegrowth Boolean, default: false useRelativeRegrowth Boolean, default: false negativeMagnitudeOnly Boolean, default: false
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-01-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-01-08 UTC."],[],[]]
