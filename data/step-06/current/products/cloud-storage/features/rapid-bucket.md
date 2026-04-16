---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:12:45.869Z"
product_name: "Cloud Storage"
product_slug: "cloud-storage"
feature_name: "Rapid Bucket"
feature_slug: "rapid-bucket"
latest_feature_date: "2026-03-10"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/storage/docs/locations"
  - "https://docs.cloud.google.com/storage/docs/bandwidth-usage"
  - "https://docs.cloud.google.com/storage/docs/introduction"
  - "https://docs.cloud.google.com/storage/docs/storage-classes"
keywords:
  - "rapid"
  - "bucket"
  - "provides"
  - "zonal"
  - "buckets"
  - "using"
  - "the"
  - "storage"
---

# Rapid Bucket

Product: Cloud Storage
Coverage: MEDIUM

## Step 02 Summary

Rapid Bucket provides zonal buckets using the Rapid storage class to optimize data access and I/O performance near compute resources.

## Extended Definition

Rapid Bucket provides zonal buckets using the Rapid storage class to optimize data access and I/O performance near compute resources.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/storage/docs/locations](https://docs.cloud.google.com/storage/docs/locations)
- [https://docs.cloud.google.com/storage/docs/bandwidth-usage](https://docs.cloud.google.com/storage/docs/bandwidth-usage)
- [https://docs.cloud.google.com/storage/docs/introduction](https://docs.cloud.google.com/storage/docs/introduction)
- [https://docs.cloud.google.com/storage/docs/storage-classes](https://docs.cloud.google.com/storage/docs/storage-classes)

## Supporting Pages

### Bucket locations \_|\_ Cloud Storage \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/storage/docs/locations](https://docs.cloud.google.com/storage/docs/locations)
- Source ID: `site-docs-root`
- Final score: 256
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Lowest storage price No replication charges No outbound data transfer charges when reading data inside the same region Highest storage price Replication charges apply on write No outbound data transfer charges when reading data within either region Higher storage price than regions, but lower than dual-regions Replication charges apply on write Outbound data transfer charges always apply when reading data Location recommendations Requirements Recommended bucket location Workload examples Ultra-low latency Ultra-high bandwidth and I/O High performance Zone 1 Artificial Intelligence (AI) and Machine Learning (ML) High-performance computing Data-intensive analytics Optimized latency and bandwidth Lowest data storage cost Cross-zone redundancy Region 2 Analytics Backup and archive Optimized latency and bandwidth Cross-region redundancy, with precise control of the locations where copies of data are stored Dual-region 3 Analytics Backup and archive Disaster recovery Cross-geography data access Cross-region redundancy Multi-region Content serving Zonal locations for buckets are only available through Rapid Bucket .
- If the regions you want to pair are not available as a dual-region, consider creating a separate bucket in each region and using Storage Transfer Service Event-driven transfers to keep the buckets in sync.
- Zone Region Dual-region Multi-region Availability Data redundancy within one availability zone Zonal outages might affect availability Data redundancy across availability zones (synchronous) RTO(recovery time objective)=0: automated failover and failback on zonal failure (no need to change storage paths) Higher availability than regions for a given storage class Data redundancy across regions (asynchronous) Turbo replication option for replication within 15 minutes RTO(recovery time objective)=0: automated failover and failback on regional failure (no need to change storage paths) Higher availability than regions for a given storage class Data redundancy across regions (asynchronous) RTO(recovery time objective)=0: automated failover and failback on regional failure (no need to change storage paths) Pricing Offers the highest performance in Cloud Storage for demanding workloads at the highest storage price, out of all location types Zonal bucket-specific data transfer charges apply.
- The following zones are available for zonal buckets : Region Zone Name Zone Description ASIA-SOUTHEAST1 ASIA-SOUTHEAST1-A Jurong West, Singapore, APAC ASIA-SOUTHEAST1-B Jurong West, Singapore, APAC ASIA-SOUTHEAST1-C Jurong West, Singapore, APAC EUROPE-WEST1 EUROPE-WEST1-B St.

### "Overview of bandwidth and storage usage in Cloud Storage \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/storage/docs/bandwidth-usage](https://docs.cloud.google.com/storage/docs/bandwidth-usage)
- Source ID: `site-iam-reference`
- Final score: 252
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Go to Browser In the Filter search bar, select the Metric property, then search for the metric for which you are requesting an increase: Use storage.googleapis.com/rapid zonal bytes to increase storage for your buckets located in zones.
- Introduction to bandwidth monitoring Cloud Storage provides bandwidth monitoring for you to track bandwidth usage from your project's buckets to other Google Cloud services.
- Use storage.googleapis.com/rapid zonal egress bandwidth to increase Google egress for your buckets located in zones.
- Request more storage Cloud Storage provides storage usage monitoring for zonal buckets.

### Cloud Storage overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/storage/docs/introduction](https://docs.cloud.google.com/storage/docs/introduction)
- Source ID: `site-docs-root`
- Final score: 244
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Rapid Bucket provides substantially improved latency, throughput, and I/Os compared to buckets in other storage classes, making the capability ideal for data-intensive AI/ML and analytics workloads.
- Rapid Bucket : Rapid Bucket is a high performance capability that lets you store objects in the Rapid storage class by using a zone as a bucket's location.
- While buckets are suitable for most data storage use cases, you can set up optional configurations and features on a bucket to make it more suitable for high-performance workloads specifically: Hierarchical namespace : Buckets can have hierarchical namespace enabled, which lets you store your data in a logical file system structure by using folders.
- Tools for Cloud Storage You can interact with Cloud Storage by using the following tools: Google Cloud console : The Google Cloud console provides a visual interface for you to manage your data in a browser.

### Storage classes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/storage/docs/storage-classes](https://docs.cloud.google.com/storage/docs/storage-classes)
- Source ID: `site-docs-root`
- Final score: 234
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Rapid storage is an exception; to see storage size limit for zonal buckets, see Quotas for buckets .
- Rapid storage is only compatible with zonal buckets through Rapid Bucket .
- When you use Rapid storage as a bucket's storage class, you can store your data in zonal locations .
- 2 The Rapid storage class is only available with Rapid Bucket .

