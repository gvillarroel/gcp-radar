---
title: "REST Resource: userLicense \_|\_ Google Workspace Marketplace \_|\_ Google\
  \ for Developers"
url: https://developers.google.com/workspace/marketplace/reference/rest/v2/userLicense
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://developers.google.com/workspace/marketplace/reference/rest
source_metadata:
  url: https://developers.google.com/workspace/marketplace/reference/rest/v2/userLicense
  title: "REST Resource: userLicense \_|\_ Google Workspace Marketplace \_|\_ Google\
    \ for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Google Workspace
Marketplace
Reference
Send feedback
REST Resource: userLicense
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
The UserLicense resource represents a user's license status for a specific application within a Google Workspace domain.
It provides information about the user's license status, including whether it's active, unlicensed, or expired.
The resource includes details such as the user's email, domain, application ID, and license ID.
You can retrieve a user's license information using the get method of the UserLicense API.
Resource: UserLicense
JSON representation
{
"kind" : string ,
"enabled" : boolean ,
"state" : string ,
"editionId" : string ,
"customerId" : string ,
"applicationId" : string ,
"id" : string ,
"userId" : string
}
Fields
kind
string
The type of API resource. This is always appsmarket#userLicense .
enabled
boolean
The domain administrator has activated the application for this domain.
state
string
The user's licensing status. One of:
ACTIVE : The user has a valid license and should be permitted to use the application.
UNLICENSED : The administrator of this user's domain never assigned a seat for the application to this user.
EXPIRED : The administrator assigned a seat to this user, but the license is expired.
editionId (deprecated)
string
This item is deprecated!
(Deprecated)
customerId
string
The domain name of the user.
applicationId
string
The ID of the application corresponding to the license query.
id
string
The ID of the user license.
userId
string
The email address of the user.
Methods
get
Gets the user's licensing status to determine if they have permission to use a given app.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-02-03 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-02-03 UTC."],[],["The `UserLicense` resource provides information about a user's access to an application. Key data includes `kind` (resource type), `enabled` (domain-level activation), and `state` (user's license status: `ACTIVE`, `UNLICENSED`, `EXPIRED`). Additional fields are `customerId` (domain), `applicationId` (app ID), `id` (license ID), and `userId` (user's email). The `editionId` field is deprecated. The `get` method retrieves a user's licensing status for a specific app.\n"]]
