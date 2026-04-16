---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:15:29.068Z"
product_name: "AlloyDB"
product_slug: "alloydb"
feature_name: "C4A 2 vCPU machine type support"
feature_slug: "c4a-2-vcpu-machine-type-support"
latest_feature_date: "2026-03-16"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/alloydb/docs/choose-machine-type"
  - "https://docs.cloud.google.com/alloydb/docs/instance-read-pool-scale"
  - "https://docs.cloud.google.com/alloydb/docs/cluster-create"
keywords:
  - "highmem"
  - "lssd"
  - "axion"
  - "type"
  - "machine"
  - "vcpu"
  - "adds"
---

# C4A 2 vCPU machine type support

Product: AlloyDB
Coverage: MEDIUM

## Step 02 Summary

C4A 2 vCPU machine type support adds the c4a-highmem-2-lssd Axion-based instance option for smaller AlloyDB deployments.

## Extended Definition

C4A 2 vCPU machine type support adds the c4a-highmem-2-lssd Axion-based instance option for smaller AlloyDB deployments.

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
- Final score: 216
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Machine type vCPUs Memory (GB) c4-highmem-4-lssd 4 32 GB RAM c4-highmem-8-lssd 8 64 GB RAM c4-highmem-16-lssd 16 128 GB RAM c4-highmem-24-lssd 24 192 GB RAM c4-highmem-32-lssd 32 256 GB RAM c4-highmem-48-lssd 48 384 GB RAM c4-highmem-96-lssd 96 768 GB RAM c4-highmem-144-lssd 144 1152 GB RAM c4-highmem-192-lssd 192 1536 GB RAM c4-highmem-288-lssd 288 2304 GB RAM Z3 standardlssd The following machine types are available for instances for the Z3 machine series.
- Machine type vCPUs Memory (GB) c4a-highmem-1 1 8 GB RAM c4a-highmem-2-lssd 2 16 GB RAM c4a-highmem-4-lssd 4 32 GB RAM c4a-highmem-8-lssd 8 64 GB RAM c4a-highmem-16-lssd 16 128 GB RAM c4a-highmem-32-lssd 32 256 GB RAM c4a-highmem-48-lssd 48 384 GB RAM c4a-highmem-64-lssd 64 512 GB RAM c4a-highmem-72-lssd 72 576 GB RAM C4 The following machine types are available for instances for the C4 machine series.
- Machine type vCPUs Memory (GB) n2-highmem-2 2 16 GB RAM n2-highmem-4 4 32 GB RAM n2-highmem-8 8 64 GB RAM n2-highmem-16 16 128 GB RAM n2-highmem-32 32 256 GB RAM n2-highmem-64 64 512 GB RAM n2-highmem-96 96 768 GB RAM n2-highmem-128 128 864 GB RAM C4A Axion-based The following machine types are available for instances for the C4A Axion-based machine series.
- Machine type vCPUs Memory (GB) z3-highmem-8-highlssd 8 64 GB RAM z3-highmem-16-highlssd 16 128 GB RAM z3-highmem-22-highlssd 22 176 GB RAM z3-highmem-32-highlssd 32 256 GB RAM z3-highmem-44-highlssd 44 352 GB RAM Regional availability methodology AlloyDB helps you deploy and scale high-availability database solutions wherever you need them.

### Scale an instance \_|\_ AlloyDB for PostgreSQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/alloydb/docs/instance-read-pool-scale](https://docs.cloud.google.com/alloydb/docs/instance-read-pool-scale)
- Source ID: `site-docs-root`
- Final score: 168
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For more information about using the C4A Axion-based machine series, including the 1 vCPU machine type, see Considerations when using the C4A Axion-based machine series .
- MACHINE TYPE : select from a list of supported machine-types such as n2-highmem-4 , c4-highmem-4-lssd , or c4a-highmem-4-lssd .
- MACHINE TYPE : select from a list of supported machine-types such as n2-highmem-4 , c4-highmem-4-lssd , or c4a-highmem-4-lssd .
- Select from a list of supported machine-types such as n2-highmem-4 , c4-highmem-4-lssd , or c4a-highmem-4-lssd .

### "Create a cluster and its primary instance \_|\_ AlloyDB for PostgreSQL \_\

- URL: [https://docs.cloud.google.com/alloydb/docs/cluster-create](https://docs.cloud.google.com/alloydb/docs/cluster-create)
- Source ID: `site-docs-reference-2`
- Final score: 164
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The preceding example creates an N2 instance with the following specifications: 2: 2 vCPUs, 16 GB RAM 4: 4 vCPUs, 32 GB RAM 8: 8 vCPUs, 64 GB RAM 16: 16 vCPUs, 128 GB RAM 32: 32 vCPUs, 256 GB RAM 64: 64 vCPUs, 512 GB RAM 96: 96 vCPUs, 768 GB RAM 128: 128 vCPUs, 864 GB RAM The following example shows how to create an instance for a machine type: machine config: { machine type : MACHINE TYPE , }, Replace MACHINE TYPE with a supported machine type such as n2-highmem-4 , c4-highmem-4-lssd , or c4a-highmem-4-lssd .
- For more information about using C4A Axion-based machine series, including the 1 vCPU machine type see Considerations when using the C4A Axion-based machine series .
- For a list of other supported machine-types such as n2-highmem-4 , c4-highmem-4-lssd , or c4a-highmem-4-lssd , see Choose an AlloyDB machine type.
- MACHINE TYPE : Select from a list of supported machine-types such as n2-highmem-4 , c4-highmem-4-lssd , or c4a-highmem-4-lssd .

