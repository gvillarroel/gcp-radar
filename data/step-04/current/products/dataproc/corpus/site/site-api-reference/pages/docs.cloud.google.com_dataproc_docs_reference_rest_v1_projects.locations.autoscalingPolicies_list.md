---
title: "Method: projects.locations.autoscalingPolicies.list \_|\_ Managed Service\
  \ for Apache Spark \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/projects.locations.autoscalingPolicies/list
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/dataproc/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/projects.locations.autoscalingPolicies/list
  title: "Method: projects.locations.autoscalingPolicies.list \_|\_ Managed Service\
    \ for Apache Spark \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

"Managed Service for Apache Spark" is the new name for the product formerly known as "Dataproc on Compute Engine" (cluster deployment) and "Google Cloud Serverless for Apache Spark" (serverless deployment).
Home
Documentation
Data analytics
Managed Service for Apache Spark
Reference
Send feedback
Method: projects.locations.autoscalingPolicies.list
Stay organized with collections
Save and categorize content based on your preferences.
HTTP request
Path parameters
Query parameters
Request body
Response body
Authorization scopes
Try it!
Lists autoscaling policies in the project.
HTTP request
GET https://dataproc.googleapis.com/v1/{parent=projects/*/locations/*}/autoscalingPolicies
The URL uses gRPC Transcoding syntax.
Path parameters
Parameters
parent
string
Required. The "resource name" of the region or location, as described in https://cloud.google.com/apis/design/resource_names .
For projects.regions.autoscalingPolicies.list , the resource name of the region has the following format: projects/{projectId}/regions/{region}
For projects.locations.autoscalingPolicies.list , the resource name of the location has the following format: projects/{projectId}/locations/{location}
Authorization requires the following IAM permission on the specified resource parent :
dataproc.autoscalingPolicies.list
Query parameters
Parameters
pageSize
integer
Optional. The maximum number of results to return in each response. Must be less than or equal to 1000. Defaults to 100.
pageToken
string
Optional. The page token, returned by a previous call, to request the next page of results.
Request body
The request body must be empty.
Response body
If successful, the response body contains an instance of ListAutoscalingPoliciesResponse .
Authorization scopes
Requires the following OAuth scope:
https://www.googleapis.com/auth/cloud-platform
For more information, see the Authentication Overview .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-06-20 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-06-20 UTC."],[],[]]
