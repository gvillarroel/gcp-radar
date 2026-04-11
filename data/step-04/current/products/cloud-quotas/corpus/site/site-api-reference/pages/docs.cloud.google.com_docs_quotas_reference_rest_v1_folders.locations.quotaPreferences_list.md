---
title: "Method: folders.locations.quotaPreferences.list \_|\_ Cloud Quotas \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/docs/quotas/reference/rest/v1/folders.locations.quotaPreferences/list
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/docs/quotas/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/docs/quotas/reference/rest/v1/folders.locations.quotaPreferences/list
  title: "Method: folders.locations.quotaPreferences.list \_|\_ Cloud Quotas \_|\_\
    \ Google Cloud Documentation"
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
Method: folders.locations.quotaPreferences.list
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
Lists QuotaPreferences in a given project, folder or organization.
HTTP request
GET https://cloudquotas.googleapis.com/v1/{parent=folders/*/locations/*}/quotaPreferences
The URL uses gRPC Transcoding syntax.
Path parameters
Parameters
parent
string
Required. Parent value of QuotaPreference resources. Listing across different resource containers (such as 'projects/-') is not allowed.
When the value starts with 'folders' or 'organizations', it lists the QuotaPreferences for org quotas in the container. It does not list the QuotaPreferences in the descendant projects of the container.
Example parents: projects/123/locations/global
Query parameters
Parameters
pageSize
integer
Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default.
pageToken
string
Optional. A token identifying a page of results the server should return.
filter
string
Optional. Filter result QuotaPreferences by their state, type, create/update time range.
Example filters: reconciling=true AND request_type=CLOUD_CONSOLE , reconciling=true OR creation_time>2022-12-03T10:30:00
orderBy
string
Optional. How to order of the results. By default, the results are ordered by create time.
Example orders: quotaId , service, createTime
Request body
The request body must be empty.
Response body
If successful, the response body contains an instance of ListQuotaPreferencesResponse .
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
