---
title: "REST Resource: networks.bandwidthGroups \_|\_ Ad Manager API (Beta) \_|\_\
  \ Google for Developers"
url: https://developers.google.com/ad-manager/api/beta/reference/rest/v1/networks.bandwidthGroups
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://developers.google.com/ad-manager/api/beta/reference/rest
source_metadata:
  url: https://developers.google.com/ad-manager/api/beta/reference/rest/v1/networks.bandwidthGroups
  title: "REST Resource: networks.bandwidthGroups \_|\_ Ad Manager API (Beta) \_|\_\
    \ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

To discuss and provide feedback on our products, join the official Ad Manager Discord channel in the Google Advertising and Measurement Community server.
Home
Products
Ad Manager
API (Beta)
Reference
Send feedback
REST Resource: networks.bandwidthGroups
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
BandwidthGroup represents a logical grouping of bandwidths with a generic name like 'Cable' or 'DSL'.
A BandwidthGroup has a unique identifier name and a localized display name displayName .
The API provides methods to get a specific BandwidthGroup and list all BandwidthGroup objects.
Resource: BandwidthGroup
JSON representation
Methods
Resource: BandwidthGroup
Represents a group of bandwidths that are logically organized by some well known generic name such as 'Cable' or 'DSL'.
JSON representation
{
"name" : string ,
"displayName" : string
}
Fields
name
string
Identifier. The resource name of the BandwidthGroup . Format: networks/{networkCode}/bandwidthGroups/{bandwidth_group_id}
displayName
string
Output only. The localized name of the bandwidth group.
Methods
get
API to retrieve a BandwidthGroup object.
list
API to retrieve a list of BandwidthGroup objects.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-08-20 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-08-20 UTC."],[],[]]
