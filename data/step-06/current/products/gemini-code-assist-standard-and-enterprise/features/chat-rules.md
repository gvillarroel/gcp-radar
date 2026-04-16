---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:16:10.695Z"
product_name: "Gemini Code Assist Standard and Enterprise"
product_slug: "gemini-code-assist-standard-and-enterprise"
feature_name: "Chat rules"
feature_slug: "chat-rules"
latest_feature_date: "2025-04-29"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/gemini/docs/codeassist/chat-gemini"
  - "https://docs.cloud.google.com/gemini/docs/codeassist/write-code-gemini"
  - "https://docs.cloud.google.com/gemini/docs/codeassist/use-gemini-code-assist-chat"
  - "https://docs.cloud.google.com/gemini/docs/codeassist/use-agentic-chat-pair-programmer"
keywords:
  - "chat"
  - "rules"
  - "vs"
  - "code"
  - "gemini"
  - "assist"
  - "can"
  - "apply"
---

# Chat rules

Product: Gemini Code Assist Standard and Enterprise
Coverage: MEDIUM

## Step 02 Summary

VS Code Gemini Code Assist can apply user-defined rules to each chat request.

## Extended Definition

VS Code Gemini Code Assist can apply user-defined rules to each chat request.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/gemini/docs/codeassist/chat-gemini](https://docs.cloud.google.com/gemini/docs/codeassist/chat-gemini)
- [https://docs.cloud.google.com/gemini/docs/codeassist/write-code-gemini](https://docs.cloud.google.com/gemini/docs/codeassist/write-code-gemini)
- [https://docs.cloud.google.com/gemini/docs/codeassist/use-gemini-code-assist-chat](https://docs.cloud.google.com/gemini/docs/codeassist/use-gemini-code-assist-chat)
- [https://docs.cloud.google.com/gemini/docs/codeassist/use-agentic-chat-pair-programmer](https://docs.cloud.google.com/gemini/docs/codeassist/use-agentic-chat-pair-programmer)

## Supporting Pages

### "Chat with Gemini Code Assist Standard and Enterprise \_|\_ Gemini for Google\

- URL: [https://docs.cloud.google.com/gemini/docs/codeassist/chat-gemini](https://docs.cloud.google.com/gemini/docs/codeassist/chat-gemini)
- Source ID: `site-docs-reference`
- Final score: 310
- Re-rank relevance: N/A

Evidence snippets:
- Stop in-progress chat VS Code You can stop an in-progress chat response by pressing stop Stop : IntelliJ You can stop an in-progress chat response by pressing stop Stop : Select the model If you use Gemini Code Assist Standard or Enterprise , or if you have a Google AI Pro or Ultra subscription, you can select the model that Gemini Code Assist uses when processing your prompts.
- Rules in Gemini let you define your preferences, such as: Coding style Output formats Tech stack Language For example, you can create a rule such as "Always give me concise responses in Kotlin." VS Code In your code file, press Control+I (for Windows and Linux) or Command+I (for macOS) to open the Gemini Code Assist Quick Pick menu.
- Regenerate a prompt response If preferred, you can regenerate a different response to your most recent prompt by following these steps: VS Code In the Gemini Code Assist Chat pane, at the bottom of your most recent response, click replay Regenerate response .
- Revert to a checkpoint in chat After applying the changes that Gemini Code Assist generates based on your prompt, you can choose to revert the modified code file(s) to a certain checkpoint, which reverts all of the applied changes to the code file(s).

### "Code with Gemini Code Assist Standard and Enterprise \_|\_ Gemini for Google\

- URL: [https://docs.cloud.google.com/gemini/docs/codeassist/write-code-gemini](https://docs.cloud.google.com/gemini/docs/codeassist/write-code-gemini)
- Source ID: `site-docs-root`
- Final score: 287
- Re-rank relevance: N/A

Evidence snippets:
- Known issues This section outlines the known issues of Gemini Code Assist: VS Code Chat responses may be truncated when they include an updated version of a large open file To work around this issue, select a smaller section of code and include an additional directive in the chat prompt, such as only output the selected code.
- Prompt Gemini Code Assist in a code file with a comment If you prefer, you can also prompt Gemini Code Assist in your code file with a comment by following these steps: VS Code On a new line, enter the comment Function to create a Cloud Storage bucket , and then press Enter (for Windows and Linux) or Return (for macOS).
- This document describes how you can use Gemini Code Assist , an AI-powered collaborator in your IDE, to help you do the following in VS Code or IntelliJ and other supported JetBrains IDEs : Generate code for your project with code transformation.
- You can also select a part of your code and then prompt Gemini Code Assist for help through the chat feature, and receive and accept or reject code suggestions while you code.

### "Use the Gemini Code Assist chat \_|\_ Gemini for Google Cloud \_|\_ Google\

- URL: [https://docs.cloud.google.com/gemini/docs/codeassist/use-gemini-code-assist-chat](https://docs.cloud.google.com/gemini/docs/codeassist/use-gemini-code-assist-chat)
- Source ID: `site-docs-root`
- Final score: 281
- Re-rank relevance: N/A

Evidence snippets:
- If your chat history is no longer relevant to what you're trying to achieve, you can clear the chat history: VS Code In the Gemini Code Assist pane, click history Resume Previous Chat .
- View query history VS Code If you want to re-use your previous prompts, you can find them in your Query History in the Gemini Code Assist tool window by clicking schedule Show Query History .
- Open Gemini Code Assist chat To open Gemini Code Assist chat in the IDE: VS Code In the activity bar of your IDE, click spark Gemini Code Assist .
- Gemini Code Assist chat lets you write natural language statements or questions (called prompts ) to get in-depth explanations of your code, suggested actions, or guided workflows that help you complete tasks quickly and efficiently without leaving the IDE.

### "Use the Gemini Code Assist agent mode \_|\_ Gemini for Google Cloud \_|\_\

- URL: [https://docs.cloud.google.com/gemini/docs/codeassist/use-agentic-chat-pair-programmer](https://docs.cloud.google.com/gemini/docs/codeassist/use-agentic-chat-pair-programmer)
- Source ID: `site-docs-root`
- Final score: 272
- Re-rank relevance: N/A

Evidence snippets:
- To switch to agent mode: VS Code To open the Gemini Code Assist chat, in the activity bar of your IDE, click spark Gemini Code Assist .
- The following example Gemini settings JSON file configures two remote Cloudflare MCP servers, a remote GitLab MCP server, and a local GitHub MCP server for use with Gemini Code Assist in VS Code. { "mcpServers" : { "github" : { "command" : "npx" , "args" : [ "-y" , "@modelcontextprotocol/server-github" ], "env" : { "GITHUB PERSONAL ACCESS TOKEN" : "ghp example personal access token12345" } }, "gitlab" : { "command" : "npx" , "args" : [ "mcp-remote" , "https://your-gitlab-instance.com/api/v4/mcp" ] }, "cloudflare-observability" : { "command" : "npx" , "args" : [ "mcp-remote" , "https://observability.mcp.cloudflare.com/sse" ] }, "cloudflare-bindings" : { "command" : "npx" , "args" : [ "mcp-remote" , "https://bindings.mcp.cloudflare.com/sse" ] } } } Open the command palette and select Developer: Reload Window .
- VS Code You can use the following built-in Gemini CLI commands in agent mode: /tools : Displays a list of tools that are available in your agent mode session. /mcp : Lists configured Model Context Protocol (MCP) servers, their connection status, server details, and available tools. /deploy : Deploys a web application to Cloud Run.
- VS Code You can use the coreTools and excludeTools settings to control which tools Gemini has access to in agent mode. coreTools Lets you specify a list of tools that you want to be available to the model.

