---
title: "Method: projects.locations.products.integrations.executions.suspensions.lift\
  \ \_|\_ Apigee \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/apigee/docs/reference/apis/integrations/rest/v1/projects.locations.products.integrations.executions.suspensions/lift
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/apigee/docs/reference/apis/integrations/rest
source_metadata:
  url: https://docs.cloud.google.com/apigee/docs/reference/apis/integrations/rest/v1/projects.locations.products.integrations.executions.suspensions/lift
  title: "Method: projects.locations.products.integrations.executions.suspensions.lift\
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
Method: projects.locations.products.integrations.executions.suspensions.lift
Stay organized with collections
Save and categorize content based on your preferences.
HTTP request
Path parameters
Request body
JSON representation
Response body
Authorization Scopes
IAM Permissions
* Lifts suspension for advanced suspension task. Fetch corresponding suspension with provided suspension Id, resolve suspension, and set up suspension result for the Suspension Task.
HTTP request
POST https://integrations.googleapis.com/v1/{name=projects/*/locations/*/products/*/integrations/*/executions/*/suspensions/*}:lift
The URL uses gRPC Transcoding syntax.
Path parameters
Parameters
name
string
Required. The resource that the suspension belongs to. "projects/{project}/locations/{location}/products/{product}/integrations/{integration}/executions/{execution}/suspensions/{suspenion}" format.
Request body
The request body contains data with the following structure:
JSON representation
{
"suspensionResult" : string
}
Fields
suspensionResult
string
User passed in suspension result and will be used to control workflow execution branching behavior by setting up corresponnding edge condition with suspension result. For example, if you want to lift the suspension, you can pass "Approved", or if you want to reject the suspension and terminate workfloe execution, you can pass "Rejected" and terminate the workflow execution with configuring the edge condition.
Response body
If successful, the response body contains an instance of LiftSuspensionResponse .
Authorization Scopes
Requires the following OAuth scope:
https://www.googleapis.com/auth/cloud-platform
For more information, see the Authentication Overview .
IAM Permissions
Requires one of the following IAM permissions on the name resource, depending on the resource type:
integrations.apigeeSuspensions.lift
integrations.suspensions.lift
For more information, see the IAM documentation .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-07-28 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-07-28 UTC."],[],[]]
