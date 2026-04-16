---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:16:10.686Z"
product_name: "Gemini Code Assist Standard and Enterprise"
product_slug: "gemini-code-assist-standard-and-enterprise"
feature_name: "agent mode"
feature_slug: "agent-mode"
latest_feature_date: "2025-07-31"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/gemini/docs/codeassist/use-agentic-chat-pair-programmer"
  - "https://docs.cloud.google.com/gemini/docs/codeassist/agent-mode"
  - "https://docs.cloud.google.com/gemini/docs/codeassist/chat-gemini"
  - "https://docs.cloud.google.com/gemini/docs/codeassist/gemini-3"
keywords:
  - "agent"
  - "mode"
  - "gemini"
  - "code"
  - "assist"
  - "can"
  - "plan"
  - "and"
---

# agent mode

Product: Gemini Code Assist Standard and Enterprise
Coverage: MEDIUM

## Step 02 Summary

Gemini Code Assist agent mode can plan and carry out multi-step coding tasks with user review before changes are applied; Gemini Code Assist chat in IntelliJ can run in agent mode for multi-step tasks with plan review and approvals.

## Extended Definition

Gemini Code Assist agent mode can plan and carry out multi-step coding tasks with user review before changes are applied; Gemini Code Assist chat in IntelliJ can run in agent mode for multi-step tasks with plan review and approvals.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/gemini/docs/codeassist/use-agentic-chat-pair-programmer](https://docs.cloud.google.com/gemini/docs/codeassist/use-agentic-chat-pair-programmer)
- [https://docs.cloud.google.com/gemini/docs/codeassist/agent-mode](https://docs.cloud.google.com/gemini/docs/codeassist/agent-mode)
- [https://docs.cloud.google.com/gemini/docs/codeassist/chat-gemini](https://docs.cloud.google.com/gemini/docs/codeassist/chat-gemini)
- [https://docs.cloud.google.com/gemini/docs/codeassist/gemini-3](https://docs.cloud.google.com/gemini/docs/codeassist/gemini-3)

## Supporting Pages

### "Use the Gemini Code Assist agent mode \_|\_ Gemini for Google Cloud \_|\_\

- URL: [https://docs.cloud.google.com/gemini/docs/codeassist/use-agentic-chat-pair-programmer](https://docs.cloud.google.com/gemini/docs/codeassist/use-agentic-chat-pair-programmer)
- Source ID: `site-docs-root`
- Final score: 378
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following example mcp.json file configures two remote Cloudflare MCP servers, a remote GitLab MCP server, and a local GitHub MCP server for use with Gemini Code Assist in IntelliJ. { "mcpServers" : { "github" : { "command" : "npx" , "args" : [ "-y" , "@modelcontextprotocol/server-github" ], "env" : { "GITHUB PERSONAL ACCESS TOKEN" : "ghp example personal access token12345" } }, "gitlab" : { "command" : "npx" , "args" : [ "mcp-remote" , "https://your-gitlab-instance.com/api/v4/mcp" ] }, "cloudflare-observability" : { "command" : "npx" , "args" : [ "mcp-remote" , "https://observability.mcp.cloudflare.com/sse" ] }, "cloudflare-bindings" : { "command" : "npx" , "args" : [ "mcp-remote" , "https://bindings.mcp.cloudflare.com/sse" ] } } } Your configured MCP servers are available for the agent to use in agent mode.
- VS Code You can use the following built-in Gemini CLI commands in agent mode: /tools : Displays a list of tools that are available in your agent mode session. /mcp : Lists configured Model Context Protocol (MCP) servers, their connection status, server details, and available tools. /deploy : Deploys a web application to Cloud Run.
- VS Code You can use the coreTools and excludeTools settings to control which tools Gemini has access to in agent mode. coreTools Lets you specify a list of tools that you want to be available to the model.
- Home Documentation AI and ML Gemini for Google Cloud Guides Send feedback Use the Gemini Code Assist agent mode Stay organized with collections Save and categorize content based on your preferences.

### Agent mode overview \_|\_ Gemini for Google Cloud \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/gemini/docs/codeassist/agent-mode](https://docs.cloud.google.com/gemini/docs/codeassist/agent-mode)
- Source ID: `site-docs-reference`
- Final score: 364
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- IntelliJ The following methods of getting context are usually available to Gemini Code Assist in agent mode: Information in your IDE project including your files, indexed symbols and usage of symbols in your project.
- Limitations Some features of standard Gemini Code Assist chat might not be available in agent mode or might work differently than they do in standard chat.
- While in agent mode, Gemini doesn't cite sources and you can't disable code suggestions that match cited sources .
- VS Code The following methods of getting context are usually available to Gemini Code Assist in agent mode: Information in your IDE workspace.

### "Chat with Gemini Code Assist Standard and Enterprise \_|\_ Gemini for Google\

- URL: [https://docs.cloud.google.com/gemini/docs/codeassist/chat-gemini](https://docs.cloud.google.com/gemini/docs/codeassist/chat-gemini)
- Source ID: `site-docs-reference`
- Final score: 336
- Re-rank relevance: N/A

Evidence snippets:
- Stop in-progress chat VS Code You can stop an in-progress chat response by pressing stop Stop : IntelliJ You can stop an in-progress chat response by pressing stop Stop : Select the model If you use Gemini Code Assist Standard or Enterprise , or if you have a Google AI Pro or Ultra subscription, you can select the model that Gemini Code Assist uses when processing your prompts.
- If you only want an explanation of a certain part of your code, you can select certain code and then prompt Gemini Code Assist again.
- Rules in Gemini let you define your preferences, such as: Coding style Output formats Tech stack Language For example, you can create a rule such as "Always give me concise responses in Kotlin." VS Code In your code file, press Control+I (for Windows and Linux) or Command+I (for macOS) to open the Gemini Code Assist Quick Pick menu.
- If you disable automatic outline generation, you can manually generate an outline for the file in focus by right-clicking in the file and selecting Gemini Code Assist > Outline current file , or by going to the Gemini Code Assist outline pane and clicking the Generate outline button.

### "Gemini 3 in Gemini Code Assist \_|\_ Gemini for Google Cloud \_|\_ Google\

- URL: [https://docs.cloud.google.com/gemini/docs/codeassist/gemini-3](https://docs.cloud.google.com/gemini/docs/codeassist/gemini-3)
- Source ID: `site-docs-reference`
- Final score: 318
- Re-rank relevance: N/A

Evidence snippets:
- Use Gemini 3 in IntelliJ If Gemini 3 is available to you, it will automatically be selected for agent mode, chat and code generation.
- You can use these models for agent mode , chat , and code generation .
- Gemini 3 availability License or subscription Gemini 3 availability Google AI Ultra Available to all users in VS Code and IntelliJ Google AI Pro Available to all users in VS Code and IntelliJ Gemini Code Assist Enterprise Available to users in VS Code and IntelliJ whose administrator has configured the Preview release channel Gemini Code Assist Standard Available to users in VS Code and IntelliJ whose administrator has configured the Preview release channel Gemini Code Assist for individuals Available to select users from the waitlist in VS Code and IntelliJ.
- Home Documentation AI and ML Gemini for Google Cloud Guides Send feedback Gemini 3 in Gemini Code Assist Stay organized with collections Save and categorize content based on your preferences.

