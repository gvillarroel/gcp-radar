---
title: "ee.Algorithms.Image.Segmentation.KMeans \_|\_ Google Earth Engine \_|\_ Google\
  \ for Developers"
url: https://developers.google.com/earth-engine/apidocs/ee-algorithms-image-segmentation-kmeans
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://developers.google.com/earth-engine/apidocs
source_metadata:
  url: https://developers.google.com/earth-engine/apidocs/ee-algorithms-image-segmentation-kmeans
  title: "ee.Algorithms.Image.Segmentation.KMeans \_|\_ Google Earth Engine \_|\_\
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
ee.Algorithms.Image.Segmentation.KMeans
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
The algorithm performs K-Means clustering on the input image.
The output is a single-band image showing the cluster ID for each pixel.
Clustering can be applied to non-overlapping grid cells or overlapping tiles.
Clusters spanning cell or tile boundaries may receive different labels in each section.
Performs K-Means clustering on the input image. Outputs a 1-band image containing the ID of the cluster that each pixel belongs to. The algorithm can work either on a fixed grid of non-overlapping cells (gridSize, which can be smaller than a tile) or on tiles with overlap (neighborhoodSize). The default is to use tiles with no overlap. Clusters in one cell or tile are unrelated to clusters in another. Any cluster that spans a cell or tile boundary may receive two different labels in the two halves. Any input pixels with partial masks are fully masked in the output.
Usage Returns ee.Algorithms.Image.Segmentation.KMeans(image, numClusters , numIterations , neighborhoodSize , gridSize , forceConvergence , uniqueLabels ) Image Argument Type Details image Image The input image for clustering. numClusters Integer, default: 8 Number of clusters. numIterations Integer, default: 20 Number of iterations. neighborhoodSize Integer, default: 0 Neighborhood size. The amount to extend each tile (overlap) when computing the clusters. This option is mutually exclusive with gridSize. gridSize Integer, default: null Grid cell-size. If greater than 0, kMeans will be run independently on cells of this size. This has the effect of limiting the size of any cluster to be gridSize or smaller. This option is mutually exclusive with neighborhoodSize. forceConvergence Boolean, default: false If true, an error is thrown if convergence is not achieved before numIterations. uniqueLabels Boolean, default: true If true, clusters are assigned unique IDs. Otherwise, they repeat per tile or grid cell.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2024-07-13 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2024-07-13 UTC."],[],["K-Means clustering is applied to an input image, generating a single-band output image where each pixel is assigned a cluster ID. Clustering can occur within a fixed grid (`gridSize`) or within overlapping tiles (`neighborhoodSize`). By default, tiles have no overlap. Clusters are independent per cell/tile, potentially resulting in different labels for clusters crossing boundaries. Parameters include the number of clusters and iterations. Convergence can be enforced and the ID labels be unique or repeat depending on the specified parameter.\n"]]
