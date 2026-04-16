---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:21:10.841Z"
product_name: "Migrate to Containers"
product_slug: "migrate-to-containers"
feature_name: "Compute Engine lift-and-shift fit assessment"
feature_slug: "compute-engine-lift-and-shift-fit-assessment"
latest_feature_date: "2021-12-08"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/migrate/containers/docs/anthos-migrate-benefits"
  - "https://docs.cloud.google.com/migrate/containers/docs/services-manager"
  - "https://docs.cloud.google.com/migrate/containers/docs/autopilot-overview"
keywords:
  - "compute"
  - "engine"
  - "lift"
  - "shift"
  - "fit"
  - "assessment"
  - "adds"
  - "migrations"
---

# Compute Engine lift-and-shift fit assessment

Product: Migrate to Containers
Coverage: MEDIUM

## Step 02 Summary

Adds fit assessment support for lift-and-shift migrations to Google Compute Engine.

## Extended Definition

Adds fit assessment support for lift-and-shift migrations to Google Compute Engine.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/migrate/containers/docs/anthos-migrate-benefits](https://docs.cloud.google.com/migrate/containers/docs/anthos-migrate-benefits)
- [https://docs.cloud.google.com/migrate/containers/docs/services-manager](https://docs.cloud.google.com/migrate/containers/docs/services-manager)
- [https://docs.cloud.google.com/migrate/containers/docs/autopilot-overview](https://docs.cloud.google.com/migrate/containers/docs/autopilot-overview)

## Supporting Pages

### "Benefits of migrating to containers \_|\_ Migrate to Containers \_|\_ Google\

- URL: [https://docs.cloud.google.com/migrate/containers/docs/anthos-migrate-benefits](https://docs.cloud.google.com/migrate/containers/docs/anthos-migrate-benefits)
- Source ID: `site-docs-reference`
- Final score: 102
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Migrate to containers versus lift-and-shift to Compute Engine Today, you can migrate VM workloads into VM instances in Compute Engine using Migrate to VMs .
- While "lift and shift" is a viable option for certain workloads, many customers that are moving to the cloud want to take a step further.
- This "lift and shift" method offers the simplest steps for cloud migration.
- Benefits of migrating to containers Migrate to Containers is a tool to containerize existing VM-based applications to run on Google Kubernetes Engine (GKE) , GKE Autopilot clusters , GKE Enterprise , or Cloud Run .

### New enhanced runtime \_|\_ Migrate to Containers \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/migrate/containers/docs/services-manager](https://docs.cloud.google.com/migrate/containers/docs/services-manager)
- Source ID: `site-docs-root-2`
- Final score: 93
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Workload limitations The simplified Linux service manager works best with the following types of workloads: Image Operating system Services Compute Engine Ubuntu 12.04 Ubuntu 12.04 apache2 Compute Engine Ubuntu 14.04 Ubuntu 14.04 redis, mysql, apache2 Compute Engine Ubuntu 18.04 Ubuntu 18.04 apache2, mysql, redis-server, tomcat RHEL SAP 7.4 Red Hat httpd Bitnami Ubuntu bitnami Compute Engine Memcached image Debian 10.9 bitnami Compute Engine Marketplace wordpress Debian 9.13 apache2, mysql, php Compute Engine Marketplace tomcat Debian 9.13 tomcat8 Compute Engine Marketplace jenkins Debian 10.9 apache2, jenkins Compute Engine Marketplace moodle Debian 9.13 apache2, mysql, php7.4 fpm, phpsessionclean Compute Engine Marketplace Odoo Debian 9.13 odoo, nginx Compute Engine Marketplace Opencart Debian 9.13 apache2, mysql, php7.0 fpm, supervisor, mariadb Compute Engine Marketplace Erpnext Debian 10.9 nginx, redis-server, supervisor, mariadb Compute Engine Marketplace wildfly Debian 10.10 wildfly, cron systemd limitations If you're using systemd as your init system, be aware of the following limitations: systemd service types of simple , exec , and notify are treated as exec service.
- This simplified Linux service manager adds functionality that lets you deploy your migrated container workloads to: GKE Autopilot clusters Cloud Run The simplified Linux service manager also resolves compatibility issues with Kubernetes plugins.
- About Cloud Run Cloud Run is a managed compute platform that enables you to run stateless containers that are invokable by web requests or Pub/Sub events.
- Readiness probes When using the current runtime, Migrate to Containers adds a readiness probe in the deployment spec.yaml file.

### New enhanced runtime \_|\_ Migrate to Containers \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/migrate/containers/docs/autopilot-overview](https://docs.cloud.google.com/migrate/containers/docs/autopilot-overview)
- Source ID: `site-docs-reference`
- Final score: 85
- Re-rank relevance: N/A

Evidence snippets:
- Workload limitations The simplified Linux service manager works best with the following types of workloads: Image Operating system Services Compute Engine Ubuntu 12.04 Ubuntu 12.04 apache2 Compute Engine Ubuntu 14.04 Ubuntu 14.04 redis, mysql, apache2 Compute Engine Ubuntu 18.04 Ubuntu 18.04 apache2, mysql, redis-server, tomcat RHEL SAP 7.4 Red Hat httpd Bitnami Ubuntu bitnami Compute Engine Memcached image Debian 10.9 bitnami Compute Engine Marketplace wordpress Debian 9.13 apache2, mysql, php Compute Engine Marketplace tomcat Debian 9.13 tomcat8 Compute Engine Marketplace jenkins Debian 10.9 apache2, jenkins Compute Engine Marketplace moodle Debian 9.13 apache2, mysql, php7.4 fpm, phpsessionclean Compute Engine Marketplace Odoo Debian 9.13 odoo, nginx Compute Engine Marketplace Opencart Debian 9.13 apache2, mysql, php7.0 fpm, supervisor, mariadb Compute Engine Marketplace Erpnext Debian 10.9 nginx, redis-server, supervisor, mariadb Compute Engine Marketplace wildfly Debian 10.10 wildfly, cron systemd limitations If you're using systemd as your init system, be aware of the following limitations: systemd service types of simple , exec , and notify are treated as exec service.
- This simplified Linux service manager adds functionality that lets you deploy your migrated container workloads to: GKE Autopilot clusters Cloud Run The simplified Linux service manager also resolves compatibility issues with Kubernetes plugins.
- About Cloud Run Cloud Run is a managed compute platform that enables you to run stateless containers that are invokable by web requests or Pub/Sub events.
- Readiness probes When using the current runtime, Migrate to Containers adds a readiness probe in the deployment spec.yaml file.

