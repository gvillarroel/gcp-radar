---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T22:38:24.528Z"
product_name: "Cloud Logging"
product_slug: "cloud-logging"
feature_name: "Error group ID queries"
feature_slug: "error-group-id-queries"
latest_feature_date: "2023-12-05"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface"
  - "https://docs.cloud.google.com/logging/docs/view/building-queries"
  - "https://docs.cloud.google.com/logging/docs/write-query-log-entries-gcloud"
keywords:
  - "error"
  - "group"
  - "id"
  - "queries"
  - "logs"
  - "explorer"
  - "and"
  - "log"
---

# Error group ID queries

Product: Cloud Logging
Coverage: LOW

## Step 02 Summary

Logs Explorer and Log Analytics can query for a specific error group by error group ID.

## Extended Definition

Logs Explorer and Log Analytics can query for a specific error group by error group ID.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface](https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface)
- [https://docs.cloud.google.com/logging/docs/view/building-queries](https://docs.cloud.google.com/logging/docs/view/building-queries)
- [https://docs.cloud.google.com/logging/docs/write-query-log-entries-gcloud](https://docs.cloud.google.com/logging/docs/write-query-log-entries-gcloud)

## Supporting Pages

### View and analyze logs \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface](https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface)
- Source ID: `site-docs-root`
- Final score: 248
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The Logs Explorer contains the following sections, which are detailed on this page: Primary toolbar Query pane Fields pane Timeline Query results pane Primary toolbar in the Logs Explorer Using the primary toolbar, you can do the following: menu book Query library : View saved, recent, and suggested queries.
- Scroll or zoom to time In addition to the time controls previously listed, the timeline provides the Scroll to time and Zoom to time features to give you more in-depth control of the timeline and the data that you see in other panes in the Logs Explorer.
- Adjust time controls The timeline provides time controls that let you adjust the data that you see in the Logs Explorer: Time handles: Drag the timeline's handles inward to narrow the data or outward to widen the data in the timeline.
- View Compute Engine logs For certain Compute Engine resource types, such as gce instance and gce network , you see the resource name with the resource ID as subtext in several places in the Logs Explorer.

### "Build and save queries by using the Logging query language \_|\_ Google\

- URL: [https://docs.cloud.google.com/logging/docs/view/building-queries](https://docs.cloud.google.com/logging/docs/view/building-queries)
- Source ID: `site-docs-root`
- Final score: 212
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The following example illustrates a sample request body, which contains an instance of SavedQuery : { "parent": "projects/my-project/locations/global" "savedQueryId": "compute-query" { "displayName": "compute-admin-activity-query", "description": "Queries for Compute Engine Admin Activity logs.", "loggingQuery": { "filter": resource.type="gce instance" AND log id("cloudaudit.googleapis.com/activity"), }, "visibility": "PRIVATE" } } To share the query with other members of the Google Cloud project, specify a value of SHARED in the visibility field.
- View saved queries You can view both private queries and queries that are shared with other members in the Google Cloud project by clicking the menu book Query library button: Console In the Google Cloud console, go to the segment Logs Explorer page: Go to Logs Explorer If you use the search bar to find this page, then select the result whose subheading is Logging .
- For example, the following request body lists all shared Logs Explorer queries with a wildcard location ID: { "parent": "name": projects/PROJECT ID/locations/- "visibility": "SHARED" "filter": "explorer" } Use suggested queries Logging generates suggested queries based on the context of your Google Cloud project, such as the Google Cloud products you're using.
- To view and run the library's queries, do the following: In the Google Cloud console, go to the segment Logs Explorer page: Go to Logs Explorer If you use the search bar to find this page, then select the result whose subheading is Logging .

### "Quickstart: Write and query log entries with the gcloud CLI \_|\_ Cloud\

- URL: [https://docs.cloud.google.com/logging/docs/write-query-log-entries-gcloud](https://docs.cloud.google.com/logging/docs/write-query-log-entries-gcloud)
- Source ID: `site-docs-root`
- Final score: 198
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Logs Explorer also offers saved, suggested, and recent queries.
- For example, to retrieve and display the log entries with a resource type of global , run the following command: gcloud logging read "resource.type=global" The command returns a result similar to the following: --- insertId : jpj9zjf73t1mn jsonPayload : message : My second entry weather : partly cloudy logName : projects / myloggingproject / logs / my - test - log receiveTimestamp : '2018-11-01T18:39:31.114507977Z' resource : labels : project id : myloggingproject type : global timestamp : '2018-11-01T18:39:31.114507977Z' --- insertId : vd4m1if7h7u1a logName : projects / myloggingproject / logs / my - test - log receiveTimestamp : '2018-11-01T18:39:19.718100792Z' resource : labels : project id : myloggingproject type : global textPayload : A simple entry timestamp : '2018-11-01T18:39:19.718100792Z' For information about reading logs, see the gcloud logging read reference documentation.
- The method returns a response similar to the following: { "entries": [ { "textPayload": "A simple entry", "insertId": "vd4m1if7h7u1a", "resource": { "type": "global", "labels": { "project id": "myloggingproject" } }, "timestamp": "2018-11-01T18:39:19.718100792Z", "logName": "projects/myloggingproject/logs/my-test-log", "receiveTimestamp": "2018-11-01T18:39:19.718100792Z" }, { "insertId": "jpj9zjf73t1mn", "jsonPayload": { "message": "My second entry", "weather": "partly cloudy" }, "resource": { "type": "global", "labels": { "project id": "myloggingproject" } }, "timestamp": "2018-11-01T18:39:31.114507977Z", "logName": "projects/myloggingproject/logs/my-test-log", "receiveTimestamp": "2018-11-01T18:39:31.114507977Z" } ] } View log entries in the Logs Explorer To view log entries in the Google Cloud console, you can use the Logs Explorer.
- To read a list of log entries from Logging, do the following: Go to the API reference page for the entries.list API method: Go to entries.list API page Configure and run the API command: Replace PROJECT ID in the following text: "resourceNames": [ "projects/ PROJECT ID " ], "filter": "resource.type=global", "orderBy": "timestamp desc" Copy the updated text from the previous step, and paste it into the Request body field of APIs Explorer.

