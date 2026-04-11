---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T18:19:23.976Z"
product_name: "Bare Metal Solution"
product_slug: "bare-metal-solution"
feature_name: "Performance SSD storage for Bare Metal Solution"
feature_slug: "performance-ssd-storage-for-bare-metal-solution"
latest_feature_date: "2024-05-21"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bare-metal/docs/solutions/oracle/bms-oracle-backup-and-dr"
  - "https://docs.cloud.google.com/bare-metal/docs/bms-planning"
  - "https://docs.cloud.google.com/bare-metal/docs/solutions/oracle/bms-oracle-best-practices"
keywords:
  - "performance"
  - "ssd"
  - "storage"
  - "solution"
  - "you"
  - "metal"
  - "bare"
  - "for"
---

# Performance SSD storage for Bare Metal Solution

Product: Bare Metal Solution
Coverage: LOW

## Step 02 Summary

You can now order Performance SSD storage for Bare Metal Solution.

## Extended Definition

You can now order Performance SSD storage for Bare Metal Solution.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/bare-metal/docs/solutions/oracle/bms-oracle-backup-and-dr](https://docs.cloud.google.com/bare-metal/docs/solutions/oracle/bms-oracle-backup-and-dr)
- [https://docs.cloud.google.com/bare-metal/docs/bms-planning](https://docs.cloud.google.com/bare-metal/docs/bms-planning)
- [https://docs.cloud.google.com/bare-metal/docs/solutions/oracle/bms-oracle-best-practices](https://docs.cloud.google.com/bare-metal/docs/solutions/oracle/bms-oracle-best-practices)

## Supporting Pages

### "Solution Guide: Google Cloud Backup and DR for Oracle on Bare Metal Solution\

- URL: [https://docs.cloud.google.com/bare-metal/docs/solutions/oracle/bms-oracle-backup-and-dr](https://docs.cloud.google.com/bare-metal/docs/solutions/oracle/bms-oracle-backup-and-dr)
- Source ID: `site-docs-root-2`
- Final score: 270
- Re-rank relevance: N/A

Evidence snippets:
- Understand the factors that impact performance for the network and your backup servers The following items affect network I/O between Oracle on Bare Metal Solution and your backup servers in Google Cloud: Flash storage Similar to Google Cloud Persistent Disk, the flash storage arrays that provide the storage for Bare Metal Solution systems increase I/O capabilities based on how much storage you assign to the host.
- Figure 1 : Components for using Backup and DR with Oracle databases in a Bare Metal Solution environment As you can see in the diagram, this solution requires the following components: Bare Metal Solution regional extension– Allows you to run Oracle databases in a third-party data center adjacent to a Google Cloud data center, and use your existing on-premises software licenses.
- When you enable Direct NFS for an Oracle database, configure sufficient source CPU (for example, 8x vCPUs and 8 RMAN channels), and establish a 10GB link between your Bare Metal Solution regional extension and Google Cloud, you can back up a single Oracle database with increased throughput between 700-900+ MB/s.
- Solution Guide: Google Cloud Backup and DR for Oracle on Bare Metal Solution Overview To provide resiliency for your Oracle databases inside a Bare Metal Solution environment, you need to have a clear strategy for database backups and disaster recovery.

### Plan for Bare Metal Solution \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bare-metal/docs/bms-planning](https://docs.cloud.google.com/bare-metal/docs/bms-planning)
- Source ID: `site-docs-root`
- Final score: 242
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Storage performance Standard SSD Storage For Fibre Channel and NFS storage, Bare Metal Solution provides throughput and input/output operations per second (IOPS) performance calculated according to the following formula for an 8 KiB block size on an SSD drive: Calculated IOPS = 7200 Volume Size in TiB Maximum Throughput (MiBps) = Calculated IOPS 8 / 1024 The following table shows the IOPS and the throughput for common volume sizes: Volume size Read/Write IOPS Throughput (MiBps) Read/Write latency 200 GiB (0.2 TiB) 1400 10.9 1 TiB 7200 56 4 TiB 28800 225 8 TiB 57600 450 12 TiB 86400 675 16 TiB 115200 900 Performance SSD Storage For Fibre Channel storage, Bare Metal Solution provides throughput and input/output operations per second (IOPS) performance calculated according to the following formula for a 32 KiB block size on a Performance SSD drive: Calculated IOPS = 8192 Volume Size in TiB Maximum Throughput (MiBps) = Calculated IOPS 32 / 1024 The maximum volume size for a Performance SSD volume is 8 TiB.
- Use the following storage recommendations to improve the performance of your databases and applications in your Bare Metal Solution environment: When you deploy multiple storage volumes, use consistent volume sizes to get consistent performance for databases and applications.
- Storage For storage in a Bare Metal Solution environment, you need to select the type of storage you need, know how to maximize the performance , and decide if you want to enable snapshots .
- Plan for Bare Metal Solution This document explains the key components of Bare Metal Solution to help you decide how to deploy servers, networking, and storage in your own Bare Metal Solution environment.

### Best practices for Oracle on Bare Metal Solution \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bare-metal/docs/solutions/oracle/bms-oracle-best-practices](https://docs.cloud.google.com/bare-metal/docs/solutions/oracle/bms-oracle-best-practices)
- Source ID: `site-docs-root`
- Final score: 236
- Re-rank relevance: N/A

Evidence snippets:
- Use a uniform LUN size Create no more than two ASM disk groups Stripe ASM disk groups across all LUNs in all volumes Use LUNs and volumes with the same performance characteristics in the same disk group Do not share storage volumes across multiple RAC clusters Know the required IOPS and throughput capacity before you create ASM disk groups Leave the multipath configuration as-is Configure important settings for ASM Create your ASM disk group with external redundancy Reboot your Bare Metal Solution servers after ASM disk creation Use a uniform LUN size The LUN size you select should be representative of the unit of growth.
- With your on-premises performance numbers handy, check our Bare Metal Solution storage performance table to calculate the amount of storage that you need to allocate to your ASM disk groups and achieve the required performance.
- Our goal is to help you achieve the best storage performance for your Bare Metal Solution environment.
- These instructions use 10g as a value, but the behavior is the same for 19c Grid Infrastructure as well. (Follow MOS Note : 1679409.1) Create your ASM disk group with external redundancy The storage provided by Bare Metal Solution uses NETAPP RAID-DP , which is a form of RAID 6 that protects data even if two disks fail.

