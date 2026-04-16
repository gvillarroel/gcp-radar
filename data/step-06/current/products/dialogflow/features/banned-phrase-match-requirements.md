---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:17:30.330Z"
product_name: "Dialogflow"
product_slug: "dialogflow"
feature_name: "Banned phrase match requirements"
feature_slug: "banned-phrase-match-requirements"
latest_feature_date: "2024-12-19"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings"
  - "https://docs.cloud.google.com/dialogflow/cx/docs/basics"
  - "https://docs.cloud.google.com/dialogflow/cx/docs/concept/data-store/performance"
keywords:
  - "banned"
  - "phrase"
  - "match"
  - "requirements"
  - "dialogflow"
  - "cx"
  - "lets"
  - "you"
---

# Banned phrase match requirements

Product: Dialogflow
Coverage: MEDIUM

## Step 02 Summary

Dialogflow CX lets you configure banned phrases to use either partial-match or full-match behavior across playbooks, datastores, and generators.

## Extended Definition

Dialogflow CX lets you configure banned phrases to use either partial-match or full-match behavior across playbooks, datastores, and generators.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings](https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings)
- [https://docs.cloud.google.com/dialogflow/cx/docs/basics](https://docs.cloud.google.com/dialogflow/cx/docs/basics)
- [https://docs.cloud.google.com/dialogflow/cx/docs/concept/data-store/performance](https://docs.cloud.google.com/dialogflow/cx/docs/concept/data-store/performance)

## Supporting Pages

### Agent settings \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings](https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings)
- Source ID: `site-docs-root`
- Final score: 113
- Re-rank relevance: N/A

Evidence snippets:
- Generative AI settings The following generative AI settings are available: General Banned phrases List of phrases that are banned for generative AI.
- ML settings Dialogflow CX uses machine learning (ML) algorithms to understand end-user inputs, match them to intents, and extract structured data.
- If a banned phrase appears in the prompt or the generated response, the agent will return a fallback response instead.
- Be aware that the list of banned phrases has consequences on every query and LLM call and will increase latency.

### Flow-based agent basics \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/basics](https://docs.cloud.google.com/dialogflow/cx/docs/basics)
- Source ID: `site-docs-root`
- Final score: 89
- Re-rank relevance: N/A

Evidence snippets:
- When end-user input resembles one of these phrases, Dialogflow CX matches the intent.
- There are two types of state handlers with differing handler requirements: Term Definition Routes Routes are called when an end-user input matches an intent and/or some condition on the session status is met.
- You don't have to define every possible example, because Dialogflow CX's built-in machine learning expands on your list with other, similar phrases.
- Dialogflow CX provides predefined system entities that can match many common types of data.

### "Data store performance improvements \_|\_ Dialogflow CX \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/data-store/performance](https://docs.cloud.google.com/dialogflow/cx/docs/concept/data-store/performance)
- Source ID: `site-docs-root`
- Final score: 84
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Handle undesired intent matches If your agent is matching intents when it should be using a data store handler, you can try the following to correct this: Delete or modify training phrases that are vague, so that all of your training phrases precisely handle the desired intention and do not conflict with your data store content.
- To ban certain phrases, see agent settings: banned phrases .
- Home Documentation AI and ML Dialogflow Dialogflow CX Send feedback Data store performance improvements Stay organized with collections Save and categorize content based on your preferences.
- Don't activate this setting if you have any of the following query requirements: Specific data store filters to be populated using the instructions.

