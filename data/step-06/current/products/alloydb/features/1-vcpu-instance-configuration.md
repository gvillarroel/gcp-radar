---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T03:53:29.487Z"
product_name: "AlloyDB"
product_slug: "alloydb"
feature_name: "1 vCPU instance configuration"
feature_slug: "1-vcpu-instance-configuration"
latest_feature_date: "2025-04-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/alloydb/docs/cluster-create"
  - "https://docs.cloud.google.com/alloydb/docs/instance-read-pool-scale"
  - "https://docs.cloud.google.com/alloydb/docs/instance-read-pool-create"
keywords:
  - "vcpu"
  - "instance"
  - "configuration"
  - "alloydb"
  - "postgresql"
  - "supports"
  - "gb"
  - "memory"
---

# 1 vCPU instance configuration

Product: AlloyDB
Coverage: MEDIUM

## Step 02 Summary

AlloyDB for PostgreSQL supports a 1 vCPU and 8 GB memory configuration for development and sandbox environments.

## Extended Definition

AlloyDB for PostgreSQL supports a 1 vCPU and 8 GB memory configuration for development and sandbox environments.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/alloydb/docs/cluster-create](https://docs.cloud.google.com/alloydb/docs/cluster-create)
- [https://docs.cloud.google.com/alloydb/docs/instance-read-pool-scale](https://docs.cloud.google.com/alloydb/docs/instance-read-pool-scale)
- [https://docs.cloud.google.com/alloydb/docs/instance-read-pool-create](https://docs.cloud.google.com/alloydb/docs/instance-read-pool-create)

## Supporting Pages

### "Create a cluster and its primary instance \_|\_ AlloyDB for PostgreSQL \_\

- URL: [https://docs.cloud.google.com/alloydb/docs/cluster-create](https://docs.cloud.google.com/alloydb/docs/cluster-create)
- Source ID: `site-docs-reference-2`
- Final score: 181
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Home Documentation Databases AlloyDB for PostgreSQL Guides Send feedback Create a cluster and its primary instance Stay organized with collections Save and categorize content based on your preferences.
- C4A virtual machines (VM) are available as predefined configurations for 1, 2, 4, 8, 16, 32, 48, 64, and 72 vCPUs, with up to 576 GB of Double Data Rate 5 (DDR5) memory.
- The following is a code snippet for creating a cluster and a primary instance based on the AlloyDB instance full example: resource "google alloydb instance" "default" { cluster = google alloydb cluster.default.name instance id = "alloydb-instance" instance type = "PRIMARY" machine config { cpu count = 2 } depends on = [google service networking connection.vpc connection] } resource "google alloydb cluster" "cluster abc" { cluster id = "alloydb-cluster" location = "us-central1" network config { network = google compute network.default.id } database version = "POSTGRES 16" initial user { password = "alloydb-cluster" } } data "google project" "project" {} resource "google compute network" "default" { name = "alloydb-network" } resource "google compute global address" "private ip alloc" { name = "alloydb-cluster" address type = "INTERNAL" purpose = "VPC PEERING" prefix length = 16 network = google compute network.default.id } resource "google service networking connection" "vpc connection" { network = google compute network.default.id service = "servicenetworking.googleapis.com" reserved peering ranges = [google compute global address.private ip alloc.name] } This example creates an N2 instance.
- You can use curl to execute the request, as shown in the following example: curl -X POST -H "Authorization: Bearer $(gcloud auth print-access-token)" -H "Content-Type: application/json" https://alloydb.googleapis.com/v1alpha/projects/ PROJECT ID /locations/ LOCATION ID /clusters/ CLUSTER ID /instances?instance id= INSTANCE ID -d @instance request.json Clone an active cluster To create a clone of an active cluster, containing a copy of all the source cluster's data and running in the same region, perform a point-in-time recovery on that cluster .

### Scale an instance \_|\_ AlloyDB for PostgreSQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/alloydb/docs/instance-read-pool-scale](https://docs.cloud.google.com/alloydb/docs/instance-read-pool-scale)
- Source ID: `site-docs-root`
- Final score: 159
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Home Documentation Databases AlloyDB for PostgreSQL Guides Send feedback Scale an instance Stay organized with collections Save and categorize content based on your preferences.
- Create a read pool instance with a schedule-based policy To create a read pool instance with a schedule-based automatic scaling policy that defines a minimum number of nodes for a specific time window, run the following command: Note: If you have an existing autoscaling policy that has --autoscaler-max-node-count set , then this becomes an optional field. gcloud beta alloydb instances create INSTANCE ID \ --instance-type = READ POOL \ --read-pool-node-count = NODE COUNT \ --region = REGION ID \ --cluster = CLUSTER ID \ --project = PROJECT ID \ --enable-autoscaler \ --autoscaler-max-node-count = MAX NODE COUNT \ --autoscaler-set-schedule = SCHEDULE NAME \ --autoscaler-schedule-cron-exp = CRON EXPRESSION \ --autoscaler-schedule-duration-seconds = DURATION SECONDS \ --autoscaler-schedule-time-zone = TIME ZONE \ --autoscaler-schedule-min-node-count = MIN NODE COUNT \ --autoscaler-schedule-description = " DESCRIPTION " { --cpu-count = CPU COUNT --machine-type = MACHINE TYPE } Replace the following: MAX NODE COUNT : the maximum number of nodes that the autoscaler can create in the read pool instance.
- Create a read pool instance with CPU and schedule-based policies To create a read pool instance with both CPU-based and schedule-based automatic scaling policies, run the following command: gcloud beta alloydb instances create INSTANCE ID \ --instance-type = READ POOL \ --read-pool-node-count = NODE COUNT \ --region = REGION ID \ --cluster = CLUSTER ID \ --project = PROJECT ID \ --enable-autoscaler \ --autoscaler-max-node-count = MAX NODE COUNT \ --autoscaler-target-cpu-usage = TARGET CPU USAGE \ --autoscaler-set-schedule = SCHEDULE NAME \ --autoscaler-schedule-cron-exp = CRON EXPRESSION \ --autoscaler-schedule-duration-seconds = DURATION SECONDS \ --autoscaler-schedule-time-zone = TIME ZONE \ --autoscaler-schedule-min-node-count = MIN NODE COUNT \ --autoscaler-schedule-description = " DESCRIPTION " { --cpu-count = CPU COUNT --machine-type = MACHINE TYPE } Replace TARGET CPU USAGE with the target CPU utilization for your read pool instance, expressed as a decimal value between 0.0 and 1.0.
- Create a read pool instance with a CPU-based policy To create a read pool instance with an automatic scaling policy based on a target CPU utilization, run the following command: gcloud beta alloydb instances create INSTANCE ID \ --instance-type = READ POOL \ --read-pool-node-count = NODE COUNT \ --region = REGION ID \ --cluster = CLUSTER ID \ --project = PROJECT ID \ --enable-autoscaler \ --autoscaler-max-node-count = MAX NODE COUNT \ --autoscaler-target-cpu-usage = TARGET CPU USAGE \ { --cpu-count = CPU COUNT --machine-type = MACHINE TYPE } Replace the following: INSTANCE ID : the ID of the read pool instance.

### "Create a read pool instance in a cluster \_|\_ AlloyDB for PostgreSQL \_\

- URL: [https://docs.cloud.google.com/alloydb/docs/instance-read-pool-create](https://docs.cloud.google.com/alloydb/docs/instance-read-pool-create)
- Source ID: `site-docs-root`
- Final score: 151
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Home Documentation Databases AlloyDB for PostgreSQL Guides Send feedback Create a read pool instance in a cluster Stay organized with collections Save and categorize content based on your preferences.
- This page describes how to create a read pool instance in an AlloyDB for PostgreSQL cluster.
- To enable managed connection pooling in your read pool instance, add the --enable-connection-pooling flag to the gcloud alloydb instances create command: gcloud alloydb instances create INSTANCE ID \ --instance-type = READ POOL \ --region = REGION ID \ --cluster = CLUSTER ID \ --cpu-count = CPU COUNT \ --machine-type = MACHINE TYPE \ --project = PROJECT ID \ --enable-connection-pooling To create a read pool instance for a public IP-enabled cluster, add the --assign-inbound-public-ip= ASSIGN IPV4 parameter. gcloud alloydb instances create INSTANCE ID \ --instance-type = READ POOL \ --region = REGION ID \ --cluster = CLUSTER ID \ --cpu-count = CPU COUNT \ --machine-type = MACHINE TYPE \ --project = PROJECT ID \ --assign-inbound-public-ip = ASSIGN IPV4 Optionally, you can pass the comma separated list of CIDR blocks, such as 64.233.160.0/16 to the --authorized-external-networks parameter to set authorized external networks on your instance.
- If only cpu count is provided, an N2 instance is created with the following specifications: 2: 2 vCPUs, 16 GB RAM 4: 4 vCPUs, 32 GB RAM 8: 8 vCPUs, 64 GB RAM 16: 16 vCPUs, 128 GB RAM 32: 32 vCPUs, 256 GB RAM 64: 64 vCPUs, 512 GB RAM 96: 96 vCPUs, 768 GB RAM 128: 128 vCPUs, 864 GB RAM If both machine type and cpu count are provided, the cpu count value must align with the number of vCPUs specified in the machine type .

