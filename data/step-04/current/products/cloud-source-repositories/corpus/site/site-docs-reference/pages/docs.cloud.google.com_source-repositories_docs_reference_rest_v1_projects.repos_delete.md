---
title: "Method: projects.repos.delete \_|\_ Cloud Source Repositories \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/source-repositories/docs/reference/rest/v1/projects.repos/delete
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/source-repositories/docs/apis
source_metadata:
  url: https://docs.cloud.google.com/source-repositories/docs/reference/rest/v1/projects.repos/delete
  title: "Method: projects.repos.delete \_|\_ Cloud Source Repositories \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Effective June 17, 2024, Cloud Source Repositories isn't available to new customers. For alternative source hosting options, Secure Source Manager is a regionally deployed, single tenant, managed source code repository hosted on Google Cloud.
If your organization hasn't previously used Cloud Source Repositories, you can't enable the API or use Cloud Source Repositories. New projects not connected to an organization can't enable the Cloud Source Repositories API. Organizations that have used Cloud Source Repositories prior to June 17, 2024 are not affected by this change.
Home
Documentation
Application development
Cloud Source Repositories
Reference
Send feedback
Method: projects.repos.delete
Stay organized with collections
Save and categorize content based on your preferences.
HTTP request
Path parameters
Request body
Response body
Authorization scopes
Try it!
Deletes a repo.
HTTP request
DELETE https://sourcerepo.googleapis.com/v1/{name=projects/*/repos/**}
The URL uses gRPC Transcoding syntax.
Path parameters
Parameters
name
string
The name of the repo to delete. Values are of the form projects/<project>/repos/<repo> .
Authorization requires the following IAM permission on the specified resource name :
source.repos.delete
Request body
The request body must be empty.
Response body
If successful, the response body is empty.
Authorization scopes
Requires the following OAuth scope:
https://www.googleapis.com/auth/cloud-platform
For more information, see the Authentication Overview .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-06-27 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-06-27 UTC."],[],[]]
