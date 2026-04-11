---
title: "PixelGrid \_|\_ Google Earth Engine \_|\_ Google for Developers"
url: https://developers.google.com/earth-engine/reference/rest/v1/PixelGrid
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://developers.google.com/earth-engine/reference/rest
source_metadata:
  url: https://developers.google.com/earth-engine/reference/rest/v1/PixelGrid
  title: "PixelGrid \_|\_ Google Earth Engine \_|\_ Google for Developers"
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
PixelGrid
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
A pixel grid on the Earth's surface is defined by a map projection.
Standard projections use crsCode , while non-standard ones use crsWkt .
An affine post-projection transformation is indicated by the affineTransform field.
Defines a pixel grid on the surface of the Earth, via a map projection. If the projection has a standard code, then crsCode will be set (non-empty). If the projection is non-standard, then crsWkt will be set. If the post-projection transformation is affine, then affineTransform will be set.
JSON representation
{
"dimensions" : {
object ( GridDimensions )
} ,
"affineTransform" : {
object ( AffineTransform )
} ,
// Union field crs can be only one of the following:
"crsCode" : string ,
"crsWkt" : string
// End of list of possible types for union field crs .
}
Fields
dimensions
object ( GridDimensions )
The dimensions of the pixel grid.
affineTransform
object ( AffineTransform )
The affine transform.
Union field crs . The coordinate reference system of the pixel grid, specified as a standard code where possible, and in WKT format otherwise. crs can be only one of the following:
crsCode
string
A standard coordinate reference system code (e.g. "EPSG:4326").
crsWkt
string
A coordinate reference system in WKT format ("Well-Known Text").
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-03-06 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-03-06 UTC."],[],["The content describes a pixel grid on Earth's surface defined by a map projection. Key data includes `dimensions` and an optional `affineTransform` for post-projection affine transformations. The coordinate reference system (`crs`) is defined via either a standard `crsCode` (e.g., \"EPSG:4326\") or, if non-standard, a `crsWkt` (Well-Known Text) string. The `crs` fields are mutually exclusive, with only one being populated.\n"]]
