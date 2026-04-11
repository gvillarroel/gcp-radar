---
title: "Method: projects.locations.backupPolicies.create \_|\_ NetApp Volumes \_|\_\
  \ Google Cloud Documentation"
url: https://docs.cloud.google.com/netapp/volumes/docs/reference/rest/v1/projects.locations.backupPolicies/create
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/netapp/volumes/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/netapp/volumes/docs/reference/rest/v1/projects.locations.backupPolicies/create
  title: "Method: projects.locations.backupPolicies.create \_|\_ NetApp Volumes \_\
    |\_ Google Cloud Documentation"
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
Method: projects.locations.backupPolicies.create
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
Creates new backup policy
HTTP request
POST https://netapp.googleapis.com/v1/{parent=projects/*/locations/*}/backupPolicies
The URL uses gRPC Transcoding syntax.
Path parameters
Parameters
parent
string
Required. The location to create the backup policies of, in the format projects/{projectId}/locations/{location}
Query parameters
Parameters
backupPolicyId
string
Required. The ID to use for the backup policy. The ID must be unique within the specified location. Must contain only letters, numbers and hyphen, with the first character a letter, the last a letter or a number, and a 63 character maximum.
Request body
The request body contains an instance of BackupPolicy .
Response body
If successful, the response body contains a newly created instance of Operation .
Authorization scopes
Requires the following OAuth scope:
https://www.googleapis.com/auth/cloud-platform
For more information, see the Authentication Overview .
IAM Permissions
Requires the following IAM permission on the parent resource:
netapp.backupPolicies.create
For more information, see the IAM documentation .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-04-23 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-04-23 UTC."],[],[]]
