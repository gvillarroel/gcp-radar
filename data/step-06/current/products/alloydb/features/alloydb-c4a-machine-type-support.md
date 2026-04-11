---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T20:07:37.561Z"
product_name: "AlloyDB"
product_slug: "alloydb"
feature_name: "AlloyDB C4A machine type support"
feature_slug: "alloydb-c4a-machine-type-support"
latest_feature_date: "2026-03-16"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/alloydb/docs/instance-read-pool-scale"
  - "https://docs.cloud.google.com/alloydb/docs/release-notes"
  - "https://docs.cloud.google.com/alloydb/docs/instance-read-pool-create"
keywords:
  - "c4a-highmem-2-lssd"
  - "Axion machine type"
  - "C4A machine type"
  - "Arm-based instances"
  - "AlloyDB C4A"
  - "2 vCPU"
  - "c4a"
  - "C4A"
---

# AlloyDB C4A machine type support

Product: AlloyDB
Coverage: LOW

## Step 02 Summary

AlloyDB now supports the 2 vCPU c4a-highmem-2-lssd Axion machine type for greater scaling flexibility on Arm-based instances.

## Extended Definition

AlloyDB now supports the 2 vCPU c4a-highmem-2-lssd Axion machine type for greater scaling flexibility on Arm-based instances.

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
- Final score: 68
- Re-rank relevance: STRONG
- Re-rank rationale: The page explicitly documents scaling by machine type and lists C4A (Axion-based) as a selectable machine series with supported vCPU ranges.

Evidence snippets:
- C4A supports 1, 2, 4, 8, 16, 32, 48, 64, and 72 vCPUs.
- For more information about using the C4A Axion-based machine series, including the 1 vCPU machine type, see Considerations when using the C4A Axion-based machine series .
- MACHINE TYPE : select from a list of supported machine-types such as n2-highmem-4 , c4-highmem-4-lssd , or c4a-highmem-4-lssd .
- MACHINE TYPE : select from a list of supported machine-types such as n2-highmem-4 , c4-highmem-4-lssd , or c4a-highmem-4-lssd .

### AlloyDB for PostgreSQL release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/alloydb/docs/release-notes](https://docs.cloud.google.com/alloydb/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 54
- Re-rank relevance: N/A

Evidence snippets:
- March 16, 2026 Feature AlloyDB now supports the 2 vCPU C4A machine type ( c4a-highmem-2-lssd ), which is powered by Google Axion, Google's custom Arm-based processor.
- C4A VMs are available as predefined configurations from 1, 4, 8, 16, 32, 48, 64, and 72 vCPUs, up to 576 GB of DDR5 memory.
- C4A VMs are available as predefined configurations from 1, 4, 8, 16, 32, 48, 64, and 72 vCPUs, up to 576 GB of DDR5 memory.
- September 11, 2025 Feature AlloyDB supports C4A Arm VMs on Google's custom-built Axion processors.

### "Create a read pool instance in a cluster \_|\_ AlloyDB for PostgreSQL \_\

- URL: [https://docs.cloud.google.com/alloydb/docs/instance-read-pool-create](https://docs.cloud.google.com/alloydb/docs/instance-read-pool-create)
- Source ID: `site-docs-root`
- Final score: 36
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- C4A supports 1, 2, 4, 8, 16, 32, 48, 64, and 72 vCPUs.
- For more information about using the C4A Axion-based machine series, including the 1 vCPU machine type, see Considerations when using the C4A Axion-based machine series .
- MACHINE TYPE : Select from a list of supported machine-types such as n2-highmem-4 , c4-highmem-4-lssd , or c4a-highmem-4-lssd .
- Select one of the following machine series: C4A (Google Axion-based machine series) N2 (x86-based machine series).

