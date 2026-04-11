---
title: "Get a route matrix \_|\_ Routes API \_|\_ Google for Developers"
url: https://developers.google.com/maps/documentation/routes/compute_route_matrix
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://developers.google.com/maps/documentation/routes/compute-route-over
source_metadata:
  url: https://developers.google.com/maps/documentation/routes/compute_route_matrix
  title: "Get a route matrix \_|\_ Routes API \_|\_ Google for Developers"
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
Get a route matrix
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
Google Maps Routes API calculates distance and duration for routes with multiple origins and destinations using the computeRouteMatrix method.
Request limits apply to the number of elements (routes between origin-destination pairs), varying based on route type and traffic settings.
Responses can contain errors for the entire request or individual route elements, providing granular feedback on route calculation success.
The gRPC method offers stream results, allowing processing of route information as it becomes available, without waiting for all calculations to complete.
Examples demonstrate how to use the API with HTTP requests and interpret the response, identifying routes using origin and destination indices.
European Economic Area (EEA) developers
If your billing address is in the European Economic Area, effective on 8 July 2025, the
Google Maps Platform EEA Terms of Service
will apply to your use of the Services. Functionality varies by region.
Learn more .
Use the Routes API to calculate the distance and duration of a route for
multiple origins and destinations by calling the
computeRouteMatrix method
(REST) or the streaming
ComputeRouteMatrix
method (gRPC).
Given a list of origins and destinations, the method
calculates the distance and duration of a route starting at each origin
and ending at each destination.
Get a transit route matrix
You can also compute a route matrix on transit. For an
example, see Get a route matrix on transit .
Request limits
The Compute Route Matrix methods enforce the following request
limits for waypoints using address or placeIDs, and for elements. Elements are
the routes between each origin and destination in a route matrix, so the number
of elements is the number of origins times the number of destinations. For
example, if you have 10 origins and 10 destinations, you have 100 elements:
The number of elements cannot exceed 625 for routes
that are not TRANSIT routes.
If you specify a TRANSIT route , the number of elements cannot exceed
100.
If you specify TRAFFIC_AWARE_OPTIMAL , the number of elements cannot
exceed 100. For more information about TRAFFIC_AWARE_OPTIMAL , see
Specify how and if to include traffic data .
If you specify origins or destinations using address or place ID ,
you specify up to 50 total this way.
Response errors
One feature of the Compute Route Matrix methods is that errors can
be returned either for the entire response or for individual response elements.
For example, the entire response contains an error if the request is malformed
(for example, it has zero origins).
However, if an error applies to a subset of
elements in the response (for example, a route cannot be computed for one
combination of origin and destination), then only the elements affected by the
error return an error code.
gRPC Stream results
The ComputeRouteMatrix
gRPC method takes in a list of origins and destinations and returns a stream
containing route information for each combination of origin and destination.
Because the results are returned as a stream, you don't have to wait until all
possible route combinations are calculated before you can start to process the
results.
Note: Stream results are not supported by the REST API.
The elements returned by the stream are not guaranteed to be returned in any
order. Therefore, each response element contains an origin_index and a
destination_index . For the origins and destinations specified by the request,
the route origin is equivalent to origins[origin_index] for a given element
and the route destination is equivalent to destinations[destination_index] .
These arrays are zero-indexed. It is important to store the origin and
destination list orders.
Compute a Route Matrix Examples
Use the computeRouteMatrix
method in an HTTP request to compute a route matrix.
HTTP example
The following example shows a computeRouteMatrix HTTP request. In this example
you:
Specify an array of two origin and two destination waypoints. The method
calculates a route from each origin to each destination so the response
contains four routes.
In the array, the first element is at an index of 0, the second is index 1,
and so forth.
Include a response field mask to specify which fields of the
response
(REST) or
ComputeRoutesResponse
(gRPC) to return. In this example, configure the request to return
originIndex , destinationIndex , duration , distanceMeters , status ,
and condition for each route. For more information, see
Choose fields to return .
curl - X POST - d ' {
"origins" : [
{
"waypoint" : {
"location" : {
"latLng" : {
"latitude" : 37.420761 ,
"longitude" : -122.081356
}
}
},
"routeModifiers" : { "avoid_ferries" : true }
},
{
"waypoint" : {
"location" : {
"latLng" : {
"latitude" : 37.403184 ,
"longitude" : -122.097371
}
}
},
"routeModifiers" : { "avoid_ferries" : true }
}
],
"destinations" : [
{
"waypoint" : {
"location" : {
"latLng" : {
"latitude" : 37.420999 ,
"longitude" : -122.086894
}
}
}
},
{
"waypoint" : {
"location" : {
"latLng" : {
"latitude" : 37.383047 ,
"longitude" : -122.044651
}
}
}
}
],
"travelMode" : "DRIVE" ,
"routingPreference" : "TRAFFIC_AWARE"
} ' \
- H 'Co ntent - Type : applica t io n /jso n ' - H 'X - Goog - Api - Key : YOUR_API_KEY ' \
- H 'X - Goog - FieldMask : origi n I n dex , des t i nat io n I n dex , dura t io n , dis tan ceMe ters , s tatus , co n di t io n ' \
'h tt ps : //routes.googleapis.com/distanceMatrix/v2:computeRouteMatrix'
The response contains the four possible routes for the combination of all origin
and destination waypoints.
Note: For detailed description of the response, see Understand the compute
route matrix response .
Identify each route in the response by using the originIndex and
destinationIndex response fields. For example, an originIndex of 1 in the
response corresponds to a route calculated from the waypoint at index 1 of the
origins array in the request.
[
{
"originIndex" : 0 ,
"destinationIndex" : 0 ,
"status" : {},
"distanceMeters" : 822 ,
"duration" : "160s" ,
"condition" : "ROUTE_EXISTS"
},
{
"originIndex" : 1 ,
"destinationIndex" : 0 ,
"status" : {},
"distanceMeters" : 2919 ,
"duration" : "361s" ,
"condition" : "ROUTE_EXISTS"
},
{
"originIndex" : 1 ,
"destinationIndex" : 1 ,
"status" : {},
"distanceMeters" : 5598 ,
"duration" : "402s" ,
"condition" : "ROUTE_EXISTS"
},
{
"originIndex" : 0 ,
"destinationIndex" : 1 ,
"status" : {},
"distanceMeters" : 7259 ,
"duration" : "712s" ,
"condition" : "ROUTE_EXISTS"
}
]
gRPC examples
For example gRPC requests, see the examples on
Example gRPC request . The Java
example on that page calls both the Compute Routes and
Compute Route Matrix.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-09 UTC."],[],["The Routes API calculates route distances and durations for multiple origins and destinations using `computeRouteMatrix`. It supports REST and gRPC methods, with gRPC offering streaming results. Key actions include specifying origins and destinations, setting travel modes (like transit), and handling request limits (e.g., element counts for `TRANSIT` or `TRAFFIC_AWARE_OPTIMAL` routes). Errors can be response-wide or element-specific. The response provides `originIndex`, `destinationIndex`, `duration`, `distanceMeters`, and `status` for each route.\n"]]
