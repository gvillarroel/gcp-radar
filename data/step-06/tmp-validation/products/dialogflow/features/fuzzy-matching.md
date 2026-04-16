---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T02:32:45.796Z"
product_name: "Dialogflow"
product_slug: "dialogflow"
feature_name: "Fuzzy matching"
feature_slug: "fuzzy-matching"
latest_feature_date: "2019-09-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dialogflow/es/docs/entities-fuzzy"
  - "https://docs.cloud.google.com/dialogflow/cx/docs/concept/entity-fuzzy"
  - "https://docs.cloud.google.com/dialogflow/es/docs/entities-options"
keywords:
  - "flexibility"
  - "fuzzy"
  - "word"
  - "improves"
  - "multi"
  - "matching"
  - "entities"
---

# Fuzzy matching

Product: Dialogflow
Coverage: MEDIUM

## Step 02 Summary

Dialogflow fuzzy matching improves flexibility for matching multi-word entities with varied word order.

## Extended Definition

Dialogflow fuzzy matching improves flexibility for matching multi-word entities with varied word order.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/dialogflow/es/docs/entities-fuzzy](https://docs.cloud.google.com/dialogflow/es/docs/entities-fuzzy)
- [https://docs.cloud.google.com/dialogflow/cx/docs/concept/entity-fuzzy](https://docs.cloud.google.com/dialogflow/cx/docs/concept/entity-fuzzy)
- [https://docs.cloud.google.com/dialogflow/es/docs/entities-options](https://docs.cloud.google.com/dialogflow/es/docs/entities-options)

## Supporting Pages

### Fuzzy matching \_|\_ Dialogflow ES \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/es/docs/entities-fuzzy](https://docs.cloud.google.com/dialogflow/es/docs/entities-fuzzy)
- Source ID: `site-iam-reference`
- Final score: 218
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Partial matches When you define synonyms that contain multiple words, Dialogflow will attempt to match end-user input to the closest matching synonym, which may include partial matches.
- Fuzzy matching should not be enabled for entities which are used to match strict values like IDs, national identification numbers, and so on.
- However, with fuzzy matching enabled, the ordering of the words in a value or synonym does not matter.
- Limitations The following limitations apply: Fuzzy matching cannot be enabled for regexp entities .

### Fuzzy matching \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/entity-fuzzy](https://docs.cloud.google.com/dialogflow/cx/docs/concept/entity-fuzzy)
- Source ID: `site-docs-root`
- Final score: 196
- Re-rank relevance: N/A

Evidence snippets:
- Go to the EntityType API reference Select a protocol and version for the EntityType reference: Protocol V3 V3beta1 REST EntityType resource EntityType resource RPC EntityType interface EntityType interface C++ EntityTypesClient Not available C# EntityTypesClient Not available Go EntityTypesClient Not available Java EntityTypesClient EntityTypesClient Node.js EntityTypesClient EntityTypesClient PHP Not available Not available Python EntityTypesClient EntityTypesClient Ruby Not available Not available Close Limitations The following limitations apply: Fuzzy matching cannot be enabled for regexp entities .
- Fuzzy matching should not be enabled for entities which are used to match strict values like IDs, national identification numbers, and so on.
- However, with fuzzy matching enabled, the ordering of the words in a value or synonym does not matter.
- The following will trigger a match for all of the examples above: "ball" "red ball" "small ball" "small red ball" Create a fuzzy matching entity Console Open the Dialogflow CX console .

### Entity options \_|\_ Dialogflow ES \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/es/docs/entities-options](https://docs.cloud.google.com/dialogflow/es/docs/entities-options)
- Source ID: `site-iam-reference`
- Final score: 146
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- You can create different kinds of entities, depending on the options selected: Map entity List entity Composite entity (a special kind of list entity) Regexp entity There are also two options that do not determine the kind of entity, but do affect the behavior of entity matching: Automated expansion Fuzzy matching This document describes each of these options.
- See the following checkbox options for any existing entities: Define synonyms Regexp entity (custom entity only) Allow automated expansion (custom entity only) Fuzzy matching (custom entity only) If you are building an agent using the API instead of the console, see the EntityTypes reference .
- With fuzzy matching enabled, the ordering of the words in a value or synonym does not matter.
- The extracted value is returned as a JSON object like: {"amount": 50, "currency": "EUR"} Regexp entity With regexp entities , you can provide regular expressions for matching.

