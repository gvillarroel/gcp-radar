---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:21:10.785Z"
product_name: "Migrate to Containers"
product_slug: "migrate-to-containers"
feature_name: "Anthos on VMware in-place processing"
feature_slug: "anthos-on-vmware-in-place-processing"
latest_feature_date: "2023-05-22"
deprecation_date: "2023-05-22"
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/migrate/containers/docs/autopilot-overview"
  - "https://docs.cloud.google.com/migrate/containers/docs/services-manager"
  - "https://docs.cloud.google.com/migrate/containers/docs/mcdc-vmware-quickstart"
keywords:
  - "anthos"
  - "vmware"
  - "place"
  - "processing"
  - "clusters"
  - "no"
  - "longer"
  - "deprecated"
---

# Anthos on VMware in-place processing

Product: Migrate to Containers
Coverage: MEDIUM

## Step 02 Summary

In-place processing on Anthos on VMware clusters is no longer supported; deprecated on 2023-05-22.

## Extended Definition

In-place processing on Anthos on VMware clusters is no longer supported; deprecated on 2023-05-22.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/migrate/containers/docs/autopilot-overview](https://docs.cloud.google.com/migrate/containers/docs/autopilot-overview)
- [https://docs.cloud.google.com/migrate/containers/docs/services-manager](https://docs.cloud.google.com/migrate/containers/docs/services-manager)
- [https://docs.cloud.google.com/migrate/containers/docs/mcdc-vmware-quickstart](https://docs.cloud.google.com/migrate/containers/docs/mcdc-vmware-quickstart)

## Supporting Pages

### "Discover, collect, and assess VMware VMs for migration \_|\_ Migrate to\

- URL: [https://docs.cloud.google.com/migrate/containers/docs/mcdc-vmware-quickstart](https://docs.cloud.google.com/migrate/containers/docs/mcdc-vmware-quickstart)
- Source ID: `site-docs-reference`
- Final score: 82
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Download the latest version of the mcdc CLI and make it executable: curl -O "https://mc-release.storage.googleapis.com/mcdc/ $( curl -s https://mc-release.storage.googleapis.com/mcdc/latest ) /mcdc" chmod +x mcdc Perform VMware inventory discovery Run the inventory discovery: ./mcdc discover vsphere -u USERNAME --url https:// VSPHERE URL Replace the following: USERNAME : your vCenter username VSPHERE URL : the URL for your vCenter Server instance or the vSphere Client The output of the discover command looks like the following: [+] Found 13 VMs Collecting data...
- Perform guest discovery on all discovered VMs Run the guest discovery: ./mcdc discover vsphere guest all --url https:// VSPHERE URL \ -u VCENTER USER --vm-user VM USER Replace the following: VCENTER USER : the vCenter server user VM USER : the VM user When prompted, enter the password for the VCENTER USER and VM USER .
- Discover, collect, and assess VMware VMs for migration Learn how to download the Migration Center discovery client CLI and use it to remotely discover, collect, and assess virtual machine (VM) instances running on VMware for migration and containerization.
- Delete the mcdc CLI data: ./mcdc discover purge-db -db DATABASE NAME Replace DATABASE NAME with the path to the database where the collected data is stored.

### New enhanced runtime \_|\_ Migrate to Containers \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/migrate/containers/docs/autopilot-overview](https://docs.cloud.google.com/migrate/containers/docs/autopilot-overview)
- Source ID: `site-docs-reference`
- Final score: 80
- Re-rank relevance: N/A

Evidence snippets:
- Workload limitations The simplified Linux service manager works best with the following types of workloads: Image Operating system Services Compute Engine Ubuntu 12.04 Ubuntu 12.04 apache2 Compute Engine Ubuntu 14.04 Ubuntu 14.04 redis, mysql, apache2 Compute Engine Ubuntu 18.04 Ubuntu 18.04 apache2, mysql, redis-server, tomcat RHEL SAP 7.4 Red Hat httpd Bitnami Ubuntu bitnami Compute Engine Memcached image Debian 10.9 bitnami Compute Engine Marketplace wordpress Debian 9.13 apache2, mysql, php Compute Engine Marketplace tomcat Debian 9.13 tomcat8 Compute Engine Marketplace jenkins Debian 10.9 apache2, jenkins Compute Engine Marketplace moodle Debian 9.13 apache2, mysql, php7.4 fpm, phpsessionclean Compute Engine Marketplace Odoo Debian 9.13 odoo, nginx Compute Engine Marketplace Opencart Debian 9.13 apache2, mysql, php7.0 fpm, supervisor, mariadb Compute Engine Marketplace Erpnext Debian 10.9 nginx, redis-server, supervisor, mariadb Compute Engine Marketplace wildfly Debian 10.10 wildfly, cron systemd limitations If you're using systemd as your init system, be aware of the following limitations: systemd service types of simple , exec , and notify are treated as exec service.
- This simplified Linux service manager adds functionality that lets you deploy your migrated container workloads to: GKE Autopilot clusters Cloud Run The simplified Linux service manager also resolves compatibility issues with Kubernetes plugins.
- Updates for version 1.9.0 The simplified Linux service manager for version 1.9.0 contains the following updates: The Linux service manager has been released for general availability, and is no longer in Public Preview.
- The simplified Linux service manager for version 1.8.1 contains the following updates: You no longer set an annotation in the migration plan to enable the simplified Linux service manager.

### New enhanced runtime \_|\_ Migrate to Containers \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/migrate/containers/docs/services-manager](https://docs.cloud.google.com/migrate/containers/docs/services-manager)
- Source ID: `site-docs-root-2`
- Final score: 80
- Re-rank relevance: N/A

Evidence snippets:
- Workload limitations The simplified Linux service manager works best with the following types of workloads: Image Operating system Services Compute Engine Ubuntu 12.04 Ubuntu 12.04 apache2 Compute Engine Ubuntu 14.04 Ubuntu 14.04 redis, mysql, apache2 Compute Engine Ubuntu 18.04 Ubuntu 18.04 apache2, mysql, redis-server, tomcat RHEL SAP 7.4 Red Hat httpd Bitnami Ubuntu bitnami Compute Engine Memcached image Debian 10.9 bitnami Compute Engine Marketplace wordpress Debian 9.13 apache2, mysql, php Compute Engine Marketplace tomcat Debian 9.13 tomcat8 Compute Engine Marketplace jenkins Debian 10.9 apache2, jenkins Compute Engine Marketplace moodle Debian 9.13 apache2, mysql, php7.4 fpm, phpsessionclean Compute Engine Marketplace Odoo Debian 9.13 odoo, nginx Compute Engine Marketplace Opencart Debian 9.13 apache2, mysql, php7.0 fpm, supervisor, mariadb Compute Engine Marketplace Erpnext Debian 10.9 nginx, redis-server, supervisor, mariadb Compute Engine Marketplace wildfly Debian 10.10 wildfly, cron systemd limitations If you're using systemd as your init system, be aware of the following limitations: systemd service types of simple , exec , and notify are treated as exec service.
- This simplified Linux service manager adds functionality that lets you deploy your migrated container workloads to: GKE Autopilot clusters Cloud Run The simplified Linux service manager also resolves compatibility issues with Kubernetes plugins.
- Updates for version 1.9.0 The simplified Linux service manager for version 1.9.0 contains the following updates: The Linux service manager has been released for general availability, and is no longer in Public Preview.
- The simplified Linux service manager for version 1.8.1 contains the following updates: You no longer set an annotation in the migration plan to enable the simplified Linux service manager.

