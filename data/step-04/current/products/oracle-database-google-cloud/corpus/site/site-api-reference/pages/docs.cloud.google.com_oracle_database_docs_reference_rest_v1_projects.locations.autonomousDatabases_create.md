---
title: "Method: projects.locations.autonomousDatabases.create \_|\_ Oracle Database\
  \ at Google Cloud \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/oracle/database/docs/reference/rest/v1/projects.locations.autonomousDatabases/create
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/oracle/database/docs/reference/libraries
source_metadata:
  url: https://docs.cloud.google.com/oracle/database/docs/reference/rest/v1/projects.locations.autonomousDatabases/create
  title: "Method: projects.locations.autonomousDatabases.create \_|\_ Oracle Database\
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
Method: projects.locations.autonomousDatabases.create
Stay organized with collections
Save and categorize content based on your preferences.
HTTP request
Path parameters
Query parameters
Request body
Response body
Authorization scopes
IAM Permissions
Creates a new Autonomous Database in a given project and location.
HTTP request
POST https://oracledatabase.googleapis.com/v1/{parent=projects/*/locations/*}/autonomousDatabases
The URL uses gRPC Transcoding syntax.
Path parameters
Parameters
parent
string
Required. The name of the parent in the following format: projects/{project}/locations/{location}.
Query parameters
Parameters
autonomousDatabaseId
string
Required. The ID of the Autonomous Database to create. This value is restricted to (^ a-z ?$) and must be a maximum of 63 characters in length. The value must start with a letter and end with a letter or a number.
requestId
string
Optional. An optional ID to identify the request. This value is used to identify duplicate requests. If you make a request with the same request ID and the original request is still in progress or completed, the server ignores the second request. This prevents clients from accidentally creating duplicate commitments.
The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
Request body
The request body contains an instance of AutonomousDatabase .
Response body
If successful, the response body contains a newly created instance of Operation .
Authorization scopes
Requires the following OAuth scope:
https://www.googleapis.com/auth/cloud-platform
For more information, see the Authentication Overview .
IAM Permissions
Requires the following IAM permission on the parent resource:
oracledatabase.autonomousDatabases.create
For more information, see the IAM documentation .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-05-30 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-05-30 UTC."],[],[]]
