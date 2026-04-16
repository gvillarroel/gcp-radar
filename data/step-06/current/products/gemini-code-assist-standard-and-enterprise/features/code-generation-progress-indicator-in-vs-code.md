---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:16:10.712Z"
product_name: "Gemini Code Assist Standard and Enterprise"
product_slug: "gemini-code-assist-standard-and-enterprise"
feature_name: "Code generation progress indicator in VS Code"
feature_slug: "code-generation-progress-indicator-in-vs-code"
latest_feature_date: "2023-11-01"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/gemini/docs/codeassist/chat-gemini"
  - "https://docs.cloud.google.com/gemini/docs/codeassist/write-code-gemini"
  - "https://docs.cloud.google.com/gemini/docs/codeassist/overview"
  - "https://docs.cloud.google.com/gemini/docs/codeassist/use-in-ide"
keywords:
  - "code"
  - "generation"
  - "progress"
  - "indicator"
  - "in"
  - "vs"
  - "shows"
  - "an"
---

# Code generation progress indicator in VS Code

Product: Gemini Code Assist Standard and Enterprise
Coverage: MEDIUM

## Step 02 Summary

Shows an indicator in Duet AI for VS Code when code generation is in progress.

## Extended Definition

Shows an indicator in Duet AI for VS Code when code generation is in progress.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/gemini/docs/codeassist/chat-gemini](https://docs.cloud.google.com/gemini/docs/codeassist/chat-gemini)
- [https://docs.cloud.google.com/gemini/docs/codeassist/write-code-gemini](https://docs.cloud.google.com/gemini/docs/codeassist/write-code-gemini)
- [https://docs.cloud.google.com/gemini/docs/codeassist/overview](https://docs.cloud.google.com/gemini/docs/codeassist/overview)
- [https://docs.cloud.google.com/gemini/docs/codeassist/use-in-ide](https://docs.cloud.google.com/gemini/docs/codeassist/use-in-ide)

## Supporting Pages

### "Chat with Gemini Code Assist Standard and Enterprise \_|\_ Gemini for Google\

- URL: [https://docs.cloud.google.com/gemini/docs/codeassist/chat-gemini](https://docs.cloud.google.com/gemini/docs/codeassist/chat-gemini)
- Source ID: `site-docs-reference`
- Final score: 284
- Re-rank relevance: N/A

Evidence snippets:
- Stop in-progress chat VS Code You can stop an in-progress chat response by pressing stop Stop : IntelliJ You can stop an in-progress chat response by pressing stop Stop : Select the model If you use Gemini Code Assist Standard or Enterprise , or if you have a Google AI Pro or Ultra subscription, you can select the model that Gemini Code Assist uses when processing your prompts.
- If you previously disabled automatic outline generation , click the Generate outline button to generate an outline for the current file in focus. (Optional): Click on a node in the outline to automatically scroll to that portion of the code file. (Optional): Click the Eye icon in the outline pane to display the outline in-line in the code file itself.
- Rules in Gemini let you define your preferences, such as: Coding style Output formats Tech stack Language For example, you can create a rule such as "Always give me concise responses in Kotlin." VS Code In your code file, press Control+I (for Windows and Linux) or Command+I (for macOS) to open the Gemini Code Assist Quick Pick menu.
- Known issues This section outlines the known issues of Gemini Code Assist: VS Code Chat responses may be truncated when they include an updated version of a large open file To work around this issue, select a smaller section of code and include an additional directive in the chat prompt, such as only output the selected code.

### "Code with Gemini Code Assist Standard and Enterprise \_|\_ Gemini for Google\

- URL: [https://docs.cloud.google.com/gemini/docs/codeassist/write-code-gemini](https://docs.cloud.google.com/gemini/docs/codeassist/write-code-gemini)
- Source ID: `site-docs-root`
- Final score: 267
- Re-rank relevance: N/A

Evidence snippets:
- Known issues This section outlines the known issues of Gemini Code Assist: VS Code Chat responses may be truncated when they include an updated version of a large open file To work around this issue, select a smaller section of code and include an additional directive in the chat prompt, such as only output the selected code.
- Prompt Gemini Code Assist in a code file with a comment If you prefer, you can also prompt Gemini Code Assist in your code file with a comment by following these steps: VS Code On a new line, enter the comment Function to create a Cloud Storage bucket , and then press Enter (for Windows and Linux) or Return (for macOS).
- This document describes how you can use Gemini Code Assist , an AI-powered collaborator in your IDE, to help you do the following in VS Code or IntelliJ and other supported JetBrains IDEs : Generate code for your project with code transformation.
- Note: The behaviour of code generation, completion, and transformation are non-deterministic when used simultaneously with other plugins that either implement the same shortcuts and/or use the same platform API to process these actions.

### "Gemini Code Assist Standard and Enterprise overview \_|\_ Gemini for Google\

- URL: [https://docs.cloud.google.com/gemini/docs/codeassist/overview](https://docs.cloud.google.com/gemini/docs/codeassist/overview)
- Source ID: `site-docs-reference`
- Final score: 263
- Re-rank relevance: N/A

Evidence snippets:
- Code assistance and chat The following table shows the types of generative AI assistance that are available in supported IDEs : AI coding assistance Gemini Code Assist Standard Gemini Code Assist Enterprise Code completion and generation in your IDE project in the following IDEs: Cloud Shell Editor Cloud Workstations JetBrains IDEs (such as IntelliJ and PyCharm) VS Code Android Studio Conversational assistant in your IDE using your opened files' context Multi-IDE support (VS Code, JetBrains IDEs such as IntelliJ and PyCharm , Cloud Workstations) Agentic chat Prompt Gemini to complete complex, multi-step tasks that use system tools and Model Context Protocol (MCP) servers.
- Gemini Code Assist code explained for Apigee policies. ( Preview ) Gemini in Application Integration The following table shows the types of generative AI assistance in Application Integration in the Google Cloud console: Integration creation assist Gemini Code Assist Standard Gemini Code Assist Enterprise AI-assisted visual editor for automation flow generation Enterprise context embedded AI-assisted automation authoring Generative AI Automation flow documentation generation and refinement Gemini in BigQuery features with Gemini Code Assist The following table shows the types of generative AI assistance for BigQuery in BigQuery Studio : Data insights Gemini Code Assist Standard Gemini Code Assist Enterprise Data insights provides an insightful library of queries generated from the metadata of your tables.
- Gemini in Colab Enterprise The following table shows the types of generative AI assistance for code in Colab Enterprise : Notebook code assist Gemini Code Assist Standard Gemini Code Assist Enterprise Python code generation and completion in notebook Gemini in databases The following table shows the types of generative AI assistance for coding in databases: Generate SQL queries Gemini Code Assist Standard Gemini Code Assist Enterprise Write in natural language to generate SQL statements.
- Gemini Cloud Assist The following table shows the types of generative AI assistance in Gemini Cloud Assist in the Google Cloud console: Gemini Cloud Assist assistance Gemini Code Assist Standard Gemini Code Assist Enterprise Gemini Cloud Assist features (including features available to all Google users and available to Gemini Code Assist Enterprise users) Gemini in Apigee The following table shows the types of generative AI assistance with API development in Apigee (IDE and the Google Cloud console): Gemini Code Assist for API management Gemini Code Assist Standard Gemini Code Assist Enterprise Create or edit OpenAPI specification using natural language prompts.

### "Code with Gemini Code Assist Standard and Enterprise \_|\_ Gemini for Google\

- URL: [https://docs.cloud.google.com/gemini/docs/codeassist/use-in-ide](https://docs.cloud.google.com/gemini/docs/codeassist/use-in-ide)
- Source ID: `site-docs-root`
- Final score: 257
- Re-rank relevance: N/A

Evidence snippets:
- Known issues This section outlines the known issues of Gemini Code Assist: VS Code Chat responses may be truncated when they include an updated version of a large open file To work around this issue, select a smaller section of code and include an additional directive in the chat prompt, such as only output the selected code.
- Prompt Gemini Code Assist in a code file with a comment If you prefer, you can also prompt Gemini Code Assist in your code file with a comment by following these steps: VS Code On a new line, enter the comment Function to create a Cloud Storage bucket , and then press Enter (for Windows and Linux) or Return (for macOS).
- This document describes how you can use Gemini Code Assist , an AI-powered collaborator in your IDE, to help you do the following in VS Code or IntelliJ and other supported JetBrains IDEs : Generate code for your project with code transformation.
- Note: The behaviour of code generation, completion, and transformation are non-deterministic when used simultaneously with other plugins that either implement the same shortcuts and/or use the same platform API to process these actions.

