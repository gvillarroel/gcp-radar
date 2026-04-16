---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:16:09.638Z"
product_name: "Gemini"
product_slug: "gemini"
feature_name: "Gemini Code Assist code customization configuration in Google Cloud Console"
feature_slug: "gemini-code-assist-code-customization-configuration-in-google-cloud-console"
latest_feature_date: "2025-08-12"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/gemini/docs/codeassist/code-customization"
  - "https://docs.cloud.google.com/gemini/docs/codeassist/set-up-gemini"
  - "https://docs.cloud.google.com/gemini/docs/codeassist/use-code-customization"
  - "https://docs.cloud.google.com/gemini/docs/codeassist/write-code-gemini"
keywords:
  - "gemini"
  - "code"
  - "assist"
  - "customization"
  - "configuration"
  - "in"
  - "console"
  - "now"
---

# Gemini Code Assist code customization configuration in Google Cloud Console

Product: Gemini
Coverage: MEDIUM

## Step 02 Summary

Google Cloud Console now supports setting up and managing Gemini Code Assist code customization, including repository indexes and repository groups; Google Cloud Console now supports setting up and managing Gemini Code Assist code customization, including repository indexes and repository groups.

## Extended Definition

Google Cloud Console now supports setting up and managing Gemini Code Assist code customization, including repository indexes and repository groups; Google Cloud Console now supports setting up and managing Gemini Code Assist code customization, including repository indexes and repository groups.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/gemini/docs/codeassist/code-customization](https://docs.cloud.google.com/gemini/docs/codeassist/code-customization)
- [https://docs.cloud.google.com/gemini/docs/codeassist/set-up-gemini](https://docs.cloud.google.com/gemini/docs/codeassist/set-up-gemini)
- [https://docs.cloud.google.com/gemini/docs/codeassist/use-code-customization](https://docs.cloud.google.com/gemini/docs/codeassist/use-code-customization)
- [https://docs.cloud.google.com/gemini/docs/codeassist/write-code-gemini](https://docs.cloud.google.com/gemini/docs/codeassist/write-code-gemini)

## Supporting Pages

### "Configure Gemini Code Assist code customization \_|\_ Gemini for Google\

- URL: [https://docs.cloud.google.com/gemini/docs/codeassist/code-customization](https://docs.cloud.google.com/gemini/docs/codeassist/code-customization)
- Source ID: `site-docs-root`
- Final score: 376
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This document describes how to set up Gemini Code Assist code customization in the Google Cloud console, with the Google Cloud CLI, or with Terraform by connecting Gemini Code Assist to your private code repositories.
- Configure Gemini Code Assist code customization Select one of the following options: Console In the Google Cloud console, go to the Code Customization page.
- Optional: To delete the index, in a shell environment, use the gemini code-repository-indexes delete command : gcloud gemini code-repository-indexes delete INDEX NAME \ --location= REGION \ --project= PROJECT ID What's next Start using Gemini Code Assist: VS Code, IntelliJ, and other supported JetBrains IDEs: Code with Gemini Code Assist Cloud Shell Editor: Code with Gemini Code Assist Cloud Workstations: Code with Gemini Code Assist Learn how to use code customization and best practices.
- Home Documentation AI and ML Gemini for Google Cloud Guides Send feedback Configure Gemini Code Assist code customization Stay organized with collections Save and categorize content based on your preferences.

### "Set up Gemini Code Assist Standard and Enterprise \_|\_ Gemini for Google\

- URL: [https://docs.cloud.google.com/gemini/docs/codeassist/set-up-gemini](https://docs.cloud.google.com/gemini/docs/codeassist/set-up-gemini)
- Source ID: `site-docs-root`
- Final score: 344
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To use Gemini Code Assist code customization, users should refer to Configure Gemini Code Assist code customization .
- Now the users are ready to use Gemini Code Assist Standard or Enterprise in their IDE.
- The subscription is now purchased for Gemini Code Assist Standard or Enterprise.
- Gemini Code Assist is now authorized to access your account.

### "Use Gemini Code Assist code customization \_|\_ Gemini for Google Cloud\

- URL: [https://docs.cloud.google.com/gemini/docs/codeassist/use-code-customization](https://docs.cloud.google.com/gemini/docs/codeassist/use-code-customization)
- Source ID: `site-docs-root-2`
- Final score: 344
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Use cases and prompt examples The following table provides guidance and examples about using code customization in specific use cases: Use case Things worth trying Writing new code Try the following to generate code in your IDE or Gemini Code Assist chat: Generate code that would use terms which are already mentioned in your codebase.
- How to use code customization The following table lists ways to use Gemini Code Assist code customization: Form How to trigger Notes and resources Natural language chat Enter a natural language prompt in Gemini Code Assist chat in the IDE.
- Home Documentation AI and ML Gemini for Google Cloud Guides Send feedback Use Gemini Code Assist code customization Stay organized with collections Save and categorize content based on your preferences.
- If you highlight or select code when you send a message in chat, Gemini Code Assist uses that code to improve code customization and chat quality.

### "Code with Gemini Code Assist Standard and Enterprise \_|\_ Gemini for Google\

- URL: [https://docs.cloud.google.com/gemini/docs/codeassist/write-code-gemini](https://docs.cloud.google.com/gemini/docs/codeassist/write-code-gemini)
- Source ID: `site-docs-root-2`
- Final score: 340
- Re-rank relevance: N/A

Evidence snippets:
- A successful check results in the following output: $ grpc-health-probe -addr cloudaicompanion.googleapis.com:443 -tls error: this server does not implement the grpc health protocol (grpc.health.v1.Health): GRPC target method can't be resolved An unsuccessful check results in the following output: timeout: failed to connect service "cloudaicompanion.googleapis.com:443" within 1s To obtain more details, run the following before grpc-health-probe : export GRPC GO LOG SEVERITY LEVEL=info IntelliJ There are no known issues for Gemini Code Assist for IntelliJ and other supported JetBrains IDEs.
- Known issues This section outlines the known issues of Gemini Code Assist: VS Code Chat responses may be truncated when they include an updated version of a large open file To work around this issue, select a smaller section of code and include an additional directive in the chat prompt, such as only output the selected code.
- If you're using Gemini Code Assist Enterprise , you can use Code customization , which lets you get code suggestions based on your organization's private codebase directly from Gemini Code Assist Enterprise.
- Get code completions While you write code, Gemini Code Assist makes inline code suggestions, also known as code completions , that you can either accept or ignore.

