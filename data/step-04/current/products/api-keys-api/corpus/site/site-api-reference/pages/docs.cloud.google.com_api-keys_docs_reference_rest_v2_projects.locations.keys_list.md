---
title: "Method: projects.locations.keys.list \_|\_ API Keys API Documentation \_|\_\
  \ Google Cloud Documentation"
url: https://docs.cloud.google.com/api-keys/docs/reference/rest/v2/projects.locations.keys/list
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/api-keys/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/api-keys/docs/reference/rest/v2/projects.locations.keys/list
  title: "Method: projects.locations.keys.list \_|\_ API Keys API Documentation \_\
    |\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
API Keys API Documentation
Reference
Send feedback
Method: projects.locations.keys.list
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
Try it!
Lists the API keys owned by a project. The key string of the API key isn't included in the response.
NOTE: Key is a global resource; hence the only supported value for location is global .
HTTP request
GET https://apikeys.googleapis.com/v2/{parent=projects/*/locations/*}/keys
The URL uses gRPC Transcoding syntax.
Path parameters
Parameters
parent
string
Required. Lists all API keys associated with this project.
Authorization requires the following IAM permission on the specified resource parent :
apikeys.keys.list
Query parameters
Parameters
pageSize
integer
Optional. Specifies the maximum number of results to be returned at a time.
pageToken
string
Optional. Requests a specific page of results.
showDeleted
boolean
Optional. Indicate that keys deleted in the past 30 days should also be returned.
Request body
The request body must be empty.
Response body
Response message for keys.list method.
If successful, the response body contains data with the following structure:
JSON representation
{
"keys" : [
{
object ( Key )
}
] ,
"nextPageToken" : string
}
Fields
keys[]
object ( Key )
A list of API keys.
nextPageToken
string
The pagination token for the next page of results.
Authorization scopes
Requires one of the following OAuth scopes:
https://www.googleapis.com/auth/cloud-platform.read-only
https://www.googleapis.com/auth/cloud-platform
For more information, see the Authentication Overview .
IAM Permissions
Requires the following IAM permission on the parent resource:
apikeys.keys.list
For more information, see the IAM documentation .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-06-26 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-06-26 UTC."],[],[]]
