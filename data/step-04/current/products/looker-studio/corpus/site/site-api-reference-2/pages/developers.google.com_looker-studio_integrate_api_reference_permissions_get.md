---
title: "Permissions: get \_|\_ Integrate and share \_|\_ Google for Developers"
url: https://developers.google.com/looker-studio/integrate/api/reference/permissions/get
knowledge_key: corpus
source_id: site-api-reference-2
source_type: site
entrypoint: https://developers.google.com/looker-studio/integrate/api/reference
source_metadata:
  url: https://developers.google.com/looker-studio/integrate/api/reference/permissions/get
  title: "Permissions: get \_|\_ Integrate and share \_|\_ Google for Developers"
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
Permissions: get
Stay organized with collections
Save and categorize content based on your preferences.
Get the permissions for a Looker Studio asset.
Request
HTTP request
GET https://datastudio.googleapis.com/v1/assets/{assetName}/permissions
Path parameters
Parameter name
Type
Description
assetName
string
The name (ID) of the asset.
Authorization
This request requires the authorized user to have sufficient permissions to view
asset permissions and authorization with at least one of the following scopes:
Scope
https://www.googleapis.com/auth/datastudio.readonly
https://www.googleapis.com/auth/datastudio
Request body
Do not supply a request body with this method.
Response
If successful, this method returns a Permissions object.
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2024-09-18 UTC.
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2024-09-18 UTC."],[],[]]
