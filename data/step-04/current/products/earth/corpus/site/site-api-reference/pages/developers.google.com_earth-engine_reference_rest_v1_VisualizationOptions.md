---
title: "VisualizationOptions \_|\_ Google Earth Engine \_|\_ Google for Developers"
url: https://developers.google.com/earth-engine/reference/rest/v1/VisualizationOptions
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://developers.google.com/earth-engine/reference/rest
source_metadata:
  url: https://developers.google.com/earth-engine/reference/rest/v1/VisualizationOptions
  title: "VisualizationOptions \_|\_ Google Earth Engine \_|\_ Google for Developers"
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
VisualizationOptions
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
Describes how to produce an 8-bit RGB visualization of the requested data.
You can specify the data range to visualize using the ranges field, mapping values within the range to 0-255 in the output image.
The paletteColors field allows applying a CSS-style RGB color palette, but only when visualizing a single data band.
Optional fields include gamma for overall gamma correction and opacity for setting the image opacity between 0.0 and 1.0.
Describes how to produce an 8-bit RGB visualization of the requested data.
JSON representation
{
"ranges" : [
{
object ( DoubleRange )
}
] ,
"paletteColors" : [
string
] ,
"gamma" : number ,
"opacity" : number
}
Fields
ranges[]
object ( DoubleRange )
If present, specifies the range of data values to visualize. This range of values will be mapped to 0-255 (black to white) in the resulting image, and values outside this range will be clamped. May specify as one range for each band being visualized or else a single range to be applied to all bands.
paletteColors[]
string
If present, specifies sequence of CSS-style RGB color identifiers to apply as a color palette. Only allowed when visualizing a single data band.
gamma
number
If present, specifies an overall gamma correction factor to apply to the image.
opacity
number
If present, specifies an overall opacity factor to apply to the image, in the range 0.0 to 1.0.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-03-06 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-03-06 UTC."],[],[]]
