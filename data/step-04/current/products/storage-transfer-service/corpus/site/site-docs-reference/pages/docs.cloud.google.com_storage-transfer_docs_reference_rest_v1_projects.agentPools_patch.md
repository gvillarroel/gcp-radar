---
title: "Method: projects.agentPools.patch \_|\_ Storage Transfer Service \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/storage-transfer/docs/reference/rest/v1/projects.agentPools/patch
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/storage-transfer/docs/apis
source_metadata:
  url: https://docs.cloud.google.com/storage-transfer/docs/reference/rest/v1/projects.agentPools/patch
  title: "Method: projects.agentPools.patch \_|\_ Storage Transfer Service \_|\_ Google\
    \ Cloud Documentation"
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
Method: projects.agentPools.patch
Stay organized with collections
Save and categorize content based on your preferences.
Updates an existing agent pool resource.
HTTP request
PATCH https://storagetransfer.googleapis.com/v1/{agentPool.name=projects/*/agentPools/*}
The URL uses gRPC Transcoding syntax.
Path parameters
Parameters
agentPool.name
string
Required. Specifies a unique string that identifies the agent pool.
Format: projects/{projectId}/agentPools/{agentPoolId}
Query parameters
Parameters
updateMask
string ( FieldMask format)
The field mask of the fields in agentPool to update in this request. The following agentPool fields can be updated:
displayName
bandwidthLimit
This is a comma-separated list of fully qualified names of fields. Example: "user.displayName,photo" .
Request body
The request body contains an instance of AgentPool .
Response body
If successful, the response body contains an instance of AgentPool .
Authorization scopes
Requires the following OAuth scope:
https://www.googleapis.com/auth/cloud-platform
For more information, see the Authentication Overview .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-07-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-07-09 UTC."],[],[]]
