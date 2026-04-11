---
title: "ee.Algorithms.GeometryConstructors.Point \_|\_ Google Earth Engine \_|\_ Google\
  \ for Developers"
url: https://developers.google.com/earth-engine/apidocs/ee-algorithms-geometryconstructors-point
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://developers.google.com/earth-engine/apidocs
source_metadata:
  url: https://developers.google.com/earth-engine/apidocs/ee-algorithms-geometryconstructors-point
  title: "ee.Algorithms.GeometryConstructors.Point \_|\_ Google Earth Engine \_|\_\
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
ee.Algorithms.GeometryConstructors.Point
Stay organized with collections
Save and categorize content based on your preferences.
Constructs a new Point from the given x,y coordinates.
Usage Returns ee.Algorithms.GeometryConstructors.Point(coordinates, crs ) Geometry Argument Type Details coordinates List The coordinates of this Point in x,y order. crs Projection, default: null The coordinate reference system of the coordinates. The default is the projection of the inputs, where Numbers are assumed to be EPSG:4326.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2024-07-13 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2024-07-13 UTC."],[],["The core function is creating a `Point` geometry object using `ee.Algorithms.GeometryConstructors.Point`. It requires a list of `coordinates` in x,y order. An optional `crs` (coordinate reference system) argument can be specified; otherwise, it defaults to the projection of the inputs, with numbers assumed to be EPSG:4326. The function returns a `Geometry` object representing the created point.\n"]]
