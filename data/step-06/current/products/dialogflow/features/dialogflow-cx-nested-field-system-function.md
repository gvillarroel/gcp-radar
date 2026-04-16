---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:17:30.413Z"
product_name: "Dialogflow"
product_slug: "dialogflow"
feature_name: "Dialogflow CX NESTED_FIELD system function"
feature_slug: "dialogflow-cx-nested-field-system-function"
latest_feature_date: "2023-06-27"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dialogflow/es/docs/basics"
  - "https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings"
  - "https://docs.cloud.google.com/dialogflow/cx/docs/concept/data-store/search-configure"
keywords:
  - "dialogflow"
  - "cx"
  - "nested"
  - "field"
  - "system"
  - "provides"
---

# Dialogflow CX NESTED_FIELD system function

Product: Dialogflow
Coverage: MEDIUM

## Step 02 Summary

Dialogflow CX provides the NESTED_FIELD system function.

## Extended Definition

Dialogflow CX provides the NESTED_FIELD system function.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dialogflow/es/docs/basics](https://docs.cloud.google.com/dialogflow/es/docs/basics)
- [https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings](https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings)
- [https://docs.cloud.google.com/dialogflow/cx/docs/concept/data-store/search-configure](https://docs.cloud.google.com/dialogflow/cx/docs/concept/data-store/search-configure)

## Supporting Pages

### Dialogflow ES basics \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/es/docs/basics](https://docs.cloud.google.com/dialogflow/es/docs/basics)
- Source ID: `site-iam-reference`
- Final score: 79
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- When an intent is matched, Dialogflow provides the action to your system, and you can use the action to trigger certain actions defined in your system.
- Dialogflow provides predefined system entities that can match many common types of data.
- Parameters : When an intent is matched at runtime, Dialogflow provides the extracted values from the end-user expression as parameters .
- Dialogflow Console Dialogflow provides a web user interface called the Dialogflow Console ( visit documentation , open console ).

### Agent settings \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings](https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings)
- Source ID: `site-docs-root`
- Final score: 78
- Re-rank relevance: N/A

Evidence snippets:
- If you are using telephony gateway, make sure the Dialogflow Service Agent service account service- PROJECT NUMBER @gcp-sa-dialogflow.iam.gserviceaccount.com is granted with "AutoML Predictor" in your custom voice project.
- If you are using telephony gateway, make sure the Dialogflow Service Agent service account service- PROJECT NUMBER @gcp-sa-dialogflow.iam.gserviceaccount.com is granted with "AutoML Predictor" in your custom voice project.
- You may enable Custom voice for your agent by selecting the custom voice option from the voice selection dropbox and specifying the custom voice name in the corresponding field.
- You may enable Custom voice for your agent by selecting the custom voice option from the voice name dropbox and specifying the custom voice name in the corresponding field.

### Data store search configuration \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/data-store/search-configure](https://docs.cloud.google.com/dialogflow/cx/docs/concept/data-store/search-configure)
- Source ID: `site-docs-root`
- Final score: 73
- Re-rank relevance: N/A

Evidence snippets:
- Runtime substitution errors If a ConditionBoostSpec JSON string is valid and parsable but an error occurs during the runtime substitution of Dialogflow CX expressions within its fields (such as the condition string), these errors will be reported in diagnostic info as SystemFunctionResults .
- Errors related to expression compilation are typically returned in the DetectIntentResponse within the diagnostic info field as SystemFunctionResults .
- For more information about expression syntax, see the Dialogflow CX conditions and system functions reference .
- In this example, the filter only returns documents with numeric field greater than or equal to the value of $session.params.min value AND where stock availability is "IN STOCK" . "numeric field >= $session.params.min value AND stock availability: ANY(\"IN STOCK\")" Example API filter configuration: If you are calling the API directly, you must provide filter strings in a full SearchConfig object: "searchConfig" : { "filterSpecs" : [ { "dataStores" : [ "DATASTORE ID" ], "filter" : "CONDITION" } ] } Note: DATASTORE ID is the full name of the data store: projects/your project id/locations/your location/collections/your collection name/dataStores/your datastore name , and CONDITION must follow the Vertex AI Search's filter expression syntax .

