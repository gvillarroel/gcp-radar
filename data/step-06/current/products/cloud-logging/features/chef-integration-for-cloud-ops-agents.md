---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T23:59:44.416Z"
product_name: "Cloud Logging"
product_slug: "cloud-logging"
feature_name: "Chef Integration for Cloud Ops Agents"
feature_slug: "chef-integration-for-cloud-ops-agents"
latest_feature_date: "2021-08-18"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/logging/docs/agent/ops-agent/agent-vmem-policies"
  - "https://docs.cloud.google.com/logging/docs/agent/ops-agent/configuration"
  - "https://docs.cloud.google.com/logging/docs/agent/ops-agent/install-index"
keywords:
  - "chef"
  - "integration"
  - "ops"
  - "agents"
  - "can"
  - "install"
  - "manage"
  - "operations"
---

# Chef Integration for Cloud Ops Agents

Product: Cloud Logging
Coverage: MEDIUM

## Step 02 Summary

Chef can install and manage Google Cloud operations suite agents across Linux and Windows virtual machines.

## Extended Definition

Chef can install and manage Google Cloud operations suite agents across Linux and Windows virtual machines.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/logging/docs/agent/ops-agent/agent-vmem-policies](https://docs.cloud.google.com/logging/docs/agent/ops-agent/agent-vmem-policies)
- [https://docs.cloud.google.com/logging/docs/agent/ops-agent/configuration](https://docs.cloud.google.com/logging/docs/agent/ops-agent/configuration)
- [https://docs.cloud.google.com/logging/docs/agent/ops-agent/install-index](https://docs.cloud.google.com/logging/docs/agent/ops-agent/install-index)

## Supporting Pages

### "Install and manage the Ops Agent by using VM Extension Manager policies\

- URL: [https://docs.cloud.google.com/logging/docs/agent/ops-agent/agent-vmem-policies](https://docs.cloud.google.com/logging/docs/agent/ops-agent/agent-vmem-policies)
- Source ID: `site-docs-root-2`
- Final score: 147
- Re-rank relevance: N/A

Evidence snippets:
- If you haven't done so already, install the beta component of the gcloud CLI by running the following command: gcloud components install beta To check if you have the beta component installed, run the following command: gcloud components list If you previously installed the beta component, verify that have the latest version: gcloud components update Uninstall any observability agents Before creating a VM Extension Manager policy to manage the Ops Agent on a VM, ensure that there are no instances of the Ops Agent or the legacy Monitoring agent and Logging agent already on the VM.
- Agents installed by a VM Manager OS Config policy, which includes the following: Ops Agent installed by using the Google Cloud console during VM creation .
- Enter the following query and click Run query : log id("GCEGuestAgentManager") Linux Run the following command on the Compute Engine VM: journalctl -u google-guest-agent-manager Windows Run the following command on the Compute Engine VM: Get-Eventlog -Source google guest agent manager -LogName Application If you see logs containing a string like Failed to install plugin "ops-agent-plugin" ... , or the query returns no logs, then the extension policy failed to install the Ops Agent.
- When you provide a custom configuration for the Ops Agent, VM Extension Manager copies the configuration to the location used by the Ops Agent for user-specified configuration files on the target VM: Linux: /etc/google-cloud-ops-agent/config.yaml Windows: C:\Program Files\Google\Cloud Operations\Ops Agent\config\config.yaml If there is a config.yaml file present on the VM, the extension policy overwrites it.

### Configure the Ops Agent \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/agent/ops-agent/configuration](https://docs.cloud.google.com/logging/docs/agent/ops-agent/configuration)
- Source ID: `site-docs-root-2`
- Final score: 128
- Re-rank relevance: N/A

Evidence snippets:
- Common Linux log files The following table lists common log files for frequently used Linux applications: Application Common log files apache For information about Apache log files, see Monitoring third-party applications: Apache Web Server . cassandra For information about Cassandra log files, see Monitoring third-party applications: Cassandra . chef /var/log/chef-server/bookshelf/current /var/log/chef-server/chef-expander/current /var/log/chef-server/chef-pedant/http-traffic.log /var/log/chef-server/chef-server-webui/current /var/log/chef-server/chef-solr/current /var/log/chef-server/erchef/current /var/log/chef-server/erchef/erchef.log.1 /var/log/chef-server/nginx/access.log /var/log/chef-server/nginx/error.log /var/log/chef-server/nginx/rewrite-port-80.log /var/log/chef-server/postgresql/current gitlab /home/git/gitlab/log/application.log /home/git/gitlab/log/githost.log /home/git/gitlab/log/production.log /home/git/gitlab/log/satellites.log /home/git/gitlab/log/sidekiq.log /home/git/gitlab/log/unicorn.stderr.log /home/git/gitlab/log/unicorn.stdout.log /home/git/gitlab-shell/gitlab-shell.log jenkins /var/log/jenkins/jenkins.log jetty /var/log/jetty/out.log /var/log/jetty/ .request.log /var/log/jetty/ .stderrout.log joomla /var/www/joomla/logs/ .log magento /var/www/magento/var/log/exception.log /var/www/magento/var/log/system.log /var/www/magento/var/report/ mediawiki /var/log/mediawiki/ .log memcached For information about Memcached log files, see Monitoring third-party applications: Memcached . mongodb For information about MongoDB log files, see Monitoring third-party applications: MongoDB . mysql For information about MySQL log files, see Monitoring third-party applications: MySQL . nginx For information about nginx log files, see Monitoring third-party applications: nginx . postgres For information about PostgreSQL log files, see Monitoring third-party applications: PostgreSQL . puppet /var/log/puppet/http.log /var/log/puppet/masterhttp.log puppet-enterprise /var/log/pe-activemq/activemq.log /var/log/pe-activemq/wrapper.log /var/log/pe-console-auth/auth.log /var/log/pe-console-auth/cas client.log /var/log/pe-console-auth/cas.log /var/log/pe-httpd/access.log /var/log/pe-httpd/error.log /var/log/pe-httpd/other vhosts access.log /var/log/pe-httpd/puppetdashboard.access.log /var/log/pe-httpd/puppetdashboard.error.log /var/log/pe-httpd/puppetmasteraccess.log /var/log/pe-mcollective/mcollective audit.log /var/log/pe-mcollective/mcollective.log /var/log/pe-puppet-dashboard/certificate manager.log /var/log/pe-puppet-dashboard/event-inspector.log /var/log/pe-puppet-dashboard/failed reports.log /var/log/pe-puppet-dashboard/live-management.log /var/log/pe-puppet-dashboard/mcollective client.log /var/log/pe-puppet-dashboard/production.log /var/log/pe-puppetdb/pe-puppetdb.log /var/log/pe-puppet/masterhttp.log /var/log/pe-puppet/rails.log rabbitmq For information about RabbitMQ log files, see Monitoring third-party applications: RabbitMQ . redis For information about Redis log files, see Monitoring third-party applications: Redis . redmine /var/log/redmine/ .log salt /var/log/salt/key /var/log/salt/master /var/log/salt/minion /var/log/salt/syndic.loc solr For information about Apache Solr log files, see Monitoring third-party applications: Apache Solr . sugarcrm /var/www/ /sugarcrm.log syslog /var/log/syslog /var/log/messages tomcat For information about Apache Tomcat log files, see Monitoring third-party applications: Apache Tomcat . zookeeper For information about Apache ZooKeeper log files, see Monitoring third-party applications: Apache ZooKeeper .
- Current number of GPU memory bytes used, by state Maximum amount of GPU memory, in bytes, that has been allocated by the process Percentage of time in the process lifetime that one or more kernels has been running on the GPU Percentage of time, since last sample, the GPU has been active interface Linux only Total count of network errors Total count of packets sent over the network Total number of bytes sent over the network memory Memory usage, with label for state (buffered, cached, free, slab, used) Memory usage percent, with label for state (buffered, cached, free, slab, used) network TCP connection count, with labels for port and TCP state swap Swap I/O operations, with label for direction Swap bytes used, with labels for device and state Swap percent used, with labels for device and state pagefile Windows only Current percentage of pagefile used by state processes Processes count, with label for state Processes forked count Per-process disk read I/O, with labels for process name + others Per-process disk write I/O, with labels for process name + others Per-process RSS usage, with labels for process name + others Per-process VM usage, with labels for process name + others About the gpu metrics: The hostmetrics receiver collects metrics reported by the NVIDIA Management Library (NVML) as agent.googleapis.com/gpu metrics.
- You can install or upgrade the NVIDIA GPU driver by using package managers or local installation scripts.
- Group Metric cpu CPU load at 1 minute intervals CPU load at 5 minute intervals CPU load at 15 minute intervals CPU usage, with labels for CPU number and CPU state CPU usage percent, with labels for CPU number and CPU state disk Disk bytes read, with label for device Disk bytes written, with label for device Disk I/O time, with label for device Disk weighted I/O time, with label for device Disk pending operations, with label for device Disk merged operations, with labels for device and direction Disk operations, with labels for device and direction Disk operation time, with labels for device and direction Disk usage, with labels for device and state Disk utilization, with labels for device and state gpu Linux only; see About the gpu metrics for other important information.

### Install the Ops Agent \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/agent/ops-agent/install-index](https://docs.cloud.google.com/logging/docs/agent/ops-agent/install-index)
- Source ID: `site-docs-root-2`
- Final score: 122
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Install the Ops Agent on a fleet of VMs using automation tools Use Ansible, Chef, or Puppet to install and manage agents on your fleet of VMs.
- Install the Ops Agent on a fleet of VMs by using agent policies Use the Google Cloud CLI or Terraform to create an agent policy that installs and manages agents on your fleet of VMs.
- Install and manage the Ops Agent by using VM Extension Manager policies Use VM Extension Manager policies to install and manage the Ops Agent on a fleet of VMs.
- Select an installation method Install the Ops Agent during VM creation Use VM Manager to automatically install the Ops Agent during VM creation.

