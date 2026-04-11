---
title: "Method: admin.projects.locations.reservations.list \_|\_ Pub/Sub Lite \_|\_\
  \ Google Cloud Documentation"
url: https://docs.cloud.google.com/pubsub/lite/docs/reference/rest/v1/admin.projects.locations.reservations/list
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/pubsub/lite/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/pubsub/lite/docs/reference/rest/v1/admin.projects.locations.reservations/list
  title: "Method: admin.projects.locations.reservations.list \_|\_ Pub/Sub Lite \_\
    |\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Data analytics
Pub/Sub
Pub/Sub Lite
Send feedback
Method: admin.projects.locations.reservations.list
Stay organized with collections
Save and categorize content based on your preferences.
HTTP request
Path parameters
Query parameters
Request body
Response body
JSON representation
Authorization scopes
Returns the list of reservations for the given project.
HTTP request
GET https://{endpoint}/v1/admin/{parent=projects/*/locations/*}/reservations
Where {endpoint} is one of the supported service endpoints .
The URLs use gRPC Transcoding syntax.
Path parameters
Parameters
parent
string
Required. The parent whose reservations are to be listed. Structured like projects/{project_number}/locations/{location} .
Authorization requires the following IAM permission on the specified resource parent :
pubsublite.reservations.list
Query parameters
Parameters
pageSize
integer
The maximum number of reservations to return. The service may return fewer than this value. If unset or zero, all reservations for the parent will be returned.
pageToken
string
A page token, received from a previous reservations.list call. Provide this to retrieve the subsequent page.
When paginating, all other parameters provided to reservations.list must match the call that provided the page token.
Request body
The request body must be empty.
Response body
If successful, the response body contains data with the following structure:
Response for reservations.list.
JSON representation
{
"reservations" : [
{
object ( Reservation )
}
] ,
"nextPageToken" : string
}
Fields
reservations[]
object ( Reservation )
The list of reservation in the requested parent. The order of the reservations is unspecified.
nextPageToken
string
A token that can be sent as pageToken to retrieve the next page of results. If this field is omitted, there are no more results.
Authorization scopes
Requires the following OAuth scope:
https://www.googleapis.com/auth/cloud-platform
For more information, see the Authentication Overview .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-06-17 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-06-17 UTC."],[],[]]
