---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:21:10.865Z"
product_name: "Migrate to Containers"
product_slug: "migrate-to-containers"
feature_name: "Custom Services Blocklist"
feature_slug: "custom-services-blocklist"
latest_feature_date: "2020-10-08"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/linux/customizing-a-migration-plan"
  - "https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/tomcat/tomcat-customizing-a-migration-plan"
  - "https://docs.cloud.google.com/migrate/containers/docs/planning-best-practices"
keywords:
  - "custom"
  - "blocklist"
  - "lets"
  - "you"
  - "define"
  - "list"
  - "disable"
  - "migrated"
---

# Custom Services Blocklist

Product: Migrate to Containers
Coverage: MEDIUM

## Step 02 Summary

Lets you define a list of services to disable in a migrated container.

## Extended Definition

Lets you define a list of services to disable in a migrated container.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/linux/customizing-a-migration-plan](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/linux/customizing-a-migration-plan)
- [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/tomcat/tomcat-customizing-a-migration-plan](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/tomcat/tomcat-customizing-a-migration-plan)
- [https://docs.cloud.google.com/migrate/containers/docs/planning-best-practices](https://docs.cloud.google.com/migrate/containers/docs/planning-best-practices)

## Supporting Pages

### "Customize migration plan for Linux VMs \_|\_ Migrate to Containers \_|\_\

- URL: [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/linux/customizing-a-migration-plan](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/linux/customizing-a-migration-plan)
- Source ID: `site-docs-reference`
- Final score: 193
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For example, to disable service2 and the cron service: systemServices : - enabled : true name : service1 probed : false - enabled : false name : service2 probed : false - enabled : false name : cron probed : false When you execute a migration to generate the migration artifacts, Migrate to Containers creates the blocklist.yaml file.
- You can change this value if you prefer to use a different name. image: Review and set the name for runnable container image. name: linux-system Customize the services list By default, Migrate to Containers disables unneeded services on a VM when you migrate it to a container.
- Customize service endpoints The migration plan includes the endpoints array that defines the ports and protocols used to create the Kubernetes Services provided by the migrated workload.
- You can optionally edit the migration plan to add your own list of services to disable in the migrated container.

### "Customize migration plan for Tomcat servers \_|\_ Migrate to Containers\

- URL: [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/tomcat/tomcat-customizing-a-migration-plan](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/tomcat/tomcat-customizing-a-migration-plan)
- Source ID: `site-docs-reference`
- Final score: 165
- Re-rank relevance: N/A

Evidence snippets:
- To turn off the probes, remove the probes section from the YAML file. tomcatServers : - name : latest images : - name : tomcat-latest ports : - 8080 probes : livenessProbe : tcpSocket : port : 8080 readinessProbe : tcpSocket : port : 8080 You can change this migration plan to use an existing Tomcat HTTP endpoint. tomcatServers : - name : latest images : - name : tomcat-latest ports : - 8080 probes : livenessProbe : httpGet : path : /healthz port : 8080 httpHeaders : - name : Custom-Header value : Awesome initialDelaySeconds : 3 periodSeconds : 3 readinessProbe : httpGet : tcpSocket : port : 8080 There are four predefined ways to check a container using a probe.
- To run a functional containerized Tomcat application, choose one of the following configuration changes to the reverse proxy configuration: Disable proxy configuration: If the migrated application no longer runs behind a reverse proxy, you can disable proxy configuration by removing proxyName and proxyPort from the connector configuration.
- Configure Ingress to replace the reverse proxy: If no custom or sophisticated logic has been implemented for your reverse proxy, you can configure an Ingress resource to expose your migrated Tomcat application.
- You can also define custom commands and scripts through the migration plan.

### Planning best practices \_|\_ Migrate to Containers \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/migrate/containers/docs/planning-best-practices](https://docs.cloud.google.com/migrate/containers/docs/planning-best-practices)
- Source ID: `site-docs-root-2`
- Final score: 159
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You can also define your own custom list of services to disable in a migrated container by customizing the migration plan to define a blocklist.
- With a blocklist, you specify one or more services to disable in a migrated container.
- Customizing disabled services By default, Migrate to Containers disables the unneeded services listed above.
- For a complete list of services disabled by Migrate to Containers, download the blocklist.yaml file.

