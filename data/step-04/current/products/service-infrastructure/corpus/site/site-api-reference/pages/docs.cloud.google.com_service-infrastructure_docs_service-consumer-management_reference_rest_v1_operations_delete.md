---
title: "Method: operations.delete \_|\_ Service Infrastructure \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/service-infrastructure/docs/service-consumer-management/reference/rest/v1/operations/delete
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/service-infrastructure/docs/service-management/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/service-infrastructure/docs/service-consumer-management/reference/rest/v1/operations/delete
  title: "Method: operations.delete \_|\_ Service Infrastructure \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
Service Infrastructure
Reference
Send feedback
Method: operations.delete
Stay organized with collections
Save and categorize content based on your preferences.
HTTP request
Path parameters
Request body
Response body
Authorization Scopes
Try it!
Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns google.rpc.Code.UNIMPLEMENTED .
HTTP request
DELETE https://serviceconsumermanagement.googleapis.com/v1/{name=operations/**}
The URL uses gRPC Transcoding syntax.
Path parameters
Parameters
name
string
The name of the operation resource to be deleted.
Request body
The request body must be empty.
Response body
If successful, the response body will be empty.
Authorization Scopes
Requires the following OAuth scope:
https://www.googleapis.com/auth/cloud-platform
For more information, see the Authentication Overview .
Try it!
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-05-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-05-14 UTC."],[],[]]
