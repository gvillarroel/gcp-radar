---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T03:53:29.529Z"
product_name: "AlloyDB"
product_slug: "alloydb"
feature_name: "96 vCPU machine type"
feature_slug: "96-vcpu-machine-type"
latest_feature_date: "2023-08-16"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/alloydb/docs/instance-read-pool-scale"
  - "https://docs.cloud.google.com/alloydb/docs/choose-machine-type"
  - "https://docs.cloud.google.com/alloydb/docs/instance-read-pool-create"
keywords:
  - "96"
  - "vcpu"
  - "machine"
  - "type"
  - "alloydb"
  - "instance"
  - "configuration"
  - "adds"
---

# 96 vCPU machine type

Product: AlloyDB
Coverage: MEDIUM

## Step 02 Summary

AlloyDB instance machine-type configuration adds an option with 96 vCPUs and 768 GB of RAM per node.

## Extended Definition

AlloyDB instance machine-type configuration adds an option with 96 vCPUs and 768 GB of RAM per node.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/alloydb/docs/instance-read-pool-scale](https://docs.cloud.google.com/alloydb/docs/instance-read-pool-scale)
- [https://docs.cloud.google.com/alloydb/docs/choose-machine-type](https://docs.cloud.google.com/alloydb/docs/choose-machine-type)
- [https://docs.cloud.google.com/alloydb/docs/instance-read-pool-create](https://docs.cloud.google.com/alloydb/docs/instance-read-pool-create)

## Supporting Pages

### Scale an instance \_|\_ AlloyDB for PostgreSQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/alloydb/docs/instance-read-pool-scale](https://docs.cloud.google.com/alloydb/docs/instance-read-pool-scale)
- Source ID: `site-docs-root`
- Final score: 175
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Create a read pool instance with a schedule-based policy To create a read pool instance with a schedule-based automatic scaling policy that defines a minimum number of nodes for a specific time window, run the following command: Note: If you have an existing autoscaling policy that has --autoscaler-max-node-count set , then this becomes an optional field. gcloud beta alloydb instances create INSTANCE ID \ --instance-type = READ POOL \ --read-pool-node-count = NODE COUNT \ --region = REGION ID \ --cluster = CLUSTER ID \ --project = PROJECT ID \ --enable-autoscaler \ --autoscaler-max-node-count = MAX NODE COUNT \ --autoscaler-set-schedule = SCHEDULE NAME \ --autoscaler-schedule-cron-exp = CRON EXPRESSION \ --autoscaler-schedule-duration-seconds = DURATION SECONDS \ --autoscaler-schedule-time-zone = TIME ZONE \ --autoscaler-schedule-min-node-count = MIN NODE COUNT \ --autoscaler-schedule-description = " DESCRIPTION " { --cpu-count = CPU COUNT --machine-type = MACHINE TYPE } Replace the following: MAX NODE COUNT : the maximum number of nodes that the autoscaler can create in the read pool instance.
- Create a read pool instance with CPU and schedule-based policies To create a read pool instance with both CPU-based and schedule-based automatic scaling policies, run the following command: gcloud beta alloydb instances create INSTANCE ID \ --instance-type = READ POOL \ --read-pool-node-count = NODE COUNT \ --region = REGION ID \ --cluster = CLUSTER ID \ --project = PROJECT ID \ --enable-autoscaler \ --autoscaler-max-node-count = MAX NODE COUNT \ --autoscaler-target-cpu-usage = TARGET CPU USAGE \ --autoscaler-set-schedule = SCHEDULE NAME \ --autoscaler-schedule-cron-exp = CRON EXPRESSION \ --autoscaler-schedule-duration-seconds = DURATION SECONDS \ --autoscaler-schedule-time-zone = TIME ZONE \ --autoscaler-schedule-min-node-count = MIN NODE COUNT \ --autoscaler-schedule-description = " DESCRIPTION " { --cpu-count = CPU COUNT --machine-type = MACHINE TYPE } Replace TARGET CPU USAGE with the target CPU utilization for your read pool instance, expressed as a decimal value between 0.0 and 1.0.
- Create a read pool instance with a CPU-based policy To create a read pool instance with an automatic scaling policy based on a target CPU utilization, run the following command: gcloud beta alloydb instances create INSTANCE ID \ --instance-type = READ POOL \ --read-pool-node-count = NODE COUNT \ --region = REGION ID \ --cluster = CLUSTER ID \ --project = PROJECT ID \ --enable-autoscaler \ --autoscaler-max-node-count = MAX NODE COUNT \ --autoscaler-target-cpu-usage = TARGET CPU USAGE \ { --cpu-count = CPU COUNT --machine-type = MACHINE TYPE } Replace the following: INSTANCE ID : the ID of the read pool instance.
- Note: This approach is best suited for development environments because it lets you change the machine type more quickly, but it can result in longer instance downtime. gcloud beta alloydb instances update INSTANCE ID \ --cpu-count = CPU COUNT \ --machine-type = MACHINE TYPE \ --region = REGION ID \ --cluster = CLUSTER ID \ --project = PROJECT ID \ --update-mode = FORCE APPLY The instance experiences approximately one minute of downtime.

### "Choose an AlloyDB machine type \_|\_ AlloyDB for PostgreSQL \_|\_ Google\

- URL: [https://docs.cloud.google.com/alloydb/docs/choose-machine-type](https://docs.cloud.google.com/alloydb/docs/choose-machine-type)
- Source ID: `site-docs-reference-2`
- Final score: 167
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Machine type vCPUs Memory (GB) c4-highmem-4-lssd 4 32 GB RAM c4-highmem-8-lssd 8 64 GB RAM c4-highmem-16-lssd 16 128 GB RAM c4-highmem-24-lssd 24 192 GB RAM c4-highmem-32-lssd 32 256 GB RAM c4-highmem-48-lssd 48 384 GB RAM c4-highmem-96-lssd 96 768 GB RAM c4-highmem-144-lssd 144 1152 GB RAM c4-highmem-192-lssd 192 1536 GB RAM c4-highmem-288-lssd 288 2304 GB RAM Z3 standardlssd The following machine types are available for instances for the Z3 machine series.
- Machine type vCPUs Memory (GB) c4a-highmem-1 1 8 GB RAM c4a-highmem-2-lssd 2 16 GB RAM c4a-highmem-4-lssd 4 32 GB RAM c4a-highmem-8-lssd 8 64 GB RAM c4a-highmem-16-lssd 16 128 GB RAM c4a-highmem-32-lssd 32 256 GB RAM c4a-highmem-48-lssd 48 384 GB RAM c4a-highmem-64-lssd 64 512 GB RAM c4a-highmem-72-lssd 72 576 GB RAM C4 The following machine types are available for instances for the C4 machine series.
- Machine type vCPUs Memory (GB) n2-highmem-2 2 16 GB RAM n2-highmem-4 4 32 GB RAM n2-highmem-8 8 64 GB RAM n2-highmem-16 16 128 GB RAM n2-highmem-32 32 256 GB RAM n2-highmem-64 64 512 GB RAM n2-highmem-96 96 768 GB RAM n2-highmem-128 128 864 GB RAM C4A Axion-based The following machine types are available for instances for the C4A Axion-based machine series.
- Machine type vCPUs Memory (GB) z3-highmem-8-highlssd 8 64 GB RAM z3-highmem-16-highlssd 16 128 GB RAM z3-highmem-22-highlssd 22 176 GB RAM z3-highmem-32-highlssd 32 256 GB RAM z3-highmem-44-highlssd 44 352 GB RAM Regional availability methodology AlloyDB helps you deploy and scale high-availability database solutions wherever you need them.

### "Create a read pool instance in a cluster \_|\_ AlloyDB for PostgreSQL \_\

- URL: [https://docs.cloud.google.com/alloydb/docs/instance-read-pool-create](https://docs.cloud.google.com/alloydb/docs/instance-read-pool-create)
- Source ID: `site-docs-root`
- Final score: 155
- Re-rank relevance: N/A

Evidence snippets:
- To enable managed connection pooling in your read pool instance, add the --enable-connection-pooling flag to the gcloud alloydb instances create command: gcloud alloydb instances create INSTANCE ID \ --instance-type = READ POOL \ --region = REGION ID \ --cluster = CLUSTER ID \ --cpu-count = CPU COUNT \ --machine-type = MACHINE TYPE \ --project = PROJECT ID \ --enable-connection-pooling To create a read pool instance for a public IP-enabled cluster, add the --assign-inbound-public-ip= ASSIGN IPV4 parameter. gcloud alloydb instances create INSTANCE ID \ --instance-type = READ POOL \ --region = REGION ID \ --cluster = CLUSTER ID \ --cpu-count = CPU COUNT \ --machine-type = MACHINE TYPE \ --project = PROJECT ID \ --assign-inbound-public-ip = ASSIGN IPV4 Optionally, you can pass the comma separated list of CIDR blocks, such as 64.233.160.0/16 to the --authorized-external-networks parameter to set authorized external networks on your instance.
- If only cpu count is provided, an N2 instance is created with the following specifications: 2: 2 vCPUs, 16 GB RAM 4: 4 vCPUs, 32 GB RAM 8: 8 vCPUs, 64 GB RAM 16: 16 vCPUs, 128 GB RAM 32: 32 vCPUs, 256 GB RAM 64: 64 vCPUs, 512 GB RAM 96: 96 vCPUs, 768 GB RAM 128: 128 vCPUs, 864 GB RAM If both machine type and cpu count are provided, the cpu count value must align with the number of vCPUs specified in the machine type .
- Use the gcloud alloydb instances create command to create a read pool instance. gcloud alloydb instances create INSTANCE ID \ --instance-type = READ POOL \ --read-pool-node-count = NODE COUNT \ --region = REGION ID \ --cluster = CLUSTER ID \ --cpu-count = CPU COUNT \ --machine-type = MACHINE TYPE \ --project = PROJECT ID Replace the following: INSTANCE ID : The ID of the instance you are creating.
- For more information about using the C4A Axion-based machine series, including the 1 vCPU machine type, see Considerations when using the C4A Axion-based machine series .

