---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:16:09.651Z"
product_name: "Gemini"
product_slug: "gemini"
feature_name: "Local codebase awareness"
feature_slug: "local-codebase-awareness"
latest_feature_date: "2025-03-28"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/gemini/docs/codeassist/configure-local-codebase-awareness"
  - "https://docs.cloud.google.com/gemini/docs/codeassist/chat-gemini"
  - "https://docs.cloud.google.com/gemini/docs/codeassist/write-code-gemini"
  - "https://docs.cloud.google.com/gemini/docs/codeassist/overview"
keywords:
  - "local"
  - "codebase"
  - "awareness"
  - "lets"
  - "intellij"
  - "gemini"
  - "code"
  - "assist"
---

# Local codebase awareness

Product: Gemini
Coverage: MEDIUM

## Step 02 Summary

Lets IntelliJ Gemini Code Assist include local project files in the chat prompt context.

## Extended Definition

Lets IntelliJ Gemini Code Assist include local project files in the chat prompt context.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/gemini/docs/codeassist/configure-local-codebase-awareness](https://docs.cloud.google.com/gemini/docs/codeassist/configure-local-codebase-awareness)
- [https://docs.cloud.google.com/gemini/docs/codeassist/chat-gemini](https://docs.cloud.google.com/gemini/docs/codeassist/chat-gemini)
- [https://docs.cloud.google.com/gemini/docs/codeassist/write-code-gemini](https://docs.cloud.google.com/gemini/docs/codeassist/write-code-gemini)
- [https://docs.cloud.google.com/gemini/docs/codeassist/overview](https://docs.cloud.google.com/gemini/docs/codeassist/overview)

## Supporting Pages

### "Configure local codebase awareness \_|\_ Gemini for Google Cloud \_|\_ Google\

- URL: [https://docs.cloud.google.com/gemini/docs/codeassist/configure-local-codebase-awareness](https://docs.cloud.google.com/gemini/docs/codeassist/configure-local-codebase-awareness)
- Source ID: `site-docs-root`
- Final score: 389
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- IntelliJ Local codebase awareness configuration settings aren't supported in Gemini Code Assist for IntelliJ and other JetBrains IDEs.
- By default, local codebase awareness is enabled, but you can exclude files from Gemini Code Assist use , and VS Code users can disable local codebase awareness entirely.
- To disable local codebase awareness entirely, perform the following steps: VS Code In your IDE, navigate to Settings > Extensions Gemini Code Assist .
- Local codebase awareness improves the relevance of Gemini Code Assist responses through indexing and supporting techniques.

### "Chat with Gemini Code Assist Standard and Enterprise \_|\_ Gemini for Google\

- URL: [https://docs.cloud.google.com/gemini/docs/codeassist/chat-gemini](https://docs.cloud.google.com/gemini/docs/codeassist/chat-gemini)
- Source ID: `site-docs-root`
- Final score: 267
- Re-rank relevance: N/A

Evidence snippets:
- If you're using Gemini Code Assist Enterprise , you can use Code customization , which lets you get code suggestions based on your organization's private codebase directly from Gemini Code Assist Enterprise.
- Stop in-progress chat VS Code You can stop an in-progress chat response by pressing stop Stop : IntelliJ You can stop an in-progress chat response by pressing stop Stop : Select the model If you use Gemini Code Assist Standard or Enterprise , or if you have a Google AI Pro or Ultra subscription, you can select the model that Gemini Code Assist uses when processing your prompts.
- This document describes how you can use Gemini Code Assist , an AI-powered collaborator in your IDE, to help you do the following in VS Code or IntelliJ and other supported JetBrains IDEs : Receive guidance to help you solve problems with your code.
- IntelliJ If you've already clicked check Accept changes for a chat generated code suggestion, then you have the option to rollback the changes using the undo Rollback changes button: In the Gemini Code Assist chat pane, click undo Rollback Changes .

### "Code with Gemini Code Assist Standard and Enterprise \_|\_ Gemini for Google\

- URL: [https://docs.cloud.google.com/gemini/docs/codeassist/write-code-gemini](https://docs.cloud.google.com/gemini/docs/codeassist/write-code-gemini)
- Source ID: `site-docs-root-2`
- Final score: 266
- Re-rank relevance: N/A

Evidence snippets:
- If you're using Gemini Code Assist Enterprise , you can use Code customization , which lets you get code suggestions based on your organization's private codebase directly from Gemini Code Assist Enterprise.
- A successful check results in the following output: $ grpc-health-probe -addr cloudaicompanion.googleapis.com:443 -tls error: this server does not implement the grpc health protocol (grpc.health.v1.Health): GRPC target method can't be resolved An unsuccessful check results in the following output: timeout: failed to connect service "cloudaicompanion.googleapis.com:443" within 1s To obtain more details, run the following before grpc-health-probe : export GRPC GO LOG SEVERITY LEVEL=info IntelliJ There are no known issues for Gemini Code Assist for IntelliJ and other supported JetBrains IDEs.
- This document describes how you can use Gemini Code Assist , an AI-powered collaborator in your IDE, to help you do the following in VS Code or IntelliJ and other supported JetBrains IDEs : Generate code for your project with code transformation.
- Exclude files from local context If files are specified in a .aiexclude or .gitignore file, Gemini Code Assist by default excludes them from local use in the context for code completion, code generation, code transformation, and chat.

### "Gemini Code Assist Standard and Enterprise overview \_|\_ Gemini for Google\

- URL: [https://docs.cloud.google.com/gemini/docs/codeassist/overview](https://docs.cloud.google.com/gemini/docs/codeassist/overview)
- Source ID: `site-docs-root`
- Final score: 265
- Re-rank relevance: N/A

Evidence snippets:
- Local codebase awareness in your IDE: Use the power of Gemini's large context window for in-depth local codebase understanding.
- Code assistance and chat The following table shows the types of generative AI assistance that are available in supported IDEs : AI coding assistance Gemini Code Assist Standard Gemini Code Assist Enterprise Code completion and generation in your IDE project in the following IDEs: Cloud Shell Editor Cloud Workstations JetBrains IDEs (such as IntelliJ and PyCharm) VS Code Android Studio Conversational assistant in your IDE using your opened files' context Multi-IDE support (VS Code, JetBrains IDEs such as IntelliJ and PyCharm , Cloud Workstations) Agentic chat Prompt Gemini to complete complex, multi-step tasks that use system tools and Model Context Protocol (MCP) servers.
- All of the benefits mentioned for Gemini Code Assist Standard, with the addition of the following: Code customization : Your organization can augment the model with your private codebases for tailored suggestions.
- Gemini Code Assist code explained for Apigee policies. ( Preview ) Gemini in Application Integration The following table shows the types of generative AI assistance in Application Integration in the Google Cloud console: Integration creation assist Gemini Code Assist Standard Gemini Code Assist Enterprise AI-assisted visual editor for automation flow generation Enterprise context embedded AI-assisted automation authoring Generative AI Automation flow documentation generation and refinement Gemini in BigQuery features with Gemini Code Assist The following table shows the types of generative AI assistance for BigQuery in BigQuery Studio : Data insights Gemini Code Assist Standard Gemini Code Assist Enterprise Data insights provides an insightful library of queries generated from the metadata of your tables.

