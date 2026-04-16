---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:16:13.712Z"
product_name: "Gemini Enterprise"
product_slug: "gemini-enterprise"
feature_name: "Third-party data store alerts"
feature_slug: "third-party-data-store-alerts"
latest_feature_date: "2025-07-31"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/gemini/enterprise/docs/connectors/configure-periodic-data-alerts"
  - "https://docs.cloud.google.com/gemini/enterprise/docs/connectors/confluence-cloud/set-up-data-store"
  - "https://docs.cloud.google.com/gemini/enterprise/docs/connectors/confluence-dc/set-up-data-store"
  - "https://docs.cloud.google.com/gemini/enterprise/docs/apps-data-stores"
keywords:
  - "third"
  - "party"
  - "store"
  - "alerts"
  - "users"
  - "can"
  - "enable"
  - "for"
---

# Third-party data store alerts

Product: Gemini Enterprise
Coverage: MEDIUM

## Step 02 Summary

Users can enable alerts for predefined tasks in third-party data stores.

## Extended Definition

Users can enable alerts for predefined tasks in third-party data stores.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/gemini/enterprise/docs/connectors/configure-periodic-data-alerts](https://docs.cloud.google.com/gemini/enterprise/docs/connectors/configure-periodic-data-alerts)
- [https://docs.cloud.google.com/gemini/enterprise/docs/connectors/confluence-cloud/set-up-data-store](https://docs.cloud.google.com/gemini/enterprise/docs/connectors/confluence-cloud/set-up-data-store)
- [https://docs.cloud.google.com/gemini/enterprise/docs/connectors/confluence-dc/set-up-data-store](https://docs.cloud.google.com/gemini/enterprise/docs/connectors/confluence-dc/set-up-data-store)
- [https://docs.cloud.google.com/gemini/enterprise/docs/apps-data-stores](https://docs.cloud.google.com/gemini/enterprise/docs/apps-data-stores)

## Supporting Pages

### "View data store sync activity and set up alerts \_|\_ Gemini Enterprise\

- URL: [https://docs.cloud.google.com/gemini/enterprise/docs/connectors/configure-periodic-data-alerts](https://docs.cloud.google.com/gemini/enterprise/docs/connectors/configure-periodic-data-alerts)
- Source ID: `site-docs-root`
- Final score: 221
- Re-rank relevance: N/A

Evidence snippets:
- Set up alerts for sync events After connecting your third-party data source to Gemini Enterprise by creating a data store, you can enable alerts for predefined tasks.
- This page describes how to view the status, activity logs, and sync activity of a third-party data store, and how to configure alerts for the data store.
- Before you begin To enable alerts for a data store, you need to have the following permissions or role assigned to you: Permissions discoveryengine.googleapis.com/alertPolicies.get discoveryengine.googleapis.com/dataConnectors.update Predefined role Discovery Engine User Enable alerts for a data source To enable alerts for a specific data source: In the Google Cloud console, go to the Gemini Enterprise page.
- View data store details and status After connecting your third-party data source to Gemini Enterprise by creating a data store, you can view the status of the data store by going to the Data stores page and clicking the data store name.

### "Set up a Confluence Cloud data store \_|\_ Gemini Enterprise \_|\_ Google\

- URL: [https://docs.cloud.google.com/gemini/enterprise/docs/connectors/confluence-cloud/set-up-data-store](https://docs.cloud.google.com/gemini/enterprise/docs/connectors/confluence-cloud/set-up-data-store)
- Source ID: `site-docs-root`
- Final score: 211
- Re-rank relevance: N/A

Evidence snippets:
- To enable alerts for the data store, see Configure alerts for third-party data stores .
- Example command and result curl -X POST \ https://cymbalgroup.atlassian.net/wiki/rest/webhooks/1.0/webhook \ -H "Content-Type: application/json" \ -u "admin1:######" \ -d '{ "name": "Cymbal DCT", "events": [ "attachment created", "attachment updated" ], "url": "https://rt-server-a-jx3m2-uw.a.run.app/webhook", "active": true }' { "name": "Cymbal DCT", "url": "https://cymbalgroup.atlassian.net/wiki/rest/webhooks/1.0/webhook", "description": " Webhook for Cymbal DCT group to fetch attachments.", "excludeBody": false, "filters": {}, "events": [ "attachment created", "attachment updated", ], "enabled": true, "self": https://rt-server-a-jx3m2-uw.a.run.app/webhook, "lastUpdatedUser": "Cymb 389", "lastUpdatedDisplayName": "Ariel", "lastUpdated": 1752095647212 } API error codes This table lists common API error codes users encounter when creating webhooks.
- To enable real-time sync for a Confluence data store, follow these steps: Generate a webhook URL Navigate to the Gemini Enterprise page, and in the navigation menu, click Data Stores .
- In the Actions section: If you selected Federated search : From Select Confluence Cloud actions to enable , select the actions from the category to enable them for the data store.

### "Set up a Confluence Data Center data store \_|\_ Gemini Enterprise \_|\_\

- URL: [https://docs.cloud.google.com/gemini/enterprise/docs/connectors/confluence-dc/set-up-data-store](https://docs.cloud.google.com/gemini/enterprise/docs/connectors/confluence-dc/set-up-data-store)
- Source ID: `site-docs-root`
- Final score: 207
- Re-rank relevance: N/A

Evidence snippets:
- To enable alerts for the data store, see Configure alerts for third-party data stores .
- If you selected Federated search , in the Actions section, for Select Confluence Data Center actions to enable , choose the actions from the category to enable for the data store.
- For more information, see Register a single-region key for third-party connectors .
- Create the Confluence Data Center data store To create the Confluence Data Center data store, perform the following steps: In the Google Cloud console, go to the Gemini Enterprise page.

### About apps and data stores \_|\_ Gemini Enterprise \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/gemini/enterprise/docs/apps-data-stores](https://docs.cloud.google.com/gemini/enterprise/docs/apps-data-stores)
- Source ID: `site-docs-root`
- Final score: 204
- Re-rank relevance: N/A

Evidence snippets:
- Third-party data Structured data Unstructured data Structured data for third-party data stores The following third-party data source connectors are available in Preview with allowlist: Confluence Jira Salesforce Sharepoint Online Slack Data from these third parties is considered structured data.
- Data store : A data store is an entity that contains the data ingested from a first-party data source such as Cloud Storage or third-party applications such as Jira or Salesforce.
- What a document represents varies depending on the type of data in the data store: Data for third-party data sources .
- Only the following fields can be added or updated in a serving config: boostControlIds displayName filterControlIds genericConfig : contentSearchSpec name solutionType synonymsControlIds CRUD operations on the following controls are supported for blended search apps: boostAction synonymAction filterAction There is a limit of 50 data stores per search app.

