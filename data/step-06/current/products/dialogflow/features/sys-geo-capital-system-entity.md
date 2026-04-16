---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:17:30.517Z"
product_name: "Dialogflow"
product_slug: "dialogflow"
feature_name: "@sys.geo-capital System Entity"
feature_slug: "sys-geo-capital-system-entity"
latest_feature_date: "2018-05-08"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dialogflow/cx/docs/concept/entity-options"
  - "https://docs.cloud.google.com/dialogflow/es/docs/entities-options"
  - "https://docs.cloud.google.com/dialogflow/cx/docs/concept/entity-custom"
keywords:
  - "sys"
  - "geo"
  - "capital"
  - "system"
  - "entity"
  - "recognizes"
  - "city"
  - "names"
---

# @sys.geo-capital System Entity

Product: Dialogflow
Coverage: MEDIUM

## Step 02 Summary

The @sys.geo-capital system entity recognizes capital city names.

## Extended Definition

The @sys.geo-capital system entity recognizes capital city names.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dialogflow/cx/docs/concept/entity-options](https://docs.cloud.google.com/dialogflow/cx/docs/concept/entity-options)
- [https://docs.cloud.google.com/dialogflow/es/docs/entities-options](https://docs.cloud.google.com/dialogflow/es/docs/entities-options)
- [https://docs.cloud.google.com/dialogflow/cx/docs/concept/entity-custom](https://docs.cloud.google.com/dialogflow/cx/docs/concept/entity-custom)

## Supporting Pages

### Entity options \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/entity-options](https://docs.cloud.google.com/dialogflow/cx/docs/concept/entity-options)
- Source ID: `site-docs-root`
- Final score: 182
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The format for entering an alias is: @entity-name:property-name For example, you could create a place entity type that matches either a city or a state with the following entity entries: Value @sys.geo-city:city @sys.geo-state:state If an end-user input contains a "Nashville" part, the place entity type is matched.
- Consider the following move custom entity type that contains aliases to a direction entity type and the @sys.number system entity type: Direction custom map entity type: Reference value Synonyms forward forward, forwards back back, backward, backwards Move custom list entity type: Value @sys.number:steps steps @direction:direction If the move entity is matched to an end-user input that contains "five steps backward", the move entity will be matched.
- When a composite entity is matched at runtime, the extracted value is returned as a JSON object, with alias property names used as JSON property names.
- For example, the @sys.date system entity matches common date inputs like "January 1, 2015" or "The first of January of 2015".

### Entity options \_|\_ Dialogflow ES \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/es/docs/entities-options](https://docs.cloud.google.com/dialogflow/es/docs/entities-options)
- Source ID: `site-iam-reference`
- Final score: 172
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The format for entering an alias is: @entity-name:property-name For example, you could create a place entity type that matches either a city or a state with the following entity entries: Value @sys.geo-city:city @sys.geo-state:state If an end-user expression contains a "Nashville" part, the place entity type is matched.
- Consider the following move custom entity type that contains aliases to a direction entity type and the @sys.number system entity type: Direction custom map entity type: Reference value Synonyms forward forward, forwards back back, backward, backwards Move custom list entity type: Value @sys.number:steps steps @direction:direction If the move entity is matched to an end-user expression that contains "five steps backward", the move entity will be matched.
- When a composite entity is matched at runtime, the extracted value is returned as a JSON object, with alias property names used as JSON property names.
- For example, the @sys.date system entity matches common date inputs like "January 1, 2015" or "The first of January of 2015".

### Custom entities \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/entity-custom](https://docs.cloud.google.com/dialogflow/cx/docs/concept/entity-custom)
- Source ID: `site-docs-root`
- Final score: 81
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Go to the EntityType API reference Select a protocol and version for the EntityType reference: Protocol V3 V3beta1 REST EntityType resource EntityType resource RPC EntityType interface EntityType interface C++ EntityTypesClient Not available C# EntityTypesClient Not available Go EntityTypesClient Not available Java EntityTypesClient EntityTypesClient Node.js EntityTypesClient EntityTypesClient PHP Not available Not available Python EntityTypesClient EntityTypesClient Ruby Not available Not available Close Limitations The following limitations apply: Custom entity type display names are unique for each agent.
- The following describes the directory structure: entityTypes : This directory contains your entity types. <entity type name> : One or more of these directories exist, and the directory names correspond to entity type display names. entities : This directory contains entity entry files. <language tag>.json : One or more of these files exist, and the file names correspond to language tags.
- You can control the merge behavior when entity type display names match by selecting one of the following: Replace existing entity types : An imported entity type overwrites any same-named entity type in your existing agent.
- Each file contains language-specific entity entries. <excludedPhrases> : This directory contains excluded phrase files. <language tag>.json : One or more of these files exist, and the file names correspond to language tags.

