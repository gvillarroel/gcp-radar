---
title: "Method: projects.locations.entityReconciliationJobs.create \_|\_ Enterprise\
  \ Knowledge Graph \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/enterprise-knowledge-graph/docs/reference/rest/v1/projects.locations.entityReconciliationJobs/create
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/enterprise-knowledge-graph/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/enterprise-knowledge-graph/docs/reference/rest/v1/projects.locations.entityReconciliationJobs/create
  title: "Method: projects.locations.entityReconciliationJobs.create \_|\_ Enterprise\
    \ Knowledge Graph \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
AI and ML
Enterprise Knowledge Graph
Reference
Send feedback
Method: projects.locations.entityReconciliationJobs.create
Stay organized with collections
Save and categorize content based on your preferences.
Creates a EntityReconciliationJob. A EntityReconciliationJob once created will right away be attempted to start.
HTTP request
POST https://enterpriseknowledgegraph.googleapis.com/v1/{parent}/entityReconciliationJobs
Path parameters
Parameters
parent
string
Required. The resource name of the Location to create the EntityReconciliationJob in. Format: projects/{project}/locations/{location} It takes the form projects/{project}/locations/{location} .
Request body
The request body contains an instance of EntityReconciliationJob .
Response body
If successful, the response body contains a newly created instance of EntityReconciliationJob .
Authorization Scopes
Requires the following OAuth scope:
https://www.googleapis.com/auth/cloud-platform
For more information, see the Authentication Overview .
IAM Permissions
Requires the following IAM permission on the parent resource:
enterpriseknowledgegraph.entityReconciliationJobs.create
For more information, see the IAM documentation .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-06-03 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-06-03 UTC."],[],[]]
