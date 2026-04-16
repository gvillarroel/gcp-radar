---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:16:13.709Z"
product_name: "Gemini Enterprise"
product_slug: "gemini-enterprise"
feature_name: "People search data store"
feature_slug: "people-search-data-store"
latest_feature_date: "2025-07-31"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/gemini/enterprise/docs/connectors/confluence-cloud/set-up-data-store"
  - "https://docs.cloud.google.com/gemini/enterprise/docs/connectors/confluence-dc/set-up-data-store"
  - "https://docs.cloud.google.com/gemini/enterprise/docs/connectors/box/set-up-data-store"
  - "https://docs.cloud.google.com/gemini/enterprise/docs/connectors/connect-alloydb-data"
keywords:
  - "people"
  - "search"
  - "store"
  - "you"
  - "can"
  - "connect"
  - "for"
  - "ingestion"
---

# People search data store

Product: Gemini Enterprise
Coverage: MEDIUM

## Step 02 Summary

You can connect a data store for people search data ingestion.

## Extended Definition

You can connect a data store for people search data ingestion.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/gemini/enterprise/docs/connectors/confluence-cloud/set-up-data-store](https://docs.cloud.google.com/gemini/enterprise/docs/connectors/confluence-cloud/set-up-data-store)
- [https://docs.cloud.google.com/gemini/enterprise/docs/connectors/confluence-dc/set-up-data-store](https://docs.cloud.google.com/gemini/enterprise/docs/connectors/confluence-dc/set-up-data-store)
- [https://docs.cloud.google.com/gemini/enterprise/docs/connectors/box/set-up-data-store](https://docs.cloud.google.com/gemini/enterprise/docs/connectors/box/set-up-data-store)
- [https://docs.cloud.google.com/gemini/enterprise/docs/connectors/connect-alloydb-data](https://docs.cloud.google.com/gemini/enterprise/docs/connectors/connect-alloydb-data)

## Supporting Pages

### "Set up a Confluence Cloud data store \_|\_ Gemini Enterprise \_|\_ Google\

- URL: [https://docs.cloud.google.com/gemini/enterprise/docs/connectors/confluence-cloud/set-up-data-store](https://docs.cloud.google.com/gemini/enterprise/docs/connectors/confluence-cloud/set-up-data-store)
- Source ID: `site-docs-root`
- Final score: 221
- Re-rank relevance: N/A

Evidence snippets:
- In the Actions section: If you selected Federated search : From Select Confluence Cloud actions to enable , select the actions from the category to enable them for the data store.
- What's next To provide a user interface for querying your Confluence Cloud data, create an app and connect it to the Confluence Cloud data store .
- To make API calls, use the same administrator account used for setting up authentication and permissions in Confluence to create the data store. curl -X POST \ INSTANCE URL /wiki/rest/webhooks/1.0/webhook \ -H "Content-Type: application/json" \ -u " USERNAME : API TOKEN " \ -d '{ "name": " SUBSCRIPTION NAME ", "url": " LISTENER URL ", "events": [ " EVENT TYPE 1 ", " EVENT TYPE 2 " ], "active": true }' INSTANCE URL : The base web address for your Atlassian Cloud site.
- After creating the data store, create an app , connect it to the Confluence Cloud data store , and authorize Gemini Enterprise to access Confluence Cloud before executing any queries.

### "Set up a Confluence Data Center data store \_|\_ Gemini Enterprise \_|\_\

- URL: [https://docs.cloud.google.com/gemini/enterprise/docs/connectors/confluence-dc/set-up-data-store](https://docs.cloud.google.com/gemini/enterprise/docs/connectors/confluence-dc/set-up-data-store)
- Source ID: `site-docs-root`
- Final score: 217
- Re-rank relevance: N/A

Evidence snippets:
- If you selected the Private destination type and configured your Private Service Connect producer service to Accept connections for selected projects (explicit approval), do the following: In the Google Cloud console, search for Private Service Connect and go to the Private Service Connect page.
- If you are using the data ingestion connection mode, you must meet these additional requirements: Verify that you have the Confluence Administrator permission to fetch the Access Control List (ACL) information.
- If you selected Federated search , in the Actions section, for Select Confluence Data Center actions to enable , choose the actions from the category to enable for the data store.
- What's next To provide a user interface for querying your Confluence Data Center data, create an app and connect it to the Confluence Data Center data store .

### Set up a Box data store \_|\_ Gemini Enterprise \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/gemini/enterprise/docs/connectors/box/set-up-data-store](https://docs.cloud.google.com/gemini/enterprise/docs/connectors/box/set-up-data-store)
- Source ID: `site-docs-root`
- Final score: 217
- Re-rank relevance: N/A

Evidence snippets:
- In the Actions section: If you selected Federated search , in the Select Box actions to enable section, select the actions to enable for the data store.
- What's next To provide a user interface for querying your data, create an app and connect it to the Box federated data store .
- If you selected Data ingestion : In the Authentication settings section, provide the following authentication details: Client ID : The public identifier for your Box application.
- Before you begin Before you set up your Box connection, ensure you perform the following: Grant the Discovery Engine Editor role ( roles/discoveryengine.editor ).

### "Connect to data from AlloyDB for PostgreSQL (Preview) \_|\_ Gemini Enterprise\

- URL: [https://docs.cloud.google.com/gemini/enterprise/docs/connectors/connect-alloydb-data](https://docs.cloud.google.com/gemini/enterprise/docs/connectors/connect-alloydb-data)
- Source ID: `site-docs-root`
- Final score: 213
- Re-rank relevance: N/A

Evidence snippets:
- The following example: curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json" \ -H "X-Goog-User-Project: PROJECT ID " \ "https://discoveryengine.googleapis.com/v1alpha/projects/ PROJECT ID /locations/ LOCATION /collections/default collection/dataStores?dataStoreId= DATA STORE ID " -d '{ "displayName": " DATA STORE NAME ", "federatedSearchConfig": { "alloyDbConfig": { "alloydbConnectionConfig": { "instance": " INSTANCE PATH ", "database": " DATABASE NAME ", "user": " DATABASE USER NAME ", "password": " DATABASE USER PASSWORD ", "authMode": "AUTH MODE SERVICE ACCOUNT" }, "alloydb ai nl config": { "nlConfigId": " NL CONFIG ID " } } }, "industryVertical": "GENERIC", "solutionTypes": ["SOLUTION TYPE SEARCH"] }' Replace the following: PROJECT ID : the ID of your project where you use Gemini Enterprise.
- Link Gemini Enterprise with AlloyDB To connect your AlloyDB instance, follow these steps: Create a data store in Gemini Enterprise with your AlloyDB connection details using the API, including federatedSearchConfig.alloyDbConfig .
- To use this feature, sign up with the following form: Opt-in/Opt-out to use Gemini Enterprise and connect to data from AlloyDB After signing up, wait until you receive the enablement confirmation before following the instructions on this page.
- Home Documentation AI and ML Gemini Enterprise Send feedback Connect to data from AlloyDB for PostgreSQL (Preview) Stay organized with collections Save and categorize content based on your preferences.

