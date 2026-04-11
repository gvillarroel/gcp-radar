---
title: "CloudRunMetadata \_|\_ Cloud Deploy \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/deploy/docs/api/reference/rest/v1/CloudRunMetadata
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/deploy/docs/api
source_metadata:
  url: https://docs.cloud.google.com/deploy/docs/api/reference/rest/v1/CloudRunMetadata
  title: "CloudRunMetadata \_|\_ Cloud Deploy \_|\_ Google Cloud Documentation"
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
CloudRunMetadata
Stay organized with collections
Save and categorize content based on your preferences.
JSON representation
CloudRunMetadata contains information from a Cloud Run deployment.
JSON representation
{
"service" : string ,
"serviceUrls" : [
string
] ,
"revision" : string ,
"job" : string
}
Fields
service
string
Output only. The name of the Cloud Run Service that is associated with a Rollout . Format is projects/{project}/locations/{location}/services/{service} .
serviceUrls[]
string
Output only. The Cloud Run Service urls that are associated with a Rollout .
revision
string
Output only. The Cloud Run Revision id associated with a Rollout .
job
string
Output only. The name of the Cloud Run job that is associated with a Rollout . Format is projects/{project}/locations/{location}/jobs/{jobName} .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-06-13 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-06-13 UTC."],[],[]]
