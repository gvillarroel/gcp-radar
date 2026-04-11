---
title: "ListAutoscalingPoliciesResponse \_|\_ Managed Service for Apache Spark \_\
  |\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ListAutoscalingPoliciesResponse
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/dataproc/docs/reference
source_metadata:
  url: https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ListAutoscalingPoliciesResponse
  title: "ListAutoscalingPoliciesResponse \_|\_ Managed Service for Apache Spark \_\
    |\_ Google Cloud Documentation"
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
ListAutoscalingPoliciesResponse
Stay organized with collections
Save and categorize content based on your preferences.
JSON representation
A response to a request to list autoscaling policies in a project.
JSON representation
{
"policies" : [
{
object ( AutoscalingPolicy )
}
] ,
"nextPageToken" : string
}
Fields
policies[]
object ( AutoscalingPolicy )
Output only. Autoscaling policies list.
nextPageToken
string
Output only. This token is included in the response if there are more results to fetch.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-06-20 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-06-20 UTC."],[],[]]
