---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:17:30.501Z"
product_name: "Dialogflow"
product_slug: "dialogflow"
feature_name: "Regexp entities"
feature_slug: "regexp-entities"
latest_feature_date: "2019-09-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dialogflow/cx/docs/concept/entity-regexp"
  - "https://docs.cloud.google.com/dialogflow/es/docs/entities-regexp"
  - "https://docs.cloud.google.com/dialogflow/es/docs/entities-options"
keywords:
  - "regexp"
  - "entities"
  - "dialogflow"
  - "allow"
  - "regular"
  - "expressions"
  - "used"
  - "entity"
---

# Regexp entities

Product: Dialogflow
Coverage: MEDIUM

## Step 02 Summary

Dialogflow regexp entities allow regular expressions to be used for entity matching.

## Extended Definition

Dialogflow regexp entities allow regular expressions to be used for entity matching.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dialogflow/cx/docs/concept/entity-regexp](https://docs.cloud.google.com/dialogflow/cx/docs/concept/entity-regexp)
- [https://docs.cloud.google.com/dialogflow/es/docs/entities-regexp](https://docs.cloud.google.com/dialogflow/es/docs/entities-regexp)
- [https://docs.cloud.google.com/dialogflow/es/docs/entities-options](https://docs.cloud.google.com/dialogflow/es/docs/entities-options)

## Supporting Pages

### Regexp entities \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/entity-regexp](https://docs.cloud.google.com/dialogflow/cx/docs/concept/entity-regexp)
- Source ID: `site-docs-root`
- Final score: 246
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For example, an end-user utterance of "My ID is 123" may be recognized as any of the following: "My ID is 123" "My ID is 1 2 3" "My ID is one two three" To accommodate three digit numbers, you could use the following regular expressions: \d{3} \d \d \d (zero one two three four five six seven eight nine) (zero one two three four five six seven eight nine) (zero one two three four five six seven eight nine) Create a regexp entity Console Open the Dialogflow CX console .
- Compound regular expressions Each regexp entity corresponds to a single pattern, but you can provide multiple regular expressions if they all represent variations of a single pattern.
- With regexp entities , you can provide regular expressions for matching.
- Go to the EntityType API reference Select a protocol and version for the EntityType reference: Protocol V3 V3beta1 REST EntityType resource EntityType resource RPC EntityType interface EntityType interface C++ EntityTypesClient Not available C# EntityTypesClient Not available Go EntityTypesClient Not available Java EntityTypesClient EntityTypesClient Node.js EntityTypesClient EntityTypesClient PHP Not available Not available Python EntityTypesClient EntityTypesClient Ruby Not available Not available Close Limitations The following limitations apply: Fuzzy matching cannot be enabled for regexp entities.

### Regexp entities \_|\_ Dialogflow ES \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/es/docs/entities-regexp](https://docs.cloud.google.com/dialogflow/es/docs/entities-regexp)
- Source ID: `site-iam-reference`
- Final score: 246
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For example, an end-user utterance of "My ID is 123" may be recognized as any of the following: "My ID is 123" "My ID is 1 2 3" "My ID is one two three" To accommodate three digit numbers, you could use the following regular expressions: \d{3} \d \d \d (zero one two three four five six seven eight nine) (zero one two three four five six seven eight nine) (zero one two three four five six seven eight nine) Create a regexp entity To create a regexp entity: Open an existing entity or create a new one.
- Compound regular expressions Each regexp entity corresponds to a single pattern, but you can provide multiple regular expressions if they all represent variations of a single pattern.
- With regexp entities , you can provide regular expressions for matching.
- Home Documentation AI and ML Dialogflow Dialogflow ES Send feedback Regexp entities Stay organized with collections Save and categorize content based on your preferences.

### Entity options \_|\_ Dialogflow ES \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/es/docs/entities-options](https://docs.cloud.google.com/dialogflow/es/docs/entities-options)
- Source ID: `site-iam-reference`
- Final score: 198
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The extracted value is returned as a JSON object like: {"amount": 50, "currency": "EUR"} Regexp entity With regexp entities , you can provide regular expressions for matching.
- See the following checkbox options for any existing entities: Define synonyms Regexp entity (custom entity only) Allow automated expansion (custom entity only) Fuzzy matching (custom entity only) If you are building an agent using the API instead of the console, see the EntityTypes reference .
- You can create different kinds of entities, depending on the options selected: Map entity List entity Composite entity (a special kind of list entity) Regexp entity There are also two options that do not determine the kind of entity, but do affect the behavior of entity matching: Automated expansion Fuzzy matching This document describes each of these options.
- For example, each of the following rows are entity entries for a material entity type: Value fabric wood metal If any value is matched for an end-user expression part, the value is extracted for the match and is used to resolve the associated parameter value .

