---
title: "MCP Tools Reference: alloydb \_|\_ AlloyDB for PostgreSQL \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/alloydb/docs/reference/mcp/tools_list/execute_sql
knowledge_key: corpus
source_id: site-docs-reference-required-10
source_type: site
entrypoint: https://docs.cloud.google.com/alloydb/docs/reference/query-tuning-and-optimization
source_metadata:
  url: https://docs.cloud.google.com/alloydb/docs/reference/mcp/tools_list/execute_sql
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
Tool: execute_sql
Execute a SQL query on an instance.
Requirements
The cluster must exist and be in a READY state. You can use the list_clusters tool to list all clusters in a project.
The instance must exist and be in a READY state. You can use the list_instances tool to list all instances in a cluster.
The user must exist and have the appropriate permissions to execute the SQL query. You can use the list_users tool to list all users in a cluster.
Usage
Call create_cluster to create a cluster if it doesn't exist.
Call create_instance to create an instance if it doesn't exist.
Call create_user to create a user with the appropriate permissions if it doesn't exist.
Call execute_sql to execute a SQL query on an instance.
This will return the result of the SQL query.
The following sample demonstrate how to use curl to invoke the execute_sql MCP tool.
Curl Request
curl --location 'https://alloydb.googleapis.com/mcp' \
--header 'content-type: application/json' \
--header 'accept: application/json, text/event-stream' \
--data '{
"method": "tools/call",
"params": {
"name": "execute_sql",
"arguments": {
// provide these details according to the tool' s MCP specification
}
} ,
"jsonrpc" : "2.0" ,
"id" : 1
} '
Input Schema
Message for executing a SQL statement in a database inside an AlloyDB instance. Uses IAM user authentication.
ExecuteSqlRequest
JSON representation
{
"instance" : string ,
"database" : string ,
"sqlStatement" : string ,
}
Fields
instance
string
Required. Identifier. The name of the instance resource with the format: * projects/{project}/locations/{region}/clusters/{cluster_id}/instances/{instance_id} where the cluster and instance ID segments should satisfy the regex expression [a-z]([a-z0-9-]{0,61}[a-z0-9])? , e.g. 1-63 characters of lowercase letters, numbers, and dashes, starting with a letter, and ending with a letter or number. The prefix of the instance resource name is the name of the parent resource: * projects/{project}/locations/{region}/clusters/{cluster_id} This field is REQUIRED.
database
string
Required. Name of the database where the query will be executed. You can use the default "postgres" database if a different database is not created. Note - Value provided should be the same as expected from SELECT
current_database(); and NOT as a resource reference. This field is REQUIRED.
sqlStatement
string
Required. SQL statement to execute on database. Any valid statement is permitted, including DDL, DML, DQL statements. This field is REQUIRED.
Output Schema
Execute a SQL statement response.
ExecuteSqlResponse
JSON representation
{
"sqlResults" : [
{
object ( SqlResult )
}
] ,
"metadata" : {
object ( ExecuteSqlMetadata )
}
}
Fields
sqlResults[]
object ( SqlResult )
SqlResult represents the results for the execution of sql statements.
metadata
object ( ExecuteSqlMetadata )
Any additional metadata information regarding the execution of the sql statement.
SqlResult
JSON representation
{
"columns" : [
{
object ( SqlResultColumn )
}
] ,
"rows" : [
{
object ( SqlResultRow )
}
]
}
Fields
columns[]
object ( SqlResultColumn )
List of columns included in the result. This also includes the data type of the column.
rows[]
object ( SqlResultRow )
Rows returned by the SQL statement.
SqlResultColumn
JSON representation
{
"name" : string ,
"type" : string
}
Fields
name
string
Name of the column.
type
string
Datatype of the column as reported by the postgres driver. Common type names are "VARCHAR", "TEXT", "NVARCHAR", "DECIMAL", "BOOL", "INT", and "BIGINT".
SqlResultRow
JSON representation
{
"values" : [
{
object ( SqlResultValue )
}
]
}
Fields
values[]
object ( SqlResultValue )
List of values in a row of sql result.
SqlResultValue
JSON representation
{
// Union field _value can be only one of the following:
"value" : string
// End of list of possible types for union field _value .
// Union field _null_value can be only one of the following:
"nullValue" : boolean
// End of list of possible types for union field _null_value .
}
Fields
Union field _value .
_value can be only one of the following:
value
string
The cell value represented in string format. Timestamps are converted to string using RFC3339Nano format.
Union field _null_value .
_null_value can be only one of the following:
nullValue
boolean
Set to true if cell value is null.
ExecuteSqlMetadata
JSON representation
{
"message" : string ,
"partialResult" : boolean ,
"sqlStatementExecutionDuration" : string ,
"status" : enum ( Status )
}
Fields
message
string
Message related to SQL execution. Marked as core content since it can potentially contain details related to the query or result set. This field can be used to convey messages such as "when the SQL result set exceeds the acceptable response size limits."
partialResult
boolean
Set to true if SQL returned a result set larger than the acceptable response size limits and the result was truncated.
sqlStatementExecutionDuration
string ( Duration format)
The time duration taken to execute the sql statement.
A duration in seconds with up to nine fractional digits, ending with ' s '. Example: "3.5s" .
status
enum ( Status )
Status of SQL execution.
Duration
JSON representation
{
"seconds" : string ,
"nanos" : integer
}
Fields
seconds
string ( int64 format)
Signed seconds of the span of time. Must be from -315,576,000,000 to +315,576,000,000 inclusive. Note: these bounds are computed from: 60 sec/min * 60 min/hr * 24 hr/day * 365.25 days/year * 10000 years
nanos
integer
Signed fractions of a second at nanosecond resolution of the span of time. Durations less than one second are represented with a 0 seconds field and a positive or negative nanos field. For durations of one second or more, a non-zero value for the nanos field must be of the same sign as the seconds field. Must be from -999,999,999 to +999,999,999 inclusive.
Tool Annotations
Destructive Hint: ✅ | Idempotent Hint: ❌ | Read Only Hint: ❌ | Open World Hint: ✅
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-02-17 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-02-17 UTC."],[],[]]
