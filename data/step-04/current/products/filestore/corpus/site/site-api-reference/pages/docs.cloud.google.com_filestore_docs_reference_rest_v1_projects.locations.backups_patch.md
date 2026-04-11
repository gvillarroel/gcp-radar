---
title: "Method: projects.locations.backups.patch \_|\_ Filestore \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/filestore/docs/reference/rest/v1/projects.locations.backups/patch
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/filestore/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/filestore/docs/reference/rest/v1/projects.locations.backups/patch
  title: "Method: projects.locations.backups.patch \_|\_ Filestore \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Storage
Filestore
Reference
Send feedback
Method: projects.locations.backups.patch
Stay organized with collections
Save and categorize content based on your preferences.
HTTP request
Path parameters
Query parameters
Request body
Response body
Authorization scopes
Try it!
Updates the settings of a specific backup.
HTTP request
PATCH https://file.googleapis.com/v1/{backup.name=projects/*/locations/*/backups/*}
The URL uses gRPC Transcoding syntax.
Path parameters
Parameters
backup.name
string
Output only. The resource name of the backup, in the format projects/{projectNumber}/locations/{locationId}/backups/{backupId} .
Query parameters
Parameters
updateMask
string ( FieldMask format)
Required. Mask of fields to update. At least one path must be supplied in this field.
This is a comma-separated list of fully qualified names of fields. Example: "user.displayName,photo" .
Request body
The request body contains an instance of Backup .
Response body
If successful, the response body contains an instance of Operation .
Authorization scopes
Requires the following OAuth scope:
https://www.googleapis.com/auth/cloud-platform
For more information, see the Authentication Overview .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-09-11 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-09-11 UTC."],[],[]]
