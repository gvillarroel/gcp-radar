---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T22:38:24.564Z"
product_name: "Cloud Logging"
product_slug: "cloud-logging"
feature_name: "Recent queries"
feature_slug: "recent-queries"
latest_feature_date: "2020-09-14"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/logging/docs/view/building-queries"
  - "https://docs.cloud.google.com/logging/docs/release-notes"
  - "https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface"
keywords:
  - "recent"
  - "queries"
  - "logging"
  - "provides"
  - "tab"
  - "for"
  - "viewing"
  - "the"
---

# Recent queries

Product: Cloud Logging
Coverage: LOW

## Step 02 Summary

Cloud Logging provides a Recent queries tab for viewing the history of previously run queries.

## Extended Definition

Cloud Logging provides a Recent queries tab for viewing the history of previously run queries.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/logging/docs/view/building-queries](https://docs.cloud.google.com/logging/docs/view/building-queries)
- [https://docs.cloud.google.com/logging/docs/release-notes](https://docs.cloud.google.com/logging/docs/release-notes)
- [https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface](https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface)

## Supporting Pages

### "Build and save queries by using the Logging query language \_|\_ Google\

- URL: [https://docs.cloud.google.com/logging/docs/view/building-queries](https://docs.cloud.google.com/logging/docs/view/building-queries)
- Source ID: `site-docs-root`
- Final score: 212
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The following example illustrates a sample request body, which contains an instance of SavedQuery : { "parent": "projects/my-project/locations/global" "savedQueryId": "compute-query" { "displayName": "compute-admin-activity-query", "description": "Queries for Compute Engine Admin Activity logs.", "loggingQuery": { "filter": resource.type="gce instance" AND log id("cloudaudit.googleapis.com/activity"), }, "visibility": "PRIVATE" } } To share the query with other members of the Google Cloud project, specify a value of SHARED in the visibility field.
- For example, the following request body lists all shared Logs Explorer queries with a wildcard location ID: { "parent": "name": projects/PROJECT ID/locations/- "visibility": "SHARED" "filter": "explorer" } Use suggested queries Logging generates suggested queries based on the context of your Google Cloud project, such as the Google Cloud products you're using.
- If you want to save or modify shared queries, then ensure that you have been granted the Logging Admin role ( roles/logging.admin ), which provides full access to Cloud Logging.
- Select queries from the library Logging provides a library of queries based on common use cases and Google Cloud products.

### Logging release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/release-notes](https://docs.cloud.google.com/logging/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 210
- Re-rank relevance: N/A

Evidence snippets:
- September 14, 2020 Feature Cloud Logging now offers the ability to view a history of your ran queries through the Recent queries tab.
- The table of contents now groups all information about the logging agent, viewing logs, and exporting logs in individual sections.
- September 15, 2025 Libraries Java 3.23.4 (2025-09-11) Bug Fixes deps: Update the Java code generator (gapic-generator-java) to 2.62.1 ( 1438bff ) Dependencies Update dependency com.google.cloud:sdk-platform-java-config to v3.52.1 ( #1853 ) ( c21a635 ) Update googleapis/sdk-platform-java action to v2.62.1 ( #1855 ) ( b6ce498 ) September 08, 2025 Libraries Node.js 11.2.1 (2025-09-03) Bug Fixes logging: Specifying resourceNames should fetch logs only from those resources ( #1597 ) ( ff7899f ) August 25, 2025 Libraries Java 3.23.3 (2025-08-20) Dependencies Update dependency com.google.cloud:sdk-platform-java-config to v3.52.0 ( #1848 ) ( 162ef56 ) August 11, 2025 Libraries Java 3.23.2 (2025-08-05) Bug Fixes deps: Update the Java code generator (gapic-generator-java) to 2.61.0 ( 0a21b83 ) Dependencies Update dependency com.google.cloud:sdk-platform-java-config to v3.51.0 ( #1843 ) ( 975d8ae ) Java 3.23.2 (2025-08-05) Bug Fixes deps: Update the Java code generator (gapic-generator-java) to 2.61.0 ( 0a21b83 ) Dependencies Update dependency com.google.cloud:sdk-platform-java-config to v3.51.0 ( #1843 ) ( 975d8ae ) Java 3.23.2 (2025-08-05) Bug Fixes deps: Update the Java code generator (gapic-generator-java) to 2.61.0 ( 0a21b83 ) Dependencies Update dependency com.google.cloud:sdk-platform-java-config to v3.51.0 ( #1843 ) ( 975d8ae ) August 04, 2025 Libraries Java 3.23.1 (2025-07-28) Bug Fixes deps: Update the Java code generator (gapic-generator-java) to 2.60.2 ( 6a268f8 ) Dependencies Update dependency com.google.cloud:sdk-platform-java-config to v3.50.2 ( #1834 ) ( 2e46f6e ) Java 3.23.1 (2025-07-28) Bug Fixes deps: Update the Java code generator (gapic-generator-java) to 2.60.2 ( 6a268f8 ) Dependencies Update dependency com.google.cloud:sdk-platform-java-config to v3.50.2 ( #1834 ) ( 2e46f6e ) Java 3.23.1 (2025-07-28) Bug Fixes deps: Update the Java code generator (gapic-generator-java) to 2.60.2 ( 6a268f8 ) Dependencies Update dependency com.google.cloud:sdk-platform-java-config to v3.50.2 ( #1834 ) ( 2e46f6e ) Java 3.23.1 (2025-07-28) Bug Fixes deps: Update the Java code generator (gapic-generator-java) to 2.60.2 ( 6a268f8 ) Dependencies Update dependency com.google.cloud:sdk-platform-java-config to v3.50.2 ( #1834 ) ( 2e46f6e ) Feature You can now build queries without manually writing SQL in the Log Analytics page by using the query builder.
- August 17, 2020 Feature To help you explore your logs more efficiently, Cloud Logging now provides suggested queries based on the context of your Google Cloud project.

### View and analyze logs \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface](https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface)
- Source ID: `site-docs-root`
- Final score: 194
- Re-rank relevance: N/A

Evidence snippets:
- View recent, saved, and suggested queries To view queries that you recently run, queries that you saved for future use, and suggested queries, click the menu book Query library button.
- Troubleshoot logging issues This section provides instructions for troubleshooting common issues when using the Logs Explorer.
- In the Query library tab, you can view the following: Recent queries: View queries that you have recently run.
- For more information, see Write advanced queries using the Logging query language .

