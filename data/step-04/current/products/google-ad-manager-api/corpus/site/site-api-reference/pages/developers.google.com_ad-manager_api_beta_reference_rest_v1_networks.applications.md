---
title: "REST Resource: networks.applications \_|\_ Ad Manager API (Beta) \_|\_ Google\
  \ for Developers"
url: https://developers.google.com/ad-manager/api/beta/reference/rest/v1/networks.applications
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://developers.google.com/ad-manager/api/beta/reference/rest
source_metadata:
  url: https://developers.google.com/ad-manager/api/beta/reference/rest/v1/networks.applications
  title: "REST Resource: networks.applications \_|\_ Ad Manager API (Beta) \_|\_ Google\
    \ for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

To discuss and provide feedback on our products, join the official Ad Manager Discord channel in the Google Advertising and Measurement Community server.
Home
Products
Ad Manager
API (Beta)
Reference
Send feedback
REST Resource: networks.applications
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
The Application resource represents a mobile app claimed by a network for targeting purposes.
Applications are identified by a name which follows the format networks/{networkCode}/applications/{application_id} and can have an optional displayName .
The API provides get and list methods to retrieve individual Application objects or a list of Application objects, respectively.
Resource: Application
JSON representation
Methods
Resource: Application
An application that has been added to or "claimed" by the network to be used for targeting purposes. These mobile apps can come from various app stores.
JSON representation
{
"name" : string ,
"displayName" : string
}
Fields
name
string
Identifier. The resource name of the Application . Format: networks/{networkCode}/applications/{application_id}
displayName
string
Optional. The display name of the application. This attribute is required and has a maximum length of 80 characters.
Methods
get
API to retrieve a Application object.
list
API to retrieve a list of Application objects.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-09-24 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-09-24 UTC."],[],[]]
