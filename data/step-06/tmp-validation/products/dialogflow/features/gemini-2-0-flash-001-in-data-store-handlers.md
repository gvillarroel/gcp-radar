---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T02:32:45.653Z"
product_name: "Dialogflow"
product_slug: "dialogflow"
feature_name: "Gemini 2.0 Flash 001 in data store handlers"
feature_slug: "gemini-2-0-flash-001-in-data-store-handlers"
latest_feature_date: "2025-03-10"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dialogflow/cx/docs/concept/data-store/settings"
  - "https://docs.cloud.google.com/dialogflow/cx/docs/concept/data-store/handler"
  - "https://docs.cloud.google.com/dialogflow/cx/docs/concept/data-store/hybrid"
keywords:
  - "handlers"
  - "gemini"
  - "flash"
  - "store"
---

# Gemini 2.0 Flash 001 in data store handlers

Product: Dialogflow
Coverage: MEDIUM

## Step 02 Summary

Dialogflow CX data store handlers now support the Gemini 2.0 Flash 001 model as a Preview feature in selected regions.

## Extended Definition

Dialogflow CX data store handlers now support the Gemini 2.0 Flash 001 model as a Preview feature in selected regions.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/dialogflow/cx/docs/concept/data-store/settings](https://docs.cloud.google.com/dialogflow/cx/docs/concept/data-store/settings)
- [https://docs.cloud.google.com/dialogflow/cx/docs/concept/data-store/handler](https://docs.cloud.google.com/dialogflow/cx/docs/concept/data-store/handler)
- [https://docs.cloud.google.com/dialogflow/cx/docs/concept/data-store/hybrid](https://docs.cloud.google.com/dialogflow/cx/docs/concept/data-store/hybrid)

## Supporting Pages

### Data store tool settings \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/data-store/settings](https://docs.cloud.google.com/dialogflow/cx/docs/concept/data-store/settings)
- Source ID: `site-docs-root`
- Final score: 125
- Re-rank relevance: N/A

Evidence snippets:
- It is specifically optimized for voice interactions with optimized latency. gemini-2.5-flash GA Gemini 2.5 flash gemini-2.5-flash-lite GA Gemini 2.5 flash lite gemini-2.0-flash-001 GA Gemini 2.0 flash gemini-2.0-flash-lite-001 GA Gemini 2.0 flash lite gemini-2.0-flash-lite-001-voice-mode GA Gemini 2.0 flash lite optimized for voice.
- It is optimized for both voice and text with optimized latency gemini-2.5-flash GA Gemini 2.5 flash gemini-2.5-flash-lite GA Gemini 2.5 flash lite gemini-2.0-flash-001 GA Gemini 2.0 flash gemini-2.0-flash-lite-001 GA Gemini 2.0 flash lite All listed models are available in all supported languages and supported regions .
- Previous arrow back Data store tools Next Data store performance improvements arrow forward Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Conversation History: $conversation Human: $original -query Search Query: Payload settings Payload settings provide a way to add the data store snippets as rich content in the response payload, which is rendered in the messenger .

### Data store tools \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/data-store/handler](https://docs.cloud.google.com/dialogflow/cx/docs/concept/data-store/handler)
- Source ID: `site-docs-root`
- Final score: 89
- Re-rank relevance: N/A

Evidence snippets:
- Data store handlers are a special type of state handler that can provide LLM generated agent responses based on your website content and uploaded data.
- Using these data store handlers, your agent can have conversations about the content with your end-users.
- The Dialogflow CX Messenger integration is a particularly good option for data store handlers.
- Data store handlers Note: Data store handlers are excluded from the Dialogflow SLA .

### Data store hybrid agents \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/data-store/hybrid](https://docs.cloud.google.com/dialogflow/cx/docs/concept/data-store/hybrid)
- Source ID: `site-docs-root`
- Final score: 81
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- As part of this upgrade, you may wish to delete or temporarily disable intent routes (while testing data store handlers) for certain conversation scenarios from your agent, because the data store handlers can handle those scenarios more simply.
- Recommended scenarios The following scenarios are recommended for data store handlers: Questions that can be answered by your organization's documents or website.
- The following scenarios are not recommended for data store handlers: Content that does not have answers to desired questions.
- Previous arrow back Data store performance improvements Next Data store search configuration arrow forward Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

