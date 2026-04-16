---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:53.339Z"
product_name: "Migrate for Compute Engine"
product_slug: "migrate-for-compute-engine"
feature_name: "Azure to Google Cloud migration"
feature_slug: "azure-to-google-cloud-migration"
latest_feature_date: "2019-11-12"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/discover/migrating-vms-migrate-for-compute-engine-getting-started"
  - "https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/discover/architecture"
  - "https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/discover/lifecycle"
  - "https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/discover/supported-os-versions"
keywords:
  - "azure"
  - "to"
  - "migration"
  - "migrates"
  - "virtual"
  - "machines"
  - "from"
  - "compute"
---

# Azure to Google Cloud migration

Product: Migrate for Compute Engine
Coverage: MEDIUM

## Step 02 Summary

Migrates virtual machines from Azure to Compute Engine using Waves migration; Migrates virtual machines from Azure to Compute Engine using Waves migration.

## Extended Definition

Migrates virtual machines from Azure to Compute Engine using Waves migration; Migrates virtual machines from Azure to Compute Engine using Waves migration.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/discover/migrating-vms-migrate-for-compute-engine-getting-started](https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/discover/migrating-vms-migrate-for-compute-engine-getting-started)
- [https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/discover/architecture](https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/discover/architecture)
- [https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/discover/lifecycle](https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/discover/lifecycle)
- [https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/discover/supported-os-versions](https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/discover/supported-os-versions)

## Supporting Pages

### Migration journey with Migrate to Virtual Machines \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/discover/migrating-vms-migrate-for-compute-engine-getting-started](https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/discover/migrating-vms-migrate-for-compute-engine-getting-started)
- Source ID: `site-docs-reference`
- Final score: 283
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- These source environments can include the following: A VMware vSphere environment A Microsoft Azure VM environment An Amazon Elastic Compute Cloud (Amazon EC2) environment Migrate to Virtual Machines lets you streamline your VM migration to Google Cloud.
- Structure of a Migrate to Virtual Machines migration The following terms are important for understanding how to organize a VM migration from a supported source environment to Google Cloud: VM migration lifecycle .
- This document is useful if you're planning to migrate VMs from a supported source environment to Compute Engine with Migrate to Virtual Machines.
- Evaluate Migrate to Virtual Machines requirements to ensure that both your source and target environments provide the features and the resources that Migrate to Virtual Machines needs for the migration, such as network connectivity and bandwidth, and secure communication channels.

### Migrate to Virtual Machines architecture \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/discover/architecture](https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/discover/architecture)
- Source ID: `site-docs-reference`
- Final score: 265
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Migrate to Virtual Machines lets you migrate VMs and disks of VMs from the following four migration sources to Google Cloud: vSphere data center (on-premises) AWS cloud service Azure cloud service Google Cloud VMware Engine The following diagram shows the architecture for migrating VMs and disks of VMs from various migration sources to Google Cloud: About Google Cloud projects Google Cloud projects form the basis for creating, enabling, and using Google Cloud services including managing APIs, enabling billing, adding and removing collaborators, and managing permissions for Google Cloud resources.
- Migration sources Migrate to Virtual Machines lets you to migrate VMs from the following four migration sources: vSphere data center: Migrate on-premises VMs from the vSphere data center to Google Cloud.
- Home Documentation Migration Migrate to Virtual Machines Guides Send feedback Migrate to Virtual Machines architecture Stay organized with collections Save and categorize content based on your preferences.
- Along with the Migrate to Virtual Machines services, you also use the following Google Cloud services when performing a migration.

### "VM migration process \_|\_ Migrate to Virtual Machines \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/discover/lifecycle](https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/discover/lifecycle)
- Source ID: `site-docs-reference`
- Final score: 260
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If you decide to create a test-clone from the source VM, Migrate to Virtual Machines creates a Compute Engine instance from the latest replication data using the target details.
- Migrate to Virtual Machines lets you migrate ( lift and shift ) your virtual machines (VMs), with minor automatic modifications, from your source environment to Compute Engine.
- About the migration process Migrate to Virtual Machines provides a path for you to migrate your VMs to Compute Engine.
- Test-clone phase At any time after the initial replication step of the disk data from the source VM completes, you can clone the source VM to a Compute Engine instance for testing: You often create test-clones throughout your migration process as you make modifications to the source VM or the target details.

### "Supported operating systems \_|\_ Migrate to Virtual Machines \_|\_ Google\

- URL: [https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/discover/supported-os-versions](https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/discover/supported-os-versions)
- Source ID: `site-docs-reference`
- Final score: 255
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To migrate a virtual machine (VM) from any migration source , the VM must be running an operating system supported by Migrate to Virtual Machines.
- OS Version Default license License option BIOS to UEFI conversion supported Arm supported AlmaLinux 8.3 - 8.10 N/A N/A Yes Yes 9.0 - 9.6 N/A N/A Yes Yes 10.0 N/A N/A No Yes CentOS Stream 8 N/A N/A Yes No Stream 9 N/A N/A Yes No Debian 11.0 - 11.6 N/A N/A Yes Yes 12 N/A N/A Yes Yes 13.0 - 13.2 N/A N/A Yes Yes RHEL 7.9 PAYG PAYG with ELS (see Append RHEL ELS licenses ) Yes No 8.0 - 8.10 PAYG PAYG Yes Yes 8.0 - 8.10 SAP PAYG PAYG No No 9.0 - 9.2 PAYG PAYG Yes Yes 9.0 - 9.2 SAP PAYG PAYG No No 9.3 - 9.4 PAYG PAYG No No 10.0 PAYG PAYG Yes Yes Rocky Linux 8.4 - 8.5 N/A N/A No Yes 9 N/A N/A Yes Yes SLES 12 SP5 PAYG PAYG Yes No 15 SP3 PAYG PAYG Yes No 15 SP5 PAYG PAYG Yes Yes Ubuntu 20.04.0 - 20.04.04 N/A N/A Yes Yes 22.04 N/A N/A Yes Yes 24.04 N/A N/A Yes Yes Windows Server (Essentials, Standard, and Datacenter) 2016 PAYG BYOL 1 Yes N/A 2019 PAYG BYOL 1 Yes N/A 2022 PAYG N/A Yes N/A 2025 PAYG N/A No N/A Image import You can import a virtual disk to Compute Engine using Migrate to Virtual Machines, if the VM is running an operating system that is listed in the following table.
- Operating systems with migration support only Migrate to Virtual Machines supports migrating VMs running the following operating systems that have reached end of life (EOL), or are not officially supported on Google Cloud.
- Home Documentation Migration Migrate to Virtual Machines Guides Send feedback Supported operating systems Stay organized with collections Save and categorize content based on your preferences.

