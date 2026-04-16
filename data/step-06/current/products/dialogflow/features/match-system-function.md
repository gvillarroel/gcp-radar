---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:17:30.427Z"
product_name: "Dialogflow"
product_slug: "dialogflow"
feature_name: "MATCH system function"
feature_slug: "match-system-function"
latest_feature_date: "2022-12-27"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dialogflow/cx/docs/concept/data-store/search-configure"
  - "https://docs.cloud.google.com/dialogflow/cx/docs/reference/condition"
  - "https://docs.cloud.google.com/dialogflow/cx/docs/reference/code-block-system-library"
keywords:
  - "match"
  - "system"
  - "dialogflow"
  - "cx"
  - "supports"
  - "expressions"
  - "conditions"
---

# MATCH system function

Product: Dialogflow
Coverage: MEDIUM

## Step 02 Summary

Dialogflow CX supports the MATCH system function for expressions and conditions.

## Extended Definition

Dialogflow CX supports the MATCH system function for expressions and conditions.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dialogflow/cx/docs/concept/data-store/search-configure](https://docs.cloud.google.com/dialogflow/cx/docs/concept/data-store/search-configure)
- [https://docs.cloud.google.com/dialogflow/cx/docs/reference/condition](https://docs.cloud.google.com/dialogflow/cx/docs/reference/condition)
- [https://docs.cloud.google.com/dialogflow/cx/docs/reference/code-block-system-library](https://docs.cloud.google.com/dialogflow/cx/docs/reference/code-block-system-library)

## Supporting Pages

### Data store search configuration \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/data-store/search-configure](https://docs.cloud.google.com/dialogflow/cx/docs/concept/data-store/search-configure)
- Source ID: `site-docs-root`
- Final score: 113
- Re-rank relevance: N/A

Evidence snippets:
- Runtime substitution errors If a ConditionBoostSpec JSON string is valid and parsable but an error occurs during the runtime substitution of Dialogflow CX expressions within its fields (such as the condition string), these errors will be reported in diagnostic info as SystemFunctionResults .
- Both BoostSpec conditions and FilterSpec strings can incorporate Dialogflow CX expressions to make them dynamic.
- For more information about expression syntax, see the Dialogflow CX conditions and system functions reference .
- You can use Dialogflow CX expressions to make the results dynamic, such as $session.params.YOUR PARAM NAME or $request.end-user-metadata.YOUR KEY . boost : (Number) A value between -1.0 and 1.0 that determines the strength of the boost.

### Conditions reference \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/reference/condition](https://docs.cloud.google.com/dialogflow/cx/docs/reference/condition)
- Source ID: `site-docs-reference`
- Final score: 112
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For example, for a list session parameter list with value [1, 2, 3], the following conditions are true: $sys.func.CONTAIN($session.params.list, 1) = true $sys.func.COUNT($session.params.list) = 3 Compound expressions Note: The references described below ( $a, $b, $c ) are short to aid description.
- Boolean constants The following boolean constants are defined: true false To force a route to be called upon evaluation, use the following condition: true System functions The system functions you can use in conditions are found in the system functions reference .
- Home Documentation AI and ML Dialogflow Dialogflow CX Reference Send feedback Conditions reference Stay organized with collections Save and categorize content based on your preferences.
- This syntax allows from very simple to very complex expressions using parameter values , sentiment values , comparison operators , boolean operators , and system functions .

### Code block system library \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/reference/code-block-system-library](https://docs.cloud.google.com/dialogflow/cx/docs/reference/code-block-system-library)
- Source ID: `site-docs-reference`
- Final score: 101
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation AI and ML Dialogflow Dialogflow CX Reference Send feedback Code block system library Stay organized with collections Save and categorize content based on your preferences.
- Sample: matches = flows . flow1 . match intent ( history . last user utterance ) . matches if matches and matches [ 0 ] . intent == "some intent" : to country = matches [ 0 ] . parameters . get ( "to country" ) if to country : respond ( f "To confirm, you're going to { to country } , right?" ) FlowInvocation A flow invocation, found in the conversation history.
- Attributes: intent: Instance of Intent . parameters: Parameters as a dictionary from string to Any. confidence: Match confidence score as a float.
- When set, it is set to the same value as the $next-action value used in conditions. playbooks An instance of Playbooks .

