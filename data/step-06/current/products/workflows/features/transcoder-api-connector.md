---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T08:22:23.507Z"
product_name: "Workflows"
product_slug: "workflows"
feature_name: "Transcoder API connector"
feature_slug: "transcoder-api-connector"
latest_feature_date: "2024-05-31"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/workflows/docs/reference/googleapis"
  - "https://docs.cloud.google.com/workflows/docs/reference/connectors/gke/Overview"
  - "https://docs.cloud.google.com/workflows/docs/tutorials/translation-connector"
keywords:
  - "transcoder"
  - "integrates"
  - "connector"
---

# Transcoder API connector

Product: Workflows
Coverage: MEDIUM

## Step 02 Summary

This connector integrates Workflows with the Transcoder API.

## Extended Definition

This connector integrates Workflows with the Transcoder API.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/workflows/docs/reference/googleapis](https://docs.cloud.google.com/workflows/docs/reference/googleapis)
- [https://docs.cloud.google.com/workflows/docs/reference/connectors/gke/Overview](https://docs.cloud.google.com/workflows/docs/reference/connectors/gke/Overview)
- [https://docs.cloud.google.com/workflows/docs/tutorials/translation-connector](https://docs.cloud.google.com/workflows/docs/tutorials/translation-connector)

## Supporting Pages

### Connectors reference \_|\_ Workflows \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/workflows/docs/reference/googleapis](https://docs.cloud.google.com/workflows/docs/reference/googleapis)
- Source ID: `site-api-reference`
- Final score: 73
- Re-rank relevance: N/A

Evidence snippets:
- List of supported connectors Google Cloud product Connector Long-running operation type AI Platform Training ml Job Application Integration integrations None Batch batch Job Operation BigQuery bigquery Job BigQuery Data Transfer Service bigquerydatatransfer TransferRun Cloud Build cloudbuild Operation Cloud Run functions cloudfunctions Operation Cloud Natural Language API language None Cloud Run run None Cloud Scheduler cloudscheduler None Cloud SQL sqladmin Operation Cloud Storage storage None Cloud Tasks cloudtasks None Cloud Translation translate Operation Compute Engine compute Operation Dataflow dataflow Job Document AI documentai Operation Processor Firestore firestore Operation Google Forms forms None Google Kubernetes Engine container Operation Google Sheets sheets None Kubernetes API (control plane) gke None Pub/Sub pubsub None Resource Manager cloudresourcemanager None Secret Manager secretmanager None Spanner spanner Operation Storage Transfer Service storagetransfer Operation Transcoder API transcoder Job Vertex AI aiplatform (Vertex AI) Artifact Execution Job Operation Pipeline Schedule Study Trial Workflows workflows workflowexecutions Operation Execution Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- You can specify a timeout value and polling policy using the connector params block: - STEP NAME : call : CONNECTOR args : ARG : ARG VALUE [ ... ] body : KEY : KEY VALUE [...] connector params : timeout : TIMEOUT IN SECONDS polling policy : initial delay : INITIAL DELAY IN SECONDS multiplier : MULTIPLIER VALUE max delay : MAX DELAY IN SECONDS skip polling : SKIP POLLING SWITCH scopes : OAUTH2 SCOPE result : RESPONSE VALUE Replace the following: STEP NAME : the name of the step.
- SKIP POLLING SWITCH : if set to True , the connector invocation call is non-blocking if the initial request to manage or update the resource succeeds (usually HTTP POST , HTTP UPDATE , or HTTP DELETE ).
- Home Documentation Application development Workflows Reference Send feedback Connectors reference Stay organized with collections Save and categorize content based on your preferences.

### Kubernetes API Connector Overview \_|\_ Workflows \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/workflows/docs/reference/connectors/gke/Overview](https://docs.cloud.google.com/workflows/docs/reference/connectors/gke/Overview)
- Source ID: `site-api-reference`
- Final score: 68
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Home Documentation Application development Workflows Reference Send feedback Kubernetes API Connector Overview Stay organized with collections Save and categorize content based on your preferences.
- This connector uses a provided cluster id field and optional project and location fields to make a request to a cluster's control plane endpoint, even if the cluster is private.
- There is no need to import or load connector libraries in a workflow—connectors work out of the box when used in a call step.
- The Workflows connector defines the built-in functions that can be used to access other APIs within a workflow.

### "Run a batch translation using the Cloud Translation connector \_|\_ Workflows\

- URL: [https://docs.cloud.google.com/workflows/docs/tutorials/translation-connector](https://docs.cloud.google.com/workflows/docs/tutorials/translation-connector)
- Source ID: `site-docs-root`
- Final score: 64
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Create a Cloud Storage bucket to hold the files to translate: BUCKET INPUT = ${ GOOGLE CLOUD PROJECT } -input-files gcloud storage buckets create gs:// ${ BUCKET INPUT } Create two files in English and upload them to the input bucket: echo "Hello World!" > file1.txt gcloud storage cp file1.txt gs:// ${ BUCKET INPUT } echo "Workflows connectors simplify calling services." > file2.txt gcloud storage cp file2.txt gs:// ${ BUCKET INPUT } Deploy and execute the workflow A workflow is made up of a series of steps described using the Workflows syntax, which can be written in either YAML or JSON format.
- Home Documentation Application development Workflows Guides Send feedback Run a batch translation using the Cloud Translation connector Stay organized with collections Save and categorize content based on your preferences.
- If using an AutoML Translation model or glossary other than the default, ensure that it resides in the same location as the call to the connector; otherwise, an INVALID ARGUMENT (400) error is returned.
- This tutorial shows you how to create a workflow that uses the Cloud Translation API connector to translate files to other languages in asynchronous batch mode.

