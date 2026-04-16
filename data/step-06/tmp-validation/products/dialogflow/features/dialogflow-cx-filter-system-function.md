---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T02:32:45.718Z"
product_name: "Dialogflow"
product_slug: "dialogflow"
feature_name: "Dialogflow CX FILTER system function"
feature_slug: "dialogflow-cx-filter-system-function"
latest_feature_date: "2023-09-15"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2"
  - "https://docs.cloud.google.com/dialogflow/cx/docs/concept/data-store/search-configure"
keywords:
  - "filter"
  - "provides"
  - "system"
---

# Dialogflow CX FILTER system function

Product: Dialogflow
Coverage: MEDIUM

## Step 02 Summary

Dialogflow CX provides the FILTER system function.

## Extended Definition

Dialogflow CX provides the FILTER system function.

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
- Final score: 84
- Re-rank relevance: N/A

Evidence snippets:
- Classification threshold link To filter out false positive results and still get variety in matched natural language inputs for your agent, you can tune the machine learning classification threshold.
- Classification threshold To filter out false positive results and still get variety in matched natural language inputs for your agent, you can tune the machine learning classification threshold.
- Safety filters link Configure sensitivity levels of safety filters with respect to different Responsible AI (RAI) categories.
- Safety filters Configure sensitivity levels of safety filters with respect to different Responsible AI (RAI) categories.

### "Package com.google.cloud.dialogflow.v2 (4.94.0) \_|\_ Java client libraries\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2](https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2)
- Source ID: `site-java-reference`
- Final score: 79
- Re-rank relevance: N/A

Evidence snippets:
- Context Filter Settings Settings that determine how to filter recent conversation context when generating suggestions. com. google. cloud. dialogflow. v2.
- Builder Settings that determine how to filter recent conversation context when generating suggestions. com. google. cloud. dialogflow. v2.
- This class provides the ability to make remote calls to the backing service through method com. google. cloud. dialogflow. v2.
- This class provides the ability to make remote calls to the backing service through method com. google. cloud. dialogflow. v2.

### Data store search configuration \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/data-store/search-configure](https://docs.cloud.google.com/dialogflow/cx/docs/concept/data-store/search-configure)
- Source ID: `site-docs-root`
- Final score: 77
- Re-rank relevance: N/A

Evidence snippets:
- JSON of this format { "condition" : "uri: ANY(\"http://www.example.com/docs/$session.params.doc id\")" , "boost" : 0.5 } Example API input: If you are calling the API directly, you must provide ConditionBoostSpecs in a full SearchConfig object.The following search configuration describes a boost spec: "searchConfig" : { "boostSpecs" : [ { "dataStores" : [ "DATASTORE ID" ], "spec" : [ { "conditionBoostSpecs" : { "condition" : "CONDITION" , "boost" : "1.0" } } ] } ] } Note: DATASTORE ID is the full name of the data store: projects/your project id/locations/your location/collections/your collection name/dataStores/your datastore name , CONDITION must follow the Vertex AI Search's filter expression syntax , and the boost value must be between -1.0 and 1.0.
- In this example, the filter only returns documents with numeric field greater than or equal to the value of $session.params.min value AND where stock availability is "IN STOCK" . "numeric field >= $session.params.min value AND stock availability: ANY(\"IN STOCK\")" Example API filter configuration: If you are calling the API directly, you must provide filter strings in a full SearchConfig object: "searchConfig" : { "filterSpecs" : [ { "dataStores" : [ "DATASTORE ID" ], "filter" : "CONDITION" } ] } Note: DATASTORE ID is the full name of the data store: projects/your project id/locations/your location/collections/your collection name/dataStores/your datastore name , and CONDITION must follow the Vertex AI Search's filter expression syntax .
- Runtime substitution errors If a ConditionBoostSpec JSON string is valid and parsable but an error occurs during the runtime substitution of Dialogflow CX expressions within its fields (such as the condition string), these errors will be reported in diagnostic info as SystemFunctionResults .
- Invalid expressions If a Boost Spec condition or a Filter Spec string contains an invalid Dialogflow CX expression (for example, incorrect syntax or reference to a non-existent parameter), the expression compilation will fail.

