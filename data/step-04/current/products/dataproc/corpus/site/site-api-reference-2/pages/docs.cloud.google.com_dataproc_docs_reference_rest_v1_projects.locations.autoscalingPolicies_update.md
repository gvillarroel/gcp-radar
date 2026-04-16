---
title: "Method: projects.locations.autoscalingPolicies.update \_|\_ Managed Service\
  \ for Apache Spark \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/projects.locations.autoscalingPolicies/update
knowledge_key: corpus
source_id: site-api-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/dataproc/docs/reference/libraries
source_metadata:
  url: https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/projects.locations.autoscalingPolicies/update
  title: "Method: projects.locations.autoscalingPolicies.update \_|\_ Managed Service\
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
Method: projects.locations.autoscalingPolicies.update
Stay organized with collections
Save and categorize content based on your preferences.
HTTP request
Path parameters
Request body
Response body
Authorization scopes
Try it!
Updates (replaces) autoscaling policy.
Disabled check for updateMask, because all updates will be full replacements.
HTTP request
PUT https://dataproc.googleapis.com/v1/{policy.name=projects/*/locations/*/autoscalingPolicies/*}
The URL uses gRPC Transcoding syntax.
Path parameters
Parameters
policy.name
string
Output only. The "resource name" of the autoscaling policy, as described in https://cloud.google.com/apis/design/resource_names .
For projects.regions.autoscalingPolicies , the resource name of the policy has the following format: projects/{projectId}/regions/{region}/autoscalingPolicies/{policyId}
For projects.locations.autoscalingPolicies , the resource name of the policy has the following format: projects/{projectId}/locations/{location}/autoscalingPolicies/{policyId}
Request body
The request body contains an instance of AutoscalingPolicy .
Response body
If successful, the response body contains an instance of AutoscalingPolicy .
Authorization scopes
Requires the following OAuth scope:
https://www.googleapis.com/auth/cloud-platform
For more information, see the Authentication Overview .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-10-15 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-10-15 UTC."],[],[]]
