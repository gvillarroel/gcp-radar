---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T09:35:01.934Z"
product_name: "Backup and DR"
product_slug: "backup-and-dr"
feature_name: "Built-in reporting platform integration for Backup and DR"
feature_slug: "built-in-reporting-platform-integration-for-backup-and-dr"
latest_feature_date: "2024-02-28"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/backup-disaster-recovery/docs/supportmatrix-backupdr"
  - "https://docs.cloud.google.com/compute/docs/accelerator-optimized-machines"
  - "https://docs.cloud.google.com/compute/docs/cpu-platforms"
keywords:
  - "platform"
  - "built"
  - "reporting"
  - "system"
  - "integration"
  - "added"
---

# Built-in reporting platform integration for Backup and DR

Product: Backup and DR
Coverage: MEDIUM

## Step 02 Summary

Backup and DR Service added a reporting system built on Cloud Monitoring, Cloud Logging, and BigQuery.

## Extended Definition

Backup and DR Service added a reporting system built on Cloud Monitoring, Cloud Logging, and BigQuery.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/backup-disaster-recovery/docs/supportmatrix-backupdr](https://docs.cloud.google.com/backup-disaster-recovery/docs/supportmatrix-backupdr)
- [https://docs.cloud.google.com/compute/docs/accelerator-optimized-machines](https://docs.cloud.google.com/compute/docs/accelerator-optimized-machines)
- [https://docs.cloud.google.com/compute/docs/cpu-platforms](https://docs.cloud.google.com/compute/docs/cpu-platforms)

## Supporting Pages

### "Accelerator-optimized machine family \_|\_ Compute Engine \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/compute/docs/accelerator-optimized-machines](https://docs.cloud.google.com/compute/docs/accelerator-optimized-machines)
- Source ID: `site-docs-reference-2`
- Final score: 89
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Supported disk types for A4X Max and A4X instances A4X Max A4X Max instances can use the following block storage types: Hyperdisk Balanced ( hyperdisk-balanced ): this is the only disk type that is supported for the boot disk Hyperdisk Throughput ( hyperdisk-throughput ) Hyperdisk ML ( hyperdisk-ml ) Hyperdisk Extreme ( hyperdisk-extreme ) Local SSD: which is automatically added to instances that are created by using any of the A4X Max machine types Maximum number of disks per instance 1 Machine types All Hyperdisk Hyperdisk Balanced Hyperdisk Throughput Hyperdisk ML Hyperdisk Extreme Attached Local SSD a4x-maxgpu-4g-metal 32 32 32 32 8 4 A4X A4X instances can use the following block storage types: Hyperdisk Balanced ( hyperdisk-balanced ): this is the only disk type that is supported for the boot disk Hyperdisk Extreme ( hyperdisk-extreme ) Hyperdisk ML ( hyperdisk-ml ) Local SSD: which is automatically added to instances that are created by using any of the A4X machine types Maximum number of disks per instance 1 Machine types All Hyperdisk Hyperdisk Balanced Hyperdisk Balanced High Availability Hyperdisk Throughput Hyperdisk ML Hyperdisk Extreme Attached Local SSD a4x-highgpu-4g 128 128 0 0 128 8 4 1 Hyperdisk usage is charged separately from machine type pricing .
- A3 High A3 High instances can use the following block storage types: Balanced Persistent Disk ( pd-balanced ) SSD (performance) Persistent Disk ( pd-ssd ) Hyperdisk Balanced ( hyperdisk-balanced ) Hyperdisk Balanced High Availability ( hyperdisk-balanced-high-availability ) Hyperdisk ML ( hyperdisk-ml ) Hyperdisk Extreme ( hyperdisk-extreme ) Hyperdisk Throughput ( hyperdisk-throughput ) Local SSD: which is automatically added to instances that are created by using any of the A3 machine types Maximum number of disks per instance 1 Machine types All Hyperdisk Hyperdisk Balanced Hyperdisk Balanced High Availability Hyperdisk Throughput Hyperdisk ML Hyperdisk Extreme Attached Local SSD disks a3-highgpu-1g 128 32 32 64 64 N/A 2 a3-highgpu-2g 128 32 32 64 64 N/A 4 a3-highgpu-4g 128 32 32 64 64 8 8 a3-highgpu-8g 128 32 32 64 64 8 16 1 Hyperdisk and Persistent Disk usage are charged separately from machine type pricing .
- A3 Mega A3 Mega instances can use the following block storage types: Balanced Persistent Disk ( pd-balanced ) SSD (performance) Persistent Disk ( pd-ssd ) Hyperdisk Balanced ( hyperdisk-balanced ) Hyperdisk Balanced High Availability ( hyperdisk-balanced-high-availability ) Hyperdisk ML ( hyperdisk-ml ) Hyperdisk Extreme ( hyperdisk-extreme ) Hyperdisk Throughput ( hyperdisk-throughput ) Local SSD: which is automatically added to instances that are created by using any of the A3 machine types Maximum number of disks per instance 1 Machine types All Hyperdisk Hyperdisk Balanced Hyperdisk Balanced High Availability Hyperdisk Throughput Hyperdisk ML Hyperdisk Extreme Attached Local SSD disks a3-megagpu-8g 128 32 32 64 64 8 16 1 Hyperdisk and Persistent Disk usage are charged separately from machine type pricing .
- A3 Edge A3 Edge instances can use the following block storage types: Balanced Persistent Disk ( pd-balanced ) SSD (performance) Persistent Disk ( pd-ssd ) Hyperdisk Balanced ( hyperdisk-balanced ) Hyperdisk Balanced High Availability ( hyperdisk-balanced-high-availability ) Hyperdisk ML ( hyperdisk-ml ) Hyperdisk Extreme ( hyperdisk-extreme ) Hyperdisk Throughput ( hyperdisk-throughput ) Local SSD: which is automatically added to instances that are created by using any of the A3 machine types Maximum number of disks per instance 1 Machine types All Hyperdisk Hyperdisk Balanced Hyperdisk Balanced High Availability Hyperdisk Throughput Hyperdisk ML Hyperdisk Extreme Attached Local SSD a3-edgegpu-8g 128 32 32 64 64 8 16 1 Hyperdisk and Persistent Disk usage are charged separately from machine type pricing .

### Support matrix \_|\_ Backup and DR \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/backup-disaster-recovery/docs/supportmatrix-backupdr](https://docs.cloud.google.com/backup-disaster-recovery/docs/supportmatrix-backupdr)
- Source ID: `site-docs-root`
- Final score: 84
- Re-rank relevance: N/A

Evidence snippets:
- Application Discovery : Backup and DR agent enables deep discovery of databases and file systems configured on a production host API integration : Where possible, Backup and DR agents integrate with the application specific APIs/commands for efficient capture of application data Change Block Tracking : In situations where the production applications don't have a built-in change block tracking, Backup and DR introduces change block tracking on select platforms Application aware recovery/mount : Backup and DR agents have built in application awareness.
- Third-party hardware and software include hardware platforms, operating systems, and application software protected by backup/recovery appliances.
- Oracle family Config types Supported OSes Min required Backup and DR agent version Oracle 21c All Versions Standalone RHEL 8.4 Rocky Linux 8.7 Windows 2016, 2019 V11.0.7 RAC RHEL 8.4 Rocky Linux 8.7 Windows 2016, 2019 V11.0.7 Exadata 1 RHEL 8.4 Rocky Linux 8.7 Windows 2016, 2019 V11.0.7 Non Active Data Guard 2 RHEL 8.4 Rocky Linux 8.7 Windows 2016, 2019 V11.0.7 Active Data Guard 2 RHEL 8.4 Rocky Linux 8.7 Windows 2016, 2019 V11.0.7 Oracle 19c 3 All Versions Standalone OEL 7.x, 8.x, 9.0, 9.6 RHEL 8.x, SLES 12, 15 Windows 2016, 2019 RHEL 8.10 RHEL 9.5 with kernel 5.14.0-503.23.1 V11.0.1 V11.0.15 ASM Standalone OEL 9.6 V11.0.17 Rocky Linux 8.7 V11.0.7 RAC OEL 7.x, 8.x, 9.0 RHEL 8.x SLES 12, 15 Windows 2016, 2019 V11.0.1 Rocky Linux 8.7 V11.0.7 Exadata 1 OEL 7.x, 8.x, 9.0 RHEL 8.x SLES 12, 15 Windows 2016, 2019 V11.0.1 Rocky Linux 8.7 V11.0.7 Non Active Data Guard 2 OEL 7.x, 8.x, 9.0 RHEL 8.x SLES 12, 15 Windows 2016, 2019 V11.0.1 Rocky Linux 8.7 V11.0.7 Active Data Guard 2 OEL 7.x, 8.x, 9.0 RHEL 8.x SLES 12, 15 Windows 2016, 2019 V11.0.1 Rocky Linux 8.7 V11.0.7 Oracle 18c 3 All Versions Standalone OEL 7.x, 8.x, 9.0 RHEL 8.x SLES 12, 15 Windows 2016, 2019 V11.0.1 RAC OEL 7.x, 8.x, 9.0 RHEL 8.x SLES 12, 15 Windows 2016, 2019 V11.0.1 Exadata 1 OEL 7.x, 8.x, 9.0 RHEL 8.x SLES 12, 15 Windows 2016, 2019 V11.0.1 Non Active Data Guard 2 OEL 7.x, 8.x, 9.0 RHEL 8.x SLES 12, 15 Windows 2016, 2019 V11.0.1 Active Data Guard 3 OEL 7.x, 8.x, 9.0 RHEL 8.x SLES 12, 15 Windows 2016, 2019 V11.0.1 1 Oracle Exadata system is supported with iSCSI and NFS 2 Oracle database RMAN change block tracking is available on Active Data Guard only 3 Data capture of Oracle 18c and later is at container level (that includes all PDBs).
- Supported Configuration SAP HANA SavePoint API 2 SAP file-based (HDBSQL/Backint) 3 Supported OSes Min required Backup and DR agent version Scale-out HANA 2.0, non shared storage Yes (preferred) 1 Yes RHEL 8.4 SLES 12 SP5 SLES 15 SP3 V11.0.1 Yes (preferred) 1 Yes RHEL 8.6 SLES 15 SP4 V11.0.4 Yes (preferred) 1 Yes RHEL 8.8 V11.0.16 Yes (preferred) 1 Yes RHEL 8.10 V11.0.14 Yes (preferred) 1 Yes RHEL 9.2 V11.0.15 Yes (preferred) 1 Yes RHEL 9.4 V11.0.15 Yes (preferred) 1 Yes RHEL 9.5 V11.0.14 Yes (preferred) 1 Yes RHEL 9.6 V11.0.16 Yes (preferred) 1 Yes SLES 15 SP5 V11.0.9 Yes (preferred) 1 Yes SLES 15 SP7 V11.0.16 Scale-out HANA 2.0, shared storage 4 Not Supported Yes RHEL 8.4 SLES 12 SP5 SLES 15 SP3 V11.0.1 Not Supported Yes RHEL 8.6 SLES 15 SP4 V11.0.4 Yes (preferred) 1 Yes SLES 15 SP5 V11.0.9 SAP HANA 2.0 Standalone or HA (1+1) Yes (preferred) 1 Yes RHEL 8.4 SLES 12 SP5 SLES 15 SP3 V11.0.1 Yes (preferred) 1 Yes RHEL 8.6 SLES 15 SP4 V11.0.4 Yes (preferred) 1 Yes SLES 15 SP5 V11.0.9 Single Container System (HANA 1.0) 5 Yes (preferred) Yes RHEL 8.4 SLES 12 SP5 SLES 15 SP3 V11.0.1 Yes (preferred) Yes RHEL 8.6 SLES 15 SP4 V11.0.4 Yes (preferred) 1 Yes SLES 15 SP5 V11.0.9 1 Requires SAP HANA 2.0 SPS 04 or later 2 In this table, 'SAP HANA SavePoint API' is referring to SAP HANA backup leveraging Backup and DR CBT and its supporting incremental-forever and app-aware instant mount feature with log roll-forward option.

### CPU platforms \_|\_ Compute Engine \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/compute/docs/cpu-platforms](https://docs.cloud.google.com/compute/docs/cpu-platforms)
- Source ID: `site-docs-reference-2`
- Final score: 83
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Advanced Vector Extensions (AVX2) AVX2 (also known as Haswell New Instructions) introduces the following additions to AVX: Expands most vector integer SSE and AVX instructions to 256 bits Adds support for Gather, enabling vector elements to be loaded from non-contiguous memory locations Any-to-any permutes with DWORD- and QWORD-granularity Vector shifts AVX2 is available with the following CPU platforms: Intel Xeon E5 v3 (Haswell) and newer processors All AMD processors Advanced Vector Extensions (AVX512) AVX-512 expands AVX to 512-bit support using the EVEX prefix encoding.
- AVX-512 is available with the following CPU platforms: Intel Xeon Scalable Processor (Skylake) 1st Generation and newer processors AMD EPYC Genoa 4th Generation and newer processors Advanced Matrix Extensions Intel Advanced Matrix Extensions (AMX) is a new instruction set architecture (ISA) extension designed to accelerate artificial intelligence (AI) and machine learning (ML) workloads.
- Confidential Computing To protect your data while it's in use, CPU platforms that support Confidential Computing technologies can be used to create Confidential VM instances.
- Home Documentation Compute Compute Engine Guides Send feedback CPU platforms Stay organized with collections Save and categorize content based on your preferences.

