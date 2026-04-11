---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T03:28:26.460Z"
product_name: "Application Integration"
product_slug: "application-integration"
feature_name: "Custom constraints for Application Integration resources"
feature_slug: "custom-constraints-for-application-integration-resources"
latest_feature_date: "2025-10-10"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/application-integration/docs/release-notes"
  - "https://docs.cloud.google.com/application-integration/docs/automate-salesforce-opportunity-to-bigquery-order"
  - "https://docs.cloud.google.com/application-integration/docs/setup-application-integration"
keywords:
  - "organization"
  - "constraints"
  - "policy"
  - "resources"
  - "custom"
  - "application"
  - "integration"
  - "for"
---

# Custom constraints for Application Integration resources

Product: Application Integration
Coverage: LOW

## Step 02 Summary

Organization Policy custom constraints can now be applied to specific fields of certain Application Integration resources for finer-grained governance.

## Extended Definition

Organization Policy custom constraints can now be applied to specific fields of certain Application Integration resources for finer-grained governance.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/application-integration/docs/release-notes](https://docs.cloud.google.com/application-integration/docs/release-notes)
- [https://docs.cloud.google.com/application-integration/docs/automate-salesforce-opportunity-to-bigquery-order](https://docs.cloud.google.com/application-integration/docs/automate-salesforce-opportunity-to-bigquery-order)
- [https://docs.cloud.google.com/application-integration/docs/setup-application-integration](https://docs.cloud.google.com/application-integration/docs/setup-application-integration)

## Supporting Pages

### Application Integration release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/application-integration/docs/release-notes](https://docs.cloud.google.com/application-integration/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 184
- Re-rank relevance: N/A

Evidence snippets:
- October 10, 2025 Feature Manage Application Integration resources using custom constraints You can now use custom constraints with Organization Policy to provide more granular control over specific fields for some Application Integration resources.
- For more information, see Manage Application Integration resources using custom constraints .
- Feature The following new features are added in this GA release: Cloud Monitoring Application Integration is integrated with Cloud Monitoring to provide visibility into the usage, performance, alerts, and the overall health of your integration resources.
- Feature IAM Conditions for fine-grained access IAM Conditions lets you define and enforce conditional, attribute-based access control for Google Cloud resources, including Application Integration resources.

### "Automate Salesforce opportunity to BigQuery order \_|\_ Application Integration\

- URL: [https://docs.cloud.google.com/application-integration/docs/automate-salesforce-opportunity-to-bigquery-order](https://docs.cloud.google.com/application-integration/docs/automate-salesforce-opportunity-to-bigquery-order)
- Source ID: `site-docs-root`
- Final score: 174
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- This tutorial describes a use case on how you can use Application Integration to automate an order management flow between a customer relationship management (CRM) application and an enterprise resource planning (ERP) application.
- Home Documentation Application development Application Integration Guides Send feedback Automate Salesforce opportunity to BigQuery order Stay organized with collections Save and categorize content based on your preferences.
- Clean up To avoid incurring charges to your Google Cloud account for the resources used in this tutorial, unpublish the integration and delete the connections created in Integration Connectors.
- Each of these applications is handled by different teams or organizations, and ensuring that the order is constantly tracked while providing timely customer updates is a challenge.

### Set up Application Integration \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/application-integration/docs/setup-application-integration](https://docs.cloud.google.com/application-integration/docs/setup-application-integration)
- Source ID: `site-docs-root`
- Final score: 172
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Required roles To get the permissions that you need to set up Application Integration, ask your administrator to grant you the following IAM roles on your project: Google Cloud Project Editor ( roles/editor ) Cloud KMS Admin ( roles/cloudkms.admin ) Application Integration Admin ( roles/integrations.integrationAdmin ) Connector Admin ( roles/connectors.admin ) For more information about granting roles, see Manage access to projects, folders, and organizations .
- Perform the following steps under the Select region section: Region: Select the regional location where you want to deploy Application Integration resources and store data for your integrations.
- The default configurations include enabling APIs ( Application Integration API , Secret manager API , and Connectors API ), creating a default service account , and using Google-owned and Google-managed encryption keys as the encryption method for the selected region.
- However, if you did not grant cryptokey access, authentication profiles for Application Integration will not be configured, and you'll have to manually grant this access when creating a new authentication profile.

