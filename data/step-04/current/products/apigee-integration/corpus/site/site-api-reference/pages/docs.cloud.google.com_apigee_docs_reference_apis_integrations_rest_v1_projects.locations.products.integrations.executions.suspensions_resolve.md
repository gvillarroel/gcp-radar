---
title: "Method: projects.locations.products.integrations.executions.suspensions.resolve\
  \ \_|\_ Apigee \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/apigee/docs/reference/apis/integrations/rest/v1/projects.locations.products.integrations.executions.suspensions/resolve
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/apigee/docs/reference/apis/integrations/rest
source_metadata:
  url: https://docs.cloud.google.com/apigee/docs/reference/apis/integrations/rest/v1/projects.locations.products.integrations.executions.suspensions/resolve
  title: "Method: projects.locations.products.integrations.executions.suspensions.resolve\
    \ \_|\_ Apigee \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
Apigee
Send feedback
Method: projects.locations.products.integrations.executions.suspensions.resolve
Stay organized with collections
Save and categorize content based on your preferences.
HTTP request
Path parameters
Request body
JSON representation
Response body
Authorization Scopes
IAM Permissions
* Resolves (lifts/rejects) any number of suspensions. If the integration is already running, only the status of the suspension is updated. Otherwise, the suspended integration will begin execution again.
HTTP request
POST https://integrations.googleapis.com/v1/{name=projects/*/locations/*/products/*/integrations/*/executions/*/suspensions/*}:resolve
The URL uses gRPC Transcoding syntax.
Path parameters
Parameters
name
string
Required. projects/{gcpProjectId}/locations/{location}/products/{product}/integrations/{integration_name}/executions/{execution_name}/suspensions/{suspensionId}
Request body
The request body contains data with the following structure:
JSON representation
{
"suspension" : {
object ( Suspension )
}
}
Fields
suspension
object ( Suspension )
Suspension, containing the eventExecutionInfoId, taskId, and state to set on the corresponding suspension record.
Response body
If successful, the response body is empty.
Authorization Scopes
Requires the following OAuth scope:
https://www.googleapis.com/auth/cloud-platform
For more information, see the Authentication Overview .
IAM Permissions
Requires one of the following IAM permissions on the name resource, depending on the resource type:
integrations.apigeeSuspensions.resolve
integrations.suspensions.resolve
For more information, see the IAM documentation .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-07-28 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-07-28 UTC."],[],[]]
