---
title: "Point \_|\_ Vertex AI Search \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/rest/Shared.Types/Point
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/generative-ai-app-builder/docs/authentication
source_metadata:
  url: https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/rest/Shared.Types/Point
  title: "Point \_|\_ Vertex AI Search \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
AI and ML
Vertex AI Search
Reference
Send feedback
Point
Stay organized with collections
Save and categorize content based on your preferences.
JSON representation
TimeInterval
JSON representation
TypedValue
JSON representation
A single data point in a time series.
JSON representation
{
"interval" : {
object ( TimeInterval )
} ,
"value" : {
object ( TypedValue )
}
}
Fields
interval
object ( TimeInterval )
The time interval to which the data point applies. For GAUGE metrics, the start time is optional, but if it is supplied, it must equal the end time. For DELTA metrics, the start and end time should specify a non-zero interval, with subsequent points specifying contiguous and non-overlapping intervals. For CUMULATIVE metrics, the start and end time should specify a non-zero interval, with subsequent points specifying the same start time and increasing end times, until an event resets the cumulative value to zero and sets a new start time for the following points.
value
object ( TypedValue )
The value of the data point.
TimeInterval
A time interval extending just after a start time through an end time. If the start time is the same as the end time, then the interval represents a single point in time.
JSON representation
{
"endTime" : string ,
"startTime" : string
}
Fields
endTime
string ( Timestamp format)
Required. The end of the time interval.
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
startTime
string ( Timestamp format)
Optional. The beginning of the time interval. The default value for the start time is the end time. The start time must not be later than the end time.
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
TypedValue
A single strongly-typed value.
JSON representation
{
// Union field value can be only one of the following:
"boolValue" : boolean ,
"int64Value" : string ,
"doubleValue" : number ,
"stringValue" : string ,
"distributionValue" : {
object ( Distribution )
}
// End of list of possible types for union field value .
}
Fields
Union field value . The typed value field. value can be only one of the following:
boolValue
boolean
A Boolean value: true or false .
int64Value
string ( int64 format)
A 64-bit integer. Its range is approximately ±9.2x10 18 .
doubleValue
number
A 64-bit double-precision floating-point number. Its magnitude is approximately ±10 ±300 and it has 16 significant digits of precision.
stringValue
string
A variable-length string value.
distributionValue
object ( Distribution )
A distribution value.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-08-26 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-08-26 UTC."],[],[]]
