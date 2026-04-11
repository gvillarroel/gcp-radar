---
title: "Method: matters.exports.get \_|\_ Google Vault \_|\_ Google for Developers"
url: https://developers.google.com/workspace/vault/reference/rest/v1/matters.exports/get
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://developers.google.com/workspace/vault/reference/rest
source_metadata:
  url: https://developers.google.com/workspace/vault/reference/rest/v1/matters.exports/get
  title: "Method: matters.exports.get \_|\_ Google Vault \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Google Workspace
Google Vault
Reference
Send feedback
Method: matters.exports.get
Stay organized with collections
Save and categorize content based on your preferences.
HTTP request
Path parameters
Request body
Response body
Authorization scopes
Try it!
Gets an export.
HTTP request
GET https://vault.googleapis.com/v1/matters/{matterId}/exports/{exportId}
The URL uses gRPC Transcoding syntax.
Path parameters
Parameters
matterId
string
The matter ID.
exportId
string
The export ID.
Request body
The request body must be empty.
Response body
If successful, the response body contains an instance of Export .
Authorization scopes
Requires one of the following OAuth scopes:
https://www.googleapis.com/auth/ediscovery.readonly
https://www.googleapis.com/auth/ediscovery
For more information, see the Authorization guide .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-03-17 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-03-17 UTC."],[],[]]
