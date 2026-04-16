---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:17:30.518Z"
product_name: "Dialogflow"
product_slug: "dialogflow"
feature_name: "Negative Examples"
feature_slug: "negative-examples"
latest_feature_date: "2018-05-08"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings"
  - "https://docs.cloud.google.com/dialogflow/es/docs/agents-design"
  - "https://docs.cloud.google.com/dialogflow/es/docs/agents-settings"
keywords:
  - "negative"
  - "examples"
  - "let"
  - "you"
  - "add"
  - "mismatched"
  - "phrases"
  - "default"
---

# Negative Examples

Product: Dialogflow
Coverage: MEDIUM

## Step 02 Summary

Negative Examples let you add mismatched phrases to the Default Fallback Intent to improve intent matching.

## Extended Definition

Negative Examples let you add mismatched phrases to the Default Fallback Intent to improve intent matching.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings](https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings)
- [https://docs.cloud.google.com/dialogflow/es/docs/agents-design](https://docs.cloud.google.com/dialogflow/es/docs/agents-design)
- [https://docs.cloud.google.com/dialogflow/es/docs/agents-settings](https://docs.cloud.google.com/dialogflow/es/docs/agents-settings)

## Supporting Pages

### Agent settings \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings](https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings)
- Source ID: `site-docs-root`
- Final score: 150
- Re-rank relevance: N/A

Evidence snippets:
- You can fix this by adding commonly mismatched phrases to negative examples .
- You can fix this by adding commonly mismatched phrases to negative examples .
- Playbook few-shot examples: Are added either in order (by default) or by an algorithm that you choose (such as regular expression best match ordering).
- Playbook few-shot examples: Are added either in order (by default) or by an algorithm that you choose (such as regular expression best match ordering).

### "General agent design best practices \_|\_ Dialogflow ES \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/dialogflow/es/docs/agents-design](https://docs.cloud.google.com/dialogflow/es/docs/agents-design)
- Source ID: `site-iam-reference`
- Final score: 114
- Re-rank relevance: N/A

Evidence snippets:
- Negative examples prevent user queries that are slightly similar to training phrases from unintentionally matching intents.
- Your training phrases should have a variety of time examples like: "7 a.m.", "8 p.m.", "9 o'clock".
- Agents should provide negative examples .
- For example, if the initial prompt is "What color do you want?" and the user replies with "jungle parrot", a fallback/follow-up intent should rephrase the question, like "Sorry, what color was that?" Agents should have customized, brand-specific responses in the default fallback intent.

### Agent settings \_|\_ Dialogflow ES \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/es/docs/agents-settings](https://docs.cloud.google.com/dialogflow/es/docs/agents-settings)
- Source ID: `site-iam-reference`
- Final score: 102
- Re-rank relevance: N/A

Evidence snippets:
- You can fix this by adding commonly mismatched phrases to negative examples.
- Note: Before adjusting this value, you should try adding negative examples .
- By default, Dialogflow updates your agent's machine learning model every time you make changes to intents and entities, import or restore an agent, or train your agent.
- Text to Speech Enable Automatic Text to Speech : Automatically convert default text responses to speech in all conversations.

