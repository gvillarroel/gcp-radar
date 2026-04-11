---
title: "Use Large Language Models (LLMs) to develop on Google Workspace \_|\_ Google\
  \ for Developers"
url: https://developers.google.com/workspace/guides/build-with-llms
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://developers.google.com/workspace/events
source_metadata:
  url: https://developers.google.com/workspace/guides/build-with-llms
  title: "Use Large Language Models (LLMs) to develop on Google Workspace \_|\_ Google\
    \ for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Google Workspace
Guides
Send feedback
Use Large Language Models (LLMs) to develop on Google Workspace
Stay organized with collections
Save and categorize content based on your preferences.
This page provides an overview of best practices and recommended tools for
working with Large Language Models (LLMs) to develop solutions for
Google Workspace.
When developing on Google Workspace, LLMs can help you in the
following ways:
Generate or troubleshoot code for calling Google Workspace APIs.
Build a solution based on the latest Google Workspace developer
documentation.
Access Google Workspace resources from the command line or your
integrated development environment (IDE).
Use a Model Context Protocol (MCP) for Google Workspace development
Note: For an MCP server to connect to Google Workspace APIs, star and
subscribe to this feature request .
A Model Context Protocol (MCP)
is a standardized open protocol that provides context to LLMs and AI agents so
that they can return better quality information in multi-turn conversations.
Google Workspace has an MCP server that provides tools for an LLM to
access and search developer documentation. You can use this server when you're
building or using AI agents to do any of the following
Retrieve up-to-date information about Google Workspace APIs and services.
Fetch official Google Workspace documentation and snippets.
To use the server, add this server to your MCP client configuration:
For Gemini Code Assist , add the
following to your settings.json file:
{
"mcpServers" : {
"workspace-developer" : {
"httpUrl" : "https://workspace-developer.goog/mcp" ,
"trust" : true
},
}
}
For Gemini CLI , run the following
command from your terminal to add this server as an extension:
gemini extensions install https://github.com/googleworkspace/developer-tools
To improve the output from the server, add rules that instruct the LLM to use
the server when working with Google Workspace APIs. For example, when
using the server as a Gemini CLI extension, add the following rule to the
GEMINI.md
file:
Always use the `workspace-developer` tools when using Google Workspace APIs.
Use AI code assistants
We recommend the following AI code assist tools to incorporate into your
workflow for Google Workspace development:
Google AI Studio : Generate code for
your Google Workspace solutions, including code for
Apps Script projects.
Gemini Code Assist : Get
AI-powered assistance in your IDE from the Gemini 2.5 model.
Related topics
Explore Google Workspace developer tools
Build with AI for Google Workspace
Extend the Google Workspace UI
Gemini for Google Cloud overview
Read documents while coding with Gemini Code Assist
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-01 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-01 UTC."],[],[]]
