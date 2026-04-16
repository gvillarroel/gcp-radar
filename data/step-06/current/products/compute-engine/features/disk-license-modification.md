---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:50:03.134Z"
product_name: "Compute Engine"
product_slug: "compute-engine"
feature_name: "Disk license modification"
feature_slug: "disk-license-modification"
latest_feature_date: "2025-06-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/python/docs/reference/compute/latest/google.cloud.compute_v1.services.disks.DisksClient"
  - "https://docs.cloud.google.com/compute/docs/disks/data-protection"
  - "https://docs.cloud.google.com/compute/docs/disks/hyperdisks"
keywords:
  - "disk"
  - "license"
  - "modification"
  - "licenses"
  - "attached"
  - "disks"
  - "can"
  - "now"
---

# Disk license modification

Product: Compute Engine
Coverage: MEDIUM

## Step 02 Summary

Licenses attached to disks can now be modified in place, including updates such as replacements, upgrades, and billing model changes.

## Extended Definition

Licenses attached to disks can now be modified in place, including updates such as replacements, upgrades, and billing model changes.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/python/docs/reference/compute/latest/google.cloud.compute_v1.services.disks.DisksClient](https://docs.cloud.google.com/python/docs/reference/compute/latest/google.cloud.compute_v1.services.disks.DisksClient)
- [https://docs.cloud.google.com/compute/docs/disks/data-protection](https://docs.cloud.google.com/compute/docs/disks/data-protection)
- [https://docs.cloud.google.com/compute/docs/disks/hyperdisks](https://docs.cloud.google.com/compute/docs/disks/hyperdisks)

## Supporting Pages

### "Class DisksClient (1.41.0) \_|\_ Python client libraries \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/python/docs/reference/compute/latest/google.cloud.compute_v1.services.disks.DisksClient](https://docs.cloud.google.com/python/docs/reference/compute/latest/google.cloud.compute_v1.services.disks.DisksClient)
- Source ID: `site-python-reference`
- Final score: 195
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This corresponds to the zone field on the request instance; if request is provided, this should not be set. disks stop group async replication resource resource google.cloud.compute v1.types.DisksStopGroupAsyncReplicationResource The body resource for this request This corresponds to the disks stop group async replication resource resource field on the request instance; if request is provided, this should not be set. retry google.api core.retry.Retry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- This corresponds to the zone field on the request instance; if request is provided, this should not be set. disks stop group async replication resource resource google.cloud.compute v1.types.DisksStopGroupAsyncReplicationResource The body resource for this request This corresponds to the disks stop group async replication resource resource field on the request instance; if request is provided, this should not be set. retry google.api core.retry.Retry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- This corresponds to the disk field on the request instance; if request is provided, this should not be set. disks remove resource policies request resource google.cloud.compute v1.types.DisksRemoveResourcePoliciesRequest The body resource for this request This corresponds to the disks remove resource policies request resource field on the request instance; if request is provided, this should not be set. retry google.api core.retry.Retry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- This corresponds to the disk field on the request instance; if request is provided, this should not be set. disks remove resource policies request resource google.cloud.compute v1.types.DisksRemoveResourcePoliciesRequest The body resource for this request This corresponds to the disks remove resource policies request resource field on the request instance; if request is provided, this should not be set. retry google.api core.retry.Retry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.

### "Data protection options for disks and instances \_|\_ Compute Engine \_\

- URL: [https://docs.cloud.google.com/compute/docs/disks/data-protection](https://docs.cloud.google.com/compute/docs/disks/data-protection)
- Source ID: `site-docs-root`
- Final score: 168
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Resource to back up Feature Description Use cases VMs, including attached disks Backup and DR Service Managed service providing secure backups for compute instances across projects.
- Use machine images to create backups of all disks attached to an instance To create backups of all disks that are attached to an instance, use machine images .
- VMs, including attached disks Machine images Instance backups that offer consistency at the I/O operation level or crash level.
- Disks Disk clones A clone is a live duplicate of the source disk that can be instantly attached to an instance.

### "Google Cloud Hyperdisk overview \_|\_ Compute Engine \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/compute/docs/disks/hyperdisks](https://docs.cloud.google.com/compute/docs/disks/hyperdisks)
- Source ID: `site-docs-root`
- Final score: 164
- Re-rank relevance: N/A

Evidence snippets:
- Hyperdisk volumes have the following features: Function as physical disks : you can use a Hyperdisk volume with a compute instance as if it were a physical disk attached to the instance.
- You can use Confidential mode only with Hyperdisk Balanced disks that are attached to Confidential VMs.
- Workload type Recommended Hyperdisk type Unique features Max IOPS and throughput per volume Most enterprise applications Boot disks Virtual desktops Postgres, MySQL Hyperdisk Balanced Designed to be the best fit for the majority of workloads Best combination of price and performance Supports simultaneous read-write access to the same volume from up to 8 instances IOPS : 160,000 Throughput : 2,400 MiB/s Highly-available, mission-critical applications that require a recovery point objective of 0 Hyperdisk Balanced High Availability Offers data replication in two zones within the same region for quick failover Supports simultaneous read-write access to the same volume from up to 8 instances IOPS : 100,000 Throughput : 2,400 MiB/s SAP HANA High-end SQL Server, Oracle, and in-memory RDBMS Hyperdisk Extreme Offers the highest IOPS IOPS : 350,000 Throughput : 5,000 MiB/s 1 High-performance computing (HPC) Machine learning, AI inference or training Accelerator-optimized workloads Hyperdisk ML Supports attaching a single volume in read-only mode to up to 2,500 instances.
- Offers the highest read-only throughput IOPS : 33,554,432 2 Throughput : 2,097,152 MiB/s Scale out analytics workloads like Hadoop, Spark, and Kafka Cold disks Hyperdisk Throughput High throughput for bandwidth and capacity-intensive applications that don't need high IOPS Cost-effective data disks for cost-sensitive applications IOPS : 9,600 2 Throughput : 2,400 MiB/s 1 You can't specify a throughput level for Hyperdisk Extreme volumes.

