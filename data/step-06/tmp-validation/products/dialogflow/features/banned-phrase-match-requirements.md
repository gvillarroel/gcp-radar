---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T02:32:45.656Z"
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
  - "requirements"
  - "banned"
  - "match"
  - "phrase"
  - "lets"
---

# Banned phrase match requirements

Product: Dialogflow
Coverage: MEDIUM

## Step 02 Summary

Dialogflow CX lets you configure banned phrases to use either partial-match or full-match behavior across playbooks, datastores, and generators.

## Extended Definition

Dialogflow CX lets you configure banned phrases to use either partial-match or full-match behavior across playbooks, datastores, and generators.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

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
- If a banned phrase appears in the prompt or the generated response, the agent will return a fallback response instead.
- Be aware that the list of banned phrases has consequences on every query and LLM call and will increase latency.
- If a banned phrase appears in the prompt or the generated response, the generation will fail.

### Flow-based agent basics \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/basics](https://docs.cloud.google.com/dialogflow/cx/docs/basics)
- Source ID: `site-docs-root`
- Final score: 89
- Re-rank relevance: N/A

Evidence snippets:
- There are two types of state handlers with differing handler requirements: Term Definition Routes Routes are called when an end-user input matches an intent and/or some condition on the session status is met.
- When end-user input resembles one of these phrases, Dialogflow CX matches the intent.
- Handlers have three general types of data: Term Definition Handler requirements These are the requirements that must be satisfied for the handler to have any effect on the session.
- You don't have to define every possible example, because Dialogflow CX's built-in machine learning expands on your list with other, similar phrases.

### "Data store performance improvements \_|\_ Dialogflow CX \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/data-store/performance](https://docs.cloud.google.com/dialogflow/cx/docs/concept/data-store/performance)
- Source ID: `site-docs-root`
- Final score: 72
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Handle undesired intent matches If your agent is matching intents when it should be using a data store handler, you can try the following to correct this: Delete or modify training phrases that are vague, so that all of your training phrases precisely handle the desired intention and do not conflict with your data store content.
- To ban certain phrases, see agent settings: banned phrases .
- Don't activate this setting if you have any of the following query requirements: Specific data store filters to be populated using the instructions.
- Use negative examples to avoid intent matching.

