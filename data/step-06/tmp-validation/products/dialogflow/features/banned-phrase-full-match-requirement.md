---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T02:32:45.655Z"
product_name: "Dialogflow"
product_slug: "dialogflow"
feature_name: "Banned phrase full-match requirement"
feature_slug: "banned-phrase-full-match-requirement"
latest_feature_date: "2025-01-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings"
  - "https://docs.cloud.google.com/dialogflow/cx/docs/basics"
  - "https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-design"
keywords:
  - "requirement"
  - "banned"
  - "match"
  - "full"
  - "phrase"
---

# Banned phrase full-match requirement

Product: Dialogflow
Coverage: MEDIUM

## Step 02 Summary

Dialogflow CX can require banned phrases to match the entire input exactly before the ban is triggered.

## Extended Definition

Dialogflow CX can require banned phrases to match the entire input exactly before the ban is triggered.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings](https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings)
- [https://docs.cloud.google.com/dialogflow/cx/docs/basics](https://docs.cloud.google.com/dialogflow/cx/docs/basics)
- [https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-design](https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-design)

## Supporting Pages

### Agent settings \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings](https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings)
- Source ID: `site-docs-root`
- Final score: 110
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

### "General agent design best practices \_|\_ Dialogflow CX \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-design](https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-design)
- Source ID: `site-docs-root`
- Final score: 77
- Re-rank relevance: N/A

Evidence snippets:
- For example, consider end-user input like: "How can I make an international call with Plan A?" "Using international data roaming with Plan B." Do not create entity types for both the actions and the plans, like the following: Actions entity type Plans entity type "How can I make an international call" "Plan A" "Using international data roaming" "Plan B" Instead, you should use training phrases and intent matching to capture the actions and entities to capture the plans.
- For example: Annotated training phrase Semantic meaning of annotated text I am 7 years old A person's age The contract is valid for 7 years A time duration Dialogflow CX's machine learning models consider semantic meaning when matching system entities.
- For example: The stock you are considering for purchase has just increased in value by 10%. (custom event) Can you rephrase that? ( no-match event ) Initial prompts for forms : This fulfillment is called when the agent performs form filling.
- Punctuation : For example, "can you please help?" and "can you please help!?" Annotation consistency The training phrase part selected for an annotation should include all of, and no more than, the text that is necessary to match an entity.

