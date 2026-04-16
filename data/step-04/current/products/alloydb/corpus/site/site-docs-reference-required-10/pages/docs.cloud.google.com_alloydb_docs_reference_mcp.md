---
title: "MCP Reference: alloydb \_|\_ AlloyDB for PostgreSQL \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/alloydb/docs/reference/mcp
knowledge_key: corpus
source_id: site-docs-reference-required-10
source_type: site
entrypoint: https://docs.cloud.google.com/alloydb/docs/reference/query-tuning-and-optimization
source_metadata:
  url: https://docs.cloud.google.com/alloydb/docs/reference/mcp
  title: "MCP Reference: alloydb \_|\_ AlloyDB for PostgreSQL \_|\_ Google Cloud Documentation"
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
MCP Reference: alloydb
Stay organized with collections
Save and categorize content based on your preferences.
A Model Context Protocol (MCP) server acts as a proxy between an external service that provides context, data, or capabilities to a Large Language Model (LLM) or AI application. MCP servers connect AI applications to external systems such as databases and web services, translating their responses into a format that the AI application can understand.
Server Setup
You must enable MCP servers and set up authentication before use. For more information about using Google and Google Cloud remote MCP servers, see Google Cloud MCP servers overview .
Server Endpoints
An MCP service endpoint is the network address and communication
interface (usually a URL) of the MCP server that an AI application
(the Host for the MCP client) uses to establish a secure, standardized connection. It is the
point of contact for the LLM to request context, call a tool, or access a resource. Google
MCP endpoints can be global or regional.
The alloydb MCP server uses regional
endpoints:
For example, https://alloydb.northamerica-northeast2.rep.googleapis.com/mcp
For information about available locations, see
AlloyDB locations .
MCP Tools
An MCP tool is a function or executable capability that an MCP server exposes to a LLM or AI application to perform an action in the real world.
The alloydb MCP server has the following tools:
MCP Tools
list_clusters
List all clusters
create_cluster
Create a new cluster
get_cluster
Get a cluster
list_instances
List all instances in a cluster
create_instance
Creates an AlloyDB instance, which is a child resource of a cluster.
Requirements
The cluster that the instance is being created in must exist and be in a READY state. You can use the list_clusters tool to list all clusters in a project.
If you're trying to create a PRIMARY instance, then the cluster must not already have a PRIMARY instance.
If you're trying to create a READ_POOL instance, then the cluster must already have a PRIMARY instance.
Usage
Call create_cluster to create a cluster if it doesn't exist.
Call create_instance to create an instance within the cluster.
This will return a long-running operation that indicates the progress of the instance creation.
You can poll the status of the operation using the get_operation tool. Generally the creation takes 5-10 minutes.
Once the long-running operation is complete, the instance will be in a READY state.
get_instance
Get an instance
create_user
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
get_user
Get a user in a given project, location, and cluster
list_users
List all users in a given project, location, and cluster
execute_sql
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
get_operation
Gets the status of a long-running operation.
Usage
Some tools (for example, create_cluster and create_instance ) return a long-running operation. You can use this tool to get the status of the operation. It can be called repeatedly until the operation is complete.
Parameters
name : The name of the operation to get.
name should be the name returned by the tool that initiated the operation.
name should be in the format of projects/{project}/locations/{location}/operations/{operation} .
Returns
An Operation object that contains the status of the operation.
If the operation is not complete, the response will be empty.
If the operation is complete, the response will contain either:
A response field that contains the result of the operation and indicates that it was successful.
A error field that indicates any errors that occurred during the operation.
Get MCP tool specifications
To get the MCP tool specifications for all tools in an MCP server, use the tools/list method. The following example demonstrates how to use curl to list all tools and their specifications currently available within the MCP server.
Curl Request
curl --location 'https://alloydb.googleapis.com/mcp' \
--header 'content-type: application/json' \
--header 'accept: application/json, text/event-stream' \
--data '{
"method": "tools/list",
"jsonrpc": "2.0",
"id": 1
}'
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-02-17 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-02-17 UTC."],[],[]]
