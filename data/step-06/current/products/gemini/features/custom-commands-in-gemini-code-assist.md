---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:16:09.645Z"
product_name: "Gemini"
product_slug: "gemini"
feature_name: "Custom commands in Gemini Code Assist"
feature_slug: "custom-commands-in-gemini-code-assist"
latest_feature_date: "2025-05-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/gemini/docs/codeassist/code-customization"
  - "https://docs.cloud.google.com/gemini/docs/codeassist/chat-gemini"
  - "https://docs.cloud.google.com/gemini/docs/codeassist/write-code-gemini"
  - "https://docs.cloud.google.com/gemini/docs/codeassist/use-code-customization"
keywords:
  - "custom"
  - "commands"
  - "in"
  - "gemini"
  - "code"
  - "assist"
  - "intellij"
  - "lets"
---

# Custom commands in Gemini Code Assist

Product: Gemini
Coverage: MEDIUM

## Step 02 Summary

IntelliJ Gemini Code Assist lets users create, save, and run custom preconfigured prompts as commands.

## Extended Definition

IntelliJ Gemini Code Assist lets users create, save, and run custom preconfigured prompts as commands.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/gemini/docs/codeassist/code-customization](https://docs.cloud.google.com/gemini/docs/codeassist/code-customization)
- [https://docs.cloud.google.com/gemini/docs/codeassist/chat-gemini](https://docs.cloud.google.com/gemini/docs/codeassist/chat-gemini)
- [https://docs.cloud.google.com/gemini/docs/codeassist/write-code-gemini](https://docs.cloud.google.com/gemini/docs/codeassist/write-code-gemini)
- [https://docs.cloud.google.com/gemini/docs/codeassist/use-code-customization](https://docs.cloud.google.com/gemini/docs/codeassist/use-code-customization)

## Supporting Pages

### "Configure Gemini Code Assist code customization \_|\_ Gemini for Google\

- URL: [https://docs.cloud.google.com/gemini/docs/codeassist/code-customization](https://docs.cloud.google.com/gemini/docs/codeassist/code-customization)
- Source ID: `site-docs-root`
- Final score: 366
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Optional: To delete the index, in a shell environment, use the gemini code-repository-indexes delete command : gcloud gemini code-repository-indexes delete INDEX NAME \ --location= REGION \ --project= PROJECT ID What's next Start using Gemini Code Assist: VS Code, IntelliJ, and other supported JetBrains IDEs: Code with Gemini Code Assist Cloud Shell Editor: Code with Gemini Code Assist Cloud Workstations: Code with Gemini Code Assist Learn how to use code customization and best practices.
- Gemini Code Assist code customization feature lets you receive code recommendations, which draw from the internal libraries, private APIs, and coding style of your organization.
- This document describes how to set up Gemini Code Assist code customization in the Google Cloud console, with the Google Cloud CLI, or with Terraform by connecting Gemini Code Assist to your private code repositories.
- Home Documentation AI and ML Gemini for Google Cloud Guides Send feedback Configure Gemini Code Assist code customization Stay organized with collections Save and categorize content based on your preferences.

### "Chat with Gemini Code Assist Standard and Enterprise \_|\_ Gemini for Google\

- URL: [https://docs.cloud.google.com/gemini/docs/codeassist/chat-gemini](https://docs.cloud.google.com/gemini/docs/codeassist/chat-gemini)
- Source ID: `site-docs-root`
- Final score: 362
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Create custom commands By default, Gemini Code Assist provides commands like /generate for VS Code and Generate Code for IntelliJ and other supported JetBrains IDEs .
- If you're using Gemini Code Assist Enterprise , you can use Code customization , which lets you get code suggestions based on your organization's private codebase directly from Gemini Code Assist Enterprise.
- In the Search settings field, enter Geminicodeassist: Custom Commands .
- Stop in-progress chat VS Code You can stop an in-progress chat response by pressing stop Stop : IntelliJ You can stop an in-progress chat response by pressing stop Stop : Select the model If you use Gemini Code Assist Standard or Enterprise , or if you have a Google AI Pro or Ultra subscription, you can select the model that Gemini Code Assist uses when processing your prompts.

### "Code with Gemini Code Assist Standard and Enterprise \_|\_ Gemini for Google\

- URL: [https://docs.cloud.google.com/gemini/docs/codeassist/write-code-gemini](https://docs.cloud.google.com/gemini/docs/codeassist/write-code-gemini)
- Source ID: `site-docs-root-2`
- Final score: 362
- Re-rank relevance: N/A

Evidence snippets:
- If you're using Gemini Code Assist Enterprise , you can use Code customization , which lets you get code suggestions based on your organization's private codebase directly from Gemini Code Assist Enterprise.
- A successful check results in the following output: $ grpc-health-probe -addr cloudaicompanion.googleapis.com:443 -tls error: this server does not implement the grpc health protocol (grpc.health.v1.Health): GRPC target method can't be resolved An unsuccessful check results in the following output: timeout: failed to connect service "cloudaicompanion.googleapis.com:443" within 1s To obtain more details, run the following before grpc-health-probe : export GRPC GO LOG SEVERITY LEVEL=info IntelliJ There are no known issues for Gemini Code Assist for IntelliJ and other supported JetBrains IDEs.
- Prompt Gemini Code Assist with code transformation Code transformation allows you to use commands or natural language prompts in the Quick Pick menu to request modifications to your code, and provides you with a diff view to show pending changes to your code.
- This document describes how you can use Gemini Code Assist , an AI-powered collaborator in your IDE, to help you do the following in VS Code or IntelliJ and other supported JetBrains IDEs : Generate code for your project with code transformation.

### "Use Gemini Code Assist code customization \_|\_ Gemini for Google Cloud\

- URL: [https://docs.cloud.google.com/gemini/docs/codeassist/use-code-customization](https://docs.cloud.google.com/gemini/docs/codeassist/use-code-customization)
- Source ID: `site-docs-root-2`
- Final score: 341
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Use cases and prompt examples The following table provides guidance and examples about using code customization in specific use cases: Use case Things worth trying Writing new code Try the following to generate code in your IDE or Gemini Code Assist chat: Generate code that would use terms which are already mentioned in your codebase.
- How to use code customization The following table lists ways to use Gemini Code Assist code customization: Form How to trigger Notes and resources Natural language chat Enter a natural language prompt in Gemini Code Assist chat in the IDE.
- Home Documentation AI and ML Gemini for Google Cloud Guides Send feedback Use Gemini Code Assist code customization Stay organized with collections Save and categorize content based on your preferences.
- If you highlight or select code when you send a message in chat, Gemini Code Assist uses that code to improve code customization and chat quality.

