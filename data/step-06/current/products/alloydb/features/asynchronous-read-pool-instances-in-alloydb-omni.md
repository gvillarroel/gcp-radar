---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:07:33.860Z"
product_name: "AlloyDB"
product_slug: "alloydb"
feature_name: "Asynchronous read pool instances in AlloyDB Omni"
feature_slug: "asynchronous-read-pool-instances-in-alloydb-omni"
latest_feature_date: "2024-04-08"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/alloydb/docs/instance-read-pool-create"
  - "https://docs.cloud.google.com/alloydb/docs/overview"
  - "https://docs.cloud.google.com/python/docs/reference/alloydb/latest/google.cloud.alloydb_v1.services.alloy_db_admin.AlloyDBAdminAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/alloydb/latest/google.cloud.alloydb_v1.services.alloy_db_admin.AlloyDBAdminClient"
keywords:
  - "asynchronous read pool instances"
  - "async read pool"
  - "read pool scaling"
  - "AlloyDB Omni read pool"
  - "read pool instance"
  - "read pool"
---

# Asynchronous read pool instances in AlloyDB Omni

Product: AlloyDB
Coverage: MEDIUM

## Step 02 Summary

AlloyDB Omni supports creating asynchronous read pool instances.

## Extended Definition

AlloyDB Omni supports creating asynchronous read pool instances.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/alloydb/docs/instance-read-pool-create](https://docs.cloud.google.com/alloydb/docs/instance-read-pool-create)
- [https://docs.cloud.google.com/alloydb/docs/overview](https://docs.cloud.google.com/alloydb/docs/overview)
- [https://docs.cloud.google.com/python/docs/reference/alloydb/latest/google.cloud.alloydb_v1.services.alloy_db_admin.AlloyDBAdminAsyncClient](https://docs.cloud.google.com/python/docs/reference/alloydb/latest/google.cloud.alloydb_v1.services.alloy_db_admin.AlloyDBAdminAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/alloydb/latest/google.cloud.alloydb_v1.services.alloy_db_admin.AlloyDBAdminClient](https://docs.cloud.google.com/python/docs/reference/alloydb/latest/google.cloud.alloydb_v1.services.alloy_db_admin.AlloyDBAdminClient)

## Supporting Pages

### "Create a read pool instance in a cluster \_|\_ AlloyDB for PostgreSQL \_\

- URL: [https://docs.cloud.google.com/alloydb/docs/instance-read-pool-create](https://docs.cloud.google.com/alloydb/docs/instance-read-pool-create)
- Source ID: `site-docs-root`
- Final score: 115
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To enable managed connection pooling in your read pool instance, add the --enable-connection-pooling flag to the gcloud alloydb instances create command: gcloud alloydb instances create INSTANCE ID \ --instance-type = READ POOL \ --region = REGION ID \ --cluster = CLUSTER ID \ --cpu-count = CPU COUNT \ --machine-type = MACHINE TYPE \ --project = PROJECT ID \ --enable-connection-pooling To create a read pool instance for a public IP-enabled cluster, add the --assign-inbound-public-ip= ASSIGN IPV4 parameter. gcloud alloydb instances create INSTANCE ID \ --instance-type = READ POOL \ --region = REGION ID \ --cluster = CLUSTER ID \ --cpu-count = CPU COUNT \ --machine-type = MACHINE TYPE \ --project = PROJECT ID \ --assign-inbound-public-ip = ASSIGN IPV4 Optionally, you can pass the comma separated list of CIDR blocks, such as 64.233.160.0/16 to the --authorized-external-networks parameter to set authorized external networks on your instance.
- Use the gcloud alloydb instances create command to create a read pool instance. gcloud alloydb instances create INSTANCE ID \ --instance-type = READ POOL \ --read-pool-node-count = NODE COUNT \ --region = REGION ID \ --cluster = CLUSTER ID \ --cpu-count = CPU COUNT \ --machine-type = MACHINE TYPE \ --project = PROJECT ID Replace the following: INSTANCE ID : The ID of the instance you are creating.
- To create a read pool instance for a Private Service Connect-enabled cluster, add the --allowed-psc-projects flag to set a comma separated list of project IDs or project numbers: The comma-separated list of project IDs or project numbers that you want to allow access to the instance—for example, my-project-1 , 12345 , my-project-n .
- Home Documentation Databases AlloyDB for PostgreSQL Guides Send feedback Create a read pool instance in a cluster Stay organized with collections Save and categorize content based on your preferences.

### AlloyDB overview \_|\_ AlloyDB for PostgreSQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/alloydb/docs/overview](https://docs.cloud.google.com/alloydb/docs/overview)
- Source ID: `site-api-reference`
- Final score: 85
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
- Final score: 84
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The primary instance should exist before any read pool instance is created.
- It can include a primary instance and one or more read pool instances.
- It can include a primary instance and one or more read pool instances.
- It can include a primary instance and one or more read pool instances.

### "Class AlloyDBAdminClient (0.7.0) \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/alloydb/latest/google.cloud.alloydb_v1.services.alloy_db_admin.AlloyDBAdminClient](https://docs.cloud.google.com/python/docs/reference/alloydb/latest/google.cloud.alloydb_v1.services.alloy_db_admin.AlloyDBAdminClient)
- Source ID: `site-python-reference`
- Final score: 84
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The primary instance should exist before any read pool instance is created.
- It can include a primary instance and one or more read pool instances.
- It can include a primary instance and one or more read pool instances.
- It can include a primary instance and one or more read pool instances.

