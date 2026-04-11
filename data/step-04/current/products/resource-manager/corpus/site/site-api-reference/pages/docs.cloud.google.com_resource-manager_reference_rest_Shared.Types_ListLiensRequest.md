---
title: "ListLiensRequest \_|\_ Resource Manager \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/resource-manager/reference/rest/Shared.Types/ListLiensRequest
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/resource-manager/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/resource-manager/reference/rest/Shared.Types/ListLiensRequest
  title: "ListLiensRequest \_|\_ Resource Manager \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Technology areas
Resource Manager
Reference
Send feedback
ListLiensRequest
Stay organized with collections
Save and categorize content based on your preferences.
JSON representation
The request message for Liens.ListLiens .
JSON representation
{
"parent" : string ,
"pageSize" : integer ,
"pageToken" : string
}
Fields
parent
string
Required. The name of the resource to list all attached Liens. For example, projects/1234 .
(google.api.field_policy).resource_type annotation is not set since the parent depends on the meta api implementation. This field could be a project or other sub project resources.
pageSize
integer
The maximum number of items to return. This is a suggestion for the server. The server can return fewer liens than requested. If unspecified, server picks an appropriate default.
pageToken
string
The nextPageToken value returned from a previous List request, if any.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-06-11 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-06-11 UTC."],[],[]]
