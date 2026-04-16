---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T02:32:45.804Z"
product_name: "Dialogflow"
product_slug: "dialogflow"
feature_name: "Enhanced Speech Models"
feature_slug: "enhanced-speech-models"
latest_feature_date: "2018-07-24"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dialogflow/es/docs/data-logging"
  - "https://docs.cloud.google.com/dialogflow/es/docs/agents-settings"
  - "https://docs.cloud.google.com/dialogflow/cx/docs/concept/best-practices"
keywords:
  - "enhanced"
  - "improve"
  - "recognition"
  - "performance"
  - "models"
  - "cases"
  - "speech"
---

# Enhanced Speech Models

Product: Dialogflow
Coverage: MEDIUM

## Step 02 Summary

Enhanced Speech Models improve speech recognition performance for supported use cases.

## Extended Definition

Enhanced Speech Models improve speech recognition performance for supported use cases.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/dialogflow/es/docs/data-logging](https://docs.cloud.google.com/dialogflow/es/docs/data-logging)
- [https://docs.cloud.google.com/dialogflow/es/docs/agents-settings](https://docs.cloud.google.com/dialogflow/es/docs/agents-settings)
- [https://docs.cloud.google.com/dialogflow/cx/docs/concept/best-practices](https://docs.cloud.google.com/dialogflow/cx/docs/concept/best-practices)

## Supporting Pages

### Speech data logging \_|\_ Dialogflow ES \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/es/docs/data-logging](https://docs.cloud.google.com/dialogflow/es/docs/data-logging)
- Source ID: `site-iam-reference`
- Final score: 167
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- With Dialogflow Essentials, you can opt in to speech data logging to access enhanced speech models , which use customer data for speech recognition improvements.
- Toggle Enable enhanced speech models and data logging off.
- Scroll to the Improve Speech Recognition Quality section.
- Toggle Enable enhanced speech models and data logging on.

### Agent settings \_|\_ Dialogflow ES \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/es/docs/agents-settings](https://docs.cloud.google.com/dialogflow/es/docs/agents-settings)
- Source ID: `site-iam-reference`
- Final score: 123
- Re-rank relevance: N/A

Evidence snippets:
- The following settings are available: Improve Speech Recognition Quality Enable Enhanced Speech Models and Data Logging : See Data logging and enhanced speech models .
- Warnings and best practices: Spell correction can't correct ASR (automatic speech recognition) errors, so we don't recommend enabling it for agents using ASR inputs.
- These are the settings for speech recognition and speech synthesis.
- The following are included in the export of an agent: Intents Entities Most agent settings (see list below for excluded settings) The following are not included in the export of an agent and are not overwritten when importing or restoring: Agent name Inline editor files package.json and index.json Integration settings Edition Knowledge bases and knowledge documents Speech settings Interaction logs Maximum agent size (unzipped content) for agent import/restore should not exceed 50 MB.

### Service use best practices \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/best-practices](https://docs.cloud.google.com/dialogflow/cx/docs/concept/best-practices)
- Source ID: `site-docs-root`
- Final score: 102
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Performance per operation The following table provides information about the typical performance of Dialogflow operations: Action Notes Flow actions: state handlers Fastest operation Flows: intent detection (text) Fastest operation Flows: parameter detection (text) Fast operation Speech recognition (streaming) Data is processed and responses are returned as soon as possible.
- Client reuse You can improve the performance of your application by reusing Client client library instances for the duration of your application's execution lifetime.
- Key Notes: Streaming: For streaming calls (speech recognition and synthesis), data is processed as it arrives, and responses are returned as soon as possible.
- When building monitoring and alerting tools, note that Large Language Models (LLMs) and speech processing are typically handled using streaming methods.

