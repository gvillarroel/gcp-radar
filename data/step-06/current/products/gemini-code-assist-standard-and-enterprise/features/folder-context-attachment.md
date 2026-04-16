---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:16:10.695Z"
product_name: "Gemini Code Assist Standard and Enterprise"
product_slug: "gemini-code-assist-standard-and-enterprise"
feature_name: "Folder context attachment"
feature_slug: "folder-context-attachment"
latest_feature_date: "2025-05-06"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/gemini/docs/codeassist/chat-gemini"
  - "https://docs.cloud.google.com/gemini/docs/codeassist/use-agentic-chat-pair-programmer"
  - "https://docs.cloud.google.com/gemini/docs/codeassist/configure-local-codebase-awareness"
  - "https://docs.cloud.google.com/gemini/docs/codeassist/agent-mode"
keywords:
  - "folder"
  - "context"
  - "attachment"
  - "lets"
  - "you"
  - "attach"
  - "local"
  - "workspace"
---

# Folder context attachment

Product: Gemini Code Assist Standard and Enterprise
Coverage: MEDIUM

## Step 02 Summary

Lets you attach local workspace folders as prompt context in IntelliJ Gemini Code Assist, with support for a 1M-token context window.

## Extended Definition

Lets you attach local workspace folders as prompt context in IntelliJ Gemini Code Assist, with support for a 1M-token context window.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/gemini/docs/codeassist/chat-gemini](https://docs.cloud.google.com/gemini/docs/codeassist/chat-gemini)
- [https://docs.cloud.google.com/gemini/docs/codeassist/use-agentic-chat-pair-programmer](https://docs.cloud.google.com/gemini/docs/codeassist/use-agentic-chat-pair-programmer)
- [https://docs.cloud.google.com/gemini/docs/codeassist/configure-local-codebase-awareness](https://docs.cloud.google.com/gemini/docs/codeassist/configure-local-codebase-awareness)
- [https://docs.cloud.google.com/gemini/docs/codeassist/agent-mode](https://docs.cloud.google.com/gemini/docs/codeassist/agent-mode)

## Supporting Pages

### "Chat with Gemini Code Assist Standard and Enterprise \_|\_ Gemini for Google\

- URL: [https://docs.cloud.google.com/gemini/docs/codeassist/chat-gemini](https://docs.cloud.google.com/gemini/docs/codeassist/chat-gemini)
- Source ID: `site-docs-reference`
- Final score: 134
- Re-rank relevance: N/A

Evidence snippets:
- Specify files and folders in your workspace context By default, Gemini Code Assist uses the current open file as context.
- You can specify files or folders in your workspace for Gemini Code Assist to use as additional context.
- Manage files and folders in the Context Drawer After you specify a file or folder to be used as context for your Gemini Code Assist prompts , these files and folders are placed in the Context Drawer , where you can view and remove them from the prompt context.
- To manage the files and folders in your Context Drawer, perform the following tasks: VS Code Note: Chats created with Gemini Code Assist for VS Code, prior to version 2.34.0 , won't retain and display the saved context in the Context Drawer.

### "Use the Gemini Code Assist agent mode \_|\_ Gemini for Google Cloud \_|\_\

- URL: [https://docs.cloud.google.com/gemini/docs/codeassist/use-agentic-chat-pair-programmer](https://docs.cloud.google.com/gemini/docs/codeassist/use-agentic-chat-pair-programmer)
- Source ID: `site-docs-root`
- Final score: 130
- Re-rank relevance: N/A

Evidence snippets:
- Context can be taken from files in your IDE, files in your local system folders, tool responses, and your prompt details.
- The following example mcp.json file configures two remote Cloudflare MCP servers, a remote GitLab MCP server, and a local GitHub MCP server for use with Gemini Code Assist in IntelliJ. { "mcpServers" : { "github" : { "command" : "npx" , "args" : [ "-y" , "@modelcontextprotocol/server-github" ], "env" : { "GITHUB PERSONAL ACCESS TOKEN" : "ghp example personal access token12345" } }, "gitlab" : { "command" : "npx" , "args" : [ "mcp-remote" , "https://your-gitlab-instance.com/api/v4/mcp" ] }, "cloudflare-observability" : { "command" : "npx" , "args" : [ "mcp-remote" , "https://observability.mcp.cloudflare.com/sse" ] }, "cloudflare-bindings" : { "command" : "npx" , "args" : [ "mcp-remote" , "https://bindings.mcp.cloudflare.com/sse" ] } } } Your configured MCP servers are available for the agent to use in agent mode.
- The following example Gemini settings JSON file configures two remote Cloudflare MCP servers, a remote GitLab MCP server, and a local GitHub MCP server for use with Gemini Code Assist in VS Code. { "mcpServers" : { "github" : { "command" : "npx" , "args" : [ "-y" , "@modelcontextprotocol/server-github" ], "env" : { "GITHUB PERSONAL ACCESS TOKEN" : "ghp example personal access token12345" } }, "gitlab" : { "command" : "npx" , "args" : [ "mcp-remote" , "https://your-gitlab-instance.com/api/v4/mcp" ] }, "cloudflare-observability" : { "command" : "npx" , "args" : [ "mcp-remote" , "https://observability.mcp.cloudflare.com/sse" ] }, "cloudflare-bindings" : { "command" : "npx" , "args" : [ "mcp-remote" , "https://bindings.mcp.cloudflare.com/sse" ] } } } Open the command palette and select Developer: Reload Window .
- The following table details the locations for context files for different scopes: Scope Location All your projects /.gemini/GEMINI.md A specific project Your working directory or any parent directories up to either your project root (identified by a .git folder) or your home directory.

### "Configure local codebase awareness \_|\_ Gemini for Google Cloud \_|\_ Google\

- URL: [https://docs.cloud.google.com/gemini/docs/codeassist/configure-local-codebase-awareness](https://docs.cloud.google.com/gemini/docs/codeassist/configure-local-codebase-awareness)
- Source ID: `site-docs-reference`
- Final score: 126
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You can also specify files and folders in your workspace context .
- Home Documentation AI and ML Gemini for Google Cloud Guides Send feedback Configure local codebase awareness Stay organized with collections Save and categorize content based on your preferences.
- By default, local codebase awareness is enabled, but you can exclude files from Gemini Code Assist use , and VS Code users can disable local codebase awareness entirely.
- To disable local codebase awareness entirely, perform the following steps: VS Code In your IDE, navigate to Settings > Extensions Gemini Code Assist .

### Agent mode overview \_|\_ Gemini for Google Cloud \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/gemini/docs/codeassist/agent-mode](https://docs.cloud.google.com/gemini/docs/codeassist/agent-mode)
- Source ID: `site-docs-reference`
- Final score: 96
- Re-rank relevance: N/A

Evidence snippets:
- Context can be taken from files in your IDE, files in your local system folders, tool responses, and your prompt details.
- VS Code The following methods of getting context are usually available to Gemini Code Assist in agent mode: Information in your IDE workspace.
- IntelliJ The following methods of getting context are usually available to Gemini Code Assist in agent mode: Information in your IDE project including your files, indexed symbols and usage of symbols in your project.
- Some example tools are built-in tools like grep and file read or write, local or remote Model Context Protocol (MCP) servers and their executable functions, and RESTful API calls.

