---
title: "Looker Studio API reference \_|\_ Integrate and share \_|\_ Google for Developers"
url: https://developers.google.com/looker-studio/integrate/api/reference
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://developers.google.com/looker-studio
source_metadata:
  url: https://developers.google.com/looker-studio/integrate/api/reference
  title: "Looker Studio API reference \_|\_ Integrate and share \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Products
Looker Studio
Integrate
Reference
Looker Studio API reference
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
This API reference is structured around resource types, each with data representations and methods.
The Assets resource allows you to search for Looker Studio assets using the search method and requires the assetTypes query parameter.
The Permissions resource provides methods to manage asset permissions, including getting, updating, adding, and removing members.
All URIs are relative to https://datastudio.googleapis.com/v1 unless stated otherwise.
This API reference is organized by resource type. Each resource type has one or
more data representations and one or more methods.
Assets
For Assets Resource details, see the resource representation .
Method
HTTP request
Description
URIs relative to https://datastudio.googleapis.com/v1,
unless otherwise noted
search
GET /assets:search
Searches the user's Looker Studio assets.
Required query parameters: assetTypes
Permissions
For Permissions Resource details, see the
resource representation .
Method
HTTP request
Description
URIs relative to https://datastudio.googleapis.com/v1,
unless otherwise noted
get
GET /assets/ assetName /permissions
Get permissions for an asset.
patch
PATCH /assets/ assetName /permissions
Update permissions for an asset.
addMembers
POST /assets/ assetName /permissions:addMembers
Adds members to an asset.
revokeAllPermissions
POST /assets/ assetName /permissions:revokeAllPermissions
Removes members from an asset.
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2024-09-18 UTC.
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2024-09-18 UTC."],[],[]]
