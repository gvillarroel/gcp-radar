---
title: "Method: instances.demote \_|\_ Cloud SQL for PostgreSQL \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/instances/demote
knowledge_key: corpus
source_id: site-docs-reference-3
source_type: site
entrypoint: https://docs.cloud.google.com/sql/docs/postgres/release-notes
source_metadata:
  url: https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/instances/demote
  title: "Method: instances.demote \_|\_ Cloud SQL for PostgreSQL \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Databases
Cloud SQL
PostgreSQL
Reference
Send feedback
Method: instances.demote
Stay organized with collections
Save and categorize content based on your preferences.
HTTP request
Path parameters
Request body
Response body
Authorization scopes
InstancesDemoteRequest
JSON representation
DemoteContext
JSON representation
Examples
Try it!
Demotes an existing standalone instance to be a Cloud SQL read replica for an external database server.
HTTP request
POST https://sqladmin.googleapis.com/v1/projects/{project}/instances/{instance}/demote
The URL uses gRPC Transcoding syntax.
Path parameters
Parameters
project
string
Required. ID of the project that contains the instance.
instance
string
Required. Cloud SQL instance name.
Request body
The request body contains an instance of InstancesDemoteRequest .
Response body
If successful, the response body contains an instance of Operation .
Authorization scopes
Requires one of the following OAuth scopes:
https://www.googleapis.com/auth/cloud-platform
https://www.googleapis.com/auth/sqlservice.admin
For more information, see the Authentication Overview .
InstancesDemoteRequest
This request is used to demote an existing standalone instance to be a Cloud SQL read replica for an external database server.
JSON representation
{
"demoteContext" : {
object ( DemoteContext )
}
}
Fields
demoteContext
object ( DemoteContext )
Required. Contains details about the demote operation.
DemoteContext
This context is used to demote an existing standalone instance to be a Cloud SQL read replica for an external database server.
JSON representation
{
"kind" : string ,
"sourceRepresentativeInstanceName" : string
}
Fields
kind
string
This is always sql#demoteContext .
sourceRepresentativeInstanceName
string
Required. The name of the instance which acts as the on-premises primary instance in the replication setup.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-10-24 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-10-24 UTC."],[],[]]
