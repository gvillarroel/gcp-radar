---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:16:10.707Z"
product_name: "Gemini Code Assist Standard and Enterprise"
product_slug: "gemini-code-assist-standard-and-enterprise"
feature_name: "Context sources in Gemini Chat"
feature_slug: "context-sources-in-gemini-chat"
latest_feature_date: "2024-04-08"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/gemini/docs/codeassist/chat-gemini"
  - "https://docs.cloud.google.com/gemini/docs/codeassist/chat-overview"
  - "https://docs.cloud.google.com/gemini/docs/codeassist/write-code-gemini"
  - "https://docs.cloud.google.com/gemini/docs/codeassist/gemini-3"
keywords:
  - "context"
  - "sources"
  - "in"
  - "gemini"
  - "chat"
  - "lets"
  - "users"
  - "view"
---

# Context sources in Gemini Chat

Product: Gemini Code Assist Standard and Enterprise
Coverage: MEDIUM

## Step 02 Summary

Lets users view the source context behind a generated response in the Gemini Chat pane.

## Extended Definition

Lets users view the source context behind a generated response in the Gemini Chat pane.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/gemini/docs/codeassist/chat-gemini](https://docs.cloud.google.com/gemini/docs/codeassist/chat-gemini)
- [https://docs.cloud.google.com/gemini/docs/codeassist/chat-overview](https://docs.cloud.google.com/gemini/docs/codeassist/chat-overview)
- [https://docs.cloud.google.com/gemini/docs/codeassist/write-code-gemini](https://docs.cloud.google.com/gemini/docs/codeassist/write-code-gemini)
- [https://docs.cloud.google.com/gemini/docs/codeassist/gemini-3](https://docs.cloud.google.com/gemini/docs/codeassist/gemini-3)

## Supporting Pages

### "Chat with Gemini Code Assist Standard and Enterprise \_|\_ Gemini for Google\

- URL: [https://docs.cloud.google.com/gemini/docs/codeassist/chat-gemini](https://docs.cloud.google.com/gemini/docs/codeassist/chat-gemini)
- Source ID: `site-docs-reference`
- Final score: 291
- Re-rank relevance: N/A

Evidence snippets:
- Manage files and folders in the Context Drawer After you specify a file or folder to be used as context for your Gemini Code Assist prompts , these files and folders are placed in the Context Drawer , where you can view and remove them from the prompt context.
- To manage the files and folders in your Context Drawer, perform the following tasks: VS Code Note: Chats created with Gemini Code Assist for VS Code, prior to version 2.34.0 , won't retain and display the saved context in the Context Drawer.
- Exclude files from local context If files are specified in a .aiexclude or .gitignore file, Gemini Code Assist by default excludes them from local use in the context for code completion, code generation, code transformation, and chat.
- Note: If you clear your chat history, Gemini Code Assist no longer uses your files for context and you must re-specify the files or folders in the chat pane using the @ symbol if you want to make more enquiries about the files.

### "Gemini Code Assist chat features overview \_|\_ Gemini for Google Cloud\

- URL: [https://docs.cloud.google.com/gemini/docs/codeassist/chat-overview](https://docs.cloud.google.com/gemini/docs/codeassist/chat-overview)
- Source ID: `site-docs-reference`
- Final score: 285
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You can perform the following chat actions with Gemini Code Assist in any of the supported IDEs : Use Gemini Code Assist to explain your code Create multiple chats Select a Gemini model Edit a prior prompt Regenerate a prompt response Delete prompt and response pairs Configure code preview pane Prompt Gemini Code Assist with selected code using chat Add selected code snippets to context Add terminal output to the chat context Specify files and folders in your workspace context Revert to a checkpoint in chat View code diffs Generate a file outline Create custom commands Create rules Exclude files from your context with an .aiexclude or .gitignore file Use the Gemini Code Assist agent mode Configure local codebase awareness What's next Set up Gemini Code Assist Standard or Enterprise , if you haven't already.
- Home Documentation AI and ML Gemini for Google Cloud Guides Send feedback Gemini Code Assist chat features overview Stay organized with collections Save and categorize content based on your preferences.
- To learn more about how and when Gemini cites sources, see How Gemini helps you generate code and cites sources .
- To begin using Gemini Code Assist chat features in your IDE, see Chat with Gemini Code Assist .

### "Code with Gemini Code Assist Standard and Enterprise \_|\_ Gemini for Google\

- URL: [https://docs.cloud.google.com/gemini/docs/codeassist/write-code-gemini](https://docs.cloud.google.com/gemini/docs/codeassist/write-code-gemini)
- Source ID: `site-docs-root`
- Final score: 275
- Re-rank relevance: N/A

Evidence snippets:
- Exclude files from local context If files are specified in a .aiexclude or .gitignore file, Gemini Code Assist by default excludes them from local use in the context for code completion, code generation, code transformation, and chat.
- Use a remote repository as context To direct Gemini Code Assist to use one or more repositories as the primary context for your prompts: In your IDE's chat, start your prompt with the @ symbol.
- Known issues This section outlines the known issues of Gemini Code Assist: VS Code Chat responses may be truncated when they include an updated version of a large open file To work around this issue, select a smaller section of code and include an additional directive in the chat prompt, such as only output the selected code.
- Prompt Gemini Code Assist with code transformation Code transformation allows you to use commands or natural language prompts in the Quick Pick menu to request modifications to your code, and provides you with a diff view to show pending changes to your code.

### "Gemini 3 in Gemini Code Assist \_|\_ Gemini for Google Cloud \_|\_ Google\

- URL: [https://docs.cloud.google.com/gemini/docs/codeassist/gemini-3](https://docs.cloud.google.com/gemini/docs/codeassist/gemini-3)
- Source ID: `site-docs-reference`
- Final score: 271
- Re-rank relevance: N/A

Evidence snippets:
- Gemini 3 availability License or subscription Gemini 3 availability Google AI Ultra Available to all users in VS Code and IntelliJ Google AI Pro Available to all users in VS Code and IntelliJ Gemini Code Assist Enterprise Available to users in VS Code and IntelliJ whose administrator has configured the Preview release channel Gemini Code Assist Standard Available to users in VS Code and IntelliJ whose administrator has configured the Preview release channel Gemini Code Assist for individuals Available to select users from the waitlist in VS Code and IntelliJ.
- Use Gemini 3 in IntelliJ If Gemini 3 is available to you, it will automatically be selected for agent mode, chat and code generation.
- Use Gemini 3 in VS Code If Gemini 3 is available to you, it will automatically be selected for chat and code generation.
- Gemini 3.1 Pro and Gemini 3.0 Flash are available to Gemini Code Assist users in VS Code and IntelliJ.

