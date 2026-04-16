---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:17:30.497Z"
product_name: "Dialogflow"
product_slug: "dialogflow"
feature_name: "Automatic agent training control"
feature_slug: "automatic-agent-training-control"
latest_feature_date: "2019-10-01"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dialogflow/es/docs/agents-settings"
  - "https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings"
  - "https://docs.cloud.google.com/dialogflow/es/docs/agents-design"
keywords:
  - "automatic"
  - "agent"
  - "training"
  - "control"
  - "dialogflow"
  - "allows"
  - "disabled"
---

# Automatic agent training control

Product: Dialogflow
Coverage: MEDIUM

## Step 02 Summary

Dialogflow allows automatic agent training to be disabled.

## Extended Definition

Dialogflow allows automatic agent training to be disabled.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dialogflow/es/docs/agents-settings](https://docs.cloud.google.com/dialogflow/es/docs/agents-settings)
- [https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings](https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings)
- [https://docs.cloud.google.com/dialogflow/es/docs/agents-design](https://docs.cloud.google.com/dialogflow/es/docs/agents-design)

## Supporting Pages

### Agent settings \_|\_ Dialogflow ES \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/es/docs/agents-settings](https://docs.cloud.google.com/dialogflow/es/docs/agents-settings)
- Source ID: `site-iam-reference`
- Final score: 160
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Note: After restore or import , the agent is retrained, even if the automatic training is disabled.
- An agent learns from training phrases that you provide and the language models built into Dialogflow.
- Automatic Training : Enable or disable automatic agent training each time the agent is modified.
- To access these settings: Go to the Dialogflow ES console Select your agent near the top of the left sidebar menu Click the settings settings button next to the agent name Note: If you're working on a small screen, and the sidebar menu is hidden, click the menu menu button in the upper left corner.

### Agent settings \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings](https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings)
- Source ID: `site-docs-root`
- Final score: 156
- Re-rank relevance: N/A

Evidence snippets:
- If you are using telephony gateway, make sure the Dialogflow Service Agent service account service- PROJECT NUMBER @gcp-sa-dialogflow.iam.gserviceaccount.com is granted with "AutoML Predictor" in your custom voice project.
- If you are using telephony gateway, make sure the Dialogflow Service Agent service account service- PROJECT NUMBER @gcp-sa-dialogflow.iam.gserviceaccount.com is granted with "AutoML Predictor" in your custom voice project.
- Home Documentation AI and ML Dialogflow Dialogflow CX Send feedback Agent settings Stay organized with collections Save and categorize content based on your preferences.
- Warnings and best practices: Spell correction can't correct ASR (automatic speech recognition) errors, so we don't recommend enabling it for agents using ASR inputs.

### "General agent design best practices \_|\_ Dialogflow ES \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/dialogflow/es/docs/agents-design](https://docs.cloud.google.com/dialogflow/es/docs/agents-design)
- Source ID: `site-iam-reference`
- Final score: 150
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Training phrases for intents with ML disabled are not used when training your agent.
- A user query that is very similar to a training phrase in an intent with ML disabled may be matched to the wrong intent if other intents with ML enabled have a slight resemblance to the user query.
- Home Documentation AI and ML Dialogflow Dialogflow ES Send feedback General agent design best practices Stay organized with collections Save and categorize content based on your preferences.
- The complexity of your agent will determine the actual number of training phrases each intent should have, but 10-20 (depending on complexity of intent) is a good minimum.

