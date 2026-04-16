---
title: "Method: Backups.ListBackups \_|\_ Cloud SQL for SQL Server \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/rest/v1/Backups/ListBackups
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/sql/docs/sqlserver/apis
source_metadata:
  url: https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/rest/v1/Backups/ListBackups
  title: "Method: Backups.ListBackups \_|\_ Cloud SQL for SQL Server \_|\_ Google\
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
Method: Backups.ListBackups
Stay organized with collections
Save and categorize content based on your preferences.
HTTP request
Path parameters
Query parameters
Request body
Response body
JSON representation
Authorization scopes
Examples
Try it!
Lists all backups associated with the project.
HTTP request
GET https://sqladmin.googleapis.com/v1/{parent=projects/*}/backups
The URL uses gRPC Transcoding syntax.
Path parameters
Parameters
parent
string
Required. The parent that owns this collection of backups. Format: projects/{project}
Query parameters
Parameters
pageSize
integer
The maximum number of backups to return per response. The service might return fewer backups than this value. If a value for this parameter isn't specified, then, at most, 500 backups are returned. The maximum value is 2,000. Any values that you set, which are greater than 2,000, are changed to 2,000.
pageToken
string
A page token, received from a previous Backups.ListBackups call. Provide this to retrieve the subsequent page.
When paginating, all other parameters provided to Backups.ListBackups must match the call that provided the page token.
filter
string
Multiple filter queries are separated by spaces. For example, 'instance:abc AND type:FINAL, 'location:us', 'backupInterval.startTime>=1950-01-01T01:01:25.771Z'. You can filter by type, instance, backupInterval.startTime (creation time), or location.
Request body
The request body must be empty.
Response body
The response payload containing a list of the backups.
If successful, the response body contains data with the following structure:
JSON representation
{
"backups" : [
{
object ( Backup )
}
] ,
"nextPageToken" : string ,
"warnings" : [
{
object ( ApiWarning )
}
]
}
Fields
backups[]
object ( Backup )
A list of backups.
nextPageToken
string
A token, which can be sent as pageToken to retrieve the next page. If this field is omitted, then there aren't subsequent pages.
warnings[]
object ( ApiWarning )
If a region isn't unavailable or if an unknown error occurs, then a warning message is returned.
Authorization scopes
Requires one of the following OAuth scopes:
https://www.googleapis.com/auth/cloud-platform
https://www.googleapis.com/auth/sqlservice.admin
For more information, see the Authentication Overview .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-10-24 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-10-24 UTC."],[],[]]
