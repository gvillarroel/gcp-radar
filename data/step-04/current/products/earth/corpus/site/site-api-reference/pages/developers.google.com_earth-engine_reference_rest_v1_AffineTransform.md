---
title: "AffineTransform \_|\_ Google Earth Engine \_|\_ Google for Developers"
url: https://developers.google.com/earth-engine/reference/rest/v1/AffineTransform
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://developers.google.com/earth-engine/reference/rest
source_metadata:
  url: https://developers.google.com/earth-engine/reference/rest/v1/AffineTransform
  title: "AffineTransform \_|\_ Google Earth Engine \_|\_ Google for Developers"
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
AffineTransform
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
The affine transform uses six values in a 2x3 matrix to transform pixel locations to a Coordinate Reference System (CRS).
The transformation is calculated by multiplying the 2x3 matrix by the column vector (u, v, 1) where (u, v) is the pixel location.
Pixel coordinates start with (0, 0) at the top-left corner of the top-left pixel.
(translateX, translateY) represents the origin of the pixel grid in the CRS.
When there is no shear or rotation, (scaleX, scaleY) indicates the pixel size.
The affine transform. The six values form a 2x3 matrix:
( ( scaleX, shearX, translateX )
( shearY, scaleY, translateY ) )
specifying a transformation such that given a pixel location (u, v) , the corresponding location in the CRS is this matrix times the column vector (u, v, 1) . Pixel coordinates use the "PixelIsArea" raster space, i.e. (0, 0) is the top-left corner of the top-left pixel, and (width, height) is the bottom-right corner of the image. (translateX, translateY) is the origin (in the CRS) of the pixel grid. If there is no shear or rotation, then (scaleX, scaleY) is the pixel size. scaleY is often negative so that the (0, 0) pixel corner can represent the north-westernmost corner of the image.
JSON representation
{
"scaleX" : number ,
"shearX" : number ,
"translateX" : number ,
"shearY" : number ,
"scaleY" : number ,
"translateY" : number
}
Fields
scaleX
number
The horizontal scale factor.
shearX
number
The horizontal shear factor for some, though not all, transformations.
translateX
number
The horizontal offset.
shearY
number
The vertical shear factor for some, though not all, transformations.
scaleY
number
The vertical scale factor.
translateY
number
The vertical offset.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-03-06 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-03-06 UTC."],[],[]]
