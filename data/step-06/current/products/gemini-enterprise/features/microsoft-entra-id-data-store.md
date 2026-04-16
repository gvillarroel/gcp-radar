---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:16:13.705Z"
product_name: "Gemini Enterprise"
product_slug: "gemini-enterprise"
feature_name: "Microsoft Entra ID data store"
feature_slug: "microsoft-entra-id-data-store"
latest_feature_date: "2025-07-31"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/gemini/enterprise/docs/configure-identity-provider"
  - "https://docs.cloud.google.com/gemini/enterprise/docs/connectors/confluence-cloud/set-up-data-store"
  - "https://docs.cloud.google.com/gemini/enterprise/docs/connectors/confluence-dc/set-up-data-store"
  - "https://docs.cloud.google.com/gemini/enterprise/docs/connectors/box/set-up-data-store"
keywords:
  - "microsoft"
  - "entra"
  - "id"
  - "store"
  - "you"
  - "can"
  - "connect"
  - "to"
---

# Microsoft Entra ID data store

Product: Gemini Enterprise
Coverage: MEDIUM

## Step 02 Summary

You can connect a data store to ingest content from Microsoft Entra ID.

## Extended Definition

You can connect a data store to ingest content from Microsoft Entra ID.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/gemini/enterprise/docs/configure-identity-provider](https://docs.cloud.google.com/gemini/enterprise/docs/configure-identity-provider)
- [https://docs.cloud.google.com/gemini/enterprise/docs/connectors/confluence-cloud/set-up-data-store](https://docs.cloud.google.com/gemini/enterprise/docs/connectors/confluence-cloud/set-up-data-store)
- [https://docs.cloud.google.com/gemini/enterprise/docs/connectors/confluence-dc/set-up-data-store](https://docs.cloud.google.com/gemini/enterprise/docs/connectors/confluence-dc/set-up-data-store)
- [https://docs.cloud.google.com/gemini/enterprise/docs/connectors/box/set-up-data-store](https://docs.cloud.google.com/gemini/enterprise/docs/connectors/box/set-up-data-store)

## Supporting Pages

### Configure identity provider \_|\_ Gemini Enterprise \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/gemini/enterprise/docs/configure-identity-provider](https://docs.cloud.google.com/gemini/enterprise/docs/configure-identity-provider)
- Source ID: `site-docs-root`
- Final score: 271
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Configure Workforce Identity Federation For details on configuring Workforce Identity Federation with your third-party identity connector, see the following resources: Identity provider Resources Entra ID Note: When using data ingestion to connect to Microsoft data sources like SharePoint, OneDrive, or Outlook, you must use Microsoft Entra ID groups to control document access.
- Third-party identity provider When you only connect Gemini Enterprise to third-party data sources, and you are already using a third-party identity provider that supports OIDC or SAML 2.0, such as Microsoft Entra ID, Active Directory Federation Services (AD FS), Okta, and others, you must use Workforce Identity Federation.
- For example: "metadata": { "mapped attributes": { "attributes.as user identifier 1": "alex@admin.altostrat.com" "google.subject": "alex@altostrat.com" "google.groups": "[123abc-456d, efg-h789-ijk]" } }, Limitations When connecting your data sources using a connector to create data stores, the following limitations apply: 3000 readers are allowed per document.
- Configure Workforce Identity Federation with Microsoft Entra ID and sign in users Configure Workforce Identity Federation with Microsoft Entra ID and a large number of groups Note: To fetch a large number of groups from Entra ID for Gemini Enterprise, you must configure SCIM.

### "Set up a Confluence Cloud data store \_|\_ Gemini Enterprise \_|\_ Google\

- URL: [https://docs.cloud.google.com/gemini/enterprise/docs/connectors/confluence-cloud/set-up-data-store](https://docs.cloud.google.com/gemini/enterprise/docs/connectors/confluence-cloud/set-up-data-store)
- Source ID: `site-docs-root`
- Final score: 244
- Re-rank relevance: N/A

Evidence snippets:
- What's next To provide a user interface for querying your Confluence Cloud data, create an app and connect it to the Confluence Cloud data store .
- To set up the Confluence Cloud data store, you must use the new centralized Atlassian user management model.
- Create subscriptions only for entities already added to your data store to avoid ingesting unwanted data.
- To make API calls, use the same administrator account used for setting up authentication and permissions in Confluence to create the data store. curl -X POST \ INSTANCE URL /wiki/rest/webhooks/1.0/webhook \ -H "Content-Type: application/json" \ -u " USERNAME : API TOKEN " \ -d '{ "name": " SUBSCRIPTION NAME ", "url": " LISTENER URL ", "events": [ " EVENT TYPE 1 ", " EVENT TYPE 2 " ], "active": true }' INSTANCE URL : The base web address for your Atlassian Cloud site.

### "Set up a Confluence Data Center data store \_|\_ Gemini Enterprise \_|\_\

- URL: [https://docs.cloud.google.com/gemini/enterprise/docs/connectors/confluence-dc/set-up-data-store](https://docs.cloud.google.com/gemini/enterprise/docs/connectors/confluence-dc/set-up-data-store)
- Source ID: `site-docs-root`
- Final score: 227
- Re-rank relevance: N/A

Evidence snippets:
- What's next To provide a user interface for querying your Confluence Data Center data, create an app and connect it to the Confluence Data Center data store .
- If the region of your Private Service Connect service attachment is different from the region of your data store, select the Enable PSC Global Access checkbox.
- The data store status remains as Creating in the Data Stores page until you click Accept project on the service details page within Private Service Connect.
- Click the name of the Private Service Connect service corresponding to your Confluence Data Center data store.

### Set up a Box data store \_|\_ Gemini Enterprise \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/gemini/enterprise/docs/connectors/box/set-up-data-store](https://docs.cloud.google.com/gemini/enterprise/docs/connectors/box/set-up-data-store)
- Source ID: `site-docs-root`
- Final score: 227
- Re-rank relevance: N/A

Evidence snippets:
- What's next To provide a user interface for querying your data, create an app and connect it to the Box federated data store .
- Home Documentation AI and ML Gemini Enterprise Send feedback Set up a Box data store Stay organized with collections Save and categorize content based on your preferences.
- Before you begin Before you set up your Box connection, ensure you perform the following: Grant the Discovery Engine Editor role ( roles/discoveryengine.editor ).
- Data handling and query execution This section describes how Gemini Enterprise manages your query and the privacy implications of using the federated data store.

