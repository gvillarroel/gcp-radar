---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T23:59:44.423Z"
product_name: "Cloud Logging"
product_slug: "cloud-logging"
feature_name: "Histogram Time Controls in Logs Explorer"
feature_slug: "histogram-time-controls-in-logs-explorer"
latest_feature_date: "2021-05-06"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface"
  - "https://docs.cloud.google.com/logging/docs/agent/logging/configuration"
  - "https://docs.cloud.google.com/logging/docs/access-control"
keywords:
  - "histogram"
  - "time"
  - "controls"
  - "logs"
  - "explorer"
  - "includes"
  - "zooming"
  - "scrolling"
---

# Histogram Time Controls in Logs Explorer

Product: Cloud Logging
Coverage: MEDIUM

## Step 02 Summary

The Logs Explorer histogram includes zooming and scrolling controls for deeper time-based log analysis.

## Extended Definition

The Logs Explorer histogram includes zooming and scrolling controls for deeper time-based log analysis.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface](https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface)
- [https://docs.cloud.google.com/logging/docs/agent/logging/configuration](https://docs.cloud.google.com/logging/docs/agent/logging/configuration)
- [https://docs.cloud.google.com/logging/docs/access-control](https://docs.cloud.google.com/logging/docs/access-control)

## Supporting Pages

### View and analyze logs \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface](https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface)
- Source ID: `site-docs-root`
- Final score: 179
- Re-rank relevance: N/A

Evidence snippets:
- Scroll or zoom to time In addition to the time controls previously listed, the timeline provides the Scroll to time and Zoom to time features to give you more in-depth control of the timeline and the data that you see in other panes in the Logs Explorer.
- Adjust time controls The timeline provides time controls that let you adjust the data that you see in the Logs Explorer: Time handles: Drag the timeline's handles inward to narrow the data or outward to widen the data in the timeline.
- The Logs Explorer contains the following sections, which are detailed on this page: Primary toolbar Query pane Fields pane Timeline Query results pane Primary toolbar in the Logs Explorer Using the primary toolbar, you can do the following: menu book Query library : View saved, recent, and suggested queries.
- The copied URL has the corresponding absolute time range represented by the time range of your query; for example, 7:49:37 PM - 8:49:37 PM . settings Preferences : Adjust the view of the Logs Explorer page, and customize the format of your query results.

### Configure the Logging agent \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/agent/logging/configuration](https://docs.cloud.google.com/logging/docs/agent/logging/configuration)
- Source ID: `site-docs-root`
- Final score: 134
- Re-rank relevance: N/A

Evidence snippets:
- To send logs via the fluentd in forward plugin, read the following instructions: Execute the following command on the VM with the Logging agent installed: echo '{"code": "send-log-via-fluent-cat", "message": "This is a log from in forward plugin."}' /opt/google-fluentd/embedded/bin/fluent-cat log-via-in-forward-plugin Check the Logs Explorer to see the ingested log entry: { insertId: "1kvvmhsg1ib4689" jsonPayload: { code: "send-log-via-fluent-cat" message: "This is a log from in forward plugin." } labels: { compute.googleapis.com/resource name: "add-structured-log-resource" } logName: "projects/my-sample-project-12345/logs/log-via-in-forward-plugin" receiveTimestamp: "2018-03-21T02:11:27.981020900Z" resource: { labels: { instance id: "5351724540900470204" project id: "my-sample-project-12345" zone: "us-central1-c" } type: "gce instance" } timestamp: "2018-03-21T02:11:22.717692494Z" } Streaming structured (JSON) log records from application code You can enable connectors in various languages to send structured logs from application code; for more information, review the fluentd documentation .
- Restart the agent to apply the configuration changes: sudo service google-fluentd restart Generate a log record into the log file: echo '{"code": "structured-log-code", "message": "This is a log from the log file at test-structured-log.log"}' >> /tmp/test-structured-log.log Check the Logs Explorer to see the ingested log entry: { insertId: "1m9mtk4g3mwilhp" jsonPayload: { code: "structured-log-code" message: "This is a log from the log file at test-structured-log.log" } labels: { compute.googleapis.com/resource name: "add-structured-log-resource" } logName: "projects/my-sample-project-12345/logs/structured-log" receiveTimestamp: "2018-03-21T01:53:41.118200931Z" resource: { labels: { instance id: "5351724540900470204" project id: "my-sample-project-12345" zone: "us-central1-c" } type: "gce instance" } timestamp: "2018-03-21T01:53:39.071920609Z" } In the Logs Explorer, filter by your resource type and a logName of structured-log .
- Restart the agent to apply the configuration changes: sudo service google-fluentd restart Generate a log record into the log file: echo 'This is a log from the log file at test-unstructured-log.log' >> /tmp/test-unstructured-log.log Check the Logs Explorer to see the ingested log entry: { insertId: "eps2n7g1hq99qp" labels: { compute.googleapis.com/resource name: "add-unstructured-log-resource" } logName: "projects/my-sample-project-12345/logs/unstructured-log" receiveTimestamp: "2018-03-21T01:47:11.475065313Z" resource: { labels: { instance id: "3914079432219560274" project id: "my-sample-project-12345" zone: "us-central1-c" } type: "gce instance" } textPayload: "This is a log from the log file at test-unstructured-log.log" timestamp: "2018-03-21T01:47:05.051902169Z" } Streaming structured (JSON) logs via log files Note: This section contains a Linux command example.
- JSON log field LogEntry field Cloud Logging agent function Example value severity severity The Logging agent attempts to match a variety of common severity strings, which includes the list of LogSeverity strings recognized by the Logging API. "severity":"ERROR" message textPayload (or part of jsonPayload ) The message that appears on the log entry line in the Logs Explorer. "message":"There was an error in the application." Note : message is saved as textPayload if it is the only field remaining after the Logging agent moves the other special-purpose fields and detect json wasn't enabled; otherwise message remains in jsonPayload . detect json is not applicable to managed logging environments like Google Kubernetes Engine.

### Access control with IAM \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/access-control](https://docs.cloud.google.com/logging/docs/access-control)
- Source ID: `site-docs-root`
- Final score: 116
- Re-rank relevance: N/A

Evidence snippets:
- List and view log scopes logging.logScopes.{get, list} View the default log scope observability.scopes.get Exclude logs logging.exclusions.{list, create, get, update, delete} When creating a custom role that includes permissions to manage exclusion filters, add the logging.sinks. permissions to the role instead of adding the logging.exclusions. permissions.
- To let a user read logs in the Required and Default buckets or to use the Logs Explorer and Observability Analytics pages, grant one of the following roles: For access to all logs in the Required bucket, and access to the Default view on the Default bucket, grant the Logs Viewer ( roles/logging.viewer ) role.
- This role includes all permissions granted by the Logs Viewer ( roles/logging.viewer ) role, and the permissions to write log entries, delete logs, and create log-based metrics.
- Your IAM roles determine whether you can perform actions like create log sinks or log buckets, read log data stored in a log bucket, or access pages like the Logs Explorer .

