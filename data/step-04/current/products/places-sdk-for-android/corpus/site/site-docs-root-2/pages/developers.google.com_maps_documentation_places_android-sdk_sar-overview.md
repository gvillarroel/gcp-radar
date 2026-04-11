---
title: "Places SDK for Android \_|\_ Google for Developers"
url: https://developers.google.com/maps/documentation/places/android-sdk/sar-overview
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://developers.google.com/maps/documentation/places/android-sdk/overview
source_metadata:
  url: https://developers.google.com/maps/documentation/places/android-sdk/sar-overview
  title: "Places SDK for Android \_|\_ Google for Developers"
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
Places SDK for Android
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Overview of search along route
Search along route features are available in the following Places (New) APIs:
Text Search (New) only: Search for places along a predefined trip
route.
Text Search (New) and Nearby Search (New): Calculate the routing
summary from a specified routing origin location to each place in the search
results.
Text Search (New) only: Calculate the routing summary for each place
along a predefined trip route.
Search along a route
You use the Routes API to calculate the trip route
between two locations. The Routes API can calculate a route for a car, bicycle,
two-wheel vehicle, transit system, or for walking.
Note: Transit system routes are not supported by the Places API.
Text Search (New) lets you use this calculated route to perform a
search along a route . With this option, you pass the precalculated route
from the Routes API to the Text Search (New) request. The response then contains
places that match the search criteria and are also located near the specified
route.
Searching along a route is similar to using the locationRestriction or
locationBias request options to bias the search results. locationRestriction
returns search results that fall within the viewport bounds, while
locationBias may return search results outside of the viewport. However, while
the locationBias and locationRestriction options let you specify a region to
bias the search results, the search along route feature in Text Search also lets
you bias the search results to include those with minimal detour times from the
route origin to the route destination. You can bias search results using either
locationBias or locationRestriction in combination with the polyline.
For example, consider the route from the origin, referred to as a
waypoint in the Routes API, to the destination as calculated by the Routes
API:
When you search along the route, the search is biased to return places near the
route with minimal detour times from the origin to the destination. In this
example, points A, B, and C are places returned by the search.
Calculate routing summary
Text Search (New) and Nearby Search (New) can
calculate the routing summary , meaning the duration and distance, to each
place in the response based on the specified routing origin location in the
request. When you specify the routing origin, the response not only contains a
list of places that match the search, but also the travel duration and distance
from the routing origin to each place.
In the following image, points A, B, and C are places returned in the search
response:
For each place in the results, the response contains the travel duration and
distance from the routing origin to the place, if available.
Note: This is only an estimate of the routing information. To get the actual
route details, including step-by-step directions, use the Routes
API .
By default, the travel duration and distance is calculated using the TRAFFIC_UNAWARE
option in the Routes API. You can optionally set routing preferences to take
live traffic conditions TRAFFIC_AWARE_OPTIMAL
or latency-reduced live traffic conditions TRAFFIC_AWARE
into consideration during calculations.
Note: TRAFFIC_AWARE and TRAFFIC_OPTIMAL only apply to
the DRIVE and TWO_WHEELER travel modes. If either routing preference is
specified with an unsupported travel mode, the routing summary calculation defaults to using the
TRAFFIC_UNAWARE option. If TWO_WHEELER is specified in an
unsupported region , the API returns an
empty routing summary.
When you set the
TRAFFIC_AWARE
routing preference, routes are calculated accounting for traffic conditions. As
a result, the route and route details more accurately reflect real-world
conditions. Since this increase in data quality comes at the expense of response
latency, performance optimizations are applied to reduce much of the latency. When you set the
TRAFFIC_AWARE_OPTIMAL
routing preference, routes are calculated accounting for traffic conditions, but
no performance optimizations are applied. In this mode, the server performs a
more exhaustive search of the road network to find the optimal route.
About routes, legs, and waypoints
Several components make up a route, as calculated by the Routes API:
A route consists of the following components:
Waypoint : To calculate a route, you specify at a minimum the locations
of the origin and destination. You define these locations as waypoints on
the route. Intermediate waypoints are locations in between the origin and
destination that you want the route to go through.
Route : The entire trip from the origin waypoint, through any
intermediate waypoints, to the destination waypoint. A route consists of one
or more legs .
When passing a route to Text Search, you pass the route's encoded
polyline as returned by the Routes API . An encoded
polyline is an encoded list of latitude and longitude points that lets you represent the
route's polyline as a string.
Leg : The path from one waypoint in a route to the next waypoint in the
route. Each leg consists of one or more discrete steps .
A route contains a separate leg for the path from each waypoint to the next.
For example, if the route contains a single origin waypoint and a single
destination waypoint, then the route contains a single leg.
For each additional waypoint you add to the route after the origin and
destination, called an intermediate waypoint, the API adds a separate leg.
For more information on routes and calculating routes, see the Routes
API .
Calculate the routing summary with a search along route
You can combine routing summary calculations with search along a route .
In this case, Text Search (New) returns the travel duration and
distance to each place in the response, and then from each place to the final
destination of the route. Think of this calculation as providing a travel
duration and distance if you detour from the specified route to travel to a
place in the search results, and then continue on to the final destination.
For example, consider the following route from the origin to the destination as
calculated by the Routes API. Pass this route to the Text Search (New) API along
with your search criteria.
In this example, location A is a place returned in the search results from
Text Search (New). For each place in the response, the search includes the duration
and distance required to detour to that place as a two-leg trip :
The first leg contains the travel duration and distance from the route
origin to the place . In this example, from the origin to
place A.
The second leg contains the travel duration and distance from the
place to the route destination . In this example, from A to the
destination.
From the information in the response, you can then calculate the detour
duration and distance , where:
\(t_{OD}\) is the trip duration from the origin to the destination,
\(s_{OD}\) is the trip distance from the origin to the destination
\(t_{OA}\) is the trip duration from the origin to A; \(s_{OA}\) is
the trip distance from the origin to A
\(t_{AD}\) is the trip duration from A to the destination;
\(s_{AD}\) is the trip distance from A to the destination
Detour duration is the duration difference between the original trip
(from the origin to the destination) and the new trip (from the origin to
the destination through A):
$$
t_{detour} = t_{OA} + t_{AD} - t_{OD}
$$
Detour distance is the distance difference between the original trip
(from the origin to the destination) and the new trip (from the origin to
the destination through A):
$$
s_{detour} = s_{OA} + s_{AD} - s_{OD}
$$
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-09 UTC."],[],[]]
