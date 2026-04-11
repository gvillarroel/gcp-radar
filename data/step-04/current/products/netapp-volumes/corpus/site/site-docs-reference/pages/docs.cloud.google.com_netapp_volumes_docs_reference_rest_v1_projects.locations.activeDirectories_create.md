---
title: "Method: projects.locations.activeDirectories.create \_|\_ NetApp Volumes \_\
  |\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/netapp/volumes/docs/reference/rest/v1/projects.locations.activeDirectories/create
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/netapp/volumes/docs/apis
source_metadata:
  url: https://docs.cloud.google.com/netapp/volumes/docs/reference/rest/v1/projects.locations.activeDirectories/create
  title: "Method: projects.locations.activeDirectories.create \_|\_ NetApp Volumes\
    \ \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Storage
NetApp Volumes
Reference
Send feedback
Method: projects.locations.activeDirectories.create
Stay organized with collections
Save and categorize content based on your preferences.
HTTP request
Path parameters
Query parameters
Request body
Response body
Authorization scopes
IAM Permissions
Try it!
activeDirectories.create Creates the active directory specified in the request.
HTTP request
POST https://netapp.googleapis.com/v1/{parent=projects/*/locations/*}/activeDirectories
The URL uses gRPC Transcoding syntax.
Path parameters
Parameters
parent
string
Required. Value for parent.
Query parameters
Parameters
activeDirectoryId
string
Required. ID of the active directory to create. Must be unique within the parent resource. Must contain only letters, numbers and hyphen, with the first character a letter , the last a letter or a number, and a 63 character maximum.
Request body
The request body contains an instance of ActiveDirectory .
Response body
If successful, the response body contains a newly created instance of Operation .
Authorization scopes
Requires the following OAuth scope:
https://www.googleapis.com/auth/cloud-platform
For more information, see the Authentication Overview .
IAM Permissions
Requires the following IAM permission on the parent resource:
netapp.activeDirectories.create
For more information, see the IAM documentation .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-04-23 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-04-23 UTC."],[],[]]
