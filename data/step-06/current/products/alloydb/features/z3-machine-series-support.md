---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T03:53:29.468Z"
product_name: "AlloyDB"
product_slug: "alloydb"
feature_name: "Z3 machine series support"
feature_slug: "z3-machine-series-support"
latest_feature_date: "2026-01-19"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/alloydb/docs/choose-machine-type"
  - "https://docs.cloud.google.com/alloydb/docs/instance-read-pool-scale"
  - "https://docs.cloud.google.com/alloydb/docs/cluster-create"
keywords:
  - "z3"
  - "machine"
  - "series"
  - "adds"
  - "alloydb"
  - "instances"
  - "powered"
  - "4th"
---

# Z3 machine series support

Product: AlloyDB
Coverage: MEDIUM

## Step 02 Summary

Z3 machine series support adds AlloyDB instances powered by 4th generation Intel x86 processors with Titanium SSD for storage-intensive workloads.

## Extended Definition

Z3 machine series support adds AlloyDB instances powered by 4th generation Intel x86 processors with Titanium SSD for storage-intensive workloads.

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
- Final score: 106
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Machine type vCPUs Memory (GB) c4-highmem-4-lssd 4 32 GB RAM c4-highmem-8-lssd 8 64 GB RAM c4-highmem-16-lssd 16 128 GB RAM c4-highmem-24-lssd 24 192 GB RAM c4-highmem-32-lssd 32 256 GB RAM c4-highmem-48-lssd 48 384 GB RAM c4-highmem-96-lssd 96 768 GB RAM c4-highmem-144-lssd 144 1152 GB RAM c4-highmem-192-lssd 192 1536 GB RAM c4-highmem-288-lssd 288 2304 GB RAM Z3 standardlssd The following machine types are available for instances for the Z3 machine series.
- Z3 4th generation Intel x86 processors (Sapphire Rapids) with Titanium SSD Large working dataset, storage intensive Allows caching of more data per vCPU; optimized for storage-dense, I/O-intensive workloads Machine series availability for AlloyDB clusters You can choose one of the following machine series: N2 : this machine series provides a balanced price-to-performance ratio for a variety of AlloyDB workloads.
- Machine type vCPUs Memory (GB) c4a-highmem-1 1 8 GB RAM c4a-highmem-2-lssd 2 16 GB RAM c4a-highmem-4-lssd 4 32 GB RAM c4a-highmem-8-lssd 8 64 GB RAM c4a-highmem-16-lssd 16 128 GB RAM c4a-highmem-32-lssd 32 256 GB RAM c4a-highmem-48-lssd 48 384 GB RAM c4a-highmem-64-lssd 64 512 GB RAM c4a-highmem-72-lssd 72 576 GB RAM C4 The following machine types are available for instances for the C4 machine series.
- Machine type vCPUs Memory (GB) n2-highmem-2 2 16 GB RAM n2-highmem-4 4 32 GB RAM n2-highmem-8 8 64 GB RAM n2-highmem-16 16 128 GB RAM n2-highmem-32 32 256 GB RAM n2-highmem-64 64 512 GB RAM n2-highmem-96 96 768 GB RAM n2-highmem-128 128 864 GB RAM C4A Axion-based The following machine types are available for instances for the C4A Axion-based machine series.

### Scale an instance \_|\_ AlloyDB for PostgreSQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/alloydb/docs/instance-read-pool-scale](https://docs.cloud.google.com/alloydb/docs/instance-read-pool-scale)
- Source ID: `site-docs-root`
- Final score: 94
- Re-rank relevance: N/A

