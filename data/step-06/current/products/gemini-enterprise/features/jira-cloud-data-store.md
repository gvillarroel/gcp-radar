---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:16:13.682Z"
product_name: "Gemini Enterprise"
product_slug: "gemini-enterprise"
feature_name: "Jira Cloud data store"
feature_slug: "jira-cloud-data-store"
latest_feature_date: "2025-12-12"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/gemini/enterprise/docs/apps-data-stores"
  - "https://docs.cloud.google.com/gemini/enterprise/docs/concepts"
  - "https://docs.cloud.google.com/gemini/enterprise/docs/configure-advanced-autocomplete"
  - "https://docs.cloud.google.com/gemini/enterprise/docs/connectors/confluence-cloud/set-up-data-store"
keywords:
  - "jira"
  - "store"
  - "gemini"
  - "enterprise"
  - "supports"
  - "the"
  - "you"
  - "can"
---

# Jira Cloud data store

Product: Gemini Enterprise
Coverage: MEDIUM

## Step 02 Summary

Gemini Enterprise supports the Jira Cloud data store; You can connect a data store to ingest content from Jira Cloud.

## Extended Definition

Gemini Enterprise supports the Jira Cloud data store; You can connect a data store to ingest content from Jira Cloud.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/gemini/enterprise/docs/apps-data-stores](https://docs.cloud.google.com/gemini/enterprise/docs/apps-data-stores)
- [https://docs.cloud.google.com/gemini/enterprise/docs/concepts](https://docs.cloud.google.com/gemini/enterprise/docs/concepts)
- [https://docs.cloud.google.com/gemini/enterprise/docs/configure-advanced-autocomplete](https://docs.cloud.google.com/gemini/enterprise/docs/configure-advanced-autocomplete)
- [https://docs.cloud.google.com/gemini/enterprise/docs/connectors/confluence-cloud/set-up-data-store](https://docs.cloud.google.com/gemini/enterprise/docs/connectors/confluence-cloud/set-up-data-store)

## Supporting Pages

### About apps and data stores \_|\_ Gemini Enterprise \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/gemini/enterprise/docs/apps-data-stores](https://docs.cloud.google.com/gemini/enterprise/docs/apps-data-stores)
- Source ID: `site-docs-root`
- Final score: 274
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You can provide this schema yourself or you can let Gemini Enterprise derive the schema from the ingested data.
- Note: You can't connect website data stores to your Gemini Enterprise search and assistant apps.
- Home Documentation AI and ML Gemini Enterprise Send feedback About apps and data stores Stay organized with collections Save and categorize content based on your preferences.
- You can add or remove data stores from a blended search app, but the app can't have fewer than two data stores connected to it at any time.

### Gemini Enterprise concepts \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/gemini/enterprise/docs/concepts](https://docs.cloud.google.com/gemini/enterprise/docs/concepts)
- Source ID: `site-docs-root`
- Final score: 252
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Concept Description Data sources You can connect Google and third-party data sources to Gemini Enterprise and store the data in dedicated data stores.
- Therefore, when you create a data store using the Google Cloud console, you get a collection of data stores representing these ingested data entities.To learn about Gemini Enterprise data stores, see Introduction to connectors and data stores .
- You can turn on assistant actions for the following data stores: Gmail and Google Calendar Jira Cloud Outlook email and Outlook calendar ServiceNow (Private preview) Agents Agents are applications built to accomplish specific objectives.
- In Gemini Enterprise, you can find prebuilt agents in the Agent Gallery or use Agent Designer to create your own custom agents.

### "Configure advanced autocomplete \_|\_ Gemini Enterprise \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/gemini/enterprise/docs/configure-advanced-autocomplete](https://docs.cloud.google.com/gemini/enterprise/docs/configure-advanced-autocomplete)
- Source ID: `site-docs-root`
- Final score: 238
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Example command and result curl -X POST -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json" \ "https://discoveryengine.googleapis.com/v1/projects/1234/locations/global/collections/default collection/engines/my app/completionConfig:completeQuery" \ - d { "query": "C", "suggestionTypes": ["CONTENT"] }' { "contentSuggestions": [{ "suggestion": "critical crash in payment module", "document": { "name": "projects/1234/locations/global/collections/default collection/dataStores/my data store/branches/0/documents/10000", "derivedStructData": { "title": "Critical Crash in Payment Module", "uri": "https://cymballabs.atlassian.net/browse/CPT-1", "source type": "jira", "entity type": "issue" } }, "dataStore": "projects/1234/locations/global/collections/default collection/dataStores/my data store" }] } Note: If you specify suggestionTypes as CONTENT , then any boostSpec , queryModel , or includeTailSuggestions parameters in your curl command are ignored.
- You can view and edit key property mappings on the Schema tab of the data store page.
- Third-party connector Entities supported Box File Confluence Cloud Page Space Dropbox File Jira Cloud Issue Space OneDrive File Salesforce Account Lead Opportunity ServiceNow Incident Knowledge Sharepoint Online Attachment Event File Page Slack Message Procedure To send an autocomplete request that returns a rich suggestion, follow these steps: REST Find your app ID.
- With rich suggestions, for each of these suggested documents, you can display the following information about the document: the document title ( title ), a link to the document ( uri ) when it was last updated ( update time ) the source ( source type ), for example, whether the document was found in Confluence Cloud or Slack.

### "Set up a Confluence Cloud data store \_|\_ Gemini Enterprise \_|\_ Google\

- URL: [https://docs.cloud.google.com/gemini/enterprise/docs/connectors/confluence-cloud/set-up-data-store](https://docs.cloud.google.com/gemini/enterprise/docs/connectors/confluence-cloud/set-up-data-store)
- Source ID: `site-docs-root`
- Final score: 237
- Re-rank relevance: N/A

Evidence snippets:
- Data handling and query execution This section describes how Gemini Enterprise manages your query and the privacy implications of using the federated data store.
- Gemini Enterprise creates your data store and displays your data stores on the Data Stores page.
- Home Documentation AI and ML Gemini Enterprise Send feedback Set up a Confluence Cloud data store Stay organized with collections Save and categorize content based on your preferences.
- To enable real-time sync for a Confluence data store, follow these steps: Generate a webhook URL Navigate to the Gemini Enterprise page, and in the navigation menu, click Data Stores .

