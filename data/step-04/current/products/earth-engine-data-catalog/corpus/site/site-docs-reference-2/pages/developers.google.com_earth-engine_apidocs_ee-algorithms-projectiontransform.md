---
title: "ee.Algorithms.ProjectionTransform \_|\_ Google Earth Engine \_|\_ Google for\
  \ Developers"
url: https://developers.google.com/earth-engine/apidocs/ee-algorithms-projectiontransform
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://developers.google.com/earth-engine/apidocs/ee-data-computefeatures
source_metadata:
  url: https://developers.google.com/earth-engine/apidocs/ee-algorithms-projectiontransform
  title: "ee.Algorithms.ProjectionTransform \_|\_ Google Earth Engine \_|\_ Google\
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
ee.Algorithms.ProjectionTransform
Stay organized with collections
Save and categorize content based on your preferences.
Transforms the geometry of a feature to a specific projection.
Usage Returns ee.Algorithms.ProjectionTransform(feature, proj , maxError ) Feature Argument Type Details feature Element The feature the geometry of which is being converted. proj Projection, optional The target projection. Defaults to EPSG:4326. If this has a geographic CRS, the edges of the geometry will be interpreted as geodesics. Otherwise they will be interpreted as straight lines in the projection. maxError ErrorMargin, default: null The maximum projection error.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2024-06-05 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2024-06-05 UTC."],[],["Transforms a feature's geometry to a specified projection. The function `ee.Algorithms.ProjectionTransform` takes a `feature`, a target `proj`ection (defaults to EPSG:4326), and an optional `maxError` margin. The `proj`ection determines if geometry edges are geodesic or straight lines. The input `feature`'s geometry is converted, and the transformed `feature` is returned. The `maxError` sets the tolerance for the projection's accuracy.\n"]]
