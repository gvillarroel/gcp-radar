---
title: "GridDimensions \_|\_ Google Earth Engine \_|\_ Google for Developers"
url: https://developers.google.com/earth-engine/reference/rest/v1/GridDimensions
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://developers.google.com/earth-engine/reference/rest
source_metadata:
  url: https://developers.google.com/earth-engine/reference/rest/v1/GridDimensions
  title: "GridDimensions \_|\_ Google Earth Engine \_|\_ Google for Developers"
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
GridDimensions
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
This content defines the dimensions of a pixel grid.
It specifies the grid's width and height, measured in pixels.
Both width and height are represented as integers in a JSON format.
Specifies the dimensions of a pixel grid.
JSON representation
{
"width" : integer ,
"height" : integer
}
Fields
width
integer
The width of the grid, in pixels.
height
integer
The height of the grid, in pixels.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2024-10-24 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2024-10-24 UTC."],[],["The content defines the structure for representing a pixel grid using a JSON object. This object contains two integer fields: `width` and `height`. `width` represents the horizontal size of the grid in pixels, and `height` specifies the vertical size, also in pixels. This representation allows for defining the dimensions of a rectangular grid.\n"]]
