---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:15:59.663Z"
product_name: "Filestore"
product_slug: "filestore"
feature_name: "Filestore Backups for High Scale and Enterprise tier instances"
feature_slug: "filestore-backups-for-high-scale-and-enterprise-tier-instances"
latest_feature_date: "2022-11-16"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/filestore/docs/monitoring-instances"
  - "https://docs.cloud.google.com/filestore/docs/backups"
  - "https://docs.cloud.google.com/filestore/docs/overview"
  - "https://docs.cloud.google.com/filestore/docs/backups-limitations"
keywords:
  - "filestore"
  - "backups"
  - "for"
  - "high"
  - "scale"
  - "and"
  - "enterprise"
  - "tier"
---

# Filestore Backups for High Scale and Enterprise tier instances

Product: Filestore
Coverage: MEDIUM

## Step 02 Summary

Filestore Backups is available in preview for High Scale and Enterprise tier instances.

## Extended Definition

Filestore Backups is available in preview for High Scale and Enterprise tier instances.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/filestore/docs/monitoring-instances](https://docs.cloud.google.com/filestore/docs/monitoring-instances)
- [https://docs.cloud.google.com/filestore/docs/backups](https://docs.cloud.google.com/filestore/docs/backups)
- [https://docs.cloud.google.com/filestore/docs/overview](https://docs.cloud.google.com/filestore/docs/overview)
- [https://docs.cloud.google.com/filestore/docs/backups-limitations](https://docs.cloud.google.com/filestore/docs/backups-limitations)

## Supporting Pages

### Monitoring instances and quota \_|\_ Filestore \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/filestore/docs/monitoring-instances](https://docs.cloud.google.com/filestore/docs/monitoring-instances)
- Source ID: `site-docs-root`
- Final score: 224
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If the Filestore instance caches the data, some write operations are not reflected as disk writes. ✓ ✓ Metadata operations count Number of disk metadata operations. ✓ Free bytes Number of free disk bytes. ✓ ✓ Free disk space percent Percentage of free disk bytes. ✓ ✓ Free raw capacity percent Free raw capacity as a percentage of total space. ✓ Procedure call count Returns the same information as the nfsstat -s command. ✓ Snapshots used bytes The amount of space used for storing snapshots, measured in bytes. ✓ Time (in milliseconds) spent on read operations Time spent on disk reads. ✓ Time (in milliseconds) spent on write operations Time spent on disk writes. ✓ Used bytes Number of used disk bytes. ✓ ✓ Used space percent Percentage of used disk bytes. ✓ ✓ Memory-cached operations only occur in basic tier instances.
- This page shows you how to monitor your Filestore instances and set up alerts for low disk space and low backups quota.
- Select an available metric to view: Metric Description Basic tiers Regional, zonal, and enterprise tiers Average read latency The average time a read operation takes (in milliseconds). ✓ Average write latency The average time a write operation takes (in milliseconds). ✓ Bytes written Number of bytes written. ✓ ✓ Bytes read Number of bytes read from persistent storage.
- If you want to measure low disk space for zonal, regional, or enterprise instances, use the following steps to set up two separate alerts using free disk space percent and free raw capacity percent metrics.

### About backups \_|\_ Filestore \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/filestore/docs/backups](https://docs.cloud.google.com/filestore/docs/backups)
- Source ID: `site-docs-root-2`
- Final score: 221
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following table shows the differences between standard and enhanced backups: Feature Standard backups Enhanced backups Backup management Filestore Backup and DR Service Tier availability Basic , Zonal, Regional, Enterprise Zonal, Regional, Enterprise Backup scheduling No Yes Backup secured against unauthorized deletion or changes - Immutable and indelible backups through backup vault Automated backup frequency - Hourly, daily, weekly, monthly, yearly On-demand backup retention Retained indefinitely until manually deleted Retained until expired (by a backup rule) or manually deleted Backups protected against source project deletion - ✔ Centralized backup management across resources and projects - ✔ Long-term (>1 year) backup retention - ✔ Backups protected against source instance deletion ✔ ✔ Customer-managed encryption (CMEK) ✔ Planned Multi-regional backups ✔ Planned Cross-region backups ✔ Planned Back up a file share Backed up data include all the file system data and metadata.
- Supported tiers The following table shows the Filestore service tiers that support backups, encryption, and related restore operations: Tier Backups support restore to new instance restore to existing instance restore to source instance CMEK support Basic HDD Yes Yes Yes Yes No Basic SSD Yes Yes Yes Yes No Zonal Yes Yes No No Yes Regional Yes Yes No No Yes Enterprise Yes Yes No No Yes Backup options Filestore offers the following backup options: Standard backups: Filestore creates, manages, and stores standard backups in the same project as your Filestore instances..
- The following table shows what instance information backups preserve and what information they don't: Preserved Not preserved Instance ID Description Tier of the source instance Location Capacity Network File share name IP address IP-based access controls File locks Lock state Snapshots Backup deletion Backups are project-level resources, not a sub-resource of the source instance, and require their own separate storage.
- Quota A quota limit exists regarding the number of backups per region for basic SSD and basic HDD service tiers.

### Filestore overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/filestore/docs/overview](https://docs.cloud.google.com/filestore/docs/overview)
- Source ID: `site-api-reference`
- Final score: 220
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Filestore supports the following file system protocols: Protocol Supported service tiers Highlights NFSv3 All service tiers Supports bidirectional communication between the client and server.
- Each service tier is tailored for specific use cases: Zonal tier: Optimized for HPC, batch compute, media rendering, and localized workloads requiring high throughput and low latency.
- This means you can optimize your Filestore instances for your workload requirements and scale your file shares to meet the demands of your applications without resizing the capacity.
- Multishares for GKE (Enterprise): Optimized for GKE workloads that require high availability and multishares.

### Backup limitations \_|\_ Filestore \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/filestore/docs/backups-limitations](https://docs.cloud.google.com/filestore/docs/backups-limitations)
- Source ID: `site-docs-root-2`
- Final score: 216
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Capacity Backups created for zonal, regional, and enterprise instances might consume instance capacity.
- CMEK support is not available for basic tier backups.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
- To anticipate sufficient capacity for your workloads, consider applying one of the following: Increase instance capacity for workloads with significant, frequent data changes or a high change rate.

