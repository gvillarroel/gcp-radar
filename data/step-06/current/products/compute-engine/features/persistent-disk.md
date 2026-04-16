---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:50:03.229Z"
product_name: "Compute Engine"
product_slug: "compute-engine"
feature_name: "Persistent disk"
feature_slug: "persistent-disk"
latest_feature_date: "2021-08-03"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/compute/docs/disks/persistent-disks"
  - "https://docs.cloud.google.com/compute/docs/disks/persistent-disks"
  - "https://docs.cloud.google.com/python/docs/reference/compute/latest/google.cloud.compute_v1.services.disks.DisksClient"
keywords:
  - "persistent"
  - "disk"
  - "disks"
  - "snapshots"
  - "images"
  - "available"
  - "all"
  - "zones"
---

# Persistent disk

Product: Compute Engine
Coverage: MEDIUM

## Step 02 Summary

Disks, snapshots, and images are available in all zones of the Toronto northamerica-northeast2 region.

## Extended Definition

Disks, snapshots, and images are available in all zones of the Toronto northamerica-northeast2 region.

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
- Final score: 312
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Reliability Compute Engine replicates data of your regional Persistent Disk to the zones you selected when you created your disks.
- Design considerations for Regional Persistent Disk If you're designing robust systems or high availability services on Compute Engine, use Regional Persistent Disk combined with other best practices such as backing up your data using snapshots .
- If you need block storage for a virtual machine (VM) instance or container, such as for a boot disk or data disk, use Persistent Disk volumes if Google Cloud Hyperdisk isn't available for your compute instance.
- Performance Regional Persistent Disk volumes are designed for workloads that require a lower Recovery Point Objective (RPO) and Recovery Time Objective (RTO) compared to using Persistent Disk snapshots.

### Persistent Disk \_|\_ Compute Engine \_|\_ Google Cloud Documentation

- URL: [https://developers.google.com/compute/docs/disks/persistent-disks](https://developers.google.com/compute/docs/disks/persistent-disks)
- Source ID: `site-docs-root-3`
- Final score: 312
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Reliability Compute Engine replicates data of your regional Persistent Disk to the zones you selected when you created your disks.
- Design considerations for Regional Persistent Disk If you're designing robust systems or high availability services on Compute Engine, use Regional Persistent Disk combined with other best practices such as backing up your data using snapshots .
- If you need block storage for a virtual machine (VM) instance or container, such as for a boot disk or data disk, use Persistent Disk volumes if Google Cloud Hyperdisk isn't available for your compute instance.
- Performance Regional Persistent Disk volumes are designed for workloads that require a lower Recovery Point Objective (RPO) and Recovery Time Objective (RTO) compared to using Persistent Disk snapshots.

### "Class DisksClient (1.41.0) \_|\_ Python client libraries \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/python/docs/reference/compute/latest/google.cloud.compute_v1.services.disks.DisksClient](https://docs.cloud.google.com/python/docs/reference/compute/latest/google.cloud.compute_v1.services.disks.DisksClient)
- Source ID: `site-python-reference`
- Final score: 246
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Google Compute Engine has two Disk resources: \ Zonal \ Regional Persistent disks are required for running your VM instances.
- ListPager Retrieves a list of persistent disks contained within the specified zone.
- AggregatedListPager Retrieves an aggregated list of persistent disks.
- The regionDisks resource represents a regional persistent disk.

