---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:17:30.410Z"
product_name: "Dialogflow"
product_slug: "dialogflow"
feature_name: "Dialogflow CX IS_FUTURE_DATE system function"
feature_slug: "dialogflow-cx-is-future-date-system-function"
latest_feature_date: "2023-06-27"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dialogflow/cx/docs/concept/entity-system"
  - "https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-design"
  - "https://docs.cloud.google.com/dialogflow/docs/basics"
keywords:
  - "dialogflow"
  - "cx"
  - "future"
  - "date"
  - "system"
  - "provides"
---

# Dialogflow CX IS_FUTURE_DATE system function

Product: Dialogflow
Coverage: MEDIUM

## Step 02 Summary

Dialogflow CX provides the IS_FUTURE_DATE system function.

## Extended Definition

Dialogflow CX provides the IS_FUTURE_DATE system function.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dialogflow/cx/docs/concept/entity-system](https://docs.cloud.google.com/dialogflow/cx/docs/concept/entity-system)
- [https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-design](https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-design)
- [https://docs.cloud.google.com/dialogflow/docs/basics](https://docs.cloud.google.com/dialogflow/docs/basics)

## Supporting Pages

### System entities \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/entity-system](https://docs.cloud.google.com/dialogflow/cx/docs/concept/entity-system)
- Source ID: `site-docs-root`
- Final score: 90
- Re-rank relevance: N/A

Evidence snippets:
- Dialogflow CX provides many system entities to extract common types from end-user expressions.
- Home Documentation AI and ML Dialogflow Dialogflow CX Send feedback System entities Stay organized with collections Save and categorize content based on your preferences.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
- Provide the name of the system entity you wish to extend, and provide the values you want to extend it with.

### "General agent design best practices \_|\_ Dialogflow CX \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-design](https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-design)
- Source ID: `site-docs-root`
- Final score: 89
- Re-rank relevance: N/A

Evidence snippets:
- For example, the following table shows good and bad ways to annotate with the @sys.date system entity: Good Bad September 7th departure September 7th departure Leaving on July 4 Leaving on July 4 Use semantically meaningful annotations for system entities The semantic meaning of a training phrase part selected for an annotation can be affected by the rest of the text in a training phrase.
- For example: Annotated training phrase Semantic meaning of annotated text I am 7 years old A person's age The contract is valid for 7 years A time duration Dialogflow CX's machine learning models consider semantic meaning when matching system entities.
- Dialogflow CX API If none of the ready-to-use integrations are suitable, or you would like to customize the interface for your system, you can use the Dialogflow CX API directly .
- The following lists the conversation control granularity of agent resources in increasing granularity order: Agents (one agent handles all conversations) Flows (one flow handles one or more related conversation topics) Pages (one page handles one or more related conversation turns) Routes (one route handles a user intent or condition check) Intent parameters versus form parameters The main way in which your system gets structured data from the end-user is with parameters .

### Dialogflow ES basics \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/docs/basics](https://docs.cloud.google.com/dialogflow/docs/basics)
- Source ID: `site-docs-root-2`
- Final score: 87
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- When an intent is matched, Dialogflow provides the action to your system, and you can use the action to trigger certain actions defined in your system.
- Dialogflow provides predefined system entities that can match many common types of data.
- Parameters : When an intent is matched at runtime, Dialogflow provides the extracted values from the end-user expression as parameters .
- Dialogflow Console Dialogflow provides a web user interface called the Dialogflow Console ( visit documentation , open console ).

