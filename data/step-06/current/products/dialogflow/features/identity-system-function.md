---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:17:30.446Z"
product_name: "Dialogflow"
product_slug: "dialogflow"
feature_name: "IDENTITY system function"
feature_slug: "identity-system-function"
latest_feature_date: "2022-01-19"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dialogflow/docs/intents-actions-parameters"
  - "https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-design"
  - "https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings"
keywords:
  - "identity"
  - "system"
  - "dialogflow"
  - "cx"
  - "provides"
  - "copying"
  - "composite"
  - "parameter"
---

# IDENTITY system function

Product: Dialogflow
Coverage: MEDIUM

## Step 02 Summary

Dialogflow CX provides the IDENTITY system function for copying composite parameter objects in parameter presets.

## Extended Definition

Dialogflow CX provides the IDENTITY system function for copying composite parameter objects in parameter presets.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dialogflow/docs/intents-actions-parameters](https://docs.cloud.google.com/dialogflow/docs/intents-actions-parameters)
- [https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-design](https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-design)
- [https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings](https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings)

## Supporting Pages

### Actions and parameters \_|\_ Dialogflow ES \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/docs/intents-actions-parameters](https://docs.cloud.google.com/dialogflow/docs/intents-actions-parameters)
- Source ID: `site-docs-root-2`
- Final score: 103
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You can retrieve the explicit partial match, where Dialogflow substitutes the unknown part with U s using the following format: $parameter-name.partial You can retrieve the nearest date in the past using the following format: $parameter-name.recent For example, if today's date is August 11, 2021, your parameter name is date , and the user says "August 13": Parameter reference Resolved value $date 2021-08-13 $date.partial UUUU-08-13 $date.recent 2020-08-13 Parameter reference for a composite entity Composite entities are entities that contain other sub-entities.
- Parameter reference for ambiguous dates When a parameter is associated with the @sys.date system entity, and the end-user supplies a partial date (not specifying month, day, and year), Dialogflow will match to the nearest date in the future.
- When an intent is matched at runtime, Dialogflow provides parameter data to your fulfillment webhook request or the API interaction response.
- Parameters When an intent is matched at runtime, Dialogflow provides the extracted values from the end-user expression as parameters .

### Agent settings \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings](https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings)
- Source ID: `site-docs-root`
- Final score: 102
- Re-rank relevance: N/A

Evidence snippets:
- Enable consent-based end-user input redaction If this setting is enabled, it lets you use a special session parameter to control whether end-user input and parameters are redacted from conversation history and Cloud logging , by default the session parameter is true .
- Enable consent-based end-user input redaction If this setting is enabled, it lets you use a special session parameter to control whether end-user input and parameters are redacted from conversation history and Cloud logging .
- If you are using telephony gateway, make sure the Dialogflow Service Agent service account service- PROJECT NUMBER @gcp-sa-dialogflow.iam.gserviceaccount.com is granted with "AutoML Predictor" in your custom voice project.
- If you are using telephony gateway, make sure the Dialogflow Service Agent service account service- PROJECT NUMBER @gcp-sa-dialogflow.iam.gserviceaccount.com is granted with "AutoML Predictor" in your custom voice project.

### "General agent design best practices \_|\_ Dialogflow CX \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-design](https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-design)
- Source ID: `site-docs-root`
- Final score: 100
- Re-rank relevance: N/A

Evidence snippets:
- The following lists the conversation control granularity of agent resources in increasing granularity order: Agents (one agent handles all conversations) Flows (one flow handles one or more related conversation topics) Pages (one page handles one or more related conversation turns) Routes (one route handles a user intent or condition check) Intent parameters versus form parameters The main way in which your system gets structured data from the end-user is with parameters .
- For example: Annotated training phrase Semantic meaning of annotated text I am 7 years old A person's age The contract is valid for 7 years A time duration Dialogflow CX's machine learning models consider semantic meaning when matching system entities.
- Dialogflow CX API If none of the ready-to-use integrations are suitable, or you would like to customize the interface for your system, you can use the Dialogflow CX API directly .
- For example, the following table shows good and bad ways to annotate with the @sys.date system entity: Good Bad September 7th departure September 7th departure Leaving on July 4 Leaving on July 4 Use semantically meaningful annotations for system entities The semantic meaning of a training phrase part selected for an annotation can be affected by the rest of the text in a training phrase.

