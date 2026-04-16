---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:17:30.418Z"
product_name: "Dialogflow"
product_slug: "dialogflow"
feature_name: "Dialogflow CX UPPER system function"
feature_slug: "dialogflow-cx-upper-system-function"
latest_feature_date: "2023-06-27"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-design"
  - "https://docs.cloud.google.com/dialogflow/cx/docs/reference/condition"
  - "https://docs.cloud.google.com/dialogflow/cx/docs/concept/entity-system"
keywords:
  - "dialogflow"
  - "cx"
  - "upper"
  - "system"
  - "provides"
---

# Dialogflow CX UPPER system function

Product: Dialogflow
Coverage: MEDIUM

## Step 02 Summary

Dialogflow CX provides the UPPER system function.

## Extended Definition

Dialogflow CX provides the UPPER system function.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-design](https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-design)
- [https://docs.cloud.google.com/dialogflow/cx/docs/reference/condition](https://docs.cloud.google.com/dialogflow/cx/docs/reference/condition)
- [https://docs.cloud.google.com/dialogflow/cx/docs/concept/entity-system](https://docs.cloud.google.com/dialogflow/cx/docs/concept/entity-system)

## Supporting Pages

### "General agent design best practices \_|\_ Dialogflow CX \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-design](https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-design)
- Source ID: `site-docs-root`
- Final score: 77
- Re-rank relevance: N/A

Evidence snippets:
- For example: Annotated training phrase Semantic meaning of annotated text I am 7 years old A person's age The contract is valid for 7 years A time duration Dialogflow CX's machine learning models consider semantic meaning when matching system entities.
- Dialogflow CX API If none of the ready-to-use integrations are suitable, or you would like to customize the interface for your system, you can use the Dialogflow CX API directly .
- The following lists the conversation control granularity of agent resources in increasing granularity order: Agents (one agent handles all conversations) Flows (one flow handles one or more related conversation topics) Pages (one page handles one or more related conversation turns) Routes (one route handles a user intent or condition check) Intent parameters versus form parameters The main way in which your system gets structured data from the end-user is with parameters .
- For example, the following table shows good and bad ways to annotate with the @sys.date system entity: Good Bad September 7th departure September 7th departure Leaving on July 4 Leaving on July 4 Use semantically meaningful annotations for system entities The semantic meaning of a training phrase part selected for an annotation can be affected by the rest of the text in a training phrase.

### Conditions reference \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/reference/condition](https://docs.cloud.google.com/dialogflow/cx/docs/reference/condition)
- Source ID: `site-docs-reference`
- Final score: 73
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The remainder of this section provides examples for using system functions in conditions.
- Boolean constants The following boolean constants are defined: true false To force a route to be called upon evaluation, use the following condition: true System functions The system functions you can use in conditions are found in the system functions reference .
- Home Documentation AI and ML Dialogflow Dialogflow CX Reference Send feedback Conditions reference Stay organized with collections Save and categorize content based on your preferences.
- This syntax allows from very simple to very complex expressions using parameter values , sentiment values , comparison operators , boolean operators , and system functions .

### System entities \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/entity-system](https://docs.cloud.google.com/dialogflow/cx/docs/concept/entity-system)
- Source ID: `site-docs-root`
- Final score: 69
- Re-rank relevance: N/A

Evidence snippets:
- Dialogflow CX provides many system entities to extract common types from end-user expressions.
- Home Documentation AI and ML Dialogflow Dialogflow CX Send feedback System entities Stay organized with collections Save and categorize content based on your preferences.
- Provide the name of the system entity you wish to extend, and provide the values you want to extend it with.
- Extend a system entity To extend a system entity: Console Use the system entity in one of your parameters .

