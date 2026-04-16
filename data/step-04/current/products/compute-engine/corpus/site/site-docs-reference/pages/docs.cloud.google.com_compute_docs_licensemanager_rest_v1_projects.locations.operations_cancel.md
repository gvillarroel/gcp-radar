---
title: "Method: projects.locations.operations.cancel \_|\_ Compute Engine \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/compute/docs/licensemanager/rest/v1/projects.locations.operations/cancel
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/compute/docs/apis
source_metadata:
  url: https://docs.cloud.google.com/compute/docs/licensemanager/rest/v1/projects.locations.operations/cancel
  title: "Method: projects.locations.operations.cancel \_|\_ Compute Engine \_|\_\
    \ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Compute
Compute Engine
APIs & Reference
Send feedback
Method: projects.locations.operations.cancel
Stay organized with collections
Save and categorize content based on your preferences.
HTTP request
Path parameters
Request body
Response body
Authorization scopes
IAM Permissions
Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns google.rpc.Code.UNIMPLEMENTED . Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1 , corresponding to Code.CANCELLED .
HTTP request
POST https://licensemanager.googleapis.com/v1/{name=projects/*/locations/*/operations/*}:cancel
The URL uses gRPC Transcoding syntax.
Path parameters
Parameters
name
string
The name of the operation resource to be cancelled.
Request body
The request body must be empty.
Response body
If successful, the response body is an empty JSON object.
Authorization scopes
Requires the following OAuth scope:
https://www.googleapis.com/auth/cloud-platform
For more information, see the Authentication Overview .
IAM Permissions
Requires the following IAM permission on the name resource:
licensemanager.operations.cancel
For more information, see the IAM documentation .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-07-28 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-07-28 UTC."],[],[]]
