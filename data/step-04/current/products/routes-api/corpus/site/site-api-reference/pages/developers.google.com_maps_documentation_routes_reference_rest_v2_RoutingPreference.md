---
title: "RoutingPreference \_|\_ Routes API \_|\_ Google for Developers"
url: https://developers.google.com/maps/documentation/routes/reference/rest/v2/RoutingPreference
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://developers.google.com/maps/documentation/routes/reference/rest
source_metadata:
  url: https://developers.google.com/maps/documentation/routes/reference/rest/v2/RoutingPreference
  title: "RoutingPreference \_|\_ Routes API \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Products
Google Maps Platform
Documentation
Web Services
Routes API
Reference
Send feedback
RoutingPreference
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
Routing preferences determine how routes are calculated, considering factors like traffic conditions.
TRAFFIC_UNAWARE provides the fastest routes without considering real-time traffic, suitable when traffic is irrelevant.
TRAFFIC_AWARE balances speed and accuracy by incorporating live traffic data with some optimizations for reduced latency.
TRAFFIC_AWARE_OPTIMAL prioritizes accuracy, calculating routes based on real-time traffic for the most precise ETAs, but may have higher latency.
The default setting is TRAFFIC_UNAWARE if no routing preference is specified using ROUTING_PREFERENCE_UNSPECIFIED .
A set of values that specify factors to take into consideration when calculating the route.
Enums
ROUTING_PREFERENCE_UNSPECIFIED
No routing preference specified. Default to TRAFFIC_UNAWARE .
TRAFFIC_UNAWARE
Computes routes without taking live traffic conditions into consideration. Suitable when traffic conditions don't matter or are not applicable. Using this value produces the lowest latency. Note: For RouteTravelMode DRIVE and TWO_WHEELER , the route and duration chosen are based on road network and average time-independent traffic conditions, not current road conditions. Consequently, routes may include roads that are temporarily closed. Results for a given request may vary over time due to changes in the road network, updated average traffic conditions, and the distributed nature of the service. Results may also vary between nearly-equivalent routes at any time or frequency.
TRAFFIC_AWARE
Calculates routes taking live traffic conditions into consideration. In contrast to TRAFFIC_AWARE_OPTIMAL , some optimizations are applied to significantly reduce latency.
TRAFFIC_AWARE_OPTIMAL
Calculates the routes taking live traffic conditions into consideration, without applying most performance optimizations. Using this value produces the highest latency.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-08-27 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-08-27 UTC."],[],["The document defines four routing preference values: `ROUTING_PREFERENCE_UNSPECIFIED` (defaulting to `TRAFFIC_UNAWARE`), `TRAFFIC_UNAWARE` (ignores live traffic, offering lowest latency and relying on average conditions), `TRAFFIC_AWARE` (considers live traffic with some latency optimizations), and `TRAFFIC_AWARE_OPTIMAL` (considers live traffic without optimizations, resulting in highest latency). When choosing routes with the drive or two-wheeler travel mode, only average time-independent conditions are considered, with possible inclusions of closed roads.\n"]]
