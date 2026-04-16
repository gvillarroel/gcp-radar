---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:16:13.718Z"
product_name: "Gemini Enterprise"
product_slug: "gemini-enterprise"
feature_name: "Full and incremental sync schedules"
feature_slug: "full-and-incremental-sync-schedules"
latest_feature_date: "2025-06-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/gemini/enterprise/docs/connectors/configure-periodic-data-alerts"
  - "https://docs.cloud.google.com/gemini/enterprise/docs/connectors/confluence-cloud/set-up-data-store"
  - "https://docs.cloud.google.com/gemini/enterprise/docs/connectors/box/set-up-data-store"
  - "https://docs.cloud.google.com/gemini/enterprise/docs/connectors/confluence-dc/set-up-data-store"
keywords:
  - "full"
  - "and"
  - "incremental"
  - "sync"
  - "schedules"
  - "connectors"
  - "can"
  - "use"
---

# Full and incremental sync schedules

Product: Gemini Enterprise
Coverage: MEDIUM

## Step 02 Summary

Data connectors can use separate full and incremental sync intervals and pause or resume each independently.

## Extended Definition

Data connectors can use separate full and incremental sync intervals and pause or resume each independently.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/gemini/enterprise/docs/connectors/configure-periodic-data-alerts](https://docs.cloud.google.com/gemini/enterprise/docs/connectors/configure-periodic-data-alerts)
- [https://docs.cloud.google.com/gemini/enterprise/docs/connectors/confluence-cloud/set-up-data-store](https://docs.cloud.google.com/gemini/enterprise/docs/connectors/confluence-cloud/set-up-data-store)
- [https://docs.cloud.google.com/gemini/enterprise/docs/connectors/box/set-up-data-store](https://docs.cloud.google.com/gemini/enterprise/docs/connectors/box/set-up-data-store)
- [https://docs.cloud.google.com/gemini/enterprise/docs/connectors/confluence-dc/set-up-data-store](https://docs.cloud.google.com/gemini/enterprise/docs/connectors/confluence-dc/set-up-data-store)

## Supporting Pages

### "View data store sync activity and set up alerts \_|\_ Gemini Enterprise\

- URL: [https://docs.cloud.google.com/gemini/enterprise/docs/connectors/configure-periodic-data-alerts](https://docs.cloud.google.com/gemini/enterprise/docs/connectors/configure-periodic-data-alerts)
- Source ID: `site-docs-root`
- Final score: 210
- Re-rank relevance: N/A

Evidence snippets:
- On the data store details page, ensure that you have enabled the Full sync frequency and the Incremental sync frequency .
- Initialization failed The data store failed to be created. [Action required] User actions that must be completed before the data store can start syncing data.
- Field Description Status Succeeded: The entity sync completed, and at least 99% of the documents are successfully indexed.
- For each sync run in the table, you can expand the row by clicking the date and time under Connector run .

### "Set up a Confluence Cloud data store \_|\_ Gemini Enterprise \_|\_ Google\

- URL: [https://docs.cloud.google.com/gemini/enterprise/docs/connectors/confluence-cloud/set-up-data-store](https://docs.cloud.google.com/gemini/enterprise/docs/connectors/confluence-cloud/set-up-data-store)
- Source ID: `site-docs-root`
- Final score: 169
- Re-rank relevance: N/A

Evidence snippets:
- The user can subscribe to the following events: space created space updated page created page updated attachment created attachment updated comment created comment updated blog created blog updated Note: Whiteboard and trashed events are not supported.
- To schedule separate full syncs of entity and identity data, expand the menu in the Full sync section and then select Custom options .
- Example command and result curl -X POST \ https://cymbalgroup.atlassian.net/wiki/rest/webhooks/1.0/webhook \ -H "Content-Type: application/json" \ -u "admin1:######" \ -d '{ "name": "Cymbal DCT", "events": [ "attachment created", "attachment updated" ], "url": "https://rt-server-a-jx3m2-uw.a.run.app/webhook", "active": true }' { "name": "Cymbal DCT", "url": "https://cymbalgroup.atlassian.net/wiki/rest/webhooks/1.0/webhook", "description": " Webhook for Cymbal DCT group to fetch attachments.", "excludeBody": false, "filters": {}, "events": [ "attachment created", "attachment updated", ], "enabled": true, "self": https://rt-server-a-jx3m2-uw.a.run.app/webhook, "lastUpdatedUser": "Cymb 389", "lastUpdatedDisplayName": "Ariel", "lastUpdated": 1752095647212 } API error codes This table lists common API error codes users encounter when creating webhooks.
- To make API calls, use the same administrator account used for setting up authentication and permissions in Confluence to create the data store. curl -X POST \ INSTANCE URL /wiki/rest/webhooks/1.0/webhook \ -H "Content-Type: application/json" \ -u " USERNAME : API TOKEN " \ -d '{ "name": " SUBSCRIPTION NAME ", "url": " LISTENER URL ", "events": [ " EVENT TYPE 1 ", " EVENT TYPE 2 " ], "active": true }' INSTANCE URL : The base web address for your Atlassian Cloud site.

### Set up a Box data store \_|\_ Gemini Enterprise \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/gemini/enterprise/docs/connectors/box/set-up-data-store](https://docs.cloud.google.com/gemini/enterprise/docs/connectors/box/set-up-data-store)
- Source ID: `site-docs-root`
- Final score: 165
- Re-rank relevance: N/A

Evidence snippets:
- To schedule separate full syncs of entity and identity data, expand the menu in the Full sync section and then select Custom options .
- In the Advanced options section: If you selected Federated search , select the Impersonate user mode as Admin or User , and click Continue .
- What's next To provide a user interface for querying your data, create an app and connect it to the Box federated data store .
- In the Incremental sync frequency list, select the incremental sync frequency.

### "Set up a Confluence Data Center data store \_|\_ Gemini Enterprise \_|\_\

- URL: [https://docs.cloud.google.com/gemini/enterprise/docs/connectors/confluence-dc/set-up-data-store](https://docs.cloud.google.com/gemini/enterprise/docs/connectors/confluence-dc/set-up-data-store)
- Source ID: `site-docs-root`
- Final score: 161
- Re-rank relevance: N/A

Evidence snippets:
- To schedule separate full syncs of entity and identity data, expand the menu in the Full sync section and then select Custom options .
- For Data ingestion , choose between Username and Password credentials, Personal access token , or API token , and enter the authentication details accordingly.
- What's next To provide a user interface for querying your Confluence Data Center data, create an app and connect it to the Confluence Data Center data store .
- These endpoints enable Gemini Enterprise to retrieve space permission details, content restrictions, and email addresses of licensed users.

