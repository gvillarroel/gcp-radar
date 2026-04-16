---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:21:10.840Z"
product_name: "Migrate to Containers"
product_slug: "migrate-to-containers"
feature_name: "Cloud Run fit assessment"
feature_slug: "cloud-run-fit-assessment"
latest_feature_date: "2021-12-08"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/migrate/containers/docs/autopilot-overview"
  - "https://docs.cloud.google.com/migrate/containers/docs/services-manager"
  - "https://docs.cloud.google.com/migrate/containers/docs/offline-assessment-overview"
keywords:
  - "run"
  - "fit"
  - "assessment"
  - "enables"
  - "assessments"
  - "workloads"
  - "targeted"
  - "automated"
---

# Cloud Run fit assessment

Product: Migrate to Containers
Coverage: MEDIUM

## Step 02 Summary

Enables fit assessments for workloads targeted for automated containerization to Cloud Run.

## Extended Definition

Enables fit assessments for workloads targeted for automated containerization to Cloud Run.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/migrate/containers/docs/autopilot-overview](https://docs.cloud.google.com/migrate/containers/docs/autopilot-overview)
- [https://docs.cloud.google.com/migrate/containers/docs/services-manager](https://docs.cloud.google.com/migrate/containers/docs/services-manager)
- [https://docs.cloud.google.com/migrate/containers/docs/offline-assessment-overview](https://docs.cloud.google.com/migrate/containers/docs/offline-assessment-overview)

## Supporting Pages

### "Offline assessment overview \_|\_ Migrate to Containers \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/migrate/containers/docs/offline-assessment-overview](https://docs.cloud.google.com/migrate/containers/docs/offline-assessment-overview)
- Source ID: `site-docs-root-2`
- Final score: 79
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- It provides an overall fit assessment using one of the following scores: Excellent fit Good fit, with some findings that might require attention Needs minimal work before migrating Needs moderate work before migrating Needs major work before migrating No fit Insufficient data The offline assessment also gives you: The ability to get the assessment information about physical servers and virtual machine (VM) instances in your infrastructure.
- Offline assessment overview The Migration Center discovery client CLI or mcdc CLI lets you run an offline assessment with the information that you collected in the discovery phase.
- The offline assessment creates reports that provide you with a high-level fit assessment result for migration and potential blockers for different migration journeys.
- A detailed report on the applicable assessment rules, including any technical blockers to modernization.

### New enhanced runtime \_|\_ Migrate to Containers \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/migrate/containers/docs/autopilot-overview](https://docs.cloud.google.com/migrate/containers/docs/autopilot-overview)
- Source ID: `site-docs-reference`
- Final score: 71
- Re-rank relevance: N/A

Evidence snippets:
- Workload limitations The simplified Linux service manager works best with the following types of workloads: Image Operating system Services Compute Engine Ubuntu 12.04 Ubuntu 12.04 apache2 Compute Engine Ubuntu 14.04 Ubuntu 14.04 redis, mysql, apache2 Compute Engine Ubuntu 18.04 Ubuntu 18.04 apache2, mysql, redis-server, tomcat RHEL SAP 7.4 Red Hat httpd Bitnami Ubuntu bitnami Compute Engine Memcached image Debian 10.9 bitnami Compute Engine Marketplace wordpress Debian 9.13 apache2, mysql, php Compute Engine Marketplace tomcat Debian 9.13 tomcat8 Compute Engine Marketplace jenkins Debian 10.9 apache2, jenkins Compute Engine Marketplace moodle Debian 9.13 apache2, mysql, php7.4 fpm, phpsessionclean Compute Engine Marketplace Odoo Debian 9.13 odoo, nginx Compute Engine Marketplace Opencart Debian 9.13 apache2, mysql, php7.0 fpm, supervisor, mariadb Compute Engine Marketplace Erpnext Debian 10.9 nginx, redis-server, supervisor, mariadb Compute Engine Marketplace wildfly Debian 10.10 wildfly, cron systemd limitations If you're using systemd as your init system, be aware of the following limitations: systemd service types of simple , exec , and notify are treated as exec service.
- This simplified Linux service manager adds functionality that lets you deploy your migrated container workloads to: GKE Autopilot clusters Cloud Run The simplified Linux service manager also resolves compatibility issues with Kubernetes plugins.
- In Autopilot mode, GKE provisions and manages the underlying infrastructure of the cluster, including nodes and node pools, giving you an optimized cluster with an automated experience.
- Using workload identity with Migrate to Containers and GKE Migrate to Containers and GKE let you deploy your migrated workloads to Google Distributed Cloud .

### New enhanced runtime \_|\_ Migrate to Containers \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/migrate/containers/docs/services-manager](https://docs.cloud.google.com/migrate/containers/docs/services-manager)
- Source ID: `site-docs-root-2`
- Final score: 71
- Re-rank relevance: N/A

Evidence snippets:
- Workload limitations The simplified Linux service manager works best with the following types of workloads: Image Operating system Services Compute Engine Ubuntu 12.04 Ubuntu 12.04 apache2 Compute Engine Ubuntu 14.04 Ubuntu 14.04 redis, mysql, apache2 Compute Engine Ubuntu 18.04 Ubuntu 18.04 apache2, mysql, redis-server, tomcat RHEL SAP 7.4 Red Hat httpd Bitnami Ubuntu bitnami Compute Engine Memcached image Debian 10.9 bitnami Compute Engine Marketplace wordpress Debian 9.13 apache2, mysql, php Compute Engine Marketplace tomcat Debian 9.13 tomcat8 Compute Engine Marketplace jenkins Debian 10.9 apache2, jenkins Compute Engine Marketplace moodle Debian 9.13 apache2, mysql, php7.4 fpm, phpsessionclean Compute Engine Marketplace Odoo Debian 9.13 odoo, nginx Compute Engine Marketplace Opencart Debian 9.13 apache2, mysql, php7.0 fpm, supervisor, mariadb Compute Engine Marketplace Erpnext Debian 10.9 nginx, redis-server, supervisor, mariadb Compute Engine Marketplace wildfly Debian 10.10 wildfly, cron systemd limitations If you're using systemd as your init system, be aware of the following limitations: systemd service types of simple , exec , and notify are treated as exec service.
- This simplified Linux service manager adds functionality that lets you deploy your migrated container workloads to: GKE Autopilot clusters Cloud Run The simplified Linux service manager also resolves compatibility issues with Kubernetes plugins.
- In Autopilot mode, GKE provisions and manages the underlying infrastructure of the cluster, including nodes and node pools, giving you an optimized cluster with an automated experience.
- Using workload identity with Migrate to Containers and GKE Migrate to Containers and GKE let you deploy your migrated workloads to Google Distributed Cloud .

