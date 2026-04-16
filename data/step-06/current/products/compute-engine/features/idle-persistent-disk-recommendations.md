---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:50:03.260Z"
product_name: "Compute Engine"
product_slug: "compute-engine"
feature_name: "Idle persistent disk recommendations"
feature_slug: "idle-persistent-disk-recommendations"
latest_feature_date: "2020-05-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/python/docs/reference/compute/latest/google.cloud.compute_v1.services.disks.DisksClient"
  - "https://developers.google.com/compute/docs/disks/persistent-disks"
  - "https://docs.cloud.google.com/compute/docs/disks/persistent-disks"
keywords:
  - "idle"
  - "persistent"
  - "disk"
  - "recommendations"
  - "identify"
  - "underused"
  - "disks"
  - "help"
---

# Idle persistent disk recommendations

Product: Compute Engine
Coverage: MEDIUM

## Step 02 Summary

Idle persistent disk recommendations identify underused persistent disks to help reduce unused resources and cost; Idle persistent disk recommendations identify unused persistent disk resources to help reduce costs.

## Extended Definition

Idle persistent disk recommendations identify underused persistent disks to help reduce unused resources and cost; Idle persistent disk recommendations identify unused persistent disk resources to help reduce costs.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/python/docs/reference/compute/latest/google.cloud.compute_v1.services.disks.DisksClient](https://docs.cloud.google.com/python/docs/reference/compute/latest/google.cloud.compute_v1.services.disks.DisksClient)
- [https://developers.google.com/compute/docs/disks/persistent-disks](https://developers.google.com/compute/docs/disks/persistent-disks)
- [https://docs.cloud.google.com/compute/docs/disks/persistent-disks](https://docs.cloud.google.com/compute/docs/disks/persistent-disks)

## Supporting Pages

### Persistent Disk \_|\_ Compute Engine \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/compute/docs/disks/persistent-disks](https://docs.cloud.google.com/compute/docs/disks/persistent-disks)
- Source ID: `site-docs-root`
- Final score: 174
- Re-rank relevance: N/A

Evidence snippets:
- Regional Persistent Disk and Hyperdisk Balanced High Availability volumes have different performance characteristics than their corresponding zonal disks.
- Persistent Disk volumes are durable network storage devices that your instances can access like physical disks in a desktop or a server.
- Each Persistent Disk volume can be up to 64 TiB in size, so there is no need to manage arrays of disks to create large logical volumes.
- Reliability Compute Engine replicates data of your regional Persistent Disk to the zones you selected when you created your disks.

### Persistent Disk \_|\_ Compute Engine \_|\_ Google Cloud Documentation

- URL: [https://developers.google.com/compute/docs/disks/persistent-disks](https://developers.google.com/compute/docs/disks/persistent-disks)
- Source ID: `site-docs-root-3`
- Final score: 174
- Re-rank relevance: N/A

Evidence snippets:
- Regional Persistent Disk and Hyperdisk Balanced High Availability volumes have different performance characteristics than their corresponding zonal disks.
- Persistent Disk volumes are durable network storage devices that your instances can access like physical disks in a desktop or a server.
- Each Persistent Disk volume can be up to 64 TiB in size, so there is no need to manage arrays of disks to create large logical volumes.
- Reliability Compute Engine replicates data of your regional Persistent Disk to the zones you selected when you created your disks.

### "Class DisksClient (1.41.0) \_|\_ Python client libraries \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/python/docs/reference/compute/latest/google.cloud.compute_v1.services.disks.DisksClient](https://docs.cloud.google.com/python/docs/reference/compute/latest/google.cloud.compute_v1.services.disks.DisksClient)
- Source ID: `site-python-reference`
- Final score: 170
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- These credentials identify the application to the service; if none are specified, the client will attempt to ascertain the credentials from the environment. transport Optional[Union[str,DisksTransport,Callable[..., DisksTransport]]] The transport to use, or a Callable that constructs and returns a new transport.
- Google Compute Engine has two Disk resources: \ Zonal \ Regional Persistent disks are required for running your VM instances.
- ListPager Retrieves a list of persistent disks contained within the specified zone.
- AggregatedListPager Retrieves an aggregated list of persistent disks.

