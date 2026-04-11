---
title: "Adjusting routing preferences \_|\_ Navigation SDK for Android \_|\_ Google\
  \ for Developers"
url: https://developers.google.com/maps/documentation/navigation/android-sdk/adjust-route-prefs
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://developers.google.com/maps/documentation/navigation/android-sdk
source_metadata:
  url: https://developers.google.com/maps/documentation/navigation/android-sdk/adjust-route-prefs
  title: "Adjusting routing preferences \_|\_ Navigation SDK for Android \_|\_ Google\
    \ for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Products
Google Maps Platform
Documentation
Android
Navigation SDK for Android
Send feedback
Adjusting routing preferences
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
By default, the Navigation SDK calculates the fastest route, but you can configure it to prioritize the shortest route instead for rideshare or taxi-like services.
To determine the optimal route strategy, use getRouteInfo() to compare route details like duration and distance for both default and shorter route options.
Set the desired routing strategy (default or shorter) using RoutingOptions when setting destinations with setDestinations() .
You can customize route callouts to display either time remaining or distance remaining, regardless of the chosen routing strategy, using setRouteCalloutInfoFormat .
While the SDK avoids ferries by default, you can include them in route calculations by setting avoidFerries to false in RoutingOptions .
Route calculations (including rerouting) return the route that takes the
least amount of time to navigate as the default best route . But
you can change the routing strategy so that the shorter of the route
alternatives is returned instead.
The term shorter means the route that is the shortest among optimal routes
based on our default cost model. The shorter route might not be the absolute
shortest route, since that option might be a poor alternative. For example, if
the absolute shortest route is 10 km and takes 50 minutes to navigate and
another route is 15 km, but only takes 20 minutes to navigate, the second choice
is optimal, because spending 30 mins to reduce five km isn't a good trade-off.
Once you set the routing strategy for a trip, it won't change until the trip
completes. To change the routing strategy for an existing trip, you must clear
the destinations and reset them again with the new routing strategy.
Note: This feature is intended for rideshare providers that operate in regulated
markets (such as Europe), who are often required by law to price their services
based on the same principles as traditional taxis—which charge based primarily
on the distance traveled.
Setting the routing strategy
You can configure the routing strategy by setting
RoutingOptions.routingStrategy when you call setDestinations() .
RoutingOptions.routingStrategy takes one of the following enumeration
values:
Enumeration Value Description
RoutingStrategy.DEFAULT_BEST
Ranks routes by the Navigation SDK's default cost model. This is the
default routing strategy.
RoutingStrategy.SHORTER
Ranks routes by distance. The highest ranking route is the shortest of
those returned.
Warning: This feature is incompatible with the
Hiding Alternate Route
feature. Using these two features at the same time will produce unexpected
results.
Example
The following code example demonstrates how to set the shorter route preference.
RoutingOptions routingOptions = new RoutingOptions();
routingOptions.routingStrategy(RoutingStrategy.SHORTER);
navigator.setDestinations(destinations, routingOptions, displayOptions);
Routes that include ferries
By default, the NavSDK excludes routes that include ferries. If
you prefer to include ferry options as part of your routes, you can adjust
this routing preference to expose the trip to ferry segments by setting
avoidFerries to false .
Example
RoutingOptions routingOptions = new RoutingOptions().avoidFerries(true);
// Add additional routing preferences
navigator.setDestination(destination, routingOptions);
The route callout format
Under the shorter route preference, callouts along the route display
distance details. But you can use the ETA callouts instead.
Configuring the route callout format
You can change the route callout format by calling setRouteCalloutInfoFormat
in NavigationView (or in NavigationFragment ). setRouteCalloutInfoFormat
takes one of the following enumeration values:
Enumeration Value Description
RouteCalloutInfoFormat.DEFAULT
Displays time remaining when using the default best route routing
strategy. Displays distance remaining when using the shorter route routing
strategy.
RouteCalloutInfoFormat.TIME
Displays time remaining.
RouteCalloutInfoFormat.DISTANCE
Displays distance remaining.
Example
The following code example demonstrates how to configure the route callout
format.
mNavFragment.setRouteCalloutInfoFormat(RouteCalloutInfoFormat.TIME);
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-02-18 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-02-18 UTC."],[],[]]
