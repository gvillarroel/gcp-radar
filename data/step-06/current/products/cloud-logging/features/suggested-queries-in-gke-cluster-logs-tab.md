---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T23:59:44.365Z"
product_name: "Cloud Logging"
product_slug: "cloud-logging"
feature_name: "Suggested queries in GKE cluster logs tab"
feature_slug: "suggested-queries-in-gke-cluster-logs-tab"
latest_feature_date: "2022-11-04"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface"
  - "https://docs.cloud.google.com/logging/docs/view/building-queries"
  - "https://docs.cloud.google.com/logging/docs/audit"
keywords:
  - "suggested"
  - "queries"
  - "gke"
  - "cluster"
  - "logs"
  - "tab"
  - "includes"
  - "exploring"
---

# Suggested queries in GKE cluster logs tab

Product: Cloud Logging
Coverage: MEDIUM

## Step 02 Summary

The GKE cluster Logs tab includes suggested queries for exploring logs.

## Extended Definition

The GKE cluster Logs tab includes suggested queries for exploring logs.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface](https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface)
- [https://docs.cloud.google.com/logging/docs/view/building-queries](https://docs.cloud.google.com/logging/docs/view/building-queries)
- [https://docs.cloud.google.com/logging/docs/audit](https://docs.cloud.google.com/logging/docs/audit)

## Supporting Pages

### View and analyze logs \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface](https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface)
- Source ID: `site-docs-root`
- Final score: 142
- Re-rank relevance: N/A

Evidence snippets:
- For example, if a log entry similar to the following is displayed as a result of your query, then the service menu includes the service named myservice : { ... labels: { compute.googleapis.com/resource name: "mycluster1" k8s-pod/app: "myservice" k8s-pod/pod-template-hash: "5ffcd94fdd" } logName: "projects/my-project/logs/stdout" resource: { labels: {6} type: "k8s container" } ... } You have log data with labels for an App Hub service or workload.
- The Logs Explorer contains the following sections, which are detailed on this page: Primary toolbar Query pane Fields pane Timeline Query results pane Primary toolbar in the Logs Explorer Using the primary toolbar, you can do the following: menu book Query library : View saved, recent, and suggested queries.
- Example Logs Explorer queries For suggested queries, arranged by Google Cloud product and use case, see Sample queries using the Logs Explorer .
- View recent, saved, and suggested queries To view queries that you recently run, queries that you saved for future use, and suggested queries, click the menu book Query library button.

### "Build and save queries by using the Logging query language \_|\_ Google\

- URL: [https://docs.cloud.google.com/logging/docs/view/building-queries](https://docs.cloud.google.com/logging/docs/view/building-queries)
- Source ID: `site-docs-root`
- Final score: 116
- Re-rank relevance: N/A

Evidence snippets:
- For example, the following request body lists all shared Logs Explorer queries with a wildcard location ID: { "parent": "name": projects/PROJECT ID/locations/- "visibility": "SHARED" "filter": "explorer" } Use suggested queries Logging generates suggested queries based on the context of your Google Cloud project, such as the Google Cloud products you're using.
- The following example illustrates a sample request body, which contains an instance of SavedQuery : { "parent": "projects/my-project/locations/global" "savedQueryId": "compute-query" { "displayName": "compute-admin-activity-query", "description": "Queries for Compute Engine Admin Activity logs.", "loggingQuery": { "filter": resource.type="gce instance" AND log id("cloudaudit.googleapis.com/activity"), }, "visibility": "PRIVATE" } } To share the query with other members of the Google Cloud project, specify a value of SHARED in the visibility field.
- View saved queries You can view both private queries and queries that are shared with other members in the Google Cloud project by clicking the menu book Query library button: Console In the Google Cloud console, go to the segment Logs Explorer page: Go to Logs Explorer If you use the search bar to find this page, then select the result whose subheading is Logging .
- Build queries To build queries by using the Google Cloud console, do the following: In the Google Cloud console, go to the segment Logs Explorer page: Go to Logs Explorer If you use the search bar to find this page, then select the result whose subheading is Logging .

### Cloud Audit Logs overview \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/audit](https://docs.cloud.google.com/logging/docs/audit)
- Source ID: `site-docs-root`
- Final score: 101
- Re-rank relevance: N/A

Evidence snippets:
- To display all audit logs, enter either of the following queries into the query-editor field, and then click Run query : logName:"cloudaudit.googleapis.com" protoPayload."@type"="type.googleapis.com/google.cloud.audit.AuditLog" To display the audit logs for a specific resource and audit log type, in the Query builder pane, do the following: In Resource type , select the Google Cloud resource whose audit logs you want to see.
- The Private Logs Viewer role (roles/logging.privateLogViewer) includes the permissions contained in the Logs Viewer role ( roles/logging.viewer ), and those necessary to read Data Access audit logs in the Default bucket.
- For more information about querying by using the Logs Explorer, see Build queries in the Logs Explorer . gcloud The Google Cloud CLI provides a command-line interface to the Logging API.
- For more information about querying your logs, see Build queries in the Logs Explorer The Logs Explorer lets you view filter individual log entries.

