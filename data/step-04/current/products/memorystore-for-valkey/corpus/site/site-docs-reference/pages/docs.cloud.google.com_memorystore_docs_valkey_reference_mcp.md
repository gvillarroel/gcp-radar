---
title: "MCP Reference: memorystore.googleapis.com \_|\_ Memorystore for Valkey \_\
  |\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/memorystore/docs/valkey/reference/mcp
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/memorystore/docs/valkey/apis
source_metadata:
  url: https://docs.cloud.google.com/memorystore/docs/valkey/reference/mcp
  title: "MCP Reference: memorystore.googleapis.com \_|\_ Memorystore for Valkey \_\
    |\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Databases
Memorystore
Memorystore for Valkey
Reference
Send feedback
MCP Reference: memorystore.googleapis.com
Stay organized with collections
Save and categorize content based on your preferences.
A Model Context Protocol (MCP) server acts as a proxy between an external service that provides context, data, or capabilities to a Large Language Model (LLM) or AI application. MCP servers connect AI applications to external systems such as databases and web services, translating their responses into a format that the AI application can understand.
Server Setup
You must enable MCP servers and set up authentication before use. For more information about using Google and Google Cloud remote MCP servers, see Google Cloud MCP servers overview .
This is an MCP server which provides tools to manage Memorystore for Valkey instances and backups.
Server Endpoints
An MCP service endpoint is the network address and communication interface (usually a URL) of the MCP server that an AI application (the Host for the MCP client) uses to establish a secure, standardized connection. It is the point of contact for the LLM to request context, call a tool, or access a resource. Google MCP endpoints can be global or regional.
The memorystore.googleapis.com MCP server has the following MCP endpoint:
https://memorystore.googleapis.com/mcp
MCP Tools
An MCP tool is a function or executable capability that an MCP server exposes to a LLM or AI application to perform an action in the real world.
The memorystore.googleapis.com MCP server has the following tools:
MCP Tools
list_instances
List all Memorystore for Valkey instances.
get_instance
Get detailed information about a Memorystore for Valkey instance.
create_instance
Create a Memorystore for Valkey instance.
delete_instance
Delete a Memorystore for Valkey instance.
update_instance
Update a Memorystore for Valkey instance.
get_certificate_authority
Get the certificate authority for a Memorystore for Valkey instance.
reschedule_maintenance
Reschedule maintenance for a Memorystore for Valkey instance.
list_backup_collections
List all Memorystore for Valkey backup collections.
get_backup_collection
Get detailed information about a Memorystore for Valkey backup collection.
list_backups
List all Memorystore for Valkey backups.
get_backup
Get detailed information about a Memorystore for Valkey backup.
delete_backup
Delete a Memorystore for Valkey backup.
export_backup
Export a Memorystore for Valkey backup.
backup_instance
Back up a Memorystore for Valkey instance.
Get MCP tool specifications
To get the MCP tool specifications for all tools in an MCP server, use the tools/list method. The following example demonstrates how to use curl to list all tools and their specifications currently available within the MCP server.
Curl Request
curl --location 'https://memorystore.googleapis.com/mcp' \
--header 'content-type: application/json' \
--header 'accept: application/json, text/event-stream' \
--data '{
"method": "tools/list",
"jsonrpc": "2.0",
"id": 1
}'
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-06 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-06 UTC."],[],[]]
