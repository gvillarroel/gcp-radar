---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T02:32:45.751Z"
product_name: "Dialogflow"
product_slug: "dialogflow"
feature_name: "IDENTITY system function"
feature_slug: "identity-system-function"
latest_feature_date: "2022-01-19"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings"
  - "https://docs.cloud.google.com/dialogflow/es/docs/agents-design"
  - "https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-design"
keywords:
  - "composite"
  - "identity"
  - "copying"
  - "parameter"
  - "provides"
  - "system"
---

# IDENTITY system function

Product: Dialogflow
Coverage: MEDIUM

## Step 02 Summary

Dialogflow CX provides the IDENTITY system function for copying composite parameter objects in parameter presets.

## Extended Definition

Dialogflow CX provides the IDENTITY system function for copying composite parameter objects in parameter presets.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings](https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings)
- [https://docs.cloud.google.com/dialogflow/es/docs/agents-design](https://docs.cloud.google.com/dialogflow/es/docs/agents-design)
- [https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-design](https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-design)

## Supporting Pages

### Agent settings \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings](https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings)
- Source ID: `site-docs-root`
- Final score: 102
- Re-rank relevance: N/A

Evidence snippets:
- Enable consent-based end-user input redaction If this setting is enabled, it lets you use a special session parameter to control whether end-user input and parameters are redacted from conversation history and Cloud logging , by default the session parameter is true .
- Enable consent-based end-user input redaction If this setting is enabled, it lets you use a special session parameter to control whether end-user input and parameters are redacted from conversation history and Cloud logging .
- Then, set the session parameter to false (no redaction) in the parameter presets of the "yes intent" route in fulfillment , and to true (redaction occurs) in the parameter preset of the "no intent" route.
- Then, set the session parameter to false (no redaction) in the parameter presets of the "yes intent" route in fulfillment , and to true (redaction occurs) in the parameter preset of the "no intent" route.

### "General agent design best practices \_|\_ Dialogflow CX \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-design](https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-design)
- Source ID: `site-docs-root`
- Final score: 100
- Re-rank relevance: N/A

Evidence snippets:
- The following lists the conversation control granularity of agent resources in increasing granularity order: Agents (one agent handles all conversations) Flows (one flow handles one or more related conversation topics) Pages (one page handles one or more related conversation turns) Routes (one route handles a user intent or condition check) Intent parameters versus form parameters The main way in which your system gets structured data from the end-user is with parameters .
- For example, the following table shows good and bad ways to annotate with the @sys.date system entity: Good Bad September 7th departure September 7th departure Leaving on July 4 Leaving on July 4 Use semantically meaningful annotations for system entities The semantic meaning of a training phrase part selected for an annotation can be affected by the rest of the text in a training phrase.
- For example: Parameter Value webhook-error-count 0 Create a webhook error page that handles webhook error events: The entry fulfillment should acknowledge the failure for the end-user, and it should increment an error counter session parameter using a fulfillment parameter preset .
- For example: Parameter Value webhook-error-count $sys.func.ADD($session.params.webhook-error-count, 1) Define a condition route that has a condition that the error count is less than the maximum allowed. (for example, $session.params.webhook-error-count <= 3 ).

### "General agent design best practices \_|\_ Dialogflow ES \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/dialogflow/es/docs/agents-design](https://docs.cloud.google.com/dialogflow/es/docs/agents-design)
- Source ID: `site-iam-reference`
- Final score: 98
- Re-rank relevance: N/A

Evidence snippets:
- For example: I am 7 years old (semantic meaning of annotated text is a person's age) The contract is valid for 7 years (semantic meaning of annotated text is a time duration) Dialogflow's machine learning models consider semantic meaning when matching system entities.
- For example, if you are providing time values that should be parsed as @sys.time system entities in training phrases, do not provide the same time in all training phrases.
- As a rule, try to have at least three times as many training phrases as parameters and at least 10-20 (depending on complexity of intent) training phrases.
- Agent design best practices This section provides a list of best practices for a robust, accurate, performant, and usable agent.

