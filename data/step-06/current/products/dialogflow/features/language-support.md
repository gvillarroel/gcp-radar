---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:17:30.432Z"
product_name: "Dialogflow"
product_slug: "dialogflow"
feature_name: "Language support"
feature_slug: "language-support"
latest_feature_date: "2022-11-07"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-multilingual"
  - "https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings"
  - "https://docs.cloud.google.com/dialogflow/es/docs/agents-multilingual"
keywords:
  - "language"
  - "dialogflow"
  - "cx"
  - "supports"
  - "additional"
  - "generally"
  - "available"
  - "languages"
---

# Language support

Product: Dialogflow
Coverage: MEDIUM

## Step 02 Summary

Dialogflow CX supports additional generally available languages for agent interactions; Dialogflow ES supports additional preview languages for agent interactions.

## Extended Definition

Dialogflow CX supports additional generally available languages for agent interactions; Dialogflow ES supports additional preview languages for agent interactions.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-multilingual](https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-multilingual)
- [https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings](https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings)
- [https://docs.cloud.google.com/dialogflow/es/docs/agents-multilingual](https://docs.cloud.google.com/dialogflow/es/docs/agents-multilingual)

## Supporting Pages

### Multilingual agents \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-multilingual](https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-multilingual)
- Source ID: `site-docs-root`
- Final score: 143
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Dialogflow supports many languages.
- That means Dialogflow is able to differentiate among languages like ["en", "pt-br"], but not among variants of the same language like ["zh-tw", "zh-cn"] or ["pt", "pt-br"].
- Note: At the moment, language detection only supports identifying languages with major structural differences, and not variants of the same language.
- Add a language Note: As a best practice, you should complete your agent in the default language before adding additional languages.

### Agent settings \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings](https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings)
- Source ID: `site-docs-root`
- Final score: 131
- Re-rank relevance: N/A

Evidence snippets:
- Languages settings Add additional language support to your agent.
- Speech and IVR Speech options Text-to-Speech link Languages and voices link You can select the language and voice used for speech synthesis.
- Dialogflow CX learns from training phrases that you provide and the language models built into Dialogflow CX.
- This is to accommodate different languages performing best at different classification thresholds.

### Multilingual agents \_|\_ Dialogflow ES \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/es/docs/agents-multilingual](https://docs.cloud.google.com/dialogflow/es/docs/agents-multilingual)
- Source ID: `site-iam-reference`
- Final score: 115
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Dialogflow supports many languages.
- Add a language Note: As a best practice, you should complete your agent in the default language before adding additional languages.
- The language you choose when creating an agent is set as the default language, and you can add additional languages.
- Requests that do not supply an agent's language When Dialogflow receives a request that does not supply a language supported by the agent, the following rules apply: When a request does not supply a language, Dialogflow automatically determines the input language and responds in that language if automatic language detection is enabled .

