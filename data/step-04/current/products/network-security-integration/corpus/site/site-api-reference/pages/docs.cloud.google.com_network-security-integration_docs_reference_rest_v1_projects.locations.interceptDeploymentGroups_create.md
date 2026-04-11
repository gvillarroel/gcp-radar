---
title: "Method: projects.locations.interceptDeploymentGroups.create \_|\_ Network\
  \ Security Integration \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/network-security-integration/docs/reference/rest/v1/projects.locations.interceptDeploymentGroups/create
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/network-security-integration/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/network-security-integration/docs/reference/rest/v1/projects.locations.interceptDeploymentGroups/create
  title: "Method: projects.locations.interceptDeploymentGroups.create \_|\_ Network\
    \ Security Integration \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Technology areas
Network Security Integration
Reference
Send feedback
Method: projects.locations.interceptDeploymentGroups.create
Stay organized with collections
Save and categorize content based on your preferences.
Creates a deployment group in a given project and location. See https://google.aip.dev/133 .
HTTP request
POST https://networksecurity.googleapis.com/v1/{parent=projects/*/locations/*}/interceptDeploymentGroups
The URL uses gRPC Transcoding syntax.
Path parameters
Parameters
parent
string
Required. The parent resource where this deployment group will be created. Format: projects/{project}/locations/{location}
Query parameters
Parameters
interceptDeploymentGroupId
string
Required. The ID to use for the new deployment group, which will become the final component of the deployment group's resource name.
requestId
string
Optional. A unique identifier for this request. Must be a UUID4. This request is only idempotent if a requestId is provided. See https://google.aip.dev/155 for more details.
Request body
The request body contains an instance of InterceptDeploymentGroup .
Response body
If successful, the response body contains a newly created instance of Operation .
Authorization scopes
Requires the following OAuth scope:
https://www.googleapis.com/auth/cloud-platform
For more information, see the Authentication Overview .
IAM Permissions
Requires the following IAM permission on the parent resource:
networksecurity.interceptDeploymentGroups.create
For more information, see the IAM documentation .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-12-23 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-12-23 UTC."],[],[]]
