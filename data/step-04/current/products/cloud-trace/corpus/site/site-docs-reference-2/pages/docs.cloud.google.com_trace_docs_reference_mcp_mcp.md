---
title: "MCP Reference: cloudtrace.googleapis.com \_|\_ Cloud Trace \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/trace/docs/reference/mcp/mcp
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/trace/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/trace/docs/reference/mcp/mcp
  title: "MCP Reference: cloudtrace.googleapis.com \_|\_ Cloud Trace \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Observability
Cloud Trace
Reference
Send feedback
MCP Reference: cloudtrace.googleapis.com
Stay organized with collections
Save and categorize content based on your preferences.
A Model Context Protocol (MCP) server acts as a proxy between an external service that provides context, data, or capabilities to a Large Language Model (LLM) or AI application. MCP servers connect AI applications to external systems such as databases and web services, translating their responses into a format that the AI application can understand.
Server Setup
You must enable MCP servers and set up authentication before use. For more information about using Google and Google Cloud remote MCP servers, see Google Cloud MCP servers overview .
An MCP server that provides tools for Cloud Trace
Server Endpoints
An MCP service endpoint is the network address and communication interface (usually a URL) of the MCP server that an AI application (the Host for the MCP client) uses to establish a secure, standardized connection. It is the point of contact for the LLM to request context, call a tool, or access a resource. Google MCP endpoints can be global or regional.
The cloudtrace.googleapis.com MCP server has the following MCP endpoint:
https://cloudtrace.googleapis.com/mcp
MCP Tools
An MCP tool is a function or executable capability that an MCP server exposes to a LLM or AI application to perform an action in the real world.
The cloudtrace.googleapis.com MCP server has the following tools:
MCP Tools
list_traces
Use this as the primary tool to retrieve and examine distributed traces from Google Cloud Trace. Traces provide a detailed view of the path of a request as it travels through your application's services. This is essential for understanding latency issues and debugging complex, multi-service workflows. This will only return the root trace span, to gather full information call get_trace with that id.
get_trace
Use this as the primary tool to retrieve a single distributed trace from Google Cloud Trace. Traces provide a detailed view of the path of a request as it travels through your application's services. This is essential for understanding latency issues and debugging complex, multi-service workflows. This is often used as a follow on to list_traces to get full details on a specific trace.
Get MCP tool specifications
To get the MCP tool specifications for all tools in an MCP server, use the tools/list method. The following example demonstrates how to use curl to list all tools and their specifications currently available within the MCP server.
Curl Request
curl --location 'https://cloudtrace.googleapis.com/mcp' \
--header 'content-type: application/json' \
--header 'accept: application/json, text/event-stream' \
--data '{
"method": "tools/list",
"jsonrpc": "2.0",
"id": 1
}'
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-30 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-30 UTC."],[],[]]
