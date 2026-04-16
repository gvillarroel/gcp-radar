---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T23:59:44.479Z"
product_name: "Cloud Logging"
product_slug: "cloud-logging"
feature_name: "Logging agent extended LogEntry field support"
feature_slug: "logging-agent-extended-logentry-field-support"
latest_feature_date: "2017-09-12"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/logging/docs/agent/ops-agent/configuration"
  - "https://docs.cloud.google.com/logging/docs/agent/logging/configuration"
  - "https://docs.cloud.google.com/logging/docs/agent/ops-agent/third-party/couchbase"
keywords:
  - "logging"
  - "agent"
  - "extended"
  - "logentry"
  - "field"
  - "version"
  - "18"
  - "supports"
---

# Logging agent extended LogEntry field support

Product: Cloud Logging
Coverage: MEDIUM

## Step 02 Summary

Logging agent version 1.5.18-1 supports setting the trace, sourceLocation, and operation LogEntry fields.

## Extended Definition

Logging agent version 1.5.18-1 supports setting the trace, sourceLocation, and operation LogEntry fields.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/logging/docs/agent/ops-agent/configuration](https://docs.cloud.google.com/logging/docs/agent/ops-agent/configuration)
- [https://docs.cloud.google.com/logging/docs/agent/logging/configuration](https://docs.cloud.google.com/logging/docs/agent/logging/configuration)
- [https://docs.cloud.google.com/logging/docs/agent/ops-agent/third-party/couchbase](https://docs.cloud.google.com/logging/docs/agent/ops-agent/third-party/couchbase)

## Supporting Pages

### Configure the Ops Agent \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/agent/ops-agent/configuration](https://docs.cloud.google.com/logging/docs/agent/ops-agent/configuration)
- Source ID: `site-docs-root-2`
- Final score: 159
- Re-rank relevance: N/A

Evidence snippets:
- TAG "). receivers : RECEIVER ID : type : fluent forward listen host : 127.0.0.1 listen port : 24224 Sample syslog receiver (Linux only): receivers : RECEIVER ID : type : syslog transport protocol : tcp listen host : 0.0.0.0 listen port : 5140 Sample tcp receiver: receivers : RECEIVER ID : type : tcp format : json listen host : 127.0.0.1 listen port : 5170 Sample windows event log receiver (Windows only): receivers : RECEIVER ID : type : windows event log channels : [ System , Application , Security ] Sample windows event log receiver that overrides the built-in receiver to use version 2 : receivers : windows event log : type : windows event log channels : [ System , Application , Security ] receiver version : 2 Sample systemd journald receiver: receivers : RECEIVER ID : type : systemd journald Special fields in structured payloads For processors and receivers that can ingest structured data (the fluent forward and tcp receivers and the parse json processor), you can set special fields in the input that will map to specific fields in the LogEntry object that the agent writes to the Logging API.
- This can be used to remove placeholder values, such as: httpRequest.referer : move from : jsonPayload.referer omit if : httpRequest.referer = "-" Sample Configurations The parse json processor would transform a JSON file containing { "http status" : "400" , "path" : "/index.html" , "referer" : "-" } into a LogEntry structure that looks like this: { "jsonPayload" : { "http status" : "400" , "path" : "/index.html" , "referer" : "-" } } This could then be transformed with modify fields into this LogEntry : { "httpRequest" : { "status" : 400 , "requestUrl" : "/index.html" , } } by using this Ops Agent configuration: logging : receivers : in : type : files include paths : - /var/log/http.json processors : parse json : type : parse json set http request : type : modify fields fields : httpRequest.status : move from : jsonPayload.http status type : integer httpRequest.requestUrl : move from : jsonPayload.path httpRequest.referer : move from : jsonPayload.referer omit if : jsonPayload.referer = "-" service : pipelines : pipeline : receivers : [ in ] processors : [ parse json , set http request ] This configuration reads JSON-formatted logs from /var/log/http.json and populates part of the httpRequest structure from fields in the logs.
- When the Ops Agent receives external structured log data, it places top-level fields into the LogEntry 's jsonPayload field unless the field name is listed in the following table: Record field LogEntry field Option 1 "timestamp": { "seconds": CURRENT SECONDS, "nanos": CURRENT NANOS, } Option 2 { "timestampSeconds": CURRENT SECONDS, "timestampNanos": CURRENT NANOS, } timestamp receiver id (not a record field) logName logging.googleapis.com/httpRequest ( HttpRequest ) httpRequest logging.googleapis.com/severity ( string ) severity logging.googleapis.com/labels ( struct of string:string ) labels logging.googleapis.com/operation ( struct ) operation logging.googleapis.com/sourceLocation ( struct ) sourceLocation logging.googleapis.com/trace ( string ) trace logging.googleapis.com/spanId ( string ) spanId Any remaining structured record fields remain part of the jsonPayload structure.
- The service section has the following elements: log level pipelines Log verbosity level The log level field, available with Ops Agent versions 2.6.0 and later, customizes verbosity for Ops Agent logging submodule's own logs.

### Configure the Logging agent \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/agent/logging/configuration](https://docs.cloud.google.com/logging/docs/agent/logging/configuration)
- Source ID: `site-docs-root`
- Final score: 145
- Re-rank relevance: N/A

Evidence snippets:
- For more information, see traceSampled on the LogEntry page. "logging.googleapis.com/trace sampled": false Time-related fields In general, time-related information about a log entry is stored in the timestamp field of the LogEntry object: { insertId: "1ad8d08f-6529-47ea-832e-467f869a2da4" ... resource: {2} timestamp: "2023-10-30T16:33:15.505196Z" } When the source for a log entry is structured data, the Logging agent uses the following rules to search the fields in the jsonPayload entry for time-related information: Search for a timestamp field that is a JSON object that includes the seconds and nanos fields, representing, respectively, a signed number of seconds from the UTC epoch and a nonnegative number of fractional seconds: jsonPayload: { ... "timestamp": { "seconds": CURRENT SECONDS, "nanos": CURRENT NANOS } } If the previous search fails, then search for a pair of timestampSeconds and timestampNanos fields: jsonPayload: { ... "timestampSeconds": CURRENT SECONDS, "timestampNanos": CURRENT NANOS } If the previous search fails, then search for a time field that is a string in RFC 3339 format: jsonPayload: { ... "time": CURRENT TIME RFC3339 } When time-related information is found, the Logging agent uses that information to set the value of the LogEntry.timestamp , and it doesn't copy that information from the structured record into the LogEntry.jsonPayload object.
- JSON log field LogEntry field Cloud Logging agent function Example value severity severity The Logging agent attempts to match a variety of common severity strings, which includes the list of LogSeverity strings recognized by the Logging API. "severity":"ERROR" message textPayload (or part of jsonPayload ) The message that appears on the log entry line in the Logs Explorer. "message":"There was an error in the application." Note : message is saved as textPayload if it is the only field remaining after the Logging agent moves the other special-purpose fields and detect json wasn't enabled; otherwise message remains in jsonPayload . detect json is not applicable to managed logging environments like Google Kubernetes Engine.
- Special fields in structured payloads When the Logging agent receives a structured log record, it moves any key that matches the following table into the corresponding field in the LogEntry object.
- The Logging agent output plugin supports three ways to set LogEntry labels: Dynamically, replacing specific labels in a structured entry with different labels.

### Couchbase \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/agent/ops-agent/third-party/couchbase](https://docs.cloud.google.com/logging/docs/agent/ops-agent/third-party/couchbase)
- Source ID: `site-docs-root-2`
- Final score: 143
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You must restart the agent for the configuration to take effect. set -e Check if the file exists if [ ! -f /etc/google-cloud-ops-agent/config.yaml ]; then Create the file if it doesn't exist. sudo mkdir -p /etc/google-cloud-ops-agent sudo touch /etc/google-cloud-ops-agent/config.yaml fi Create a back up of the existing file so existing configurations are not lost. sudo cp /etc/google-cloud-ops-agent/config.yaml /etc/google-cloud-ops-agent/config.yaml.bak Configure the Ops Agent. sudo tee /etc/google-cloud-ops-agent/config.yaml > /dev/null << EOF metrics: receivers: couchbase: type: couchbase username: admin password: password To use the googlesecretmanager provider to replace plaintext passwords, refer to the example below. password: ${ googlesecretmanager : projects / < project - id > / secrets / < secret - id > / versions / < version - id > } collection interval: 30s service: pipelines: couchbase: receivers: - couchbase logging: receivers: couchbase general: type: couchbase general couchbase http access: type: couchbase http access couchbase goxdcr: type: couchbase goxdcr service: pipelines: couchbase: receivers: - couchbase general - couchbase http access - couchbase goxdcr EOF For these changes to take effect, you must restart the Ops Agent: Linux To restart the agent, run the following command on your instance: sudo systemctl restart google-cloud-ops-agent To confirm that the agent restarted, run the following command and verify that the components "Metrics Agent" and "Logging Agent" started: sudo systemctl status "google-cloud-ops-agent " Windows Connect to your instance using RDP or a similar tool and login to Windows.
- The couchbase general logs contain the following fields in the LogEntry : Field Type Description jsonPayload.level string Log entry severity for the couchbase log jsonPayload.message string Log message jsonPayload.module name string The name of the module issuing the entry jsonPayload.node name string The name of the node issuing the log message jsonPayload.source string Source where the log originated jsonPayload.type string The type of log severity string ( LogSeverity ) Log entry level (translated).
- Open a PowerShell terminal with administrator privileges by right-clicking the PowerShell icon and selecting Run as Administrator To restart the agent, run the following PowerShell command: Restart-Service google-cloud-ops-agent -Force To confirm that the agent restarted, run the following command and verify that the components "Metrics Agent" and "Logging Agent" started: Get-Service google-cloud-ops-agent What is logged The logName is derived from the receiver IDs specified in the configuration.
- The couchbase http access logs contain the following fields in the LogEntry : Field Type Description httpRequest object See HttpRequest jsonPayload.host string The IP address of the client invoking the HTTP request jsonPayload.level string Log entry severity for the couchbase log jsonPayload.message string Log message jsonPayload.user string The name of the user making the HTTP request if basic auth is used. severity string ( LogSeverity ) Log entry level (translated).

