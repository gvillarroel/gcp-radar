---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:50:03.084Z"
product_name: "Compute Engine"
product_slug: "compute-engine"
feature_name: "Hyperdisk ML throughput increase"
feature_slug: "hyperdisk-ml-throughput-increase"
latest_feature_date: "2026-03-31"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/compute/docs/disks/hyperdisks"
  - "https://docs.cloud.google.com/compute/docs/disks/hyperdisks"
  - "https://docs.cloud.google.com/compute/docs/accelerator-optimized-machines"
keywords:
  - "hyperdisk"
  - "ml"
  - "throughput"
  - "increase"
  - "now"
  - "supports"
  - "up"
  - "097"
---

# Hyperdisk ML throughput increase

Product: Compute Engine
Coverage: MEDIUM

## Step 02 Summary

Hyperdisk ML now supports up to 2,097,152 MiB/s of maximum throughput per disk for high-read-throughput machine learning workloads.

## Extended Definition

Hyperdisk ML now supports up to 2,097,152 MiB/s of maximum throughput per disk for high-read-throughput machine learning workloads.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/compute/docs/disks/hyperdisks](https://developers.google.com/compute/docs/disks/hyperdisks)
- [https://docs.cloud.google.com/compute/docs/disks/hyperdisks](https://docs.cloud.google.com/compute/docs/disks/hyperdisks)
- [https://docs.cloud.google.com/compute/docs/accelerator-optimized-machines](https://docs.cloud.google.com/compute/docs/accelerator-optimized-machines)

## Supporting Pages

### "Google Cloud Hyperdisk overview \_|\_ Compute Engine \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/compute/docs/disks/hyperdisks](https://docs.cloud.google.com/compute/docs/disks/hyperdisks)
- Source ID: `site-docs-root`
- Final score: 135
- Re-rank relevance: N/A

Evidence snippets:
- Workload type Recommended Hyperdisk type Unique features Max IOPS and throughput per volume Most enterprise applications Boot disks Virtual desktops Postgres, MySQL Hyperdisk Balanced Designed to be the best fit for the majority of workloads Best combination of price and performance Supports simultaneous read-write access to the same volume from up to 8 instances IOPS : 160,000 Throughput : 2,400 MiB/s Highly-available, mission-critical applications that require a recovery point objective of 0 Hyperdisk Balanced High Availability Offers data replication in two zones within the same region for quick failover Supports simultaneous read-write access to the same volume from up to 8 instances IOPS : 100,000 Throughput : 2,400 MiB/s SAP HANA High-end SQL Server, Oracle, and in-memory RDBMS Hyperdisk Extreme Offers the highest IOPS IOPS : 350,000 Throughput : 5,000 MiB/s 1 High-performance computing (HPC) Machine learning, AI inference or training Accelerator-optimized workloads Hyperdisk ML Supports attaching a single volume in read-only mode to up to 2,500 instances.
- A2 A3 (H100) A3 (H200) A4 A4X A4X Max C2 C2D C3 C3D C4 C4A C4D E2 G2 G4 H3 H4D M1 M2 M3 M4 N1 N1+GPU N2 N2D N4 N4A N4D T2A T2D TPU v2 TPU v3 TPU v4 TPU v5e TPU v5p TPU v6e TPU7x X4 Z3 Clear all Machine series Hyperdisk Balanced Hyperdisk Balanced HA Hyperdisk Extreme Hyperdisk Throughput Hyperdisk ML A2 — — — — A3 (H100) A3 (H200) — A4 — — A4X — — A4X Max — C2 — — — — — C2D — — — — — C3 C3D C4 C4A C4D — — E2 — — — — — G2 — — — G4 H3 — — — H4D — — — — M1 — — — M2 — — — M3 — M4 — — — N1 — — — — — N1+GPU — — — — — N2 — — — N2D — — — — N4 — N4A — N4D — T2A — — — — — T2D — — — — TPU v2 — — — — — TPU v3 — — — — — TPU v4 — — — — — TPU v5e — — — — TPU v5p — — — — TPU v6e — — — TPU7x — — — X4 — — — Z3 — Restrictions for machine series support This section lists the restrictions that apply to the machine series that each Hyperdisk type supports.
- Hyperdisk type Supported regions Hyperdisk Balanced Available in all zones and regions Hyperdisk Balanced High Availability Available in all zones and regions except for AI zones Hyperdisk Extreme Available in all zones and regions Hyperdisk ML Available in all zones and regions Hyperdisk Throughput Available in all zones and regions Share Hyperdisk volumes between instances You can share a Hyperdisk volume between multiple instances by simultaneously attaching the same volume to multiple instances.
- Offers the highest read-only throughput IOPS : 33,554,432 2 Throughput : 2,097,152 MiB/s Scale out analytics workloads like Hadoop, Spark, and Kafka Cold disks Hyperdisk Throughput High throughput for bandwidth and capacity-intensive applications that don't need high IOPS Cost-effective data disks for cost-sensitive applications IOPS : 9,600 2 Throughput : 2,400 MiB/s 1 You can't specify a throughput level for Hyperdisk Extreme volumes.

### "Google Cloud Hyperdisk overview \_|\_ Compute Engine \_|\_ Google Cloud\

- URL: [https://developers.google.com/compute/docs/disks/hyperdisks](https://developers.google.com/compute/docs/disks/hyperdisks)
- Source ID: `site-docs-root-3`
- Final score: 135
- Re-rank relevance: N/A

Evidence snippets:
- Workload type Recommended Hyperdisk type Unique features Max IOPS and throughput per volume Most enterprise applications Boot disks Virtual desktops Postgres, MySQL Hyperdisk Balanced Designed to be the best fit for the majority of workloads Best combination of price and performance Supports simultaneous read-write access to the same volume from up to 8 instances IOPS : 160,000 Throughput : 2,400 MiB/s Highly-available, mission-critical applications that require a recovery point objective of 0 Hyperdisk Balanced High Availability Offers data replication in two zones within the same region for quick failover Supports simultaneous read-write access to the same volume from up to 8 instances IOPS : 100,000 Throughput : 2,400 MiB/s SAP HANA High-end SQL Server, Oracle, and in-memory RDBMS Hyperdisk Extreme Offers the highest IOPS IOPS : 350,000 Throughput : 5,000 MiB/s 1 High-performance computing (HPC) Machine learning, AI inference or training Accelerator-optimized workloads Hyperdisk ML Supports attaching a single volume in read-only mode to up to 2,500 instances.
- A2 A3 (H100) A3 (H200) A4 A4X A4X Max C2 C2D C3 C3D C4 C4A C4D E2 G2 G4 H3 H4D M1 M2 M3 M4 N1 N1+GPU N2 N2D N4 N4A N4D T2A T2D TPU v2 TPU v3 TPU v4 TPU v5e TPU v5p TPU v6e TPU7x X4 Z3 Clear all Machine series Hyperdisk Balanced Hyperdisk Balanced HA Hyperdisk Extreme Hyperdisk Throughput Hyperdisk ML A2 — — — — A3 (H100) A3 (H200) — A4 — — A4X — — A4X Max — C2 — — — — — C2D — — — — — C3 C3D C4 C4A C4D — — E2 — — — — — G2 — — — G4 H3 — — — H4D — — — — M1 — — — M2 — — — M3 — M4 — — — N1 — — — — — N1+GPU — — — — — N2 — — — N2D — — — — N4 — N4A — N4D — T2A — — — — — T2D — — — — TPU v2 — — — — — TPU v3 — — — — — TPU v4 — — — — — TPU v5e — — — — TPU v5p — — — — TPU v6e — — — TPU7x — — — X4 — — — Z3 — Restrictions for machine series support This section lists the restrictions that apply to the machine series that each Hyperdisk type supports.
- Hyperdisk type Supported regions Hyperdisk Balanced Available in all zones and regions Hyperdisk Balanced High Availability Available in all zones and regions except for AI zones Hyperdisk Extreme Available in all zones and regions Hyperdisk ML Available in all zones and regions Hyperdisk Throughput Available in all zones and regions Share Hyperdisk volumes between instances You can share a Hyperdisk volume between multiple instances by simultaneously attaching the same volume to multiple instances.
- Offers the highest read-only throughput IOPS : 33,554,432 2 Throughput : 2,097,152 MiB/s Scale out analytics workloads like Hadoop, Spark, and Kafka Cold disks Hyperdisk Throughput High throughput for bandwidth and capacity-intensive applications that don't need high IOPS Cost-effective data disks for cost-sensitive applications IOPS : 9,600 2 Throughput : 2,400 MiB/s 1 You can't specify a throughput level for Hyperdisk Extreme volumes.

### "Accelerator-optimized machine family \_|\_ Compute Engine \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/compute/docs/accelerator-optimized-machines](https://docs.cloud.google.com/compute/docs/accelerator-optimized-machines)
- Source ID: `site-docs-reference-required-6`
- Final score: 109
- Re-rank relevance: N/A

Evidence snippets:
- Supported disk types for A4X Max and A4X instances A4X Max A4X Max instances can use the following block storage types: Hyperdisk Balanced ( hyperdisk-balanced ): this is the only disk type that is supported for the boot disk Hyperdisk Throughput ( hyperdisk-throughput ) Hyperdisk ML ( hyperdisk-ml ) Hyperdisk Extreme ( hyperdisk-extreme ) Local SSD: which is automatically added to instances that are created by using any of the A4X Max machine types Maximum number of disks per instance 1 Machine types All Hyperdisk Hyperdisk Balanced Hyperdisk Throughput Hyperdisk ML Hyperdisk Extreme Attached Local SSD a4x-maxgpu-4g-metal 32 32 32 32 8 4 A4X A4X instances can use the following block storage types: Hyperdisk Balanced ( hyperdisk-balanced ): this is the only disk type that is supported for the boot disk Hyperdisk Extreme ( hyperdisk-extreme ) Hyperdisk ML ( hyperdisk-ml ) Local SSD: which is automatically added to instances that are created by using any of the A4X machine types Maximum number of disks per instance 1 Machine types All Hyperdisk Hyperdisk Balanced Hyperdisk Balanced High Availability Hyperdisk Throughput Hyperdisk ML Hyperdisk Extreme Attached Local SSD a4x-highgpu-4g 128 128 0 0 128 8 4 1 Hyperdisk usage is charged separately from machine type pricing .
- A3 High A3 High instances can use the following block storage types: Balanced Persistent Disk ( pd-balanced ) SSD (performance) Persistent Disk ( pd-ssd ) Hyperdisk Balanced ( hyperdisk-balanced ) Hyperdisk Balanced High Availability ( hyperdisk-balanced-high-availability ) Hyperdisk ML ( hyperdisk-ml ) Hyperdisk Extreme ( hyperdisk-extreme ) Hyperdisk Throughput ( hyperdisk-throughput ) Local SSD: which is automatically added to instances that are created by using any of the A3 machine types Maximum number of disks per instance 1 Machine types All Hyperdisk Hyperdisk Balanced Hyperdisk Balanced High Availability Hyperdisk Throughput Hyperdisk ML Hyperdisk Extreme Attached Local SSD disks a3-highgpu-1g 128 32 32 64 64 N/A 2 a3-highgpu-2g 128 32 32 64 64 N/A 4 a3-highgpu-4g 128 32 32 64 64 8 8 a3-highgpu-8g 128 32 32 64 64 8 16 1 Hyperdisk and Persistent Disk usage are charged separately from machine type pricing .
- A3 Mega A3 Mega instances can use the following block storage types: Balanced Persistent Disk ( pd-balanced ) SSD (performance) Persistent Disk ( pd-ssd ) Hyperdisk Balanced ( hyperdisk-balanced ) Hyperdisk Balanced High Availability ( hyperdisk-balanced-high-availability ) Hyperdisk ML ( hyperdisk-ml ) Hyperdisk Extreme ( hyperdisk-extreme ) Hyperdisk Throughput ( hyperdisk-throughput ) Local SSD: which is automatically added to instances that are created by using any of the A3 machine types Maximum number of disks per instance 1 Machine types All Hyperdisk Hyperdisk Balanced Hyperdisk Balanced High Availability Hyperdisk Throughput Hyperdisk ML Hyperdisk Extreme Attached Local SSD disks a3-megagpu-8g 128 32 32 64 64 8 16 1 Hyperdisk and Persistent Disk usage are charged separately from machine type pricing .
- A3 Edge A3 Edge instances can use the following block storage types: Balanced Persistent Disk ( pd-balanced ) SSD (performance) Persistent Disk ( pd-ssd ) Hyperdisk Balanced ( hyperdisk-balanced ) Hyperdisk Balanced High Availability ( hyperdisk-balanced-high-availability ) Hyperdisk ML ( hyperdisk-ml ) Hyperdisk Extreme ( hyperdisk-extreme ) Hyperdisk Throughput ( hyperdisk-throughput ) Local SSD: which is automatically added to instances that are created by using any of the A3 machine types Maximum number of disks per instance 1 Machine types All Hyperdisk Hyperdisk Balanced Hyperdisk Balanced High Availability Hyperdisk Throughput Hyperdisk ML Hyperdisk Extreme Attached Local SSD a3-edgegpu-8g 128 32 32 64 64 8 16 1 Hyperdisk and Persistent Disk usage are charged separately from machine type pricing .

