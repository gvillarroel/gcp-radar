---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:53.336Z"
product_name: "Migrate for Compute Engine"
product_slug: "migrate-for-compute-engine"
feature_name: "Automatic license assignment for offline migration"
feature_slug: "automatic-license-assignment-for-offline-migration"
latest_feature_date: "2020-08-12"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/discover/migrating-vms-migrate-for-compute-engine-getting-started"
  - "https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/discover/lifecycle"
  - "https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/discover/migrating-vms-migrate-for-compute-engine-best-practices"
  - "https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/discover/supported-os-versions"
keywords:
  - "automatic"
  - "license"
  - "assignment"
  - "for"
  - "offline"
  - "migration"
  - "extends"
  - "to"
---

# Automatic license assignment for offline migration

Product: Migrate for Compute Engine
Coverage: MEDIUM

## Step 02 Summary

Extends automatic license assignment to the offline migration flow.

## Extended Definition

Extends automatic license assignment to the offline migration flow.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/discover/migrating-vms-migrate-for-compute-engine-getting-started](https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/discover/migrating-vms-migrate-for-compute-engine-getting-started)
- [https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/discover/lifecycle](https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/discover/lifecycle)
- [https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/discover/migrating-vms-migrate-for-compute-engine-best-practices](https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/discover/migrating-vms-migrate-for-compute-engine-best-practices)
- [https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/discover/supported-os-versions](https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/discover/supported-os-versions)

## Supporting Pages

### Migration journey with Migrate to Virtual Machines \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/discover/migrating-vms-migrate-for-compute-engine-getting-started](https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/discover/migrating-vms-migrate-for-compute-engine-getting-started)
- Source ID: `site-docs-reference`
- Final score: 170
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Assess the source environment and workloads In the assess phase , you gather information about the following: Your source and target environment The workloads that you want to migrate To help you to plan your migration and to rightsize the resources that you need for the migration and your target environment, it's crucial to assess your source environment and the workloads that you want to migrate.
- Evaluate Migrate to Virtual Machines requirements to ensure that both your source and target environments provide the features and the resources that Migrate to Virtual Machines needs for the migration, such as network connectivity and bandwidth, and secure communication channels.
- Structure of a Migrate to Virtual Machines migration The following terms are important for understanding how to organize a VM migration from a supported source environment to Google Cloud: VM migration lifecycle .
- When you migrate the VMs in a group, Migrate to Virtual Machines performs all the operations of the VM migration lifecycle on each VM in the group or, optionally, on a subset of the VMs in the group.

### "VM migration process \_|\_ Migrate to Virtual Machines \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/discover/lifecycle](https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/discover/lifecycle)
- Source ID: `site-docs-reference`
- Final score: 156
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Test-clone phase At any time after the initial replication step of the disk data from the source VM completes, you can clone the source VM to a Compute Engine instance for testing: You often create test-clones throughout your migration process as you make modifications to the source VM or the target details.
- However, because the source VM continues to run during the migration process, including during testing, Migrate to Virtual Machines continues to replicate data until you perform the final cut-over to your migrated VM.
- Onboarding phase The first phase of migration is the onboarding phase where you select the VMs to migrate: For example, for a vSphere data center, the Google Cloud console shows you all VMs on the data center.
- After you perform finalize, the only allowed operations on the migration are: Delete the migration Add to or remove from a group Note: Finalize does not delete Compute Engine instances running a migrated VM.

### Migrate to Virtual Machines best practices \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/discover/migrating-vms-migrate-for-compute-engine-best-practices](https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/discover/migrating-vms-migrate-for-compute-engine-best-practices)
- Source ID: `site-docs-reference`
- Final score: 152
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Migrate to Virtual Machines automatically prepares your VMs before migration.
- For example, after analyzing the migration plan, you might determine values for the following: The expected migration duration The expected number of VMs to migrate for each time unit The total migration cost The migration cost per VM The available network throughput The compatibility of the tools you're using for backup and disaster recovery with the target environment Consider all deployment environments for your applications when you analyze the migration plan.
- Analyze the migration plan Before you start your migration plan analysis, and to help you to understand the architecture of Migrate to Virtual Machines, we recommend that you read the following documents: The structure of a Migrate to Virtual Machines migration .
- We recommend that you gather information about the provisioned resources of each VM in the source environment, and the utilization rate of those resources, as described in Migration to Google Cloud: Assess and discover your workloads .

### "Supported operating systems \_|\_ Migrate to Virtual Machines \_|\_ Google\

- URL: [https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/discover/supported-os-versions](https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/discover/supported-os-versions)
- Source ID: `site-docs-reference`
- Final score: 142
- Re-rank relevance: N/A

Evidence snippets:
- OS Version Default license License option BIOS to UEFI conversion supported Arm supported AlmaLinux 8.3 - 8.10 N/A N/A Yes Yes 9.0 - 9.6 N/A N/A Yes Yes 10.0 N/A N/A No Yes CentOS Stream 8 N/A N/A Yes No Stream 9 N/A N/A Yes No Debian 11.0 - 11.6 N/A N/A Yes Yes 12 N/A N/A Yes Yes 13.0 - 13.2 N/A N/A Yes Yes RHEL 7.9 BYOL PAYG with ELS (see Append RHEL ELS licenses ) No No 8.0 - 8.10 BYOL PAYG Yes Yes 8.0 - 8.10 SAP BYOL PAYG No No 9.0 - 9.1 BYOL PAYG Yes Yes 9.2 BYOL PAYG No Yes 9.0 - 9.2 SAP BYOL PAYG No No 9.3 - 9.4 BYOL PAYG No No 10.0 BYOL PAYG Yes Yes Rocky Linux 8.4 - 8.5 N/A N/A No Yes 9 N/A N/A No Yes SLES 12 SP5 BYOL PAYG Yes No 12 SP4 SAP BYOL PAYG No No 15 SP3 BYOL PAYG Yes No 15 SP5 BYOL PAYG No Yes 15 SP2 SAP BYOL PAYG No No Ubuntu 18.04.6 N/A N/A No No 20.04.0 - 20.04.04 N/A N/A Yes Yes 22.04 N/A N/A Yes Yes 24.04 N/A N/A Yes Yes Windows Server (Essentials, Standard, and Datacenter) 2016 PAYG BYOL 1 Yes N/A 2019 PAYG BYOL 1 Yes N/A 2022 PAYG N/A Yes N/A 2025 PAYG N/A No N/A 1 See the notes on Bring Your Own License (BYOL) for Microsoft Licensing .
- Note that even for Oracle Linux images that support the IDPF driver, the import virtual disk images process doesn't automatically set the corresponding IDPF value in the guestOsFeatures attribute of the image resource.
- Note: Migrate to Virtual Machines supports the migration of 64-bit x86 VMs for Linux (all flavours) and Windows Server operating systems only.
- The default license type for migrated VMs is assigned by Migrate to Virtual Machines based on the migrated OS.

