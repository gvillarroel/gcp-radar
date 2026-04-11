---
title: "ee.Algorithms.Image.Segmentation.GMeans \_|\_ Google Earth Engine \_|\_ Google\
  \ for Developers"
url: https://developers.google.com/earth-engine/apidocs/ee-algorithms-image-segmentation-gmeans
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://developers.google.com/earth-engine/apidocs
source_metadata:
  url: https://developers.google.com/earth-engine/apidocs/ee-algorithms-image-segmentation-gmeans
  title: "ee.Algorithms.Image.Segmentation.GMeans \_|\_ Google Earth Engine \_|\_\
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
ee.Algorithms.Image.Segmentation.GMeans
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
The G-Means algorithm performs clustering on an input image by iteratively applying k-means and a normality test to automatically determine the number of clusters.
The output image includes a 'clusters' band indicating the cluster ID for each pixel.
The algorithm can operate on a fixed grid or overlapping tiles, with the default being non-overlapping tiles.
Clusters are independent across cells or tiles, meaning a cluster spanning a boundary may receive different labels on each side.
This algorithm is best suited for images with a narrow dynamic range (e.g., bytes or shorts).
Performs G-Means clustering on the input image. Iteratively applies k-means followed by a normality test to automatically determine the number of clusters to use. The output contains a 'clusters' band containing the integer ID of the cluster that each pixel belongs to. The algorithm can work either on a fixed grid of non-overlapping cells (gridSize, which can be smaller than a tile) or on tiles with overlap (neighborhoodSize). The default is to use tiles with no overlap. Clusters in one cell or tile are unrelated to clusters in another. Any cluster that spans a cell or tile boundary may receive two different labels in the two halves. Any input pixels with partial masks are fully masked in the output. This algorithm is only expected to perform well for images with a narrow dynamic range (i.e., bytes or shorts).
See: G. Hamerly and C. Elkan. 'Learning the k in k-means'. NIPS, 2003.
Usage Returns ee.Algorithms.Image.Segmentation.GMeans(image, numIterations , pValue , neighborhoodSize , gridSize , uniqueLabels ) Image Argument Type Details image Image The input image for clustering. numIterations Integer, default: 10 Number of iterations. Default 10. pValue Float, default: 50 Significance level for normality test. neighborhoodSize Integer, default: 0 Neighborhood size. The amount to extend each tile (overlap) when computing the clusters. This option is mutually exclusive with gridSize. gridSize Integer, default: null Grid cell-size. If greater than 0, kMeans will be run independently on cells of this size. This has the effect of limiting the size of any cluster to be gridSize or smaller. This option is mutually exclusive with neighborhoodSize. uniqueLabels Boolean, default: true If true, clusters are assigned unique IDs. Otherwise, they repeat per tile or grid cell.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2024-07-13 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2024-07-13 UTC."],[],["The G-Means algorithm performs image clustering by iteratively applying k-means and a normality test to determine the optimal number of clusters. It outputs an image with a 'clusters' band, assigning each pixel to a cluster. It can operate on a fixed grid (gridSize) or tiles with overlap (neighborhoodSize), with default being tiles without overlap. Input images should have a narrow dynamic range and pixels with partial mask will be fully masked in the output. Clusters can be assigned unique ID's or repeat per tile.\n"]]
