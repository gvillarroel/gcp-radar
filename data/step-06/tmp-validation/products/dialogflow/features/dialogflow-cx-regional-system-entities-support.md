---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T02:32:45.737Z"
product_name: "Dialogflow"
product_slug: "dialogflow"
feature_name: "Dialogflow CX regional system entities support"
feature_slug: "dialogflow-cx-regional-system-entities-support"
latest_feature_date: "2023-02-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dialogflow/cx/docs/concept/entity-system"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2"
  - "https://docs.cloud.google.com/dialogflow/es/docs/agents-design"
keywords:
  - "selected"
  - "regional"
  - "additional"
  - "entities"
  - "supports"
  - "system"
---

# Dialogflow CX regional system entities support

Product: Dialogflow
Coverage: MEDIUM

## Step 02 Summary

Dialogflow CX supports selected system entities in additional regions for English, French, Italian, German, and Spanish.

## Extended Definition

Dialogflow CX supports selected system entities in additional regions for English, French, Italian, German, and Spanish.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/dialogflow/cx/docs/concept/entity-system](https://docs.cloud.google.com/dialogflow/cx/docs/concept/entity-system)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2](https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2)
- [https://docs.cloud.google.com/dialogflow/es/docs/agents-design](https://docs.cloud.google.com/dialogflow/es/docs/agents-design)

## Supporting Pages

### System entities \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/entity-system](https://docs.cloud.google.com/dialogflow/cx/docs/concept/entity-system)
- Source ID: `site-docs-root`
- Final score: 112
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- However, your application may need to add additional values for system entities.
- Home Documentation AI and ML Dialogflow Dialogflow CX Send feedback System entities Stay organized with collections Save and categorize content based on your preferences.
- Dialogflow CX provides many system entities to extract common types from end-user expressions.
- API Creating system entity extensions is similar to how you create custom entities .

### "Package com.google.cloud.dialogflow.v2 (4.94.0) \_|\_ Java client libraries\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2](https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2)
- Source ID: `site-java-reference`
- Final score: 106
- Re-rank relevance: N/A

Evidence snippets:
- Tools can be used to interact with remote APIs (e.g. fetching orders) to retrieve additional information as input to LLM. com. google. cloud. dialogflow. v2.
- Tools can be used to interact with remote APIs (e.g. fetching orders) to retrieve additional information as input to LLM. com. google. cloud. dialogflow. v2.
- This is the aggregated score for each metric across all conversations that are selected for summarization evaluation. com. google. cloud. dialogflow. v2.
- This is the aggregated score for each metric across all conversations that are selected for summarization evaluation. com. google. cloud. dialogflow. v2.

### "General agent design best practices \_|\_ Dialogflow ES \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/dialogflow/es/docs/agents-design](https://docs.cloud.google.com/dialogflow/es/docs/agents-design)
- Source ID: `site-iam-reference`
- Final score: 99
- Re-rank relevance: N/A

Evidence snippets:
- For example: I am 7 years old (semantic meaning of annotated text is a person's age) The contract is valid for 7 years (semantic meaning of annotated text is a time duration) Dialogflow's machine learning models consider semantic meaning when matching system entities.
- For example, if you are providing time values that should be parsed as @sys.time system entities in training phrases, do not provide the same time in all training phrases.
- In particular, system entities are pre-built entities provided by Dialogflow that handle the most popular types of information.
- System entities When a user makes a request, there's important information to parse from what they said.

