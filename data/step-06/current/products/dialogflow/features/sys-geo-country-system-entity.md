---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:17:30.518Z"
product_name: "Dialogflow"
product_slug: "dialogflow"
feature_name: "@sys.geo-country System Entity"
feature_slug: "sys-geo-country-system-entity"
latest_feature_date: "2018-05-08"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dialogflow/cx/docs/concept/entity-options"
  - "https://docs.cloud.google.com/dialogflow/es/docs/entities-options"
  - "https://docs.cloud.google.com/dialogflow/cx/docs/reference/code-block-system-library"
keywords:
  - "sys"
  - "geo"
  - "country"
  - "system"
  - "entity"
  - "recognizes"
  - "names"
---

# @sys.geo-country System Entity

Product: Dialogflow
Coverage: MEDIUM

## Step 02 Summary

The @sys.geo-country system entity recognizes country names.

## Extended Definition

The @sys.geo-country system entity recognizes country names.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dialogflow/cx/docs/concept/entity-options](https://docs.cloud.google.com/dialogflow/cx/docs/concept/entity-options)
- [https://docs.cloud.google.com/dialogflow/es/docs/entities-options](https://docs.cloud.google.com/dialogflow/es/docs/entities-options)
- [https://docs.cloud.google.com/dialogflow/cx/docs/reference/code-block-system-library](https://docs.cloud.google.com/dialogflow/cx/docs/reference/code-block-system-library)

## Supporting Pages

### Entity options \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/entity-options](https://docs.cloud.google.com/dialogflow/cx/docs/concept/entity-options)
- Source ID: `site-docs-root`
- Final score: 162
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
- Final score: 152
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The format for entering an alias is: @entity-name:property-name For example, you could create a place entity type that matches either a city or a state with the following entity entries: Value @sys.geo-city:city @sys.geo-state:state If an end-user expression contains a "Nashville" part, the place entity type is matched.
- Consider the following move custom entity type that contains aliases to a direction entity type and the @sys.number system entity type: Direction custom map entity type: Reference value Synonyms forward forward, forwards back back, backward, backwards Move custom list entity type: Value @sys.number:steps steps @direction:direction If the move entity is matched to an end-user expression that contains "five steps backward", the move entity will be matched.
- When a composite entity is matched at runtime, the extracted value is returned as a JSON object, with alias property names used as JSON property names.
- For example, the @sys.date system entity matches common date inputs like "January 1, 2015" or "The first of January of 2015".

### Code block system library \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/reference/code-block-system-library](https://docs.cloud.google.com/dialogflow/cx/docs/reference/code-block-system-library)
- Source ID: `site-docs-reference`
- Final score: 81
- Re-rank relevance: N/A

Evidence snippets:
- Sample: matches = flows . flow1 . match intent ( history . last user utterance ) . matches if matches and matches [ 0 ] . intent == "some intent" : to country = matches [ 0 ] . parameters . get ( "to country" ) if to country : respond ( f "To confirm, you're going to { to country } , right?" ) FlowInvocation A flow invocation, found in the conversation history.
- Home Documentation AI and ML Dialogflow Dialogflow CX Reference Send feedback Code block system library Stay organized with collections Save and categorize content based on your preferences.
- Resource naming Playbooks, flows, tools, and tool actions need to be translated to valid Python names.
- This means you should avoid spaces, periods, hyphens, and other illegal python characters for names.

