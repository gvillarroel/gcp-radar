---
title: "Style examples \_|\_ Maps SDK for Android \_|\_ Google for Developers"
url: https://developers.google.com/maps/documentation/android-sdk/cloud-customization/style-examples
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://developers.google.com/maps/documentation/android-sdk/overview
source_metadata:
  url: https://developers.google.com/maps/documentation/android-sdk/cloud-customization/style-examples
  title: "Style examples \_|\_ Maps SDK for Android \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Products
Google Maps Platform
Documentation
Android
Maps SDK for Android
Guides
Send feedback
Style examples
Stay organized with collections
Save and categorize content based on your preferences.
Select platform:
Android
iOS
JavaScript
Web Service
To use cloud-based maps styling on Android, you must use the
latest renderer for Maps SDK for Android.
Follow these instructions .
Here are some examples of complex element styling.
Yellow roads with green outlines
Customize all roads to have a pale yellow fill and a dark green outline as the
base style.
Under Map Features , select Road Network .
In the Road Network style panel, under Polyline , select the box
under Fill color .
Select a light yellow color, such as hex code #eeeec8.
Select the box under Stroke color and select a dark green color, such
as hex code #155304.
Under Stroke width , set it to 3px.
As you zoom in and out, different roads show this style as they appear and
disappear. Once roads get too small to show the outline, they display only the
yellow color.
Different colors of water by zoom level
Some types of element styling might only be visible at certain zoom levels, like
3D buildings or points of interest (POIs). Add a style such that the
water appears dark blue zoomed out to maximum (z0),
medium blue when zoomed in to the level of a state or province (zoom level 6
on a laptop), and pale blue with a dark blue border when zoomed in tightly
(z19).
Under Map Features , select Water .
In the Water panel, under Polyline , select the box
under Fill color , and select a dark blue color.
Select the zoom diamond to the right of Fill color to open the
keyzoom panel.
Select zoom level 6, and select a medium blue color.
Select zoom level 19, and change the water to light blue.
Note, if you set a stroke color, creeks and streams and many smaller rivers
only show the body color, even zoomed all the way in. The difference between
stroke and fill is visible on large ponds, lakes, and larger bodies of water.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-09 UTC."],[],[]]
