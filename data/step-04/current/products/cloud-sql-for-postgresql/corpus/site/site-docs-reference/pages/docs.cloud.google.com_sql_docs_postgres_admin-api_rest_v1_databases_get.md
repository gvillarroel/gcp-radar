---
title: "Method: databases.get \_|\_ Cloud SQL for PostgreSQL \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/databases/get
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/sql/docs/postgres/admin-api
source_metadata:
  url: https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/databases/get
  title: "Method: databases.get \_|\_ Cloud SQL for PostgreSQL \_|\_ Google Cloud\
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
Method: databases.get
Stay organized with collections
Save and categorize content based on your preferences.
HTTP request
Path parameters
Request body
Response body
Authorization scopes
Examples
Try it!
Retrieves a resource containing information about a database inside a Cloud SQL instance.
HTTP request
GET https://sqladmin.googleapis.com/v1/projects/{project}/instances/{instance}/databases/{database}
The URL uses gRPC Transcoding syntax.
Path parameters
Parameters
project
string
Project ID of the project that contains the instance.
instance
string
Database instance ID. This does not include the project ID.
database
string
Name of the database in the instance.
Request body
The request body must be empty.
Response body
If successful, the response body contains an instance of Database .
Authorization scopes
Requires one of the following OAuth scopes:
https://www.googleapis.com/auth/cloud-platform
https://www.googleapis.com/auth/sqlservice.admin
For more information, see the Authentication Overview .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-10-23 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-10-23 UTC."],[],[]]
