---
title: "Permissions: patch \_|\_ Integrate and share \_|\_ Google for Developers"
url: https://developers.google.com/looker-studio/integrate/api/reference/permissions/patch
knowledge_key: corpus
source_id: site-api-reference-2
source_type: site
entrypoint: https://developers.google.com/looker-studio/integrate/api/reference
source_metadata:
  url: https://developers.google.com/looker-studio/integrate/api/reference/permissions/patch
  title: "Permissions: patch \_|\_ Integrate and share \_|\_ Google for Developers"
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
Permissions: patch
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
This document outlines how to update permissions for a Looker Studio asset using the PATCH method and provides details about the required request parameters and authorization scope.
The request body should include the updated permissions object, specifying roles (like OWNER, VIEWER) and their corresponding members, but note that the OWNER role cannot be modified.
A successful request will return the updated Permissions object, confirming the changes made to the asset's access control.
Update permissions for a Looker Studio asset.
Request
HTTP request
PATCH https://datastudio.googleapis.com/v1/assets/{assetName}/permissions
Path parameters
Parameter name
Type
Description
assetName
string
The name (ID) of the asset.
Authorization
This request requires the authorized user to have sufficient permissions to
manage asset permissions and authorization with the following scope:
Scope
https://www.googleapis.com/auth/datastudio
Request body
In the request body, supply the following properties:
Property name
Type
Description
permissions
Permissions
The updated permissions object. The
OWNER role cannot be updated.
Response
If successful, this method returns the updated Permissions object.
Example
The following updates the permissions for a Looker Studio asset.
PATCH https://datastudio.googleapis.com/v1/assets/ assetName /permissions
Request body:
{
"permissions" : {
"permissions" : {
"OWNER" : {
"members" : [
"user:jen@gmail.com"
]
},
"VIEWER" : {
"members" : [
"user:gus@gmail.com"
]
}
}
}
}
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2024-09-18 UTC.
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2024-09-18 UTC."],[],[]]
