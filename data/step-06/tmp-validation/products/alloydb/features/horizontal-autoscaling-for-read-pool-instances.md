---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:15:29.077Z"
product_name: "AlloyDB"
product_slug: "alloydb"
feature_name: "Horizontal autoscaling for read pool instances"
feature_slug: "horizontal-autoscaling-for-read-pool-instances"
latest_feature_date: "2025-11-20"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/alloydb/docs/instance-read-pool-scale"
  - "https://docs.cloud.google.com/alloydb/docs/instance-read-pool-create"
  - "https://docs.cloud.google.com/alloydb/docs/overview"
keywords:
  - "autoscaling"
  - "horizontal"
  - "scales"
  - "automatically"
  - "instances"
  - "pool"
  - "read"
---

# Horizontal autoscaling for read pool instances

Product: AlloyDB
Coverage: MEDIUM

## Step 02 Summary

Horizontal autoscaling for read pool instances automatically scales AlloyDB read pools to match workload demand.

## Extended Definition

Horizontal autoscaling for read pool instances automatically scales AlloyDB read pools to match workload demand.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/alloydb/docs/instance-read-pool-scale](https://docs.cloud.google.com/alloydb/docs/instance-read-pool-scale)
- [https://docs.cloud.google.com/alloydb/docs/instance-read-pool-create](https://docs.cloud.google.com/alloydb/docs/instance-read-pool-create)
- [https://docs.cloud.google.com/alloydb/docs/overview](https://docs.cloud.google.com/alloydb/docs/overview)

## Supporting Pages

### Scale an instance \_|\_ AlloyDB for PostgreSQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/alloydb/docs/instance-read-pool-scale](https://docs.cloud.google.com/alloydb/docs/instance-read-pool-scale)
- Source ID: `site-docs-root`
- Final score: 182
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Create a read pool instance with a schedule-based policy To create a read pool instance with a schedule-based automatic scaling policy that defines a minimum number of nodes for a specific time window, run the following command: Note: If you have an existing autoscaling policy that has --autoscaler-max-node-count set , then this becomes an optional field. gcloud beta alloydb instances create INSTANCE ID \ --instance-type = READ POOL \ --read-pool-node-count = NODE COUNT \ --region = REGION ID \ --cluster = CLUSTER ID \ --project = PROJECT ID \ --enable-autoscaler \ --autoscaler-max-node-count = MAX NODE COUNT \ --autoscaler-set-schedule = SCHEDULE NAME \ --autoscaler-schedule-cron-exp = CRON EXPRESSION \ --autoscaler-schedule-duration-seconds = DURATION SECONDS \ --autoscaler-schedule-time-zone = TIME ZONE \ --autoscaler-schedule-min-node-count = MIN NODE COUNT \ --autoscaler-schedule-description = " DESCRIPTION " { --cpu-count = CPU COUNT --machine-type = MACHINE TYPE } Replace the following: MAX NODE COUNT : the maximum number of nodes that the autoscaler can create in the read pool instance.
- This resets the read pool to its original node count before autoscaling was enabled. gcloud beta alloydb instances update INSTANCE ID \ --region = REGION ID \ --cluster = CLUSTER ID \ --project = PROJECT ID \ --no-enable-autoscaler Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Scaling type Method Automation Primary instances Read pool instances Vertical Changing machine type Manual Supported Supported Horizontal Changing node count Manual and automatic Not supported Supported Before you begin The Google Cloud project you are using must have been enabled to access AlloyDB .
- AlloyDB read pool autoscaling lets you automatically and adaptively change the number of read nodes based on real-time resource usage.

### "Create a read pool instance in a cluster \_|\_ AlloyDB for PostgreSQL \_\

- URL: [https://docs.cloud.google.com/alloydb/docs/instance-read-pool-create](https://docs.cloud.google.com/alloydb/docs/instance-read-pool-create)
- Source ID: `site-docs-root`
- Final score: 146
- Re-rank relevance: N/A

Evidence snippets:
- To enable managed connection pooling in your read pool instance, add the --enable-connection-pooling flag to the gcloud alloydb instances create command: gcloud alloydb instances create INSTANCE ID \ --instance-type = READ POOL \ --region = REGION ID \ --cluster = CLUSTER ID \ --cpu-count = CPU COUNT \ --machine-type = MACHINE TYPE \ --project = PROJECT ID \ --enable-connection-pooling To create a read pool instance for a public IP-enabled cluster, add the --assign-inbound-public-ip= ASSIGN IPV4 parameter. gcloud alloydb instances create INSTANCE ID \ --instance-type = READ POOL \ --region = REGION ID \ --cluster = CLUSTER ID \ --cpu-count = CPU COUNT \ --machine-type = MACHINE TYPE \ --project = PROJECT ID \ --assign-inbound-public-ip = ASSIGN IPV4 Optionally, you can pass the comma separated list of CIDR blocks, such as 64.233.160.0/16 to the --authorized-external-networks parameter to set authorized external networks on your instance.
- Use the gcloud alloydb instances create command to create a read pool instance. gcloud alloydb instances create INSTANCE ID \ --instance-type = READ POOL \ --read-pool-node-count = NODE COUNT \ --region = REGION ID \ --cluster = CLUSTER ID \ --cpu-count = CPU COUNT \ --machine-type = MACHINE TYPE \ --project = PROJECT ID Replace the following: INSTANCE ID : The ID of the instance you are creating.
- Note: You can have a maximum of 20 nodes across all the read pool instances in a cluster.
- Note that you cannot have more than 20 nodes across all read pool instances in a cluster.

### AlloyDB overview \_|\_ AlloyDB for PostgreSQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/alloydb/docs/overview](https://docs.cloud.google.com/alloydb/docs/overview)
- Source ID: `site-api-reference`
- Final score: 139
- Re-rank relevance: N/A

Evidence snippets:
- The following diagram illustrates the AlloyDB resource hierarchy, featuring a cluster scaled with a primary instance and multiple load-balanced read pool instances: Cluster: a top-level resource that acts as a logical container for your databases, logs, and other metadata within a region.
- AlloyDB pricing varies based on your configuration settings and depends on the following factors: Instance resources: the machine type (number of vCPUs and amount of RAM) selected for your primary and read pool instances.
- Adding read pool instances containing at least two nodes creates further load-balanced, multi-zonal, high-availability access points to your data.
- During this process, primary instances typically experience less than a second of downtime, while read pools remain continuously available.

