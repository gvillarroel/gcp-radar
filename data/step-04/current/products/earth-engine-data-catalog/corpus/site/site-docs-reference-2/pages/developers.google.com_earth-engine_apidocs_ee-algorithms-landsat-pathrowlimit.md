---
title: "ee.Algorithms.Landsat.pathRowLimit \_|\_ Google Earth Engine \_|\_ Google\
  \ for Developers"
url: https://developers.google.com/earth-engine/apidocs/ee-algorithms-landsat-pathrowlimit
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://developers.google.com/earth-engine/apidocs
source_metadata:
  url: https://developers.google.com/earth-engine/apidocs/ee-algorithms-landsat-pathrowlimit
  title: "ee.Algorithms.Landsat.pathRowLimit \_|\_ Google Earth Engine \_|\_ Google\
    \ for Developers"
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
ee.Algorithms.Landsat.pathRowLimit
Stay organized with collections
Save and categorize content based on your preferences.
Limits requests to an ImageCollection of Landsat scenes to return a controllable number of the best scenes for each request. This is intended for use with statistical algorithms like median composites that need a certain amount of good data to perform well, but that do not benefit substantially from additional data beyond that while becoming needlessly expensive. The default arguments select approximately one year's worth of good data.
Note that in rare circumstances, when the tile boundary aligns with a Landsat WRS cell boundary, queries for adjacent tiles may yield conflicting results. This is why it is important that this algorithm only be used with statistical methods that can tolerate these inconsistencies.
Usage Returns ee.Algorithms.Landsat.pathRowLimit(collection, maxScenesPerPathRow , maxScenesTotal ) ImageCollection Argument Type Details collection ImageCollection The Landsat ImageCollection to limit. maxScenesPerPathRow Integer, default: 25 The max number of scenes to return per path/row. maxScenesTotal Integer, default: 100 The max number of scenes to return per request total.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2024-07-13 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2024-07-13 UTC."],[],[]]
