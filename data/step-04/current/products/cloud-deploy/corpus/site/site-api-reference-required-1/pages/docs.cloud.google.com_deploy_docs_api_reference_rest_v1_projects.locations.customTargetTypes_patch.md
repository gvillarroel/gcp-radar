---
title: "Method: projects.locations.customTargetTypes.patch \_|\_ Cloud Deploy \_|\_\
  \ Google Cloud Documentation"
url: https://docs.cloud.google.com/deploy/docs/api/reference/rest/v1/projects.locations.customTargetTypes/patch
knowledge_key: corpus
source_id: site-api-reference-required-1
source_type: site
entrypoint: https://docs.cloud.google.com/deploy/docs/api/reference/rest/v1/projects.locations.deliveryPipelines.releases.rollouts/create
source_metadata:
  url: https://docs.cloud.google.com/deploy/docs/api/reference/rest/v1/projects.locations.customTargetTypes/patch
  title: "Method: projects.locations.customTargetTypes.patch \_|\_ Cloud Deploy \_\
    |\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
Cloud Deploy
Reference
Send feedback
Method: projects.locations.customTargetTypes.patch
Stay organized with collections
Save and categorize content based on your preferences.
HTTP request
Path parameters
Query parameters
Request body
Response body
Authorization scopes
IAM Permissions
Try it!
Updates a single CustomTargetType.
HTTP request
PATCH https://clouddeploy.googleapis.com/v1/{customTargetType.name=projects/*/locations/*/customTargetTypes/*}
The URL uses gRPC Transcoding syntax.
Path parameters
Parameters
customTargetType.name
string
Identifier. Name of the CustomTargetType . Format is projects/{project}/locations/{location}/customTargetTypes/{customTargetType} . The customTargetType component must match [a-z]([a-z0-9-]{0,61}[a-z0-9])?
Query parameters
Parameters
updateMask
string ( FieldMask format)
Required. Field mask is used to specify the fields to be overwritten by the update in the CustomTargetType resource. The fields specified in the updateMask are relative to the resource, not the full request. A field will be overwritten if it's in the mask. If the user doesn't provide a mask then all fields are overwritten.
This is a comma-separated list of fully qualified names of fields. Example: "user.displayName,photo" .
requestId
string
Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server knows to ignore the request if it has already been completed. The server guarantees that for at least 60 minutes after the first request.
For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments.
The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
allowMissing
boolean
Optional. If set to true, updating a CustomTargetType that does not exist will result in the creation of a new CustomTargetType .
validateOnly
boolean
Optional. If set to true, the request is validated and the user is provided with an expected result, but no actual change is made.
Request body
The request body contains an instance of CustomTargetType .
Response body
If successful, the response body contains an instance of Operation .
Authorization scopes
Requires the following OAuth scope:
https://www.googleapis.com/auth/cloud-platform
For more information, see the Authentication Overview .
IAM Permissions
Requires the following IAM permission on the name resource:
clouddeploy.customTargetTypes.update
For more information, see the IAM documentation .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-06-13 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-06-13 UTC."],[],[]]
