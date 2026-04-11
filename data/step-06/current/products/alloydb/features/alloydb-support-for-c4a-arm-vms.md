---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T20:07:37.588Z"
product_name: "AlloyDB"
product_slug: "alloydb"
feature_name: "AlloyDB support for C4A Arm VMs"
feature_slug: "alloydb-support-for-c4a-arm-vms"
latest_feature_date: "2025-04-09"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/alloydb/docs/instance-read-pool-scale"
  - "https://docs.cloud.google.com/alloydb/docs/release-notes"
  - "https://docs.cloud.google.com/alloydb/docs/instance-read-pool-create"
keywords:
  - "Google Axiom processors"
  - "C4A predefined configurations"
  - "Arm VM support"
  - "1 to 72 vCPUs on C4A"
  - "Google Axiom"
  - "C4A Arm VMs"
  - "AlloyDB on C4A"
  - "C4A"
---

# AlloyDB support for C4A Arm VMs

Product: AlloyDB
Coverage: LOW

## Step 02 Summary

AlloyDB supports C4A Arm VMs on Google Axiom processors, with predefined configurations from 1 to 72 vCPUs, in Preview.

## Extended Definition

AlloyDB supports C4A Arm VMs on Google Axiom processors, with predefined configurations from 1 to 72 vCPUs, in Preview.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/alloydb/docs/instance-read-pool-scale](https://docs.cloud.google.com/alloydb/docs/instance-read-pool-scale)
- [https://docs.cloud.google.com/alloydb/docs/release-notes](https://docs.cloud.google.com/alloydb/docs/release-notes)
- [https://docs.cloud.google.com/alloydb/docs/instance-read-pool-create](https://docs.cloud.google.com/alloydb/docs/instance-read-pool-create)

## Supporting Pages

### Scale an instance \_|\_ AlloyDB for PostgreSQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/alloydb/docs/instance-read-pool-scale](https://docs.cloud.google.com/alloydb/docs/instance-read-pool-scale)
- Source ID: `site-docs-root`
- Final score: 48
- Re-rank relevance: STRONG
- Re-rank rationale: The doc explicitly states AlloyDB supports the C4A (Axion-based) machine series, which is the Arm-based VM family referenced by the feature.

Evidence snippets:
- For more information about using the C4A Axion-based machine series, including the 1 vCPU machine type, see Considerations when using the C4A Axion-based machine series .
- MACHINE TYPE : select from a list of supported machine-types such as n2-highmem-4 , c4-highmem-4-lssd , or c4a-highmem-4-lssd .
- MACHINE TYPE : select from a list of supported machine-types such as n2-highmem-4 , c4-highmem-4-lssd , or c4a-highmem-4-lssd .
- Select one of the following machine series: C4A (Google Axion-based machine series) N2 (x86-based machine series).

### AlloyDB for PostgreSQL release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/alloydb/docs/release-notes](https://docs.cloud.google.com/alloydb/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 36
- Re-rank relevance: N/A

Evidence snippets:
- September 11, 2025 Feature AlloyDB supports C4A Arm VMs on Google's custom-built Axion processors.
- Feature AlloyDB supports C4A Arm VMs on Google's custom-built Axiom processors.
- March 16, 2026 Feature AlloyDB now supports the 2 vCPU C4A machine type ( c4a-highmem-2-lssd ), which is powered by Google Axion, Google's custom Arm-based processor.
- C4A VMs are available as predefined configurations from 1, 4, 8, 16, 32, 48, 64, and 72 vCPUs, up to 576 GB of DDR5 memory.

### "Create a read pool instance in a cluster \_|\_ AlloyDB for PostgreSQL \_\

- URL: [https://docs.cloud.google.com/alloydb/docs/instance-read-pool-create](https://docs.cloud.google.com/alloydb/docs/instance-read-pool-create)
- Source ID: `site-docs-root`
- Final score: 24
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For more information about using the C4A Axion-based machine series, including the 1 vCPU machine type, see Considerations when using the C4A Axion-based machine series .
- MACHINE TYPE : Select from a list of supported machine-types such as n2-highmem-4 , c4-highmem-4-lssd , or c4a-highmem-4-lssd .
- Select one of the following machine series: C4A (Google Axion-based machine series) N2 (x86-based machine series).
- C4A supports 1, 2, 4, 8, 16, 32, 48, 64, and 72 vCPUs.

