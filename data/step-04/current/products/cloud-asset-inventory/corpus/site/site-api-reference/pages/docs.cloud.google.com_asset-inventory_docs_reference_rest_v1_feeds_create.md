---
title: "Method: feeds.create \_|\_ Cloud Asset Inventory \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/asset-inventory/docs/reference/rest/v1/feeds/create
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/asset-inventory/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/asset-inventory/docs/reference/rest/v1/feeds/create
  title: "Method: feeds.create \_|\_ Cloud Asset Inventory \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Security
Cloud Asset Inventory
Reference
Send feedback
Method: feeds.create
Stay organized with collections
Save and categorize content based on your preferences.
HTTP request
Path parameters
Request body
JSON representation
Response body
Authorization scopes
Try it!
Creates a feed in a parent project/folder/organization to listen to its asset updates.
HTTP request
POST https://cloudasset.googleapis.com/v1/{parent=*/*}/feeds
The URL uses gRPC Transcoding syntax.
Path parameters
Parameters
parent
string
Required. The name of the project/folder/organization where this feed should be created in. It can only be an organization number (such as "organizations/123"), a folder number (such as "folders/123"), a project ID (such as "projects/my-project-id"), or a project number (such as "projects/12345").
Request body
The request body contains data with the following structure:
JSON representation
{
"feedId" : string ,
"feed" : {
object ( Feed )
}
}
Fields
feedId
string
Required. This is the client-assigned asset feed identifier and it needs to be unique under a specific parent project/folder/organization.
feed
object ( Feed )
Required. The feed details. The field name must be empty and it will be generated in the format of: projects/projectNumber/feeds/feedId folders/folder_number/feeds/feedId organizations/organization_number/feeds/feedId
Response body
If successful, the response body contains a newly created instance of Feed .
Authorization scopes
Requires the following OAuth scope:
https://www.googleapis.com/auth/cloud-platform
For more information, see the Authentication Overview .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-07-30 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-07-30 UTC."],[],[]]
