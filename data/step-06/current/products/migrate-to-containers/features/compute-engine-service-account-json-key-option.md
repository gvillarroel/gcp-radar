---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:21:10.873Z"
product_name: "Migrate to Containers"
product_slug: "migrate-to-containers"
feature_name: "Compute Engine service account JSON key option"
feature_slug: "compute-engine-service-account-json-key-option"
latest_feature_date: "2020-07-28"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/migrate/containers/docs/migrate-vm"
  - "https://docs.cloud.google.com/migrate/containers/docs/autopilot-overview"
  - "https://docs.cloud.google.com/migrate/containers/docs/services-manager"
keywords:
  - "compute"
  - "engine"
  - "account"
  - "json"
  - "key"
  - "option"
  - "adds"
  - "specifying"
---

# Compute Engine service account JSON key option

Product: Migrate to Containers
Coverage: MEDIUM

## Step 02 Summary

Adds a JSON key option for specifying a service account when creating a Compute Engine migration source.

## Extended Definition

Adds a JSON key option for specifying a service account when creating a Compute Engine migration source.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/migrate/containers/docs/migrate-vm](https://docs.cloud.google.com/migrate/containers/docs/migrate-vm)
- [https://docs.cloud.google.com/migrate/containers/docs/autopilot-overview](https://docs.cloud.google.com/migrate/containers/docs/autopilot-overview)
- [https://docs.cloud.google.com/migrate/containers/docs/services-manager](https://docs.cloud.google.com/migrate/containers/docs/services-manager)

## Supporting Pages

### Migrate a Linux VM using Migrate to Containers CLI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/migrate/containers/docs/migrate-vm](https://docs.cloud.google.com/migrate/containers/docs/migrate-vm)
- Source ID: `site-docs-reference`
- Final score: 75
- Re-rank relevance: N/A

Evidence snippets:
- Enable GKE API Create a Compute Engine VM with a web server to use as source VM This section describes how to create a Compute Engine VM that serves a Hello World! web page that you can use for testing after migration is complete.
- Migrate a Linux VM using Migrate to Containers CLI In this quickstart, you create a Compute Engine virtual machine (VM) instance, then use the Migrate to Containers CLI to migrate the VM to Google Kubernetes Engine (GKE).
- Create a Compute Engine VM to use as a local machine In this section, you create a Linux VM that you can use as your local machine to perform the different Migrate to Containers operations for migrating the source VM.
- Enable Compute Engine API Enable the GKE API.

### New enhanced runtime \_|\_ Migrate to Containers \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/migrate/containers/docs/autopilot-overview](https://docs.cloud.google.com/migrate/containers/docs/autopilot-overview)
- Source ID: `site-docs-reference`
- Final score: 67
- Re-rank relevance: N/A

Evidence snippets:
- Workload limitations The simplified Linux service manager works best with the following types of workloads: Image Operating system Services Compute Engine Ubuntu 12.04 Ubuntu 12.04 apache2 Compute Engine Ubuntu 14.04 Ubuntu 14.04 redis, mysql, apache2 Compute Engine Ubuntu 18.04 Ubuntu 18.04 apache2, mysql, redis-server, tomcat RHEL SAP 7.4 Red Hat httpd Bitnami Ubuntu bitnami Compute Engine Memcached image Debian 10.9 bitnami Compute Engine Marketplace wordpress Debian 9.13 apache2, mysql, php Compute Engine Marketplace tomcat Debian 9.13 tomcat8 Compute Engine Marketplace jenkins Debian 10.9 apache2, jenkins Compute Engine Marketplace moodle Debian 9.13 apache2, mysql, php7.4 fpm, phpsessionclean Compute Engine Marketplace Odoo Debian 9.13 odoo, nginx Compute Engine Marketplace Opencart Debian 9.13 apache2, mysql, php7.0 fpm, supervisor, mariadb Compute Engine Marketplace Erpnext Debian 10.9 nginx, redis-server, supervisor, mariadb Compute Engine Marketplace wildfly Debian 10.10 wildfly, cron systemd limitations If you're using systemd as your init system, be aware of the following limitations: systemd service types of simple , exec , and notify are treated as exec service.
- This simplified Linux service manager adds functionality that lets you deploy your migrated container workloads to: GKE Autopilot clusters Cloud Run The simplified Linux service manager also resolves compatibility issues with Kubernetes plugins.
- About Cloud Run Cloud Run is a managed compute platform that enables you to run stateless containers that are invokable by web requests or Pub/Sub events.
- Readiness probes When using the current runtime, Migrate to Containers adds a readiness probe in the deployment spec.yaml file.

### New enhanced runtime \_|\_ Migrate to Containers \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/migrate/containers/docs/services-manager](https://docs.cloud.google.com/migrate/containers/docs/services-manager)
- Source ID: `site-docs-root-2`
- Final score: 67
- Re-rank relevance: N/A

Evidence snippets:
- Workload limitations The simplified Linux service manager works best with the following types of workloads: Image Operating system Services Compute Engine Ubuntu 12.04 Ubuntu 12.04 apache2 Compute Engine Ubuntu 14.04 Ubuntu 14.04 redis, mysql, apache2 Compute Engine Ubuntu 18.04 Ubuntu 18.04 apache2, mysql, redis-server, tomcat RHEL SAP 7.4 Red Hat httpd Bitnami Ubuntu bitnami Compute Engine Memcached image Debian 10.9 bitnami Compute Engine Marketplace wordpress Debian 9.13 apache2, mysql, php Compute Engine Marketplace tomcat Debian 9.13 tomcat8 Compute Engine Marketplace jenkins Debian 10.9 apache2, jenkins Compute Engine Marketplace moodle Debian 9.13 apache2, mysql, php7.4 fpm, phpsessionclean Compute Engine Marketplace Odoo Debian 9.13 odoo, nginx Compute Engine Marketplace Opencart Debian 9.13 apache2, mysql, php7.0 fpm, supervisor, mariadb Compute Engine Marketplace Erpnext Debian 10.9 nginx, redis-server, supervisor, mariadb Compute Engine Marketplace wildfly Debian 10.10 wildfly, cron systemd limitations If you're using systemd as your init system, be aware of the following limitations: systemd service types of simple , exec , and notify are treated as exec service.
- This simplified Linux service manager adds functionality that lets you deploy your migrated container workloads to: GKE Autopilot clusters Cloud Run The simplified Linux service manager also resolves compatibility issues with Kubernetes plugins.
- About Cloud Run Cloud Run is a managed compute platform that enables you to run stateless containers that are invokable by web requests or Pub/Sub events.
- Readiness probes When using the current runtime, Migrate to Containers adds a readiness probe in the deployment spec.yaml file.

