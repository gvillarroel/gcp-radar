---
title: "Method: projects.locations.configurations.aggregateUsage \_|\_ Compute Engine\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/compute/docs/licensemanager/rest/v1/projects.locations.configurations/aggregateUsage
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/compute/docs/api/libraries
source_metadata:
  url: https://docs.cloud.google.com/compute/docs/licensemanager/rest/v1/projects.locations.configurations/aggregateUsage
  title: "Method: projects.locations.configurations.aggregateUsage \_|\_ Compute Engine\
    \ \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Compute
Compute Engine
APIs & Reference
Send feedback
Method: projects.locations.configurations.aggregateUsage
Stay organized with collections
Save and categorize content based on your preferences.
HTTP request
Path parameters
Query parameters
Request body
Response body
JSON representation
Authorization scopes
IAM Permissions
Usage
JSON representation
Aggregates Usage per Instance for a Configuration.
HTTP request
GET https://licensemanager.googleapis.com/v1/{name=projects/*/locations/*/configurations/*}:aggregateUsage
The URL uses gRPC Transcoding syntax.
Path parameters
Parameters
name
string
Required. Parent value for AggregateUsageRequest
Query parameters
Parameters
pageSize
integer
Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default.
pageToken
string
Optional. A token identifying a page of results the server should return.
filter
string
Optional. Filtering results
orderBy
string
Optional. Hint for how to order the results
startTime
string ( Timestamp format)
Required. Licenses are purchased per month - so usage track needs start time of a month.
Uses RFC 3339, where generated output will always be Z-normalized and uses 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
endTime
string ( Timestamp format)
Required. Usage track is always for a month. This parameter is for the end time of the month.
Uses RFC 3339, where generated output will always be Z-normalized and uses 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
Request body
The request body must be empty.
Response body
Message for response for aggregating usage count
If successful, the response body contains data with the following structure:
JSON representation
{
"usages" : [
{
object ( Usage )
}
] ,
"nextPageToken" : string ,
"unreachable" : [
string
]
}
Fields
usages[]
object ( Usage )
The aggregated records of usage per configuration
nextPageToken
string
A token identifying a page of results the server should return.
unreachable[]
string
Locations that could not be reached.
Authorization scopes
Requires the following OAuth scope:
https://www.googleapis.com/auth/cloud-platform
For more information, see the Authentication Overview .
IAM Permissions
Requires the following IAM permission on the name resource:
licensemanager.configurations.aggregateUsage
For more information, see the IAM documentation .
Usage
Message describing total counts of users who accessed a VM.
JSON representation
{
"limaInstance" : string ,
"users" : integer
}
Fields
limaInstance
string
LiMa Instance resource name, i.e. projects/{project}/locations/{location}/instances/{instance}
users
integer
Number of unique users accessing the VM.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-07-28 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-07-28 UTC."],[],[]]
