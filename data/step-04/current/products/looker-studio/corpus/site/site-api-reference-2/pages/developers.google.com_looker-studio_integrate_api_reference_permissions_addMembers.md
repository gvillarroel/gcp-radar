---
title: "Permissions: addMembers \_|\_ Integrate and share \_|\_ Google for Developers"
url: https://developers.google.com/looker-studio/integrate/api/reference/permissions/addMembers
knowledge_key: corpus
source_id: site-api-reference-2
source_type: site
entrypoint: https://developers.google.com/looker-studio/integrate/api/reference
source_metadata:
  url: https://developers.google.com/looker-studio/integrate/api/reference/permissions/addMembers
  title: "Permissions: addMembers \_|\_ Integrate and share \_|\_ Google for Developers"
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
Permissions: addMembers
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
Adds members with specified roles (excluding OWNER) to a Looker Studio asset using the asset's name (ID).
Requires authorization with the https://www.googleapis.com/auth/datastudio scope and sufficient permissions to add members.
The request body specifies the desired role and a list of members to add (using their email addresses).
Upon successful execution, the updated Permissions object for the asset is returned.
Adds members to a Looker Studio asset.
Request
HTTP request
POST https://datastudio.googleapis.com/v1/assets/{assetName}/permissions:addMembers
Path parameters
Parameter name
Type
Description
assetName
string
The name (ID) of the asset.
Authorization
This request requires the authorized user to have sufficient permissions to add
members to the asset and authorization with the following scope:
Scope
https://www.googleapis.com/auth/datastudio
Request body
In the request body, supply the following properties:
Property name
Type
Description
role
Role
The role to add members to. Members
cannot be added to the OWNER role.
members
Array< Member >
The members to add.
Response
If successful, this method returns the updated Permissions object.
Example
The following adds two viewer members to a Looker Studio asset.
POST https://datastudio.googleapis.com/v1/assets/ assetName /permissions:addMembers
Request body:
{
"role" : "VIEWER" ,
"members" : [
"user:gus@gmail.com" ,
"user:jen@gmail.com"
]
}
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2024-09-18 UTC.
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2024-09-18 UTC."],[],[]]
