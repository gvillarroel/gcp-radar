---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T02:32:45.728Z"
product_name: "Dialogflow"
product_slug: "dialogflow"
feature_name: "Dialogflow CX interaction logging export to BigQuery"
feature_slug: "dialogflow-cx-interaction-logging-export-to-bigquery"
latest_feature_date: "2023-07-05"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dialogflow/cx/docs/concept/export-bq"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2"
  - "https://docs.cloud.google.com/dialogflow/es/docs/agents-settings"
keywords:
  - "interaction"
  - "exporting"
  - "logging"
  - "export"
  - "supports"
---

# Dialogflow CX interaction logging export to BigQuery

Product: Dialogflow
Coverage: MEDIUM

## Step 02 Summary

Dialogflow CX supports exporting interaction logs to BigQuery.

## Extended Definition

Dialogflow CX supports exporting interaction logs to BigQuery.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/dialogflow/cx/docs/concept/export-bq](https://docs.cloud.google.com/dialogflow/cx/docs/concept/export-bq)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2](https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2)
- [https://docs.cloud.google.com/dialogflow/es/docs/agents-settings](https://docs.cloud.google.com/dialogflow/es/docs/agents-settings)

## Supporting Pages

### "Interaction logging export to BigQuery \_|\_ Dialogflow CX \_|\_ Google\

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/export-bq](https://docs.cloud.google.com/dialogflow/cx/docs/concept/export-bq)
- Source ID: `site-docs-root`
- Final score: 149
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Home Documentation AI and ML Dialogflow Dialogflow CX Send feedback Interaction logging export to BigQuery Stay organized with collections Save and categorize content based on your preferences.
- Configuration To configure interaction logging export: Ensure that interaction logging is enabled.
- You can export interaction logging to BigQuery .
- Once configured, all live interaction logging is written to your BigQuery table.

### "Package com.google.cloud.dialogflow.v2 (4.94.0) \_|\_ Java client libraries\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2](https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2)
- Source ID: `site-java-reference`
- Final score: 111
- Re-rank relevance: N/A

Evidence snippets:
- A conversation is an interaction between an agent, including live agents and Dialogflow agents, and a support customer.
- A conversation is an interaction between an agent, including live agents and Dialogflow agents, and a support customer.
- Logging Config Defines logging behavior for conversation lifecycle events. com. google. cloud. dialogflow. v2.
- Export Document Request Request message for Documents.ExportDocument . com. google. cloud. dialogflow. v2.

### Agent settings \_|\_ Dialogflow ES \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/es/docs/agents-settings](https://docs.cloud.google.com/dialogflow/es/docs/agents-settings)
- Source ID: `site-iam-reference`
- Final score: 91
- Re-rank relevance: N/A

Evidence snippets:
- The following are included in the export of an agent: Intents Entities Most agent settings (see list below for excluded settings) The following are not included in the export of an agent and are not overwritten when importing or restoring: Agent name Inline editor files package.json and index.json Integration settings Edition Knowledge bases and knowledge documents Speech settings Interaction logs Maximum agent size (unzipped content) for agent import/restore should not exceed 50 MB.
- Indicates whether Interaction logging is enabled for the agent.
- The following settings are available: Improve Speech Recognition Quality Enable Enhanced Speech Models and Data Logging : See Data logging and enhanced speech models .
- Log Settings : Log interactions to Dialogflow : Note: To view or change this setting with the console, you must have the IAM Project Owner role .

