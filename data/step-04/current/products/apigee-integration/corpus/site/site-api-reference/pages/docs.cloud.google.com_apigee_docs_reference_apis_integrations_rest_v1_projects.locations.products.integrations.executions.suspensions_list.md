---
title: "Method: projects.locations.products.integrations.executions.suspensions.list\
  \ \_|\_ Apigee \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/apigee/docs/reference/apis/integrations/rest/v1/projects.locations.products.integrations.executions.suspensions/list
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/apigee/docs/reference/apis/integrations/rest
source_metadata:
  url: https://docs.cloud.google.com/apigee/docs/reference/apis/integrations/rest/v1/projects.locations.products.integrations.executions.suspensions/list
  title: "Method: projects.locations.products.integrations.executions.suspensions.list\
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
Method: projects.locations.products.integrations.executions.suspensions.list
Stay organized with collections
Save and categorize content based on your preferences.
HTTP request
Path parameters
Query parameters
Request body
Response body
Authorization Scopes
IAM Permissions
* Lists suspensions associated with a specific execution. Only those with permissions to resolve the relevant suspensions will be able to view them.
HTTP request
GET https://integrations.googleapis.com/v1/{parent=projects/*/locations/*/products/*/integrations/*/executions/*}/suspensions
The URL uses gRPC Transcoding syntax.
Path parameters
Parameters
parent
string
Required. projects/{gcpProjectId}/locations/{location}/products/{product}/integrations/{integration_name}/executions/{execution_name}
Query parameters
Parameters
pageSize
integer
Maximum number of entries in the response.
pageToken
string
Token to retrieve a specific page.
filter
string
Standard filter field.
orderBy
string
Field name to order by.
Request body
The request body must be empty.
Response body
If successful, the response body contains an instance of ListSuspensionsResponse .
Authorization Scopes
Requires the following OAuth scope:
https://www.googleapis.com/auth/cloud-platform
For more information, see the Authentication Overview .
IAM Permissions
Requires one of the following IAM permissions on the parent resource, depending on the resource type:
integrations.apigeeSuspensions.list
integrations.suspensions.list
For more information, see the IAM documentation .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-07-28 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-07-28 UTC."],[],[]]
