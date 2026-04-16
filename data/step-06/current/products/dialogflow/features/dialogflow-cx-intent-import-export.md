---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:17:30.385Z"
product_name: "Dialogflow"
product_slug: "dialogflow"
feature_name: "Dialogflow CX intent import/export"
feature_slug: "dialogflow-cx-intent-import-export"
latest_feature_date: "2023-09-19"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2"
  - "https://docs.cloud.google.com/dialogflow/cx/docs/reference/rest/v3/ExportIntentsResponse"
  - "https://docs.cloud.google.com/dialogflow/es/docs/entities-export"
keywords:
  - "dialogflow"
  - "cx"
  - "intent"
  - "import"
  - "export"
  - "supports"
  - "importing"
  - "exporting"
---

# Dialogflow CX intent import/export

Product: Dialogflow
Coverage: MEDIUM

## Step 02 Summary

Dialogflow CX supports importing and exporting intents; Dialogflow CX supports importing and exporting intents.

## Extended Definition

Dialogflow CX supports importing and exporting intents; Dialogflow CX supports importing and exporting intents.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2](https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2)
- [https://docs.cloud.google.com/dialogflow/cx/docs/reference/rest/v3/ExportIntentsResponse](https://docs.cloud.google.com/dialogflow/cx/docs/reference/rest/v3/ExportIntentsResponse)
- [https://docs.cloud.google.com/dialogflow/es/docs/entities-export](https://docs.cloud.google.com/dialogflow/es/docs/entities-export)

## Supporting Pages

### "Package com.google.cloud.dialogflow.v2 (4.94.0) \_|\_ Java client libraries\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2](https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2)
- Source ID: `site-java-reference`
- Final score: 133
- Re-rank relevance: N/A

Evidence snippets:
- Input Config Represents the configuration of importing a set of conversation files in Google Cloud Storage. com. google. cloud. dialogflow. v2.
- Builder Represents the configuration of importing a set of conversation files in Google Cloud Storage. com. google. cloud. dialogflow. v2.
- Import Document Template The template used for importing documents. com. google. cloud. dialogflow. v2.
- Builder The template used for importing documents. com. google. cloud. dialogflow. v2.

### ExportIntentsResponse \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/reference/rest/v3/ExportIntentsResponse](https://docs.cloud.google.com/dialogflow/cx/docs/reference/rest/v3/ExportIntentsResponse)
- Source ID: `site-docs-reference`
- Final score: 126
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation AI and ML Dialogflow Dialogflow CX Reference Send feedback ExportIntentsResponse Stay organized with collections Save and categorize content based on your preferences.
- This field is populated only if intentsUri is specified in ExportIntentsRequest . intentsContent object ( InlineDestination ) Uncompressed byte content for intents.
- The exported intents. intents can be only one of the following: intentsUri string The URI to a file containing the exported intents.
- This field is populated only if intentsContentInline is set to true in ExportIntentsRequest .

### Export and import entities \_|\_ Dialogflow ES \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/es/docs/entities-export](https://docs.cloud.google.com/dialogflow/es/docs/entities-export)
- Source ID: `site-iam-reference`
- Final score: 116
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation AI and ML Dialogflow Dialogflow ES Send feedback Export and import entities Stay organized with collections Save and categorize content based on your preferences.
- You can export and import entities to simplify creation or movement of large amounts of entity data.
- Format The hand-editable import/export format is either JSON or CSV.
- For example, the following are two map entity entries: "New York City", "New York City", "NYC", "New York City, USA" "Philadelphia", "Philadelphia", "Philly", "Philadelphia, USA" Export To export an entity: Hover your mouse over an entity and click the cloud download cloud download icon.

