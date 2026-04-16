---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:16:13.674Z"
product_name: "Gemini Enterprise"
product_slug: "gemini-enterprise"
feature_name: "Confluence Cloud actions in the unified view"
feature_slug: "confluence-cloud-actions-in-the-unified-view"
latest_feature_date: "2026-01-23"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/gemini/enterprise/docs/connectors/confluence-cloud/set-up-data-store"
  - "https://docs.cloud.google.com/gemini/enterprise/docs/connectors/confluence-dc/set-up-data-store"
  - "https://docs.cloud.google.com/gemini/enterprise/docs/connectors/confluence-dc"
  - "https://docs.cloud.google.com/gemini/enterprise/docs/connectors/confluence-cloud"
keywords:
  - "confluence"
  - "actions"
  - "in"
  - "the"
  - "unified"
  - "view"
  - "gemini"
  - "enterprise"
---

# Confluence Cloud actions in the unified view

Product: Gemini Enterprise
Coverage: MEDIUM

## Step 02 Summary

Gemini Enterprise adds new actions for Confluence Cloud in the unified view; Gemini Enterprise adds new actions for Confluence Cloud in the unified view.

## Extended Definition

Gemini Enterprise adds new actions for Confluence Cloud in the unified view; Gemini Enterprise adds new actions for Confluence Cloud in the unified view.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/gemini/enterprise/docs/connectors/confluence-cloud/set-up-data-store](https://docs.cloud.google.com/gemini/enterprise/docs/connectors/confluence-cloud/set-up-data-store)
- [https://docs.cloud.google.com/gemini/enterprise/docs/connectors/confluence-dc/set-up-data-store](https://docs.cloud.google.com/gemini/enterprise/docs/connectors/confluence-dc/set-up-data-store)
- [https://docs.cloud.google.com/gemini/enterprise/docs/connectors/confluence-dc](https://docs.cloud.google.com/gemini/enterprise/docs/connectors/confluence-dc)
- [https://docs.cloud.google.com/gemini/enterprise/docs/connectors/confluence-cloud](https://docs.cloud.google.com/gemini/enterprise/docs/connectors/confluence-cloud)

## Supporting Pages

### "Set up a Confluence Cloud data store \_|\_ Gemini Enterprise \_|\_ Google\

- URL: [https://docs.cloud.google.com/gemini/enterprise/docs/connectors/confluence-cloud/set-up-data-store](https://docs.cloud.google.com/gemini/enterprise/docs/connectors/confluence-cloud/set-up-data-store)
- Source ID: `site-docs-root`
- Final score: 304
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To enable real-time sync for a Confluence data store, follow these steps: Generate a webhook URL Navigate to the Gemini Enterprise page, and in the navigation menu, click Data Stores .
- After creating the data store, create an app , connect it to the Confluence Cloud data store , and authorize Gemini Enterprise to access Confluence Cloud before executing any queries.
- Query execution After you authorize Confluence Cloud and send a search query to Gemini Enterprise: Gemini Enterprise sends your search query directly to the Atlassian API.
- Create Confluence Cloud data store To create a Confluence Cloud data store, perform the following steps: In the Google Cloud console, go to the Gemini Enterprise page.

### "Set up a Confluence Data Center data store \_|\_ Gemini Enterprise \_|\_\

- URL: [https://docs.cloud.google.com/gemini/enterprise/docs/connectors/confluence-dc/set-up-data-store](https://docs.cloud.google.com/gemini/enterprise/docs/connectors/confluence-dc/set-up-data-store)
- Source ID: `site-docs-root`
- Final score: 302
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Query execution After you authorize Confluence Data Center and send a search query to Gemini Enterprise: Gemini Enterprise sends your search query directly to the Confluence Data Center API.
- Create the Confluence Data Center data store To create the Confluence Data Center data store, perform the following steps: In the Google Cloud console, go to the Gemini Enterprise page.
- Home Documentation AI and ML Gemini Enterprise Send feedback Set up a Confluence Data Center data store Stay organized with collections Save and categorize content based on your preferences.
- If you selected Federated search , in the Actions section, for Select Confluence Data Center actions to enable , choose the actions from the category to enable for the data store.

### Overview \_|\_ Gemini Enterprise \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/gemini/enterprise/docs/connectors/confluence-dc](https://docs.cloud.google.com/gemini/enterprise/docs/connectors/confluence-dc)
- Source ID: `site-docs-root`
- Final score: 301
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Required permissions To enable Gemini Enterprise to perform necessary search, actions, and data ingestion, the following permissions are required: Connection mode Permissions Purpose Data ingestion Read Required to ingest Confluence page content, attachments, and comments.
- Supported actions When the Confluence Data Center connector is enabled, the end user can use natural language commands in Gemini Enterprise to perform the following actions.
- The Confluence Data Center data store for Gemini Enterprise lets you search and perform actions on page content, attachments, and comments.
- Home Documentation AI and ML Gemini Enterprise Send feedback Overview Stay organized with collections Save and categorize content based on your preferences.

### Overview \_|\_ Gemini Enterprise \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/gemini/enterprise/docs/connectors/confluence-cloud](https://docs.cloud.google.com/gemini/enterprise/docs/connectors/confluence-cloud)
- Source ID: `site-docs-root`
- Final score: 290
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Supported actions When the Confluence Cloud data store is enabled, end users can use natural language commands in Gemini Enterprise to perform the following actions.
- The Confluence Cloud data store for Gemini Enterprise lets you search and perform actions on your spaces, pages, and user information.
- Required scopes To enable Gemini Enterprise to perform search and data ingestion using the Confluence Cloud data store, you need the following scopes: Usage reason Permission Description Data ingestion read:content-details:confluence Allows the data store to read content details in Confluence. read:attachment:confluence Allows the data store to download and read attachments. read:comment:confluence Allows the data store to read comments. read:page:confluence Allows the data store to read pages. read:whiteboard:confluence Allows the data store to read whiteboards. read:space:confluence Allows the data store to read spaces. read:group:confluence Allows the data store to read groups. read:user:confluence Allows the data store to read users. read:content.metadata:confluence Allows the data store to read content metadata. read:configuration:confluence Allows the data store to read configurations.
- Actions write:page:confluence Allows the data store to create pages in Confluence. write:attachment:confluence Allows the data store to upload attachments to Confluence pages. write:confluence-content Allows the data store to write content in Confluence. write:confluence-file Allows the data store to upload attachments to Confluence. read:attachment:confluence Allows the data store to download and read attachments. read:comment:confluence Allows the data store to read comments. read:configuration:confluence Allows the data store to read configurations. read:confluence-content.all Allows the data store to read all Confluence content. read:confluence-space.summary Allows the data store to read space summaries. read:content-details:confluence Allows the data store to read content details in Confluence. read:content.metadata:confluence Allows the data store to read content metadata. read:group:confluence Allows the data store to read groups. read:me Allows the data store to read current user information. read:page:confluence Allows the data store to read pages. read:space:confluence Allows the data store to read spaces. read:space-details:confluence Allows the data store to read space details. read:task:confluence Allows the data store to read tasks. read:user:confluence Allows the data store to read users. search:confluence Allows the data store to perform search queries in Confluence.

