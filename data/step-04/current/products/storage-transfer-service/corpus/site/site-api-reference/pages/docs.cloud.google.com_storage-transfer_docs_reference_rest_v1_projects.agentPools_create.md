---
title: "Method: projects.agentPools.create \_|\_ Storage Transfer Service \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/storage-transfer/docs/reference/rest/v1/projects.agentPools/create
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/storage-transfer/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/storage-transfer/docs/reference/rest/v1/projects.agentPools/create
  title: "Method: projects.agentPools.create \_|\_ Storage Transfer Service \_|\_\
    \ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Storage
Storage Transfer Service
Reference
Send feedback
Method: projects.agentPools.create
Stay organized with collections
Save and categorize content based on your preferences.
Creates an agent pool resource.
HTTP request
POST https://storagetransfer.googleapis.com/v1/projects/{projectId}/agentPools
The URL uses gRPC Transcoding syntax.
Path parameters
Parameters
projectId
string
Required. The ID of the Google Cloud project that owns the agent pool.
Authorization requires the following IAM permission on the specified resource projectId :
storagetransfer.agentpools.create
Query parameters
Parameters
agentPoolId
string
Required. The ID of the agent pool to create.
The agentPoolId must meet the following requirements:
Length of 128 characters or less.
Not start with the string goog .
Start with a lowercase ASCII character, followed by:
Zero or more: lowercase Latin alphabet characters, numerals, hyphens ( - ), periods ( . ), underscores ( _ ), or tildes ( ~ ).
One or more numerals or lowercase ASCII characters.
As expressed by the regular expression: ^(?!goog)[a-z]([a-z0-9-._~]*[a-z0-9])?$ .
Request body
The request body contains an instance of AgentPool .
Response body
If successful, the response body contains a newly created instance of AgentPool .
Authorization scopes
Requires the following OAuth scope:
https://www.googleapis.com/auth/cloud-platform
For more information, see the Authentication Overview .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-07-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-07-09 UTC."],[],[]]
