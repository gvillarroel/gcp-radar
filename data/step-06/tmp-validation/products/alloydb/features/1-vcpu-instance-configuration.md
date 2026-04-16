---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:15:29.108Z"
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
  - "configuration"
  - "memory"
  - "postgresql"
  - "vcpu"
  - "instance"
  - "supports"
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
- C4A virtual machines (VM) are available as predefined configurations for 1, 2, 4, 8, 16, 32, 48, 64, and 72 vCPUs, with up to 576 GB of Double Data Rate 5 (DDR5) memory.
- The preceding example creates an N2 instance with the following specifications: 2: 2 vCPUs, 16 GB RAM 4: 4 vCPUs, 32 GB RAM 8: 8 vCPUs, 64 GB RAM 16: 16 vCPUs, 128 GB RAM 32: 32 vCPUs, 256 GB RAM 64: 64 vCPUs, 512 GB RAM 96: 96 vCPUs, 768 GB RAM 128: 128 vCPUs, 864 GB RAM The following example shows how to create an instance for a machine type: machine config: { machine type : MACHINE TYPE , }, Replace MACHINE TYPE with a supported machine type such as n2-highmem-4 , c4-highmem-4-lssd , or c4a-highmem-4-lssd .
- If only cpu count is provided, an N2 instance is created with the following specifications: 2: 2 vCPUs, 16 GB RAM 4: 4 vCPUs, 32 GB RAM 8: 8 vCPUs, 64 GB RAM 16: 16 vCPUs, 128 GB RAM 32: 32 vCPUs, 256 GB RAM 64: 64 vCPUs, 512 GB RAM 96: 96 vCPUs, 768 GB RAM 128: 128 vCPUs, 864 GB RAM If both machine type and cpu count are provided, the cpu count value must align with the number of vCPUs specified in the machine type .
- To send your request, save the following request body in a file named instance request.json . { "instance type": "PRIMARY", "machine config": { "cpu count": " vCPU COUNT " } } Make the following replacement: VCPU COUNT : the number of visible CPU cores on the instance that you want to create.

### Scale an instance \_|\_ AlloyDB for PostgreSQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/alloydb/docs/instance-read-pool-scale](https://docs.cloud.google.com/alloydb/docs/instance-read-pool-scale)
- Source ID: `site-docs-root`
- Final score: 159
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Home Documentation Databases AlloyDB for PostgreSQL Guides Send feedback Scale an instance Stay organized with collections Save and categorize content based on your preferences.
- Scale an instance's machine type You can vertically scale both primary and read pool instances by changing the instance's machine type, which modifies its vCPU and RAM.
- After this period, the instance scales down to the number of nodes determined by other policies or its original configuration.
- CPU COUNT : The number of N2 vCPUs that you want for the instance.

### "Create a read pool instance in a cluster \_|\_ AlloyDB for PostgreSQL \_\

- URL: [https://docs.cloud.google.com/alloydb/docs/instance-read-pool-create](https://docs.cloud.google.com/alloydb/docs/instance-read-pool-create)
- Source ID: `site-docs-root`
- Final score: 151
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- If only cpu count is provided, an N2 instance is created with the following specifications: 2: 2 vCPUs, 16 GB RAM 4: 4 vCPUs, 32 GB RAM 8: 8 vCPUs, 64 GB RAM 16: 16 vCPUs, 128 GB RAM 32: 32 vCPUs, 256 GB RAM 64: 64 vCPUs, 512 GB RAM 96: 96 vCPUs, 768 GB RAM 128: 128 vCPUs, 864 GB RAM If both machine type and cpu count are provided, the cpu count value must align with the number of vCPUs specified in the machine type .
- Home Documentation Databases AlloyDB for PostgreSQL Guides Send feedback Create a read pool instance in a cluster Stay organized with collections Save and categorize content based on your preferences.
- This page describes how to create a read pool instance in an AlloyDB for PostgreSQL cluster.
- CPU COUNT : the number of vCPUs that you want for the instance.

