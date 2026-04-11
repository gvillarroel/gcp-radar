---
title: "ee.Algorithms.GeometryConstructors.BBox \_|\_ Google Earth Engine \_|\_ Google\
  \ for Developers"
url: https://developers.google.com/earth-engine/apidocs/ee-algorithms-geometryconstructors-bbox
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://developers.google.com/earth-engine/apidocs
source_metadata:
  url: https://developers.google.com/earth-engine/apidocs/ee-algorithms-geometryconstructors-bbox
  title: "ee.Algorithms.GeometryConstructors.BBox \_|\_ Google Earth Engine \_|\_\
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
ee.Algorithms.GeometryConstructors.BBox
Stay organized with collections
Save and categorize content based on your preferences.
Constructs a rectangle whose edges are lines of latitude and longitude.
The result is a planar WGS84 rectangle.
If (east - west) ≥ 360 then the longitude range will be normalized to -180 to +180; otherwise they will be treated as designating points on a circle (e.g., east may be numerically less than west).
Usage Returns ee.Algorithms.GeometryConstructors.BBox(west, south, east, north) Geometry Argument Type Details west Float The westernmost enclosed longitude. Will be adjusted to lie in the range -180 to 180. south Float The southernmost enclosed latitude. If less than -90 (south pole), will be treated as -90. east Float The easternmost enclosed longitude. north Float The northernmost enclosed latitude. If greater than +90 (north pole), will be treated as +90.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2024-07-13 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2024-07-13 UTC."],[],["This describes creating a WGS84 rectangle using latitude and longitude. The function `BBox` takes four float arguments: `west`, `south`, `east`, and `north`, representing the rectangle's boundaries. Longitude values are normalized to -180 to +180 if the difference between `east` and `west` is 360 or more; otherwise they define points on a circle. Latitude values are clamped between -90 and +90. The function returns a Geometry object.\n"]]
