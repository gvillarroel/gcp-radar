---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:16:13.680Z"
product_name: "Gemini Enterprise"
product_slug: "gemini-enterprise"
feature_name: "Confluence Cloud data store"
feature_slug: "confluence-cloud-data-store"
latest_feature_date: "2025-12-12"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/gemini/enterprise/docs/connectors/confluence-cloud/set-up-data-store"
  - "https://docs.cloud.google.com/gemini/enterprise/docs/connectors/confluence-cloud/third-party-config"
  - "https://docs.cloud.google.com/gemini/enterprise/docs/connectors/confluence-cloud"
  - "https://docs.cloud.google.com/gemini/enterprise/docs/connectors/confluence-dc/set-up-data-store"
keywords:
  - "confluence"
  - "store"
  - "gemini"
  - "enterprise"
  - "supports"
  - "the"
  - "you"
  - "can"
---

# Confluence Cloud data store

Product: Gemini Enterprise
Coverage: MEDIUM

## Step 02 Summary

Gemini Enterprise supports the Confluence Cloud data store; You can connect a data store to ingest content from Confluence Cloud.

## Extended Definition

Gemini Enterprise supports the Confluence Cloud data store; You can connect a data store to ingest content from Confluence Cloud.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/gemini/enterprise/docs/connectors/confluence-cloud/set-up-data-store](https://docs.cloud.google.com/gemini/enterprise/docs/connectors/confluence-cloud/set-up-data-store)
- [https://docs.cloud.google.com/gemini/enterprise/docs/connectors/confluence-cloud/third-party-config](https://docs.cloud.google.com/gemini/enterprise/docs/connectors/confluence-cloud/third-party-config)
- [https://docs.cloud.google.com/gemini/enterprise/docs/connectors/confluence-cloud](https://docs.cloud.google.com/gemini/enterprise/docs/connectors/confluence-cloud)
- [https://docs.cloud.google.com/gemini/enterprise/docs/connectors/confluence-dc/set-up-data-store](https://docs.cloud.google.com/gemini/enterprise/docs/connectors/confluence-dc/set-up-data-store)

## Supporting Pages

### "Set up a Confluence Cloud data store \_|\_ Gemini Enterprise \_|\_ Google\

- URL: [https://docs.cloud.google.com/gemini/enterprise/docs/connectors/confluence-cloud/set-up-data-store](https://docs.cloud.google.com/gemini/enterprise/docs/connectors/confluence-cloud/set-up-data-store)
- Source ID: `site-docs-root`
- Final score: 358
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation AI and ML Gemini Enterprise Send feedback Set up a Confluence Cloud data store Stay organized with collections Save and categorize content based on your preferences.
- To enable real-time sync for a Confluence data store, follow these steps: Generate a webhook URL Navigate to the Gemini Enterprise page, and in the navigation menu, click Data Stores .
- After creating the data store, create an app , connect it to the Confluence Cloud data store , and authorize Gemini Enterprise to access Confluence Cloud before executing any queries.
- Query execution After you authorize Confluence Cloud and send a search query to Gemini Enterprise: Gemini Enterprise sends your search query directly to the Atlassian API.

### "Confluence Cloud configuration \_|\_ Gemini Enterprise \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/gemini/enterprise/docs/connectors/confluence-cloud/third-party-config](https://docs.cloud.google.com/gemini/enterprise/docs/connectors/confluence-cloud/third-party-config)
- Source ID: `site-docs-root`
- Final score: 308
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Example curl command This example demonstrates calling the User Identity Accessor for Confluence Cloud webtrigger, which accepts an array of account IDs and returns the email addresses. curl --location --request POST 'https:// YOUR INSTANCE ID .hello.atlassian-dev.net/x1/ ENDPOINT PATH ' \ --header 'X-Api-Key: YOUR-API-KEY ' \ --header 'Content-Type: application/json' \ --data-raw '{ "accountIds": [ " ACCOUNT ID 1 ", " ACCOUNT ID 2 " ] }' Replace: YOUR INSTANCE ID with your Confluence Cloud instance ID ENDPOINT PATH with the API endpoint path YOUR API KEY with the API key you set or generated in the Set up the API key section ACCOUNT ID with Atlassian account IDs you want to target Expected response [{ "accountId" : " ACCOUNT ID 1 " , "emailAddress" : " EMAIL ADDRESS 1 " }, { "accountId" : " ACCOUNT ID 2 " , "emailAddress" : " EMAIL ADDRESS 2 " }] Replace: ACCOUNT ID X with actual Atlassian account IDs USER EMAIL X with user email addresses returned from your API call Implement security best practices To confirm the security of your API key, follow these recommendations: Store the API key securely within your Confluence Cloud data store's configuration.
- Upon successful installation, a confirmation message appears: "Your app has been added to your instance and is ready for use." Configure User Identity Accessor for Confluence Cloud After you've installed the User Identity Accessor for Confluence Cloud app, configure an API key that your external system (for example, your Confluence Cloud data store) uses to securely call the app's webtrigger to fetch emails.
- Grant administrator roles To grant the Confluence administrator the Discovery Engine Editor role in the Google Cloud console, do the following: In the Google Cloud console, go to the Gemini Enterprise page.
- Home Documentation AI and ML Gemini Enterprise Send feedback Confluence Cloud configuration Stay organized with collections Save and categorize content based on your preferences.

### Overview \_|\_ Gemini Enterprise \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/gemini/enterprise/docs/connectors/confluence-cloud](https://docs.cloud.google.com/gemini/enterprise/docs/connectors/confluence-cloud)
- Source ID: `site-docs-root`
- Final score: 304
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Required scopes To enable Gemini Enterprise to perform search and data ingestion using the Confluence Cloud data store, you need the following scopes: Usage reason Permission Description Data ingestion read:content-details:confluence Allows the data store to read content details in Confluence. read:attachment:confluence Allows the data store to download and read attachments. read:comment:confluence Allows the data store to read comments. read:page:confluence Allows the data store to read pages. read:whiteboard:confluence Allows the data store to read whiteboards. read:space:confluence Allows the data store to read spaces. read:group:confluence Allows the data store to read groups. read:user:confluence Allows the data store to read users. read:content.metadata:confluence Allows the data store to read content metadata. read:configuration:confluence Allows the data store to read configurations.
- Supported actions When the Confluence Cloud data store is enabled, end users can use natural language commands in Gemini Enterprise to perform the following actions.
- The Confluence Cloud data store for Gemini Enterprise lets you search and perform actions on your spaces, pages, and user information.
- Rate limits for data ingestion The Confluence Cloud data store supports a default rate limit of 20 queries per second (QPS) for data ingestion.

### "Set up a Confluence Data Center data store \_|\_ Gemini Enterprise \_|\_\

- URL: [https://docs.cloud.google.com/gemini/enterprise/docs/connectors/confluence-dc/set-up-data-store](https://docs.cloud.google.com/gemini/enterprise/docs/connectors/confluence-dc/set-up-data-store)
- Source ID: `site-docs-root`
- Final score: 294
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation AI and ML Gemini Enterprise Send feedback Set up a Confluence Data Center data store Stay organized with collections Save and categorize content based on your preferences.
- Query execution After you authorize Confluence Data Center and send a search query to Gemini Enterprise: Gemini Enterprise sends your search query directly to the Confluence Data Center API.
- Create the Confluence Data Center data store To create the Confluence Data Center data store, perform the following steps: In the Google Cloud console, go to the Gemini Enterprise page.
- Data handling and query execution This section describes how Gemini Enterprise manages your query and the privacy implications of using the federated data store.

