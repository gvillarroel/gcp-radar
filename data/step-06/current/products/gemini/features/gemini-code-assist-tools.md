---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:16:09.649Z"
product_name: "Gemini"
product_slug: "gemini"
feature_name: "Gemini Code Assist tools"
feature_slug: "gemini-code-assist-tools"
latest_feature_date: "2025-04-09"
deprecation_date: "2025-10-14"
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/gemini/docs/codeassist/write-code-gemini"
  - "https://docs.cloud.google.com/gemini/docs/codeassist/chat-gemini"
  - "https://docs.cloud.google.com/gemini/docs/codeassist/security-privacy-compliance"
  - "https://docs.cloud.google.com/gemini/docs/codeassist/overview"
keywords:
  - "gemini"
  - "code"
  - "assist"
  - "tools"
  - "are"
  - "deprecated"
  - "and"
  - "replaced"
---

# Gemini Code Assist tools

Product: Gemini
Coverage: MEDIUM

## Step 02 Summary

Gemini Code Assist tools are deprecated and replaced by agent mode; Gemini Code Assist tools connect external services to Gemini chat through @-prefixed tool names; deprecated on 2025-10-14.

## Extended Definition

Gemini Code Assist tools are deprecated and replaced by agent mode; Gemini Code Assist tools connect external services to Gemini chat through @-prefixed tool names; deprecated on 2025-10-14.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/gemini/docs/codeassist/write-code-gemini](https://docs.cloud.google.com/gemini/docs/codeassist/write-code-gemini)
- [https://docs.cloud.google.com/gemini/docs/codeassist/chat-gemini](https://docs.cloud.google.com/gemini/docs/codeassist/chat-gemini)
- [https://docs.cloud.google.com/gemini/docs/codeassist/security-privacy-compliance](https://docs.cloud.google.com/gemini/docs/codeassist/security-privacy-compliance)
- [https://docs.cloud.google.com/gemini/docs/codeassist/overview](https://docs.cloud.google.com/gemini/docs/codeassist/overview)

## Supporting Pages

### "Code with Gemini Code Assist Standard and Enterprise \_|\_ Gemini for Google\

- URL: [https://docs.cloud.google.com/gemini/docs/codeassist/write-code-gemini](https://docs.cloud.google.com/gemini/docs/codeassist/write-code-gemini)
- Source ID: `site-docs-root-2`
- Final score: 306
- Re-rank relevance: N/A

Evidence snippets:
- A successful check results in the following output: $ grpc-health-probe -addr cloudaicompanion.googleapis.com:443 -tls error: this server does not implement the grpc health protocol (grpc.health.v1.Health): GRPC target method can't be resolved An unsuccessful check results in the following output: timeout: failed to connect service "cloudaicompanion.googleapis.com:443" within 1s To obtain more details, run the following before grpc-health-probe : export GRPC GO LOG SEVERITY LEVEL=info IntelliJ There are no known issues for Gemini Code Assist for IntelliJ and other supported JetBrains IDEs.
- Exclude files from local context If files are specified in a .aiexclude or .gitignore file, Gemini Code Assist by default excludes them from local use in the context for code completion, code generation, code transformation, and chat.
- Get more relevant suggestions with remote repository context You can get more contextually aware and relevant code suggestions by directing Gemini Code Assist to focus on specific remote repositories.
- Vim: Inconsistent behavior when pressing Esc to dismiss suggestions When you press Esc , both the IDE and Gemini Code Assist suggestions are dismissed.

### "Chat with Gemini Code Assist Standard and Enterprise \_|\_ Gemini for Google\

- URL: [https://docs.cloud.google.com/gemini/docs/codeassist/chat-gemini](https://docs.cloud.google.com/gemini/docs/codeassist/chat-gemini)
- Source ID: `site-docs-root`
- Final score: 290
- Re-rank relevance: N/A

Evidence snippets:
- Manage files and folders in the Context Drawer After you specify a file or folder to be used as context for your Gemini Code Assist prompts , these files and folders are placed in the Context Drawer , where you can view and remove them from the prompt context.
- Exclude files from local context If files are specified in a .aiexclude or .gitignore file, Gemini Code Assist by default excludes them from local use in the context for code completion, code generation, code transformation, and chat.
- These options are available when Gemini Code Assist identifies the language used in your code block, and if this language is supported in your current IDE.
- Vim: Inconsistent behavior when pressing Esc to dismiss suggestions When you press Esc , both the IDE and Gemini Code Assist suggestions are dismissed.

### "Security, privacy, and compliance for Gemini Code Assist Standard and Enterprise\

- URL: [https://docs.cloud.google.com/gemini/docs/codeassist/security-privacy-compliance](https://docs.cloud.google.com/gemini/docs/codeassist/security-privacy-compliance)
- Source ID: `site-docs-root-2`
- Final score: 280
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For example, Gemini Code Assist Standard and Enterprise handle the following data as Customer Data: Prompt data, which includes developer queries Response data from Gemini Code Assist Standard and Enterprise Additional context, such as the current conversation history, snippets of files that are open in the IDE, snippets of files that are stored adjacent to the open file, and cursor location in the current file Because Gemini Code Assist Standard and Enterprise are stateless Google Cloud services, they don't store prompts and responses in Google Cloud.
- Using Gemini Code Assist Standard and Enterprise securely In general, Google recommends using a secure software development lifecycle (SDLC) for developing applications, regardless of whether you're using AI coding assistance.
- To manage IAM roles at scale, we recommend that you create a group for your application developers and grant the IAM roles or permissions that are required for Gemini Code Assist Standard and Enterprise to that group.
- If you are challenged on copyright grounds after using content generated by Gemini Code Assist Standard and Enterprise, we assume certain responsibility for the potential legal risks involved.

### "Gemini Code Assist Standard and Enterprise overview \_|\_ Gemini for Google\

- URL: [https://docs.cloud.google.com/gemini/docs/codeassist/overview](https://docs.cloud.google.com/gemini/docs/codeassist/overview)
- Source ID: `site-docs-root`
- Final score: 274
- Re-rank relevance: N/A

Evidence snippets:
- Code assistance and chat The following table shows the types of generative AI assistance that are available in supported IDEs : AI coding assistance Gemini Code Assist Standard Gemini Code Assist Enterprise Code completion and generation in your IDE project in the following IDEs: Cloud Shell Editor Cloud Workstations JetBrains IDEs (such as IntelliJ and PyCharm) VS Code Android Studio Conversational assistant in your IDE using your opened files' context Multi-IDE support (VS Code, JetBrains IDEs such as IntelliJ and PyCharm , Cloud Workstations) Agentic chat Prompt Gemini to complete complex, multi-step tasks that use system tools and Model Context Protocol (MCP) servers.
- The Gemini large language models (LLMs) that are used by Gemini Code Assist are trained on datasets of publicly available code, Google Cloud-specific material, and other relevant technical information in addition to the datasets used to train the Gemini foundation models .
- Gemini Code Assist Standard and Enterprise, which are products in the Gemini for Google Cloud portfolio, offer AI-powered assistance to help your development team build, deploy, and operate applications throughout the software development lifecycle.
- Supported features for Gemini Code Assist Standard and Enterprise The following sections show the types of generative AI assistance that are available in Gemini Code Assist Standard and Enterprise.

