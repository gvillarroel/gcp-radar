---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T23:59:44.299Z"
product_name: "Cloud Logging"
product_slug: "cloud-logging"
feature_name: "Logs Explorer JSON payload field frequency analysis"
feature_slug: "logs-explorer-json-payload-field-frequency-analysis"
latest_feature_date: "2025-04-17"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface"
  - "https://docs.cloud.google.com/logging/docs/write-query-log-entries-gcloud"
  - "https://docs.cloud.google.com/logging/docs/agent/ops-agent/third-party/elasticsearch9"
keywords:
  - "logs"
  - "explorer"
  - "json"
  - "payload"
  - "field"
  - "frequency"
  - "analysis"
  - "can"
---

# Logs Explorer JSON payload field frequency analysis

Product: Cloud Logging
Coverage: MEDIUM

## Step 02 Summary

Logs Explorer can show the most frequently occurring fields and values in log JSON payloads.

## Extended Definition

Logs Explorer can show the most frequently occurring fields and values in log JSON payloads.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface](https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface)
- [https://docs.cloud.google.com/logging/docs/write-query-log-entries-gcloud](https://docs.cloud.google.com/logging/docs/write-query-log-entries-gcloud)
- [https://docs.cloud.google.com/logging/docs/agent/ops-agent/third-party/elasticsearch9](https://docs.cloud.google.com/logging/docs/agent/ops-agent/third-party/elasticsearch9)

## Supporting Pages

### View and analyze logs \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface](https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface)
- Source ID: `site-docs-root`
- Final score: 180
- Re-rank relevance: N/A

Evidence snippets:
- The Logs Explorer contains the following sections, which are detailed on this page: Primary toolbar Query pane Fields pane Timeline Query results pane Primary toolbar in the Logs Explorer Using the primary toolbar, you can do the following: menu book Query library : View saved, recent, and suggested queries.
- For example, if you frequently filter by the value of the jsonPayload.message field, then add it to the Fields pane.
- JSON payload (most frequent) : Shows the most frequent json payload fields in the current query results.
- For example, if you type jsonPayload.id-field , it gets changed to jsonPayload."id-field" .

### "Quickstart: Write and query log entries with the gcloud CLI \_|\_ Cloud\

- URL: [https://docs.cloud.google.com/logging/docs/write-query-log-entries-gcloud](https://docs.cloud.google.com/logging/docs/write-query-log-entries-gcloud)
- Source ID: `site-docs-root`
- Final score: 149
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The method returns a response similar to the following: { "entries": [ { "textPayload": "A simple entry", "insertId": "vd4m1if7h7u1a", "resource": { "type": "global", "labels": { "project id": "myloggingproject" } }, "timestamp": "2018-11-01T18:39:19.718100792Z", "logName": "projects/myloggingproject/logs/my-test-log", "receiveTimestamp": "2018-11-01T18:39:19.718100792Z" }, { "insertId": "jpj9zjf73t1mn", "jsonPayload": { "message": "My second entry", "weather": "partly cloudy" }, "resource": { "type": "global", "labels": { "project id": "myloggingproject" } }, "timestamp": "2018-11-01T18:39:31.114507977Z", "logName": "projects/myloggingproject/logs/my-test-log", "receiveTimestamp": "2018-11-01T18:39:31.114507977Z" } ] } View log entries in the Logs Explorer To view log entries in the Google Cloud console, you can use the Logs Explorer.
- For example, to retrieve and display the log entries with a resource type of global , run the following command: gcloud logging read "resource.type=global" The command returns a result similar to the following: --- insertId : jpj9zjf73t1mn jsonPayload : message : My second entry weather : partly cloudy logName : projects / myloggingproject / logs / my - test - log receiveTimestamp : '2018-11-01T18:39:31.114507977Z' resource : labels : project id : myloggingproject type : global timestamp : '2018-11-01T18:39:31.114507977Z' --- insertId : vd4m1if7h7u1a logName : projects / myloggingproject / logs / my - test - log receiveTimestamp : '2018-11-01T18:39:19.718100792Z' resource : labels : project id : myloggingproject type : global textPayload : A simple entry timestamp : '2018-11-01T18:39:19.718100792Z' For information about reading logs, see the gcloud logging read reference documentation.
- To read a list of log entries from Logging, do the following: Go to the API reference page for the entries.list API method: Go to entries.list API page Configure and run the API command: Replace PROJECT ID in the following text: "resourceNames": [ "projects/ PROJECT ID " ], "filter": "resource.type=global", "orderBy": "timestamp desc" Copy the updated text from the previous step, and paste it into the Request body field of APIs Explorer.
- Write a log entry with structured data to the log my-test-log : gcloud logging write -- payload - type = json my - test - log '{ "message": "My second entry", "weather": "partly cloudy"}' When you write a log entry with structured data, you must include --payload-type=json .

### Elasticsearch 8.0+ and 9.0+ \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/agent/ops-agent/third-party/elasticsearch9](https://docs.cloud.google.com/logging/docs/agent/ops-agent/third-party/elasticsearch9)
- Source ID: `site-docs-root-2`
- Final score: 145
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The elasticsearch json logs contain the following fields in the LogEntry : Field Type Description jsonPayload.ecs.version string ECS version jsonPayload.elasticsearch.cluster.name string The name of the cluster emitting the log record in ECS format jsonPayload.elasticsearch.cluster.uuid string The UUID of the cluster emitting the log record in ECS format jsonPayload.elasticsearch.node.name string The name of the node emitting the log record in ECS format jsonPayload.event string Event information in ECS format jsonPayload.log string Log details in ECS format jsonPayload.log.level string Log entry level in ECS format jsonPayload.log.logger string The logger component that emitted the log in ECS format jsonPayload.message string Log message jsonPayload.process.thread.name string The name of the thread that emitted the log in ECS format jsonPayload.service.name string The name of the service emitting the log in ECS format severity string ( LogSeverity ) Log entry severity level The elasticsearch gc logs contain the following fields in the LogEntry : Field Type Description jsonPayload.gc run number The run of the garbage collector jsonPayload.message string Log message jsonPayload.type string The type of the log record severity string ( LogSeverity ) Log entry level (translated).
- To configure a receiver for your elasticsearch json logs, specify the following fields: Field Default Description exclude paths A list of filesystem path patterns to exclude from the set matched by include paths . include paths [/var/log/elasticsearch/ server.json, /var/log/elasticsearch/ deprecation.json, /var/log/elasticsearch/ index search slowlog.json, /var/log/elasticsearch/ index indexing slowlog.json, /var/log/elasticsearch/ audit.json] A list of filesystem paths to read by tailing each file.
- Enter the following query in the editor, and then click Run query : resource.type="gce instance" (log id("elasticsearch json") OR log id("elasticsearch gc")) To verify that Elasticsearch metrics are being sent to Cloud Monitoring, do the following: In the Google Cloud console, go to the leaderboard Metrics explorer page: Go to Metrics explorer If you use the search bar to find this page, then select the result whose subheading is Monitoring .
- To configure a receiver for your elasticsearch gc logs, specify the following fields: Field Default Description exclude paths A list of filesystem path patterns to exclude from the set matched by include paths . include paths [/var/log/elasticsearch/gc.log] A list of filesystem paths to read by tailing each file.

