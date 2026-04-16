---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:16:13.656Z"
product_name: "Gemini Enterprise"
product_slug: "gemini-enterprise"
feature_name: "Federated connector error logs"
feature_slug: "federated-connector-error-logs"
latest_feature_date: "2026-03-31"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/gemini/enterprise/docs/cloud-logging"
  - "https://docs.cloud.google.com/gemini/enterprise/docs/connectors/confluence-cloud/set-up-data-store"
  - "https://docs.cloud.google.com/gemini/enterprise/docs/connectors/configure-periodic-data-alerts"
  - "https://docs.cloud.google.com/gemini/enterprise/docs/configure-identity-provider"
keywords:
  - "federated"
  - "connector"
  - "error"
  - "logs"
  - "gemini"
  - "enterprise"
  - "provides"
  - "detailed"
---

# Federated connector error logs

Product: Gemini Enterprise
Coverage: MEDIUM

## Step 02 Summary

Gemini Enterprise provides detailed error logs for federated connectors in Logs Explorer.

## Extended Definition

Gemini Enterprise provides detailed error logs for federated connectors in Logs Explorer.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/gemini/enterprise/docs/cloud-logging](https://docs.cloud.google.com/gemini/enterprise/docs/cloud-logging)
- [https://docs.cloud.google.com/gemini/enterprise/docs/connectors/confluence-cloud/set-up-data-store](https://docs.cloud.google.com/gemini/enterprise/docs/connectors/confluence-cloud/set-up-data-store)
- [https://docs.cloud.google.com/gemini/enterprise/docs/connectors/configure-periodic-data-alerts](https://docs.cloud.google.com/gemini/enterprise/docs/connectors/configure-periodic-data-alerts)
- [https://docs.cloud.google.com/gemini/enterprise/docs/configure-identity-provider](https://docs.cloud.google.com/gemini/enterprise/docs/configure-identity-provider)

## Supporting Pages

### "Access Gemini Enterprise connector error logs with Cloud Logging \_|\_ Google\

- URL: [https://docs.cloud.google.com/gemini/enterprise/docs/cloud-logging](https://docs.cloud.google.com/gemini/enterprise/docs/cloud-logging)
- Source ID: `site-docs-root`
- Final score: 308
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Access federated connector error logs Key Term: In Gemini Enterprise, the term app can be used interchangeably with the term engine in the context of APIs.
- This document describes how to access federated connector error logs and ingestion connector error logs for Gemini Enterprise using Cloud Logging.
- Concept Description Gemini Enterprise connector error logs Gemini Enterprise connector error logs capture errors and failures encountered when integrating Gemini Enterprise with third-party data sources like Jira and Microsoft OneDrive.
- Home Documentation AI and ML Gemini Enterprise Send feedback Access Gemini Enterprise connector error logs with Cloud Logging Stay organized with collections Save and categorize content based on your preferences.

### "Set up a Confluence Cloud data store \_|\_ Gemini Enterprise \_|\_ Google\

- URL: [https://docs.cloud.google.com/gemini/enterprise/docs/connectors/confluence-cloud/set-up-data-store](https://docs.cloud.google.com/gemini/enterprise/docs/connectors/confluence-cloud/set-up-data-store)
- Source ID: `site-docs-root`
- Final score: 210
- Re-rank relevance: N/A

Evidence snippets:
- Data handling and query execution This section describes how Gemini Enterprise manages your query and the privacy implications of using the federated data store.
- Home Documentation AI and ML Gemini Enterprise Send feedback Set up a Confluence Cloud data store Stay organized with collections Save and categorize content based on your preferences.
- To enable real-time sync for a Confluence data store, follow these steps: Generate a webhook URL Navigate to the Gemini Enterprise page, and in the navigation menu, click Data Stores .
- After creating the data store, create an app , connect it to the Confluence Cloud data store , and authorize Gemini Enterprise to access Confluence Cloud before executing any queries.

### "View data store sync activity and set up alerts \_|\_ Gemini Enterprise\

- URL: [https://docs.cloud.google.com/gemini/enterprise/docs/connectors/configure-periodic-data-alerts](https://docs.cloud.google.com/gemini/enterprise/docs/connectors/configure-periodic-data-alerts)
- Source ID: `site-docs-root`
- Final score: 210
- Re-rank relevance: N/A

Evidence snippets:
- Before you begin To enable alerts for a data store, you need to have the following permissions or role assigned to you: Permissions discoveryengine.googleapis.com/alertPolicies.get discoveryengine.googleapis.com/dataConnectors.update Predefined role Discovery Engine User Enable alerts for a data source To enable alerts for a specific data source: In the Google Cloud console, go to the Gemini Enterprise page.
- View data store details and status After connecting your third-party data source to Gemini Enterprise by creating a data store, you can view the status of the data store by going to the Data stores page and clicking the data store name.
- Home Documentation AI and ML Gemini Enterprise Send feedback View data store sync activity and set up alerts Stay organized with collections Save and categorize content based on your preferences.
- Set up alerts for sync events After connecting your third-party data source to Gemini Enterprise by creating a data store, you can enable alerts for predefined tasks.

### Configure identity provider \_|\_ Gemini Enterprise \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/gemini/enterprise/docs/configure-identity-provider](https://docs.cloud.google.com/gemini/enterprise/docs/configure-identity-provider)
- Source ID: `site-docs-root`
- Final score: 183
- Re-rank relevance: N/A

Evidence snippets:
- For example, if your organization uses both email and principal name as user identifiers across different applications, and the principal name is set as the preferred username in your third-party identity provider, you can map it to Gemini Enterprise using the Workforce Identity Federation attribute mapping (for example, attribute.as user identifier 1=assertion.preferred username ).
- Third-party identity provider When you only connect Gemini Enterprise to third-party data sources, and you are already using a third-party identity provider that supports OIDC or SAML 2.0, such as Microsoft Entra ID, Active Directory Federation Services (AD FS), Okta, and others, you must use Workforce Identity Federation.
- Configure Workforce Identity Federation with Microsoft Entra ID and sign in users Configure Workforce Identity Federation with Microsoft Entra ID and a large number of groups Note: To fetch a large number of groups from Entra ID for Gemini Enterprise, you must configure SCIM.
- Connect identity provider To specify an identity provider for Gemini Enterprise and turn on data source access control, follow these steps: In the Google Cloud console, go to the Gemini Enterprise page.

