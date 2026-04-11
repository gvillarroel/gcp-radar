---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T22:38:24.569Z"
product_name: "Cloud Logging"
product_slug: "cloud-logging"
feature_name: "Saved searches"
feature_slug: "saved-searches"
latest_feature_date: "2019-09-10"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface"
  - "https://docs.cloud.google.com/logging/docs/release-notes"
  - "https://docs.cloud.google.com/logging/docs/view/building-queries"
keywords:
  - "saved"
  - "searches"
  - "logging"
  - "lets"
  - "users"
  - "save"
  - "advanced"
  - "log"
---

# Saved searches

Product: Cloud Logging
Coverage: LOW

## Step 02 Summary

Cloud Logging lets users save advanced log queries to a library for management and sharing.

## Extended Definition

Cloud Logging lets users save advanced log queries to a library for management and sharing.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface](https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface)
- [https://docs.cloud.google.com/logging/docs/release-notes](https://docs.cloud.google.com/logging/docs/release-notes)
- [https://docs.cloud.google.com/logging/docs/view/building-queries](https://docs.cloud.google.com/logging/docs/view/building-queries)

## Supporting Pages

### View and analyze logs \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface](https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface)
- Source ID: `site-docs-root`
- Final score: 218
- Re-rank relevance: N/A

Evidence snippets:
- The Logs Explorer contains the following sections, which are detailed on this page: Primary toolbar Query pane Fields pane Timeline Query results pane Primary toolbar in the Logs Explorer Using the primary toolbar, you can do the following: menu book Query library : View saved, recent, and suggested queries.
- Home Documentation Observability Cloud Logging Guides Send feedback View and analyze logs Stay organized with collections Save and categorize content based on your preferences.
- You can also grant a role that contains the logging.logEntries.list permission, which lets a principal view and download logs.
- Saved queries: View your saved queries and queries that other users of the Google Cloud project have shared with you.

### Logging release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/release-notes](https://docs.cloud.google.com/logging/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 216
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- September 10, 2019 Feature Stackdriver Logging now lets you save your advanced log queries to a Saved Searches library, where they can be managed and shared.
- January 14, 2021 Change Cloud Logging now lets you share your saved queries with other users of a project.
- Users of the legacy Stackdriver support for monitoring and logging for Google Kubernetes Engine are encouraged to migrate to Stackdriver Kubernetes Engine Monitoring as soon as possible.
- Home Documentation Observability Cloud Logging Resources Send feedback Logging release notes Stay organized with collections Save and categorize content based on your preferences.

### "Build and save queries by using the Logging query language \_|\_ Google\

- URL: [https://docs.cloud.google.com/logging/docs/view/building-queries](https://docs.cloud.google.com/logging/docs/view/building-queries)
- Source ID: `site-docs-root`
- Final score: 192
- Re-rank relevance: N/A

Evidence snippets:
- The following example illustrates a sample request body, which contains an instance of SavedQuery : { "parent": "projects/my-project/locations/global" "savedQueryId": "compute-query" { "displayName": "compute-admin-activity-query", "description": "Queries for Compute Engine Admin Activity logs.", "loggingQuery": { "filter": resource.type="gce instance" AND log id("cloudaudit.googleapis.com/activity"), }, "visibility": "PRIVATE" } } To share the query with other members of the Google Cloud project, specify a value of SHARED in the visibility field.
- View saved queries You can view both private queries and queries that are shared with other members in the Google Cloud project by clicking the menu book Query library button: Console In the Google Cloud console, go to the segment Logs Explorer page: Go to Logs Explorer If you use the search bar to find this page, then select the result whose subheading is Logging .
- You can also save your queries in the Logs Explorer page, or by using the Logging API method savedQueries.create .
- API You can use the Logging API to view private and shared queries by using the savedQueries.list method.

