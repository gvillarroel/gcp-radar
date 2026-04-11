---
title: "Method: projects.locations.certificateIssuanceConfigs.list \_|\_ Certificate\
  \ Manager \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/certificate-manager/docs/reference/certificate-manager/rest/v1/projects.locations.certificateIssuanceConfigs/list
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/certificate-manager/docs/apis
source_metadata:
  url: https://docs.cloud.google.com/certificate-manager/docs/reference/certificate-manager/rest/v1/projects.locations.certificateIssuanceConfigs/list
  title: "Method: projects.locations.certificateIssuanceConfigs.list \_|\_ Certificate\
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
Method: projects.locations.certificateIssuanceConfigs.list
Stay organized with collections
Save and categorize content based on your preferences.
HTTP request
Path parameters
Query parameters
Request body
Response body
JSON representation
Authorization scopes
Try it!
Lists CertificateIssuanceConfigs in a given project and location.
HTTP request
GET https://certificatemanager.googleapis.com/v1/{parent=projects/*/locations/*}/certificateIssuanceConfigs
The URL uses gRPC Transcoding syntax.
Path parameters
Parameters
parent
string
Required. The project and location from which the certificate should be listed, specified in the format projects/*/locations/* .
Authorization requires the following IAM permission on the specified resource parent :
certificatemanager.certissuanceconfigs.list
Query parameters
Parameters
pageSize
integer
Optional. Maximum number of certificate configs to return per call.
pageToken
string
Optional. The value returned by the last ListCertificateIssuanceConfigsResponse . Indicates that this is a continuation of a prior certificateIssuanceConfigs.list call, and that the system should return the next page of data.
filter
string
Optional. Filter expression to restrict the Certificates Configs returned.
orderBy
string
Optional. A list of Certificate Config field names used to specify the order of the returned results. The default sorting order is ascending. To specify descending order for a field, add a suffix " desc" .
Request body
The request body must be empty.
Response body
Response for the certificateIssuanceConfigs.list method.
If successful, the response body contains data with the following structure:
JSON representation
{
"certificateIssuanceConfigs" : [
{
object ( CertificateIssuanceConfig )
}
] ,
"nextPageToken" : string ,
"unreachable" : [
string
]
}
Fields
certificateIssuanceConfigs[]
object ( CertificateIssuanceConfig )
A list of certificate configs for the parent resource.
nextPageToken
string
If there might be more results than those appearing in this response, then nextPageToken is included. To get the next set of results, call this method again using the value of nextPageToken as pageToken .
unreachable[]
string
Locations that could not be reached.
Authorization scopes
Requires the following OAuth scope:
https://www.googleapis.com/auth/cloud-platform
For more information, see the Authentication Overview .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-07-17 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-07-17 UTC."],[],[]]
