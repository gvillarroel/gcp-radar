---
title: "Method: apps.authorizedCertificates.get \_|\_ App Engine Admin API \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.authorizedCertificates/get
knowledge_key: corpus
source_id: site-docs-reference-3
source_type: site
entrypoint: https://docs.cloud.google.com/appengine/docs/admin-api/reference/rpc
source_metadata:
  url: https://docs.cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.authorizedCertificates/get
  title: "Method: apps.authorizedCertificates.get \_|\_ App Engine Admin API \_|\_\
    \ Google Cloud Documentation"
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
Method: apps.authorizedCertificates.get
Stay organized with collections
Save and categorize content based on your preferences.
HTTP request
Path parameters
Query parameters
Request body
Response body
Authorization Scopes
Try it!
Gets the specified SSL certificate.
HTTP request
GET https://appengine.googleapis.com/v1/{name=apps/*/authorizedCertificates/*}
The URL uses gRPC Transcoding syntax.
Path parameters
Parameters
name
string
Name of the resource requested. Example: apps/myapp/authorizedCertificates/12345 .
Authorization requires the following IAM permission on the specified resource name :
appengine.applications.get
Query parameters
Parameters
view
enum ( AuthorizedCertificateView )
Controls the set of fields returned in the GET response.
Request body
The request body must be empty.
Response body
If successful, the response body contains an instance of AuthorizedCertificate .
Authorization Scopes
Requires one of the following OAuth scopes:
https://www.googleapis.com/auth/appengine.admin
https://www.googleapis.com/auth/cloud-platform
https://www.googleapis.com/auth/cloud-platform.read-only
For more information, see the Authentication Overview .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-06-16 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-06-16 UTC."],[],[]]
