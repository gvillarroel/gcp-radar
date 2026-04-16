---
title: "ee.Algorithms.GeometryConstructors.Polygon \_|\_ Google Earth Engine \_|\_\
  \ Google for Developers"
url: https://developers.google.com/earth-engine/apidocs/ee-algorithms-geometryconstructors-polygon
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://developers.google.com/earth-engine/apidocs
source_metadata:
  url: https://developers.google.com/earth-engine/apidocs/ee-algorithms-geometryconstructors-polygon
  title: "ee.Algorithms.GeometryConstructors.Polygon \_|\_ Google Earth Engine \_\
    |\_ Google for Developers"
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
ee.Algorithms.GeometryConstructors.Polygon
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
The ee.Algorithms.GeometryConstructors.Polygon function constructs a Polygon from given coordinates.
The function takes several arguments including coordinates, crs, geodesic, maxError, and evenOdd.
The coordinates argument can be a list of LinearRings or a list of Points/pairs of Numbers.
The crs argument specifies the coordinate reference system and defaults to EPSG:4326 for number inputs.
The geodesic argument determines if edges are straight or follow the shortest path on Earth's surface.
Constructs a Polygon from the given coordinates.
Usage Returns ee.Algorithms.GeometryConstructors.Polygon(coordinates, crs , geodesic , maxError , evenOdd ) Geometry Argument Type Details coordinates List A list of LinearRings where the first is the shell and the rest are holes, or for a simple polygon, a list of Points or pairs of Numbers in x,y order. crs Projection, default: null The coordinate reference system of the coordinates. The default is the projection of the inputs, where Numbers are assumed to be EPSG:4326. geodesic Boolean, default: null If false, edges are straight in the projection. If true, edges are curved to follow the shortest path on the surface of the Earth. The default is the geodesic state of the inputs, or true if the inputs are numbers. maxError ErrorMargin, default: null Max error when input geometry must be reprojected to an explicitly requested result projection or geodesic state. evenOdd Boolean, default: true If true, polygon interiors will be determined by the even/odd rule, where a point is inside if it crosses an odd number of edges to reach a point at infinity. Otherwise polygons use the left-inside rule, where interiors are on the left side of the shell's edges when walking the vertices in the given order.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2024-07-13 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2024-07-13 UTC."],[],[]]
