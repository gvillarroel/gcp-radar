---
title: "Method: asps.delete \_|\_ Admin console \_|\_ Google for Developers"
url: https://developers.google.com/workspace/admin/directory/reference/rest/v1/asps/delete
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://developers.google.com/workspace/admin/directory/reference/rest
source_metadata:
  url: https://developers.google.com/workspace/admin/directory/reference/rest/v1/asps/delete
  title: "Method: asps.delete \_|\_ Admin console \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Google Workspace
Admin console
Reference
Send feedback
Method: asps.delete
Stay organized with collections
Save and categorize content based on your preferences.
Deletes an ASP issued by a user.
HTTP request
DELETE https://admin.googleapis.com/admin/directory/v1/users/{userKey}/asps/{codeId}
The URL uses gRPC Transcoding syntax.
Path parameters
Parameters
userKey
string
Identifies the user in the API request. The value can be the user's primary email address, alias email address, or unique user ID.
codeId
integer
The unique ID of the ASP to be deleted.
Request body
The request body must be empty.
Response body
If successful, the response is a generic HTTP response whose format is defined by the method.
Authorization scopes
Requires the following OAuth scope:
https://www.googleapis.com/auth/admin.directory.user.security
For more information, see the Authorization guide .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-10 UTC."],[],[]]
