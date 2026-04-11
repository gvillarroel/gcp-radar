---
title: "Method: apps.authorizedCertificates.patch \_|\_ App Engine Admin API \_|\_\
  \ Google Cloud Documentation"
url: https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.authorizedCertificates/patch
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://cloud.google.com/appengine/docs/admin-api/reference/rest
source_metadata:
  url: https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.authorizedCertificates/patch
  title: "Method: apps.authorizedCertificates.patch \_|\_ App Engine Admin API \_\
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
Method: apps.authorizedCertificates.patch
Stay organized with collections
Save and categorize content based on your preferences.
HTTP request
Path parameters
Query parameters
Request body
Response body
Authorization Scopes
Try it!
Updates the specified SSL certificate. To renew a certificate and maintain its existing domain mappings, update certificate_data with a new certificate. The new certificate must be applicable to the same domains as the original certificate. The certificate displayName may also be updated.
HTTP request
PATCH https://appengine.googleapis.com/v1/{name=apps/*/authorizedCertificates/*}
The URL uses gRPC Transcoding syntax.
Path parameters
Parameters
name
string
Name of the resource to update. Example: apps/myapp/authorizedCertificates/12345 .
Authorization requires the following IAM permission on the specified resource name :
appengine.applications.update
Query parameters
Parameters
updateMask
string ( FieldMask format)
Standard field mask for the set of fields to be updated. Updates are only supported on the certificateRawData and displayName fields.
This is a comma-separated list of fully qualified names of fields. Example: "user.displayName,photo" .
Request body
The request body contains an instance of AuthorizedCertificate .
Response body
If successful, the response body contains an instance of AuthorizedCertificate .
Authorization Scopes
Requires the following OAuth scope:
https://www.googleapis.com/auth/cloud-platform
For more information, see the Authentication Overview .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-06-16 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-06-16 UTC."],[],[]]
