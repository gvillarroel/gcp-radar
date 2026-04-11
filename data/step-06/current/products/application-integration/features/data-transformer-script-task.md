---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T03:28:26.478Z"
product_name: "Application Integration"
product_slug: "application-integration"
feature_name: "Data Transformer Script task"
feature_slug: "data-transformer-script-task"
latest_feature_date: "2023-06-26"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/application-integration/docs/automate-salesforce-opportunity-to-bigquery-order"
  - "https://docs.cloud.google.com/application-integration/docs/release-notes"
  - "https://docs.cloud.google.com/application-integration/docs/data-transformer-functions-reference"
keywords:
  - "script"
  - "transformer"
  - "application"
  - "integration"
  - "added"
  - "task"
  - "the"
  - "to"
---

# Data Transformer Script task

Product: Application Integration
Coverage: LOW

## Step 02 Summary

Application Integration added the Data Transformer Script task to support Jsonnet-based custom data-mapping templates.

## Extended Definition

Application Integration added the Data Transformer Script task to support Jsonnet-based custom data-mapping templates.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/application-integration/docs/automate-salesforce-opportunity-to-bigquery-order](https://docs.cloud.google.com/application-integration/docs/automate-salesforce-opportunity-to-bigquery-order)
- [https://docs.cloud.google.com/application-integration/docs/release-notes](https://docs.cloud.google.com/application-integration/docs/release-notes)
- [https://docs.cloud.google.com/application-integration/docs/data-transformer-functions-reference](https://docs.cloud.google.com/application-integration/docs/data-transformer-functions-reference)

## Supporting Pages

### "Automate Salesforce opportunity to BigQuery order \_|\_ Application Integration\

- URL: [https://docs.cloud.google.com/application-integration/docs/automate-salesforce-opportunity-to-bigquery-order](https://docs.cloud.google.com/application-integration/docs/automate-salesforce-opportunity-to-bigquery-order)
- Source ID: `site-docs-root`
- Final score: 230
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Now that you have added and configured and the required tasks, you can add an edge condition to define the flow of the integration.
- The following edge condition controls the flow of the integration based on the validation of the account information: Add an edge connection from the Check account task to the Mapping for Account Creation task with the following edge condition: $account exists$ = False Add another edge connection from the Check account task to the Mapping for Order Creation task with the following edge condition: $account exists$ = True Sample integration flow The following figure shows a sample layout of the integration created using this tutorial.
- Update Salesforce opportunity Once you have generated the new order number, you update the source Salesforce opportunity Configure the Salesforce connector Perform the following steps to configure a Connectors task that updates the existing Salesforce opportunity: In the integration editor, click Tasks to display a list of available tasks.
- Costs In this tutorial, you use the following billable components of Google Cloud: Application Integration Integration Connectors BigQuery Secret Manager The instructions in this tutorial are designed to keep your resource usage within the limits of Google Cloud's Always Free tier .

### Application Integration release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/application-integration/docs/release-notes](https://docs.cloud.google.com/application-integration/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 220
- Re-rank relevance: N/A

Evidence snippets:
- With the Data Transformer Script task and the supported Data Transformer functions , you can create and evaluate custom Jsonnet templates in order to perform data mapping in your integration.
- June 26, 2023 Feature Data Transformer Script task ( Preview ) The Data Transformer Script task is a template engine based data mapping feature available in Application Integration.
- May 23, 2023 Feature New tasks for Google Cloud services The following new integration tasks are available in preview : AI Platform - Prediction Cloud KMS - encrypt Cloud KMS - decrypt Dataflow - Create Job Drive - List Doc AI - Batch Process Doc AI - Process Doc AI - Operation Firestore - Batch Get Firestore - Batch Write Firestore - Document Get Language - Annotate Text Language - Classify Text Sheets - Append Sheets - Batch Get Sheets - Get Translate - Document Translate - Text Workflows - Execute May 22, 2023 Feature Support for Google-managed encryption keys Application Integration now uses Google-managed encryption keys as the default method of data encryption for your provisioned regions.
- February 19, 2025 Change Enhancements to Execution Logs Application Integration Execution Logs now provides the following enhancements: View detailed task execution information: The dedicated Task Execution pane displays comprehensive execution details, including start and end times, status, type, and variable payload information , enabling improved debugging.

### "Data Transformer functions \_|\_ Application Integration \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/application-integration/docs/data-transformer-functions-reference](https://docs.cloud.google.com/application-integration/docs/data-transformer-functions-reference)
- Source ID: `site-api-reference`
- Final score: 218
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Data Transformer functions This page describes the additional set of predefined Jsonnet functions for Data Transformer Script task available in Application Integration.
- Recommendation Lean how to add and configure a Data Transformer Script task ( Preview ) Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Preview — Data Transformer Script task This feature is subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the Service Specific Terms .
- Functions The following table lists the predefined functions available in Application Integration: Functions Description Array functions Functions that operate on arrays.

