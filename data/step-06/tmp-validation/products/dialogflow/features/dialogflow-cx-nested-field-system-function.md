---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T02:32:45.731Z"
product_name: "Dialogflow"
product_slug: "dialogflow"
feature_name: "Dialogflow CX NESTED_FIELD system function"
feature_slug: "dialogflow-cx-nested-field-system-function"
latest_feature_date: "2023-06-27"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings"
  - "https://docs.cloud.google.com/dialogflow/cx/docs/concept/data-store/search-configure"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2"
keywords:
  - "nested"
  - "field"
  - "provides"
  - "system"
---

# Dialogflow CX NESTED_FIELD system function

Product: Dialogflow
Coverage: MEDIUM

## Step 02 Summary

Dialogflow CX provides the NESTED_FIELD system function.

## Extended Definition

Dialogflow CX provides the NESTED_FIELD system function.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings](https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings)
- [https://docs.cloud.google.com/dialogflow/cx/docs/concept/data-store/search-configure](https://docs.cloud.google.com/dialogflow/cx/docs/concept/data-store/search-configure)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2](https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2)

## Supporting Pages

### Agent settings \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings](https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings)
- Source ID: `site-docs-root`
- Final score: 78
- Re-rank relevance: N/A

Evidence snippets:
- You may enable Custom voice for your agent by selecting the custom voice option from the voice selection dropbox and specifying the custom voice name in the corresponding field.
- You may enable Custom voice for your agent by selecting the custom voice option from the voice name dropbox and specifying the custom voice name in the corresponding field.
- Token input budget is also used by the following: System instructions and examples: Automatically added to the prompt.
- Token input budget is also used by the following: System instructions and examples: Automatically added to the prompt.

### Data store search configuration \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/data-store/search-configure](https://docs.cloud.google.com/dialogflow/cx/docs/concept/data-store/search-configure)
- Source ID: `site-docs-root`
- Final score: 73
- Re-rank relevance: N/A

Evidence snippets:
- Runtime substitution errors If a ConditionBoostSpec JSON string is valid and parsable but an error occurs during the runtime substitution of Dialogflow CX expressions within its fields (such as the condition string), these errors will be reported in diagnostic info as SystemFunctionResults .
- Errors related to expression compilation are typically returned in the DetectIntentResponse within the diagnostic info field as SystemFunctionResults .
- In this example, the filter only returns documents with numeric field greater than or equal to the value of $session.params.min value AND where stock availability is "IN STOCK" . "numeric field >= $session.params.min value AND stock availability: ANY(\"IN STOCK\")" Example API filter configuration: If you are calling the API directly, you must provide filter strings in a full SearchConfig object: "searchConfig" : { "filterSpecs" : [ { "dataStores" : [ "DATASTORE ID" ], "filter" : "CONDITION" } ] } Note: DATASTORE ID is the full name of the data store: projects/your project id/locations/your location/collections/your collection name/dataStores/your datastore name , and CONDITION must follow the Vertex AI Search's filter expression syntax .
- Search condition inputs Search results are configured using the boost specification ( BoostSpec ) and filter specification ( FilterSpec ) fields in a SearchConfig object.

### "Package com.google.cloud.dialogflow.v2 (4.94.0) \_|\_ Java client libraries\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2](https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2)
- Source ID: `site-java-reference`
- Final score: 71
- Re-rank relevance: N/A

Evidence snippets:
- A copy of google.cloud.discoveryengine.v1main.BoostSpec, field documentation is available at com. google. cloud. dialogflow. v2.
- A copy of google.cloud.discoveryengine.v1main.BoostSpec, field documentation is available at com. google. cloud. dialogflow. v2.
- This class provides the ability to make remote calls to the backing service through method com. google. cloud. dialogflow. v2.
- This class provides the ability to make remote calls to the backing service through method com. google. cloud. dialogflow. v2.

