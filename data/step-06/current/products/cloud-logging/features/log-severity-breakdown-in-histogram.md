---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T23:59:44.432Z"
product_name: "Cloud Logging"
product_slug: "cloud-logging"
feature_name: "Log Severity Breakdown in Histogram"
feature_slug: "log-severity-breakdown-in-histogram"
latest_feature_date: "2021-03-18"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface"
  - "https://docs.cloud.google.com/logging/docs/view/building-queries"
  - "https://docs.cloud.google.com/logging/docs/api/gcloud-logging"
keywords:
  - "log"
  - "severity"
  - "breakdown"
  - "histogram"
  - "logging"
  - "shows"
  - "distribution"
  - "levels"
---

# Log Severity Breakdown in Histogram

Product: Cloud Logging
Coverage: MEDIUM

## Step 02 Summary

Cloud Logging shows the distribution of log severity levels in the Logs Explorer histogram pane.

## Extended Definition

Cloud Logging shows the distribution of log severity levels in the Logs Explorer histogram pane.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface](https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface)
- [https://docs.cloud.google.com/logging/docs/view/building-queries](https://docs.cloud.google.com/logging/docs/view/building-queries)
- [https://docs.cloud.google.com/logging/docs/api/gcloud-logging](https://docs.cloud.google.com/logging/docs/api/gcloud-logging)

## Supporting Pages

### View and analyze logs \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface](https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface)
- Source ID: `site-docs-root`
- Final score: 130
- Re-rank relevance: N/A

Evidence snippets:
- Each bar contains a three-color breakdown for the log-severity levels captured in each bar's time range.
- Filter menus: Build queries by using various menus to select resources, log names, severity levels, and correlation to other logs.
- Perhaps a particular bar in the timeline interests you based on its relative size or severity levels.
- Severity If you want your query to filter by multiple severity levels, then use the Severity menu.

### "Build and save queries by using the Logging query language \_|\_ Google\

- URL: [https://docs.cloud.google.com/logging/docs/view/building-queries](https://docs.cloud.google.com/logging/docs/view/building-queries)
- Source ID: `site-docs-root`
- Final score: 77
- Re-rank relevance: N/A

Evidence snippets:
- You can select multiple severity levels at the same time to add to apply to your query.
- When selecting multiple severity levels, the logical operator OR is used.
- The following example illustrates a sample request body, which contains an instance of SavedQuery : { "parent": "projects/my-project/locations/global" "savedQueryId": "compute-query" { "displayName": "compute-admin-activity-query", "description": "Queries for Compute Engine Admin Activity logs.", "loggingQuery": { "filter": resource.type="gce instance" AND log id("cloudaudit.googleapis.com/activity"), }, "visibility": "PRIVATE" } } To share the query with other members of the Google Cloud project, specify a value of SHARED in the visibility field.
- View saved queries You can view both private queries and queries that are shared with other members in the Google Cloud project by clicking the menu book Query library button: Console In the Google Cloud console, go to the segment Logs Explorer page: Go to Logs Explorer If you use the search bar to find this page, then select the result whose subheading is Logging .

### Command-line interface \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/api/gcloud-logging](https://docs.cloud.google.com/logging/docs/api/gcloud-logging)
- Source ID: `site-docs-reference`
- Final score: 70
- Re-rank relevance: N/A

Evidence snippets:
- Examples Create a log-based metric that counts the number of log entries with severity of at least ERROR from Compute Engine instances: gcloud logging metrics create error count \ -- description = "Syslog error counts." \ -- log - filter = "resource.type=gce instance AND severity>=ERROR" Creating advanced metrics To create complex metrics with labels, including distribution metrics, use the gcloud logging metrics create command, corresponding to the API method projects.metrics.create : gcloud logging metrics create METRIC NAME --config-from-file=FILE NAME FILE NAME is the path to a file containing a YAML (or JSON) specification of a LogMetric object .
- Examples Change the query in my-distribution-metric : gcloud logging metrics update my - distribution - metric --log-filter="[NEW LOG FILTER]" Listing and describing metrics Use gcloud logging metrics list , corresponding to the API method projects.metrics.list , and gcloud logging metrics describe , corresponding to the API method projects.metrics.get : gcloud logging metrics list ... gcloud logging metrics describe METRIC NAME The metrics list command by defaults shows the full description of every listed metric.
- The destination is an existing Cloud Storage bucket in the current project. gcloud logging sinks create folder-logs \ storage.googleapis.com/my-folder-bucket \ --folder= FOLDER ID --log-filter="logName:logs/cloudaudit.googleapis.com%2Factivity" The following command creates an aggregated sink, routing all Admin Activity audit logs from a folder and from all folders and projects contained in the folder: gcloud logging sinks create folder-logs --include-children \ storage.googleapis.com/my-folder-bucket \ --folder= FOLDER ID --log-filter="logName:logs/cloudaudit.googleapis.com%2Factivity" Listing or describing sinks Use the gcloud logging sinks list or gcloud logging sinks describe commands, corresponding to the API methods projects.sinks.list and projects.sinks.get , respectively: gcloud logging sinks list gcloud logging sinks describe SINK NAME Examples List sinks in the current project: gcloud logging sinks list NAME DESTINATION FILTER google-sink-1481139614360-9906 storage.googleapis.com/my-second-gcs-bucket logName = "projects/my-gcp-project-id/logs/syslog" pubsub-logs-sink pubsub.googleapis.com/projects/my-gcp-project-id/topics/my-pubsub-logs-topic logName = "projects/my-gcp-project-id/logs/pubsubtestlog" test-sink-v4 storage.googleapis.com/my-gcs-bucket severity=CRITICAL List sinks in a folder: gcloud logging sinks list --folder= FOLDER ID NAME DESTINATION FILTER folder-logs storage.googleapis.com/my-folder-bucket logName:activity List sinks in an organization: gcloud logging sinks list --organization= ORGANIZATION ID NAME DESTINATION FILTER organization-logs storage.googleapis.com/my-org-bucket logName:activity Describe sinks in the current project test-sink-v4 : gcloud logging sinks describe test-sink-v4 Output: destination : storage . googleapis . com / my - gcs - bucket filter : severity = CRITICAL name : test - sink - v4 outputVersionFormat : V2 writerIdentity : serviceAccount : test - sink - v4 @logging - PROJECT ID . iam.gserviceaccount.com Describe sinks in a folder: gcloud logging sinks describe test-sink-v4 --folder= FOLDER ID Output: destination: storage.googleapis.com/my-gcs-bucket filter: severity=CRITICAL name: test-sink-v4 Describe sinks in an organization: gcloud logging sinks describe test-sink-v4 --organization= ORGANIZATION ID Output: createTime : [ TIMESTAMP ] description : Test Sink destination : storage . googleapis . com / my - gcs - bucket filter : severity = CRITICAL name : test - sink - v4 updateTime : [ TIMESTAMP ] writerIdentity : serviceAccount : test - sink - v4 @logging - PROJECT ID . iam.gserviceaccount.com Updating sinks Use the gcloud logging sinks update command, corresponding to the API method projects.sink.update : You can update a sink to change the destination or the query: gcloud logging sinks update SINK NAME NEW DESTINATION --log-filter= NEW FILTER You can omit the NEW DESTINATION or --log-filter if those parts don't change.
- Show the information in the default YAML format: gcloud logging metrics describe "myapp/request latency" Result: bucketOptions : exponentialBuckets : growthFactor : 2.0 numFiniteBuckets : 64 scale : 0.01 description : Request latency for myapp filter : resource . type = "gae app" logName = "projects/[PROJECT ID]/logs/appengine.googleapis.com%2Fnginx.request" labelExtractors : path : EXTRACT ( httpRequest . requestUrl ) metricDescriptor : description : Request latency for myapp labels : - description : HTTP Path key : path metricKind : DELTA name : projects /[ PROJECT ID ]/ metricDescriptors / logging . googleapis . com / user / myapp / request latency type : logging . googleapis . com / user / myapp / request latency valueType : DISTRIBUTION name : myapp / request latency valueExtractor : EXTRACT ( jsonPayload . latencySeconds ) Deleting metrics Use the gcloud logging metrics delete command, corresponding to the API method projects.metrics.delete : gcloud logging metrics delete METRIC NAME Examples Delete the metric my-distribution-metric from the current project: gcloud logging metrics delete "my-distribution-metric" Result: Really delete metric [my-distribution-metric]?

