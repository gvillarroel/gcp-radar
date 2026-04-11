---
title: "Google Workspace Developer Tools \_|\_ Google for Developers"
url: https://developers.google.com/workspace/guides/developer-tools
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://developers.google.com/workspace/events
source_metadata:
  url: https://developers.google.com/workspace/guides/developer-tools
  title: "Google Workspace Developer Tools \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Google Workspace
Guides
Send feedback
Google Workspace Developer Tools
Stay organized with collections
Save and categorize content based on your preferences.
The Google Workspace developer tools provide several components to enhance
your development experience, including an IDE extension, Gemini CLI extensions,
and a Model Context Protocol (MCP) server.
Use the Google Workspace IDE extension
The Google Workspace IDE extension provides intelligent OAuth2 scope
linting, autocomplete, and inline documentation directly in your IDE and works
with Antigravity , Firebase
Studio , Visual Studio
Code and other IDEs.
To install the Google Workspace IDE extension, you can download it from
the Open VSX Registry ,
or use the following instructions:
User interface
In your IDE, open the Extensions view.
Search for Google Workspace Developer Tools .
Click Install .
CLI
Install from the command line with the corresponding IDE:
code --install-extension google-workspace.google-workspace-developer-tools
Add the Gemini CLI extension for Google Workspace development
Gemini CLI lets you query and edit large codebases,
generate apps from images or PDFs, and automate complex workflows—all from your
terminal.
Install the following extension to enhance your Google Workspace
development workflow and automatically include the Google Workspace
Developer MCP server:
gemini extensions install \
"https://github.com/googleworkspace/developer-tools"
Apps Script developers can install the
CLASP extension:
gemini extensions install \
"https://github.com/google/clasp"
Use Model Context Protocol (MCP) servers for Google Workspace development
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
Related topics
Learn how to use Large Language Models (LLMs) to develop on
Google Workspace
Explore other Google Workspace resources
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-01 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-01 UTC."],[],[]]
