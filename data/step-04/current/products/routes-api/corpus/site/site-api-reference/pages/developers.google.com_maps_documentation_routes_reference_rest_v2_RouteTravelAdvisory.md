---
title: "RouteTravelAdvisory \_|\_ Routes API \_|\_ Google for Developers"
url: https://developers.google.com/maps/documentation/routes/reference/rest/v2/RouteTravelAdvisory
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://developers.google.com/maps/documentation/routes/reference/rest
source_metadata:
  url: https://developers.google.com/maps/documentation/routes/reference/rest/v2/RouteTravelAdvisory
  title: "RouteTravelAdvisory \_|\_ Routes API \_|\_ Google for Developers"
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
RouteTravelAdvisory
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
JSON representation provides supplementary route details like tolls, traffic, and fuel consumption.
The tollInfo field indicates presence of tolls and potential costs if available.
speedReadingIntervals details traffic density along the route using intervals.
fuelConsumptionMicroliters provides an estimate of fuel usage for the route.
routeRestrictionsPartiallyIgnored signals potential unsuitability of the route for the travel mode.
transitFare shows the total cost for transit routes if applicable and available.
JSON representation
Contains the additional information that the user should be informed about, such as possible traffic zone restrictions.
JSON representation
{
"tollInfo" : {
object ( TollInfo )
} ,
"speedReadingIntervals" : [
{
object ( SpeedReadingInterval )
}
] ,
"fuelConsumptionMicroliters" : string ,
"routeRestrictionsPartiallyIgnored" : boolean ,
"transitFare" : {
object ( Money )
}
}
Fields
tollInfo
object ( TollInfo )
Contains information about tolls on the route. This field is only populated if tolls are expected on the route and TOLLS is included in the request's ComputeRoutesRequest.extra_computations . If this field is set, but the estimatedPrice subfield is not populated, then the route contains tolls, but the estimated price is unknown. If tollInfo is not set, then there are no tolls expected on the route.
speedReadingIntervals[]
object ( SpeedReadingInterval )
Speed reading intervals indicating traffic density. This field is only populated for requests when the request has a TRAFFIC_AWARE or TRAFFIC_AWARE_OPTIMAL ComputeRoutesRequest.routing_preference value, and TRAFFIC_ON_POLYLINE is included in the ComputeRoutesRequest.extra_computations . The intervals cover the entire polyline of the route without overlap. The start point of a specified interval is the same as the end point of the preceding interval.
Example:
polyline: A ---- B ---- C ---- D ---- E ---- F ---- G
speedReadingIntervals: [A,C), [C,D), [D,G).
fuelConsumptionMicroliters
string ( int64 format)
The predicted fuel consumption in microliters. This field is only populated when FUEL_CONSUMPTION is included in the request's ComputeRoutesRequest.extra_computations .
routeRestrictionsPartiallyIgnored
boolean
Returned route may have restrictions that are not suitable for requested travel mode or route modifiers.
transitFare
object ( Money )
If present, contains the total fare or ticket costs on this route This property is only returned for TRANSIT requests and only for routes where fare information is available for all transit steps.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-08-27 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-08-27 UTC."],[],["The core content details route information via a JSON structure. Key data includes `tollInfo` (toll details), `speedReadingIntervals` (traffic density), `fuelConsumptionMicroliters` (predicted fuel use), `routeRestrictionsPartiallyIgnored` (potential route restrictions), and `transitFare` (total transit costs). The data provides details about tolls, traffic, fuel consumption, restrictions and fares, depending on the request and the characteristics of the route.\n"]]
