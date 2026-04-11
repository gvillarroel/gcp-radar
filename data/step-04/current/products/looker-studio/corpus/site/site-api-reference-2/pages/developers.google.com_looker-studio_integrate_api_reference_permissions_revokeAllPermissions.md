---
title: "Permissions: revokeAllPermissions \_|\_ Integrate and share \_|\_ Google for\
  \ Developers"
url: https://developers.google.com/looker-studio/integrate/api/reference/permissions/revokeAllPermissions
knowledge_key: corpus
source_id: site-api-reference-2
source_type: site
entrypoint: https://developers.google.com/looker-studio/integrate/api/reference
source_metadata:
  url: https://developers.google.com/looker-studio/integrate/api/reference/permissions/revokeAllPermissions
  title: "Permissions: revokeAllPermissions \_|\_ Integrate and share \_|\_ Google\
    \ for Developers"
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
Permissions: revokeAllPermissions
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
Revoke access for multiple users from a Looker Studio asset using the revokeAllPermissions endpoint.
Requests to remove users will always return a successful response ( 200 OK ), even if the user is invalid or not associated with the asset.
The request body requires a list of members to remove, specified as user: or domain: , but owners and the authorized user cannot be removed.
Successful requests return an updated Permissions object reflecting the changes made.
This API call needs authorization with the https://www.googleapis.com/auth/datastudio scope.
Remove members from a Looker Studio asset.
To simply the process of removing user access to assets, well-formed requests
always return a 200 OK response, even if a member is invalid or does not
belong to the Looker Studio asset.
Request
HTTP request
POST https://datastudio.googleapis.com/v1/assets/{assetName}/permissions:revokeAllPermissions
Path parameters
Parameter name
Type
Description
assetName
string
The name (ID) id of the asset.
Authorization
This request requires the authorized user to have sufficient permissions to
manage the assets permissions and authorization with the following scope:
Scope
https://www.googleapis.com/auth/datastudio
Request body
In the request body, supply the following properties:
Property name
Type
Description
members
Array< Member >
A list of members to remove. Owners
cannot be removed. The authorized user
cannot be removed.
Important: Revoking permissions for an invalid member (e.g. nonexistent Google
account) or member that does not belong to the asset will not cause the
request to fail.
Response
If successful, this method returns the updated Permissions object.
Example
The following removes two members from a Looker Studio asset.
POST https://datastudio.googleapis.com/v1/assets/ assetName /permissions:revokeAllPermissions
Request body:
{
"members" : [
"user:gus@gmail.com" ,
"domain:example.com"
]
}
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2024-09-18 UTC.
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2024-09-18 UTC."],[],[]]
