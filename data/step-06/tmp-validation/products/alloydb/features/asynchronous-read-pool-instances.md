---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:15:29.151Z"
product_name: "AlloyDB"
product_slug: "alloydb"
feature_name: "Asynchronous read pool instances"
feature_slug: "asynchronous-read-pool-instances"
latest_feature_date: "2024-04-08"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/alloydb/docs/instance-read-pool-create"
  - "https://docs.cloud.google.com/alloydb/docs/overview"
  - "https://docs.cloud.google.com/alloydb/docs/cluster-create"
keywords:
  - "asynchronous"
  - "creating"
  - "instances"
  - "supports"
  - "pool"
  - "read"
  - "omni"
---

# Asynchronous read pool instances

Product: AlloyDB
Coverage: MEDIUM

## Step 02 Summary

AlloyDB Omni supports creating asynchronous read pool instances.

## Extended Definition

AlloyDB Omni supports creating asynchronous read pool instances.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/alloydb/docs/instance-read-pool-create](https://docs.cloud.google.com/alloydb/docs/instance-read-pool-create)
- [https://docs.cloud.google.com/alloydb/docs/overview](https://docs.cloud.google.com/alloydb/docs/overview)
- [https://docs.cloud.google.com/alloydb/docs/cluster-create](https://docs.cloud.google.com/alloydb/docs/cluster-create)

## Supporting Pages

### "Create a read pool instance in a cluster \_|\_ AlloyDB for PostgreSQL \_\

- URL: [https://docs.cloud.google.com/alloydb/docs/instance-read-pool-create](https://docs.cloud.google.com/alloydb/docs/instance-read-pool-create)
- Source ID: `site-docs-root`
- Final score: 167
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Use the gcloud alloydb instances create command to create a read pool instance. gcloud alloydb instances create INSTANCE ID \ --instance-type = READ POOL \ --read-pool-node-count = NODE COUNT \ --region = REGION ID \ --cluster = CLUSTER ID \ --cpu-count = CPU COUNT \ --machine-type = MACHINE TYPE \ --project = PROJECT ID Replace the following: INSTANCE ID : The ID of the instance you are creating.
- To enable managed connection pooling in your read pool instance, add the --enable-connection-pooling flag to the gcloud alloydb instances create command: gcloud alloydb instances create INSTANCE ID \ --instance-type = READ POOL \ --region = REGION ID \ --cluster = CLUSTER ID \ --cpu-count = CPU COUNT \ --machine-type = MACHINE TYPE \ --project = PROJECT ID \ --enable-connection-pooling To create a read pool instance for a public IP-enabled cluster, add the --assign-inbound-public-ip= ASSIGN IPV4 parameter. gcloud alloydb instances create INSTANCE ID \ --instance-type = READ POOL \ --region = REGION ID \ --cluster = CLUSTER ID \ --cpu-count = CPU COUNT \ --machine-type = MACHINE TYPE \ --project = PROJECT ID \ --assign-inbound-public-ip = ASSIGN IPV4 Optionally, you can pass the comma separated list of CIDR blocks, such as 64.233.160.0/16 to the --authorized-external-networks parameter to set authorized external networks on your instance.
- Note: You can have a maximum of 20 nodes across all the read pool instances in a cluster.
- Note that you cannot have more than 20 nodes across all read pool instances in a cluster.

### AlloyDB overview \_|\_ AlloyDB for PostgreSQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/alloydb/docs/overview](https://docs.cloud.google.com/alloydb/docs/overview)
- Source ID: `site-api-reference`
- Final score: 142
- Re-rank relevance: N/A

Evidence snippets:
- The following diagram illustrates the AlloyDB resource hierarchy, featuring a cluster scaled with a primary instance and multiple load-balanced read pool instances: Cluster: a top-level resource that acts as a logical container for your databases, logs, and other metadata within a region.
- AlloyDB pricing varies based on your configuration settings and depends on the following factors: Instance resources: the machine type (number of vCPUs and amount of RAM) selected for your primary and read pool instances.
- Adding read pool instances containing at least two nodes creates further load-balanced, multi-zonal, high-availability access points to your data.
- During this process, primary instances typically experience less than a second of downtime, while read pools remain continuously available.

### "Create a cluster and its primary instance \_|\_ AlloyDB for PostgreSQL \_\

- URL: [https://docs.cloud.google.com/alloydb/docs/cluster-create](https://docs.cloud.google.com/alloydb/docs/cluster-create)
- Source ID: `site-docs-reference-2`
- Final score: 131
- Re-rank relevance: N/A

Evidence snippets:
- If you're not sure whether your new cluster needs read pool instances, choose one of the configurations with no read pools.
- You can add read pool instances to the cluster later, whenever needed.
- Create a primary instance To create a primary instance, use the gcloud alloydb instances create command. gcloud alloydb instances create INSTANCE ID \ --instance-type = PRIMARY \ --region = REGION ID \ --cluster = CLUSTER ID \ --project = PROJECT ID \ --cpu-count = CPU COUNT \ --machine-type = MACHINE TYPE \ --allowed-psc-projects = ALLOWED PROJECT LIST Replace the following: INSTANCE ID : the ID of the instance you are creating.
- What's next Create a read pool instance.

