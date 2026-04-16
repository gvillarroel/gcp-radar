---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:17:30.419Z"
product_name: "Dialogflow"
product_slug: "dialogflow"
feature_name: "Dialogflow CX ADD_DATE system function"
feature_slug: "dialogflow-cx-add-date-system-function"
latest_feature_date: "2023-05-03"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dialogflow/cx/docs/concept/entity-system"
  - "https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-design"
  - "https://docs.cloud.google.com/dialogflow/cx/docs/reference/code-block-system-library"
keywords:
  - "dialogflow"
  - "cx"
  - "add"
  - "date"
  - "system"
  - "provides"
---

# Dialogflow CX ADD_DATE system function

Product: Dialogflow
Coverage: MEDIUM

## Step 02 Summary

Dialogflow CX provides the ADD_DATE system function.

## Extended Definition

Dialogflow CX provides the ADD_DATE system function.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dialogflow/cx/docs/concept/entity-system](https://docs.cloud.google.com/dialogflow/cx/docs/concept/entity-system)
- [https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-design](https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-design)
- [https://docs.cloud.google.com/dialogflow/cx/docs/reference/code-block-system-library](https://docs.cloud.google.com/dialogflow/cx/docs/reference/code-block-system-library)

## Supporting Pages

### System entities \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/entity-system](https://docs.cloud.google.com/dialogflow/cx/docs/concept/entity-system)
- Source ID: `site-docs-root`
- Final score: 97
- Re-rank relevance: N/A

Evidence snippets:
- Dialogflow CX provides many system entities to extract common types from end-user expressions.
- Home Documentation AI and ML Dialogflow Dialogflow CX Send feedback System entities Stay organized with collections Save and categorize content based on your preferences.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
- Provide the name of the system entity you wish to extend, and provide the values you want to extend it with.

### "General agent design best practices \_|\_ Dialogflow CX \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-design](https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-design)
- Source ID: `site-docs-root`
- Final score: 94
- Re-rank relevance: N/A

Evidence snippets:
- For example, the following table shows good and bad ways to annotate with the @sys.date system entity: Good Bad September 7th departure September 7th departure Leaving on July 4 Leaving on July 4 Use semantically meaningful annotations for system entities The semantic meaning of a training phrase part selected for an annotation can be affected by the rest of the text in a training phrase.
- For example: Annotated training phrase Semantic meaning of annotated text I am 7 years old A person's age The contract is valid for 7 years A time duration Dialogflow CX's machine learning models consider semantic meaning when matching system entities.
- Dialogflow CX API If none of the ready-to-use integrations are suitable, or you would like to customize the interface for your system, you can use the Dialogflow CX API directly .
- The following lists the conversation control granularity of agent resources in increasing granularity order: Agents (one agent handles all conversations) Flows (one flow handles one or more related conversation topics) Pages (one page handles one or more related conversation turns) Routes (one route handles a user intent or condition check) Intent parameters versus form parameters The main way in which your system gets structured data from the end-user is with parameters .

### Code block system library \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/reference/code-block-system-library](https://docs.cloud.google.com/dialogflow/cx/docs/reference/code-block-system-library)
- Source ID: `site-docs-reference`
- Final score: 86
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation AI and ML Dialogflow Dialogflow CX Reference Send feedback Code block system library Stay organized with collections Save and categorize content based on your preferences.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
- Args: rationale: Your rationale for why the step should be updated step index: The new step formatted as a string, e.g. "1.2.1" Returns: A status message message indicating if the update was successful or not. """ indices = step index . split ( "." ) if not indices : return f "Bad index: { step index } !" step = playbooks .
- Sample: @PlaybookStartHandler def start (): add override ( update step , { "rationale" : "The session just started, so I'm on Step 1" , "step index" : "1" }) @Action def update step ( rationale : str , step index : str ) - > str : """Set the current step.

