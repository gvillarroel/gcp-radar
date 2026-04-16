---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:01:13.921Z"
product_name: "Cloud Monitoring"
product_slug: "cloud-monitoring"
feature_name: "Integrations page for Ops Agent third-party applications"
feature_slug: "integrations-page-for-ops-agent-third-party-applications"
latest_feature_date: "2022-02-07"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/monitoring/agent/ops-agent/configuration"
  - "https://docs.cloud.google.com/monitoring/agent/ops-agent"
  - "https://docs.cloud.google.com/monitoring/agent/integrations"
keywords:
  - "integrations"
  - "page"
  - "ops"
  - "agent"
  - "third"
  - "party"
  - "applications"
  - "console"
---

# Integrations page for Ops Agent third-party applications

Product: Cloud Monitoring
Coverage: MEDIUM

## Step 02 Summary

The Google Cloud console Integrations page lets users configure Ops Agent-supported third-party application integrations and view setup guidance and collected telemetry.

## Extended Definition

The Google Cloud console Integrations page lets users configure Ops Agent-supported third-party application integrations and view setup guidance and collected telemetry.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/monitoring/agent/ops-agent/configuration](https://docs.cloud.google.com/monitoring/agent/ops-agent/configuration)
- [https://docs.cloud.google.com/monitoring/agent/ops-agent](https://docs.cloud.google.com/monitoring/agent/ops-agent)
- [https://docs.cloud.google.com/monitoring/agent/integrations](https://docs.cloud.google.com/monitoring/agent/integrations)

## Supporting Pages

### Configure the Ops Agent \_|\_ Cloud Monitoring \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/agent/ops-agent/configuration](https://docs.cloud.google.com/monitoring/agent/ops-agent/configuration)
- Source ID: `site-iam-reference`
- Final score: 190
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Common Linux log files The following table lists common log files for frequently used Linux applications: Application Common log files apache For information about Apache log files, see Monitoring third-party applications: Apache Web Server . cassandra For information about Cassandra log files, see Monitoring third-party applications: Cassandra . chef /var/log/chef-server/bookshelf/current /var/log/chef-server/chef-expander/current /var/log/chef-server/chef-pedant/http-traffic.log /var/log/chef-server/chef-server-webui/current /var/log/chef-server/chef-solr/current /var/log/chef-server/erchef/current /var/log/chef-server/erchef/erchef.log.1 /var/log/chef-server/nginx/access.log /var/log/chef-server/nginx/error.log /var/log/chef-server/nginx/rewrite-port-80.log /var/log/chef-server/postgresql/current gitlab /home/git/gitlab/log/application.log /home/git/gitlab/log/githost.log /home/git/gitlab/log/production.log /home/git/gitlab/log/satellites.log /home/git/gitlab/log/sidekiq.log /home/git/gitlab/log/unicorn.stderr.log /home/git/gitlab/log/unicorn.stdout.log /home/git/gitlab-shell/gitlab-shell.log jenkins /var/log/jenkins/jenkins.log jetty /var/log/jetty/out.log /var/log/jetty/ .request.log /var/log/jetty/ .stderrout.log joomla /var/www/joomla/logs/ .log magento /var/www/magento/var/log/exception.log /var/www/magento/var/log/system.log /var/www/magento/var/report/ mediawiki /var/log/mediawiki/ .log memcached For information about Memcached log files, see Monitoring third-party applications: Memcached . mongodb For information about MongoDB log files, see Monitoring third-party applications: MongoDB . mysql For information about MySQL log files, see Monitoring third-party applications: MySQL . nginx For information about nginx log files, see Monitoring third-party applications: nginx . postgres For information about PostgreSQL log files, see Monitoring third-party applications: PostgreSQL . puppet /var/log/puppet/http.log /var/log/puppet/masterhttp.log puppet-enterprise /var/log/pe-activemq/activemq.log /var/log/pe-activemq/wrapper.log /var/log/pe-console-auth/auth.log /var/log/pe-console-auth/cas client.log /var/log/pe-console-auth/cas.log /var/log/pe-httpd/access.log /var/log/pe-httpd/error.log /var/log/pe-httpd/other vhosts access.log /var/log/pe-httpd/puppetdashboard.access.log /var/log/pe-httpd/puppetdashboard.error.log /var/log/pe-httpd/puppetmasteraccess.log /var/log/pe-mcollective/mcollective audit.log /var/log/pe-mcollective/mcollective.log /var/log/pe-puppet-dashboard/certificate manager.log /var/log/pe-puppet-dashboard/event-inspector.log /var/log/pe-puppet-dashboard/failed reports.log /var/log/pe-puppet-dashboard/live-management.log /var/log/pe-puppet-dashboard/mcollective client.log /var/log/pe-puppet-dashboard/production.log /var/log/pe-puppetdb/pe-puppetdb.log /var/log/pe-puppet/masterhttp.log /var/log/pe-puppet/rails.log rabbitmq For information about RabbitMQ log files, see Monitoring third-party applications: RabbitMQ . redis For information about Redis log files, see Monitoring third-party applications: Redis . redmine /var/log/redmine/ .log salt /var/log/salt/key /var/log/salt/master /var/log/salt/minion /var/log/salt/syndic.loc solr For information about Apache Solr log files, see Monitoring third-party applications: Apache Solr . sugarcrm /var/www/ /sugarcrm.log syslog /var/log/syslog /var/log/messages tomcat For information about Apache Tomcat log files, see Monitoring third-party applications: Apache Tomcat . zookeeper For information about Apache ZooKeeper log files, see Monitoring third-party applications: Apache ZooKeeper .
- See Monitor third-party applications for the list of supported applications.
- Collect metrics and logs from supported third-party applications.
- Written only by receivers from third-party integrations.

### Ops Agent overview \_|\_ Cloud Monitoring \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/agent/ops-agent](https://docs.cloud.google.com/monitoring/agent/ops-agent)
- Source ID: `site-iam-reference`
- Final score: 188
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Metrics collected include: cpu metrics disk metrics iis metrics (Windows only) interface metrics gpu metrics (Linux only) memory metrics mssql metrics (Windows only) pagefile metrics (Windows only) swap metrics network metrics processes metrics agent self metrics : Third-party application support Curated integrations for third-party application metrics , which collect common app metrics and offer sample dashboards and alert policies.
- Third-party application support Curated third-party application log integration that recognizes common app log file paths and formats.
- See detailed metrics definition and whether they are Linux only in the agent metrics page.
- Rocky Linux 8 Rocky Linux 9 Rocky Linux 10 RHEL 8: rhel-8, rhel-8-6-sap-ha, rhel-8-8-sap-ha, rhel-8-10-sap-ha RHEL 9: rhel-9 RHEL 10: rhel-10 CentOS Stream 10 Debian 11 (Bullseye) Debian 12 (Bookworm) Debian 13 (Trixie) Deep Learning VM Images based on Debian 11 (Bullseye) Ubuntu 22.04 LTS (Jammy Jellyfish): ubuntu-2204-lts, ubuntu-minimal-2204-lts Ubuntu 24.04 LTS (Noble Numbat): ubuntu-2404-lts-amd64, ubuntu-minimal-2404-lts-amd64 Ubuntu 25.10 (Questing Quokka): ubuntu-2510-amd64, ubuntu-minimal-2510-amd64 SLES 12: sles-12, sles-12-sp5-sap SLES 15: sles-15, sles-15-sp3-sap, sles-15-sp4-sap, sles-15-sp5-sap, sles-15-sp6-sap Support for Compute Engine Arm VMs The Ops Agent supports Compute Engine C4A and Tau T2A Arm VM instances.

### Manage integrations \_|\_ Cloud Monitoring \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/agent/integrations](https://docs.cloud.google.com/monitoring/agent/integrations)
- Source ID: `site-iam-reference`
- Final score: 186
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This document describes the Cloud Monitoring Integrations page, a central location from which you can manage and review the status of Monitoring integrations with Google services and with your third-party applications.
- To limit the list of integrations by the type of application, click one of the following options: 3rd party services : shows all third-party services that have integrations with the Ops Agent or Managed Service for Prometheus.
- You can configure these third-party integrations from the Integrations page and see the kinds of telemetry each integration provides.
- Cloud Monitoring also provides integrations with third-party applications.

