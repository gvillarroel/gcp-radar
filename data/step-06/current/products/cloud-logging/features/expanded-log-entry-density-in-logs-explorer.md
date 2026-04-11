---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T22:38:24.544Z"
product_name: "Cloud Logging"
product_slug: "cloud-logging"
feature_name: "Expanded log entry density in Logs Explorer"
feature_slug: "expanded-log-entry-density-in-logs-explorer"
latest_feature_date: "2022-05-20"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface"
  - "https://docs.cloud.google.com/logging/docs/regionalized-logs"
  - "https://docs.cloud.google.com/logging/docs/api/gcloud-logging"
keywords:
  - "expanded"
  - "log"
  - "entry"
  - "density"
  - "in"
  - "logs"
  - "explorer"
  - "displays"
---

# Expanded log entry density in Logs Explorer

Product: Cloud Logging
Coverage: LOW

## Step 02 Summary

Logs Explorer displays more log entries through UI style changes.

## Extended Definition

Logs Explorer displays more log entries through UI style changes.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface](https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface)
- [https://docs.cloud.google.com/logging/docs/regionalized-logs](https://docs.cloud.google.com/logging/docs/regionalized-logs)
- [https://docs.cloud.google.com/logging/docs/api/gcloud-logging](https://docs.cloud.google.com/logging/docs/api/gcloud-logging)

## Supporting Pages

### View and analyze logs \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface](https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface)
- Source ID: `site-docs-root`
- Final score: 234
- Re-rank relevance: N/A

Evidence snippets:
- Show logs that match the resource of a pinned log entry After you pin a log entry, you can run a new query that displays log entries that match the resource type or resource labels of the pinned log.
- Zoom to log entry : Narrow the time range that the Timeline pane displays and refine your query to isolate the logs near the pinned log.
- For example, if a log entry similar to the following is displayed as a result of your query, then the service menu includes the service named myservice : { ... labels: { compute.googleapis.com/resource name: "mycluster1" k8s-pod/app: "myservice" k8s-pod/pod-template-hash: "5ffcd94fdd" } logName: "projects/my-project/logs/stdout" resource: { labels: {6} type: "k8s container" } ... } You have log data with labels for an App Hub service or workload.
- To select which parts of the timestamp to display, click the settings Preferences menu, select Format , and then select one of the following options: Date, time, and timezone Date and time (default) Time only Find patterns in your logs by using summary fields Suppose you're looking through the log entries in your query results and want to quickly skim the results by a certain LogEntry field.

### Regionalize your logs \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/regionalized-logs](https://docs.cloud.google.com/logging/docs/regionalized-logs)
- Source ID: `site-docs-root`
- Final score: 204
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- View your log entry: In the Google Cloud console, go to the segment Logs Explorer page: Go to Logs Explorer If you use the search bar to find this page, then select the result whose subheading is Logging .
- Search logs in the Google Cloud console To view the log entries in your log bucket, go to the Google Cloud console and complete the following steps: In the Google Cloud console, go to the segment Logs Explorer page: Go to Logs Explorer If you use the search bar to find this page, then select the result whose subheading is Logging .
- For example, when you to the Logs Explorer page and use the Refine scope selector to list log views, region information is also displayed.
- For information on using the Logs Explorer, refer to View logs by using the Logs Explorer .

### Command-line interface \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/api/gcloud-logging](https://docs.cloud.google.com/logging/docs/api/gcloud-logging)
- Source ID: `site-docs-reference`
- Final score: 202
- Re-rank relevance: N/A

Evidence snippets:
- The following command writes a log entry to a folder: gcloud logging write my-folder-log "A folder log entry" --folder= FOLDER ID To find your log entries, look in the Logs Explorer under the Global resource type.
- The log entries are to be shown in JSON format: gcloud logging read "resource.type=gce instance AND logName=projects/ PROJECT ID /logs/syslog AND textPayload:SyncAddress" -- limit 10 -- format json Following is an example of one returned log entry: { "insertId" : "2024-04-07 08:56:48.137651-07 10.162.32.129 -1509625619" , "logName" : "projects/[PROJECT ID]/logs/syslog" , "resource" : { "labels" : { "instance id" : "15543007601548829999" , "zone" : "global" } , "type" : "gce instance" } , "textPayload" : "Apr 7 15:56:47 my-gce-instance google-address-manager: ERROR SyncAddresses exception: HTTP Error 503: Service Unavailable" , "timestamp" : "2024-04-07T15:56:47.000Z" } To list logs in a folder, add the --folder flag.
- Following is the command to read the log entry: gcloud logging read "resource.type=global" -- folder = FOLDER ID -- limit = 1 Here is the result: insertId : 1 f22es3frcguaj logName : folders / FOLDER ID / logs / my - folder - log receiveTimestamp : '2024-03-19T18:20:19.306598482Z' resource : type : global textPayload : A folder log entry timestamp : '2024-03-19T18:20:19.306598482Z' Logs A log, or log stream, is the set of log entries that have the same full resource name.
- Live tailing isn't supported for log buckets with field-level access controls , however you can stream logs for those buckets in the Logs Explorer.

