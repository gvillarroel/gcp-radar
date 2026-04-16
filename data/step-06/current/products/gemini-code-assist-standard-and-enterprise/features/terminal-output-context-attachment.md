---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:16:10.692Z"
product_name: "Gemini Code Assist Standard and Enterprise"
product_slug: "gemini-code-assist-standard-and-enterprise"
feature_name: "Terminal output context attachment"
feature_slug: "terminal-output-context-attachment"
latest_feature_date: "2025-06-12"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/gemini/docs/codeassist/chat-gemini"
  - "https://docs.cloud.google.com/gemini/docs/codeassist/use-agentic-chat-pair-programmer"
  - "https://docs.cloud.google.com/gemini/docs/codeassist/use-in-ide"
  - "https://docs.cloud.google.com/gemini/docs/codeassist/write-code-gemini"
keywords:
  - "terminal"
  - "output"
  - "context"
  - "attachment"
  - "lets"
  - "you"
  - "attach"
  - "to"
---

# Terminal output context attachment

Product: Gemini Code Assist Standard and Enterprise
Coverage: MEDIUM

## Step 02 Summary

Lets you attach terminal output to the chat context so Gemini Code Assist can answer questions about terminal commands and output.

## Extended Definition

Lets you attach terminal output to the chat context so Gemini Code Assist can answer questions about terminal commands and output.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/gemini/docs/codeassist/chat-gemini](https://docs.cloud.google.com/gemini/docs/codeassist/chat-gemini)
- [https://docs.cloud.google.com/gemini/docs/codeassist/use-agentic-chat-pair-programmer](https://docs.cloud.google.com/gemini/docs/codeassist/use-agentic-chat-pair-programmer)
- [https://docs.cloud.google.com/gemini/docs/codeassist/use-in-ide](https://docs.cloud.google.com/gemini/docs/codeassist/use-in-ide)
- [https://docs.cloud.google.com/gemini/docs/codeassist/write-code-gemini](https://docs.cloud.google.com/gemini/docs/codeassist/write-code-gemini)

## Supporting Pages

### "Chat with Gemini Code Assist Standard and Enterprise \_|\_ Gemini for Google\

- URL: [https://docs.cloud.google.com/gemini/docs/codeassist/chat-gemini](https://docs.cloud.google.com/gemini/docs/codeassist/chat-gemini)
- Source ID: `site-docs-reference`
- Final score: 155
- Re-rank relevance: N/A

Evidence snippets:
- Gemini Code Assist responds to your prompt based on your selected terminal output in the Context Drawer.
- Gemini Code Assist adds your terminal output to the Context Drawer.
- To get an explanation of selected terminal output, follow these steps: VS Code In your IDE, open your terminal ( View > Terminal ).
- Add selected code snippets to context You can select, attach, and direct Gemini Code Assist to focus on code snippets.

### "Use the Gemini Code Assist agent mode \_|\_ Gemini for Google Cloud \_|\_\

- URL: [https://docs.cloud.google.com/gemini/docs/codeassist/use-agentic-chat-pair-programmer](https://docs.cloud.google.com/gemini/docs/codeassist/use-agentic-chat-pair-programmer)
- Source ID: `site-docs-root`
- Final score: 120
- Re-rank relevance: N/A

Evidence snippets:
- The following example mcp.json file configures two remote Cloudflare MCP servers, a remote GitLab MCP server, and a local GitHub MCP server for use with Gemini Code Assist in IntelliJ. { "mcpServers" : { "github" : { "command" : "npx" , "args" : [ "-y" , "@modelcontextprotocol/server-github" ], "env" : { "GITHUB PERSONAL ACCESS TOKEN" : "ghp example personal access token12345" } }, "gitlab" : { "command" : "npx" , "args" : [ "mcp-remote" , "https://your-gitlab-instance.com/api/v4/mcp" ] }, "cloudflare-observability" : { "command" : "npx" , "args" : [ "mcp-remote" , "https://observability.mcp.cloudflare.com/sse" ] }, "cloudflare-bindings" : { "command" : "npx" , "args" : [ "mcp-remote" , "https://bindings.mcp.cloudflare.com/sse" ] } } } Your configured MCP servers are available for the agent to use in agent mode.
- The following example Gemini settings JSON file configures two remote Cloudflare MCP servers, a remote GitLab MCP server, and a local GitHub MCP server for use with Gemini Code Assist in VS Code. { "mcpServers" : { "github" : { "command" : "npx" , "args" : [ "-y" , "@modelcontextprotocol/server-github" ], "env" : { "GITHUB PERSONAL ACCESS TOKEN" : "ghp example personal access token12345" } }, "gitlab" : { "command" : "npx" , "args" : [ "mcp-remote" , "https://your-gitlab-instance.com/api/v4/mcp" ] }, "cloudflare-observability" : { "command" : "npx" , "args" : [ "mcp-remote" , "https://observability.mcp.cloudflare.com/sse" ] }, "cloudflare-bindings" : { "command" : "npx" , "args" : [ "mcp-remote" , "https://bindings.mcp.cloudflare.com/sse" ] } } } Open the command palette and select Developer: Reload Window .
- Help me understand the architecture." "What does this [class/function] do?" "Add a feature to this codebase - "[link-or-path-to-codebase]"." "Refactor function [A] and [B] to use the common method [C]." "Fix the GitHub issue [link-to-github-issue]." "Build an application to do [goal] with a UI that lets the user do [task] in the [environment]." "Migrate library versions in this repository from [X] to [Y]." "Optimize performance of this Go code so that it runs faster." "Use [name-of-API] to build out this feature." "Implement an algorithm to do [x], [Y], and [Z]." Optional: Use an API Key Gemini Code Assist includes different daily quotas for agentic features, depending on the tier you're in.
- VS Code You can use the following built-in Gemini CLI commands in agent mode: /tools : Displays a list of tools that are available in your agent mode session. /mcp : Lists configured Model Context Protocol (MCP) servers, their connection status, server details, and available tools. /deploy : Deploys a web application to Cloud Run.

### "Code with Gemini Code Assist Standard and Enterprise \_|\_ Gemini for Google\

- URL: [https://docs.cloud.google.com/gemini/docs/codeassist/use-in-ide](https://docs.cloud.google.com/gemini/docs/codeassist/use-in-ide)
- Source ID: `site-docs-root`
- Final score: 116
- Re-rank relevance: N/A

Evidence snippets:
- Sign-in attempts keep timing out If your sign-in attempts keep timing out, try adding the cloudcode.beta.forceOobLogin setting to your settings.json file: "cloudcode.beta.forceOobLogin" : true License recitation warnings don't persist across sessions If license recitation warnings don't persist across sessions, refer to the persistent logs: Click View > Output .
- Connectivity issues in the Gemini Code Assist output window If you see a connection error or other connectivity problems in the Gemini Code Assist output window, try the following: Configure your firewall to allow access to oauth2.googleapis.com and cloudaicompanion.googleapis.com .
- If you're using Gemini Code Assist Enterprise , you can use Code customization , which lets you get code suggestions based on your organization's private codebase directly from Gemini Code Assist Enterprise.
- Get more relevant suggestions with remote repository context You can get more contextually aware and relevant code suggestions by directing Gemini Code Assist to focus on specific remote repositories.

### "Code with Gemini Code Assist Standard and Enterprise \_|\_ Gemini for Google\

- URL: [https://docs.cloud.google.com/gemini/docs/codeassist/write-code-gemini](https://docs.cloud.google.com/gemini/docs/codeassist/write-code-gemini)
- Source ID: `site-docs-root`
- Final score: 116
- Re-rank relevance: N/A

Evidence snippets:
- Sign-in attempts keep timing out If your sign-in attempts keep timing out, try adding the cloudcode.beta.forceOobLogin setting to your settings.json file: "cloudcode.beta.forceOobLogin" : true License recitation warnings don't persist across sessions If license recitation warnings don't persist across sessions, refer to the persistent logs: Click View > Output .
- Connectivity issues in the Gemini Code Assist output window If you see a connection error or other connectivity problems in the Gemini Code Assist output window, try the following: Configure your firewall to allow access to oauth2.googleapis.com and cloudaicompanion.googleapis.com .
- If you're using Gemini Code Assist Enterprise , you can use Code customization , which lets you get code suggestions based on your organization's private codebase directly from Gemini Code Assist Enterprise.
- Get more relevant suggestions with remote repository context You can get more contextually aware and relevant code suggestions by directing Gemini Code Assist to focus on specific remote repositories.

