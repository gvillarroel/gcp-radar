---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:16:13.695Z"
product_name: "Gemini Enterprise"
product_slug: "gemini-enterprise"
feature_name: "Model Armor"
feature_slug: "model-armor"
latest_feature_date: "2025-09-15"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/gemini/enterprise/docs/configure-assistant"
  - "https://docs.cloud.google.com/gemini/enterprise/docs/reference/rest/v1/AnswerGenerationSpec"
  - "https://docs.cloud.google.com/gemini/enterprise/docs/assistant-chat"
  - "https://docs.cloud.google.com/gemini/enterprise/docs/reference/rest/Shared.Types/Binding"
keywords:
  - "model"
  - "armor"
  - "screens"
  - "prompts"
  - "and"
  - "responses"
  - "in"
  - "gemini"
---

# Model Armor

Product: Gemini Enterprise
Coverage: MEDIUM

## Step 02 Summary

Model Armor screens prompts and responses in Gemini Enterprise apps to help protect sensitive information.

## Extended Definition

Model Armor screens prompts and responses in Gemini Enterprise apps to help protect sensitive information.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/gemini/enterprise/docs/configure-assistant](https://docs.cloud.google.com/gemini/enterprise/docs/configure-assistant)
- [https://docs.cloud.google.com/gemini/enterprise/docs/reference/rest/v1/AnswerGenerationSpec](https://docs.cloud.google.com/gemini/enterprise/docs/reference/rest/v1/AnswerGenerationSpec)
- [https://docs.cloud.google.com/gemini/enterprise/docs/assistant-chat](https://docs.cloud.google.com/gemini/enterprise/docs/assistant-chat)
- [https://docs.cloud.google.com/gemini/enterprise/docs/reference/rest/Shared.Types/Binding](https://docs.cloud.google.com/gemini/enterprise/docs/reference/rest/Shared.Types/Binding)

## Supporting Pages

### Configure the assistant \_|\_ Gemini Enterprise \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/gemini/enterprise/docs/configure-assistant](https://docs.cloud.google.com/gemini/enterprise/docs/configure-assistant)
- Source ID: `site-docs-root`
- Final score: 224
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Configure the web setting and location context In the Enable Model Armor section, follow the instructions to configure Model Armor and setup the Model Armor templates.
- In the Enable location context section, use the toggle switch to enable or disable the feature: Switch the toggle on to allow the Gemini Enterprise app to use location data to improve the quality of responses.
- Home Documentation AI and ML Gemini Enterprise Send feedback Configure the assistant Stay organized with collections Save and categorize content based on your preferences.
- Note: This documentation applies to the Standard, Plus, and Frontline editions of Gemini Enterprise.

### AnswerGenerationSpec \_|\_ Gemini Enterprise \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/gemini/enterprise/docs/reference/rest/v1/AnswerGenerationSpec](https://docs.cloud.google.com/gemini/enterprise/docs/reference/rest/v1/AnswerGenerationSpec)
- Source ID: `site-docs-reference`
- Final score: 179
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- JSON representation { "modelSpec" : { object ( ModelSpec ) } , "promptSpec" : { object ( PromptSpec ) } , "includeCitations" : boolean , "answerLanguageCode" : string , "ignoreAdversarialQuery" : boolean , "ignoreNonAnswerSeekingQuery" : boolean , "ignoreJailBreakingQuery" : boolean , "ignoreLowRelevantContent" : boolean } Fields modelSpec object ( ModelSpec ) Answer generation model specification. promptSpec object ( PromptSpec ) Answer generation prompt specification. includeCitations boolean Specifies whether to include citation metadata in the answer.
- Home Documentation AI and ML Gemini Enterprise Reference Send feedback AnswerGenerationSpec Stay organized with collections Save and categorize content based on your preferences.
- Note: This documentation applies to the Standard, Plus, and Frontline editions of Gemini Enterprise.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-10-08 UTC."],[],[]]

### Chat with the assistant \_|\_ Gemini Enterprise \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/gemini/enterprise/docs/assistant-chat](https://docs.cloud.google.com/gemini/enterprise/docs/assistant-chat)
- Source ID: `site-docs-root-2`
- Final score: 179
- Re-rank relevance: N/A

Evidence snippets:
- To understand how the model processes your queries and prompts, click Show thinking .
- Chat with files in connectors Gemini Enterprise can analyze content and generate answers from the following connectors: Note: A Gemini Enterprise admin must enable the required actions for the Gemini Enterprise assistant to access the content, allowing you to chat with the files.
- Home Documentation AI and ML Gemini Enterprise Use Gemini Enterprise Send feedback Chat with the assistant Stay organized with collections Save and categorize content based on your preferences.
- Note: This documentation applies to the Standard, Plus, and Frontline editions of Gemini Enterprise.

### Binding \_|\_ Gemini Enterprise \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/gemini/enterprise/docs/reference/rest/Shared.Types/Binding](https://docs.cloud.google.com/gemini/enterprise/docs/reference/rest/Shared.Types/Binding)
- Source ID: `site-docs-reference`
- Final score: 178
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation AI and ML Gemini Enterprise Reference Send feedback Binding Stay organized with collections Save and categorize content based on your preferences.
- Note: This documentation applies to the Standard, Plus, and Frontline editions of Gemini Enterprise.
- Example (Comparison): title: "Summary size limit" description: "Determines if a summary is less than 100 chars" expression: "document.summary.size() < 100" Example (Equality): title: "Requestor is owner" description: "Determines if requestor is the document owner" expression: "document.owner == request.auth.claims.email" Example (Logic): title: "Public documents" description: "Determine whether the document should be publicly visible" expression: "document.type != 'private' && document.type != 'internal'" Example (data Manipulation): title: "Notification string" description: "Create a notification string with a timestamp." expression: "'New message received at ' + string(document.create time)" The exact variables and functions that may be referenced within an expression are determined by the service that evaluates it.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-01-27 UTC."],[],[]]

