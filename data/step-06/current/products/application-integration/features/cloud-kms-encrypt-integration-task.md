---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T07:40:14.484Z"
product_name: "Application Integration"
product_slug: "application-integration"
feature_name: "Cloud KMS - encrypt integration task"
feature_slug: "cloud-kms-encrypt-integration-task"
latest_feature_date: "2023-05-23"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/application-integration/docs/cmek"
  - "https://docs.cloud.google.com/application-integration/docs/configure-data-transformer-script-task"
  - "https://docs.cloud.google.com/application-integration/docs/all-triggers-tasks"
keywords:
  - "encrypt"
  - "preview"
  - "added"
  - "task"
---

# Cloud KMS - encrypt integration task

Product: Application Integration
Coverage: MEDIUM

## Step 02 Summary

Application Integration added a Cloud KMS encrypt integration task in preview.

## Extended Definition

Application Integration added a Cloud KMS encrypt integration task in preview.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/application-integration/docs/cmek](https://docs.cloud.google.com/application-integration/docs/cmek)
- [https://docs.cloud.google.com/application-integration/docs/configure-data-transformer-script-task](https://docs.cloud.google.com/application-integration/docs/configure-data-transformer-script-task)
- [https://docs.cloud.google.com/application-integration/docs/all-triggers-tasks](https://docs.cloud.google.com/application-integration/docs/all-triggers-tasks)

## Supporting Pages

### "Customer-managed encryption keys \_|\_ Application Integration \_|\_ Google\

- URL: [https://docs.cloud.google.com/application-integration/docs/cmek](https://docs.cloud.google.com/application-integration/docs/cmek)
- Source ID: `site-docs-root-2`
- Final score: 91
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Encrypted data The following table lists the data encrypted in Application Integration: Resource Encrypted data Integration details Task configuration parameters Task configuration descriptions Integration execution information Request parameters Response parameters Task execution details Authentication profile credentials Username and passwords API keys OAuth 2.0 authorization code OAuth 2.0 client credentials OAuth 2.0 resource owner password credentials Auth tokens JWT tokens Service accounts SSL/TLS client certificates Google OIDC ID tokens Approval/Suspension task details Approval or suspension configurations Cloud KMS quotas and Application Integration When you use CMEK in Application Integration, your projects can consume Cloud KMS cryptographic requests quotas.
- Add service account to CMEK key In order to use a CMEK key in Application Integration, you must ensure that your default service account is added and assigned with the CryptoKey Encrypter/Decrypter IAM role for that CMEK key.
- Before you begin Ensure that the following tasks are completed before using CMEK for Application Integration: Enable the Cloud KMS API for the project that will store your encryption keys.
- If you use CMEK in a different project (shared or key-hosting project) than the one where you have set up Application Integration: Enable the following API in the shared or key-hosting project: Cloud Key Management Service API Grant the following IAM role on the CMEK key to the Application Integration default service account in the shared or key-hosting project: Cloud KMS CryptoKey Encrypter/Decrypter Note: To enable role assignment for the default service account, you must verify the CMEK key at least once, even if the first attempt fails.

### Data Transformer task \_|\_ Application Integration \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/application-integration/docs/configure-data-transformer-script-task](https://docs.cloud.google.com/application-integration/docs/configure-data-transformer-script-task)
- Source ID: `site-docs-reference-2`
- Final score: 89
- Re-rank relevance: N/A

Evidence snippets:
- Data Transformer task Preview — BigQuery Connector This feature is subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the Service Specific Terms .
- In the Data Transformer (preview) Task Editor page, select one of the following options: By default, the Diagram mode opens.
- In addition, you can also use the supported transformations to transform your data into meaningful variables and formats to make them accessible to other tasks or triggers in your integration.
- Configure the Data Transformer task To add a Data Transformer task to your integration, perform the following steps: In the Google Cloud console, go to the Application Integration page.

### "All triggers and tasks \_|\_ Application Integration \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/application-integration/docs/all-triggers-tasks](https://docs.cloud.google.com/application-integration/docs/all-triggers-tasks)
- Source ID: `site-docs-root`
- Final score: 81
- Re-rank relevance: N/A

Evidence snippets:
- Triggers API trigger Private trigger Cloud Pub/Sub trigger Schedule trigger Salesforce trigger Cloud Scheduler trigger Error Catcher trigger Connector Event triggers Apache Kafka trigger HL7 trigger IBM MQ trigger Jira Cloud trigger Jira Server Data Center trigger HubSpot trigger Rabbit MQ trigger SAP Gateway trigger SAP ERP trigger ServiceNow trigger Solace trigger TIBCO EMS trigger Webhook trigger Zendesk trigger Tasks for Google Cloud services AI Platform - Prediction task Apps Script task Cloud Function task Cloud KMS - decrypt Cloud KMS - encrypt Dataflow - Create Job task Drive - List task Doc AI - Batch Process task Doc AI - Operation task Doc AI - Process task Firestore - Batch Get task Firestore - Batch Write task Firestore - Document Get task Language - Annotate Text task Language - Classify Text task Secret Manager - Access task Sheets - Append task Sheets - Batch Get task Sheets - Get task Translate - Document task Translate - Text task Vertex AI - Predict task Workflows - Execute task Integration tasks Data Mapping task Call Integration task For Each Parallel task For Each Loop task While Loop task Approval task Send Email task Suspend task Timer task JavaScript task Return task Connectors task Call REST Endpoint task Data transformer script task Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- All triggers and tasks This page introduces the various configurable triggers and tasks available in Application Integration.

