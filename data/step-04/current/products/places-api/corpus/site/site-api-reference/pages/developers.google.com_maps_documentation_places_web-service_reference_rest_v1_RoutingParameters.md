---
title: "RoutingParameters \_|\_ Places API \_|\_ Google for Developers"
url: https://developers.google.com/maps/documentation/places/web-service/reference/rest/v1/RoutingParameters
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://developers.google.com/maps/documentation/places/web-service/reference/rest
source_metadata:
  url: https://developers.google.com/maps/documentation/places/web-service/reference/rest/v1/RoutingParameters
  title: "RoutingParameters \_|\_ Places API \_|\_ Google for Developers"
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
Places API
Reference
Send feedback
RoutingParameters
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
RoutingParameters configure routing calculations for places, influencing result ranking and travel time calculations.
They include parameters for origin, travel mode, route modifiers (like avoiding tolls or highways), and routing preference (traffic awareness).
TravelMode options include driving, bicycling, walking, and two-wheeler, with some modes having restrictions on certain features or regions.
RouteModifiers allow customization of routes by avoiding specific road types, applicable to different travel modes.
RoutingPreference dictates whether and how traffic conditions are considered in route calculations, impacting latency and route selection.
JSON representation
TravelMode
RouteModifiers
JSON representation
RoutingPreference
Parameters to configure the routing calculations to the places in the response, both along a route (where result ranking will be influenced) and for calculating travel times on results.
JSON representation
{
"origin" : {
object ( LatLng )
} ,
"travelMode" : enum ( TravelMode ) ,
"routeModifiers" : {
object ( RouteModifiers )
} ,
"routingPreference" : enum ( RoutingPreference )
}
Fields
origin
object ( LatLng )
Optional. An explicit routing origin that overrides the origin defined in the polyline. By default, the polyline origin is used.
travelMode
enum ( TravelMode )
Optional. The travel mode.
routeModifiers
object ( RouteModifiers )
Optional. The route modifiers.
routingPreference
enum ( RoutingPreference )
Optional. Specifies how to compute the routing summaries. The server attempts to use the selected routing preference to compute the route. The traffic aware routing preference is only available for the DRIVE or TWO_WHEELER travelMode .
TravelMode
Travel mode options. These options map to what Routes API offers .
Enums
TRAVEL_MODE_UNSPECIFIED
No travel mode specified. Defaults to DRIVE .
DRIVE
Travel by passenger car.
BICYCLE
Travel by bicycle. Not supported with searchAlongRouteParameters .
WALK
Travel by walking. Not supported with searchAlongRouteParameters .
TWO_WHEELER
Motorized two wheeled vehicles of all kinds such as scooters and motorcycles. Note that this is distinct from the BICYCLE travel mode which covers human-powered transport. Not supported with searchAlongRouteParameters . Only supported in those countries listed at Countries and regions supported for two-wheeled vehicles .
RouteModifiers
Encapsulates a set of optional conditions to satisfy when calculating the routes.
JSON representation
{
"avoidTolls" : boolean ,
"avoidHighways" : boolean ,
"avoidFerries" : boolean ,
"avoidIndoor" : boolean
}
Fields
avoidTolls
boolean
Optional. When set to true, avoids toll roads where reasonable, giving preference to routes not containing toll roads. Applies only to the DRIVE and TWO_WHEELER TravelMode .
avoidHighways
boolean
Optional. When set to true, avoids highways where reasonable, giving preference to routes not containing highways. Applies only to the DRIVE and TWO_WHEELER TravelMode .
avoidFerries
boolean
Optional. When set to true, avoids ferries where reasonable, giving preference to routes not containing ferries. Applies only to the DRIVE and TWO_WHEELER TravelMode .
avoidIndoor
boolean
Optional. When set to true, avoids navigating indoors where reasonable, giving preference to routes not containing indoor navigation. Applies only to the WALK TravelMode .
RoutingPreference
A set of values that specify factors to take into consideration when calculating the route.
Enums
ROUTING_PREFERENCE_UNSPECIFIED
No routing preference specified. Default to TRAFFIC_UNAWARE .
TRAFFIC_UNAWARE
Computes routes without taking live traffic conditions into consideration. Suitable when traffic conditions don't matter or are not applicable. Using this value produces the lowest latency. Note: For TravelMode DRIVE and TWO_WHEELER , the route and duration chosen are based on road network and average time-independent traffic conditions, not current road conditions. Consequently, routes may include roads that are temporarily closed. Results for a given request may vary over time due to changes in the road network, updated average traffic conditions, and the distributed nature of the service. Results may also vary between nearly-equivalent routes at any time or frequency.
TRAFFIC_AWARE
Calculates routes taking live traffic conditions into consideration. In contrast to TRAFFIC_AWARE_OPTIMAL , some optimizations are applied to significantly reduce latency.
TRAFFIC_AWARE_OPTIMAL
Calculates the routes taking live traffic conditions into consideration, without applying most performance optimizations. Using this value produces the highest latency.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-08-27 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-08-27 UTC."],[],["This content outlines routing calculations for location-based services. Key parameters include: `origin`, `travelMode` (e.g., `DRIVE`, `BICYCLE`, `WALK`), `routeModifiers` (e.g., avoid tolls, highways, ferries, or indoor areas), and `routingPreference` (e.g., `TRAFFIC_UNAWARE`, `TRAFFIC_AWARE`). These parameters determine how routes are calculated, allowing users to customize their journey based on the chosen travel mode and desired route characteristics. The system calculates travel times and route ranking based on the parameter inputs.\n"]]
