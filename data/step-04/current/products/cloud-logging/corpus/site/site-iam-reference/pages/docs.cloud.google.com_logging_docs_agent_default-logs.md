---
title: "Default Logging agent logs \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/logging/docs/agent/default-logs
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/logging/docs/access-control
source_metadata:
  url: https://docs.cloud.google.com/logging/docs/agent/default-logs
  title: "Default Logging agent logs \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Observability
Cloud Logging
Guides
Send feedback
Default Logging agent logs
Stay organized with collections
Save and categorize content based on your preferences.
The Logging agent is pre-configured to
send logs from VM instances to Cloud Logging. This page lists the logs that
the Logging agent sends to Cloud Logging
with the default configuration.
You can add your own fluentd configuration
files to
the Logging agent. For more information, see
Configure the Logging agent .
Note: The next major version of the Logging agent (2.0.0) drops
support for several plugins. For more information about this deprecation, refer
to the deprecation guide for third-party integrations .
Linux instances
The following logs are pre-configured in the Logging agent
running on Linux VM instances.
Log ID
Source and configuration files
syslog
Linux syslog
apache-access , apache-error
Apache logs
cassandra , cassandra-output
Cassandra logs
chef-*
Chef logs
gitlab-*
gitlab logs
jenkins
Jenkins logs
jetty-*
Jetty logs
joomla
Joomla logs
magento-*
Magento logs
mediawiki
MediaWiki logs
memcached
memcached logs
mongodb
Mongodb logs
mysql , mysql-slow
MySQL logs
nginx-access , nginx-error
Nginx logs
postgresql
PostgreSQL logs
puppet-*
Puppet Enterprise logs
rabbitmq-*
RabbitMQ logs
redis
Redis logs
redmine
Redmine logs
salt-*
Salt logs
solr
Solr logs
sugarcrm
SugarCRM logs
tomcat , tomcat-localhost_access_log
Tomcat logs
zookeeper , zookeeper-trace
Zookeeper logs
Windows instances
The following logs are pre-configured in the Logging agent
running on Windows VM instances.
Log ID
Description
fluent.info
Logging agent messages
winevt.raw
Windows Event Log
The logs from the agent are named
projects/ [PROJECT_ID] /logs/ [LOG_ID] .
[LOG_ID] is a simple name such as syslog or
redis . There is no service name prefix.
The asterisk ( * ) following some of
the log names means that there can be several logs whose names begin with
the same prefix.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
