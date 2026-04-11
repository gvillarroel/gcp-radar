---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T22:38:24.524Z"
product_name: "Cloud Logging"
product_slug: "cloud-logging"
feature_name: "Saved and recent queries permission model"
feature_slug: "saved-and-recent-queries-permission-model"
latest_feature_date: "2024-07-19"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/logging/docs/view/building-queries"
  - "https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface"
  - "https://docs.cloud.google.com/logging/docs/release-notes"
keywords:
  - "saved"
  - "and"
  - "recent"
  - "queries"
  - "permission"
  - "model"
  - "have"
  - "updated"
---

# Saved and recent queries permission model

Product: Cloud Logging
Coverage: LOW

## Step 02 Summary

Saved and recent queries have updated permission requirements and support a configurable storage location in default resource settings.

## Extended Definition

Saved and recent queries have updated permission requirements and support a configurable storage location in default resource settings.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/logging/docs/view/building-queries](https://docs.cloud.google.com/logging/docs/view/building-queries)
- [https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface](https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface)
- [https://docs.cloud.google.com/logging/docs/release-notes](https://docs.cloud.google.com/logging/docs/release-notes)

## Supporting Pages

### "Build and save queries by using the Logging query language \_|\_ Google\

- URL: [https://docs.cloud.google.com/logging/docs/view/building-queries](https://docs.cloud.google.com/logging/docs/view/building-queries)
- Source ID: `site-docs-root`
- Final score: 172
- Re-rank relevance: N/A

Evidence snippets:
- For recent queries, you have the following options: Stream : To run the query and stream the results, choose this option.
- View and run saved, recent, and suggested queries from the menu book Query library .
- Private : Queries that you have saved and are only visible to you.
- The following example illustrates a sample request body, which contains an instance of SavedQuery : { "parent": "projects/my-project/locations/global" "savedQueryId": "compute-query" { "displayName": "compute-admin-activity-query", "description": "Queries for Compute Engine Admin Activity logs.", "loggingQuery": { "filter": resource.type="gce instance" AND log id("cloudaudit.googleapis.com/activity"), }, "visibility": "PRIVATE" } } To share the query with other members of the Google Cloud project, specify a value of SHARED in the visibility field.

### View and analyze logs \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface](https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface)
- Source ID: `site-docs-root`
- Final score: 160
- Re-rank relevance: N/A

Evidence snippets:
- The Logs Explorer contains the following sections, which are detailed on this page: Primary toolbar Query pane Fields pane Timeline Query results pane Primary toolbar in the Logs Explorer Using the primary toolbar, you can do the following: menu book Query library : View saved, recent, and suggested queries.
- View recent, saved, and suggested queries To view queries that you recently run, queries that you saved for future use, and suggested queries, click the menu book Query library button.
- Saved queries: View your saved queries and queries that other users of the Google Cloud project have shared with you.
- Ensure that you have permission to view the log entries in the projects and log views referenced by setting of the Refine scope menu.

### Logging release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/release-notes](https://docs.cloud.google.com/logging/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 154
- Re-rank relevance: N/A

Evidence snippets:
- July 19, 2024 Feature The permissions required to use saved and recent queries have changed.
- You can also define a location in your default resource settings where saved and recent queries are saved.
- Select Set object-level and bucket-level permissions as the access control model during bucket creation if you intend to use the bucket as a sink destination.
- September 10, 2019 Feature Stackdriver Logging now lets you save your advanced log queries to a Saved Searches library, where they can be managed and shared.

