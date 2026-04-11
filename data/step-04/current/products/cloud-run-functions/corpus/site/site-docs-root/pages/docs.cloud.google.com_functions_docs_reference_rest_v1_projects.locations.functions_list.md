---
title: "Method: projects.locations.functions.list \_|\_ Cloud Run functions \_|\_\
  \ Google Cloud Documentation"
url: https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions/list
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/functions/docs
source_metadata:
  url: https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions/list
  title: "Method: projects.locations.functions.list \_|\_ Cloud Run functions \_|\_\
    \ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

If you are creating a new function, see the Console Quickstart on Cloud Run.
Home
Documentation
Application hosting
Cloud Run
Cloud Run functions
Reference
Send feedback
Method: projects.locations.functions.list
Stay organized with collections
Save and categorize content based on your preferences.
HTTP request
Path parameters
Query parameters
Request body
Response body
JSON representation
Authorization scopes
Try it!
Returns a list of functions that belong to the requested project.
HTTP request
GET https://cloudfunctions.googleapis.com/v1/{parent}/functions
Path parameters
Parameters
parent
string
The project and location from which the function should be listed, specified in the format projects/*/locations/* If you want to list functions in all locations, use "-" in place of a location. When listing functions in all locations, if one or more location(s) are unreachable, the response will contain functions from all reachable locations along with the names of any unreachable locations. It takes the form projects/{project}/locations/{location} .
Authorization requires the following IAM permission on the specified resource parent :
cloudfunctions.functions.list
Query parameters
Parameters
pageSize
integer
Maximum number of functions to return per call.
pageToken
string
The value returned by the last ListFunctionsResponse ; indicates that this is a continuation of a prior functions.list call, and that the system should return the next page of data.
Request body
The request body must be empty.
Response body
Response for the functions.list method.
If successful, the response body contains data with the following structure:
JSON representation
{
"functions" : [
{
object ( CloudFunction )
}
] ,
"nextPageToken" : string ,
"unreachable" : [
string
]
}
Fields
functions[]
object ( CloudFunction )
The functions that match the request.
nextPageToken
string
If not empty, indicates that there may be more functions that match the request; this value should be passed in a new google.cloud.functions.v1.ListFunctionsRequest to get more functions.
unreachable[]
string
Locations that could not be reached. The response does not include any functions from these locations.
Authorization scopes
Requires one of the following OAuth scopes:
https://www.googleapis.com/auth/cloudfunctions
https://www.googleapis.com/auth/cloud-platform
For more information, see the Authentication Overview .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-10-01 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-10-01 UTC."],[],[]]
