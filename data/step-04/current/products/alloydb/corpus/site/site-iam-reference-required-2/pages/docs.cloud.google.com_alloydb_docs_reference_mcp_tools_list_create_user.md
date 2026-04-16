---
title: "MCP Tools Reference: alloydb \_|\_ AlloyDB for PostgreSQL \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/alloydb/docs/reference/mcp/tools_list/create_user
knowledge_key: corpus
source_id: site-iam-reference-required-2
source_type: site
entrypoint: https://docs.cloud.google.com/alloydb/docs/reference/iam-roles-permissions
source_metadata:
  url: https://docs.cloud.google.com/alloydb/docs/reference/mcp/tools_list/create_user
  title: "MCP Tools Reference: alloydb \_|\_ AlloyDB for PostgreSQL \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Databases
AlloyDB for PostgreSQL
Reference
Send feedback
MCP Tools Reference: alloydb
Stay organized with collections
Save and categorize content based on your preferences.
Tool: create_user
Create a new user in a given project, location, and cluster.
Requirements
The cluster that the user is being created in must exist and be in a READY state. You can use the list_clusters tool to list all clusters in a project.
A PRIMARY instance must exist and be in a READY state. You can use the list_instances tool to list all instances in a cluster.
Only an IAM_BASED type user is supported.
The "postgres" database role should be assigned to the user if the user wants to access the default postgres database.
Usage
Call create_cluster to create a cluster if it doesn't exist.
Call create_instance to create an instance if it doesn't exist.
Call create_user to create a user within the cluster which will return the User object.
The following sample demonstrate how to use curl to invoke the create_user MCP tool.
Curl Request
curl --location 'https://alloydb.googleapis.com/mcp' \
--header 'content-type: application/json' \
--header 'accept: application/json, text/event-stream' \
--data '{
"method": "tools/call",
"params": {
"name": "create_user",
"arguments": {
// provide these details according to the tool' s MCP specification
}
} ,
"jsonrpc" : "2.0" ,
"id" : 1
} '
Input Schema
Message for creating a user.
CreateUserRequest
JSON representation
{
"parent" : string ,
"userId" : string ,
"databaseRoles" : [
string
]
}
Fields
parent
string
Required. Identifier. The parent resource in which to create the user. The value must have a format of projects/{project}/locations/{location}/clusters/{cluster_id}. - {project} is the project that the cluster resides in. This field can be specified either as: - Project ID: An alphanumeric string that can consist of lowercase letters, numerical digits, or dash ("-") characters. - Project number: A valid base-10 encoded positive integer. - {location} is the Google Cloud region that the cluster resides in. Regions will have format like "us-central1" or "us-west2". - {cluster_id} is the ID of cluster. It should be an alphanumeric string that can consist of lowercase letters, numerical digits, or dash ("-") characters. The field is REQUIRED.
userId
string
Required. The user ID is the username of the user created in the Postgres database. It should be an alphanumeric string that can can consist of lowercase letters, numerical digits, or dash characters ("-"). For an IAM user account, supply the user account's full email address. For example, kai@gmail.com . For an IAM service account, supply the service account's address without the .gserviceaccount.com suffix. For example, to specify the service account my-service@my-project.iam.gserviceaccount.com , you would use the value my-service@my-project.iam here. This field is REQUIRED.
databaseRoles[]
string
Optional. List of database roles that the user will have, which controls which database/relations they can access. By default, we recommend that you add "postgres" value to this field, which will allow the user to access the default postgres database. The database role strings are subject to the PostgreSQL naming conventions. This field is OPTIONAL.
Output Schema
Message describing User object.
User
JSON representation
{
"name" : string ,
"password" : string ,
"databaseRoles" : [
string
] ,
"userType" : enum ( UserType ) ,
"keepExtraRoles" : boolean
}
Fields
name
string
Output only. Name of the resource in the form of projects/{project}/locations/{location}/cluster/{cluster}/users/{user}.
password
string
Input only. Password for the user.
databaseRoles[]
string
Optional. List of database roles this user has. The database role strings are subject to the PostgreSQL naming conventions.
userType
enum ( UserType )
Optional. Type of this user.
keepExtraRoles
boolean
Input only. If the user already exists and it has additional roles, keep them granted.
Tool Annotations
Destructive Hint: ❌ | Idempotent Hint: ✅ | Read Only Hint: ❌ | Open World Hint: ✅
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-02-17 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-02-17 UTC."],[],[]]
