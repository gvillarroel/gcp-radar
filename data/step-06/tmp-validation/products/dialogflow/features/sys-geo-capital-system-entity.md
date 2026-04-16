---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T02:32:45.806Z"
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
  - "https://docs.cloud.google.com/dialogflow/cx/docs/concept/entity-system"
keywords:
  - "capital"
  - "city"
  - "recognizes"
  - "names"
  - "entity"
  - "system"
---

# @sys.geo-capital System Entity

Product: Dialogflow
Coverage: MEDIUM

## Step 02 Summary

The @sys.geo-capital system entity recognizes capital city names.

## Extended Definition

The @sys.geo-capital system entity recognizes capital city names.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/dialogflow/cx/docs/concept/entity-options](https://docs.cloud.google.com/dialogflow/cx/docs/concept/entity-options)
- [https://docs.cloud.google.com/dialogflow/es/docs/entities-options](https://docs.cloud.google.com/dialogflow/es/docs/entities-options)
- [https://docs.cloud.google.com/dialogflow/cx/docs/concept/entity-system](https://docs.cloud.google.com/dialogflow/cx/docs/concept/entity-system)

## Supporting Pages

### Entity options \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/entity-options](https://docs.cloud.google.com/dialogflow/cx/docs/concept/entity-options)
- Source ID: `site-docs-root`
- Final score: 170
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The format for entering an alias is: @entity-name:property-name For example, you could create a place entity type that matches either a city or a state with the following entity entries: Value @sys.geo-city:city @sys.geo-state:state If an end-user input contains a "Nashville" part, the place entity type is matched.
- Consider the following move custom entity type that contains aliases to a direction entity type and the @sys.number system entity type: Direction custom map entity type: Reference value Synonyms forward forward, forwards back back, backward, backwards Move custom list entity type: Value @sys.number:steps steps @direction:direction If the move entity is matched to an end-user input that contains "five steps backward", the move entity will be matched.
- When a composite entity is matched at runtime, the extracted value is returned as a JSON object, with alias property names used as JSON property names.
- For example, the @sys.date system entity matches common date inputs like "January 1, 2015" or "The first of January of 2015".

### Entity options \_|\_ Dialogflow ES \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/es/docs/entities-options](https://docs.cloud.google.com/dialogflow/es/docs/entities-options)
- Source ID: `site-iam-reference`
- Final score: 160
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The format for entering an alias is: @entity-name:property-name For example, you could create a place entity type that matches either a city or a state with the following entity entries: Value @sys.geo-city:city @sys.geo-state:state If an end-user expression contains a "Nashville" part, the place entity type is matched.
- Consider the following move custom entity type that contains aliases to a direction entity type and the @sys.number system entity type: Direction custom map entity type: Reference value Synonyms forward forward, forwards back back, backward, backwards Move custom list entity type: Value @sys.number:steps steps @direction:direction If the move entity is matched to an end-user expression that contains "five steps backward", the move entity will be matched.
- When a composite entity is matched at runtime, the extracted value is returned as a JSON object, with alias property names used as JSON property names.
- For example, the @sys.date system entity matches common date inputs like "January 1, 2015" or "The first of January of 2015".

### System entities \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/entity-system](https://docs.cloud.google.com/dialogflow/cx/docs/concept/entity-system)
- Source ID: `site-docs-root`
- Final score: 81
- Re-rank relevance: N/A

Evidence snippets:
- Provide the name of the system entity you wish to extend, and provide the values you want to extend it with.
- Extend a system entity To extend a system entity: Console Use the system entity in one of your parameters .
- If you attempt to extend a system entity that is not extendable, you will receive an error.
- API Creating system entity extensions is similar to how you create custom entities .