Evidence snippets:
- Create a read pool instance with a schedule-based policy To create a read pool instance with a schedule-based automatic scaling policy that defines a minimum number of nodes for a specific time window, run the following command: Note: If you have an existing autoscaling policy that has --autoscaler-max-node-count set , then this becomes an optional field. gcloud beta alloydb instances create INSTANCE ID \ --instance-type = READ POOL \ --read-pool-node-count = NODE COUNT \ --region = REGION ID \ --cluster = CLUSTER ID \ --project = PROJECT ID \ --enable-autoscaler \ --autoscaler-max-node-count = MAX NODE COUNT \ --autoscaler-set-schedule = SCHEDULE NAME \ --autoscaler-schedule-cron-exp = CRON EXPRESSION \ --autoscaler-schedule-duration-seconds = DURATION SECONDS \ --autoscaler-schedule-time-zone = TIME ZONE \ --autoscaler-schedule-min-node-count = MIN NODE COUNT \ --autoscaler-schedule-description = " DESCRIPTION " { --cpu-count = CPU COUNT --machine-type = MACHINE TYPE } Replace the following: MAX NODE COUNT : the maximum number of nodes that the autoscaler can create in the read pool instance.
- Create a read pool instance with CPU and schedule-based policies To create a read pool instance with both CPU-based and schedule-based automatic scaling policies, run the following command: gcloud beta alloydb instances create INSTANCE ID \ --instance-type = READ POOL \ --read-pool-node-count = NODE COUNT \ --region = REGION ID \ --cluster = CLUSTER ID \ --project = PROJECT ID \ --enable-autoscaler \ --autoscaler-max-node-count = MAX NODE COUNT \ --autoscaler-target-cpu-usage = TARGET CPU USAGE \ --autoscaler-set-schedule = SCHEDULE NAME \ --autoscaler-schedule-cron-exp = CRON EXPRESSION \ --autoscaler-schedule-duration-seconds = DURATION SECONDS \ --autoscaler-schedule-time-zone = TIME ZONE \ --autoscaler-schedule-min-node-count = MIN NODE COUNT \ --autoscaler-schedule-description = " DESCRIPTION " { --cpu-count = CPU COUNT --machine-type = MACHINE TYPE } Replace TARGET CPU USAGE with the target CPU utilization for your read pool instance, expressed as a decimal value between 0.0 and 1.0.
- Create a read pool instance with a CPU-based policy To create a read pool instance with an automatic scaling policy based on a target CPU utilization, run the following command: gcloud beta alloydb instances create INSTANCE ID \ --instance-type = READ POOL \ --read-pool-node-count = NODE COUNT \ --region = REGION ID \ --cluster = CLUSTER ID \ --project = PROJECT ID \ --enable-autoscaler \ --autoscaler-max-node-count = MAX NODE COUNT \ --autoscaler-target-cpu-usage = TARGET CPU USAGE \ { --cpu-count = CPU COUNT --machine-type = MACHINE TYPE } Replace the following: INSTANCE ID : the ID of the read pool instance.
- Note: This approach is best suited for development environments because it lets you change the machine type more quickly, but it can result in longer instance downtime. gcloud beta alloydb instances update INSTANCE ID \ --cpu-count = CPU COUNT \ --machine-type = MACHINE TYPE \ --region = REGION ID \ --cluster = CLUSTER ID \ --project = PROJECT ID \ --update-mode = FORCE APPLY The instance experiences approximately one minute of downtime.

### "Create a cluster and its primary instance \_|\_ AlloyDB for PostgreSQL \_\

- URL: [https://docs.cloud.google.com/alloydb/docs/cluster-create](https://docs.cloud.google.com/alloydb/docs/cluster-create)
- Source ID: `site-docs-reference-2`
- Final score: 82
- Re-rank relevance: N/A

Evidence snippets:
- Create a primary instance To create a primary instance, use the gcloud alloydb instances create command. gcloud alloydb instances create INSTANCE ID \ --instance-type = PRIMARY \ --region = REGION ID \ --cluster = CLUSTER ID \ --project = PROJECT ID \ --cpu-count = CPU COUNT \ --machine-type = MACHINE TYPE \ --allowed-psc-projects = ALLOWED PROJECT LIST Replace the following: INSTANCE ID : the ID of the instance you are creating.
- If your VPC network contains more than one IP address range that has Considerations when using the C4A Axion-based machine series AlloyDB offers a C4A machine series based on Google Axion, Google's custom Arm-based processor.
- The following is a code snippet for creating a cluster and a primary instance based on the AlloyDB instance full example: resource "google alloydb instance" "default" { cluster = google alloydb cluster.default.name instance id = "alloydb-instance" instance type = "PRIMARY" machine config { cpu count = 2 } depends on = [google service networking connection.vpc connection] } resource "google alloydb cluster" "cluster abc" { cluster id = "alloydb-cluster" location = "us-central1" network config { network = google compute network.default.id } database version = "POSTGRES 16" initial user { password = "alloydb-cluster" } } data "google project" "project" {} resource "google compute network" "default" { name = "alloydb-network" } resource "google compute global address" "private ip alloc" { name = "alloydb-cluster" address type = "INTERNAL" purpose = "VPC PEERING" prefix length = 16 network = google compute network.default.id } resource "google service networking connection" "vpc connection" { network = google compute network.default.id service = "servicenetworking.googleapis.com" reserved peering ranges = [google compute global address.private ip alloc.name] } This example creates an N2 instance.
- You can use curl to execute the request, as shown in the following example: curl -X POST -H "Authorization: Bearer $(gcloud auth print-access-token)" -H "Content-Type: application/json" https://alloydb.googleapis.com/v1alpha/projects/ PROJECT ID /locations/ LOCATION ID /clusters/ CLUSTER ID /instances?instance id= INSTANCE ID -d @instance request.json Clone an active cluster To create a clone of an active cluster, containing a copy of all the source cluster's data and running in the same region, perform a point-in-time recovery on that cluster .

