---
title: "Method: Backups.CreateBackup \_|\_ Cloud SQL for SQL Server \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/rest/v1/Backups/CreateBackup
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/rest
source_metadata:
  url: https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/rest/v1/Backups/CreateBackup
  title: "Method: Backups.CreateBackup \_|\_ Cloud SQL for SQL Server \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Databases
Cloud SQL
SQL Server
Reference
Send feedback
Method: Backups.CreateBackup
Stay organized with collections
Save and categorize content based on your preferences.
HTTP request
Path parameters
Request body
Response body
Authorization scopes
Examples
Try it!
Creates a backup for a Cloud SQL instance. This API can be used only to create on-demand backups.
HTTP request
POST https://sqladmin.googleapis.com/v1/{parent=projects/*}/backups
The URL uses gRPC Transcoding syntax.
Path parameters
Parameters
parent
string
Required. The parent resource where this backup is created. Format: projects/{project}
Request body
The request body contains an instance of Backup .
Response body
If successful, the response body contains a newly created instance of Operation .
Authorization scopes
Requires one of the following OAuth scopes:
https://www.googleapis.com/auth/cloud-platform
https://www.googleapis.com/auth/sqlservice.admin
For more information, see the Authentication Overview .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-05-30 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-05-30 UTC."],[],[]]
