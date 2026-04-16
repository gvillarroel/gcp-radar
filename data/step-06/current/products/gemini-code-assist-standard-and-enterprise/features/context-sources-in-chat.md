---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:16:10.709Z"
product_name: "Gemini Code Assist Standard and Enterprise"
product_slug: "gemini-code-assist-standard-and-enterprise"
feature_name: "Context sources in chat"
feature_slug: "context-sources-in-chat"
latest_feature_date: "2024-03-19"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/gemini/docs/codeassist/chat-gemini"
  - "https://docs.cloud.google.com/gemini/docs/codeassist/use-in-ide"
  - "https://docs.cloud.google.com/gemini/docs/codeassist/write-code-gemini"
  - "https://docs.cloud.google.com/gemini/docs/codeassist/use-agentic-chat-pair-programmer"
keywords:
  - "context"
  - "sources"
  - "in"
  - "chat"
  - "displays"
  - "which"
  - "file"
  - "was"
---

# Context sources in chat

Product: Gemini Code Assist Standard and Enterprise
Coverage: MEDIUM

## Step 02 Summary

Displays which file was included in the user's chat request.

## Extended Definition

Displays which file was included in the user's chat request.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/gemini/docs/codeassist/chat-gemini](https://docs.cloud.google.com/gemini/docs/codeassist/chat-gemini)
- [https://docs.cloud.google.com/gemini/docs/codeassist/use-in-ide](https://docs.cloud.google.com/gemini/docs/codeassist/use-in-ide)
- [https://docs.cloud.google.com/gemini/docs/codeassist/write-code-gemini](https://docs.cloud.google.com/gemini/docs/codeassist/write-code-gemini)
- [https://docs.cloud.google.com/gemini/docs/codeassist/use-agentic-chat-pair-programmer](https://docs.cloud.google.com/gemini/docs/codeassist/use-agentic-chat-pair-programmer)

## Supporting Pages

### "Chat with Gemini Code Assist Standard and Enterprise \_|\_ Gemini for Google\

- URL: [https://docs.cloud.google.com/gemini/docs/codeassist/chat-gemini](https://docs.cloud.google.com/gemini/docs/codeassist/chat-gemini)
- Source ID: `site-docs-reference`
- Final score: 230
- Re-rank relevance: N/A

Evidence snippets:
- Revert to a checkpoint in chat After applying the changes that Gemini Code Assist generates based on your prompt, you can choose to revert the modified code file(s) to a certain checkpoint, which reverts all of the applied changes to the code file(s).
- To manage the files and folders in your Context Drawer, perform the following tasks: VS Code Note: Chats created with Gemini Code Assist for VS Code, prior to version 2.34.0 , won't retain and display the saved context in the Context Drawer.
- Exclude files from local context If files are specified in a .aiexclude or .gitignore file, Gemini Code Assist by default excludes them from local use in the context for code completion, code generation, code transformation, and chat.
- Note: If you clear your chat history, Gemini Code Assist no longer uses your files for context and you must re-specify the files or folders in the chat pane using the @ symbol if you want to make more enquiries about the files.

### "Code with Gemini Code Assist Standard and Enterprise \_|\_ Gemini for Google\

- URL: [https://docs.cloud.google.com/gemini/docs/codeassist/use-in-ide](https://docs.cloud.google.com/gemini/docs/codeassist/use-in-ide)
- Source ID: `site-docs-root`
- Final score: 214
- Re-rank relevance: N/A

Evidence snippets:
- Exclude files from local context If files are specified in a .aiexclude or .gitignore file, Gemini Code Assist by default excludes them from local use in the context for code completion, code generation, code transformation, and chat.
- Known issues This section outlines the known issues of Gemini Code Assist: VS Code Chat responses may be truncated when they include an updated version of a large open file To work around this issue, select a smaller section of code and include an additional directive in the chat prompt, such as only output the selected code.
- Once Gemini Code Assist finishes generating suggested code, you can click Accept , which applies the suggested code to your file, or you can click Decline , which leaves your original code unchanged.
- Use a remote repository as context To direct Gemini Code Assist to use one or more repositories as the primary context for your prompts: In your IDE's chat, start your prompt with the @ symbol.

### "Code with Gemini Code Assist Standard and Enterprise \_|\_ Gemini for Google\

- URL: [https://docs.cloud.google.com/gemini/docs/codeassist/write-code-gemini](https://docs.cloud.google.com/gemini/docs/codeassist/write-code-gemini)
- Source ID: `site-docs-root`
- Final score: 214
- Re-rank relevance: N/A

Evidence snippets:
- Exclude files from local context If files are specified in a .aiexclude or .gitignore file, Gemini Code Assist by default excludes them from local use in the context for code completion, code generation, code transformation, and chat.
- Known issues This section outlines the known issues of Gemini Code Assist: VS Code Chat responses may be truncated when they include an updated version of a large open file To work around this issue, select a smaller section of code and include an additional directive in the chat prompt, such as only output the selected code.
- Once Gemini Code Assist finishes generating suggested code, you can click Accept , which applies the suggested code to your file, or you can click Decline , which leaves your original code unchanged.
- Use a remote repository as context To direct Gemini Code Assist to use one or more repositories as the primary context for your prompts: In your IDE's chat, start your prompt with the @ symbol.

### "Use the Gemini Code Assist agent mode \_|\_ Gemini for Google Cloud \_|\_\

- URL: [https://docs.cloud.google.com/gemini/docs/codeassist/use-agentic-chat-pair-programmer](https://docs.cloud.google.com/gemini/docs/codeassist/use-agentic-chat-pair-programmer)
- Source ID: `site-docs-root`
- Final score: 200
- Re-rank relevance: N/A

Evidence snippets:
- The following example mcp.json file configures two remote Cloudflare MCP servers, a remote GitLab MCP server, and a local GitHub MCP server for use with Gemini Code Assist in IntelliJ. { "mcpServers" : { "github" : { "command" : "npx" , "args" : [ "-y" , "@modelcontextprotocol/server-github" ], "env" : { "GITHUB PERSONAL ACCESS TOKEN" : "ghp example personal access token12345" } }, "gitlab" : { "command" : "npx" , "args" : [ "mcp-remote" , "https://your-gitlab-instance.com/api/v4/mcp" ] }, "cloudflare-observability" : { "command" : "npx" , "args" : [ "mcp-remote" , "https://observability.mcp.cloudflare.com/sse" ] }, "cloudflare-bindings" : { "command" : "npx" , "args" : [ "mcp-remote" , "https://bindings.mcp.cloudflare.com/sse" ] } } } Your configured MCP servers are available for the agent to use in agent mode.
- The following example Gemini settings JSON file configures two remote Cloudflare MCP servers, a remote GitLab MCP server, and a local GitHub MCP server for use with Gemini Code Assist in VS Code. { "mcpServers" : { "github" : { "command" : "npx" , "args" : [ "-y" , "@modelcontextprotocol/server-github" ], "env" : { "GITHUB PERSONAL ACCESS TOKEN" : "ghp example personal access token12345" } }, "gitlab" : { "command" : "npx" , "args" : [ "mcp-remote" , "https://your-gitlab-instance.com/api/v4/mcp" ] }, "cloudflare-observability" : { "command" : "npx" , "args" : [ "mcp-remote" , "https://observability.mcp.cloudflare.com/sse" ] }, "cloudflare-bindings" : { "command" : "npx" , "args" : [ "mcp-remote" , "https://bindings.mcp.cloudflare.com/sse" ] } } } Open the command palette and select Developer: Reload Window .
- VS Code You can use the following built-in Gemini CLI commands in agent mode: /tools : Displays a list of tools that are available in your agent mode session. /mcp : Lists configured Model Context Protocol (MCP) servers, their connection status, server details, and available tools. /deploy : Deploys a web application to Cloud Run.
- The following table details the locations for context files for different scopes: Scope Location All your projects /.gemini/GEMINI.md A specific project Your working directory or any parent directories up to either your project root (identified by a .git folder) or your home directory.

