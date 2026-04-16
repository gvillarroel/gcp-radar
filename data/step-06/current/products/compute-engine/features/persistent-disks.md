---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:50:03.247Z"
product_name: "Compute Engine"
product_slug: "compute-engine"
feature_name: "Persistent disks"
feature_slug: "persistent-disks"
latest_feature_date: "2021-03-24"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/compute/docs/disks/persistent-disks"
  - "https://docs.cloud.google.com/compute/docs/disks/persistent-disks"
  - "https://docs.cloud.google.com/python/docs/reference/compute/latest/google.cloud.compute_v1.services.disks.DisksClient"
keywords:
  - "persistent"
  - "disks"
  - "provide"
  - "durable"
  - "block"
  - "storage"
  - "compute"
  - "engine"
---

# Persistent disks

Product: Compute Engine
Coverage: MEDIUM

## Step 02 Summary

Persistent disks provide durable block storage for Compute Engine instances.

## Extended Definition

Persistent disks provide durable block storage for Compute Engine instances.

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
- Final score: 190
- Re-rank relevance: N/A

Evidence snippets:
- If you need block storage for a virtual machine (VM) instance or container, such as for a boot disk or data disk, use Persistent Disk volumes if Google Cloud Hyperdisk isn't available for your compute instance.
- Persistent Disk in multi-writer mode provides a shared block storage capability and presents an infrastructural foundation for building highly available shared file systems and databases.
- Persistent Disk encryption Compute Engine automatically encrypts your data before it travels outside of your VM to the Persistent Disk storage space.
- Persistent Disk volumes are durable network storage devices that your instances can access like physical disks in a desktop or a server.

### Persistent Disk \_|\_ Compute Engine \_|\_ Google Cloud Documentation

- URL: [https://developers.google.com/compute/docs/disks/persistent-disks](https://developers.google.com/compute/docs/disks/persistent-disks)
- Source ID: `site-docs-root-3`
- Final score: 190
- Re-rank relevance: N/A

Evidence snippets:
- If you need block storage for a virtual machine (VM) instance or container, such as for a boot disk or data disk, use Persistent Disk volumes if Google Cloud Hyperdisk isn't available for your compute instance.
- Persistent Disk in multi-writer mode provides a shared block storage capability and presents an infrastructural foundation for building highly available shared file systems and databases.
- Persistent Disk encryption Compute Engine automatically encrypts your data before it travels outside of your VM to the Persistent Disk storage space.
- Persistent Disk volumes are durable network storage devices that your instances can access like physical disks in a desktop or a server.

### "Class DisksClient (1.41.0) \_|\_ Python client libraries \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/python/docs/reference/compute/latest/google.cloud.compute_v1.services.disks.DisksClient](https://docs.cloud.google.com/python/docs/reference/compute/latest/google.cloud.compute_v1.services.disks.DisksClient)
- Source ID: `site-python-reference`
- Final score: 184
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Google Compute Engine has two Disk resources: \ Zonal \ Regional Persistent disks are required for running your VM instances.
- This corresponds to the zone field on the request instance; if request is provided, this should not be set. disks stop group async replication resource resource google.cloud.compute v1.types.DisksStopGroupAsyncReplicationResource The body resource for this request This corresponds to the disks stop group async replication resource resource field on the request instance; if request is provided, this should not be set. retry google.api core.retry.Retry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- This corresponds to the zone field on the request instance; if request is provided, this should not be set. disks stop group async replication resource resource google.cloud.compute v1.types.DisksStopGroupAsyncReplicationResource The body resource for this request This corresponds to the disks stop group async replication resource resource field on the request instance; if request is provided, this should not be set. retry google.api core.retry.Retry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- This corresponds to the disk field on the request instance; if request is provided, this should not be set. disks remove resource policies request resource google.cloud.compute v1.types.DisksRemoveResourcePoliciesRequest The body resource for this request This corresponds to the disks remove resource policies request resource field on the request instance; if request is provided, this should not be set. retry google.api core.retry.Retry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.

