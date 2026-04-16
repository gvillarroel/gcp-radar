---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:16:09.658Z"
product_name: "Gemini"
product_slug: "gemini"
feature_name: "Gemini Code Assist local codebase awareness"
feature_slug: "gemini-code-assist-local-codebase-awareness"
latest_feature_date: "2024-09-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/gemini/docs/codeassist/configure-local-codebase-awareness"
  - "https://docs.cloud.google.com/gemini/docs/codeassist/overview"
  - "https://docs.cloud.google.com/gemini/docs/codeassist/write-code-gemini"
  - "https://docs.cloud.google.com/gemini/docs/codeassist/chat-gemini"
keywords:
  - "gemini"
  - "code"
  - "assist"
  - "local"
  - "codebase"
  - "awareness"
  - "vs"
  - "users"
---

# Gemini Code Assist local codebase awareness

Product: Gemini
Coverage: MEDIUM

## Step 02 Summary

VS Code users can provide files from their codebase as context for higher-quality Gemini Code Assist suggestions.

## Extended Definition

VS Code users can provide files from their codebase as context for higher-quality Gemini Code Assist suggestions.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/gemini/docs/codeassist/configure-local-codebase-awareness](https://docs.cloud.google.com/gemini/docs/codeassist/configure-local-codebase-awareness)
- [https://docs.cloud.google.com/gemini/docs/codeassist/overview](https://docs.cloud.google.com/gemini/docs/codeassist/overview)
- [https://docs.cloud.google.com/gemini/docs/codeassist/write-code-gemini](https://docs.cloud.google.com/gemini/docs/codeassist/write-code-gemini)
- [https://docs.cloud.google.com/gemini/docs/codeassist/chat-gemini](https://docs.cloud.google.com/gemini/docs/codeassist/chat-gemini)

## Supporting Pages

### "Configure local codebase awareness \_|\_ Gemini for Google Cloud \_|\_ Google\

- URL: [https://docs.cloud.google.com/gemini/docs/codeassist/configure-local-codebase-awareness](https://docs.cloud.google.com/gemini/docs/codeassist/configure-local-codebase-awareness)
- Source ID: `site-docs-root`
- Final score: 346
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- By default, local codebase awareness is enabled, but you can exclude files from Gemini Code Assist use , and VS Code users can disable local codebase awareness entirely.
- To disable local codebase awareness entirely, perform the following steps: VS Code In your IDE, navigate to Settings > Extensions Gemini Code Assist .
- IntelliJ Local codebase awareness configuration settings aren't supported in Gemini Code Assist for IntelliJ and other JetBrains IDEs.
- Local codebase awareness improves the relevance of Gemini Code Assist responses through indexing and supporting techniques.

### "Gemini Code Assist Standard and Enterprise overview \_|\_ Gemini for Google\

- URL: [https://docs.cloud.google.com/gemini/docs/codeassist/overview](https://docs.cloud.google.com/gemini/docs/codeassist/overview)
- Source ID: `site-docs-root`
- Final score: 272
- Re-rank relevance: N/A

Evidence snippets:
- Local codebase awareness in your IDE: Use the power of Gemini's large context window for in-depth local codebase understanding.
- Code assistance and chat The following table shows the types of generative AI assistance that are available in supported IDEs : AI coding assistance Gemini Code Assist Standard Gemini Code Assist Enterprise Code completion and generation in your IDE project in the following IDEs: Cloud Shell Editor Cloud Workstations JetBrains IDEs (such as IntelliJ and PyCharm) VS Code Android Studio Conversational assistant in your IDE using your opened files' context Multi-IDE support (VS Code, JetBrains IDEs such as IntelliJ and PyCharm , Cloud Workstations) Agentic chat Prompt Gemini to complete complex, multi-step tasks that use system tools and Model Context Protocol (MCP) servers.
- Gemini Cloud Assist The following table shows the types of generative AI assistance in Gemini Cloud Assist in the Google Cloud console: Gemini Cloud Assist assistance Gemini Code Assist Standard Gemini Code Assist Enterprise Gemini Cloud Assist features (including features available to all Google users and available to Gemini Code Assist Enterprise users) Gemini in Apigee The following table shows the types of generative AI assistance with API development in Apigee (IDE and the Google Cloud console): Gemini Code Assist for API management Gemini Code Assist Standard Gemini Code Assist Enterprise Create or edit OpenAPI specification using natural language prompts.
- Interact with Gemini Code Assist in your IDE After you set up Gemini Code Assist Standard or Enterprise for a Google Cloud project , and install the Gemini Code Assist extension in your IDE ( VS Code or supported JetBrains IDE ), you can ask for assistance in the following ways: Receive code completions or generate code directly in the code editor.

### "Code with Gemini Code Assist Standard and Enterprise \_|\_ Gemini for Google\

- URL: [https://docs.cloud.google.com/gemini/docs/codeassist/write-code-gemini](https://docs.cloud.google.com/gemini/docs/codeassist/write-code-gemini)
- Source ID: `site-docs-root-2`
- Final score: 271
- Re-rank relevance: N/A

Evidence snippets:
- Known issues This section outlines the known issues of Gemini Code Assist: VS Code Chat responses may be truncated when they include an updated version of a large open file To work around this issue, select a smaller section of code and include an additional directive in the chat prompt, such as only output the selected code.
- Prompt Gemini Code Assist in a code file with a comment If you prefer, you can also prompt Gemini Code Assist in your code file with a comment by following these steps: VS Code On a new line, enter the comment Function to create a Cloud Storage bucket , and then press Enter (for Windows and Linux) or Return (for macOS).
- This document describes how you can use Gemini Code Assist , an AI-powered collaborator in your IDE, to help you do the following in VS Code or IntelliJ and other supported JetBrains IDEs : Generate code for your project with code transformation.
- Exclude files from local context If files are specified in a .aiexclude or .gitignore file, Gemini Code Assist by default excludes them from local use in the context for code completion, code generation, code transformation, and chat.

### "Chat with Gemini Code Assist Standard and Enterprise \_|\_ Gemini for Google\

- URL: [https://docs.cloud.google.com/gemini/docs/codeassist/chat-gemini](https://docs.cloud.google.com/gemini/docs/codeassist/chat-gemini)
- Source ID: `site-docs-root`
- Final score: 268
- Re-rank relevance: N/A

Evidence snippets:
- Stop in-progress chat VS Code You can stop an in-progress chat response by pressing stop Stop : IntelliJ You can stop an in-progress chat response by pressing stop Stop : Select the model If you use Gemini Code Assist Standard or Enterprise , or if you have a Google AI Pro or Ultra subscription, you can select the model that Gemini Code Assist uses when processing your prompts.
- Rules in Gemini let you define your preferences, such as: Coding style Output formats Tech stack Language For example, you can create a rule such as "Always give me concise responses in Kotlin." VS Code In your code file, press Control+I (for Windows and Linux) or Command+I (for macOS) to open the Gemini Code Assist Quick Pick menu.
- Known issues This section outlines the known issues of Gemini Code Assist: VS Code Chat responses may be truncated when they include an updated version of a large open file To work around this issue, select a smaller section of code and include an additional directive in the chat prompt, such as only output the selected code.
- Regenerate a prompt response If preferred, you can regenerate a different response to your most recent prompt by following these steps: VS Code In the Gemini Code Assist Chat pane, at the bottom of your most recent response, click replay Regenerate response .

