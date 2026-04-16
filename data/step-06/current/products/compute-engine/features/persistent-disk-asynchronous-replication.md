---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:50:03.178Z"
product_name: "Compute Engine"
product_slug: "compute-engine"
feature_name: "Persistent Disk Asynchronous Replication"
feature_slug: "persistent-disk-asynchronous-replication"
latest_feature_date: "2023-06-28"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/python/docs/reference/compute/latest/google.cloud.compute_v1.services.disks.DisksClient"
  - "https://developers.google.com/compute/docs/disks/persistent-disks"
  - "https://docs.cloud.google.com/compute/docs/disks/persistent-disks"
keywords:
  - "persistent"
  - "disk"
  - "asynchronous"
  - "replication"
  - "asynchronously"
  - "replicates"
  - "secondary"
  - "region"
---

# Persistent Disk Asynchronous Replication

Product: Compute Engine
Coverage: MEDIUM

## Step 02 Summary

Persistent Disk Asynchronous Replication asynchronously replicates Persistent Disk data to a secondary region for disaster recovery.

## Extended Definition

Persistent Disk Asynchronous Replication asynchronously replicates Persistent Disk data to a secondary region for disaster recovery.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/python/docs/reference/compute/latest/google.cloud.compute_v1.services.disks.DisksClient](https://docs.cloud.google.com/python/docs/reference/compute/latest/google.cloud.compute_v1.services.disks.DisksClient)
- [https://developers.google.com/compute/docs/disks/persistent-disks](https://developers.google.com/compute/docs/disks/persistent-disks)
- [https://docs.cloud.google.com/compute/docs/disks/persistent-disks](https://docs.cloud.google.com/compute/docs/disks/persistent-disks)

## Supporting Pages

### "Class DisksClient (1.41.0) \_|\_ Python client libraries \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/python/docs/reference/compute/latest/google.cloud.compute_v1.services.disks.DisksClient](https://docs.cloud.google.com/python/docs/reference/compute/latest/google.cloud.compute_v1.services.disks.DisksClient)
- Source ID: `site-python-reference`
- Final score: 210
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Google Compute Engine has two Disk resources: \ Zonal \ Regional Persistent disks are required for running your VM instances.
- ExtendedOperation Stops asynchronous replication for a consistency group of disks.
- Operation Stops asynchronous replication for a consistency group of disks.
- The regionDisks resource represents a regional persistent disk.

### Persistent Disk \_|\_ Compute Engine \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/compute/docs/disks/persistent-disks](https://docs.cloud.google.com/compute/docs/disks/persistent-disks)
- Source ID: `site-docs-root`
- Final score: 197
- Re-rank relevance: N/A

Evidence snippets:
- About synchronous disk replication When you create a new Persistent Disk, you can either create the disk in one zone, or replicate it across two zones within the same region.
- There is a very small risk of data loss occurring with a regional Persistent Disk volume due to its internal data encodings and replication.
- Reliability Compute Engine replicates data of your regional Persistent Disk to the zones you selected when you created your disks.
- However, regional Persistent Disk volumes provide durable storage and replication of data between two zones in the same region.

### Persistent Disk \_|\_ Compute Engine \_|\_ Google Cloud Documentation

- URL: [https://developers.google.com/compute/docs/disks/persistent-disks](https://developers.google.com/compute/docs/disks/persistent-disks)
- Source ID: `site-docs-root-3`
- Final score: 197
- Re-rank relevance: N/A

Evidence snippets:
- About synchronous disk replication When you create a new Persistent Disk, you can either create the disk in one zone, or replicate it across two zones within the same region.
- There is a very small risk of data loss occurring with a regional Persistent Disk volume due to its internal data encodings and replication.
- Reliability Compute Engine replicates data of your regional Persistent Disk to the zones you selected when you created your disks.
- However, regional Persistent Disk volumes provide durable storage and replication of data between two zones in the same region.

