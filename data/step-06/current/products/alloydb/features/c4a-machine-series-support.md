---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T03:53:29.477Z"
product_name: "AlloyDB"
product_slug: "alloydb"
feature_name: "C4A machine series support"
feature_slug: "c4a-machine-series-support"
latest_feature_date: "2025-09-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/alloydb/docs/choose-machine-type"
  - "https://docs.cloud.google.com/alloydb/docs/instance-read-pool-scale"
  - "https://docs.cloud.google.com/alloydb/docs/cluster-create"
keywords:
  - "c4a"
  - "machine"
  - "series"
  - "adds"
  - "alloydb"
  - "arm"
  - "based"
  - "axion"
---

# C4A machine series support

Product: AlloyDB
Coverage: MEDIUM

## Step 02 Summary

C4A machine series support adds AlloyDB support for Arm-based Axion processors in predefined configurations across limited regions.

## Extended Definition

C4A machine series support adds AlloyDB support for Arm-based Axion processors in predefined configurations across limited regions.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/alloydb/docs/choose-machine-type](https://docs.cloud.google.com/alloydb/docs/choose-machine-type)
- [https://docs.cloud.google.com/alloydb/docs/instance-read-pool-scale](https://docs.cloud.google.com/alloydb/docs/instance-read-pool-scale)
- [https://docs.cloud.google.com/alloydb/docs/cluster-create](https://docs.cloud.google.com/alloydb/docs/cluster-create)

## Supporting Pages

### "Choose an AlloyDB machine type \_|\_ AlloyDB for PostgreSQL \_|\_ Google\

- URL: [https://docs.cloud.google.com/alloydb/docs/choose-machine-type](https://docs.cloud.google.com/alloydb/docs/choose-machine-type)
- Source ID: `site-docs-reference-2`
- Final score: 141
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- C4A Axion-based : this machine series provides optimized price-performance and delivers predictable high performance for high demand AlloyDB workloads.
- Machine type vCPUs Memory (GB) n2-highmem-2 2 16 GB RAM n2-highmem-4 4 32 GB RAM n2-highmem-8 8 64 GB RAM n2-highmem-16 16 128 GB RAM n2-highmem-32 32 256 GB RAM n2-highmem-64 64 512 GB RAM n2-highmem-96 96 768 GB RAM n2-highmem-128 128 864 GB RAM C4A Axion-based The following machine types are available for instances for the C4A Axion-based machine series.
- Z3 4th generation Intel x86 processors (Sapphire Rapids) with Titanium SSD Large working dataset, storage intensive Allows caching of more data per vCPU; optimized for storage-dense, I/O-intensive workloads Machine series availability for AlloyDB clusters You can choose one of the following machine series: N2 : this machine series provides a balanced price-to-performance ratio for a variety of AlloyDB workloads.
- Machine series overview AlloyDB offers the following machine series, each built on a different underlying Google Cloud compute platform and optimized for specific performance characteristics.

### Scale an instance \_|\_ AlloyDB for PostgreSQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/alloydb/docs/instance-read-pool-scale](https://docs.cloud.google.com/alloydb/docs/instance-read-pool-scale)
- Source ID: `site-docs-root`
- Final score: 123
- Re-rank relevance: N/A

Evidence snippets:
- For more information about using the C4A Axion-based machine series, including the 1 vCPU machine type, see Considerations when using the C4A Axion-based machine series .
- Select one of the following machine series: C4A (Google Axion-based machine series) N2 (x86-based machine series).
- Create a read pool instance with a schedule-based policy To create a read pool instance with a schedule-based automatic scaling policy that defines a minimum number of nodes for a specific time window, run the following command: Note: If you have an existing autoscaling policy that has --autoscaler-max-node-count set , then this becomes an optional field. gcloud beta alloydb instances create INSTANCE ID \ --instance-type = READ POOL \ --read-pool-node-count = NODE COUNT \ --region = REGION ID \ --cluster = CLUSTER ID \ --project = PROJECT ID \ --enable-autoscaler \ --autoscaler-max-node-count = MAX NODE COUNT \ --autoscaler-set-schedule = SCHEDULE NAME \ --autoscaler-schedule-cron-exp = CRON EXPRESSION \ --autoscaler-schedule-duration-seconds = DURATION SECONDS \ --autoscaler-schedule-time-zone = TIME ZONE \ --autoscaler-schedule-min-node-count = MIN NODE COUNT \ --autoscaler-schedule-description = " DESCRIPTION " { --cpu-count = CPU COUNT --machine-type = MACHINE TYPE } Replace the following: MAX NODE COUNT : the maximum number of nodes that the autoscaler can create in the read pool instance.
- Create a read pool instance with CPU and schedule-based policies To create a read pool instance with both CPU-based and schedule-based automatic scaling policies, run the following command: gcloud beta alloydb instances create INSTANCE ID \ --instance-type = READ POOL \ --read-pool-node-count = NODE COUNT \ --region = REGION ID \ --cluster = CLUSTER ID \ --project = PROJECT ID \ --enable-autoscaler \ --autoscaler-max-node-count = MAX NODE COUNT \ --autoscaler-target-cpu-usage = TARGET CPU USAGE \ --autoscaler-set-schedule = SCHEDULE NAME \ --autoscaler-schedule-cron-exp = CRON EXPRESSION \ --autoscaler-schedule-duration-seconds = DURATION SECONDS \ --autoscaler-schedule-time-zone = TIME ZONE \ --autoscaler-schedule-min-node-count = MIN NODE COUNT \ --autoscaler-schedule-description = " DESCRIPTION " { --cpu-count = CPU COUNT --machine-type = MACHINE TYPE } Replace TARGET CPU USAGE with the target CPU utilization for your read pool instance, expressed as a decimal value between 0.0 and 1.0.

### "Create a cluster and its primary instance \_|\_ AlloyDB for PostgreSQL \_\

- URL: [https://docs.cloud.google.com/alloydb/docs/cluster-create](https://docs.cloud.google.com/alloydb/docs/cluster-create)
- Source ID: `site-docs-reference-2`
- Final score: 119
- Re-rank relevance: N/A

Evidence snippets:
- If your VPC network contains more than one IP address range that has Considerations when using the C4A Axion-based machine series AlloyDB offers a C4A machine series based on Google Axion, Google's custom Arm-based processor.
- For more information about using C4A Axion-based machine series, including the 1 vCPU machine type see Considerations when using the C4A Axion-based machine series .
- Select one of the following machine series: C4A (Google Axion-based machine series).
- The following is a code snippet for creating a cluster and a primary instance based on the AlloyDB instance full example: resource "google alloydb instance" "default" { cluster = google alloydb cluster.default.name instance id = "alloydb-instance" instance type = "PRIMARY" machine config { cpu count = 2 } depends on = [google service networking connection.vpc connection] } resource "google alloydb cluster" "cluster abc" { cluster id = "alloydb-cluster" location = "us-central1" network config { network = google compute network.default.id } database version = "POSTGRES 16" initial user { password = "alloydb-cluster" } } data "google project" "project" {} resource "google compute network" "default" { name = "alloydb-network" } resource "google compute global address" "private ip alloc" { name = "alloydb-cluster" address type = "INTERNAL" purpose = "VPC PEERING" prefix length = 16 network = google compute network.default.id } resource "google service networking connection" "vpc connection" { network = google compute network.default.id service = "servicenetworking.googleapis.com" reserved peering ranges = [google compute global address.private ip alloc.name] } This example creates an N2 instance.

