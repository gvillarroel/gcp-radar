---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:16:10.701Z"
product_name: "Gemini Code Assist Standard and Enterprise"
product_slug: "gemini-code-assist-standard-and-enterprise"
feature_name: "code customization"
feature_slug: "code-customization"
latest_feature_date: "2024-09-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/gemini/docs/codeassist/use-code-customization"
  - "https://docs.cloud.google.com/gemini/docs/codeassist/code-customization"
  - "https://docs.cloud.google.com/gemini/docs/codeassist/write-code-gemini"
  - "https://docs.cloud.google.com/gemini/docs/codeassist/chat-gemini"
keywords:
  - "code"
  - "customization"
  - "gemini"
  - "assist"
  - "is"
  - "generally"
  - "available"
  - "across"
---

# code customization

Product: Gemini Code Assist Standard and Enterprise
Coverage: MEDIUM

## Step 02 Summary

Gemini Code Assist code customization is generally available across supported IDEs and cloud environments to provide suggestions based on private codebases and coding conventions.

## Extended Definition

Gemini Code Assist code customization is generally available across supported IDEs and cloud environments to provide suggestions based on private codebases and coding conventions.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/gemini/docs/codeassist/use-code-customization](https://docs.cloud.google.com/gemini/docs/codeassist/use-code-customization)
- [https://docs.cloud.google.com/gemini/docs/codeassist/code-customization](https://docs.cloud.google.com/gemini/docs/codeassist/code-customization)
- [https://docs.cloud.google.com/gemini/docs/codeassist/write-code-gemini](https://docs.cloud.google.com/gemini/docs/codeassist/write-code-gemini)
- [https://docs.cloud.google.com/gemini/docs/codeassist/chat-gemini](https://docs.cloud.google.com/gemini/docs/codeassist/chat-gemini)

## Supporting Pages

### "Use Gemini Code Assist code customization \_|\_ Gemini for Google Cloud\

- URL: [https://docs.cloud.google.com/gemini/docs/codeassist/use-code-customization](https://docs.cloud.google.com/gemini/docs/codeassist/use-code-customization)
- Source ID: `site-docs-root`
- Final score: 396
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Note: Gemini Code Assist code customization is available only in Gemini Code Assist Enterprise.
- Use cases and prompt examples The following table provides guidance and examples about using code customization in specific use cases: Use case Things worth trying Writing new code Try the following to generate code in your IDE or Gemini Code Assist chat: Generate code that would use terms which are already mentioned in your codebase.
- How to use code customization The following table lists ways to use Gemini Code Assist code customization: Form How to trigger Notes and resources Natural language chat Enter a natural language prompt in Gemini Code Assist chat in the IDE.
- Home Documentation AI and ML Gemini for Google Cloud Guides Send feedback Use Gemini Code Assist code customization Stay organized with collections Save and categorize content based on your preferences.

### "Configure Gemini Code Assist code customization \_|\_ Gemini for Google\

- URL: [https://docs.cloud.google.com/gemini/docs/codeassist/code-customization](https://docs.cloud.google.com/gemini/docs/codeassist/code-customization)
- Source ID: `site-docs-reference`
- Final score: 384
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Note: Gemini Code Assist code customization is available only in Gemini Code Assist Enterprise.
- Optional: To delete the index, in a shell environment, use the gemini code-repository-indexes delete command : gcloud gemini code-repository-indexes delete INDEX NAME \ --location= REGION \ --project= PROJECT ID What's next Start using Gemini Code Assist: VS Code, IntelliJ, and other supported JetBrains IDEs: Code with Gemini Code Assist Cloud Shell Editor: Code with Gemini Code Assist Cloud Workstations: Code with Gemini Code Assist Learn how to use code customization and best practices.
- This document describes how to set up Gemini Code Assist code customization in the Google Cloud console, with the Google Cloud CLI, or with Terraform by connecting Gemini Code Assist to your private code repositories.
- Home Documentation AI and ML Gemini for Google Cloud Guides Send feedback Configure Gemini Code Assist code customization Stay organized with collections Save and categorize content based on your preferences.

### "Code with Gemini Code Assist Standard and Enterprise \_|\_ Gemini for Google\

- URL: [https://docs.cloud.google.com/gemini/docs/codeassist/write-code-gemini](https://docs.cloud.google.com/gemini/docs/codeassist/write-code-gemini)
- Source ID: `site-docs-root`
- Final score: 344
- Re-rank relevance: N/A

Evidence snippets:
- If you're using Gemini Code Assist Enterprise , you can use Code customization , which lets you get code suggestions based on your organization's private codebase directly from Gemini Code Assist Enterprise.
- A successful check results in the following output: $ grpc-health-probe -addr cloudaicompanion.googleapis.com:443 -tls error: this server does not implement the grpc health protocol (grpc.health.v1.Health): GRPC target method can't be resolved An unsuccessful check results in the following output: timeout: failed to connect service "cloudaicompanion.googleapis.com:443" within 1s To obtain more details, run the following before grpc-health-probe : export GRPC GO LOG SEVERITY LEVEL=info IntelliJ There are no known issues for Gemini Code Assist for IntelliJ and other supported JetBrains IDEs.
- Known issues This section outlines the known issues of Gemini Code Assist: VS Code Chat responses may be truncated when they include an updated version of a large open file To work around this issue, select a smaller section of code and include an additional directive in the chat prompt, such as only output the selected code.
- Prompt Gemini Code Assist in a code file with a comment If you prefer, you can also prompt Gemini Code Assist in your code file with a comment by following these steps: VS Code On a new line, enter the comment Function to create a Cloud Storage bucket , and then press Enter (for Windows and Linux) or Return (for macOS).

### "Chat with Gemini Code Assist Standard and Enterprise \_|\_ Gemini for Google\

- URL: [https://docs.cloud.google.com/gemini/docs/codeassist/chat-gemini](https://docs.cloud.google.com/gemini/docs/codeassist/chat-gemini)
- Source ID: `site-docs-reference`
- Final score: 332
- Re-rank relevance: N/A

Evidence snippets:
- If you're using Gemini Code Assist Enterprise , you can use Code customization , which lets you get code suggestions based on your organization's private codebase directly from Gemini Code Assist Enterprise.
- These options are available when Gemini Code Assist identifies the language used in your code block, and if this language is supported in your current IDE.
- A successful check results in the following output: $ grpc-health-probe -addr cloudaicompanion.googleapis.com:443 -tls error: this server does not implement the grpc health protocol (grpc.health.v1.Health): GRPC target method can't be resolved An unsuccessful check results in the following output: timeout: failed to connect service "cloudaicompanion.googleapis.com:443" within 1s To obtain more details, run the following before grpc-health-probe : export GRPC GO LOG SEVERITY LEVEL=info 'Activate Gemini Code Assist' still appears after selecting Gemini Code Assist project If you selected your project per the instructions in this guide, which includes enabling the Gemini for Google Cloud API, then there may be an issue with the LS server.
- Stop in-progress chat VS Code You can stop an in-progress chat response by pressing stop Stop : IntelliJ You can stop an in-progress chat response by pressing stop Stop : Select the model If you use Gemini Code Assist Standard or Enterprise , or if you have a Google AI Pro or Ultra subscription, you can select the model that Gemini Code Assist uses when processing your prompts.

