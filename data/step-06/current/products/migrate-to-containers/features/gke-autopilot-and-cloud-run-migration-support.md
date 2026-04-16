---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:21:10.844Z"
product_name: "Migrate to Containers"
product_slug: "migrate-to-containers"
feature_name: "GKE Autopilot and Cloud Run migration support"
feature_slug: "gke-autopilot-and-cloud-run-migration-support"
latest_feature_date: "2021-12-08"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/migrate/containers/docs/autopilot-overview"
  - "https://docs.cloud.google.com/migrate/containers/docs/services-manager"
  - "https://docs.cloud.google.com/migrate/containers/docs/deploy-autopilot"
keywords:
  - "gke"
  - "autopilot"
  - "run"
  - "migration"
  - "makes"
  - "simplified"
  - "linux"
  - "manager"
---

# GKE Autopilot and Cloud Run migration support

Product: Migrate to Containers
Coverage: MEDIUM

## Step 02 Summary

Makes the simplified Linux service manager the default for migrations to GKE Autopilot clusters and Cloud Run.

## Extended Definition

Makes the simplified Linux service manager the default for migrations to GKE Autopilot clusters and Cloud Run.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/migrate/containers/docs/autopilot-overview](https://docs.cloud.google.com/migrate/containers/docs/autopilot-overview)
- [https://docs.cloud.google.com/migrate/containers/docs/services-manager](https://docs.cloud.google.com/migrate/containers/docs/services-manager)
- [https://docs.cloud.google.com/migrate/containers/docs/deploy-autopilot](https://docs.cloud.google.com/migrate/containers/docs/deploy-autopilot)

## Supporting Pages

### New enhanced runtime \_|\_ Migrate to Containers \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/migrate/containers/docs/autopilot-overview](https://docs.cloud.google.com/migrate/containers/docs/autopilot-overview)
- Source ID: `site-docs-reference`
- Final score: 163
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This simplified Linux service manager adds functionality that lets you deploy your migrated container workloads to: GKE Autopilot clusters Cloud Run The simplified Linux service manager also resolves compatibility issues with Kubernetes plugins.
- New services-config.yaml artifact file added If you enable the simplified Linux service manager, Migrate to Containers creates a new artifact file, services-config.yaml , when you generate the migration artifacts.
- The simplified Linux service manager for version 1.8.1 contains the following updates: You no longer set an annotation in the migration plan to enable the simplified Linux service manager.
- Workload limitations The simplified Linux service manager works best with the following types of workloads: Image Operating system Services Compute Engine Ubuntu 12.04 Ubuntu 12.04 apache2 Compute Engine Ubuntu 14.04 Ubuntu 14.04 redis, mysql, apache2 Compute Engine Ubuntu 18.04 Ubuntu 18.04 apache2, mysql, redis-server, tomcat RHEL SAP 7.4 Red Hat httpd Bitnami Ubuntu bitnami Compute Engine Memcached image Debian 10.9 bitnami Compute Engine Marketplace wordpress Debian 9.13 apache2, mysql, php Compute Engine Marketplace tomcat Debian 9.13 tomcat8 Compute Engine Marketplace jenkins Debian 10.9 apache2, jenkins Compute Engine Marketplace moodle Debian 9.13 apache2, mysql, php7.4 fpm, phpsessionclean Compute Engine Marketplace Odoo Debian 9.13 odoo, nginx Compute Engine Marketplace Opencart Debian 9.13 apache2, mysql, php7.0 fpm, supervisor, mariadb Compute Engine Marketplace Erpnext Debian 10.9 nginx, redis-server, supervisor, mariadb Compute Engine Marketplace wildfly Debian 10.10 wildfly, cron systemd limitations If you're using systemd as your init system, be aware of the following limitations: systemd service types of simple , exec , and notify are treated as exec service.

### New enhanced runtime \_|\_ Migrate to Containers \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/migrate/containers/docs/services-manager](https://docs.cloud.google.com/migrate/containers/docs/services-manager)
- Source ID: `site-docs-root-2`
- Final score: 163
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This simplified Linux service manager adds functionality that lets you deploy your migrated container workloads to: GKE Autopilot clusters Cloud Run The simplified Linux service manager also resolves compatibility issues with Kubernetes plugins.
- New services-config.yaml artifact file added If you enable the simplified Linux service manager, Migrate to Containers creates a new artifact file, services-config.yaml , when you generate the migration artifacts.
- The simplified Linux service manager for version 1.8.1 contains the following updates: You no longer set an annotation in the migration plan to enable the simplified Linux service manager.
- Workload limitations The simplified Linux service manager works best with the following types of workloads: Image Operating system Services Compute Engine Ubuntu 12.04 Ubuntu 12.04 apache2 Compute Engine Ubuntu 14.04 Ubuntu 14.04 redis, mysql, apache2 Compute Engine Ubuntu 18.04 Ubuntu 18.04 apache2, mysql, redis-server, tomcat RHEL SAP 7.4 Red Hat httpd Bitnami Ubuntu bitnami Compute Engine Memcached image Debian 10.9 bitnami Compute Engine Marketplace wordpress Debian 9.13 apache2, mysql, php Compute Engine Marketplace tomcat Debian 9.13 tomcat8 Compute Engine Marketplace jenkins Debian 10.9 apache2, jenkins Compute Engine Marketplace moodle Debian 9.13 apache2, mysql, php7.4 fpm, phpsessionclean Compute Engine Marketplace Odoo Debian 9.13 odoo, nginx Compute Engine Marketplace Opencart Debian 9.13 apache2, mysql, php7.0 fpm, supervisor, mariadb Compute Engine Marketplace Erpnext Debian 10.9 nginx, redis-server, supervisor, mariadb Compute Engine Marketplace wildfly Debian 10.10 wildfly, cron systemd limitations If you're using systemd as your init system, be aware of the following limitations: systemd service types of simple , exec , and notify are treated as exec service.

### "Migrate and deploy applications to GKE Autopilot clusters \_|\_ Migrate\

- URL: [https://docs.cloud.google.com/migrate/containers/docs/deploy-autopilot](https://docs.cloud.google.com/migrate/containers/docs/deploy-autopilot)
- Source ID: `site-docs-reference`
- Final score: 151
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The only changes that you have to make to the Quickstart process are: In Step 3 of Migrating the VM , where you review the migration plan, set v2kServiceManager to true in the migration plan and then save the plan: v2kServiceManager : true In the Deploying the migrated workload section, create and connect to a GKE Autopilot cluster before you deploy the container: Create a GKE Autopilot cluster: gcloud container clusters create-auto " CLUSTER NAME " --project " PROJECT NAME " --region " REGION " --release-channel "regular" --subnetwork "projects/ PROJECT NAME /regions/ us-central1 /subnetworks/default" Connect to the cluster: gcloud container clusters get-credentials CLUSTER NAME --zone REGION --project PROJECT NAME Deploy the container as described in the Deploying the migrated workload section.
- The following alert is provided alongside the unsupported service: Service is not supported by v2k service manager, therefore legacy runtime will be used instead of v2k service manager, and migrated workload would not fit running on Autopilot clusters of Cloudrun.
- To enable the new service manager, reset the flag to true : v2kServiceManager : true Perform any other customizations necessary for your migration as described in Customize the migration plan .
- Changes to the AppXGenerateArtifactsFlow CRD If you are using CRD files to control your migration, edit the AppXGenerateArtifactsFlow CRD to set v2kServiceManager to true .

