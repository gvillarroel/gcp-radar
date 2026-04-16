---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:16:09.629Z"
product_name: "Gemini"
product_slug: "gemini"
feature_name: "Finish changes"
feature_slug: "finish-changes"
latest_feature_date: "2026-03-04"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/gemini/docs/codeassist/write-code-gemini"
  - "https://docs.cloud.google.com/gemini/docs/api/reference/rest/v1/projects.locations.codeToolsSettings.settingBindings"
  - "https://docs.cloud.google.com/gemini/docs/codeassist/chat-gemini"
  - "https://docs.cloud.google.com/gemini/docs/api/reference/rest/v1/projects.locations.codeToolsSettings.settingBindings/get"
keywords:
  - "finish"
  - "changes"
  - "an"
  - "ai"
  - "pair"
  - "programming"
  - "completes"
  - "in"
---

# Finish changes

Product: Gemini
Coverage: MEDIUM

## Step 02 Summary

An AI pair-programming feature completes in-progress work from partial input such as pseudocode, TODOs, or half-written code; An AI pair-programming feature completes in-progress work from partial input such as pseudocode, TODOs, or half-written code.

## Extended Definition

An AI pair-programming feature completes in-progress work from partial input such as pseudocode, TODOs, or half-written code; An AI pair-programming feature completes in-progress work from partial input such as pseudocode, TODOs, or half-written code.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/gemini/docs/codeassist/write-code-gemini](https://docs.cloud.google.com/gemini/docs/codeassist/write-code-gemini)
- [https://docs.cloud.google.com/gemini/docs/api/reference/rest/v1/projects.locations.codeToolsSettings.settingBindings](https://docs.cloud.google.com/gemini/docs/api/reference/rest/v1/projects.locations.codeToolsSettings.settingBindings)
- [https://docs.cloud.google.com/gemini/docs/codeassist/chat-gemini](https://docs.cloud.google.com/gemini/docs/codeassist/chat-gemini)
- [https://docs.cloud.google.com/gemini/docs/api/reference/rest/v1/projects.locations.codeToolsSettings.settingBindings/get](https://docs.cloud.google.com/gemini/docs/api/reference/rest/v1/projects.locations.codeToolsSettings.settingBindings/get)

## Supporting Pages

### "Code with Gemini Code Assist Standard and Enterprise \_|\_ Gemini for Google\

- URL: [https://docs.cloud.google.com/gemini/docs/codeassist/write-code-gemini](https://docs.cloud.google.com/gemini/docs/codeassist/write-code-gemini)
- Source ID: `site-docs-root-2`
- Final score: 244
- Re-rank relevance: N/A

Evidence snippets:
- To generate suggested code, press the keyboard shortcut provided by the hint, or right-click in the file and select Gemini Code Assist > Finish changes .
- Finish changes in a file Gemini Code Assist can generate code suggestion to complete your file's pseudocode, #TODOs, and half-written code.
- Alternatively, you can use the finish changes keyboard shortcut .
- In the file window, right-click > Gemini > Finish changes .

### "REST Resource: projects.locations.codeToolsSettings.settingBindings \_|\_\

- URL: [https://docs.cloud.google.com/gemini/docs/api/reference/rest/v1/projects.locations.codeToolsSettings.settingBindings](https://docs.cloud.google.com/gemini/docs/api/reference/rest/v1/projects.locations.codeToolsSettings.settingBindings)
- Source ID: `site-api-reference`
- Final score: 208
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- An object containing a list of "key": value pairs.
- Methods create Creates a new SettingBinding in a given project and location. delete Deletes a single SettingBinding. get Gets details of a single SettingBinding. list Lists SettingBindings in a given project and location. patch Updates the parameters of a single SettingBinding.
- Home Documentation AI and ML Gemini for Google Cloud API and references Send feedback REST Resource: projects.locations.codeToolsSettings.settingBindings Stay organized with collections Save and categorize content based on your preferences.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-09-12 UTC."],[],[]]

### "Chat with Gemini Code Assist Standard and Enterprise \_|\_ Gemini for Google\

- URL: [https://docs.cloud.google.com/gemini/docs/codeassist/chat-gemini](https://docs.cloud.google.com/gemini/docs/codeassist/chat-gemini)
- Source ID: `site-docs-root`
- Final score: 207
- Re-rank relevance: N/A

Evidence snippets:
- Revert to a checkpoint in chat After applying the changes that Gemini Code Assist generates based on your prompt, you can choose to revert the modified code file(s) to a certain checkpoint, which reverts all of the applied changes to the code file(s).
- Delete prompt and response pairs To delete your prompt and Gemini Code Assist's response to that particular prompt, follow these steps: VS Code In the chat pane, hold your pointer over your prompt that you wish to remove.
- Your prompt and response pair is removed from your chat history with Gemini Code Assist.
- Your prompt and response pair is removed from your chat history with Gemini Code Assist.

### "Method: projects.locations.codeToolsSettings.settingBindings.get \_|\_ Gemini\

- URL: [https://docs.cloud.google.com/gemini/docs/api/reference/rest/v1/projects.locations.codeToolsSettings.settingBindings/get](https://docs.cloud.google.com/gemini/docs/api/reference/rest/v1/projects.locations.codeToolsSettings.settingBindings/get)
- Source ID: `site-api-reference`
- Final score: 202
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation AI and ML Gemini for Google Cloud API and references Send feedback Method: projects.locations.codeToolsSettings.settingBindings.get Stay organized with collections Save and categorize content based on your preferences.
- IAM Permissions Requires the following IAM permission on the name resource: cloudaicompanion.settingBindings.codeToolsSettingsGet For more information, see the IAM documentation .
- HTTP request GET https://cloudaicompanion.googleapis.com/v1/{name=projects/ /locations/ /codeToolsSettings/ /settingBindings/ } The URL uses gRPC Transcoding syntax.
- Response body If successful, the response body contains an instance of SettingBinding .

