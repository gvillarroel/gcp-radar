---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T22:55:18.128Z"
product_name: "Cloud Monitoring"
product_slug: "cloud-monitoring"
feature_name: "Dashboard JSON editor"
feature_slug: "dashboard-json-editor"
latest_feature_date: "2021-06-01"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/monitoring/agent/ops-agent/prometheus"
  - "https://docs.cloud.google.com/monitoring/docs/release-notes"
  - "https://docs.cloud.google.com/monitoring/agent/ops-agent/configuration"
keywords:
  - "dashboard"
  - "json"
  - "editor"
  - "the"
  - "page"
  - "includes"
  - "for"
  - "editing"
---

# Dashboard JSON editor

Product: Cloud Monitoring
Coverage: LOW

## Step 02 Summary

The dashboard page includes a JSON editor for editing, downloading, and uploading dashboard definitions.

## Extended Definition

The dashboard page includes a JSON editor for editing, downloading, and uploading dashboard definitions.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/monitoring/agent/ops-agent/prometheus](https://docs.cloud.google.com/monitoring/agent/ops-agent/prometheus)
- [https://docs.cloud.google.com/monitoring/docs/release-notes](https://docs.cloud.google.com/monitoring/docs/release-notes)
- [https://docs.cloud.google.com/monitoring/agent/ops-agent/configuration](https://docs.cloud.google.com/monitoring/agent/ops-agent/configuration)

## Supporting Pages

### Collect Prometheus metrics \_|\_ Cloud Monitoring \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/agent/ops-agent/prometheus](https://docs.cloud.google.com/monitoring/agent/ops-agent/prometheus)
- Source ID: `site-iam-reference`
- Final score: 146
- Re-rank relevance: N/A

Evidence snippets:
- Enter the following query into the editor, and then click Run query : up If your data is being ingested, then you see a chart like the following: If you are running the JSON Exporter example , then you can also issue queries like the following: Query all data for a specific exported metric by name, for example: example value count The following shows a chart for the example value count , including labels defined by the JSON Exporter application and labels added by the Ops Agent: Query data for an exported metric that originated in a specific namespace.
- This section also includes a modified version of the receiver for the JSON Exporter example that uses the relabeling options.
- Add the staticLabel label with the value "A static value" to all ingested metrics. metrics: receivers: prometheus: type: prometheus config: scrape configs: - job name: 'json exporter' scrape interval: 10s metrics path: /probe params: module: [default] target: [http://localhost:8000/examples/data.json] static configs: - targets: ['localhost:7979'] relabel configs: - source labels: [ meta gce zone] regex: '(.+)' replacement: '${1}' target label: zone metric relabel configs: - source labels: [ name ] regex: 'example global value' action: drop - source labels: [ address ] action: replace replacement: 'A static value' target label: staticLabel Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- For the JSON Exporter example, use the following procedure: Edit the Ops Agent configuration file, /etc/google-cloud-ops-agent/config.yaml , and add the following Prometheus receiver and pipeline entries: metrics: receivers: prometheus: type: prometheus config: scrape configs: - job name: 'json exporter' scrape interval: 10s metrics path: /probe params: module: [default] target: [http://localhost:8000/examples/data.json] static configs: - targets: ['localhost:7979'] service: pipelines: prometheus pipeline: receivers: - prometheus If you have other configuration entries in this file already, add the Prometheus receiver and pipeline to the existing metrics and service entries.

### Monitoring release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/docs/release-notes](https://docs.cloud.google.com/monitoring/docs/release-notes)
- Source ID: `site-docs-reference`
- Final score: 144
- Re-rank relevance: N/A

Evidence snippets:
- June 01, 2021 Feature A JSON editor has been integrated with the dashboard page.
- For more information, see the following documents: Display the most recent data in tabular form API Example: Dashboard with a TimeSeriesTable widget September 06, 2024 Feature The Metrics management page in Cloud Monitoring now shows you the sources of metric reads and lets you exclude unneeded metrics entirely, eliminating the cost of ingesting them.
- For more information, see the following documents: Create and manage variables and pinned filters Configure dashboard filters and variables by using the API February 04, 2025 Feature When you create a snooze from the Incident details page, you can now apply the snooze to other incidents that have one or more of the same resource labels.
- For more information about filtering your dashboard, see the following documents: Add temporary filters Add and mange permanent filters and variables September 23, 2024 Change The layout of the incident detail page has been updated.

### Configure the Ops Agent \_|\_ Cloud Monitoring \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/agent/ops-agent/configuration](https://docs.cloud.google.com/monitoring/agent/ops-agent/configuration)
- Source ID: `site-iam-reference`
- Final score: 124
- Re-rank relevance: N/A

Evidence snippets:
- Common Linux log files The following table lists common log files for frequently used Linux applications: Application Common log files apache For information about Apache log files, see Monitoring third-party applications: Apache Web Server . cassandra For information about Cassandra log files, see Monitoring third-party applications: Cassandra . chef /var/log/chef-server/bookshelf/current /var/log/chef-server/chef-expander/current /var/log/chef-server/chef-pedant/http-traffic.log /var/log/chef-server/chef-server-webui/current /var/log/chef-server/chef-solr/current /var/log/chef-server/erchef/current /var/log/chef-server/erchef/erchef.log.1 /var/log/chef-server/nginx/access.log /var/log/chef-server/nginx/error.log /var/log/chef-server/nginx/rewrite-port-80.log /var/log/chef-server/postgresql/current gitlab /home/git/gitlab/log/application.log /home/git/gitlab/log/githost.log /home/git/gitlab/log/production.log /home/git/gitlab/log/satellites.log /home/git/gitlab/log/sidekiq.log /home/git/gitlab/log/unicorn.stderr.log /home/git/gitlab/log/unicorn.stdout.log /home/git/gitlab-shell/gitlab-shell.log jenkins /var/log/jenkins/jenkins.log jetty /var/log/jetty/out.log /var/log/jetty/ .request.log /var/log/jetty/ .stderrout.log joomla /var/www/joomla/logs/ .log magento /var/www/magento/var/log/exception.log /var/www/magento/var/log/system.log /var/www/magento/var/report/ mediawiki /var/log/mediawiki/ .log memcached For information about Memcached log files, see Monitoring third-party applications: Memcached . mongodb For information about MongoDB log files, see Monitoring third-party applications: MongoDB . mysql For information about MySQL log files, see Monitoring third-party applications: MySQL . nginx For information about nginx log files, see Monitoring third-party applications: nginx . postgres For information about PostgreSQL log files, see Monitoring third-party applications: PostgreSQL . puppet /var/log/puppet/http.log /var/log/puppet/masterhttp.log puppet-enterprise /var/log/pe-activemq/activemq.log /var/log/pe-activemq/wrapper.log /var/log/pe-console-auth/auth.log /var/log/pe-console-auth/cas client.log /var/log/pe-console-auth/cas.log /var/log/pe-httpd/access.log /var/log/pe-httpd/error.log /var/log/pe-httpd/other vhosts access.log /var/log/pe-httpd/puppetdashboard.access.log /var/log/pe-httpd/puppetdashboard.error.log /var/log/pe-httpd/puppetmasteraccess.log /var/log/pe-mcollective/mcollective audit.log /var/log/pe-mcollective/mcollective.log /var/log/pe-puppet-dashboard/certificate manager.log /var/log/pe-puppet-dashboard/event-inspector.log /var/log/pe-puppet-dashboard/failed reports.log /var/log/pe-puppet-dashboard/live-management.log /var/log/pe-puppet-dashboard/mcollective client.log /var/log/pe-puppet-dashboard/production.log /var/log/pe-puppetdb/pe-puppetdb.log /var/log/pe-puppet/masterhttp.log /var/log/pe-puppet/rails.log rabbitmq For information about RabbitMQ log files, see Monitoring third-party applications: RabbitMQ . redis For information about Redis log files, see Monitoring third-party applications: Redis . redmine /var/log/redmine/ .log salt /var/log/salt/key /var/log/salt/master /var/log/salt/minion /var/log/salt/syndic.loc solr For information about Apache Solr log files, see Monitoring third-party applications: Apache Solr . sugarcrm /var/www/ /sugarcrm.log syslog /var/log/syslog /var/log/messages tomcat For information about Apache Tomcat log files, see Monitoring third-party applications: Apache Tomcat . zookeeper For information about Apache ZooKeeper log files, see Monitoring third-party applications: Apache ZooKeeper .
- Current number of GPU memory bytes used, by state Maximum amount of GPU memory, in bytes, that has been allocated by the process Percentage of time in the process lifetime that one or more kernels has been running on the GPU Percentage of time, since last sample, the GPU has been active interface Linux only Total count of network errors Total count of packets sent over the network Total number of bytes sent over the network memory Memory usage, with label for state (buffered, cached, free, slab, used) Memory usage percent, with label for state (buffered, cached, free, slab, used) network TCP connection count, with labels for port and TCP state swap Swap I/O operations, with label for direction Swap bytes used, with labels for device and state Swap percent used, with labels for device and state pagefile Windows only Current percentage of pagefile used by state processes Processes count, with label for state Processes forked count Per-process disk read I/O, with labels for process name + others Per-process disk write I/O, with labels for process name + others Per-process RSS usage, with labels for process name + others Per-process VM usage, with labels for process name + others About the gpu metrics: The hostmetrics receiver collects metrics reported by the NVIDIA Management Library (NVML) as agent.googleapis.com/gpu metrics.
- This can be used to remove placeholder values, such as: httpRequest.referer : move from : jsonPayload.referer omit if : httpRequest.referer = "-" Sample Configurations The parse json processor would transform a JSON file containing { "http status" : "400" , "path" : "/index.html" , "referer" : "-" } into a LogEntry structure that looks like this: { "jsonPayload" : { "http status" : "400" , "path" : "/index.html" , "referer" : "-" } } This could then be transformed with modify fields into this LogEntry : { "httpRequest" : { "status" : 400 , "requestUrl" : "/index.html" , } } by using this Ops Agent configuration: logging : receivers : in : type : files include paths : - /var/log/http.json processors : parse json : type : parse json set http request : type : modify fields fields : httpRequest.status : move from : jsonPayload.http status type : integer httpRequest.requestUrl : move from : jsonPayload.path httpRequest.referer : move from : jsonPayload.referer omit if : jsonPayload.referer = "-" service : pipelines : pipeline : receivers : [ in ] processors : [ parse json , set http request ] This configuration reads JSON-formatted logs from /var/log/http.json and populates part of the httpRequest structure from fields in the logs.
- 27 common frames omitted The agent ingests each line from the log file into Cloud Logging in the following format: { "insertId": "...", "jsonPayload": { "line": "16", "message": "javax.servlet.ServletException: Something bad happened\n at com.example.myproject.OpenSessionInViewFilter.doFilter(OpenSessionInViewFilter.java:60)\n at org.mortbay.jetty.servlet.ServletHandler$CachedChain.doFilter(ServletHandler.java:1157)\n at com.example.myproject.ExceptionHandlerFilter.doFilter(ExceptionHandlerFilter.java:28)\n at org.mortbay.jetty.servlet.ServletHandler$CachedChain.doFilter(ServletHandler.java:1157)\n at com.example.myproject.OutputBufferFilter.doFilter(OutputBufferFilter.java:33)\nCaused by: com.example.myproject.MyProjectServletException\n at com.example.myproject.MyServlet.doPost(MyServlet.java:169)\n at javax.servlet.http.HttpServlet.service(HttpServlet.java:727)\n at javax.servlet.http.HttpServlet.service(HttpServlet.java:820)\n at org.mortbay.jetty.servlet.ServletHolder.handle(ServletHolder.java:511)\n at org.mortbay.jetty.servlet.ServletHandler$CachedChain.doFilter(ServletHandler.java:1166)\n at com.example.myproject.OpenSessionInViewFilter.doFilter(OpenSessionInViewFilter.java:30)\n ...

