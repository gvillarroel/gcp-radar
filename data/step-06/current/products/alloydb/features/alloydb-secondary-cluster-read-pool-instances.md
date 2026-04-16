---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:07:33.878Z"
product_name: "AlloyDB"
product_slug: "alloydb"
feature_name: "AlloyDB secondary cluster read pool instances"
feature_slug: "alloydb-secondary-cluster-read-pool-instances"
latest_feature_date: "2023-09-28"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/alloydb/docs/instance-read-pool-scale"
  - "https://docs.cloud.google.com/alloydb/docs/instance-read-pool-create"
  - "https://docs.cloud.google.com/alloydb/docs/overview"
  - "https://docs.cloud.google.com/python/docs/reference/alloydb/latest/google.cloud.alloydb_v1.services.alloy_db_admin.AlloyDBAdminAsyncClient"
keywords:
  - "secondary cluster read pool instances"
  - "secondary cluster read pool"
  - "read pool instance type"
  - "secondary read pool"
  - "read pool instances"
  - "AlloyDB read pool"
  - "read pool"
---

# AlloyDB secondary cluster read pool instances

Product: AlloyDB
Coverage: MEDIUM

## Step 02 Summary

AlloyDB now allows secondary clusters to use read pool instances.

## Extended Definition

AlloyDB now allows secondary clusters to use read pool instances.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/alloydb/docs/instance-read-pool-scale](https://docs.cloud.google.com/alloydb/docs/instance-read-pool-scale)
- [https://docs.cloud.google.com/alloydb/docs/instance-read-pool-create](https://docs.cloud.google.com/alloydb/docs/instance-read-pool-create)
- [https://docs.cloud.google.com/alloydb/docs/overview](https://docs.cloud.google.com/alloydb/docs/overview)
- [https://docs.cloud.google.com/python/docs/reference/alloydb/latest/google.cloud.alloydb_v1.services.alloy_db_admin.AlloyDBAdminAsyncClient](https://docs.cloud.google.com/python/docs/reference/alloydb/latest/google.cloud.alloydb_v1.services.alloy_db_admin.AlloyDBAdminAsyncClient)

## Supporting Pages

### Scale an instance \_|\_ AlloyDB for PostgreSQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/alloydb/docs/instance-read-pool-scale](https://docs.cloud.google.com/alloydb/docs/instance-read-pool-scale)
- Source ID: `site-docs-root`
- Final score: 91
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Scaling type Method Automation Primary instances Read pool instances Vertical Changing machine type Manual Supported Supported Horizontal Changing node count Manual and automatic Not supported Supported Before you begin The Google Cloud project you are using must have been enabled to access AlloyDB .
- Scale an instance's machine type You can vertically scale both primary and read pool instances by changing the instance's machine type, which modifies its vCPU and RAM.
- AlloyDB read pool autoscaling lets you automatically and adaptively change the number of read nodes based on real-time resource usage.
- The total number of nodes across all read pool instances in a single cluster cannot exceed 20.

### "Create a read pool instance in a cluster \_|\_ AlloyDB for PostgreSQL \_\

- URL: [https://docs.cloud.google.com/alloydb/docs/instance-read-pool-create](https://docs.cloud.google.com/alloydb/docs/instance-read-pool-create)
- Source ID: `site-docs-root`
- Final score: 85
- Re-rank relevance: N/A

Evidence snippets:
- Note: You can have a maximum of 20 nodes across all the read pool instances in a cluster.
- Note that you cannot have more than 20 nodes across all read pool instances in a cluster.
- To enable managed connection pooling in your read pool instance, add the --enable-connection-pooling flag to the gcloud alloydb instances create command: gcloud alloydb instances create INSTANCE ID \ --instance-type = READ POOL \ --region = REGION ID \ --cluster = CLUSTER ID \ --cpu-count = CPU COUNT \ --machine-type = MACHINE TYPE \ --project = PROJECT ID \ --enable-connection-pooling To create a read pool instance for a public IP-enabled cluster, add the --assign-inbound-public-ip= ASSIGN IPV4 parameter. gcloud alloydb instances create INSTANCE ID \ --instance-type = READ POOL \ --region = REGION ID \ --cluster = CLUSTER ID \ --cpu-count = CPU COUNT \ --machine-type = MACHINE TYPE \ --project = PROJECT ID \ --assign-inbound-public-ip = ASSIGN IPV4 Optionally, you can pass the comma separated list of CIDR blocks, such as 64.233.160.0/16 to the --authorized-external-networks parameter to set authorized external networks on your instance.
- Use the gcloud alloydb instances create command to create a read pool instance. gcloud alloydb instances create INSTANCE ID \ --instance-type = READ POOL \ --read-pool-node-count = NODE COUNT \ --region = REGION ID \ --cluster = CLUSTER ID \ --cpu-count = CPU COUNT \ --machine-type = MACHINE TYPE \ --project = PROJECT ID Replace the following: INSTANCE ID : The ID of the instance you are creating.

### AlloyDB overview \_|\_ AlloyDB for PostgreSQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/alloydb/docs/overview](https://docs.cloud.google.com/alloydb/docs/overview)
- Source ID: `site-api-reference`
- Final score: 84
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following diagram illustrates the AlloyDB resource hierarchy, featuring a cluster scaled with a primary instance and multiple load-balanced read pool instances: Cluster: a top-level resource that acts as a logical container for your databases, logs, and other metadata within a region.
- AlloyDB pricing varies based on your configuration settings and depends on the following factors: Instance resources: the machine type (number of vCPUs and amount of RAM) selected for your primary and read pool instances.
- Adding read pool instances containing at least two nodes creates further load-balanced, multi-zonal, high-availability access points to your data.
- Whenever needed, you can promote a secondary cluster into a fully featured AlloyDB cluster with primary and read pool instances.

### "Class AlloyDBAdminAsyncClient (0.7.0) \_|\_ Python client libraries \_|\_\

- URL: [https://docs.cloud.google.com/python/docs/reference/alloydb/latest/google.cloud.alloydb_v1.services.alloy_db_admin.AlloyDBAdminAsyncClient](https://docs.cloud.google.com/python/docs/reference/alloydb/latest/google.cloud.alloydb_v1.services.alloy_db_admin.AlloyDBAdminAsyncClient)
- Source ID: `site-python-reference`
- Final score: 82
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- It can include a primary instance and one or more read pool instances.
- It can include a primary instance and one or more read pool instances.
- It can include a primary instance and one or more read pool instances.
- It can include a primary instance and one or more read pool instances.

