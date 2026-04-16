---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:17:30.456Z"
product_name: "Dialogflow"
product_slug: "dialogflow"
feature_name: "System functions"
feature_slug: "system-functions"
latest_feature_date: "2021-06-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dialogflow/cx/docs/reference/condition"
  - "https://docs.cloud.google.com/dialogflow/cx/docs/concept/data-store/search-configure"
  - "https://docs.cloud.google.com/dialogflow/cx/docs/concept/fulfillment"
keywords:
  - "system"
  - "functions"
  - "dialogflow"
  - "cx"
  - "provides"
  - "use"
  - "expressions"
  - "conversational"
---

# System functions

Product: Dialogflow
Coverage: MEDIUM

## Step 02 Summary

Dialogflow CX provides system functions for use in expressions and conversational logic.

## Extended Definition

Dialogflow CX provides system functions for use in expressions and conversational logic.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dialogflow/cx/docs/reference/condition](https://docs.cloud.google.com/dialogflow/cx/docs/reference/condition)
- [https://docs.cloud.google.com/dialogflow/cx/docs/concept/data-store/search-configure](https://docs.cloud.google.com/dialogflow/cx/docs/concept/data-store/search-configure)
- [https://docs.cloud.google.com/dialogflow/cx/docs/concept/fulfillment](https://docs.cloud.google.com/dialogflow/cx/docs/concept/fulfillment)

## Supporting Pages

### Conditions reference \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/reference/condition](https://docs.cloud.google.com/dialogflow/cx/docs/reference/condition)
- Source ID: `site-docs-reference`
- Final score: 150
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This syntax allows from very simple to very complex expressions using parameter values , sentiment values , comparison operators , boolean operators , and system functions .
- The remainder of this section provides examples for using system functions in conditions.
- Boolean constants The following boolean constants are defined: true false To force a route to be called upon evaluation, use the following condition: true System functions The system functions you can use in conditions are found in the system functions reference .
- Some example use cases of system functions include: Introducing randomness in routing.

### Data store search configuration \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/data-store/search-configure](https://docs.cloud.google.com/dialogflow/cx/docs/concept/data-store/search-configure)
- Source ID: `site-docs-root`
- Final score: 134
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Runtime substitution errors If a ConditionBoostSpec JSON string is valid and parsable but an error occurs during the runtime substitution of Dialogflow CX expressions within its fields (such as the condition string), these errors will be reported in diagnostic info as SystemFunctionResults .
- For more information about expression syntax, see the Dialogflow CX conditions and system functions reference .
- You can use Dialogflow CX expressions to make the results dynamic, such as $session.params.YOUR PARAM NAME or $request.end-user-metadata.YOUR KEY . boost : (Number) A value between -1.0 and 1.0 that determines the strength of the boost.
- Invalid expressions If a Boost Spec condition or a Filter Spec string contains an invalid Dialogflow CX expression (for example, incorrect syntax or reference to a non-existent parameter), the expression compilation will fail.

### Fulfillments \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/fulfillment](https://docs.cloud.google.com/dialogflow/cx/docs/concept/fulfillment)
- Source ID: `site-docs-root`
- Final score: 102
- Re-rank relevance: N/A

Evidence snippets:
- The general format is: if [condition] [response] elif [condition] [response] elif [condition] [response] else [response] endif where: [condition] is the same format that is used for route conditions [response] is a text response elif and else blocks are optional For example: if $session.params.user-age >= 21 Ok, you may enter. else Sorry, you cannot enter. endif Both [condition] and [response] can use inline system functions to generate dynamic values during conversations.
- Dialogflow CX doesn't impose any structure on this data, so you can choose any structure that suits your system.
- Dialogflow CX doesn't impose any structure on this data, so you can choose any structure that suits your system.
- For more information, please check the references of system functions and route conditions .

