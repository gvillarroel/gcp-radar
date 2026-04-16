---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T22:42:27.357Z"
product_name: "Spanner"
product_slug: "spanner"
feature_name: "Cloud Spanner regional instance availability in us-west2 (Los Angeles)"
feature_slug: "cloud-spanner-regional-instance-availability-in-us-west2-los-angeles"
latest_feature_date: "2018-07-10"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/spanner/docs/cmek"
  - "https://docs.cloud.google.com/spanner/docs/compute-capacity"
  - "https://docs.cloud.google.com/spanner/docs/backup/disaster-recovery-overview"
keywords:
  - "angeles"
  - "west2"
  - "availability"
  - "regional"
  - "instance"
---

# Cloud Spanner regional instance availability in us-west2 (Los Angeles)

Product: Spanner
Coverage: MEDIUM

## Step 02 Summary

Cloud Spanner introduced support for creating regional instances in the Los Angeles (us-west2) region.

## Extended Definition

Cloud Spanner introduced support for creating regional instances in the Los Angeles (us-west2) region.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/spanner/docs/cmek](https://docs.cloud.google.com/spanner/docs/cmek)
- [https://docs.cloud.google.com/spanner/docs/compute-capacity](https://docs.cloud.google.com/spanner/docs/compute-capacity)
- [https://docs.cloud.google.com/spanner/docs/backup/disaster-recovery-overview](https://docs.cloud.google.com/spanner/docs/backup/disaster-recovery-overview)

## Supporting Pages

### "Customer-managed encryption keys (CMEK) overview \_|\_ Spanner \_|\_ Google\

- URL: [https://docs.cloud.google.com/spanner/docs/cmek](https://docs.cloud.google.com/spanner/docs/cmek)
- Source ID: `site-docs-root`
- Final score: 104
- Re-rank relevance: N/A

Evidence snippets:
- For example, if your Spanner database is in the multi-region instance configuration nam3 , with instance partitions located in europe-west1 and europe-west2 , then you must create Cloud KMS keys in the following regions: us-east4 (part of nam3 ) us-east1 (part of nam3 ) us-central1 (part of nam3 ) europe-west1 (location of instance partition) europe-west2 (location of instance partition) For more information, see Secure a database with CMEK .
- If you're using multiple regional keys to protect a Spanner database, only those replicas that are protected by a key residing in the unavailable regional Cloud KMS are affected by the unavailability.
- Multiple regional keys support: you can create multiple regional (single-region) Cloud KMS keys to protect a database in a Spanner custom, dual-region, or multi-region instance configuration .
- When using geo-partitioning, you must use a regional Cloud KMS key for each instance replica locatoin, including those in the instance partition configuration.

### "Compute capacity, nodes and processing units \_|\_ Spanner \_|\_ Google\

- URL: [https://docs.cloud.google.com/spanner/docs/compute-capacity](https://docs.cloud.google.com/spanner/docs/compute-capacity)
- Source ID: `site-docs-root`
- Final score: 89
- Re-rank relevance: N/A

Evidence snippets:
- Compute capacity and instance configurations As described in Regional, dual-region, and multi-region configurations , Spanner distributes an instance across zones of one or more regions to provide high performance and high availability.
- As detailed in Quotas & limits , to provide high availability and low latency when accessing a database, Spanner uses the compute capacity of an instance as a basis for determining storage limits, using the following guidelines: For instances smaller than 1 node (1000 PUs), Spanner allots 1024.0 GiB of data for every 100 PUs in the database.
- When removing compute capacity, monitor your CPU utilization and request latencies in Cloud Monitoring to ensure CPU utilization stays under 65% for regional instances and 45% for each region in multi-region instances.
- This diagram depicts two instances that have regional configurations: Instance-A shows an instance of 1000 PUs (1 node) with its compute capacity distribution consuming server resources in each of the three zones.

### Disaster recovery overview \_|\_ Spanner \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/spanner/docs/backup/disaster-recovery-overview](https://docs.cloud.google.com/spanner/docs/backup/disaster-recovery-overview)
- Source ID: `site-docs-root`
- Final score: 89
- Re-rank relevance: N/A

Evidence snippets:
- Spanner offers the following features to help ensure high data availability: Multi-regional configurations : Spanner can maintain replicas of your data in separate zones within a single region or multiple regions to ensure data availability even if a zone or region fails.
- Regional failure : If your application requires even higher data availability and protection against regional failures, use multi-region configurations that offer 99.999% availability.
- Disaster recovery techniques Spanner offers disaster recovery techniques to protect your data against the following disasters: Zonal failure : Spanner regional configuration provides automatic protection against zonal failures, ensuring that if one zone within a region fails, your application remains operational.
- Optimize costs for your disaster recovery strategy You can optimize Spanner disaster recovery costs in the following ways: Multi-region configurations : Use multi-region configurations only for applications that require 99.999% availability.

