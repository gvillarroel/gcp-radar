---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:21:10.812Z"
product_name: "Migrate to Containers"
product_slug: "migrate-to-containers"
feature_name: "Tomcat application refactoring to containers"
feature_slug: "tomcat-application-refactoring-to-containers"
latest_feature_date: "2022-09-20"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/tomcat/tomcat-customizing-a-migration-plan"
  - "https://docs.cloud.google.com/migrate/containers/docs/configuring-cloud-logging"
  - "https://docs.cloud.google.com/migrate/containers/docs/planning-best-practices"
keywords:
  - "tomcat"
  - "application"
  - "refactoring"
  - "containers"
  - "applications"
  - "can"
  - "refactored"
  - "into"
---

# Tomcat application refactoring to containers

Product: Migrate to Containers
Coverage: MEDIUM

## Step 02 Summary

Tomcat applications can be refactored into containers and deployed on GKE, GKE Autopilot, Anthos clusters, and Cloud Run.

## Extended Definition

Tomcat applications can be refactored into containers and deployed on GKE, GKE Autopilot, Anthos clusters, and Cloud Run.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/tomcat/tomcat-customizing-a-migration-plan](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/tomcat/tomcat-customizing-a-migration-plan)
- [https://docs.cloud.google.com/migrate/containers/docs/configuring-cloud-logging](https://docs.cloud.google.com/migrate/containers/docs/configuring-cloud-logging)
- [https://docs.cloud.google.com/migrate/containers/docs/planning-best-practices](https://docs.cloud.google.com/migrate/containers/docs/planning-best-practices)

## Supporting Pages

### "Customize migration plan for Tomcat servers \_|\_ Migrate to Containers\

- URL: [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/tomcat/tomcat-customizing-a-migration-plan](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/tomcat/tomcat-customizing-a-migration-plan)
- Source ID: `site-docs-reference`
- Final score: 122
- Re-rank relevance: N/A

Evidence snippets:
- Edit the user and group directly in your migration plan: tomcatServers : - name : latest . . . images : - name : tomcat-latest . . . userName : USERNAME groupName : GROUP NAME Replace the following: USERNAME : the username that you want to use GROUP NAME : the group name that you want to use Configure SSL When you create a new Tomcat migration, a discovery process scans the server against the different applications that are discovered.
- Memory allocation During the migration process, you can specify the memory limits of applications migrated to individual containers.
- To see the value of Xmx , run the following command: ps aux grep catalina If memory limits have been defined in your migration plan, the Dockerfile that was generated alongside other artifacts after a successful migration reflects your declaration: FROM tomcat : 8.5 - jdk11 - openjdk Add JVM environment variables for tomcat ENV CATALINA OPTS = "${CATALINA OPTS} -XX:MaxRAMPercentage=50.0 -XX:InitialRAMPercentage=50.0 -XX:+UseContainerSupport <additional variables>" This defines the initial and maximum size to be 50% of limit value.
- To run a functional containerized Tomcat application, choose one of the following configuration changes to the reverse proxy configuration: Disable proxy configuration: If the migrated application no longer runs behind a reverse proxy, you can disable proxy configuration by removing proxyName and proxyPort from the connector configuration.

### Planning best practices \_|\_ Migrate to Containers \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/migrate/containers/docs/planning-best-practices](https://docs.cloud.google.com/migrate/containers/docs/planning-best-practices)
- Source ID: `site-docs-root-2`
- Final score: 90
- Re-rank relevance: N/A

Evidence snippets:
- Good fit Linux Linux applications that are a good fit for migration using Migrate to Containers include the following application architectures: Web/Application Servers Business logic Middleware (for example, Tomcat) Multi-VM, multi-tier stacks (for example, LAMP) Small/Medium sized Databases (for example, MySQL and PostgreSQL) In addition, applications best suited for migration with Migrate to Containers have the following operational characteristics: Low duty-cycle & bursty workloads Development, testing and training lab environments Always-on, low load services In general, most Linux workloads are compatible with migration, except for those workloads explicitly listed below under Not a good fit .
- Not a good fit Linux For Linux, applications and servers that are not a good fit for migration with Migrate to Containers include: High performance and large in-memory databases VMs with special kernel drivers (for example, kernel-mode NFS) Dependencies on specific hardware Software with licenses tied to certain hardware ID registration Windows For Windows, workloads without IIS 7 or higher installed are not a fit for migration.
- Windows Windows applications that are a good fit for migration using Migrate to Containers include workloads that meet all following characteristics: IIS 7 or later, ASP.NET with .NET Framework 3.5 or later Web and logic tiers WS2008 R2 or higher Operating system support Migrate to Containers is compatible with these VM operating systems .
- Planning best practices This topic offers advice for application migrations to Google Kubernetes Engine (GKE) or GKE Enterprise , based on migrations of real applications that have been performed with Migrate to Containers.

### "Configure logging to Cloud Logging \_|\_ Migrate to Containers \_|\_ Google\

- URL: [https://docs.cloud.google.com/migrate/containers/docs/configuring-cloud-logging](https://docs.cloud.google.com/migrate/containers/docs/configuring-cloud-logging)
- Source ID: `site-docs-reference`
- Final score: 84
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Forward application logs to Cloud Logging In order to log to Cloud Logging from applications on VMs migrated with Migrate to Containers, you must have the following in place: Create a ConfigMap on your target workload cluster that specifies a list of the file system log files whose entries should be written to Cloud Logging.
- A log sub-element consists of the following structure: label : - path - with - simple - wildcards For example: tomcat : - /var/log/tomcat /catalina.out - /var/log/tomcat /localhost. .log Reference ConfigMap for common apps apiVersion : v1 kind : ConfigMap metadata : creationTimestamp : null name : < ConfigMap name > data : logs.yaml : logs: mysql: - /var/log/mysql.log - /var/log/mysql/mysql.log mongodb: - /var/log/mongodb/ .log memcached: - /var/log/memcached.log redis: - /var/log/redis .log - /var/log/redis/ .log rabbitmq-startup: - /var/log/rabbitmq/startup log rabbitmq-startup err: - /var/log/rabbitmq/startup err rabbitmq-sasl: - /var/log/rabbitmq/ -sasl.log sugarcrm: - /var/www/ /sugarcrm.log tomcat-localhost access log: - /var/log/tomcat /localhost access log .txt tomcat: - /var/log/tomcat /catalina.out - /var/log/tomcat /localhost. .log apache-access: - /var/log/apache /access.log - /var/log/apache /access log - /var/log/httpd/access.log - /var/log/httpd/access log apache-error: - /var/log/apache /error.log - /var/log/apache /error log - /var/log/httpd/error.log - /var/log/httpd/error log cassandra: - /var/log/cassandra/system.log - /var/log/cassandra/cassandra.log - /var/log/cassandra/output.log chef-bookshelf: - /var/log/chef-server/bookshelf/current chef-expander: - /var/log/chef-server/chef-expander/current chef-pedant-http-traffic: - /var/log/chef-server/chef-pedant/http-traffic.log chef-server-webui: - /var/log/chef-server/chef-server-webui/current chef-solr: - /var/log/chef-server/chef-solr/current chef-erchef-current: - /var/log/chef-server/erchef/current chef-erchef: - /var/log/chef-server/erchef/erchef.log.1 chef-nginx-access: - /var/log/chef-server/nginx/access.log chef-nginx-error: - /var/log/chef-server/nginx/error.log chef-nginx-rewrite-port-80: - /var/log/chef-server/nginx/rewrite-port-80.log chef-postgresql: - /var/log/chef-server/postgresql/current chef-rabbitmq: - /var/log/chef-server/rabbitmq/current postgresql: - /var/log/postgres / .log - /var/log/pgsql/ .log puppet-access: - /var/log/pe-httpd/access.log puppet-puppetmasteraccess: - /var/log/pe-httpd/puppetmasteraccess.log puppet-activemq: - /var/log/pe-activemq/activemq.log puppet-activemq-wrapper: - /var/log/pe-activemq/wrapper.log puppet-mcollective: - /var/log/pe-mcollective/mcollective.log puppet-mcollective-audit: - /var/log/pe-mcollective/mcollective audit.log puppet-puppetdb: - /var/log/pe-puppetdb/pe-puppetdb.log puppet-dashboard-error: - /var/log/pe-httpd/puppetdashboard.error.log puppet-dashboard-mcollective-client: - /var/log/pe-puppet-dashboard/mcollective client.log puppet-dashboard-production: - /var/log/pe-puppet-dashboard/production.log puppet-dashboard-event-inspector: - /var/log/pe-puppet-dashboard/event-inspector.log puppet-dashboard-certificate-manager: - /var/log/pe-puppet-dashboard/certificate manager.log puppet-dashboard-live-management: - /var/log/pe-puppet-dashboard/live-management.log puppet-console-cas-client: - /var/log/pe-console-auth/cas client.log puppet-console-auth-cas: - /var/log/pe-console-auth/cas.log puppet-console-auth: - /var/log/pe-console-auth/auth.log puppet-dashboard-access: - /var/log/pe-httpd/puppetdashboard.access.log puppet-dashboard-failed-reports: - /var/log/pe-puppet-dashboard/failed reports.log puppet-error: - /var/log/pe-httpd/error.log puppet-other-vhosts-access: - /var/log/pe-httpd/other vhosts access.log puppet-masterhttp: - /var/log/pe-puppet/masterhttp.log - /var/log/puppet/masterhttp.log puppet-rails: - /var/log/pe-puppet/rails.log puppet-http: - /var/log/puppet/http.log gitlab-application: - /home/git/gitlab/log/application.log gitlab-production: - /home/git/gitlab/log/production.log gitlab-sidekiq: - /home/git/gitlab/log/sidekiq.log gitlab-unicorn-stdout: - /home/git/gitlab/log/unicorn.stdout.log gitlab-unicorn-stderr: - /home/git/gitlab/log/unicorn.stderr.log gitlab-githost: - /home/git/gitlab/log/githost.log gitlab-satellites: - /home/git/gitlab/log/satellites.log gitlab-shell: - /home/git/gitlab-shell/gitlab-shell.log jenkins: - /var/log/jenkins/jenkins.log jetty-request: - /var/log/jetty/ .request.log jetty-stderrout: - /var/log/jetty/ .stderrout.log jetty-out: - /var/log/jetty/out.log joomla: - /var/www/joomla/logs/ .log magento-system: - /var/www/magento/var/log/system.log magento-exception: - /var/www/magento/var/log/exception.log magento-report: - /var/www/magento/var/report/ mediawiki: - /var/log/mediawiki/ .log nginx-access: - /var/log/nginx/access.log nginx-error: - /var/log/nginx/error.log redmine: - /var/log/redmine/ .log salt-master: - /var/log/salt/master salt-minion: - /var/log/salt/minion salt-key: - /var/log/salt/key salt-syndic: - /var/log/salt/syndic.loc solr: - /var/log/solr/ .log sugarcrm: - /var/www/ /sugarcrm.log tomcat-localhost access log: - /var/log/tomcat /localhost access log. .txt tomcat: - /var/log/tomcat /catalina.out,/var/log/tomcat /localhost. .log What's next Learn how to mount external volumes .
- Connect is required to pass data back to Cloud Logging. apiVersion: apps/v1 kind: Deployment metadata: creationTimestamp: null labels: app: my-app migrate-for-anthos-type: workload name: test-ibsc-appenhmutimiy spec: replicas: 1 selector: matchLabels: app: test-ibsc-appenhmutimiy migrate-for-anthos-type: workload strategy: {} template: metadata: creationTimestamp: null labels: app: test-ibsc-appenhmutimiy migrate-for-anthos-type: workload spec: containers: - image: gcr.io/myproject/my-container-image:v1.0.0 name: test-ibsc-appenhmutimiy readinessProbe: exec: command: - /code/ready.sh resources: {} securityContext: privileged: true volumeMounts: - mountPath: /sys/fs/cgroup name: cgroups - mountPath: /code/config/logs/ name: logs-config volumes: - hostPath: path: /sys/fs/cgroup type: Directory name: cgroups - configMap: name: <ConfigMap name> name: logs-config Use ConfigMap for common application logs The reference ConfigMap YAML in the following section covers a list of common application log files and their application labels.
- 681193976 + 0000 UTC mysql log - output You can opt to extend the log forwarding feature to propagate logs for other processes and applications running in the migrated container.

