---
title: "Method: projects.locations.autonomousDatabases.list \_|\_ Oracle Database\
  \ at Google Cloud \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/oracle/database/docs/reference/rest/v1/projects.locations.autonomousDatabases/list
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/oracle/database/docs/reference/libraries
source_metadata:
  url: https://docs.cloud.google.com/oracle/database/docs/reference/rest/v1/projects.locations.autonomousDatabases/list
  title: "Method: projects.locations.autonomousDatabases.list \_|\_ Oracle Database\
    \ at Google Cloud \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Databases
Oracle Database at Google Cloud
Reference
Send feedback
Method: projects.locations.autonomousDatabases.list
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
Lists the Autonomous Databases in a given project and location.
HTTP request
GET https://oracledatabase.googleapis.com/v1/{parent=projects/*/locations/*}/autonomousDatabases
The URL uses gRPC Transcoding syntax.
Path parameters
Parameters
parent
string
Required. The parent value for the Autonomous Database in the following format: projects/{project}/locations/{location}.
Query parameters
Parameters
pageSize
integer
Optional. The maximum number of items to return. If unspecified, at most 50 Autonomous Database will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
pageToken
string
Optional. A token identifying a page of results the server should return.
filter
string
Optional. An expression for filtering the results of the request.
orderBy
string
Optional. An expression for ordering the results of the request.
Request body
The request body must be empty.
Response body
The response for AutonomousDatabase.List .
If successful, the response body contains data with the following structure:
JSON representation
{
"autonomousDatabases" : [
{
object ( AutonomousDatabase )
}
] ,
"nextPageToken" : string
}
Fields
autonomousDatabases[]
object ( AutonomousDatabase )
The list of Autonomous Databases.
nextPageToken
string
A token identifying a page of results the server should return.
Authorization scopes
Requires the following OAuth scope:
https://www.googleapis.com/auth/cloud-platform
For more information, see the Authentication Overview .
IAM Permissions
Requires the following IAM permission on the parent resource:
oracledatabase.autonomousDatabases.list
For more information, see the IAM documentation .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-05-30 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-05-30 UTC."],[],[]]
