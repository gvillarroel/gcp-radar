---
title: "Places API \_|\_ Google for Developers"
url: https://developers.google.com/maps/documentation/places/web-service/routing-summary
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://developers.google.com/maps/documentation/places/web-service/release-notes
source_metadata:
  url: https://developers.google.com/maps/documentation/places/web-service/routing-summary
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
Calculate routing summary
To use Text Search (New) or Nearby Search (New)
to calculate the travel duration and distance to each place in the response:
Pass the routingParameters.origin parameter in the request to specify the
latitude and longitude coordinates of the routing origin. This parameter is
required to calculate the duration and distance to each place in the
response.
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
Use Text Search (New)
In the following request, you calculate the travel duration and distance to each
place in the Text Search (New) response:
curl -X POST -d '{
"textQuery" : "Spicy Vegetarian Food in Sydney, Australia",
"routingParameters": {
"origin": {
"latitude": -33.8688,
"longitude": 151.1957362
}
}
}' \
-H 'Content-Type: application/json' -H 'X-Goog-Api-Key: API_KEY ' \
-H 'X-Goog-FieldMask: places.displayName,places.formattedAddress,places.priceLevel, routingSummaries ' \
'https://places.googleapis.com/v1/places:searchText'
The response contains two JSON arrays: the places array contains the matching
places, and the routingSummaries array containing the duration and distance to
travel to each place:
{
"places" : [
{
object ( Place )
}
]
"routingSummaries" : [
{
object ( RoutingSummary )
}
}
Each element in the routingSummaries array is at the corresponding array
location as the place in the places array. That is, the element at
routingSummaries[0] corresponds to the place at places[0] .
The array length of routingSummaries is the same as the array length of
places . In the case where the routingSummary for a place is not available,
the array entry is empty.
Because this example calculates the duration and distance from the routing
origin to each place, the routingSummaries.legs field in the response contains a single
Leg object that contains the duration and distanceMeters from
the routing origin to the place.
Note: This response also includes the Preview (pre-GA)
directionsUri field in the routing summary for each place. This field contains a link
to open directions to the place in Google Maps. The routingParameters.origin
parameter is used as the directions origin, the place location is used as the destination, and the
travel mode defaults to drive.
This product or feature is in Preview (pre-GA).
Pre-GA products and features might have limited support, and changes to pre-GA products and
features might not be compatible with other pre-GA versions. Pre-GA Offerings are covered by
the Google
Maps Platform Service Specific Terms . For more information, see the
launch stage
descriptions .
{
"places" : [
{
"formattedAddress" : "1, Westfield Sydney Central Plaza, 450 George St, Sydney NSW 2000, Australia" ,
"displayName" : {
"text" : "Gözleme King Sydney" ,
"languageCode" : "en"
}
},
{
"formattedAddress" : "367 Pitt St, Sydney NSW 2000, Australia" ,
"priceLevel" : "PRICE_LEVEL_MODERATE" ,
"displayName" : {
"text" : "Mother Chu's Vegetarian Kitchen" ,
"languageCode" : "en"
}
},
…
]
"routingSummaries" : [
{
"legs" : [
{
"duration" : "597s" ,
"distanceMeters" : 2607
}
],
"directionsUri" : "https://www.google.com/maps/dir/-33.8688,151.1957362/''/data=!4m6!4m5!1m0!1m2!1m1!1s0x6b12ae3fa97cd745:0x6aecf365bf497c08!3e0"
},
{
"legs" : [
{
"duration" : "562s" ,
"distanceMeters" : 2345
}
],
"directionsUri" : "https://www.google.com/maps/dir/-33.8688,151.1957362/''/data=!4m6!4m5!1m0!1m2!1m1!1s0x6b12ae3da97f60c1:0x845f3273bd764f6c!3e0"
},
…
]
}
From this example, you can see that the duration and distance from the routing
origin to the first place in the results is 597 seconds and 2607 meters.
Use Nearby Search
In this example, you calculate the travel duration and distance to each place in
the Nearby Search response. This example searches for restaurants in Sydney,
Australia and sets the location restriction and the routing origin to the same
latitude and longitude coordinate:
curl -X POST -d '{
"includedTypes": ["restaurant"],
"maxResultCount": 10,
"locationRestriction": {
"circle": {
"center": {
"latitude": -33.8688,
"longitude": 151.1957362},
"radius": 500.0
}
},
"routingParameters": {
"origin": {
"latitude": -33.8688,
"longitude": 151.1957362
}
}
}' \
-H 'Content-Type: application/json' -H "X-Goog-Api-Key: API_KEY " \
-H "X-Goog-FieldMask: places.displayName, routingSummaries " \
https://places.googleapis.com/v1/places:searchNearby
You don't have to use the same coordinates for the locationRestriction and the
for routing origin. For example, you set the locationRestriction to the center
point of Sydney to bias the search results to that circle. But you then set the
routing origin to the coordinates of your house, meaning to a different location
within the search circle. The request then biases the search results to the
circle, and calculates the routing summaries based on the location of your
house.
Specify travel options
By default, the duration and distance calculations are for a car. However, you
can control the vehicle type, as well as other options, in the search.
Use the routingParameters.travelMode parameter to set the mode of
transportation to DRIVE , BICYCLE , WALK , or TWO_WHEELER . For more
information on these options, see Available vehicle types for
routes .
Note: The Routes API also supports a mode of TRANSIT , but that mode is not
supported by the Places API.
Note: The TWO_WHEELER option is only supported in those countries listed
at Countries and regions supported for two-wheeled
vehicles .
Use the routingParameters.routingPreference property to set the routing
preference option to TRAFFIC_UNAWARE (default), TRAFFIC_AWARE , or
TRAFFIC_AWARE_OPTIMAL . Each option has varying levels of data quality and
latency. For more information, see Specify how and if to include traffic
data .
The routingParameters.routingPreference property does affect the
directions contained in the Preview (Pre-GA) directionsUri field because
Google Maps displays traffic options when it opens the link.
Use the routingParameters.routeModifiers property to specify to
avoidTolls , avoidHighways , avoidFerries , and avoidIndoor . For more
information on these options, see Specify route features to
avoid .
In the next example, you specify the travel mode as DRIVE and to avoid
highways:
curl -X POST -d '{
"textQuery" : "Spicy Vegetarian Food in Sydney, Australia",
"routingParameters": {
"origin": {
"latitude": -33.8688,
"longitude": 151.1957362
},
"travelMode":"DRIVE",
"routeModifiers": {
"avoidHighways": true
}
}
}' \
-H 'Content-Type: application/json' -H 'X-Goog-Api-Key: API_KEY ' \
-H 'X-Goog-FieldMask: places.displayName,places.formattedAddress,places.priceLevel, routingSummaries ' \
'https://places.googleapis.com/v1/places:searchText'
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
Search along route
Next
Combine routing summary with search along route
arrow_forward
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-13 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-13 UTC."],[],[]]
