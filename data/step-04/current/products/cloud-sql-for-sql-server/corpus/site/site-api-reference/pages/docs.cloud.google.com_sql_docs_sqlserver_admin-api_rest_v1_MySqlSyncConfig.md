---
title: "MySqlSyncConfig \_|\_ Cloud SQL for SQL Server \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/rest/v1/MySqlSyncConfig
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/rest
source_metadata:
  url: https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/rest/v1/MySqlSyncConfig
  title: "MySqlSyncConfig \_|\_ Cloud SQL for SQL Server \_|\_ Google Cloud Documentation"
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
MySqlSyncConfig
Stay organized with collections
Save and categorize content based on your preferences.
JSON representation
SyncFlags
JSON representation
MySQL-specific external server sync settings.
JSON representation
{
"initialSyncFlags" : [
{
object ( SyncFlags )
}
]
}
Fields
initialSyncFlags[]
object ( SyncFlags )
Flags to use for the initial dump.
SyncFlags
Initial sync flags for certain Cloud SQL APIs. Currently used for the MySQL external server initial dump.
JSON representation
{
"name" : string ,
"value" : string
}
Fields
name
string
The name of the flag.
value
string
The value of the flag. This field must be omitted if the flag doesn't take a value.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-10-23 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-10-23 UTC."],[],[]]
