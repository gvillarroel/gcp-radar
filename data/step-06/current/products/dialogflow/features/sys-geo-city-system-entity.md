---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:17:30.517Z"
product_name: "Dialogflow"
product_slug: "dialogflow"
feature_name: "@sys.geo-city System Entity"
feature_slug: "sys-geo-city-system-entity"
latest_feature_date: "2018-05-08"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dialogflow/cx/docs/concept/entity-options"
  - "https://docs.cloud.google.com/dialogflow/es/docs/entities-options"
  - "https://docs.cloud.google.com/dialogflow/es/docs/entities-export"
keywords:
  - "sys"
  - "geo"
  - "city"
  - "system"
  - "entity"
  - "recognizes"
  - "names"
---

# @sys.geo-city System Entity

Product: Dialogflow
Coverage: MEDIUM

## Step 02 Summary

The @sys.geo-city system entity recognizes city names.

## Extended Definition

The @sys.geo-city system entity recognizes city names.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dialogflow/cx/docs/concept/entity-options](https://docs.cloud.google.com/dialogflow/cx/docs/concept/entity-options)
- [https://docs.cloud.google.com/dialogflow/es/docs/entities-options](https://docs.cloud.google.com/dialogflow/es/docs/entities-options)
- [https://docs.cloud.google.com/dialogflow/es/docs/entities-export](https://docs.cloud.google.com/dialogflow/es/docs/entities-export)

## Supporting Pages

### Entity options \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/entity-options](https://docs.cloud.google.com/dialogflow/cx/docs/concept/entity-options)
- Source ID: `site-docs-root`
- Final score: 183
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
- Final score: 173
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The format for entering an alias is: @entity-name:property-name For example, you could create a place entity type that matches either a city or a state with the following entity entries: Value @sys.geo-city:city @sys.geo-state:state If an end-user expression contains a "Nashville" part, the place entity type is matched.
- Consider the following move custom entity type that contains aliases to a direction entity type and the @sys.number system entity type: Direction custom map entity type: Reference value Synonyms forward forward, forwards back back, backward, backwards Move custom list entity type: Value @sys.number:steps steps @direction:direction If the move entity is matched to an end-user expression that contains "five steps backward", the move entity will be matched.
- When a composite entity is matched at runtime, the extracted value is returned as a JSON object, with alias property names used as JSON property names.
- For example, the @sys.date system entity matches common date inputs like "January 1, 2015" or "The first of January of 2015".

### Export and import entities \_|\_ Dialogflow ES \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/es/docs/entities-export](https://docs.cloud.google.com/dialogflow/es/docs/entities-export)
- Source ID: `site-iam-reference`
- Final score: 82
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For example, the following are two map entity entries: "New York City", "New York City", "NYC", "New York City, USA" "Philadelphia", "Philadelphia", "Philly", "Philadelphia, USA" Export To export an entity: Hover your mouse over an entity and click the cloud download cloud download icon.
- Select the Custom tab for custom entities defined for your agent or the System tab for system entities used by your agent.
- CSV format The CSV content should have the following format: Each entity entry is on one line and ends with a newline.
- You can export and import entities to simplify creation or movement of large amounts of entity data.

