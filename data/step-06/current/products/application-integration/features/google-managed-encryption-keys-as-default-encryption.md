---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T03:28:26.488Z"
product_name: "Application Integration"
product_slug: "application-integration"
feature_name: "Google-managed encryption keys as default encryption"
feature_slug: "google-managed-encryption-keys-as-default-encryption"
latest_feature_date: "2023-05-22"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/application-integration/docs/release-notes"
  - "https://docs.cloud.google.com/application-integration/docs/setup-application-integration"
  - "https://docs.cloud.google.com/application-integration/docs/automate-salesforce-case-routing"
keywords:
  - "encryption"
  - "managed"
  - "keys"
  - "default"
  - "application"
  - "integration"
  - "as"
  - "now"
---

# Google-managed encryption keys as default encryption

Product: Application Integration
Coverage: LOW

## Step 02 Summary

Application Integration now uses Google-managed encryption keys by default for provisioned regions.

## Extended Definition

Application Integration now uses Google-managed encryption keys by default for provisioned regions.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/application-integration/docs/release-notes](https://docs.cloud.google.com/application-integration/docs/release-notes)
- [https://docs.cloud.google.com/application-integration/docs/setup-application-integration](https://docs.cloud.google.com/application-integration/docs/setup-application-integration)
- [https://docs.cloud.google.com/application-integration/docs/automate-salesforce-case-routing](https://docs.cloud.google.com/application-integration/docs/automate-salesforce-case-routing)

## Supporting Pages

### Application Integration release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/application-integration/docs/release-notes](https://docs.cloud.google.com/application-integration/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 236
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- May 23, 2023 Feature New tasks for Google Cloud services The following new integration tasks are available in preview : AI Platform - Prediction Cloud KMS - encrypt Cloud KMS - decrypt Dataflow - Create Job Drive - List Doc AI - Batch Process Doc AI - Process Doc AI - Operation Firestore - Batch Get Firestore - Batch Write Firestore - Document Get Language - Annotate Text Language - Classify Text Sheets - Append Sheets - Batch Get Sheets - Get Translate - Document Translate - Text Workflows - Execute May 22, 2023 Feature Support for Google-managed encryption keys Application Integration now uses Google-managed encryption keys as the default method of data encryption for your provisioned regions.
- Preview features such as Cloud Scheduler trigger , Error catcher trigger , JavaScript task , Return task , and Google-managed encryption keys are now moved to GA.
- December 13, 2023 Announcement Application Integration is now available in the following regions: asia-east2 (Taiwan) asia-northeast2 (Osaka) asia-northeast3 (Seoul) asia-south2 (Delhi) asia-southeast2 (Jakarta) europe-central2 (Warsaw) europe-west10 (Berlin) europe-west12 (Turin) northamerica-northeast2 (Toronto) southamerica-west1 (Santiago) us-east5 (Columbus) us-west3 (Salt Lake City) us-west4 (Las Vegas) us-south1 (Dallas) For the list of all the supported regions, see Locations .
- February 19, 2025 Change Enhancements to Execution Logs Application Integration Execution Logs now provides the following enhancements: View detailed task execution information: The dedicated Task Execution pane displays comprehensive execution details, including start and end times, status, type, and variable payload information , enabling improved debugging.

### Set up Application Integration \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/application-integration/docs/setup-application-integration](https://docs.cloud.google.com/application-integration/docs/setup-application-integration)
- Source ID: `site-docs-root`
- Final score: 212
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The default configurations include enabling APIs ( Application Integration API , Secret manager API , and Connectors API ), creating a default service account , and using Google-owned and Google-managed encryption keys as the encryption method for the selected region.
- Key Point: The Application Integration default service account— service- PROJECT NUMBER @gcp-sa-integrations.iam.gserviceaccount.com —is created during this step and is automatically added to your Google Cloud project with the basic IAM roles and permissions.
- This allows integration data to be encrypted with your own keys instead of Google-owned and Google-managed encryption keys.
- Required roles To get the permissions that you need to set up Application Integration, ask your administrator to grant you the following IAM roles on your project: Google Cloud Project Editor ( roles/editor ) Cloud KMS Admin ( roles/cloudkms.admin ) Application Integration Admin ( roles/integrations.integrationAdmin ) Connector Admin ( roles/connectors.admin ) For more information about granting roles, see Manage access to projects, folders, and organizations .

### "Automate Salesforce case routing assignments \_|\_ Application Integration\

- URL: [https://docs.cloud.google.com/application-integration/docs/automate-salesforce-case-routing](https://docs.cloud.google.com/application-integration/docs/automate-salesforce-case-routing)
- Source ID: `site-docs-root`
- Final score: 180
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Application development Application Integration Guides Send feedback Automate Salesforce case routing assignments Stay organized with collections Save and categorize content based on your preferences.
- Connect to ServiceNow Perform the following steps to configure a Connectors task that create a new incident to your ServiceNow instance: In the integration editor, click Tasks to display a list of available tasks.
- Transform and map incident details To transform the case details and map it to a ServiceNow incident, do the following: In the integration editor, click Tasks to display a list of available tasks.
- Note: All the other required Google Cloud APIs such as, the Application Integration API , the Secret manager API , and the Connectors API are enabled during the Application Integration setup.

