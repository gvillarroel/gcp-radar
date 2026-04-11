---
title: "Method: projects.locations.dnsThreatDetectors.list \_|\_ Cloud DNS \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/dns/docs/reference/dns-armor/rest/v1/projects.locations.dnsThreatDetectors/list
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/dns/docs/apis
source_metadata:
  url: https://docs.cloud.google.com/dns/docs/reference/dns-armor/rest/v1/projects.locations.dnsThreatDetectors/list
  title: "Method: projects.locations.dnsThreatDetectors.list \_|\_ Cloud DNS \_|\_\
    \ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Networking
Cloud DNS
Reference
Send feedback
Method: projects.locations.dnsThreatDetectors.list
Stay organized with collections
Save and categorize content based on your preferences.
Lists DnsThreatDetectors in a given project and location.
HTTP request
GET https://networksecurity.googleapis.com/v1/{parent=projects/*/locations/*}/dnsThreatDetectors
The URL uses gRPC Transcoding syntax.
Path parameters
Parameters
parent
string
Required. The parent value for ListDnsThreatDetectorsRequest .
Query parameters
Parameters
pageSize
integer
Optional. The requested page size. The server may return fewer items than requested. If unspecified, the server picks an appropriate default.
pageToken
string
Optional. A page token received from a previous ListDnsThreatDetectorsRequest call. Provide this to retrieve the subsequent page.
Request body
The request body must be empty.
Response body
The response message to requesting a list of DnsThreatDetectors.
If successful, the response body contains data with the following structure:
JSON representation
{
"dnsThreatDetectors" : [
{
object ( DnsThreatDetector )
}
] ,
"nextPageToken" : string ,
"unreachable" : [
string
]
}
Fields
dnsThreatDetectors[]
object ( DnsThreatDetector )
The list of DnsThreatDetector resources.
nextPageToken
string
A token, which can be sent as pageToken , to retrieve the next page.
unreachable[]
string
Unordered list. Unreachable DnsThreatDetector resources.
Authorization scopes
Requires the following OAuth scope:
https://www.googleapis.com/auth/cloud-platform
For more information, see the Authentication Overview .
IAM Permissions
Requires the following IAM permission on the parent resource:
networksecurity.dnsThreatDetectors.list
For more information, see the IAM documentation .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-01-15 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-01-15 UTC."],[],[]]
