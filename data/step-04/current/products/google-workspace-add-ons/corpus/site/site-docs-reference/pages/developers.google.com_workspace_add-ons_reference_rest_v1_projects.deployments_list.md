---
title: "Method: projects.deployments.list \_|\_ Google Workspace add-ons \_|\_ Google\
  \ for Developers"
url: https://developers.google.com/workspace/add-ons/reference/rest/v1/projects.deployments/list
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://developers.google.com/workspace/add-ons/reference
source_metadata:
  url: https://developers.google.com/workspace/add-ons/reference/rest/v1/projects.deployments/list
  title: "Method: projects.deployments.list \_|\_ Google Workspace add-ons \_|\_ Google\
    \ for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Google Workspace
Add-ons
Reference
Send feedback
Method: projects.deployments.list
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
Lists all deployments within a specified Google Workspace Add-ons project.
Allows for pagination to retrieve large sets of deployments.
Requires gsuiteaddons.deployments.list IAM permission and https://www.googleapis.com/auth/cloud-platform OAuth scope for authorization.
Returns a list of deployments along with a token for accessing subsequent pages, if available.
HTTP request
Path parameters
Query parameters
Request body
Response body
JSON representation
Authorization scopes
Try it!
Lists all deployments in a particular project.
HTTP request
GET https://gsuiteaddons.googleapis.com/v1/{parent=projects/*}/deployments
The URL uses gRPC Transcoding syntax.
Path parameters
Parameters
parent
string
Required. Name of the project in which to create the deployment.
Example: projects/my_project .
Authorization requires the following IAM permission on the specified resource parent :
gsuiteaddons.deployments.list
Query parameters
Parameters
pageSize
integer
The maximum number of deployments to return. The service might return fewer than this value. If unspecified, at most 1,000 deployments are returned. The maximum possible value is 1,000; values above 1,000 are changed to 1,000.
pageToken
string
A page token, received from a previous deployments.list call. Provide this to retrieve the subsequent page.
When paginating, all other parameters provided to deployments.list must match the call that provided the page token.
Request body
The request body must be empty.
Response body
Response message to list deployments.
If successful, the response body contains data with the following structure:
JSON representation
{
"deployments" : [
{
object ( Deployment )
}
] ,
"nextPageToken" : string
}
Fields
deployments[]
object ( Deployment )
The list of deployments for the given project.
nextPageToken
string
A token, which can be sent as pageToken to retrieve the next page. If this field is omitted, there are no subsequent pages.
Authorization scopes
Requires the following OAuth scope:
https://www.googleapis.com/auth/cloud-platform
For more information, see the Authorization guide .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-02-02 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-02-02 UTC."],[],["This describes how to list deployments within a project using an HTTP GET request. The request URL structure is `https://gsuiteaddons.googleapis.com/v1/{parent=projects/*}/deployments`, where `parent` specifies the project. Optional query parameters `pageSize` (max 1,000) and `pageToken` allow pagination. The request body must be empty. The successful response contains a list of `deployments` and a `nextPageToken` for subsequent pages, structured in JSON. Authorization requires the `gsuiteaddons.deployments.list` IAM permission and the `https://www.googleapis.com/auth/cloud-platform` OAuth scope.\n"]]
