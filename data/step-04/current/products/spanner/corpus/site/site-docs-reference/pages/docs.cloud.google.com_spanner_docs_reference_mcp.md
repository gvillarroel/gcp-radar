---
title: "MCP Reference: spanner.googleapis.com \_|\_ Spanner \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/spanner/docs/reference/mcp
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/spanner/docs/apis
source_metadata:
  url: https://docs.cloud.google.com/spanner/docs/reference/mcp
  title: "MCP Reference: spanner.googleapis.com \_|\_ Spanner \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Databases
Spanner
Reference
Send feedback
MCP Reference: spanner.googleapis.com
Stay organized with collections
Save and categorize content based on your preferences.
A Model Context Protocol (MCP) server acts as a proxy between an external service that provides context, data, or capabilities to a Large Language Model (LLM) or AI application. MCP servers connect AI applications to external systems such as databases and web services, translating their responses into a format that the AI application can understand.
Server Setup
You must enable MCP servers and set up authentication before use. For more information about using Google and Google Cloud remote MCP servers, see Google Cloud MCP servers overview .
Spanner MCP Server provides tools to interact with Spanner
Server Endpoints
An MCP service endpoint is the network address and communication interface (usually a URL) of the MCP server that an AI application (the Host for the MCP client) uses to establish a secure, standardized connection. It is the point of contact for the LLM to request context, call a tool, or access a resource. Google MCP endpoints can be global or regional.
The spanner.googleapis.com MCP server has the following MCP endpoint:
https://spanner.googleapis.com/mcp
MCP Tools
An MCP tool is a function or executable capability that an MCP server exposes to a LLM or AI application to perform an action in the real world.
The spanner.googleapis.com MCP server has the following tools:
MCP Tools
get_instance
Get information about a Spanner instance
list_instances
List Spanner instances in a given project. * Response may include next_page_token to fetch additional instances using list_instances tool with page_token set.
list_configs
List instance configs in a given project. * Response may include next_page_token to fetch additional configs using list_configs tool with page_token set.
create_instance
Create a Spanner instance in a given project.
delete_instance
Delete a Spanner instance.
create_database
Create a Spanner database in a given instance.
drop_database
Drops a Spanner database.
get_database_ddl
Get database schema for a given database.
list_databases
List Spanner databases in a given spanner instance. * Response may include next_page_token to fetch additional databases using list_databases tool with page_token set.
create_session
Create a session in a given database for query executions using execute_sql tool. * Session can be reused to execute multiple concurrent operations.
execute_sql
Execute SQL statement using a given session. * execute_sql tool can be used to execute DQL as well as DML statements. * Use commit tool to commit result of a DML statement. * DDL statements are only supported using update_database_schema tool.
commit
Commit a transaction in a given session. * If commit is finalizing the result of a DML statement then commit request should include latest precommit_token returned by execute_sql tool. * If response to commit includes another precommit_token then issue another commit call to finalize the transaction with the latest precommit_token.
update_database_schema
Update schema for a given database.
get_operation
Get status of a long-running operation. * Long running operation may take several minutes to complete. get_operation tool can be used to poll the status of a long running operation.
Get MCP tool specifications
To get the MCP tool specifications for all tools in an MCP server, use the tools/list method. The following example demonstrates how to use curl to list all tools and their specifications currently available within the MCP server.
Curl Request
curl --location 'https://spanner.googleapis.com/mcp' \
--header 'content-type: application/json' \
--header 'accept: application/json, text/event-stream' \
--data '{
"method": "tools/list",
"jsonrpc": "2.0",
"id": 1
}'
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-02-11 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-02-11 UTC."],[],[]]
