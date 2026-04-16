---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:16:09.662Z"
product_name: "Gemini"
product_slug: "gemini"
feature_name: "Gemini Code Assist IntelliJ code completions integration"
feature_slug: "gemini-code-assist-intellij-code-completions-integration"
latest_feature_date: "2024-08-12"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/gemini/docs/codeassist/write-code-gemini"
  - "https://docs.cloud.google.com/gemini/docs/codeassist/overview"
  - "https://docs.cloud.google.com/gemini/docs/codeassist/gemini-3"
  - "https://docs.cloud.google.com/gemini/docs/codeassist/use-gemini-code-assist-chat"
keywords:
  - "gemini"
  - "code"
  - "assist"
  - "intellij"
  - "completions"
  - "integration"
  - "are"
  - "integrated"
---

# Gemini Code Assist IntelliJ code completions integration

Product: Gemini
Coverage: MEDIUM

## Step 02 Summary

IntelliJ code completions are integrated with the native IDE completion framework to reduce keybinding conflicts.

## Extended Definition

IntelliJ code completions are integrated with the native IDE completion framework to reduce keybinding conflicts.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/gemini/docs/codeassist/write-code-gemini](https://docs.cloud.google.com/gemini/docs/codeassist/write-code-gemini)
- [https://docs.cloud.google.com/gemini/docs/codeassist/overview](https://docs.cloud.google.com/gemini/docs/codeassist/overview)
- [https://docs.cloud.google.com/gemini/docs/codeassist/gemini-3](https://docs.cloud.google.com/gemini/docs/codeassist/gemini-3)
- [https://docs.cloud.google.com/gemini/docs/codeassist/use-gemini-code-assist-chat](https://docs.cloud.google.com/gemini/docs/codeassist/use-gemini-code-assist-chat)

## Supporting Pages

### "Code with Gemini Code Assist Standard and Enterprise \_|\_ Gemini for Google\

- URL: [https://docs.cloud.google.com/gemini/docs/codeassist/write-code-gemini](https://docs.cloud.google.com/gemini/docs/codeassist/write-code-gemini)
- Source ID: `site-docs-root-2`
- Final score: 292
- Re-rank relevance: N/A

Evidence snippets:
- A successful check results in the following output: $ grpc-health-probe -addr cloudaicompanion.googleapis.com:443 -tls error: this server does not implement the grpc health protocol (grpc.health.v1.Health): GRPC target method can't be resolved An unsuccessful check results in the following output: timeout: failed to connect service "cloudaicompanion.googleapis.com:443" within 1s To obtain more details, run the following before grpc-health-probe : export GRPC GO LOG SEVERITY LEVEL=info IntelliJ There are no known issues for Gemini Code Assist for IntelliJ and other supported JetBrains IDEs.
- This document describes how you can use Gemini Code Assist , an AI-powered collaborator in your IDE, to help you do the following in VS Code or IntelliJ and other supported JetBrains IDEs : Generate code for your project with code transformation.
- Exclude files from local context If files are specified in a .aiexclude or .gitignore file, Gemini Code Assist by default excludes them from local use in the context for code completion, code generation, code transformation, and chat.
- Get more relevant suggestions with remote repository context You can get more contextually aware and relevant code suggestions by directing Gemini Code Assist to focus on specific remote repositories.

### "Gemini Code Assist Standard and Enterprise overview \_|\_ Gemini for Google\

- URL: [https://docs.cloud.google.com/gemini/docs/codeassist/overview](https://docs.cloud.google.com/gemini/docs/codeassist/overview)
- Source ID: `site-docs-root`
- Final score: 275
- Re-rank relevance: N/A

Evidence snippets:
- Code assistance and chat The following table shows the types of generative AI assistance that are available in supported IDEs : AI coding assistance Gemini Code Assist Standard Gemini Code Assist Enterprise Code completion and generation in your IDE project in the following IDEs: Cloud Shell Editor Cloud Workstations JetBrains IDEs (such as IntelliJ and PyCharm) VS Code Android Studio Conversational assistant in your IDE using your opened files' context Multi-IDE support (VS Code, JetBrains IDEs such as IntelliJ and PyCharm , Cloud Workstations) Agentic chat Prompt Gemini to complete complex, multi-step tasks that use system tools and Model Context Protocol (MCP) servers.
- Gemini Code Assist code explained for Apigee policies. ( Preview ) Gemini in Application Integration The following table shows the types of generative AI assistance in Application Integration in the Google Cloud console: Integration creation assist Gemini Code Assist Standard Gemini Code Assist Enterprise AI-assisted visual editor for automation flow generation Enterprise context embedded AI-assisted automation authoring Generative AI Automation flow documentation generation and refinement Gemini in BigQuery features with Gemini Code Assist The following table shows the types of generative AI assistance for BigQuery in BigQuery Studio : Data insights Gemini Code Assist Standard Gemini Code Assist Enterprise Data insights provides an insightful library of queries generated from the metadata of your tables.
- Interact with Gemini Code Assist in your IDE After you set up Gemini Code Assist Standard or Enterprise for a Google Cloud project , and install the Gemini Code Assist extension in your IDE ( VS Code or supported JetBrains IDE ), you can ask for assistance in the following ways: Receive code completions or generate code directly in the code editor.
- Extended integrations: Gemini Code Assist Enterprise provides AI assistance across Google Cloud like Apigee, Application Integration, and Gemini Cloud Assist, empowering cloud teams to build, design and operate, and optimize their applications and infrastructure more effectively on Google Cloud.

### "Gemini 3 in Gemini Code Assist \_|\_ Gemini for Google Cloud \_|\_ Google\

- URL: [https://docs.cloud.google.com/gemini/docs/codeassist/gemini-3](https://docs.cloud.google.com/gemini/docs/codeassist/gemini-3)
- Source ID: `site-docs-root`
- Final score: 247
- Re-rank relevance: N/A

Evidence snippets:
- Gemini 3.1 Pro and Gemini 3.0 Flash are available to Gemini Code Assist users in VS Code and IntelliJ.
- Gemini 3 availability License or subscription Gemini 3 availability Google AI Ultra Available to all users in VS Code and IntelliJ Google AI Pro Available to all users in VS Code and IntelliJ Gemini Code Assist Enterprise Available to users in VS Code and IntelliJ whose administrator has configured the Preview release channel Gemini Code Assist Standard Available to users in VS Code and IntelliJ whose administrator has configured the Preview release channel Gemini Code Assist for individuals Available to select users from the waitlist in VS Code and IntelliJ.
- Home Documentation AI and ML Gemini for Google Cloud Guides Send feedback Gemini 3 in Gemini Code Assist Stay organized with collections Save and categorize content based on your preferences.
- Use Gemini 3 in IntelliJ If Gemini 3 is available to you, it will automatically be selected for agent mode, chat and code generation.

### "Use the Gemini Code Assist chat \_|\_ Gemini for Google Cloud \_|\_ Google\

- URL: [https://docs.cloud.google.com/gemini/docs/codeassist/use-gemini-code-assist-chat](https://docs.cloud.google.com/gemini/docs/codeassist/use-gemini-code-assist-chat)
- Source ID: `site-docs-root-2`
- Final score: 247
- Re-rank relevance: N/A

Evidence snippets:
- IntelliJ If you want to re-use your previous prompts, you can find them in your Query History in the Gemini Code Assist tool window by clicking schedule Show Query History .
- This document describes how to get AI-powered assistance in the Gemini Code Assist chat in your integrated development environment (IDE).
- IntelliJ In the Gemini Code Assist tool window, enter a prompt and then click Submit .
- IntelliJ In the Gemini Code Assist tool window, click chat bubble Recent Chats .

