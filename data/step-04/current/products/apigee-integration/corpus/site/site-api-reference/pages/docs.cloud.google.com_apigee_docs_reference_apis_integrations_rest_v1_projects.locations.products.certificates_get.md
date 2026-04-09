---
title: "Method: projects.locations.products.certificates.get \_|\_ Apigee \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/apigee/docs/reference/apis/integrations/rest/v1/projects.locations.products.certificates/get
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/apigee/docs/reference/apis/integrations/rest
source_metadata:
  url: https://docs.cloud.google.com/apigee/docs/reference/apis/integrations/rest/v1/projects.locations.products.certificates/get
  title: "Method: projects.locations.products.certificates.get \_|\_ Apigee \_|\_\
    \ Google Cloud Documentation"
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
Method: projects.locations.products.certificates.get
Stay organized with collections
Save and categorize content based on your preferences.
HTTP request
Path parameters
Request body
Response body
Authorization Scopes
IAM Permissions
Get a certificates in the specified project.
HTTP request
GET https://integrations.googleapis.com/v1/{name=projects/*/locations/*/products/*/certificates/*}
The URL uses gRPC Transcoding syntax.
Path parameters
Parameters
name
string
Required. The certificate to retrieve. Format: projects/{project}/locations/{location}/certificates/{certificate}
Request body
The request body must be empty.
Response body
If successful, the response body contains an instance of Certificate .
Authorization Scopes
Requires the following OAuth scope:
https://www.googleapis.com/auth/cloud-platform
For more information, see the Authentication Overview .
IAM Permissions
Requires one of the following IAM permissions on the name resource, depending on the resource type:
integrations.apigeeCertificates.get
integrations.certificates.get
For more information, see the IAM documentation .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-07-28 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-07-28 UTC."],[],[]]
