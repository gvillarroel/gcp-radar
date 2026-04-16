---
title: "Method: apps.authorizedCertificates.list \_|\_ App Engine Admin API \_|\_\
  \ Google Cloud Documentation"
url: https://docs.cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.authorizedCertificates/list
knowledge_key: corpus
source_id: site-docs-reference-4
source_type: site
entrypoint: https://docs.cloud.google.com/appengine/docs/admin-api/reference/rpc/google.appengine.v1
source_metadata:
  url: https://docs.cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.authorizedCertificates/list
  title: "Method: apps.authorizedCertificates.list \_|\_ App Engine Admin API \_|\_\
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
Method: apps.authorizedCertificates.list
Stay organized with collections
Save and categorize content based on your preferences.
HTTP request
Path parameters
Query parameters
Request body
Response body
JSON representation
Authorization Scopes
Try it!
Lists all SSL certificates the user is authorized to administer.
HTTP request
GET https://appengine.googleapis.com/v1/{parent=apps/*}/authorizedCertificates
The URL uses gRPC Transcoding syntax.
Path parameters
Parameters
parent
string
Name of the parent Application resource. Example: apps/myapp .
Authorization requires the following IAM permission on the specified resource parent :
appengine.applications.get
Query parameters
Parameters
view
enum ( AuthorizedCertificateView )
Controls the set of fields returned in the LIST response.
pageSize
integer
Maximum results to return per page.
pageToken
string
Continuation token for fetching the next page of results.
Request body
The request body must be empty.
Response body
If successful, the response body contains data with the following structure:
Response message for AuthorizedCertificates.ListAuthorizedCertificates .
JSON representation
{
"certificates" : [
{
object ( AuthorizedCertificate )
}
] ,
"nextPageToken" : string
}
Fields
certificates[]
object ( AuthorizedCertificate )
The SSL certificates the user is authorized to administer.
nextPageToken
string
Continuation token for fetching the next page of results.
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
