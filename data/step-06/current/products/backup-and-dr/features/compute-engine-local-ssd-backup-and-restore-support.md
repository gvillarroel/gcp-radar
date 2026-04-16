---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T09:35:01.941Z"
product_name: "Backup and DR"
product_slug: "backup-and-dr"
feature_name: "Compute Engine local SSD backup and restore support"
feature_slug: "compute-engine-local-ssd-backup-and-restore-support"
latest_feature_date: "2023-08-21"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/compute/docs/accelerator-optimized-machines"
  - "https://docs.cloud.google.com/compute/docs/compute-optimized-machines"
  - "https://docs.cloud.google.com/backup-disaster-recovery/docs/quickstarts/sap-hana-on-gce-backup-recovery"
keywords:
  - "local"
  - "restore"
  - "compute"
  - "engine"
  - "added"
---

# Compute Engine local SSD backup and restore support

Product: Backup and DR
Coverage: MEDIUM

## Step 02 Summary

Backup and DR Service added support for backing up and restoring Compute Engine instances that use local SSDs.

## Extended Definition

Backup and DR Service added support for backing up and restoring Compute Engine instances that use local SSDs.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/compute/docs/accelerator-optimized-machines](https://docs.cloud.google.com/compute/docs/accelerator-optimized-machines)
- [https://docs.cloud.google.com/compute/docs/compute-optimized-machines](https://docs.cloud.google.com/compute/docs/compute-optimized-machines)
- [https://docs.cloud.google.com/backup-disaster-recovery/docs/quickstarts/sap-hana-on-gce-backup-recovery](https://docs.cloud.google.com/backup-disaster-recovery/docs/quickstarts/sap-hana-on-gce-backup-recovery)

## Supporting Pages

### Compute-optimized machine family for Compute Engine \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/compute/docs/compute-optimized-machines](https://docs.cloud.google.com/compute/docs/compute-optimized-machines)
- Source ID: `site-docs-reference-2`
- Final score: 158
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Machine Workloads H4D machine series HPC workloads and multi-node workloads Manufacturing Weather forecasting Electronic design automation (EDA) Healthcare and life sciences Scientific computing H3 machine series HPC workloads Computational fluid dynamics Crash safety Genomics Financial modeling General scientific and engineering computing C2D machine series Memory-bound workloads Gaming (AAA game servers) High performance computing (HPC) High performance databases Electronic Design Automation (EDA) Media transcoding C2 machine series Compute-bound workloads High-performance web serving Gaming (AAA game servers) Ad serving High performance computing (HPC) Media transcoding AI/ML The following machine series are available in this machine family: H4D instances are powered by Titanium and fifth generation AMD EPYC Turin processors which have a base frequency of 2.7 GHz and a maximum frequency of 4.1 GHz.
- Home Documentation Compute Compute Engine Guides Send feedback Compute-optimized machine family for Compute Engine Stay organized with collections Save and categorize content based on your preferences.
- Maintenance experience for H4D instances During the lifecycle of a Compute Engine instance , the host machine that your instance runs on undergoes multiple host events .
- Maintenance experience for C2D instances During the lifecycle of a Compute Engine instance , the host machine that your instance runs on undergoes multiple host events .

### "Accelerator-optimized machine family \_|\_ Compute Engine \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/compute/docs/accelerator-optimized-machines](https://docs.cloud.google.com/compute/docs/accelerator-optimized-machines)
- Source ID: `site-docs-reference-2`
- Final score: 156
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Supported disk types for A4X Max and A4X instances A4X Max A4X Max instances can use the following block storage types: Hyperdisk Balanced ( hyperdisk-balanced ): this is the only disk type that is supported for the boot disk Hyperdisk Throughput ( hyperdisk-throughput ) Hyperdisk ML ( hyperdisk-ml ) Hyperdisk Extreme ( hyperdisk-extreme ) Local SSD: which is automatically added to instances that are created by using any of the A4X Max machine types Maximum number of disks per instance 1 Machine types All Hyperdisk Hyperdisk Balanced Hyperdisk Throughput Hyperdisk ML Hyperdisk Extreme Attached Local SSD a4x-maxgpu-4g-metal 32 32 32 32 8 4 A4X A4X instances can use the following block storage types: Hyperdisk Balanced ( hyperdisk-balanced ): this is the only disk type that is supported for the boot disk Hyperdisk Extreme ( hyperdisk-extreme ) Hyperdisk ML ( hyperdisk-ml ) Local SSD: which is automatically added to instances that are created by using any of the A4X machine types Maximum number of disks per instance 1 Machine types All Hyperdisk Hyperdisk Balanced Hyperdisk Balanced High Availability Hyperdisk Throughput Hyperdisk ML Hyperdisk Extreme Attached Local SSD a4x-highgpu-4g 128 128 0 0 128 8 4 1 Hyperdisk usage is charged separately from machine type pricing .
- A3 High A3 High instances can use the following block storage types: Balanced Persistent Disk ( pd-balanced ) SSD (performance) Persistent Disk ( pd-ssd ) Hyperdisk Balanced ( hyperdisk-balanced ) Hyperdisk Balanced High Availability ( hyperdisk-balanced-high-availability ) Hyperdisk ML ( hyperdisk-ml ) Hyperdisk Extreme ( hyperdisk-extreme ) Hyperdisk Throughput ( hyperdisk-throughput ) Local SSD: which is automatically added to instances that are created by using any of the A3 machine types Maximum number of disks per instance 1 Machine types All Hyperdisk Hyperdisk Balanced Hyperdisk Balanced High Availability Hyperdisk Throughput Hyperdisk ML Hyperdisk Extreme Attached Local SSD disks a3-highgpu-1g 128 32 32 64 64 N/A 2 a3-highgpu-2g 128 32 32 64 64 N/A 4 a3-highgpu-4g 128 32 32 64 64 8 8 a3-highgpu-8g 128 32 32 64 64 8 16 1 Hyperdisk and Persistent Disk usage are charged separately from machine type pricing .
- A3 Mega A3 Mega instances can use the following block storage types: Balanced Persistent Disk ( pd-balanced ) SSD (performance) Persistent Disk ( pd-ssd ) Hyperdisk Balanced ( hyperdisk-balanced ) Hyperdisk Balanced High Availability ( hyperdisk-balanced-high-availability ) Hyperdisk ML ( hyperdisk-ml ) Hyperdisk Extreme ( hyperdisk-extreme ) Hyperdisk Throughput ( hyperdisk-throughput ) Local SSD: which is automatically added to instances that are created by using any of the A3 machine types Maximum number of disks per instance 1 Machine types All Hyperdisk Hyperdisk Balanced Hyperdisk Balanced High Availability Hyperdisk Throughput Hyperdisk ML Hyperdisk Extreme Attached Local SSD disks a3-megagpu-8g 128 32 32 64 64 8 16 1 Hyperdisk and Persistent Disk usage are charged separately from machine type pricing .
- A3 Edge A3 Edge instances can use the following block storage types: Balanced Persistent Disk ( pd-balanced ) SSD (performance) Persistent Disk ( pd-ssd ) Hyperdisk Balanced ( hyperdisk-balanced ) Hyperdisk Balanced High Availability ( hyperdisk-balanced-high-availability ) Hyperdisk ML ( hyperdisk-ml ) Hyperdisk Extreme ( hyperdisk-extreme ) Hyperdisk Throughput ( hyperdisk-throughput ) Local SSD: which is automatically added to instances that are created by using any of the A3 machine types Maximum number of disks per instance 1 Machine types All Hyperdisk Hyperdisk Balanced Hyperdisk Balanced High Availability Hyperdisk Throughput Hyperdisk ML Hyperdisk Extreme Attached Local SSD a3-edgegpu-8g 128 32 32 64 64 8 16 1 Hyperdisk and Persistent Disk usage are charged separately from machine type pricing .

### "Protect and recover SAP HANA databases in Compute Engine instances \_|\_\

- URL: [https://docs.cloud.google.com/backup-disaster-recovery/docs/quickstarts/sap-hana-on-gce-backup-recovery](https://docs.cloud.google.com/backup-disaster-recovery/docs/quickstarts/sap-hana-on-gce-backup-recovery)
- Source ID: `site-docs-reference`
- Final score: 152
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Install the Backup and DR agent on the Compute Engine Create a backup plan for the SAP HANA database Discover and protect SAP HANA databases Mount an SAP HANA backup image as a standard mount Restore SAP HANA databases Install the Backup and DR agent on the host The Backup and DR agent connects the Compute Engine instance to the backup/recovery appliance.
- Deploy Backup and DR Service first Before you begin, you must read and complete the following procedures: Plan a Backup and DR deployment Prepare to deploy Backup and DR Deploy Backup and DR See how Backup and DR Service works Then see how Backup and DR Service works by going through Get started with Backup and DR: protect and recover a Compute Engine instance .
- All SAP HANA servers (Compute Engine) that have HANA data to be protected by Backup and DR Service must have been onboarded to Backup and DR Service All SAP HANA servers (Compute Engine) that have HANA data to be protected by Backup and DR Service must have the Backup and DR agent installed.
- About this quickstart exercise This exercise guides you through the steps of discovering and protecting an SAP HANA database running in a Compute Engine instance, and finally mounting a fully-functional new HANA database from the backup image to a new location.

