---
title: "SearchMode \_|\_ Route Optimization API \_|\_ Google for Developers"
url: https://developers.google.com/maps/documentation/route-optimization/reference/rest/v1/SearchMode
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://developers.google.com/maps/documentation/route-optimization/reference/rest
source_metadata:
  url: https://developers.google.com/maps/documentation/route-optimization/reference/rest/v1/SearchMode
  title: "SearchMode \_|\_ Route Optimization API \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Products
Google Maps Platform
Documentation
Route Optimization API
Reference
Send feedback
SearchMode
Stay organized with collections
Save and categorize content based on your preferences.
Mode defining the behavior of the search, trading off latency versus solution quality. In all modes, the global request deadline is enforced.
Enums
SEARCH_MODE_UNSPECIFIED
Unspecified search mode, equivalent to RETURN_FAST .
RETURN_FAST
Stop the search after finding the first good solution.
CONSUME_ALL_AVAILABLE_TIME
Spend all the available time to search for better solutions.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-08-27 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-08-27 UTC."],[],["The core content defines search modes that balance latency and solution quality, all adhering to a global deadline. `RETURN_FAST` mode prioritizes speed, halting the search after the initial satisfactory solution. Conversely, `CONSUME_ALL_AVAILABLE_TIME` mode maximizes search duration to improve solution quality. `SEARCH_MODE_UNSPECIFIED` is the default, mirroring the behavior of `RETURN_FAST`. These modes dictate how the system allocates time to finding solutions.\n"]]
