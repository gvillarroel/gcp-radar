---
title: "Compute Routes Overview \_|\_ Routes API \_|\_ Google for Developers"
url: https://developers.google.com/maps/documentation/routes/compute-route-over
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://developers.google.com/maps/documentation/routes/get-api-key
source_metadata:
  url: https://developers.google.com/maps/documentation/routes/compute-route-over
  title: "Compute Routes Overview \_|\_ Routes API \_|\_ Google for Developers"
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
Compute Routes Overview
Stay organized with collections
Save and categorize content based on your preferences.
European Economic Area (EEA) developers
If your billing address is in the European Economic Area, effective on 8 July 2025, the
Google Maps Platform EEA Terms of Service
will apply to your use of the Services. Functionality varies by region.
Learn more .
Introduction
Compute Routes is a method in the Routes API service that accepts
an HTTPS request and returns the ideal route between two locations.
Provide directions with real-time traffic for transit, biking, driving,
2-wheel motorized vehicles, or walking between multiple locations.
Need Route Matrixes? If you are interested in a route matrix, see
Compute Route Matrix Overview .
Migrating? If you are migrating from the Distance Matrix API (Legacy),
see migration instructions starting with
Why migrate to the Routes API .
Why use Compute Routes
With Compute Routes, with a wide
range of route details you can route your vehicles or packages according to
your preferences while optimizing for cost and quality.
What you can do with Compute Routes?
With the Routes API Compute Routes method, you can
do the following things:
Get directions for different ways to travel , and for a single or
multiple destinations:
Modes of transportation: transit, driving, two-wheel vehicles,
walking, or bicycling.
A series of waypoints that you can optimize for the most efficient
order in which to travel to them.
Use multiple ways to specify origins, destinations, and waypoints :
Text strings. For example: "Chicago, IL", "Darwin, NT, Australia", "1800
Amphitheatre Parkway, Mountain View, CA 94043", or "CWF6+FWX Mountain
View, California"
Place IDs
Latitude and longitude coordinates, optionally with vehicle heading
Fine-tune your route options based on your needs and goals:
Select fuel or energy-efficient routes for your vehicle's engine type:
Diesel, Electric, Hybrid, Gas. For more information, see
Get an eco-friendly route .
Set fine-grained options for traffic calculation, letting you make
quality versus latency trade off decisions. For details, see
Specify how and if to include traffic data .
Set vehicle heading (direction of travel) and side-of-road information
for waypoints to increase ETA accuracy. For details, see
Specify vehicle heading and side of road .
Specify pass-through versus terminal locations and safe stopover
locations. For details, see Set a stop along a route and
Set a point for a route to pass through .
Request toll information, along with route distance and ETA. For
details, see
Calculate toll fees for a route .
Control your latency and quality by requesting only the data you need
using a field mask, which helps you avoid unnecessary processing time and
higher request billing rates. For details, see
Choose what information to return .
How Compute Routes works
The Routes API ComputeRoutes method accepts an HTTP POST request with
a JSON request body that contains the request details. Required are an origin,
destination, travelMode , and a field mask to specify which fields to return.
Example
curl - X POST - d ' {
"origin" : {
"address" : "1800 Amphitheatre Parkway, Mountain View, CA 94043"
},
"destination" : {
"address" : "Sloat Blvd &, Upper Great Hwy, San Francisco, CA 94132"
},
"travelMode" : "DRIVE"
} ' \
- H 'Co ntent - Type : applica t io n /jso n ' - H 'X - Goog - Api - Key : YOUR_API_KEY ' \
- H 'X - Goog - FieldMask : rou tes .dura t io n , rou tes .dis tan ceMe ters ' \
'h tt ps : //routes.googleapis.com/directions/v2:computeRoutes'
The service then calculates the requested route, and returns the fields you've
requested.
Resources
The following table summarizes the resources available through the
Routes API Compute Routes method,
along with the data it returns.
Data resources
Data returned
Return format
ComputeRoutes
Returns routes, legs, and steps for a route, with alternate routes,
if requested.
JSON
How to use Compute Routes
1
Get set up
Start with Set up your Google Cloud project
and complete the setup instructions that follow.
2
Understand how the Routes API bills
For information, see Usage and billing .
3
Compute a route and review the response
For more information, see
Get a route and
Review the route responses .
Available client libraries
For a list of the available client libraries for
Compute Routes, see
Client libraries .
What's next
Get a route
Available route options
Choose what information to return
Migrate from Directions API (Legacy)
Migrate from the Routes API preview to GA
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-09 UTC."],[],[]]
