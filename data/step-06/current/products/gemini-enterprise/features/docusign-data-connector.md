---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:16:13.659Z"
product_name: "Gemini Enterprise"
product_slug: "gemini-enterprise"
feature_name: "Docusign data connector"
feature_slug: "docusign-data-connector"
latest_feature_date: "2026-03-23"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/gemini/enterprise/docs/connectors/connect-alloydb-data"
  - "https://docs.cloud.google.com/gemini/enterprise/docs/apps-data-stores"
  - "https://docs.cloud.google.com/gemini/enterprise/docs/cloud-logging"
  - "https://docs.cloud.google.com/gemini/enterprise/docs/cmek"
keywords:
  - "docusign"
  - "connector"
  - "gemini"
  - "enterprise"
  - "can"
  - "connect"
  - "stores"
  - "through"
---

# Docusign data connector

Product: Gemini Enterprise
Coverage: MEDIUM

## Step 02 Summary

Gemini Enterprise can connect Docusign data stores through a data connector.

## Extended Definition

Gemini Enterprise can connect Docusign data stores through a data connector.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/gemini/enterprise/docs/connectors/connect-alloydb-data](https://docs.cloud.google.com/gemini/enterprise/docs/connectors/connect-alloydb-data)
- [https://docs.cloud.google.com/gemini/enterprise/docs/apps-data-stores](https://docs.cloud.google.com/gemini/enterprise/docs/apps-data-stores)
- [https://docs.cloud.google.com/gemini/enterprise/docs/cloud-logging](https://docs.cloud.google.com/gemini/enterprise/docs/cloud-logging)
- [https://docs.cloud.google.com/gemini/enterprise/docs/cmek](https://docs.cloud.google.com/gemini/enterprise/docs/cmek)

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
- For example: CREATE ROLE USER NAME WITH LOGIN PASSWORD ' PASSWORD ' ; GRANT SELECT ON TABLE "public" . " TABLE NAME 1 " TO USER NAME ; GRANT SELECT ON TABLE "public" . " TABLE NAME 2 " TO USER NAME ; When linking Gemini Enterprise with AlloyDB, provide the username and password in the User and Password fields of alloydbConnectionConfig .

### About apps and data stores \_|\_ Gemini Enterprise \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/gemini/enterprise/docs/apps-data-stores](https://docs.cloud.google.com/gemini/enterprise/docs/apps-data-stores)
- Source ID: `site-docs-root`
- Final score: 240
- Re-rank relevance: N/A

Evidence snippets:
- Note: You can't connect website data stores to your Gemini Enterprise search and assistant apps.
- Third-party data Structured data Unstructured data Structured data for third-party data stores The following third-party data source connectors are available in Preview with allowlist: Confluence Jira Salesforce Sharepoint Online Slack Data from these third parties is considered structured data.
- Home Documentation AI and ML Gemini Enterprise Send feedback About apps and data stores Stay organized with collections Save and categorize content based on your preferences.
- You can add or remove data stores from a blended search app, but the app can't have fewer than two data stores connected to it at any time.

### "Access Gemini Enterprise connector error logs with Cloud Logging \_|\_ Google\

- URL: [https://docs.cloud.google.com/gemini/enterprise/docs/cloud-logging](https://docs.cloud.google.com/gemini/enterprise/docs/cloud-logging)
- Source ID: `site-docs-root`
- Final score: 228
- Re-rank relevance: N/A

Evidence snippets:
- Access federated connector error logs Key Term: In Gemini Enterprise, the term app can be used interchangeably with the term engine in the context of APIs.
- Access ingestion connector error logs Key Term: In Gemini Enterprise, the term app can be used interchangeably with the term engine in the context of APIs.
- Concept Description Gemini Enterprise connector error logs Gemini Enterprise connector error logs capture errors and failures encountered when integrating Gemini Enterprise with third-party data sources like Jira and Microsoft OneDrive.
- To only see Gemini Enterprise connector logs, enter the following query in the query editor field, and click Run Query : logName = "projects/ PROJECT ID /logs/discoveryengine.googleapis.com%2Fconnector activity" jsonPayload .

### "Customer-managed encryption keys \_|\_ Gemini Enterprise \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/gemini/enterprise/docs/cmek](https://docs.cloud.google.com/gemini/enterprise/docs/cmek)
- Source ID: `site-docs-root`
- Final score: 228
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- An example response looks like this: { "name": "projects/969795412903/locations/us/collections/default collection/dataStores/my-data-store-1", "displayName": "my-data-store-1", "industryVertical": "GENERIC", "createTime": "2023-09-05T21:20:21.520552Z", "solutionTypes": [ "SOLUTION TYPE SEARCH" ], "defaultSchemaId": "default schema", "cmekConfig": { "name": "projects/969795412903/locations/us/collections/default collection/dataStores/my-data-store-1/cmekConfigs/default cmek config", "kmsKey": "projects/my-ai-app-project-123/locations/us/keyRings/my-key-ring/cryptoKeys/my-key" } } Other data protected by the Cloud KMS key In addition to data in the data stores, your keys can protect other types of app-owned core information held by Gemini Enterprise, such as the session data generated during search with follow-ups .
- Register single-region Cloud KMS keys for third-party connectors REST To register your own key for Gemini Enterprise, follow these steps: Call the UpdateCmekConfig method with the key that you want to register. curl -X PATCH \ -H "Authorization: Bearer $( gcloud auth print-access-token ) " \ -H "Content-Type: application/json" \ -d '{"kmsKey":"projects/ KMS PROJECT ID /locations/ KMS LOCATION /keyRings/ KEY RING /cryptoKeys/ KEY NAME "}' \ "https:// LOCATION -discoveryengine.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /cmekConfigs/ CMEK CONFIG ID ?set default= SET DEFAULT " Replace the following: KMS PROJECT ID : the ID of your project that contains the key.
- Procedure To register your own key when using Gemini Enterprise third-party connectors, follow these steps: In the Google Cloud console, go to the Gemini Enterprise page.
- Limitations of Cloud KMS in Gemini Enterprise The following limitations apply to CMEK (Cloud KMS) keys in Gemini Enterprise: Keys that are already applied to a data store can't be changed, although key versions can be rotated.

