---
title: "Method: projects.locations.operations.delete \_|\_ Blockchain Node Engine\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rest/v1/projects.locations.operations/delete
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rest/v1/projects.locations.operations/delete
  title: "Method: projects.locations.operations.delete \_|\_ Blockchain Node Engine\
    \ \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application hosting
Blockchain Node Engine
Reference
Send feedback
Method: projects.locations.operations.delete
Stay organized with collections
Save and categorize content based on your preferences.
HTTP request
Path parameters
Request body
Response body
Authorization scopes
IAM Permissions
Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns google.rpc.Code.UNIMPLEMENTED .
HTTP request
DELETE https://blockchainnodeengine.googleapis.com/v1/{name=projects/*/locations/*/operations/*}
The URL uses gRPC Transcoding syntax.
Path parameters
Parameters
name
string
The name of the operation resource to be deleted.
Request body
The request body must be empty.
Response body
If successful, the response body is empty.
Authorization scopes
Requires the following OAuth scope:
https://www.googleapis.com/auth/cloud-platform
For more information, see the Authentication Overview .
IAM Permissions
Requires the following IAM permission on the name resource:
blockchainnodeengine.operations.delete
For more information, see the IAM documentation .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-05-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-05-14 UTC."],[],[]]
