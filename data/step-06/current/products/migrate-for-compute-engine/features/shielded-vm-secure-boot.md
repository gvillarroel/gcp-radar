---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:53.340Z"
product_name: "Migrate for Compute Engine"
product_slug: "migrate-for-compute-engine"
feature_name: "Shielded VM Secure Boot"
feature_slug: "shielded-vm-secure-boot"
latest_feature_date: "2019-09-06"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/discover/migrating-vms-migrate-for-compute-engine-getting-started"
  - "https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/discover/supported-os-versions"
  - "https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/discover/migrating-vms-migrate-for-compute-engine-best-practices"
  - "https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/discover/lifecycle"
keywords:
  - "shielded"
  - "vm"
  - "secure"
  - "boot"
  - "migrate"
  - "for"
  - "compute"
  - "engine"
---

# Shielded VM Secure Boot

Product: Migrate for Compute Engine
Coverage: MEDIUM

## Step 02 Summary

Migrate for Compute Engine can enable Shielded VM Secure Boot during migration runbooks.

## Extended Definition

Migrate for Compute Engine can enable Shielded VM Secure Boot during migration runbooks.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/discover/migrating-vms-migrate-for-compute-engine-getting-started](https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/discover/migrating-vms-migrate-for-compute-engine-getting-started)
- [https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/discover/supported-os-versions](https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/discover/supported-os-versions)
- [https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/discover/migrating-vms-migrate-for-compute-engine-best-practices](https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/discover/migrating-vms-migrate-for-compute-engine-best-practices)
- [https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/discover/lifecycle](https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/discover/lifecycle)

## Supporting Pages

### Migration journey with Migrate to Virtual Machines \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/discover/migrating-vms-migrate-for-compute-engine-getting-started](https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/discover/migrating-vms-migrate-for-compute-engine-getting-started)
- Source ID: `site-docs-reference`
- Final score: 208
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This document is useful if you're planning to migrate VMs from a supported source environment to Compute Engine with Migrate to Virtual Machines.
- For example, you can rightsize Compute Engine VMs, or you can start using managed services.
- In this phase, you migrate the VMs from the source environment to Compute Engine.
- Evaluate Migrate to Virtual Machines requirements to ensure that both your source and target environments provide the features and the resources that Migrate to Virtual Machines needs for the migration, such as network connectivity and bandwidth, and secure communication channels.

### "Supported operating systems \_|\_ Migrate to Virtual Machines \_|\_ Google\

- URL: [https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/discover/supported-os-versions](https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/discover/supported-os-versions)
- Source ID: `site-docs-reference`
- Final score: 191
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Other considerations The following are a few considerations you must keep in mind when using Oracle Linux on Google Cloud: A Unified Extensible Firmware Interface (UEFI) boot is required for Compute Engine features such Shielded VMs .
- Support for Compute Engine machine series Migrate to Virtual Machines supports migrating virtual machine instances (VMs) to Compute Engine 1st, 2nd, 3rd, and 4th generation machine series .
- OS Version Default license License option BIOS to UEFI conversion supported Arm supported AlmaLinux 8.3 - 8.10 N/A N/A Yes Yes 9.0 - 9.6 N/A N/A Yes Yes 10.0 N/A N/A No Yes CentOS Stream 8 N/A N/A Yes No Stream 9 N/A N/A Yes No Debian 11.0 - 11.6 N/A N/A Yes Yes 12 N/A N/A Yes Yes 13.0 - 13.2 N/A N/A Yes Yes RHEL 7.9 PAYG PAYG with ELS (see Append RHEL ELS licenses ) Yes No 8.0 - 8.10 PAYG PAYG Yes Yes 8.0 - 8.10 SAP PAYG PAYG No No 9.0 - 9.2 PAYG PAYG Yes Yes 9.0 - 9.2 SAP PAYG PAYG No No 9.3 - 9.4 PAYG PAYG No No 10.0 PAYG PAYG Yes Yes Rocky Linux 8.4 - 8.5 N/A N/A No Yes 9 N/A N/A Yes Yes SLES 12 SP5 PAYG PAYG Yes No 15 SP3 PAYG PAYG Yes No 15 SP5 PAYG PAYG Yes Yes Ubuntu 20.04.0 - 20.04.04 N/A N/A Yes Yes 22.04 N/A N/A Yes Yes 24.04 N/A N/A Yes Yes Windows Server (Essentials, Standard, and Datacenter) 2016 PAYG BYOL 1 Yes N/A 2019 PAYG BYOL 1 Yes N/A 2022 PAYG N/A Yes N/A 2025 PAYG N/A No N/A Image import You can import a virtual disk to Compute Engine using Migrate to Virtual Machines, if the VM is running an operating system that is listed in the following table.
- If you are running VMs on Compute Engine with Oracle Linux, Google Cloud provides support for your VMs as part of Google Cloud support packages.

### Migrate to Virtual Machines best practices \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/discover/migrating-vms-migrate-for-compute-engine-best-practices](https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/discover/migrating-vms-migrate-for-compute-engine-best-practices)
- Source ID: `site-docs-reference`
- Final score: 189
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For example, after analyzing the migration plan, you might determine values for the following: The expected migration duration The expected number of VMs to migrate for each time unit The total migration cost The migration cost per VM The available network throughput The compatibility of the tools you're using for backup and disaster recovery with the target environment Consider all deployment environments for your applications when you analyze the migration plan.
- If there's no VMware host in the network, we recommend one of the following options to migrate your VMs to a source environment that Migrate to Virtual Machines supports: Migrate VMware VMs with VMware HCX to Google Cloud VMware Engine .
- Analyze your current environment to rightsize the target environment To draft a complete migration plan, define the machine type of each VM in the target environment for each VM that you want to migrate from the source environment.
- Ensure that your VMs are correctly prepared Before you migrate your VMs or physical servers, ensure that they are correctly prepared for the migration without any errors or warnings.

### "VM migration process \_|\_ Migrate to Virtual Machines \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/discover/lifecycle](https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/discover/lifecycle)
- Source ID: `site-docs-reference`
- Final score: 179
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Cut-over phase In the cut-over phase, the source VM is stopped by Migrate to Virtual Machines, replication is finalized, and a new VM instance is created on Compute Engine on Google Cloud: You should only perform the cut-over after you have performed all validations during the recommended testing phase.
- Set target details After you initiate data replication, set the Compute Engine target environment on Google Cloud for the migrated VM: The Compute Engine target details define the landing zone for a migrated VM on Google Cloud.
- After you perform finalize, the only allowed operations on the migration are: Delete the migration Add to or remove from a group Note: Finalize does not delete Compute Engine instances running a migrated VM.
- For example, Migrate to Virtual Machines adapts network configurations, deploys the Compute Engine agent, and enables the serial console on the migrated VM.

