---
title: "ListOrgPoliciesResponse \_|\_ Resource Manager \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/resource-manager/reference/rest/v1/ListOrgPoliciesResponse
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/resource-manager/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/resource-manager/reference/rest/v1/ListOrgPoliciesResponse
  title: "ListOrgPoliciesResponse \_|\_ Resource Manager \_|\_ Google Cloud Documentation"
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
ListOrgPoliciesResponse
Stay organized with collections
Save and categorize content based on your preferences.
JSON representation
The response returned from the projects.listOrgPolicies method. It will be empty if no Policies are set on the resource.
JSON representation
{
"policies" : [
{
object ( Policy )
}
] ,
"nextPageToken" : string
}
Fields
policies[]
object ( Policy )
The Policies that are set on the resource. It will be empty if no Policies are set.
nextPageToken
string
Page token used to retrieve the next page. This is currently not used, but the server may at any point start supplying a valid token.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-06-11 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-06-11 UTC."],[],[]]
