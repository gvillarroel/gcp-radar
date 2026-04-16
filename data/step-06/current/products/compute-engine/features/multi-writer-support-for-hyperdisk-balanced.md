---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:50:03.161Z"
product_name: "Compute Engine"
product_slug: "compute-engine"
feature_name: "Multi-writer support for Hyperdisk Balanced"
feature_slug: "multi-writer-support-for-hyperdisk-balanced"
latest_feature_date: "2024-09-05"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/compute/docs/disks/hyperdisks"
  - "https://docs.cloud.google.com/compute/docs/disks/hyperdisks"
  - "https://docs.cloud.google.com/compute/docs/disks/persistent-disks"
keywords:
  - "multi"
  - "writer"
  - "hyperdisk"
  - "balanced"
  - "disks"
  - "can"
  - "attached"
  - "mode"
---

# Multi-writer support for Hyperdisk Balanced

Product: Compute Engine
Coverage: MEDIUM

## Step 02 Summary

Hyperdisk Balanced disks can be attached in multi-writer mode so up to eight VMs can read and write simultaneously.

## Extended Definition

Hyperdisk Balanced disks can be attached in multi-writer mode so up to eight VMs can read and write simultaneously.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/compute/docs/disks/hyperdisks](https://developers.google.com/compute/docs/disks/hyperdisks)
- [https://docs.cloud.google.com/compute/docs/disks/hyperdisks](https://docs.cloud.google.com/compute/docs/disks/hyperdisks)
- [https://docs.cloud.google.com/compute/docs/disks/persistent-disks](https://docs.cloud.google.com/compute/docs/disks/persistent-disks)

## Supporting Pages

### "Google Cloud Hyperdisk overview \_|\_ Compute Engine \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/compute/docs/disks/hyperdisks](https://docs.cloud.google.com/compute/docs/disks/hyperdisks)
- Source ID: `site-docs-root`
- Final score: 231
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You can use Confidential mode only with Hyperdisk Balanced disks that are attached to Confidential VMs.
- Workload type Recommended Hyperdisk type Unique features Max IOPS and throughput per volume Most enterprise applications Boot disks Virtual desktops Postgres, MySQL Hyperdisk Balanced Designed to be the best fit for the majority of workloads Best combination of price and performance Supports simultaneous read-write access to the same volume from up to 8 instances IOPS : 160,000 Throughput : 2,400 MiB/s Highly-available, mission-critical applications that require a recovery point objective of 0 Hyperdisk Balanced High Availability Offers data replication in two zones within the same region for quick failover Supports simultaneous read-write access to the same volume from up to 8 instances IOPS : 100,000 Throughput : 2,400 MiB/s SAP HANA High-end SQL Server, Oracle, and in-memory RDBMS Hyperdisk Extreme Offers the highest IOPS IOPS : 350,000 Throughput : 5,000 MiB/s 1 High-performance computing (HPC) Machine learning, AI inference or training Accelerator-optimized workloads Hyperdisk ML Supports attaching a single volume in read-only mode to up to 2,500 instances.
- Hyperdisk type Supported regions Hyperdisk Balanced Available in all zones and regions Hyperdisk Balanced High Availability Available in all zones and regions except for AI zones Hyperdisk Extreme Available in all zones and regions Hyperdisk ML Available in all zones and regions Hyperdisk Throughput Available in all zones and regions Share Hyperdisk volumes between instances You can share a Hyperdisk volume between multiple instances by simultaneously attaching the same volume to multiple instances.
- Hyperdisk type Minimum size Maximum size Default size Hyperdisk Balanced 4 GiB 64 TiB 100 GiB Hyperdisk Balanced High Availability 4 GiB 64 TiB 100 GiB Hyperdisk Extreme 64 GiB 64 TiB 1 TiB Hyperdisk ML 4 GiB 64 TiB 100 GiB Hyperdisk Throughput 2 TiB 32 TiB 2 TiB However, the size of a Hyperdisk volume that's attached to an instance can't exceed the instance's Hyperdisk limits .

### "Google Cloud Hyperdisk overview \_|\_ Compute Engine \_|\_ Google Cloud\

- URL: [https://developers.google.com/compute/docs/disks/hyperdisks](https://developers.google.com/compute/docs/disks/hyperdisks)
- Source ID: `site-docs-root-3`
- Final score: 231
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You can use Confidential mode only with Hyperdisk Balanced disks that are attached to Confidential VMs.
- Workload type Recommended Hyperdisk type Unique features Max IOPS and throughput per volume Most enterprise applications Boot disks Virtual desktops Postgres, MySQL Hyperdisk Balanced Designed to be the best fit for the majority of workloads Best combination of price and performance Supports simultaneous read-write access to the same volume from up to 8 instances IOPS : 160,000 Throughput : 2,400 MiB/s Highly-available, mission-critical applications that require a recovery point objective of 0 Hyperdisk Balanced High Availability Offers data replication in two zones within the same region for quick failover Supports simultaneous read-write access to the same volume from up to 8 instances IOPS : 100,000 Throughput : 2,400 MiB/s SAP HANA High-end SQL Server, Oracle, and in-memory RDBMS Hyperdisk Extreme Offers the highest IOPS IOPS : 350,000 Throughput : 5,000 MiB/s 1 High-performance computing (HPC) Machine learning, AI inference or training Accelerator-optimized workloads Hyperdisk ML Supports attaching a single volume in read-only mode to up to 2,500 instances.
- Hyperdisk type Supported regions Hyperdisk Balanced Available in all zones and regions Hyperdisk Balanced High Availability Available in all zones and regions except for AI zones Hyperdisk Extreme Available in all zones and regions Hyperdisk ML Available in all zones and regions Hyperdisk Throughput Available in all zones and regions Share Hyperdisk volumes between instances You can share a Hyperdisk volume between multiple instances by simultaneously attaching the same volume to multiple instances.
- Hyperdisk type Minimum size Maximum size Default size Hyperdisk Balanced 4 GiB 64 TiB 100 GiB Hyperdisk Balanced High Availability 4 GiB 64 TiB 100 GiB Hyperdisk Extreme 64 GiB 64 TiB 1 TiB Hyperdisk ML 4 GiB 64 TiB 100 GiB Hyperdisk Throughput 2 TiB 32 TiB 2 TiB However, the size of a Hyperdisk volume that's attached to an instance can't exceed the instance's Hyperdisk limits .

### Persistent Disk \_|\_ Compute Engine \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/compute/docs/disks/persistent-disks](https://docs.cloud.google.com/compute/docs/disks/persistent-disks)
- Source ID: `site-docs-root`
- Final score: 209
- Re-rank relevance: N/A

Evidence snippets:
- Multi-writer mode Caution: Google recommends using Hyperdisk Balanced or Hyperdisk Balanced High Availability ( Preview ) volumes in multi-writer mode instead of SSD Persistent Disk volumes.
- You can't use a Hyperdisk Balanced High Availability volume that's in multi-writer mode as a boot disk.
- To enable multi-writer mode for new Persistent Disk volumes, create a new Persistent Disk and specify the --multi-writer flag in the gcloud CLI or the multiWriter property in the Compute Engine API.
- Persistent Disk in multi-writer mode provides a shared block storage capability and presents an infrastructural foundation for building highly available shared file systems and databases.

