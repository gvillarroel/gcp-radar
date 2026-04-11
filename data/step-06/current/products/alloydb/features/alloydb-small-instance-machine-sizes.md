---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T20:07:37.655Z"
product_name: "AlloyDB"
product_slug: "alloydb"
feature_name: "AlloyDB Small Instance Machine Sizes"
feature_slug: "alloydb-small-instance-machine-sizes"
latest_feature_date: "2022-07-12"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/alloydb/docs/instance-read-pool-scale"
  - "https://docs.cloud.google.com/alloydb/docs/instance-read-pool-create"
keywords:
  - "minimum compute size"
  - "minimum machine size"
  - "small instance size"
  - "small AlloyDB instance"
  - "primary and read-pool scaling"
  - "16 GB RAM"
  - "2 vCPU AlloyDB"
  - "2 vCPUs"
---

# AlloyDB Small Instance Machine Sizes

Product: AlloyDB
Coverage: MEDIUM

## Step 02 Summary

Primary and read-pool instances can be created or scaled to a minimum machine size of 2 vCPUs and 16 GB of RAM.

## Extended Definition

AlloyDB for PostgreSQL documents N2 instance sizing options that start at a minimum of 2 vCPUs with 16 GB RAM, which is the smallest N2 machine size shown for both scaling and creating an instance. For read pool creation, if only the CPU count is specified, a value of 2 results in a 2 vCPU/16 GB RAM N2 configuration, and when both machine type and CPU count are provided they must align. Evidence for this minimum is explicit for read pool flows and the instance scaling reference, but not explicitly split out by primary vs. non-primary instance role in the provided excerpts.

## Evidence Summary

The cited AlloyDB docs list allowed N2 CPU/RAM mappings (including 2 vCPUs, 16 GB RAM as the smallest N2 entry) and, for read pool create, state the CPU-to-size mapping and alignment rule when machine type is also set.

## Source Links

- [https://docs.cloud.google.com/alloydb/docs/instance-read-pool-scale](https://docs.cloud.google.com/alloydb/docs/instance-read-pool-scale)
- [https://docs.cloud.google.com/alloydb/docs/instance-read-pool-create](https://docs.cloud.google.com/alloydb/docs/instance-read-pool-create)

## Supporting Pages

### Scale an instance \_|\_ AlloyDB for PostgreSQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/alloydb/docs/instance-read-pool-scale](https://docs.cloud.google.com/alloydb/docs/instance-read-pool-scale)
- Source ID: `site-docs-root`
- Final score: 26
- Re-rank relevance: WEAK
- Re-rank rationale: Only machine-type scaling options and vCPU counts are listed, but the page does not confirm a 2 vCPU/16 GB minimum sizing rule.

Evidence snippets:
- Valid values include the following: 2 : 2 vCPUs, 16 GB RAM 4 : 4 vCPUs, 32 GB RAM 8 : 8 vCPUs, 64 GB RAM 16 : 16 vCPUs, 128 GB RAM 32 : 32 vCPUs, 256 GB RAM 64 : 64 vCPUs, 512 GB RAM 96 : 96 vCPUs, 768 GB RAM 128 : 128 vCPUs, 864 GB RAM MACHINE TYPE : Optional.
- CPU COUNT : The number of N2 vCPUs that you want for the instance.
- CPU COUNT : The number of N2 vCPUs that you want for the instance.
- CPU COUNT : The number of N2 vCPUs that you want for the instance.

### "Create a read pool instance in a cluster \_|\_ AlloyDB for PostgreSQL \_\

- URL: [https://docs.cloud.google.com/alloydb/docs/instance-read-pool-create](https://docs.cloud.google.com/alloydb/docs/instance-read-pool-create)
- Source ID: `site-docs-root`
- Final score: 22
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- If only cpu count is provided, an N2 instance is created with the following specifications: 2: 2 vCPUs, 16 GB RAM 4: 4 vCPUs, 32 GB RAM 8: 8 vCPUs, 64 GB RAM 16: 16 vCPUs, 128 GB RAM 32: 32 vCPUs, 256 GB RAM 64: 64 vCPUs, 512 GB RAM 96: 96 vCPUs, 768 GB RAM 128: 128 vCPUs, 864 GB RAM If both machine type and cpu count are provided, the cpu count value must align with the number of vCPUs specified in the machine type .
- C4A supports 1, 2, 4, 8, 16, 32, 48, 64, and 72 vCPUs.

