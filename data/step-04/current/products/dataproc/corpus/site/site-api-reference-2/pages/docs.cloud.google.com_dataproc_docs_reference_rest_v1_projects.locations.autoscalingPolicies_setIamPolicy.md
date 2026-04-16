---
title: "Method: projects.locations.autoscalingPolicies.setIamPolicy \_|\_ Managed\
  \ Service for Apache Spark \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/projects.locations.autoscalingPolicies/setIamPolicy
knowledge_key: corpus
source_id: site-api-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/dataproc/docs/reference/libraries
source_metadata:
  url: https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/projects.locations.autoscalingPolicies/setIamPolicy
  title: "Method: projects.locations.autoscalingPolicies.setIamPolicy \_|\_ Managed\
    \ Service for Apache Spark \_|\_ Google Cloud Documentation"
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
Method: projects.locations.autoscalingPolicies.setIamPolicy
Stay organized with collections
Save and categorize content based on your preferences.
HTTP request
Path parameters
Request body
JSON representation
Response body
Authorization scopes
Try it!
Sets the access control policy on the specified resource. Replaces any existing policy.
Can return NOT_FOUND , INVALID_ARGUMENT , and PERMISSION_DENIED errors.
HTTP request
POST https://dataproc.googleapis.com/v1/{resource=projects/*/locations/*/autoscalingPolicies/*}:setIamPolicy
The URL uses gRPC Transcoding syntax.
Path parameters
Parameters
resource
string
REQUIRED: The resource for which the policy is being specified. See Resource names for the appropriate value for this field.
Request body
The request body contains data with the following structure:
JSON representation
{
"policy" : {
object ( Policy )
}
}
Fields
policy
object ( Policy )
REQUIRED: The complete policy to be applied to the resource . The size of the policy is limited to a few 10s of KB. An empty policy is a valid policy but certain Google Cloud services (such as Projects) might reject them.
Response body
If successful, the response body contains an instance of Policy .
Authorization scopes
Requires the following OAuth scope:
https://www.googleapis.com/auth/cloud-platform
For more information, see the Authentication Overview .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-06-20 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-06-20 UTC."],[],[]]
