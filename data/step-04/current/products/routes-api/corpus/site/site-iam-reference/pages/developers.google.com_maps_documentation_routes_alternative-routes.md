---
title: "Get alternative routes \_|\_ Routes API \_|\_ Google for Developers"
url: https://developers.google.com/maps/documentation/routes/alternative-routes
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://developers.google.com/maps/documentation/routes/get-api-key
source_metadata:
  url: https://developers.google.com/maps/documentation/routes/alternative-routes
  title: "Get alternative routes \_|\_ Routes API \_|\_ Google for Developers"
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
Send feedback
Get alternative routes
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
The Routes API can return up to three alternative routes in addition to the default route, allowing users to choose the best option for their needs.
Alternative routes can only be requested for routes without intermediate waypoints and may increase API response time.
The response identifies routes using routeLabels : DEFAULT_ROUTE for the default route and DEFAULT_ROUTE_ALTERNATE for alternative routes.
You can include polylines in the response to display routes on a map by adding routes.polyline to the field mask.
European Economic Area (EEA) developers
If your billing address is in the European Economic Area, effective on 8 July 2025, the
Google Maps Platform EEA Terms of Service
will apply to your use of the Services. Functionality varies by region.
Learn more .
Note: Alternative routes are not supported by the
Compute Route Matrix feature of the Routes API.
By default, the Routes API returns the default route, which is typically
the fastest route from the origin to the destination. When you request
alternative routes, the API returns up to three routes along with the default
route. Your customers can then choose a route that best fits their requirements.
Considerations when requesting alternative routes
To request alternative routes, be aware of the following considerations:
The response contains a maximum of three alternative routes. However,
sometimes no alternative routes are available so the response only contains
the default route.
Because of the additional processing required to calculate alternative
routes, requesting alternative routes might increase the response time of
the API.
Example alternative routes request
Set computeAlternativeRoutes to true to request alternative routes. The
following example shows how to request alternative routes in a
computeRoutes
method (REST) request.
curl - X POST - d ' {
"origin" :{
"location" :{
"latLng" :{
"latitude" : 42.340173523716736 ,
"longitude" : -71.05997968330408
}
}
},
"destination" :{
"location" :{
"latLng" :{
"latitude" : 42.075698891472804 ,
"longitude" : -72.59806562080408
}
}
},
"travelMode" : "DRIVE" ,
"routingPreference" : "TRAFFIC_AWARE" ,
"computeAlternativeRoutes" : true
} ' \
- H 'Co ntent - Type : applica t io n /jso n ' - H 'X - Goog - Api - Key : YOUR_API_KEY ' \
- H 'X - Goog - FieldMask : rou tes .dura t io n , rou tes .dis tan ceMe ters , rou tes .rou te Labels' \
'h tt ps : //routes.googleapis.com/directions/v2:computeRoutes'
In this example, you specify a field mask so that the response contains only the
duration , distanceMeters, and routeLabels properties for each route. Your
customer can then use that information to choose which route to take. For more
information, see Choose what information to return .
Example alternative routes response
In the response, use the routeLabels array property to identify reach
route:
For the default route, the routeLabels property contains
DEFAULT_ROUTE .
For any alternate routes, the routeLabels property contains
DEFAULT_ROUTE_ALTERNATE .
Note: You can also request an eco-friendly route by setting the
requestedReferenceRoutes property to FUEL_EFFICIENT in the request. For the
eco-friendly route, the routeLabels property contains FUEL_EFFICIENT . For
more on eco-friendly routing, see
Get eco-friendly routes .
In this example, the response contains the default route and two alternative
routes. Notice that the values of the duration and distanceMeters properties
are different for each route:
{
"routes" : [
{
"distanceMeters" : 150322 ,
"duration" : "5309s" ,
"routeLabels" : [
"DEFAULT_ROUTE"
]
},
{
"distanceMeters" : 157614 ,
"duration" : "6879s" ,
"routeLabels" : [
"DEFAULT_ROUTE_ALTERNATE"
]
},
{
"distanceMeters" : 189311 ,
"duration" : "7376s" ,
"routeLabels" : [
"DEFAULT_ROUTE_ALTERNATE"
]
}
]
}
Include polylines in the response
To make it easier for the user to select the route, add the
polyline for each route to the response. You can then
display each polyline on a map.
To add the polyline, include routes.polyline in the field mask:
- H 'X - Goog - FieldMask : rou tes .dura t io n , rou tes .dis tan ceMe ters , rou tes .rou te Labels , rou tes .polyli ne '
The response then contains the polyline for each route:
{
"routes" : [
{
"distanceMeters" : 150322 ,
"duration" : "5309s" ,
"polyline" : {
"encodedPolyline" : "mrlaGtavpLPLBTm…PgA^qC"
},
"routeLabels" : [
"DEFAULT_ROUTE"
]
},
{
"distanceMeters" : 157614 ,
"duration" : "6879s" ,
"polyline" : {
"encodedPolyline" : "DmEd`@e@pCo@pCs@z…PgA^qC"
},
"routeLabels" : [
"DEFAULT_ROUTE_ALTERNATE"
]
},
{
"distanceMeters" : 189311 ,
"duration" : "7376s" ,
"polyline" : {
"encodedPolyline" : "FVLL|Af@HPAV…PgA^qC"
},
"routeLabels" : [
"DEFAULT_ROUTE_ALTERNATE"
]
}
]
}
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-09 UTC."],[],["The Routes API can compute alternative routes by setting `computeAlternativeRoutes` to `true`. It returns up to three alternative routes, besides the default fastest route, for requests without intermediate waypoints. Alternative routes may increase response time and aren't always available. Each route's `routeLabels` array indicates if it's the default (`DEFAULT_ROUTE`) or an alternative (`DEFAULT_ROUTE_ALTERNATE`). You can include route polylines by adding `routes.polyline` in the field mask, enabling visual display on a map.\n"]]
