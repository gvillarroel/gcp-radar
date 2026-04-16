---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:17:30.512Z"
product_name: "Dialogflow"
product_slug: "dialogflow"
feature_name: "Automatic Spell Correction"
feature_slug: "automatic-spell-correction"
latest_feature_date: "2018-07-24"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dialogflow/es/docs/agents-settings"
  - "https://docs.cloud.google.com/dialogflow/es/docs/agents-design"
  - "https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings"
keywords:
  - "automatic"
  - "spell"
  - "correction"
  - "corrects"
  - "misspellings"
  - "end"
  - "user"
  - "input"
---

# Automatic Spell Correction

Product: Dialogflow
Coverage: MEDIUM

## Step 02 Summary

Automatic Spell Correction corrects misspellings in end-user input.

## Extended Definition

Automatic Spell Correction corrects misspellings in end-user input.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dialogflow/es/docs/agents-settings](https://docs.cloud.google.com/dialogflow/es/docs/agents-settings)
- [https://docs.cloud.google.com/dialogflow/es/docs/agents-design](https://docs.cloud.google.com/dialogflow/es/docs/agents-design)
- [https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings](https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings)

## Supporting Pages

### Agent settings \_|\_ Dialogflow ES \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/es/docs/agents-settings](https://docs.cloud.google.com/dialogflow/es/docs/agents-settings)
- Source ID: `site-iam-reference`
- Final score: 173
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Automatic Spell Correction : If this is enabled and user input has a spelling or grammar mistake, an intent will be matched as though it was written correctly.
- Warnings and best practices: Spell correction can't correct ASR (automatic speech recognition) errors, so we don't recommend enabling it for agents using ASR inputs.
- Spell correction is trained on general user queries.
- Note: If original and corrected user input match different intents, the intent matching the original user input is selected.

### Agent settings \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings](https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings)
- Source ID: `site-docs-root`
- Final score: 139
- Re-rank relevance: N/A

Evidence snippets:
- The following intent training settings are available: Spell correction link If this is enabled and end-user input has a spelling or grammar mistake, an intent will be matched as though it was written correctly.
- Warnings and best practices: Spell correction can't correct ASR (automatic speech recognition) errors, so we don't recommend enabling it for agents using ASR inputs.
- Warnings and best practices: Spell correction can't correct ASR (automatic speech recognition) errors, so we don't recommend enabling it for agents using ASR inputs.
- The following agent-wide ML settings are available: Allow ML to correct spelling If this is enabled and end-user input has a spelling or grammar mistake, an intent will be matched as though it was written correctly.

### "General agent design best practices \_|\_ Dialogflow ES \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/dialogflow/es/docs/agents-design](https://docs.cloud.google.com/dialogflow/es/docs/agents-design)
- Source ID: `site-iam-reference`
- Final score: 123
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If you are using text input, you should enable automatic spell correction .
- Enable automatic spell correction.
- For example, if the initial prompt is "What color do you want?" and the user replies with "jungle parrot", a fallback/follow-up intent should rephrase the question, like "Sorry, what color was that?" Agents should have customized, brand-specific responses in the default fallback intent.
- For example, if your agent handles requests for the weather and a user asks "Weather in San Francisco", make sure to add contexts to support further requests like "How about tomorrow?" Agents should have follow-ups for yes, no, cancel, next, back, etc.

