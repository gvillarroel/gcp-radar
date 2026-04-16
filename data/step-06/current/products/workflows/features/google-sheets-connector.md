---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T08:22:23.507Z"
product_name: "Workflows"
product_slug: "workflows"
feature_name: "Google Sheets connector"
feature_slug: "google-sheets-connector"
latest_feature_date: "2024-05-31"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/workflows/docs/tutorials/trigger-workflow-from-sheets"
  - "https://docs.cloud.google.com/workflows/docs/tutorials/workflow-waits-callback-sheets"
  - "https://docs.cloud.google.com/workflows/docs/reference/googleapis"
keywords:
  - "sheets"
  - "integrates"
  - "connector"
---

# Google Sheets connector

Product: Workflows
Coverage: MEDIUM

## Step 02 Summary

This connector integrates Workflows with Google Sheets.

## Extended Definition

This connector integrates Workflows with Google Sheets.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/workflows/docs/tutorials/trigger-workflow-from-sheets](https://docs.cloud.google.com/workflows/docs/tutorials/trigger-workflow-from-sheets)
- [https://docs.cloud.google.com/workflows/docs/tutorials/workflow-waits-callback-sheets](https://docs.cloud.google.com/workflows/docs/tutorials/workflow-waits-callback-sheets)
- [https://docs.cloud.google.com/workflows/docs/reference/googleapis](https://docs.cloud.google.com/workflows/docs/reference/googleapis)

## Supporting Pages

### "Pause and resume a workflow using callbacks and Google Sheets \_|\_ Workflows\

- URL: [https://docs.cloud.google.com/workflows/docs/tutorials/workflow-waits-callback-sheets](https://docs.cloud.google.com/workflows/docs/tutorials/workflow-waits-callback-sheets)
- Source ID: `site-docs-root-2`
- Final score: 80
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For example: - create spreadsheet: call: googleapis.sheets.v4.spreadsheets.create args: body: connector params: scopes: ${driveScope} result: resp - assign sheet id: assign: - sheetId: ${resp.spreadsheetId} Extend Google Sheets using Apps Script Apps Script lets you programmatically create, read, and edit Google Sheets.
- Create and deploy a workflow that calls the Google Sheets API connector to append data to the spreadsheet.
- The workflow writes to a Sheets spreadsheet using the Google Sheets API connector .
- You can also use the Google Sheets API connector to create a spreadsheet.

### "Trigger a workflow from Google Sheets \_|\_ Workflows \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/workflows/docs/tutorials/trigger-workflow-from-sheets](https://docs.cloud.google.com/workflows/docs/tutorials/trigger-workflow-from-sheets)
- Source ID: `site-docs-root-2`
- Final score: 80
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For example: { "timeZone": "America/Toronto", "dependencies": { }, "exceptionLogging": "STACKDRIVER", "runtimeVersion": "V8", "oauthScopes": [ "https://www.googleapis.com/auth/script.external request", "https://www.googleapis.com/auth/cloud-platform", "https://www.googleapis.com/auth/spreadsheets" ] } This sets explicit scopes to: Connect to an external service See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account See, edit, create, and delete all your Sheets spreadsheets Click Save save .
- Home Documentation Application development Workflows Guides Send feedback Trigger a workflow from Google Sheets Stay organized with collections Save and categorize content based on your preferences.
- Deploy a workflow that calls the Compute Engine API connector and creates a Compute Engine VM instance based on the specifications collected through the form.
- Google Sheets is a cloud-based spreadsheet solution that supports real-time collaboration and provides tools to visualize, process, and communicate data.

### Connectors reference \_|\_ Workflows \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/workflows/docs/reference/googleapis](https://docs.cloud.google.com/workflows/docs/reference/googleapis)
- Source ID: `site-api-reference`
- Final score: 62
- Re-rank relevance: N/A

Evidence snippets:
- List of supported connectors Google Cloud product Connector Long-running operation type AI Platform Training ml Job Application Integration integrations None Batch batch Job Operation BigQuery bigquery Job BigQuery Data Transfer Service bigquerydatatransfer TransferRun Cloud Build cloudbuild Operation Cloud Run functions cloudfunctions Operation Cloud Natural Language API language None Cloud Run run None Cloud Scheduler cloudscheduler None Cloud SQL sqladmin Operation Cloud Storage storage None Cloud Tasks cloudtasks None Cloud Translation translate Operation Compute Engine compute Operation Dataflow dataflow Job Document AI documentai Operation Processor Firestore firestore Operation Google Forms forms None Google Kubernetes Engine container Operation Google Sheets sheets None Kubernetes API (control plane) gke None Pub/Sub pubsub None Resource Manager cloudresourcemanager None Secret Manager secretmanager None Spanner spanner Operation Storage Transfer Service storagetransfer Operation Transcoder API transcoder Job Vertex AI aiplatform (Vertex AI) Artifact Execution Job Operation Pipeline Schedule Study Trial Workflows workflows workflowexecutions Operation Execution Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- You can specify a timeout value and polling policy using the connector params block: - STEP NAME : call : CONNECTOR args : ARG : ARG VALUE [ ... ] body : KEY : KEY VALUE [...] connector params : timeout : TIMEOUT IN SECONDS polling policy : initial delay : INITIAL DELAY IN SECONDS multiplier : MULTIPLIER VALUE max delay : MAX DELAY IN SECONDS skip polling : SKIP POLLING SWITCH scopes : OAUTH2 SCOPE result : RESPONSE VALUE Replace the following: STEP NAME : the name of the step.
- SKIP POLLING SWITCH : if set to True , the connector invocation call is non-blocking if the initial request to manage or update the resource succeeds (usually HTTP POST , HTTP UPDATE , or HTTP DELETE ).
- Home Documentation Application development Workflows Reference Send feedback Connectors reference Stay organized with collections Save and categorize content based on your preferences.

