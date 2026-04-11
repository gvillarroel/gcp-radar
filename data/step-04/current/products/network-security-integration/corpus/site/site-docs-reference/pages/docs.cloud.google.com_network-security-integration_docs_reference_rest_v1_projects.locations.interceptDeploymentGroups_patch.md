---
title: "Method: projects.locations.interceptDeploymentGroups.patch \_|\_ Network Security\
  \ Integration \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/network-security-integration/docs/reference/rest/v1/projects.locations.interceptDeploymentGroups/patch
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/network-security-integration/docs/apis
source_metadata:
  url: https://docs.cloud.google.com/network-security-integration/docs/reference/rest/v1/projects.locations.interceptDeploymentGroups/patch
  title: "Method: projects.locations.interceptDeploymentGroups.patch \_|\_ Network\
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
Method: projects.locations.interceptDeploymentGroups.patch
Stay organized with collections
Save and categorize content based on your preferences.
Updates a deployment group. See https://google.aip.dev/134 .
HTTP request
PATCH https://networksecurity.googleapis.com/v1/{interceptDeploymentGroup.name=projects/*/locations/*/interceptDeploymentGroups/*}
The URL uses gRPC Transcoding syntax.
Path parameters
Parameters
interceptDeploymentGroup.name
string
Immutable. Identifier. The resource name of this deployment group, for example: projects/123456789/locations/global/interceptDeploymentGroups/my-dg . See https://google.aip.dev/122 for more details.
Query parameters
Parameters
updateMask
string ( FieldMask format)
Optional. The list of fields to update. Fields are specified relative to the deployment group (e.g. description ; not interceptDeploymentGroup.description ). See https://google.aip.dev/161 for more details.
This is a comma-separated list of fully qualified names of fields. Example: "user.displayName,photo" .
requestId
string
Optional. A unique identifier for this request. Must be a UUID4. This request is only idempotent if a requestId is provided. See https://google.aip.dev/155 for more details.
Request body
The request body contains an instance of InterceptDeploymentGroup .
Response body
If successful, the response body contains an instance of Operation .
Authorization scopes
Requires the following OAuth scope:
https://www.googleapis.com/auth/cloud-platform
For more information, see the Authentication Overview .
IAM Permissions
Requires the following IAM permission on the name resource:
networksecurity.interceptDeploymentGroups.update
For more information, see the IAM documentation .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-12-23 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-12-23 UTC."],[],[]]
