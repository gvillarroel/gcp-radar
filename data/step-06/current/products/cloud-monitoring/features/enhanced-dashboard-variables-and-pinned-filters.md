---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:01:13.800Z"
product_name: "Cloud Monitoring"
product_slug: "cloud-monitoring"
feature_name: "Enhanced dashboard variables and pinned filters"
feature_slug: "enhanced-dashboard-variables-and-pinned-filters"
latest_feature_date: "2024-10-28"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/monitoring/docs/application-monitoring"
  - "https://docs.cloud.google.com/monitoring/agent/ops-agent/agent-vmem-policies"
  - "https://docs.cloud.google.com/monitoring/agent/ops-agent/configuration"
keywords:
  - "enhanced"
  - "dashboard"
  - "variables"
  - "pinned"
  - "filters"
  - "level"
  - "filtering"
  - "supports"
---

# Enhanced dashboard variables and pinned filters

Product: Cloud Monitoring
Coverage: MEDIUM

## Step 02 Summary

Dashboard-level filtering supports multi-value defaults, multi-select behavior, value-only variables, and SQL-generated variable values.

## Extended Definition

Dashboard-level filtering supports multi-value defaults, multi-select behavior, value-only variables, and SQL-generated variable values.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/monitoring/docs/application-monitoring](https://docs.cloud.google.com/monitoring/docs/application-monitoring)
- [https://docs.cloud.google.com/monitoring/agent/ops-agent/agent-vmem-policies](https://docs.cloud.google.com/monitoring/agent/ops-agent/agent-vmem-policies)
- [https://docs.cloud.google.com/monitoring/agent/ops-agent/configuration](https://docs.cloud.google.com/monitoring/agent/ops-agent/configuration)

## Supporting Pages

### View application telemetry \_|\_ Cloud Monitoring \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/docs/application-monitoring](https://docs.cloud.google.com/monitoring/docs/application-monitoring)
- Source ID: `site-docs-reference-2`
- Final score: 106
- Re-rank relevance: N/A

Evidence snippets:
- The logging query includes any applicable variables , but it doesn't include dashboard-level filters.
- Those filters are applied at the dashboard level and can't be removed.
- Only spans that satisfy the dashboard-level filters are shown.
- For trace data, the application-level dashboard groups spans by their name and by the service or workload name, and then displays the following information in a tabular format: Span name.

### "Install and manage the Ops Agent by using VM Extension Manager policies\

- URL: [https://docs.cloud.google.com/monitoring/agent/ops-agent/agent-vmem-policies](https://docs.cloud.google.com/monitoring/agent/ops-agent/agent-vmem-policies)
- Source ID: `site-iam-reference`
- Final score: 74
- Re-rank relevance: N/A

Evidence snippets:
- For example, suppose you created and rolled out a global policy by using the following command: gcloud beta compute global-vm-extension-policies create POLICY NAME \ --project= PROJECT ID \ --extensions=ops-agent \ --version=ops-agent=2.61.0 \ --rollout-predefined-plan=slow rollout \ --config-from-file=ops-agent="/usr/ops-agent-config.yaml" To extend the policy to VMs created in previously unused zones, restart the rollout by using the following command: gcloud beta compute global-vm-extension-policies update test-policy POLICY NAME \ --project= PROJECT ID \ --extensions=ops-agent \ --version=ops-agent=2.61.0 \ --rollout-predefined-plan=slow rollout \ --config-from-file=ops-agent="/usr/ops-agent-config.yaml" \ --rollout-retry-uuid= UUID Replace the following variables in the command: POLICY NAME : A name for the VM extension policy.
- Install the Ops Agent with a fast rollout plan at higher priority (global only) To create a global policy that installs the latest version of the Ops Agent on by using a higher-than-default priority and the fast-rollout plan , use the following gcloud beta compute global-vm-extension-policies create command: gcloud beta compute global-vm-extension-policies create POLICY NAME \ --project= PROJECT ID \ --extensions=ops-agent \ --rollout-predefined-plan=fast rollout \ --priority=500 Replace the following variables in the command: POLICY NAME : A name for the VM extension policy.
- To update an extension policy that uses a custom rollout plan, use the following gcloud beta compute global-vm-extension-policies update command: gcloud beta compute global-vm-extension-policies update POLICY NAME \ --project= PROJECT ID \ --extensions=ops-agent \ --rollout-custom-plan=projects/ PROJECT ID /locations/global/rolloutPlans/ NEW CUSTOM PLAN NAME \ --rollout-retry-uuid= UUID Replace the following variables in the command: POLICY NAME : A name for the VM extension policy.
- Global Use the --inclusion-labels option to the gcloud beta compute global-vm-extension-policies create command to specify a comma-separated list of key-value pairs: gcloud beta compute global-vm-extension-policies create POLICY NAME \ --project= PROJECT ID \ --extensions=ops-agent \ --rollout-predefined-plan=slow rollout \ --inclusion-labels= KEY1 = VALUE1 , KEY2 = VALUE2 Replace the following variables in the command: POLICY NAME : A name for the VM extension policy.

### Configure the Ops Agent \_|\_ Cloud Monitoring \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/agent/ops-agent/configuration](https://docs.cloud.google.com/monitoring/agent/ops-agent/configuration)
- Source ID: `site-iam-reference`
- Final score: 63
- Re-rank relevance: N/A

Evidence snippets:
- Common Linux log files The following table lists common log files for frequently used Linux applications: Application Common log files apache For information about Apache log files, see Monitoring third-party applications: Apache Web Server . cassandra For information about Cassandra log files, see Monitoring third-party applications: Cassandra . chef /var/log/chef-server/bookshelf/current /var/log/chef-server/chef-expander/current /var/log/chef-server/chef-pedant/http-traffic.log /var/log/chef-server/chef-server-webui/current /var/log/chef-server/chef-solr/current /var/log/chef-server/erchef/current /var/log/chef-server/erchef/erchef.log.1 /var/log/chef-server/nginx/access.log /var/log/chef-server/nginx/error.log /var/log/chef-server/nginx/rewrite-port-80.log /var/log/chef-server/postgresql/current gitlab /home/git/gitlab/log/application.log /home/git/gitlab/log/githost.log /home/git/gitlab/log/production.log /home/git/gitlab/log/satellites.log /home/git/gitlab/log/sidekiq.log /home/git/gitlab/log/unicorn.stderr.log /home/git/gitlab/log/unicorn.stdout.log /home/git/gitlab-shell/gitlab-shell.log jenkins /var/log/jenkins/jenkins.log jetty /var/log/jetty/out.log /var/log/jetty/ .request.log /var/log/jetty/ .stderrout.log joomla /var/www/joomla/logs/ .log magento /var/www/magento/var/log/exception.log /var/www/magento/var/log/system.log /var/www/magento/var/report/ mediawiki /var/log/mediawiki/ .log memcached For information about Memcached log files, see Monitoring third-party applications: Memcached . mongodb For information about MongoDB log files, see Monitoring third-party applications: MongoDB . mysql For information about MySQL log files, see Monitoring third-party applications: MySQL . nginx For information about nginx log files, see Monitoring third-party applications: nginx . postgres For information about PostgreSQL log files, see Monitoring third-party applications: PostgreSQL . puppet /var/log/puppet/http.log /var/log/puppet/masterhttp.log puppet-enterprise /var/log/pe-activemq/activemq.log /var/log/pe-activemq/wrapper.log /var/log/pe-console-auth/auth.log /var/log/pe-console-auth/cas client.log /var/log/pe-console-auth/cas.log /var/log/pe-httpd/access.log /var/log/pe-httpd/error.log /var/log/pe-httpd/other vhosts access.log /var/log/pe-httpd/puppetdashboard.access.log /var/log/pe-httpd/puppetdashboard.error.log /var/log/pe-httpd/puppetmasteraccess.log /var/log/pe-mcollective/mcollective audit.log /var/log/pe-mcollective/mcollective.log /var/log/pe-puppet-dashboard/certificate manager.log /var/log/pe-puppet-dashboard/event-inspector.log /var/log/pe-puppet-dashboard/failed reports.log /var/log/pe-puppet-dashboard/live-management.log /var/log/pe-puppet-dashboard/mcollective client.log /var/log/pe-puppet-dashboard/production.log /var/log/pe-puppetdb/pe-puppetdb.log /var/log/pe-puppet/masterhttp.log /var/log/pe-puppet/rails.log rabbitmq For information about RabbitMQ log files, see Monitoring third-party applications: RabbitMQ . redis For information about Redis log files, see Monitoring third-party applications: Redis . redmine /var/log/redmine/ .log salt /var/log/salt/key /var/log/salt/master /var/log/salt/minion /var/log/salt/syndic.loc solr For information about Apache Solr log files, see Monitoring third-party applications: Apache Solr . sugarcrm /var/www/ /sugarcrm.log syslog /var/log/syslog /var/log/messages tomcat For information about Apache Tomcat log files, see Monitoring third-party applications: Apache Tomcat . zookeeper For information about Apache ZooKeeper log files, see Monitoring third-party applications: Apache ZooKeeper .
- When the Ops Agent receives external structured log data, it places top-level fields into the LogEntry 's jsonPayload field unless the field name is listed in the following table: Record field LogEntry field Option 1 "timestamp": { "seconds": CURRENT SECONDS, "nanos": CURRENT NANOS, } Option 2 { "timestampSeconds": CURRENT SECONDS, "timestampNanos": CURRENT NANOS, } timestamp receiver id (not a record field) logName logging.googleapis.com/httpRequest ( HttpRequest ) httpRequest logging.googleapis.com/severity ( string ) severity logging.googleapis.com/labels ( struct of string:string ) labels logging.googleapis.com/operation ( struct ) operation logging.googleapis.com/sourceLocation ( struct ) sourceLocation logging.googleapis.com/trace ( string ) trace logging.googleapis.com/spanId ( string ) spanId Any remaining structured record fields remain part of the jsonPayload structure.
- The entire metrics configuration looks like the following: metrics : service : pipelines : default pipeline : receivers : [] The following example shows the built-in service configuration for Windows: metrics : service : pipelines : default pipeline : receivers : - hostmetrics - iis - mssql processors : - metrics filter The following service configuration customizes log verbosity for the metrics submodule to be debug instead: metrics : service : log level : debug Collection of self logs By default, the Ops Agent's Fluent Bit self logs are sent to Cloud Logging.
- Configuration structure type : modify fields fields : < destination field > : Source move from : < source field > copy from : < source field > static value : < string > Mutation default value : < string > map values : < old value > : < new value > type : { integer float } omit if : < filter > The top-level configuration for this processor contains a single field, fields , which contains a map of output field names and corresponding translations.

