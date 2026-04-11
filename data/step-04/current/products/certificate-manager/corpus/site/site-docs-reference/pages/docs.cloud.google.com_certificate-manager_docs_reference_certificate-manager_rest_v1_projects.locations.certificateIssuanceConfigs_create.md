---
title: "Method: projects.locations.certificateIssuanceConfigs.create \_|\_ Certificate\
  \ Manager \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/certificate-manager/docs/reference/certificate-manager/rest/v1/projects.locations.certificateIssuanceConfigs/create
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/certificate-manager/docs/apis
source_metadata:
  url: https://docs.cloud.google.com/certificate-manager/docs/reference/certificate-manager/rest/v1/projects.locations.certificateIssuanceConfigs/create
  title: "Method: projects.locations.certificateIssuanceConfigs.create \_|\_ Certificate\
    \ Manager \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Security
Certificate Manager
Reference
Send feedback
Method: projects.locations.certificateIssuanceConfigs.create
Stay organized with collections
Save and categorize content based on your preferences.
HTTP request
Path parameters
Query parameters
Request body
Response body
Authorization scopes
Try it!
Creates a new CertificateIssuanceConfig in a given project and location.
HTTP request
POST https://certificatemanager.googleapis.com/v1/{parent=projects/*/locations/*}/certificateIssuanceConfigs
The URL uses gRPC Transcoding syntax.
Path parameters
Parameters
parent
string
Required. The parent resource of the certificate issuance config. Must be in the format projects/*/locations/* .
Authorization requires the following IAM permission on the specified resource parent :
certificatemanager.certissuanceconfigs.create
Query parameters
Parameters
certificateIssuanceConfigId
string
Required. A user-provided name of the certificate config.
Request body
The request body contains an instance of CertificateIssuanceConfig .
Response body
If successful, the response body contains a newly created instance of Operation .
Authorization scopes
Requires the following OAuth scope:
https://www.googleapis.com/auth/cloud-platform
For more information, see the Authentication Overview .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-07-17 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-07-17 UTC."],[],[]]
