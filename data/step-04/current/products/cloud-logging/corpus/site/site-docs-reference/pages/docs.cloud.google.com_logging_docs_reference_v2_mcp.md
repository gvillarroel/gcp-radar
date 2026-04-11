---
title: "MCP Reference: logging.googleapis.com \_|\_ Cloud Logging \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/logging/docs/reference/v2/mcp
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/logging/docs/apis
source_metadata:
  url: https://docs.cloud.google.com/logging/docs/reference/v2/mcp
  title: "MCP Reference: logging.googleapis.com \_|\_ Cloud Logging \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Observability
Cloud Logging
Reference
Send feedback
MCP Reference: logging.googleapis.com
Stay organized with collections
Save and categorize content based on your preferences.
A Model Context Protocol (MCP) server acts as a proxy between an external service that provides context, data, or capabilities to a Large Language Model (LLM) or AI application. MCP servers connect AI applications to external systems such as databases and web services, translating their responses into a format that the AI application can understand.
Server Setup
You must enable MCP servers and set up authentication before use. For more information about using Google and Google Cloud remote MCP servers, see Google Cloud MCP servers overview .
MCP for Logging API
Server Endpoints
An MCP service endpoint is the network address and communication interface (usually a URL) of the MCP server that an AI application (the Host for the MCP client) uses to establish a secure, standardized connection. It is the point of contact for the LLM to request context, call a tool, or access a resource. Google MCP endpoints can be global or regional.
The logging.googleapis.com MCP server has the following MCP endpoint:
https://logging.googleapis.com/mcp
MCP Tools
An MCP tool is a function or executable capability that an MCP server exposes to a LLM or AI application to perform an action in the real world.
The logging.googleapis.com MCP server has the following tools:
MCP Tools
list_log_entries
Use this as the primary tool to search and retrieve log entries from Google Cloud Logging. It's essential for debugging application behavior, finding specific error messages, or auditing events. The 'filter' is powerful and can be used to select logs by severity, resource type, text content, and more. IMPORTANT: This tool will only work with a single resource project at a time. Calls with multiple resource projects will fail.
list_log_names
Use this as the primary tool to list the log names in a Google Cloud project. This is useful for discovering what logs are available for a project. Only logs which have log entries will be listed.
get_bucket
Use this as the primary tool to get a specific log bucket by name. Log buckets are containers that store and organize your log data.
list_buckets
Use this as the primary tool to list the log buckets in a Google Cloud project. Log buckets are containers that store and organize your log data. This tool is useful for understanding how your logs are stored and for managing your logging configurations.
get_view
Use this as the primary tool to get a specific view on a log bucket. Log views provide fine-grained access control to the logs in your buckets.
list_views
Use this as the primary tool to list the log views in a given log bucket. Log views provide fine-grained access control to the logs in your buckets. This is useful for managing who has access to which logs.
Get MCP tool specifications
To get the MCP tool specifications for all tools in an MCP server, use the tools/list method. The following example demonstrates how to use curl to list all tools and their specifications currently available within the MCP server.
Curl Request
curl --location 'https://logging.googleapis.com/mcp' \
--header 'content-type: application/json' \
--header 'accept: application/json, text/event-stream' \
--data '{
"method": "tools/list",
"jsonrpc": "2.0",
"id": 1
}'
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-03 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-03 UTC."],[],[]]
