---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:17:30.472Z"
product_name: "Dialogflow"
product_slug: "dialogflow"
feature_name: "Dialogflow CX system entity extension"
feature_slug: "dialogflow-cx-system-entity-extension"
latest_feature_date: "2021-01-21"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dialogflow/cx/docs/concept/entity-system"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2"
  - "https://docs.cloud.google.com/dialogflow/cx/docs/concept/entity-options"
keywords:
  - "dialogflow"
  - "cx"
  - "system"
  - "entity"
  - "extension"
  - "allows"
  - "entities"
  - "extended"
---

# Dialogflow CX system entity extension

Product: Dialogflow
Coverage: MEDIUM

## Step 02 Summary

Dialogflow CX allows system entities to be extended with custom values.

## Extended Definition

Dialogflow CX allows system entities to be extended with custom values.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dialogflow/cx/docs/concept/entity-system](https://docs.cloud.google.com/dialogflow/cx/docs/concept/entity-system)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2](https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2)
- [https://docs.cloud.google.com/dialogflow/cx/docs/concept/entity-options](https://docs.cloud.google.com/dialogflow/cx/docs/concept/entity-options)

## Supporting Pages

### System entities \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/entity-system](https://docs.cloud.google.com/dialogflow/cx/docs/concept/entity-system)
- Source ID: `site-docs-root`
- Final score: 177
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- API Creating system entity extensions is similar to how you create custom entities .
- The System entity reference lists the system entities that can be extended.
- Home Documentation AI and ML Dialogflow Dialogflow CX Send feedback System entities Stay organized with collections Save and categorize content based on your preferences.
- Dialogflow CX provides many system entities to extract common types from end-user expressions.

### "Package com.google.cloud.dialogflow.v2 (4.94.0) \_|\_ Java client libraries\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2](https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2)
- Source ID: `site-java-reference`
- Final score: 127
- Re-rank relevance: N/A

Evidence snippets:
- Automated expansion allows an agent to recognize values that have not been explicitly listed in the entity (for example, new kinds of shopping list items). com. google. cloud. dialogflow. v2.
- The part can be an entity or purely a part of the message between two entities or message start/end. com. google. cloud. dialogflow. v2.
- The part can be an entity or purely a part of the message between two entities or message start/end. com. google. cloud. dialogflow. v2.
- Batch Create Entities Request The request message for EntityTypes.BatchCreateEntities . com. google. cloud. dialogflow. v2.

### Entity options \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/entity-options](https://docs.cloud.google.com/dialogflow/cx/docs/concept/entity-options)
- Source ID: `site-docs-root`
- Final score: 122
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Go to the EntityType API reference Select a protocol and version for the EntityType reference: Protocol V3 V3beta1 REST EntityType resource EntityType resource RPC EntityType interface EntityType interface C++ EntityTypesClient Not available C# EntityTypesClient Not available Go EntityTypesClient Not available Java EntityTypesClient EntityTypesClient Node.js EntityTypesClient EntityTypesClient PHP Not available Not available Python EntityTypesClient EntityTypesClient Ruby Not available Not available Close Map entity Map entities provide a map from reference values to synonyms for each reference value.
- Consider the following move custom entity type that contains aliases to a direction entity type and the @sys.number system entity type: Direction custom map entity type: Reference value Synonyms forward forward, forwards back back, backward, backwards Move custom list entity type: Value @sys.number:steps steps @direction:direction If the move entity is matched to an end-user input that contains "five steps backward", the move entity will be matched.
- You can create different kinds of entities, depending on the options selected: Map entity List entity Composite entity (a special kind of list entity) Regexp entity There are other options that do not determine the kind of entity, but do affect the behavior of entity matching: Automated expansion Fuzzy matching Redact in log Entity exclusions This document describes each of these options.
- See the following options for any existing entities (some of these may only be visible after expanding Advanced options ): Entities only (no synonyms) Regexp entities Automatically add entities Fuzzy matching Redact in log Entity exclusions If you are building an agent using the API instead of the console, see the EntityType type.

