---
title: "Places SDK for iOS \_|\_ Google for Developers"
url: https://developers.google.com/maps/documentation/places/ios-sdk/routing-summary-sar
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://developers.google.com/maps/documentation/places/ios-sdk/overview
source_metadata:
  url: https://developers.google.com/maps/documentation/places/ios-sdk/routing-summary-sar
  title: "Places SDK for iOS \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Products
Google Maps Platform
Documentation
iOS
Places SDK for iOS
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Combine routing summaries with search along route
You can combine routing summary calculations with search along a route .
In this case, Text Search (New) returns the travel duration and distance to each
place in the response, and then from each place to the final destination of the
route.
To use Text Search (New) to calculate the routing summary along with search
along a route:
By default, Text Search (New) performs the search along the entire route:
Note: The response only contains the travel duration and
duration for each leg. It does not contain the actual route itself. To calculate the route, pass
the origin, location of the place as an intermediate waypoint, and the destination into the
Routes API.
Specify the routing origin, travel mode, and route modifiers
You can modify the search and routing summary calculation by specifying the
routing origin, travel mode, route modifiers, and routing preferences. The
travel mode and route modifiers work the same as for calculating routing
summaries without specifying a route as shown in the Specify travel
options topic.
By default, the first leg of each result contains the distance from the origin
defined by the polyline to each place. However, you can override that default by
explicitly specifying a routing origin in the request. If specified, the first
leg of all responses specifies the distances and duration from the specified
routing origin, overriding the origin from the polyline.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-09 UTC."],[],[]]
