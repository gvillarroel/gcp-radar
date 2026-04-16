---
title: "Method: apps.authorizedCertificates.create \_|\_ App Engine Admin API \_|\_\
  \ Google Cloud Documentation"
url: https://docs.cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.authorizedCertificates/create
knowledge_key: corpus
source_id: site-docs-reference-4
source_type: site
entrypoint: https://docs.cloud.google.com/appengine/docs/admin-api/reference/rpc/google.appengine.v1
source_metadata:
  url: https://docs.cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.authorizedCertificates/create
  title: "Method: apps.authorizedCertificates.create \_|\_ App Engine Admin API \_\
    |\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Technology areas
App Engine
Admin API
Reference
Send feedback
Method: apps.authorizedCertificates.create
Stay organized with collections
Save and categorize content based on your preferences.
HTTP request
Path parameters
Request body
Response body
Authorization Scopes
Try it!
Uploads the specified SSL certificate.
HTTP request
POST https://appengine.googleapis.com/v1/{parent=apps/*}/authorizedCertificates
The URL uses gRPC Transcoding syntax.
Path parameters
Parameters
parent
string
Name of the parent Application resource. Example: apps/myapp .
Authorization requires the following IAM permission on the specified resource parent :
appengine.applications.update
Request body
The request body contains an instance of AuthorizedCertificate .
Response body
If successful, the response body contains a newly created instance of AuthorizedCertificate .
Authorization Scopes
Requires the following OAuth scope:
https://www.googleapis.com/auth/cloud-platform
For more information, see the Authentication Overview .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-06-16 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-06-16 UTC."],[],[]]
