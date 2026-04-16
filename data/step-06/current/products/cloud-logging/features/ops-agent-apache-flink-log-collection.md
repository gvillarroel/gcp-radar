---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T23:59:44.375Z"
product_name: "Cloud Logging"
product_slug: "cloud-logging"
feature_name: "Ops Agent Apache Flink log collection"
feature_slug: "ops-agent-apache-flink-log-collection"
latest_feature_date: "2022-06-29"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/logging/docs/agent/ops-agent/third-party/flink"
  - "https://docs.cloud.google.com/logging/docs/agent/ops-agent/third-party/apache"
  - "https://docs.cloud.google.com/logging/docs/agent/ops-agent/configuration"
keywords:
  - "ops"
  - "agent"
  - "apache"
  - "flink"
  - "log"
  - "collection"
  - "can"
  - "collect"
---

# Ops Agent Apache Flink log collection

Product: Cloud Logging
Coverage: MEDIUM

## Step 02 Summary

Ops Agent can collect Apache Flink logs.

## Extended Definition

Ops Agent can collect Apache Flink logs.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/logging/docs/agent/ops-agent/third-party/flink](https://docs.cloud.google.com/logging/docs/agent/ops-agent/third-party/flink)
- [https://docs.cloud.google.com/logging/docs/agent/ops-agent/third-party/apache](https://docs.cloud.google.com/logging/docs/agent/ops-agent/third-party/apache)
- [https://docs.cloud.google.com/logging/docs/agent/ops-agent/configuration](https://docs.cloud.google.com/logging/docs/agent/ops-agent/configuration)

## Supporting Pages

### Apache Flink \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/agent/ops-agent/third-party/flink](https://docs.cloud.google.com/logging/docs/agent/ops-agent/third-party/flink)
- Source ID: `site-docs-root-2`
- Final score: 212
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Open a PowerShell terminal with administrator privileges by right-clicking the PowerShell icon and selecting Run as Administrator To restart the agent, run the following PowerShell command: Restart-Service google-cloud-ops-agent -Force To confirm that the agent restarted, run the following command and verify that the components "Metrics Agent" and "Logging Agent" started: Get-Service google-cloud-ops-agent Configure logs collection To ingest logs from Flink, you must create a receiver for the logs that Flink produces and then create a pipeline for the new receiver.
- Home Documentation Observability Cloud Logging Guides Send feedback Apache Flink Stay organized with collections Save and categorize content based on your preferences.
- Metric type Kind, Type Monitored resources Labels workload.googleapis.com/flink.job.checkpoint.count CUMULATIVE , INT64 gce instance checkpoint host name job name workload.googleapis.com/flink.job.checkpoint.in progress GAUGE , INT64 gce instance host name job name workload.googleapis.com/flink.job.last checkpoint.size GAUGE , INT64 gce instance host name job name workload.googleapis.com/flink.job.last checkpoint.time GAUGE , INT64 gce instance host name job name workload.googleapis.com/flink.job.restart.count CUMULATIVE , INT64 gce instance host name job name workload.googleapis.com/flink.jvm.class loader.classes loaded CUMULATIVE , INT64 gce instance host name resource type taskmanager id workload.googleapis.com/flink.jvm.cpu.load GAUGE , DOUBLE gce instance host name resource type taskmanager id workload.googleapis.com/flink.jvm.cpu.time CUMULATIVE , INT64 gce instance host name resource type taskmanager id workload.googleapis.com/flink.jvm.gc.collections.count CUMULATIVE , INT64 gce instance garbage collector name host name resource type taskmanager id workload.googleapis.com/flink.jvm.gc.collections.time CUMULATIVE , INT64 gce instance garbage collector name host name resource type taskmanager id workload.googleapis.com/flink.jvm.memory.direct.total capacity GAUGE , INT64 gce instance host name resource type taskmanager id workload.googleapis.com/flink.jvm.memory.direct.used GAUGE , INT64 gce instance host name resource type taskmanager id workload.googleapis.com/flink.jvm.memory.heap.committed GAUGE , INT64 gce instance host name resource type taskmanager id workload.googleapis.com/flink.jvm.memory.heap.max GAUGE , INT64 gce instance host name resource type taskmanager id workload.googleapis.com/flink.jvm.memory.heap.used GAUGE , INT64 gce instance host name resource type taskmanager id workload.googleapis.com/flink.jvm.memory.mapped.total capacity GAUGE , INT64 gce instance host name resource type taskmanager id workload.googleapis.com/flink.jvm.memory.mapped.used GAUGE , INT64 gce instance host name resource type taskmanager id workload.googleapis.com/flink.jvm.memory.metaspace.committed GAUGE , INT64 gce instance host name resource type taskmanager id workload.googleapis.com/flink.jvm.memory.metaspace.max GAUGE , INT64 gce instance host name resource type taskmanager id workload.googleapis.com/flink.jvm.memory.metaspace.used GAUGE , INT64 gce instance host name resource type taskmanager id workload.googleapis.com/flink.jvm.memory.nonheap.committed GAUGE , INT64 gce instance host name resource type taskmanager id workload.googleapis.com/flink.jvm.memory.nonheap.max GAUGE , INT64 gce instance host name resource type taskmanager id workload.googleapis.com/flink.jvm.memory.nonheap.used GAUGE , INT64 gce instance host name resource type taskmanager id workload.googleapis.com/flink.jvm.threads.count GAUGE , INT64 gce instance host name resource type taskmanager id workload.googleapis.com/flink.memory.managed.total GAUGE , INT64 gce instance host name resource type taskmanager id workload.googleapis.com/flink.memory.managed.used GAUGE , INT64 gce instance host name resource type taskmanager id workload.googleapis.com/flink.operator.record.count CUMULATIVE , INT64 gce instance host name job name operator name record subtask index task name taskmanager id workload.googleapis.com/flink.operator.watermark.output GAUGE , INT64 gce instance host name job name operator name subtask index task name taskmanager id workload.googleapis.com/flink.task.record.count CUMULATIVE , INT64 gce instance host name job name record subtask index task name taskmanager id Verify the configuration This section describes how to verify that you correctly configured the Flink receiver.
- To configure a receiver for your flink metrics, specify the following fields: Field Default Description collection interval 60s A time duration value, such as 30s or 5m . endpoint http://localhost:8081 The URL exposed by Flink. type This value must be flink .

### Apache Web Server (httpd) \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/agent/ops-agent/third-party/apache](https://docs.cloud.google.com/logging/docs/agent/ops-agent/third-party/apache)
- Source ID: `site-docs-root-2`
- Final score: 161
- Re-rank relevance: N/A

Evidence snippets:
- Open a PowerShell terminal with administrator privileges by right-clicking the PowerShell icon and selecting Run as Administrator To restart the agent, run the following PowerShell command: Restart-Service google-cloud-ops-agent -Force To confirm that the agent restarted, run the following command and verify that the components "Metrics Agent" and "Logging Agent" started: Get-Service google-cloud-ops-agent Configure logs collection To ingest logs from Apache Web Server, you must create a receiver for the logs that Apache Web Server produces and then create a pipeline for the new receiver.
- To configure a receiver for your apache metrics, specify the following fields: Field Default Description collection interval 60s A time duration value, such as 30s or 5m . server status url http://localhost:80/server-status?auto The URL exposed by the mod status module. type This value must be apache .
- Configure the Ops Agent for Apache Web Server Following the guide to Configure the Ops Agent , add the required elements to collect telemetry from Apache Web Server instances, and restart the agent .
- Configure metrics collection To ingest metrics from Apache Web Server, you must create a receiver for the metrics that Apache Web Server produces and then create a pipeline for the new receiver.

### Configure the Ops Agent \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/agent/ops-agent/configuration](https://docs.cloud.google.com/logging/docs/agent/ops-agent/configuration)
- Source ID: `site-docs-root-2`
- Final score: 159
- Re-rank relevance: N/A

Evidence snippets:
- Common Linux log files The following table lists common log files for frequently used Linux applications: Application Common log files apache For information about Apache log files, see Monitoring third-party applications: Apache Web Server . cassandra For information about Cassandra log files, see Monitoring third-party applications: Cassandra . chef /var/log/chef-server/bookshelf/current /var/log/chef-server/chef-expander/current /var/log/chef-server/chef-pedant/http-traffic.log /var/log/chef-server/chef-server-webui/current /var/log/chef-server/chef-solr/current /var/log/chef-server/erchef/current /var/log/chef-server/erchef/erchef.log.1 /var/log/chef-server/nginx/access.log /var/log/chef-server/nginx/error.log /var/log/chef-server/nginx/rewrite-port-80.log /var/log/chef-server/postgresql/current gitlab /home/git/gitlab/log/application.log /home/git/gitlab/log/githost.log /home/git/gitlab/log/production.log /home/git/gitlab/log/satellites.log /home/git/gitlab/log/sidekiq.log /home/git/gitlab/log/unicorn.stderr.log /home/git/gitlab/log/unicorn.stdout.log /home/git/gitlab-shell/gitlab-shell.log jenkins /var/log/jenkins/jenkins.log jetty /var/log/jetty/out.log /var/log/jetty/ .request.log /var/log/jetty/ .stderrout.log joomla /var/www/joomla/logs/ .log magento /var/www/magento/var/log/exception.log /var/www/magento/var/log/system.log /var/www/magento/var/report/ mediawiki /var/log/mediawiki/ .log memcached For information about Memcached log files, see Monitoring third-party applications: Memcached . mongodb For information about MongoDB log files, see Monitoring third-party applications: MongoDB . mysql For information about MySQL log files, see Monitoring third-party applications: MySQL . nginx For information about nginx log files, see Monitoring third-party applications: nginx . postgres For information about PostgreSQL log files, see Monitoring third-party applications: PostgreSQL . puppet /var/log/puppet/http.log /var/log/puppet/masterhttp.log puppet-enterprise /var/log/pe-activemq/activemq.log /var/log/pe-activemq/wrapper.log /var/log/pe-console-auth/auth.log /var/log/pe-console-auth/cas client.log /var/log/pe-console-auth/cas.log /var/log/pe-httpd/access.log /var/log/pe-httpd/error.log /var/log/pe-httpd/other vhosts access.log /var/log/pe-httpd/puppetdashboard.access.log /var/log/pe-httpd/puppetdashboard.error.log /var/log/pe-httpd/puppetmasteraccess.log /var/log/pe-mcollective/mcollective audit.log /var/log/pe-mcollective/mcollective.log /var/log/pe-puppet-dashboard/certificate manager.log /var/log/pe-puppet-dashboard/event-inspector.log /var/log/pe-puppet-dashboard/failed reports.log /var/log/pe-puppet-dashboard/live-management.log /var/log/pe-puppet-dashboard/mcollective client.log /var/log/pe-puppet-dashboard/production.log /var/log/pe-puppetdb/pe-puppetdb.log /var/log/pe-puppet/masterhttp.log /var/log/pe-puppet/rails.log rabbitmq For information about RabbitMQ log files, see Monitoring third-party applications: RabbitMQ . redis For information about Redis log files, see Monitoring third-party applications: Redis . redmine /var/log/redmine/ .log salt /var/log/salt/key /var/log/salt/master /var/log/salt/minion /var/log/salt/syndic.loc solr For information about Apache Solr log files, see Monitoring third-party applications: Apache Solr . sugarcrm /var/www/ /sugarcrm.log syslog /var/log/syslog /var/log/messages tomcat For information about Apache Tomcat log files, see Monitoring third-party applications: Apache Tomcat . zookeeper For information about Apache ZooKeeper log files, see Monitoring third-party applications: Apache ZooKeeper .
- For more information about the metrics collected, see Metrics ingested by the receivers . logging : receivers : syslog : type : files include paths : - /var/log/messages - /var/log/syslog service : pipelines : default pipeline : receivers : [ syslog ] metrics : receivers : hostmetrics : type : hostmetrics collection interval : 60s processors : metrics filter : type : exclude metrics metrics pattern : [] service : pipelines : default pipeline : receivers : [ hostmetrics ] processors : [ metrics filter ] Windows By default, the Ops Agent collects Windows event logs from System , Application , and Security channels, as well as host metrics, IIS metrics, and SQL Server metrics.
- The entire metrics configuration looks like the following: metrics : service : pipelines : default pipeline : receivers : [] The following example shows the built-in service configuration for Windows: metrics : service : pipelines : default pipeline : receivers : - hostmetrics - iis - mssql processors : - metrics filter The following service configuration customizes log verbosity for the metrics submodule to be debug instead: metrics : service : log level : debug Collection of self logs By default, the Ops Agent's Fluent Bit self logs are sent to Cloud Logging.
- This processor supplies an empty metrics pattern value, so it doesn't exclude any metrics. processors : metrics filter : type : exclude metrics metrics pattern : [] To disable the collection of all process metrics by the Ops Agent, add the following to your config.yaml file: metrics: processors: metrics filter: type: exclude metrics metrics pattern: - agent.googleapis.com/processes/ This excludes process metrics from collection in the metrics filter processor that applies to the default pipeline in the metrics service.

