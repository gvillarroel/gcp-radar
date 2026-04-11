---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T20:07:37.588Z"
product_name: "AlloyDB"
product_slug: "alloydb"
feature_name: "AlloyDB for PostgreSQL 1 vCPU machine type"
feature_slug: "alloydb-for-postgresql-1-vcpu-machine-type"
latest_feature_date: "2025-04-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/alloydb/docs/release-notes"
  - "https://docs.cloud.google.com/alloydb/docs/instance-read-pool-scale"
keywords:
  - "small development tier"
  - "development environment sizing"
  - "AlloyDB for PostgreSQL instance size"
  - "8GB configuration"
  - "8 GB machine configuration"
  - "1 vCPU machine type"
  - "1 vCPU"
---

# AlloyDB for PostgreSQL 1 vCPU machine type

Product: AlloyDB
Coverage: MEDIUM

## Step 02 Summary

AlloyDB for PostgreSQL now supports a 1 vCPU, 8GB configuration suitable for development and sandbox environments, in Preview.

## Extended Definition

AlloyDB for PostgreSQL includes a 1 vCPU machine type as an instance sizing option, with dedicated documentation for operational considerations. The available snippets show this configuration is tied to the C4A Axion-based machine series and governed by region and limitation guidance. Because only references and links are provided, this definition reflects documented support, but not full rollout or feature-state details (for example, general availability vs. preview).

## Evidence Summary

The release notes page links to specific ‘Considerations when using the 1 vCPU machine type’ guidance, and the scaling guide references the 1 vCPU option within C4A Axion-based machine series documentation, confirming the machine type is a documented AlloyDB configuration.

## Source Links

- [https://docs.cloud.google.com/alloydb/docs/release-notes](https://docs.cloud.google.com/alloydb/docs/release-notes)
- [https://docs.cloud.google.com/alloydb/docs/instance-read-pool-scale](https://docs.cloud.google.com/alloydb/docs/instance-read-pool-scale)

## Supporting Pages

### AlloyDB for PostgreSQL release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/alloydb/docs/release-notes](https://docs.cloud.google.com/alloydb/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 26
- Re-rank relevance: N/A

Evidence snippets:
- For more information, see Considerations when using the 1 vCPU machine type .
- For information about 1 vCPU supported regions and limitations, see Considerations when using 1 vCPU .

### Scale an instance \_|\_ AlloyDB for PostgreSQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/alloydb/docs/instance-read-pool-scale](https://docs.cloud.google.com/alloydb/docs/instance-read-pool-scale)
- Source ID: `site-docs-root`
- Final score: 26
- Re-rank relevance: MODERATE
- Re-rank rationale: The page confirms C4A supports a 1 vCPU machine type, though it does not include the specific SKU, RAM size, or preview-status wording.

Evidence snippets:
- For more information about using the C4A Axion-based machine series, including the 1 vCPU machine type, see Considerations when using the C4A Axion-based machine series .

