---
title: "Calculate toll fees for a route matrix \_|\_ Routes API \_|\_ Google for Developers"
url: https://developers.google.com/maps/documentation/routes/calculate_toll-rm
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://developers.google.com/maps/documentation/routes/compute-route-over
source_metadata:
  url: https://developers.google.com/maps/documentation/routes/calculate_toll-rm
  title: "Calculate toll fees for a route matrix \_|\_ Routes API \_|\_ Google for\
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
Web Services
Routes API
Send feedback
Calculate toll fees for a route matrix
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
The Routes API's computeRouteMatrix method allows you to calculate estimated toll fees for routes in supported cities, providing cost insights for route planning.
To enable toll calculations, specify TOLLS in the extraComputations field and provide vehicle and toll pass details in the routeModifiers field within the request.
Toll prices are estimates and are influenced by factors like vehicle type and toll pass used, with the response including the estimated price in the specified currency.
While the Route Matrix provides toll information, detailed route specifics are not included; for that, use the Compute Routes functionality with single origin and destination points.
Be aware that requests including toll fee calculations are billed at a higher rate than standard route matrix requests.
European Economic Area (EEA) developers
If your billing address is in the European Economic Area, effective on 8 July 2025, the
Google Maps Platform EEA Terms of Service
will apply to your use of the Services. Functionality varies by region.
Learn more .
When you are computing a route matrix, you might want to take into consideration
any toll fees on the routes in the matrix. For select cities, you can compute
the estimated toll fee for a route in the appropriate currency.
To get tolls for a route, see
Calculate tolls fees for a route .
For the list of supported toll locations, see the reference for
TollPass .
Caution: Requests that calculate toll fees are billed at a higher rate.
Learn more about billing for the Routes API.
Route matrix toll example
The following example uses the
computeRouteMatrix
method to return toll information on a route with an estimated
price when a toll pass is used:
Set the extraComputations array field to TOLLS to enable the calculation
of toll information.
Specify the vehicle type and the toll pass type by using the
routeModifiers field of the origin waypoints of the request. The toll
price returned is based on the pricing used by the specified vehicle type
and pass. If more than one pass is specified, the least expensive pricing is
returned.
Use the response field mask to configure the method to
return toll information in the response. Specify
routes.travelAdvisory.tollInfo to return information for the entire route.
Note: Route matrix does not return detailed route information, such as the
legs, steps, and polylines of the route. To obtain detailed route information,
pass a single origin and single destination to Compute
Routes .
Request for a route matrix toll information
curl -X POST -d '{
"origins": [
{
"waypoint": {
"location": {
"latLng": {
"latitude":42.340173523716736,
"longitude":-71.05997968330408
}
}
},
"routeModifiers": {
"vehicleInfo":{
"emissionType": "GASOLINE"
},
"tollPasses": [
"US_MA_EZPASSMA",
"US_WA_GOOD_TO_GO"
]
}
}
],
"destinations": [
{
"waypoint": {
"location": {
"latLng": {
"latitude":42.075698891472804,
"longitude": -72.59806562080408
}
}
}
}
],
"travelMode": "DRIVE",
"extraComputations": ["TOLLS"]
}' \
-H 'Content-Type: application/json' \
-H 'X-Goog-Api-Key: YOUR_API_KEY ' \
-H 'X-Goog-FieldMask: originIndex,destinationIndex,travel_advisory.tollInfo,duration,distanceMeters,status' \
'https://routes.googleapis.com/distanceMatrix/v2:computeRouteMatrix'
Response for route matrix toll information
The response contains information on tolls in a
TollInfo (REST) or
TollInfo (gRPC) object.
To configure the method to return toll information, use the
response field mask to set the travelAdvisory.tollInfo field
in the mask.
[
{
"originIndex" : 0 ,
"destinationIndex" : 0 ,
"status" : {},
"distanceMeters" : 150338 ,
"duration" : "5382s" ,
"travelAdvisory" : {
"tollInfo" : {
"estimatedPrice" : [
{
"currencyCode" : "USD" ,
"units" : "4" ,
"nanos" : 400000000
}
]
}
}
}
]
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-09 UTC."],[],["To calculate toll fees for a route matrix, set the `extraComputations` field to `TOLLS`. Specify the vehicle type and toll pass using the `routeModifiers` field within the origin waypoints; the lowest-cost toll pass pricing will be applied if multiple passes are set. Use the response field mask with `routes.travelAdvisory.tollInfo` to include toll information, and note that toll fee requests have a higher billing rate. The response then contains `estimatedPrice`.\n"]]
