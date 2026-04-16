---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T23:59:44.471Z"
product_name: "Cloud Logging"
product_slug: "cloud-logging"
feature_name: "Structured logging agent JSON conversion"
feature_slug: "structured-logging-agent-json-conversion"
latest_feature_date: "2018-04-10"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/logging/docs/agent/logging/configuration"
  - "https://docs.cloud.google.com/logging/docs/agent/ops-agent/configuration"
  - "https://docs.cloud.google.com/logging/docs/agent-or-library"
keywords:
  - "structured"
  - "logging"
  - "agent"
  - "json"
  - "conversion"
  - "stackdriver"
  - "can"
  - "convert"
---

# Structured logging agent JSON conversion

Product: Cloud Logging
Coverage: MEDIUM

## Step 02 Summary

The Stackdriver Logging agent can convert payloads to JSON format for certain log inputs.

## Extended Definition

The Stackdriver Logging agent can convert payloads to JSON format for certain log inputs.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/logging/docs/agent/logging/configuration](https://docs.cloud.google.com/logging/docs/agent/logging/configuration)
- [https://docs.cloud.google.com/logging/docs/agent/ops-agent/configuration](https://docs.cloud.google.com/logging/docs/agent/ops-agent/configuration)
- [https://docs.cloud.google.com/logging/docs/agent-or-library](https://docs.cloud.google.com/logging/docs/agent-or-library)

## Supporting Pages

### Configure the Logging agent \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/agent/logging/configuration](https://docs.cloud.google.com/logging/docs/agent/logging/configuration)
- Source ID: `site-docs-root`
- Final score: 161
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For more information, see traceSampled on the LogEntry page. "logging.googleapis.com/trace sampled": false Time-related fields In general, time-related information about a log entry is stored in the timestamp field of the LogEntry object: { insertId: "1ad8d08f-6529-47ea-832e-467f869a2da4" ... resource: {2} timestamp: "2023-10-30T16:33:15.505196Z" } When the source for a log entry is structured data, the Logging agent uses the following rules to search the fields in the jsonPayload entry for time-related information: Search for a timestamp field that is a JSON object that includes the seconds and nanos fields, representing, respectively, a signed number of seconds from the UTC epoch and a nonnegative number of fractional seconds: jsonPayload: { ... "timestamp": { "seconds": CURRENT SECONDS, "nanos": CURRENT NANOS } } If the previous search fails, then search for a pair of timestampSeconds and timestampNanos fields: jsonPayload: { ... "timestampSeconds": CURRENT SECONDS, "timestampNanos": CURRENT NANOS } If the previous search fails, then search for a time field that is a string in RFC 3339 format: jsonPayload: { ... "time": CURRENT TIME RFC3339 } When time-related information is found, the Logging agent uses that information to set the value of the LogEntry.timestamp , and it doesn't copy that information from the structured record into the LogEntry.jsonPayload object.
- To send logs via the fluentd in forward plugin, read the following instructions: Execute the following command on the VM with the Logging agent installed: echo '{"code": "send-log-via-fluent-cat", "message": "This is a log from in forward plugin."}' /opt/google-fluentd/embedded/bin/fluent-cat log-via-in-forward-plugin Check the Logs Explorer to see the ingested log entry: { insertId: "1kvvmhsg1ib4689" jsonPayload: { code: "send-log-via-fluent-cat" message: "This is a log from in forward plugin." } labels: { compute.googleapis.com/resource name: "add-structured-log-resource" } logName: "projects/my-sample-project-12345/logs/log-via-in-forward-plugin" receiveTimestamp: "2018-03-21T02:11:27.981020900Z" resource: { labels: { instance id: "5351724540900470204" project id: "my-sample-project-12345" zone: "us-central1-c" } type: "gce instance" } timestamp: "2018-03-21T02:11:22.717692494Z" } Streaming structured (JSON) log records from application code You can enable connectors in various languages to send structured logs from application code; for more information, review the fluentd documentation .
- When the agent is configured to ingest JSON content, the input must be formatted so that each JSON object is on a newline: {"name" : "zeeshan", "age" : 28} {"name" : "reeba", "age" : 15} To configure the Logging agent to ingest JSON formatted content, do the following: From the Linux command prompt, create a log file: touch /tmp/test-structured-log.log Create a new configuration file labeled test-structured-log.conf in the additional configuration directory /etc/google-fluentd/config.d : sudo tee /etc/google-fluentd/config.d/test-structured-log.conf <<EOF < source > @type tail <parse> 'json' indicates the log is structured (JSON). @type json </parse> The path of the log file. path /tmp/test-structured-log.log The path of the position file that records where in the log file we have processed already.
- The payload of log records streamed by a custom-configured Logging agent can be either a single unstructured text message ( textPayload ) or a structured JSON message ( jsonPayload ).

### Configure the Ops Agent \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/agent/ops-agent/configuration](https://docs.cloud.google.com/logging/docs/agent/ops-agent/configuration)
- Source ID: `site-docs-root-2`
- Final score: 139
- Re-rank relevance: N/A

Evidence snippets:
- TAG "). receivers : RECEIVER ID : type : fluent forward listen host : 127.0.0.1 listen port : 24224 Sample syslog receiver (Linux only): receivers : RECEIVER ID : type : syslog transport protocol : tcp listen host : 0.0.0.0 listen port : 5140 Sample tcp receiver: receivers : RECEIVER ID : type : tcp format : json listen host : 127.0.0.1 listen port : 5170 Sample windows event log receiver (Windows only): receivers : RECEIVER ID : type : windows event log channels : [ System , Application , Security ] Sample windows event log receiver that overrides the built-in receiver to use version 2 : receivers : windows event log : type : windows event log channels : [ System , Application , Security ] receiver version : 2 Sample systemd journald receiver: receivers : RECEIVER ID : type : systemd journald Special fields in structured payloads For processors and receivers that can ingest structured data (the fluent forward and tcp receivers and the parse json processor), you can set special fields in the input that will map to specific fields in the LogEntry object that the agent writes to the Logging API.
- When the Ops Agent receives external structured log data, it places top-level fields into the LogEntry 's jsonPayload field unless the field name is listed in the following table: Record field LogEntry field Option 1 "timestamp": { "seconds": CURRENT SECONDS, "nanos": CURRENT NANOS, } Option 2 { "timestampSeconds": CURRENT SECONDS, "timestampNanos": CURRENT NANOS, } timestamp receiver id (not a record field) logName logging.googleapis.com/httpRequest ( HttpRequest ) httpRequest logging.googleapis.com/severity ( string ) severity logging.googleapis.com/labels ( struct of string:string ) labels logging.googleapis.com/operation ( struct ) operation logging.googleapis.com/sourceLocation ( struct ) sourceLocation logging.googleapis.com/trace ( string ) trace logging.googleapis.com/spanId ( string ) spanId Any remaining structured record fields remain part of the jsonPayload structure.
- Customize the structured log format that the agent uses to process the log entries, by parsing the JSON or by using regular expressions; see Logging processors .
- This can be used to remove placeholder values, such as: httpRequest.referer : move from : jsonPayload.referer omit if : httpRequest.referer = "-" Sample Configurations The parse json processor would transform a JSON file containing { "http status" : "400" , "path" : "/index.html" , "referer" : "-" } into a LogEntry structure that looks like this: { "jsonPayload" : { "http status" : "400" , "path" : "/index.html" , "referer" : "-" } } This could then be transformed with modify fields into this LogEntry : { "httpRequest" : { "status" : 400 , "requestUrl" : "/index.html" , } } by using this Ops Agent configuration: logging : receivers : in : type : files include paths : - /var/log/http.json processors : parse json : type : parse json set http request : type : modify fields fields : httpRequest.status : move from : jsonPayload.http status type : integer httpRequest.requestUrl : move from : jsonPayload.path httpRequest.referer : move from : jsonPayload.referer omit if : jsonPayload.referer = "-" service : pipelines : pipeline : receivers : [ in ] processors : [ parse json , set http request ] This configuration reads JSON-formatted logs from /var/log/http.json and populates part of the httpRequest structure from fields in the logs.

### "Which should you use: Logging agent or client library? \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/logging/docs/agent-or-library](https://docs.cloud.google.com/logging/docs/agent-or-library)
- Source ID: `site-docs-root`
- Final score: 134
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If your application has its own log format that you can't change, but you want the logs to be recognized as structured logs, then you must write logs in the structured-logging format, usually JSON, to stdout and stderr , so that the agents can recognize them as structured logs.
- Legacy Logging agent Advantages The agent uses Fluentd to collect logs, which supports encoding conversion.
- By default, the agents are configured to detect logs in JSON format and to handle them as structured logs.
- When running your application in Google Cloud services that don't support automatically sending logs written to stdout and stderr to your Google Cloud project, you can collect stdout and stderr logs in on-disk files and configure the agent to scrape those and send them to Logging.

