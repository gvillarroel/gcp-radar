---
title: "Get an eco-friendly route \_|\_ Routes API \_|\_ Google for Developers"
url: https://developers.google.com/maps/documentation/routes/eco-routes
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://developers.google.com/maps/documentation/routes/overview
source_metadata:
  url: https://developers.google.com/maps/documentation/routes/eco-routes
  title: "Get an eco-friendly route \_|\_ Routes API \_|\_ Google for Developers"
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
Get an eco-friendly route
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
The Routes API can provide eco-friendly routes optimized for lower fuel consumption based on vehicle engine type and real-time traffic conditions.
To request eco-friendly routes, set routingPreference to TRAFFIC_AWARE_OPTIMAL , travelMode to DRIVE , specify emissionType , and set requestedReferenceRoutes to FUEL_EFFICIENT .
Estimated fuel consumption for routes can be obtained by setting extraComputations to FUEL_CONSUMPTION and including routes.travelAdvisory.fuelConsumptionMicroliters in the response field mask.
Eco-friendly routing is currently supported in a limited number of countries, listed in the Supported Regions section.
Using the TRAFFIC_AWARE_OPTIMAL routing preference for eco-friendly routing and fuel consumption estimation incurs charges based on the Routes Advanced SKU.
European Economic Area (EEA) developers
If your billing address is in the European Economic Area, effective on 8 July 2025, the
Google Maps Platform EEA Terms of Service
will apply to your use of the Services. Functionality varies by region.
Learn more .
This product or feature is in Preview (pre-GA).
Pre-GA products and features might have limited support, and changes to pre-GA products and
features might not be compatible with other pre-GA versions. Pre-GA Offerings are covered by
the Google
Maps Platform Service Specific Terms . For more information, see the
launch stage
descriptions .
Note: Eco-friendly routes are not supported by the
Compute Route Matrix feature of the Routes API.
By default, the Routes API returns the default route, meaning a route
without factoring in fuel or energy-efficiency. When you enable eco-friendly
routing , you still get the default route in the response. In addition, you also
get back an eco-friendly route showing the most fuel- or energy-efficient route
based on your vehicle's engine type.
The eco-friendly route returned by the Routes API is optimized for
lower fuel consumption over the entire route. The API uses your vehicle's engine
type along with other factors such as real-time traffic and road conditions to
choose the eco-friendly route. The more fuel or energy-efficient the route, the
lower your car's fuel or energy usage and CO2 emissions.
For example, a diesel vehicle's relative fuel economy advantage is generally
greatest in highway driving. Hybrid and electric vehicles tend to provide
progressively greater efficiency in stop-and-go city driving and hilly driving
environments where they can extensively use and benefit from regenerative
braking.
You can also request that the API returns the estimated fuel consumption for
the entire route. Use the fuel consumption estimates as a way to compare
different routes, not as explicit fuel usage estimates for your exact vehicle.
Note: You can request fuel consumption estimates for any route, not just when
requesting an eco-friendly route.
How Google Maps estimates fuel efficiency
The Routes API estimates fuel-efficiency using insights from the US
Department of Energy's
National Renewable Energy Laboratory
and data from the European Environment Agency. This calculation includes factors
that affect your fuel and energy usage and CO2 emissions, such as:
Average fuel or energy consumption for vehicles in your region
Steepness of hills on your route
Stop-and-go traffic patterns
Types of roads (such as local roads or highways)
The Routes API returns the most fuel or energy-efficient route when it has
roughly the same arrival time as the default route. In cases where fuel or
energy savings are too small or increase driving time significantly, the API
shows relative fuel or energy savings between routes to help you compare.
Read more about eco-friendly routing technology (PDF) .
Prerequisites
To use eco-friendly routing or estimate fuel consumption:
You must specify TRAFFIC_AWARE_OPTIMAL as the routing preference. In this
mode, the server performs a more exhaustive search of the road network to
find the optimal route. For more information, see
Configure quality vs latency .
You must set travelMode to DRIVE or TWO_WHEELER . Requests for any
other travel mode return an error. Eco-friendly routing for TWO_WHEELER is
supported only in a few countries.
You must set a location for the origin waypoint in a
supported region . Otherwise, the API returns an error.
For TWO_WHEELER , you must set a location for the origin waypoint in a
two-wheeler supported region . Otherwise,
the API returns an error.
The route cannot contain an intermediate waypoint.
Billing
Typically, Google Maps Platform does not charge for the use of a Preview
feature. However, because eco-friendly routing and estimating fuel consumption
requires that you specify TRAFFIC_AWARE_OPTIMAL as the routing preference, you
are charged based on the SKU: Compute Routes Pro .
Learn more about billing for Routes API.
Request an eco-friendly route
To make a request to compute an eco-friendly route, set the following properties
in the request:
Specify emissionType for the vehicle using the values defined in
VehicleEmissionType :
DIESEL , GASOLINE , ELECTRIC , or HYBRID . The default value is
GASOLINE .
Set requestedReferenceRoutes to FUEL_EFFICIENT .
Set a response field mask that specifies to return the response properties
associated with an eco-friendly route:
routes.routeLabels: Identifies each route as either DEFAULT_ROUTE ,
FUEL_EFFICIENT , or DEFAULT_ROUTE_ALTERNATE .
routes.routeToken: A route token that you can pass to the
Navigation SDK to retrieve a
custom route.
Example eco-friendly request
The following code shows a request for an eco-friendly route. In this example,
you use the response field mask to return response properties associated with an
eco-friendly route along with the routes.distanceMeters and
routes.duration properties:
curl - X POST - H 'co ntent - t ype : applica t io n /jso n ' - d ' {
"origin" : {
"location" : {
"latLng" : {
"latitude" : 41.76904801292959 ,
"longitude" : -72.67374935684933
}
}
},
"destination" : {
"location" : {
"latLng" : {
"latitude" : 41.823042361105024 ,
"longitude" : -71.40933143059424
}
}
},
"routeModifiers" : {
"vehicleInfo" : {
"emissionType" : "GASOLINE"
}
},
"travelMode" : "DRIVE" ,
"routingPreference" : "TRAFFIC_AWARE_OPTIMAL" ,
"requestedReferenceRoutes" : [ "FUEL_EFFICIENT" ]
} ' \
- H 'Co ntent - Type : applica t io n /jso n ' - H 'X - Goog - Api - Key : YOUR_API_KEY ' \
- H 'X - Goog - FieldMask : rou tes .dis tan ceMe ters , rou tes .dura t io n , rou tes .rou te Labels , rou tes .rou te Toke n ' \
'h tt ps : //routes.googleapis.com/directions/v2:computeRoutes'
Example eco-friendly response
The computeRoutes call above generates a JSON response that contains
two routes: the default route and the fuel efficient route. In the response:
For the default route, the routeLabels array property contains
DEFAULT_ROUTE .
For the eco-friendly route, the routeLabels array property contains
FUEL_EFFICIENT .
If you set computeAlternativeRoutes in the request to true to calculate
alternate routes , the routeLabels array property
contains DEFAULT_ROUTE_ALTERNATE .
{
"routes" : [
{
"distanceMeters" : 138939 ,
"duration" : "5412s" ,
"routeToken" : "CoYJCpoIC…0n9S1cu" ,
"routeLabels" : [
"DEFAULT_ROUTE"
]
},
{
"distanceMeters" : 116887 ,
"duration" : "5631s" ,
"routeToken" : "CuEHCu0G…xqm" ,
"routeLabels" : [
"FUEL_EFFICIENT"
]
}
]
}
Because of current driving conditions and other factors, the default route and
the eco-friendly route can be the same. In this case, routeLabels contains
both labels: DEFAULT_ROUTE and FUEL_EFFICIENT :
{
"routes" : [
{
"distanceMeters" : 45875 ,
"duration" : "2655s" ,
"routeToken" : "CvcDCos…6I40" ,
"routeLabels" : [
"DEFAULT_ROUTE" ,
"FUEL_EFFICIENT"
]
}
]
}
Estimate fuel usage for the route
You can request the method to return the estimated fuel usage for the entire
route, in microliters. To add the estimated fuel usage for a route to the
response:
Set the extraComputations array field to FUEL_CONSUMPTION to enable the
fuel usage calculation.
Specify emissionType for the vehicle using the values defined in
VehicleEmissionType :
DIESEL , GASOLINE , ELECTRIC , or HYBRID . The default value is
GASOLINE .
If the emissionType is HYBRID , the API converts electricity and fuel
consumption to microliters of fuel.
If the emissionType is ELECTRIC , the API converts electricity
consumption to microliters of fuel.
Set a response field mask that specifies to return the response properties
associated with fuel usage:
routes.travelAdvisory.fuelConsumptionMicroliters .
The following example requests estimated fuel usage as part of a request that
also includes the eco-friendly route:
Note: You do not have to request an eco-friendly route to estimate fuel
consumption. For example, you could request fuel consumption when requesting
just the default route, or when requesting alternative routes.
curl - X POST - H 'co ntent - t ype : applica t io n /jso n ' - d ' {
"origin" : {
"location" : {
"latLng" : {
"latitude" : 41.76904801292959 ,
"longitude" : -72.67374935684933
}
}
},
"destination" : {
"location" : {
"latLng" : {
"latitude" : 41.823042361105024 ,
"longitude" : -71.40933143059424
}
}
},
"routeModifiers" : {
"vehicleInfo" : {
"emissionType" : "GASOLINE"
}
},
"travelMode" : "DRIVE" ,
"routingPreference" : "TRAFFIC_AWARE_OPTIMAL" ,
"extraComputations" : [ "FUEL_CONSUMPTION" ],
"requestedReferenceRoutes" : [ "FUEL_EFFICIENT" ]
} ' \
- H 'Co ntent - Type : applica t io n /jso n ' - H 'X - Goog - Api - Key : YOUR_API_KEY ' \
- H 'X - Goog - FieldMask : rou tes .dis tan ceMe ters , rou tes .dura t io n , rou tes .rou te Labels , rou tes .rou te Toke n , rou tes . tra velAdvisory. fuel Co nsu mp t io n Microli ters ' \
'h tt ps : //routes.googleapis.com/directions/v2:computeRoutes'
The response contains the estimated fuel consumption for both the default route
and for the eco-friendly route:
{
"routes" : [
{
"distanceMeters" : 138939 ,
"duration" : "5412s" ,
"travelAdvisory" : {
"fuelConsumptionMicroliters" : "11019554"
},
"routeToken" : "CoYJCpoIC…0n9S1cu" ,
"routeLabels" : [
"DEFAULT_ROUTE"
]
},
{
"distanceMeters" : 116887 ,
"duration" : "5631s" ,
"travelAdvisory" : {
"fuelConsumptionMicroliters" : "9572436"
},
"routeToken" : "CuEHCu0G…xqm" ,
"routeLabels" : [
"FUEL_EFFICIENT"
]
}
]
}
Supported regions
The Google Maps Platform team is constantly working to improve international
coverage for our API services. The following list shows the latest coverage
details, on a country-by-country basis, for eco-friendly routing:
Albania (AL)
Australia (AU)
Austria (AT)
Belgium (BE)
Bosnia and Herzegovina (BA)
Bulgaria (BG)
Canada (CA)
Croatia (HR)
Cyprus (CY)
Czechia (CZ)
Denmark (DK)
Egypt (EG)
Estonia (EE)
Finland (FI)
France (FR)
Germany (DE)
Greece (GR)
Hungary (HU)
Iceland (IS)
India (IN)
Indonesia (ID)
Ireland (IE)
Italy (IT)
Kosovo (XK)
Latvia (LV)
Liechtenstein (LI)
Lithuania (LT)
Luxembourg (LU)
Malta (MT)
Mexico (MX)
Montenegro (ME)
Netherlands (NL)
North Macedonia (MK)
Norway (NO)
Poland (PL)
Portugal (PT)
Romania (RO)
Saudi Arabia (SA)
Serbia (RS)
Slovakia (SK)
Slovenia (SI)
Spain (ES)
Sweden (SE)
Switzerland (CH)
Turkey (TR)
United Arab Emirates (AE)
United Kingdom (GB)
United States (US)
Two-wheeler supported regions
The following list shows the latest coverage details, on a country-by-country
basis, for eco-friendly routing of two-wheelers:
India (IN)
Indonesia (ID)
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-09 UTC."],[],["The Routes API can calculate eco-friendly routes and estimate fuel consumption. To use this, set the routing preference to `TRAFFIC_AWARE_OPTIMAL`, travel mode to `DRIVE`, and specify the vehicle's `emissionType`. Set `requestedReferenceRoutes` to `FUEL_EFFICIENT` for eco-friendly routing, which returns the most fuel-efficient route alongside the default one, or set `extraComputations` to `FUEL_CONSUMPTION` for estimated fuel usage. The API considers factors like traffic and road conditions, and returns route labels such as `FUEL_EFFICIENT` or `DEFAULT_ROUTE` and estimated fuel consumption in microliters. This feature is available in specific regions.\n"]]
