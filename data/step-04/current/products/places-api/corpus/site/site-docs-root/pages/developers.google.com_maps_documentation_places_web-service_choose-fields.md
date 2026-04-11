---
title: "Choose fields to return \_|\_ Places API \_|\_ Google for Developers"
url: https://developers.google.com/maps/documentation/places/web-service/choose-fields
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://developers.google.com/maps/documentation/places/web-service/op-overview
source_metadata:
  url: https://developers.google.com/maps/documentation/places/web-service/choose-fields
  title: "Choose fields to return \_|\_ Places API \_|\_ Google for Developers"
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
Choose fields to return
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
When calling Place Details, Nearby Search, or Text Search methods, you must specify desired fields using a response field mask to avoid errors.
Field masks help reduce costs and latency by only retrieving necessary data, and should be tailored based on specific field requirements.
Construct field masks using dot-separated paths starting from the top-level response message, such as places.formattedAddress for Nearby and Text Search or formattedAddress for Place Details.
Use * to request all fields during development, but define specific fields in production to optimize performance and costs.
Avoid unnecessary data retrieval by only including required fields, which minimizes processing time, response size, and potential billing charges.
European Economic Area (EEA) developers
If your billing address is in the European Economic Area, effective on 8 July 2025, the
Google Maps Platform EEA Terms of Service
will apply to your use of the Services. Functionality varies by region.
Learn more .
Introduction
When you call the
Place Details (New) ,
Nearby Search (New) ,
or Text Search (New)
methods, you must specify which fields you want returned in the response. There
is no default list of returned fields. If you omit this list, the methods return
an error.
A full list of supported data fields and their corresponding SKUs can be found
in Place Data Fields
(New) . For information on
fields specific to each API, see the following:
Place Details (New) FieldMask
parameters
Nearby Search (New) FieldMask
parameters
Text Search (New) FieldMask
parameters
You specify the field list by creating a response field mask . You then pass
the response field mask to either method by using the parameter $fields or
fields , or by using the HTTP or gRPC header X-Goog-FieldMask .
Field masking is a good design practice to ensure that you don't request
unnecessary data, which helps to avoid unnecessary processing time and billing
charges.
Define a response field mask
The response field mask is a comma-separated list of paths, where each path
specifies a unique field in the response body. The path starts from the
top-level response message and uses a dot-separated path to the specified field.
Construct a field path as follows:
topLevelField[.secondLevelField][.thirdLevelField][...]
Note: Don't use spaces anywhere in the list of field paths.
You can request all fields by using a field mask of * .
Caution: While this wildcard field mask is okay to use in development, don't use
the wildcard (*) response field mask in production. The cost may be higher
than expected as more advanced features are requested through this field mask,
and it increases response latency. Make sure you are requesting only the fields
you need to minimize your costs and request response time.
For more information about how to construct field masks, see the
field_mask.proto .
Determine what field masks to use
Here's how you can determine which field masks you want to use:
Request all fields using a field mask of * .
Look at the hierarchy of the fields in the response, and determine what
fields you want.
Build your field mask using the field hierarchy.
Define a response field mask for Nearby Search (New) and Text Search (New)
Nearby Search (New) and Text Search (New) return an array of Place
objects in the places field of the response. For these APIs, places is the
top-level field of the response.
For example, to see the complete response object from a Text Search (New):
curl -X POST -d '{
"textQuery" : "Spicy Vegetarian Food in Sydney, Australia"
}' \
-H 'Content-Type: application/json' -H 'X-Goog-Api-Key: API_KEY ' \
-H 'X-Goog-FieldMask: *' \
'https://places.googleapis.com/v1/places:searchText'
The complete response object from a Text Search (New)
call is in the form:
{
"places" : [
{
"name" : "places/ChIJs5ydyTiuEmsR0fRSlU0C7k0" ,
"id" : "ChIJs5ydyTiuEmsR0fRSlU0C7k0" ,
"types" : [
"vegetarian_restaurant" ,
"vegan_restaurant" ,
"meal_takeaway" ,
"restaurant" ,
"food" ,
"point_of_interest" ,
"establishment"
],
"nationalPhoneNumber" : "0433 479 794" ,
"internationalPhoneNumber" : "+61 433 479 794" ,
"formattedAddress" : "29 King St, Sydney NSW 2000, Australia" ,
"displayName" : {
"text" : "Spiced @ Barangaroo" ,
"languageCode" : "en"
}, ...
},
...
]
}
Therefore, you specify a field mask for these APIs in the form:
places [.secondLevelField][.thirdLevelField][...]
If you want to return only the formattedAddress and displayName fields, set
your field mask to:
places.formattedAddress,places.displayName
Specifying displayName includes both the text and language fields of
displayName . If you only want the text field, set the field mask as:
places.formattedAddress,places.displayName.text
Define a response field mask for Place Details (New)
Place Details (New) returns a single Place object in the form:
{
"name" : "places/ChIJkR8FdQNB0VQRm64T_lv1g1g" ,
"id" : "ChIJkR8FdQNB0VQRm64T_lv1g1g" ,
"types" : [
"locality" ,
"political"
],
"formattedAddress" : "Trinidad, CA 95570, USA" ,
"displayName" : {
"text" : "Trinidad" ,
"languageCode" : "en"
}
...
}
Therefore, you specify a field mask for this API by specifying the fields of the
Place object that you want to return:
curl -X GET -H 'Content-Type: application/json' \
-H "X-Goog-Api-Key: API_KEY " \
-H "X-Goog-FieldMask: formattedAddress,displayName" \
https://places.googleapis.com/v1/places/ChIJj61dQgK6j4AR4GeTYWZsKWw
gRPC call
For gRPC, set a variable containing the response field mask. You can then pass
that variable to the request.
co nst (
f ieldMask = "places.formattedAddress,places.displayName"
)
Field path considerations
Include only the fields that you require in the response. Returning just the
fields that you need:
Decreases processing times , so your results are returned with a lower
latency.
Ensures stable latency performance if the API adds more response fields
in the future, and those new fields require extra computation time. If you
select all fields, or if you select all fields at the top level, you might
experience performance degradation when all new fields are automatically
included in your response.
Results in a smaller response size , which translates into higher network
throughput.
Ensures that you don't request unnecessary data , which helps to avoid
unnecessary processing time and billed charges.
Note: When a response message is parsed, and a field in the response message
contains its default value, the field may be omitted from the response even if
you specified it in the response field mask. For more information, see the
Language Guide (proto3) .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-09 UTC."],[],["When using Place Details, Nearby Search, or Text Search, you must define a response field mask, specifying desired fields. This mask, a comma-separated list of paths, is passed via `$fields`, `fields`, or the `X-Goog-FieldMask` header. For Nearby and Text Search, the path starts with `places`; for Place Details, it starts with the desired fields directly. Using the wildcard `*` is discouraged in production. Defining the field masks ensures efficient processing, reduces data transfer, and controls costs. Only requested fields will be in the response.\n"]]
