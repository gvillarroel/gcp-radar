---
title: "Method: projects.locations.caPools.certificateAuthorities.certificateRevocationLists.list\
  \ \_|\_ Certificate Authority Service \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/certificate-authority-service/docs/reference/rest/v1/projects.locations.caPools.certificateAuthorities.certificateRevocationLists/list
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/certificate-authority-service/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/certificate-authority-service/docs/reference/rest/v1/projects.locations.caPools.certificateAuthorities.certificateRevocationLists/list
  title: "Method: projects.locations.caPools.certificateAuthorities.certificateRevocationLists.list\
    \ \_|\_ Certificate Authority Service \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Security
Certificate Authority Service
Reference
Send feedback
Method: projects.locations.caPools.certificateAuthorities.certificateRevocationLists.list
Stay organized with collections
Save and categorize content based on your preferences.
HTTP request
Path parameters
Query parameters
Request body
Response body
JSON representation
Authorization scopes
Lists CertificateRevocationLists .
HTTP request
GET https://privateca.googleapis.com/v1/{parent=projects/*/locations/*/caPools/*/certificateAuthorities/*}/certificateRevocationLists
The URL uses gRPC Transcoding syntax.
Path parameters
Parameters
parent
string
Required. The resource name of the location associated with the CertificateRevocationLists , in the format projects/*/locations/*/caPools/*/certificateAuthorities/* .
Authorization requires the following IAM permission on the specified resource parent :
privateca.certificateRevocationLists.list
Query parameters
Parameters
pageSize
integer
Optional. Limit on the number of CertificateRevocationLists to include in the response. Further CertificateRevocationLists can subsequently be obtained by including the ListCertificateRevocationListsResponse.next_page_token in a subsequent request. If unspecified, the server will pick an appropriate default.
pageToken
string
Optional. Pagination token, returned earlier via ListCertificateRevocationListsResponse.next_page_token .
filter
string
Optional. Only include resources that match the filter in the response.
orderBy
string
Optional. Specify how the results should be sorted.
Request body
The request body must be empty.
Response body
Response message for CertificateAuthorityService.ListCertificateRevocationLists .
If successful, the response body contains data with the following structure:
JSON representation
{
"certificateRevocationLists" : [
{
object ( CertificateRevocationList )
}
] ,
"nextPageToken" : string ,
"unreachable" : [
string
]
}
Fields
certificateRevocationLists[]
object ( CertificateRevocationList )
The list of CertificateRevocationLists .
nextPageToken
string
A token to retrieve next page of results. Pass this value in ListCertificateRevocationListsRequest.page_token to retrieve the next page of results.
unreachable[]
string
A list of locations (e.g. "us-west1") that could not be reached.
Authorization scopes
Requires the following OAuth scope:
https://www.googleapis.com/auth/cloud-platform
For more information, see the Authentication Overview .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-05-30 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-05-30 UTC."],[],[]]
