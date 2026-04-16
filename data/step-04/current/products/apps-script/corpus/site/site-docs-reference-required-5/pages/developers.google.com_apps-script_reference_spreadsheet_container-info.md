---
title: "Class ContainerInfo \_|\_ Apps Script \_|\_ Google for Developers"
url: https://developers.google.com/apps-script/reference/spreadsheet/container-info
knowledge_key: corpus
source_id: site-docs-reference-required-5
source_type: site
entrypoint: https://developers.google.com/apps-script/reference/spreadsheet/data-validation-builder
source_metadata:
  url: https://developers.google.com/apps-script/reference/spreadsheet/container-info
  title: "Class ContainerInfo \_|\_ Apps Script \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Google Workspace
Apps Script
Reference
Send feedback
Class ContainerInfo
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
ContainerInfo is used to access and update a chart's position within a sheet.
The position can be modified using the EmbeddedChart.modify() function.
Methods are available to get the anchor column and row, and the X and Y offsets in pixels.
ContainerInfo
Access the chart's position within a sheet. Can be updated using the EmbeddedChart.modify() function.
const sheet = SpreadsheetApp . getActiveSheet ();
const chart = sheet . getCharts ()[ 0 ];
const modifiedChart = chart . modify (). setPosition ( 5 , 5 , 0 , 0 ). build ();
sheet . updateChart ( modifiedChart );
Methods
Method Return type Brief description
get Anchor Column() Integer The chart's left side is anchored in this column.
get Anchor Row() Integer The chart's top side is anchored in this row.
get Offset X() Integer The chart's upper left hand corner is offset from the anchor column by this many pixels.
get Offset Y() Integer The chart's upper left hand corner is offset from the anchor row by this many pixels.
Detailed documentation
getAnchorColumn()
The chart's left side is anchored in this column.
Return
Integer — 1-indexed column (that is, column C is 3).
getAnchorRow()
The chart's top side is anchored in this row.
Return
Integer — 1-indexed row (that is, row 5 returns 5).
getOffsetX()
The chart's upper left hand corner is offset from the anchor column by this many pixels.
Return
Integer — The horizontal offset in pixels for the upper left hand corner of the chart.
getOffsetY()
The chart's upper left hand corner is offset from the anchor row by this many pixels.
Return
Integer — The vertical offset in pixels for the upper left hand corner of the chart.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-13 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-13 UTC."],[],[]]
