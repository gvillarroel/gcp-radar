---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T22:38:24.529Z"
product_name: "Cloud Logging"
product_slug: "cloud-logging"
feature_name: "Ops Agent self-log collection control"
feature_slug: "ops-agent-self-log-collection-control"
latest_feature_date: "2023-12-01"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/logging/docs/agent/ops-agent/rotate-logs"
  - "https://docs.cloud.google.com/logging/docs/agent/ops-agent/configuration"
  - "https://docs.cloud.google.com/logging/docs/agent/ops-agent"
keywords:
  - "ops"
  - "agent"
  - "self"
  - "log"
  - "collection"
  - "control"
  - "can"
  - "be"
---

# Ops Agent self-log collection control

Product: Cloud Logging
Coverage: LOW

## Step 02 Summary

Ops Agent can be configured not to collect and send its own logs to Cloud Logging.

## Extended Definition

Ops Agent can be configured not to collect and send its own logs to Cloud Logging.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/logging/docs/agent/ops-agent/rotate-logs](https://docs.cloud.google.com/logging/docs/agent/ops-agent/rotate-logs)
- [https://docs.cloud.google.com/logging/docs/agent/ops-agent/configuration](https://docs.cloud.google.com/logging/docs/agent/ops-agent/configuration)
- [https://docs.cloud.google.com/logging/docs/agent/ops-agent](https://docs.cloud.google.com/logging/docs/agent/ops-agent)

## Supporting Pages

### "Use log rotation for Ops Agent self logs \_|\_ Cloud Logging \_|\_ Google\

- URL: [https://docs.cloud.google.com/logging/docs/agent/ops-agent/rotate-logs](https://docs.cloud.google.com/logging/docs/agent/ops-agent/rotate-logs)
- Source ID: `site-docs-root-2`
- Final score: 260
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The result, specifying all options and default values, looks like the following: logging: ... metrics: ... global: default self log file rotation: enabled: true max file size megabytes: 400 backup count: 1 Example configurations To disable log rotation by the Ops Agent, specify the enabled option with the value false : logging: ... metrics: ... global: default self log file rotation: enabled: false To rotate the log when the log file reaches 20 MB and keep 5 backups (6 files total): logging: ... metrics: ... global: default self log file rotation: max file size megabytes: 20 backup count: 5 To rotate the log when the log file reaches 2,000 MB (2 GB) and keep 1 backup (2 files total): logging: ... metrics: ... global: default self log file rotation: max file size megabytes: 2000 To rotate the log when the log file reaches 400 MB and keep 2 backups (3 files total): logging: ... metrics: ... global: default self log file rotation: backup count: 2 If you make frequent changes as you refine your log-rotation configuration, remember to restart the agent to apply your changes.
- This effectively limits the disk space used by the Ops Agent self log files. rotate 30 Log files are rotated when they grow bigger than maxsize even before the additionally specified time interval maxsize 256 M Skip rotation if the log file is missing. missingok Do not rotate the log if it is empty. notifempty Old versions of log files are compressed with gzip by default. compress Postpone compression of the previous log file to the next rotation cycle. delaycompress } EOF Set up crontab or systemd timer to trigger the logrotate utility periodically.
- Trigger the agent self log file to be larger than 1K by restarting the agent a few times: sudo service google-cloud-ops-agent restart Wait for the crontab or systemd timer to take effect to trigger the logrotate utility, or trigger the logrotate utility manually by running this command: sudo logrotate /etc/logrotate.d/google-cloud-ops-agent.conf Verify that you see rotated log files in the /var/log/google-cloud-ops-agent/subagents/ directory.
- Home Documentation Observability Cloud Logging Guides Send feedback Use log rotation for Ops Agent self logs Stay organized with collections Save and categorize content based on your preferences.

### Configure the Ops Agent \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/agent/ops-agent/configuration](https://docs.cloud.google.com/logging/docs/agent/ops-agent/configuration)
- Source ID: `site-docs-root-2`
- Final score: 236
- Re-rank relevance: N/A

Evidence snippets:
- The entire metrics configuration looks like the following: metrics : service : pipelines : default pipeline : receivers : [] The following example shows the built-in service configuration for Windows: metrics : service : pipelines : default pipeline : receivers : - hostmetrics - iis - mssql processors : - metrics filter The following service configuration customizes log verbosity for the metrics submodule to be debug instead: metrics : service : log level : debug Collection of self logs By default, the Ops Agent's Fluent Bit self logs are sent to Cloud Logging.
- To disable self-log collection, add a global section to your user-specified configuration file and set the default self log file collection option to the value false : logging: ... metrics: ... global: default self log file collection: false Log-rotation configuration Starting with Ops Agent version 2.31.0, you can also set up the agent's log-rotation feature by using the configuration files.
- You can disable the collection of these self logs, starting with Ops Agent version 2.44.0, by using the default self log file collection option.
- This can be used to remove placeholder values, such as: httpRequest.referer : move from : jsonPayload.referer omit if : httpRequest.referer = "-" Sample Configurations The parse json processor would transform a JSON file containing { "http status" : "400" , "path" : "/index.html" , "referer" : "-" } into a LogEntry structure that looks like this: { "jsonPayload" : { "http status" : "400" , "path" : "/index.html" , "referer" : "-" } } This could then be transformed with modify fields into this LogEntry : { "httpRequest" : { "status" : 400 , "requestUrl" : "/index.html" , } } by using this Ops Agent configuration: logging : receivers : in : type : files include paths : - /var/log/http.json processors : parse json : type : parse json set http request : type : modify fields fields : httpRequest.status : move from : jsonPayload.http status type : integer httpRequest.requestUrl : move from : jsonPayload.path httpRequest.referer : move from : jsonPayload.referer omit if : jsonPayload.referer = "-" service : pipelines : pipeline : receivers : [ in ] processors : [ parse json , set http request ] This configuration reads JSON-formatted logs from /var/log/http.json and populates part of the httpRequest structure from fields in the logs.

### Ops Agent overview \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/agent/ops-agent](https://docs.cloud.google.com/logging/docs/agent/ops-agent)
- Source ID: `site-docs-root`
- Final score: 222
- Re-rank relevance: N/A

Evidence snippets:
- Combining the collection of logs, metrics, and traces into a single process, the Ops Agent uses Fluent Bit for logs, which supports high-throughput logging, and the OpenTelemetry Collector for metrics and traces.
- Home Documentation Observability Cloud Logging Guides Send feedback Ops Agent overview Stay organized with collections Save and categorize content based on your preferences.
- You can install the Ops Agent on Managed Service for Apache Spark clusters that use image version 2.2 and later to collect syslog logs and host metrics.
- Pricing If you install the Ops Agent, then you might be charged for the metrics, logs, or traces that the agent sends to your Google Cloud project.

