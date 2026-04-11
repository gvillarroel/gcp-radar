---
title: "Choose fields to return \_|\_ Geocoding API \_|\_ Google for Developers"
url: https://developers.google.com/maps/documentation/geocoding/choose-fields
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://developers.google.com/maps/documentation/geocoding
source_metadata:
  url: https://developers.google.com/maps/documentation/geocoding/choose-fields
  title: "Choose fields to return \_|\_ Geocoding API \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Geocoding API v4 methods have a default quota of 25 queries per second (QPS). For information on requesting a higher quota, see View and manage quotas and select Geocoding API as the service.
Home
Products
Google Maps Platform
Documentation
Web Services
Geocoding API
Send feedback
Choose fields to return
Stay organized with collections
Save and categorize content based on your preferences.
European Economic Area (EEA) developers
If your billing address is in the European Economic Area, effective on 8 July 2025, the
Google Maps Platform EEA Terms of Service
will apply to your use of the Services. Functionality varies by region.
Learn more .
When you make a geocoding request, you can use a field mask to specify the
list of fields to return in the response. Field masks help with response latency
by ensuring you don't request unnecessary data.
For the Geocode an address , Geocode
a location , and Place
geocoding methods, all fields
in the response object are returned by default. While a field mask is not
required, we strongly encourage you to use them to reduce response latency.
Important: You must specify a field mask when using the
Search for destinations
method.
Define a response field mask
The response field mask is a comma-separated list of paths with no spaces, where
each path specifies a unique field in the response object. The path starts from
the top-level response field and uses a dot-separated path to a specified
field.
Note: Don't use spaces anywhere in the list of field paths.
Pass the response field mask to a request by using the URL parameter $fields
or fields , or by using the HTTP or gRPC header X-Goog-FieldMask .
Example field masks
Shown below is the complete response from a forward geocoding request:
{
"results" : [
{
"place" : "//places.googleapis.com/places/ChIJF4Yf2Ry7j4AR__1AkytDyAE" ,
"placeId" : "ChIJF4Yf2Ry7j4AR__1AkytDyAE" ,
"location" : {
"latitude" : 37.422010799999995 ,
"longitude" : -122.08474779999999
},
"granularity" : "ROOFTOP" ,
"viewport" : {
"low" : {
"latitude" : 37.420656719708511 ,
"longitude" : -122.08547523029148
},
"high" : {
"latitude" : 37.4233546802915 ,
"longitude" : -122.0827772697085
}
},
"formattedAddress" : "1600 Amphitheatre Pkwy, Mountain View, CA 94043, USA" ,
...
}
Construct your field masks using the hierarchy of the response fields, in the
form:
topLevelField[.secondLevelField][.thirdLevelField][...]
Note: By default, the request returns all fields in the response object which is
equivalent to specifying a field mask of *.
For example, to return only the placeId field in the response, use a field
mask of:
curl -X GET -H 'Content-Type: application/json' \
-H 'X-Goog-FieldMask: results.placeId' \
-H "X-Goog-Api-Key: API_KEY " \
https://geocode.googleapis.com/v4/geocode/address/1600+Amphitheatre+Parkway,+Mountain+View,+CA
The response is now:
{
"results" : [
{
"placeId" : "ChIJF4Yf2Ry7j4AR__1AkytDyAE"
}
]
}
To return the viewport field, your field mask is:
-H 'X-Goog-FieldMask: results.viewport'
The response is now:
{
"results" : [
{
"viewport" : {
"low" : {
"latitude" : 37.420654569708496 ,
"longitude" : -122.08547618029148
},
"high" : {
"latitude" : 37.423352530291496 ,
"longitude" : -122.0827782197085
}
}
}
]
}
To return both:
-H 'X-Goog-FieldMask: results.placeId,results.viewport'
The response is now:
{
"results" : [
{
"placeId" : "ChIJF4Yf2Ry7j4AR__1AkytDyAE" ,
"viewport" : {
"low" : {
"latitude" : 37.420654569708496 ,
"longitude" : -122.08547618029148
},
"high" : {
"latitude" : 37.423352530291496 ,
"longitude" : -122.0827782197085
}
}
}
]
}
gRPC field masks
For gRPC, set a variable containing the response field mask. You can then pass
that variable to the request.
const (
fieldMask = "results.placeId,results.viewport"
)
Field path considerations
Include only the fields that you require in the response to return just the
fields that you need:
Decreases processing times , so your results are returned with a lower
latency.
Ensures stable latency performance . If you select all fields, or if you
select all fields at the top level, you might experience performance
degradation when new fields are added and then are automatically included in
your response.
Results in a smaller response size , which translates into higher network
throughput.
For more details on constructing a field mask, see the
field_mask.proto .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-09 UTC."],[],[]]
