---
title: "Compute Route Matrix Overview \_|\_ Routes API \_|\_ Google for Developers"
url: https://developers.google.com/maps/documentation/routes/compute-route-matrix-over
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://developers.google.com/maps/documentation/routes/get-api-key
source_metadata:
  url: https://developers.google.com/maps/documentation/routes/compute-route-matrix-over
  title: "Compute Route Matrix Overview \_|\_ Routes API \_|\_ Google for Developers"
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
Compute Route Matrix Overview
Stay organized with collections
Save and categorize content based on your preferences.
European Economic Area (EEA) developers
If your billing address is in the European Economic Area, effective on 8 July 2025, the
Google Maps Platform EEA Terms of Service
will apply to your use of the Services. Functionality varies by region.
Learn more .
Compute Route Matrix is a method in the Routes API service that accepts
an HTTPS request and returns distances and travel times for a matrix of routes
between different origin and destination locations. Calculate travel times and
distances for multiple destinations for up to 625 route elements.
Need Driving Routes? If you are interested in route directions, see
Compute Routes Overview .
Migrating? If you are migrating from the Distance Matrix API (Legacy),
see migration instructions starting with
Why migrate to the Routes API .
Why use Compute Route Matrix
With Compute Route Matrix, you can determine the most efficient
routes for dispatch scheduling, such as:
How best to assign a set of workers to pick up a series of packages
Determine the best warehouse from which to ship packages to their final
destination
What you can do with Compute Route Matrix?
With Compute Route Matrix, you can get a matrix of possible routes
between many start and end locations. You can specify multiple origins and
destinations per server-side request with the number of origins times the number
of destinations up to 625. You can stream elements of the response before the
entire matrix has been calculated, lowering response latency.
You can request these kinds of route data to determine the most efficient way to
route passengers, shipments, or workers between multiple origins and
destinations:
Distance in kilometers or miles for a selected travel mode
Estimated travel time in traffic
How Compute Route Matrix works
The ComputeRouteMatrix method accepts an HTTP POST request with
a JSON request body that contains the request details. Required are at least one
origin, two or more destinations, travelMode, and a field mask to specify which
fields to return.
Example
curl -X POST -d '{
"origins": [
{
"waypoint": {
"location": {
"latLng": {
"latitude": 37.420761,
"longitude": -122.081356
}
}
}
},
{
"waypoint": {
"location": {
"latLng": {
"latitude": 37.403184,
"longitude": -122.097371
}
}
}
}
],
"destinations": [
{
"waypoint": {
"location": {
"latLng": {
"latitude": 37.420999,
"longitude": -122.086894
}
}
}
},
{
"waypoint": {
"location": {
"latLng": {
"latitude": 37.383047,
"longitude": -122.044651
}
}
}
}
],
"travelMode": "DRIVE"
}' \
-H 'Content-Type: application/json' -H 'X-Goog-Api-Key: YOUR_API_KEY ' \
-H 'X-Goog-FieldMask: originIndex,destinationIndex,duration,distanceMeters,status,condition' \
'https://routes.googleapis.com/distanceMatrix/v2:computeRouteMatrix'
The response contains the possible routes for the combination of all origin
and destination waypoints.
Resources
The following table summarizes the resources available through the
Routes API Compute Route Matrix method, along with
the data it returns.
Data resources
Data returned
Return format
ComputeRouteMatrix
Returns an array of routes from one origin waypoint to one destination
waypoint.
JSON
How to use Compute Route Matrix
1
Get set up
Start with Set up your Google Cloud project
and complete the setup instructions that follow.
2
Understand how the Routes API bills
For information, see Usage and billing .
3
Compute matrix of routes and review the response
For more information, see Get a route matrix
and Review the route matrix response .
Available client libraries
For a list of the available client libraries for
Compute Route Matrix, see
Client libraries .
What's next
Get a route matrix
Available route matrix options
Choose what information to return
Migrate from Distance Matrix API (Legacy)
Migrate from the Routes API preview to GA
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-09 UTC."],[],[]]
