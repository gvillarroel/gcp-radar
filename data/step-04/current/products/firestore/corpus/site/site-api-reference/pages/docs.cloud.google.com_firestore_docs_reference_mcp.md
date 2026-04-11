---
title: "MCP Reference: firestore.googleapis.com \_|\_ Firestore \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/firestore/docs/reference/mcp
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/firestore/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/firestore/docs/reference/mcp
  title: "MCP Reference: firestore.googleapis.com \_|\_ Firestore \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Databases
Firestore
Reference
Send feedback
MCP Reference: firestore.googleapis.com
Stay organized with collections
Save and categorize content based on your preferences.
A Model Context Protocol (MCP) server acts as a proxy between an external service that provides context, data, or capabilities to a Large Language Model (LLM) or AI application. MCP servers connect AI applications to external systems such as databases and web services, translating their responses into a format that the AI application can understand.
Server Setup
You must enable MCP servers and set up authentication before use. For more information about using Google and Google Cloud remote MCP servers, see Google Cloud MCP servers overview .
Firestore MCP Server provides tools to interact with Firestore.
Server Endpoints
An MCP service endpoint is the network address and communication interface (usually a URL) of the MCP server that an AI application (the Host for the MCP client) uses to establish a secure, standardized connection. It is the point of contact for the LLM to request context, call a tool, or access a resource. Google MCP endpoints can be global or regional.
The firestore.googleapis.com MCP server has the following MCP endpoint:
https://firestore.googleapis.com/mcp
MCP Tools
An MCP tool is a function or executable capability that an MCP server exposes to a LLM or AI application to perform an action in the real world.
The firestore.googleapis.com MCP server has the following tools:
MCP Tools
get_document
Get a document from a Firestore database.
add_document
Create a document from a Firestore database.
update_document
Update a document from a Firestore database.
delete_document
Delete a document from a Firestore database.
list_documents
List documents from a Firestore database.
list_collections
List all the collection IDs underneath a document.
create_database
Create a Firestore database.
get_database
Get a Firestore database.
list_databases
List Firestore databases.
update_database
Update a Firestore database.
delete_database
Delete a Firestore database.
create_index
Create a composite index.
get_index
Get a Firestore index.
list_indexes
List Firestore indexes.
delete_index
Delete a Firestore index.
Get MCP tool specifications
To get the MCP tool specifications for all tools in an MCP server, use the tools/list method. The following example demonstrates how to use curl to list all tools and their specifications currently available within the MCP server.
Curl Request
curl --location 'https://firestore.googleapis.com/mcp' \
--header 'content-type: application/json' \
--header 'accept: application/json, text/event-stream' \
--data '{
"method": "tools/list",
"jsonrpc": "2.0",
"id": 1
}'
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-26 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-26 UTC."],[],[]]
