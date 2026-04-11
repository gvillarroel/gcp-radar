---
title: "ListWorkloadsRequest \_|\_ Assured Workloads \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/assured-workloads/docs/reference/rest/Shared.Types/ListWorkloadsRequest
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/assured-workloads/docs
source_metadata:
  url: https://docs.cloud.google.com/assured-workloads/docs/reference/rest/Shared.Types/ListWorkloadsRequest
  title: "ListWorkloadsRequest \_|\_ Assured Workloads \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

The names for some Assured Workloads control packages have changed. For information about the name change, see Control package renaming notice .
Home
Documentation
Security
Assured Workloads
Reference
Send feedback
ListWorkloadsRequest
Stay organized with collections
Save and categorize content based on your preferences.
JSON representation
Request for fetching workloads in an organization.
JSON representation
{
"parent" : string ,
"pageSize" : integer ,
"pageToken" : string ,
"filter" : string
}
Fields
parent
string
Required. Parent Resource to list workloads from. Must be of the form organizations/{org_id}/locations/{location} .
pageSize
integer
Page size.
pageToken
string
Page token returned from previous request. Page token contains context from previous request. Page token needs to be passed in the second and following requests.
filter
string
A custom filter for filtering by properties of a workload. At this time, only filtering by labels is supported.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-06-30 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-06-30 UTC."],[],[]]
