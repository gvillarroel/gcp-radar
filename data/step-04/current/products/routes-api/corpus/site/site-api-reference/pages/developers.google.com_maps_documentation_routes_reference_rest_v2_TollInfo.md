---
title: "TollInfo \_|\_ Routes API \_|\_ Google for Developers"
url: https://developers.google.com/maps/documentation/routes/reference/rest/v2/TollInfo
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://developers.google.com/maps/documentation/routes/reference/rest
source_metadata:
  url: https://developers.google.com/maps/documentation/routes/reference/rest/v2/TollInfo
  title: "TollInfo \_|\_ Routes API \_|\_ Google for Developers"
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
TollInfo
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
Toll information is encapsulated within the Route or RouteLeg objects in JSON format.
estimatedPrice field provides the estimated toll costs in various currencies using the Money object.
Toll prices are presented as a list, potentially containing multiple currencies for international routes.
JSON representation
Encapsulates toll information on a Route or on a RouteLeg .
JSON representation
{
"estimatedPrice" : [
{
object ( Money )
}
]
}
Fields
estimatedPrice[]
object ( Money )
The monetary amount of tolls for the corresponding Route or RouteLeg . This list contains a money amount for each currency that is expected to be charged by the toll stations. Typically this list will contain only one item for routes with tolls in one currency. For international trips, this list may contain multiple items to reflect tolls in different currencies.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-08-27 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-08-27 UTC."],[],["Toll information for a Route or RouteLeg is represented in JSON. The `estimatedPrice` field, an array, contains monetary amounts for tolls, specified as `Money` objects. Each array item represents a different currency that might be charged. Typically, there's one item per currency, but international trips may have multiple items reflecting tolls in different currencies. This field provides the expected toll charges for each route segment.\n"]]
