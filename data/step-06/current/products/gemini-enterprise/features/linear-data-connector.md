---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:16:13.670Z"
product_name: "Gemini Enterprise"
product_slug: "gemini-enterprise"
feature_name: "Linear data connector"
feature_slug: "linear-data-connector"
latest_feature_date: "2026-02-06"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/gemini/enterprise/docs/cloud-logging"
  - "https://docs.cloud.google.com/gemini/enterprise/docs/connectors/connect-alloydb-data"
  - "https://docs.cloud.google.com/gemini/enterprise/docs/apps-data-stores"
  - "https://docs.cloud.google.com/gemini/enterprise/docs/connectors/confluence-cloud/set-up-data-store"
keywords:
  - "linear"
  - "connector"
  - "gemini"
  - "enterprise"
  - "can"
  - "connect"
  - "stores"
  - "in"
---

# Linear data connector

Product: Gemini Enterprise
Coverage: MEDIUM

## Step 02 Summary

Gemini Enterprise can connect Linear data stores in Public Preview.

## Extended Definition

Gemini Enterprise can connect Linear data stores in Public Preview.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/gemini/enterprise/docs/cloud-logging](https://docs.cloud.google.com/gemini/enterprise/docs/cloud-logging)
- [https://docs.cloud.google.com/gemini/enterprise/docs/connectors/connect-alloydb-data](https://docs.cloud.google.com/gemini/enterprise/docs/connectors/connect-alloydb-data)
- [https://docs.cloud.google.com/gemini/enterprise/docs/apps-data-stores](https://docs.cloud.google.com/gemini/enterprise/docs/apps-data-stores)
- [https://docs.cloud.google.com/gemini/enterprise/docs/connectors/confluence-cloud/set-up-data-store](https://docs.cloud.google.com/gemini/enterprise/docs/connectors/confluence-cloud/set-up-data-store)

## Supporting Pages

### "Access Gemini Enterprise connector error logs with Cloud Logging \_|\_ Google\

- URL: [https://docs.cloud.google.com/gemini/enterprise/docs/cloud-logging](https://docs.cloud.google.com/gemini/enterprise/docs/cloud-logging)
- Source ID: `site-docs-root`
- Final score: 308
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Access federated connector error logs Key Term: In Gemini Enterprise, the term app can be used interchangeably with the term engine in the context of APIs.
- Access ingestion connector error logs Key Term: In Gemini Enterprise, the term app can be used interchangeably with the term engine in the context of APIs.
- Concept Description Gemini Enterprise connector error logs Gemini Enterprise connector error logs capture errors and failures encountered when integrating Gemini Enterprise with third-party data sources like Jira and Microsoft OneDrive.
- To only see Gemini Enterprise connector logs, enter the following query in the query editor field, and click Run Query : logName = "projects/ PROJECT ID /logs/discoveryengine.googleapis.com%2Fconnector activity" jsonPayload .

### "Connect to data from AlloyDB for PostgreSQL (Preview) \_|\_ Gemini Enterprise\

- URL: [https://docs.cloud.google.com/gemini/enterprise/docs/connectors/connect-alloydb-data](https://docs.cloud.google.com/gemini/enterprise/docs/connectors/connect-alloydb-data)
- Source ID: `site-docs-root`
- Final score: 288
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following example: curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json" \ -H "X-Goog-User-Project: PROJECT ID " \ "https://discoveryengine.googleapis.com/v1alpha/projects/ PROJECT ID /locations/ LOCATION /collections/default collection/dataStores?dataStoreId= DATA STORE ID " -d '{ "displayName": " DATA STORE NAME ", "federatedSearchConfig": { "alloyDbConfig": { "alloydbConnectionConfig": { "instance": " INSTANCE PATH ", "database": " DATABASE NAME ", "user": " DATABASE USER NAME ", "password": " DATABASE USER PASSWORD ", "authMode": "AUTH MODE SERVICE ACCOUNT" }, "alloydb ai nl config": { "nlConfigId": " NL CONFIG ID " } } }, "industryVertical": "GENERIC", "solutionTypes": ["SOLUTION TYPE SEARCH"] }' Replace the following: PROJECT ID : the ID of your project where you use Gemini Enterprise.
- Attach your data store to an existing Gemini Enterprise app, or create a new app and select your connector, following the steps in Create an app .
- You can connect your AlloyDB instance to Gemini Enterprise, enabling live access to your data.
- For example: CREATE ROLE USER NAME WITH LOGIN PASSWORD ' PASSWORD ' ; GRANT SELECT ON TABLE "public" . " TABLE NAME 1 " TO USER NAME ; GRANT SELECT ON TABLE "public" . " TABLE NAME 2 " TO USER NAME ; When linking Gemini Enterprise with AlloyDB, provide the username and password in the User and Password fields of alloydbConnectionConfig .

### About apps and data stores \_|\_ Gemini Enterprise \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/gemini/enterprise/docs/apps-data-stores](https://docs.cloud.google.com/gemini/enterprise/docs/apps-data-stores)
- Source ID: `site-docs-root`
- Final score: 288
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Note: You can't connect website data stores to your Gemini Enterprise search and assistant apps.
- Third-party data Structured data Unstructured data Structured data for third-party data stores The following third-party data source connectors are available in Preview with allowlist: Confluence Jira Salesforce Sharepoint Online Slack Data from these third parties is considered structured data.
- Home Documentation AI and ML Gemini Enterprise Send feedback About apps and data stores Stay organized with collections Save and categorize content based on your preferences.
- You can provide this schema yourself or you can let Gemini Enterprise derive the schema from the ingested data.

### "Set up a Confluence Cloud data store \_|\_ Gemini Enterprise \_|\_ Google\

- URL: [https://docs.cloud.google.com/gemini/enterprise/docs/connectors/confluence-cloud/set-up-data-store](https://docs.cloud.google.com/gemini/enterprise/docs/connectors/confluence-cloud/set-up-data-store)
- Source ID: `site-docs-root`
- Final score: 284
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To enable real-time sync for a Confluence data store, follow these steps: Generate a webhook URL Navigate to the Gemini Enterprise page, and in the navigation menu, click Data Stores .
- After creating the data store, create an app , connect it to the Confluence Cloud data store , and authorize Gemini Enterprise to access Confluence Cloud before executing any queries.
- Gemini Enterprise blends the results with those from other connected data sources and displays a comprehensive search result.
- This page describes how to create a data store and connect Confluence Cloud to Gemini Enterprise.

