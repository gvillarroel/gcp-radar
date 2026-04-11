---
title: "ee.Algorithms.HillShadow \_|\_ Google Earth Engine \_|\_ Google for Developers"
url: https://developers.google.com/earth-engine/apidocs/ee-algorithms-hillshadow
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://developers.google.com/earth-engine/apidocs
source_metadata:
  url: https://developers.google.com/earth-engine/apidocs/ee-algorithms-hillshadow
  title: "ee.Algorithms.HillShadow \_|\_ Google Earth Engine \_|\_ Google for Developers"
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
ee.Algorithms.HillShadow
Stay organized with collections
Save and categorize content based on your preferences.
Creates a shadow band, with output 1 where pixels are illumunated and 0 where they are shadowed. Takes as input an elevation band, azimuth and zenith of the light source in degrees, a neighborhood size, and whether or not to apply hysteresis when a shadow appears. Currently, this algorithm only works for Mercator projections, in which light rays are parallel.
Usage Returns ee.Algorithms.HillShadow(image, azimuth, zenith, neighborhoodSize , hysteresis ) Image Argument Type Details image Image The image to which to apply the shadow algorithm, in which each pixel should represent an elevation in meters. azimuth Float Azimuth in degrees. zenith Float Zenith in degrees. neighborhoodSize Integer, default: 0 Neighborhood size. hysteresis Boolean, default: false Use hysteresis. Less physically accurate, but may generate better images.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2023-10-06 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2023-10-06 UTC."],[],["The `HillShadow` algorithm generates a shadow band (1 for illuminated, 0 for shadowed pixels) for Mercator projections. It requires an elevation image, light source azimuth and zenith angles, and a neighborhood size. Hysteresis can be optionally applied for potentially improved visuals. The algorithm's inputs include the elevation image, azimuth (degrees), zenith (degrees), neighborhood size, and a boolean for hysteresis, outputting a shadow band image.\n"]]
