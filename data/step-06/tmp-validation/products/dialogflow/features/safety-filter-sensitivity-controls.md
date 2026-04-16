---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T02:32:45.665Z"
product_name: "Dialogflow"
product_slug: "dialogflow"
feature_name: "Safety filter sensitivity controls"
feature_slug: "safety-filter-sensitivity-controls"
latest_feature_date: "2024-08-15"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2"
  - "https://docs.cloud.google.com/dialogflow/cx/docs/concept/data-store/search-configure"
keywords:
  - "sensitivity"
  - "safety"
  - "controls"
  - "filter"
  - "lets"
---

# Safety filter sensitivity controls

Product: Dialogflow
Coverage: MEDIUM

## Step 02 Summary

Dialogflow CX lets you configure sensitivity levels for safety filters across Responsible AI categories.

## Extended Definition

Dialogflow CX lets you configure sensitivity levels for safety filters across Responsible AI categories.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings](https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2](https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2)
- [https://docs.cloud.google.com/dialogflow/cx/docs/concept/data-store/search-configure](https://docs.cloud.google.com/dialogflow/cx/docs/concept/data-store/search-configure)

## Supporting Pages

### Agent settings \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings](https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings)
- Source ID: `site-docs-root`
- Final score: 142
- Re-rank relevance: N/A

Evidence snippets:
- Safety filters link Configure sensitivity levels of safety filters with respect to different Responsible AI (RAI) categories.
- Safety filters Configure sensitivity levels of safety filters with respect to different Responsible AI (RAI) categories.
- Safety filters Configure sensitivity levels of safety filters with respect to different Responsible AI (RAI) categories.
- The sensitivity level can be customized by choosing one of Block none (disabling RAI checks), Block few (blocking only high-probability instances of harmful content), Block some (medium and high probability instances), and Block most (low, medium, and high probability) for each category.

### "Package com.google.cloud.dialogflow.v2 (4.94.0) \_|\_ Java client libraries\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2](https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2)
- Source ID: `site-java-reference`
- Final score: 63
- Re-rank relevance: N/A

Evidence snippets:
- Context Filter Settings Settings that determine how to filter recent conversation context when generating suggestions. com. google. cloud. dialogflow. v2.
- Builder Settings that determine how to filter recent conversation context when generating suggestions. com. google. cloud. dialogflow. v2.
- Sensitivity Level Enum for user-configurable sensitivity levels. com. google. cloud. dialogflow. v2.
- It provides more controls for customized ranking than the com. google. cloud. dialogflow. v2.

### Data store search configuration \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/data-store/search-configure](https://docs.cloud.google.com/dialogflow/cx/docs/concept/data-store/search-configure)
- Source ID: `site-docs-root`
- Final score: 54
- Re-rank relevance: N/A

Evidence snippets:
- JSON of this format { "condition" : "uri: ANY(\"http://www.example.com/docs/$session.params.doc id\")" , "boost" : 0.5 } Example API input: If you are calling the API directly, you must provide ConditionBoostSpecs in a full SearchConfig object.The following search configuration describes a boost spec: "searchConfig" : { "boostSpecs" : [ { "dataStores" : [ "DATASTORE ID" ], "spec" : [ { "conditionBoostSpecs" : { "condition" : "CONDITION" , "boost" : "1.0" } } ] } ] } Note: DATASTORE ID is the full name of the data store: projects/your project id/locations/your location/collections/your collection name/dataStores/your datastore name , CONDITION must follow the Vertex AI Search's filter expression syntax , and the boost value must be between -1.0 and 1.0.
- In this example, the filter only returns documents with numeric field greater than or equal to the value of $session.params.min value AND where stock availability is "IN STOCK" . "numeric field >= $session.params.min value AND stock availability: ANY(\"IN STOCK\")" Example API filter configuration: If you are calling the API directly, you must provide filter strings in a full SearchConfig object: "searchConfig" : { "filterSpecs" : [ { "dataStores" : [ "DATASTORE ID" ], "filter" : "CONDITION" } ] } Note: DATASTORE ID is the full name of the data store: projects/your project id/locations/your location/collections/your collection name/dataStores/your datastore name , and CONDITION must follow the Vertex AI Search's filter expression syntax .
- Invalid expressions If a Boost Spec condition or a Filter Spec string contains an invalid Dialogflow CX expression (for example, incorrect syntax or reference to a non-existent parameter), the expression compilation will fail.
- Search condition inputs Search results are configured using the boost specification ( BoostSpec ) and filter specification ( FilterSpec ) fields in a SearchConfig object.

