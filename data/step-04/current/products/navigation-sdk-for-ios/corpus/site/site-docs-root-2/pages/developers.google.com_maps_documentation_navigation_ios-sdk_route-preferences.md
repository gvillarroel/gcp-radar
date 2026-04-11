---
title: "Adjust routing preferences \_|\_ Navigation SDK for iOS \_|\_ Google for Developers"
url: https://developers.google.com/maps/documentation/navigation/ios-sdk/route-preferences
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://developers.google.com/maps/documentation/navigation/ios-sdk/overview
source_metadata:
  url: https://developers.google.com/maps/documentation/navigation/ios-sdk/route-preferences
  title: "Adjust routing preferences \_|\_ Navigation SDK for iOS \_|\_ Google for\
    \ Developers"
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
Navigation SDK for iOS
Send feedback
Adjust routing preferences
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
The Navigation SDK offers two routing strategies: the default best route (prioritizes time) and the shorter route (prioritizes distance among optimal routes).
You can retrieve route details using getRouteInfoForDestination() to compare the default best route and the shorter route.
Customize routing strategy with GMSNavigationRoutingOptions , including ferry inclusion with avoidsFerries and route callout format with routeCalloutFormat .
To change an active trip's routing strategy, you must clear existing destinations and re-set them with the desired strategy.
The shorter route strategy is designed for Rideshare providers operating in regulated markets where pricing is primarily based on distance traveled.
Route calculations (including rerouting) return the route that takes the
least amount of time to navigate as the default best route . But
you can change the routing strategy so that the shorter of the route
alternatives is returned instead.
The term shorter means the route that is the shortest among optimal route
based on our default cost model. The shorter route might not be the absolute
shortest route, since that option might be a poor alternative. For example, if
the absolute shortest route is 10 km and takes 50 minutes to navigate and
another route is 15 km, but only takes 20 minutes to navigate, the second choice
is optimal, because spending 30 mins to reduce five km isn't a good trade-off.
Once you set the routing strategy for a trip, it won't change until the trip
completes. To change the routing strategy for an existing trip, you must clear
the destinations and reset them again with the new routing strategy.
Note: The feature mentioned above is intended for Rideshare providers that operate in regulated
markets (such as Europe), who are often required by law to price their services
based on the same principles as traditional taxis—which charge based primarily
on the distance traveled.
Getting route details
To determine which route strategy is the optimal choice for a given waypoint,
call getRouteInfoForDestination() to get route details for both the default
best route and the absolute shorter route. Details include the duration and the
distance to a destination waypoint.
These details come from
GMSNavigationRouteInfo
in the callback.
Example
The following code example demonstrates how to get route details for each of the
two routing strategies.
Swift
let routingOptions = GMSNavigationRoutingOptions ()
navigator ?. getRouteInfoForDestination ( destination ,
routingOptions : routingOptions ) { routeInfo in
...
}
Objective-C
GMSNavigationRoutingOptions * routingOptions =
[[ GMSNavigationRoutingOptions alloc ] init ];
[ navigator getRouteInfoForDestination : destination
withRoutingOptions : routingOptions
callback : ^ ( GMSNavigationRouteInfo * routeInfo ){...}];
Setting the routing strategy
You can configure the routing strategy by using GMSNavigationRoutingOptions ,
and setting the routingStrategy when calling setDestinations() .
routingStrategy takes one of the following enumeration values:
Enumeration Value Description
GMSNavigationRoutingStrategyDefaultBest
Ranks routes by the Navigation SDK default cost model. This is the
default routing strategy.
GMSNavigationRoutingStrategyShorter
Ranks routes by distance. The highest ranking route is the shortest of
those returned.
Warning: This feature is incompatible with the
Hiding Alternate Route
feature. Using these two features at the same time will produce unexpected
results.
Example
The following code example demonstrates how to set the shorter route routing
strategy.
Swift
let routingOptions = GMSNavigationRoutingOptions ( routingStrategy : . shorter )
navigator ?. setDestinations ( destinations ,
routingOptions : routingOptions ) { routeStatus in
...
}
Objective-C
GMSNavigationRoutingOptions * routingOptions = [[ GMSNavigationRoutingOptions alloc ] initWithRoutingStrategy : GMSNavigationRoutingStrategyShorter ];
[ navigator setDestinations : destinations
routingOptions : routingOptions
callback : ^ ( GMSRouteStatus routeStatus ){...}];
Routes that include ferries
By default, the Navigation SDK for iOS excludes routes that include ferries. If you prefer to
include ferry options as part of your routes, you can adjust this routing
preference to expose the trip to ferry segments by setting avoidsFerries to
false .
Example
Swift
self . mapView . navigator ?. avoidsFerries = false
Objective-C
self . mapView . navigator . avoidsFerries = NO
The route callout format
Under the shorter route routing strategy, callouts along the route display
distance details. But you can use the ETA callouts instead.
Configuring the route callout format
You can change the route callout format by setting routeCalloutFormat in
GMSMapView . routeCalloutFormat takes one of the following enumeration
values:
Enumeration Value Description
GMSNavigationRouteCalloutFormatDefault
Displays time remaining when using the default best route routing
strategy. Displays distance remaining when using the shorter route routing
strategy
GMSNavigationRouteCalloutFormatTime
Displays time remaining.
GMSNavigationRouteCalloutFormatDistance
DDisplays distance remaining.
Example
The following code example demonstrates how to configure the route callout
format.
Swift
self . mapView . routeCalloutFormat = . time
Objective-C
_mapView . routeCalloutFormat = GMSNavigationRouteCalloutFormatTime ;
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-09 UTC."],[],[]]
