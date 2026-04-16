---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:16:10.687Z"
product_name: "Gemini Code Assist Standard and Enterprise"
product_slug: "gemini-code-assist-standard-and-enterprise"
feature_name: "diff view editing"
feature_slug: "diff-view-editing"
latest_feature_date: "2025-07-31"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/gemini/docs/codeassist/use-agentic-chat-pair-programmer"
  - "https://docs.cloud.google.com/gemini/docs/codeassist/agent-mode"
  - "https://docs.cloud.google.com/gemini/docs/codeassist/gemini-3"
  - "https://docs.cloud.google.com/gemini/docs/codeassist/write-code-gemini"
keywords:
  - "diff"
  - "view"
  - "editing"
  - "gemini"
  - "code"
  - "assist"
  - "agent"
  - "mode"
---

# diff view editing

Product: Gemini Code Assist Standard and Enterprise
Coverage: MEDIUM

## Step 02 Summary

Gemini Code Assist agent mode lets you edit suggested changes directly in the integrated diff view.

## Extended Definition

Gemini Code Assist agent mode lets you edit suggested changes directly in the integrated diff view.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/gemini/docs/codeassist/use-agentic-chat-pair-programmer](https://docs.cloud.google.com/gemini/docs/codeassist/use-agentic-chat-pair-programmer)
- [https://docs.cloud.google.com/gemini/docs/codeassist/agent-mode](https://docs.cloud.google.com/gemini/docs/codeassist/agent-mode)
- [https://docs.cloud.google.com/gemini/docs/codeassist/gemini-3](https://docs.cloud.google.com/gemini/docs/codeassist/gemini-3)
- [https://docs.cloud.google.com/gemini/docs/codeassist/write-code-gemini](https://docs.cloud.google.com/gemini/docs/codeassist/write-code-gemini)

## Supporting Pages

### "Use the Gemini Code Assist agent mode \_|\_ Gemini for Google Cloud \_|\_\

- URL: [https://docs.cloud.google.com/gemini/docs/codeassist/use-agentic-chat-pair-programmer](https://docs.cloud.google.com/gemini/docs/codeassist/use-agentic-chat-pair-programmer)
- Source ID: `site-docs-root`
- Final score: 315
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Limitations Some features of standard Gemini Code Assist chat might not be available in agent mode or might work differently than they do in standard chat.
- The following example mcp.json file configures two remote Cloudflare MCP servers, a remote GitLab MCP server, and a local GitHub MCP server for use with Gemini Code Assist in IntelliJ. { "mcpServers" : { "github" : { "command" : "npx" , "args" : [ "-y" , "@modelcontextprotocol/server-github" ], "env" : { "GITHUB PERSONAL ACCESS TOKEN" : "ghp example personal access token12345" } }, "gitlab" : { "command" : "npx" , "args" : [ "mcp-remote" , "https://your-gitlab-instance.com/api/v4/mcp" ] }, "cloudflare-observability" : { "command" : "npx" , "args" : [ "mcp-remote" , "https://observability.mcp.cloudflare.com/sse" ] }, "cloudflare-bindings" : { "command" : "npx" , "args" : [ "mcp-remote" , "https://bindings.mcp.cloudflare.com/sse" ] } } } Your configured MCP servers are available for the agent to use in agent mode.
- Help me understand the architecture." "What does this [class/function] do?" "Add a feature to this codebase - "[link-or-path-to-codebase]"." "Refactor function [A] and [B] to use the common method [C]." "Fix the GitHub issue [link-to-github-issue]." "Build an application to do [goal] with a UI that lets the user do [task] in the [environment]." "Migrate library versions in this repository from [X] to [Y]." "Optimize performance of this Go code so that it runs faster." "Use [name-of-API] to build out this feature." "Implement an algorithm to do [x], [Y], and [Z]." Optional: Use an API Key Gemini Code Assist includes different daily quotas for agentic features, depending on the tier you're in.
- Home Documentation AI and ML Gemini for Google Cloud Guides Send feedback Use the Gemini Code Assist agent mode Stay organized with collections Save and categorize content based on your preferences.

### Agent mode overview \_|\_ Gemini for Google Cloud \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/gemini/docs/codeassist/agent-mode](https://docs.cloud.google.com/gemini/docs/codeassist/agent-mode)
- Source ID: `site-docs-reference`
- Final score: 301
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Limitations Some features of standard Gemini Code Assist chat might not be available in agent mode or might work differently than they do in standard chat.
- IntelliJ The following methods of getting context are usually available to Gemini Code Assist in agent mode: Information in your IDE project including your files, indexed symbols and usage of symbols in your project.
- VS Code The following methods of getting context are usually available to Gemini Code Assist in agent mode: Information in your IDE workspace.
- VS Code All of the Gemini CLI built-in tools are available to agent mode in Gemini Code Assist.

### "Gemini 3 in Gemini Code Assist \_|\_ Gemini for Google Cloud \_|\_ Google\

- URL: [https://docs.cloud.google.com/gemini/docs/codeassist/gemini-3](https://docs.cloud.google.com/gemini/docs/codeassist/gemini-3)
- Source ID: `site-docs-reference`
- Final score: 276
- Re-rank relevance: N/A

Evidence snippets:
- Gemini 3 availability License or subscription Gemini 3 availability Google AI Ultra Available to all users in VS Code and IntelliJ Google AI Pro Available to all users in VS Code and IntelliJ Gemini Code Assist Enterprise Available to users in VS Code and IntelliJ whose administrator has configured the Preview release channel Gemini Code Assist Standard Available to users in VS Code and IntelliJ whose administrator has configured the Preview release channel Gemini Code Assist for individuals Available to select users from the waitlist in VS Code and IntelliJ.
- Use Gemini 3 in IntelliJ If Gemini 3 is available to you, it will automatically be selected for agent mode, chat and code generation.
- You can't select a different model in agent mode, as Gemini CLI automatically selects the model.
- Home Documentation AI and ML Gemini for Google Cloud Guides Send feedback Gemini 3 in Gemini Code Assist Stay organized with collections Save and categorize content based on your preferences.

### "Code with Gemini Code Assist Standard and Enterprise \_|\_ Gemini for Google\

- URL: [https://docs.cloud.google.com/gemini/docs/codeassist/write-code-gemini](https://docs.cloud.google.com/gemini/docs/codeassist/write-code-gemini)
- Source ID: `site-docs-root`
- Final score: 274
- Re-rank relevance: N/A

Evidence snippets:
- Prompt Gemini Code Assist with code transformation Code transformation allows you to use commands or natural language prompts in the Quick Pick menu to request modifications to your code, and provides you with a diff view to show pending changes to your code.
- Gemini Code Assist generates the code based on your prompt in a diff view.
- Gemini Code Assist generates the code based on your prompt in a diff view.
- This behavior is different from the non-Vim behavior where pressing Esc re-triggers Gemini Code Assist.

