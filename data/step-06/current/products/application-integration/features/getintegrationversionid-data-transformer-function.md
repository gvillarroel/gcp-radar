---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T03:28:26.473Z"
product_name: "Application Integration"
product_slug: "application-integration"
feature_name: "getIntegrationVersionId data transformer function"
feature_slug: "getintegrationversionid-data-transformer-function"
latest_feature_date: "2024-01-23"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/application-integration/docs/listen-pub-sub-topic-send-email"
  - "https://docs.cloud.google.com/application-integration/docs/automate-salesforce-opportunity-to-bigquery-order"
  - "https://docs.cloud.google.com/application-integration/docs/release-notes"
keywords:
  - "getintegrationversionid"
  - "transformer"
  - "function"
  - "available"
  - "new"
  - "is"
  - "to"
  - "now"
---

# getIntegrationVersionId data transformer function

Product: Application Integration
Coverage: LOW

## Step 02 Summary

A new data transformer function, getIntegrationVersionId(), is now available to return the current integration version ID.

## Extended Definition

A new data transformer function, getIntegrationVersionId(), is now available to return the current integration version ID.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/application-integration/docs/listen-pub-sub-topic-send-email](https://docs.cloud.google.com/application-integration/docs/listen-pub-sub-topic-send-email)
- [https://docs.cloud.google.com/application-integration/docs/automate-salesforce-opportunity-to-bigquery-order](https://docs.cloud.google.com/application-integration/docs/automate-salesforce-opportunity-to-bigquery-order)
- [https://docs.cloud.google.com/application-integration/docs/release-notes](https://docs.cloud.google.com/application-integration/docs/release-notes)

## Supporting Pages

### "Listen to Cloud Pub/Sub topic and send an email \_|\_ Application Integration\

- URL: [https://docs.cloud.google.com/application-integration/docs/listen-pub-sub-topic-send-email](https://docs.cloud.google.com/application-integration/docs/listen-pub-sub-topic-send-email)
- Source ID: `site-docs-root`
- Final score: 168
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Click + (Add a function) next to the CloudPubSubMessage. data variable to view the drop-down list of available functions.
- Click + (Add a function) in the TempInCelsius variable to view the drop-down list of available functions.
- Add a Cloud Pub/Sub trigger To add a Cloud Pub/Sub trigger to the integration, follow the steps below: In the integration editor, select Triggers to display a list of available triggers.
- Set up environment Create a new Cloud Pub/Sub topic This quickstart assumes that you have a Pub/Sub topic that receives temperature readings in degrees Kelvin from a IOT device.

### "Automate Salesforce opportunity to BigQuery order \_|\_ Application Integration\

- URL: [https://docs.cloud.google.com/application-integration/docs/automate-salesforce-opportunity-to-bigquery-order](https://docs.cloud.google.com/application-integration/docs/automate-salesforce-opportunity-to-bigquery-order)
- Source ID: `site-docs-root`
- Final score: 160
- Re-rank relevance: N/A

Evidence snippets:
- Create a new ServiceNow account Perform the following steps to configure a Connectors task that adds a new account to your ServiceNow instance: In the integration editor, click Tasks to display a list of available tasks.
- Click + Add new variable and create the following input variables: Input variable name Data type new BQaccount JSON new SNaccount JSON Create the following mapping to map the Salesforce account ID and name to the BigQuery table: Input Output new BQaccount .SET PROPERTY( sf account id, "account id" ) .SET PROPERTY( sf account name, "name" ) connectorInputPayload (Create account in BigQuery) new SNaccount .SET PROPERTY( sf account id, "sys id" ) .SET PROPERTY( sf account name, "first name" ) connectorInputPayload (Create account in ServiceNow) Once your mapping is complete, close the pane.
- Update Salesforce opportunity Once you have generated the new order number, you update the source Salesforce opportunity Configure the Salesforce connector Perform the following steps to configure a Connectors task that updates the existing Salesforce opportunity: In the integration editor, click Tasks to display a list of available tasks.
- During validation, if the account information doesn't exist in BigQuery, the integration will automatically create a new entry in both the BigQuery table and the attached ServiceNow instance using Integration Connectors.

### Application Integration release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/application-integration/docs/release-notes](https://docs.cloud.google.com/application-integration/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 150
- Re-rank relevance: N/A

Evidence snippets:
- May 23, 2023 Feature New tasks for Google Cloud services The following new integration tasks are available in preview : AI Platform - Prediction Cloud KMS - encrypt Cloud KMS - decrypt Dataflow - Create Job Drive - List Doc AI - Batch Process Doc AI - Process Doc AI - Operation Firestore - Batch Get Firestore - Batch Write Firestore - Document Get Language - Annotate Text Language - Classify Text Sheets - Append Sheets - Batch Get Sheets - Get Translate - Document Translate - Text Workflows - Execute May 22, 2023 Feature Support for Google-managed encryption keys Application Integration now uses Google-managed encryption keys as the default method of data encryption for your provisioned regions.
- Learn how to do the following: Create test cases Configure test cases Manage test cases Run test cases Upload and download test cases Feature Local logging in async mode ( Generally available (GA) ) By default, local logging for new integrations is now enabled in async mode.
- January 23, 2024 Feature The following new data transformer functions are available: getIntegrationVersionId () : Get the integration version ID of the current integration. getIntegrationVersionNumber() : Get the version number of the current integration.
- October 10, 2023 Feature The following new data transformer functions are available: Manifest XML - Converts the specified input JSON object into an XML string.

