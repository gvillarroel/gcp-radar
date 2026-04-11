---
title: "MCP Reference: bigtableadmin.googleapis.com \_|\_ Bigtable \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/bigtable/docs/reference/admin/mcp
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/bigtable/docs
source_metadata:
  url: https://docs.cloud.google.com/bigtable/docs/reference/admin/mcp
  title: "MCP Reference: bigtableadmin.googleapis.com \_|\_ Bigtable \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Databases
Bigtable
Reference
Send feedback
MCP Reference: bigtableadmin.googleapis.com
Stay organized with collections
Save and categorize content based on your preferences.
A Model Context Protocol (MCP) server acts as a proxy between an external service that provides context, data, or capabilities to a Large Language Model (LLM) or AI application. MCP servers connect AI applications to external systems such as databases and web services, translating their responses into a format that the AI application can understand.
Server Setup
You must enable MCP servers and set up authentication before use. For more information about using Google and Google Cloud remote MCP servers, see Google Cloud MCP servers overview .
MCP server for Bigtable Admin API
Server Endpoints
An MCP service endpoint is the network address and communication interface (usually a URL) of the MCP server that an AI application (the Host for the MCP client) uses to establish a secure, standardized connection. It is the point of contact for the LLM to request context, call a tool, or access a resource. Google MCP endpoints can be global or regional.
The bigtableadmin.googleapis.com MCP server has the following MCP endpoint:
https://bigtableadmin.googleapis.com/mcp
MCP Tools
An MCP tool is a function or executable capability that an MCP server exposes to a LLM or AI application to perform an action in the real world.
The bigtableadmin.googleapis.com MCP server has the following tools:
MCP Tools
create_instance
Create a new instance in the specified project. The request requires project_id, instance_id, display_name, and at least one cluster. Each cluster must specify its zone (e.g. us-central1-a). Example: { "project_id": "my-project", "instance_id": "my-instance", "display_name": "This is my instance", "clusters": [ { "zone": "us-central1-a", "serve_nodes": 3, "default_storage_type": "SSD" } ] }
get_instance
Get information about an instance. The request requires the 'name' field to be set in the format 'projects/{project}/instances/{instance}'. Example: { "name": "projects/my-project/instances/my-instance" }
list_instances
List information about instances in a project. The request requires the 'parent' field to be set in the format 'projects/{project}'. Example: { "parent": "projects/my-project" }
delete_instance
Delete an instance from a project. The request requires the 'name' field to be set in the format 'projects/{project}/instances/{instance}'. Example: { "name": "projects/my-project/instances/my-instance" } Before executing the deletion, you MUST confirm the action with the user by stating the full instance name and asking for "yes/no" confirmation.
create_table
Create a new table in the specified instance.
get_table
Get metadata information about the specified table. The request requires the 'name' field to be set in the format 'projects/{project}/instances/{instance}/tables/{table}'. Example: { "name": "projects/my-project/instances/my-instance/tables/my-table" }
list_tables
List all tables in a specified instance. The request requires the 'parent' field to be set in the format 'projects/{project}/instances/{instance}'. Example: { "parent": "projects/my-project/instances/my-instance" }
delete_table
Delete a table. The request requires the 'name' field to be set in the format 'projects/{project}/instances/{instance}/tables/{table}'. Example: { "name": "projects/my-project/instances/my-instance/tables/my-table" } The table must exist. You can use list_tables to verify. Before executing the deletion, you MUST confirm the action with the user by stating the full table name and asking for "yes/no" confirmation.
Get MCP tool specifications
To get the MCP tool specifications for all tools in an MCP server, use the tools/list method. The following example demonstrates how to use curl to list all tools and their specifications currently available within the MCP server.
Curl Request
curl --location 'https://bigtableadmin.googleapis.com/mcp' \
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
