---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:17:30.486Z"
product_name: "Dialogflow"
product_slug: "dialogflow"
feature_name: "Auto speech adaptation"
feature_slug: "auto-speech-adaptation"
latest_feature_date: "2020-05-05"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings"
  - "https://docs.cloud.google.com/dialogflow/es/docs/tutorials/sequences/create-customize-agent"
  - "https://docs.cloud.google.com/dialogflow/es/docs/agents-settings"
keywords:
  - "auto"
  - "speech"
  - "adaptation"
  - "dialogflow"
  - "provides"
  - "recognition"
  - "tuning"
  - "improves"
---

# Auto speech adaptation

Product: Dialogflow
Coverage: MEDIUM

## Step 02 Summary

Dialogflow provides auto speech adaptation for speech recognition tuning; Auto Speech Adaptation improves agent speech recognition accuracy.

## Extended Definition

Dialogflow provides auto speech adaptation for speech recognition tuning; Auto Speech Adaptation improves agent speech recognition accuracy.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings](https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings)
- [https://docs.cloud.google.com/dialogflow/es/docs/tutorials/sequences/create-customize-agent](https://docs.cloud.google.com/dialogflow/es/docs/tutorials/sequences/create-customize-agent)
- [https://docs.cloud.google.com/dialogflow/es/docs/agents-settings](https://docs.cloud.google.com/dialogflow/es/docs/agents-settings)

## Supporting Pages

### Agent settings \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings](https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings)
- Source ID: `site-docs-root`
- Final score: 167
- Re-rank relevance: N/A

Evidence snippets:
- Warnings and best practices: Spell correction can't correct ASR (automatic speech recognition) errors, so we don't recommend enabling it for agents using ASR inputs.
- Warnings and best practices: Spell correction can't correct ASR (automatic speech recognition) errors, so we don't recommend enabling it for agents using ASR inputs.
- Speech-to-Text link Enable auto speech adaptation link See Auto speech adaptation .
- Speech-to-Text Enable auto speech adaptation See Auto speech adaptation .

### Before you begin \_|\_ Dialogflow ES \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/es/docs/tutorials/sequences/create-customize-agent](https://docs.cloud.google.com/dialogflow/es/docs/tutorials/sequences/create-customize-agent)
- Source ID: `site-iam-reference`
- Final score: 143
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- These entities must conform to the auto speech adaptation regexp enitity guidelines to ensure the speech recognition is tuned to recognize spelled-out sequences.
- Create the regexp sequence entities We need to use a regexp entity to capture sequences so that auto speech adaptation will know to listen for "ABC" instead of "a bee sea".
- This is important for two reasons: This regexp follows the auto speech adaptation requirements for enabling the "spelled-out sequence" recognizer mode.
- Just be sure that you enable auto speech adaptation in the agent settings.

### Agent settings \_|\_ Dialogflow ES \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/es/docs/agents-settings](https://docs.cloud.google.com/dialogflow/es/docs/agents-settings)
- Source ID: `site-iam-reference`
- Final score: 127
- Re-rank relevance: N/A

Evidence snippets:
- Warnings and best practices: Spell correction can't correct ASR (automatic speech recognition) errors, so we don't recommend enabling it for agents using ASR inputs.
- Enable Auto Speech Adaptation : See Auto speech adaptation .
- The following settings are available: Improve Speech Recognition Quality Enable Enhanced Speech Models and Data Logging : See Data logging and enhanced speech models .
- Text to Speech Enable Automatic Text to Speech : Automatically convert default text responses to speech in all conversations.

