---
title: "Method: projects.getAuthorization \_|\_ Google Workspace add-ons \_|\_ Google\
  \ for Developers"
url: https://developers.google.com/workspace/add-ons/reference/rest/v1/projects/getAuthorization
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://developers.google.com/workspace/add-ons/reference/rest
source_metadata:
  url: https://developers.google.com/workspace/add-ons/reference/rest/v1/projects/getAuthorization
  title: "Method: projects.getAuthorization \_|\_ Google Workspace add-ons \_|\_ Google\
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
Method: projects.getAuthorization
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
Retrieves Google Workspace Add-on authorization details for a specific project.
Requires project name as a path parameter and an empty request body.
Response includes authorization name, service account email, and OAuth client ID.
Needs https://www.googleapis.com/auth/cloud-platform OAuth scope for authorization.
HTTP request
Path parameters
Request body
Response body
JSON representation
Authorization scopes
Try it!
Gets the authorization information for deployments in a given project.
HTTP request
GET https://gsuiteaddons.googleapis.com/v1/{name=projects/*/authorization}
The URL uses gRPC Transcoding syntax.
Path parameters
Parameters
name
string
Required. Name of the project for which to get the Google Workspace add-on authorization information.
Example: projects/my_project/authorization .
Authorization requires the following IAM permission on the specified resource name :
gsuiteaddons.authorizations.get
Request body
The request body must be empty.
Response body
The authorization information used when invoking deployment endpoints.
If successful, the response body contains data with the following structure:
JSON representation
{
"name" : string ,
"serviceAccountEmail" : string ,
"oauthClientId" : string
}
Fields
name
string
The canonical full name of this resource. Example: projects/123/authorization
serviceAccountEmail
string
The email address of the service account used to authenticate requests to add-on callback endpoints.
oauthClientId
string
The OAuth client ID used to obtain OAuth access tokens for a user on the add-on's behalf.
Authorization scopes
Requires the following OAuth scope:
https://www.googleapis.com/auth/cloud-platform
For more information, see the Authorization guide .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-02-02 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-02-02 UTC."],[],["This document details retrieving authorization information for Google Workspace add-on deployments within a project. It uses a `GET` HTTP request to a specific URL containing the project name. The request body must be empty. The response, formatted in JSON, includes the project's canonical name, service account email, and OAuth client ID. Authorization requires a `gsuiteaddons.authorizations.get` IAM permission and the `https://www.googleapis.com/auth/cloud-platform` OAuth scope.\n"]]
