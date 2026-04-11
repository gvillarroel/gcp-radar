---
title: "Places API \_|\_ Google for Developers"
url: https://developers.google.com/maps/documentation/places/web-service/routing-summary-sar
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://developers.google.com/maps/documentation/places/web-service/op-overview
source_metadata:
  url: https://developers.google.com/maps/documentation/places/web-service/routing-summary-sar
  title: "Places API \_|\_ Google for Developers"
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
Guides
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
Use the Routes API to calculate a route that returns a route polyline
in the response.
Use the searchAlongRouteParameters.polyline.encodedPolyline parameter to
pass the route polyline to Text Search (New) to bias the search results to
the route. The response then contains places that match the search criteria
and are also located near the specified route.
Include routingSummaries in the field mask so that the response includes
the routingSummaries array. This array contains the duration and distance
from the routing origin to each place in the response.
Note: Adding routingSummaries in the field mask without also including
either the routingParameters.origin parameter or the
searchAlongRouteParameters.polyline.encodedPolyline parameter in the
request causes an error.
The APIs Explorer lets you make live requests so that you can get familiar with
the API and the API options:
Try it!
By default, Text Search (New) performs the search along the entire route:
curl -X POST -d '{
"textQuery" : "Spicy Vegetarian Food",
"searchAlongRouteParameters": {
"polyline": {
"encodedPolyline": " ROUTE_POLYLINE "
}
}
}' \
-H 'Content-Type: application/json' -H 'X-Goog-Api-Key: API_KEY ' \
-H 'X-Goog-FieldMask: places.displayName,places.formattedAddress,places.priceLevel, routingSummaries ' \
'https://places.googleapis.com/v1/places:searchText'
The response contains two arrays: the places array containing the matching
places, and the routingSummaries array containing the duration and distance to
travel to each place:
{
"places" : [
{
"formattedAddress" : "1199 El Camino Real, San Bruno, CA 94066, USA" ,
"priceLevel" : "PRICE_LEVEL_INEXPENSIVE" ,
"displayName" : {
"text" : "Vegan Mob - Vegan BBQ and Soul Food" ,
"languageCode" : "en"
}
},
{
"formattedAddress" : "839 Kearny St, San Francisco, CA 94108, USA" ,
"priceLevel" : "PRICE_LEVEL_MODERATE" ,
"displayName" : {
"text" : "Enjoy Vegetarian" ,
"languageCode" : "en"
}
},
…
],
"routingSummaries" : [
{
"legs" : [
{
"duration" : "285s" ,
"distanceMeters" : 1616
},
{
"duration" : "2466s" ,
"distanceMeters" : 58147
}
],
"directionsUri" : "https://www.google.com/maps/dir/37.42268,-122.08473/''/37.77877,-122.38781/data=!4m7!4m6!1m0!1m2!1m1!1s0x808f87f9ede375f5:0xa37171fea1a16b28!1m0!3e0"
},
{
"legs" : [
{
"duration" : "696s" ,
"distanceMeters" : 4704
},
{
"duration" : "2787s" ,
"distanceMeters" : 58901
}
],
"directionsUri" : "https://www.google.com/maps/dir/37.42268,-122.08473/''/37.77877,-122.38781/data=!4m7!4m6!1m0!1m2!1m1!1s0x808580f4cebdb06f:0xd3af09e5742234f2!1m0!3e0"
},
…
]
}
For each entry in the legs array, Text Search (New) returns a two-leg trip
time:
The first leg contains the travel duration and distance from the origin to
the place. In this example, the duration and distance from the origin to the
first place in the results is 285 seconds and 1616 meters.
The second leg contains the travel duration and distance from the place to
the route destination. In this example, the duration and distance is
2466 seconds and 58147 meters.
Note: This response also includes the Preview (pre-GA)
directionsUri field in the routing summary for each place. This field contains a link
to open directions to the place in Google Maps. The polyline origin or the
routingParameters.origin parameter specifies directions origin, the
polyline destination specifies the directions destination, and the travel mode is drive.
The directions start at the origin, proceed to the place as a waypoint, and end at the route
destination.
This product or feature is in Preview (pre-GA).
Pre-GA products and features might have limited support, and changes to pre-GA products and
features might not be compatible with other pre-GA versions. Pre-GA Offerings are covered by
the Google
Maps Platform Service Specific Terms . For more information, see the
launch stage
descriptions .
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
In the next example, you specify a routing origin as the coordinates of San
Mateo, CA, specify to avoid tolls, and set the number of results to 5:
curl -X POST -d '{
"textQuery" : "Spicy Vegetarian Food",
"maxResultCount": 5,
"searchAlongRouteParameters": {
"polyline": {
"encodedPolyline": " ROUTE_POLYLINE "
}
},
"routingParameters": {
"origin": {
"latitude": 37.56617,
"longitude": -122.30870
},
"travelMode":"DRIVE",
"routeModifiers": {
"avoidTolls": true
}
}
}' \
-H 'Content-Type: application/json' -H 'X-Goog-Api-Key: API_KEY ' \
-H 'X-Goog-FieldMask: places.displayName,places.formattedAddress,places.priceLevel, routingSummaries ' \
'https://places.googleapis.com/v1/places:searchText'
The following image shows a map that contains the route polyline, the new origin
(light-blue pin), and the places in the search results (green pins). Notice how
all the results are along the route, but past San Mateo:
Try it!
The APIs Explorer lets you make sample requests so
that you can get familiar with the API and the API options.
Select the API icon api
on the right side of the page.
Optionally edit the request parameters.
Select the Execute button. In the dialog, choose the account
that you want to use to make the request.
In the APIs Explorer panel, select the fullscreen icon
fullscreen to expand the APIs Explorer window.
Previous
arrow_back
Calculate routing summary
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-09 UTC."],[],[]]
