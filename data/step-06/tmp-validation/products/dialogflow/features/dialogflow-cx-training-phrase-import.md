---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T02:32:45.735Z"
product_name: "Dialogflow"
product_slug: "dialogflow"
feature_name: "Dialogflow CX training phrase import"
feature_slug: "dialogflow-cx-training-phrase-import"
latest_feature_date: "2023-04-26"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2"
  - "https://docs.cloud.google.com/dialogflow/cx/docs/concept/entity-custom"
  - "https://docs.cloud.google.com/dialogflow/es/docs/agents-design"
keywords:
  - "importing"
  - "import"
  - "training"
  - "phrase"
  - "phrases"
  - "supports"
---

# Dialogflow CX training phrase import

Product: Dialogflow
Coverage: MEDIUM

## Step 02 Summary

Dialogflow CX supports importing training phrases.

## Extended Definition

Dialogflow CX supports importing training phrases.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2](https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2)
- [https://docs.cloud.google.com/dialogflow/cx/docs/concept/entity-custom](https://docs.cloud.google.com/dialogflow/cx/docs/concept/entity-custom)
- [https://docs.cloud.google.com/dialogflow/es/docs/agents-design](https://docs.cloud.google.com/dialogflow/es/docs/agents-design)

## Supporting Pages

### "Package com.google.cloud.dialogflow.v2 (4.94.0) \_|\_ Java client libraries\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2](https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2)
- Source ID: `site-java-reference`
- Final score: 143
- Re-rank relevance: N/A

Evidence snippets:
- Therefore, we provide a resource view that does not return training phrases in the response by default. com. google. cloud. dialogflow. v2.
- Type Represents different types of training phrases. com. google. cloud. dialogflow. v2.
- Input Config Represents the configuration of importing a set of conversation files in Google Cloud Storage. com. google. cloud. dialogflow. v2.
- Builder Represents the configuration of importing a set of conversation files in Google Cloud Storage. com. google. cloud. dialogflow. v2.

### Custom entities \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/entity-custom](https://docs.cloud.google.com/dialogflow/cx/docs/concept/entity-custom)
- Source ID: `site-docs-root`
- Final score: 121
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For example: folder entityTypes ⤷ folder Entity Type A ⤷ folder entities ⤷ insert drive file en.json ⤷ insert drive file en-gb.json ⤷ insert drive file en-ca.json ⤷ folder excludedPhrases ⤷ insert drive file en.json ⤷ insert drive file en-gb.json ⤷ insert drive file en-ca.json ⤷ insert drive file Entity Type A.json ⤷ folder Entity Type B ⤷ folder entities ⤷ insert drive file en.json ⤷ insert drive file en-gb.json ⤷ insert drive file en-ca.json ⤷ folder excludedPhrases ⤷ insert drive file en.json ⤷ insert drive file en-gb.json ⤷ insert drive file en-ca.json ⤷ insert drive file Entity Type B.json When importing entity types, there may be merge conflicts when the display name of an entity type in your existing agent matches that of an imported entity type.
- Note: When building your agent, it's best to define your entities prior to adding training phrases to your intents.
- However, if you create entities after training phrases, you can manually annotate the phrases.
- The console will automatically annotate your training phrases with existing entities.

### "General agent design best practices \_|\_ Dialogflow ES \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/dialogflow/es/docs/agents-design](https://docs.cloud.google.com/dialogflow/es/docs/agents-design)
- Source ID: `site-iam-reference`
- Final score: 111
- Re-rank relevance: N/A

Evidence snippets:
- The complexity of your agent will determine the actual number of training phrases each intent should have, but 10-20 (depending on complexity of intent) is a good minimum.
- For example, if you are providing time values that should be parsed as @sys.time system entities in training phrases, do not provide the same time in all training phrases.
- If the threshold is high, and there is not a lot of training data, only user queries that have near exact matches to training phrases will result in intent matching.
- As a rule, try to have at least three times as many training phrases as parameters and at least 10-20 (depending on complexity of intent) training phrases.

