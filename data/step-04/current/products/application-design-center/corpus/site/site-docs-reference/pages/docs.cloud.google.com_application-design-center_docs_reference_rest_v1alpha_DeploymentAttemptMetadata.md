---
title: "DeploymentAttemptMetadata \_|\_ Application Design Center \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/application-design-center/docs/reference/rest/v1alpha/DeploymentAttemptMetadata
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/application-design-center/docs/apis
source_metadata:
  url: https://docs.cloud.google.com/application-design-center/docs/reference/rest/v1alpha/DeploymentAttemptMetadata
  title: "DeploymentAttemptMetadata \_|\_ Application Design Center \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
Application Design Center
Reference
Send feedback
DeploymentAttemptMetadata
Stay organized with collections
Save and categorize content based on your preferences.
JSON representation
DeploymentAttemptMetadata represents a previous deployment attempt for an operation that failed due to a retryable error.
JSON representation
{
"attempt" : integer ,
"errorDetail" : string ,
"build" : string
}
Fields
attempt
integer
The sequential number of the attempt (starting from 1).
errorDetail
string
Human readable string that summarizes the deployment error issue.
build
string
The build or execution ID associated with this specific attempt. This can be used to link back to logs or trace information.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-09-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-09-10 UTC."],[],[]]
