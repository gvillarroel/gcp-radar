---
title: "Improving performance \_|\_ Community Visualizations \_|\_ Google for Developers"
url: https://developers.google.com/looker-studio/visualization/caching
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://developers.google.com/looker-studio/visualization
source_metadata:
  url: https://developers.google.com/looker-studio/visualization/caching
  title: "Improving performance \_|\_ Community Visualizations \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Products
Looker Studio
Community Visualizations
Improving performance
Stay organized with collections
Save and categorize content based on your preferences.
Note: The Community Visualization feature is in "Developer Preview". To learn
more about upcoming features and improvements during this period visit the
Developer Preview page.
Caching can be used to improve the performance of Community Visualizations.
Using devMode
Looker Studio caches community components by default. Setting devMode to
true in the manifest bypasses the cache, allowing you to load the latest
version of your code. If devMode is not set, it defaults to false , which
means that Looker Studio will serve a cached version of your community
component.
The cached version of the component automatically updates every 12 hours. To
bypass the cache for a previously cached component, set devMode to true
and allow 12 hours for the cached devMode preference to expire.
Next steps
Review the manifest documentation .
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2024-09-18 UTC.
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2024-09-18 UTC."],[],[]]
