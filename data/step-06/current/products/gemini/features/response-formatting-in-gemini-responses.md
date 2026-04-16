---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:16:09.672Z"
product_name: "Gemini"
product_slug: "gemini"
feature_name: "Response formatting in Gemini responses"
feature_slug: "response-formatting-in-gemini-responses"
latest_feature_date: "2024-04-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/gemini/docs/api/reference/rest/v1/projects.locations.codeToolsSettings.settingBindings/get"
  - "https://docs.cloud.google.com/gemini/docs/codeassist/monitor-gemini-code-assist"
  - "https://docs.cloud.google.com/gemini/docs/codeassist/gemini-3"
  - "https://docs.cloud.google.com/gemini/docs/codeassist/chat-gemini"
keywords:
  - "response"
  - "formatting"
  - "in"
  - "gemini"
  - "responses"
  - "improved"
  - "to"
  - "better"
---

# Response formatting in Gemini responses

Product: Gemini
Coverage: MEDIUM

## Step 02 Summary

Gemini improved response formatting to better handle longer answers.

## Extended Definition

Gemini improved response formatting to better handle longer answers.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/gemini/docs/api/reference/rest/v1/projects.locations.codeToolsSettings.settingBindings/get](https://docs.cloud.google.com/gemini/docs/api/reference/rest/v1/projects.locations.codeToolsSettings.settingBindings/get)
- [https://docs.cloud.google.com/gemini/docs/codeassist/monitor-gemini-code-assist](https://docs.cloud.google.com/gemini/docs/codeassist/monitor-gemini-code-assist)
- [https://docs.cloud.google.com/gemini/docs/codeassist/gemini-3](https://docs.cloud.google.com/gemini/docs/codeassist/gemini-3)
- [https://docs.cloud.google.com/gemini/docs/codeassist/chat-gemini](https://docs.cloud.google.com/gemini/docs/codeassist/chat-gemini)

## Supporting Pages

### "Method: projects.locations.codeToolsSettings.settingBindings.get \_|\_ Gemini\

- URL: [https://docs.cloud.google.com/gemini/docs/api/reference/rest/v1/projects.locations.codeToolsSettings.settingBindings/get](https://docs.cloud.google.com/gemini/docs/api/reference/rest/v1/projects.locations.codeToolsSettings.settingBindings/get)
- Source ID: `site-api-reference`
- Final score: 268
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation AI and ML Gemini for Google Cloud API and references Send feedback Method: projects.locations.codeToolsSettings.settingBindings.get Stay organized with collections Save and categorize content based on your preferences.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-06-09 UTC."],[],[]]
- IAM Permissions Requires the following IAM permission on the name resource: cloudaicompanion.settingBindings.codeToolsSettingsGet For more information, see the IAM documentation .
- HTTP request GET https://cloudaicompanion.googleapis.com/v1/{name=projects/ /locations/ /codeToolsSettings/ /settingBindings/ } The URL uses gRPC Transcoding syntax.

### "Monitor Gemini Code Assist usage \_|\_ Gemini for Google Cloud \_|\_ Google\

- URL: [https://docs.cloud.google.com/gemini/docs/codeassist/monitor-gemini-code-assist](https://docs.cloud.google.com/gemini/docs/codeassist/monitor-gemini-code-assist)
- Source ID: `site-docs-root`
- Final score: 261
- Re-rank relevance: N/A

Evidence snippets:
- Metric Name Timeframe code assist/daily active users Daily active users Past 24 hours code assist/twenty eight day active users Twenty-eight-day active users Past 28 days Chat metric This tracks the number of Gemini Code Assist chat responses exposed or shown to users over the given timeframe.
- Metric Name Timeframe chat responses count Daily chat responses Past 24 hours Code suggestion metrics The following are metrics related to Gemini Code Assist code suggestions.
- Code acceptances These metrics count the number of Gemini Code Assist code responses shown to and accepted by users over different timeframes.
- Metric Name Timeframe code assist/code lines accepted count Daily lines of code accepted Past 24 hours View Gemini Code Assist metrics in your project To view aggregated metrics for Gemini Code Assist, do the following: Go to the Gemini Code Assist Overview page.

### "Gemini 3 in Gemini Code Assist \_|\_ Gemini for Google Cloud \_|\_ Google\

- URL: [https://docs.cloud.google.com/gemini/docs/codeassist/gemini-3](https://docs.cloud.google.com/gemini/docs/codeassist/gemini-3)
- Source ID: `site-docs-root`
- Final score: 249
- Re-rank relevance: N/A

Evidence snippets:
- Responses generated with Gemini 3 include a label identifying the model.
- Gemini 3 availability License or subscription Gemini 3 availability Google AI Ultra Available to all users in VS Code and IntelliJ Google AI Pro Available to all users in VS Code and IntelliJ Gemini Code Assist Enterprise Available to users in VS Code and IntelliJ whose administrator has configured the Preview release channel Gemini Code Assist Standard Available to users in VS Code and IntelliJ whose administrator has configured the Preview release channel Gemini Code Assist for individuals Available to select users from the waitlist in VS Code and IntelliJ.
- Use Gemini 3 in IntelliJ If Gemini 3 is available to you, it will automatically be selected for agent mode, chat and code generation.
- Use Gemini 3 in VS Code If Gemini 3 is available to you, it will automatically be selected for chat and code generation.

### "Chat with Gemini Code Assist Standard and Enterprise \_|\_ Gemini for Google\

- URL: [https://docs.cloud.google.com/gemini/docs/codeassist/chat-gemini](https://docs.cloud.google.com/gemini/docs/codeassist/chat-gemini)
- Source ID: `site-docs-root`
- Final score: 244
- Re-rank relevance: N/A

Evidence snippets:
- Rules in Gemini let you define your preferences, such as: Coding style Output formats Tech stack Language For example, you can create a rule such as "Always give me concise responses in Kotlin." VS Code In your code file, press Control+I (for Windows and Linux) or Command+I (for macOS) to open the Gemini Code Assist Quick Pick menu.
- Known issues This section outlines the known issues of Gemini Code Assist: VS Code Chat responses may be truncated when they include an updated version of a large open file To work around this issue, select a smaller section of code and include an additional directive in the chat prompt, such as only output the selected code.
- Select one of the following options: Expanded : Automatically expands all code blocks in Gemini Code Assist chat responses.
- Collapse : Automatically collapses all code blocks in Gemini Code Assist chat responses.

