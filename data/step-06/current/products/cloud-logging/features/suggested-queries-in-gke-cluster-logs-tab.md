---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T22:38:24.540Z"
product_name: "Cloud Logging"
product_slug: "cloud-logging"
feature_name: "Suggested queries in GKE cluster logs tab"
feature_slug: "suggested-queries-in-gke-cluster-logs-tab"
latest_feature_date: "2022-11-04"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/logging/docs/view/building-queries"
  - "https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface"
  - "https://docs.cloud.google.com/logging/docs/release-notes"
keywords:
  - "suggested"
  - "queries"
  - "in"
  - "gke"
  - "cluster"
  - "logs"
  - "tab"
  - "the"
---

# Suggested queries in GKE cluster logs tab

Product: Cloud Logging
Coverage: LOW

## Step 02 Summary

The GKE cluster Logs tab includes suggested queries for exploring logs.

## Extended Definition

The GKE cluster Logs tab includes suggested queries for exploring logs.

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
- Final score: 206
- Re-rank relevance: N/A

Evidence snippets:
- For example, the following request body lists all shared Logs Explorer queries with a wildcard location ID: { "parent": "name": projects/PROJECT ID/locations/- "visibility": "SHARED" "filter": "explorer" } Use suggested queries Logging generates suggested queries based on the context of your Google Cloud project, such as the Google Cloud products you're using.
- The following example illustrates a sample request body, which contains an instance of SavedQuery : { "parent": "projects/my-project/locations/global" "savedQueryId": "compute-query" { "displayName": "compute-admin-activity-query", "description": "Queries for Compute Engine Admin Activity logs.", "loggingQuery": { "filter": resource.type="gce instance" AND log id("cloudaudit.googleapis.com/activity"), }, "visibility": "PRIVATE" } } To share the query with other members of the Google Cloud project, specify a value of SHARED in the visibility field.
- View saved queries You can view both private queries and queries that are shared with other members in the Google Cloud project by clicking the menu book Query library button: Console In the Google Cloud console, go to the segment Logs Explorer page: Go to Logs Explorer If you use the search bar to find this page, then select the result whose subheading is Logging .
- Build queries To build queries by using the Google Cloud console, do the following: In the Google Cloud console, go to the segment Logs Explorer page: Go to Logs Explorer If you use the search bar to find this page, then select the result whose subheading is Logging .

### View and analyze logs \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface](https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface)
- Source ID: `site-docs-root`
- Final score: 206
- Re-rank relevance: N/A

Evidence snippets:
- The Logs Explorer contains the following sections, which are detailed on this page: Primary toolbar Query pane Fields pane Timeline Query results pane Primary toolbar in the Logs Explorer Using the primary toolbar, you can do the following: menu book Query library : View saved, recent, and suggested queries.
- Example Logs Explorer queries For suggested queries, arranged by Google Cloud product and use case, see Sample queries using the Logs Explorer .
- For example, if a log entry similar to the following is displayed as a result of your query, then the service menu includes the service named myservice : { ... labels: { compute.googleapis.com/resource name: "mycluster1" k8s-pod/app: "myservice" k8s-pod/pod-template-hash: "5ffcd94fdd" } logName: "projects/my-project/logs/stdout" resource: { labels: {6} type: "k8s container" } ... } You have log data with labels for an App Hub service or workload.
- View Monitoring data For certain logs, such as GKE and Compute Engine logs, you can select the resource type from the log's summary line to display a menu with the following options: View monitoring details : opens a details panel for a GKE resource.

### Logging release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/release-notes](https://docs.cloud.google.com/logging/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 188
- Re-rank relevance: N/A

Evidence snippets:
- November 04, 2022 Feature The Logs tab available for each cluster on the Kubernetes Engine > Clusters page now includes suggested queries for your logs.
- August 17, 2020 Feature To help you explore your logs more efficiently, Cloud Logging now provides suggested queries based on the context of your Google Cloud project.
- June 03, 2020 Feature In the Logs Viewer (Preview), you can now save your queries, which can then be viewed and run from the Saved queries tab.
- September 15, 2025 Libraries Java 3.23.4 (2025-09-11) Bug Fixes deps: Update the Java code generator (gapic-generator-java) to 2.62.1 ( 1438bff ) Dependencies Update dependency com.google.cloud:sdk-platform-java-config to v3.52.1 ( #1853 ) ( c21a635 ) Update googleapis/sdk-platform-java action to v2.62.1 ( #1855 ) ( b6ce498 ) September 08, 2025 Libraries Node.js 11.2.1 (2025-09-03) Bug Fixes logging: Specifying resourceNames should fetch logs only from those resources ( #1597 ) ( ff7899f ) August 25, 2025 Libraries Java 3.23.3 (2025-08-20) Dependencies Update dependency com.google.cloud:sdk-platform-java-config to v3.52.0 ( #1848 ) ( 162ef56 ) August 11, 2025 Libraries Java 3.23.2 (2025-08-05) Bug Fixes deps: Update the Java code generator (gapic-generator-java) to 2.61.0 ( 0a21b83 ) Dependencies Update dependency com.google.cloud:sdk-platform-java-config to v3.51.0 ( #1843 ) ( 975d8ae ) Java 3.23.2 (2025-08-05) Bug Fixes deps: Update the Java code generator (gapic-generator-java) to 2.61.0 ( 0a21b83 ) Dependencies Update dependency com.google.cloud:sdk-platform-java-config to v3.51.0 ( #1843 ) ( 975d8ae ) Java 3.23.2 (2025-08-05) Bug Fixes deps: Update the Java code generator (gapic-generator-java) to 2.61.0 ( 0a21b83 ) Dependencies Update dependency com.google.cloud:sdk-platform-java-config to v3.51.0 ( #1843 ) ( 975d8ae ) August 04, 2025 Libraries Java 3.23.1 (2025-07-28) Bug Fixes deps: Update the Java code generator (gapic-generator-java) to 2.60.2 ( 6a268f8 ) Dependencies Update dependency com.google.cloud:sdk-platform-java-config to v3.50.2 ( #1834 ) ( 2e46f6e ) Java 3.23.1 (2025-07-28) Bug Fixes deps: Update the Java code generator (gapic-generator-java) to 2.60.2 ( 6a268f8 ) Dependencies Update dependency com.google.cloud:sdk-platform-java-config to v3.50.2 ( #1834 ) ( 2e46f6e ) Java 3.23.1 (2025-07-28) Bug Fixes deps: Update the Java code generator (gapic-generator-java) to 2.60.2 ( 6a268f8 ) Dependencies Update dependency com.google.cloud:sdk-platform-java-config to v3.50.2 ( #1834 ) ( 2e46f6e ) Java 3.23.1 (2025-07-28) Bug Fixes deps: Update the Java code generator (gapic-generator-java) to 2.60.2 ( 6a268f8 ) Dependencies Update dependency com.google.cloud:sdk-platform-java-config to v3.50.2 ( #1834 ) ( 2e46f6e ) Feature You can now build queries without manually writing SQL in the Log Analytics page by using the query builder.

