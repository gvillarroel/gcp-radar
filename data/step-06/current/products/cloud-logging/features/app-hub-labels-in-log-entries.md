---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T23:59:44.301Z"
product_name: "Cloud Logging"
product_slug: "cloud-logging"
feature_name: "App Hub labels in log entries"
feature_slug: "app-hub-labels-in-log-entries"
latest_feature_date: "2025-03-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/logging/docs/agent/logging/configuration"
  - "https://docs.cloud.google.com/logging/docs/agent/ops-agent/configuration"
  - "https://docs.cloud.google.com/python/docs/reference/logging/latest/entries"
keywords:
  - "app"
  - "hub"
  - "labels"
  - "log"
  - "entries"
  - "application"
  - "attached"
  - "exposed"
---

# App Hub labels in log entries

Product: Cloud Logging
Coverage: MEDIUM

## Step 02 Summary

App Hub application labels are attached to log entries and exposed as application, service, and workload facets in Logs Explorer.

## Extended Definition

App Hub application labels are attached to log entries and exposed as application, service, and workload facets in Logs Explorer.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/logging/docs/agent/logging/configuration](https://docs.cloud.google.com/logging/docs/agent/logging/configuration)
- [https://docs.cloud.google.com/logging/docs/agent/ops-agent/configuration](https://docs.cloud.google.com/logging/docs/agent/ops-agent/configuration)
- [https://docs.cloud.google.com/python/docs/reference/logging/latest/entries](https://docs.cloud.google.com/python/docs/reference/logging/latest/entries)

## Supporting Pages

### Configure the Logging agent \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/agent/logging/configuration](https://docs.cloud.google.com/logging/docs/agent/logging/configuration)
- Source ID: `site-docs-root`
- Final score: 117
- Re-rank relevance: N/A

Evidence snippets:
- In addition, the following Prometheus metrics are exposed by the output plugin in prometheus mode: uptime with a version label: Uptime of the Logging agent. stackdriver successful requests count with grpc and code labels: The number of successful requests to the Logging API. stackdriver failed requests count with grpc and code labels: The number of failed requests to the Logging API, broken down by the error code. stackdriver ingested entries count with grpc and code labels: The number of log entries ingested by the Logging API. stackdriver dropped entries count with grpc and code labels: The number of log entries rejected by the Logging API. stackdriver retried entries count with grpc and code labels: The number of log entries that failed to be ingested by the Google Cloud fluentd output plugin due to a transient error and were retried. prometheus and prometheus monitor plugin configuration Note: The following default monitoring configuration is exclusive to Linux operating systems.
- To send logs via the fluentd in forward plugin, read the following instructions: Execute the following command on the VM with the Logging agent installed: echo '{"code": "send-log-via-fluent-cat", "message": "This is a log from in forward plugin."}' /opt/google-fluentd/embedded/bin/fluent-cat log-via-in-forward-plugin Check the Logs Explorer to see the ingested log entry: { insertId: "1kvvmhsg1ib4689" jsonPayload: { code: "send-log-via-fluent-cat" message: "This is a log from in forward plugin." } labels: { compute.googleapis.com/resource name: "add-structured-log-resource" } logName: "projects/my-sample-project-12345/logs/log-via-in-forward-plugin" receiveTimestamp: "2018-03-21T02:11:27.981020900Z" resource: { labels: { instance id: "5351724540900470204" project id: "my-sample-project-12345" zone: "us-central1-c" } type: "gce instance" } timestamp: "2018-03-21T02:11:22.717692494Z" } Streaming structured (JSON) log records from application code You can enable connectors in various languages to send structured logs from application code; for more information, review the fluentd documentation .
- Setting labels in structured log entries Suppose you wrote a structured log entry payload like this: { "message": "This is a log message", "timestamp": "Aug 10 20:07:00", "env": "production" } And suppose you want to translate the payload field env to a metadata label environment .
- For more information, see labels on the LogEntry page. "logging.googleapis.com/labels": {"user label 1":"value 1","user label 2":"value 2"} logging.googleapis.com/operation operation The value of this field is also used by the Logs Explorer to group related log entries.

### Configure the Ops Agent \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/agent/ops-agent/configuration](https://docs.cloud.google.com/logging/docs/agent/ops-agent/configuration)
- Source ID: `site-docs-root-2`
- Final score: 108
- Re-rank relevance: N/A

Evidence snippets:
- Example configuration processors : PROCESSOR ID : type : exclude logs match any : - '(jsonPayload.message = "log spam 1" OR jsonPayload.message = "log spam 2") AND severity = "ERROR"' - 'jsonPayload.application = "foo" AND severity = "INFO"' modify fields Processor The modify fields processor allows customization of the structure and contents of log entries.
- Common Linux log files The following table lists common log files for frequently used Linux applications: Application Common log files apache For information about Apache log files, see Monitoring third-party applications: Apache Web Server . cassandra For information about Cassandra log files, see Monitoring third-party applications: Cassandra . chef /var/log/chef-server/bookshelf/current /var/log/chef-server/chef-expander/current /var/log/chef-server/chef-pedant/http-traffic.log /var/log/chef-server/chef-server-webui/current /var/log/chef-server/chef-solr/current /var/log/chef-server/erchef/current /var/log/chef-server/erchef/erchef.log.1 /var/log/chef-server/nginx/access.log /var/log/chef-server/nginx/error.log /var/log/chef-server/nginx/rewrite-port-80.log /var/log/chef-server/postgresql/current gitlab /home/git/gitlab/log/application.log /home/git/gitlab/log/githost.log /home/git/gitlab/log/production.log /home/git/gitlab/log/satellites.log /home/git/gitlab/log/sidekiq.log /home/git/gitlab/log/unicorn.stderr.log /home/git/gitlab/log/unicorn.stdout.log /home/git/gitlab-shell/gitlab-shell.log jenkins /var/log/jenkins/jenkins.log jetty /var/log/jetty/out.log /var/log/jetty/ .request.log /var/log/jetty/ .stderrout.log joomla /var/www/joomla/logs/ .log magento /var/www/magento/var/log/exception.log /var/www/magento/var/log/system.log /var/www/magento/var/report/ mediawiki /var/log/mediawiki/ .log memcached For information about Memcached log files, see Monitoring third-party applications: Memcached . mongodb For information about MongoDB log files, see Monitoring third-party applications: MongoDB . mysql For information about MySQL log files, see Monitoring third-party applications: MySQL . nginx For information about nginx log files, see Monitoring third-party applications: nginx . postgres For information about PostgreSQL log files, see Monitoring third-party applications: PostgreSQL . puppet /var/log/puppet/http.log /var/log/puppet/masterhttp.log puppet-enterprise /var/log/pe-activemq/activemq.log /var/log/pe-activemq/wrapper.log /var/log/pe-console-auth/auth.log /var/log/pe-console-auth/cas client.log /var/log/pe-console-auth/cas.log /var/log/pe-httpd/access.log /var/log/pe-httpd/error.log /var/log/pe-httpd/other vhosts access.log /var/log/pe-httpd/puppetdashboard.access.log /var/log/pe-httpd/puppetdashboard.error.log /var/log/pe-httpd/puppetmasteraccess.log /var/log/pe-mcollective/mcollective audit.log /var/log/pe-mcollective/mcollective.log /var/log/pe-puppet-dashboard/certificate manager.log /var/log/pe-puppet-dashboard/event-inspector.log /var/log/pe-puppet-dashboard/failed reports.log /var/log/pe-puppet-dashboard/live-management.log /var/log/pe-puppet-dashboard/mcollective client.log /var/log/pe-puppet-dashboard/production.log /var/log/pe-puppetdb/pe-puppetdb.log /var/log/pe-puppet/masterhttp.log /var/log/pe-puppet/rails.log rabbitmq For information about RabbitMQ log files, see Monitoring third-party applications: RabbitMQ . redis For information about Redis log files, see Monitoring third-party applications: Redis . redmine /var/log/redmine/ .log salt /var/log/salt/key /var/log/salt/master /var/log/salt/minion /var/log/salt/syndic.loc solr For information about Apache Solr log files, see Monitoring third-party applications: Apache Solr . sugarcrm /var/www/ /sugarcrm.log syslog /var/log/syslog /var/log/messages tomcat For information about Apache Tomcat log files, see Monitoring third-party applications: Apache Tomcat . zookeeper For information about Apache ZooKeeper log files, see Monitoring third-party applications: Apache ZooKeeper .
- Current number of GPU memory bytes used, by state Maximum amount of GPU memory, in bytes, that has been allocated by the process Percentage of time in the process lifetime that one or more kernels has been running on the GPU Percentage of time, since last sample, the GPU has been active interface Linux only Total count of network errors Total count of packets sent over the network Total number of bytes sent over the network memory Memory usage, with label for state (buffered, cached, free, slab, used) Memory usage percent, with label for state (buffered, cached, free, slab, used) network TCP connection count, with labels for port and TCP state swap Swap I/O operations, with label for direction Swap bytes used, with labels for device and state Swap percent used, with labels for device and state pagefile Windows only Current percentage of pagefile used by state processes Processes count, with label for state Processes forked count Per-process disk read I/O, with labels for process name + others Per-process disk write I/O, with labels for process name + others Per-process RSS usage, with labels for process name + others Per-process VM usage, with labels for process name + others About the gpu metrics: The hostmetrics receiver collects metrics reported by the NVIDIA Management Library (NVML) as agent.googleapis.com/gpu metrics.
- TAG "). receivers : RECEIVER ID : type : fluent forward listen host : 127.0.0.1 listen port : 24224 Sample syslog receiver (Linux only): receivers : RECEIVER ID : type : syslog transport protocol : tcp listen host : 0.0.0.0 listen port : 5140 Sample tcp receiver: receivers : RECEIVER ID : type : tcp format : json listen host : 127.0.0.1 listen port : 5170 Sample windows event log receiver (Windows only): receivers : RECEIVER ID : type : windows event log channels : [ System , Application , Security ] Sample windows event log receiver that overrides the built-in receiver to use version 2 : receivers : windows event log : type : windows event log channels : [ System , Application , Security ] receiver version : 2 Sample systemd journald receiver: receivers : RECEIVER ID : type : systemd journald Special fields in structured payloads For processors and receivers that can ingest structured data (the fluent forward and tcp receivers and the parse json processor), you can set special fields in the input that will map to specific fields in the LogEntry object that the agent writes to the Logging API.

### Log Entries \_|\_ Python client libraries \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/python/docs/reference/logging/latest/entries](https://docs.cloud.google.com/python/docs/reference/logging/latest/entries)
- Source ID: `site-python-reference`
- Final score: 106
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- See: https://cloud.google.com/logging/docs/reference/v2/rest/v2/LogEntry Create new instance of LogEntry(log name, labels, insert id, severity, http request, timestamp, resource, trace, span id, trace sampled, source location, operation, logger, payload) to api repr() API repr (JSON format) for entry. class google.cloud.logging v2.entries.TextEntry(log name=None, labels=None, insert id=None, severity=None, http request=None, timestamp=None, resource=Resource(type='global', labels={}), trace=None, span id=None, trace sampled=None, source location=None, operation=None, logger=None, payload=None) Bases: google.cloud.logging v2.entries.LogEntry Log entry with text payload.
- 3.15.0 (latest) 3.13.0 3.12.1 3.11.3 3.10.0 3.9.0 3.8.0 3.7.0 3.6.0 3.5.0 3.4.0 3.3.1 3.2.5 3.1.2 3.0.0 2.7.2 2.6.0 2.5.0 2.4.0 2.3.1 2.2.0 2.1.1 2.0.2 1.15.3 1.14.0 1.13.0 1.12.1 Log entries within the Google Cloud Logging API. class google.cloud.logging v2.entries.LogEntry(log name=None, labels=None, insert id=None, severity=None, http request=None, timestamp=None, resource=Resource(type='global', labels={}), trace=None, span id=None, trace sampled=None, source location=None, operation=None, logger=None, payload=None) Bases: google.cloud.logging v2.entries.LogEntry Log entry.
- Parameters message ( google.protobuf.Message ) – the message to be logged to api repr() API repr (JSON format) for entry. class google.cloud.logging v2.entries.StructEntry(log name=None, labels=None, insert id=None, severity=None, http request=None, timestamp=None, resource=Resource(type='global', labels={}), trace=None, span id=None, trace sampled=None, source location=None, operation=None, logger=None, payload=None) Bases: google.cloud.logging v2.entries.LogEntry Log entry with JSON payload.
- Return type google.cloud.logging.entries.LogEntry to api repr() API repr (JSON format) for entry. class google.cloud.logging v2.entries.ProtobufEntry(log name=None, labels=None, insert id=None, severity=None, http request=None, timestamp=None, resource=Resource(type='global', labels={}), trace=None, span id=None, trace sampled=None, source location=None, operation=None, logger=None, payload=None) Bases: google.cloud.logging v2.entries.LogEntry Log entry with protobuf message payload.

