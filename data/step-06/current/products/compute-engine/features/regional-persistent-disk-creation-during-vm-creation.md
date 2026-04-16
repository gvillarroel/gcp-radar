---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:50:03.183Z"
product_name: "Compute Engine"
product_slug: "compute-engine"
feature_name: "Regional Persistent Disk creation during VM creation"
feature_slug: "regional-persistent-disk-creation-during-vm-creation"
latest_feature_date: "2023-04-24"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/compute/docs/disks/persistent-disks"
  - "https://docs.cloud.google.com/compute/docs/disks/persistent-disks"
  - "https://docs.cloud.google.com/python/docs/reference/compute/latest/google.cloud.compute_v1.services.disks.DisksClient"
keywords:
  - "regional"
  - "persistent"
  - "disk"
  - "creation"
  - "during"
  - "vm"
  - "you"
  - "can"
---

# Regional Persistent Disk creation during VM creation

Product: Compute Engine
Coverage: MEDIUM

## Step 02 Summary

You can create regional Persistent Disk volumes when creating a VM directly or through an instance template.

## Extended Definition

You can create regional Persistent Disk volumes when creating a VM directly or through an instance template.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/compute/docs/disks/persistent-disks](https://developers.google.com/compute/docs/disks/persistent-disks)
- [https://docs.cloud.google.com/compute/docs/disks/persistent-disks](https://docs.cloud.google.com/compute/docs/disks/persistent-disks)
- [https://docs.cloud.google.com/python/docs/reference/compute/latest/google.cloud.compute_v1.services.disks.DisksClient](https://docs.cloud.google.com/python/docs/reference/compute/latest/google.cloud.compute_v1.services.disks.DisksClient)

## Supporting Pages

### Persistent Disk \_|\_ Compute Engine \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/compute/docs/disks/persistent-disks](https://docs.cloud.google.com/compute/docs/disks/persistent-disks)
- Source ID: `site-docs-root`
- Final score: 177
- Re-rank relevance: N/A

Evidence snippets:
- Zonal standard Persistent Disk Zonal balanced Persistent Disk Zonal SSD Persistent Disk Zonal extreme Persistent Disk Regional standard Persistent Disk Regional balanced Persistent Disk Regional SSD Persistent Disk Better than 99.99% Better than 99.999% Better than 99.999% Better than 99.9999% Better than 99.999% Better than 99.9999% Better than 99.9999% Machine series support A2 A3 (H100) A3 (H200) A4 A4X A4X Max C2 C2D C3 C3D C4 C4A C4D E2 G2 G4 H3 H4D M1 M2 M3 M4 N1 N1+GPU N2 N2D N4 N4A N4D T2A T2D TPU v2 TPU v3 TPU v4 TPU v5e TPU v5p TPU v6e TPU7x X4 Z3 Select a machine series to see its supported Persistent Disk (PD) types.
- For information about machine type support, refer to the following: Zonal Persistent Disk Regional Persistent Disk Durability of Persistent Disk Disk durability represents the probability of data loss, by design, for a typical disk in a typical year, using a set of assumptions about hardware failures, the likelihood of catastrophic events, isolation practices and engineering processes in Google data centers, and the internal encodings used by each disk type.
- Design considerations for Regional Persistent Disk If you're designing robust systems or high availability services on Compute Engine, use Regional Persistent Disk combined with other best practices such as backing up your data using snapshots .
- Performance Regional Persistent Disk volumes are designed for workloads that require a lower Recovery Point Objective (RPO) and Recovery Time Objective (RTO) compared to using Persistent Disk snapshots.

### Persistent Disk \_|\_ Compute Engine \_|\_ Google Cloud Documentation

- URL: [https://developers.google.com/compute/docs/disks/persistent-disks](https://developers.google.com/compute/docs/disks/persistent-disks)
- Source ID: `site-docs-root-3`
- Final score: 177
- Re-rank relevance: N/A

Evidence snippets:
- Zonal standard Persistent Disk Zonal balanced Persistent Disk Zonal SSD Persistent Disk Zonal extreme Persistent Disk Regional standard Persistent Disk Regional balanced Persistent Disk Regional SSD Persistent Disk Better than 99.99% Better than 99.999% Better than 99.999% Better than 99.9999% Better than 99.999% Better than 99.9999% Better than 99.9999% Machine series support A2 A3 (H100) A3 (H200) A4 A4X A4X Max C2 C2D C3 C3D C4 C4A C4D E2 G2 G4 H3 H4D M1 M2 M3 M4 N1 N1+GPU N2 N2D N4 N4A N4D T2A T2D TPU v2 TPU v3 TPU v4 TPU v5e TPU v5p TPU v6e TPU7x X4 Z3 Select a machine series to see its supported Persistent Disk (PD) types.
- For information about machine type support, refer to the following: Zonal Persistent Disk Regional Persistent Disk Durability of Persistent Disk Disk durability represents the probability of data loss, by design, for a typical disk in a typical year, using a set of assumptions about hardware failures, the likelihood of catastrophic events, isolation practices and engineering processes in Google data centers, and the internal encodings used by each disk type.
- Design considerations for Regional Persistent Disk If you're designing robust systems or high availability services on Compute Engine, use Regional Persistent Disk combined with other best practices such as backing up your data using snapshots .
- Performance Regional Persistent Disk volumes are designed for workloads that require a lower Recovery Point Objective (RPO) and Recovery Time Objective (RTO) compared to using Persistent Disk snapshots.

### "Class DisksClient (1.41.0) \_|\_ Python client libraries \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/python/docs/reference/compute/latest/google.cloud.compute_v1.services.disks.DisksClient](https://docs.cloud.google.com/python/docs/reference/compute/latest/google.cloud.compute_v1.services.disks.DisksClient)
- Source ID: `site-python-reference`
- Final score: 160
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Google Compute Engine has two Disk resources: \ Zonal \ Regional Persistent disks are required for running your VM instances.
- The regionDisks resource represents a regional persistent disk.
- For regular snapshot creation, consider using snapshots.insert instead, as that method supports more features, such as creating snapshots in a project different from the source disk project.
- For regular snapshot creation, consider using snapshots.insert instead, as that method supports more features, such as creating snapshots in a project different from the source disk project.

