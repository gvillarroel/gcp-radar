---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T03:28:26.490Z"
product_name: "Application Integration"
product_slug: "application-integration"
feature_name: "Delete integration"
feature_slug: "delete-integration"
latest_feature_date: "2023-02-06"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/application-integration/docs/canvas-view"
  - "https://docs.cloud.google.com/application-integration/docs/invoke-integration-salesforce-cdc-event"
  - "https://docs.cloud.google.com/application-integration/docs/release-notes"
keywords:
  - "deleting"
  - "delete"
  - "entire"
  - "capability"
  - "allows"
  - "integration"
  - "an"
  - "the"
---

# Delete integration

Product: Application Integration
Coverage: LOW

## Step 02 Summary

The delete integration capability allows deleting an entire integration and all its versions in a single operation.

## Extended Definition

The delete integration capability allows deleting an entire integration and all its versions in a single operation.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/application-integration/docs/canvas-view](https://docs.cloud.google.com/application-integration/docs/canvas-view)
- [https://docs.cloud.google.com/application-integration/docs/invoke-integration-salesforce-cdc-event](https://docs.cloud.google.com/application-integration/docs/invoke-integration-salesforce-cdc-event)
- [https://docs.cloud.google.com/application-integration/docs/release-notes](https://docs.cloud.google.com/application-integration/docs/release-notes)

## Supporting Pages

### Use the canvas view \_|\_ Application Integration \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/application-integration/docs/canvas-view](https://docs.cloud.google.com/application-integration/docs/canvas-view)
- Source ID: `site-iam-reference`
- Final score: 136
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Hotkeys The following hotkeys are available in the canvas view: Key Function Ctrl + C Copy Ctrl + V Paste Ctrl + Z Undo Shift + Ctrl + Z Redo Delete Delete selected element What's next Learn about the Integration editor layout .
- Easier to build integrations: The canvas view provides an intuitive method to add a new child task with a connecting edge or create a new edge to an existing task in your integration.
- Use the canvas view The canvas view provides an intuitive and user-friendly interface for managing your integration workflows.
- If you have multiple triggers in an integration, you can use the Minimap view to see the viewport relative to the graph.

### "Invoke an integration for a Salesforce Change Data Capture (CDC) event \_\

- URL: [https://docs.cloud.google.com/application-integration/docs/invoke-integration-salesforce-cdc-event](https://docs.cloud.google.com/application-integration/docs/invoke-integration-salesforce-cdc-event)
- Source ID: `site-docs-root`
- Final score: 132
- Re-rank relevance: N/A

Evidence snippets:
- Add an edge connection from the Data Mapping element to the Insert row to Cloud SQL Connector element with the following edge condition: $OpportunityIsClosed$ = TRUE Add another edge connection from the Data Mapping element to the Cloud Pub/Sub Connector element with the following edge condition: $OpportunityIsClosed$ = FALSE Test the integration To test the new integration: Click Test in the integration designer toolbar, and then select the Salesforce Trigger .
- Test the Cloud SQL task by logging in to the Salesforce instance and changing an opportunity status to "closed." Test the Pub/Sub task by logging in to the Salesforce instance and changing another detail about the opportunity, but leave the status of the opportunity "open." For more information about testing, see Test and publish integrations .
- Each entry includes details for the execution attempt, including: Integration name Execution ID Status Start time Duration Integration version Trigger ID Click the expander arrow ( > ) next to the executed integration to view an expanded list of tasks and variables in the integration, along with task status and variable payloads.
- Configure a Connectors task with a Cloud SQL for MySQL connection Perform the following steps to configure a Connectors task to insert records into an existing Cloud SQL table using the Cloud SQL for MySQL connection : Select +Add a task/trigger > Tasks in the integration designer to display the list of available tasks.

### Application Integration release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/application-integration/docs/release-notes](https://docs.cloud.google.com/application-integration/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 130
- Re-rank relevance: N/A

Evidence snippets:
- Feature Delete integration You can now delete an entire integration without the need to individually delete all the respective integration versions.
- When you delete an integration, you permanently delete all the versions of that integration, including all the integration variables, configured triggers, tasks, and data mappings.
- May 23, 2023 Feature New tasks for Google Cloud services The following new integration tasks are available in preview : AI Platform - Prediction Cloud KMS - encrypt Cloud KMS - decrypt Dataflow - Create Job Drive - List Doc AI - Batch Process Doc AI - Process Doc AI - Operation Firestore - Batch Get Firestore - Batch Write Firestore - Document Get Language - Annotate Text Language - Classify Text Sheets - Append Sheets - Batch Get Sheets - Get Translate - Document Translate - Text Workflows - Execute May 22, 2023 Feature Support for Google-managed encryption keys Application Integration now uses Google-managed encryption keys as the default method of data encryption for your provisioned regions.
- December 13, 2023 Announcement Application Integration is now available in the following regions: asia-east2 (Taiwan) asia-northeast2 (Osaka) asia-northeast3 (Seoul) asia-south2 (Delhi) asia-southeast2 (Jakarta) europe-central2 (Warsaw) europe-west10 (Berlin) europe-west12 (Turin) northamerica-northeast2 (Toronto) southamerica-west1 (Santiago) us-east5 (Columbus) us-west3 (Salt Lake City) us-west4 (Las Vegas) us-south1 (Dallas) For the list of all the supported regions, see Locations .

