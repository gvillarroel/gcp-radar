---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:50:03.280Z"
product_name: "Compute Engine"
product_slug: "compute-engine"
feature_name: "SSD persistent disk write throughput increase"
feature_slug: "ssd-persistent-disk-write-throughput-increase"
latest_feature_date: "2019-10-21"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/compute/docs/disks/persistent-disks"
  - "https://docs.cloud.google.com/compute/docs/disks/persistent-disks"
  - "https://docs.cloud.google.com/compute/docs/disks/hyperdisks"
keywords:
  - "ssd"
  - "persistent"
  - "disk"
  - "write"
  - "throughput"
  - "increase"
  - "zonal"
  - "regional"
---

# SSD persistent disk write throughput increase

Product: Compute Engine
Coverage: MEDIUM

## Step 02 Summary

Zonal and regional SSD persistent disks have increased per-instance write throughput.

## Extended Definition

Zonal and regional SSD persistent disks have increased per-instance write throughput.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/compute/docs/disks/persistent-disks](https://developers.google.com/compute/docs/disks/persistent-disks)
- [https://docs.cloud.google.com/compute/docs/disks/persistent-disks](https://docs.cloud.google.com/compute/docs/disks/persistent-disks)
- [https://docs.cloud.google.com/compute/docs/disks/hyperdisks](https://docs.cloud.google.com/compute/docs/disks/hyperdisks)

## Supporting Pages

### Persistent Disk \_|\_ Compute Engine \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/compute/docs/disks/persistent-disks](https://docs.cloud.google.com/compute/docs/disks/persistent-disks)
- Source ID: `site-docs-root`
- Final score: 254
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Like zonal Persistent Disk, Regional Persistent Disk can achieve greater IOPS and throughput performance on VMs with a greater number of vCPUs.
- Zonal standard Persistent Disk Zonal balanced Persistent Disk Zonal SSD Persistent Disk Zonal extreme Persistent Disk Regional standard Persistent Disk Regional balanced Persistent Disk Regional SSD Persistent Disk Better than 99.99% Better than 99.999% Better than 99.999% Better than 99.9999% Better than 99.999% Better than 99.9999% Better than 99.9999% Machine series support A2 A3 (H100) A3 (H200) A4 A4X A4X Max C2 C2D C3 C3D C4 C4A C4D E2 G2 G4 H3 H4D M1 M2 M3 M4 N1 N1+GPU N2 N2D N4 N4A N4D T2A T2D TPU v2 TPU v3 TPU v4 TPU v5e TPU v5p TPU v6e TPU7x X4 Z3 Select a machine series to see its supported Persistent Disk (PD) types.
- For information about machine type support, refer to the following: Zonal Persistent Disk Regional Persistent Disk Durability of Persistent Disk Disk durability represents the probability of data loss, by design, for a typical disk in a typical year, using a set of assumptions about hardware failures, the likelihood of catastrophic events, isolation practices and engineering processes in Google data centers, and the internal encodings used by each disk type.
- Regional Persistent Disk provides twice as many disk replicas as zonal Persistent Disk, with each replica distributed between two zones in the same region.

### Persistent Disk \_|\_ Compute Engine \_|\_ Google Cloud Documentation

- URL: [https://developers.google.com/compute/docs/disks/persistent-disks](https://developers.google.com/compute/docs/disks/persistent-disks)
- Source ID: `site-docs-root-3`
- Final score: 254
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Like zonal Persistent Disk, Regional Persistent Disk can achieve greater IOPS and throughput performance on VMs with a greater number of vCPUs.
- Zonal standard Persistent Disk Zonal balanced Persistent Disk Zonal SSD Persistent Disk Zonal extreme Persistent Disk Regional standard Persistent Disk Regional balanced Persistent Disk Regional SSD Persistent Disk Better than 99.99% Better than 99.999% Better than 99.999% Better than 99.9999% Better than 99.999% Better than 99.9999% Better than 99.9999% Machine series support A2 A3 (H100) A3 (H200) A4 A4X A4X Max C2 C2D C3 C3D C4 C4A C4D E2 G2 G4 H3 H4D M1 M2 M3 M4 N1 N1+GPU N2 N2D N4 N4A N4D T2A T2D TPU v2 TPU v3 TPU v4 TPU v5e TPU v5p TPU v6e TPU7x X4 Z3 Select a machine series to see its supported Persistent Disk (PD) types.
- For information about machine type support, refer to the following: Zonal Persistent Disk Regional Persistent Disk Durability of Persistent Disk Disk durability represents the probability of data loss, by design, for a typical disk in a typical year, using a set of assumptions about hardware failures, the likelihood of catastrophic events, isolation practices and engineering processes in Google data centers, and the internal encodings used by each disk type.
- Regional Persistent Disk provides twice as many disk replicas as zonal Persistent Disk, with each replica distributed between two zones in the same region.

### "Google Cloud Hyperdisk overview \_|\_ Compute Engine \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/compute/docs/disks/hyperdisks](https://docs.cloud.google.com/compute/docs/disks/hyperdisks)
- Source ID: `site-docs-root`
- Final score: 212
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Workload type Recommended Hyperdisk type Unique features Max IOPS and throughput per volume Most enterprise applications Boot disks Virtual desktops Postgres, MySQL Hyperdisk Balanced Designed to be the best fit for the majority of workloads Best combination of price and performance Supports simultaneous read-write access to the same volume from up to 8 instances IOPS : 160,000 Throughput : 2,400 MiB/s Highly-available, mission-critical applications that require a recovery point objective of 0 Hyperdisk Balanced High Availability Offers data replication in two zones within the same region for quick failover Supports simultaneous read-write access to the same volume from up to 8 instances IOPS : 100,000 Throughput : 2,400 MiB/s SAP HANA High-end SQL Server, Oracle, and in-memory RDBMS Hyperdisk Extreme Offers the highest IOPS IOPS : 350,000 Throughput : 5,000 MiB/s 1 High-performance computing (HPC) Machine learning, AI inference or training Accelerator-optimized workloads Hyperdisk ML Supports attaching a single volume in read-only mode to up to 2,500 instances.
- Support for high availability : in the unlikely event of a zonal or regional outage, you can ensure high availability for your data by enabling one or both of the following features: To protect your data in case of a zonal outage, use Hyperdisk Balanced High Availability .
- High availability and disaster recovery protection for Hyperdisk volumes You can protect your data in the rare event of a zonal or regional outage by enabling replication, that is, maintaining a copy of the data in another zone or region.
- Higher performance : Hyperdisk offers higher IOPS and throughput than Persistent Disk by leveraging Google's Titanium storage offload technology.

