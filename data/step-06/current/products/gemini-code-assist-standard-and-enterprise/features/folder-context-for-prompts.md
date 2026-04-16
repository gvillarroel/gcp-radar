---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:16:10.695Z"
product_name: "Gemini Code Assist Standard and Enterprise"
product_slug: "gemini-code-assist-standard-and-enterprise"
feature_name: "Folder context for prompts"
feature_slug: "folder-context-for-prompts"
latest_feature_date: "2025-04-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/gemini/docs/codeassist/chat-gemini"
  - "https://docs.cloud.google.com/gemini/docs/codeassist/write-code-gemini"
  - "https://docs.cloud.google.com/gemini/docs/codeassist/use-agentic-chat-pair-programmer"
  - "https://docs.cloud.google.com/gemini/docs/codeassist/use-in-ide"
keywords:
  - "folder"
  - "context"
  - "for"
  - "prompts"
  - "intellij"
  - "gemini"
  - "code"
  - "assist"
---

# Folder context for prompts

Product: Gemini Code Assist Standard and Enterprise
Coverage: MEDIUM

## Step 02 Summary

IntelliJ Gemini Code Assist can use folders from a local IDE project as prompt context.

## Extended Definition

IntelliJ Gemini Code Assist can use folders from a local IDE project as prompt context.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/gemini/docs/codeassist/chat-gemini](https://docs.cloud.google.com/gemini/docs/codeassist/chat-gemini)
- [https://docs.cloud.google.com/gemini/docs/codeassist/write-code-gemini](https://docs.cloud.google.com/gemini/docs/codeassist/write-code-gemini)
- [https://docs.cloud.google.com/gemini/docs/codeassist/use-agentic-chat-pair-programmer](https://docs.cloud.google.com/gemini/docs/codeassist/use-agentic-chat-pair-programmer)
- [https://docs.cloud.google.com/gemini/docs/codeassist/use-in-ide](https://docs.cloud.google.com/gemini/docs/codeassist/use-in-ide)

## Supporting Pages

### "Chat with Gemini Code Assist Standard and Enterprise \_|\_ Gemini for Google\

- URL: [https://docs.cloud.google.com/gemini/docs/codeassist/chat-gemini](https://docs.cloud.google.com/gemini/docs/codeassist/chat-gemini)
- Source ID: `site-docs-reference`
- Final score: 328
- Re-rank relevance: N/A

Evidence snippets:
- Manage files and folders in the Context Drawer After you specify a file or folder to be used as context for your Gemini Code Assist prompts , these files and folders are placed in the Context Drawer , where you can view and remove them from the prompt context.
- To manage the files and folders in your Context Drawer, perform the following tasks: VS Code Note: Chats created with Gemini Code Assist for VS Code, prior to version 2.34.0 , won't retain and display the saved context in the Context Drawer.
- Note: If you clear your chat history, Gemini Code Assist no longer uses your files for context and you must re-specify the files or folders in the chat pane using the @ symbol if you want to make more enquiries about the files.
- Clear chat history Gemini Code Assist uses the chat history for additional context when responding to your prompts.

### "Code with Gemini Code Assist Standard and Enterprise \_|\_ Gemini for Google\

- URL: [https://docs.cloud.google.com/gemini/docs/codeassist/write-code-gemini](https://docs.cloud.google.com/gemini/docs/codeassist/write-code-gemini)
- Source ID: `site-docs-root`
- Final score: 323
- Re-rank relevance: N/A

Evidence snippets:
- Use a remote repository as context To direct Gemini Code Assist to use one or more repositories as the primary context for your prompts: In your IDE's chat, start your prompt with the @ symbol.
- A successful check results in the following output: $ grpc-health-probe -addr cloudaicompanion.googleapis.com:443 -tls error: this server does not implement the grpc health protocol (grpc.health.v1.Health): GRPC target method can't be resolved An unsuccessful check results in the following output: timeout: failed to connect service "cloudaicompanion.googleapis.com:443" within 1s To obtain more details, run the following before grpc-health-probe : export GRPC GO LOG SEVERITY LEVEL=info IntelliJ There are no known issues for Gemini Code Assist for IntelliJ and other supported JetBrains IDEs.
- Prompt Gemini Code Assist with code transformation Code transformation allows you to use commands or natural language prompts in the Quick Pick menu to request modifications to your code, and provides you with a diff view to show pending changes to your code.
- This document describes how you can use Gemini Code Assist , an AI-powered collaborator in your IDE, to help you do the following in VS Code or IntelliJ and other supported JetBrains IDEs : Generate code for your project with code transformation.

### "Use the Gemini Code Assist agent mode \_|\_ Gemini for Google Cloud \_|\_\

- URL: [https://docs.cloud.google.com/gemini/docs/codeassist/use-agentic-chat-pair-programmer](https://docs.cloud.google.com/gemini/docs/codeassist/use-agentic-chat-pair-programmer)
- Source ID: `site-docs-root`
- Final score: 310
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following example mcp.json file configures two remote Cloudflare MCP servers, a remote GitLab MCP server, and a local GitHub MCP server for use with Gemini Code Assist in IntelliJ. { "mcpServers" : { "github" : { "command" : "npx" , "args" : [ "-y" , "@modelcontextprotocol/server-github" ], "env" : { "GITHUB PERSONAL ACCESS TOKEN" : "ghp example personal access token12345" } }, "gitlab" : { "command" : "npx" , "args" : [ "mcp-remote" , "https://your-gitlab-instance.com/api/v4/mcp" ] }, "cloudflare-observability" : { "command" : "npx" , "args" : [ "mcp-remote" , "https://observability.mcp.cloudflare.com/sse" ] }, "cloudflare-bindings" : { "command" : "npx" , "args" : [ "mcp-remote" , "https://bindings.mcp.cloudflare.com/sse" ] } } } Your configured MCP servers are available for the agent to use in agent mode.
- The following example Gemini settings JSON file configures two remote Cloudflare MCP servers, a remote GitLab MCP server, and a local GitHub MCP server for use with Gemini Code Assist in VS Code. { "mcpServers" : { "github" : { "command" : "npx" , "args" : [ "-y" , "@modelcontextprotocol/server-github" ], "env" : { "GITHUB PERSONAL ACCESS TOKEN" : "ghp example personal access token12345" } }, "gitlab" : { "command" : "npx" , "args" : [ "mcp-remote" , "https://your-gitlab-instance.com/api/v4/mcp" ] }, "cloudflare-observability" : { "command" : "npx" , "args" : [ "mcp-remote" , "https://observability.mcp.cloudflare.com/sse" ] }, "cloudflare-bindings" : { "command" : "npx" , "args" : [ "mcp-remote" , "https://bindings.mcp.cloudflare.com/sse" ] } } } Open the command palette and select Developer: Reload Window .
- IntelliJ This feature isn't supported in Gemini Code Assist for IntelliJ or other JetBrains IDEs.
- IntelliJ This feature isn't supported in Gemini Code Assist for IntelliJ or other JetBrains IDEs.

### "Code with Gemini Code Assist Standard and Enterprise \_|\_ Gemini for Google\

- URL: [https://docs.cloud.google.com/gemini/docs/codeassist/use-in-ide](https://docs.cloud.google.com/gemini/docs/codeassist/use-in-ide)
- Source ID: `site-docs-root`
- Final score: 303
- Re-rank relevance: N/A

Evidence snippets:
- Use a remote repository as context To direct Gemini Code Assist to use one or more repositories as the primary context for your prompts: In your IDE's chat, start your prompt with the @ symbol.
- A successful check results in the following output: $ grpc-health-probe -addr cloudaicompanion.googleapis.com:443 -tls error: this server does not implement the grpc health protocol (grpc.health.v1.Health): GRPC target method can't be resolved An unsuccessful check results in the following output: timeout: failed to connect service "cloudaicompanion.googleapis.com:443" within 1s To obtain more details, run the following before grpc-health-probe : export GRPC GO LOG SEVERITY LEVEL=info IntelliJ There are no known issues for Gemini Code Assist for IntelliJ and other supported JetBrains IDEs.
- Prompt Gemini Code Assist with code transformation Code transformation allows you to use commands or natural language prompts in the Quick Pick menu to request modifications to your code, and provides you with a diff view to show pending changes to your code.
- This document describes how you can use Gemini Code Assist , an AI-powered collaborator in your IDE, to help you do the following in VS Code or IntelliJ and other supported JetBrains IDEs : Generate code for your project with code transformation.

