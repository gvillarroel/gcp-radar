---
title: "AsyncModelConfig \_|\_ Route Optimization API \_|\_ Google for Developers"
url: https://developers.google.com/maps/documentation/route-optimization/reference/rest/v1/AsyncModelConfig
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://developers.google.com/maps/documentation/route-optimization/reference/rest
source_metadata:
  url: https://developers.google.com/maps/documentation/route-optimization/reference/rest/v1/AsyncModelConfig
  title: "AsyncModelConfig \_|\_ Route Optimization API \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Products
Google Maps Platform
Documentation
Route Optimization API
Reference
Send feedback
AsyncModelConfig
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
AsyncModelConfig provides information for solving one optimization model asynchronously, specifying input and output configurations.
InputConfig defines the input data format and source, which can be a Google Cloud Storage location with a single object (file) using gcsSource .
OutputConfig specifies the output data format and destination, allowing results to be written to a designated Google Cloud Storage location using gcsDestination .
Supported data formats for both input and output include JSON and Protocol Buffers text format, selected using the dataFormat field.
Users can optionally provide a displayName for the model as an alias for tracking purposes.
JSON representation
InputConfig
JSON representation
GcsSource
JSON representation
DataFormat
OutputConfig
JSON representation
GcsDestination
JSON representation
Information for solving one optimization model asynchronously.
JSON representation
{
"displayName" : string ,
"inputConfig" : {
object ( InputConfig )
} ,
"outputConfig" : {
object ( OutputConfig )
}
}
Fields
displayName
string
Optional. User defined model name, can be used as alias by users to keep track of models.
inputConfig
object ( InputConfig )
Required. Information about the input model.
outputConfig
object ( OutputConfig )
Required. The desired output location information.
InputConfig
Specify an input for [locations.batchOptimizeTours][google.maps.routeoptimization.v1.RouteOptimizationService.BatchOptimizeTours].
JSON representation
{
"dataFormat" : enum ( DataFormat ) ,
// Union field source can be only one of the following:
"gcsSource" : {
object ( GcsSource )
}
// End of list of possible types for union field source .
}
Fields
dataFormat
enum ( DataFormat )
Required. The input data format.
Union field source . Required. source can be only one of the following:
gcsSource
object ( GcsSource )
A Google Cloud Storage location. This must be a single object (file).
GcsSource
The Google Cloud Storage location where the input file will be read from.
JSON representation
{
"uri" : string
}
Fields
uri
string
Required. URI of a Google Cloud Storage object with the format gs://bucket/path/to/object .
DataFormat
Data formats for input and output files.
Enums
DATA_FORMAT_UNSPECIFIED
Invalid value, format must not be UNSPECIFIED.
JSON
JavaScript Object Notation.
PROTO_TEXT
Protocol Buffers text format. See https://protobuf.dev/reference/protobuf/textformat-spec/
OutputConfig
Specify a destination for [locations.batchOptimizeTours][google.maps.routeoptimization.v1.RouteOptimizationService.BatchOptimizeTours] results.
JSON representation
{
"dataFormat" : enum ( DataFormat ) ,
// Union field destination can be only one of the following:
"gcsDestination" : {
object ( GcsDestination )
}
// End of list of possible types for union field destination .
}
Fields
dataFormat
enum ( DataFormat )
Required. The output data format.
Union field destination . Required. destination can be only one of the following:
gcsDestination
object ( GcsDestination )
The Google Cloud Storage location to write the output to.
GcsDestination
The Google Cloud Storage location where the output file(s) will be written to.
JSON representation
{
"uri" : string
}
Fields
uri
string
Required. Google Cloud Storage URI.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-08-27 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-08-27 UTC."],[],["This content details configurations for asynchronous optimization model solutions. Key actions include defining `InputConfig` and `OutputConfig`. `InputConfig` specifies data format (`JSON` or `PROTO_TEXT`) and a Google Cloud Storage (GCS) source URI. `OutputConfig` sets the output data format and a GCS destination URI. Users provide a model display name and must specify input and output data formats, utilizing GCS for both input and output. Supported data formats are JSON or PROTO_TEXT.\n"]]
