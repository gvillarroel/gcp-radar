---
title: "Places SDK for iOS \_|\_ Google for Developers"
url: https://developers.google.com/maps/documentation/places/ios-sdk/routing-summary
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://developers.google.com/maps/documentation/places/ios-sdk/overview
source_metadata:
  url: https://developers.google.com/maps/documentation/places/ios-sdk/routing-summary
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
Calculate routing summary
To use Text Search (New) or Nearby Search (New)
to calculate the travel duration and distance to each place in the response:
Use Text Search (New)
Note: The response only contains the duration and
distanceMeters to each place. It does not contain the actual route itself. To calculate
the route, use the Routes API, passing to it the origin and location of the destination place.
Use Nearby Search
In this example, you calculate the travel duration and distance to each place in
the Nearby Search response. This example searches for restaurants in Sydney,
Australia and sets the location restriction and the routing origin to the same
latitude and longitude coordinate:
Specify travel options
By default, the duration and distance calculations are for a car. However, you
can control the vehicle type, as well as other options, in the search.
In the next example, you specify the travel mode as DRIVE and to avoid
highways:
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-09 UTC."],[],[]]
