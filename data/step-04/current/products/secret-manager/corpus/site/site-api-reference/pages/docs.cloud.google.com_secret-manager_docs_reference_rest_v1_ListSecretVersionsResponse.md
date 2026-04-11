---
title: "ListSecretVersionsResponse \_|\_ Secret Manager \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/secret-manager/docs/reference/rest/v1/ListSecretVersionsResponse
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/secret-manager/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/secret-manager/docs/reference/rest/v1/ListSecretVersionsResponse
  title: "ListSecretVersionsResponse \_|\_ Secret Manager \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Security
Secret Manager
Reference
Send feedback
ListSecretVersionsResponse
Stay organized with collections
Save and categorize content based on your preferences.
JSON representation
Response message for SecretManagerService.ListSecretVersions .
JSON representation
{
"versions" : [
{
object ( SecretVersion )
}
] ,
"nextPageToken" : string ,
"totalSize" : integer
}
Fields
versions[]
object ( SecretVersion )
The list of SecretVersions sorted in reverse by createTime (newest first).
nextPageToken
string
A token to retrieve the next page of results. Pass this value in ListSecretVersionsRequest.page_token to retrieve the next page.
totalSize
integer
The total number of SecretVersions but 0 when the ListSecretsRequest.filter field is set.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-05-15 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-05-15 UTC."],[],[]]
