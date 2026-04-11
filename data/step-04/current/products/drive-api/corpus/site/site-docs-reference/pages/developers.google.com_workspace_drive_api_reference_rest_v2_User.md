---
title: "User \_|\_ Google Drive \_|\_ Google for Developers"
url: https://developers.google.com/workspace/drive/api/reference/rest/v2/User
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://developers.google.com/workspace/drive/api/reference/rest/v3
source_metadata:
  url: https://developers.google.com/workspace/drive/api/reference/rest/v2/User
  title: "User \_|\_ Google Drive \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Google Workspace
Google Drive
Reference
Send feedback
User
Stay organized with collections
Save and categorize content based on your preferences.
JSON representation
Information about a Drive user.
JSON representation
{
"displayName" : string ,
"kind" : string ,
"isAuthenticatedUser" : boolean ,
"permissionId" : string ,
"emailAddress" : string ,
"picture" : {
"url" : string
}
}
Fields
displayName
string
Output only. A plain text displayable name for this user.
kind
string
Output only. Identifies what kind of resource this is. Value: the fixed string drive#user .
isAuthenticatedUser
boolean
Output only. Whether this user is the same as the authenticated user for whom the request was made.
permissionId
string
Output only. The user's ID as visible in Permission resources.
emailAddress
string
Output only. The email address of the user. This may not be present in certain contexts if the user has not made their email address visible to the requester.
picture
object
Output only. The user's profile picture.
picture.url
string
Output only. A URL that points to a profile picture of this user.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-07-23 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-07-23 UTC."],[],[]]
