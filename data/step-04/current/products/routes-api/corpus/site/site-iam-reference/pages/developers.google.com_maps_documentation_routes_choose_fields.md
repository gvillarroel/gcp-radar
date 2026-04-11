---
title: "Routes API \_|\_ Google for Developers"
url: https://developers.google.com/maps/documentation/routes/choose_fields
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://developers.google.com/maps/documentation/routes/get-api-key
source_metadata:
  url: https://developers.google.com/maps/documentation/routes/choose_fields
  title: "Routes API \_|\_ Google for Developers"
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
Stay organized with collections
Save and categorize content based on your preferences.
European Economic Area (EEA) developers
If your billing address is in the European Economic Area, effective on 8 July 2025, the
Google Maps Platform EEA Terms of Service
will apply to your use of the Services. Functionality varies by region.
Learn more .
Choose fields to return
When you request a route or route matrix, you must use a field mask to specify what information
the response should return. There is no default list of returned fields. If you don't specify a field mask, the methods return an error.
Using a field mask also ensures that you don't request
unnecessary data, which in turn helps with response latency and avoids returning information your system doesn't need.
You specify the list of the fields you need in a response field mask . You then pass
the response field mask to either method by using the URL parameter $fields or
fields , or by using the HTTP or gRPC header X-Goog-FieldMask .
For more information about URL parameters, see
System Parameters .
Define a response field mask
The response field mask is a comma-separated list of paths, where each
path specifies a unique field in the response message.
The path starts from the top-level response message and uses a
dot-separated path to the specified field.
Construct and specify a field path as follows:
Find the fields that contain the information you need . For details, see Field References .
Determine the paths for the fields you need and construct the field masks for them : For details, see Determine what field mask you want to use .
Combine the field masks for all of the fields you need , separating the field masks with commas. For example, to request the distanceMeters for the route leg, plus the duration for each route leg step, enter them both, separated by a comma, with no spaces:
routes.legs.distanceMeters,routes.legs.steps.duration
Send the field mask with your API request . For example, in a curl request, you would specify the field mask with -H and X-Goog-FieldMask :
-H X-Goog-FieldMask: routes.legs.distanceMeters,routes.legs.steps.duration
For examples and more details, see the following sections.
Field References
To see the fields that you can request in a response through field masks, refer to the Routes API Compute Routes or Compute Route Matrix references linked in the following list. Specify fields in camel case as shown in the reference. For example, routePreference .
In contrast, you must enter parameter values as shown. For example, for routingPreference , you must enter TRAFFIC_AWARE .
These references include the fields that are available; however, you need to refer to the hierarchy of the fields to determine the full field mask path. For details on getting the hierarchy of the fields, see Determine what field mask you want to use .
Compute route field mask
REST: Specifies the fields of the
Route object in the
response to return, prefixed by routes. , for example,
routes.distanceMeters .
gRPC: Specifies the fields of the
Route object in the
response to return.
Compute Route Matrix field masks
REST: Specifies the fields of the
Response body
to return.
gRPC: Specifies the fields of the
RouteMatrixElement
object in the response to return.
Determine what field masks to use
Here's how you can determine which fields you want to use, and construct the field masks for them:
Request all fields using a field mask of * .
Caution: While you can use this wildcard field mask while in development to determine what fields you need, don't use it in production. Requesting all fields in production results in higher costs and longer response times. Your cost may also increase unexpectedly as more advanced features are added, since this field mask will automatically include them. Instead, request only the fields you need to minimize your costs and request response time.
Look at the hierarchy of the fields in the response for the
fields you want.
Construct your field masks using the hierarchy of the fields shown in the previous step, using this format:
topLevelField[.secondLevelField][.thirdLevelField][...]
Note: Don't use spaces anywhere in the list of field paths.
For example, for this partial response from a route:
"routes" : [
{
"legs" : [
{ "steps" : [
{ "distanceMeters" : 119 },
{ "distanceMeters" : 41 } ]
}
],
"distanceMeters" : 160
}
]
If you want to return only the distanceMeters field for the route leg; that is, the last distanceMeters in the preceding sample, your field mask is as follows:
routes.legs.distanceMeters
If you want instead want to return the distanceMeters field for each step of the route leg; that is, the distanceMeters under steps in the preceding sample, your field mask is as follows:
routes.legs.steps.distanceMeters
If you want to return both, with the result above, your field mask is as follows:
routes.legs.distanceMeters,routes.legs.steps.distanceMeters
Example field mask paths
This section contains more examples on how to specify a field path as part of a response field mask in REST and gRPC calls.
REST call to computeRoutes
In the first example, you use a REST call to the
computeRoutes method to calculate
a route. In this example, in the header, you specify field masks to return the route distanceMeters and duration fields in the response. Remember to prefix the field name by routes .
X-Goog-FieldMask: routes.distanceMeters,routes.duration
REST call to computeRouteMatrix
For the REST computeRouteMatrix
method used to compute a route matrix, in the header, specify to return
originIndex , destinationIndex , and duration for each combination of origin
and destination:
X-Goog-FieldMask: originIndex,destinationIndex,duration
gRPC call
For gRPC, set a variable containing the response field mask. You can then pass that variable to the request.
const (
fieldMask = "routes.distanceMeters,routes.duration,routes.polyline.encodedPolyline"
)
Field path considerations
Include only the fields that you require in the response to return just the
fields that you need:
Decreases processing times , so your results are returned with a lower latency.
Ensures stable latency performance . If you
select all fields, or if you select all fields at the top level, you might
experience performance degradation when new fields are added and then are
automatically included in your response.
Results in a smaller response size , which translates into higher network throughput.
Ensures that you don't request unnecessary data , which helps to avoid unnecessary processing time and billed charges.
Note: When a response message is parsed, and a field in the
response message contains its default value, the field may be omitted from the response even if
you specified it in the response field mask. For more information, see the
Language Guide (proto3) .
For example, when you compute a route matrix, the
distanceMeters field of the response can contain a value of 0, its
default value. Because 0 is the default value of distanceMeters , it
is omitted from the response.
For more details on constructing a field mask, see the
field_mask.proto .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-09 UTC."],[],["When requesting route information, you must specify a **response field mask** to define which data fields to return. This is done via the `$fields`/`fields` URL parameter or the `X-Goog-FieldMask` header. The field mask is a comma-separated list of paths (e.g., `routes.legs.distanceMeters,routes.legs.steps.duration`), starting from the top-level response and using dot-notation to access nested fields. Use the API references to find available fields. Avoid requesting all fields with `*`, because that lead to higher cost and latency.\n"]]
