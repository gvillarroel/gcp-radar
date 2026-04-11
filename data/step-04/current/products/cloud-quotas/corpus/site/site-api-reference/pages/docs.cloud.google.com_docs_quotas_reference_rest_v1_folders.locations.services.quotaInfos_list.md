---
title: "Method: folders.locations.services.quotaInfos.list \_|\_ Cloud Quotas \_|\_\
  \ Google Cloud Documentation"
url: https://docs.cloud.google.com/docs/quotas/reference/rest/v1/folders.locations.services.quotaInfos/list
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/docs/quotas/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/docs/quotas/reference/rest/v1/folders.locations.services.quotaInfos/list
  title: "Method: folders.locations.services.quotaInfos.list \_|\_ Cloud Quotas \_\
    |\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Cloud Quotas
Reference
Send feedback
Method: folders.locations.services.quotaInfos.list
Stay organized with collections
Save and categorize content based on your preferences.
HTTP request
Path parameters
Query parameters
Request body
Response body
Authorization scopes
IAM Permissions
Try it!
Lists QuotaInfos of all quotas for a given project, folder or organization.
HTTP request
GET https://cloudquotas.googleapis.com/v1/{parent=folders/*/locations/*/services/*}/quotaInfos
The URL uses gRPC Transcoding syntax.
Path parameters
Parameters
parent
string
Required. Parent value of QuotaInfo resources. Listing across different resource containers (such as 'projects/-') is not allowed.
Example names: projects/123/locations/global/services/compute.googleapis.com folders/234/locations/global/services/compute.googleapis.com organizations/345/locations/global/services/compute.googleapis.com
Query parameters
Parameters
pageSize
integer
Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default.
pageToken
string
Optional. A token identifying a page of results the server should return.
Request body
The request body must be empty.
Response body
If successful, the response body contains an instance of ListQuotaInfosResponse .
Authorization scopes
Requires the following OAuth scope:
https://www.googleapis.com/auth/cloud-platform
For more information, see the Authentication Overview .
IAM Permissions
Requires the following IAM permission on the parent resource:
cloudquotas.quotas.get
For more information, see the IAM documentation .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-05-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-05-14 UTC."],[],[]]
