---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:21:10.849Z"
product_name: "Migrate to Containers"
product_slug: "migrate-to-containers"
feature_name: "Tomcat workload fit assessment"
feature_slug: "tomcat-workload-fit-assessment"
latest_feature_date: "2021-12-08"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/compatible-components"
  - "https://docs.cloud.google.com/migrate/containers/docs/autopilot-overview"
  - "https://docs.cloud.google.com/migrate/containers/docs/services-manager"
keywords:
  - "tomcat"
  - "workload"
  - "fit"
  - "assessment"
  - "enables"
  - "assessments"
  - "linux"
  - "workloads"
---

# Tomcat workload fit assessment

Product: Migrate to Containers
Coverage: MEDIUM

## Step 02 Summary

Enables fit assessments for Linux workloads running Tomcat application servers.

## Extended Definition

Enables fit assessments for Linux workloads running Tomcat application servers.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/compatible-components](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/compatible-components)
- [https://docs.cloud.google.com/migrate/containers/docs/autopilot-overview](https://docs.cloud.google.com/migrate/containers/docs/autopilot-overview)
- [https://docs.cloud.google.com/migrate/containers/docs/services-manager](https://docs.cloud.google.com/migrate/containers/docs/services-manager)

## Supporting Pages

### "Review compatible OS, workloads, and Kubernetes versions \_|\_ Migrate to\

- URL: [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/compatible-components](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/compatible-components)
- Source ID: `site-docs-reference`
- Final score: 150
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Supported workloads Migrate to Containers CLI supports modernization of workloads listed in the following table: Workload Type (if applicable) Supported versions Linux VM container VMs running 64-bit Linux-based operating systems Linux-based workloads Tomcat Apache Tomcat version 8.5 - 10.0 Apache Apache HTTP Server version 2.4 JBoss WildFly (formerly known as JBoss Application Server) version 8.1.0 - 26.1.1 JBoss Enterprise Application Platform version 7.0 - 7.4 WebSphere WebSphere Application Server traditional version 8.55 and 9.05 All versions of WebSphere Application Server Liberty WordPress sites WordPress version 4.0 or later running on Apache HTTP Server version 2.4 Windows IIS application Microsoft Internet Information Services version 7 or later Note: For workloads that use a Java-based plugin, Migrate to Containers CLI only supports Java SE version 8 or later.
- Source VM operating systems Linux VM container Migrate to Containers CLI supports migrations of VMs to containers on Google Kubernetes Engine on the 64-bit Linux operating systems listed in the following table: OS Compute Engine VMware CentOS 6.0 7.0 7.0 UEFI 8.0 6.7 6.9 7.6 Debian 7.0 8.0 9.0 10.0 9.4 9.6 RHEL 6.0 7.0 7.0 UEFI 7.4 SAP 7.6 SAP 8.0 6.5 7.5 7.6 8.3 SUSE 12 12 SP3 SAP 12 SP4 SAP 15 15 SAP 15 SP1 SAP 12 SP2 12 SP3 12 SP4 15 Ubuntu 12 LTS 14 LTS 16 LTS 16 LTS minimal 18 LTS 18 LTS minimal 18 LTS UEFI 19.04 19.04 minimal 12.04.5 LTS 14.04 LTS 16.04 LTS 18.04.10 LTS Linux-based workloads For Linux-based workloads, Migrate to Containers CLI supports all Linux-based operating systems.
- Linux-based workloads For Linux-based workloads, Migrate to Containers CLI supports all versions of Linux-based nodes.
- Review compatible OS, workloads, and Kubernetes versions This document lists operating systems, supported workloads, and Kubernetes versions that have been tested with Migrate to Containers CLI.

### New enhanced runtime \_|\_ Migrate to Containers \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/migrate/containers/docs/autopilot-overview](https://docs.cloud.google.com/migrate/containers/docs/autopilot-overview)
- Source ID: `site-docs-reference`
- Final score: 130
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Workload limitations The simplified Linux service manager works best with the following types of workloads: Image Operating system Services Compute Engine Ubuntu 12.04 Ubuntu 12.04 apache2 Compute Engine Ubuntu 14.04 Ubuntu 14.04 redis, mysql, apache2 Compute Engine Ubuntu 18.04 Ubuntu 18.04 apache2, mysql, redis-server, tomcat RHEL SAP 7.4 Red Hat httpd Bitnami Ubuntu bitnami Compute Engine Memcached image Debian 10.9 bitnami Compute Engine Marketplace wordpress Debian 9.13 apache2, mysql, php Compute Engine Marketplace tomcat Debian 9.13 tomcat8 Compute Engine Marketplace jenkins Debian 10.9 apache2, jenkins Compute Engine Marketplace moodle Debian 9.13 apache2, mysql, php7.4 fpm, phpsessionclean Compute Engine Marketplace Odoo Debian 9.13 odoo, nginx Compute Engine Marketplace Opencart Debian 9.13 apache2, mysql, php7.0 fpm, supervisor, mariadb Compute Engine Marketplace Erpnext Debian 10.9 nginx, redis-server, supervisor, mariadb Compute Engine Marketplace wildfly Debian 10.10 wildfly, cron systemd limitations If you're using systemd as your init system, be aware of the following limitations: systemd service types of simple , exec , and notify are treated as exec service.
- This simplified Linux service manager adds functionality that lets you deploy your migrated container workloads to: GKE Autopilot clusters Cloud Run The simplified Linux service manager also resolves compatibility issues with Kubernetes plugins.
- The simplified Linux service manager lets you deploy your migrated container workloads on Cloud Run.
- Using workload identity with Migrate to Containers and GKE Migrate to Containers and GKE let you deploy your migrated workloads to Google Distributed Cloud .

### New enhanced runtime \_|\_ Migrate to Containers \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/migrate/containers/docs/services-manager](https://docs.cloud.google.com/migrate/containers/docs/services-manager)
- Source ID: `site-docs-root-2`
- Final score: 130
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Workload limitations The simplified Linux service manager works best with the following types of workloads: Image Operating system Services Compute Engine Ubuntu 12.04 Ubuntu 12.04 apache2 Compute Engine Ubuntu 14.04 Ubuntu 14.04 redis, mysql, apache2 Compute Engine Ubuntu 18.04 Ubuntu 18.04 apache2, mysql, redis-server, tomcat RHEL SAP 7.4 Red Hat httpd Bitnami Ubuntu bitnami Compute Engine Memcached image Debian 10.9 bitnami Compute Engine Marketplace wordpress Debian 9.13 apache2, mysql, php Compute Engine Marketplace tomcat Debian 9.13 tomcat8 Compute Engine Marketplace jenkins Debian 10.9 apache2, jenkins Compute Engine Marketplace moodle Debian 9.13 apache2, mysql, php7.4 fpm, phpsessionclean Compute Engine Marketplace Odoo Debian 9.13 odoo, nginx Compute Engine Marketplace Opencart Debian 9.13 apache2, mysql, php7.0 fpm, supervisor, mariadb Compute Engine Marketplace Erpnext Debian 10.9 nginx, redis-server, supervisor, mariadb Compute Engine Marketplace wildfly Debian 10.10 wildfly, cron systemd limitations If you're using systemd as your init system, be aware of the following limitations: systemd service types of simple , exec , and notify are treated as exec service.
- This simplified Linux service manager adds functionality that lets you deploy your migrated container workloads to: GKE Autopilot clusters Cloud Run The simplified Linux service manager also resolves compatibility issues with Kubernetes plugins.
- The simplified Linux service manager lets you deploy your migrated container workloads on Cloud Run.
- Using workload identity with Migrate to Containers and GKE Migrate to Containers and GKE let you deploy your migrated workloads to Google Distributed Cloud .

