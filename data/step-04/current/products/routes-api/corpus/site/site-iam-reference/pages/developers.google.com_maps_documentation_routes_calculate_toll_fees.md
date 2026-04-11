---
title: "Calculate toll fees for a route \_|\_ Routes API \_|\_ Google for Developers"
url: https://developers.google.com/maps/documentation/routes/calculate_toll_fees
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://developers.google.com/maps/documentation/routes/get-api-key
source_metadata:
  url: https://developers.google.com/maps/documentation/routes/calculate_toll_fees
  title: "Calculate toll fees for a route \_|\_ Routes API \_|\_ Google for Developers"
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
Calculate toll fees for a route
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
The Routes API can calculate estimated toll fees for routes in select cities, taking into account toll discounts, passes, and payment methods.
To get accurate toll estimates, specify the vehicle's emission type, any applicable toll passes, and whether to avoid tolls using RouteModifiers.
Toll pass usage can result in lower rates or may be required for certain roads, with the API attempting to calculate prices based on provided passes.
Requests calculating tolls are billed at a higher rate, and the returned estimatedPrice applies to non-commercial vehicles, potentially differing for commercial ones.
Toll information can be obtained by setting extraComputations to TOLLS , specifying vehicle and toll pass details in routeModifiers , and using a response field mask to include tollInfo in the output.
European Economic Area (EEA) developers
If your billing address is in the European Economic Area, effective on 8 July 2025, the
Google Maps Platform EEA Terms of Service
will apply to your use of the Services. Functionality varies by region.
Learn more .
When you are computing a route or a route matrix,
you might want to take into consideration any toll fees on the route.
For select cities, you can compute the estimated
toll fee for a route in the appropriate currency.
To get tolls for a route matrix, see
Calculate tolls fees for a route matrix .
For the list of supported toll locations, see the reference for
TollPass .
Caution: Requests that calculate toll fees are billed at a higher rate.
Learn more about billing for the Routes API.
How tolls are calculated
The Routes API calculates the estimated toll fee,
taking into consideration any toll price discounts or passes available
to the driver or vehicle, and the most convenient payment methods.
If there is no available toll price for a given route,
the Routes API indicates the existence of a toll
with an unknown fee.
Note : The Routes API calculates
tolls on a route differently than Google Maps:
The Routes API returns only the toll prices (pass or cash) that
would actually be charged for the trip, assuming your request accurately
represents what types of passes each driver and/or vehicle has. If you
don't specify any toll passes, the API returns the cash prices, which is
usually the highest toll.
Google Maps typically returns the cheapest possible price for a vehicle.
Users cannot specify which toll passes they have; instead, to see cash tolls, users
can disable the See toll pass prices option, which is
enabled by default.
To get accurate toll estimates, make sure you include the following information
in your request:
The emission type of the vehicle used for the route
( VehicleEmissionType ).
If no emission type is provided, the toll for a gasoline-fueled vehicle is
returned.
All toll passes the vehicle and driver have using
( TollPass ). The API uses
the toll passes to determine accurate toll fees, and returns cash prices
when toll passes in the request are not local to the route.
Specify avoid tolls, if needed . If you want to avoid toll roads where
possible, add avoidTolls as a RouteModifier .
Calculate tolls using a toll pass
To calculate tolls using a toll pass, you specify any toll passes as part of
the request. The API then returns pass prices.
If you specify an invalid toll pass, the pass is ignored.
If specify multiple toll passes as an array, the API attempts to
calculate the price for the route for each pass.
Note: You can only specify a toll pass for the DRIVE and TWO_WHEELER travel
modes.
The way toll passes behave can vary by region.
Rates may be lower with a toll pass : In some regions, a driver or vehicle
with a toll pass pays a different toll than those who don't have a pass.
For example, if you have a
Good To Go!
toll pass in Seattle, WA, US, you pay a lower toll than if you don't have a
pass.
Some roads may require a toll pass : Some regions, such as Indonesia, have
roads that require a toll pass. If you don't specify a toll pass for a
route where a toll pass is required, the API does not return a toll price.
Calculate toll fees for a route
The following example uses the
computeRoutes
method to return toll information with an estimated
price when a toll pass is used. In this example, you:
Set the extraComputations array field to TOLLS to enable the calculation
of toll information.
Specify the vehicle type and the toll pass type by using the
routeModifiers field of the request. The toll price returned is based on
the pricing used by the specified vehicle type and pass. If more than one
pass is specified, the least expensive pricing is returned.
Use the response field mask to configure the method to
return toll information in the response. In this example, the request
included the following properties in the response field mask:
routes.travelAdvisory.tollInfo field to return information for the
entire route.
routes.legs.travelAdvisory.tollInfo to return information
for each leg.
Note: This route contains only one leg.
Request for toll information
curl -X POST -d '{
"origin":{
"location":{
"latLng":{
"latitude":42.340173523716736,
"longitude":-71.05997968330408
}
}
},
"destination":{
"location":{
"latLng":{
"latitude":42.075698891472804,
"longitude": -72.59806562080408
}
}
},
"travelMode": "DRIVE",
"extraComputations": ["TOLLS"],
"routeModifiers":{
"vehicleInfo":{
"emissionType": "GASOLINE"
},
"tollPasses": [
"US_MA_EZPASSMA",
"US_WA_GOOD_TO_GO"
]
}
}' \
-H 'Content-Type: application/json' \
-H 'X-Goog-Api-Key: YOUR_API_KEY ' \
-H 'X-Goog-FieldMask: routes.duration,routes.distanceMeters, routes.travelAdvisory.tollInfo,routes.legs.travelAdvisory.tollInfo ' \
'https://routes.googleapis.com/directions/v2:computeRoutes'
Response containing toll information
The response contains information on tolls in a
TollInfo (REST) or
TollInfo (gRPC) object. In this
example, you return toll information for the entire route and for each leg of
the route.
Note : The Routes API provides an
estimatedPrice that applies to non-commercial vehicles.
Toll prices may be different for commercial vehicles.
The units and nanos are omitted when their value is zero.
{
"routes" : [
{
"legs" : [
{
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
],
"distanceMeters" : 150338 ,
"duration" : "6650s" ,
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
}
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-09 UTC."],[],["The Routes API can compute estimated toll fees for routes, considering toll discounts and payment methods. Accurate toll calculations require specifying vehicle emission type and applicable toll passes. The API returns cash prices if no passes are specified. Toll passes can offer lower rates or be mandatory in some regions. To get toll information, include \"TOLLS\" in `extraComputations` and specify toll passes in `routeModifiers`. The API then returns the toll prices in the response, which may vary by the requested toll passes.\n"]]
