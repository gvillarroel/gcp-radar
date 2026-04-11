---
title: "Method: projects.locations.activeDirectories.patch \_|\_ NetApp Volumes \_\
  |\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/netapp/volumes/docs/reference/rest/v1/projects.locations.activeDirectories/patch
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/netapp/volumes/docs/apis
source_metadata:
  url: https://docs.cloud.google.com/netapp/volumes/docs/reference/rest/v1/projects.locations.activeDirectories/patch
  title: "Method: projects.locations.activeDirectories.patch \_|\_ NetApp Volumes\
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
Method: projects.locations.activeDirectories.patch
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
Update the parameters of an active directories.
HTTP request
PATCH https://netapp.googleapis.com/v1/{activeDirectory.name=projects/*/locations/*/activeDirectories/*}
The URL uses gRPC Transcoding syntax.
Path parameters
Parameters
activeDirectory.name
string
Identifier. The resource name of the active directory. Format: projects/{projectNumber}/locations/{locationId}/activeDirectories/{activeDirectoryId} .
Query parameters
Parameters
updateMask
string ( FieldMask format)
Required. Field mask is used to specify the fields to be overwritten in the Active Directory resource by the update. The fields specified in the updateMask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten.
This is a comma-separated list of fully qualified names of fields. Example: "user.displayName,photo" .
Request body
The request body contains an instance of ActiveDirectory .
Response body
If successful, the response body contains an instance of Operation .
Authorization scopes
Requires the following OAuth scope:
https://www.googleapis.com/auth/cloud-platform
For more information, see the Authentication Overview .
IAM Permissions
Requires the following IAM permission on the name resource:
netapp.activeDirectories.update
For more information, see the IAM documentation .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-04-23 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-04-23 UTC."],[],[]]
