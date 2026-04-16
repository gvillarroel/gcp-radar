---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:16:13.663Z"
product_name: "Gemini Enterprise"
product_slug: "gemini-enterprise"
feature_name: "GitHub data connector"
feature_slug: "github-data-connector"
latest_feature_date: "2026-03-04"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/gemini/enterprise/docs/connectors/connect-alloydb-data"
  - "https://docs.cloud.google.com/gemini/enterprise/docs/connectors/confluence-cloud/set-up-data-store"
  - "https://docs.cloud.google.com/gemini/enterprise/docs/connectors/confluence-dc/set-up-data-store"
  - "https://docs.cloud.google.com/gemini/enterprise/docs/apps-data-stores"
keywords:
  - "github"
  - "connector"
  - "users"
  - "can"
  - "connect"
  - "stores"
  - "to"
  - "gemini"
---

# GitHub data connector

Product: Gemini Enterprise
Coverage: MEDIUM

## Step 02 Summary

Users can connect GitHub data stores to Gemini Enterprise.

## Extended Definition

Users can connect GitHub data stores to Gemini Enterprise.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/gemini/enterprise/docs/connectors/connect-alloydb-data](https://docs.cloud.google.com/gemini/enterprise/docs/connectors/connect-alloydb-data)
- [https://docs.cloud.google.com/gemini/enterprise/docs/connectors/confluence-cloud/set-up-data-store](https://docs.cloud.google.com/gemini/enterprise/docs/connectors/confluence-cloud/set-up-data-store)
- [https://docs.cloud.google.com/gemini/enterprise/docs/connectors/confluence-dc/set-up-data-store](https://docs.cloud.google.com/gemini/enterprise/docs/connectors/confluence-dc/set-up-data-store)
- [https://docs.cloud.google.com/gemini/enterprise/docs/apps-data-stores](https://docs.cloud.google.com/gemini/enterprise/docs/apps-data-stores)

## Supporting Pages

### "Connect to data from AlloyDB for PostgreSQL (Preview) \_|\_ Gemini Enterprise\

- URL: [https://docs.cloud.google.com/gemini/enterprise/docs/connectors/connect-alloydb-data](https://docs.cloud.google.com/gemini/enterprise/docs/connectors/connect-alloydb-data)
- Source ID: `site-docs-root`
- Final score: 252
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following example: curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json" \ -H "X-Goog-User-Project: PROJECT ID " \ "https://discoveryengine.googleapis.com/v1alpha/projects/ PROJECT ID /locations/ LOCATION /collections/default collection/dataStores?dataStoreId= DATA STORE ID " -d '{ "displayName": " DATA STORE NAME ", "federatedSearchConfig": { "alloyDbConfig": { "alloydbConnectionConfig": { "instance": " INSTANCE PATH ", "database": " DATABASE NAME ", "user": " DATABASE USER NAME ", "password": " DATABASE USER PASSWORD ", "authMode": "AUTH MODE SERVICE ACCOUNT" }, "alloydb ai nl config": { "nlConfigId": " NL CONFIG ID " } } }, "industryVertical": "GENERIC", "solutionTypes": ["SOLUTION TYPE SEARCH"] }' Replace the following: PROJECT ID : the ID of your project where you use Gemini Enterprise.
- Attach your data store to an existing Gemini Enterprise app, or create a new app and select your connector, following the steps in Create an app .
- You can connect your AlloyDB instance to Gemini Enterprise, enabling live access to your data.
- All users with access to your Gemini Enterprise app can see the same data.

### "Set up a Confluence Cloud data store \_|\_ Gemini Enterprise \_|\_ Google\

- URL: [https://docs.cloud.google.com/gemini/enterprise/docs/connectors/confluence-cloud/set-up-data-store](https://docs.cloud.google.com/gemini/enterprise/docs/connectors/confluence-cloud/set-up-data-store)
- Source ID: `site-docs-root`
- Final score: 246
- Re-rank relevance: N/A

Evidence snippets:
- To enable real-time sync for a Confluence data store, follow these steps: Generate a webhook URL Navigate to the Gemini Enterprise page, and in the navigation menu, click Data Stores .
- After creating the data store, create an app , connect it to the Confluence Cloud data store , and authorize Gemini Enterprise to access Confluence Cloud before executing any queries.
- In the Data section: In the Connector mode section, select Data ingestion or Federated search as the connection mode.
- In the Configuration section: From the Multi-region list, select the location for your data connector.

### "Set up a Confluence Data Center data store \_|\_ Gemini Enterprise \_|\_\

- URL: [https://docs.cloud.google.com/gemini/enterprise/docs/connectors/confluence-dc/set-up-data-store](https://docs.cloud.google.com/gemini/enterprise/docs/connectors/confluence-dc/set-up-data-store)
- Source ID: `site-docs-root`
- Final score: 242
- Re-rank relevance: N/A

Evidence snippets:
- For more information about using Private Service Connect to connect Gemini Enterprise to self-hosted data sources, see Introduction to self-hosted data sources .
- The data store status remains as Creating in the Data Stores page until you click Accept project on the service details page within Private Service Connect.
- In the Connected projects section, select the checkbox next to the Gemini Enterprise tenant project for the data store, and then click Accept project .
- These endpoints enable Gemini Enterprise to retrieve space permission details, content restrictions, and email addresses of licensed users.

### About apps and data stores \_|\_ Gemini Enterprise \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/gemini/enterprise/docs/apps-data-stores](https://docs.cloud.google.com/gemini/enterprise/docs/apps-data-stores)
- Source ID: `site-docs-root`
- Final score: 240
- Re-rank relevance: N/A

Evidence snippets:
- Note: You can't connect website data stores to your Gemini Enterprise search and assistant apps.
- Third-party data Structured data Unstructured data Structured data for third-party data stores The following third-party data source connectors are available in Preview with allowlist: Confluence Jira Salesforce Sharepoint Online Slack Data from these third parties is considered structured data.
- You can add or remove data stores from a blended search app, but the app can't have fewer than two data stores connected to it at any time.
- About blended search With blended search, multiple data stores can be connected to a single app.

