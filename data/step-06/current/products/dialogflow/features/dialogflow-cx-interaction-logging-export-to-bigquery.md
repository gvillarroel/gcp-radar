---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:17:30.407Z"
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
  - "https://docs.cloud.google.com/dialogflow/cx/docs/reference/rest/v3/AdvancedSettings"
keywords:
  - "dialogflow"
  - "cx"
  - "interaction"
  - "logging"
  - "export"
  - "bigquery"
  - "supports"
  - "exporting"
---

# Dialogflow CX interaction logging export to BigQuery

Product: Dialogflow
Coverage: MEDIUM

## Step 02 Summary

Dialogflow CX supports exporting interaction logs to BigQuery.

## Extended Definition

Dialogflow CX supports exporting interaction logs to BigQuery.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dialogflow/cx/docs/concept/export-bq](https://docs.cloud.google.com/dialogflow/cx/docs/concept/export-bq)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2](https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2)
- [https://docs.cloud.google.com/dialogflow/cx/docs/reference/rest/v3/AdvancedSettings](https://docs.cloud.google.com/dialogflow/cx/docs/reference/rest/v3/AdvancedSettings)

## Supporting Pages

### "Interaction logging export to BigQuery \_|\_ Dialogflow CX \_|\_ Google\

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/export-bq](https://docs.cloud.google.com/dialogflow/cx/docs/concept/export-bq)
- Source ID: `site-docs-root`
- Final score: 161
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation AI and ML Dialogflow Dialogflow CX Send feedback Interaction logging export to BigQuery Stay organized with collections Save and categorize content based on your preferences.
- You can export interaction logging to BigQuery .
- Use the following SQL statement for creation: CREATE TABLE < your dataset name > . dialogflow bigquery export data ( project id STRING , agent id STRING , conversation name STRING , turn position INTEGER , request time TIMESTAMP , language code STRING , request JSON , response JSON , partial responses JSON , derived data JSON , conversation signals JSON , bot answer feedback JSON ); Configure your agent settings to enable BigQuery export, and to provide the dataset and table names created above.
- Service account format: service-<dialogflow-project-number>@gcp-sa-dialogflow.iam.gserviceaccount.com The user configuring the export in Dialogflow must have permissions on the BigQuery project.

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

### AdvancedSettings \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/reference/rest/v3/AdvancedSettings](https://docs.cloud.google.com/dialogflow/cx/docs/reference/rest/v3/AdvancedSettings)
- Source ID: `site-docs-reference`
- Final score: 93
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- JSON representation { "audioExportGcsDestination" : { object ( GcsDestination ) } , "speechSettings" : { object ( SpeechSettings ) } , "dtmfSettings" : { object ( DtmfSettings ) } , "loggingSettings" : { object ( LoggingSettings ) } } Fields audioExportGcsDestination object ( GcsDestination ) If present, incoming audio is exported by Dialogflow to the configured Google Cloud Storage destination.
- JSON representation { "enableStackdriverLogging" : boolean , "enableInteractionLogging" : boolean , "enableConsentBasedRedaction" : boolean } Fields enableStackdriverLogging boolean Enables Google Cloud Logging. enableInteractionLogging boolean Enables DF Interaction logging. enableConsentBasedRedaction boolean Enables consent-based end-user input redaction, if true, a pre-defined session parameter $session.params.conversation-redaction will be used to determine if the utterance should be redacted.
- GcsDestination Google Cloud Storage location for a Dialogflow operation that writes or exports objects (e.g. exported agent or transcripts) outside of Dialogflow.
- Settings for Dialogflow History, Contact Center messages, StackDriver logs, and speech logging.

