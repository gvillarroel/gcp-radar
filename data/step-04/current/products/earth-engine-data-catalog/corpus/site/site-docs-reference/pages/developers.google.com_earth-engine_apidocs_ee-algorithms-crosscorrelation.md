---
title: "ee.Algorithms.CrossCorrelation \_|\_ Google Earth Engine \_|\_ Google for\
  \ Developers"
url: https://developers.google.com/earth-engine/apidocs/ee-algorithms-crosscorrelation
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://developers.google.com/earth-engine/apidocs
source_metadata:
  url: https://developers.google.com/earth-engine/apidocs/ee-algorithms-crosscorrelation
  title: "ee.Algorithms.CrossCorrelation \_|\_ Google Earth Engine \_|\_ Google for\
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
ee.Algorithms.CrossCorrelation
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
Assesses image registration quality between two input images with the same number of bands.
Outputs a four-band image containing deltaX, deltaY, Euclidean distance, and the correlation coefficient for each pixel.
Takes input parameters including the two images, maximum allowed pixel shift (maxGap), the comparison window size (windowSize), and an optional maximum fraction of masked pixels allowed (maxMaskedFrac).
Gives information on the quality of image registration between two (theoretically) co-registered images. The input is two images with the same number of bands. This function outputs an image composed of four bands of information. The first three are distances: the deltaX, deltaY, and the Euclidean distance for each pixel in imageA to the pixel which has the highest corresponding correlation coefficient in imageB. The fourth band is the value of the correlation coefficient for that pixel [-1 : +1].
Usage Returns ee.Algorithms.CrossCorrelation(imageA, imageB, maxGap, windowSize, maxMaskedFrac ) Image Argument Type Details imageA Image First image, with N bands. imageB Image Second image, must have the same number of bands as imageA. maxGap Integer The greatest distance a pixel may shift in either X or Y. windowSize Integer Size of the window to be compared. maxMaskedFrac Float, default: 0 The maximum fraction of pixels within the correlation window that are allowed to be masked. This test is applied at each offset location within the search region. For each offset, the overlapping image patches are compared and a correlation score computed. A pixel within these overlapping patches is considered masked if either of the patches is masked there. If the test fails at any single location in the search region, the output pixel for which the correlation is being computed is considered invalid, and will be masked.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2023-10-06 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2023-10-06 UTC."],[],[]]
