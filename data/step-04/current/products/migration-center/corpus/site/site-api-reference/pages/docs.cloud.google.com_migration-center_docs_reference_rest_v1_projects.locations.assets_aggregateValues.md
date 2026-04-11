---
title: "Method: projects.locations.assets.aggregateValues \_|\_ Migration Center \_\
  |\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/migration-center/docs/reference/rest/v1/projects.locations.assets/aggregateValues
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/migration-center/docs/api
source_metadata:
  url: https://docs.cloud.google.com/migration-center/docs/reference/rest/v1/projects.locations.assets/aggregateValues
  title: "Method: projects.locations.assets.aggregateValues \_|\_ Migration Center\
    \ \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Migration
Migration Center
Reference
Send feedback
Method: projects.locations.assets.aggregateValues
Stay organized with collections
Save and categorize content based on your preferences.
HTTP request
Path parameters
Request body
JSON representation
Response body
JSON representation
Authorization scopes
Aggregation
JSON representation
Count
Sum
Histogram
JSON representation
Frequency
AggregationResult
JSON representation
Count
JSON representation
Sum
JSON representation
Histogram
JSON representation
Bucket
JSON representation
Frequency
JSON representation
Aggregates the requested fields based on provided function.
HTTP request
POST https://migrationcenter.googleapis.com/v1/{parent=projects/*/locations/*}/assets:aggregateValues
The URL uses gRPC Transcoding syntax.
Path parameters
Parameters
parent
string
Required. Parent value for AggregateAssetsValuesRequest .
Request body
The request body contains data with the following structure:
JSON representation
{
"aggregations" : [
{
object ( Aggregation )
}
] ,
"filter" : string
}
Fields
aggregations[]
object ( Aggregation )
Array of aggregations to perform. Up to 25 aggregations can be defined.
filter
string
Optional. The aggregation will be performed on assets that match the provided filter.
Response body
A response to a request to aggregated assets values.
If successful, the response body contains data with the following structure:
JSON representation
{
"results" : [
{
object ( AggregationResult )
}
]
}
Fields
results[]
object ( AggregationResult )
The aggregation results.
Authorization scopes
Requires the following OAuth scope:
https://www.googleapis.com/auth/cloud-platform
For more information, see the Authentication Overview .
Aggregation
Message describing an aggregation. The message includes the aggregation type, parameters, and the field on which to perform the aggregation.
JSON representation
{
"field" : string ,
// Union field aggregation_function can be only one of the following:
"count" : {
object ( Count )
} ,
"sum" : {
object ( Sum )
} ,
"histogram" : {
object ( Histogram )
} ,
"frequency" : {
object ( Frequency )
}
// End of list of possible types for union field aggregation_function .
}
Fields
field
string
The name of the field on which to aggregate.
Union field aggregation_function .
aggregation_function can be only one of the following:
count
object ( Count )
Count the number of matching objects.
sum
object ( Sum )
Sum over a numeric field.
histogram
object ( Histogram )
Creates a bucketed histogram of field values.
frequency
object ( Frequency )
Creates a frequency distribution of all field values.
Count
This type has no fields.
Object count.
Sum
This type has no fields.
Sum of field values.
Histogram
Histogram of bucketed assets counts by field value.
JSON representation
{
"lowerBounds" : [
number
]
}
Fields
lower Bounds[]
number
Lower bounds of buckets. The response will contain n+1 buckets for n bounds. The first bucket will count all assets for which the field value is smaller than the first bound. Subsequent buckets will count assets for which the field value is greater or equal to a lower bound and smaller than the next one. The last bucket will count assets for which the field value is greater or equal to the final lower bound. You can define up to 20 lower bounds.
Frequency
This type has no fields.
Frequency distribution of all field values.
AggregationResult
Message describing a result of an aggregation.
JSON representation
{
"field" : string ,
// Union field result can be only one of the following:
"count" : {
object ( Count )
} ,
"sum" : {
object ( Sum )
} ,
"histogram" : {
object ( Histogram )
} ,
"frequency" : {
object ( Frequency )
}
// End of list of possible types for union field result .
}
Fields
field
string
Union field result .
result can be only one of the following:
count
object ( Count )
sum
object ( Sum )
histogram
object ( Histogram )
frequency
object ( Frequency )
Count
The result of a count aggregation.
JSON representation
{
"value" : string
}
Fields
value
string ( int64 format)
Sum
The result of a sum aggregation.
JSON representation
{
"value" : number
}
Fields
value
number
Histogram
The result of a bucketed histogram aggregation.
JSON representation
{
"buckets" : [
{
object ( Bucket )
}
]
}
Fields
buckets[]
object ( Bucket )
Buckets in the histogram. There will be n+1 buckets matching n lower bounds in the request. The first bucket will be from -infinity to the first bound. Subsequent buckets will be between one bound and the next. The final bucket will be from the final bound to infinity.
Bucket
A histogram bucket with a lower and upper bound, and a count of items with a field value between those bounds. The lower bound is inclusive and the upper bound is exclusive. Lower bound may be -infinity and upper bound may be infinity.
JSON representation
{
"lowerBound" : number ,
"upperBound" : number ,
"count" : string
}
Fields
lower Bound
number
Lower bound - inclusive.
upper Bound
number
Upper bound - exclusive.
count
string ( int64 format)
Count of items in the bucket.
Frequency
The result of a frequency distribution aggregation.
JSON representation
{
"values" : {
string : string ,
...
}
}
Fields
values
map (key: string, value: string ( int64 format))
An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" } .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-06-17 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-06-17 UTC."],[],[]]
