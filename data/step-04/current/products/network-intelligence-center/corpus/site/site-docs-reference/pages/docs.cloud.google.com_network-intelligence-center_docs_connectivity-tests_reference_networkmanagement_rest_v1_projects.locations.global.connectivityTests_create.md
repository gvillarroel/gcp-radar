---
title: "Method: projects.locations.global.connectivityTests.create \_|\_ Network Intelligence\
  \ Center \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/reference/networkmanagement/rest/v1/projects.locations.global.connectivityTests/create
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/network-intelligence-center/docs/reference/enable-api
source_metadata:
  url: https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/reference/networkmanagement/rest/v1/projects.locations.global.connectivityTests/create
  title: "Method: projects.locations.global.connectivityTests.create \_|\_ Network\
    \ Intelligence Center \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Networking
Network Intelligence Center
Reference
Send feedback
Method: projects.locations.global.connectivityTests.create
Stay organized with collections
Save and categorize content based on your preferences.
HTTP request
Path parameters
Query parameters
Request body
Response body
Authorization scopes
Try it!
Creates a new Connectivity Test. After you create a test, the reachability analysis is performed as part of the long running operation, which completes when the analysis completes.
If the endpoint specifications in ConnectivityTest are invalid (for example, containing non-existent resources in the network, or you don't have read permissions to the network configurations of listed projects), then the reachability result returns a value of UNKNOWN .
If the endpoint specifications in ConnectivityTest are incomplete, the reachability result returns a value of
AMBIGUOUS
. For more information, see the Connectivity Test documentation.
HTTP request
POST https://networkmanagement.googleapis.com/v1/{parent=projects/*/locations/global}/connectivityTests
The URL uses gRPC Transcoding syntax.
Path parameters
Parameters
parent
string
Required. The parent resource of the Connectivity Test to create: projects/{projectId}/locations/global
Authorization requires the following IAM permission on the specified resource parent :
networkmanagement.connectivitytests.create
Query parameters
Parameters
testId
string
Required. The logical name of the Connectivity Test in your project with the following restrictions:
Must contain only lowercase letters, numbers, and hyphens.
Must start with a letter.
Must be between 1-40 characters.
Must end with a number or a letter.
Must be unique within the customer project
Request body
The request body contains an instance of ConnectivityTest .
Response body
If successful, the response body contains a newly created instance of Operation .
Authorization scopes
Requires the following OAuth scope:
https://www.googleapis.com/auth/cloud-platform
For more information, see the Authentication Overview .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-06-13 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-06-13 UTC."],[],[]]
