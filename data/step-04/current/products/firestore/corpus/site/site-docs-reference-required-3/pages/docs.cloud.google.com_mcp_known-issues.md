---
title: "Known issues \_|\_ Google Cloud MCP servers \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/mcp/known-issues
knowledge_key: corpus
source_id: site-docs-reference-required-3
source_type: site
entrypoint: https://docs.cloud.google.com/mcp/control-mcp-use-organization
source_metadata:
  url: https://docs.cloud.google.com/mcp/known-issues
  title: "Known issues \_|\_ Google Cloud MCP servers \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Developer tools
Google Cloud MCP servers
Guides
Send feedback
Known issues
Stay organized with collections
Save and categorize content based on your preferences.
Preview
This product or feature is
subject to the "Pre-GA Offerings Terms" in the General Service Terms section
of the Service Specific
Terms .
Pre-GA products and features are available "as is" and might have limited support.
For more information, see the
launch stage descriptions .
This document provides details and workarounds for known issues with Google
and Google Cloud remote Model Context Protocol (MCP) servers.
Authentication and Authorization Issues
The following known issues involve problems with MCP authentication and
authorization.
Antigravity doesn't support MCP OAuth specifications
Antigravity doesn't support the
MCP OAuth specifications , which prevents you from
using a client ID and secret. You can configure Google and Google Cloud remote
MCP servers in Antigravity and see the tools. However, Antigravity doesn't
provide a way to use a client ID and secret or agent identity, so you can't
authenticate to the MCP server.
Tool issues
The following known issues affect specific Google or Google Cloud MCP
tools.
Compute Engine list_images tool returns permission denied
The Compute Engine list_images tool fails with a
permission error when querying public images like fedora-cloud .
Client-specific issues
The following issues involve problems with specific MCP clients.
Gemini CLI gives API error
The following issue occurs when the name of the MCP server is longer than 64
characters or contains characters other than alphanumeric characters,
underscores, dots, colons, or dashes:
[API Error: {"error":{"message":"{\"error\": {\"code\": 400, \"status\": 400, \"message\": \"* GenerateContentRequest.tools[0].function_declarations[14].name: Invalid
function name. Must start with a letter or an underscore. Must be alphanumeric (a-z, A-Z, 0-9), underscores (_), dots (.), colons (:), or dashes (-), with a maximum length
of 64.\\n*
To resolve this issue, change the name of the MCP server in your Gemini
extension file to comply with the required naming conventions. Gemini
CLI extension files are typically located in:
~/.gemini/extensions/ EXT_NAME /gemini-extension.json where
~/ is your home directory and EXT_NAME is the name you
gave the extension. For more information, see
Configure MCP in an AI application
What's next
Configure Google and Google Cloud remote MCP servers in your AI applications .
Explore supported products .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-15 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-15 UTC."],[],[]]
